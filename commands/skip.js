"use strict";

var _data = require("./data");

module.exports = {
  name: 'skip',
  description: 'Command for calculating skips.',
  execute: function execute(message, args) {
    if (isNaN(args[0])) {
      message.reply(_data.data.errors.invalid_argument);
      return;
    }

    var emblems = 164;
    var damage = parseInt(args[0]); // Find the last floor the player can beat with 2x in 3 turns.

    var maxFloor2x = 0;

    while (calculateHp(maxFloor2x) < damage / 2.0) {
      maxFloor2x += 1;
    } // Find the last floor the player can beat with 3x in 3 turns.


    var maxFloor3x = 0;

    while (calculateHp(maxFloor3x) < damage) {
      maxFloor3x += 1;
    }

    var num3xFloors = maxFloor3x - maxFloor2x;
    var num2xFloors = emblems - num3xFloors * 1.5;
    var startFloor = maxFloor2x - num2xFloors;
    var skip = Math.floor(startFloor / 40) * 40;

    while (calculateHp(skip) * 3 > damage * 0.9) {
      skip -= 40;
    }

    message.reply("Skip to **floor ".concat(formatNumber(skip), "** (Boss HP around ").concat(formatNumber(calculateHp(skip) * 3), "). Start 3x at floor ").concat(maxFloor2x, "."));
  }
};

var caluclatePoints = function caluclatePoints(floor) {
  return 1217 * Math.pow(1.5, floor / 40.0);
};

var calculateHp = function calculateHp(floor) {
  return Math.pow(floor, 4.4) / 260000 + 5000;
};

var formatNumber = function formatNumber(number) {
  return Math.round(number).toLocaleString();
};