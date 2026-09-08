ServerEvents.tags("worldgen/biome", (event) => {
    event.removeAll("environmental:has_feature/cattails");
});

ServerEvents.generateData("after_mods", (event) => {
    event.json("pack:neoforge/biome_modifier/remove_cattails", {
        type: "neoforge:remove_features",
        // Can either be a biome id, such as "minecraft:plains",
        // or a list of biome ids, such as ["minecraft:plains", "minecraft:badlands", ...],
        // or a biome tag, such as "#c:is_overworld".
        biomes: "#c:is_swamp",
        // Can either be a placed feature id, such as "examplemod:add_features_example",
        // or a list of placed feature ids, such as ["examplemod:add_features_example", "minecraft:ice_spike", ...],
        // or a placed feature tag, such as "#examplemod:placed_feature_tag".
        features: "environmental:cattails_dense",
    });
});
