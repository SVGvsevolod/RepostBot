var locale = require("./repostbot.locale.js");
var create_message = require("./create_message.js");

module.exports = async function(a,b,c){
    if(a.content.indexOf("<@926980175088984074>")>-1 || a.content.indexOf("<@!926980175088984074>")>-1 && !a.author.bot){
        var regex = a.content.match(/discord.com\/channels\/(\d*)\/(\d*)\/(\d*)/);
        if(regex){
            var original_message,
                original_message_guild,
                original_message_channel;
            try{
                original_message_guild = await b.guilds.fetch(regex[1]);
                if(original_message_guild)
                    original_message_channel = await original_message_guild.channels.fetch(regex[2]);
                if(original_message_guild && original_message_channel)
                    original_message = await original_message_channel.messages.fetch(regex[3]);
            }catch(x){
                try{
                    if(x.code==10003 || x.code==10008 || x.code==50001)
                        await a.author.send(":warning: "+locale.errorMessageNotFound());
                    else
                        await a.author.send(":warning: "+locale.errorUnknown());
                }catch(y){
                    try{
                        if(x.code==10003 || x.code==10008 || x.code==50001)
                            await a.channel.send(":warning: "+locale.errorMessageNotFound());
                        else
                            await a.channel.send(":warning: "+locale.errorUnknown());
                    }catch(z){}
                }
            }
            if(original_message){
                var message = await create_message(b.guilds, {
                    initialInteraction: {
                        targetMessage: original_message,
                        user: a.author
                    },
                    data: {values: [a.guildId, a.channelId]},
                    locale: [locale.messageRepostedA(a.guild.preferredLocale), locale.messageRepostedB(a.guild.preferredLocale), locale.messageOriginalTimestamp(a.guild.preferredLocale)],
                    builders: c
                });
                try{
                    var rMessage = await a.channel.send(message);
                    try{
                        await a.author.send(":white_check_mark: "+locale.repostSuccess(a.guild.preferredLocale)+"https://discord.com/channels/"+rMessage.guildId+"/"+rMessage.channelId+"/"+rMessage.id);
                    }catch(x){}
                }catch(x){
                    if(x.code==50013)
                        try{
                            await a.author.send(":warning: "+locale.errorMissingPermission(a.guild.preferredLocale));
                        }catch(y){
                            try{
                                await a.channel.send(":warning: "+locale.errorMissingPermission(a.guild.preferredLocale));
                            }catch(z){}
                        }
                    else
                        try{
                            await a.author.send(":warning: "+locale.errorUnknown(a.guild.preferredLocale));
                        }catch(y){
                            try{
                                await a.channel.send(":warning: "+locale.errorUnknown(a.guild.preferredLocale));
                            }catch(z){}
                        }
                }
            }
        }else if(a.content.indexOf("help")>-1){
            try{
                await a.author.send(locale.help(a.guild.preferredLocale));
            }catch(x){
                if(x.code==50007)
                    a.channel.send(":warning: "+locale.errorDM(a.guild.preferredLocale));
                else
                    a.channel.send(":warning: "+locale.errorUnknown(a.guild.preferredLocale));
            }
        }
    }
}