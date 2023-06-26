import fs from 'fs'
import fetch from 'node-fetch'
let handler  = async (m, { conn, usedPrefix: _p }) => {
let info = `Anime Bot Disini (>ω<)`

let td = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
conn.reply(m.chat, info, m, { contextInfo: { externalAdReply: {title: global.wm, body: 'Yaww:3, ada apa kak?', sourceUrl: snh, thumbnail: fs.readFileSync('./thumbnail.jpg')  }}})
await conn.sendMessage(m.chat, {
        react: {
            text: "〽️",
            key: m.key,
        }
    })
}
handler.customPrefix = /^(tes|Test|bot|Bot)$/i
handler.command = new RegExp

export default handler