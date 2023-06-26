import fs from 'fs'
import fetch from 'node-fetch'
let handler = async (m, { conn, usedPrefix: _p, args, command }) => {
	let fdoc = {
  key : {
  remoteJid: 'status@broadcast',
  participant : '0@s.whatsapp.net'
  },
  message: {
  documentMessage: {
  title: '𝙳𝙰𝚃𝙰𝙱𝙰𝚂𝙴', 
  jpegThumbnail: fs.readFileSync('./thumbnail.jpg'),
                            }
                          }
                        }
	let d = new Date
            let date = d.toLocaleDateString('id', {
                day: 'numeric',
                month: 'long',
                year: 'numeric'
            })
conn.reply(m.chat, '*Succes*', m)
conn.reply('6281398274790' + '@s.whatsapp.net', `*Database:* ${date}`, null)
          conn.sendFile('6281398274790' + '@s.whatsapp.net', fs.readFileSync('./index.js_database.json'), 'index.js_database.json', '', 0, 0, { mimetype: 'application/json', quoted: fdoc})
 }
 
 handler.help = ['backup']
handler.tags = ['owner']
handler.command = /^(backup|cadangkan)$/i
handler.rowner = true

export default handler
