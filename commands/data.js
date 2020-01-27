"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.data = void 0;

var _heroes = require("./heroes.js");

var data = {
  prefix: '!',
  client: null,
  selfId: '668231032201543684',
  hi: ['Your death will be quick and painless.', 'I can destroy you in 0.02 seconds.', 'I\'ll cut you in half.', '01001100 01101001 01100111 01101000 01110100 01110011 01101100 01101001 01101110 01100111 01100101 01110010 01110011', 'Downloading updates. 25% complete...', 'I\'ll steal your diamond rallies.'],
  errors: {
    'invalid_command': 'No such command'
  },
  find: {
    itemsPerPage: 15,
    message: null,
    keywords: [],
    page: 0
  },
  heroes: _heroes.heroes,
  colors: {
    'red': {
      'tactician': 'red_t',
      'slinger': 'red_s',
      'runesmith': 'red_r'
    },
    'blue': {
      'tactician': 'blue_t',
      'slinger': 'blue_s',
      'runesmith': 'blue_r'
    },
    'yellow': {
      'tactician': 'yellow_t',
      'slinger': 'yellow_s',
      'runesmith': 'yellow_r'
    },
    'green': {
      'tactician': 'green_t',
      'slinger': 'green_s',
      'runesmith': 'green_r'
    }
  }
};
exports.data = data;