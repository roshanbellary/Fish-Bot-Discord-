const fetch = require('node-fetch')
const Discord = require('discord.js')
module.exports = {
    name:"trigger",
    description:"Takes news from a totally completely \"unbiased\" news source",
    execute(message, args, bot){
        fetch('http://newsapi.org/v2/top-headlines?sources=fox-news&apiKey=ddba947408ca4a60b12b0350baf3e119').then(response => {
        return response.json()
        }).then(news => {
            message.react('😡');
            var length = news.articles.length
            var pos = Math.floor(Math.random() * length)
            const fox = new Discord.MessageEmbed()
                .setTitle(news.articles[pos].title)
                .setThumbnail("https://pmcvariety.files.wordpress.com/2018/03/fox-news-logo.jpg?w=681&h=383&crop=1")
                .setDescription(
                    "Author:" + news.articles[pos].source.name + "\nDescription:" + news.articles[pos].description+"\nDate"+new Date(news.articles[pos].publishedAt)+"\nUrl:"+news.articles[pos].url
                )
            message.channel.send(fox);
        })
    }
}