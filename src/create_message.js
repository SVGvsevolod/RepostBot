module.exports = async function(a,b){
    var message = {embeds:[],files:[]},
        repost_embed = new b.builders[0](),
        author_guild_member,
        repost_guild_member;
    
    if(b.data.values[0]!="dm")
        try{
            author_guild_member = await a.cache.get(b.data.values[0]).members.fetch(b.initialInteraction.targetMessage.author.id);
            repost_guild_member = await a.cache.get(b.data.values[0]).members.fetch(b.initialInteraction.user.id);
        }catch(x){}
    
    message.embeds.push(repost_embed);
    
    repost_embed.setColor(3974236);
    
    repost_embed.setAuthor({
        name: author_guild_member && author_guild_member.nickname ? author_guild_member.nickname+" ("+b.initialInteraction.targetMessage.author.username+"#"+b.initialInteraction.targetMessage.author.discriminator+")" : b.initialInteraction.targetMessage.author.username+"#"+b.initialInteraction.targetMessage.author.discriminator,
        iconURL: b.initialInteraction.targetMessage.author.displayAvatarURL({size:32})
    });
    
    if(b.initialInteraction.targetMessage.content)
        repost_embed.setDescription(b.initialInteraction.targetMessage.content);
    
    if(b.initialInteraction.targetMessage.embeds.length>1)
        for(var i=0;i<b.initialInteraction.targetMessage.embeds.length;i++)
            if(b.initialInteraction.targetMessage.embeds[i].data.type=="image")
                message.files.push(b.initialInteraction.targetMessage.embeds[i].data.url);
            else
                message.embeds.push(b.initialInteraction.targetMessage.embeds[i]);
    else if(b.initialInteraction.targetMessage.embeds.length==1)
        if(b.initialInteraction.targetMessage.embeds[0].data.type=="image")
            repost_embed.setImage(b.initialInteraction.targetMessage.embeds[0].data.url);
        else
            message.embeds.push(b.initialInteraction.targetMessage.embeds[0]);
    
    if(b.initialInteraction.targetMessage.attachments.size>1){
        var attachments = b.initialInteraction.targetMessage.attachments.entries(),
            attachment;
        do{
            attachment = attachments.next();
            if(attachment.value)
                message.files.push(attachment.value[1]);
        } while (!attachment.done);
    }else if(b.initialInteraction.targetMessage.attachments.size==1)
        repost_embed.setImage(b.initialInteraction.targetMessage.attachments.first().attachment);
    
    repost_embed.setFooter({
        text: b.locale[0]+(repost_guild_member && repost_guild_member.nickname ? repost_guild_member.nickname+" ("+b.initialInteraction.user.username+"#"+b.initialInteraction.user.discriminator+")" : b.initialInteraction.user.username+"#"+b.initialInteraction.user.discriminator)+(b.initialInteraction.targetMessage.channel && b.initialInteraction.targetMessage.guild ? b.locale[1]+"#"+b.initialInteraction.targetMessage.channel.name+" ("+b.initialInteraction.targetMessage.guild.name+")" : "")+b.locale[2],
        iconURL: b.initialInteraction.user.displayAvatarURL({size:32})
    })
    
    repost_embed.setTimestamp(b.initialInteraction.targetMessage.createdTimestamp);
    
    return message;
}