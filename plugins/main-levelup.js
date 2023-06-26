import { canLevelUp, xpRange } from '../lib/levelling.js'
import { levelup } from '../lib/canvas.js'

let handler = async (m, { conn }) => {
    let user = global.db.data.users[m.sender]
    if (!canLevelUp(user.level, user.exp, global.multiplier)) {
        let { min, xp, max } = xpRange(user.level, global.multiplier)
        throw `*––––––『 Level Up  』––––––*

*• Nama:* ${conn.getName(m.sender)}
*• Level:* ${user.level} *(${user.exp - min} / ${xp})*
*• Rank:* ${user.role}

Kurang *${max - user.exp}* lagi! ✨
`.trim()
    }
    let before = user.level * 1
    while (canLevelUp(user.level, user.exp, global.multiplier)) user.level++
    if (before !== user.level) {
        let teks = `Selamat ${conn.getName(m.sender)} naik rank ke ${user.role}`
        let str = `${conn.getName(m.sender)} naik level ${user.level}

*–––––– 『 Level Up 』 ––––––*

*${before}* ➔ *${user.level}* [ *${user.role}* ]

• Level Sebelumnya : ${before}
• Level Baru : ${user.level}
• Pada Jam : ${new Date().toLocaleString('id-ID')}

*Note:* _Semakin sering berinteraksi dengan bot Semakin Tinggi level kamu_
`.trim()

          
            let data = 'src/lvlup_template.jpg'
            try {
            let img = await levelup(teks, user.level)
            conn.sendButton(m.chat, img, 'image', str, m)
            } catch (e) {
            conn.sendFile(m.chat, data, 'image.jpg', str, m)
            await conn.sendMessage(m.chat, {
        react: {
            text: "🥳",
            key: m.key,
                }
            })

        }

    }
}

handler.help = ['levelup2']
handler.tags = ['xp']

handler.command = /^levelup|level$/i

export default handler