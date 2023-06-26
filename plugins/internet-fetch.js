import fetch from 'node-fetch'
import { format } from 'util'

let handler = async (m, { text }) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let name = await conn.getName(who)
	if (!text) throw '*Masukkan Link*'
	let { href: url, origin } = new URL(text)
	let res = await fetch(url, { headers: { 'referer': origin }})
	if (res.headers.get('content-length') > 100 * 1024 * 1024 * 1024) throw `Content-Length: ${res.headers.get('content-length')}`
	if (!/text|json/.test(res.headers.get('content-type'))) return conn.sendFile(m.chat, url, ucapan, author, m, null, { fileName: ucapan, pageCount: fpagedoc, fileLength: fsizedoc, seconds: fsizedoc, caption: author, contextInfo: {
          externalAdReply :{
    body: ucapan,
    containsAutoReply: true,
    mediaType: 2, 
    mediaUrl: snh,
    showAdAttribution: true,
    sourceUrl: snh,
    thumbnailUrl: thumbs,
    renderLargerThumbnail: true,
    title: '👋 Hai, ' + name,
     }}
  })
	let txt = await res.buffer()
	try {
		txt = format(JSON.parse(txt + ''))
	} catch (e) {
		txt = txt + ''
	} finally {
		m.reply(txt.slice(0, 65536) + '')
	}
}
handler.help = ['fetch']
handler.tags = ['tools']
handler.alias = ['get', 'fetch']
handler.command = /^(fetch|get)$/i

export default handler
