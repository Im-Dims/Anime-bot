import util from "util";
import path from "path";

let handler = async (m, { conn }) => {
	let vn = "./loli/sc1.mp3";
	conn.sendFile(m.chat, vn, "sc.mp3", null, m, true, {
		type: "audioMessage",
		ptt: true,
	});
};
handler.customPrefix = /^(.sc|.sourcecode|.script|.esceh|.scrip)$/i;
handler.command = new RegExp();

export default handler;