let myCreatures = [];
let userCoins = 100000;
let userFood = 10000;
let drawnCard = 0;
let rarityRandom = 0;


class creature {
    levelSelf() {
        this.level++;
        this.speed++;
        this.attack = Math.floor(this.attack * (1.03 + this.rarityBonus));
        this.defense = Math.floor(this.defense * (1.03 + this.rarityBonus));
    }
    constructor() {
        this.shards = 0;
        this.evolutionStage = "baby";
        this.level = 1;
    }
}

//SPRITE SPECIES
class goblin extends creature {
    constructor() {
        super();
        this.name = "Goblin";
        this.dangerLevel = 2;
        this.attack = 62;
        this.defense = 165;
        this.speed = 28;
        this.rarity = "Common";
        this.desc = "Introducing the sneaky goblin: a small, mischievous humanoid known for their cunning and love of gold. Beware their traps and trickery in combat, for their small size belies their formidable nature.";
        this.imageurl = "https://pbs.twimg.com/media/CZ1WsASVIAAPLkd.jpg";
        this.species = "Sprite";
        this.rarityBonus = 0;
        this.country = "";
    }
}
class faerie extends creature {
    constructor() {
        super();
        this.name = "Faerie";
        this.dangerLevel = 3;
        this.attack = 50;
        this.defense = 267;
        this.speed = 33;
        this.rarity = "Common";
        this.desc = "Meet the mystical faerie: a tiny, winged creature with magical powers and a mischievous nature. Beware their trickery and enchantments, for their beauty belies their cunning.";
        this.imageurl = "https://i.pinimg.com/736x/bf/d9/ae/bfd9aeeede9968657182e50b8d3fb49b--fantasy-fairies-fantasy-art.jpg";
        this.species = "Sprite";
        this.rarityBonus = 0;
        this.country = "";
    }
}
class pixie extends creature {
    constructor() {
      super();
      this.name = "Pixie";
      this.dangerLevel = 3;
      this.attack = 49;
      this.defense = 202;
      this.speed = 35;
      this.rarity = "Common";
      this.desc = "Small and mischievous, the pixie is a creature known for their pranks and love of nature. Beware their spells and trickery in combat, for their size belies their cunning.";
      this.imageurl = "https://i.pinimg.com/736x/40/23/b1/4023b132f9650b7ff73d681c49b1b0aa--fantasy-creatures-mythical-creatures.jpg";
      this.species = "Sprite";
      this.rarityBonus = 0;
      this.country = "";
    }
}

//SERPENT SPECIES
class gorgon extends creature { 
    constructor() { 
        super(); 
        this.name = "Gorgon"; 
        this.dangerLevel = 3; 
        this.attack = 68; 
        this.defense = 177; 
        this.speed = 34; 
        this.rarity = "Common"; 
        this.desc = "With serpentine features and a deadly gaze, the gorgon is a fearsome creature that can turn its enemies to stone. Beware their deadly power and cunning in battle."; 
        this.imageurl = "https://vignette.wikia.nocookie.net/vsbattles/images/7/7d/Vraska%2C_Unseen_Gorgon.jpg/revision/latest?cb=20171009000653"; 
        this.species = "Serpent"; 
        this.rarityBonus = 0; 
        this.country = "";
  } 
} 
class medusa extends creature { 
    constructor() { 
      super(); 
      this.name = "Medusa"; 
      this.dangerLevel = 8; 
      this.attack = 233; 
      this.defense = 688; 
      this.speed = 43; 
      this.rarity = "Epic"; 
      this.desc = "Look not upon the face of Medusa, for her gaze turns all who meet her eyes to stone. With her deadly snakes for hair and her ability to strike from afar, this Gorgon is a formidable foe."; 
      this.imageurl = "https://i.pinimg.com/736x/64/74/03/647403224b09e4e4e48e7eb487de5790--medusa-art-medusa-tattoo.jpg"; 
      this.species = "Serpent"; 
      this.rarityBonus = 0.016; 
      this.country = "";
    } 
} 
class siren extends creature {
    constructor() {
      super();
      this.name = "Siren";
      this.dangerLevel = 3;
      this.attack = 61;
      this.defense = 141;
      this.speed = 30;
      this.rarity = "Common";
      this.desc = "With a beautiful voice that can enchant and entrap, the siren is a seductive creature that lures sailors to their doom. Beware their alluring song and deadly intentions, for few can resist their charms.";
      this.imageurl = "https://i.pinimg.com/originals/c9/0e/b8/c90eb8e9aa1d8d0be8415253e16fcef8.jpg";
      this.species = "Serpent";
      this.rarityBonus = 0;
      this.country = "";
    }
} 
class nessie extends creature {
    constructor() {
      super();
      this.name = "Nessie";
      this.dangerLevel = 5;
      this.attack = 130;
      this.defense = 372;
      this.speed = 35;
      this.rarity = "Rare";
      this.desc = "Explore the depths of Loch Ness, where the legendary monster lies in wait. With its massive size and unknown abilities, this creature remains a mystery.";
      this.imageurl = "https://th.bing.com/th/id/R.64b6212378d21fe3b6302209a71e5a25?rik=%2bNIXhi2JgmtfQg&riu=http%3a%2f%2forig07.deviantart.net%2fffd7%2ff%2f2016%2f051%2f7%2f9%2fnessie_by_norapotwora-d9sfcwd.png&ehk=mfO5rEXEhH0TY8hefRzGSUVoGjjnpihMZ%2b0kj0HMa1s%3d&risl=&pid=ImgRaw&r=0";
      this.species = "Serpent";
      this.rarityBonus = 0.008;
      this.country = "";
    }
} 
class basilisk extends creature {
    constructor() {
      super();
      this.name = "Basilisk";
      this.dangerLevel = 5;
      this.attack = 159;
      this.defense = 303;
      this.speed = 36;
      this.rarity = "Rare";
      this.desc = "Beware the Basilisk, a reptilian monster that can turn you to stone with a single glance. Its deadly powers and ferocity in battle make it a formidable opponent.";
      this.imageurl = "https://i.pinimg.com/736x/44/30/5c/44305c63a355e6b880ee6035eeaa6414.jpg";
      this.species = "Serpent";
      this.rarityBonus = 0.008;
      this.country = "";
    }
}
class kraken extends creature {
    constructor() {
      super();
      this.name = "Kraken";
      this.dangerLevel = 7;
      this.attack = 215;
      this.defense = 624;
      this.speed = 38;
      this.rarity = "Epic";
      this.desc = "Tremble before the Kraken, a massive sea monster with tentacles that can crush ships. With its strength and intelligence, this beast is a true terror of the deep.";
      this.imageurl = "https://i.pinimg.com/originals/b3/c0/bd/b3c0bda18d099192e75450f8e31dff78.jpg";
      this.species = "Serpent";
      this.rarityBonus = 0.016;
      this.country = "";
    }
}
class charibdys extends creature {
    constructor() {
      super();
      this.name = "Charibdys";
      this.dangerLevel = 7;
      this.attack = 221;
      this.defense = 603;
      this.speed = 43;
      this.rarity = "Epic";
      this.desc = "Face the might of Charybdis, a whirlpool that devours all in its path. With its relentless power and destructive force, this creature is a true force of nature.";
      this.imageurl = "https://i.pinimg.com/originals/c4/83/6b/c4836bbdbee9b54a63385ce4c305dba6.jpg";
      this.species = "Serpent";
      this.rarityBonus = 0.016;
      this.country = "";
    }
}
class hydra extends creature {
    constructor() {
      super();
      this.name = "Hydra";
      this.dangerLevel = 10;
      this.attack = 260;
      this.defense = 1839;
      this.speed = 40;
      this.rarity = "Mythical";
      this.desc = "Tremble before the Hydra, a serpent of immeasurable power and dark malice. With its multiple heads that regenerate when cut off and deadly venom that can kill instantly, this creature is an unstoppable force of destruction.";
      this.imageurl = "https://i.pinimg.com/originals/4b/56/69/4b566908c50594dad2aa96b203459169.jpg";
      this.species = "Serpent";
      this.rarityBonus = 0.024;
      this.country = "";
    }
}
class jormungandr extends creature {
    constructor() {
      super();
      this.name = "Jormungandr";
      this.dangerLevel = 10;
      this.attack = 400;
      this.defense = 1340;
      this.speed = 45;
      this.rarity = "Mythical";
      this.desc = "Tremble before Jormungandr, a colossal serpent of unimaginable strength and ferocity. With its massive size and ability to cause earthquakes that shake the very foundations of the earth, its wrath knows no bounds. Beware the Jormungandr, for it is the harbinger of the end of days.";
      this.imageurl = "https://th.bing.com/th/id/R.56ac64b1492e9b709fb226e387836bfd?rik=93GsSoHVTS%2b8NA&pid=ImgRaw&r=0";
      this.species = "Serpent";
      this.rarityBonus = 0.024;
      this.country = "";
    }
}    

//TITAN SPECIES
class golem extends creature { 
  constructor() { 
    super(); 
    this.name = "Golem"; 
    this.dangerLevel = 4; 
    this.attack = 70; 
    this.defense = 231; 
    this.speed = 32; 
    this.rarity = "Common"; 
    this.desc = "A formidable construct made of stone or clay, the golem is a powerful warrior that can crush its enemies with ease. Beware their unrelenting nature and resistance to magic."; 
    this.imageurl = "https://i.pinimg.com/736x/d9/73/58/d97358f2178f2d3b0b88e60032c5d695--magical-creatures-fantasy-creatures.jpg"; 
    this.species = "Titan"; 
    this.rarityBonus = 0; 
    this.country = "";
  } 
}    
class cyclops extends creature { 
  constructor() { 
    super(); 
    this.name = "Cyclops"; 
    this.dangerLevel = 5; 
    this.attack = 134; 
    this.defense = 366; 
    this.speed = 35; 
    this.rarity = "Rare"; 
    this.desc = "Introducing the Cyclops, towering over all at 10 feet tall with a single, menacing eye. Armed with brute strength and a fierce roar, beware of his devastating attacks."; 
    this.imageurl = "https://i.pinimg.com/originals/6b/c4/eb/6bc4ebdd8278d5526df7fb110f97db35.jpg"; 
    this.species = "Titan"; 
    this.rarityBonus = 0.008; 
    this.country = "";
  } 
}   
class giant extends creature { 
  constructor() { 
    super(); 
    this.name = "Giant"; 
    this.dangerLevel = 5; 
    this.attack = 122; 
    this.defense = 341; 
    this.speed = 31; 
    this.rarity = "Rare"; 
    this.desc = "Introducing the Giant, standing at an astonishing 15 feet tall. With immense strength and the ability to hurl boulders, facing off against this colossus will be a monumental challenge."; 
    this.imageurl = "https://i.pinimg.com/736x/f3/82/26/f38226c2162b7abbedf579ebfb2e2bde--fantasy-monster-fantasy-paintings.jpg"; 
    this.species = "Titan"; 
    this.rarityBonus = 0.008; 
    this.country = "";
  } 
} 
class kaiju extends creature {
    constructor() {
      super();
      this.name = "Kaiju";
      this.dangerLevel = 8;
      this.attack = 266;
      this.defense = 530;
      this.speed = 42;
      this.rarity = "Epic";
      this.desc = "Witness the Kaiju, a towering monster of impossible size and strength. With its sheer power and devastating attacks, this creature is a true threat to all who stand in its way.";
      this.imageurl = "https://th.bing.com/th/id/R.882e928e2639f24d594a56e93828421f?rik=%2bZ%2bvK8jpn%2fS%2fEg&riu=http%3a%2f%2forig05.deviantart.net%2f2098%2ff%2f2013%2f244%2f8%2f3%2fkaiju_by_thedeath13-d6kk9xj.jpg&ehk=vWL7nxVO7g2gtrxpEw6WezFvPDv%2fD8z9CS%2bcoDEYnz4%3d&risl=&pid=ImgRaw&r=0";
      this.species = "Titan";
      this.rarityBonus = 0.016;
      this.country = "";
    }
}    
class oni extends creature { 
    constructor() { 
      super(); 
      this.name = "Oni"; 
      this.dangerLevel = 10; 
      this.attack = 433; 
      this.defense = 1173; 
      this.speed = 46; 
      this.rarity = "Mythical"; 
      this.desc = "Behold the Oni, a creature of unparalleled power and ferocity. With its towering size, rippling muscles, and glowing eyes, the Oni exudes an aura of raw strength and menace. Armed with the ability to call upon dark magic that can bring down entire armies, this demonic creature is the stuff of nightmares."; 
      this.imageurl = "https://s1.zerochan.net/Onryoki.600.2178269.jpg"; 
      this.species = "Titan"; 
      this.rarityBonus = 0.024; 
      this.country = "";
    } 
} 
class ogre extends creature {
    constructor() {
        super();
        this.name = "Ogre";
        this.dangerLevel = 2;
        this.attack = 71;
        this.defense = 210;
        this.speed = 25;
        this.rarity = "Common";
        this.desc = "Feared in the world of adventure, the ogre is a towering and grotesque humanoid with ferocity and monstrous strength, capable of unrelenting pursuit and devastating attacks.";
        this.imageurl = "https://i.pinimg.com/originals/35/d3/05/35d305e6cc776ef738ea8272ed68738e.jpg";
        this.species = "Titan";
        this.rarityBonus = 0;
        this.country = "";
    }
}
class troll extends creature {
    constructor() {
        super();
        this.name = "Troll";
        this.dangerLevel = 3;
        this.attack = 93;
        this.defense = 140;
        this.speed = 24;
        this.rarity = "Common";
        this.desc = "Brutish and fearsome, the troll is a hulking creature with regenerative abilities and a penchant for devouring humans. Beware their strength and resilience in combat.";
        this.imageurl = "https://orig00.deviantart.net/cb19/f/2012/304/8/f/troll_by_mattiasfahlberg-d5jkn77.jpg";
        this.species = "Titan";
        this.rarityBonus = 0;
        this.country = "";
    }
}
class cthulhu extends creature {
    constructor() {
      super();
      this.name = "Cthulhu";
      this.dangerLevel = 11;
      this.attack = 322;
      this.defense = 2400;
      this.speed = 50;
      this.rarity = "Mythical";
      this.desc = "Fear the ancient horror of Cthulhu, a god-like entity with unfathomable power. With its ability to warp reality and drive mortals mad, this creature is beyond human comprehension.";
      this.imageurl = "https://i.pinimg.com/474x/d3/ab/f6/d3abf6fa5563a98f42781d97af3c5107--monster-design-cthulhu-mythos.jpg";
      this.species = "Titan";
      this.rarityBonus = 0.024;
      this.country = "";
    }
}  
class sylph extends creature {
    constructor() {
      super();
      this.name = "Sylph";
      this.dangerLevel = 4;
      this.attack = 74;
      this.defense = 210;
      this.speed = 40;
      this.rarity = "Common";
      this.desc = "A graceful and ethereal creature, the sylph is a being of air and wind with the power to control the weather. Beware their agility and mastery of the skies, for they are elusive and unpredictable.";
      this.imageurl = "https://i.pinimg.com/originals/f7/26/62/f72662953c4ec125c4fe6a6a41fa2ef1.jpg";
      this.species = "Titan";
      this.rarityBonus = 0;
      this.country = "";
    }
}

//MONSTER SPECIES
class werewolf extends creature { 
  constructor() { 
    super(); 
    this.name = "Werewolf"; 
    this.dangerLevel = 5; 
    this.attack = 129; 
    this.defense = 399; 
    this.speed = 37; 
    this.rarity = "Rare"; 
    this.desc = "Meet the Werewolf, a fearsome creature of the night. With razor-sharp claws and lightning-fast reflexes, this beast will tear through any who dare to cross its path."; 
    this.imageurl = "https://i.pinimg.com/originals/c0/3e/94/c03e9479a48c13ad2450df5e9d766a03.jpg"; 
    this.species = "Monster"; 
    this.rarityBonus = 0.008; 
    this.country = "";
  } 
}   
class yeti extends creature { 
  constructor() { 
    super(); 
    this.name = "Yeti"; 
    this.dangerLevel = 5; 
    this.attack = 138; 
    this.defense = 377; 
    this.speed = 35; 
    this.rarity = "Rare"; 
    this.desc = "Beware the Yeti, a towering creature of the snowy mountains. With powerful swings of its massive arms and a chilling roar, this monster will make short work of anyone foolish enough to challenge it."; 
    this.imageurl = "https://i.pinimg.com/736x/c5/12/41/c5124179aa8551166f474af7ffe7be90--scifi-fantasy-creatures.jpg"; 
    this.species = "Monster"; 
    this.rarityBonus = 0.008; 
    this.country = "";
  } 
}   
class minotaur extends creature { 
  constructor() { 
    super(); 
    this.name = "Minotaur"; 
    this.dangerLevel = 6; 
    this.attack = 147; 
    this.defense = 441; 
    this.speed = 39; 
    this.rarity = "Rare"; 
    this.desc = "Enter the Labyrinth and face the Minotaur, a half-man, half-bull creature of legend. With its enormous strength and deadly horns, this beast will stop at nothing to defend its territory."; 
    this.imageurl = "https://i.pinimg.com/736x/6d/ec/8f/6dec8f9695788c70a94703b3432ba01e--mythological-creatures-Mythical-creatures.jpg"; 
    this.species = "Monster"; 
    this.rarityBonus = 0.008;
    this.country = ""; 
  } 
}   
class cerberus extends creature { 
  constructor() { 
    super(); 
    this.name = "Cerberus"; 
    this.dangerLevel = 6; 
    this.attack = 150; 
    this.defense = 429; 
    this.speed = 37; 
    this.rarity = "Rare"; 
    this.desc = "Cross the River Styx and face the three-headed Cerberus, guardian of the Underworld. With three sets of razor-sharp teeth and the ability to breathe fire, this monstrous hound is not to be trifled with."; 
    this.imageurl = "https://i.pinimg.com/736x/78/2d/58/782d58f13ffeef28f7671c512b9ad650.jpg"; 
    this.species = "Monster"; 
    this.rarityBonus = 0.008; 
    this.country = "";
    } 
}   
class chimera extends creature { 
  constructor() { 
    super(); 
    this.name = "Chimera"; 
    this.dangerLevel = 7; 
    this.attack = 221; 
    this.defense = 612; 
    this.speed = 40; 
    this.rarity = "Epic"; 
    this.desc = "Beware the Chimera, a fearsome creature with the head of a lion, body of a goat, and tail of a serpent. With the ability to breathe fire and venom, this hybrid monster is not to be taken lightly."; 
    this.imageurl = "https://i.pinimg.com/originals/39/8c/df/398cdf427a91ba9aaf252f94e8e783f5.jpg"; 
    this.species = "Monster"; 
    this.rarityBonus = 0.016; 
    this.country = "";
  } 
} 
class scylla extends creature { 
    constructor() { 
      super(); 
      this.name = "Scylla"; 
      this.dangerLevel = 8; 
      this.attack = 271; 
      this.defense = 603; 
      this.speed = 41; 
      this.rarity = "Epic"; 
      this.desc = "Sail not too close to the lair of Scylla, a sea monster with six heads and twelve tentacle-like legs. With her monstrous appetite and unrelenting pursuit, she is a terror to all who cross her path."; 
      this.imageurl = "https://i.pinimg.com/originals/59/a9/86/59a986f6f91d3deb60d7545a80cc0fd0.jpg"; 
      this.species = "Monster"; 
      this.rarityBonus = 0.016; 
      this.country = "";
    } 
} 
class fenrir extends creature { 
    constructor() { 
      super(); 
      this.name = "Fenrir"; 
      this.dangerLevel = 9; 
      this.attack = 451; 
      this.defense = 987; 
      this.speed = 48; 
      this.rarity = "Mythical"; 
      this.desc = "Hear the howling of Fenrir, the monstrous wolf who will one day bring about the end of the world. With his unbreakable chains and fearsome strength, this beast is the bane of all who stand against him."; 
      this.imageurl = "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/intermediary/f/ae87168b-d6c4-44ee-8ddc-39f84a8e771e/dbp95r9-c110b919-675c-4d42-a390-8a2f0335998a.jpg"; 
      this.species = "Monster"; 
      this.rarityBonus = 0.024;
      this.country = ""; 
    } 
} 
class manticore extends creature {
    constructor() {
      super();
      this.name = "Manticore";
      this.dangerLevel = 7;
      this.attack = 202;
      this.defense = 633;
      this.speed = 41;
      this.rarity = "Epic";
      this.desc = "Beware the Manticore, a fearsome creature with the body of a lion, the wings of a bat, and the tail of a scorpion. With its ability to shoot spikes and its deadly stinger, this beast is a true nightmare.";
      this.imageurl = "https://i.pinimg.com/originals/18/d6/ef/18d6efd5a9d4b796bde32c15e24384e4.jpg";
      this.species = "Monster";
      this.rarityBonus = 0.016;
      this.country = "";
    }
}
 
//PARANORMAL SPECIES
class banshee extends creature { 
  constructor() { 
    super(); 
    this.name = "Banshee"; 
    this.dangerLevel = 7; 
    this.attack = 250; 
    this.defense = 555; 
    this.speed = 42; 
    this.rarity = "Epic"; 
    this.desc = "Hear the wailing of the Banshee, an ethereal creature of the night. With her piercing screams and otherworldly powers, she will strike fear into the hearts of all who hear her call."; 
    this.imageurl = "https://i.pinimg.com/originals/30/b1/cd/30b1cd979c07148f0fc6404a0cf5eb90.jpg"; 
    this.species = "Paranormal"; 
    this.rarityBonus = 0.016; 
    this.country = "";
  } 
} 
class djinn extends creature { 
  constructor() { 
    super(); 
    this.name = "Djinn"; 
    this.dangerLevel = 7; 
    this.attack = 198; 
    this.defense = 702; 
    this.speed = 43; 
    this.rarity = "Epic"; 
    this.desc = "Summon the Djinn, a powerful spirit bound to grant wishes to those who release him from his lamp. With his mastery over fire and smoke, this genie can be both friend and foe."; 
    this.imageurl = "https://i.pinimg.com/originals/19/3c/2f/193c2f80d1052f44a558cce0e3b5dd9a.png"; 
    this.species = "Paranormal"; 
    this.rarityBonus = 0.016; 
    this.country = "";
  } 
}    
class dybukk extends creature { 
  constructor() { 
    super(); 
    this.name = "Dybukk"; 
    this.dangerLevel = 9; 
    this.attack = 402; 
    this.defense = 1341; 
    this.speed = 44; 
    this.rarity = "Mythical"; 
    this.desc = "Beware the Dybbuk, a malevolent spirit who possesses the bodies of the living. With his twisted powers and relentless pursuit, he will stop at nothing to wreak havoc on the mortal realm."; 
    this.imageurl = "https://66.media.tumblr.com/21f9c4e11b710c770a3baa20095d3217/tumblr_oaava9zCj81v9qvuco3_500.jpg"; 
    this.species = "Paranormal"; 
    this.rarityBonus = 0.024; 
    this.country = "";
  } 
} 

//ARIEL SPECIES
class griffin extends creature {
    constructor() {
      super();
      this.name = "Griffin";
      this.dangerLevel = 4;
      this.attack = 77;
      this.defense = 216;
      this.speed = 37;
      this.rarity = "Common";
      this.desc = "Majestic and fearsome, the griffin is a powerful creature with the body of a lion and the wings of an eagle. Beware their sharp claws and beak in battle, for they are formidable foes.";
      this.imageurl = "https://i.pinimg.com/originals/d3/93/79/d39379602c89af366ae350cfc429c52d.jpg";
      this.species = "Ariel";
      this.rarityBonus = 0;
      this.country = "";
    }
}
class pegasus extends creature {
    constructor() {
      super();
      this.name = "Pegasus";
      this.dangerLevel = 6;
      this.attack = 96;
      this.defense = 456;
      this.speed = 42;
      this.rarity = "Rare";
      this.desc = "Soar through the skies on the back of a Pegasus, a majestic winged horse. With its grace and speed, this creature is a symbol of freedom and untamed beauty.";
      this.imageurl = "https://th.bing.com/th/id/OIP.tWJlimbKc9lmno-_l6zltAHaJr?pid=ImgDet&rs=1";
      this.species = "Ariel";
      this.rarityBonus = 0.008;
      this.country = "";
    }
} 
class phoenix extends creature {
    constructor() {
      super();
      this.name = "Phoenix";
      this.dangerLevel = 8;
      this.attack = 215;
      this.defense = 651;
      this.speed = 44;
      this.rarity = "Epic";
      this.desc = "Witness the rebirth of the Phoenix, a Mythical bird that rises from its own ashes. With its ability to burst into flames and be reborn anew, this creature is a symbol of eternal life and renewal.";
      this.imageurl = "https://th.bing.com/th/id/R.49334f91a940b83b1cd28995a19c87e2?rik=Ukn73KC7GpS0cA&pid=ImgRaw&r=0";
      this.species = "Ariel";
      this.rarityBonus = 0.016;
      this.country = "";
    }
}
class valkyrie extends creature {
    constructor() {
      super();
      this.name = "Valkyrie";
      this.dangerLevel = 9;
      this.attack = 670;
      this.defense = 533;
      this.speed = 49;
      this.rarity = "Mythical";
      this.desc = "Fear the Valkyrie, a warrior maiden with unmatched skill in battle. With her weapon mastery and unbreakable will, she is the ultimate champion of the gods.";
      this.imageurl = "https://myschizlife.files.wordpress.com/2020/12/img_5278.jpg?w=473";
      this.species = "Ariel";
      this.rarityBonus = 0.024;
      this.country = "";
    }
}
  
//DRAGON SPECIES
class wyvern extends creature {
    constructor() {
      super();
      this.name = "Wyvern";
      this.dangerLevel = 5;
      this.attack = 104;
      this.defense = 389;
      this.speed = 38;
      this.rarity = "Rare";
      this.desc = "Meet the Wyvern, a fierce flying serpent with razor-sharp claws and venomous fangs. With its ability to breathe fire and lightning-fast speed, this creature is a formidable opponent.";
      this.imageurl = "https://th.bing.com/th/id/R.c183fd07f85243dadf70f27b04b301c6?rik=Ko3oWgNN4%2fVYhA&riu=http%3a%2f%2fstatic1.wikia.nocookie.net%2f__cb20130308214559%2ffinalfantasy%2fimages%2fb%2fb2%2fBlood_of_Bahamut_Bahamut_Concept_Art.jpg&ehk=fAq%2b0j5uM%2bjIdbdXOE3mjHxMibxTmcop19cyfnExaFg%3d&risl=&pid=ImgRaw&r=0";
      this.species = "Dragon";
      this.rarityBonus = 0.008;
      this.country = "";
    }
}
class dragon extends creature {
    constructor() {
      super();
      this.name = "Dragon";
      this.dangerLevel = 9;
      this.attack = 501;
      this.defense = 1032;
      this.speed = 42;
      this.rarity = "Mythical";
      this.desc = "Face the wrath of the Dragon, a mighty beast with scales as hard as steel and a breath that can scorch the earth. With its intelligence and ferocity, this creature is the king of all monsters.";
      this.imageurl = "https://th.bing.com/th/id/R.c7262e6eb7e66cda54b6edf42b7eff91?rik=p4H3YPMIXfb2cA&pid=ImgRaw&r=0";
      this.species = "Dragon";
      this.rarityBonus = 0.024;
      this.country = "";
    }
}
class raiju extends creature {
    constructor() {
      super();
      this.name = "Raiju";
      this.dangerLevel = 10;
      this.attack = 430;
      this.defense = 1161;
      this.speed = 47;
      this.rarity = "Mythical";
      this.desc = "Brace yourself for the Raiju, a dragon of unparalleled speed and control over lightning. Its power is like a storm, striking with deadly precision and leaving nothing in its wake.";
      this.imageurl = "https://i.pinimg.com/originals/93/12/28/93122804efe6ce940c2d248ef72d72c1.jpg";
      this.species = "Dragon";
      this.rarityBonus = 0.024;
      this.country = "";
    }
}

let goblinU = new goblin();
let ogreU = new ogre();
let faerieU = new faerie();
let trollU = new troll();
let gorgonU = new gorgon();
let golemU = new golem();
let cyclopsU = new cyclops();
let giantU = new giant();
let werewolfU = new werewolf();
let yetiU = new yeti();
let minotaurU = new minotaur();
let cerberusU = new cerberus();
let chimeraU = new chimera();
let bansheeU = new banshee();
let medusaU = new medusa();
let djinnU = new djinn();
let scyllaU = new scylla();
let dybukkU = new dybukk();
let fenrirU = new fenrir();
let oniU = new oni();
let pixieU = new pixie();
let griffinU = new griffin();
let sylphU = new sylph();
let wyvernU = new wyvern();
let pegasusU = new pegasus();
let manticoreU = new manticore();
let phoenixU = new phoenix();
let valkyrieU = new valkyrie();
let dragonU = new dragon();
let raijuU = new raiju();
let sirenU = new siren();
let nessieU = new nessie();
let basiliskU = new basilisk();
let krakenU = new kraken();
let charibdysU = new charibdys();
let kaijuU = new kaiju();
let cthulhuU = new cthulhu();
let jormungandrU = new jormungandr();
let hydraU = new hydra();

myCreatures.push(ogreU, goblinU, faerieU, trollU, gorgonU, golemU, cyclopsU, giantU, werewolfU, yetiU, minotaurU, cerberusU, chimeraU, bansheeU, medusaU, djinnU, scyllaU, dybukkU, fenrirU, oniU, pixieU, griffinU, sylphU, wyvernU, pegasusU, manticoreU, phoenixU, valkyrieU, dragonU, raijuU, sirenU, nessieU, basiliskU, krakenU, charibdysU, kaijuU, cthulhuU, jormungandrU, hydraU);

myCreatures[0].shards = 500;
















function randomNumber(minRandomNum, maxRandomNum) {
    return Math.floor(Math.random() * (maxRandomNum - minRandomNum + 1) + minRandomNum);
}

function drawACard(cardRarity) {
    let isRightCreature = false;
    
    const CommonCost = 500;
    const RareCost = 1200;
    const EpicCost = 3000;
    const landOnlyCost = 1700;
    const flightOnlyCost = 1700;
    const seaOnlyCost = 1700;
    const luckyCost = 2000;
    let random =  randomNumber(1, 100);
    //Common card pack
    if (cardRarity == "Common") {
        userCoins -= CommonCost;
        if (random > 0 && random <= 90) {
            randomCommon();
        } else {
            randomRare();
        }
    //Rare card pack
    } else if (cardRarity == "Rare") {
        userCoins -= RareCost
        if (random > 0 && random <= 90) {
            randomRare();
        } else {
            randomEpic();
        }
    //Epic card pack
    } else if (cardRarity == "Epic") {
        userCoins -= EpicCost;
        if (random > 0 && random <= 90) {
            randomEpic();
        } else {
            randomMythical();
        }
    //Mythical card pack
    } else if (cardRarity == "Mythical") {
        randomMythical();
	//card Pack only featuring land animals
    } else if (cardRarity == "landOnly") {
        userCoins -= landOnlyCost;
	    isRightCreature = false;
        while (!isRightCreature) {
            random = randomNumber(1, 100);
            if (random > 0 && random <= 50) {
                randomCommon();
            } else if (random > 50 && random <= 75) {
                randomRare();
            } else if (random > 75 && random <= 95) {
                randomEpic();
            } else {
                randomMythical();
            }
            if (drawnCard.species == "Land") {
                isRightCreature = true;
            }
        }
	//card pack only featuring flight classed animals
    } else if (cardRarity == "flightOnly") {
        userCoins -= flightOnlyCost;
	    isRightCreature = false;
        while (!isRightCreature) {
            random = randomNumber(1, 100);
            if (random > 0 && random <= 50) {
                randomCommon();
            } else if (random > 50 && random <= 75) {
                randomRare();
            } else if (random > 75 && random <= 90) {
                randomEpic();
            } else {
                randomMythical();
            }
            if (drawnCard.species == "Airborn") {
                isRightCreature = true;
            }
        }
	//pack including only sea creatures.
    } else if (cardRarity == "seaOnly") {
        userCoins -= seaOnlyCost;
        isRightCreature = false;
        while (!isRightCreature) {
            random = randomNumber(1, 100);
            if (random > 0 && random <= 50) {
                randomCommon();
            } else if (random > 50 && random <= 75) {
                randomRare();
            } else if (random > 75 && random <= 90) {
                randomEpic();
            } else {
                randomMythical();
            }
            if (drawnCard.species == "Oceanic") {
                isRightCreature = true;
            }
        }
    //lucky card pack containing every creature.
    } else if (cardRarity == "lucky") {
        userCoins -= luckyCost;
        if (random > 0 && random <= 60) {
            randomCommon();
        } else if (random > 60 && random <= 85) {
            randomRare();
        } else if (random > 85 && random <= 95) {
            randomEpic();
        } else {
            randomMythical();
        }
    //card pack users will be able to claim once per day.
    } else if (cardRarity == "daily") {
        
    }

    let drawnCardExists = false;
    for (let i = 0; i < myCreatures.length; i++) {
        if (drawnCard.name == myCreatures[i].name) {
            drawnCardExists = true;
            myCreatures[i].shards += 50; 
        }
    }
    if (drawnCardExists == false) {
        myCreatures.push(drawnCard);
    } else {
        drawnCard = 0;
    }
}

function randomCommon() {
    switch (randomNumber(1, 10)) {
        case 1:
            drawnCard = Object.assign({}, ogre);
            break;
        case 2:
            drawnCard = Object.assign({}, goblin);
            break;
        case 3:
            drawnCard = Object.assign({}, faerie);
            break;
        case 4:
            drawnCard = Object.assign({}, troll);
            break;
        case 5:
            drawnCard = Object.assign({}, gorgon);
            break;
        case 6:
            drawnCard = Object.assign({}, golem);
            break;
        case 7:
            drawnCard = Object.assign({}, pixie);
            break;
        case 8:
            drawnCard = Object.assign({}, griffin);
            break;
        case 9:
            drawnCard = Object.assign({}, sylph);
            break;
        case 10:
            drawnCard = Object.assign({}, siren);
            break;
    }
}

function randomRare() {
    switch (randomNumber(1, 10)) {
        case 1:
            drawnCard = Object.assign({}, cyclops);
            break;
        case 2:
            drawnCard = Object.assign({}, giant);
            break;
        case 3:
            drawnCard = Object.assign({}, werewolf);
            break;
        case 4:
            drawnCard = Object.assign({}, yeti);
            break;
        case 5:
            drawnCard = Object.assign({}, minotaur);
            break;
        case 6:
            drawnCard = Object.assign({}, cerberus);
            break;
        case 7:
            drawnCard = Object.assign({}, wyvern);
            break;
        case 8:
            drawnCard = Object.assign({}, pegasus);
            break;
        case 9:
            drawnCard = Object.assign({}, nessie);
            break;
        case 10:
            drawnCard = Object.assign({}, basilisk);
            break;
    }
}

function randomEpic() {
    switch (randomNumber(1, 10)) {
        case 1:
            drawnCard = Object.assign({}, chimera);
            break;
        case 2:
            drawnCard = Object.assign({}, banshee);
            break;
        case 3:
            drawnCard = Object.assign({}, djinn);
            break;
        case 4:
            drawnCard = Object.assign({}, medusa);
            break;
        case 5:
            drawnCard = Object.assign({}, scylla);
            break;
        case 6:
            drawnCard = Object.assign({}, manticore);
            break;
        case 7:
            drawnCard = Object.assign({}, pheonix);
            break;
        case 8:
            drawnCard = Object.assign({}, kraken);
            break;
        case 9:
            drawnCard = Object.assign({}, charibdys);
            break;
        case 10:
            drawnCard = Object.assign({}, kaiju);
            break;
    }
}

function randomMythical() {
    switch (randomNumber(1, 17)) {
        case 1: case 2:
            drawnCard = Object.assign({}, dybukk);
            break;
        case 3: case 4:
            drawnCard = Object.assign({}, oni);
            break;
        case 5: case 6:
            drawnCard = Object.assign({}, fenrir);
            break;
        case 7: case 8:
            drawnCard = Object.assign({}, valkyrie);
            break;
        case 9: case 10:
            drawnCard = Object.assign({}, dragon);
            break;
        case 11: case 12:
            drawnCard = Object.assign({}, raiju);
            break;
        case 13: case 14:
            drawnCard = Object.assign({}, hydra);
            break;
        case 15: case 16:
            drawnCard = Object.assign({}, cthulhu);
            break;
        case 17:
            drawnCard = Object.assign({}, jormungandr);
            break;
    }
}

let creatureSelected = "";
function creatureDifficulty(difficulty) {
    switch (difficulty) {
        case 1:
            randomCommon();
            creatureSelected = Object.assign({}, drawnCard);
            botLevelUp(randomNumber(4, 7));
            break;
        case 2:
            random = randomNumber(1, 10);
            if (random <= 6) {
                randomCommon();
                creatureSelected = Object.assign({}, drawnCard);
                botLevelUp(randomNumber(7, 11));
            } else {
                randomRare();
                creatureSelected = Object.assign({}, drawnCard);
                botLevelUp(randomNumber(2, 3));
            }
            break;
        case 3:
            random = randomNumber(1, 10);
            if (random <= 6) {
                randomCommon();
                creatureSelected = Object.assign({}, drawnCard);
                botLevelUp(randomNumber(15, 21));
            } else {
                randomRare();
                creatureSelected = Object.assign({}, drawnCard);
                botLevelUp(randomNumber(5, 8));
            }
            break;
        case 4:
            random = randomNumber(1, 10);
            if (random <= 4) {
                randomCommon();
                creatureSelected = Object.assign({}, drawnCard);
                botLevelUp(randomNumber(23, 27));
            } else if (random <= 8) {
                randomRare();
                creatureSelected = Object.assign({}, drawnCard);
                botLevelUp(randomNumber(11, 14));
            } else {
                randomEpic();
                creatureSelected = Object.assign({}, drawnCard);
                botLevelUp(randomNumber(1, 3));
            }
            break;
        case 5:
            random = randomNumber(1, 10);
            if (random <= 3) {
                randomCommon();
                creatureSelected = Object.assign({}, drawnCard);
                botLevelUp(randomNumber(32, 35));
            } else if (random <= 7) {
                randomRare();
                creatureSelected = Object.assign({}, drawnCard);
                botLevelUp(randomNumber(17, 21));
            } else {
                randomEpic();
                creatureSelected = Object.assign({}, drawnCard);
                botLevelUp(randomNumber(4, 7));
            }
            break;
        case 6:
            random = randomNumber(1, 10);
            if (random <= 5) {
                randomRare();
                creatureSelected = Object.assign({}, drawnCard);
                botLevelUp(randomNumber(25, 30));
            } else if (random <= 9) {
                randomEpic();
                creatureSelected = Object.assign({}, drawnCard);
                botLevelUp(randomNumber(12, 15));
            } else {
                randomMythical();
                creatureSelected = Object.assign({}, drawnCard);
                botLevelUp(randomNumber(2, 4));
            }
            break;
        case 7:
            random = randomNumber(1, 10);
            if (random <= 3) {
                randomRare();
                creatureSelected = Object.assign({}, drawnCard);
                botLevelUp(randomNumber(31, 35));
            } else if (random <= 7) {
                randomEpic();
                creatureSelected = Object.assign({}, drawnCard);
                botLevelUp(randomNumber(16, 23));
            } else {
                randomMythical();
                creatureSelected = Object.assign({}, drawnCard);
                botLevelUp(randomNumber(5, 9));
            }
            break;
        case 8:
            random = randomNumber(1, 10);
            if (random <= 1) {
                randomRare();
                creatureSelected = Object.assign({}, drawnCard);
                botLevelUp(randomNumber(36, 40));
            } else if (random <= 5) {
                randomEpic();
                creatureSelected = Object.assign({}, drawnCard);
                botLevelUp(randomNumber(24, 32));
            } else {
                randomMythical();
                creatureSelected = Object.assign({}, drawnCard);
                botLevelUp(randomNumber(10, 17));
            }
            break;
        case 9:
            random = randomNumber(1, 10);
            if (random <= 3) {
                randomEpic();
                creatureSelected = Object.assign({}, drawnCard);
                botLevelUp(randomNumber(36, 40));
            } else {
                randomMythical();
                creatureSelected = Object.assign({}, drawnCard);
                botLevelUp(randomNumber(18, 26));
            }
            break;
        case 10:
            randomMythical();
            creatureSelected = Object.assign({}, drawnCard);
            botLevelUp(randomNumber(27, 40));
            break;
    }
}

class createEvent {
    constructor(eventName, numberOfStages, stage1Difficulty) {
        this.eventName = eventName;
        this.numberOfStages = numberOfStages;
        creatureDifficulty(stage1Difficulty);
        this.stage1Creature = creatureSelected;
        if (numberOfStages >= 2) { 
            creatureDifficulty(stage1Difficulty);
            this.stage2Creature = creatureSelected;
        };
        if (numberOfStages >= 3) { 
            creatureDifficulty(stage1Difficulty + 1);
            this.stage3Creature = creatureSelected;
        };
        if (numberOfStages >= 4) { 
            creatureDifficulty(stage1Difficulty + 1);
            this.stage4Creature = creatureSelected;
        };
        if (numberOfStages == 5) { 
            creatureDifficulty(stage1Difficulty + 2);
            this.stage5Creature = creatureSelected;
        };
    }
}

userFood = 999999;
errorMsg = "";