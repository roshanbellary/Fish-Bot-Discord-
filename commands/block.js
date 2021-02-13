const Discord = require('discord.js');
var fs = require('fs');
module.exports = {
    name:"block",
    description:"Adds one to the block counter whenever Tam the great Czar blocks someone do -block *name* reset for that person to reset the block counter and do -block *name* to block someone",
    execute(message,args,bot){
        if (message.author.id == "416649251133718528" && !args.includes('reset')){
            fs.readFile('/Users/roshanb/Documents/fishy_bot/discord-bot-sitepoint/assets/block.json', 'utf8', function readFileCallback(err, data){
                if (err){
                    console.log(err);
                } else {
                    obj = JSON.parse(data);
                    let a = false;
                    let index = -1;
                    count = 0;
                    let i = null;
                    for (let j in obj){
                        if (j==args[0].toLowerCase()){
                            a = true;
                            i=j;
                        }
                    }
                    if (a){
                        obj[i].blocks++;
                        message.channel.send(new Discord.MessageEmbed().setTitle("Adding to "+i.toString().charAt(0).toUpperCase()+i.toString().slice(1)+"'s Block Counter").setDescription("Current Blocks:"+obj[i].blocks.toString()))
                        let json = JSON.stringify(obj);
                        fs.writeFile('/Users/roshanb/Documents/fishy_bot/discord-bot-sitepoint/assets/block.json',json,(err)=>{return 1})
                    }else{
                        obj[args[0].toLowerCase()] = {"name":args[0].toLowerCase(),"blocks":1};
                        message.channel.send(new Discord.MessageEmbed().setTitle(args[0].toLowerCase()+"'s Block Counter").setDescription("Current Blocks:1"))
                        let json = JSON.stringify(obj);
                        fs.writeFile('/Users/roshanb/Documents/fishy_bot/discord-bot-sitepoint/assets/block.json',json, (err)=>{return 1})
                    }
                    
                }
            })
        } else if ((message.author.id == "416649251133718528") && args.includes('reset')){
            fs.readFile('/Users/roshanb/Documents/fishy_bot/discord-bot-sitepoint/assets/block.json', 'utf8', function readFileCallback(err, data){
                if (err){
                    console.log(err);
                } else {
                    obj = JSON.parse(data);
                    let a = false;
                    let index = -1;
                    count = 0;
                    let i = null;
                    for (let j in obj){
                        if (j==args[0].toLowerCase()){
                            a = true;
                            i=j;
                        }
                    }
                    if (a){
                        obj[i].blocks=0;
                        message.channel.send(new Discord.MessageEmbed().setTitle("Resetting "+i.toString().charAt(0).toUpperCase()+i.toString().slice(1)+"'s Block Counter").setDescription("Current Blocks:0"))
                        let json = JSON.stringify(obj);
                        fs.writeFile('/Users/roshanb/Documents/fishy_bot/discord-bot-sitepoint/assets/block.json',json,(err)=>{return 1})
                    }else{
                        message.channel.send(new Discord.MessageEmbed().setTitle(args[0]+" has not been recognized as blocked").setDescription(args[0]+" hasn't even been blocked by Overlord Tam you fucking idiot. For wasting Fishy's time, you get: The Communist Manifesto reflects an attempt to explain the goals of Communism, as well as the theory underlying this movement. It argues that class struggles, or the exploitation of one class by another, are the motivating force behind all historical developments. Class relationships are defined by an era's means of production. However, eventually these relationships cease to be compatible with the developing forces of production. At this point, a revolution occurs and a new class emerges as the ruling one. This process represents the \"march of history\" as driven by larger economic forces. Modern Industrial society in specific is characterized by class conflict between the bourgeoisie and proletariat. However, the productive forces of capitalism are quickly ceasing to be compatible with this exploitative relationship. Thus, the proletariat will lead a revolution. However, this revolution will be of a different character than all previous ones: previous revolutions simply reallocated property in favor of the new ruling class. However, by the nature of their class, the members of the proletariat have no way of appropriating property. Therefore, when they obtain control they will have to destroy all ownership of private property, and classes themselves will disappear."))
                    }
                    
                }
            })
        }
    }
}