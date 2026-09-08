ServerEvents.basicCommand("creative_organizer", (event) => {
    LDLib2UI.player("creative_organizer:organizer_gui", (event) => {});
    LDLib2UIFactory.openPlayerUI(
        event.player,
        "creative_organizer:organizer_gui"
    );
});
