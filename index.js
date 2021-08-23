const Discord =  require('discord.js');
const client = new Discord.Client();
client.once('ready', () => {
    console.log('Shortable is online!');
    // client.user.setActivity('kedruga.com/shortable');
});

client.on('message', message => {
    if(message.author.bot) return;

    let serverId = message.guild.id;
    let channelId = message.channel.id;
    let mode = "Production";
    let ownerId;
    let guildId;
    let generalChannelId;
    let openChannelId;

    if(mode == "Staging") {
        ownerId = "766333921151418428";
        guildId = "879279892976504852";
        generalChannelId = "879279892976504856";
        openChannelId = ["879280149403664405", "879323022295711785"];
    }else if(mode == "Production") {
        ownerId = "202194883677519873";
        guildId = "477603375077130242";
        generalChannelId = "477603375593291776";
        openChannelId = ["827036035170828318", "827036054301310986", "827036068292853771", "827036103592247327", "827036146714017813", "827036209159208991", "833521055092047873", "757781934058504262", "757781979264450591"];
    }

    let selfPromoReply = `<@${message.author.id}> No self promotion in this channel.`;
    let isChannelOpen = false;
    const args = message.content.split(/ +/);
    const alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    const number = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
    args.forEach(messageSend);
    function messageSend(item, index){
        const split = item.split("/");
        function restrictedChannel() {
            message.channel.send(selfPromoReply);
            message.delete({timeout: 5000});
        }
        if(serverId == guildId && channelId == generalChannelId){
            if(item.startsWith("https:") === true || item.startsWith("http:") === true){
                restrictedChannel();
            }
        }
        else if(split.length != 7){
            return
        }
        else if(split[5] == 1 || split[5] == 2 || split[5] == 3 || split[5] == 4 || split[5] == 5 || split[5] == 6 || split[5] == 7 || split[5] == 8 || split[5] == 9){
            return
        }
        else if(item.startsWith("https://mintable.app/") === true || item.startsWith("https://www.mintable.app/") === true || item.startsWith("www.mintable.app/") === true || item.startsWith("mintable.app/") === true){
            function shortUrl() {
                var lastValue = split.pop();
                const randomAlphabet = Math.floor(Math.random() * alphabet.length);
                const randomNumber = Math.floor(Math.random() * number.length);
                var reply = `https://mintable.app/${alphabet[randomAlphabet]}/item/${number[randomNumber]}/${lastValue} (<@${message.author.id}> your new short URL, use it)`;
                message.channel.send(reply);
                message.delete({timeout: 5000});
            }
            if(serverId == guildId){
                openChannelId.forEach(openChannel);
                function openChannel(item, index) {
                    if(channelId == item) {
                        isChannelOpen = true;
                    }
                }
                if(isChannelOpen) {
                    shortUrl();
                }else {
                    if(message.author.id != ownerId){
                        restrictedChannel();
                    }
                }
            }else{
                shortUrl();
            }
        }
    }
});

client.login(process.env.token);