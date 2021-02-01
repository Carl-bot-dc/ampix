const Discord = require('discord.js');
const bot = new Discord.Client();
const prefix = ',.';

bot.on('ready', () =>{
    console.log('A Bot Elindult!')
})

bot.on('message', message => {
    if(message.content === prefix + "help") {
        message.channel.send('Hamarosan!')
    }
})

bot.login(config.env.token);