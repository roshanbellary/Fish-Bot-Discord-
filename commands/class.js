const Discord = require('discord.js')
module.exports = {
    name:"class",
    description:"darn rip I have class w/ u jk jk",
    execute(message,args,bot){
        if (args.length<1){
            message.channel.send(new Discord.MessageEmbed().setTitle("I hate having class with you").setDescription("<@581179419549237258> darn rip I have class w/ u jk jk"))
        }else{
            let result = ""
            for (var i = 0; i<args.length;i++){
                result+=args[i];
            }
            message.channel.send(new Discord.MessageEmbed().setTitle("I hate having class with you").setDescription(result +" darn rip I have class w/ u jk jk"))
        }
        message.delete()
    }
}