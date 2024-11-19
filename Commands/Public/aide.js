const { ChatInputCommandInteraction, SlashCommandBuilder, EmbedBuilder } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
    .setName("aide")
    .setDescription("Toutes les commandes du bot réunies."),
    /**
     * 
     * @param {ChatInputCommandInteraction} interaction 
     */
    execute(interaction){
        const embed = new EmbedBuilder()

     .setColor("#229acc")
     .setTitle("Voici les commandes disponibles : ")
     .setImage("https://cdn.discordapp.com/attachments/794857986102788157/894968076267847780/26e897f306b61f8a860c8db30063eba7.gif")
     .addFields(
		{ name: "<:discord:906109406851268619> **/serveur**", value: "Pour être sur le serveur officiel du bot." },
        { name: "<:laptop_bsod:906108256164925470> **/id**", value: "Pour connaître ton identifiant." },
        { name: "<:8195fc1f1581186f5b2e3ed52eeaa1c2:906108265304297493> **/info**", value: "Pour avoirs quelques informations sur le bot." },
        { name: "<:cat_ban:905745679278825523> **/ban**", value: "Pour bannir des personnes" },
        { name: ":cartwheel: **/kick**", value: "Pour kick des personnes" },
        { name: "<:mirror_1fa9e:906108281259458560> **/pp**", value: "Pour voir ta photo de profil !" },
        { name: "<:headphone_1f3a7:906108291841667112> **/musique**", value: "Si tu es en panne de musiques à écouter !" },
        { name: "<:hehe11:810056702396989460> **/blague**", value: "Pour que le bot te fasse quelques blagues **(HUMOUR NOIR)**." },
        { name: "<:hehe_lv:779615847911522314> **/ping**, **/problem**", value: "Essaies, tu verras bien :eyes:" },
        { name: "<:cat_gun:881808704838709271> **/ennui**", value: "Fais cette commande si tu t'ennuies !" },
        { name: "<:zzz_emoji:738702728993308743> **/afk**", value: "Si tu dois t'absenter, fais cette commande !" },
        { name: "<:waveboy:906108224112050187> **/unafk**", value: "Si tu es de retour de ton asbence, fais cette commande !" }
	)
     .setTimestamp()
     .setFooter({ text: "Design By Tony Pinkevych" })
     interaction.reply({embeds: [embed]});

    }
}