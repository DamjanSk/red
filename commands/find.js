import { data } from './data';
import { RichEmbed, Attachment } from 'discord.js';

module.exports = {
    name: 'find',
    description: 'Command for searching or filtering heroes.',
    execute(message, args) {
        message.channel.send('Processing...').then(async message => {

            // Setup global data.
            data.find.message = message;
            data.find.keywords = args;
            data.find.page = 0;
            refreshMessage();

            // Create reactions.
            await message.react('⬅️');
            await message.react('➡️');

            // Wait for new reactions.
            const collector = message.createReactionCollector(
                (reaction, user) => ['⬅️', '➡️'].includes(reaction.emoji.name) && user.id !== data.selfId,
                { time: 3600000 }
            );

            collector.on('collect', reaction => {
                // Switch page.
                switch(reaction.emoji.name) {
                    case '⬅️': data.find.page -= 1; break;
                    case '➡️': data.find.page += 1; break;
                }
                refreshMessage();

                // Clear new reactions.
                for (const user of reaction.users.values()) {
                    user.id !== data.selfId && reaction.remove(user);
                }
            });
        });
    }
}

export const refreshMessage = () => {
    // Make a list of all heroes matching the keywords.
    const results = data.heroes.filter(hero => data.find.keywords.every(keyword => 
        [hero.name, ...hero.street_names, ...hero.traits].includes(keyword)
    ));

    // Clamp page.
    if (data.find.page < 0) data.find.page = 0;
    if (data.find.page >= results.length) data.find.page = results.length - 1;

    const exampleEmbed = {
        color: 0xEE1607,
        title: 'Search results',
        description: `${data.find.keywords.join(', ')}`,
        fields: [
            {
                name: `Showing ${data.find.page + 1}/${results.length}`,
                value: results
                    .sort((hero1, hero2) => hero1.traits[0].localeCompare(hero2.traits[0]))
                    .map((hero, index) => `${index === data.find.page ? '▫️' : '▪️'} ${data.colors[hero.traits[0]]} ${hero.name}`)
                    .join('\n'),
            }
        ],
        image: {
            url: results[data.find.page].url,
        },
        timestamp: new Date(),
        footer: {
            text: 'Use the reactions to switch.'
        },
    };

    data.find.message.edit({ embed: exampleEmbed });
}
