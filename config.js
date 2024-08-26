//UBAH UBAH DISINI BRO JANGAN LUPA SUBREK YT DELTA TECH//
require("./all/module")
global.owner = "6287784094306" 
global.namaCreator = "LynnZxD" 
global.autoJoin = false
global.antilink = false
global.versisc = '2.0'
global.codeInvite = ""
global.isLink = 'wa.me/6287784094306' 
global.thumb = fs.readFileSync("./thumb.png") 
global.audionya = fs.readFileSync("./all/sound.mp3") 
global.packname = "BOTZ LYNN BUG" 
global.author = "BY LYNN HOST" 
global.jumlah = "5" 
global.namabot = "BOT VVIP LYNN V2" 
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})