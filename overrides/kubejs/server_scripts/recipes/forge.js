ServerEvents.recipes((event) => {
    const PATTERNS = {
        pickaxe: ["AAA", " B ", " B "],
        axe: [" AA", " BA", " B "],
        shovel: [" A ", " B ", " B "],
        hoe: [" AA", " B ", " B "],
        knife: ["A", "B"],
        hammer: ["AAA", "ABA", " B "],
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
            if (results[pattern]) {
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
                event.recipes.create.mechanical_crafting(
                    results[pattern],
                    PATTERNS[pattern],
                    {
                        A: a,
                        B: b,
                    }
                );
                event.remove({
                    output: results[pattern],
                    type: "minecraft:crafting_shaped",
                });
            }
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
    forge(
        "pack:forging/necromium_ingot",
        "caverns_and_chasms:necromium_ingot",
        [
            "minecraft:netherite_scrap",
            "minecraft:netherite_scrap",
            "minecraft:netherite_scrap",
            "minecraft:netherite_scrap",
            "caverns_and_chasms:silver_ingot",
            "caverns_and_chasms:silver_ingot",
            "caverns_and_chasms:silver_ingot",
            "caverns_and_chasms:silver_ingot",
        ],
        20 * 120,
        "#modestmining:forge_fuels_tier_1"
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
            hammer: "manual_labour:copper_hammer",
        },
        20 * 30
    );
    quickTools(
        "minecraft:exposed_copper",
        "minecraft:stick",
        "exposed_copper",
        {
            pickaxe: "caverns_and_chasms:exposed_copper_pickaxe",
            axe: "caverns_and_chasms:exposed_copper_axe",
            shovel: "caverns_and_chasms:exposed_copper_shovel",
            hoe: "caverns_and_chasms:exposed_copper_hoe",
            hammer: "manual_labour:exposed_copper_hammer",
        },
        20 * 30
    );
    quickTools(
        "minecraft:weathered_copper",
        "minecraft:stick",
        "weathered_copper",
        {
            pickaxe: "caverns_and_chasms:weathered_copper_pickaxe",
            axe: "caverns_and_chasms:weathered_copper_axe",
            shovel: "caverns_and_chasms:weathered_copper_shovel",
            hoe: "caverns_and_chasms:weathered_copper_hoe",
            hammer: "manual_labour:weathered_copper_hammer",
        },
        20 * 30
    );
    quickTools(
        "minecraft:oxidized_copper",
        "minecraft:stick",
        "oxidized_copper",
        {
            pickaxe: "caverns_and_chasms:oxidized_copper_pickaxe",
            axe: "caverns_and_chasms:oxidized_copper_axe",
            shovel: "caverns_and_chasms:oxidized_copper_shovel",
            hoe: "caverns_and_chasms:oxidized_copper_hoe",
            hammer: "manual_labour:oxidized_copper_hammer",
        },
        20 * 30
    );
    quickTools(
        "minecraft:waxed_copper_block",
        "minecraft:stick",
        "waxed_copper",
        {
            pickaxe: "caverns_and_chasms:waxed_copper_pickaxe",
            axe: "caverns_and_chasms:waxed_copper_axe",
            shovel: "caverns_and_chasms:waxed_copper_shovel",
            hoe: "caverns_and_chasms:waxed_copper_hoe",
            hammer: "manual_labour:waxed_copper_hammer",
        },
        20 * 30
    );
    quickTools(
        "minecraft:waxed_exposed_copper",
        "minecraft:stick",
        "waxed_exposed_copper",
        {
            pickaxe: "caverns_and_chasms:waxed_exposed_copper_pickaxe",
            axe: "caverns_and_chasms:waxed_exposed_copper_axe",
            shovel: "caverns_and_chasms:waxed_exposed_copper_shovel",
            hoe: "caverns_and_chasms:waxed_exposed_copper_hoe",
            hammer: "manual_labour:waxed_exposed_copper_hammer",
        },
        20 * 30
    );
    quickTools(
        "minecraft:waxed_weathered_copper",
        "minecraft:stick",
        "waxed_weathered_copper",
        {
            pickaxe: "caverns_and_chasms:waxed_weathered_copper_pickaxe",
            axe: "caverns_and_chasms:waxed_weathered_copper_axe",
            shovel: "caverns_and_chasms:waxed_weathered_copper_shovel",
            hoe: "caverns_and_chasms:waxed_weathered_copper_hoe",
            hammer: "manual_labour:waxed_weathered_copper_hammer",
        },
        20 * 30
    );
    quickTools(
        "minecraft:waxed_oxidized_copper",
        "minecraft:stick",
        "waxed_oxidized_copper",
        {
            pickaxe: "caverns_and_chasms:waxed_oxidized_copper_pickaxe",
            axe: "caverns_and_chasms:waxed_oxidized_copper_axe",
            shovel: "caverns_and_chasms:waxed_oxidized_copper_shovel",
            hoe: "caverns_and_chasms:waxed_oxidized_copper_hoe",
            hammer: "manual_labour:waxed_oxidized_copper_hammer",
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
            hammer: "manual_labour:silver_hammer",
        },
        20 * 30
    );
    quickTools(
        "minecraft:iron_ingot",
        "minecraft:stick",
        "iron",
        {
            knife: "farmersdelight:iron_knife",
            hammer: "manual_labour:iron_hammer",
        },
        20 * 30
    );
    quickTools(
        "minecraft:gold_ingot",
        "minecraft:stick",
        "golden",
        {
            knife: "farmersdelight:golden_knife",
            hammer: "manual_labour:golden_hammer",
        },
        20 * 30
    );
    quickTools(
        "minecraft:diamond",
        "minecraft:stick",
        "diamond",
        {
            knife: "farmersdelight:diamond_knife",
            hammer: "manual_labour:diamond_hammer",
        },
        20 * 30
    );

    event.forEachRecipe({ type: "modestmining:forging_shaped" }, (recipe) => {
        //** @type {import("@package/java/util").$HashMap} */
        let json = JSON.parse(JsonIO.toString(recipe.originalJson));

        let pattern = json.pattern;

        let key = {};
        for (let entry in json.key) {
            key[entry] = Ingredient.of(json.key[entry].item);
        }

        let result = Item.of(
            json.result.id,
            json.result.count ? json.result.count : 1
        );

        event.recipes.create.mechanical_crafting(result, pattern, key);
    });
});
