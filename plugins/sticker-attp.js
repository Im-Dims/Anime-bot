import { sticker } from '../lib/sticker.js'
let handler = async (m, { conn, text, usedPrefix, command }) => {
    let teks = text ? text : m.quoted && m.quoted.text ? m.quoted.text : m.text
    if (!text) throw 'Enter Text'
   await conn.sendMessage(m.chat, { react: { text: "⏳",key: m.key,}})  
     m.reply(md)
    let stiker = await sticker(null, global.API('https://saipulanuar.ga/api/maker/', 'attp3?text', { file: '', text: teks }), global.packname, global.author)
    if (stiker) return conn.sendFile(m.chat, stiker, 'sticker.webp', '', m)
    throw stiker.toString()
}
handler.help = ['attp <teks>']
handler.tags = ['sticker']
handler.command = /^attp$/i
handler.limit = true
export default handler