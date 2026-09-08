ServerEvents.commandRegistry((event) => {
    const $BuiltInRegistries = Java.loadClass(
        "net.minecraft.core.registries.BuiltInRegistries"
    );

    const { commands: Commands, arguments: Arguments } = event;

    event.register(
        Commands.literal("import_tab").then(
            Commands.argument("tab", Arguments.STRING.create(event)).executes(
                (ctx) => {
                    const server = ctx.getSource().getServer();
                    const tabName = Arguments.STRING.getResult(ctx, "tab");

                    // Find the creative tab by its ID
                    /** @type {Internal.$CreativeModeTab} */
                    let targetTab = null;

                    $BuiltInRegistries.CREATIVE_MODE_TAB.forEach((tab) => {
                        const key =
                            $BuiltInRegistries.CREATIVE_MODE_TAB.getKey(tab);

                        if (key && key.toString() === tabName) {
                            targetTab = tab;
                        }
                    });

                    if (targetTab == null) {
                        ctx.getSource().sendFailure(
                            Component.literal(
                                `Unknown creative tab: ${tabName}`
                            )
                        );
                        return 0;
                    }

                    // Get all items displayed in the creative tab
                    const items = targetTab.getDisplayItems();

                    console.log(`=== Creative Tab: ${tabName} ===`);
                    console.log(`Items: ${items.size()}`);

                    items.forEach((itemStack) => {
                        console.log(itemStack.getItem().toString());
                    });

                    console.log(`=== End Creative Tab ===`);

                    return items.size();
                }
            )
        )
    );
});
