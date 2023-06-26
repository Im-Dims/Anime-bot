import util from "util";
import path from "path";

let handler = async (m, { conn }) => {
	let vn = "./loli/ini-menunya.mp3";
	conn.sendFile(m.chat, vn, "ini-menunya.mp3", null, m, true, {
		type: "audioMessage",
		ptt: true,
	});
};
handler.customPrefix = /^(.menu|.help|.all)$/i;
handler.command = new RegExp();

export default handler;
