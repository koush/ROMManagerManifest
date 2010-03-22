{
    minversion: 180,
    manifests:
    [
    {
        // This is what name you want your ROMs to show up under.
        developer: "CyanogenMod",
        // Your id. This should have no spaces or other funny characters.
        id: "cyanogenmod",
        // The display summary. Two lines max.
        summary: "Mods and bacon for Dream, Sapphire, Droid, and Nexus One",
        // Is this a free ROM? This is decided by Koush/Cyanogen/CTSO.
        free: true,
        // The location of the developer's manifest.
        manifest: "http://github.com/koush/ROMManagerManifest/raw/master/manifest2.js",
        // The list of devices that this developer's ROMs support.
        roms:
        {
            sholes: true,
            passion: true
        },
    },
    {
        developer: "KangMod",
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