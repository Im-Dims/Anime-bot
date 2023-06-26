import fetch from 'node-fetch'
import uploadImage from '../lib/uploadImage.js'

let handler = async (m, { conn, usedPrefix, command, text }) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let name = await conn.getName(who)
let q = m.quoted ? m.quoted : m
let mime = (q.msg || q).mimetype || ''
if (!mime) throw 'Ummm.. Gambarnya??'
m.reply('Tunggu Sebentar...')
let media = await q.download()
let url = await uploadImage(media)
let hasil = await (await fetch(`https://api-xcoders.site/api/maker/toonify?url=${url}&id=2&apikey=Frieren`)).buffer()
await conn.sendFile(m.chat, hasil, '', 'Sudah Jadi ><', m)
	
}
handler.help = ['jadianime']
handler.tags = ['anime', 'ai']
handler.command = /^(jadianime|jadiwibu)$/i
handler.limit = true

export default handler