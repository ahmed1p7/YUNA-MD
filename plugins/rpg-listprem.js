let handler = async (m, { conn, args }) => {
  let usuario = global.db.data.users[m.sender].premiumTime
  let user = Object.entries(global.db.data.users).filter(user => user[1].premiumTime).map(([key, value]) => {
    return { ...value, jid: key }
  })
  let name = '๐๏ธ ูููุฒ'
  //let fkon = { key: { fromMe: false, participant: `${m.sender.split`@`[0]}@s.whatsapp.net`, ...(m.chat ? { remoteJid: '16504228206@s.whatsapp.net' } : {}) }, message: { contactMessage: { displayName: `${name}`, vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;a,;;;\nFN:${name}\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}}
  let premTime = global.db.data.users[m.sender].premiumTime
  let prem = global.db.data.users[m.sender].premium
  let waktu = clockString(`${premTime - new Date() * 1} `)
  let sortedP = user.map(toNumber('premiumTime')).sort(sort('premiumTime'))
  let len = args[0] && args[0].length > 0 ? Math.min(100, Math.max(parseInt(args[0]), 10)) : Math.min(10, sortedP.length)
  await conn.sendButton(m.chat, `${htki} *๐๏ธ PREMIUM ๐๏ธ* ${htka}
  
*โญ เผปโฆเผบ ูุนูููุงุช ูููุฒุฉ เผปโฆเผบ*
*โโข ูุณุชุฎุฏู*\n*โโข* ${conn.getName(m.sender)}
${prem ? `${clockString (usuario - new Date() * 1)}` : 'โโข *ููุช ูููุฒ*\nโ๐ซ ุงูุชูุช ูููู '}
*โฐโขยทโโโโโโโโโโโโโโโยทโข*

โญโขยทโโโโโโโโโโโโโโโยทโข
๐ ๐๐๐๐ผ๐๐๐๐ ๐๐๐๐๐๐๐
โฐโขยทโโโโโโโโโโโโโโโยทโข${sortedP.slice(0, len).map(({ jid, name, premiumTime, prem, registered }, i) => `\n\nโญโโฆ ${registered ? name : conn.getName(jid)}\nโโข wa.me/${jid.split`@`[0]}\n${premiumTime > 0 ? `${clockString (premiumTime - new Date() * 1)}` : 'โ๐ซ ๐พ๐ผ๐ฟ๐๐พ๐ผ๐ฟ๐ : ๐๐๐๐๐ฟ ๐๐๐'}`).join`\nโฐโโโโโโโโโโโยทโข`}
โฐโโโโโโโโโโโยทโข`.trim(), `๐๏ธ ๐ฃ ๐ฅ ๐ ๐  ๐ ๐จ ๐  โข ${prem ? 'โ' : 'โ'}\n${wm}`, null, [[`${prem ? 'โฆ ๐ฟ๐๐๐๐๐๐๐ผ๐ ๐๐๐๐๐๐๐ โฆ': 'โฆ ๐พ๐๐๐๐๐ผ๐ ๐๐ผ๐๐ ๐๐๐๐๐๐๐ โฆ'}`, `${prem ? '.allmenu': '.pase premium'}`]]) //${premiumTime > 0 ?
setTimeout(() => {
    if (global.db.data.chats[m.chat].deletemedia) conn.deleteMessage(m.chat, key)
  }, global.db.data.chats[m.chat].deletemediaTime)
}
handler.help = ['premlist [angka]']
handler.tags = ['info']
handler.command = /^(listprem|premlist|listavip|viplista)$/i
//handler.command = /^(vip|prem|premium|lista|list)vip|prem|premium|lista|list$/i

export default handler

function clockString(ms) {
  let ye = isNaN(ms) ? '--' : Math.floor(ms / 31104000000) % 10
  let mo = isNaN(ms) ? '--' : Math.floor(ms / 2592000000) % 12
  let d = isNaN(ms) ? '--' : Math.floor(ms / 86400000) % 30
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000) % 24
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return ['โ ', ye, ' *๐๏ธ Aรฑos : Year*\n', 'โ ', mo, ' *โ Mes : Month*\n', 'โ ', d, ' *โ๏ธ Dรญas : Days*\n', 'โ ', h, ' *โฐ Horas : Hours*\n', 'โ ', m, ' *๐ Minutos : Minutes*\n', 'โ ', s, ' *โฑ๏ธ Segundos : Seconds*'].map(v => v.toString().padStart(2, 0)).join('')
}

function sort(property, ascending = true) {
  if (property) return (...args) => args[ascending & 1][property] - args[!ascending & 1][property]
  else return (...args) => args[ascending & 1] - args[!ascending & 1]
}

function toNumber(property, _default = 0) {
  if (property) return (a, i, b) => {
    return { ...b[i], [property]: a[property] === undefined ? _default : a[property] }
  }
  else return a => a === undefined ? _default : a
}
