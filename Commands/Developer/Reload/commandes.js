const { ChatInputCommandInteraction, Client } = require("discord.js");
const { loadCommands } = require("../../../Handlers/commandHandler");

module.exports = {
    subCommand: "reload.commandes",
    /**
     * 
     * @param {ChatInputCommandInteraction} interaction 
     * @param {Client} client 
     */
    execute(interaction, client){
        loadCommands(client);
                interaction.reply({content: "Commandes redémarrées."});
    }
}