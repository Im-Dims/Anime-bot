import fetch from 'node-fetch'
let handler = async (m, { conn, args }) => {
  let response = args.join(' ').split('|')
  if (!args[0]) throw '🚩 Enter Text'
  m.reply(md)
  let res = `https://api.neoxr.my.id/api/slice?text=${response[0]}&apikey=${api}`
  conn.sendFile(m.chat, res, 'slice.jpg', `🚩 It is finished`, m, false)
}
handler.help = ['slice'].map(v => v + ' <text>')
handler.tags = ['maker']
handler.command = /^(slice)$/i
handler.register = true
//buatan zyko-md, jgn hapus atuh 😊
export default handler

