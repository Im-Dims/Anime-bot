import fetch from 'node-fetch'
  import axios from 'axios'
let handler = async(m, { conn, usedPrefix, command, args }) => {
  let res = await(await fetch(`https://saipulanuar.ga/api/download/ssweb?url=${args[0]}&apikey=VBkM7rbU`)).buffer()
  if(!args[0]) throw `Linknya mana?`
conn.sendFile(m.chat, res, 'ssweb.png', `Done >,<`, fakes)
}
handler.help = ['ssweb']
handler.tags = ['internet']
handler.command = /^ss(web)?|scre?e?nshu?o?t$/i
export default handler
