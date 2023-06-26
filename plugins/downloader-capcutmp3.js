import { capcutdl } from '../lib/capcut.js'
let handler = async (m, { conn, args, text, usedPrefix, command }) => { 
  if (!args[0]) throw `Umhh.... Linknya mana??`;
  let data = await capcutdl(text);
  await conn.sendMessage(m.chat, { react: { text: "⏳", key: m.key } });
conn.sendMessage(m.chat, { audio: { url: data.originalVideoUrl }, mimetype: 'audio/mpeg', fileName: `${data.title}.mp3` }, { quoted: m })
}
handler.help = ['capcutmp3', 'capcutaudio'].map(v => v + ' <url>')
handler.tags = ['downloader']
handler.command = /^(capcutaudio|capcutmp3|)$/i
export default handler
