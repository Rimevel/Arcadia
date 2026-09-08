ServerEvents.tags("item", (event) => {
    //Cherries are the default food
    event.add(
        "environmental:deer_food",
        "farmersdelight:pumpkin_slice",
        "minecraft:apple",
        "nomansland:pear",
        "environmental:plum",
        "minecraft:melon_slice"
    );
});

ServerEvents.tags("worldgen/biome", (event) => {
    event.add("environmental:has_spawn/deer", "#c:is_forest");
});

//Remove all spawns of NML deer
ServerEvents.generateData("after_mods", (event) => {
    event.json("pack:remolders/remove_nml_deer_spawns", {
        selector: {
            type: "names",
            config: [
                "nomansland:neoforge/biome_modifier/spawns/deer/spawn_deer_forest",
                "nomansland:neoforge/biome_modifier/spawns/deer/spawn_deer_taiga",
            ],
        },
        molding: "json",
        remolder: {
            type: "replace",
            target: "spawners",
            value: [],
        },
    });
});
