// • By Zyko-MD

import fetch from 'node-fetch'
let handler = async (m, { conn, text, command, args }) => {
if (!args[0]) throw `Membuat gambar dari AI.\n\nContoh:\n${command} Wooden house on snow mountain`
  let response = await fetch(`https://botcahx.cyclic.app/dalle?text=${encodeURIComponent(text)}`)
  let image = await response.buffer() 
conn.sendFile(m.chat, image, 'image.jpg', `*Result :* ${command}`, m) 
}  
handler.help = ['ai-image', 'aidraw']
handler.tags = ['openai']
handler.command = /^(ai-image|aidraw)$/i
handler.limit = false
export default handler