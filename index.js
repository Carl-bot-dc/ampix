const Discord = require('discord.js');
const bot = new Discord.Client();
const prefix = ',.';
const token = 'NzA0OTUyMjk1ODYyODI5MDc2.Xqkn_A.Wv7cHW2sCUH5BDF8krDrlp4ykcI';

bot.on('ready', () =>{
    console.log('A Bot Elindult!');
    bot.user.setActivity('Hamarosan Mükszik!', { type: 'WATCHING'}).catch(console.error);
})

bot.on('message', message => {
    if(message.content === prefix + "help") {
        message.channel.send('Hamarosan!')
    }
})

bot.login(token);