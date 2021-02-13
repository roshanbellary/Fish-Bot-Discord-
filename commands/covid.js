const fetch = require('node-fetch')
const Discord = require('discord.js')
module.exports = {
    name:"covid",
    description:"Gets the latest news on COVID 19",
    execute(message, args, bot){
        fetch('http://newsapi.org/v2/top-headlines?category=health&country=us&apiKey=ddba947408ca4a60b12b0350baf3e119').then(result => {
            return result.json()
        }).then(covid => {
            if (covid.totalResults != 0) {
                var len = covid.articles.length;
                var pos = -1;
                var list = [];
                for (var i = 0; i<len;i++){
                    pos = i;
                    if (covid.articles[pos].title.toLowerCase().includes('covid')||covid.articles[pos].title.toLowerCase().includes('corona')){
                        list.push(pos)
                    }
                }
                length = list.length;
                pos = Math.floor(Math.random()*length);
                if (pos != -1){
                    message.channel.send(new Discord.MessageEmbed()
                        .setTitle(covid.articles[pos].title)
                        .setThumbnail("https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/US_CDC_logo.svg/1280px-US_CDC_logo.svg.png")
                        .setDescription(
                            "Author:" + covid.articles[pos].source.name + "\nDescription:" + covid.articles[pos].description+"\nDate:"+new Date(covid.articles[pos].publishedAt)+"\nUrl:"+covid.articles[pos].url
                    ));
                message.react('😷')
                }else{
                    message.channel.send("No current covid articles right now 😞")
                }
            }
        })
    }
}