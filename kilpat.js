{
    // The version of the manifest, so ROM Manager knows how to load it
    version: 1,
    // Your list of ROMs

    // =====Motorola Droid=====
    roms:
    [
    {
        // Display name of the rom
        name: "Smoked Glass-Esque 1.0",
        // Display summary of the rom
        summary: "For Koush 5.0.5.4",
        // Device that this rom runs on
        device: "sholes",
        // Product name of the mod. Product names should stay the same between versions of the mod.
        product: "Smoked Glass-Esque",
        // Numerical version of the mod. This allows the OTA system to figure out
        // when an upgrade is available. So, if the current version is 5.0.5.0,
        // you can set "incremental" to 5050. And when you have an upgrade available,
        // set the "incremental" of that ROM to 5051 (or any number higher than 5050).
        // ROM Manager will then figure out that an upgrade is available and let
        // the user know.
        incremental: 100,
        // This is a list of mirrors for your ROM. These URLs should have unique filenames per version!
        // Ie, don't use a zip with the same name as that of a previous version with a new version.
        // Otherwise ROM Manager will continue using the old cached zip on the SD card.
        urls:
        [
        "http://download559.mediafire.com/w1rew5yugv0g/m2ymymfhyhq/Smoked_Glass-Esque_1.0.zip"
        ]
    }
	]
}
