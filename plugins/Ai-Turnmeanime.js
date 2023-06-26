import fetch from "node-fetch";
import uploadImage from "../lib/uploadImage.js";

const effects = ["0", "1", "2"];
const answer = {
	bad: [
		"Ya Karna Fotonya Buriq",
		"Fotonya Buriq Gimana Hasil Mau Bagus",
	],
	good: [
		"Thanks",
		"Terima Kasih",
	],
};
let handler = async (m, { conn, args, usedPrefix, command }) => {
	if (args[0] == "ISayGoodForThis") {
		return m.reply(answer.good[Math.floor(Math.random() * answer.good.length)]);
	}
	if (args[0] == "ISayBadForThis") {
		return m.reply(answer.bad[Math.floor(Math.random() * answer.bad.length)]);
	}
	conn.differentMe = conn.differentMe ? conn.differentMe : {};
	if (m.sender in conn.differentMe)
		throw "_Silahkan Tunggu Sampai Selesai_";
	const q = m.quoted ? m.quoted : m;
	const mime = (q.msg || q).mimetype || q.mediaType || "";
	if (!mime)
		return m.reply(
			`Fotonya?`
		);
	if (!/image\/(jpe?g|png)/.test(mime)) throw `File Tidak Mendukung!`;
	const img = await q.download?.();
	const upld = await uploadImage(img);
	let res;
	try {
		if (command === "drawme") {
			res = global.API("rose", "/image/drawMe", { url: upld }, "apikey");
		} else if (command === "turnmeanime") {
			res = global.API("rose", "/image/differentMe/v3", {
				apikey: "Frieren",
				version: 2,
				isVideo: true,
				url: upld,
			});
		} else {
			res = global.API(
				"rose",
				"/image/differentMe/v3",
				{
					url: upld,
					version: 1,
				},
				"apikey"
			);
		}
		m.reply(`_Sedang Di Proses, Mohon Tunggu_`);
		conn.differentMe[m.sender] = true;
		await conn.sendButton(
			m.chat,
			"Done >//<",
			wm,
			res,
			[
				["Bagus", `${usedPrefix + command} ISayGoodForThis`],
				["Jelek", `${usedPrefix + command} ISayBadForThis`],
			],
			m
		);
	} catch (e) {
		console.log(e);
		m.reply("Gagal");
	} finally {
		delete conn.differentMe[m.sender];
	}
};
handler.help = ["turnmeanime", "drawme", "jadianime2"];
handler.tags = ["main", "anime"];
handler.command = ["turnmeanime", "drawme", "jadianime2"];
handler.premium = true
export default handler;
