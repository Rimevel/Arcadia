(function () {
    const $FlintAndSteelItem = Java.loadClass(
        "net.minecraft.world.item.FlintAndSteelItem"
    );

    const $Properties = Java.loadClass(
        "net.minecraft.world.item.Item$Properties"
    );

    StartupEvents.registry("item", (event) => {
        event.create("pack:andesite_dust");
        event.create("pack:andesite_alloy_dust");
        event.create("pack:brass_dust");
        event.create("pack:zinc_dust");

        event.createCustom(
            "pack:fire_striker",
            () => new $FlintAndSteelItem(new $Properties().durability(4))
        );
    });
})();
