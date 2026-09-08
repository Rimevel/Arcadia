ServerEvents.generateData("after_mods", (event) => {
    event.json("pack:remolders/swamp_trees.json", {
        selector: {
            type: "names",
            config: [
                "environmental:neoforge/biome_modifier/add_feature/swamp_vegetation",
            ],
        },
        molding: "json",
        remolder: {
            type: "replace",
            target: "features",
            value: ["environmental:patch_duckweed_swamp"], //Removed the entry for swamp trees
        },
    });
});
