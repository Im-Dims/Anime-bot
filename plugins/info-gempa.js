import fetch from "node-fetch"
import { generateWAMessageFromContent } from "@adiwajshing/baileys"

import fs from 'fs'
let handler = async (m, { conn, text }) => {
let res = await fetch(`https://saipulanuar.ga/api/info/gempa`)
let data = await res.json()
let json = data.result
let emot = `${pickRandom(['⎔', '◈▻', '✦', 'ᯬ', '⭔', '◉', '⬟', '᭻', '〆', '々', '⛥', '✗',])}`
let deteksi = `*Earthquake Details*

*${htjava}* *ᴛᴀɴɢɢᴀʟ :* ${json.tanggal}
*${htjava}* *ᴊᴀᴍ :* ${json.jam}
*${htjava}* *ᴅᴀᴛᴇᴛɪᴍᴇ :* ${json.datetime}
*${htjava}* *ᴄᴏᴏʀᴅɪɴᴀᴛᴇs :* ${json.coordinates}
*${htjava}* *ʟɪɴᴛᴀɴɢ :* ${json.lintang}
*${htjava}* *ʙᴜᴊᴜʀ :* ${json.bujur}
*${htjava}* *ᴍᴀɢɴɪᴛᴜᴅᴇ :* ${json.magnitude}
*${htjava}* *ᴋᴇᴅᴀʟᴀᴍᴀɴ :* ${json.kedalaman}
*${htjava}* *ᴘᴏᴛᴇɴsɪ :* ${json.potensi}
*${htjava}* *ᴅɪʀᴀsᴀᴋᴀɴ :* ${json.dirasakan}
*${htjava}* *wilayah :* ${json.wilayah}
`
conn.sendFile(m.chat, json.shakemap, null, deteksi, fkontak) 
}  
handler.help = ['infogempa']
handler.tags = ['info']
 handler.command = /^(infogempa|gempa)$/i
export default handler
function pickRandom(list) {
     return list[Math.floor(Math.random() * list.length)]
  }