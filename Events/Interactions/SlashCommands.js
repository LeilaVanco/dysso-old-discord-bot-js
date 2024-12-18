const { ChatInputCommandInteraction } = require("discord.js");

module.exports = {
    name: "interactionCreate",
    /**
     * 
     * @param {ChatInputCommandInteraction} interaction 
     */
    execute(interaction, client){
        if(!interaction.isChatInputCommand()) return;

        const command = client.commands.get(interaction.commandName);
        if(!command)
        return interaction.reply({
            content: "Cette commande est obsolète.",
            ephemeral: true
        });

        if(command.developer && interaction.user.id !== "907264292431224842")
        return interaction.reply({
            content: "Cette commande est uniquement disponible pour le développeur du bot !",
            ephemeral: true
        
        });

        const subCommand = interaction.options.getSubcommand(false);
        if(subCommand){
            const subCommandFile = client.subCommands.get(`${interaction.commandName}.${subCommand}`);
            if(!subCommandFile) return interaction.reply({
                content: "Cette sub commande est obsolète.",
                ephemeral: true
            });

            subCommandFile.execute(interaction, client);
        } else command.execute(interaction, client);
    }
}