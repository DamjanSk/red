"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

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
  setInterval(countdown, 60000);
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
client.on('error', console.error); // Countdown.

var countdown = function countdown() {
  var timerChannel = client.channels.get(_data.data.timer.timerChannelId);
  var messageChannel = client.channels.get(_data.data.timer.messageChannelId); // Find nearest future time from now.

  var nearest = Number.MAX_VALUE;
  var now = new Date().getTime();
  var _iteratorNormalCompletion2 = true;
  var _didIteratorError2 = false;
  var _iteratorError2 = undefined;

  try {
    for (var _iterator2 = _data.data.timer.times[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
      var _t = _step2.value;

      if (_t - now > 0 && _t - now < nearest - now) {
        nearest = _t;
      }
    } // Convert data to hours, minutes, seconds.

  } catch (err) {
    _didIteratorError2 = true;
    _iteratorError2 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion2 && _iterator2["return"] != null) {
        _iterator2["return"]();
      }
    } finally {
      if (_didIteratorError2) {
        throw _iteratorError2;
      }
    }
  }

  var t = nearest / 1000 - new Date().getTime() / 1000;
  var d = Math.floor(t / 86400);
  var h = Math.floor(t / 3600) - d * 24;
  var m = Math.floor(t / 60) - h * 60 - d * 1440;
  var s = Math.floor(t) - h * 3600 - m * 60 - d * 86400;
  var time;
  if (d > 0) time = "".concat(d, "d\u02D0").concat(h, "h\uFF5Creset");else if (h > 0) time = "".concat(h, "h\u02D0").concat(m, "m\uFF5Creset");else time = "".concat(m, "m\uFF5Creset");
  timerChannel.setName("⌛" + time)["catch"](function (error) {
    return console.log(error);
  });

  if (t <= 300) {
    messageChannel.send("@everyone Map resets in 5 minutes or less.");
    t = -1;
  }
}; // Reactions.


var handleReaction =
/*#__PURE__*/
function () {
  console.log('handling reaction');
  var _ref = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee(reaction, user) {
    var guild, role, reactorIds, _iteratorNormalCompletion3, _didIteratorError3, _iteratorError3, _loop, _iterator3, _step3;

    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        console.log(_context.next);
        switch (_context.prev = _context.next) {
          case 0:
            if (!reaction.partial) {
              _context.next = 10;
              break;
            }

            _context.prev = 1;
            _context.next = 4;
            return reaction.fetch();

          case 4:
            _context.next = 10;
            break;

          case 6:
            _context.prev = 6;
            _context.t0 = _context["catch"](1);
            console.log(_context.t0);
            return _context.abrupt("return");

          case 10:
            if (!(reaction.message.id !== '696090627691249715')) {
              console.log('reaction message id');
              console.log(reaction.message.id);
              _context.next = 12;
              break;
            }

            return _context.abrupt("return");

          case 12:
            // Update roles.
            console.log('updating');
            guild = reaction.message.guild;
            role = guild.roles.find(function (role) {
              return role.name === _data.data.role.roles[reaction.emoji.name].roleName;
            });
            reactorIds = reaction.users.map(function (reactor) {
              return reactor.id;
            });
            _iteratorNormalCompletion3 = true;
            _didIteratorError3 = false;
            _iteratorError3 = undefined;
            _context.prev = 18;

            _loop = function _loop() {
              var member = _step3.value;
              member.removeRole(role);

              if (reactorIds.some(function (id) {
                return member.id === id;
              }) && member.id !== _data.data.selfId) {
                console.log('adding role');
                member.addRole(role);
              }
            };

            for (_iterator3 = guild.members.array()[Symbol.iterator](); !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
              _loop();
            }

            _context.next = 27;
            break;

          case 23:
            _context.prev = 23;
            _context.t1 = _context["catch"](18);
            _didIteratorError3 = true;
            _iteratorError3 = _context.t1;

          case 27:
            _context.prev = 27;
            _context.prev = 28;

            if (!_iteratorNormalCompletion3 && _iterator3["return"] != null) {
              _iterator3["return"]();
            }

          case 30:
            _context.prev = 30;

            if (!_didIteratorError3) {
              _context.next = 33;
              break;
            }

            throw _iteratorError3;

          case 33:
            return _context.finish(30);

          case 34:
            return _context.finish(27);

          case 35:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[1, 6], [18, 23, 27, 35], [28,, 30, 34]]);
  }));

  return function handleReaction(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

client.on('messageReactionAdd', handleReaction);
client.on('messageReactionRemove', handleReaction);