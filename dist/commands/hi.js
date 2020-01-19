"use strict";

var _data = require("./data");

module.exports = {
  name: 'hi',
  description: 'Command for greeting.',
  execute: function execute(message) {
    var index = Math.floor(Math.random() * _data.data.hi.length);
    message.reply(_data.data.hi[index]);
  }
};