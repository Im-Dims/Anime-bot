import fs from 'fs'
import fetch from 'node-fetch'
import moment from 'moment-timezone'

let handler = m => m
handler.all = async function (m) {
    let name = await conn.getName(m.sender) 
    let totalreg = Object.keys(global.db.data.users).length
	let pp
	try {
		pp = await this.profilePictureUrl(m.sender, 'image')
	} catch (e) {
	pp = hwaifu.getRandom()
	} finally {
		
		
		// Uptime Bot 
		let _uptime = process.uptime() * 1000
    let _muptime
    if (process.send) {
    process.send('uptime')
    _muptime = await new Promise(resolve => {
    process.once('message', resolve)
    setTimeout(resolve, 1000)
    }) * 1000
    }
    let muptime = clockString(_muptime)
    let uptime = clockString(_uptime)
    
        // Doc
        let pdoc = ["application/vnd.openxmlformats-officedocument.presentationml.presentation","application/vnd.openxmlformats-officedocument.spreadsheetml.sheet","application/vnd.openxmlformats-officedocument.wordprocessingml.document","application/vnd.ms-excel","application/msword","application/pdf","text/rtf"]
		global.doc = pdoc.getRandom()
       global.fetch = import('node-fetch')
		
		// Fake Random
        let pft = ["fpayment","ftroli","fkontak","fvn","fvid","ftextt","fliveLoc","fliveLoc2","ftoko","fdocs","fgclink","fgif"]
		global.fakes = pft.getRandom()
		
		// Module 
		global.fetch = import('node-fetch')
		global.bochil = import('@bochilteam/scraper')
        
		// Ini untuk command crator/owner
		global.kontak2 = [
         [owner[0], await this.getName(owner[0] + '@s.whatsapp.net'), 'ᴅᴇᴠᴇʟᴏᴩᴇʀ ʙᴏᴛ', 'test25@mail.com', true],
         [owner[1], await this.getName(owner[1] + '@s.whatsapp.net'), 'ᴅᴇᴠᴇʟᴏᴩᴇʀ ʙᴏᴛ', 'test24@mail.com', true], // Kalo mau di tambah tinggal copy 1baris ini di tempel di bawahnya trs di edit dikit!
        ]
        
		// ucapan ini mah
		global.ucapan = ucapan()
		
		// pesan sementara
		global.ephemeral = '86400'
		
		// externalAdReply atau text with thumbnail.
		global.adReply = {
			contextInfo: {
				forwardingScore: 9999,
				isForwarded: true,
				externalAdReply: { 
                    showAdAttribution: true,
					title: 'Hai kak : ' + name,
					body: uptime,
					mediaUrl: sgc,
					description: 'simple bot esm',
					previewType: "PHOTO",
					thumbnail: await (await fetch(pp)).buffer(),
					sourceUrl: "https://www.youtube.com/@DimsT1945",					
				}
			}
		}
	}
}

export default handler 

function ucapan() {
    const time = moment.tz('Asia/Jakarta').format('HH')
    let res = "Selamat malam"
    if (time >= 1) {
        res = "Selamat Pagi"
    }
    if (time >= 4) {
        res = "Selamat pagi"
    }
    if (time > 10) {
        res = "Selamat siang"
    }
    if (time >= 15) {
        res = "Selamat sore"
    }
    if (time >= 18) {
        res = "Selamat malam"
    }
    if (time >= 24) {
        res = "Selamat Begadang"
    }
    return res
}

function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, ' H ', m, ' M ', s, ' S '].map(v => v.toString().padStart(2, 0)).join('')
}

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}