import PhoneNumber from 'awesome-phonenumber'
import { join } from 'path'
import { xpRange } from '../lib/levelling.js'

let handler = async (m, { conn, args, fromMe, usedPrefix, command }) => {
let user = db.data.users[m.sender]
    let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
    let { exp, limit, level, role, money, lastclaim, lastweekly, registered, regTime, premium, age, banned, pasangan } = global.db.data.users[who]
    let { min, xp, max } = xpRange(level, global.multiplier)
    let name = await conn.getName(who)
    let pp = await conn.profilePictureUrl(who).catch(_ => './src/avatar_contact.png')
    if (typeof global.db.data.users[who] == "undefined") {
      global.db.data.users[who] = {
        exp: 0,
        limit: 10,
        lastclaim: 0,
        registered: false,
        name: conn.getName(m.sender),
        age: -1,
        regTime: -1,
        afk: -1,
        afkReason: '',
        banned: false,
        level: 0,
        lastweekly: 0,
        role: 'Warrior V',
        autolevelup: true,
        money: 0,
        pasangan: "",
      }
     }
     let math = max - xp
let caption = `───═「 Profile 」═───
*• Nama:* *(${name})* ${registered ? '(' + name + ') ' : ''} ( @${who.split("@")[0]} )
*• Pasangan:*  ${pasangan ? `@${pasangan.split("@")[0]}` : `Tidak ada`}
*• Money:* ${money}
*• Number:* ${PhoneNumber('+' + who.replace('@s.whatsapp.net', '')).getNumber('international')}
*• Link:* https://wa.me/${who.split`@`[0]}
*• Umur:* ${registered ? age : ''}
*• Level* ${level}
*• Role:* ${role}
*• XP:* ${exp} (${exp - min} / ${xp}) [${math <= 0 ? `Siap untuk *${usedPrefix}levelup*` : `${math} XP lagi untuk levelup`}]
*• Premium:* ${premium ? "Premium User" :"Free User"}
*• PremiumTime:* 
${clockString(user.premiumTime)}
*• Terdaftar:* ${registered ? 'Ya (' + new Date(regTime).toLocaleString() + ')' : 'Tidak'}`
await conn.sendFile(m.chat, pp, 'image.jpg', caption, fakes, { mentions: conn.parseMention(caption) })
}

handler.help = ['profile'].map(v => v + ' <url>')
handler.tags = ['rpg', 'exp']

handler.command = /^(pro(fil)?(file)?|pp)$/i

export default handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

function clockString(ms) {
  let d = isNaN(ms) ? '--' : Math.floor(ms / 86400000)
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000) % 24
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [d, ' *Days ☀️*\n ', h, ' *Hours 🕐*\n ', m, ' *Minute ⏰*\n ', s, ' *Second ⏱️* '].map(v => v.toString().padStart(2, 0)).join('')
}
