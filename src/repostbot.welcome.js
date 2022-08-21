var locale = require("./repostbot.locale.js");

module.exports = async function(a){
    var owner = await a.fetchOwner();
    try{
        await owner.send(locale.welcome(a.preferredLocale));
    }catch(x){}
}