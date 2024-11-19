const { ChatInputCommandInteraction, SlashCommandBuilder, EmbedBuilder } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
    .setName("afk")
    .setDescription("Si vous êtes absent(e) faites cette commande."),
    /**
     * 
     * @param {ChatInputCommandInteraction} interaction 
     */
    execute(interaction){
        const embed = new EmbedBuilder()
        
        .setColor("#229acc")
        .setTitle("A.F.K")
        .setImage("https://cdn.discordapp.com/attachments/794857986102788157/895300319666405487/6cbadba0c1b883e405a261207778d085.gif")
        .setDescription(interaction.user.username + " est A.F.K !")
        .setTimestamp()
        .setFooter({text: "Design By Tony Pinkevych"})

        interaction.reply({embeds: [embed]})
    }

}