let media = './media/menus/Menuvid2.mp4'
let handler = async (m, { conn, command }) => {
let str = `
π ΩΨ±Ψ­Ψ¨Ψ§ Ψ¨ΩΩ ΩΩ Ψ§ΩΨ­Ψ³Ψ§Ψ¨Ψ§Ψͺ Ψ§ΩΨ±Ψ³ΩΩΨ©
βββββββββββββββββ
β *GITHUB*
*${md}*
βββββββββββββββββ
β *INSTAGRAM *
*${ig}*
βββββββββββββββββ
β *YOUTUBE*
*${yt}*
βββββββββββββββββ
*Ψ₯Ψ°Ψ§ ΩΨ§ΩΨͺ ΩΨ―ΩΩ Ψ΄ΩΩΩ Ψ£Ω Ψ§ΩΨͺΨ±Ψ§Ψ­Ψ§Ψͺ Ψ£Ω Ψ£Ψ³Ψ¦ΩΨ© Ψ ΩΩΨ§ ΨΉΩΩΩ Ψ³ΩΩ Ψ§ΩΨͺΩΩΩ ΩΨΉ ΩΨ§ΩΩ.*
`.trim()
  
conn.sendHydrated(m.chat, str, wm, media, 'https://github.com/ahmed1p7', 'YUNA-MD', null, null, [
['ππ§πͺπ₯π€π¨ πππππππ‘ππ¨ | ππ§π€πͺπ₯π¨ π°', '.grupos'],
['πΎπ§ππππ€π§π | πΎπ§πππ©π€π§ π', '#owner'],
['ππ€π‘π«ππ§ ππ‘ πππ£πͺΜ | π½πππ  π©π€ πππ£πͺ βοΈ', '/menu']
], m,)}

handler.command = /^cuentasoficiales|gataig|cuentasgb|cuentagb|accounts|gataaccounts|account|iggata|cuentasdegata|cuentasdegatabot|cuentagatabot|cuentasgatabot$/i
handler.exp = 35
export default handler
