import fs from 'fs'
let handler = async (m, { text, usedPrefix, command }) => {
    if (!text) throw `Di simpen di mana?? Conton .sf main-menu.js`
    if (!m.quoted.text) throw `Balas Pesan Nya!`
    let path = `${text}`
    await fs.writeFileSync(path, m.quoted.text)
    m.reply(`Sukses Berhasil Di Simpan Di ${path}`)
    await conn.sendMessage(m.chat, {
        react: {
            text: "✅",
            key: m.key,
        }
    })
}
handler.help = ['sf']
handler.tags = ['owner']
handler.command = /^sf$/i

handler.rowner = true
export default handler