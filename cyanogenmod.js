{
    // The version of the manifest, so ROM Manager knows how to load it
    version: 1,
    homepage: "http://www.cyanogenmod.com/",
    donate: "https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=3283920",

    // Your list of ROMs

    // =====Motorola Droid=====
    roms:
    [
    {
        // Display name of the rom
        name: "CyanogenMod 5.0.5.4",
        // Display summary of the rom
        summary: "Under Testing",
        // Device that this rom runs on
        device: "sholes",
        developer: true,
        // Product name of the mod. Product names should stay the same between versions of the mod.
        product: "CyanogenModExperimental",
        // Numerical version of the mod. This allows the OTA system to figure out
        // when an upgrade is available. So, if the current version is 5.0.5.0,
        // you can set "incremental" to 5050. And when you have an upgrade available,
        // set the "incremental" of that ROM to 5051 (or any number higher than 5050).
        // ROM Manager will then figure out that an upgrade is available and let
        // the user know.
        incremental: 5054,
        // The value of ro.modversion in /system/build.prop. Your ROM should set this
        // in that build.prop so that ROM Manager can figure out what ROM is currently running.
        // This is optional however, you don't need this line here or in /system/build.prop
        // if you don't want to use OTA updates.
        modversion: "CyanogenMod-5.0.5.4-Droid",
        // This is a list of mirrors for your ROM. These URLs should have unique filenames per version!
        // Ie, don't use a zip with the same name as that of a previous version with a new version.
        // Otherwise ROM Manager will continue using the old cached zip on the SD card.
        urls:
        [
        "http://www.droidaftermarket.com/koush/motorola/sholes/cyanogen_sholes-ota-eng.koush_5.0.5.4.zip",
        "http://koush.romraid.com/motorola/sholes/cyanogen_sholes-ota-eng.koush_5.0.5.4.zip",
        ],
        // Optional addons (you don't need this if you dont have any)
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
        // Display name of the rom
        name: "CyanogenMod 5.0.5.3",
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
        incremental: 5053,
        // The value of ro.modversion in /system/build.prop. Your ROM should set this
        // in that build.prop so that ROM Manager can figure out what ROM is currently running.
        // This is optional however, you don't need this line here or in /system/build.prop
        // if you don't want to use OTA updates.
        modversion: "CyanogenMod-5.0.5.3-Droid",
        // This is a list of mirrors for your ROM. These URLs should have unique filenames per version!
        // Ie, don't use a zip with the same name as that of a previous version with a new version.
        // Otherwise ROM Manager will continue using the old cached zip on the SD card.
        urls:
        [
        "http://www.droidaftermarket.com/koush/motorola/sholes/cyanogen_sholes-ota-eng.koush_5.0.5.3.zip",
        "http://koush.romraid.com/motorola/sholes/cyanogen_sholes-ota-eng.koush_5.0.5.3.zip",
        "http://alldroid.org/roms/motorola/droid/koush/motorola/sholes/cyanogen_sholes-ota-eng.koush_5.0.5.3.zip"
        ],
        // Optional addons (you don't need this if you dont have any)
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
        name: "bekit Kernels",
        developer: true,
        summary: "Custom Clocked Kernels for 5.0.5.3 and 5.0.5.4. For Advanced users only.",
        device: "sholes",
        urls:
        [
        ""
        ],
        choices:
        [
        {
            name: "Kernel",
            options:
            [
            {
                name: "Stock (Default)",
                urls:
                [
                "http://dl.dropbox.com/u/1123576/Android/bekit_kernels/0.8/bekit_boot-0.8.0-stock.zip"
                ]
            },
            {
                name: "5x800LV",
                urls:
                [
                "http://dl.dropbox.com/u/1123576/Android/bekit_kernels/0.8/bekit_boot-0.8.0-5x800LV.zip"
                ]
            },
//            {
//                name: "5x1000LV",
//                urls:
//                [
//                "http://dl.dropbox.com/u/1123576/Android/bekit_kernels/0.8/bekit_boot-0.8.0-5x1000LV.zip"
//                ]
//            },
//            {
//                name: "5x1100LV",
//                urls:
//                [
//                "http://dl.dropbox.com/u/1123576/Android/bekit_kernels/0.8/bekit_boot-0.8.0-5x1100LV.zip"
//                ]
//            },
//            {
//                name: "5x1200LV",
//                urls:
//                [
//                "http://dl.dropbox.com/u/1123576/Android/bekit_kernels/0.8/bekit_boot-0.8.0-5x1200LV.zip"
//                ]
//            },
            {
                name: "7x800LV",
                urls:
                [
                "http://dl.dropbox.com/u/1123576/Android/bekit_kernels/0.8/bekit_boot-0.8.0-7x800LV.zip"
                ]
//            },
//            {
//                name: "7x1000LV",
//                urls:
//                [
//                "http://dl.dropbox.com/u/1123576/Android/bekit_kernels/0.8/bekit_boot-0.8.0-7x1000LV.zip"
//                ]
//            },
//            {
//                name: "7x1100LV",
//                urls:
//                [
//                "http://dl.dropbox.com/u/1123576/Android/bekit_kernels/0.8/bekit_boot-0.8.0-7x1100LV.zip"
//                ]
//            },
//            {
//                name: "7x1200LV",
//                urls:
//                [
//                "http://dl.dropbox.com/u/1123576/Android/bekit_kernels/0.8/bekit_boot-0.8.0-7x1200LV.zip"
//                ]
//            },
//            {
//                name: "7x1300LV",
//                urls:
//                [
//                "http://dl.dropbox.com/u/1123576/Android/bekit_kernels/0.8/bekit_boot-0.8.0-7x1300LV.zip"
//                ]
            }
            ]
        }
        ]
    },
    
    {
        name: "P3Droid Kernels",
        developer: true,
        summary: "Redline Series Kernels for 5.0.5.3 and 5.0.5.4. For Advanced users only.",
        device: "sholes",
        urls:
        [
        ""
        ],
        choices:
        [
        {
            name: "Kernel",
            options:
            [
            {
                name: "700",
                urls:
                [
                "http://www.p3designs.info/kernels/700_LV_Wi_USB_Tether.zip"
                ]
            },
            {
                name: "800",
                urls:
                [
                "http://www.p3designs.info/kernels/800_LV_Wi_USB_Tether.zip"
                ]
            },
            {
                name: "900",
                urls:
                [
                "http://www.p3designs.info/kernels/900_LV_Wi_USB_Tether.zip"
                ]
            },
            {
                name: "1000",
                urls:
                [
                "http://www.p3designs.info/kernels/1000_LV_Wi_USB_Tether.zip"
                ]
            },
            {
                name: "1100",
                urls:
                [
                "http://www.p3designs.info/kernels/1100_LV_Wi_USB_Tether.zip"
                ]
            },
            {
                name: "1200",
                urls:
                [
                "http://www.p3designs.info/kernels/1200_LV_Wi_USB_Tether.zip"
                ]
            }
            ]
        }
        ]
    },
    
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



    // =====Google Nexus One====
    {
        name: "CyanogenMod 5.0.5.3",
        summary: "Stable",
        device: "passion",
        product: "CyanogenMod",
        incremental: 5053,
        modversion: "CyanogenMod-5.0.5.3-N1",
        urls:
        [
        "http://cyanogen-updater.googlecode.com/files/update-cm-5.0.5.3-N1-signed.zip"
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
        name: "CyanogenMod 5.0.5.2",
        summary: "Stable",
        device: "passion",
        product: "CyanogenMod",
        incremental: 5052,
        modversion: "CyanogenMod-5.0.5.2-N1",
        urls:
        [
        "http://cyanogen-updater.googlecode.com/files/update-cm-5.0.5.2-N1-signed.zip"
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
        name: "CyanogenMod 5.0.5.1",
        summary: "Stable",
        device: "passion",
        product: "CyanogenMod",
        incremental: 5051,
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
    },

    // =====G1=====
    {
        name: "CyanogenMod 4.2.15.1",
        summary: "Stable",
        device: "dream",
        product: "CyanogenMod",
        extendedurls:
        [
        {
            name: "DRC83 Base",
            urls:
            [
            "http://www.androidspin.com/downloads.php?dir=enomther/ROM/&file=HTC_ADP_1.6_DRC83_rooted_base.zip",
            ]
        },
        {
            name: "CyanogenMod 4.2.15.1",
            urls:
            [
            "http://n0rp.chemlab.org/android/update-cm-4.2.15.1-signed.zip"
            ]
        }
        ]
    },

    // =====32A=====
    {
        name: "CyanogenMod 4.2.15.1",
        summary: "Stable",
        device: "magic",
        product: "CyanogenMod",
        extendedurls:
        [
        {
            name: "DRC83 Base",
            urls:
            [
            "http://www.androidspin.com/downloads.php?dir=enomther/ROM/&file=HTC_ADP_1.6_DRC83_rooted_base.zip",
            ]
        },
        {
            name: "CyanogenMod 4.2.15.1",
            urls:
            [
            "http://n0rp.chemlab.org/android/update-cm-4.2.15.1-signed.zip"
            ]
        },
        {
            name: "EB1/32A Kernel",
            urls:
            [
            "http://briancrook.ca/magic/cm-ports/bc-4.2.15.1-ebi1-signed.zip"
            ]
        }
        ]
    },

    // =====32B=====
    {
        name: "CyanogenMod 4.2.15.1",
        summary: "Stable",
        device: "sapphire",
        product: "CyanogenMod",
        extendedurls:
        [
        {
            name: "DRC83 Base",
            urls:
            [
            "http://www.androidspin.com/downloads.php?dir=enomther/ROM/&file=HTC_ADP_1.6_DRC83_rooted_base.zip",
            ]
        },
        {
            name: "CyanogenMod 4.2.15.1",
            urls:
            [
            "http://n0rp.chemlab.org/android/update-cm-4.2.15.1-signed.zip"
            ]
        }
        ]
    }
    ]
}
