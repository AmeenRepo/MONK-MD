const fs = require('fs')
const chalk = require('chalk')

//contact details
global.ownernomer = "916238768108"
global.ownername = "Ameen Ser"
global.ytname = "YT: Hermit Monk"
global.socialm = "GitHub: AmeenRepo"
global.location = "India, Kerala, kasaragod"

global.ownernumber = '916238768108'  //creator number
global.ownername = 'Ameen Ser' //owner name
global.botname = 'Monk-MD' //name of the bot

//sticker details
global.packname = 'MIMMI🐱(⁠◍⁠•⁠ᴗ⁠•⁠◍⁠)⁠❤'
global.author = 'AMEEN-SER'

//console view/theme
global.themeemoji = '🐱'
global.wm = "©Monk-MD"

//theme link
global.link = 'https://chat.whatsapp.com/GVxT4w51GIU3sndNPZGTnw'

//custom prefix
global.prefa = ['','!','.','#','&']

//false=disable and true=enable
global.autoRecording = false //auto recording
global.autoTyping = false //auto typing
global.autorecordtype = false //auto typing + recording
global.autoread = false //auto read messages
global.autobio = false //auto update bio
global.anti92 = false //auto block +92 
global.autoread_status = false //auto view status/story

//menu type 
//v1 is image menu, 
//v2 is link + image menu,
//v3 is video menu,
//v4 is call end menu
global.typemenu = 'v3'

//reply messages
global.mess = {
    done: 'Done✅',
    prem: 'This feature can be used by premium user only',
    admin: 'This feature can be used by admin only',
    botAdmin: 'This feature can only be used when the bot is a group admin ',
    owner: 'This feature can be used by owner only',
    group: 'This feature is only for groups',
    private: 'This feature is only for private chats',
    wait: '_Please Wait...._',    
    error: '```ERR CODE 01``` *MONK MD* ```CONTACT AMEEN SER```',
}

global.thumb = fs.readFileSync('./Media/Ameen-Ser.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})