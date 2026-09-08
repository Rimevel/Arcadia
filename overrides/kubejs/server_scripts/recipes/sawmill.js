//ServerEvents.recipes((event) => {
//    event.remove({ mod: "quark", output: /hollow_/ });
//
//    /**
//     * Remove all matching recipes that only use a single material for their recipe,
//     * and then create a stonecutting recipe for them.
//     * @param {Internal.$RecipeFilter_} recipeFilter
//     * @param {number?} outputAmount
//     */
//    function removeMono(recipeFilter, outputAmount) {
//        event.forEachRecipe(recipeFilter, (recipe) => {
//            event.recipes.minecraft.stonecutting(
//                Item.of(
//                    recipe.originalRecipeResult,
//                    outputAmount ? outputAmount : 1
//                ),
//                recipe.originalRecipeIngredients.first
//            );
//            recipe.remove();
//        });
//    }
//
//    /**
//     * Remove all matching recipes that only use a single material for their recipe,
//     * and then create a stonecutting recipe for them.
//     * @param {Internal.$RecipeFilter_} recipeFilter
//     * @param {number} mainMaterialIndex
//     * @param {number?} outputAmount
//     */
//    function removeMulti(recipeFilter, mainMaterialIndex, outputAmount) {
//        event.forEachRecipe(recipeFilter, (recipe) => {
//            let ingredients = recipe.originalRecipeIngredients;
//            event.recipes.minecraft.stonecutting(
//                Item.of(
//                    recipe.originalRecipeResult,
//                    outputAmount ? outputAmount : 1
//                ),
//                recipe.originalRecipeIngredients.get(
//                    mainMaterialIndex >= ingredients.size()
//                        ? ingredients.size() - 1
//                        : mainMaterialIndex
//                )
//            );
//            recipe.remove();
//        });
//    }
//
//    removeMono({
//        type: "minecraft:crafting_shaped",
//        output: /trimmed_/,
//    });
//
//    removeMono(
//        {
//            type: "minecraft:crafting_shaped",
//            output: /_post/,
//            not: { output: /box/ },
//        },
//        4
//    );
//
//    removeMulti(
//        {
//            output: /_button/,
//            or: [
//                {
//                    type: "minecraft:crafting_shaped",
//                },
//                {
//                    type: "minecraft:crafting_shapeless",
//                },
//            ],
//            not: { output: /waxed/ },
//        },
//        1
//    );
//
//    //event.forEachRecipe({ type: "minecraft:stonecutting" }, (recipe) => {
//    //    event.remove({ output: recipe.originalRecipeResult });
//    //});
//
//    event.forEachRecipe(
//        {
//            type: "create:cutting",
//            or: [
//                {
//                    input: /plank/,
//                    output: /door/,
//                },
//                {
//                    input: /log/,
//                    output: /plank/,
//                },
//                {
//                    input: /plank/,
//                    output: /sign/,
//                },
//                {
//                    input: /plank/,
//                    output: /fence/,
//                },
//                {
//                    input: /plank/,
//                    output: /gate/,
//                },
//                {
//                    input: /plank/,
//                    output: /button/,
//                },
//                {
//                    input: /plank/,
//                    output: /pressure/,
//                },
//            ],
//        },
//        (recipe) => {
//            console.log(recipe.getId());
//            event.recipes.minecraft
//                .stonecutting(
//                    recipe.getOriginalRecipeResult(),
//                    recipe.getOriginalRecipeIngredients().get(0)
//                )
//                .id(
//                    recipe
//                        .getId()
//                        .replace(
//                            "create:cutting/runtime_generated/compat/",
//                            "pack:cutting/"
//                        )
//                );
//            event.remove({
//                type: "minecraft:crafting_shaped",
//                output: recipe.getOriginalRecipeResult(),
//                or: [
//                    {
//                        input: [/plank/, "minecraft:stick"],
//                    },
//                ],
//            });
//        }
//    );
//});
