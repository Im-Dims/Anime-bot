let handler = m => m
handler.before = m => {
  let user = global.db.data.users[m.sender]
  if (user.afk > -1) {
    let afk = 'https://telegra.ph/file/37f33d46c1ba38fd4b95e.jpg'
    conn.sendMessage(m.chat, { image: { url: afk }, caption: `Kamu Telah Berhenti Afk${user.afkReason ? ' Setelah ' + user.afkReason : ''}
Selama ${(new Date - user.afk).toTimeString()}`}, { quoted: m})
    user.afk = -1
    user.afkReason = ''
  }
  let jids = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
  for (let jid of jids) {
    let user = global.db.data.users[jid]
    if (!user) continue
    let afkTime = user.afk
    if (!afkTime || afkTime < 0) continue
    let reason = user.afkReason || ''
    let afk = 'https://telegra.ph/file/82db7be8d60cf4a4199c4.jpg'
    conn.sendMessage(m.chat, { image: { url: afk }, caption: `Jangan Tag Dia!
Dia Sedang AFK ${reason ? 'Dengan Alasan ' + reason : 'Tanpa Alasan'}
Selama ${(new Date - afkTime).toTimeString()}`}, { quoted: m})
  }
  return true
}

export default handler