{
    // The version of the manifest, so ROM Manager knows how to load it
    "version": "1",
    // The homepage for your ROM, if you have one.
    "homepage": "http://www.cyanogenmod.com/",
    // The donate link for yuor ROM, if you have one.
    "donate": "https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=3283920",
    // Your list of ROMs
    "roms":
    [
    {
        // Display name of the rom
        "name": "CyanogenMod 5.0.5",
        // Display summary of the rom
        "summary": "Stable",
        // Device that this rom runs on
        "device": "sholes",
        // A screenshot to show off what the ROM looks like! (This is optional)
        "screenshot": "http://www.droidaftermarket.com/koush//motorola/sholes/screenshot2.png",
        // This is the download URL of your ROM.
        // These URLs should have unique filenames per version!
        // Ie, don't use a zip with the same name
        // as that of a previous version with a new version. 
        // Otherwise ROM Manager will continue using the
        // old cached zip on the SD card.
        // This must be a direct download,
        // and not a Mediafire type link.
        "url": "http://www.droidaftermarket.com/koush/motorola/sholes/cyanogen_sholes-ota-eng.koush_5.0.5.zip"
    },
    // Antother, older ROM!
    {
        "name": "CyanogenMod 5.0.4",
        "summary": "Stable",
        "device": "sholes",
        "url": "http://www.droidaftermarket.com/koush/motorola/sholes/cyanogen_sholes-ota-eng.koush_5.0.4.zip"
    }
    ]
    // Remember to delete all comment lines for JSON compliance, and the blank
    // lines that some editors stick at the end of files. Finally, be sure to
    // run your file through www.jsonlint.com to catch any whitespace or syntax errors.
}