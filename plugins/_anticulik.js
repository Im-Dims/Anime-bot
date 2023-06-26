import fs from 'fs'
let handler = m => m

handler.all = async function (m, { isBlocked }) {
    if (isBlocked) return
    // ketika ada yang invite/kirim link grup di chat pribadi
    if ((m.mtype === 'groupInviteMessage' || m.text.startsWith('Undangan untuk bergabung') || m.text.startsWith('Invitation to join') || m.text.startsWith('Buka tautan ini')) && !m.isBaileys && !m.isGroup) {
    let teks = `*『 Detect Link Group 』*
    
• Sewa: https://wa.me/p/6167564323361364/6287763034415
• Premium: https://wa.me/p/5804073539698746/6287763034415

Ga ada yg gratis ya kak hehehe:>

Jika Berminat Hubungi: @${global.nomorown} Untuk Order
`
    this.reply(m.chat, teks, m)
    const data = global.owner.filter(([id, isCreator]) => id && isCreator)
    this.sendContact(m.chat, data.map(([id, name]) => [id, name]), m)
    }
}

export default handler