import util from "util";
import path from "path";

let handler = async (m, { conn }) => {
	let vn = "./loli/oyasumi1.mp3";
	conn.sendFile(m.chat, vn, "oyasumi1.mp3", null, m, true, {
		type: "audioMessage",
		ptt: true,
	});
};
handler.customPrefix = /^(malam|oyasumi|oyasuminasai)$/i;
handler.command = new RegExp();

export default handler;
