require('dotenv').config();
const fs = require('fs')
const fetch = require('node-fetch')
const Discord = require('discord.js');
const bot = new Discord.Client();
bot.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
    const command = require('./commands/' + file.toString())
    bot.commands.set(command.name, command);
}
const TOKEN = process.env.TOKEN;
bot.login(TOKEN);
bot.on('ready', () => {
    console.info(`Logged in as ${bot.user.tag}!`);
    bot.guilds.cache.forEach((guild) => {
        console.info("-" + guild.name);
        guild.channels.cache.forEach((channel) => { console.info("\t-" + channel.name) })
    })
});
bot.on('message', msg => {
    if (((msg.channel == "755097959955431494") &&((msg.author.id!="525525860376117248")&&(msg.author.id!="581179419549237258")&&(msg.author.id!="530819034933887003")))){
        msg.delete();
    }else{
    if (msg.content.toLowerCase().includes('weng')) {
        msg.react('🤤');
    } else if (msg.content.toLowerCase().includes('brayden') || msg.content.toLowerCase().includes('tam')||msg.content.toLowerCase().includes("fortnite")) {
        if (Math.floor(Math.random() * 3) < 1) {
            msg.react('🤕');
        }
    }
    if (msg.content.toLowerCase().includes('gu ') || msg.content.toLowerCase().includes('alex ') || msg.content.toLowerCase().includes('brad') || msg.content.toLowerCase().includes('sheryl') || msg.content.toLowerCase().includes('jennifer') || msg.content.toLowerCase().includes('roshan') || msg.content.toLowerCase().includes("song")) {
        msg.react('🧠')
    }
    if (msg.content.toLowerCase().includes('evan ') || msg.content.toLowerCase().includes('wang ')) {
        msg.react('🧠');
    }
    if (msg.content.toLowerCase().includes('tevin') || msg.content.toLowerCase().includes('tevvy')) {
        msg.react('💻');
    }
    if (msg.content.toLowerCase().includes("fishy")) {
        msg.react('♥️')
    }
    if (msg.content.toLowerCase().includes("william")||msg.content.toLowerCase().includes("chen")||msg.content.toLowerCase().includes("willy")){
        msg.react('😇')
    }
    if (msg.content.toLowerCase().includes("stephen")||msg.content.toLowerCase().includes("joana")){
        msg.react('🆒')
    }
    if (msg.content.toLowerCase().includes("jonah")){
        msg.react('🛩')
    }
    if (!msg.content.startsWith('*') || msg.author.bot) return;
    const args = msg.content.slice(1).trim().split(/ +/);
    const command = args.shift().toLowerCase();
    if (!bot.commands.has(command)) return;
    
    try {
        if ((msg.author.id=="416649251133718528")&&(command=="help")){
            msg.channel.send(new Discord.MessageEmbed().setTitle("The Biggest Douchebag in Existence").setDescription("Did it hurt? When you fell from someone's butt into the toilet water, you piece of shit."))
        }else{
            bot.commands.get(command).execute(msg, args, bot);
        }
    } catch (error) {
        console.error(error);
        msg.reply('there was an error trying to execute that command!');
     }
    }
});
