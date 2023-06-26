import fetch from 'node-fetch'

let handler = async (m, { conn, usedPrefix }) => {
    let res = await fetch('https://api.waifu.pics/sfw/megumin')
    await conn.sendMessage(m.chat, {
        react: {
            text: "⏳",
            key: m.key,
        }
    })
    
    if (!res.ok) throw await res.text()
    let json = await res.json()
    if (!json.url) throw 'Error!'
    conn.sendFile(m.chat, json.url, 'image.jpg', 'Nih megumin nya', m)
}

handler.help = ['megumin']
handler.tags = ['anime']
handler.command = /^(megumin)$/i
handler.limit = true
export default handler