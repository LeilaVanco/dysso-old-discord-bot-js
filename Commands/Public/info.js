const { ChatInputCommandInteraction, SlashCommandBuilder, EmbedBuilder } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
    .setName("info")
    .setDescription("Voici quelques informations sur le bot !"),
    /**
     * 
     * @param {ChatInputCommandInteraction} interaction 
     */
    execute(interaction){

        const embed = new EmbedBuilder()
    .setColor("#229acc")
    .setTitle("Voici quelques informations sur le bot ! :comet:")
    .setDescription("Tout d'abord, merci d'avoir ajouté Dysso sur votre serveur ! Le bot a maintenant son site officiel ! [Clique ici pour y accéder](https://dysso.webador.fr)")
    .setImage("https://cdn.discordapp.com/attachments/794857986102788157/894968121427902464/day-11-400x300_v10.gif")
    .addFields(
		{ name: 'Regular field title', value: 'Some value here' },
		{ name: '\u200B', value: '\u200B' },
		{ name: 'Inline field title', value: 'Some value here', inline: true },
		{ name: 'Inline field title', value: 'Some value here', inline: true },
	)
    .setTimestamp()
    .setFooter( {text: "Design By Tony Pinkevych" })

    interaction.reply({embeds: [embed]});

    }

}