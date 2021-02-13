const  Discord  = require("discord.js");
module.exports = {
    name:"command",
    description:"provides a detailed description of every command",
    execute(message, args, bot){
        if (bot.commands.has(args[0])){
            const mes = new Discord.MessageEmbed()
            .setTitle(bot.commands.get(args[0]).name)
            .setDescription(bot.commands.get(args[0]).description)
            message.channel.send(mes);
        }
        else{
            message.channel.send("Not a recognized command");
        }
    }
}