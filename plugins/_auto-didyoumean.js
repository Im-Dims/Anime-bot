import didyoumean from 'didyoumean'
import similarity from 'similarity'
export async function before(m, { match, text, usedPrefix, command }) {
	if ((usedPrefix = (match[0] || '')[0])) {
		let noPrefix = m.text.replace(usedPrefix, '')
		let args = noPrefix.trim().split` `.slice(1)
		let text = args.join` `
		let help = Object.values(plugins).filter(v => v.help && !v.disabled).map(v => v.help).flat(1)
	if (help.includes(noPrefix)) return
		let mean = didyoumean(noPrefix, help)
		let sim = similarity(noPrefix, mean)
		let som = sim * 100
		let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
		let name = await conn.getName(who)
		let caption = `Maaf ${name}, Command tersebut tidak terdaftar di dalam *.menu*\n_Mungkin maksud anda : *${usedPrefix + mean}*_\n\n*${usedPrefix + mean}* *${Number(sim * 100).toFixed(2)}%*\n\n ${titlebot}`
	if (mean) this.reply(m.chat, caption, m, { mentions: this.parseMention(caption) })
	await conn.sendMessage(m.chat, {
        react: {
            text: "❌", //Jika ga mau ada kaya gini hapus aja 
            key: m.key,
        }
     })
  }
}
export const disabled = false