let handler = async (m, { conn, args, participants, command }) => {
switch (command) {
      case 'stupid':
      case 'foolish':
      case 'smart':
      case 'idiot':
      case 'gay':
      case 'lesbi':
      case 'bastard':
      case 'stubble':
      case 'dog':
      case 'fuck':
      case 'ape':
      case 'noob':
      case 'great':
      case 'horny':
      case 'wibu':
      case 'asshole':
      case 'handsome':
      case 'beautiful':
      case 'cute':
      case 'kind':
      case 'ugly':
      case 'pretty':
      case 'lesbian':
      case 'randi':
      case 'gandu':
      case 'madarchod':
      case 'kala':
      case 'gora':
      case 'chutiya':
      case 'nibba':
      case 'nibbi':
      case 'bhosdiwala':
      case 'chutmarika':
      case 'bokachoda':
      case 'suarerbaccha':
      case 'bolochoda':
      case 'muthal':
      case 'muthbaaz':
      case 'randibaaz':
      case 'topibaaz':
      case 'cunt':
      case 'nerd':
      case 'behenchod':
      case 'behnchoda':
      case 'bhosdika':
      case 'nerd':
      case 'mc':
      case 'bsdk':
      case 'bhosdk':
      case 'nigger':
      case 'loda':
      case 'laund':
      case 'nigga':
      case 'noobra':
      case 'tharki':
      case 'nibba':
      case 'nibbi':
      case 'mumu':
      case 'rascal':
      case 'scumbag':
      case 'nuts':
      case 'comrade':
      case 'fagot':
      case 'scoundrel':
      case 'ditch':
      case 'dope':
      case 'gucci':
      case 'lit':
      case 'dumbass':
      case 'sexy':
      case 'crackhead':
      case 'mf':
      case 'motherfucker':
      case 'dogla':
      case 'bewda':
      case 'boka':
      case 'khanki':
      case 'bal':
      case 'sucker':
      case 'fuckboy':
      case 'playboy':
      case 'fuckgirl':
      case 'playgirl':
      case 'hot': {
            let member = participants.map(u => u.id)
            let me = m.sender
            let jodoh = member[Math.floor(Math.random() * member.length)]
            let jawab = `The Most *${command}* Here Is @${jodoh.split('@')[0]}`         
      conn.sendMessage(m.chat, { text: `${jawab}`, mentions: [jodoh] }, { quoted: m })
      break;
    }
  }
}; 
handler.tags = ['fun']           
handler.help = handler.command = ['stupid', 'foolish', 'smart',
'idiot',
'gay',
'lesbi',
'bastard',
'stubble',
'dog',
'fuck',
'ape',
'noob',
'great',
'horny',
'wibu',
'asshole',
'handsome',
'beautiful',
'cute',
'kind',
'ugly',
'pretty',
'lesbian',
'randi',
'gandu',
'madarchod',
'kala',
'gora',
'chutiya',
'nibba',
'nibbi',
'bhosdiwala',
'chutmarika',
'bokachoda',
'suarerbaccha',
'bolochoda',
'muthal',
'muthbaaz',
'randibaaz',
'topibaaz',
'cunt',
'nerd',
'behenchod',
'behnchoda',
'bhosdika',
'nerd',
'mc',
'bsdk',
'bhosdk',
'nigger',
'loda',
'laund',
'nigga',
'noobra',
'tharki',
'nibba',
'nibbi',
'mumu',
'rascal',
'scumbag',
'nuts',
'comrade',
'fagot',
'scoundrel',
'ditch',
'dope',
'gucci',
'lit',
'dumbass',
'sexy',
'crackhead',
'mf',
'motherfucker',
'dogla',
'bewda',
'boka',
'khanki',
'bal',
'sucker',
'fuckboy',
'playboy',
'fuckgirl',
'playgirl',
'hot']
handler.group = true
export default handler;
