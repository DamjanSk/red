"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getEmoji = exports.refreshMessage = void 0;

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _data = require("./data");

var _discord = require("discord.js");

module.exports = {
  name: 'find',
  description: 'Command for searching or filtering heroes.',
  execute: function execute(message, args) {
    message.channel.send('Processing...').then(
    /*#__PURE__*/
    function () {
      var _ref = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee(message) {
        var collector;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                // Setup global data.
                _data.data.find.message = message;
                _data.data.find.keywords = args;
                _data.data.find.page = 0;
                refreshMessage(); // Create reactions.

                _context.next = 6;
                return message.react('⬅️');

              case 6:
                _context.next = 8;
                return message.react('➡️');

              case 8:
                // Wait for new reactions.
                collector = message.createReactionCollector(function (reaction, user) {
                  return ['⬅️', '➡️'].includes(reaction.emoji.name) && user.id !== _data.data.selfId;
                }, {
                  time: 3600000
                });
                collector.on('collect', function (reaction) {
                  // Switch page.
                  switch (reaction.emoji.name) {
                    case '⬅️':
                      _data.data.find.page -= 1;
                      break;

                    case '➡️':
                      _data.data.find.page += 1;
                      break;
                  }

                  refreshMessage(); // Clear new reactions.

                  var _iteratorNormalCompletion = true;
                  var _didIteratorError = false;
                  var _iteratorError = undefined;

                  try {
                    for (var _iterator = reaction.users.values()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                      var user = _step.value;
                      user.id !== _data.data.selfId && reaction.remove(user);
                    }
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
                });

              case 10:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }());
  }
};

var refreshMessage = function refreshMessage() {
  // Make a list of all heroes matching the keywords.
  var results = _data.data.heroes.filter(function (hero) {
    return _data.data.find.keywords.every(function (keyword) {
      return [hero.name].concat((0, _toConsumableArray2["default"])(hero.street_names), (0, _toConsumableArray2["default"])(hero.traits)).includes(keyword);
    });
  }); // Clamp page.


  if (_data.data.find.page < 0) _data.data.find.page = 0;
  if (_data.data.find.page >= results.length) _data.data.find.page = results.length - 1;

  var start = Math.floor(_data.data.find.page / _data.data.find.itemsPerPage) * _data.data.find.itemsPerPage;

  var end = Math.min(start + _data.data.find.itemsPerPage, results.length);
  var exampleEmbed = {
    color: 0xEE1607,
    title: 'Search results',
    description: "".concat(_data.data.find.keywords.join(', ')),
    fields: [{
      name: "Showing ".concat(_data.data.find.page + 1, "/").concat(results.length),
      value: results.sort(function (hero1, hero2) {
        return hero1.traits[0].localeCompare(hero2.traits[0]) || hero1.traits[1].localeCompare(hero2.traits[1]);
      }).map(function (hero, index) {
        return "".concat(index === _data.data.find.page ? '▫️' : '▪️', " ").concat(getEmoji(_data.data.colors[hero.traits[0]][hero.traits[1]]), " ").concat(hero.name);
      }).slice(start, end).join('\n')
    }],
    image: {
      url: results[_data.data.find.page].url
    },
    timestamp: new Date(),
    footer: {
      text: 'Use the reactions to switch.'
    }
  };

  _data.data.find.message.edit({
    embed: exampleEmbed
  });
};

exports.refreshMessage = refreshMessage;

var getEmoji = function getEmoji(name) {
  return _data.data.client.emojis.find(function (emoji) {
    return emoji.name === name;
  });
};

exports.getEmoji = getEmoji;