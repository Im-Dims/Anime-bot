-import { sticker } from '../lib/sticker.js'
import fetch from 'node-fetch'

let handler = async (m, { conn, text, usedPrefix, command }) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let pp = await conn.profilePictureUrl(who).catch(_ => hwaifu.getRandom())
let name = await conn.getName(who)

let stiker = await sticker(null, global.API(`${pickRandom(hehe)}`), global.packname, global.author)
    if (stiker) return await conn.sendFile(m.chat, stiker, 'sticker.webp', '', m, null, { fileLength: fsizedoc, contextInfo: {
          externalAdReply :{
          showAdAttribution: true,
    mediaUrl: syt,
    mediaType: 2,
    description: wm, 
    title: 'Ara ara ada apa ya:3 ??',
    body: ucapan + ' ' + name,
    thumbnail: await(await fetch(pp)).buffer(),
    sourceUrl: syt
     }}
  })
    throw stiker.toString()
    
}

handler.customPrefix = /^(@6281398274790|Dims)$/i
handler.command = new RegExp

export default handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}
let hehe = [
 "https://telegra.ph/file/34433a1094e3eafd750a7.jpg",
 "https://telegra.ph/file/aa686580300cd08aab7be.jpg",
 ]