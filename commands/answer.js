const Discord = require('discord.js');
module.exports = {
    name:"answer",
    description:"Answers correctly 100% of the time",
    execute(message,args, bot){
        let x = Math.floor(Math.random()*4);
        photos = ["8balllater.png","8ballno.png","8balluncertain.png","8ballyes.png"];
        let photo = photos[x];
        result = ""
        for (let i = 0; i<args.length;i++){
            result+=(args[i]+" ");
        }
        message.channel.send(new Discord.MessageEmbed()
            .setTitle("8Ball")
            .attachFiles(["./assets/"+photo])
            .setImage('attachment://'+photo)
            .setDescription("Question:"+result+"\nAnswer:") 
        )

    }
}