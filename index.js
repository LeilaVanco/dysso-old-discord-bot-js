const { SlashCommandBuilder } = require("@discordjs/builders");

const { Client, EmbedBuilder, Collection, ChannelType, Partials } = require("discord.js");

const client = new Client({ intents: 3276799, partials: [ Partials.Message, Partials.Channel, Partials.GuildMember, Partials.GuildScheduledEvent, Partials.Reaction, Partials.ThreadMember, Partials.User ]});

const prefix = "+";

const { loadEvents } = require("./Handlers/eventHandler");
const { loadCommands } = require("./Handlers/commandHandler");

client.events = new Collection();
client.commands = new Collection();
client.subCommands = new Collection();

client.config = require("./config.json");

const { connect } = require("mongoose");
connect(client.config.DatabaseURL,{
}).then(() => console.log("Le client est maintenant connecté à la database !"));

(async function () {
    await loadEvents(client);
})();

client.on("messageCreate", async message => {
    if(message.author.bot) return;
    if(message.channel.type === ChannelType.DM){
        message.reply("https://tenor.com/view/who-are-you-cat-cat-staring-confused-weird-gif-24607471"); return;
    }
        
     //+ban
else if(message.content.startsWith(prefix + "ban")){
    if (message.member.permissions.has("ADMINISTRATOR")) {
    const member = message.mentions.members.first();
  
    if (!member) return message.reply("Membre non ou mal mentionné !");
    if (member.id === client.user.id) return message.reply("Eho, je ne peux pas être banni ! <a:gneu:881807487181926441>");
    if (member.id === message.member.id) return message.reply("Vous ne pouvez pas vous bannir vous même. <:sus:903655560078045294>");
    if (!member.bannable) return message.reply("Je n'ai pas les permissions de bannir cette personne ! <:SadOkay:996386556120145961>");

    message.channel.send(member.displayName + " a bien été banni ┻━┻ ︵ヽ(`Д´)ﾉ︵ ┻━┻");
    member.ban().catch(() => {
      message.reply("Je n'arrive pas a bannir ce membre ! <:thinking_derp:899284722696470578>");
    });
  }
}
//+kick
else if(message.content.startsWith(prefix + "kick")){
    if (message.member.permissions.has("MANAGE_MESSAGES")) {
    const member = message.mentions.members.first();
  
    if (!member) return message.reply("Membre non ou mal mentionné !");
    if (member.id === client.user.id) return message.reply("Eho, je ne peux pas être expulsé ! <a:gneu:881807487181926441>");
    if (member.id === message.member.id) return message.reply("Vous ne pouvez pas vous expulser vous même <:sus:903655560078045294>");
    if (!member.bannable) return message.reply("Je n'ai pas les permissions d'expulser cette personne ! <:SadOkay:996386556120145961>");

    message.channel.send(member.displayName + " a bien été expulsé (ノಠ ∩ಠ)ノ彡( \o°o)\ ");
    member.ban().catch(() => {
      message.reply("Je n'arrive pas a expulser ce membre ! <:thinking_derp:899284722696470578>");
    });
  }
}
    
      
    //@Dysso
    if(message.mentions.members.first() === message.guild.members.cache.get("996377766691885106")){
        message.reply("Mon préfixe est +");
    }

    //+ping
   if(message.content == prefix + "ping"){
       message.reply("pong (～￣▽￣)～");
   } 
   //(╯°□°）╯︵ ┻━┻
   if(message.content === "(╯°□°）╯︵ ┻━┻"){
       message.reply("┻━┻     (゜-゜)");
   }
   //+server
   if(message.content === prefix + "server"){
       message.reply("discord.gg/e7eKKuTYSV");
   }
   //no u
   if(message.content === "no u"){
       message.reply("no u")
   }
    //+afk
    if(message.content === prefix + "afk"){
        const embed = new EmbedBuilder()
        .setColor("#229acc")
        .setTitle("A.F.K")
        .setImage("https://cdn.discordapp.com/attachments/794857986102788157/895300319666405487/6cbadba0c1b883e405a261207778d085.gif")
        .setDescription(message.author.username + " est A.F.K !")
        .setTimestamp()
        .setFooter("Design By Tony Pinkevych")

        message.channel.send({embeds: [embed]});
    }
    //+unafk
    if(message.content === prefix + "unafk"){
        const embed = new EmbedBuilder()
        .setColor("#229acc")
        .setTitle("A.F.K")
        .setImage("https://cdn.discordapp.com/attachments/794857986102788157/895347526348206120/c59ee7a0f97feb6b4fbfb1dfa976e20b.gif")
        .setDescription(message.author.username + " n'est plus A.F.K !")
        .setTimestamp()
        .setFooter("Design By Tony Pinkevych")

        message.channel.send({embeds: [embed]});
    }

   //+info
   if(message.content === prefix + "info"){
    
   }
   //+music
   if(message.content === prefix + "music"){
    const embed = new EmbedBuilder()
       .setColor("#229acc")
       .setTitle("Voici une playlist sympathique à écouter !")
       .setURL("https://youtube.com/playlist?list=PL05vIUGdMZ_udsShqylSQzvkzWdr5K-1u")
       .setDescription("Plus tu descends dans la playlist, plus tu devrais trouver des musiques cool !")
       .setImage("https://cdn.discordapp.com/attachments/794857986102788157/894968120182181918/d23a25e799613ef9e8ddbd2837135de9.gif")
       .setTimestamp()
       .setFooter("Design By Tony Pinkevych")
       message.channel.send({ embeds: [embed]});
    }
    //+problem
    if(message.content === prefix + "problem"){
        message.reply("Quelqu'un t'embête ?? Je vais le mettre en pls vite fait bien fait !! (╬▔皿▔)╯");
        const embed = new EmbedBuilder()
        .setColor("#229acc")
        .setTitle("FIGHT !!")
        .setDescription("Oups.. il se peut que j'ai gravement blessé celui qui t'embêtes ! J'appelle l'ambulance !!")
        .setFooter("Design By Tony Pinkevych")
        .setImage("https://cdn.discordapp.com/attachments/794857986102788157/895365174830174238/3a26cc514773dc58a06a2df7a672c2f2.gif")
        .setTimestamp()
        
        message.channel.send({ embeds: [embed]});

    }
   //+pp
   if(message.content == prefix + "pp"){
    const embed = new EmbedBuilder()
    .setColor("#229acc")
    .setImage(message.author.displayAvatarURL({dynamic: true, size: 512}))
    .setTimestamp()

    message.channel.send({embeds: [embed]});
   }
    //+welcome
    if(message.content === prefix + "welcome"){
        message.channel.send("Bienvenue à toi jeune voyageur ! Que viens-tu faire dans nos contrées ? (Ծ. Ծ)");
    }
    //+userinfo
    if(message.content === prefix + "userinfo"){
        const embed = new EmbedBuilder()
        .setColor("#229acc")
        .setTitle("Information sur l'utilisateur " + message.author.username)
        .setDescription("Voici quelques informations sur toi !")
        .setThumbnail(message.author.displayAvatarURL({dynamic: true, size: 512}))
        .setTimestamp()
        message.channel.send({embeds: [embed]});
    }
    //+bored
    if(message.content === prefix + "bored"){
        message.reply("Tu t'ennuies ? Je suis là pour te divertir !");
        const embed = new EmbedBuilder()
         .setColor("#229acc")
         .setTitle("Voici une petite playlist de vidéos amusantes et divertissantes, juste pour toi !")
         .setDescription("Helluva Boss est une série pour **adulte, ou pour public averti**. Cela se déroule en enfer, dans une entreprise assez mal organisée qui effectue des services pas comme les autres, avec un sens de l'humour assez particulier. Suivez-maintenant cette aventure spéciale et unique !")
         .setImage("https://cdn.discordapp.com/attachments/794857986102788157/894968118613536788/Cute-And-Funny-Gifs-By-Tony-Pinkevich-05.gif")
         .setURL("https://www.youtube.com/playlist?list=PL05vIUGdMZ_ssTYiGqyboHcA1XXuik3tC")
         .setTimestamp()
         .setFooter("Design By Tony Pinkevych")
         message.channel.send({embeds: [embed]});
    }
   
});

client.login(client.config.token);