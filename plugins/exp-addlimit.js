let { MessageType } = await import('@adiwajshing/baileys')
let handler = async (m, { conn, text }) => {
    if (!text) throw 'Enter the amount of Limit that will be given'
    let who
    if (m.isGroup) who = m.mentionedJid[0]
    else who = m.chat
    if (!who) throw 'Tag one of them
    let txt = text.replace('@' + who.split`@`[0], '').trim()
    if (isNaN(txt)) throw 'Just numbers'
    let poin = parseInt(txt)
    let limit = poin
    if (limit < 1) throw 'Minimum 1'
    let users = global.db.data.users
    users[who].limit += poin

    conn.reply(m.chat, `Congratulations @${who.split`@`[0]}. You get +${points} LIMIT!`, m, { mentions: [who] }, {
        mentions: [m.sender]
    }) 
}

handler.help = ['addlimit @user <amount>']
handler.tags = ['xp']
handler.command = /^addlimit$/
handler.owner = false
export default handler