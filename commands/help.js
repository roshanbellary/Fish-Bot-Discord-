const Discord = require('discord.js');
module.exports = {
    name: "help",
    description: "Prints out the name of every command along with its description",
    execute(message, args, bot) {
        result = " "
        bot.commands.forEach(com => {
            if (typeof(com.name) != 'undefined') { result += "-" + com.name + "\n" + "   -" + com.description + "\n\n"; } else {}
        })
        message.channel.send(new Discord.MessageEmbed().setTitle("Command List").setDescription(result));
    }
}