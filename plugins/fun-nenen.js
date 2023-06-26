let handler = async (m, { conn, usedPrefix, text, args, command }) => {
  if (command == 'nenen') {
    if (!text) throw `Masukkan query!`;
    let message = `NENEN NENEN KEPENGEN NENEN SAMA ${text}. TETEK GEDE NAN KENCANG MILIK ${text} MEMBUATKU KEPENGEN NENEN. DIBALUT PAKAIAN KETAT YANG ADUHAI CROOOOTOTOTOTOTOT ANJING SANGE GUA BANGSAT. ${text}, PLIS DENGERIN BAIK BAIK. TOLONG BUKA BAJU SEBENTAR SAJA PLISSS TOLOOONG BANGET, BIARKAN MULUT KERINGKU BISA MENGECAP NENEN ${text}. BIARKAN AKU MENGENYOT NENENMU ${text}. AKU RELA NGASIH SESEMBAHAN APA AJA BERAPAPUN ITU DUIT YANG AKU BAKAR KHUSUS TERKHUSUS BUATMU. TAPI TOLOOOONG BANGET BUKA BAJUMU AKU MAU NENEN. NENEN NENEEEEN NENEN ${text} WANGIIII`;
    m.reply(message, null, m.mentioned ? { mentions: [m.mentioned[0]] } : {});
  } else if (command == 'lastanime') {
    try {
      let response = await fetch('https://api.jikan.moe/v3/top/anime/1');
      let data = await response.json();
      let anime = data.top[0];
      let message = `Anime terakhir yang rilis adalah ${anime.title} dengan score ${anime.score}.\nDeskripsi: ${anime.synopsis}\nLink: ${anime.url}`;
      m.reply(message);
    } catch (err) {
      console.error(err);
      m.reply('Terjadi kesalahan saat mengambil data anime');
    }
  }
};

handler.command = handler.help = ['nenen'];
handler.tags = ['fun'];
handler.limit = true;

export default handler;
