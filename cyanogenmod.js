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
        name: "CyanogenMod 5.0.7.1",
        summary: "Stable",
        device: "sholes",
        product: "CyanogenMod",
        incremental: 5071,
        modversion: "CyanogenMod-5.0.7.1-Droid",
        urls:
        [
        "http://www.droidaftermarket.com/koush//motorola/sholes/update-cm-5.0.7.1-Droid-signed.zip",
        "http://www.thekilpatrickproject.com/downloads/koush//motorola/sholes/update-cm-5.0.7.1-Droid-signed.zip",
        "http://www.clockworkmod.com/download//motorola/sholes/update-cm-5.0.7.1-Droid-signed.zip",
        "http://koush.tandtgaming.com//motorola/sholes/update-cm-5.0.7.1-Droid-signed.zip"
        ],
        addons:
        [
        {
            name: "Google Apps",
            urls:
            [
            "http://koush.romraid.com//common/gapps-passion-EPE54B-signed.zip",
            "http://www.droidaftermarket.com/koush//common/gapps-passion-EPE54B-signed.zip",
            "http://droidk.macleodweb.net//common/gapps-passion-EPE54B-signed.zip",
            "http://android.antbox.org/koush//common/gapps-passion-EPE54B-signed.zip",
            "http://www.thekilpatrickproject.com/downloads/koush//common/gapps-passion-EPE54B-signed.zip",
            "http://briancrook.ca/android/nexus/gapps/gapps-passion-EPE54B-signed.zip"
            ]
        }
        ]
    },


    {
        name: "CyanogenMod 5.0.7",
        summary: "Stable",
        device: "sholes",
        product: "CyanogenMod",
        incremental: 5070,
        modversion: "CyanogenMod-5.0.7-Droid",
        urls:
        [
        "http://www.droidaftermarket.com/koush//motorola/sholes/update-cm-5.0.7-Droid-signed.zip",
        "http://www.thekilpatrickproject.com/downloads/koush//motorola/sholes/update-cm-5.0.7-Droid-signed.zip",
        "http://www.clockworkmod.com/download//motorola/sholes/update-cm-5.0.7-Droid-signed.zip",
        "http://koush.tandtgaming.com//motorola/sholes/update-cm-5.0.7-Droid-signed.zip"
        ],
        addons:
        [
        {
            name: "Google Apps",
            urls:
            [
            "http://koush.romraid.com//common/gapps-passion-EPE54B-signed.zip",
            "http://www.droidaftermarket.com/koush//common/gapps-passion-EPE54B-signed.zip",
            "http://droidk.macleodweb.net//common/gapps-passion-EPE54B-signed.zip",
            "http://android.antbox.org/koush//common/gapps-passion-EPE54B-signed.zip",
            "http://www.thekilpatrickproject.com/downloads/koush//common/gapps-passion-EPE54B-signed.zip",
            "http://briancrook.ca/android/nexus/gapps/gapps-passion-EPE54B-signed.zip"
            ]
        }
        ]
    },
    
    
    {
        name: "CyanogenMod 5.0.6.2",
        summary: "Stable",
        device: "sholes",
        product: "CyanogenMod",
        incremental: 5062,
        modversion: "CyanogenMod-5.0.6.2-Droid",
        urls:
        [
        "http://www.thekilpatrickproject.com/downloads/koush/motorola/sholes/cyanogen_sholes-ota-eng.koush_5.0.6.2.zip",
        "http://droidk.macleodweb.net/motorola/sholes/cyanogen_sholes-ota-eng.koush_5.0.6.2.zip",
        "http://android.antbox.org/koush/motorola/sholes/cyanogen_sholes-ota-eng.koush_5.0.6.2.zip",
        "http://www.droidaftermarket.com/koush/motorola/sholes/cyanogen_sholes-ota-eng.koush_5.0.6.2.zip",
        "http://koush.romraid.com/motorola/sholes/cyanogen_sholes-ota-eng.koush_5.0.6.2.zip"
        ],
        addons:
        [
        {
            name: "Google Apps",
            urls:
            [
            "http://koush.romraid.com//common/gapps-passion-EPE54B-signed.zip",
            "http://www.droidaftermarket.com/koush//common/gapps-passion-EPE54B-signed.zip",
            "http://droidk.macleodweb.net//common/gapps-passion-EPE54B-signed.zip",
            "http://android.antbox.org/koush//common/gapps-passion-EPE54B-signed.zip",
            "http://www.thekilpatrickproject.com/downloads/koush//common/gapps-passion-EPE54B-signed.zip",
            "http://briancrook.ca/android/nexus/gapps/gapps-passion-EPE54B-signed.zip"
            ]
        }
        ]
    },
    {
        name: "Google Apps",
        summary: "Google Add-On",
        device: "sholes",
        urls:
         [
            "http://koush.romraid.com//common/gapps-passion-EPE54B-signed.zip",
            "http://www.droidaftermarket.com/koush//common/gapps-passion-EPE54B-signed.zip",
            "http://droidk.macleodweb.net//common/gapps-passion-EPE54B-signed.zip",
            "http://android.antbox.org/koush//common/gapps-passion-EPE54B-signed.zip",
            "http://www.thekilpatrickproject.com/downloads/koush//common/gapps-passion-EPE54B-signed.zip",
            "http://briancrook.ca/android/nexus/gapps/gapps-passion-EPE54B-signed.zip"
         ]
    },
    {
        name: "bekit Kernels (0.8.4)",
        developer: true,
        summary: "Custom Clocked Kernels for CyanogenMod. For Advanced users only.",
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
                name: "Stock (Default) 0.8.4",
                urls:
                [
                "http://dropbox.bekit.net/Android/bekit_kernels/0.8/bekit_boot-0.8.4-stock.zip"
                ]
            },
            {
                name: "5 Slot 800MHz 0.8.4 *Standard Voltage*",
                urls:
                [
                "http://dropbox.bekit.net/Android/bekit_kernels/0.8/bekit_boot-0.8.4-5x800SV.zip"
                ]
            },
            {
                name: "5 Slot 1.0GHz 0.8.4 *Standard Voltage*",
                urls:
                [
                "http://dropbox.bekit.net/Android/bekit_kernels/0.8/bekit_boot-0.8.4-5x1000SV.zip"
                ]
            },
            {
                name: "5 Slot 1.1GHz 0.8.4 *Standard Voltage*",
                urls:
                [
                "http://dropbox.bekit.net/Android/bekit_kernels/0.8/bekit_boot-0.8.4-5x1100SV.zip"
                ]
            },
            {
                name: "5 Slot 1.2GHz 0.8.4 *Standard Voltage*",
                urls:
                [
                "http://dropbox.bekit.net/Android/bekit_kernels/0.8/bekit_boot-0.8.4-5x1200SV.zip"
                ]
            },
            {
                name: "7 Slot 800MHz 0.8.4 *Standard Voltage*",
                urls:
                [
                "http://dropbox.bekit.net/Android/bekit_kernels/0.8/bekit_boot-0.8.4-7x800SV.zip"
                ]
            },
            {
                name: "7 Slot 1.0GHz 0.8.4 *Standard Voltage*",
                urls:
                [
                "http://dropbox.bekit.net/Android/bekit_kernels/0.8/bekit_boot-0.8.4-7x1000SV.zip"
                ]
            },
            {
                name: "7 Slot 1.1GHz 0.8.4 *Standard Voltage*",
                urls:
                [
                "http://dropbox.bekit.net/Android/bekit_kernels/0.8/bekit_boot-0.8.4-7x1100SV.zip"
                ]
            },
            {
                name: "7 Slot 1.2GHz 0.8.4 *Standard Voltage*",
                urls:
                [
                "http://dropbox.bekit.net/Android/bekit_kernels/0.8/bekit_boot-0.8.4-7x1200SV.zip"
                ]
            },
            {
                name: "7 Slot 1.3GHz 0.8.4 *Standard Voltage*",
                urls:
                [
                "http://dropbox.bekit.net/Android/bekit_kernels/0.8/bekit_boot-0.8.4-7x1300SV.zip"
                ]
            },
            {
                name: "5 Slot 800MHz 0.8.4	*Low Voltage*",
                urls:
                [
                "http://dropbox.bekit.net/Android/bekit_kernels/0.8/bekit_boot-0.8.4-5x800LV.zip"
                ]
            },
            {
                name: "5 Slot 1.0GHz 0.8.4 	*Low Voltage*",
                urls:
                [
                "http://dropbox.bekit.net/Android/bekit_kernels/0.8/bekit_boot-0.8.4-5x1000LV.zip"
                ]
            },
            {
                name: "5 Slot 1.1GHz 0.8.4 	*Low Voltage*",
                urls:
                [
                "http://dropbox.bekit.net/Android/bekit_kernels/0.8/bekit_boot-0.8.4-5x1100LV.zip"
                ]
            },
            {
                name: "5 Slot 1.2GHz 0.8.4 	*Low Voltage*",
                urls:
                [
                "http://dropbox.bekit.net/Android/bekit_kernels/0.8/bekit_boot-0.8.4-5x1200LV.zip"
                ]
            },
            {
                name: "7 Slot 800MHz 0.8.4 	*Low Voltage*",
                urls:
                [
                "http://dropbox.bekit.net/Android/bekit_kernels/0.8/bekit_boot-0.8.4-7x800LV.zip"
                ]
            },
            {
                name: "7 Slot 1.0GHz 0.8.4 	*Low Voltage*",
                urls:
                [
                "http://dropbox.bekit.net/Android/bekit_kernels/0.8/bekit_boot-0.8.4-7x1000LV.zip"
                ]
            },
            {
                name: "7 Slot 1.1GHz 0.8.4 	*Low Voltage*",
                urls:
                [
                "http://dropbox.bekit.net/Android/bekit_kernels/0.8/bekit_boot-0.8.4-7x1100LV.zip"
                ]
            },
            {
                name: "7 Slot 1.2GHz 0.8.4 	*Low Voltage*",
                urls:
                [
                "http://dropbox.bekit.net/Android/bekit_kernels/0.8/bekit_boot-0.8.4-7x1200LV.zip"
                ]
            },
            {
                name: "7 Slot 1.3GHz 0.8.4 	*Low Voltage*",
                urls:
                [
                "http://dropbox.bekit.net/Android/bekit_kernels/0.8/bekit_boot-0.8.4-7x1300LV.zip"
                ]
            },
            {
                name: "7 Slot 1.1GHz 0.8.4 *Increased Voltage*",
                urls:
                [
                "http://dropbox.bekit.net/Android/bekit_kernels/0.8/bekit_boot-0.8.4-7x1100IV.zip"
                ]
            },
            {
                name: "7 Slot 1.2GHz 0.8.4 *Increased Voltage*",
                urls:
                [
                "http://dropbox.bekit.net/Android/bekit_kernels/0.8/bekit_boot-0.8.4-7x1200IV.zip"
                ]
            },
            {
                name: "7 Slot 1.3GHz 0.8.4 *Increased Voltage*",
                urls:
                [
                "http://dropbox.bekit.net/Android/bekit_kernels/0.8/bekit_boot-0.8.4-7x1300IV.zip"
                ]
            }
            ]
        }
        ]
    },

    {
        name: "Radio Update (C_01.3E.03P)",
        summary: "This baseband update only needs to be installed once! This will REQUIRE reactivation.",
        device: "sholes",
        urls:
        [
        "http://koush.romraid.com//motorola/sholes/droidbaseband-03.zip",
        "http://www.droidaftermarket.com/koush//motorola/sholes/droidbaseband-03.zip"
        ]
    },

    {
        name: "P3Droid Kernels",
        developer: true,
        summary: "Kernels for any rom, using AnyUpdater from Koush by P3Droid. For Advanced users only.",
        device: "sholes",
        urls:
        [
        ""
        ],
        choices:
        [
        {
            name: "7 Slot - Low Voltage",
            options:
            [
            {
                name: "600 - 250/300/400/450/500/550/600",
                urls:
                [
                "http://www.p3designs.info/kernels/600_LV_Wi_USB_Tether.zip"
                ]
            },
            {
                name: "700 - 250/400/500/550/600/650/700",
                urls:
                [
                "http://www.p3designs.info/kernels/700_LV_Wi_USB_Tether.zip"
                ]
            },
            {
                name: "800 - 250/400/500/550/600/700/800",
                urls:
                [
                "http://www.p3designs.info/kernels/800_LV_Wi_USB_Tether.zip"
                ]
            },
            {
                name: "900 - 250/400/500/600/700/800/900",
                urls:
                [
                "http://www.p3designs.info/kernels/900_LV_Wi_USB_Tether.zip"
                ]
            },
            {
                name: "1000 - 250/500/600/700/800/900/1000",
                urls:
                [
                "http://www.p3designs.info/kernels/1000_LV_Wi_USB_Tether.zip"
                ]
            },
            {
                name: "1100 - 250/500/600/700/900/1000/1100",
                urls:
                [
                "http://www.p3designs.info/kernels/1100_LV_Wi_USB_Tether.zip"
                ]
            },
            {
                name: "1200 - 250/500/600/700/1000/1100/1200",
                urls:
                [
                "http://www.p3designs.info/kernels/1200_LV_Wi_USB_Tether.zip"
                ]
            },
            {
                name: "1250 - 250/500/600/800/1100/1200/1250",
                urls:
                [
                "http://www.p3designs.info/kernels/1250_LV_Wi_USB_Tether.zip"
                ]
            }
            ]
        }
        ]
    },

    {
        name: "Home",
        summary: "The normal, non-3D Home screen",
        device: "sholes",
        product: "Home",
        urls:
        [
        "http://thekilpatrickproject.com/downloads/koush//motorola/sholes/Launcher_5.0.6.1.zip",
        "http://www.droidaftermarket.com/koush//motorola/sholes/Launcher_5.0.6.1.zip",
        "http://droidk.macleodweb.net//motorola/sholes/Launcher_5.0.6.1.zip",
        "http://koush.romraid.com/motorola/sholes/Launcher_5.0.6.1.zip"
        ]
    },
    
    {
        // Display name of the rom
        name: "CyanogenMod 5.0.6.1",
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
        incremental: 5061,
        // The value of ro.modversion in /system/build.prop. Your ROM should set this
        // in that build.prop so that ROM Manager can figure out what ROM is currently running.
        // This is optional however, you don't need this line here or in /system/build.prop
        // if you don't want to use OTA updates.
        modversion: "CyanogenMod-5.0.6.1-Droid",
        // This is a list of mirrors for your ROM. These URLs should have unique filenames per version!
        // Ie, don't use a zip with the same name as that of a previous version with a new version.
        // Otherwise ROM Manager will continue using the old cached zip on the SD card.
        urls:
        [
        "http://droidk.macleodweb.net/motorola/sholes/cyanogen_sholes-ota-eng.koush_5.0.6.1.zip",
        "http://android.antbox.org/koush/motorola/sholes/cyanogen_sholes-ota-eng.koush_5.0.6.1.zip",
        "http://www.droidaftermarket.com/koush/motorola/sholes/cyanogen_sholes-ota-eng.koush_5.0.6.1.zip",
        "http://koush.romraid.com/motorola/sholes/cyanogen_sholes-ota-eng.koush_5.0.6.1.zip"
        ],
        // Optional addons (you don't need this if you dont have any)
        addons:
        [
        {
            name: "Google Apps",
            urls:
            [
            "http://koush.romraid.com//common/gapps-passion-EPE54B-signed.zip",
            "http://www.droidaftermarket.com/koush//common/gapps-passion-EPE54B-signed.zip",
            "http://droidk.macleodweb.net//common/gapps-passion-EPE54B-signed.zip",
            "http://android.antbox.org/koush//common/gapps-passion-EPE54B-signed.zip",
            "http://www.thekilpatrickproject.com/downloads/koush//common/gapps-passion-EPE54B-signed.zip",
            "http://briancrook.ca/android/nexus/gapps/gapps-passion-EPE54B-signed.zip"
            ]
        }
        ]
    },
    
    {
        // Display name of the rom
        name: "CyanogenMod 5.0.6",
        // Display summary of the rom
        summary: "Stable (wifi broken, replace with another kernel to fix)",
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
        incremental: 5060,
        // The value of ro.modversion in /system/build.prop. Your ROM should set this
        // in that build.prop so that ROM Manager can figure out what ROM is currently running.
        // This is optional however, you don't need this line here or in /system/build.prop
        // if you don't want to use OTA updates.
        modversion: "CyanogenMod-5.0.6-Droid",
        // This is a list of mirrors for your ROM. These URLs should have unique filenames per version!
        // Ie, don't use a zip with the same name as that of a previous version with a new version.
        // Otherwise ROM Manager will continue using the old cached zip on the SD card.
        urls:
        [
        "http://www.droidaftermarket.com/koush/motorola/sholes/cyanogen_sholes-ota-eng.koush_5.0.6.zip",
        "http://koush.romraid.com/motorola/sholes/cyanogen_sholes-ota-eng.koush_5.0.6.zip"
        ],
        // Optional addons (you don't need this if you dont have any)
        addons:
        [
        {
            name: "Google Apps",
            urls:
            [
            "http://koush.romraid.com//common/gapps-passion-EPE54B-signed.zip",
            "http://www.droidaftermarket.com/koush//common/gapps-passion-EPE54B-signed.zip",
            "http://droidk.macleodweb.net//common/gapps-passion-EPE54B-signed.zip",
            "http://android.antbox.org/koush//common/gapps-passion-EPE54B-signed.zip",
            "http://www.thekilpatrickproject.com/downloads/koush//common/gapps-passion-EPE54B-signed.zip",
            "http://briancrook.ca/android/nexus/gapps/gapps-passion-EPE54B-signed.zip"
            ]
        }
        ]
    },


    {
        // Display name of the rom
        name: "CyanogenMod 5.0.5.7",
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
        incremental: 5057,
        // The value of ro.modversion in /system/build.prop. Your ROM should set this
        // in that build.prop so that ROM Manager can figure out what ROM is currently running.
        // This is optional however, you don't need this line here or in /system/build.prop
        // if you don't want to use OTA updates.
        modversion: "CyanogenMod-5.0.5.7-Droid",
        // This is a list of mirrors for your ROM. These URLs should have unique filenames per version!
        // Ie, don't use a zip with the same name as that of a previous version with a new version.
        // Otherwise ROM Manager will continue using the old cached zip on the SD card.
        urls:
        [
        "http://www.droidaftermarket.com/koush/motorola/sholes/cyanogen_sholes-ota-eng.koush_5.0.5.7.zip",
        "http://koush.romraid.com/motorola/sholes/cyanogen_sholes-ota-eng.koush_5.0.5.7.zip"
        ],
        // Optional addons (you don't need this if you dont have any)
        addons:
        [
        {
            name: "Google Apps",
            urls:
            [
            "http://koush.romraid.com//common/gapps-passion-EPE54B-signed.zip",
            "http://www.droidaftermarket.com/koush//common/gapps-passion-EPE54B-signed.zip",
            "http://droidk.macleodweb.net//common/gapps-passion-EPE54B-signed.zip",
            "http://android.antbox.org/koush//common/gapps-passion-EPE54B-signed.zip",
            "http://www.thekilpatrickproject.com/downloads/koush//common/gapps-passion-EPE54B-signed.zip",
            "http://briancrook.ca/android/nexus/gapps/gapps-passion-EPE54B-signed.zip"
            ]
        }
        ]
    },

    {
        // Display name of the rom
        name: "CyanogenMod 5.0.5.6",
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
        incremental: 5056,
        // The value of ro.modversion in /system/build.prop. Your ROM should set this
        // in that build.prop so that ROM Manager can figure out what ROM is currently running.
        // This is optional however, you don't need this line here or in /system/build.prop
        // if you don't want to use OTA updates.
        modversion: "CyanogenMod-5.0.5.6-Droid",
        // This is a list of mirrors for your ROM. These URLs should have unique filenames per version!
        // Ie, don't use a zip with the same name as that of a previous version with a new version.
        // Otherwise ROM Manager will continue using the old cached zip on the SD card.
        urls:
        [
        "http://www.droidaftermarket.com/koush/motorola/sholes/cyanogen_sholes-ota-eng.koush_5.0.5.6.zip",
        "http://koush.romraid.com/motorola/sholes/cyanogen_sholes-ota-eng.koush_5.0.5.6.zip"
        ],
        // Optional addons (you don't need this if you dont have any)
        addons:
        [
        {
            name: "Google Apps",
            urls:
            [
            "http://koush.romraid.com//common/gapps-passion-EPE54B-signed.zip",
            "http://www.droidaftermarket.com/koush//common/gapps-passion-EPE54B-signed.zip",
            "http://droidk.macleodweb.net//common/gapps-passion-EPE54B-signed.zip",
            "http://android.antbox.org/koush//common/gapps-passion-EPE54B-signed.zip",
            "http://www.thekilpatrickproject.com/downloads/koush//common/gapps-passion-EPE54B-signed.zip",
            "http://briancrook.ca/android/nexus/gapps/gapps-passion-EPE54B-signed.zip"
            ]
        }
        ]
    },

    {
        // Display name of the rom
        name: "CyanogenMod 5.0.5.4",
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
        "http://koush.romraid.com/motorola/sholes/cyanogen_sholes-ota-eng.koush_5.0.5.4.zip"
        ],
        // Optional addons (you don't need this if you dont have any)
        addons:
        [
        {
            name: "Google Apps",
            urls:
            [
            "http://koush.romraid.com//common/gapps-passion-EPE54B-signed.zip",
            "http://www.droidaftermarket.com/koush//common/gapps-passion-EPE54B-signed.zip",
            "http://droidk.macleodweb.net//common/gapps-passion-EPE54B-signed.zip",
            "http://android.antbox.org/koush//common/gapps-passion-EPE54B-signed.zip",
            "http://www.thekilpatrickproject.com/downloads/koush//common/gapps-passion-EPE54B-signed.zip",
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
            "http://koush.romraid.com//common/gapps-passion-EPE54B-signed.zip",
            "http://www.droidaftermarket.com/koush//common/gapps-passion-EPE54B-signed.zip",
            "http://droidk.macleodweb.net//common/gapps-passion-EPE54B-signed.zip",
            "http://android.antbox.org/koush//common/gapps-passion-EPE54B-signed.zip",
            "http://www.thekilpatrickproject.com/downloads/koush//common/gapps-passion-EPE54B-signed.zip",
            "http://briancrook.ca/android/nexus/gapps/gapps-passion-EPE54B-signed.zip"
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
            "http://koush.romraid.com//common/gapps-passion-EPE54B-signed.zip",
            "http://www.droidaftermarket.com/koush//common/gapps-passion-EPE54B-signed.zip",
            "http://droidk.macleodweb.net//common/gapps-passion-EPE54B-signed.zip",
            "http://android.antbox.org/koush//common/gapps-passion-EPE54B-signed.zip",
            "http://www.thekilpatrickproject.com/downloads/koush//common/gapps-passion-EPE54B-signed.zip",
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
        name: "CyanogenMod 5.0.7.1",
        summary: "Stable",
        device: "passion",
        product: "CyanogenMod",
        incremental: 5071,
        modversion: "CyanogenMod-5.0.7.1-N1",
        urls:
        [
        "http://n0rp.chemlab.org/android/nexus/update-cm-5.0.7.1-N1-signed.zip"
        ],
        addons:
        [
        {
            name: "Google Apps",
            urls:
            [
            "http://koush.romraid.com//common/gapps-passion-EPE54B-signed.zip",
            "http://www.droidaftermarket.com/koush//common/gapps-passion-EPE54B-signed.zip",
            "http://droidk.macleodweb.net//common/gapps-passion-EPE54B-signed.zip",
            "http://android.antbox.org/koush//common/gapps-passion-EPE54B-signed.zip",
            "http://www.thekilpatrickproject.com/downloads/koush//common/gapps-passion-EPE54B-signed.zip",
            "http://briancrook.ca/android/nexus/gapps/gapps-passion-EPE54B-signed.zip"
            ]
        }
        ]
    },
    {
        name: "Google Apps",
        summary: "Google Add-On",
        device: "passion",
        urls:
       [
            "http://koush.romraid.com//common/gapps-passion-EPE54B-signed.zip",
            "http://www.droidaftermarket.com/koush//common/gapps-passion-EPE54B-signed.zip",
            "http://droidk.macleodweb.net//common/gapps-passion-EPE54B-signed.zip",
            "http://android.antbox.org/koush//common/gapps-passion-EPE54B-signed.zip",
            "http://www.thekilpatrickproject.com/downloads/koush//common/gapps-passion-EPE54B-signed.zip",
            "http://briancrook.ca/android/nexus/gapps/gapps-passion-EPE54B-signed.zip"
       ]
    },
    {
        name: "CyanogenMod 5.0.7",
        summary: "Stable",
        device: "passion",
        product: "CyanogenMod",
        incremental: 5070,
        modversion: "CyanogenMod-5.0.7-N1",
        urls:
        [
        "http://n0rp.chemlab.org/android/nexus/update-cm-5.0.7-N1-signed.zip"
        ],
        addons:
        [
        {
            name: "Google Apps",
            urls:
            [
            "http://koush.romraid.com//common/gapps-passion-EPE54B-signed.zip",
            "http://www.droidaftermarket.com/koush//common/gapps-passion-EPE54B-signed.zip",
            "http://droidk.macleodweb.net//common/gapps-passion-EPE54B-signed.zip",
            "http://android.antbox.org/koush//common/gapps-passion-EPE54B-signed.zip",
            "http://www.thekilpatrickproject.com/downloads/koush//common/gapps-passion-EPE54B-signed.zip",
            "http://briancrook.ca/android/nexus/gapps/gapps-passion-EPE54B-signed.zip"
            ]
        }
        ]
    },
    
    {
        name: "CyanogenMod 5.0.6",
        summary: "Stable",
        device: "passion",
        product: "CyanogenMod",
        incremental: 5060,
        modversion: "CyanogenMod-5.0.6-N1",
        urls:
        [
        "http://n0rp.chemlab.org/android/nexus/update-cm-5.0.6-N1-signed.zip",
        "http://cyanogen-updater.googlecode.com/files/update-cm-5.0.6-N1-signed.zip",
        "http://android.phaseburn.net/mirrors/cyanogen/nexus/update-cm-5.0.6-N1-signed.zip"
        ],
        addons:
        [
        {
            name: "Google Apps",
            urls:
            [
            "http://koush.romraid.com//common/gapps-passion-EPE54B-signed.zip",
            "http://www.droidaftermarket.com/koush//common/gapps-passion-EPE54B-signed.zip",
            "http://droidk.macleodweb.net//common/gapps-passion-EPE54B-signed.zip",
            "http://android.antbox.org/koush//common/gapps-passion-EPE54B-signed.zip",
            "http://www.thekilpatrickproject.com/downloads/koush//common/gapps-passion-EPE54B-signed.zip",
            "http://briancrook.ca/android/nexus/gapps/gapps-passion-EPE54B-signed.zip"
            ]
        }
        ]
    },    
    
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
            "http://koush.romraid.com//common/gapps-passion-EPE54B-signed.zip",
            "http://www.droidaftermarket.com/koush//common/gapps-passion-EPE54B-signed.zip",
            "http://droidk.macleodweb.net//common/gapps-passion-EPE54B-signed.zip",
            "http://android.antbox.org/koush//common/gapps-passion-EPE54B-signed.zip",
            "http://www.thekilpatrickproject.com/downloads/koush//common/gapps-passion-EPE54B-signed.zip",
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
            "http://koush.romraid.com//common/gapps-passion-EPE54B-signed.zip",
            "http://www.droidaftermarket.com/koush//common/gapps-passion-EPE54B-signed.zip",
            "http://droidk.macleodweb.net//common/gapps-passion-EPE54B-signed.zip",
            "http://android.antbox.org/koush//common/gapps-passion-EPE54B-signed.zip",
            "http://www.thekilpatrickproject.com/downloads/koush//common/gapps-passion-EPE54B-signed.zip",
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
            "http://koush.romraid.com//common/gapps-passion-EPE54B-signed.zip",
            "http://www.droidaftermarket.com/koush//common/gapps-passion-EPE54B-signed.zip",
            "http://droidk.macleodweb.net//common/gapps-passion-EPE54B-signed.zip",
            "http://android.antbox.org/koush//common/gapps-passion-EPE54B-signed.zip",
            "http://www.thekilpatrickproject.com/downloads/koush//common/gapps-passion-EPE54B-signed.zip",
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
            "http://koush.romraid.com//common/gapps-passion-EPE54B-signed.zip",
            "http://www.droidaftermarket.com/koush//common/gapps-passion-EPE54B-signed.zip",
            "http://droidk.macleodweb.net//common/gapps-passion-EPE54B-signed.zip",
            "http://android.antbox.org/koush//common/gapps-passion-EPE54B-signed.zip",
            "http://www.thekilpatrickproject.com/downloads/koush//common/gapps-passion-EPE54B-signed.zip",
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
        name: "CyanogenMod 5.0.7",
        summary: "Stable, Flashing Recovery may be broken",
        device: "dream",
        product: "CyanogenMod",
        incremental: 5070,
        modversion: "CyanogenMod-5.0.7-DS",
        urls:
        [
        "http://www.kanged.net/mirror/download.php?file=update-cm-5.0.7-DS-signed.zip"
        ],
        addons:
        [
        {
            name: "Google Apps",
            urls:
            [
            "http://kanged.net/mirror/download.php?file=gapps-ds-ERE36B-signed.zip"
            ]
        }
        ]
    },
 
    {
        name: "Google Apps",
        summary: "Google Add-On",
        device: "dream",
        urls:
        [
            "http://kanged.net/mirror/download.php?file=gapps-ds-ERE36B-signed.zip"
        ]
    },
    {
        name: "CyanogenMod 4.2.15.1",
        summary: "Stable",
        device: "dream",
        product: "CyanogenMod",
        modversion: "CyanogenMod-4.2.15.1-DS",
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
        name: "CyanogenMod 5.0.7",
        summary: "Stable, Flashing Recovery may be broken",
        device: "magic",
        product: "CyanogenMod",
        incremental: 5070,
        modversion: "CyanogenMod-5.0.7-DS",
        extendedurls:
        [
        {
            name: "CyanogenMod 5.0.7",
            urls:
            [
            "http://www.kanged.net/mirror/download.php?file=update-cm-5.0.7-DS-signed.zip"
            ]
        },
        {
            name: "EB1/32A Kernel",
            urls:
            [
            "http://briancrook.ca/android/cm-ports/bc-5.0.7-ebi1-signed.zip"
            ]
        }
        ],
        addons:
        [
        {
            name: "Google Apps",
            urls:
            [
            "http://kanged.net/mirror/download.php?file=gapps-ds-ERE36B-signed.zip"
            ]
        }
        ]
    },
    {
        name: "Google Apps",
        summary: "Google Add-On",
        device: "magic",
        urls:
        [
         "http://kanged.net/mirror/download.php?file=gapps-ds-ERE36B-signed.zip"
        ]
    },
    {
        name: "CyanogenMod 4.2.15.1",
        summary: "Stable",
        device: "magic",
        product: "CyanogenMod",
        modversion: "CyanogenMod-4.2.15.1-DS",
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
            "http://briancrook.ca/android/cm-ports/bc-4.2.15.1-ebi1-signed.zip"
            ]
        }
        ]
    },

    // =====32B=====
    {
        name: "CyanogenMod 5.0.7",
        summary: "Stable, Flashing Recovery may be broken",
        device: "sapphire",
        product: "CyanogenMod",
        incremental: 5070,
        modversion: "CyanogenMod-5.0.7-DS",
        urls:
        [
        "http://www.kanged.net/mirror/download.php?file=update-cm-5.0.7-DS-signed.zip"
        ],
        addons:
        [
        {
            name: "Google Apps",
            urls:
            [
            "http://kanged.net/mirror/download.php?file=gapps-ds-ERE36B-signed.zip"
            ]
        }
        ]
    },
    {
        name: "Google Apps",
        summary: "Google Add-On",
        device: "sapphire",
        urls:
        [
        "http://kanged.net/mirror/download.php?file=gapps-ds-ERE36B-signed.zip"
        ]
    },
    {
        name: "CyanogenMod 4.2.15.1",
        summary: "Stable",
        device: "sapphire",
        product: "CyanogenMod",
        modversion: "CyanogenMod-4.2.15.1-DS",
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
