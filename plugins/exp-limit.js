let handler = async (m) => {
    let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
    else who = m.sender
    if (typeof db.data.users[who] == 'undefined') throw 'Pengguna tidak ada didalam data base'
conn.sendMessage(m.chat, {
text: `Limit kamu sekarang tersisa ${global.db.data.users[who].limit}`,
contextInfo: {
externalAdReply: {
title: '——— 「 Limit 」 ———',
thumbnailUrl: "https://telegra.ph/file/243bad0ff9e72e34c2837.jpg",
sourceUrl: sgc,
mediaType: 1,
renderLargerThumbnail: true
}}}, { quoted: m}) 
}
handler.help = ['ceklimit', 'limit'].map(v => v + ' <@user>')
handler.tags = ['xp']
handler.command = /^(limit|ceklimit)$/i
export default handler