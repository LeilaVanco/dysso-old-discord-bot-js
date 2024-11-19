const { SlashCommandBuilder, ChatInputCommandInteraction, EmbedBuilder, SlashCommandUserOption, ApplicationCommandOptionBase } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()

    .setName("id")
    .setDescription("Pour connaître ton identifiant.")
    .addUserOption(options => options
        .setName("membre")
        .setDescription("Sélectionnez le membre dont vous voulez savoir l'identifiant.")
        .setRequired(false)
        
    ),
    /**
     * 
     * @param {ChatInputCommandInteraction} interaction 
     */
    async execute(interaction){

        let mentionuser = interaction.options.getUser("membre");
        let embed;

        if(mentionuser == null){
             embed = new EmbedBuilder()
            .setColor("#229acc")
            .setTitle(`${interaction.user.username} voici l'identifiant du membre : ${interaction.user.id}`)
            .setThumbnail(interaction.user.displayAvatarURL())
            .setTimestamp()
        }

        else {
             embed = new EmbedBuilder()
            .setColor("#229acc")
            .setTitle(`${interaction.user.username} voici l'identifiant du membre : ${mentionuser.id}`)
            .setThumbnail(mentionuser.displayAvatarURL())
            .setTimestamp()

        }

        interaction.reply({embeds: [embed]});

    }

}