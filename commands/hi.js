import { data } from './data';

module.exports = {
    name: 'hi',
    description: 'Command for greeting.',
    execute(message) {
        const index = Math.floor(Math.random() * data.hi.length);
        message.reply(data.hi[index]);
    }
}