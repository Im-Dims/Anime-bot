import util from "util";
import path from "path";

let handler = async (m, { conn }) => {
	let vn = "./loli/kenapa.mp3";
	conn.sendFile(m.chat, vn, "kenapa.mp3", null, m, true, {
		type: "audioMessage",
		ptt: true,
	});
};
handler.customPrefix =
	/^(Bot|bot|p|P)$/i;
handler.command = new RegExp();

export default handler;
