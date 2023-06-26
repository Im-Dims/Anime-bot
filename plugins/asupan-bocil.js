import fetch from 'node-fetch'
let handler = async(m, { conn, usedPrefix, command }) => {
  let res = await fetch('https://raw.githubusercontent.com/binjaicity/warga62/master/bocil.json')
  //if (!res.ok) throw await res.json()
  let asup = await res.json()
  let json = asup[Math.floor(Math.random() * asup.length)]
  //if (!json.url) throw 'Error!'
  conn.sendFile(m.chat, json.url, 'mp4', command, m)
}
handler.help = ['bocil']
handler.tags = ['asupan']
handler.limit = true
handler.command = /^(bocil)$/i
//MADE IN ERPAN 1140 BERKOLABORASI DENGAN BTS
export default handler
