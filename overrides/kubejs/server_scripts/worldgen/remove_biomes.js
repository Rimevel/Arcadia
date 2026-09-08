ServerEvents.generateData("after_mods", (event) => {
    event.json("pack:remolders/remove_biomes", {
        selector: {
            type: "names",
            config: [
                "environmental:blueprint/modded_biome_slices/pine_barrens",
                "environmental:blueprint/modded_biome_slices/blossom",
                "atmospheric:blueprint/modded_biome_slices/kousa",
                "atmospheric:blueprint/modded_biome_slices/laurel",
                "atmospheric:blueprint/modded_biome_slices/aspen",
            ],
        },
        molding: "json",
        remolder: {
            type: "replace",
            target: "weight",
            value: 0,
        },
    });
});
