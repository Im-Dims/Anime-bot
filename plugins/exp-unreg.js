import { createHash } from 'crypto'

let handler = async function (m, { args, usedPrefix, command }) {
  if (!args[0]) {
    return m.reply(`🚫 *Masukan serial numbernya.*`)
  }

  let user = global.db.data.users[m.sender]
  let sn = createHash('md5').update(m.sender).digest('hex')

  if (args[0] !== sn) {
    return m.reply(`🚫 *Serial number salah.*
Jika lupa silakan cek kembali dengan ketik *.ceksn* dan salin kodenya.
Contoh: *${usedPrefix}${command} Serial Number*`)
  }

  user.registered = false

  return m.reply(`✅ *Berhasil unregister.*`)
}

handler.help = ['', 'ister'].map(v => 'unreg' + v + ' <SN|SERIAL NUMBER>')
handler.tags = ['xp']
handler.command = /^unreg(ister)?$/i
handler.register = true

export default handler
