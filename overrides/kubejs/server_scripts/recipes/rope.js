ServerEvents.recipes((event) => {
    event.replaceInput(
        { output: "supplementaries:sack" },
        "supplementaries:flax",
        "farmersdelight:canvas"
    );
    event.replaceInput(
        { input: "farmersdelight:rope" },
        "farmersdelight:rope",
        "supplementaries:rope"
    );
    event.replaceInput(
        { input: "#supplementaries:ropes" },
        "#supplementaries:ropes",
        "supplementaries:rope"
    );

    event.remove({ output: "quark:rope" });
    event.remove({ output: "farmersdelight:rope" });

    event.shaped(Item.of("supplementaries:rope", 4), ["A", "A"], {
        A: Ingredient.of(["farmersdelight:straw", "supplementaries:flax"]),
    });

    event.remove({
        input: "farmersdelight:canvas_rug",
        output: "farmersdelight:canvas",
    });

    event.remove({ id: "supplementaries:rope" });
});
