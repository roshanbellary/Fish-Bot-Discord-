const Discord = require("discord.js")
module.exports  = {
    name : "weng",
    description:"The hottest man alive has some pretty fire quotes",
    execute(message, args, bot){
        let quotes = ["age is just a number", "Like what if a woman grew ballz", "Mom in truck truck in mom", "Yo I am dealing this","Halp","Mom money","Ur mom has big pp","when popcorn pops it multiplies","lil willy in a suit","i need to go pee rlly badly but i have cam on yah ill bring my cam into my bathroom","hisk hisk thats my rat","free pp for 99 cents","U run, dump, and run back",`1.I RANTO THJE BATHROOM
        2. I LOWERED THE TOILET SEAT
        3. I SAT ON IT\n
        4. I POOPED
        5. I GET UP
        6. I WIPE
        7. I RAISE THE TOILET SEAT
        wait shit no
        2 and 7 is mixed
        switch that
        OK
        8.
        I WASH MYU HANDS
        9. I RUN BACK
        10. I TURN MY CAM ON
        10 steps on how to poo
        ther u go`,`
        Deadseye4109/16/2020
        ...
        IDFK
        therealtumtum09/16/2020
        u defo skipped washing or wiping
        Deadseye4109/16/2020
        u want me to go right now?
        I WILL LITERALLY SHOW U
        PULL UP
        RIGHT NOW`];
        let pictures = [];
        x = Math.floor(Math.random()*quotes.length)
        message.channel.send(new Discord.MessageEmbed().attachFiles(["/Users/roshanb/Documents/fishy_bot/discord-bot-sitepoint/assets/weng.jpg"]).setThumbnail("attachment://weng.jpg").setTitle("Weng Moment").setDescription(quotes[x]))
    }
}