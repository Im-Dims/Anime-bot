import {
  promises,
  readFileSync
} from "fs"
import {
  join
} from "path"
import {
  xpRange
} from "../lib/levelling.js"
import moment from "moment-timezone"
import os from "os"
import fs from "fs"
import fetch from "node-fetch"

let emot = `${pickRandom(['⫹⫺', 'あ', '⎔', '✦', '⭑', 'ᯬ', '⭔', '◉', '⬟', '▢', '᭻', '»', '〆', '々', '☆', '✗', '❏', '⚝', '♪'])}`
   let tags = {
   'main': '*Main*',
   'ai': '*Ai Feature*',
   'asupan': '*Asupan*',
   'anime': '*Anime*',
   'admin': '*Admin*',
   'audio': '*Audio*',
   'absen': '*Absen*',
   'advanced': '*Advanced*',
   'anonymous': '*Anonymous Chat*',
   'cerpen': '*Cerpen*',
   'downloader': '*Downloader*',
   'database': '*Database*',
   'ephoto': '*Ephoto 360*',
   'fun': '*Fun Menu*',
   'group': '*Group*',
   'game': '*Game*',
   'jadian': '*Game Jadian*',
   'host': '*Host*',
   'internet': '*Internet*',
   'image': '*Image*',
   'info': '*Info*',
   'kerang': '*Kerang Ajaib*',
   'menbalas': '*Menfess*',
   'maker': '*Maker Textpro*',
   'nulis': '*Nulis*',
   'news': '*News*',
   'owner': '*Owner Command*',
   'ownerstore': '*Owner Store*',
   'premium': '*Premium*',
   'quran': '*Al Qur\'an / Islam Menu*',
   'quotes': '*Quotes*',
   'randomfoto': '*Ramdom Foto*',
   'rpg': '*Rpg Game*',
   'sound': '*Sound*',
   'stalker': '*Stalker*',
   'sticker': '*Sticker*',
   'tools': '*Tools*',
   'vote': '*Voting*',
   'xp': '*Exp & Limit*',
   'gaada': '*No Category*',
}   
const defaultMenu = {
before: ` `.trimStart(),
header: '╔┈┈『 %category 』',
body: `╎${emot} %cmd %isPremium %islimit`,
footer: '╚┈┈┈┈┈┈┈┈┈⳹',
after: ``,
}

let handler = async (m, {
  conn,
  usedPrefix: _p,
  __dirname,
  args,
  command,
  usedPrefix
}) => {
try {
  let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
//  let name = await conn.getName(who)
  let names = await conn.getName(who)
  let imgr = flaaa.getRandom()
  await conn.sendMessage(m.chat, {
      react: {
          text: "⏳",
          key: m.key,
      }
  })  
//  let tags
 //  let teks = `${args[0]}`.toLowerCase()

      // DEFAULT MENU
      let dash = global.dashmenu
      let m1 = global.dmenut
      let m2 = global.dmenub
      let m3 = global.dmenuf
      let m4 = global.dmenub2

      // COMMAND MENU
      let cc = global.cmenut
      let c1 = global.cmenuh
      let c2 = global.cmenub
      let c3 = global.cmenuf
      let c4 = global.cmenua

      // LOGO L P
      let lprem = global.lopr
      let llim = global.lolm
      let tag = `@${m.sender.split("@")[0]}`

      /* Gobal */
      let glb = global.db.data.users
      let usrs = glb[m.sender]
      let wib = moment.tz("Asia/Jakarta").format("HH:mm:ss")
      let wibh = moment.tz("Asia/Makassar").format("HH")
      let wibm = moment.tz("Asia/Makassar").format("mm")
      let wibs = moment.tz("Asia/Makassar").format("ss")
      let wita = moment.tz("Asia/Makassar").format("HH:mm:ss")
      let waktuwita = `${wibh} H ${wibm} M ${wibs} S`

      /* Gambarnya */
      let hehe = `${pickRandom(['./media/menunya/menus_001.jpg', './media/menunya/menus_002.jpg', './media/menunya/menus_003.jpg', './media/menunya/menus_004.jpg', './media/menunya/menus_005.jpg', './media/menunya/menus_006.jpg', './media/menunya/menus_007.jpg'])}`

      /* Info Menu */
      let mode = global.opts["self"] ? "Private" : "Publik"
      let _package = JSON.parse(await promises.readFile(join(__dirname, "../package.json")).catch(_ => ({}))) || {}
      let {
          age,
          exp,
          limit,
          level,
          role,
          registered,
          money
      } = glb[m.sender]
      let {
          min,
          xp,
          max
      } = xpRange(level, global.multiplier)
      let name = await conn.getName(m.sender)
      let premium = glb[m.sender].premiumTime
      let limitnya = `${global.db.data.users[who].limit}`
      let prems = `${premium > 0 ? "Premium": "Free"}`
      let linkuser = `https://wa.me/${m.sender.split("@")[0]}`
      let platform = os.platform()

      //-----------TIME---------
      let ucpn = `${ucapan()}`
      let d = new Date(new Date + 3600000)
      let locale = "id"
      // d.getTimeZoneOffset()
      // Offset -420 is 18.00
      // Offset    0 is  0.00
      // Offset  420 is  7.00
      let weton = ["Pahing", "Pon", "Wage", "Kliwon", "Legi"][Math.floor(d / 84600000) % 5]
      let week = d.toLocaleDateString(locale, {
          weekday: "long"
      })
      let date = d.toLocaleDateString(locale, {
          day: "numeric",
          month: "long",
          year: "numeric"
      })
      let dateIslamic = Intl.DateTimeFormat(locale + "-TN-u-ca-islamic", {
          day: "numeric",
          month: "long",
          year: "numeric"
      }).format(d)
      let time = d.toLocaleTimeString(locale, {
          hour: "numeric",
          minute: "numeric",
          second: "numeric"
      })
      let _uptime = process.uptime() * 1000
      let _muptime
      if (process.send) {
          process.send("uptime")
          _muptime = await new Promise(resolve => {
              process.once("message", resolve)
              setTimeout(resolve, 1000)
          }) * 1000
      }
      let muptime = clockString(_muptime)
      let uptime = clockString(_uptime)
      let _mpt
    if (process.send) {
      process.send('uptime')
      _mpt = await new Promise(resolve => {
        process.once('message', resolve)
        setTimeout(resolve, 1000)
      }) * 1000
    }
    let mpt = clockString(_mpt)
      let totalfeatures = Object.values(global.plugins).filter((v) => v.help && v.tags).length;
      let totalreg = Object.keys(glb).length
      let rtotalreg = Object.values(glb).filter(user => user.registered == true).length
      let help = Object.values(global.plugins).filter(plugin => !plugin.disabled).map(plugin => {
          return {
              help: Array.isArray(plugin.tags) ? plugin.help : [plugin.help],
              tags: Array.isArray(plugin.tags) ? plugin.tags : [plugin.tags],
              prefix: "customPrefix" in plugin,
              limit: plugin.limit,
              premium: plugin.premium,
              enabled: !plugin.disabled,
          }
      })
      let groups = {}
      for (let tag in tags) {
          groups[tag] = []
          for (let plugin of help)
              if (plugin.tags && plugin.tags.includes(tag))
                  if (plugin.help) groups[tag].push(plugin)
      }
      conn.menu = conn.menu ? conn.menu : {}
      let before = conn.menu.before || defaultMenu.before
      let header = conn.menu.header || defaultMenu.header
      let body = conn.menu.body || defaultMenu.body
      let footer = conn.menu.footer || defaultMenu.footer
      let after = conn.menu.after || (conn.user.jid == global.conn.user.jid ? "" : `Powered by https://wa.me/${global.conn.user.jid.split`@`[0]}`) + defaultMenu.after
      let _text = [
          before,
          ...Object.keys(tags).map(tag => {
              return header.replace(/%category/g, tags[tag]) + "\n" + [
                  ...help.filter(menu => menu.tags && menu.tags.includes(tag) && menu.help).map(menu => {
                      return menu.help.map(help => {
                          return body.replace(/%cmd/g, menu.prefix ? help : "%_p" + help)
                              .replace(/%islimit/g, menu.limit ? "Ⓛ" : "")
                              .replace(/%isPremium/g, menu.premium ? "🅟" : "")
                              .trim()
                      }).join("\n")
                  }),
                  footer
              ].join("\n")
          }),
          after
      ].join("\n")
      let text = typeof conn.menu == "string" ? conn.menu : typeof conn.menu == "object" ? _text : ""
      let md = fs.readFileSync('./thumbnail.jpg')
      let replace = {
          "%": "%",
          p: _p,
          uptime,
          muptime,
          me: conn.getName(conn.user.jid),
          npmname: _package.name,
          npmdesc: _package.description,
          version: _package.version,
          exp: exp - min,
          maxexp: xp,
          totalexp: exp,
          xp4levelup: max - exp,
          github: _package.homepage ? _package.homepage.url || _package.homepage : "[unknown github url]",
          tag,
          dash,
          m1,
          m2,
          m3,
          m4,
          cc,
          c1,
          c2,
          c3,
          c4,
          lprem,
          llim,
          ucpn,
          platform,
          wib,
          wita,
          mode,
          _p,
          money,
          age,
          tag,
          prems,
          level,
          limit,
          name,
          names,
          weton,
          week,
          date,
          dateIslamic,
          time,
          totalreg,
          totalfeatures,
          rtotalreg,
          role,
          readmore: readMore
      }
      text = text.replace(new RegExp(`%(${Object.keys(replace).sort((a, b) => b.length - a.length).join`|`})`, "g"), (_, name) => "" + replace[name])
      const pp = await conn.profilePictureUrl(conn.user.jid).catch(_ => "./src/avatar_contact.png")
      //FAKE TROLI

  const ftrol = {

      key : {
  
      remoteJid: 'status@broadcast',
  
      participant : '0@s.whatsapp.net'
  
      },
  
      message: {
  
      orderMessage: {
  
      itemCount : 2022,
  
      status: 1,
  
      surface : 1,
  
      message: `Hai Kak ${name}!`, 
  
      orderTitle: `▮Menu ▸`,
  
      thumbnail: await (await fetch(fla + 'Menu')).buffer(), //Gambar ini mah
  
      sellerJid: '0@s.whatsapp.net' 
  
      }
  
      }
  
      }


      //------------------< Main tampilan menu >----------------
let all = `
${ucapan()} ${name} San!

╔┈┈『 *Info user* 』
┆⫹⫺ *Nama:* ${name}
┆⫹⫺ *Nomor:* ${tag}
┆⫹⫺ *Link*: ${linkuser}
┆⫹⫺ *Registered:* ${registered ? 'Sudah daftar': 'Belum daftar'}
┆⫹⫺ *Status:* ${prems}
┆⫹⫺ *Limit:* ${limitnya}
┆⫹⫺ *Money:* 0
┆⫹⫺ *Role:* ${role}
┆⫹⫺ *Level:* ${level}
┆⫹⫺ *Exp:* ${exp}
┆⫹⫺ *Total Exp:* ${exp - min}
╠┈┈『 *Date and time* 』
┆⫹⫺ *Hari:* ${week} ${weton}
┆⫹⫺ *Waktu:* ${time}
┆⫹⫺ *Tanggal:* ${date}
┆⫹⫺ *Tanggal Islam:* ${dateIslamic}
╠┈┈『 *Bot info* 』
┆⫹⫺ *Name Bot:* ${titlebot}
┆⫹⫺ *Mode:* ${mode}
┆⫹⫺ *Platform:* ${platform}
┆⫹⫺ *Language:* Javascript
┆⫹⫺ *Runtime :* ${uptime}
┆⫹⫺ *Database :* ${totalreg} User
┖────────────┈ ⳹`
conn.sendMessage(m.chat, {
text: all + readMore + '\n\n' + text,
contextInfo: {
externalAdReply: {
title: 'Ini Menu??',
thumbnail: fs.readFileSync(`${hehe}`),
sourceUrl: sgc,
mediaType: 1,
renderLargerThumbnail: true
}}}, { quoted: m})
   
      await conn.sendMessage(m.chat, {
        react: {
            text: "⚡",
            key: m.key,
        }
    })
  } catch (e) {
      conn.reply(m.chat, "Maaf, menu sedang error", m)
      throw e
  }
}
handler.help = ['menu', '?']
handler.command = /^(menu|help|allmenu|all|\?)$/i
handler.register = true

handler.exp = 3

export default handler
//----------- FUNCTION -------

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

function clockString(ms) {
  let h = isNaN(ms) ? "--" : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? "--" : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? "--" : Math.floor(ms / 1000) % 60
  return [h, " H ", m, " M ", s, " S "].map(v => v.toString().padStart(2, 0)).join("")
}

function clockStringP(ms) {
  let ye = isNaN(ms) ? "--" : Math.floor(ms / 31104000000) % 10
  let mo = isNaN(ms) ? "--" : Math.floor(ms / 2592000000) % 12
  let d = isNaN(ms) ? "--" : Math.floor(ms / 86400000) % 30
  let h = isNaN(ms) ? "--" : Math.floor(ms / 3600000) % 24
  let m = isNaN(ms) ? "--" : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? "--" : Math.floor(ms / 1000) % 60
  return [ye, " *Years 🗓️*\n", mo, " *Month 🌙*\n", d, " *Days ☀️*\n", h, " *Hours 🕐*\n", m, " *Minute ⏰*\n", s, " *Second ⏱️*"].map(v => v.toString().padStart(2, 0)).join("")
}

function ucapan() {
  const time = moment.tz("Asia/Makassar").format("HH")
  let res = "Oyasumi"
  if (time >= 4) {
      res = "Ohayōu"
  }
  if (time >= 10) {
      res = "Ohayōu"
  }
  if (time >= 15) {
      res = "Oyasumi"
  }
  if (time >= 18) {
      res = "Oyasumi"
  }
  return res
}