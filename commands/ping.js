const { DiscordAPIError } = require("discord.js");

const Discord = require('discord.js')
module.exports = {
    name:'ping',
    description:'Pong!',
    execute(message,args, bot){
        message.channel.send(new Discord.MessageEmbed().setTitle("ping").setDescription("Pong!"));
    },
};