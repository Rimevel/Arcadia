ServerEvents.tags("block", (event) => {
    event.remove(
        "manual_labour:heat_sources",
        "minecraft:furnace",
        "minecraft:blast_furnace",
        "minecraft:smoker"
    );
});
