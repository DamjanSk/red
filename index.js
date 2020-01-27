"use strict";

var _discord = require("discord.js");

var _fs = require("fs");

var _data = require("./commands/data.js");

var client = new _discord.Client();
_data.data.client = client; // Load commands.

var commandFiles = (0, _fs.readdirSync)('./commands').filter(function (file) {
  return file.endsWith('.js');
});
client.commands = new _discord.Collection();
var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
  for (var _iterator = commandFiles[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
    var file = _step.value;

    var command = require('./commands/' + file);

    client.commands.set(command.name, command);
  } // Lifecycle.

} catch (err) {
  _didIteratorError = true;
  _iteratorError = err;
} finally {
  try {
    if (!_iteratorNormalCompletion && _iterator["return"] != null) {
      _iterator["return"]();
    }
  } finally {
    if (_didIteratorError) {
      throw _iteratorError;
    }
  }
}

client.login(process.env.BOT_TOKEN);
client.once('ready', function () {
  console.log('Ready!');
});
client.on('message', function (message) {
  // Make sure it starts with '!' and author isn't a bot.
  if (!message.content.startsWith(_data.data.prefix) || message.author.bot) return; // Find command and args.

  var args = message.content.slice(_data.data.prefix.length).split(/ +/);
  var command = args.shift().toLowerCase(); // Handle invalid command.

  if (!client.commands.has(command)) {
    message.reply(_data.data.errors.invalid_command);
    return;
  } // Execute command.


  try {
    client.commands.get(command).execute(message, args);
  } catch (error) {
    console.log(error);
    message.reply('There was an error executing the command. See console.');
  }
});
client.on('error', console.error);
