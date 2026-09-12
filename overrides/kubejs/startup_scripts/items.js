(function () {
    const $FlintAndSteelItem = Java.loadClass(
        "net.minecraft.world.item.FlintAndSteelItem"
    );

    const $Properties = Java.loadClass(
        "net.minecraft.world.item.Item$Properties"
    );

    StartupEvents.registry("item", (event) => {
        event.createCustom(
            "pack:fire_striker",
            () => new $FlintAndSteelItem(new $Properties().durability(4))
        );
    });
})();
