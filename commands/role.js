"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _data = require("./data");

module.exports = {
  name: 'role',
  description: 'Command for roles.',
  execute: function execute(message, args) {
    message.channel.send('Processing...').then(
    /*#__PURE__*/
    function () {
      var _ref = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee(message) {
        var _i, _Object$keys, role;

        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                // Refresh the message.
                _data.data.role.messageId = message.id;
                _data.data.role.messageChannelId = message.channel.id;
                refreshMessage(); // Create reactions.

                _i = 0, _Object$keys = Object.keys(_data.data.role.roles);

              case 4:
                if (!(_i < _Object$keys.length)) {
                  _context.next = 11;
                  break;
                }

                role = _Object$keys[_i];
                _context.next = 8;
                return message.react(role);

              case 8:
                _i++;
                _context.next = 4;
                break;

              case 11:
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
  var fields = Object.keys(_data.data.role.roles).map(function (emoji) {
    return "".concat(emoji, ": ").concat(_data.data.role.roles[emoji].description);
  }).join('\n');
  var embed = {
    color: 0xEE1607,
    title: 'Roles',
    description: _data.data.role.message,
    fields: [{
      name: '___',
      value: fields
    }],
    timestamp: new Date()
  };

  _data.data.client.channels.get(_data.data.role.messageChannelId).fetchMessages({
    around: _data.data.role.messageId,
    limit: 1
  }).then(function (msg) {
    var fetchedMsg = msg.first();
    fetchedMsg.edit({
      embed: embed
    });
  });
};