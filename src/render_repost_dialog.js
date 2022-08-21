module.exports = function(a){
    var dialog = {content:a.locale[0], ephemeral:true},
        guild_row = new a.builders[1](),
        channel_row = a.phase==1 && a.data.values[0]!=="dm" || a.phase==2 ? new a.builders[1]() : undefined,
        button_row = a.phase==1 && a.data.values[0]=="dm" || a.phase==2 ? new a.builders[1]() : undefined,
        guild_select = new a.builders[2](),
        channel_select = a.phase==1 && a.data.values[0]!=="dm" || a.phase==2 ? new a.builders[2]() : undefined,
        repost_button = a.phase==1 && a.data.values[0]=="dm" || a.phase==2 ? new a.builders[3]() : undefined,
        components = [];
	
    if(a.data.preview.embeds) dialog.embeds = a.data.preview.embeds;
    
	guild_select.setCustomId("dialog_guild_select");
	guild_select.setPlaceholder(a.locale[1]);
	guild_select.addOptions({
		label: a.locale[2],
		value: "dm",
        default: a.phase==1 ? a.data.values[0]=="dm" : false
	});
    for(var i=0;a.data.guilds.length>25 ? i<25 : i<a.data.guilds.length;i++)
        guild_select.addOptions({
            label: a.data.guilds[i][1],
            value: a.data.guilds[i][0],
            default: a.phase==1 || a.phase==2 ? a.data.values[0]==a.data.guilds[i][0] : false
        })
    
    if(a.phase==1 && a.data.values[0]!=="dm" || a.phase==2){
        channel_select.setCustomId("dialog_channel_select");
        channel_select.setPlaceholder(a.locale[3]);
        for(var i=0;a.data.channels.length>25? i<25 : i<a.data.channels.length;i++)
            channel_select.addOptions({
                label: a.data.channels[i][1],
                value: a.data.channels[i][0],
                default: a.phase==2 ? a.data.values[1]==a.data.channels[i][0] : false
            });
    }
    
    if(a.phase==1 && a.data.values[0]=="dm" || a.phase==2){
        repost_button.setCustomId("dialog_repost_button");
        repost_button.setLabel(a.locale[4]);
        repost_button.setStyle(3);
    }
	
	guild_row.addComponents(guild_select);
    if(a.phase==1 && a.data.values[0]!=="dm" || a.phase==2)channel_row.addComponents(channel_select);
    if(a.phase==1 && a.data.values[0]=="dm" || a.phase==2)button_row.addComponents(repost_button);
    
    components.push(guild_row);
    if(a.phase==1 && a.data.values[0]!=="dm" || a.phase==2)components.push(channel_row);
    if(a.phase==1 && a.data.values[0]=="dm" || a.phase==2)components.push(button_row);
    
    dialog.components = components;
	
	return dialog;
};