import { promises, readFileSync } from 'fs'
import fetch from "node-fetch"
let handler = async (m, { conn, args, text, usedPrefix, command, isROwner, isCreator }) => {
//
 let data = JSON.parse(readFileSync('./lib/database/ppcouple/ppcouple.json'))
 let cita = data[Math.floor(Math.random() * data.length)]
  await conn.sendMessage(m.chat, {
        react: {
            text: "⏳",
            key: m.key,
        }
    })
    
  let cowi = await(await fetch(cita.cowo)).buffer()
  await conn.sendFile(m.chat, cowi, '', '*cowok*', m)
  let ciwi = await(await fetch(cita.cewe)).buffer()
  await conn.sendFile(m.chat, ciwi, '', '*cewek*', m)
}

handler.help = ['ppcouplev2', 'ppcpv2']
handler.tags = ['internet']
handler.command = /^(pp(cp2|couple2))$/i
handler.limit = true

export default handler