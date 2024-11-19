const { ChatInputCommandInteraction, SlashCommandBuilder, EmbedBuilder } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
    .setName("unafk")
    .setDescription("Si vous n'êtes plus absent(e) faites cette commande."),
    /**
     * 
     * @param {ChatInputCommandInteraction} interaction 
     */
    execute(interaction){
        const embed = new EmbedBuilder()
        .setColor("#229acc")
        .setTitle("A.F.K")
        .setImage("https://cdn.discordapp.com/attachments/794857986102788157/895347526348206120/c59ee7a0f97feb6b4fbfb1dfa976e20b.gif")
        .setDescription(interaction.user.username + " n'est plus A.F.K !")
        .setTimestamp()
        .setFooter( {text: "Design By Tony Pinkevych"} )

        interaction.reply({embeds: [embed]});
    }

}