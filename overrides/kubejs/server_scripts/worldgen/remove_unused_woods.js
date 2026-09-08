ServerEvents.tags("worldgen/biome", (event) => {
    event.removeAll("upgrade_aquatic:has_feature/river_tree");
    event.removeAll("upgrade_aquatic:has_feature/driftwood");
    event.removeAll("upgrade_aquatic:has_feature/driftwood_river");
    event.removeAll("upgrade_aquatic:has_feature/driftwood_swamp");
    event.removeAll("upgrade_aquatic:has_feature/driftwood_extra");
    event.removeAll("upgrade_aquatic:has_feature/driftwood_beach");
});
