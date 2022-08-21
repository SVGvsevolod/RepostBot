module.exports = async function(a){
    var select_a = new a.builders[2]()
        .setCustomId("repost_guild_select")
        .setPlaceholder(a.locale[1])
        .addOptions({
            label: a.locale[2],
            value: "dm"
        }),
        row_a = new a.builders[1]().addComponents(select_a),
        modal = new a.builders[3]().setCustomId("repost_modal").setTitle(a.locale[0]).addComponents(row_a);
    for(var i=0;i<a.data.length;i++){
        select_a.addOptions({
            label: a.data[i][1],
            value: a.data[i][0]
        })
    }
    await a.interaction.showModal(modal);
};