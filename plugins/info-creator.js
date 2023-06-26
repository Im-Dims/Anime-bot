import fetch from 'node-fetch'
let handler = async (m, { conn, usedPrefix, text, args, command }) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let name = await conn.getName(who)

let vcard = `BEGIN:VCARD\nVERSION:3.0\nN:WhatsApp;Dims\nLainnya:Hanya Manusia Biasa\nORG:Dims\nTITLE:soft\nitem1.TEL;waid=6281398274790:6281398274790\nitem1.X-ABLabel:Nomer\nitem2.URL:https://www.youtube.com/@DimsT1945\nitem2.X-ABLabel:More\nitem3.EMAIL;type=INTERNET:Dims995@gmail.com\nitem3.X-ABLabel:Gmail\nitem4.ADR:;;Japanese;;;;\nitem4.X-ABADR:More\nitem4.X-ABLabel:Location\nEND:VCARD`
const tag_own = await conn.sendMessage(m.chat, { contacts: { displayName: wm, contacts: [{ vcard }] }}, { quoted: global.fkontak })
let caption = `Hallo *@${who.split("@")[0]}* 👋, Nih Owner Ku kak`
    await conn.reply(m.chat, caption, tag_own, { mentions: conn.parseMention(caption) })
    
await conn.sendMessage(m.chat, {
        react: {
            text: "🔰",
            key: m.key,
        }
    })
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|pengembang|creator)$/i

export default handler