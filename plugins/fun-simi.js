import fetch from 'node-fetch'
let handler = async (m, {text, args}) => {
  if (!args[0]) throw `Use example .simi halo`
  let api = await fetch(`https://saipulanuar.ga/api/f/simi?text=${text}`)
  let res = await api.json()
  m.reply(res.result)
}
handler.command = ['simi']
handler.tags = ['fun']
handler.help = ['simi']

export default handler
