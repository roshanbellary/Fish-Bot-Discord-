const { Message } = require("discord.js");

const Discord = require('discord.js')
module.exports = {
    name:"birthday",
    description:"finds the amount of time till Stephen's birthday",
    execute(msg,args,bot){
        let x = new Date();
        let sm = 1;
        let sd = 26;
        if (x.getMonth()>sm){
            let sy = x.getFullYear()
            console.info(sy);
            let result ="1/26/"+(sy+1).toString()
            let bday = new Date(result);
            msg.channel.send(new Discord.MessageEmbed().setTitle("Countdown to Bellarina's Bday 😲").setDescription("Days till his bday:"+Math.floor((bday-x)/(1000*3600*24)+1)+"\n\n    HAPPY :blush: BIRTHDAY :birthday: BRO!!! :sunglasses::stuck_out_tongue_winking_eye::weary::laughing: Its time :clock1130: to get LIT :fire: for your special :point_right::sunglasses::point_left: BIRTHDAY :confetti_ball:! You finna turn UP :point_up_2::exploding_head: and get DOWN :point_down::star_struck: on this BEAUTIFUL day :weary::two_hearts: because you're :eyes: a CHAMP:military_medal:and a COOL :sunglasses: DUDE :muscle:! Get all that :moneybag::money_mouth: and :zany_face::tropical_drink: and HAVE A HAPPY BIRTHDAY :confetti_ball::confetti_ball::confetti_ball: don't forget :triumph::triumph: to eat your cake :cake::yum: or your other cake :peach::weary::tongue::sweat_drops: because today you the MAN :cowboy::smirk::drooling_face:"));
        }else if ((x.getMonth()==sm) &&(x.getDay()>=sd)){
            let sy = x.getFullYear()
            let result ="1/26/"+(sy+1).toString()
            let bday = new Date(result);
            msg.channel.send(new Discord.MessageEmbed().setTitle("Countdown to Bellarina's Bday 😲").setDescription("Days till his bday:"+Math.floor((bday-x)/(1000*3600*24)+1)+"\n\n    HAPPY :blush: BIRTHDAY :birthday: BRO!!! :sunglasses::stuck_out_tongue_winking_eye::weary::laughing: Its time :clock1130: to get LIT :fire: for your special :point_right::sunglasses::point_left: BIRTHDAY :confetti_ball:! You finna turn UP :point_up_2::exploding_head: and get DOWN :point_down::star_struck: on this BEAUTIFUL day :weary::two_hearts: because you're :eyes: a CHAMP:military_medal:and a COOL :sunglasses: DUDE :muscle:! Get all that :moneybag::money_mouth: and :zany_face::tropical_drink: and HAVE A HAPPY BIRTHDAY :confetti_ball::confetti_ball::confetti_ball: don't forget :triumph::triumph: to eat your cake :cake::yum: or your other cake :peach::weary::tongue::sweat_drops: because today you the MAN :cowboy::smirk::drooling_face:"));
        }else{
            let sy = x.getFullYear();
            let result ="1/26/"+sy.toString();
            let bday = new Date(result);
            msg.channel.send(new Discord.MessageEmbed().setTitle("Countdown to Bellarina's Bday 😲").setDescription("Days till his bday:"+Math.floor((bday-x)/(1000*3600*24)+1)+"\n\n    HAPPY :blush: BIRTHDAY :birthday: BRO!!! :sunglasses::stuck_out_tongue_winking_eye::weary::laughing: Its time :clock1130: to get LIT :fire: for your special :point_right::sunglasses::point_left: BIRTHDAY :confetti_ball:! You finna turn UP :point_up_2::exploding_head: and get DOWN :point_down::star_struck: on this BEAUTIFUL day :weary::two_hearts: because you're :eyes: a CHAMP:military_medal:and a COOL :sunglasses: DUDE :muscle:! Get all that :moneybag::money_mouth: and :zany_face::tropical_drink: and HAVE A HAPPY BIRTHDAY :confetti_ball::confetti_ball::confetti_ball: don't forget :triumph::triumph: to eat your cake :cake::yum: or your other cake :peach::weary::tongue::sweat_drops: because today you the MAN :cowboy::smirk::drooling_face:"));
        }
    }
}