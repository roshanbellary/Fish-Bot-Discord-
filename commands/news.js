const fetch = require('node-fetch')
const Discord = require('discord.js')
module.exports = {
    name:"news",
    description:"Gets the news from the specified news source\nIf the news source is fox news then just use the fucking trigger command\nDon't be an idiot",
    execute(message, arguments, bot){
        result = ""
        for (var i = 0; i < arguments.length - 1; i++) {
            result += arguments[i] + "-";
        }
        result += arguments[arguments.length - 1];
        fetch('http://newsapi.org/v2/top-headlines?sources=' + result + '&apiKey=ddba947408ca4a60b12b0350baf3e119').then(response => {
            return response.json()
        }).then(news => {
            if (news.totalResults != 0) {
                var length = news.articles.length
                var pos = Math.floor(Math.random() * length)
                const newsCard = new Discord.MessageEmbed()
                    .setTitle(news.articles[pos].title) 
                    .setDescription(
                        "Author:" + news.articles[pos].source.name + "\nDescription:" + news.articles[pos].description+"\nDate:"+new Date(news.articles[pos].publishedAt)+"\nUrl:"+news.articles[pos].url
                    )
                    .setThumbnail(news.articles[pos].urlToImage)
                message.channel.send(newsCard);
                message.react('🧠');
            } else {
                message.channel.send("That's not even a valid news source you irredeemable waste of space")
                message.react('😡')
                message.react('🖕')
            }
        })
    }
}