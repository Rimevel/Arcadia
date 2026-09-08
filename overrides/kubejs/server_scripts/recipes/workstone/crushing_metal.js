(function () {
    /**
     *
     * @param {Array<Internal.$ItemStack_ | { id: Internal.$ItemStack_, chance: number }>} result
     * @param {Internal.$Ingredient_} ingredient
     */
    function workstone(result, ingredient) {
        let _result = result.map((result) => {
            if (result.chance) {
                return result;
            }

            return Item.of(result).toJson();
        });

        let _ingredient = Ingredient.of(ingredient);

        return {
            type: "manual_labour:workstone",
            ingredients: [
                _ingredient.toJson(),
                {
                    tag: "manual_labour:hammers",
                },
            ],
            results: _result,
        };
    }

    /**
     *
     * @param {Array<Internal.$ItemStack_ | { id: Internal.$ItemStack_, chance: number }>} result
     * @param {Internal.$Ingredient_} ingredient
     * @param {number} processingTime
     */
    function mortar_grinding(result, ingredient, processingTime) {
        let _result = result.map((result) => {
            if (result.chance) {
                return {
                    result: {
                        id: result.id,
                    },
                    chance: result.chance,
                };
            }

            return {
                result: Item.of(result).toJson(),
            };
        });

        let _ingredient = Ingredient.of(ingredient);

        let x = {
            type: "manual_labour:mortar_grinding",
            ingredient: _ingredient.toJson(),
            processing_time: processingTime ?? undefined,
            results: _result,
        };
        console.log(x);
        return x;
    }

    ServerEvents.recipes((event) => {
        event.custom(
            workstone(["create:crushed_raw_copper"], "minecraft:raw_copper")
        );
        event.custom(
            workstone(["create:crushed_raw_iron"], "minecraft:raw_iron")
        );
        event.custom(
            workstone(["create:crushed_raw_gold"], "minecraft:raw_gold")
        );
        event.custom(workstone(["create:crushed_raw_zinc"], "create:raw_zinc"));

        //event.custom(
        //    mortar_grinding(
        //        [
        //            Item.of("modestmining:copper_dust"),
        //            { id: "modestmining:copper_dust", chance: 0.5 },
        //        ],
        //        "create:crushed_raw_copper",
        //        200
        //    )
        //);
        //
        //event.custom(
        //    mortar_grinding(
        //        [
        //            Item.of("modestmining:iron_dust"),
        //            { id: "modestmining:iron_dust", chance: 0.5 },
        //        ],
        //        "create:crushed_raw_iron",
        //        200
        //    )
        //);
        //
        //event.custom(
        //    mortar_grinding(
        //        [
        //            Item.of("modestmining:gold_dust"),
        //            { id: "modestmining:gold_dust", chance: 0.5 },
        //        ],
        //        "create:crushed_raw_gold",
        //        200
        //    )
        //);
        //
        //event.custom(
        //    mortar_grinding(
        //        [
        //            Item.of("modestmining:zinc_dust"),
        //            { id: "modestmining:iron_dust", chance: 0.5 },
        //        ],
        //        "create:crushed_raw_iron",
        //        200
        //    )
        //);
        //
        //event.custom(
        //    mortar_grinding(
        //        [
        //            Item.of("modestmining:iron_dust"),
        //            { id: "modestmining:iron_dust", chance: 0.5 },
        //        ],
        //        "create:crushed_raw_iron",
        //        200
        //    )
        //);
        //
        //event.custom(
        //    mortar_grinding(
        //        [
        //            Item.of("modestmining:iron_dust"),
        //            { id: "modestmining:iron_dust", chance: 0.5 },
        //        ],
        //        "create:crushed_raw_iron",
        //        200
        //    )
        //);
    });
})();
