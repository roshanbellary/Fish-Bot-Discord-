const Discord = require('discord.js')
module.exports ={
    name:"rate",
    description:"Rates stuff yaknow",
    execute(message, args, bot){
        result = ""
        for (i=0;i<args.length;i++){
            result+=args[i]+" "
        }
        store = result.replace(/ /g,"").toLowerCase()
        if (store.includes("weng")|| store.includes("Weng") || store.includes("fishy")||store.includes("fi$hy")|| store.includes('flshy')|| store.includes('f1shy')||store.includes('f!shy')||result.includes('翁')||store.includes('f|shy')||store.includes('f|sh丫')||store.includes('fish丫')||store.includes('ƒishy')||store.includes('ƒish丫')||store.includes('stephen')||store.includes('god')||store.includes('bible')||store.includes('jesus')||store.includes('moses')||store.includes('david')||store.includes('abel')||store.includes('job')||store.includes('roshan')||store.includes('joanna')||store.includes('jonah')||store.includes('deca')||store.includes('dagana')||store.includes('rohil')){
            message.channel.send(new Discord.MessageEmbed().setTitle(result).setDescription("Rating: 10"))
        }else if (store.includes("brayden")|| store.includes("tam")||store.includes('satan')||store.includes('cain')||store.includes("anime")){
            message.channel.send(new Discord.MessageEmbed().setTitle(result).setDescription("Rating: 0"))
        }else{
            message.channel.send(new Discord.MessageEmbed().setTitle(result).setDescription("Rating: "+Math.floor(Math.random(0)*11).toString()))
        }
    }
}