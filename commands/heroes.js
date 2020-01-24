"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.heroes = void 0;
var heroes = [{
    name: 'R.E.D. V.I.R.U.S.',
    url: 'https://www.dropbox.com/s/1erzpoapxd331ul/red.jpg?raw=1',
    street_names: ['red', 'virus', 'robot', 'proto'],
    traits: ['red', 'runesmith', 'mechanical'],
    active: ['Delete', 'Select an orb, destroy all orbs with the same element'],
    leader: 'On spell cast: Shield for 60%➕.',
    description: 'No.. Noo... NOOO!!!'
},
{
    name: 'Corina, Ruff Queen',
    url: 'https://www.dropbox.com/s/27e9uhuxsrmr4zd/corina.jpg?raw=1',
    street_names: ['queen', 'puppy', 'corina', 'ruff'],
    traits: ['red', 'slinger', 'maruu'],
    active: ['Ruff Up', 'Attacks for 720%⚔️ and applies Targeted. Skill resets on critical attack.\n\nTargeted enemy takes 200% damage from S heroes.'],
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
    street_names: ['arctic', 'lord', 'sabertooth', 'alpha', 'tiger'],
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
},
{
    name: 'Aruza, Cracked Twin',
    url: 'https://www.dropbox.com/s/0awnly0t0jsefto/aruza.jpg?raw=1',
    street_names: ['aruza', 'cracked', 'twin', 'bubble', 'gun', 'swimmer'],
    traits: ['green', 'tactician', 'elf'],
    active: ['Finigun', 'Sprays 6 explosive bullets at an area.'],
    leader: '🟢T Heroes: HP x2.2, Heal x1.35',
    description: '"Hey Salty, your citadel is under attack (>3<)"'
},
{
    name: 'Crusoe, The Pirate Imposter',
    url: 'https://www.dropbox.com/s/koa3zueknzpdkk4/crusoe.jpg?raw=1',
    street_names: ['crusoe', 'pirate', 'imposter', 'expedition', 'bait', 'driftling', 'scavenger'],
    traits: ['blue', 'tactician', 'mechanical'],
    active: ['Unreliable Defenses', '50% Chance to attack a random enemy for 209% damage.\n\n50% Chance to heal for 310% Heal.'],
    leader: 'On spell cast:\nAll 🔵T heroes attack all for 1.7⚔️.',
    description: 'Driftlings live in colonies atop the massive whale dragons. Adept scavengers by nature, most Driftlings live off scraps of their whole dragon hosts.'
},
{
    name: 'DaDD., New Dawn',
    url: 'https://www.dropbox.com/s/v3dy4gommxembfu/dadd.jpg?raw=1',
    street_names: ['dadd', 'new', 'dawn', 'conservation', 'droid'],
    traits: ['green', 'tactician', 'mechanical'],
    active: ['Daddy Style', 'Converts shooter orb to a Bouncer.\n\nBounces 30 times, destroying Orbs it hits.'],
    leader: 'When HP drops below 50%:\nAll 🟢T heroes attack all for 170%⚔️.',
    description: 'Initiating Protocol New Dawn...\nError D_M__ Sequence Detected 303...\nSelf Recovery Attempt 7,020,332,158...\n--- Message Truncated ---'
},
{
    name: 'Eon, Time Prodigy',
    url: 'https://www.dropbox.com/s/2hko0euutgmx8k7/eon.jpg?raw=1',
    street_names: ['eon', 'time', 'mage', 'prodigy'],
    traits: ['green', 'slinger', 'elf'],
    active: ['Recurse', 'Attack enemies 3 times. Deals 260% damage per hit.\n\nRefresh spell if you match 3 orbs in 3 sec.'],
    leader: 'Match 3 Orbs in 3 sec. Elf Attack x2.7.',
    description: 'The essence of time magic is one of balance. To move fast, one must first learn to move slowly.'
},
{
    name: 'Estella, Orion Princess',
    url: 'https://www.dropbox.com/s/yycsr56b2vekzqj/estella.jpg?raw=1',
    street_names: ['estella', 'orion', 'princess', 'lady'],
    traits: ['yellow', 'tactician', 'beast'],
    active: ['Starfall', 'Converts shooter to Starfall Orb, which passes through up to 3🟢.\n\nConverts 2-4 adjacent orbs in a row to 🟡 when it passes a 🟢.'],
    leader: 'Destroy 45 orbs in one turn:\nBeast and her sister Attack x2.7',
    description: '"See that starry night and dancing lights? What is yours is forever mine."'
},
{
    name: 'FrostFire Joy',
    url: 'https://www.dropbox.com/s/t6zzk3aauxzo4m9/frostfire_joy.jpg?raw=1',
    street_names: ['blue', 'joy', 'oddly', 'frostfire'],
    traits: ['blue', 'slinger', 'maruu'],
    active: ['Frost Burn', 'Attacks target for 710%⚔️.\nShields for 125%➕.'],
    leader: 'Match 5🔵 or 🔵+🌈 to dispel Curse.',
    description: 'How do you put out a fire? With an EXPLOSION of course!'
},
{
    name: 'Ilyana, Sun Valkyrie',
    url: 'https://www.dropbox.com/s/84rntjrfh0n9noz/ilyana.jpg?raw=1',
    street_names: ['ilyana', 'sun', 'valkyrie', 'spear', 'sun\'s', 'spearmaiden'],
    traits: ['yellow', 'slinger', 'elf'],
    active: ['Piercing Shot', 'Converts shooter orb into a Piercing Shot.\n(Use per battle: 1)\n\nPiercing Shot destroys 16 orbs it touches.'],
    leader: 'Elf Heroes: HP, Heal x1.60.',
    description: 'The thrust of the Captain\'s spear always strikes true. She has only missed once, it wasn\'t reputation she lost that day.'
},
{
    name: 'Momma, Bear-zerker',
    url: 'https://www.dropbox.com/s/mtr2tz5mxnh6leu/momma.jpg?raw=1',
    street_names: ['momma', 'bear', 'warden'],
    traits: ['green', 'runesmith', 'elf', 'beast'],
    active: ['Bear-zerk!', 'Attacks 3 times for 209% damage each.\n\n+1 attack when this hero Critical Attacks.'],
    leader: 'Leader: Elf/Beast +35% Critical Chance for 250%⚔️.\n\nNon-Leader: Momma +35% Critical Chance for 250%⚔️.',
    description: 'XOXOXXXX XOXXXXXO XOXXOOOX XOXXXOXX XOXXXXXO XOXXOOXO XOXXOOOO XOXXOOOX XOXXOXXO XOXOXOXO XOXXOOXO'
},
{
    name: 'Nether, Pride Sin',
    url: 'https://www.dropbox.com/s/jfl7cp3jgv5hvvw/nether.jpg?raw=1',
    street_names: ['nether', 'pride', 'sin', 'reaper'],
    traits: ['green', 'tactician', 'human', 'demon'],
    active: ['Soul Sacrifice', 'Consumes 33% of player\'s max HP, ignores Shield.\n\nAttacks all enemies for 160% of HP consumed.'],
    leader: 'When HP falls below 50%, drops 2-3 ❤️.\n\n5 turns cooldown.',
    description: 'Vanagloria, Superbia, Ira. Eternal glory awaits those guided by these lights.'
},
{
    name: 'Nightmare',
    url: 'https://www.dropbox.com/s/n220sj9vxjmpq3f/nightmare.jpg?raw=1',
    street_names: ['nightmare', 'twisted', 'edge', 'forsaken'],
    traits: ['red', 'runesmith', 'demon'],
    active: ['Onslaught', 'Attacks random enemies 3 times.\nDealing 260% damage per hit.\n\n+3 attacks if less than 50% HP.'],
    leader: 'When Health < 50%,\nDemon Heroes Attack x2.0.',
    description: 'The honorable "Twin Blade" of Milagard was the city\'s finest Spellsword and Queen\'s Guard of the lost expedition.'
},
{
    name: 'Rue, The Collector',
    url: 'https://www.dropbox.com/s/bhnzfqzz8yitjtw/rue.jpg?raw=1',
    street_names: ['rue', 'collector', 'raven', 'witch', 'le', 'six'],
    traits: ['blue', 'runesmith', 'human', 'beast'],
    active: ['Soul Scythe', 'Converts all 🟢 in an area to 🔵.\n\nDispels Panic.'],
    leader: 'Heal or Shield 2 times this turn:\nAll R heroes ⚔️x2.2',
    description: '"There are only two types of men. Those I want to kill, and those I want to kill slowly."'
},
{
    name: 'Tahoe, Plane Phaser',
    url: 'https://www.dropbox.com/s/etb073boqg715et/tahoe.jpg?raw=1',
    street_names: ['tahoe', 'plane', 'phaser', 'surfer'],
    traits: ['blue', 'runesmith', 'human'],
    active: ['Aerial 360', 'Converts shooter orb into an Aerial-360 Orb that passes through all orbs.\n\nTouch 🔵 to cause an explosion. Max 3-8 explosions.'],
    leader: 'Match 7🔵 in one shot: 33% chance per Human to +1 shot next turn.',
    description: '"Oi, surf\'s awesome today mate. Gotta catch a sick aerial through nether\'s drift."'
},
{
    name: 'Yvette the Beautiful',
    url: 'https://www.dropbox.com/s/hrdd6conyr4g9r3/yvette.jpg?raw=1',
    street_names: ['yvette', 'the', 'beautiful', 'beauty', 'karadu', 'mimic'],
    traits: ['green', 'slinger', 'elemental'],
    active: ['Cannibalize', 'Destroys 🔴 in an area to heal 130% each. Dispels Blind.'],
    leader: 'When Healed:\nDrops a x2.2 Attack Orb for every 2 Elemental.',
    description: 'The mimics of Karadu is a species of deadly carnivorous plants.'
},
{
    name: 'Arkgriff, Searing Night',
    url: 'https://www.dropbox.com/s/ukxqdw18819v2eh/a1_arkgriff.jpg?raw=1',
    street_names: ['arkgriff', 'searing', 'night', 'sinkaradu', 'griffin', 'karadu', 'panther'],
    traits: ['red', 'runesmith', 'beast'],
    active: ['Tropical Ambush', 'All 🔴🟢 units attack fo 260% damage.'],
    leader: 'Beast Heroes: HP, Attack x1.60.',
    description: 'Centuries ago, Karadu was a sprawling desert. The Ark\'s crash transformed the lands, sparking rapid evolutioins in the ecosystem.'
},
{
    name: 'Bjorn, Ironfury',
    url: 'https://www.dropbox.com/s/0f8obamq260hhjn/a1_bjorn.jpg?raw=1',
    street_names: ['bjorn', 'ironfury', 'fury', 'grampa', 'beard', 'tree'],
    traits: ['red', 'tactician', 'human'],
    active: ['Ironfury', 'Smashes the lowest exterior orbs 2-4 times.\n\nDestroys 5 orbs per smash.'],
    leader: 'Destroy 45 orbs in one turn:\nHuman Attack x2.6.',
    description: '"Death is for the weak."'
},
{
    name: 'Crow, Xzi\'s Fall',
    url: 'https://www.dropbox.com/s/8qhgeza8aivo7p2/a1_crow.jpg?raw=1',
    street_names: ['crow', 'xzi', 'wanted', 'the'],
    traits: ['green', 'slinger', 'demon'],
    active: ['Xzi\'s Fall', 'Deals 310.0% damage, ignores Defense.\n\nHeal to cast again, once per turn.'],
    leader: 'Match 5🟢 or 🟢+🌈 to dispel Bleed.',
    description: '"There is only one truth: Death."'
},
{
    name: 'Enso, Master Artisan',
    url: 'https://www.dropbox.com/s/e4vxu8d3h2dgche/a1_enso.jpg?raw=1',
    street_names: ['enso', 'art', 'artisan', 'paint', 'painter', 'mage', 'paintsmith', 'master'],
    traits: ['green', 'runesmith', 'maruu'],
    active: ['Splash of Green', 'Choose an orb. Turn surrounding orbs to 🟢.'],
    leader: 'Match 5+🟢 or 🟢+🌈 twice:\nMaruu Attack x3.2.',
    description: 'These illusions are so real that her victims feel and hear the wolf\'s hot breath as it moves in for the kill.'
},
{
    name: 'Excalibur, True Kingmaker',
    url: 'https://www.dropbox.com/s/l4n77i0my9fo6pk/a1_excalibur.jpg?raw=1',
    street_names: ['excalibur', 'king', 'kingmaker', 'true'],
    traits: ['blue', 'runesmith', 'elemental'],
    active: ['Rise of Camelot', 'Slashes upwards from the lowest orb, destroying 10-14 orbs.'],
    leader: 'Elemental Heroes: ⚔️❤️➕ x1.55. When shielded, ⚔️ increased to x2.10.',
    description: '"Whoso pulleth out this sword from this stone, is right wise king born of Camelot.'
},
{
    name: 'Gaia, Warden of the East',
    url: 'https://www.dropbox.com/s/yv7ab4hobys8bca/a1_gaia.jpg?raw=1',
    street_names: ['gaia', 'warden', 'pineheart', 'ranger', 'archer', 'blind'],
    traits: ['green', 'runesmith', 'elf'],
    active: ['Scatter Shot', 'Convert shooter orb into Scatter Shot, which destroys surrounding orbs.\n\nSplits into 5 Scatter Shots upon wall bounce.'],
    leader: 'Elf Heroes: HP, Attack x1.60.',
    description: 'Watcher of the Pineheart Grove. She sees through her many furry friends.'
},
{
    name: 'Ilyana, Pride Sin',
    url: 'https://www.dropbox.com/s/sm7rqz3xjeohi3v/a1_ilyana_pride_sin.jpg?raw=1',
    street_names: ['ilyana', 'dark', 'evil', 'pride', 'sin', 'eclipsed'],
    traits: ['red', 'runesmith', 'demon'],
    active: ['Eclipse', 'Converts shooter to pass-through Eclipse orb. Eclipse converts 4-7🔵🟢 to 🔴.'],
    leader: 'Convert a shooter Orb:\n25% chance per Demon to gain +1 shot next turn.',
    description: 'The thrust of the Captain\'s spear always strikes true. She has only missed once, it wasn\'t reputation she lost that day.'
},
{
    name: 'Kakura, Se\'ker\'s Seal',
    url: 'https://www.dropbox.com/s/6mqh00fbyy7n4kg/a1_kakura.jpg?raw=1',
    street_names: ['kakura', 'drake', 'seal', 'se\'ker', 'desert'],
    traits: ['yellow', 'runesmith', 'dragon'],
    active: ['Sand Storm', 'Destroys 🟢🔵 in an area to attack.\n\nDeals 190% damage per Orb destroyed. Ignores defense.'],
    leader: 'Match 5🟡 or 🟡+🌈 to dispel Enrage.',
    description: '"Kakura\'s rage will one day consume the Shimmering Plains.'
},
{
    name: 'Kayla, Eternal Queen',
    url: 'https://www.dropbox.com/s/u8nvp2kfyyeu7uv/a1_kayla.jpg?raw=1',
    street_names: ['kayla', 'eternal', 'queen', 'frost', 'princess', 'iceborn', 'ice'],
    traits: ['blue', 'tactician', 'demon'],
    active: ['Queen\'s Command', 'Converts 6 leftmost 🟡 to 🔵.'],
    leader: 'When Heal or Shield:\n25% chance to convert shooter to 🌈',
    description: '"What\'s this I\'m hearing? Is that your heartbeat? Oops... It just stopped."'
},
{
    name: 'Kraken, Abyssal Legend',
    url: 'https://www.dropbox.com/s/gsijqdet79jfxus/a1_kraken.jpg?raw=1',
    street_names: ['kraken', 'abyssal', 'legend', 'lurker', 'shiest'],
    traits: ['blue', 'tactician', 'dragon'],
    active: ['Poison', 'Poisons enemies for 3 turns.\n\nDeals 310% damage (ignores defense) per turn.'],
    leader: 'Dragon Heroes: HP, Attack x1.60',
    description: 'The Saki\'ra pirates fear no gods. But even they make sacrifices to appease what lies beneath.'
},
{
    name: 'Majula, Eye of Kradonia',
    url: 'https://www.dropbox.com/s/xhytcb18zdtdx1s/a1_majula.jpg?raw=1',
    street_names: ['majula', 'eye', 'kradonia', 'of', 'kraken', 'tentacles', ],
    traits: ['blue', 'slinger', 'demon'],
    active: ['Catch of the Day', 'A giant wriggling tentacle raises from the ocean to destroy all orbs in its path.\n\nTentacle +10% size per Demon.'],
    leader: 'Match 5🔵 or 🔵+🌈 to dispel Bleed.',
    description: '"A crewless ship crashed into Kradonia. The captain\'s log about a beautiful stowaway may be our only clue..."'
},
{
    name: 'Mikhail, Titan Spine Chieftain',
    url: 'https://www.dropbox.com/s/32ji5kxn5n48tfi/a1_mikhail.jpg?raw=1',
    street_names: ['mikhail', 'spine', 'chieftain', 'wyvern', 'wyvern\'s', 'bane', 'dune', 'hunter'],
    traits: ['yellow', 'slinger', 'human'],
    active: ['Berserker\'s Rage', 'Consumes 33% of player\'s max HP, ignores Shield.\n\nAttacks all enemies for 160% of HP consumed.'],
    leader: 'When you match 5 or more 🟡:\n50% chance to spawn ❤️.',
    description: 'The pleasure is in the hunt.'
},
{
    name: 'Elder of Saki\'ra Isles',
    url: 'https://www.dropbox.com/s/yt4iuwuqsp60dkr/a1_time_mage.jpg?raw=1',
    street_names: ['elder', 'of', 'saki\'ra', 'isles', 'time', 'prodigy', 'mage'],
    traits: ['blue', 'slinger', 'elf'],
    active: ['Time Stop', 'Fires up to 8 Orbs in 10.0 sec.'],
    leader: 'Wall bounce > 4 times, all Elf Attack x2.7.',
    description: 'The essence of time magic is one of balance. To move fast, one must first learn to move slowly.'
},
{
    name: 'Tiny Xord, AstroMax',
    url: 'https://www.dropbox.com/s/e2iztip6x7elkry/a1_tiny_xord.jpg?raw=1',
    street_names: ['tiny', 'xord', 'astramax', 'astra', 'transformer', 'transformers'],
    traits: ['red', 'runesmith', 'mechanical'],
    active: ['Giant Breach', 'Attacks 3 times. Deals 190%⚔️ and adds Breach (+10% Spell Damage taken) per hit.\n\nSpell Transforms when this hero crits twice.'],
    leader: 'Leader: Mechanical/Tiny Giants +35% Critical Chance for 250%⚔️.\n\nNon-Leader: Tiny Xord +35% Critical Chance for 250%⚔️.',
    description: '"Too strong he is, NinjaXord we must!"'
},
{
    name: 'Twilight Mist',
    url: 'https://www.dropbox.com/s/6r33t470r7zq619/a1_twilight_mist.jpg?raw=1',
    street_names: ['twilight', 'mist', 'stalker', 'mistwalker'],
    traits: ['blue', 'slinger', 'maruu'],
    active: ['Line Burster', 'Turns the shooter orb into a Line Burster.\n\nLine Burster destroys 8 orbs in a row.'],
    leader: 'Maruu Heroes: HP, Attack x1.60',
    description: 'The mists have teeth in Twilight Valley'
},
{
    name: 'Yvette, Blood Rose',
    url: 'https://www.dropbox.com/s/z5x9kd9fm7d5app/a1_yvette.jpg?raw=1',
    street_names: ['yvette', 'blood', 'rose', 'mimic', 'flower'],
    traits: ['red', 'tactician', 'elemental'],
    active: ['Hydration', 'Destroys 🟢 in an area. Shields for 100%➕ per destroyed orb.'],
    leader: 'Match 5+ 🔴:\nDrops a 120% Heal Orb for every 2 Elemental.',
    description: 'The mimics of Karadu is a species of deadly carnivorous plants.'
},
{
    name: 'Captain Aurora',
    url: 'https://www.dropbox.com/s/kn6avab34htul1p/a1_aurora.jpg?raw=1',
    street_names: [],
    traits: ['red', 'tactician', 'human'],
    active: ['Flaming Lash', 'Converts a row of 3 Bubbles to 🔴.'],
    leader: 'Match 5+ 🔴 or 🔴+🌈 twice:\n🔴T Attack x3.2.',
    description: 'The Vulian skies belong to the Dragons and the Aurora Pirates.'
},
{
    name: 'Robin, Master Thief',
    url: 'https://www.dropbox.com/s/d7qhbhbc5mhlhux/a1_cat_thief.jpg?raw=1',
    street_names: [],
    traits: ['blue', 'slinger', 'human', 'beast'],
    active: ['Grand Heist', 'Attacks 4 times. Deals 180% damage per hit.\n\nHeal for 4755 damage dealt.'],
    leader: '33% chance per Beast:\nConvert 🟡 shooter into an Explosive Shot.',
    description: 'It is said that the Cat Witch only steals from the rich.'
},
{
    name: 'Damien, Storm Templar',
    url: 'https://www.dropbox.com/s/1so2u1908h3eenj/a1_damien.jpg?raw=1',
    street_names: [],
    traits: ['yellow', 'slinger', 'mechanical'],
    active: ['Thunderstorm', 'Converts a shooter to Twin Lightning. Each Lightning converts 4 orbs to 🟡.'],
    leader: 'Match 5🟡 in one shot:\nMechanical Attack x2.2.',
    description: '- YOUR EYES ONLU -\nBattle output: 755%\nUnder prolonged use, subject reported memory impairment and hallucination.\n\nModel XI Status: FIELD-TEST'
},
{
    name: 'Dynasty, Kira Celestial',
    url: 'https://www.dropbox.com/s/lc2hrioreud32d8/a1_dynasty.jpg?raw=1',
    street_names: [],
    traits: ['blue', 'tactician', 'dragon'],
    active: ['Longevity', 'Creates a bouncing seal that converts orbs to 🔵 on cast.'],
    leader: 'Match 10🔵 in one shot:\n25% chance per Dragon to +1 shot next turn.',
    description: 'Kings and Queens lust for Dynasty\'s blessing of eternal rule.'
},
{
    name: 'Emareth, Keeper of Secrets',
    url: 'https://www.dropbox.com/s/jpcnlz7bvfvr3x0/a1_emareth.jpg?raw=1',
    street_names: [],
    traits: ['green', 'tactician', 'dragon'],
    active: ['Overgrowth', 'Converts the shooter Orb to a Seed Orb.\n\nSeed Orb grows vertically, converting up to 8 Orbs to 🟢.'],
    leader: 'Match 5+🟢:\nDrops a 1.7x Attack Orb for every 2 Dragon.',
    description: 'The curious Sinkaradu Serpents pride themselves in the poisonous ferns and fungi they grow and camouflages in.'
},
{
    name: 'Fate, Greed Sin',
    url: 'https://www.dropbox.com/s/04il4ndfiynmrn5/a1_fate.jpg?raw=1',
    street_names: ['fate', 'greed', 'sin', 'dream', 'weaver', 'card', 'cards', 'magic', 'floating'],
    traits: ['red', 'tactician', 'elf'],
    active: ['Twisted Fate', 'The topmost 7🔵 cycle between 3 other colors.\n\n[+2 orbs per Elf]'],
    leader: 'Match 8 Orbs of the same color, Elf Attack, Heal x2.7.',
    description: '"Hopes and despairs? They are but a card in my hand."'
},
{
    name: 'Kaeru, Oni Shogun',
    url: 'https://www.dropbox.com/s/8t7djgr0he6b255/a1_kaeru.jpg?raw=1',
    street_names: ['kaeru', 'oni', 'shogun', 'daimyo', 'frog'],
    traits: ['yellow', 'tactician', 'demon'],
    active: ['Kero Kero Ryu', 'Attacks 3 times for 200%⚔️ each.\n\nIn the next 1 turns, match 🟡 to attack 3 times again.'],
    leader: 'On spell attack: Heal for 30%➕.',
    description: 'Kaeru journeys to save his lost love who was turned into a princess.'
},
{
    name: 'Kuroku, EVIL Mastermind',
    url: 'https://www.dropbox.com/s/yy1cquknnhvtory/a1_kuroku.jpg?raw=1',
    street_names: ['kuroku', 'evil', 'mastermind', 'pirate', 'plushie', 'stuffed', 'mouse', 'rabbit', 'rat', 'bunny'],
    traits: ['blue', 'tactician', 'demon'],
    active: ['Spool of EVIL', 'Shoot a chain of 10 Plushie Orbs.\n\nEach Plushie Orb will bounce on orbs 3 times and destroys the final orb it bounces on.'],
    leader: 'On Board Reset:\nDemon Attack x2.7.',
    description: '"The size of my EVIL will not be contained by this body!"'
},
{
    name: 'Curator of 1st Branch',
    url: 'https://www.dropbox.com/s/z72dtcusfrytx3u/a1_librarian.jpg?raw=1',
    street_names: ['curator', 'of', 'the', 'first', '1st', 'branch', 'sergeant', 'helena', 'librarian'],
    traits: ['red', 'tactician', 'human', 'maruu'],
    active: ['Enigma Codex', 'Converts shooter orb to a Red Codex that passes through 20 Orbs.\n\nRed Codex shields player (48% Heal) for every 🔴 it passes through.'],
    leader: 'Dispel Curse on spell cast.',
    description: 'Dear Diary, today I come one step closer to decrypting the Ancient\'s history. Many texts reference Enigma. I believe it is the master codex.'
},
{
    name: 'Pip, Headless Huntress',
    url: 'https://www.dropbox.com/s/auqcjr508rdj5o3/a1_pip.jpg?raw=1',
    street_names: ['pip', 'rider', 'headless', 'huntress', 'forlorn'],
    traits: ['red', 'tactician', 'elemental'],
    active: ['Huntress Lash', 'Attacks 3 times for 209% damage each.\n\n+1 attack for every 3 wall bounce this battle.'],
    leader: '4 wall bounces in a turn:\n25% chance per Elemental or her sister to gain +1 shot next turn. (Once per turn)',
    description: '"Forsake, forlorn, forgone. I chase a thief in endless nights."'
},
{
    name: 'Poseiduess, Ocean\'s Wrath',
    url: 'https://www.dropbox.com/s/rm99meshh7tedcz/a1_poseiduess.jpg?raw=1',
    street_names: ['poseiduess', 'ocean', 'wrath', 'ocean\'s', 'sea', 'queen'],
    traits: ['blue', 'runesmith', 'elemental'],
    active: ['Deep Rising', 'Converts the shooter Orb to a Seed Orb.\n\nSeed Orb grows vertically, converting up to 8 Orbs to 🔵.'],
    leader: 'Dispel Curse on spell cast.',
    description: '"To War Sisters! Only War can avert a second man-cataclysm."'
},
{
    name: 'Ragnarok, World Serpent',
    url: 'https://www.dropbox.com/s/7wfe4jaipz4hkz0/a1_ragnarok.jpg?raw=1',
    street_names: ['ragnarok', 'world', 'serpent', 'ancient'],
    traits: ['green', 'slinger', 'dragon'],
    active: ['Mirage', 'Converts 5 orbs to 🟢 that snakes around the board.\n\n+2🟢 per Dragon.'],
    leader: 'Destroy 45 orbs in one turn:\nDragon Attack x3.7.',
    description: 'When Good and Evil is One, an ancient hope is born.'
},
{
    name: 'Sanduria, the Eclipse',
    url: 'https://www.dropbox.com/s/d4wx3fmwiisixi9/a1_sanduria.jpg?raw=1',
    street_names: ['sanduria', 'the', 'eclipse', 'dream', 'seal'],
    traits: ['yellow', 'runesmith', 'beast'],
    active: ['Broken Seal', 'Attacks all enemies for 370% damage, ignores Defense.\n\nCast every turn when HP < 35%.'],
    leader: 'The first time you take lethal damage in a game, spawn 2 Attack Orbs per Beast instead. (x1.7⚔️ per orb)',
    description: 'A broken seal, an endless night. Fractured hopes or sunken dreams? Ember greed weaves the end.'
},
{
    name: 'Solavi, Radiant Phalanx',
    url: 'https://www.dropbox.com/s/vor7tzpn84033o3/a1_solavi.jpg?raw=1',
    street_names: ['solavi', 'radiant', 'phalanx', 'iron', 'fang'],
    traits: ['yellow', 'slinger', 'elf'],
    active: ['Radiant Phalanx', 'Fires a wave of 6 Phalanx Orbs. Each Phalanx Orb destroys 🔴 or 🟡 to attack for 55%⚔️.'],
    leader: 'After 2 Elf spell casts:\nConverts 10 🟢 or 🔵 to 🟡.',
    description: '"Illumia Solavi Rallo Illyana Vadosm"\nFor the FlameHeart, to purge this void, I offer my soul.'
},
{
    name: 'Vanessa, Heartbreak Mesmerizer',
    url: 'https://www.dropbox.com/s/nwmddobggelj76d/a1_vanessa.jpg?raw=1',
    street_names: ['vanessa', 'heartbreak', 'mesmerizer', 'vocalist', 'singer', 'piano', 'beer'],
    traits: ['green', 'tactician', 'human'],
    active: ['Open Tap', 'Drops 3-5 Pint orbs, each heals for 90%➕.\n\nPick up all Pint orbs in one turn: Human heroes +280%⚔️.'],
    leader: 'Prevent enemy healing.',
    description: '[Hearbreak Salon]\bWhen your heart is broken, our bar is open!'
},
{
    name: 'Voltra, Charged',
    url: 'https://www.dropbox.com/s/0vx4y0u8oky2qtz/voltra.jpg?raw=1',
    street_names: ['voltra', 'charged', 'stormhide', 'bug'],
    traits: ['blue', 'runesmith', 'dragon'],
    active: ['Static Shield', 'Shields for 35% Max Health.\n\nFor the next 2 turns, R heroes counter attacks for 100%⚔️.'],
    leader: 'Dragon +50% Critical Chance (250%⚔️) when shielded.',
    description: 'Hunted till the last of its kind, Voltra seeks vengeance upon the Winged Pike.'
}
];
exports.heroes = heroes;