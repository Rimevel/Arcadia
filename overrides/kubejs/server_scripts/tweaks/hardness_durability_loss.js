//(function () {
//    //ServerEvents.tags("block", (event) => {
//    //    event.add("pack:durability_loss/extreme", "minecraft:obsidian");
//    //});
//
//    const LOSS = {
//        "pack:durability_loss/light": 1,
//        "pack:durability_loss/heavy": 4,
//        "pack:durability_loss/extreme": 9,
//    };
//
//    BlockEvents.broken((event) => {
//        let { player, level, block } = event;
//
//        let sub = 0;
//
//        for (let loss in LOSS) {
//            if (block.hasTag(loss)) {
//                sub = LOSS[loss];
//            }
//        }
//
//        if (sub === 0) {
//            return;
//        }
//
//        let held = player.getHeldItem("main_hand");
//        if (held) {
//            held.hurtAndBreak(sub, player, "mainhand");
//        }
//    });
//})();
