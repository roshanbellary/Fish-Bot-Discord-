const fetch = require('node-fetch')
const Discord = require('discord.js')
module.exports = {
    name:"weather",
    description:"Takes the weather from a specific location",
    execute(message, args, bot){
        if (args.length>=1){
            result = "";
            for (let i = 0; i < args.length - 1; i++) {
                result += args[i] + "+";
            }
            result += args[args.length - 1];
            fetch('http://api.openweathermap.org/data/2.5/weather?q=' + result + '&APPID=5adf530da766051e090168cd4859746c').then(response => {
                return response.json()
            }).then(parsedWeather => {
                if (parsedWeather.cod == 404) {
                    message.channel.send(new Discord.MessageEmbed().setTitle("That's not even a location you dipshit"));
                    message.react('😡');
                    message.react('🖕');
                } else {
                    weather = new Discord.MessageEmbed()
                        .setTitle("Weather in "+parsedWeather.name + "," + parsedWeather.sys.country)
                        .setDescription(":cloud_lightning:" + "(Weather):" + parsedWeather.weather[0].description + "\n:thermometer:(Avg Temperature):" + Math.floor(1.8 * (parsedWeather.main.temp - 273.15) + 32) + "°F"+"\n:hot_face:(Maximum Temperature):"+Math.floor(1.8 * (parsedWeather.main.temp_max - 273.15) + 32)+"°F" +"\n:cold_face:(Minimum Temperature):"+Math.floor(1.8 * (parsedWeather.main.temp_min - 273.15) + 32)+"°F"+ "\n:droplet:(Humidity):" + parsedWeather.main.humidity+"%"+"\nLongitude:"+parsedWeather.coord.lon+"\nLatitude:"+parsedWeather.coord.lat)
                    message.channel.send(weather)
                }
            })
        }else{
            message.channel.send(new Discord.MessageEmbed().setTitle("Stop Wasting my Fucking Time").setDescription("Put a fucking location you daft sick bastard, or I'll shove my nullPointerException up your behind"))
        }
    }
}