const { Client, GatewayIntentBits } = require('discord.js');
const client = new Client({
intents: [
GatewayIntentBits.Guilds,
GatewayIntentBits.GuildMessages,
GatewayIntentBits.MessageContent
],
});



client.once('ready', () => {
console.log(`Logged in as ${client.user.tag}!`);
});


client.on('messageCreate', (message) => {
if (message.content === 'Hail') {

message.reply('卐卐卐卐卐');
}
});

const BOT_TOKEN = 'MTE1NjkzMjk4NzAxNTkyOTg3Ng.G-T3mA.rIrXP-C6gPKnfsBeTTOu_q2RHFvvVDYvTQ1yT4';

client.login(BOT_TOKEN);
