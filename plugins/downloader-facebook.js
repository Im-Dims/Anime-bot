import fetch from 'node-fetch'
import api from 'hxz-api'
let handler = async (m, { conn, text, usedPrefix, command }) => {
  if (!text) throw `Ummhh... Urlnya??`
let f = await api.fbdown(text)
await conn.sendMessage(m.chat, { react: { text: "⏳",key: m.key,}
  })   
let hasil = `「 Fb Downloader 」`
conn.sendFile(m.chat, f.Normal_video, 'fbmp4', hasil, m)
}
handler.help = ['facebook'].map(v => v + ' <url>')
handler.command = /^((facebook|fb)(downloder|dl)?)$/i
export default handler