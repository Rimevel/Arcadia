ServerEvents.recipes((event) => {
    event.forEachRecipe({ type: "modestmining:forging_shaped" }, (recipe) => {
        //** @type {import("@package/java/util").$HashMap} */
        let json = JSON.parse(JsonIO.toString(recipe.originalJson));

        console.log("original:", json);

        let newRecipe = {
            type: "create:mechanical_crafting",
            accept_mirrored: true,
            key: json.key,
            pattern: json.pattern,
            result: json.result,
        };

        console.log(newRecipe);

        event
            .custom(newRecipe)
            .id(
                recipe
                    .getId()
                    .replace("modest_mining:", "pack:mechanical_forging/")
            );
    });
});
