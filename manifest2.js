{
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
        urls:
        [
        "http://www.droidaftermarket.com/koush/motorola/sholes/cyanogen_sholes-ota-eng.koush_5.0.5.zip",
        "http://koush.romraid.com/motorola/sholes/cyanogen_sholes-ota-eng.koush_5.0.5.zip",
        "http://alldroid.org/roms/motorola/droid/koush/motorola/sholes/cyanogen_sholes-ota-eng.koush_5.0.5.zip",
        ],
        addons:
        [
        {
            name: "Google Apps",
            urls:
            [
            "http://chris.soyars.com/gapps-passion-EPE54B-signed.zip",
            "http://briancrook.ca/android/nexus/gapps/gapps-passion-EPE54B-signed.zip"
            ]
        },
        {
            name: "Modules",
            urls:
            [
            "http://koush.romraid.com/motorola/sholes/bekit-modules.zip",
            "http://alldroid.org/roms/motorola/droid/koush//motorola/sholes/bekit-modules.zip",
            "http://www.droidaftermarket.com/koush//motorola/sholes/bekit-modules.zip",
            ]
        }
        ]
    },
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
        "http://www.droidaftermarket.com/koush/motorola/sholes/cyanogen_sholes-ota-eng.koush_5.0.4.2.zip",
        ],
        addons:
        [
        {
            name: "Modules",
            urls:
            [
            "http://koush.romraid.com/motorola/sholes/bekit-modules.zip",
            "http://alldroid.org/roms/motorola/droid/koush//motorola/sholes/bekit-modules.zip",
            "http://www.droidaftermarket.com/koush//motorola/sholes/bekit-modules.zip",
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
    },

    {
        name: "CyanogenMod 5.0.5.1",
        summary: "Stable",
        device: "passion",
        product: "CyanogenMod",
        incremental: 5050,
        modversion: "CyanogenMod-5.0.5.1-N1",
        urls:
        [
        "http://cyanogen-updater.googlecode.com/files/update-cm-5.0.5.1-N1-signed.zip"
        ],
        addons:
        [
        {
            name: "Google Apps",
            urls:
            [
            "http://chris.soyars.com/gapps-passion-EPE54B-signed.zip",
            "http://briancrook.ca/android/nexus/gapps/gapps-passion-EPE54B-signed.zip"
            ]
        }
        ]
    },
    {
        name: "CyanogenMod 5.0.5",
        summary: "Stable",
        device: "passion",
        product: "CyanogenMod",
        incremental: 5050,
        modversion: "CyanogenMod-5.0.5-N1",
        urls:
        [
        "http://cyanogen-updater.googlecode.com/files/update-cm-5.0.5-N1-signed.zip"
        ],
        addons:
        [
        {
            name: "Google Apps",
            urls:
            [
            "http://chris.soyars.com/gapps-passion-EPE54B-signed.zip",
            "http://briancrook.ca/android/nexus/gapps/gapps-passion-EPE54B-signed.zip"
            ]
        }
        ]
    },
    {
        name: "CyanogenMod 5.0.4.1",
        summary: "Stable",
        device: "passion",
        product: "CyanogenMod",
        incremental: 5041,
        modversion: "CyanogenMod-5.0.4.1-N1",
        urls:
        [
        "http://cyanogen-updater.googlecode.com/files/update-cm-5.0.4.1-N1-signed.zip"
        ],
        addons:
        [
        {
            name: "Google Apps",
            urls:
            [
            "http://koush.romraid.com/common/gapps-passion-ERE36B-2-signed.zip",
            "http://alldroid.org/roms/motorola/droid/koush//common/gapps-passion-ERE36B-2-signed.zip",
            "http://www.droidaftermarket.com/koush//common/gapps-passion-ERE36B-2-signed.zip",
            ]
        }
        ]
    }
    ],
    // TODO: remove this
    minversion: 180,
}
