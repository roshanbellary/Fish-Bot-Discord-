require('dotenv').config();
const fs = require('fs')
const fetch = require('node-fetch')
const Discord = require('discord.js');
const bot = new Discord.Client();
bot.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands').filter(file=>file.endsWith('.js'));
for (const file of commandFiles){
  const command = require('./commands/'+file.toString())
  bot.commands.set(command.name, command);
}
const TOKEN = process.env.TOKEN;
bot.login(TOKEN);

bot.on('ready', () => {
  console.info(`Logged in as ${bot.user.tag}!`);
  bot.guilds.forEach((guild)=>{console.info("-"+guild.name);guild.channels.forEach((channel)=>{console.info("\t-"+channel.name)})})
});
bot.on('message', msg=>{
  if (!msg.content.startsWith('!') || msg.author.bot) return;
	const args = msg.content.slice(1).trim().split(/ +/);
  const command = args.shift().toLowerCase();
  if (!bot.commands.has(command) && command != "weather" && command != "trigger") return;
  if (command == "weather"){
    weather_command(msg, args)
  }
  if (command == "trigger"){
    trigger(msg, args)
  }
  else{
    try {
	    bot.commands.get(command).execute(msg, args);
    } catch (error) {
	    console.error(error);
	    msg.reply('there was an error trying to execute that command!');
    }
  }
});
function weather_command(message, arguments){
  fetch('http://api.openweathermap.org/data/2.5/weather?zip=95070,us&APPID=5adf530da766051e090168cd4859746c').then(response =>{
    return response.json()
  }).then(parsedWeather=>{
    message.channel.send(":cloud_lightning:"+"(Weather):"+parsedWeather.weather[0].description+"\n:thermometer:(Temperature):"+Math.floor(1.8*(parsedWeather.main.temp-273.15)+32)+" degrees Celsius"+"\nLocation:"+parsedWeather.name);
  })
}
function trigger(message, arguments){
  fetch('http://newsapi.org/v2/top-headlines?sources=fox-news&apiKey=ddba947408ca4a60b12b0350baf3e119').then(response =>{
    return response.json()
  }).then(news =>{
    var length = news.articles.length
    var pos = Math.floor(Math.random()*length)
    message.channel.send("Author:"+news.articles[pos].source.name+"\nTitle:"+news.articles[pos].title+"\nDescription:"+news.articles[pos].description)
    message.react('😡')
  })
}