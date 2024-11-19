async function loadCommands(client){
    const { loadFiles } = require("../Fonction/fileLoader");
    const ascii = require("ascii-table");
    const table = new ascii().setHeading("Commands", "Status");
    const fs = require("fs");
    
    await client.commands.clear();
    await client.subCommands.clear();

    let commandsArray = [];

    const Files = await loadFiles("Commands");

    Files.forEach((file) => {
        const command = require(file);

        if(command.subCommand)
        return client.subCommands.set(command.subCommand, command);

        if(commandsArray.find(e => e.name === command.data.name)) return;

        client.commands.set(command.data.name, command);

        commandsArray.push(command.data.toJSON());

        table.addRow(file, "🟩");

    });

    client.application.commands.set(commandsArray);

    console.log(table.toString(), "\nCommandes chargées.");
}

module.exports = { loadCommands };