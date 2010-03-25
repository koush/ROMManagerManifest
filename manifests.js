{
    minversion: 1824,
    manifests:
    [
    {
        // This is what name you want your ROMs to show up under.
        developer: "CyanogenMod",
        // Your id. This should have no spaces or other funny characters.
        // This would ideally be your Github id, so when you send me your manifest
        // I can verify who you are. But it can be anything really.
        id: "cyanogenmod",
        // The display summary. Two lines max.
        summary: "Mods and bacon for Dream, Sapphire, Droid, and Nexus One",
        // Is this a free ROM? This is decided by Koush/Cyanogen/CTSO.
        free: true,
        // The location of the developer's manifest.
        manifest: "http://github.com/koush/ROMManagerManifest/raw/master/cyanogenmod.js",
        // The list of devices that this developer's ROMs support.
        // If you don't support a device, just don't list it!
        roms:
        {
            sholes: true,
            passion: true
        },
    },
    {
        developer: "Modaco Custom ROM",
        id: "modaco",
        summary: "Modaco Custom ROM - http://android.modaco.com/",
        manifest: "http://github.com/koush/ROMManagerManifest/raw/master/modaco.js",
        free: true,
        roms:
        {
            passion: true
        },
    },
    {
        developer: "NexTheme and NexDesire",
        id: "manup456",
        summary: "Manup456's Desire Port for the Nexus One",
        manifest: "http://github.com/koush/ROMManagerManifest/raw/master/manup456.js",
        roms:
        {
            passion: true
        },
    },
    {
        developer: "Enomther",
        id: "enomther",
        summary: "Enomther's TheOfficial Nexus1",
        manifest: "http://github.com/koush/ROMManagerManifest/raw/master/enomther.js",
        roms:
        {
            passion: true
        },
    },
    {
        developer: "Ultimate Droid",
        id: "blackdroid",
        summary: "As many features as you can possibly get without sacrificing stability.",
        manifest: "http://www.regalgs.org/droid/udmanifest.js",
        roms:
        {
            sholes: true
        },
    },
    {
        developer: "Bugless Beast",
        id: "pete",
        summary: "Bugless Beast By Peter Alfonso (@peteralfonso)",
        manifest: "http://github.com/koush/ROMManagerManifest/raw/master/pete.js",
        roms:
        {
            sholes: true
        },
    },
    {
        developer: "KangxKxMod",
        summary: "This is greyed out if you are not a Premium user. It is also intentionally broken.",
        manifest: "http://github.com/koush/ROMManagerManifest/raw/master/manifest.js",
        roms:
        {
            sholes: true,
            passion: true
        },
    }
    ]
}
