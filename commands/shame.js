const fs = require('fs')
module.exports = {
    name:"shame",
    description:"Shows a list of the biggest dickheads in the server",
    execute(message, args, bot){
        fs.readFile('/Users/roshanb/Documents/fishy_bot/discord-bot-sitepoint/assets/shame.json', 'utf8', function results(err,data){
            if (err){
                console.log(err);
            }else{
                obj = JSON.parse(data);
                let arr = [];
                let pos = [];
                for (let i in obj){
                    arr.push(i);
                    pos.push(obj[i].pings);
                }
                for (let i=1;i<pos.length;i++){ //goes through all of the elements of a lsit
                    for (let j=0;j<i;j++){ //checks through every element less than the ith element
                        if (pos[j]<pos[i]){ //checks for smallest element that is less than ith positon in the i-1 list
                            temp1 = pos[i]
                            temp2 = arr[i]
                            temp5 = pos[j]
                            temp6 = arr[j]
                            for (let z = j;z<i;z++){// shifts every element over after switch from j to i-1 and sets temporary for i value in both arrays
                                temp3 = pos[z+1];
                                temp4 = arr[z+1];
                                pos[z+1] = temp5;
                                arr[z+1] = temp6;
                                temp5=temp3;
                                temp6=temp4;
                            }
                            pos[j] = temp1; //sets the jth position to the ith pos value
                            arr[j] = temp2; //sets the jth position to the ith arr value
                            break;
                        }
                    }
                }
                let result = "";
                for (let i = 0; i<pos.length;i++){
                    result += (i+1).toString()+".<@"+arr[i]+">'s RandomPings-"+pos[i]+"\n";
                }
                message.channel.send(new Discord.MessageEmbed().setTitle("League of Douchebags").setDescription(result));
            }
        })
    }
}