import fetch from 'node-fetch'
import { facebookDl } from './scraper.js'
import { savefrom, facebookdl, facebookdlv2 } from '@bochilteam/scraper'
import fbDownloader from 'fb-downloader-scrapper'
let handler = async (m, { conn, args, command, usedPrefix }) => {
let user = global.db.data.users[m.sender]
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
if (!args[0]) return conn.reply(m.chat, `${lenguajeGB['smsAvisoMG']()}\nأدخل رابط فيسبوك لتنزيل الفيديو\nمثل\n*${usedPrefix + command} https://fb.watch/dcXq_0CaHi/*`, fkontak, m)
if (!args[0].match(/www.facebook.com|fb.watch/g)) return conn.reply(m.chat, `${lenguajeGB['smsAvisoMG']()}\nأدخل رابط فيسبوك لتنزيل الفيديو\nمثل\n*${usedPrefix + command} https://fb.watch/dcXq_0CaHi/*`, fkontak, m)
const sections = [
{
title: htjava + ' 📡 قائمة التحميل  ' + htjava,
rows: [
{title: "📡 فيس بوك  (اختيار 1) ", rowId: `${usedPrefix}fb1 ${args[0]}`},
{title: "📡   (اختيار 2) ", rowId: `${usedPrefix}fb2 ${args[0]}`},
//{title: "📡 𝙁𝘼𝘾𝙀𝘽𝙊𝙊𝙆 (𝙤𝙥𝙘𝙞𝙤𝙣 3) ", rowId: `${usedPrefix}fb3 ${args[0]}`},
//{title: "📡 𝙁𝘼𝘾𝙀𝘽𝙊𝙊𝙆 (𝙤𝙥𝙘𝙞𝙤𝙣 4) ", rowId: `${usedPrefix}fb4 ${args[0]}`},
//{title: "📡 𝙁𝘼𝘾𝙀𝘽𝙊𝙊𝙆 (𝙤𝙥𝙘𝙞𝙤𝙣 5) ", rowId: `${usedPrefix}fb5 ${args[0]}`}
]}]	
const listMessage = {
text: `\nحدد خيارا لتنزيل `,
footer: `*بريميوم ${user.premium ? "✅": "❌"}*\n${wm}`,
title: `*⎔───ꕤ 📡 فيس بوك ꕤ───⎔*`,
buttonText: `🛰️ اختر تنزيل 🛰️`,
sections }  
try {
let contenido = `✅ فيديو الفيسبوك \n${wm}`
switch (command) { 
case "facebook": case "fb": case "facebookdl": case "fbdl":                
await conn.sendMessage(m.chat, listMessage, {quoted: fkontak} )
break      
case "facebook1": case "fb1": case "facebookdl1": case "fbdl1": 
let vio = await fetch(`https://api.violetics.pw/api/downloader/facebook?apikey=beta&url=${args[0]}`)  
let vioo = await vio.json()
let videovio = `${vioo.result.hd.url || vioo.result.sd.url}`
await conn.reply(m.chat, `${lenguajeGB['smsAvisoEG']()}\nانتظر لحظة ، يتم تنزيل الفيديو الخاص بك `, fkontak, m)
await conn.sendFile(m.chat, videovio, `error.mp4`, contenido, m)
break
//let res = await fbDownloader(args[0])
//for (let result of res.download) {
//let ur = result.url
//await conn.sendMessage(m.chat, { video: { ur }, caption: contenido }, { quoted: m })}


case "facebook2": case "fb2": case "facebookdl2": case "fbdl2":   
await conn.reply(m.chat, `${lenguajeGB['smsAvisoEG']()}\nانتظر لحظة ، يتم تنزيل الفيديو الخاص بك `, fkontak, m)
const { result } = await facebookdl(args[0]).catch(async _ => await facebookdlv2(args[0]))
for (const { url, isVideo } of result.reverse()) await conn.sendMessage(m.chat, { video: { url }, fileName: `error.mp4`, mimetype: 'video/mp4' , caption: contenido }, { quoted: m })   
break
//let ress = await facebookDl(args[0]).catch(async _ => await savefrom(args[0])).catch(_ => null)
//let urll = ress?.url?.[0]?.url || ress?.url?.[1]?.url || ress?.['720p'] || ress?.['360p']
//await conn.sendMessage(m.chat, { video: { urll }, caption: contenido }, { quoted: m })  

}} catch {
await m.reply(`${lenguajeGB['smsAvisoFG']()} حدث خطأ ما ، تذكر استخدام رابط FACEBOOK صالح `)
}}
handler.command = /^(facebook|fb|facebookdl|fbdl|facebook1|fb1|فيس|fbdl1|facebook2|fb2|facebookdl2|fbdl2)$/i
handler.limit = 3
export default handler
