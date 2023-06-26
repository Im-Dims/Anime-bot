import fetch from 'node-fetch'
import moment from 'moment-timezone'

let handler = async (m, { conn, usedPrefix, args, command, text }) => {
  if (!args[0]) throw `Ummhh... Urlnya??`
conn.sendMessage(m.chat, { react: { text: "⏳",key: m.key,}}) 
  let res = await fetch(`https://api.neoxr.my.id/api/ig?url=${args[0]}&apikey=${api}`)
  if (res.status != 200) throw `Terjadi kesalahan. Status: ${res.status}`
  let json = await res.json()

  conn.sendFile(m.chat, json.data[0].url, 'instagram.mp4', footer, m)
}
handler.help = ['igdl', 'instagram']
handler.tags = ['downloader']
handler.command = /^(igdl|instagram|ig)$/i
handler.limit = true
export default handler