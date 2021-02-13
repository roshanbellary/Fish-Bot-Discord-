const Discord = require("discord.js");
module.exports = {
    name:"undefined",
    description:"it's not even a fucking command",
    execute(message, args, bot){
        message.channel.send(new Discord.MessageEmbed().setTitle().setDescription("Undefined isn't even a command you fucking idiots"))
    }
}