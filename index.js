// import { Client, Collection } from 'discord.js';
// import { readdirSync } from 'fs';
// import { data } from './commands/data.js'

// const client = new Client();

// Load commands.
// const commandFiles = readdirSync('./commands').filter(file => file.endsWith('.js'));
// client.commands = new Collection();
// for(const file of commandFiles) {
//     const command = require('./commands/' + file);
//     client.commands.set(command.name, command);
// }

console.log('a');

// Lifecycle.
// client.login(process.env.BOT_TOKEN);

// client.once('ready', () => {
//     console.log('Ready!');
// });

// client.on('message', message => {
//     // Make sure it starts with '!' and author isn't a bot.
//     if(!message.content.startsWith(data.prefix) || message.author.bot) return;

//     // Find command and args.
//     const args = message.content.slice(data.prefix.length).split(/ +/);
//     const command = args.shift().toLowerCase();

//     // Handle invalid command.
//     if(!client.commands.has(command)) {
//         message.reply(data.errors.invalid_command);
//         return;
//     }

//     // Execute command.
//     try {
//         client.commands.get(command).execute(message, args);
//     } catch(error) {
//         console.log(error);
//         message.reply('There was an error executing the command. See console.');
//     }
// });

// client.on('error', console.error);