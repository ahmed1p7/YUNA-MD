let handler = async (m, { conn, isOwner }) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender  
let user = conn.getName(m.sender)
let pareja = global.db.data.users[m.sender].pasangan 
let relacion = Object.entries(global.db.data.users).filter(user => user[1].pasangan)
let caption = `๐ ูุงุฆูุฉ ุงูุฃุฒูุงุฌ 
*โญโขยทโโโโโโโโโโโโโโโโโโโยทโข*
โ *ูุฌููุน : ${relacion.length} ุงููุณุชุนูููู* ${relacion ? '\nโ\n' + relacion.map(([jid], i) => `
โ *${i + 1}.* ${conn.getName(jid) == undefined ? 'ูุง ุดุฑูู' : conn.getName(jid)}
โ ${isOwner ? '@' + jid.split`@`[0] : jid}\nโ - - - - - - - - -`.trim()).join('\n') : ''}
*โฐโขยทโโโโโโโโโโโโโโโโโโโยทโข*`
await conn.sendButton(m.chat, caption, `๐ ุฒูุฌุชู โข ${pareja ? `*${user} ๐ ${conn.getName(pareja)}*` : `โ *ูุง ุดุฑูู*`}\n${wm}`, null, [ 
['๐  ๐ ๐ก ๐จ โ๏ธ', '/menu']], m, { mentions: await conn.parseMention(caption) })
}
handler.command = /^(listaparejas|ุฒูุฌุงุช|listship|listpareja)$/i

export default handler
