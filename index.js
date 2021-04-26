const Discord =  require('discord.js');
const client = new Discord.Client();
client.once('ready', () => {
    console.log('Shortable is online!');
    // client.user.setActivity('musab.kedruga.com');
});

client.on('message', message => {
    if(message.author.bot) return;
    const args = message.content.split(/ +/);
    const alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    const number = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
    args.forEach(messageSend);
    function messageSend(item, index){
        if(item.startsWith("https://mintable.app/") === true || item.startsWith("https://www.mintable.app/") === true || item.startsWith("www.mintable.app/") === true || item.startsWith("mintable.app/") === true){
            var lastValue = item.split("/").pop();
            const randomAlphabet = Math.floor(Math.random() * alphabet.length);
            const randomNumber = Math.floor(Math.random() * number.length);
            var reply = "https://mintable.app/"+alphabet[randomAlphabet]+"/item/"+number[randomNumber]+"/"+lastValue + " ("+message.author.username+" your new short URL, use it)"
            message.channel.send(reply);
        }
    }
});

client.login(process.env.token);