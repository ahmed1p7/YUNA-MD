import { xpRange } from '../lib/levelling.js'
import PhoneNumber from 'awesome-phonenumber'
import { promises } from 'fs'
import { join } from 'path'
let handler = async (m, { conn, usedPrefix, command, args, usedPrefix: _p, __dirname, isOwner, text, isAdmin, isROwner }) => {
  
  
const { levelling } = '../lib/levelling.js'
//let handler = async (m, { conn, usedPrefix, usedPrefix: _p, __dirname, text }) => {

let { exp, limit, level, role } = global.db.data.users[m.sender]
let { min, xp, max } = xpRange(level, global.multiplier)

let d = new Date(new Date + 3600000)
let locale = 'es'
let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let date = d.toLocaleDateString(locale, {
day: 'numeric',
month: 'long',
year: 'numeric'
})
let dateIslamic = Intl.DateTimeFormat(locale + '-TN-u-ca-islamic', {
day: 'numeric',
month: 'long',
year: 'numeric'
}).format(d)
let time = d.toLocaleTimeString(locale, {
hour: 'numeric',
minute: 'numeric',
second: 'numeric'
})
let _uptime = process.uptime() * 1000
let _muptime
if (process.send) {
process.send('uptime')
_muptime = await new Promise(resolve => {
process.once('message', resolve)
setTimeout(resolve, 1000)
}) * 1000
}
let { money } = global.db.data.users[m.sender]
let muptime = clockString(_muptime)
let uptime = clockString(_uptime)
let totalreg = Object.keys(global.db.data.users).length
let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
let replace = {
'%': '%',
p: _p, uptime, muptime,
me: conn.getName(conn.user.jid),

exp: exp - min,
maxexp: xp,
totalexp: exp,
xp4levelup: max - exp,

level, limit, weton, week, date, dateIslamic, time, totalreg, rtotalreg, role,
readmore: readMore
}
text = text.replace(new RegExp(`%(${Object.keys(replace).sort((a, b) => b.length - a.length).join`|`})`, 'g'), (_, name) => '' + replace[name])
  
//let name = await conn.getName(m.sender)
let pp = './media/menus/Menu1.jpg'
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let mentionedJid = [who]
let username = conn.getName(who)
//let user = global.db.data.users[m.sender]
//user.registered = false

let Terminos = `

* _ جميع المعلومات المذكورة هنا لا تستثني مالك الروبوت والمالكي الدائنين من استخدام YunaBot-MD_ *
 * _ نحن لسنا مسؤولين عن قلة معرفتك بهذه المعلومات ._ *


 * شروط الخصوصية *
 _- نحن ندرك الاستخدام المستمر الذي يمكنك منحه للبوت ، ونضمن أيضًا أن المعلومات مثل (الصور ومقاطع الفيديو والروابط والموقع والتسجيلات الصوتية والملصقات و Gif وجهات الاتصال التي تقدمها حول الرقم (الأرقام الرسمية) )) لم ولن يتم مشاركتها مع أي شخص ، ولن يتم استخدام البيانات المذكورة خارج بيئة BOT.

 _- ما فعلته مع BOT متروك لك فقط لأنه في الرقم (الأرقام) الرسمية ، يتم حذف الدردشة كل 24 ساعة ، وفقًا لوقت رسائل WhatsApp المؤقتة ._

 _- من الممكن ألا يتم تنشيط الروبوت في الرقم (الأرقام) الرسمية 24 ساعة في اليوم ، 7 أيام في الأسبوع ، وهذا لا يعني أنه ليس كذلك أو أن المالكين غير الرسميين يمكنهم القيام بذلك ._

 _- لن تعرض الدردشة المجهولة لأمر #start ، التي تستحق التكرار ، أي بيانات للمستخدمين بواسطة YunaBot.  هذا لا يعني أن الأشخاص الذين يستخدمون هذه الوظيفة يمكنهم الكشف عن بياناتهم.  في الرقم (الأرقام) الرسمية.

 _- البيانات التي حصل عليها YunaBot في الحسابات الرسمية للمستخدمين والمجموعات والإعدادات الخاصة بها يمكن إعادة تشغيلها و / أو تعديلها و / أو تصحيحها من أجل أن يكون الروبوت في ظروف الاستخدام المثلى. (المستخدمون) يمكنهم طلب التعويض من خلال Instagram أو من خلال الأمر #Report. يجب عليك تقديم الدليل) ._

 _- لسنا مسؤولين إذا كانت هناك تعديلات على هذا الروبوت ليست رقم (أرقام) رسمية وتستخدم مستودع GitHub الذي لا يتوافق مع المستوى الرسمي ، أو إذا قام مستخدمو الجهات الخارجية بتنفيذ عمليات تكامل تعرض المستخدمين للخطر (مثل) عندما باستخدام إصدارات غير رسمية.

 _- تضمن وظيفة الروبوت الفرعي أمان بياناتك المطبقة على الحسابات الرسمية ._


 *تعليمات الاستخدام*
 _- المعلومات الموجودة في هذا الروبوت والمستخدم الذي يستخدمها سيفترض أنه يعرف الشروط والأحكام بطريقة لن تكون هناك أي مضايقات عند استخدام خاص لوظائف الروبوت ._

 _- يحتوي الروبوت على مادة يمكن رؤيتها فقط للأشخاص الذين تزيد أعمارهم عن 18 عامًا ، ونحن لسنا مسؤولين إذا لم تستوف الحد الأدنى لسن استخدام المواد للبالغين ._

 _- الصور ومقاطع الفيديو والتسجيلات الصوتية التي يمتلكها هذا الروبوت للاستخدام العام ، ولكن سيتم اعتباره عدم احترام عند إجراء تعديلات على المواد الموجودة بالفعل والتي تحمل اسم الروبوت أو المعلومات ذات الصلة.

 _- عند الاستفادة من طلب عضوية المجموعة باستخدام "حساب رسمي" ، يوصى بعدم تعرض المجموعة لمشكلات كراهية أو فيروسات أو محتوى غير لائق أو مشكلات تمييزية أو حملات لا أساس لها.

 _- إذا تلقيت اتصالًا رسميًا باعتباره رقمًا (أرقامًا) رسميًا ، فاحافظ على الاحترام بنفس الطريقة إذا تلقيت رسالة دون استخدام أمر الحفاظ على الاحترام لأنه في الحالة الأخيرة يمكن أن يكون شخصًا حقيقيًا.

 _- حسابات YunaBot الرسمية ليست مسؤولة عن الاستخدام الذي تقوم به مع وظيفة "Sub Bot" ._


 *تعليمات الاستخدام*
 _- لا تقم بإجراء أو محاولة الاتصال أو الاتصال بالفيديو مع الروبوت أثناء كونه رقمًا (أرقامًا) رسميًا لأنه يعيق تشغيل BOT._

 _- لا تستخدم الروبوت كرقم (أرقام) رسمية لتنفيذ أي عمل عدائي قد يضر بعمل الروبوت.

 _- لا تستخدم أمر الرسائل الاقتحامية (SPAM) بشكل متكرر ، حيث أنه سيتسبب في حدوث خلل في BOT ، ولا ترسل رسائل BOT التي قد تضر بوظائفها.

 _- عند استخدام أوامر معينة تهدف إلى تقويض الانزعاج أو القلق أو الانزعاج أو أي مصطلح فظ آخر ، سيتم اتخاذ العقوبات أو مكالمات التنبيه ذات الصلة للسيطرة على سلامة المستخدمين وتشغيل YunaBot. _


*~ شكرا جزيلا على الوقت الذي قضيته في إطلاع نفسك على YunaBot*
`.trim()
conn.sendHydrated(m.chat, Terminos,  `${wm}\nنحن نوافق على التعاون مع الأشخاص الملتزمين ، والحفاظ على الاحترام يمكنك الاتصال إذا كان هذا هو الحال لهذا الحساب الرسمي | https://wa.me/+393271166550?text=سلام`, pp, 'https://github.com/ahmed1p7', 'YUNA-MD ', null, null, [
['جميع الأوامر💫', '.allmenu'],
['قائمة الأوامر🌟', '/menulista'],
['الأوامر ⚡', '#menu']
], m,)
}

handler.customPrefix = /terminos|términos|شروط|términos, condiciones y privacidad|terminos, condiciones y privacidad|términos y condiciones y privacidad|terminosycondicionesyprivacidad|terminosycondiciones|terminos y condiciones y privacidad|terminos y condiciones|terminos y condiciones|terminos de uso|Terminos de uso|Terminó se uso|términos de uso|Términos de uso|Términos y condiciones/i
handler.command = new RegExp
//handler.register = true
handler.exp = 70
export default handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)
function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}
