/*import { MessageType } from '@adiwajshing/baileys'*/

let handler = async (m, { conn }) => {
  m.reply(`
╔┈┈『 *Info Rank* 』
┆⫹⫺ Member = User Gratisan  
┆⫹⫺ Premium = User Premium  
┆⫹⫺ Police = Police Bot  
┆⫹⫺ Owner = Owner Bot  
┆⫹⫺ Owner & Premium = Owner Bot & User Premium  
┖────────────┈ ⳹`
)
}

handler.help = ['rank']
handler.tags = ['main']
handler.command = /^(rank|statusrank)$/i
handler.premium = false

export default handler
