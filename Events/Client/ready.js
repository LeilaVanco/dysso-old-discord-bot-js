const { ActivityType } = require("discord.js");
const { loadCommands } = require("../../Handlers/commandHandler");

module.exports = {
    name: "ready",
    once: true,
    /**
     * 
     * @param {import("discord.js").Client} client 
     */
    async execute(client){

            console.log("bot opérationnel");
                                
                const statuses = [
                    `/aide | Servers : ${client.guilds.cache.size}`,
                    `/aide | Users : ${client.guilds.cache.reduce((acc, guild) => acc + guild.memberCount, 0)}`,
                    `/aide | ☾`,
                ];
        
                setInterval(() => {
                    client.user.setPresence({
                        status: "dnd",
                        activities: [ { name: statuses[Math.floor(Math.random() * ((statuses.length - 1) + 1))] } ]
                    });
                    
                }, 15000);

        await loadCommands(client);
    }
}