import cheerio from 'cheerio'
import axios from 'axios'
import fetch from 'node-fetch'

async function xnxxsearch(query) {
  return new Promise((resolve, reject) => {
    const baseurl = 'https://www.xnxx.com';
    fetch(`${baseurl}/search/${query}/${Math.floor(Math.random() * 3) + 1}`, { method: 'get' })
      .then((res) => res.text())
      .then((res) => {
        let $ = cheerio.load(res, {
          xmlMode: false,
        });
        let titles = [];
        let urls = [];
        let descs = [];
        let results = [];
        $('div.mozaique').each(function (a, b) {
          $(b)
            .find('div.thumb')
            .each(function (c, d) {
              urls.push(baseurl + $(d).find('a').attr('href').replace('/THUMBNUM/', '/'));
            });
        });
        $('div.mozaique').each(function (a, b) {
          $(b)
            .find('div.thumb-under')
            .each(function (c, d) {
              descs.push($(d).find('p.metadata').text());
              $(d)
                .find('a')
                .each(function (e, f) {
                  titles.push($(f).attr('title'));
                });
            });
        });
        for (let i = 0; i < titles.length; i++) {
          results.push({
            title: titles[i],
            info: descs[i],
            link: urls[i],
          });
        }
        resolve({
          title: titles[0],
          info: descs[0],
          link: urls[0],
        });
      })
      .catch((err) => reject({ code: 503, status: false, result: err }));
  });
}

async function xnxxdl(URL) {
  return new Promise((resolve, reject) => {
    fetch(URL, { method: 'get' })
      .then((res) => res.text())
      .then((res) => {
        let $ = cheerio.load(res, {
          xmlMode: false,
        });
        const title = $('meta[property="og:title"]').attr('content');
        const duration = $('meta[property="og:duration"]').attr('content');
        const image = $('meta[property="og:image"]').attr('content');
        const videoType = $('meta[property="og:video:type"]').attr('content');
        const videoWidth = $('meta[property="og:video:width"]').attr('content');
        const videoHeight = $('meta[property="og:video:height"]').attr('content');
        const info = $('span.metadata').text();
        const videoScript = $('#video-player-bg > script:nth-child(6)').html();
        const files = {
          low: (videoScript.match('html5player.setVideoUrlLow\\(\'(.*?)\'\\);') || [])[1],
          high: videoScript.match('html5player.setVideoUrlHigh\\(\'(.*?)\'\\);' || [])[1],
          HLS: videoScript.match('html5player.setVideoHLS\\(\'(.*?)\'\\);' || [])[1],
          thumb: videoScript.match('html5player.setThumbUrl\\(\'(.*?)\'\\);' || [])[1],
          thumb69: videoScript.match('html5player.setThumbUrl169\\(\'(.*?)\'\\);' || [])[1],
          thumbSlide: videoScript.match('html5player.setThumbSlide\\(\'(.*?)\'\\);' || [])[1],
          thumbSlideBig: videoScript.match('html5player.setThumbSlideBig\\(\'(.*?)\'\\);' || [])[1],
        };
        resolve({
          title,
          URL,
          duration,
          image,
          videoType,
          videoWidth,
          videoHeight,
          info,
          files,
        });
      })
      .catch((err) => reject({ code: 503, status: false, result: err }));
  });
}



export {
xnxxsearch,
xnxxdl
}