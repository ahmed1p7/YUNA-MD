let handler = async (m, { conn, usedPrefix}) => {
  
  const fkontak = {
	"key": {
    "participants":"0@s.whatsapp.net",
		"remoteJid": "status@broadcast",
		"fromMe": false,
		"id": "Halo"
	},
	"message": {
		"contactMessage": {
			"vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`
		}
	},
	"participant": "0@s.whatsapp.net"
}
  
	let banteng = global.db.data.users[m.sender].banteng
	let harimau = global.db.data.users[m.sender].harimau
	let gajah = global.db.data.users[m.sender].gajah
	let kambing = global.db.data.users[m.sender].kambing
	let panda = global.db.data.users[m.sender].panda
	let buaya = global.db.data.users[m.sender].buaya
	let kerbau = global.db.data.users[m.sender].kerbau
	let sapi = global.db.data.users[m.sender].sapi
	let monyet = global.db.data.users[m.sender].monyet
	let babihutan = global.db.data.users[m.sender].babihutan
	let babi = global.db.data.users[m.sender].babi
	let ayam = global.db.data.users[m.sender].ayam

	let ndy = `
*${htki} ðžððððžððð ${htka}*
    
 *${rpg.emoticon('bull')} âĄïļ ${banteng}*
 *${rpg.emoticon('tiger')} âĄïļ ${harimau}*
 *${rpg.emoticon('elephant')} âĄïļ ${gajah}*
 *${rpg.emoticon('kambing')} âĄïļ ${kambing}*
 *${rpg.emoticon('panda')} âĄïļ ${panda}*
 *${rpg.emoticon('buaya')} âĄïļ ${buaya}*
 *${rpg.emoticon('kerbau')} âĄïļ ${kerbau}*
 *${rpg.emoticon('cow')} âĄïļ ${sapi}*
 *${rpg.emoticon('monyet')} âĄïļ ${monyet}*
 *${rpg.emoticon('Jabali')} âĄïļ ${babihutan}*
 *${rpg.emoticon('babi')} âĄïļ ${babi}*
 *${rpg.emoticon('ayam')} âĄïļ ${ayam}*`.trim()
await conn.sendButton(m.chat, ndy, `ð ðžðĢððĒððĄððĻ ðĄððĻðĐðĪðĻ ðĨðð§ð ðūðĪðððĢðð§\nðžðĢððĒððĄðĻ ð§ððððŪ ðĐðĪ ððĪðĪð \n${wm}`, null, [['ððĪðĄðŦðð§ ððĄ ðððĢðŠĖ | ð―ððð  ðĐðĪ ðððĢðŠ âïļ', '/menu'], [`ð ððĢðŦððĢðĐðð§ððĪ | ððĢðŦððĢðĐðĪð§ðŪ`, `.inventario`]], fkontak, m)

}
handler.help = ['kandang']
handler.tags = ['rpg']
handler.command = /^(kandang|animales|animals)$/i

export default handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)
