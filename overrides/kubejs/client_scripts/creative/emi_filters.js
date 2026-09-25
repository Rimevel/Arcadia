ClientEvents.generateAssets("after_mods", (event) => {
    event.json("emi:recipe/filters/remove", {
        filters: [
            {
                category: "emi:anvil_repairing",
            },
            {
                category: "emi:grinding",
            },
        ],
    });
});
