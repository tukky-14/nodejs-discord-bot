// Discord.js
// https://discord.js.org/#/docs/discord.js/main/general/welcome

require('dotenv').config();
const { Client, GatewayIntentBits } = require('discord.js');
const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
    const channel = client.channels.cache.get(process.env.DISCORD_CHANNEL_ID);
    if (!channel) return console.error(`Invalid channel ID: ${process.env.DISCORD_CHANNEL_ID}`);
    channel.send('Hello, world!');
});

client.login(process.env.DISCORD_TOKEN);
