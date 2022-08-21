var locale = require("./repostbot.locale.js");
var get_mutual_guilds = require("./get_mutual_guilds.js");
var get_guild_channels = require("./get_guild_channels.js");
var render_repost_dialog = require("./render_repost_dialog.js");
var generate_preview = require("./generate_preview.js");
var show_modal = require("./show_modal.js");
var create_message = require("./create_message.js");
var interactionsData = {};

module.exports = async function(a,b,c){
    if(a.commandId=="927010711815749642"){
        interactionsData[a.id] = {data: {guilds: undefined, channels: undefined, values: [], preview: undefined}, initialInteraction: a};
        interactionsData[a.id].data.preview = generate_preview({
            message: a.targetMessage,
            locale: [locale.dialogContainsEmbedsA(a.locale), locale.dialogContainsEmbedsB(a.locale), locale.dialogContainsAttachmentsA(a.locale), locale.dialogContainsAttachmentsB(a.locale)],
            builders: c
        });
        interactionsData[a.id].data.guilds = await get_mutual_guilds(b.guilds,a.user.id);
        await a.reply(render_repost_dialog({
            phase: 0,
            data: interactionsData[a.id].data,
            locale: [locale.dialogLabel(a.locale), locale.guildSelect(a.locale), locale.guildSelectDMOption(a.locale)],
            builders: c
        }));
        /*await show_modal({
            interaction: a,
            phase: 0,
            data: data,
            locale: [locale.modalTitle(a.locale), locale.guildSelect(a.locale), locale.guildSelectDMOption(a.locale)],
            builders: c
        });*/
    }
    if(a.customId=="dialog_guild_select"){
        interactionsData[a.message.interaction.id].data.values[0] = a.values[0];
        if(interactionsData[a.message.interaction.id].data.values[0]!=="dm")
            interactionsData[a.message.interaction.id].data.channels = get_guild_channels(b.guilds.cache.get(a.values[0]).channels,interactionsData[a.message.interaction.id].initialInteraction.targetMessage.channel ? interactionsData[a.message.interaction.id].initialInteraction.targetMessage.channel.nsfw : false);
        await interactionsData[a.message.interaction.id].initialInteraction.editReply(render_repost_dialog({
            phase: 1,
            data: interactionsData[a.message.interaction.id].data,
            locale: [locale.dialogLabel(a.locale), locale.guildSelect(a.locale), locale.guildSelectDMOption(a.locale), locale.channelSelect(a.locale), locale.repostButton(a.locale)],
            builders: c
        }));
        a.deferUpdate();
    }
    if(a.customId=="dialog_channel_select"){
        interactionsData[a.message.interaction.id].data.values[1] = a.values[0];
        await interactionsData[a.message.interaction.id].initialInteraction.editReply(render_repost_dialog({
            phase: 2,
            data: interactionsData[a.message.interaction.id].data,
            locale: [locale.dialogLabel(a.locale), locale.guildSelect(a.locale), locale.guildSelectDMOption(a.locale), locale.channelSelect(a.locale), locale.repostButton(a.locale)],
            builders: c
        }));
        a.deferUpdate();
    }
    if(a.customId=="dialog_repost_button"){
        var message = await create_message(b.guilds, {
            initialInteraction: interactionsData[a.message.interaction.id].initialInteraction,
            data: interactionsData[a.message.interaction.id].data,
            locale: [locale.messageRepostedA(interactionsData[a.message.interaction.id].data.values[0]=="dm" ? a.locale : b.guilds.cache.get(interactionsData[a.message.interaction.id].data.values[0]).preferredLocale), locale.messageRepostedB(interactionsData[a.message.interaction.id].data.values[0]=="dm" ? a.locale : b.guilds.cache.get(interactionsData[a.message.interaction.id].data.values[0]).preferredLocale), locale.messageOriginalTimestamp(interactionsData[a.message.interaction.id].data.values[0]=="dm" ? a.locale : b.guilds.cache.get(interactionsData[a.message.interaction.id].data.values[0]).preferredLocale)],
            builders: c
        });
        if(interactionsData[a.message.interaction.id].data.values[0]=="dm")
            try{
                var rMessage = await interactionsData[a.message.interaction.id].initialInteraction.user.send(message);
                interactionsData[a.message.interaction.id].initialInteraction.editReply({
                    content: ":white_check_mark: "+locale.repostSuccess(a.locale)+"https://discord.com/channels/@me/"+rMessage.channelId+"/"+rMessage.id,
                    embeds: [],
                    components: []
                });
            }catch(x){
                if(x.code==50007)
                    interactionsData[a.message.interaction.id].initialInteraction.editReply({
                        content: ":warning: "+locale.errorDM(a.locale),
                        embeds: [],
                        components: []
                    });
                else
                    interactionsData[a.message.interaction.id].initialInteraction.editReply({
                        content: ":warning: "+locale.errorUnknown(a.locale),
                        embeds: [],
                        components: []
                    });
            }
        else
            try{
                var rMessage = await b.guilds.cache.get(interactionsData[a.message.interaction.id].data.values[0]).channels.cache.get(interactionsData[a.message.interaction.id].data.values[1]).send(message);
                interactionsData[a.message.interaction.id].initialInteraction.editReply({
                    content: ":white_check_mark: "+locale.repostSuccess(a.locale)+"https://discord.com/channels/"+rMessage.guildId+"/"+rMessage.channelId+"/"+rMessage.id,
                    embeds: [],
                    components: []
                });
            }catch(x){
                if(x.code==50013)
                    interactionsData[a.message.interaction.id].initialInteraction.editReply({
                        content: ":warning: "+locale.errorMissingPermission(a.locale),
                        embeds: [],
                        components: []
                    });
                else
                    interactionsData[a.message.interaction.id].initialInteraction.editReply({
                        content: ":warning: "+locale.errorUnknown(a.locale),
                        embeds: [],
                        components: []
                    });
            }
        delete interactionsData[a.message.interaction.id];
        a.deferUpdate();
    }
    /*if(a.customId=="repost_modal"){
        a.deferUpdate();
    }*/
    if(a.commandId=="1008075747593830481"){
        a.reply({
            content: locale.help(a.locale),
            ephemeral: true
        });
    }
};