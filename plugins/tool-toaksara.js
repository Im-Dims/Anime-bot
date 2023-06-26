import { latinToAksara } from '@bochilteam/scraper'

let handler = async (m, { conn, text, usedPrefix, command }) => {
	if (!text) throw `Convert Latin to Javanese Script\n\n*Example:*\n*${usedPrefix + command} halo kak*`
	try {
		let anu = await latinToAksara(`${text}`)
		m.reply(`*Hasil :*\n${anu}`)
	} catch (e) {
		console.log(e)
		m.reply(`Terjadi kesalahan, coba lagi nanti.`)
	}
}

handler.help = ['toaksara <teks>']
handler.tags = ['tools']
handler.command = /^((latin)?toaksara)$/i

export default handler