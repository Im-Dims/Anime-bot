let handler = async (m, { conn }) => {
    let pc = Object.entries(await conn.chats)
    let niorg = pc.filter(([jid]) => jid.endsWith('@s.whatsapp.net'))
    let teks = `*「 Personal chat list 」*\n\nTotal Chat : ${niorg.length} Chat\n\n`
    for (let i of niorg) {
        let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
        let name = conn.getName(who)
        let user = i[0].split('@')[0]
        teks += `⫹⫺ *Name :* ${name}\n⫹⫺ *User :* @${user}\n⫹⫺ *Chat :* https://wa.me/${user}\n\n──────────────────────\n\n`
    }
    m.reply(teks)
}

handler.help = ['listpc']
handler.tags = ['owner']
handler.command = /^listpc|pclist|daftarpc|pc$/i
handler.owner = true
export default handler