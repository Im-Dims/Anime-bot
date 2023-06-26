import { createHash } from 'crypto'

let Reg = /\|?(.*)([.|] *?)([0-9]*)$/i
let handler = async function (m, { conn, text, usedPrefix }) {
  let sn = createHash('md5').update(m.sender).digest('hex')

conn.sendMessage(m.chat, {
text: `*Serial number kamu adalah :* ${sn}`,
contextInfo: {
externalAdReply: {
title: '——— 「 Anime Bot 」 ———',
thumbnailUrl: "https://telegra.ph/file/55af798e5460df625c7c2.jpg",
sourceUrl: sgc,
mediaType: 1,
renderLargerThumbnail: true
}}}, { quoted: m})
}

handler.help = ['ceksn']
handler.tags = ['xp']
handler.command = /^(ceksn)$/i
handler.register = true
export default handler