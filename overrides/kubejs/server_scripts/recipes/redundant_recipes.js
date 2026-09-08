ServerEvents.recipes((event) => {
    event.remove({ id: "minecraft:painting" });
    event.replaceInput(
        { id: "minecraft:blast_furnace" },
        "minecraft:furnace",
        "#c:player_workstations/furnaces"
    );
    event.replaceInput(
        { id: "minecraft:furnace" },
        "#quark:stone_tool_materials",
        "minecraft:cobblestone"
    );
    event.replaceInput(
        { id: "nomansland:smoker" },
        "minecraft:furnace",
        "#c:player_workstations/furnaces"
    );
});

ServerEvents.tags("item", (event) => {
    event.add(
        "c:player_workstations/furnaces",
        "quark:deepslate_furnace",
        "quark:blackstone_furnace"
    );
});
