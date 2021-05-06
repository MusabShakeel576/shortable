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
        const split = item.split("/");
        if(split.length != 7){
            return
        }
        else if(split[5] == 1 || split[5] == 2 || split[5] == 3 || split[5] == 4 || split[5] == 5 || split[5] == 6 || split[5] == 7 || split[5] == 8 || split[5] == 9){
            return
        }
        else if(item.startsWith("https://mintable.app/") === true || item.startsWith("https://www.mintable.app/") === true || item.startsWith("www.mintable.app/") === true || item.startsWith("mintable.app/") === true){
            var lastValue = split.pop();
            const randomAlphabet = Math.floor(Math.random() * alphabet.length);
            const randomNumber = Math.floor(Math.random() * number.length);
            var reply = "https://mintable.app/"+alphabet[randomAlphabet]+"/item/"+number[randomNumber]+"/"+lastValue + " ("+message.author.username+" your new short URL, use it)"
            message.channel.send(reply);
            message.delete({timeout: 5000});
        }
    }
});

client.login(process.env.token);