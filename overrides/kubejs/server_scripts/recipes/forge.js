ServerEvents.recipes((event) => {
    const PATTERNS = {
        pickaxe: ["AAA", " B ", " B "],
        axe: [" AA", " BA", " B "],
        shovel: [" A ", " B ", " B "],
        hoe: [" AA", " B ", " B "],
    };
    /**
     *
     * @param {string} id
     * @param {Internal.$ItemStack_} result
     * @param {Internal.$Ingredient_[]} ingredients
     * @param {number} cookTime
     * @param {Internal.$Ingredient_} fuel
     */
    function forge(id, result, ingredients, cookTime, fuel) {
        let _result = Item.of(result).toJson();
        let _ingredients = ingredients.map((ingredient) => {
            return Ingredient.of(ingredient).toJson();
        });
        let _fuel = fuel ? Ingredient.of(fuel).toJson() : undefined;

        event
            .custom({
                type: "modestmining:forging",
                cooktime: cookTime ? cookTime : undefined,
                ingredients: _ingredients,
                result: _result,
                fuel: _fuel ? _fuel : undefined,
            })
            .id(id);
    }

    /**
     *
     * @param {string} id
     * @param {Internal.$ItemStack_} result
     * @param {string[]} pattern
     * @param { Internal.$Map_<string, Internal.$Ingredient_> } key
     * @param {number} cookTime
     * @param {Internal.$Ingredient_} fuel
     */
    function forge_shaped(id, result, pattern, key, cookTime, fuel) {
        let _result = Item.of(result).toJson();

        let _pattern = pattern ?? [];

        let _key = {};
        for (let name in key) {
            _key[name] = Ingredient.of(key[name]).toJson();
        }

        let _fuel = fuel ? Ingredient.of(fuel).toJson() : undefined;

        console.log({
            type: "modestmining:forging_shaped",
            cooktime: cookTime ? cookTime : undefined,
            key: _key,
            pattern: _pattern,
            fuel: _fuel ? _fuel : undefined,
            result: _result,
        });

        event
            .custom({
                type: "modestmining:forging_shaped",
                cooktime: cookTime ? cookTime : undefined,
                key: _key,
                pattern: _pattern,
                fuel: _fuel ? _fuel : undefined,
                result: _result,
            })
            .id(id);
    }

    /**
     *
     * @param {Internal.$Ingredient_} a
     * @param {Internal.$Ingredient_} b
     * @param {string} prefix
     * @param {{ [x: "pickaxe" | "axe" | "shovel" | "hoe" ]: Internal.$ItemStack_}} results
     * @param {number} time
     */
    function quickTools(a, b, prefix, results, time) {
        for (let pattern in PATTERNS) {
            forge_shaped(
                `pack:forging/${prefix}_${pattern}`,
                results[pattern],
                PATTERNS[pattern],
                {
                    A: a,
                    B: b,
                },
                time
            );
        }
    }

    event.remove({
        type: "minecraft:crafting_shapeless",
        output: "minecraft:netherite_ingot",
    });
    forge(
        "pack:forging/netherite_ingot",
        "minecraft:netherite_ingot",
        [
            "minecraft:netherite_scrap",
            "minecraft:netherite_scrap",
            "minecraft:netherite_scrap",
            "minecraft:netherite_scrap",
            "minecraft:gold_ingot",
            "minecraft:gold_ingot",
            "minecraft:gold_ingot",
            "minecraft:gold_ingot",
        ],
        20 * 120,
        "#modestmining:forge_fuels_tier_1"
    );
    forge(
        "pack:forging/andesite_alloy",
        "create:andesite_alloy",
        [
            "create:zinc_nugget",
            "create:zinc_nugget",
            "minecraft:andesite",
            "minecraft:andesite",
        ],
        20 * 30
    );

    quickTools(
        "minecraft:copper_block",
        "minecraft:stick",
        "copper",
        {
            pickaxe: "caverns_and_chasms:copper_pickaxe",
            axe: "caverns_and_chasms:copper_axe",
            shovel: "caverns_and_chasms:copper_shovel",
            hoe: "caverns_and_chasms:copper_hoe",
        },
        20 * 30
    );
    quickTools(
        "caverns_and_chasms:silver_ingot",
        "minecraft:stick",
        "silver",
        {
            pickaxe: "caverns_and_chasms:silver_pickaxe",
            axe: "caverns_and_chasms:silver_axe",
            shovel: "caverns_and_chasms:silver_shovel",
            hoe: "caverns_and_chasms:silver_hoe",
        },
        20 * 30
    );
});
