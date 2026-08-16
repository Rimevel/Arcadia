ServerEvents.generateData("after_mods", (event) => {
    event.json("pack:remolders/fallen_leaves_placed.json", {
        selector: {
            type: "names",
            config: ["spawn:worldgen/placed_feature/fallen_leaves"],
        },
        molding: "json",
        remolder: {
            type: "replace",
            target: "placement[2].heightmap",
            value: "MOTION_BLOCKING_NO_LEAVES", //Add a check to make sure the leaves don't spawn on top of trees
        },
    });

    event.json("pack:remolders/fallen_leaves_configured.json", {
        selector: {
            type: "names",
            config: ["spawn:worldgen/configured_feature/fallen_leaves"],
        },
        molding: "json",
        remolder: {
            type: "replace",
            target: "config.feature.placement",
            value: [
                {
                    type: "minecraft:block_predicate_filter",
                    predicate: {
                        type: "minecraft:all_of",
                        predicates: [
                            {
                                type: "minecraft:matching_blocks",
                                blocks: "minecraft:air",
                            },
                            {
                                type: "minecraft:not",
                                predicate: {
                                    type: "minecraft:matching_block_tag",
                                    offset: [0, -1, 0],
                                    tag: "minecraft:leaves",
                                },
                            },
                        ],
                    },
                },
            ], //Add a check to make sure the leaves don't spawn on top of trees
        },
    });

    event.json("pack:worldgen/configured_feature/fallen_leaves_low", {
        type: "minecraft:flower",
        config: {
            feature: {
                feature: {
                    type: "minecraft:simple_block",
                    config: {
                        to_place: {
                            type: "minecraft:weighted_state_provider",
                            entries: [
                                {
                                    data: {
                                        Name: "spawn:fallen_leaves",
                                        Properties: {
                                            leaves: "1",
                                        },
                                    },
                                    weight: 1,
                                },
                                {
                                    data: {
                                        Name: "spawn:fallen_leaves",
                                        Properties: {
                                            leaves: "1",
                                        },
                                    },
                                    weight: 1,
                                },
                                {
                                    data: {
                                        Name: "spawn:fallen_leaves",
                                        Properties: {
                                            leaves: "1",
                                        },
                                    },
                                    weight: 1,
                                },
                                {
                                    data: {
                                        Name: "spawn:fallen_leaves",
                                        Properties: {
                                            leaves: "1",
                                        },
                                    },
                                    weight: 1,
                                },
                                {
                                    data: {
                                        Name: "spawn:fallen_leaves",
                                        Properties: {
                                            leaves: "2",
                                        },
                                    },
                                    weight: 1,
                                },
                                {
                                    data: {
                                        Name: "spawn:fallen_leaves",
                                        Properties: {
                                            leaves: "2",
                                        },
                                    },
                                    weight: 1,
                                },
                                {
                                    data: {
                                        Name: "spawn:fallen_leaves",
                                        Properties: {
                                            leaves: "2",
                                        },
                                    },
                                    weight: 1,
                                },
                                {
                                    data: {
                                        Name: "spawn:fallen_leaves",
                                        Properties: {
                                            leaves: "2",
                                        },
                                    },
                                    weight: 1,
                                },
                                {
                                    data: {
                                        Name: "spawn:fallen_leaves",
                                        Properties: {
                                            leaves: "3",
                                        },
                                    },
                                    weight: 1,
                                },
                                {
                                    data: {
                                        Name: "spawn:fallen_leaves",
                                        Properties: {
                                            leaves: "3",
                                        },
                                    },
                                    weight: 1,
                                },
                                {
                                    data: {
                                        Name: "spawn:fallen_leaves",
                                        Properties: {
                                            leaves: "3",
                                        },
                                    },
                                    weight: 1,
                                },
                                {
                                    data: {
                                        Name: "spawn:fallen_leaves",
                                        Properties: {
                                            leaves: "3",
                                        },
                                    },
                                    weight: 1,
                                },
                                {
                                    data: {
                                        Name: "spawn:fallen_leaves",
                                        Properties: {
                                            leaves: "4",
                                        },
                                    },
                                    weight: 1,
                                },
                                {
                                    data: {
                                        Name: "spawn:fallen_leaves",
                                        Properties: {
                                            leaves: "4",
                                        },
                                    },
                                    weight: 1,
                                },
                                {
                                    data: {
                                        Name: "spawn:fallen_leaves",
                                        Properties: {
                                            leaves: "4",
                                        },
                                    },
                                    weight: 1,
                                },
                                {
                                    data: {
                                        Name: "spawn:fallen_leaves",
                                        Properties: {
                                            leaves: "4",
                                        },
                                    },
                                    weight: 1,
                                },
                            ],
                        },
                    },
                },
                placement: [
                    {
                        type: "minecraft:block_predicate_filter",
                        predicate: {
                            type: "minecraft:all_of",
                            predicates: [
                                {
                                    type: "minecraft:matching_blocks",
                                    blocks: "minecraft:air",
                                },
                                {
                                    type: "minecraft:not",
                                    predicate: {
                                        type: "minecraft:matching_block_tag",
                                        offset: [0, -1, 0],
                                        tag: "minecraft:leaves",
                                    },
                                },
                            ],
                        },
                    },
                ],
            },
            tries: 6,
            xz_spread: 8,
            y_spread: 2,
        },
    });

    event.json("pack:worldgen/placed_feature/fallen_leaves_low", {
        feature: "pack:fallen_leaves_low",
        placement: [
            {
                type: "minecraft:noise_threshold_count",
                above_noise: 6,
                below_noise: 3,
                noise_level: -0.8,
            },
            {
                type: "minecraft:in_square",
            },
            {
                type: "minecraft:heightmap",
                heightmap: "MOTION_BLOCKING_NO_LEAVES",
            },
            {
                type: "minecraft:biome",
            },
        ],
    });

    event.json("pack:neoforge/biome_modifier/fallen_leaves", {
        type: "neoforge:add_features",
        biomes: ["nomansland:autumnal_forest", "nomansland:maple_forest"],
        features: "spawn:fallen_leaves",
        step: "vegetal_decoration",
    });

    event.json("pack:neoforge/biome_modifier/fallen_leaves_low", {
        type: "neoforge:add_features",
        biomes: [
            "minecraft:forest",
            "minecraft:birch_forest",
            "minecraft:old_growth_birch_forest",
            "minecraft:dark_forest",
            "minecraft:flower_forest",
            "minecraft:windswept_forest",
            "nomansland:old_growth_forest",
            "nomansland:old_growth_forest_edge",
            "nomansland:boreal_forest",
        ],
        features: "pack:fallen_leaves_low",
        step: "vegetal_decoration",
    });
});
