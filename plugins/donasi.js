let handler = async (m, { conn, usedPrefix: _p, __dirname, text, command }) => {
  let don = 'media/qris.jpg'
  let cap = `▷ Donasi ◁
• Pulsa: ${global.ppulsa}
• Dana: ${global.pdana}
• OVO: ${global.povo}

▲ Donasi juga kepadah pembuat script bot ini 085212649276

Semoga Anda diberikan kemudahan rezeki dan dilipatgandakan rezeki Anda.`
conn.sendMessage(m.chat, {
text: cap,
contextInfo: {
externalAdReply: {
title: v,
body: 'Donasi',
thumbnailUrl: donasi,
mediaType: 1,
renderLargerThumbnail: true
}}}, { quoted: m}) 
}

handler.help = ['donasi'];
handler.tags = ['info'];
handler.command = /^(donasi)$/i;

export default handler;