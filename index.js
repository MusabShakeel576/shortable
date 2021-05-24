const Discord =  require('discord.js');
const client = new Discord.Client();
client.once('ready', () => {
    console.log('Shortable is online!');
    // client.user.setActivity('musab.kedruga.com');
});

client.on('message', message => {
    if(message.author.bot) return;
    let serverId = message.guild.id;
    let channelId = message.channel.id;
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
        else if(item.startsWith("https:") === true || item.startsWith("http:") === true){
            if(serverId == '477603375077130242' && channelId == '477603375593291776'){
                message.delete({timeout: 5000});
            }
        }
        else if(item.startsWith("https://mintable.app/") === true || item.startsWith("https://www.mintable.app/") === true || item.startsWith("www.mintable.app/") === true || item.startsWith("mintable.app/") === true){
            if(serverId == '477603375077130242'){
                if(channelId == '827036035170828318' || channelId == '827036054301310986' || channelId == '827036068292853771' || channelId == '827036103592247327' || channelId == '827036146714017813' || channelId == '827036209159208991' || channelId == '833521055092047873' || channelId == '757781934058504262' || channelId == '757781979264450591'){
                    var lastValue = split.pop();
                    const randomAlphabet = Math.floor(Math.random() * alphabet.length);
                    const randomNumber = Math.floor(Math.random() * number.length);
                    var reply = "https://mintable.app/"+alphabet[randomAlphabet]+"/item/"+number[randomNumber]+"/"+lastValue + " ("+message.author.username+" your new short URL, use it)"
                    message.channel.send(reply);
                    message.delete({timeout: 5000});
                }else{
                    if(message.author.id != '202194883677519873'){
                        message.delete({timeout: 5000});
                    }
                }
            }else if(serverId == '653624979497156608'){
                if(channelId == '653624979497156611'){
                    var lastValue = split.pop();
                    const randomAlphabet = Math.floor(Math.random() * alphabet.length);
                    const randomNumber = Math.floor(Math.random() * number.length);
                    var reply = "https://mintable.app/"+alphabet[randomAlphabet]+"/item/"+number[randomNumber]+"/"+lastValue + " ("+message.author.username+" your new short URL, use it)"
                    message.channel.send(reply);
                    message.delete({timeout: 5000});
                }else{
                    if(message.author.id != '202194883677519873'){
                        message.delete({timeout: 5000});
                    }
                }
            }else{
                var lastValue = split.pop();
                const randomAlphabet = Math.floor(Math.random() * alphabet.length);
                const randomNumber = Math.floor(Math.random() * number.length);
                var reply = "https://mintable.app/"+alphabet[randomAlphabet]+"/item/"+number[randomNumber]+"/"+lastValue + " ("+message.author.username+" your new short URL, use it)"
                message.channel.send(reply);
                message.delete({timeout: 5000});
            }
        }
    }
});

client.login(process.env.token);