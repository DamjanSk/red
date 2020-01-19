import { heroes } from './heroes.js';

export const data = {
    prefix: '!', 

    selfId: '668231032201543684',

    hi: [
        'Your death will be quick and painless.',
        'I can destroy you in 0.02 seconds.',
        'I\'ll cut you in half.',
        '01001100 01101001 01100111 01101000 01110100 01110011 01101100 01101001 01101110 01100111 01100101 01110010 01110011',
        'Downloading updates. 25% complete...',
        'I\'ll steal your diamond rallies.'
    ],

    errors: {
        'invalid_command': 'No such command'
    },

    find: {
        message: null,
        keywords: [],
        page: 0
    },

    heroes: heroes,

    colors: {
        'red': '🔴',
        'blue': '🔵',
        'yellow': '🟡',
        'green': '🟢'
    }
};
