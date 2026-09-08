ServerEvents.recipes((event) => {
    const dyeItems = [
        "minecraft:white_dye",
        "minecraft:orange_dye",
        "minecraft:magenta_dye",
        "minecraft:light_blue_dye",
        "minecraft:yellow_dye",
        "minecraft:lime_dye",
        "minecraft:pink_dye",
        "minecraft:gray_dye",
        "minecraft:light_gray_dye",
        "minecraft:cyan_dye",
        "minecraft:purple_dye",
        "minecraft:blue_dye",
        "minecraft:brown_dye",
        "minecraft:green_dye",
        "minecraft:red_dye",
        "minecraft:black_dye",
    ];

    dyeItems.forEach((item) => {
        event.remove({
            output: item,
            not: {
                or: [
                    {
                        type: "create:milling",
                    },
                    {
                        type: "manual_labour:mortar_grinding",
                    },
                ],
            },
        });
        event.remove({ output: item, type: "create:crushing" });
    });
});
