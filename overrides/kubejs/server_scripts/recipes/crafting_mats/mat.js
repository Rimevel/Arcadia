ServerEvents.recipes((event) => {
    event.recipes.minecraft.crafting_shapeless("crafting_mats:crafting_mat", [
        "minecraft:crafting_table",
        "minecraft:leather",
    ]);
});
