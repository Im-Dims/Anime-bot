import { otakudesu } from 'hxz-api'
import fetch from 'node-fetch'
let handler = async (m, { conn, text, args, usedPrefix, command }) => {
    //let teks = text ? text : m.quoted && m.quoted.text ? m.quoted.text : ''
    if (!text) throw `Use example ${usedPrefix}${command} Anime`
    let result = await otakudesu(text)
    let datathumb = await(await fetch(result.img)).buffer()
    let otaku = `
*• Judul:* ${result.judul}
*• Rate:* ${result.rate}
*• Produser:* ${result.produser}
*• Tipe:* ${result.tipe}
*• Status:* ${result.status}
*• Episode:* ${result.episode}
*• Durasi:* ${result.durasi}
*• Rilis:* ${result.rilis}
*• Studio:* ${result.studio}
*• Gendre:* ${result.genre}
*• Desc:* ${result.desc}
*• Batch:* ${result.batch}

*• Batchsd:* ${result.batchSD}

*• Batchhd:* ${result.batchHD}
`
conn.sendFile(m.chat, datathumb, 'image.jpg', otaku, m)
}
handler.help = ['otakudesu'].map(v => v + ' <Apa>')
handler.tags = ['anime']
handler.command = /^(otakudesu)$/i
handler.limit = true

export default handler