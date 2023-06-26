import fetch from 'node-fetch'
import fs from 'fs'
import moment from 'moment-timezone'
let handler = async (m, { conn, args, command }) => {
let tag = `@${m.sender.replace(/@.+/, '')}`
let mentionedJid = [m.sender]
let name = conn.getName(m.sender)
let sr = 'Jumlah Database:'
let esce = `text nya `
let totalreg = Object.keys(global.db.data.users).length
let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
let katabijak = pickRandom(global.katabijak)
let cap = `「 Info User 」\n\nDatabase: The current number of database users is ${totalreg} user`
m.reply(cap)
}
handler.help = ['user']
handler.tags = ['info']

handler.command = /^(user)$/i
export default handler 
function ucapan() {
  const time = moment.tz('Asia/Jakarta').format('HH')
  let res = "Selamat Malam"
  if (time >= 4) {
    res = "Selamat Pagi"
  }
  if (time >= 10) {
    res = "Selamat Siang"
  }
  if (time >= 15) {
    res = "Selamat Sore"
  }
  if (time >= 18) {
    res = "Selamat Malam"
  }
  return res
}