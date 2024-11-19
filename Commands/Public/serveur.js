const { ChatInputCommandInteraction, SlashCommandBuilder } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
    .setName("serveur")
    .setDescription("Affiche le serveur support de Dysso ☾."),
    /**
     * 
     * @param {ChatInputCommandInteraction} interaction 
     */
    execute(interaction){
        interaction.reply({content: "discord.gg/e7eKKuTYSV"});
    }

}