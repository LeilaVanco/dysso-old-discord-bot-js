const { SlashCommandBuilder, PermissionFlagsBits, ChatInputCommandInteraction, EmbedBuilder } = require("discord.js");
const Database = require("../../Schemas/Infraction");
const ms = require("ms");

module.exports = {
    data: new SlashCommandBuilder()
    .setName("exclusion")
    .setDescription("Restreint les possibilités de communication d'un membre.")
    .setDefaultMemberPermissions(PermissionFlagsBits.ModerateMembers)
    .setDMPermission(false)
    .addUserOption(options => options
        .setName("membre")
        .setDescription("Sélectionnez le membre à sanctionner.")
        .setRequired(true)
        
    )
    .addStringOption(options => options
     .setName("durée")
     .setDescription("Donnez une durée pour cette exclusion (1m, 1h, 1d, etc..).")
     .setRequired(true)

    )
    .addStringOption(options => options
        .setName("raison")
        .setDescription("Donnez une raison pour cette exclusion.")
        .setMaxLength(512)
    ),

    /**
     * 
     * @param {ChatInputCommandInteraction} interaction 
     */
    async execute(interaction){

        const { options, guild, member } = interaction;
        const membre = options.getMember("membre");
        const durée = options.getString("durée");
        const raison = options.getString("raison") || "Non spécifiée. ";

        const errorsArray = [];

        const errorsEmbed = new EmbedBuilder()
        .setAuthor({name: "Le membre n'a pas pu être exclu en raison de :"})
        .setColor("#229acc")

        if(!membre) return interaction.reply({
            embeds: [errorsEmbed.setDescription("Le membre a quitté le serveur ! <:bruh:902537853697941554>")],
        })

        if(!ms(durée) || ms(durée) > ms("28d"))
        errorsArray.push("Le temps fourni n'est pas valide ou dépasse la limite de 28 jours. <:unknown6:1041354111494393868> ");

        if(!membre.manageable || !membre.moderatable)
        errorsArray.push("Le membre sélectionné ne peut pas être exclu par ce bot. <:unknown5:1041355177590013982>")

        if(member.roles.highest.position < membre.roles.highest.position)
        errorsArray.push("Le membre sélectionné possède un rôle plus élevé que vous. <:tktcava:810057116781248525>")
    
        if(errorsArray.length)
        return interaction.reply({
            embeds: [errorsEmbed.setDescription(errorsArray.join("\n"))],
        });
        
        membre.timeout(ms(durée), raison).catch((err) => {
            interaction.reply({embeds: [errorsEmbed.setDescription("Je ne peux pas exclure ce membre dû à une erreur inhabituelle. <:unknown7:1041361461743718470>")]
        })
        return console.log("Erreur à cause de Timeout.js", err);
        })

        const newInfractionsObject = {
            IssuerID: member.id,
            IssuerTag: member.user.tag,
            Reason: raison,
            Date: Date.now()
        } 

        let userData = await Database.findOne({Guild: guild.id, User: membre.id});

        if(!userData)
        userData = await Database.create({Guild: guild.id, User: membre.id, Infractions: [newInfractionsObject]});
        else 
        userData.Infractions.push(newInfractionsObject) && await userData.save();

        const successEmbed = new EmbedBuilder()
        .setAuthor({name: "Exclusion :", iconURL: guild.iconURL()})
        .setColor("#229acc")
        .setDescription([
            `${membre} a reçu une exclusion pour **${ms(ms(durée), {long: true})}** par ${member}`,
            `ce qui fait un total de **${userData.Infractions.length} infraction(s).**`,
            `\nRaison : ${raison}`
        ].join("\n"));

        return interaction.reply({embeds: [successEmbed]});

    }
}