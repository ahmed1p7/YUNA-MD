let media = './media/menus/Menuvid3.mp4'
let handler = async (m, { conn, command }) => {
let str = `
💞 مرحبا بكم في المجموعات الرسمية
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
أدعوكم للانضمام إلى مجتمع يونا. 💫 استمتع بوقتك وتفاعل معنا. 
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
*اصدار${gt}*
➥ ${vs}
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
✅ المجموعة الرسمية ${gt}
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
✨ *تعرف على الأخبار!!!*
🧸  *${nna}*\n
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
🧸  *${nn}*\n
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
🧸  *${nnn}*\n
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
🧸  *${nnnt}*\n
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
🧸  *${nnntt}*\n
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
🧸  *${nnnttt}*\n
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
 *https://chat.whatsapp.com/DP8EGDUOzPM071V5SUaiNG*\n
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
*من فضلكم، حافظوا على الاحترام.*
`.trim()
  
conn.sendHydrated(m.chat, str, `YUNA BOT\n${asistencia}\n\n` + wm, media, 'https://github.com/ahmed1p7', 'YUNA BOT', null, null, [
[' وقت تشغيل ✅', '.sc'],
['تبرع', '.donar'],
['الأوامر☘️', '/menu']
], m,)}

handler.command = /^linkgc|grupos|gruposgatabot|gatabotgrupos|قروب بوت|gruposdegatabot|groupofc|gruposgb|grupogb|groupgb$/i
handler.exp = 33

export default handler
