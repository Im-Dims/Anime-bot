let handler = async (m, { conn }) => {
	/* //----- PRICE -------
let sh = '5'
let sn = '15'
let ss = '30'
let sp = '35'
let sv = '65'
//premium
let ph = '5'
let pn = '20'
let pp = '40'
let pv = '50'
let ppm = '70'*/
let info = `
╭━━━━「 *Sewa* 」
┊⫹⫺ https://wa.me/p/6167564323361364/6287763034415
┊⫹⫺ Owner Number: 6281398274790
╰═┅═━––––––๑

╭━━━━「 *PREMIUM* 」
┊⫹⫺ https://wa.me/p/5804073539698746/6287763034415
┊⫹⫺ Owner Number: 6281398274790
╰═┅═━––––––๑

*⫹⫺ Payment:*
• *Pulsa Telkomsel:* [0881398274790]
• *Dana:* [${pdana}]
• *Ovo:* [${povo}]

*example*
*.order text*
`
m.reply(info)
}

handler.help = ['sewa', 'premium']
handler.tags = ['info']
handler.command = /^(sewa(bot)?|premium)$/i

export default handler
