const Discord = require('discord.js');
const fs = require('fs')
module.exports = {
    name:"randomping",
    description:"It's fucking annoying lmao. Abuse of this commmand leads to permaban",
    execute(message,args,bot){
        message.delete();
        let list=Array.from(message.guild.members.cache.keys())
        let key = list[Math.floor(Math.random()*list.length)];
        message.channel.send("<@"+key+ "> your child support payments are accumulating :angry: :angry:")
        fs.readFile('/Users/roshanb/Documents/fishy_bot/discord-bot-sitepoint/assets/shame.json', 'utf8', function readFileCallback(err, data){
            if (err){
                console.log(err);
            } else {
                obj = JSON.parse(data);
                let a = false;
                let index = -1;
                count = 0;
                let i = null;
                for (let j in obj){
                    if (j==message.author.id){
                        a = true;
                        i=j;
                    }
                }
                if (a){
                    obj[i].pings++;
                    let json = JSON.stringify(obj);
                    fs.writeFile('/Users/roshanb/Documents/fishy_bot/discord-bot-sitepoint/assets/shame.json',json,(err)=>{return 1})
                }else{
                    obj[message.author.id] = {"name":message.author.id,"pings":1};
                    let json = JSON.stringify(obj);
                    fs.writeFile('/Users/roshanb/Documents/fishy_bot/discord-bot-sitepoint/assets/shame.json',json, (err)=>{return 1})
                }
                    
            }
        })
    }
}