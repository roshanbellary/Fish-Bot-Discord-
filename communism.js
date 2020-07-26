module.exports = {
    name:"communism",
    description:"Legit Communist Quotes Lmfao",
    execute(message, args){
        quotes = ["When I give food to the poor, they call me a saint. When I ask why the poor have no food, they call me a Communist.-Hélder Câmara","Let the ruling classes tremble at a Communist revolution. The proletarians have nothing to lose but their chains. They have a world to win. Workers of the world, unite!-Karl Marx","Democracy is indispensable to socialism.-Vladimir Lenin","Struggles of masses and ideas. An epic that will be carried forward by our peoples, mistreated and scorned by imperialism; our people, unreckoned with until today, who are now beginning to shake off their slumber. Imperialism considered us a weak and submissive flock; and now it begins to be terrified of that flock...-Che Guevara","We must have faith in the masses and we must have faith in the Party. These are two cardinal principles. If we doubt these principles, we shall accomplish nothing.-Mao Zedong","You are pitiful isolated individuals; you are bankrupts; your role is played out. Go where you belong from now on -- into the dustbin of history!-Leon Trotsky","The devotion of such titans of spirit as Lenin to an Ideal must bear fruit. The nobility of his selflessness will be an example through centuries to come, and his Ideal will reach perfection.-Mohandas Karamchand Gandhi"];
        x = Math.floor(Math.random()*quotes.length);
        message.channel.send(quotes[x]);
    }
}