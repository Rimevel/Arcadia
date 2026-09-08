(function () {
    const capabilities = Java.loadClass(
        "net.neoforged.neoforge.capabilities.Capabilities$ItemHandler"
    );
    const $BuiltInRegistries = Java.loadClass(
        "net.minecraft.core.registries.Registries"
    );

    /**
     * Gets all item stacks from the container the player is looking at
     * and every container directly below it.
     *
     * @param {Internal.$ServerPlayer} player
     * @param {Internal.$Level} level
     * @param {number} maxDepth Maximum number of blocks to check downward
     * @returns {Internal.$ItemStack[]}
     */
    function getItemsDownwards(player, level, maxDepth) {
        let items = [];
        let defaultMax = 64;

        let depth = maxDepth ? maxDepth : defaultMax;

        // Get the block the player is looking at.
        let ray = player.rayTrace(depth, true);

        if (!ray || !ray.block) {
            return items;
        }

        let pos = ray.block.pos;

        /** @type {Internal.$InvWrapper} */
        let handler = level.getCapability(capabilities.BLOCK, pos, ray.facing);

        // If this isn't a container, stop.
        if (!handler) {
            return items;
        }

        console.log(handler);

        handler.allItems.forEach((stack) => {
            items.push(Item.of(stack));
        });

        return items;
    }

    ServerEvents.basicCommand("grab_all_items", (event) => {
        let { player, level } = event;

        let ids = getItemsDownwards(player, level).map((item) => {
            return item.id;
        });

        JsonIO.write("./kubejs/data/exported_items.json", {
            ids: ids,
        });
    });
})();
