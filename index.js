const Discord = require("discord.js");
const Client = new Discord.Client({
    intents: [
        Discord.Intents.FLAGS.GUILDS,
        Discord.Intents.FLAGS.GUILD_MESSAGES,
        Discord.Intents.FLAGS.GUILD_MEMBERS,
    ]
});

const prefix="-"


Client.on("ready", () => {
    console.log("bot working");
});

Client.on("messageCreate", message =>{
    if (message.author.bot) return;

    //-help
    if (message.content === prefix + "help"){
        const embed = new Discord.MessageEmbed()
            .setColor("#0099ff")
            .setTitle("**__bots command__** \n -HazureSkill : create the embed for HazureSkil \n -AttoutekiGacha : create the embed for AttoutekiGacha \n -Kamisama : create the embed for Kamisama \n -SonoMunou : create the embed for SonoMunou");
            
        message.channel.send({ embeds: [embed]});        
    }

    //-HazureSkill
    else if (message.content === prefix + "HazureSkill"){
        const embed = new Discord.MessageEmbed()
            .setColor("#0099ff")
            .setTitle("**Hazure Skill “Gacha” de Tsuihou Sareta Ore wa, Wagamama Osananajimi wo Zetsuen Shi Kakusei Suru**")
            .setURL("https://mangadex.org/title/7ce22c9e-5939-435e-b067-64ce659bb3b3/hazure-skill-gacha-de-tsuihou-sareta-ore-wa-wagamama-osananajimi-wo-zetsuen-shi-kakusei-suru")
            .setDescription("Crest was born as the fifth son of a duke. However, as the fifth son, he was in no position to talk. His childhood friend and also his fiancée, Ellis, treated him just like a slave. And on Crest's coming-of-age ceremony, he received a skill called 'Gacha' Yet, he wasn't able to learn how to use it and was banished away from his home. Banished into the forest full of monsters, Crest began to understand the power 'Gacha'. And then, Crest made up his mind. He will definitely survive and get back on his feet. \n **Alternative name:** Hazure Skill “Gacha” de Tsuihou Sareta Ore wa, Wagamama Osananajimi wo Zetsuen Shi Kakusei Suru ~ Bannou Cheat Skill wo Getto Shite, Mezase Rakuraku Saikyou Slow Life!~ \n **Author:** Kijima Ryuuta \n **Artist:** Eshika/Shogo \n **Genre:** Action ,Historical ,Romance")
            .setImage("https://uploads.mangadex.org/covers/7ce22c9e-5939-435e-b067-64ce659bb3b3/742522f6-60db-4a0e-8c6b-6646dc562a08.jpg.512.jpg")

        message.channel.send({ embeds: [embed]});        
    }

    //-AttoutekiGacha
    else if (message.content === prefix + "AttoutekiGacha"){
        const embed = new Discord.MessageEmbed()
            .setColor("#0099ff")
            .setTitle("**Attouteki Gacha Un de Isekai wo Nariagaru!**")
            .setURL("https://mangadex.org/title/ac2088f9-624d-4e80-a244-95c1a33c90f5/attouteki-gacha-un-de-isekai-wo-nariagaru")
            .setDescription("Jinta, who has never returned in a traffic accident, meets the goddess, Leafa, in heaven. Jinta was supposed to reach Heaven under the guidance of Leafa, Reincarnated in a different world from a strange thing. Immediately after reincarnating, the abnormal status of Jinta was discovered. Originally the maximum value of luck should be '99', but the value of Jinta is '999999'…!? \n **Alternative name:** I Rose Suddenly In The Alternate World By Overwhelming Gacha With Luck! \n **Author:** Kennoji \n **Artist:** Fujisaku Yuu \n **Genre:**Action, Comedy, Fantasy, Isekai")
            .setImage("https://uploads.mangadex.org/covers/ac2088f9-624d-4e80-a244-95c1a33c90f5/f8518f30-452a-46ac-8c2b-949b8ee502b2.jpg.512.jpg")

        message.channel.send({ embeds: [embed]});        
    }

    //-Kamisama
    else if (message.content === prefix + "Kamisama"){
        const embed = new Discord.MessageEmbed()
            .setColor("#0099ff")
            .setTitle("**Kamisama ni Kago 2 Nin Bun Moraimashita**")
            .setURL("https://mangadex.org/title/04e50c53-ac8b-4f3b-970b-01d078493afe/kamisama-ni-kago-2-nin-bun-moraimashita")
            .setDescription("As he was being transferred to a different world with his classmates, Fubuki Amasaka was pushed out of the teleportation circle by his class bully, Yushin. When he woke up, he was alone and deep in a forest. However God, who had saw the entire thing and already warned them to stay in the circle, took Yushi's cheat skill away and gave it to Fubuki as punishment. Can Fubuki, who got two divine blessings, live in a different world safely? \n **Alternative name:** I Received Blessings Meant For 2 People From God \n **Author:** Rinta \n **Artist:** Kichijou Terae \n **Genre:** Monsters, Action, Animals, Adventure, Magic, Isekai, Fantasy")
            .setImage("https://uploads.mangadex.org/covers/04e50c53-ac8b-4f3b-970b-01d078493afe/ed887d41-1f69-460d-816b-0242b4ab3ace.jpg.512.jpg")

        message.channel.send({ embeds: [embed]});        
    }

    //-SonoMunou
    else if (message.content === prefix + "SonoMunou"){
        const embed = new Discord.MessageEmbed()
            .setColor("#0099ff")
            .setTitle("**Sono Munou, Jitsuha Sekai Saikyou No Mahoutsukai**")
            .setURL("https://mangadex.org/title/d21e52cf-50f1-48c7-8de7-69f280c05be4/sono-munou-jitsuha-sekai-saikyou-no-mahoutsukai")
            .setDescription("Alma, the third son of an aristocratic family who could not receive the ability 'gift' that should have been given by God, is despised as incompetent from his parents' home and is expelled from the house. However, in reality, Alma was given a special 'gift' -alma who regained the abilities of the previous life with that gift 'reincarnated' becomes the strongest wizard in the world! Alma, who devoted all of his first life to the quest for magic, seeks a 'happy second life' with the magic of his previous life! **Alternative name:** That incompetent is actually the world's strongest wizard - He was scorned as incompetent and kicked out of his aristocratic family, but his gift of reincarnation awakened and brought back the abilities of his previous life. \n **Author:** Aono Hakuto , Mitsukawa \n **Artist:** Ogata Tei \n **Genre:**Reincarnationi, Action, Romance, Magic, Isekai, Fantasy, Slice of Life ")
            .setImage("https://uploads.mangadex.org/covers/d21e52cf-50f1-48c7-8de7-69f280c05be4/31f5a0a4-7a8b-4c6d-b96f-f1dfc26fed42.jpg")

        message.channel.send({ embeds: [embed]});        
    }   
});

Client.on("guildMemberAdd", member => {
    console.log("a member as come!");
    Client.channels.cache.get("923172001621876786").send("Welcome to the server <@" + member.id + ">! \n Now that you're there you must follow the rules <#923172527080087634> \n you can check the series that we are doing at <#923163762247225345> and pick your roles at <#922469267998400562> to get notified for every update \n we wish you the best during your time here" );
    member.roles.add("920710617881518131");
});

Client.on("guildMemberRemove", member => {
    console.log("a member as left the server");
    Client.channels.cache.get("923172023767814236").send(member.displayName + "has left.")
})

Client.login(process.env.TOKEN);

