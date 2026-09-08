ServerEvents.recipes((event) => {
    event
        .shapeless("spawn:shell_fragments", ["nomansland:seashells"])
        .id("nomansland:bone_meal_from_seashells");
});
