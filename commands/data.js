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
  },
  timer: {
    timerChannelId: '695730441570877440',
    messageChannelId: '695730441570877440',
    times: [1585983600000, 1586001600000, 1586026800000, 1586044800000, 1586070000000, 1586088000000, 1586113200000, 1586131200000, 1586156400000, 1586174400000, 1586199600000, 1586217600000]
  },
  role: {
    message: 'Tap the reactions to give yourself roles.',
    messageId: '',
    messageChannelId: '',
    roles: {
      '⌛': {
        description: 'Timer role - Timer channel & notifications on map reset.',
        roleName: 'timer'
      }
    }
  }
};
exports.data = data;