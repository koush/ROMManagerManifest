{
    // The version of the manifest, so ROM Manager knows how to load it
    version: 1,
    // The homepage for your ROM, if you have one.
    homepage: "http://www.cyanogenmod.com/",
    // The donate link for yuor ROM, if you have one.
    donate: "https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=3283920",
    // Your list of ROMs
    roms:
    [
    {
        // Display name of the rom
        name: "CyanogenMod 5.0.5",
        // Display summary of the rom
        summary: "Stable",
        // Device that this rom runs on
        device: "sholes",
        // Product name of the mod. Product names should stay the same between versions of the mod.
        product: "CyanogenMod",
        // Numerical version of the mod. This allows the OTA system to figure out
        // when an upgrade is available. So, if the current version is 5.0.5.0,
        // you can set "incremental" to 5050. And when you have an upgrade available,
        // set the "incremental" of that ROM to 5051 (or any number higher than 5050).
        // ROM Manager will then figure out that an upgrade is available and let
        // the user know.
        incremental: 5050,
        // The value of ro.modversion in /system/build.prop. Your ROM should set this
        // in that build.prop so that ROM Manager can figure out what ROM is currently running.
        // This is optional however, you don't need this line here or in /system/build.prop
        // if you don't want to use OTA updates.
        modversion: "CyanogenMod-5.0.5-Droid",
        // Some Screenshots that show off the ROM!
        screenshots:
        [
        "http://www.droidaftermarket.com/koush//motorola/sholes/screenshot.png",
        "http://www.droidaftermarket.com/koush//motorola/sholes/screenshot2.png"
        ],
        // This is a list of mirrors for your ROM. These URLs should have unique filenames per version!
        // Ie, don't use a zip with the same name as that of a previous version with a new version. 
        // Otherwise ROM Manager will continue using the old cached zip on the SD card.
        urls:
        [
        "http://www.droidaftermarket.com/koush/motorola/sholes/cyanogen_sholes-ota-eng.koush_5.0.5.zip",
        "http://koush.romraid.com/motorola/sholes/cyanogen_sholes-ota-eng.koush_5.0.5.zip",
        "http://alldroid.org/roms/motorola/droid/koush/motorola/sholes/cyanogen_sholes-ota-eng.koush_5.0.5.zip"
        ],
        // Optional addons (you don't need this if you dont have any)
        addons:
        [
        {
            name: "Google Apps",
            urls:
            [
            "http://briancrook.ca/android/nexus/gapps/gapps-passion-EPE54B-signed.zip"
            ]
        },
        {
            name: "Modules",
            urls:
            [
            "http://koush.romraid.com/motorola/sholes/bekit-modules.zip",
            "http://alldroid.org/roms/motorola/droid/koush//motorola/sholes/bekit-modules.zip",
            "http://www.droidaftermarket.com/koush//motorola/sholes/bekit-modules.zip"
            ]
        }
        ]
    },
    // And here's another, older ROM!
    {
        name: "CyanogenMod 5.0.4.2",
        summary: "Stable",
        device: "sholes",
        product: "CyanogenMod",
        incremental: 5042,
        modversion: "CyanogenMod-5.0.4.2-Droid",
        urls:
        [
        "http://koush.romraid.com/motorola/sholes/cyanogen_sholes-ota-eng.koush_5.0.4.2.zip",
        "http://alldroid.org/roms/motorola/droid/koush/motorola/sholes/cyanogen_sholes-ota-eng.koush_5.0.4.2.zip",
        "http://www.droidaftermarket.com/koush/motorola/sholes/cyanogen_sholes-ota-eng.koush_5.0.4.2.zip"
        ],
        addons:
        [
        {
            name: "Modules",
            urls:
            [
            "http://koush.romraid.com/motorola/sholes/bekit-modules.zip",
            "http://alldroid.org/roms/motorola/droid/koush//motorola/sholes/bekit-modules.zip",
            "http://www.droidaftermarket.com/koush//motorola/sholes/bekit-modules.zip"
            ]
        }
        ],
        choices:
        [
        {
            name: "Kernel",
            options:
            [
            {
                name: "Overclocked",
                urls:
                [
                ""
                ]
            },
            {
                name: "Stable",
                urls:
                [
                "http://clockworkmod.s3.amazonaws.com/motorola/sholes/kernel_nooverlock_1.0.2.zip"
                ]
            }
            ]
        }
        ]
    }
    ]
}
