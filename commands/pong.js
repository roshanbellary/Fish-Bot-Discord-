const Discord = require('discord.js')
module.exports ={
    name:"pong",
    description:"Ping!",
    execute(message,args, bot){
        message.channel.send(new Discord.MessageEmbed().setTitle("pong").setDescription("Ping!"))
    }
}