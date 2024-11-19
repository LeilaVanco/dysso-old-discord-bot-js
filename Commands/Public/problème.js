const { SlashCommandBuilder, ChatInputCommandInteraction, EmbedBuilder, SlashCommandUserOption, ApplicationCommandOptionBase } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()

    .setName("problème")
    .setDescription("Au cas-où tu aurais des problèmes ..")
    .addUserOption(options => options
        .setName("membre")
        .setDescription("Sélectionnez le membre avec qui vous avez des problèmes.")
        .setRequired(true)
        
    ),

    /**
     * 
     * @param {ChatInputCommandInteraction} interaction 
     */

    async execute(interaction){

        const memberOption = interaction.options.get("membre");
        const memberId = memberOption.user.id; 
        console.log(memberId)

        const embed = new EmbedBuilder()
        .setColor("#229acc")
        .setTitle("FIGHT !!")
        //.setDescription(`Oups.. il se peut que j'ai gravement blessé ${memberId} ! J'appelle l'ambulance !!`)    
        .setFooter("Design By Tony Pinkevych")
        .setImage("https://cdn.discordapp.com/attachments/794857986102788157/895365174830174238/3a26cc514773dc58a06a2df7a672c2f2.gif")
        .setTimestamp()
        
        interaction.reply({embeds: [embed]});
    }

}