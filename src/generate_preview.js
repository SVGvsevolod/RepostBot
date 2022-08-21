module.exports = function(a){
    var preview = {},
        preview_embed = new a.builders[0](),
        additionalInfo = "...";
    
    preview_embed.setColor(3974236);
    
    preview_embed.setAuthor({
		name: a.message.author.username+"#"+a.message.author.discriminator,
		iconURL: a.message.author.displayAvatarURL({size:32})
	});
    
    if(a.message.content)
        preview_embed.setDescription(a.message.content);
    
    if(a.message.embeds.length)
        additionalInfo += a.locale[0]+a.message.embeds.length.toString()+a.locale[1]
    
    if(a.message.attachments.size){
        preview_embed.setImage(a.message.attachments.first().attachment);
        if(a.message.attachments.size>1)
            additionalInfo += a.locale[2]+(a.message.attachments.size-1).toString()+a.locale[3];
    }
    
    if(a.message.embeds.length || a.message.attachments.size>1)
        preview_embed.setFooter({text:additionalInfo});
    
    preview.embeds = [preview_embed];
    
    return preview;
}