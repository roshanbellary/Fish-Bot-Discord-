Discord = require('discord.js')
module.exports = {
    name:"will",
    description:"What up my broooootherrrrssss? My name is Will",
    execute(message, args, bot){
        message.channel.send(new Discord.MessageEmbed().setTitle("My name is Will").setDescription("Hello, my broooootherrrrssss! My name is Will, and my favorite place is the Bahamas"))
    }
}