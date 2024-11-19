const  { SlashCommandBuilder, PermissionFlagsBits } = require("discord.js");

module.exports = {
    developer: true,
    data: new SlashCommandBuilder()
    .setName("reload")
    .setDescription("Sert à redémarrer les commandes et évents.")
    .setDefaultMemberPermissions(PermissionFlagsBits.Administrator)
    .addSubcommand((options) => options
    .setName("évents")
    .setDescription("Redémarre les évents."))
    .addSubcommand((options) => options
    .setName("commandes")
    .setDescription("Redémarre les commandes.")),
}