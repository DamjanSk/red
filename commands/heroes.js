export const heroes = [
    {
        name: 'R.E.D. V.I.R.U.S.',
        url: 'https://www.dropbox.com/s/1erzpoapxd331ul/red.jpg?raw=1',
        street_names: ['red', 'virus', 'robot', 'proto'],
        traits: ['red', 'runesmith', 'mechanical'],
        active: ['Delete', 'Select an orb, destroy all orbs with the same element'],
        leader: 'On spell cast: Shield for 60% ➕.',
        description: 'No.. Noo... NOOO!!!'
    },
    {
        name: 'Corina, Ruff Queen',
        url: 'https://www.dropbox.com/s/27e9uhuxsrmr4zd/corina.jpg?raw=1',
        street_names: ['queen', 'puppy', 'corina', 'ruff'],
        traits: ['red', 'slinger', 'maruu'],
        active: ['Ruff Up', 'Attacks for 720% ⚔️ and applies Targeted. Skill resets on critical attack.\n\nTargeted enemy takes 200% damage from S heroes.'],
        leader: 'Leader: Maruu +35% Critical Chance (250%⚔️). Non-leader: Corina +35% Critical Chance (250%⚔️).',
        description: 'Ruff. Arff woof woof GRRRuuufff!'
    },
    {
        name: 'Aspect of Summer',
        url: 'https://www.dropbox.com/s/3t3e1yrt7witmso/aspect_of_summer.jpg?raw=1',
        street_names: ['oaken', 'aspect', 'summer', 'treant'],
        traits: ['green', 'tactician', 'elemental'],
        active: ['Earthen Bulwark', 'Reduces damage by 90% for 2 turns.\n\nDispels Curse.'],
        leader: 'Elemental Heroes: HP, Attack x1.60',
        description: 'Why do Gigas always appear in elemental pairs? This is a hot research thesis within the Embersteel Society.'
    },
    {
        name: 'Demon\'s Bane',
        url: 'https://www.dropbox.com/s/bohgk93aurbngmb/demons_bane.jpg?raw=1',
        street_names: ['kirin', 'demon', 'bane', 'disciple', 'half', 'dragon'],
        traits: ['yellow', 'slinger', 'elf', 'dragon'],
        active: ['Dragon\'s Fortitude', 'Gains a 70% HP Shield for 2 turns.\n\nDispels curse.'],
        leader: ['Elf Attack x2.7, when Shield > HP.'],
        description: 'Through an agonizing ritual, the Demon Hunters of Xin\'Oria transfuses dragon blood into their acolytes. Those who survive are more resilient against the voidless corruption'
    },
    {
        name: 'G.R.E.E.N. D.O.O.M.',
        url: 'https://www.dropbox.com/s/ilq33brm2g4q26j/doom.jpg?raw=1',
        street_names: ['doom', 'robot', 'proto'],
        traits: ['green', 'slinger', 'mechanical'],
        active: ['Ricochet', 'Per bounce this turn:\nS Heroes gain +80% damage. [Max 400%]'],
        leader: 'Mechanical Heroes: HP, Attack x1.60',
        description: 'WHAT HAVE WE DONE?!'
    },
    {
        name: 'Falcon, Pride of Xzi',
        url: 'https://www.dropbox.com/s/byo2lup2hz4dqd8/falcon.jpg?raw=1',
        street_names: ['azura', 'knight', 'falcon', 'pride', 'xzi'],
        traits: ['blue', 'tactician', 'human'],
        active: ['Xzi\'s Pride', 'Heals for 100% max HP over 5 turns.\n\n[Use per battle: 2]'],
        leader: 'Match 5🔵 or 🔵+🌈 to dispel Blind.',
        description: 'There is only one truth: AZURA!'
    },
    {
        name: 'Fei, Shu\'s Fury',
        url: 'https://www.dropbox.com/s/3n61tr8bzusyqr8/fei.jpg?raw=1',
        street_names: ['fei', 'sworn', 'brother', 'fury'],
        traits: ['yellow', 'runesmith', 'maruu'],
        active: ['Black Fury', 'Converts 4 orbs into Explosive Orbs.\n[Explodes when matched]'],
        leader: 'On Orb Explosion:\nAll R heroes attack for 1.0⚔️',
        description: 'As three we rise, as three we fall.'
    },
    {
        name: 'Harrison Croft, Ark Breaker',
        url: 'https://www.dropbox.com/s/48zxvbiqvuhddhq/harrison_croft.jpg?raw=1',
        street_names: ['indiana', 'jones'],
        traits: ['yellow', 'tactician', 'maruu'],
        active: ['Whip of Midas', 'Starting from the lowest orb, whips 5-10 orbs into 🟡.'],
        leader: 'Match 5🟡 or 🟡+🌈 to dispel Bomb Skin.',
        description: 'Coins! Run! Dodge! Jump! Coins... Deja Vu??'
    },
    {
        name: 'Hexxus, Void\'s Victory',
        url: 'https://www.dropbox.com/s/xdokcfgbmw0h07j/hexxus.jpg?raw=1',
        street_names: ['hexxus', 'hydra', 'void'],
        traits: ['green', 'slinger', 'mechanical', 'dragon'],
        active: ['Hexxus Overdrive', 'Converts 2-3 shooters to Splitting Explosive Shots'],
        leader: 'On Heal at Full HP:\nAll S Heroes attack for 120%⚔️.',
        description: 'Hexxus absorbs void magic to build new heads, each evolving its Counter Spell Neural Network.'
    },
    {
        name: 'KenKen, The Rabbit\'s Charge',
        url: 'https://www.dropbox.com/s/w4p15sam47s7uyu/kenken.jpg?raw=1',
        street_names: ['rabbit', 'bunny', 'rider'],
        traits: ['green', 'runesmith', 'beast', 'maruu'],
        active: ['Stun', 'Stun All Enemies for 1 turn.\n\nEnemies can only be stunned once per battle.'],
        leader: 'On spell cast:\nAll R heroes attack all for 1.7⚔️',
        description: 'KenKen\'s Delivery Service guarantees same day delivery through desert storms and monster swarms, anywhere on the Shimmering Plains!'
    },
    {
        name: 'Priscilla, Diva of Song',
        url: 'https://www.dropbox.com/s/whlh4vsuarphwnm/priscilla.jpg?raw=1',
        street_names: ['harp', 'song', 'priscilla', 'bard', 'songstress'],
        traits: ['blue', 'runesmith', 'elf'],
        active: ['Last Stand', 'Shields for 230%➕.\n\nIn the next 2 turns, each time you match 3+🔵, gain 50%➕ Shield.'],
        leader: 'Match 5🔵 in one shot: Elf attack x2.2.',
        description: 'Eager Song Sprites flock to her side when Priscilla strums her harp.'
    },
    {
        name: 'Stormrage Titan',
        url: 'https://www.dropbox.com/s/qzgg72kafq0ezfs/stormrage_titan.jpg?raw=1',
        street_names: ['thunder', 'gigas', 'lightning', 'stormrage', 'titan'],
        traits: ['yellow', 'runesmith', 'elemental'],
        active: ['Thunderstorm', 'Converts 13 orbs to 🟡 at random.'],
        leader: 'Match 12🟡 in one shot:\nElemental attack x3.2',
        description: 'As I gazed upon the massive clouds of the storm below, I realized I had not scaled the tallest mountain, but a Thunder Gigas\' back'
    },
    {
        name: 'Sukha, Dukkha Brewmaster',
        url: 'https://www.dropbox.com/s/8tzdafhkuha58bq/sukha.jpg?raw=1',
        street_names: ['sukha', 'brewmaster', 'dukkha', 'sukkha'],
        traits: ['red', 'slinger', 'elemental'],
        active: ['Drunken Bliss', 'Randomly converts shooter to an Explosive or Bounce Shot.'],
        leader: 'Random effect when you convert shooter:\nDuplicate converted shooter\nShield for 270%➕\nAttack 3 times for 90%⚔️',
        description: 'Every thousand years, deities luts after the mortal thrills of the Dukkha Nector.'
    },
    {
        name: 'Arctic Lord',
        url: 'https://www.dropbox.com/s/c8cw53vg4km5j6w/arctic_lord.jpg?raw=1',
        street_names: ['arctic', 'lord', 'sabertooth', 'alpha'],
        traits: ['blue', 'slinger', 'beast'],
        active: ['Gushing Swipe', 'Attacks all enemies for 310% damage.\n\n+300% damage when player is less than 35% HP.'],
        leader: 'When Health < 35%.\nBeast Heroes Attack x2.7',
        description: 'Hunting is beneath the Arctic Lord. Prey cowers under his gaze.'
    },
    {
        name: 'Burning Joy',
        url: 'https://www.dropbox.com/s/6v96pt2el37z6yb/burning_joy.jpg?raw=1',
        street_names: ['burning', 'joy', 'odd'],
        traits: ['red', 'slinger', 'maruu'],
        active: ['BURN', 'Attacks 4 times for 220%⚔️ each.\n\nIf there is at least 12🔴 attack 6 times instead.'],
        leader: 'Match 5🔴 or 🔴+🌈 to dispel Enrage.',
        description: '"How do you putout a fire? With an EXPLOSION of course!'
    },
    {
        name: 'Embersteel Headmaster',
        url: 'https://www.dropbox.com/s/y872rt74cpaar74/embersteel.jpg?raw=1',
        street_names: ['embersteel', 'headmaster', 'explorer', 'steel'],
        traits: ['red', 'runesmith', 'human'],
        active: ['Shield Toss', 'Converts shooter to a Big Explosive Shot.'],
        leader: 'Human Heroes: HP, Attack x1.60',
        description: '"Shield? Check. Rations? Check. Wait... where\'s my rope? Ah who needs that, we\'re just exploring an ancient pitless tomb.'
    },
    {
        name: 'Kong, Monkey Queen',
        url: 'https://www.dropbox.com/s/eclzy6nqazzdays/kong.jpg?raw=1',
        street_names: ['kong', 'queen', 'disciple', 'monkey'],
        traits: ['red', 'slinger', 'elemental', 'beast'],
        active: ['Sky Break', 'On contact, shooter orb destroys 17 Orbs above it.\n\n22 Orbs if full HP.'],
        leader: 'Wall bounce > 4 times, all Beast Attack x2.7.',
        description: 'Born of Earth and Fire, Kong journeys in search of her soul.'
    },
    {
        name: 'Majestic Kirin',
        url: 'https://www.dropbox.com/s/8c6u3jgx4e9rz6r/majestic_kirin.jpg?raw=1',
        street_names: ['kirin', 'firefox', 'majestic', 'fox'],
        traits: ['red', 'slinger', 'dragon'],
        active: ['Mystic Blessing', 'Heals for 160% damage dealt this turn.\n\n(Use pre battle: 4)'],
        leader: 'Match 5🔴 or 🔴+🌈 to dispel Bomb Skin.',
        description: 'An ancient civilization once worshipped these elusive creatures as gods.'
    },
    {
        name: 'Maximus, Werelion Prime',
        url: 'https://www.dropbox.com/s/pww33vu997h6x9l/maximus.jpg?raw=1',
        street_names: ['werelion', 'maximus', 'lion'],
        traits: ['yellow', 'tactician', 'beast'],
        active: ['Primal Thirst', 'Destroys 7🟡🔴 and attacks once per orb destroyed.\n\nSpell Transform on 45 hits.'],
        leader: 'On Transform:\nBeast Attack x2.7',
        description: 'Terror by day. Prime by night.\nWhat is he, O Karadu\'s pride?'
    },
    {
        name: 'Omega Bolt',
        url: 'https://www.dropbox.com/s/u7j5nuk9in4twii/omega_bolt.jpg?raw=1',
        street_names: ['bolt', 'omega'],
        traits: ['yellow', 'tactician', 'mechanical', 'beast'],
        active: ['Static Discharge', 'Converts 1-2 random Shooter Orbs to 🌈.\n\nDestroy 55 orbs in 1 turn to refresh.'],
        leader: 'Match a Combo Orb or 🌈:\nConvert 2 random 🔵 to 🟡 per Mechanical.',
        description: 'Mechs were designed to give dormant men an edge against the elves, but they have become so much more.'
    },
    {
        name: 'Se\'ker, Sand Lord',
        url: 'https://www.dropbox.com/s/k22ajm4wc0vlgqn/se%27ker.jpg?raw=1',
        street_names: ['seker', 'se\'ker', 'unchained', 'sand'],
        traits: ['yellow', 'tactician', 'mechanical', 'beast'],
        active: ['Undying Rage', 'Randomly converts all shooter orbs into Explosive Shot or 🌈'],
        leader: '',
        description: 'Sand Erases.\nSand Remembers.\nSand Never Dies.'
    },
    {
        name: 'Steel Princess',
        url: 'https://www.dropbox.com/s/pffa8ndxhap2pyx/steel_princess.jpg?raw=1',
        street_names: ['steel', 'princess', 'genius', 'iron', 'inventor'],
        traits: ['yellow', 'tactician', 'human', 'mechanical'],
        active: ['Drops 4 Heal Orbs ❤️\n\nBursting a ❤️ heals for 95% Heal and dispels Bleed.'],
        leader: 'Heal to full HP:\nMechanical Attack x2.7',
        description: '"Of course I\'m a genius! Who else could\'ve created a whole sentient race by herself?"'
    },
    {
        name: 'Tiny Giants, MORPH!',
        url: 'https://www.dropbox.com/s/41toiizmee1t5ik/tiny_giants.jpg?raw=1',
        street_names: ['tiny', 'giants', 'transformers'],
        traits: ['yellow', 'runesmith', 'maruu'],
        active: ['Sentai Combo', 'Attacks for 260%⚔️ and shields for 20% max HP.\n\nSpell Transforms on cast.'],
        leader: 'On transform:\nMaruu & Tiny Xord Attack x2.7',
        description: 'Xord transform, we must!'
    },
    {
        name: 'Tristesse, Nether\'s Hope',
        url: 'https://www.dropbox.com/s/8inawusyprr0l04/tristesse.jpg?raw=1',
        street_names: ['tristesse', 'nether', 'guardian'],
        traits: ['red', 'slinger', 'dragon'],
        active: ['Unbound Soul', 'Converts 9 random Orbs in a large area to 🔴.'],
        leader: 'Match 5+🔴 or 🔴+🌈 twice:\nDragon Attack x3.2',
        description: 'A Reaper is immortal. Only a still sorrow awaits a Reaper\'s end.'
    },
    {
        name: 'Ubuntu, Ancient Link',
        url: 'https://www.dropbox.com/s/a0hv0fqmikic96y/ubuntu.jpg?raw=1',
        street_names: ['ubuntu', 'link'],
        traits: ['green', 'runesmith', 'elemental', 'mechanical'],
        active: ['Royal Link', 'Converts 2 orbs into explosive orb. Explodes when matched.\n2 uses per cooldown.'],
        leader: 'On 3 Explosions:\nElemental & Mechanical Attack x2.7',
        description: 'A sea of stone to shield from the Nameless.\nA dance of leaves to move the Earth.\nA sacrifice of soul to unbind Ubuntu.'
    }
]