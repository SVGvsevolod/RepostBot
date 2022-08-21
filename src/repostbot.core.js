var Discord = require("discord.js");
var interactions = require("./repostbot.interactions.js");
var oldfashion = require("./repostbot.oldfashion.js");
var welcome_message = require("./repostbot.welcome.js");

var client = new Discord.Client({intents:[Discord.GatewayIntentBits.Guilds,Discord.GatewayIntentBits.GuildMembers,Discord.GatewayIntentBits.GuildInvites,Discord.GatewayIntentBits.GuildMessages,Discord.GatewayIntentBits.DirectMessages,Discord.GatewayIntentBits.MessageContent]});

client.on("interactionCreate",async a=>interactions(a,client,[Discord.EmbedBuilder,Discord.ActionRowBuilder,Discord.SelectMenuBuilder,Discord.ButtonBuilder,Discord.ModalBuilder]));
client.on("messageCreate",async a=>oldfashion(a,client,[Discord.EmbedBuilder]));
client.on("guildCreate",welcome_message);

client.login("...");

module.exports = {Discord, client};