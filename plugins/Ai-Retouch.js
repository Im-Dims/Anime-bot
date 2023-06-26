import fetch from "node-fetch";
import uploadImage from "../lib/uploadImage.js";

let handler = async (m, { conn, usedPrefix, command }) => {
	conn.retouch = conn.retouch ? conn.retouch : {};
	if (m.chat in conn.retouch)
		throw "Masih Ada Proses Yang Belum Selesai Kak, Tunggu Sampai Selesai Yah >//<";
	let q = m.quoted ? m.quoted : m;
	let mime = (q.msg || q).mimetype || q.mediaType || "";
	if (!mime)
		throw `Fotonya Mana Kak?`;
	if (!/image\/(jpe?g|png)/.test(mime)) throw `Mime ${mime} tidak support`;
	else conn.retouch[m.chat] = true;
	m.reply("Proses Kak...");
	let img = await q.download?.();
	let upld = await uploadImage(img);
	try {
		let img2 = await fetch(global.API("rose", "/image/retouch", { url: upld }));
		let image = await img2.buffer();
		conn.sendFile(m.chat, image, "", "Sudah Jadi Kak ```>_<```", m);
	} catch {
		m.reply("Proses Gagal :(");
		delete conn.retouch[m.chat];
	} finally {
		if (conn.retouch[m.chat]) delete conn.retouch[m.chat];
	}
};
handler.help = ["retouch"];
handler.tags = ["ai"];
handler.command = ["retouch"];

handler.premium = true

export default handler;
