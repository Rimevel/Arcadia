ClientEvents.generateAssets("after_mods", (event) => {
    /**
     * Add a new group to EMI++
     * @param {Special.Mod | 'pack' | 'c'} mod
     * @param {string} name The name of the group
     * @param {'group' | 'tag'} type
     * @param {Special.ItemTag | Special.Item[]} data
     * @param {Special.Item[]} exclude
     */
    function add(mod, name, type, data, exclude) {
        let file = `${mod}:stack_groups/${name}`;
        let obj = {
            type: `remi:${type}`,
        };

        if (type === "group") {
            obj.type = "remi:group";
            obj.contents = data;
        }

        if (type === "tag") {
            obj.type = "remi:tag";
            obj.tag = data;
        }

        if (type === "regex") {
            obj.type = "remi:group";
            obj.contents = Ingredient.of(new RegExp(data)).itemIds.toArray();
        }

        if (exclude) {
            obj.exclusions = exclude;
        }

        event.json(file, obj);
    }

    event.json("minecraft:stack_groups/planks", {
        id: "minecraft:planks",
        type: "remi:group",
        contents: ["#minecraft:planks"],
        exclusions: ["#nomansland:trimmed_planks"],
    });

    //Remove default
    add("minecraft", "doors", "group", []);
    add("minecraft", "trapdoors", "group", []);
    add("minecraft", "logs", "tag", []);

    add("pack", "logs", "group", [
        "minecraft:oak_log",
        "minecraft:spruce_log",
        "nomansland:pine_log",
        "minecraft:birch_log",
        "minecraft:jungle_log",
        "minecraft:acacia_log",
        "nomansland:maple_log",
        "minecraft:dark_oak_log",
        "nomansland:walnut_log",
        "nomansland:willow_log",
        "minecraft:mangrove_log",
        "minecraft:cherry_log",
        "spawn:date_log",
        "atmospheric:rosewood_log",
        "atmospheric:morado_log",
        "atmospheric:yucca_log",
        "atmospheric:laurel_log",
        "caverns_and_chasms:azalea_log",
        "environmental:wisteria_log",
        "quark:blossom_log",
        "spawn:rotten_log",
        "quark:blossom_log",
        "minecraft:crimson_stem",
        "minecraft:warped_stem",
    ]);

    add("pack", "stripped_logs", "group", [
        "minecraft:stripped_oak_log",
        "minecraft:stripped_spruce_log",
        "nomansland:stripped_pine_log",
        "minecraft:stripped_birch_log",
        "minecraft:stripped_jungle_log",
        "minecraft:stripped_acacia_log",
        "nomansland:stripped_maple_log",
        "minecraft:stripped_dark_oak_log",
        "nomansland:stripped_walnut_log",
        "nomansland:stripped_willow_log",
        "minecraft:stripped_mangrove_log",
        "minecraft:stripped_cherry_log",
        "spawn:stripped_date_log",
        "atmospheric:stripped_rosewood_log",
        "atmospheric:stripped_morado_log",
        "atmospheric:stripped_yucca_log",
        "atmospheric:stripped_laurel_log",
        "caverns_and_chasms:stripped_azalea_log",
        "environmental:stripped_wisteria_log",
        "quark:stripped_blossom_log",
        "spawn:stripped_rotten_log",
        "minecraft:stripped_crimson_stem",
        "minecraft:stripped_warped_stem",
    ]);

    add("pack", "wooden_doors", "group", [
        "minecraft:oak_door",
        "minecraft:spruce_door",
        "nomansland:pine_door",
        "minecraft:birch_door",
        "minecraft:jungle_door",
        "minecraft:acacia_door",
        "nomansland:maple_door",
        "minecraft:dark_oak_door",
        "nomansland:walnut_door",
        "nomansland:willow_door",
        "minecraft:mangrove_door",
        "minecraft:cherry_door",
        "spawn:date_door",
        "atmospheric:rosewood_door",
        "atmospheric:morado_door",
        "atmospheric:yucca_door",
        "caverns_and_chasms:azalea_door",
        "environmental:wisteria_door",
        "quark:blossom_door",
        "minecraft:bamboo_door",
        "spawn:rotten_door",
        "minecraft:crimson_door",
        "minecraft:warped_door",
    ]);
    add("pack", "trapdoors", "group", [
        "minecraft:oak_trapdoor",
        "minecraft:spruce_trapdoor",
        "nomansland:pine_trapdoor",
        "minecraft:birch_trapdoor",
        "minecraft:jungle_trapdoor",
        "minecraft:acacia_trapdoor",
        "nomansland:maple_trapdoor",
        "minecraft:dark_oak_trapdoor",
        "nomansland:walnut_trapdoor",
        "nomansland:willow_trapdoor",
        "minecraft:mangrove_trapdoor",
        "minecraft:cherry_trapdoor",
        "spawn:date_trapdoor",
        "atmospheric:rosewood_trapdoor",
        "atmospheric:morado_trapdoor",
        "atmospheric:yucca_trapdoor",
        "caverns_and_chasms:azalea_trapdoor",
        "environmental:wisteria_trapdoor",
        "quark:blossom_trapdoor",
        "minecraft:bamboo_trapdoor",
        "spawn:rotten_trapdoor",
        "minecraft:crimson_trapdoor",
        "minecraft:warped_trapdoor",
        "minecraft:iron_trapdoor",
        "supplementaries:gold_trapdoor",
        "supplementaries:netherite_trapdoor",
        "minecraft:copper_trapdoor",
        "minecraft:exposed_copper_trapdoor",
        "minecraft:weathered_copper_trapdoor",
        "minecraft:oxidized_copper_trapdoor",
        "minecraft:waxed_copper_trapdoor",
        "minecraft:waxed_exposed_copper_trapdoor",
        "minecraft:waxed_weathered_copper_trapdoor",
        "minecraft:waxed_oxidized_copper_trapdoor",
    ]);
    add("pack", "metal_doors", "group", [
        "minecraft:iron_door",
        "supplementaries:gold_door",
        "supplementaries:netherite_door",
        "minecraft:copper_door",
        "minecraft:exposed_copper_door",
        "minecraft:weathered_copper_door",
        "minecraft:oxidized_copper_door",
        "minecraft:waxed_copper_door",
        "minecraft:waxed_exposed_copper_door",
        "minecraft:waxed_weathered_copper_door",
        "minecraft:waxed_oxidized_copper_door",
        "caverns_and_chasms:roller_door",
    ]);
    add("pack", "folding_and_sliding_doors", "group", [
        "create:andesite_door",
        "create:brass_door",
        "create:copper_door",
        "create:train_door",
        "create:framed_glass_door",
    ]);
    add("c", "glass_blocks", "group", ["minecraft:glass"]);
    add("pack", "stained_glass", "group", [
        "minecraft:white_stained_glass",
        "minecraft:light_gray_stained_glass",
        "minecraft:gray_stained_glass",
        "minecraft:black_stained_glass",
        "minecraft:brown_stained_glass",
        "minecraft:red_stained_glass",
        "minecraft:orange_stained_glass",
        "minecraft:yellow_stained_glass",
        "minecraft:lime_stained_glass",
        "minecraft:green_stained_glass",
        "minecraft:cyan_stained_glass",
        "minecraft:light_blue_stained_glass",
        "minecraft:blue_stained_glass",
        "minecraft:purple_stained_glass",
        "minecraft:magenta_stained_glass",
        "minecraft:pink_stained_glass",
    ]);
    add("pack", "stained_framed_glass", "group", [
        "quark:white_framed_glass",
        "quark:light_gray_framed_glass",
        "quark:gray_framed_glass",
        "quark:black_framed_glass",
        "quark:brown_framed_glass",
        "quark:red_framed_glass",
        "quark:orange_framed_glass",
        "quark:yellow_framed_glass",
        "quark:lime_framed_glass",
        "quark:green_framed_glass",
        "quark:cyan_framed_glass",
        "quark:light_blue_framed_glass",
        "quark:blue_framed_glass",
        "quark:purple_framed_glass",
        "quark:magenta_framed_glass",
        "quark:pink_framed_glass",
    ]);
    add("c", "glass_panes", "group", ["minecraft:glass_pane"]);
    add("pack", "stained_glass_panes", "group", [
        "minecraft:white_stained_glass_pane",
        "minecraft:light_gray_stained_glass_pane",
        "minecraft:gray_stained_glass_pane",
        "minecraft:black_stained_glass_pane",
        "minecraft:brown_stained_glass_pane",
        "minecraft:red_stained_glass_pane",
        "minecraft:orange_stained_glass_pane",
        "minecraft:yellow_stained_glass_pane",
        "minecraft:lime_stained_glass_pane",
        "minecraft:green_stained_glass_pane",
        "minecraft:cyan_stained_glass_pane",
        "minecraft:light_blue_stained_glass_pane",
        "minecraft:blue_stained_glass_pane",
        "minecraft:purple_stained_glass_pane",
        "minecraft:magenta_stained_glass_pane",
        "minecraft:pink_stained_glass_pane",
    ]);
    add("pack", "stained_framed_glass_panes", "group", [
        "quark:pink_framed_glass_pane",
        "quark:magenta_framed_glass_pane",
        "quark:purple_framed_glass_pane",
        "quark:blue_framed_glass_pane",
        "quark:light_blue_framed_glass_pane",
        "quark:cyan_framed_glass_pane",
        "quark:green_framed_glass_pane",
        "quark:lime_framed_glass_pane",
        "quark:yellow_framed_glass_pane",
        "quark:orange_framed_glass_pane",
        "quark:red_framed_glass_pane",
        "quark:brown_framed_glass_pane",
        "quark:black_framed_glass_pane",
        "quark:gray_framed_glass_pane",
        "quark:light_gray_framed_glass_pane",
        "quark:white_framed_glass_pane",
    ]);

    add("pack", "glass_door", "group", ["clayworks:glass_door"]);
    add("pack", "glass_trapdoor", "group", ["clayworks:glass_trapdoor"]);
    add("pack", "stained_glass_doors", "group", [
        "clayworks:white_stained_glass_door",
        "clayworks:light_gray_stained_glass_door",
        "clayworks:gray_stained_glass_door",
        "clayworks:black_stained_glass_door",
        "clayworks:brown_stained_glass_door",
        "clayworks:red_stained_glass_door",
        "clayworks:orange_stained_glass_door",
        "clayworks:yellow_stained_glass_door",
        "clayworks:lime_stained_glass_door",
        "clayworks:green_stained_glass_door",
        "clayworks:cyan_stained_glass_door",
        "clayworks:light_blue_stained_glass_door",
        "clayworks:blue_stained_glass_door",
        "clayworks:purple_stained_glass_door",
        "clayworks:magenta_stained_glass_door",
        "clayworks:pink_stained_glass_door",
    ]);
    add("pack", "stained_glass_trapdoor", "group", [
        "clayworks:white_stained_glass_trapdoor",
        "clayworks:light_gray_stained_glass_trapdoor",
        "clayworks:gray_stained_glass_trapdoor",
        "clayworks:black_stained_glass_trapdoor",
        "clayworks:brown_stained_glass_trapdoor",
        "clayworks:red_stained_glass_trapdoor",
        "clayworks:orange_stained_glass_trapdoor",
        "clayworks:yellow_stained_glass_trapdoor",
        "clayworks:lime_stained_glass_trapdoor",
        "clayworks:green_stained_glass_trapdoor",
        "clayworks:cyan_stained_glass_trapdoor",
        "clayworks:light_blue_stained_glass_trapdoor",
        "clayworks:blue_stained_glass_trapdoor",
        "clayworks:purple_stained_glass_trapdoor",
        "clayworks:magenta_stained_glass_trapdoor",
        "clayworks:pink_stained_glass_trapdoor",
    ]);

    add("pack", "framed_glass_door", "group", ["create:framed_glass_door"]);

    add("pack", "framed_glass_trapdoor", "group", [
        "create:framed_glass_trapdoor",
    ]);

    add("pack", "bookshelves", "tag", "c:bookshelves");

    add("pack", "posts", "group", [
        "quark:oak_post",
        "quark:spruce_post",
        "everycomp:q/nomansland/pine_post",
        "quark:birch_post",
        "quark:jungle_post",
        "quark:acacia_post",
        "everycomp:q/nomansland/maple_post",
        "quark:dark_oak_post",
        "everycomp:q/nomansland/walnut_post",
        "everycomp:q/nomansland/willow_post",
        "quark:mangrove_post",
        "quark:cherry_post",
        "everycomp:q/atmospheric/rosewood_post",
        "everycomp:q/atmospheric/morado_post",
        "everycomp:q/atmospheric/yucca_post",
        "everycomp:q/caverns_and_chasms/azalea_post",
        "everycomp:q/environmental/wisteria_post",
        "quark:blossom_post",
        "quark:bamboo_post",
        "everycomp:q/spawn/rotten_post",
        "quark:crimson_post",
        "quark:warped_post",
    ]);
    add("pack", "stripped_posts", "group", [
        "quark:stripped_oak_post",
        "quark:stripped_spruce_post",
        "everycomp:q/nomansland/stripped_pine_post",
        "quark:stripped_birch_post",
        "quark:stripped_jungle_post",
        "quark:stripped_acacia_post",
        "everycomp:q/nomansland/stripped_maple_post",
        "quark:stripped_dark_oak_post",
        "everycomp:q/nomansland/stripped_walnut_post",
        "everycomp:q/nomansland/stripped_willow_post",
        "quark:stripped_mangrove_post",
        "quark:stripped_cherry_post",
        "everycomp:q/atmospheric/stripped_rosewood_post",
        "everycomp:q/atmospheric/stripped_morado_post",
        "everycomp:q/atmospheric/stripped_yucca_post",
        "everycomp:q/caverns_and_chasms/stripped_azalea_post",
        "everycomp:q/environmental/stripped_wisteria_post",
        "quark:stripped_blossom_post",
        "quark:stripped_bamboo_post",
        "everycomp:q/spawn/stripped_rotten_post",
        "quark:stripped_crimson_post",
        "quark:stripped_warped_post",
    ]);
    add("pack", "cabinets", "tag", "farmersdelight:cabinets");
    add("pack", "trimmed_planks", "tag", "nomansland:trimmed_planks");
    add("pack", "terracotta_shingles", "group", [
        "quark:shingles",
        "quark:white_shingles",
        "quark:light_gray_shingles",
        "quark:gray_shingles",
        "quark:black_shingles",
        "quark:brown_shingles",
        "quark:red_shingles",
        "quark:orange_shingles",
        "quark:yellow_shingles",
        "quark:lime_shingles",
        "quark:green_shingles",
        "quark:cyan_shingles",
        "quark:light_blue_shingles",
        "quark:blue_shingles",
        "quark:purple_shingles",
        "quark:magenta_shingles",
        "quark:pink_shingles",
    ]);
    add("pack", "presents", "tag", "supplementaries:presents");
    add("pack", "trapped_presents", "tag", "supplementaries:trapped_presents");
    add("pack", "clam_cases", "group", [
        "spawn:clam_case_white",
        "spawn:clam_case_yellow",
        "spawn:clam_case_red",
        "spawn:clam_case_purple",
    ]);
    add("pack", "candle_holders", "tag", "supplementaries:candle_holders");
    add("pack", "flags", "tag", "supplementaries:flags");
    add("pack", "buntings", "tag", "supplementaries:buntings");
    add("pack", "awnings", "tag", "supplementaries:awnings");
    add("pack", "sparklers", "group", [
        "caverns_and_chasms:sparkler",
        "caverns_and_chasms:white_sparkler",
        "caverns_and_chasms:light_gray_sparkler",
        "caverns_and_chasms:gray_sparkler",
        "caverns_and_chasms:black_sparkler",
        "caverns_and_chasms:brown_sparkler",
        "caverns_and_chasms:red_sparkler",
        "caverns_and_chasms:orange_sparkler",
        "caverns_and_chasms:yellow_sparkler",
        "caverns_and_chasms:lime_sparkler",
        "caverns_and_chasms:green_sparkler",
        "caverns_and_chasms:cyan_sparkler",
        "caverns_and_chasms:light_blue_sparkler",
        "caverns_and_chasms:blue_sparkler",
        "caverns_and_chasms:purple_sparkler",
        "caverns_and_chasms:magenta_sparkler",
        "caverns_and_chasms:pink_sparkler",
    ]);
    add("pack", "corundum", "group", [
        "quark:red_corundum",
        "quark:orange_corundum",
        "quark:yellow_corundum",
        "quark:green_corundum",
        "quark:blue_corundum",
        "quark:indigo_corundum",
        "quark:violet_corundum",
        "quark:white_corundum",
        "quark:black_corundum",
    ]);
    add("pack", "waxed_corundum", "group", [
        "quark:waxed_red_corundum",
        "quark:waxed_orange_corundum",
        "quark:waxed_yellow_corundum",
        "quark:waxed_green_corundum",
        "quark:waxed_blue_corundum",
        "quark:waxed_indigo_corundum",
        "quark:waxed_violet_corundum",
        "quark:waxed_white_corundum",
        "quark:waxed_black_corundum",
    ]);
    add("pack", "corundum_sheets", "group", [
        "quark:red_corundum_pane",
        "quark:orange_corundum_pane",
        "quark:yellow_corundum_pane",
        "quark:green_corundum_pane",
        "quark:blue_corundum_pane",
        "quark:indigo_corundum_pane",
        "quark:violet_corundum_pane",
        "quark:white_corundum_pane",
        "quark:black_corundum_pane",
    ]);
    add("pack", "corundum_clusters", "group", [
        "quark:red_corundum_cluster",
        "quark:orange_corundum_cluster",
        "quark:yellow_corundum_cluster",
        "quark:green_corundum_cluster",
        "quark:blue_corundum_cluster",
        "quark:indigo_corundum_cluster",
        "quark:violet_corundum_cluster",
        "quark:white_corundum_cluster",
        "quark:black_corundum_cluster",
    ]);
    add("pack", "corundum_lamps", "group", [
        "quark:red_crystal_lamp",
        "quark:orange_crystal_lamp",
        "quark:yellow_crystal_lamp",
        "quark:green_crystal_lamp",
        "quark:blue_crystal_lamp",
        "quark:indigo_crystal_lamp",
        "quark:violet_crystal_lamp",
        "quark:white_crystal_lamp",
        "quark:black_crystal_lamp",
    ]);
    add("pack", "bars", "group", [
        "minecraft:iron_bars",
        "caverns_and_chasms:tin_bars",
        "caverns_and_chasms:golden_bars",
        "caverns_and_chasms:silver_bars",
        "caverns_and_chasms:copper_bars",
        "caverns_and_chasms:exposed_copper_bars",
        "caverns_and_chasms:weathered_copper_bars",
        "caverns_and_chasms:oxidized_copper_bars",
        "caverns_and_chasms:waxed_copper_bars",
        "caverns_and_chasms:waxed_exposed_copper_bars",
        "caverns_and_chasms:waxed_weathered_copper_bars",
        "caverns_and_chasms:waxed_oxidized_copper_bars",
        "create:andesite_bars",
        "create:brass_bars",
    ]);
    add("pack", "chains", "group", [
        "minecraft:chain",
        "caverns_and_chasms:tin_chain",
        "caverns_and_chasms:golden_chain",
        "caverns_and_chasms:silver_chain",
        "caverns_and_chasms:copper_chain",
        "caverns_and_chasms:exposed_copper_chain",
        "caverns_and_chasms:weathered_copper_chain",
        "caverns_and_chasms:oxidized_copper_chain",
        "caverns_and_chasms:waxed_copper_chain",
        "caverns_and_chasms:waxed_exposed_copper_chain",
        "caverns_and_chasms:waxed_weathered_copper_chain",
        "caverns_and_chasms:waxed_oxidized_copper_chain",
    ]);
    add("pack", "lanterns", "group", [
        "minecraft:lantern",
        "minecraft:soul_lantern",
        "caverns_and_chasms:cupric_lantern",
        "caverns_and_chasms:copper_lantern",
        "caverns_and_chasms:exposed_copper_lantern",
        "caverns_and_chasms:weathered_copper_lantern",
        "caverns_and_chasms:oxidized_copper_lantern",
        "caverns_and_chasms:waxed_copper_lantern",
        "caverns_and_chasms:waxed_exposed_copper_lantern",
        "caverns_and_chasms:waxed_weathered_copper_lantern",
        "caverns_and_chasms:waxed_oxidized_copper_lantern",
        "upgrade_aquatic:tooth_lantern",
        "quark:paper_lantern",
        "quark:paper_lantern_sakura",
    ]);
    add("pack", "coralstone", "group", [
        "upgrade_aquatic:coralstone",
        "upgrade_aquatic:chiseled_coralstone",
        "upgrade_aquatic:tube_coralstone",
        "upgrade_aquatic:chiseled_tube_coralstone",
        "upgrade_aquatic:brain_coralstone",
        "upgrade_aquatic:chiseled_brain_coralstone",
        "upgrade_aquatic:bubble_coralstone",
        "upgrade_aquatic:chiseled_bubble_coralstone",
        "upgrade_aquatic:fire_coralstone",
        "upgrade_aquatic:chiseled_fire_coralstone",
        "upgrade_aquatic:horn_coralstone",
        "upgrade_aquatic:chiseled_horn_coralstone",
        "upgrade_aquatic:acan_coralstone",
        "upgrade_aquatic:chiseled_acan_coralstone",
        "upgrade_aquatic:finger_coralstone",
        "upgrade_aquatic:chiseled_finger_coralstone",
        "upgrade_aquatic:star_coralstone",
        "upgrade_aquatic:chiseled_star_coralstone",
        "upgrade_aquatic:moss_coralstone",
        "upgrade_aquatic:chiseled_moss_coralstone",
        "upgrade_aquatic:petal_coralstone",
        "upgrade_aquatic:chiseled_petal_coralstone",
        "upgrade_aquatic:branch_coralstone",
        "upgrade_aquatic:chiseled_branch_coralstone",
        "upgrade_aquatic:rock_coralstone",
        "upgrade_aquatic:chiseled_rock_coralstone",
        "upgrade_aquatic:pillow_coralstone",
        "upgrade_aquatic:chiseled_pillow_coralstone",
        "upgrade_aquatic:silk_coralstone",
        "upgrade_aquatic:chiseled_silk_coralstone",
        "upgrade_aquatic:chrome_coralstone",
        "upgrade_aquatic:chiseled_chrome_coralstone",
        "upgrade_aquatic:prismarine_coralstone",
        "upgrade_aquatic:chiseled_prismarine_coralstone",
        "upgrade_aquatic:dead_coralstone",
        "upgrade_aquatic:chiseled_dead_coralstone",
        "upgrade_aquatic:elder_prismarine_coralstone",
        "upgrade_aquatic:chiseled_elder_prismarine_coralstone",
    ]);
    add("minecraft", "pressure_plates", "group", [
        "minecraft:oak_pressure_plate",
        "minecraft:spruce_pressure_plate",
        "nomansland:pine_pressure_plate",
        "minecraft:birch_pressure_plate",
        "minecraft:jungle_pressure_plate",
        "minecraft:acacia_pressure_plate",
        "nomansland:maple_pressure_plate",
        "minecraft:dark_oak_pressure_plate",
        "nomansland:walnut_pressure_plate",
        "nomansland:willow_pressure_plate",
        "minecraft:mangrove_pressure_plate",
        "minecraft:cherry_pressure_plate",
        "spawn:date_pressure_plate",
        "atmospheric:rosewood_pressure_plate",
        "atmospheric:morado_pressure_plate",
        "atmospheric:yucca_pressure_plate",
        "caverns_and_chasms:azalea_pressure_plate",
        "environmental:wisteria_pressure_plate",
        "quark:blossom_pressure_plate",
        "minecraft:bamboo_pressure_plate",
        "spawn:rotten_pressure_plate",
        "minecraft:crimson_pressure_plate",
        "minecraft:warped_pressure_plate",
        "minecraft:stone_pressure_plate",
        "minecraft:polished_blackstone_pressure_plate",
        "caverns_and_chasms:hold_pressure_plate",
        "caverns_and_chasms:lift_pressure_plate",
        "caverns_and_chasms:exposed_lift_pressure_plate",
        "caverns_and_chasms:weathered_lift_pressure_plate",
        "caverns_and_chasms:oxidized_lift_pressure_plate",
        "caverns_and_chasms:waxed_lift_pressure_plate",
        "caverns_and_chasms:waxed_exposed_lift_pressure_plate",
        "caverns_and_chasms:waxed_weathered_lift_pressure_plate",
        "caverns_and_chasms:waxed_oxidized_lift_pressure_plate",
        "quark:obsidian_pressure_plate",
        "minecraft:heavy_weighted_pressure_plate",
        "caverns_and_chasms:medium_weighted_pressure_plate",
        "minecraft:light_weighted_pressure_plate",
    ]);
    add("pack", "corals", "group", [
        "minecraft:tube_coral",
        "minecraft:brain_coral",
        "minecraft:bubble_coral",
        "minecraft:fire_coral",
        "minecraft:horn_coral",
        "upgrade_aquatic:acan_coral",
        "upgrade_aquatic:finger_coral",
        "upgrade_aquatic:star_coral",
        "upgrade_aquatic:moss_coral",
        "upgrade_aquatic:petal_coral",
        "upgrade_aquatic:branch_coral",
        "upgrade_aquatic:rock_coral",
        "upgrade_aquatic:pillow_coral",
        "upgrade_aquatic:silk_coral",
        "upgrade_aquatic:chrome_coral",
        "upgrade_aquatic:prismarine_coral",
        "upgrade_aquatic:elder_prismarine_coral",
        "spawn:wax_coral",
        "spawn:thorn_coral",
        "spawn:spike_coral",
        "spawn:heart_coral",
        "spawn:reed_coral",
        "upgrade_aquatic:prismarine_coral_shower",
        "upgrade_aquatic:elder_prismarine_coral_shower",
    ]);
    add("pack", "coral_blocks", "group", [
        "minecraft:tube_coral_block",
        "minecraft:brain_coral_block",
        "minecraft:bubble_coral_block",
        "minecraft:fire_coral_block",
        "minecraft:horn_coral_block",
        "upgrade_aquatic:acan_coral_block",
        "upgrade_aquatic:finger_coral_block",
        "upgrade_aquatic:star_coral_block",
        "upgrade_aquatic:moss_coral_block",
        "upgrade_aquatic:petal_coral_block",
        "upgrade_aquatic:branch_coral_block",
        "upgrade_aquatic:rock_coral_block",
        "upgrade_aquatic:pillow_coral_block",
        "upgrade_aquatic:silk_coral_block",
        "upgrade_aquatic:chrome_coral_block",
        "upgrade_aquatic:prismarine_coral_block",
        "upgrade_aquatic:elder_prismarine_coral_block",
        "spawn:wax_coral_block",
        "spawn:thorn_coral_block",
        "spawn:spike_coral_block",
        "spawn:heart_coral_block",
        "spawn:reed_coral_block",
    ]);
    add("pack", "coral_fans", "group", [
        "minecraft:tube_coral_fan",
        "minecraft:brain_coral_fan",
        "minecraft:bubble_coral_fan",
        "minecraft:fire_coral_fan",
        "minecraft:horn_coral_fan",
        "upgrade_aquatic:acan_coral_fan",
        "upgrade_aquatic:finger_coral_fan",
        "upgrade_aquatic:star_coral_fan",
        "upgrade_aquatic:moss_coral_fan",
        "upgrade_aquatic:petal_coral_fan",
        "upgrade_aquatic:branch_coral_fan",
        "upgrade_aquatic:rock_coral_fan",
        "upgrade_aquatic:pillow_coral_fan",
        "upgrade_aquatic:silk_coral_fan",
        "upgrade_aquatic:chrome_coral_fan",
        "upgrade_aquatic:prismarine_coral_fan",
        "upgrade_aquatic:elder_prismarine_coral_fan",
        "spawn:wax_coral_fan",
        "spawn:thorn_coral_fan",
        "spawn:spike_coral_fan",
        "spawn:heart_coral_fan",
        "spawn:reed_coral_fan",
    ]);
    add("pack", "dead_corals", "group", [
        "minecraft:dead_tube_coral",
        "minecraft:dead_brain_coral",
        "minecraft:dead_bubble_coral",
        "minecraft:dead_fire_coral",
        "minecraft:dead_horn_coral",
        "upgrade_aquatic:dead_acan_coral",
        "upgrade_aquatic:dead_finger_coral",
        "upgrade_aquatic:dead_star_coral",
        "upgrade_aquatic:dead_moss_coral",
        "upgrade_aquatic:dead_petal_coral",
        "upgrade_aquatic:dead_branch_coral",
        "upgrade_aquatic:dead_rock_coral",
        "upgrade_aquatic:dead_pillow_coral",
        "upgrade_aquatic:dead_silk_coral",
        "upgrade_aquatic:dead_chrome_coral",
        "spawn:dead_wax_coral",
        "spawn:dead_thorn_coral",
        "spawn:dead_spike_coral",
        "spawn:dead_heart_coral",
        "spawn:dead_reed_coral",
    ]);
    add("pack", "dead_coral_fans", "group", [
        "minecraft:dead_tube_coral_fan",
        "minecraft:dead_brain_coral_fan",
        "minecraft:dead_bubble_coral_fan",
        "minecraft:dead_fire_coral_fan",
        "minecraft:dead_horn_coral_fan",
        "spawn:dead_wax_coral_fan",
        "spawn:dead_thorn_coral_fan",
        "spawn:dead_spike_coral_fan",
        "spawn:dead_heart_coral_fan",
        "spawn:dead_reed_coral_fan",
        "upgrade_aquatic:dead_acan_coral_fan",
        "upgrade_aquatic:dead_finger_coral_fan",
        "upgrade_aquatic:dead_star_coral_fan",
        "upgrade_aquatic:dead_moss_coral_fan",
        "upgrade_aquatic:dead_petal_coral_fan",
        "upgrade_aquatic:dead_branch_coral_fan",
        "upgrade_aquatic:dead_rock_coral_fan",
        "upgrade_aquatic:dead_pillow_coral_fan",
        "upgrade_aquatic:dead_silk_coral_fan",
        "upgrade_aquatic:dead_chrome_coral_fan",
    ]);
    add("pack", "dead_coral_blocks", "group", [
        "minecraft:dead_tube_coral_block",
        "minecraft:dead_brain_coral_block",
        "minecraft:dead_bubble_coral_block",
        "minecraft:dead_fire_coral_block",
        "minecraft:dead_horn_coral_block",
        "upgrade_aquatic:dead_acan_coral_block",
        "upgrade_aquatic:dead_finger_coral_block",
        "upgrade_aquatic:dead_star_coral_block",
        "upgrade_aquatic:dead_moss_coral_block",
        "upgrade_aquatic:dead_petal_coral_block",
        "upgrade_aquatic:dead_branch_coral_block",
        "upgrade_aquatic:dead_rock_coral_block",
        "upgrade_aquatic:dead_pillow_coral_block",
        "upgrade_aquatic:dead_silk_coral_block",
        "upgrade_aquatic:dead_chrome_coral_block",
        "spawn:dead_wax_coral_block",
        "spawn:dead_thorn_coral_block",
        "spawn:dead_spike_coral_block",
        "spawn:dead_heart_coral_block",
        "spawn:dead_reed_coral_block",
    ]);
    add("pack", "trimmed_planks", "tag", "nomansland:trimmed_planks");

    let another = [
        "chairs",
        "stools",
        "tall_stools",
        "sofas",
        "benches",
        "tables",
        "drawers",
        "shutters",
        "shelves",
        "curtains",
        "lamps",
        "flower_boxes",
    ];
    another.forEach((tag) => {
        add("pack", tag, "tag", `another_furniture:${tag}`);
    });

    //add("pack", "dirt", "group", [
    //    "minecraft:dirt",
    //    "environmental:dirt_bricks",
    //    "environmental:dirt_tiles",
    //]);
    //
    //add("pack", "mud", "group", [
    //    "environmental:mud_ball",
    //    "minecraft:mud",
    //    "minecraft:muddy_mangrove_roots",
    //    "minecraft:packed_mud",
    //    "minecraft:mud_bricks",
    //    "environmental:chiseled_mud_bricks",
    //    "environmental:smooth_mud",
    //    "quark:mud_pillar",
    //    "quark:carved_mud_bricks",
    //    "quark:mud_brick_lattice",
    //]);
    //
    //add("pack", "stone", "group", [
    //    "minecraft:stone",
    //    "nomansland:polished_stone",
    //    "supplementaries:stone_tile",
    //    "upgrade_aquatic:kelpy_stone_bricks",
    //    "minecraft:stone_bricks",
    //    "minecraft:cracked_stone_bricks",
    //    "nomansland:faded_stone_bricks",
    //    "minecraft:mossy_stone_bricks",
    //    "upgrade_aquatic:kelpy_stone_bricks",
    //    "nomansland:polished_stone",
    //    "supplementaries:stone_tile",
    //    "minecraft:chiseled_stone_bricks",
    //]);
    //
    //add("pack", "cobblestone", "group", [
    //    "minecraft:cobblestone",
    //    "minecraft:mossy_cobblestone",
    //    "caverns_and_chasms:cobblestone_bricks",
    //    "caverns_and_chasms:mossy_cobblestone_bricks",
    //    "caverns_and_chasms:cobblestone_tiles",
    //    "caverns_and_chasms:mossy_cobblestone_tiles",
    //    "upgrade_aquatic:kelpy_cobblestone",
    //    "upgrade_aquatic:kelpy_cobblestone_bricks",
    //    "upgrade_aquatic:kelpy_cobblestone_tiles",
    //]);
    //
    //add("pack", "gravel_bricks", "group", [
    //    "nomansland:cobblestone_bricks",
    //    "nomansland:cracked_cobblestone_bricks",
    //    "nomansland:mossy_cobblestone_bricks",
    //]);
    //
    //add("pack", "granite", "group", [
    //    "minecraft:granite",
    //    "caverns_and_chasms:granite_bricks",
    //    "quark:chiseled_granite_bricks",
    //    "minecraft:polished_granite",
    //    "caverns_and_chasms:chiseled_polished_granite",
    //    "caverns_and_chasms:granite_pillar",
    //    "caverns_and_chasms:granite_tiles",
    //]);
    //
    //add("pack", "diorite", "group", [
    //    "minecraft:diorite",
    //    "caverns_and_chasms:diorite_bricks",
    //    "quark:chiseled_diorite_bricks",
    //    "minecraft:polished_diorite",
    //    "caverns_and_chasms:chiseled_polished_diorite",
    //    "caverns_and_chasms:diorite_pillar",
    //    "caverns_and_chasms:diorite_tiles",
    //]);
    //
    //add("pack", "andesite", "group", [
    //    "minecraft:andesite",
    //    "caverns_and_chasms:andesite_bricks",
    //    "quark:chiseled_andesite_bricks",
    //    "minecraft:polished_andesite",
    //    "caverns_and_chasms:chiseled_polished_andesite",
    //    "caverns_and_chasms:andesite_pillar",
    //    "caverns_and_chasms:andesite_tiles",
    //]);
    //
    //add("pack", "deepslate", "group", [
    //    "minecraft:deepslate",
    //    "minecraft:polished_deepslate",
    //    "minecraft:deepslate_bricks",
    //    "minecraft:cracked_deepslate_bricks",
    //    "minecraft:chiseled_deepslate",
    //    "minecraft:deepslate_tiles",
    //    "minecraft:cracked_deepslate_tiles",
    //    "minecraft:cobbled_deepslate",
    //    "caverns_and_chasms:cobbled_deepslate_bricks",
    //    "caverns_and_chasms:cobbled_deepslate_tiles",
    //]);
    //
    //add("pack", "tuff", "group", [
    //    "minecraft:tuff",
    //    "caverns_and_chasms:smooth_tuff",
    //    "caverns_and_chasms:tuff_bricks",
    //    "caverns_and_chasms:chiseled_tuff_bricks",
    //    "caverns_and_chasms:polished_tuff",
    //    "caverns_and_chasms:tuff_pillar",
    //    "caverns_and_chasms:tuff_tiles",
    //    "caverns_and_chasms:tuff_pillar",
    //    "caverns_and_chasms:tuff_tiles",
    //]);
    //
    //add("pack", "brick", "group", [
    //    "minecraft:bricks",
    //    "clayworks:chiseled_bricks",
    //    "nomansland:coarse_bricks",
    //    "nomansland:mossy_coarse_bricks",
    //    "supplementaries:ash_bricks",
    //    "nomansland:silt_bricks",
    //]);
    //
    //add("pack", "sandstone", "group", [
    //    "minecraft:sandstone",
    //    "minecraft:smooth_sandstone",
    //    "minecraft:cut_sandstone",
    //    "minecraft:chiseled_sandstone",
    //]);
    //
    //add("pack", "red_sandstone", "group", [
    //    "minecraft:red_sandstone",
    //    "minecraft:smooth_red_sandstone",
    //    "minecraft:cut_red_sandstone",
    //    "minecraft:chiseled_red_sandstone",
    //]);
    //
    //add("pack", "arid_sandstone", "group", [
    //    "atmospheric:arid_sandstone",
    //    "atmospheric:smooth_arid_sandstone",
    //    "atmospheric:cut_arid_sandstone",
    //    "atmospheric:chiseled_arid_sandstone",
    //]);
    //
    //add("pack", "red_arid_sandstone", "group", [
    //    "atmospheric:red_arid_sandstone",
    //    "atmospheric:smooth_red_arid_sandstone",
    //    "atmospheric:cut_red_arid_sandstone",
    //    "atmospheric:chiseled_red_arid_sandstone",
    //]);
    //
    //add("pack", "blasted_sandstone", "group", [
    //    "spawn:blasted_sandstone",
    //    "spawn:smooth_blasted_sandstone",
    //    "spawn:cut_blasted_sandstone",
    //    "spawn:chiseled_blasted_sandstone",
    //]);
    //
    //add("pack", "soulsand", "group", [
    //    "quark:soul_sandstone",
    //    "quark:smooth_soul_sandstone",
    //    "quark:cut_soul_sandstone",
    //    "quark:chiseled_soul_sandstone",
    //]);
    //
    //add("pack", "prismarine", "group", [
    //    "minecraft:prismarine",
    //    "minecraft:prismarine_bricks",
    //    "minecraft:dark_prismarine",
    //    "upgrade_aquatic:luminous_prismarine",
    //    "upgrade_aquatic:prismarine_rod_bundle",
    //    "minecraft:sea_lantern",
    //]);
    //
    //add("pack", "nether", "group", [
    //    "minecraft:netherrack",
    //    "minecraft:nether_bricks",
    //    "minecraft:cracked_nether_bricks",
    //    "minecraft:chiseled_nether_bricks",
    //    "minecraft:red_nether_bricks",
    //    "quark:blue_nether_bricks",
    //]);
    //
    //add("pack", "basalt", "group", [
    //    "minecraft:basalt",
    //    "minecraft:smooth_basalt",
    //    "minecraft:polished_basalt",
    //    "caverns_and_chasms:basalt_bricks",
    //    "caverns_and_chasms:chiseled_basalt_bricks",
    //    "caverns_and_chasms:basalt_tiles",
    //]);
    //
    //add("pack", "blackstone", "group", [
    //    "minecraft:blackstone",
    //    "minecraft:gilded_blackstone",
    //    "minecraft:chiseled_polished_blackstone",
    //    "minecraft:polished_blackstone",
    //    "minecraft:polished_blackstone_pressure_plate",
    //    "minecraft:polished_blackstone_button",
    //    "minecraft:polished_blackstone_bricks",
    //    "minecraft:cracked_polished_blackstone_bricks",
    //    "supplementaries:blackstone_tile",
    //    "quark:blackstone_bricks",
    //]);
    //
    //add("pack", "end_stone", "group", [
    //    "minecraft:end_stone",
    //    "minecraft:end_stone_bricks",
    //]);
    //
    //add("pack", "purpur", "group", [
    //    "minecraft:purpur_block",
    //    "minecraft:purpur_pillar",
    //]);
    //
    //add("pack", "quartz", "group", [
    //    "minecraft:quartz_block",
    //    "minecraft:chiseled_quartz_block",
    //    "minecraft:quartz_bricks",
    //    "minecraft:quartz_pillar",
    //    "minecraft:smooth_quartz",
    //    "caverns_and_chasms:quartz_lamp",
    //    "nomansland:quartzite",
    //    "nomansland:budding_quartzite",
    //    "nomansland:small_quartzite_bud",
    //    "nomansland:medium_quartzite_bud",
    //    "nomansland:large_quartzite_bud",
    //    "nomansland:quartzite_cluster",
    //]);
    //
    //add("pack", "turtle", "group", [
    //    "minecraft:turtle_egg",
    //    "incubation:turtle_egg_crate",
    //    "minecraft:turtle_scute",
    //    "upgrade_aquatic:scute_block",
    //    "upgrade_aquatic:scute_shingles",
    //    "upgrade_aquatic:chiseled_scute_shingles",
    //    "upgrade_aquatic:scute_pavement",
    //]);
    //
    //add("pack", "tooth", "group", [
    //    "upgrade_aquatic:thrasher_tooth",
    //    "upgrade_aquatic:tooth_block",
    //    "upgrade_aquatic:tooth_bricks",
    //    "upgrade_aquatic:chiseled_tooth_bricks",
    //    "upgrade_aquatic:tooth_tiles",
    //    "upgrade_aquatic:tooth_door",
    //    "upgrade_aquatic:tooth_trapdoor",
    //    "upgrade_aquatic:tooth_lantern",
    //]);
    //
    //add("pack", "reef_stone", "group", [
    //    "spawn:reefstone",
    //    "spawn:algal_reefstone",
    //    "spawn:reefstone_tiles",
    //]);
    //
    //add("pack", "calcite", "group", [
    //    "minecraft:calcite",
    //    "caverns_and_chasms:polished_calcite",
    //    "caverns_and_chasms:chiseled_calcite",
    //    "caverns_and_chasms:calcite_pillar",
    //    "caverns_and_chasms:calcite_bricks",
    //    "caverns_and_chasms:chiseled_calcite_bricks",
    //]);
    //
    //add("pack", "schist", "group", [
    //    "caverns_and_chasms:schist",
    //    "caverns_and_chasms:smooth_schist",
    //    "minecraft:polished_tuff",
    //    "minecraft:chiseled_tuff",
    //    "minecraft:tuff_bricks",
    //    "minecraft:chiseled_tuff_bricks",
    //    "caverns_and_chasms:schist_pillar",
    //]);
    //
    //add("pack", "siltstone", "group", [
    //    "nomansland:siltstone",
    //    "nomansland:polished_siltstone",
    //    "nomansland:siltstone_bricks",
    //    "nomansland:chiseled_siltstone",
    //]);
    //
    //add("pack", "dripstone", "group", [
    //    "minecraft:dripstone_block",
    //    "caverns_and_chasms:smooth_dripstone",
    //    "caverns_and_chasms:polished_dripstone",
    //    "caverns_and_chasms:dripstone_bricks",
    //    "caverns_and_chasms:cracked_dripstone_bricks",
    //    "caverns_and_chasms:chiseled_dripstone_bricks",
    //    "caverns_and_chasms:dripstone_shingles",
    //    "caverns_and_chasms:flooded_dripstone_shingles",
    //    "caverns_and_chasms:chiseled_dripstone_shingles",
    //    "quark:dripstone_pillar",
    //]);
    //
    //add("pack", "sugilite", "group", [
    //    "caverns_and_chasms:sugilite",
    //    "caverns_and_chasms:polished_sugilite",
    //    "caverns_and_chasms:sugilite_bricks",
    //    "caverns_and_chasms:chiseled_sugilite_bricks",
    //    "caverns_and_chasms:sugilite_pillar",
    //]);
    //
    //add("pack", "cylindrite", "group", [
    //    "caverns_and_chasms:cylindrite",
    //    "caverns_and_chasms:smooth_cylindrite",
    //    "caverns_and_chasms:polished_cylindrite",
    //    "caverns_and_chasms:cylindrite_bricks",
    //    "caverns_and_chasms:chiseled_cylindrite_bricks",
    //    "caverns_and_chasms:cylindrite_pillar",
    //]);
    //
    //add("pack", "cassiterite", "group", [
    //    "caverns_and_chasms:cassiterite",
    //    "caverns_and_chasms:smooth_cassiterite",
    //    "caverns_and_chasms:polished_cassiterite",
    //    "caverns_and_chasms:cassiterite_bricks",
    //    "caverns_and_chasms:chiseled_cassiterite_bricks",
    //    "caverns_and_chasms:cassiterite_pillar",
    //]);
    //
    //add("pack", "rhyolite", "group", [
    //    "caverns_and_chasms:rhyolite",
    //    "caverns_and_chasms:polished_rhyolite",
    //    "caverns_and_chasms:rhyolite_bricks",
    //    "caverns_and_chasms:chiseled_rhyolite_bricks",
    //    "caverns_and_chasms:magmatic_rhyolite",
    //    "caverns_and_chasms:polished_magmatic_rhyolite",
    //    "caverns_and_chasms:magmatic_rhyolite_bricks",
    //    "caverns_and_chasms:chiseled_magmatic_rhyolite_bricks",
    //]);
    //
    //add("pack", "myalite", "group", [
    //    "quark:myalite",
    //    "quark:polished_myalite",
    //    "quark:myalite_pillar",
    //    "quark:chiseled_myalite_bricks",
    //    "quark:myalite_bricks",
    //    "quark:dusky_myalite",
    //]);
    //
    //add("pack", "permafrost", "group", [
    //    "quark:permafrost",
    //    "quark:permafrost_bricks",
    //]);
    //
    //add("pack", "travertine", "group", [
    //    "atmospheric:ivory_travertine",
    //    "atmospheric:chiseled_ivory_travertine",
    //    "atmospheric:cut_ivory_travertine",
    //    "atmospheric:peach_travertine",
    //    "atmospheric:chiseled_peach_travertine",
    //    "atmospheric:cut_peach_travertine",
    //    "atmospheric:persimmon_travertine",
    //    "atmospheric:chiseled_persimmon_travertine",
    //    "atmospheric:cut_persimmon_travertine",
    //    "atmospheric:saffron_travertine",
    //    "atmospheric:chiseled_saffron_travertine",
    //    "atmospheric:cut_saffron_travertine",
    //]);
    //
    //add("pack", "carmine", "group", [
    //    "atmospheric:carmine_block",
    //    "atmospheric:carmine_shingles",
    //    "atmospheric:chiseled_carmine_shingles",
    //    "atmospheric:carmine_pavement",
    //]);
    //
    //add("pack", "dolerite", "group", [
    //    "atmospheric:dolerite",
    //    "atmospheric:polished_dolerite",
    //]);
    //
    //add("pack", "sanguine", "group", [
    //    "caverns_and_chasms:sanguine_block",
    //    "caverns_and_chasms:sanguine_tiles",
    //    "caverns_and_chasms:fortified_sanguine_tiles",
    //]);
    //
    //add("pack", "duskbound", "group", [
    //    "quark:duskbound_lantern",
    //    "quark:duskbound_block",
    //]);
    //
    //add("pack", "iron_blocks", "group", [
    //    "minecraft:iron_block",
    //    "caverns_and_chasms:iron_bricks",
    //    "caverns_and_chasms:chiseled_iron_bricks",
    //]);
    //
    //add("pack", "tin_blocks", "group", [
    //    "caverns_and_chasms:tin_block",
    //    "caverns_and_chasms:tin_bricks",
    //    "caverns_and_chasms:chiseled_tin_bricks",
    //    "caverns_and_chasms:tinplate_block",
    //    "caverns_and_chasms:tin_bulb",
    //]);
    //
    //add("pack", "gold_blocks", "group", [
    //    "minecraft:gold_block",
    //    "caverns_and_chasms:gold_bricks",
    //    "caverns_and_chasms:chiseled_gold_bricks",
    //]);
    //
    //add("pack", "gold_blocks", "group", [
    //    "minecraft:gold_block",
    //    "caverns_and_chasms:gold_bricks",
    //    "caverns_and_chasms:chiseled_gold_bricks",
    //]);
    //
    //add("pack", "silver_blocks", "group", [
    //    "caverns_and_chasms:silver_block",
    //    "caverns_and_chasms:silver_bricks",
    //    "caverns_and_chasms:chiseled_silver_bricks",
    //]);
    //
    //add("pack", "emerald_blocks", "group", [
    //    "minecraft:emerald_block",
    //    "caverns_and_chasms:emerald_lamp",
    //]);
    //
    //add("pack", "lapis_blocks", "group", [
    //    "minecraft:lapis_block",
    //    "caverns_and_chasms:lapis_bricks",
    //    "caverns_and_chasms:lapis_pillar",
    //    "caverns_and_chasms:lapis_lamp",
    //]);
    //
    //add("pack", "spinel_blocks", "group", [
    //    "caverns_and_chasms:spinel_block",
    //    "caverns_and_chasms:spinel_bricks",
    //    "caverns_and_chasms:spinel_pillar",
    //    "caverns_and_chasms:spinel_lamp",
    //]);
    //
    //add("pack", "turquoise_blocks", "group", [
    //    "caverns_and_chasms:turquoise_block",
    //    "caverns_and_chasms:turquoise_tiles",
    //    "caverns_and_chasms:turquoise_pillar",
    //    "caverns_and_chasms:turquoise_lamp",
    //]);
    //
    //add("pack", "zirconia_blocks", "group", [
    //    "caverns_and_chasms:zirconia_block",
    //    "caverns_and_chasms:zirconia_lamp",
    //]);
    //
    //add("pack", "diamond_blocks", "group", [
    //    "minecraft:diamond_block",
    //    "caverns_and_chasms:diamond_lamp",
    //]);
    //
    //add("pack", "diamond", "group", [
    //    "minecraft:diamond_block",
    //    "caverns_and_chasms:diamond_lamp",
    //]);
    //
    //add("pack", "amethyst_blocks", "group", [
    //    "minecraft:amethyst_block",
    //    "caverns_and_chasms:amethyst_block",
    //    "caverns_and_chasms:cut_amethyst",
    //    "caverns_and_chasms:cut_amethyst_bricks",
    //    "caverns_and_chasms:amethyst_lamp",
    //    "minecraft:budding_amethyst",
    //    "minecraft:small_amethyst_bud",
    //    "minecraft:medium_amethyst_bud",
    //    "minecraft:large_amethyst_bud",
    //    "minecraft:amethyst_cluster",
    //]);
    //
    //add("pack", "double_tiles", "group", [
    //    "nomansland:mundane_tiles",
    //    "nomansland:earthen_tiles",
    //    "nomansland:dross_tiles",
    //    "supplementaries:checker_block",
    //]);

    add("pack", "helmets", "group", [
        "minecraft:leather_helmet",
        "caverns_and_chasms:copper_helmet",
        "minecraft:chainmail_helmet",
        "minecraft:iron_helmet",
        "minecraft:golden_helmet",
        "caverns_and_chasms:silver_helmet",
        "minecraft:diamond_helmet",
        "minecraft:netherite_helmet",
        "caverns_and_chasms:necromium_helmet",
        "caverns_and_chasms:sanguine_helmet",
    ]);

    add("pack", "chestplates", "group", [
        "minecraft:leather_chestplate",
        "caverns_and_chasms:copper_chestplate",
        "minecraft:chainmail_chestplate",
        "minecraft:iron_chestplate",
        "minecraft:golden_chestplate",
        "caverns_and_chasms:silver_chestplate",
        "minecraft:diamond_chestplate",
        "minecraft:netherite_chestplate",
        "caverns_and_chasms:necromium_chestplate",
        "caverns_and_chasms:sanguine_chestplate",
    ]);

    add("pack", "leggings", "group", [
        "minecraft:leather_leggings",
        "caverns_and_chasms:copper_leggings",
        "minecraft:chainmail_leggings",
        "minecraft:iron_leggings",
        "minecraft:golden_leggings",
        "caverns_and_chasms:silver_leggings",
        "minecraft:diamond_leggings",
        "minecraft:netherite_leggings",
        "caverns_and_chasms:necromium_leggings",
        "caverns_and_chasms:sanguine_leggings",
    ]);

    add("pack", "boots", "group", [
        "minecraft:leather_boots",
        "caverns_and_chasms:copper_boots",
        "minecraft:chainmail_boots",
        "minecraft:iron_boots",
        "minecraft:golden_boots",
        "caverns_and_chasms:silver_boots",
        "minecraft:diamond_boots",
        "minecraft:netherite_boots",
        "caverns_and_chasms:necromium_boots",
        "caverns_and_chasms:sanguine_boots",
    ]);

    add("remi", "buttons", "group", [
        "caverns_and_chasms:lift_button",
        "caverns_and_chasms:exposed_lift_button",
        "caverns_and_chasms:oxidized_lift_button",
        "caverns_and_chasms:weathered_lift_button",
        "caverns_and_chasms:waxed_lift_button",
        "caverns_and_chasms:waxed_exposed_lift_button",
        "caverns_and_chasms:waxed_oxidized_lift_button",
        "caverns_and_chasms:waxed_weathered_lift_button",
    ]);

    add("pack", "boats", "group", [
        "minecraft:oak_boat",
        "minecraft:spruce_boat",
        "nomansland:pine_boat",
        "minecraft:birch_boat",
        "minecraft:jungle_boat",
        "minecraft:acacia_boat",
        "nomansland:maple_boat",
        "minecraft:dark_oak_boat",
        "nomansland:walnut_boat",
        "nomansland:willow_boat",
        "minecraft:mangrove_boat",
        "minecraft:cherry_boat",
        "spawn:date_raft",
        "atmospheric:rosewood_boat",
        "atmospheric:morado_boat",
        "atmospheric:yucca_boat",
        "caverns_and_chasms:azalea_boat",
        "environmental:wisteria_boat",
        "spawn:rotten_boat",
        "quark:blossom_boat",
        "minecraft:bamboo_raft",
        "minecraft:bamboo_raft",
        "spawn:date_raft",
    ]);

    add("pack", "chest_boats", "group", [
        "minecraft:oak_chest_boat",
        "minecraft:spruce_chest_boat",
        "nomansland:pine_chest_boat",
        "minecraft:birch_chest_boat",
        "minecraft:jungle_chest_boat",
        "minecraft:acacia_chest_boat",
        "nomansland:maple_chest_boat",
        "minecraft:dark_oak_chest_boat",
        "nomansland:walnut_chest_boat",
        "nomansland:willow_chest_boat",
        "minecraft:mangrove_chest_boat",
        "minecraft:cherry_chest_boat",
        "spawn:date_chest_raft",
        "atmospheric:rosewood_chest_boat",
        "atmospheric:morado_chest_boat",
        "atmospheric:yucca_chest_boat",
        "caverns_and_chasms:azalea_chest_boat",
        "environmental:wisteria_chest_boat",
        "spawn:rotten_chest_boat",
        "quark:blossom_chest_boat",
        "spawn:date_chest_raft",
    ]);

    add("pack", "cannon_boats", "group", [
        "supplementaries:cannon_boat_oak",
        "supplementaries:cannon_boat_spruce",
        "supplementaries:nomansland/cannon_boat_pine",
        "supplementaries:cannon_boat_birch",
        "supplementaries:cannon_boat_jungle",
        "supplementaries:cannon_boat_acacia",
        "supplementaries:nomansland/cannon_boat_maple",
        "supplementaries:cannon_boat_dark_oak",
        "supplementaries:nomansland/cannon_boat_walnut",
        "supplementaries:nomansland/cannon_boat_willow",
        "supplementaries:cannon_boat_mangrove",
        "supplementaries:cannon_boat_cherry",
        "supplementaries:spawn/cannon_boat_rotten",
        "supplementaries:atmospheric/cannon_boat_rosewood",
        "supplementaries:atmospheric/cannon_boat_morado",
        "supplementaries:atmospheric/cannon_boat_yucca",
        "supplementaries:caverns_and_chasms/cannon_boat_azalea",
        "supplementaries:environmental/cannon_boat_wisteria",
        "supplementaries:spawn/cannon_boat_rotten",
        "supplementaries:quark/cannon_boat_blossom",
        "supplementaries:cannon_raft_bamboo",
        "supplementaries:spawn/cannon_boat_date",
    ]);

    add("remi", "rails", [
        "caverns_and_chasms:copper_rail",
        "caverns_and_chasms:exposed_copper_rail",
        "caverns_and_chasms:weathered_copper_rail",
        "caverns_and_chasms:oxidized_copper_rail",
        "caverns_and_chasms:waxed_copper_rail",
        "caverns_and_chasms:waxed_exposed_copper_rail",
        "caverns_and_chasms:waxed_weathered_copper_rail",
        "caverns_and_chasms:waxed_oxidized_copper_rail",
    ]);

    //add("pack", "arrows", "group", [
    //    "minecraft:arrow",
    //    "minecraft:spectral_arrow",
    //    "supplementaries:rope_arrow",
    //    "nomansland:incendiary_arrow",
    //    "caverns_and_chasms:blunt_arrow",
    //    "caverns_and_chasms:ricochet_arrow",
    //    "caverns_and_chasms:large_arrow",
    //    "quark:torch_arrow",
    //]);

    add("pack", "tether_potions", "group", [
        "caverns_and_chasms:tether_potion",
    ]);

    add("pack", "impact_potions", "group", [
        "caverns_and_chasms:impact_potion",
    ]);

    add("pack", "trail_potions", "group", ["caverns_and_chasms:trail_potion"]);

    add("pack", "tipped_bamboo_spikes", "group", [
        "supplementaries:bamboo_spikes_tipped",
    ]);

    add("pack", "frozen_desserts", "group", [
        "neapolitan:vanilla_ice_cream",
        "neapolitan:chocolate_ice_cream",
        "neapolitan:strawberry_ice_cream",
        "neapolitan:banana_ice_cream",
        "neapolitan:mint_ice_cream",
        "neapolitan:adzuki_ice_cream",
        "neapolitan:neapolitan_ice_cream",
        "neapolitan:vanilla_pudding",
        "atmospheric:passion_fruit_sorbet",
        "atmospheric:orange_sorbet",
    ]);

    add("pack", "milkshakes", "group", [
        "neapolitan:vanilla_milkshake",
        "neapolitan:chocolate_milkshake",
        "neapolitan:strawberry_milkshake",
        "neapolitan:banana_milkshake",
        "neapolitan:mint_milkshake",
        "neapolitan:adzuki_milkshake",
    ]);

    add("pack", "cakes", "group", [
        "minecraft:cake",
        "nomansland:fruit_cake",
        "neapolitan:vanilla_cake",
        "neapolitan:chocolate_cake",
        "neapolitan:strawberry_cake",
        "neapolitan:banana_cake",
        "neapolitan:mint_cake",
        "neapolitan:adzuki_cake",
    ]);

    add("pack", "sweets", "group", [
        "neapolitan:banana_bread",
        "neapolitan:adzuki_bun",
        "neapolitan:vanilla_fudge",
        "minecraft:cookie",
        "spawn:date_cookie",
        "farmersdelight:honey_cookie",
        "farmersdelight:sweet_berry_cookie",
        "nomansland:sweet_tart",
        "nomansland:maple_tart",
        "atmospheric:passion_fruit_tart",
        "neapolitan:strawberry_scones",
        "supplementaries:candy",
        "neapolitan:mint_chocolate",
        "neapolitan:chocolate_bar",
        "neapolitan:chocolate_spider_eye",
        "neapolitan:mint_candies",
        "neapolitan:strawberry_bean_bonbons",
        "neapolitan:vanilla_chocolate_fingers",
    ]);

    add("pack", "bandages", "group", [
        "nomansland:bandage",
        "nomansland:medicinal_bandage",
        "nomansland:antidote_bandage",
        "nomansland:warding_bandage",
    ]);

    add("pack", "copper_goat_horns", "group", [
        "caverns_and_chasms:copper_horn",
    ]);

    add("pack", "pathfinders_quills", "group", ["quark:pathfinders_quill"]);

    add("pack", "hammers", "tag", "#manual_labour:hammers");

    add("pack", "way_signs", "group", [
        "supplementaries:way_sign_oak",
        "supplementaries:way_sign_spruce",
        "supplementaries:nomansland/way_sign_pine",
        "supplementaries:way_sign_birch",
        "supplementaries:way_sign_jungle",
        "supplementaries:way_sign_acacia",
        "supplementaries:nomansland/way_sign_maple",
        "supplementaries:way_sign_dark_oak",
        "supplementaries:nomansland/way_sign_walnut",
        "supplementaries:nomansland/way_sign_willow",
        "supplementaries:way_sign_mangrove",
        "supplementaries:way_sign_cherry",
        "supplementaries:spawn/way_sign_date",
        "supplementaries:atmospheric/way_sign_rosewood",
        "supplementaries:atmospheric/way_sign_morado",
        "supplementaries:atmospheric/way_sign_yucca",
        "supplementaries:caverns_and_chasms/way_sign_azalea",
        "supplementaries:environmental/way_sign_wisteria",
        "supplementaries:way_sign_bamboo",
        "supplementaries:spawn/way_sign_rotten",
        "supplementaries:way_sign_crimson",
        "supplementaries:way_sign_warped",
    ]);

    add("pack", "floodlights", "group", [
        "caverns_and_chasms:floodlight",
        "caverns_and_chasms:exposed_floodlight",
        "caverns_and_chasms:weathered_floodlight",
        "caverns_and_chasms:oxidized_floodlight",
        "caverns_and_chasms:waxed_floodlight",
        "caverns_and_chasms:waxed_exposed_floodlight",
        "caverns_and_chasms:waxed_weathered_floodlight",
        "caverns_and_chasms:waxed_oxidized_floodlight",
    ]);

    add("pack", "copper_lanterns", "group", [
        "caverns_and_chasms:copper_lantern",
        "caverns_and_chasms:exposed_copper_lantern",
        "caverns_and_chasms:weathered_copper_lantern",
        "caverns_and_chasms:oxidized_copper_lantern",
        "caverns_and_chasms:waxed_copper_lantern",
        "caverns_and_chasms:waxed_exposed_copper_lantern",
        "caverns_and_chasms:waxed_weathered_copper_lantern",
        "caverns_and_chasms:waxed_oxidized_copper_lantern",
    ]);

    add("pack", "table_cloths", "group", [
        "create:white_table_cloth",
        "create:light_gray_table_cloth",
        "create:gray_table_cloth",
        "create:black_table_cloth",
        "create:brown_table_cloth",
        "create:red_table_cloth",
        "create:orange_table_cloth",
        "create:yellow_table_cloth",
        "create:lime_table_cloth",
        "create:green_table_cloth",
        "create:cyan_table_cloth",
        "create:light_blue_table_cloth",
        "create:blue_table_cloth",
        "create:purple_table_cloth",
        "create:magenta_table_cloth",
        "create:pink_table_cloth",
    ]);
});
