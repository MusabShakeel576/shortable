const Discord =  require('discord.js');
const client = new Discord.Client();
const prefix = '!';
client.once('ready', () => {
    console.log('Shortable is online!');
    // client.user.setActivity('musab.kedruga.com');
});

client.on('message', message => {
    if(!message.content.startsWith(prefix) || message.author.bot) return;
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift();
    const alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    const number = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
    if(command.startsWith("https://mintable.app/") === true || command.startsWith("https://www.mintable.app/") === true || command.startsWith("www.mintable.app/") === true || command.startsWith("mintable.app/") === true){
        var lastValue = command.split("/").pop();
        const randomAlphabet = Math.floor(Math.random() * alphabet.length);
        const randomNumber = Math.floor(Math.random() * number.length);
        var reply = "https://mintable.app/"+alphabet[randomAlphabet]+"/item/"+number[randomNumber]+"/"+lastValue
        message.channel.send(reply);
    }
});

client.login('ODMwNzg4Njc0NTUxNTQ1OTE3.YHLyPw.I4W-N1TWo6bTJLrMP6WrFjYmLN4');