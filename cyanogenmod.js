{
    // The version of the manifest, so ROM Manager knows how to load it
    version: 1,
    homepage: "http://www.cyanogenmod.com/",
    donate: "https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=3283920",
    mirrors:
    [
    "http://droidk.macleodweb.net/",
    "http://android.antbox.org/koush/",
    "http://www.thekilpatrickproject.com/downloads/koush/",
    "http://www.clockworkmod.com/download/",
    "http://koush.tandtgaming.com/"
    ],

    // Your list of ROMs
    // =====HTC Incredible=====
    roms:
    [
    {
        name: "CyanogenMod 5.0.8 test4",
        summary: "Stable, Camcorder broken",
        device: "inc",
        file: "htc/inc/update-cm-5.0.8-test4-Inc-signed.zip",
        screenshots:
        [
        "http://koush.tandtgaming.com//motorola/sholes/screeshot.png",
        "http://koush.tandtgaming.com//motorola/sholes/screenshot2.png"
        ],
        addons:
        [
        {
            name: "Google Apps",
            file: "common/gapps-passion-EPF30-signed.zip"
        }
        ]
    },

    // =====Motorola Droid=====
    {
        name: "CyanogenMod 6.0.0-RC2",
        summary: "Stable",
        device: "sholes",
        product: "CyanogenModRC",
        incremental: 2,
        modversion: "CyanogenMod-6.0.0-Droid-RC2",

        choices:
        [
        {
            name: "Home Application",
            options:
            [
            {
                name: "ADWLauncher",
                url: ""
            },
            {
                name: "Launcher2",
                file: "common/Launcher2-CM6-v1.zip"
            }
            ]
        }
        ],
        screenshots:
        [
        "http://koush.tandtgaming.com//motorola/sholes/screeshot.png",
        "http://koush.tandtgaming.com//motorola/sholes/screenshot2.png"
        ],
        addons:
        [
        {
            name: "Google Apps",
            url: "http://kanged.net/mirror/gapps/gapps-hdpi-FRF91-2-signed.zip"
        }
        ]
    },
    {
        name: "CyanogenMod 6.0.0-RC1",
        summary: "Stable",
        device: "sholes",
        product: "CyanogenModRC",
        incremental: 1,
        modversion: "CyanogenMod-6.0.0-Droid-RC1",
        urls:
        [
        "http://bit.ly/9L5ULx",
        "http://bit.ly/dhz1CL",
        "http://bit.ly/ak0UXI",
        "http://bit.ly/99YEcu",
        "http://bit.ly/bHOhe6"
        ],
        choices:
        [
        {
            name: "Home Application",
            options:
            [
            {
                name: "ADWLauncher",
                url: ""
            },
            {
                name: "Launcher2",
                file: "common/Launcher2-CM6-v1.zip"
            }
            ]
        }
        ],
        screenshots:
        [
        "http://koush.tandtgaming.com//motorola/sholes/screeshot.png",
        "http://koush.tandtgaming.com//motorola/sholes/screenshot2.png"
        ],
        addons:
        [
        {
            name: "Google Apps",
            url: "http://kanged.net/mirror/gapps/gapps-hdpi-FRF91-2-signed.zip"
        }
        ]
    },

    {
        name: "CyanogenMod 5.0.8",
        summary: "Stable",
        device: "sholes",
        product: "CyanogenMod",
        incremental: 5080,
        modversion: "CyanogenMod-5.0.8-Droid",
        file: "motorola/sholes/update-cm-5.0.8-Droid-signed.zip",
        screenshots:
        [
        "http://koush.tandtgaming.com//motorola/sholes/screeshot.png",
        "http://koush.tandtgaming.com//motorola/sholes/screenshot2.png"
        ],
        addons:
        [
        {
            name: "Google Apps",
            file: "common/gapps-passion-EPF30-signed.zip"
        }
        ]
    },

    {
        name: "CyanogenMod 5.0.7.1",
        summary: "Stable",
        device: "sholes",
        product: "CyanogenMod",
        incremental: 5071,
        modversion: "CyanogenMod-5.0.7.1-Droid",
        visible: false
    },


    {
        name: "CyanogenMod 5.0.7",
        summary: "Stable",
        device: "sholes",
        product: "CyanogenMod",
        incremental: 5070,
        modversion: "CyanogenMod-5.0.7-Droid",
        visible: false
    },


    {
        name: "CyanogenMod 5.0.6.2",
        summary: "Stable",
        device: "sholes",
        product: "CyanogenMod",
        incremental: 5062,
        modversion: "CyanogenMod-5.0.6.2-Droid",
        visible: false
    },

    {
        name: "bekit Kernels (0.8.4)",
        developer: true,
        summary: "Custom Clocked Kernels for CyanogenMod-5. For Advanced users only.",
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
        name: "P3Droid Kernels",
        developer: true,
        summary: "Kernels for any ECLAIR rom, using AnyUpdater from Koush by P3Droid. For Advanced users only.",
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
        name: "CyanogenMod 5.0.6.1",
        summary: "Stable",
        device: "sholes",
        product: "CyanogenMod",
        incremental: 5061,
        modversion: "CyanogenMod-5.0.6.1-Droid",
        visible: false
    },

    // =====Google Nexus One====
    {
        name: "CyanogenMod 6.0.0-RC1",
        summary: "Release Candidate 1",
        device: "passion",
        product: "CyanogenMod",
        incremental: 6000,
        modversion: "CyanogenMod-6.0.0-N1-RC1",
        urls:
        [
        "http://www.kanged.net/mirror/download.php?file=update-cm-6.0.0-N1-RC1-signed.zip"
        ],
        addons:
        [
        {
            name: "Google Apps",
            urls:
            ["http://www.kanged.net/mirror/download.php?file=gapps-hdpi-FRF91-signed.zip"]
        }
        ]
    },
    {
        name: "CyanogenMod 5.0.8",
        summary: "Stable",
        device: "passion",
        product: "CyanogenMod",
        incremental: 5080,
        modversion: "CyanogenMod-5.0.8-N1",
        screenshots:
        [
        "http://www.droidaftermarket.com/koush//motorola/sholes/screenshot.png",
        "http://www.droidaftermarket.com/koush//motorola/sholes/screenshot2.png"
        ],
        url: "http://n0rp.chemlab.org/android/nexus/update-cm-5.0.8-N1-signed.zip",
        addons:
        [
        {
            name: "Google Apps",
            urls:
            [
            "http://briancrook.ca/android/nexus/gapps/gapps-passion-EPF30-signed.zip"
            ]
        }
        ]
    },

    {
        name: "CyanogenMod 5.0.7.1",
        summary: "Stable",
        device: "passion",
        product: "CyanogenMod",
        incremental: 5071,
        modversion: "CyanogenMod-5.0.7.1-N1",
        visible: false
    },

    {
        name: "CyanogenMod 5.0.7",
        summary: "Stable",
        device: "passion",
        product: "CyanogenMod",
        incremental: 5070,
        modversion: "CyanogenMod-5.0.7-N1",
        visible: false
    },

    {
        name: "CyanogenMod 5.0.6",
        summary: "Stable",
        device: "passion",
        product: "CyanogenMod",
        incremental: 5060,
        modversion: "CyanogenMod-5.0.6-N1",
        visible: false
    },

    // =====G1=====
    {
        name: "CyanogenMod 6.0.0-RC1",
        summary: "Release Candidate 1",
        device: "dream",
        product: "CyanogenMod",
        incremental: 6000,
        modversion: "CyanogenMod-6.0.0-DS-RC1",
        urls:
        [
        "http://www.kanged.net/mirror/download.php?file=update-cm-6.0.0-DS-RC1-signed.zip"
        ],
        addons:
        [
        {
            name: "Google Apps",
            urls:
            ["http://www.kanged.net/mirror/download.php?file=gapps-mdpi-FRF91-3-signed.zip"]
        }
        ]
    },
    {
        name: "CyanogenMod 5.0.8",
        summary: "Stable, Flashing Recovery may be broken",
        device: "dream",
        product: "CyanogenMod",
        incremental: 5080,
        modversion: "CyanogenMod-5.0.8-DS",
        screenshots:
        [
        "http://www.droidaftermarket.com/koush//motorola/sholes/screenshot.png",
        "http://www.droidaftermarket.com/koush//motorola/sholes/screenshot2.png"
        ],
        url: "http://n0rp.chemlab.org/android/update-cm-5.0.8-DS-signed.zip",
        addons:
        [
        {
            name: "Google Apps",
            file: "/common/gapps-ds-ERE36B-signed.zip"
        }
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
        name: "CyanogenMod 6.0.0-RC1",
        summary: "Release Candidate 1",
        device: "magic",
        product: "CyanogenMod",
        incremental: 6000,
        modversion: "CyanogenMod-6.0.0-DS-RC1",
        extendedurls:
        [
        {
            name: "CyanogenMod 6",
            url: "http://www.kanged.net/mirror/download.php?file=update-cm-6.0.0-DS-RC1-signed.zip"
        },
        {
            name: "EB1/32A Kernel",
            url: "http://briancrook.ca/android/cm-ports/bc-6.0.0-RC1-ebi1-signed.zip"
        }
        ],
        addons:
        [
        {
            name: "Google Apps",
            urls:
            [
			"http://www.kanged.net/mirror/download.php?file=gapps-mdpi-FRF91-3-signed.zip"
			]
        }
        ]
    },
    {
        name: "CyanogenMod 5.0.8",
        summary: "Stable, Flashing Recovery may be broken",
        device: "magic",
        product: "CyanogenMod",
        incremental: 5080,
        modversion: "CyanogenMod-5.0.8-DS",
        screenshots:
        [
        "http://www.droidaftermarket.com/koush//motorola/sholes/screenshot.png",
        "http://www.droidaftermarket.com/koush//motorola/sholes/screenshot2.png"
        ],
        extendedurls:
        [
        {
            name: "CyanogenMod 5.0.8",
            url: "http://n0rp.chemlab.org/android/update-cm-5.0.8-DS-signed.zip"
        },
        {
            name: "EB1/32A Kernel",
            url: "http://briancrook.ca/android/cm-ports/bc-5.0.8-ebi1-signed.zip"
        }
        ],
        addons:
        [
        {
            name: "Google Apps",
            file: "/common/gapps-ds-ERE36B-signed.zip"
        }
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
        name: "CyanogenMod 6.0.0-RC1",
        summary: "Release Candidate 1",
        device: "sapphire",
        product: "CyanogenMod",
        incremental: 6000,
        modversion: "CyanogenMod-6.0.0-DS-RC1",
        urls:
        [
        "http://www.kanged.net/mirror/download.php?file=update-cm-6.0.0-DS-RC1-signed.zip"
        ],
        addons:
        [
        {
            name: "Google Apps",
            urls:
            ["http://www.kanged.net/mirror/download.php?file=gapps-mdpi-FRF91-3-signed.zip"]
        }
        ]
    },
    {
        name: "CyanogenMod 5.0.8",
        summary: "Stable, Flashing Recovery may be broken",
        device: "sapphire",
        product: "CyanogenMod",
        incremental: 5080,
        modversion: "CyanogenMod-5.0.8-DS",
        screenshots:
        [
        "http://www.droidaftermarket.com/koush//motorola/sholes/screenshot.png",
        "http://www.droidaftermarket.com/koush//motorola/sholes/screenshot2.png"
        ],
        url: "http://n0rp.chemlab.org/android/update-cm-5.0.8-DS-signed.zip",
        addons:
        [
        {
            name: "Google Apps",
            file: "/common/gapps-ds-ERE36B-signed.zip"
        }
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
    },

    // ===== Bravo =====
    {
        name: "CyanogenMod 5.0.8 test 7",
        summary: "Experimental",
        device: "bravo",
        product: "CyanogenModTest",
        incremental: 5086,
        modversion: "CyanogenMod-5.0.8-test7-Bravo",
        screenshots:
        [
        "http://www.droidaftermarket.com/koush//motorola/sholes/screenshot.png",
        "http://www.droidaftermarket.com/koush//motorola/sholes/screenshot2.png"
        ],
        urls:
        [
        "http://benocharm.lensworks.org/update-cm-5.0.8-bravo-test7-signed.zip"
        ],
        addons:
        [
        {
            name: "Google Apps",
            urls:
            [
            "http://www.droidaftermarket.com/koush//common/gapps-EPE54B-signed.zip",
            "http://droidk.macleodweb.net//common/gapps-EPE54B-signed.zip",
            "http://android.antbox.org/koush//common/gapps-EPE54B-signed.zip",
            "http://www.thekilpatrickproject.com/downloads/koush//common/gapps-EPE54B-signed.zip",
            "http://www.clockworkmod.com/download//common/gapps-EPE54B-signed.zip",
            "http://koush.tandtgaming.com//common/gapps-EPE54B-signed.zip"
            ]
        }
        ]
    },


    // ==== Google Apps ====
    {
        name: "Google Apps (Froyo)",
        summary: "Google Add-On",
        device: "passion",
        url: "http://kanged.net/mirror/gapps/gapps-hdpi-FRF91-2-signed.zip"
    },
    {
        name: "Google Apps (Froyo)",
        summary: "Google Add-On",
        device: "sholes",
        url: "http://kanged.net/mirror/gapps/gapps-hdpi-FRF91-2-signed.zip"
    },
    {
        name: "Google Apps (Froyo)",
        summary: "Google Add-On",
        device: "inc",
        url: "http://kanged.net/mirror/gapps/gapps-hdpi-FRF91-2-signed.zip"
    },

    {
        name: "Google Apps (Eclair)",
        summary: "Google Add-On",
        device: "passion",
        file: "common/gapps-passion-EPF30-signed.zip"
    },
    {
        name: "Google Apps (Eclair)",
        summary: "Google Add-On",
        device: "sholes",
        file: "common/gapps-passion-EPF30-signed.zip"
    },
    {
        name: "Google Apps (Eclair)",
        summary: "Google Add-On",
        device: "inc",
        file: "common/gapps-passion-EPF30-signed.zip"
    },
    {
        name: "Google Apps",
        summary: "Google Add-On",
        device: "magic",
        file: "/common/gapps-ds-ERE36B-signed.zip"
    },
    {
        name: "Google Apps",
        summary: "Google Add-On",
        device: "sapphire",
        file: "/common/gapps-ds-ERE36B-signed.zip"
    },
    {
        name: "Google Apps",
        summary: "Google Add-On",
        device: "dream",
        file: "/common/gapps-ds-ERE36B-signed.zip"
    }
    ]
}
