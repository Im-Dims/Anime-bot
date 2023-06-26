import fetch from 'node-fetch'

let handler = async (m) => {
    let pp = await conn.profilePictureUrl(m.sender, 'image').catch(_ => 'https://telegra.ph/file/24fa902ead26340f3df2c.png')
    let wibu = `https://telegra.ph/file/59d6a8bc44c95b4412452.jpg`
    let res = await fetch('https://raw.githubusercontent.com/ArugaZ/grabbed-results/main/random/anime/neko.txt')
    let txt = await res.text()
    let arr = txt.split('\n')
    let zeen = arr[Math.floor(Math.random() * arr.length)]
    let thumb = await(await fetch(zeen)).buffer()
    let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
    else who = m.sender
    let user = global.db.data.users[who]
let hehe = `*———— 「 Thanks To 」 ————*

Author : Dims 
Wa : 6281398274790
Base : Zyko
My Project : 10 Mei 2023

*❱ 𝑇𝒉𝑒 𝑁𝑎𝑚𝑒 𝑇𝒉𝑎𝑡 𝐻𝑒𝑙𝑝𝑒𝑑 𝑀𝑒 ❰*
⭝ Dev Sript
⭝ Fauzan
⭝ Zeltoria
⭝ Penyediaan Rest Api

*⫹⫺ 𝐵𝐼𝐺 𝑇𝐻𝐴𝑁𝐾𝑆 𝑇𝑂 ⫹⫺*
⸔⸔⸔⸔⸔⸔⸔⸔⸔⸔⸔⸔⸔⸔⸔⸔⸔⸔⸔⸔
⭝ Allah Yang Maha Esa
⭝ Orang Tua
⭝ Adiwajishing
⭝ Narutumo
⭝ RismaBot Offc
⭝ Jarot offc
⭝ Hyzer
⭝ Deffri
⭝ Elaina
⭝ KannaChan
⭝ Christian id
⭝ Aine
⭝ Wh Mods Dev
⭝ Arrifb
⭝ Aldi Lesmana
⭝ Ilman
⭝ Amirul
⭝ Istikmal
⭝ Fzone
⭝ Zyko - MD Ofc
⭝ Fajar
⭝ Arull Ofc
⭝ Zeeone Ofc
⭝ Ramlan
⭝ GempyTon
⭝ Saipul Anur`
conn.sendFile(m.chat, wibu, 'tqto.jpg', `${hehe}`, m)
//conn.sendFile(m.chat, pp, 'pp.jpg', `${tqto}`, m)
await conn.sendMessage(m.chat, {
        react: {
            text: "📌",
            key: m.key,
        }
    })
}
handler.help = ['tqto']
handler.tags = ['main']
handler.command = /^(credits|credit|thanks|thanksto|tqto)$/i
export default handler