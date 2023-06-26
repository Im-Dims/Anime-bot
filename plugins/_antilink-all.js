const isLinkTik = /tiktok.com/i;
const isLinkYt = /youtube.com|youtu.be/i;
const isLinkTel = /t.me/i;
const isLinkFb = /facebook.com|fb.me/i;
const isLinkIg = /instagram.com/i;
const isLinkHttp = /http|https/i;
export async function before(m, { conn, args, usedPrefix, command, isAdmin, isBotAdmin }) {
    if (m.isBaileys && m.fromMe) return !0;
    if (!m.isGroup) return !1;
    let chat = global.db.data.chats[m.chat];
    let name = conn.getName(m.sender);
    let bot = global.db.data.settings[this.user.jid] || {};
    const isAntiLinkTik = isLinkTik.test(m.text);
    const isAntiLinkYt = isLinkYt.test(m.text);
    const isAntiLinkTel = isLinkTel.test(m.text);
    const isAntiLinkFb = isLinkFb.test(m.text);
    const isAntiLinkIg = isLinkIg.test(m.text);
    const isAntiLinkHttp = isLinkHttp.test(m.text);
    if (chat.antiLinkTik && isAntiLinkTik) {
        m.reply(`Terdeteksi *${name}* Telah Mengirim Link Tiktok!!${isBotAdmin ? '' : '\n\nJadikan Bot Admin Terlebih dahulu'}`);
        if (isBotAdmin && chat.antiLinkTik) {
          await conn.sendMessage(m.chat, { delete: m.key })
            return !1;
        } else if (!chat.antiLinkTik) {
            await conn.sendMessage(m.chat, { delete: m.key })
            await conn.sendMessage(m.chat, 'Semoga harimu suram!')           
        }
    }
    if (chat.antiLinkYt && isAntiLinkYt) {
        m.reply(`Terdeteksi *${name}* Telah Mengirim Link Youtube!!${isBotAdmin ? '' : '\n\n_Jadikan Bot Admin Terlebih dahulu_'}`)
        if (isBotAdmin && chat.antiLinkYt) {
          await conn.sendMessage(m.chat, { delete: m.key })
            return !1;
        } else if (!chat.antiLinkYt) {
            await conn.sendMessage(m.chat, { delete: m.key })
            await conn.sendMessage(m.chat, 'Semoga harimu suram!')      
        }
    }
    
    if (chat.antiLinkTel && isAntiLinkTel) {
        m.reply(`Terdeteksi *${name}* Telah Mengirim Link Telegram!!${isBotAdmin ? '' : '\n\n_Jadikan Bot Admin Terlebih dahulu_'}`)
        if (isBotAdmin && chat.antiLinkTel) {
          await conn.sendMessage(m.chat, { delete: m.key })
            return !1;
        } else if (!chat.antiLinkTel) {
            await conn.sendMessage(m.chat, { delete: m.key })
            await conn.sendMessage(m.chat, 'Semoga harimu suram!')      
        }
    }
    
    if (chat.antiLinkFb && isAntiLinkFb) {
        m.reply(`Terdeteksi *${name}* Telah Mengirim Link Facebook!!*${isBotAdmin ? '' : '\n\n_Jadikan Bot Admin Terlebih dahulu_'}`)
        if (isBotAdmin && chat.antiLinkFb) {
          await conn.sendMessage(m.chat, { delete: m.key })
            return !1;
        } else if (!chat.antiLinkFb) {
            await conn.sendMessage(m.chat, { delete: m.key })
            await conn.sendMessage(m.chat, 'Semoga harimu suram!')      
        }
    }
    if (chat.antiLinkIg && isAntiLinkIg) {
        m.reply(`Terdeteksi *${name}* Telah Mengirim Link Instagram!!${isBotAdmin ? '' : '\n\nJadikan Bot Admin Terlebih dahulu'}`);
        if (isBotAdmin && chat.antiLinkIg) {
          await conn.sendMessage(m.chat, { delete: m.key })
            return !1;
        } else if (!chat.antiLinkIg) {
            await conn.sendMessage(m.chat, { delete: m.key })
            await conn.sendMessage(m.chat, 'Semoga harimu suram!')      
        }
    }

    if (chat.antiLinkHttp && isAntiLinkHttp) {
        m.reply(`Terdeteksi *${name}* Telah Mengirim Link Http!!${isBotAdmin ? '' : '\n\nJadikan Bot Admin Terlebih dahulu'}`);
        if (isBotAdmin && chat.antiLinkHttp) {        
          await conn.sendMessage(m.chat, { delete: m.key })
            return !1;
        } else if (!chat.antiLinkHttp) {
            await conn.sendMessage(m.chat, { delete: m.key })
            await conn.sendMessage(m.chat, 'Semoga harimu suram!')      
        }
    }
    return !0;
}