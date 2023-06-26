import { createHash } from 'crypto'
import fetch from 'node-fetch'
let Reg = /\|?(.*)([.|] *?)([0-9]*)$/i

let handler = async function (m, { text, usedPrefix, command }) {
function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}
let namanya = conn.getName(m.sender)
let md = `Hai ${namanya}, untuk mendaftar silahkan gunakan perintah ${usedPrefix}${command} namakamu.umur`

  let user = global.db.data.users[m.sender]
  if (user.registered === true) throw `Kamu sudah terdaftar\nMau daftar ulang? *${usedPrefix}unreg <Sn>*`
  if (!Reg.test(text)) return conn.sendMessage(m.chat, {
text: md,
contextInfo: {
externalAdReply: {
title: '——— 「 Not registered 」 ———',
thumbnailUrl: "https://telegra.ph/file/975b07343239240e5a0be.jpg",
sourceUrl: sgc,
mediaType: 1,
renderLargerThumbnail: true
}}}, { quoted: m}) 
  let [_, name, splitter, age] = text.match(Reg)
  if (!name) throw 'Nama tidak boleh kosong'
  if (!age) throw 'Umur tidak boleh kosong'
  age = parseInt(age)
  if (age > 30) throw 'WOI TUA (。-`ω´-)'
  if (age < 5) throw 'Halah dasar bocil'
  user.name = name.trim()
  user.age = age
  user.regTime = + new Date
  user.registered = true
  let sn = createHash('md5').update(m.sender).digest('hex')
  let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : m.fromMe ? conn.user.jid : m.sender
  let caption = `
╭─「 Status 」
│❐ Nama: ${name}
│❐ Umur: ${age} tahun
│❐ Sn: ${sn}
╰────────────┈ ⳹`  
await conn.sendMessage(m.chat, {
        react: {
            text: "✅",
            key: m.key,
        }
    })
    
conn.sendMessage(m.chat, {
text: caption,
contextInfo: {
externalAdReply: {
title: '——— 「 Register Success 」 ———',
thumbnailUrl: "https://telegra.ph/file/975b07343239240e5a0be.jpg",
sourceUrl: sgc,
mediaType: 1,
renderLargerThumbnail: true
}}}, { quoted: m}) 
}
handler.help = ['daftar', 'register'].map(v => v + ' <nama>.<umur>')
handler.tags = ['xp']

handler.command = /^(daftar|verify|reg(ister)?)$/i

export default handler
