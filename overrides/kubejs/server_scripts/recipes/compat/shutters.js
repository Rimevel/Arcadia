ServerEvents.recipes((event) => {
    event.forEachRecipe({ output: "#another_furniture:shutters" }, (recipe) => {
        let ingredient = recipe.originalRecipeIngredients.first;
        let result = recipe.originalRecipeResult;

        event.recipes.minecraft.crafting_shaped(result, ["AAB", "AAB"], {
            A: ingredient,
            B: "minecraft:stick",
        });

        event.recipes.create.cutting([Item.of(result, 1)], [ingredient]);

        recipe.remove();
    });
});
