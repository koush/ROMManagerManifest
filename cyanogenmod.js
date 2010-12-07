{
    // The version of the manifest, so ROM Manager knows how to load it
    version: 1,
    homepage: "http://www.cyanogenmod.com/",
    donate: "https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=3283920",
    mirrors:
    [
    "http://droidk.macleod-web.net/",
    "http://android.antbox.org/koush/",
    "http://www.thekilpatrickproject.com/downloads/koush/",
    "http://www.clockworkmod.com/download/",
    "http://koush.tandtgaming.com/",
    "http://koush.droid.co"
    ],

    // Your list of ROMs
    roms:
    [
    // ===== HTC Vision (G2) ====
    {
        name: "CyanogenMod 6.1",
        summary: "Stable Release",
        device: "vision",
        product: "CyanogenMod",
        incremental: 0006,
        modversion: "CyanogenMod-6.1.0-G2",
        url: "http://mirror.teamdouche.net/get/vision/update-cm-6.1.0-vision-signed.zip",
        screenshots:
        [
        "http://koush.tandtgaming.com//motorola/sholes/screeshot.png",
        "http://koush.tandtgaming.com//motorola/sholes/screenshot2.png"
        ],
        addons:
        [
        {
            name: "Google Apps",
            url: "http://android.d3xt3r01.tk/cyanogen/gapps/gapps-hdpi-20101114-signed.zip"
        }
        ]
    },
    {
        name: "CyanogenMod 6.1 RC4",
        summary: "Release Candidate",
        device: "vision",
        product: "CyanogenModRC",
        incremental: 0005,
        modversion: "CyanogenMod-6.1.0-RC4-G2",
        url: "http://mirror.teamdouche.net/get/vision/update-cm-6.1.0-RC4-vision-signed.zip",
        screenshots:
        [
        "http://koush.tandtgaming.com//motorola/sholes/screeshot.png",
        "http://koush.tandtgaming.com//motorola/sholes/screenshot2.png"
        ],
        addons:
        [
        {
            name: "Google Apps",
            url: "http://android.d3xt3r01.tk/cyanogen/gapps/gapps-hdpi-20101114-signed.zip"
        }
        ]
    },
    {
        name: "CyanogenMod 6.1 RC3",
        summary: "Release Candidate",
        device: "vision",
        product: "CyanogenModRC",
        incremental: 0004,
        modversion: "CyanogenMod-6.1.0-RC3-G2",
        url: "http://mirror.teamdouche.net/get/vision/update-cm-6.1.0-RC3-vision-signed.zip",
        screenshots:
        [
        "http://koush.tandtgaming.com//motorola/sholes/screeshot.png",
        "http://koush.tandtgaming.com//motorola/sholes/screenshot2.png"
        ],
        addons:
        [
        {
            name: "Google Apps",
            url: "http://android.d3xt3r01.tk/cyanogen/gapps/gapps-hdpi-20101114-signed.zip"
        }
        ]
    },
    {
        name: "CyanogenMod 6.1 RC2",
        summary: "Release Candidate",
        device: "vision",
        product: "CyanogenModRC",
        incremental: 0003,
        modversion: "CyanogenMod-6.1.0-RC2-G2",
        url: "http://mirror.teamdouche.net/get/vision/update-cm-6.1.0-RC2-vision-signed.zip",
        screenshots:
        [
        "http://koush.tandtgaming.com//motorola/sholes/screeshot.png",
        "http://koush.tandtgaming.com//motorola/sholes/screenshot2.png"
        ],
        addons:
        [
        {
            name: "Google Apps",
            url: "http://android.d3xt3r01.tk/cyanogen/gapps/gapps-hdpi-20101114-signed.zip"
        }
        ]
    },
    {
        name: "CyanogenMod 6.1 RC1",
        summary: "Release Candidate",
        device: "vision",
        product: "CyanogenModRC",
        incremental: 0002,
        modversion: "CyanogenMod-6.1.0-RC1-G2",
        url: "http://mirror.teamdouche.net/get/vision/update-cm-6.1.0-RC1-vision-signed.zip",
        screenshots:
        [
        "http://koush.tandtgaming.com//motorola/sholes/screeshot.png",
        "http://koush.tandtgaming.com//motorola/sholes/screenshot2.png"
        ],
        addons:
        [
        {
            name: "Google Apps",
            url: "http://android.d3xt3r01.tk/cyanogen/gapps/gapps-hdpi-20101114-signed.zip"
        }
        ]
    },

    {
        name: "Vision-Baconbits 0.1",
        summary: "Baconbits Addon 0.1",
        device: "vision",
        product: "Baconbits",
        incremental: 0001,
        modversion: "CyanogenMod-Baconbits .01",
        url: "http://android.chemlab.org/android/vision/vision-baconbits.zip"
    },
    // =====HTC Incredible=====
    {
        name: "CyanogenMod 6.1 RC2",
        summary: "Release Candidate",
        device: "inc",
        product: "CyanogenModRC",
        incremental: 6101,
        modversion: "CyanogenMod-6.1.0-RC2-Inc",
        file: "htc/inc/update-cm-6.1.0-RC2-Inc-signed.zip",
        screenshots:
        [
        "http://koush.tandtgaming.com//motorola/sholes/screeshot.png",
        "http://koush.tandtgaming.com//motorola/sholes/screenshot2.png"
        ],
        addons:
        [
        {
            name: "Google Apps",
            file: "google/gapps-hdpi-20100930-signed.zip"
        }
        ]
    },
    {
        name: "CyanogenMod 6.1 RC1",
        summary: "Release Candidate",
        device: "inc",
        product: "CyanogenModRC",
        incremental: 6100,
        modversion: "CyanogenMod-6.1.0-RC1-Inc",
        file: "htc/inc/update-cm-6.1.0-RC1-Inc-signed.zip",
        screenshots:
        [
        "http://koush.tandtgaming.com//motorola/sholes/screeshot.png",
        "http://koush.tandtgaming.com//motorola/sholes/screenshot2.png"
        ],
        addons:
        [
        {
            name: "Google Apps",
            file: "google/gapps-hdpi-20100930-signed.zip"
        }
        ]
    },
    {
        name: "CyanogenMod 6.0.2",
        summary: "Stable Release",
        device: "inc",
        product: "CyanogenMod",
        incremental: 6020,
        modversion: "CyanogenMod-6.0.2-Inc",
        file: "htc/inc/update-cm-6.0.2-Inc-signed.zip",
        screenshots:
        [
        "http://koush.tandtgaming.com//motorola/sholes/screeshot.png",
        "http://koush.tandtgaming.com//motorola/sholes/screenshot2.png"
        ],
        addons:
        [
        {
            name: "Google Apps",
            file: "google/gapps-hdpi-20100930-signed.zip"
        }
        ]
    },
    {
        name: "CyanogenMod 6.0.1",
        summary: "Stable Release",
        device: "inc",
        product: "CyanogenMod",
        incremental: 6010,
        modversion: "CyanogenMod-6.0.1-Inc",
        file: "htc/inc/update-cm-6.0.1-Inc-signed.zip",
        screenshots:
        [
        "http://koush.tandtgaming.com//motorola/sholes/screeshot.png",
        "http://koush.tandtgaming.com//motorola/sholes/screenshot2.png"
        ],
        addons:
        [
        {
            name: "Google Apps",
            file: "google/gapps-hdpi-20100930-signed.zip"
        }
        ]
    },
    {
        name: "CyanogenMod 6.0.0",
        summary: "Stable Release",
        device: "inc",
        product: "CyanogenMod",
        incremental: 6000,
        modversion: "CyanogenMod-6.0.0-Inc",
        file: "htc/inc/update-cm-6.0.0-Inc-signed.zip",
        screenshots:
        [
        "http://koush.tandtgaming.com//motorola/sholes/screeshot.png",
        "http://koush.tandtgaming.com//motorola/sholes/screenshot2.png"
        ],
        addons:
        [
        {
            name: "Google Apps",
            file: "google/gapps-hdpi-20100930-signed.zip"
        }
        ]
    },
    {
        name: "CyanogenMod 6.0.0-RC3",
        summary: "Release Candidate 3",
        device: "inc",
        product: "CyanogenMod",
        incremental: 0,
        modversion: "CyanogenMod-6.0.0-Inc-RC3",
        file: "htc/inc/update-cm-6.0.0-Inc-RC3-signed.zip",
        screenshots:
        [
        "http://koush.tandtgaming.com//motorola/sholes/screeshot.png",
        "http://koush.tandtgaming.com//motorola/sholes/screenshot2.png"
        ],
        addons:
        [
        {
            name: "Google Apps",
            file: "google/gapps-hdpi-20100930-signed.zip"
        }
        ]
    },

    //  =====Motorola Droid=====
    {
        name: "CyanogenMod 6.1.0",
        summary: "Stable Release",
        device: "sholes",
        product: "CyanogenMod",
        incremental: 6105,
        modversion: "CyanogenMod-6.1.0-Droid",
        url: "http://mirror.teamdouche.net/get/sholes/update-cm-6.1.0-Droid-signed.zip",
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
            name: "Google Apps - 11-14-2010",
            url: "http://android.d3xt3r01.tk/cyanogen/gapps/gapps-hdpi-20101114-signed.zip"
        }
        ]
    },
    {
        name: "CyanogenMod 6.0.0",
        summary: "Stable Release",
        device: "sholes",
        product: "CyanogenMod",
        incremental: 6000,
        modversion: "CyanogenMod-6.0.0-Droid",
        url: "http://mirror.teamdouche.net/get/sholes/update-cm-6.0.0-Droid-signed.zip",
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
            file: "google/gapps-hdpi-20100930-signed.zip"
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

    // =====HTC (EVO 4G)====
    {
        name: "CyanogenMod 6.1.0",
        summary: "Stable Release",
        device: "supersonic",
        product: "CyanogenMod",
        incremental: 6102,
        modversion: "CyanogenMod-6.1.0-Supersonic",
        url: "http://mirror.teamdouche.net/get/supersonic/update-cm-6.1.0-Supersonic-signed.zip",
        addons:
        [
        {
            name: "Google Apps",
            file: "google/gapps-hdpi-20101114-signed.zip"
        }
        ]
    },
    {
        name: "CyanogenMod 6.1.0-RC2",
        summary: "Release Candidate",
        device: "supersonic",
        product: "CyanogenMod",
        incremental: 6101,
        modversion: "CyanogenMod-6.1.0-RC2-Supersonic",
        url: "http://mirror.teamdouche.net/get/supersonic/update-cm-6.1.0-RC2-Supersonic-signed.zip",
        addons:
        [
        {
            name: "Google Apps",
            file: "google/gapps-hdpi-20100930-signed.zip"
        }
        ]
    },

    {
        name: "CyanogenMod 6.1.0-RC1",
        summary: "Release Candidate",
        device: "supersonic",
        product: "CyanogenMod",
        incremental: 6100,
        modversion: "CyanogenMod-6.1.0-RC1-Supersonic",
        url: "http://mirror.teamdouche.net/get/supersonic/update-cm-6.1.0-RC1-Supersonic-signed.zip",
        addons:
        [
        {
            name: "Google Apps",
            file: "google/gapps-hdpi-20100930-signed.zip"
        }
        ]
    },
    {
        name: "CyanogenMod 6.0.0",
        summary: "Stable Release",
        device: "supersonic",
        product: "CyanogenMod",
        incremental: 6000,
        modversion: "CyanogenMod-6.0.0-Supersonic",
        url: "http://mirror.teamdouche.net/get/supersonic/update-cm-6.0.0-Supersonic-signed.zip",
        addons:
        [
        {
            name: "Google Apps",
            file: "google/gapps-hdpi-20100930-signed.zip"
        }
        ]
    },
    {
        name: "CyanogenMod 6.0.0-RC2",
        summary: "Release Candidate 2",
        device: "supersonic",
        product: "CyanogenMod",
        incremental: 0,
        modversion: "CyanogenMod-6.0.0-Supersonic-RC2",
        url: "http://mirror.teamdouche.net/get/supersonic/update-cm-6.0.0-Supersonic-RC2-signed.zip",
        addons:
        [
        {
            name: "Google Apps",
            file: "google/gapps-hdpi-20100930-signed.zip"
        }
        ]
    },

    // =====Google Nexus One====
    {
        name: "CyanogenMod 6.1.0",
        summary: "Stable Release",
        device: "passion",
        product: "CyanogenMod",
        incremental: 6102,
        modversion: "CyanogenMod-6.1.0-N1",
        url: "http://mirror.teamdouche.net/get/passion/update-cm-6.1.0-N1-signed.zip",
        addons:
        [
        {
            name: "Google Apps",
            file: "google/gapps-hdpi-20101114-signed.zip"
        }
        ]
    },

    {
        name: "CyanogenMod 6.1.0-RC2",
        summary: "Release Candidate 2",
        device: "passion",
        product: "CyanogenMod",
        incremental: 6101,
        modversion: "CyanogenMod-6.0.0-RC2-N1",
        url: "http://mirror.teamdouche.net/get/passion/update-cm-6.1.0-RC2-N1-signed.zip",
        addons:
        [
        {
            name: "Google Apps",
            file: "google/gapps-hdpi-20100930-signed.zip"
        }
        ]
    },
    {
        name: "CyanogenMod 6.1.0-RC1",
        summary: "Release Candidate 1",
        device: "passion",
        product: "CyanogenMod",
        incremental: 6100,
        modversion: "CyanogenMod-6.0.0-RC1-N1",
        url: "http://mirror.teamdouche.net/get/passion/update-cm-6.1.0-RC1-N1-signed.zip",
        addons:
        [
        {
            name: "Google Apps",
            file: "google/gapps-hdpi-20100930-signed.zip"
        }
        ]
    },
    {
        name: "CyanogenMod 6.0.0",
        summary: "Stable Release",
        device: "passion",
        product: "CyanogenMod",
        incremental: 6000,
        modversion: "CyanogenMod-6.0.0-N1",
        url: "http://mirror.teamdouche.net/get/passion/update-cm-6.0.0-N1-signed.zip",
        addons:
        [
        {
            name: "Google Apps",
            file: "google/gapps-hdpi-20100930-signed.zip"
        }
        ]
    },
    {
        name: "CyanogenMod 6.0.0-RC3",
        summary: "Release Candidate 3",
        device: "passion",
        product: "CyanogenMod",
        incremental: 0,
        modversion: "CyanogenMod-6.0.0-N1-RC3",
        url: "http://mirror.teamdouche.net/get/passion/update-cm-6.0.0-N1-RC3-signed.zip",
        addons:
        [
        {
            name: "Google Apps",
            file: "google/gapps-hdpi-20100930-signed.zip"
        }
        ]
    },
    {
        name: "CyanogenMod 6.0.0-RC2",
        summary: "Release Candidate 2",
        device: "passion",
        product: "CyanogenMod",
        incremental: 0,
        modversion: "CyanogenMod-6.0.0-N1-RC2",
        url: "http://mirror.teamdouche.net/get/passion/update-cm-6.0.0-N1-RC2-signed.zip",
        addons:
        [
        {
            name: "Google Apps",
            file: "google/gapps-hdpi-20100930-signed.zip"
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
            url: "http://briancrook.ca/android/nexus/gapps/gapps-passion-EPF30-signed.zip"
        }
        ]
    },

    // =====G1=====
    {
        name: "CyanogenMod 6.1.0",
        summary: "Stable Release",
        device: "dream",
        product: "CyanogenMod",
        incremental: 6101,
        modversion: "CyanogenMod-6.1.0-DS",
        urls:
        [
        "http://mirror.teamdouche.net/get/dream_sapphire/update-cm-6.1.0-DS-signed.zip"
        ],
        addons:
        [
        {
            name: "Google Apps",
            url: "http://android.d3xt3r01.tk/cyanogen/gapps/gapps-mdpi-tiny-20101020-signed.zip"
        }
        ]
    },
    {
        name: "CyanogenMod 6.1.0-RC1",
        summary: "Release Candidate 1",
        device: "dream",
        product: "CyanogenMod",
        incremental: 6100,
        modversion: "CyanogenMod-6.1.0-RC1-DS",
        urls:
        [
        "http://mirror.teamdouche.net/get/dream_sapphire/update-cm-6.1.0-RC1-DS-signed.zip"
        ],
        addons:
        [
        {
            name: "Google Apps",
            url: "http://android.d3xt3r01.tk/cyanogen/gapps/gapps-mdpi-tiny-20101020-signed.zip"
        }
        ]
    },
    {
        name: "CyanogenMod 6.0.0",
        summary: "Stable Release",
        device: "dream",
        product: "CyanogenMod",
        incremental: 6000,
        modversion: "CyanogenMod-6.0.0-DS",
        urls:
        [
        "http://mirror.teamdouche.net/get/dream_sapphire/update-cm-6.0.0-DS-signed.zip"
        ],
        addons:
        [
        {
            name: "Google Apps",
            url: "http://android.d3xt3r01.tk/cyanogen/gapps/gapps-mdpi-tiny-20101020-signed.zip"
        }
        ]
    },
    {
        name: "CyanogenMod 6.0.0-RC3",
        summary: "Release Candidate 3",
        device: "dream",
        product: "CyanogenMod",
        incremental: 0,
        modversion: "CyanogenMod-6.0.0-DS-RC3",
        urls:
        [
        "http://mirror.teamdouche.net/get/dream_sapphire/update-cm-6.0.0-DS-RC3-signed.zip"
        ],
        addons:
        [
        {
            name: "Google Apps",
            url: "http://android.d3xt3r01.tk/cyanogen/gapps/gapps-mdpi-tiny-20101020-signed.zip"
        }
        ]
    },

    {
        name: "CyanogenMod 6.0.0-RC2",
        summary: "Release Candidate 2",
        device: "dream",
        product: "CyanogenMod",
        incremental: 0,
        modversion: "CyanogenMod-6.0.0-DS-RC2",
        url: "http://mirror.teamdouche.net/get/dream_sapphire/update-cm-6.0.0-DS-RC2-signed.zip",
        addons:
        [
        {
            name: "Google Apps",
            url: "http://android.d3xt3r01.tk/cyanogen/gapps/gapps-mdpi-tiny-20101020-signed.zip"
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

    // =====32B=====
    {
        name: "CyanogenMod 6.1.0",
        summary: "Stable Release",
        device: "sapphire",
        product: "CyanogenMod",
        incremental: 6101,
        modversion: "CyanogenMod-6.1.0-DS",
        urls:
        [
        "http://mirror.teamdouche.net/get/dream_sapphire/update-cm-6.1.0-DS-signed.zip"
        ],
        addons:
        [
        {
            name: "Google Apps",
            url: "http://android.d3xt3r01.tk/cyanogen/gapps/gapps-mdpi-tiny-20101020-signed.zip"
        }
        ]
    },

    {
        name: "CyanogenMod 6.1.0-RC1",
        summary: "Release Candidate 1",
        device: "sapphire",
        product: "CyanogenMod",
        incremental: 6100,
        modversion: "CyanogenMod-6.1.0-RC1-DS",
        urls:
        [
        "http://mirror.teamdouche.net/get/dream_sapphire/update-cm-6.1.0-RC1-DS-signed.zip"
        ],
        addons:
        [
        {
            name: "Google Apps",
            url: "http://android.d3xt3r01.tk/cyanogen/gapps/gapps-mdpi-tiny-20101020-signed.zip"
        }
        ]
    },
    {
        name: "CyanogenMod 6.0.0",
        summary: "Stable Release",
        device: "sapphire",
        product: "CyanogenMod",
        incremental: 6000,
        modversion: "CyanogenMod-6.0.0-DS",
        url: "http://mirror.teamdouche.net/get/dream_sapphire/update-cm-6.0.0-DS-signed.zip",
        addons:
        [
        {
            name: "Google Apps",
            url: "http://android.d3xt3r01.tk/cyanogen/gapps/gapps-mdpi-tiny-20101020-signed.zip"
        }
        ]
    },
    {
        name: "CyanogenMod 6.0.0-RC3",
        summary: "Release Candidate 3",
        device: "sapphire",
        product: "CyanogenMod",
        incremental: 0,
        modversion: "CyanogenMod-6.0.0-DS-RC3",
        url: "http://mirror.teamdouche.net/get/dream_sapphire/update-cm-6.0.0-DS-RC3-signed.zip",
        addons:
        [
        {
            name: "Google Apps",
            url: "http://android.d3xt3r01.tk/cyanogen/gapps/gapps-mdpi-tiny-20101020-signed.zip"
        }
        ]
    },

    {
        name: "CyanogenMod 6.0.0-RC2",
        summary: "Release Candidate 2",
        device: "sapphire",
        product: "CyanogenMod",
        incremental: 0,
        modversion: "CyanogenMod-6.0.0-DS-RC2",
        url: "http://mirror.teamdouche.net/get/dream_sapphire/update-cm-6.0.0-DS-RC2-signed.zip",
        addons:
        [
        {
            name: "Google Apps",
            url: "http://android.d3xt3r01.tk/cyanogen/gapps/gapps-mdpi-tiny-20101020-signed.zip"
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

    // ===== HTC Desire HD =====
    {
        name: "CyanogenMod 6.1.0-RC2",
        summary: "Release Candidate 2",
        device: "ace",
        product: "CyanogenMod",
        incremental: 6102,
        modversion: "CyanogenMod-6.1.0-DesireHD-RC2",
        url: "http://android.d3xt3r01.tk/cyanogen/ace/update-cm-6.1.0-RC2-DesireHD-signed.zip",
        screenshots:
        [
        "http://koush.tandtgaming.com//motorola/sholes/screeshot.png",
        "http://koush.tandtgaming.com//motorola/sholes/screenshot2.png"
        ],
        addons:
        [
        {
            name: "Google Apps",
            url: "http://android.d3xt3r01.tk/cyanogen/gapps/gapps-hdpi-20101114-signed.zip"
        }
        ]
    },
    {
        name: "CyanogenMod 6.1.0-RC1",
        summary: "Release Candidate 1",
        device: "ace",
        product: "CyanogenMod",
        incremental: 6100,
        modversion: "CyanogenMod-6.1.0-DesireHD-RC1",
        url: "http://android.d3xt3r01.tk/cyanogen/ace/update-cm-6.1.0-RC1-DesireHD-signed.zip",
        screenshots:
        [
        "http://koush.tandtgaming.com//motorola/sholes/screeshot.png",
        "http://koush.tandtgaming.com//motorola/sholes/screenshot2.png"
        ],
        addons:
        [
        {
            name: "Google Apps",
            url: "http://android.d3xt3r01.tk/cyanogen/gapps/gapps-hdpi-20101114-signed.zip"
        }
        ]
    },

    // ===== HTC Desire GSM =====
    {
        name: "CyanogenMod 6.1.0",
        summary: "Stable Release",
        device: "bravo",
        product: "CyanogenMod",
        incremental: 6103,
        modversion: "CyanogenMod-6.1.0-Bravo",
        url: "http://mirror.teamdouche.net/get/bravo/update-cm-6.1.0-Desire-signed.zip",
        screenshots:
        [
        "http://koush.tandtgaming.com//motorola/sholes/screeshot.png",
        "http://koush.tandtgaming.com//motorola/sholes/screenshot2.png"
        ],
        addons:
        [
        {
            name: "Google Apps",
            url: "http://android.d3xt3r01.tk/cyanogen/gapps/gapps-hdpi-20101114-signed.zip"
        }
        ]
    },
    {
        name: "CyanogenMod 6.1.0-RC2",
        summary: "Release Candidate 2",
        device: "bravo",
        product: "CyanogenMod",
        incremental: 6102,
        modversion: "CyanogenMod-6.1.0-Bravo-RC2",
        url: "http://android.d3xt3r01.tk/cyanogen/bravo/update-cm-6.1.0-RC2-Desire-signed.zip",
        screenshots:
        [
        "http://koush.tandtgaming.com//motorola/sholes/screeshot.png",
        "http://koush.tandtgaming.com//motorola/sholes/screenshot2.png"
        ],
        addons:
        [
        {
            name: "Google Apps",
            url: "http://android.d3xt3r01.tk/cyanogen/gapps/gapps-hdpi-20101114-signed.zip"
        }
        ]
    },
    {
        name: "CyanogenMod 6.1.0-RC1",
        summary: "Release Candidate 1",
        device: "bravo",
        product: "CyanogenMod",
        incremental: 6100,
        modversion: "CyanogenMod-6.1.0-Bravo-RC1",
        url: "http://mirror.teamdouche.net/get/bravo/update-cm-6.1.0-RC1-Desire-signed.zip",
        screenshots:
        [
        "http://koush.tandtgaming.com//motorola/sholes/screeshot.png",
        "http://koush.tandtgaming.com//motorola/sholes/screenshot2.png"
        ],
        addons:
        [
        {
            name: "Google Apps",
            file: "google/gapps-hdpi-20100930-signed.zip"
        }
        ]
    },
    {
        name: "CyanogenMod 6.0.2",
        summary: "Stable Release",
        device: "bravo",
        product: "CyanogenMod",
        incremental: 6020,
        modversion: "CyanogenMod-6.0.2-Bravo",
        url: "http://mirror.teamdouche.net/get/bravo/update-cm-6.0.2-Desire-signed.zip",
        screenshots:
        [
        "http://koush.tandtgaming.com//motorola/sholes/screeshot.png",
        "http://koush.tandtgaming.com//motorola/sholes/screenshot2.png"
        ],
        addons:
        [
        {
            name: "Google Apps",
            file: "google/gapps-hdpi-20100930-signed.zip"
        }
        ]
    },
    {
        name: "CyanogenMod 6.0.1",
        summary: "Stable Release",
        device: "bravo",
        product: "CyanogenMod",
        incremental: 6010,
        modversion: "CyanogenMod-6.0.1-Bravo",
        url: "http://mirror.teamdouche.net/get/bravo/update-cm-6.0.1-Desire-signed.zip",
        screenshots:
        [
        "http://koush.tandtgaming.com//motorola/sholes/screeshot.png",
        "http://koush.tandtgaming.com//motorola/sholes/screenshot2.png"
        ],
        addons:
        [
        {
            name: "Google Apps",
            file: "google/gapps-hdpi-20100930-signed.zip"
        }
        ]
    },

    {
        name: "CyanogenMod 6.0.0",
        summary: "Stable Release",
        device: "bravo",
        product: "CyanogenMod",
        incremental: 6000,
        modversion: "CyanogenMod-6.0.0-Bravo",
        url: "http://mirror.jeago.com/bravo/stable/update-cm-6.0.0-Desire-signed.zip",
        screenshots:
        [
        "http://koush.tandtgaming.com//motorola/sholes/screeshot.png",
        "http://koush.tandtgaming.com//motorola/sholes/screenshot2.png"
        ],
        addons:
        [
        {
            name: "Google Apps",
            file: "google/gapps-hdpi-20100930-signed.zip"
        }
        ]
    },

    // ===== HTC Desire CDMA =====
    {
        name: "CyanogenMod 6.1.0",
        summary: "Stable Release",
        device: "bravoc",
        product: "CyanogenMod",
        incremental: 6103,
        modversion: "CyanogenMod-6.1.0-Bravoc",
        url: "http://mirror.teamdouche.net/get/bravoc/update-cm-6.1.0-BravoC-signed.zip",
        screenshots:
        [
        "http://koush.tandtgaming.com//motorola/sholes/screeshot.png",
        "http://koush.tandtgaming.com//motorola/sholes/screenshot2.png"
        ],
        addons:
        [
        {
            name: "Google Apps",
            url: "http://android.d3xt3r01.tk/cyanogen/gapps/gapps-hdpi-20101114-signed.zip"
        }
        ]
    },
    {
        name: "CyanogenMod 6.1.0-RC2",
        summary: "Release Candidate 2",
        device: "bravoc",
        product: "CyanogenMod",
        incremental: 6102,
        modversion: "CyanogenMod-6.1.0-Bravoc-RC2",
        url: "http://android.d3xt3r01.tk/cyanogen/bravoc/update-cm-6.1.0-RC2-BravoC-signed.zip",
        screenshots:
        [
        "http://koush.tandtgaming.com//motorola/sholes/screeshot.png",
        "http://koush.tandtgaming.com//motorola/sholes/screenshot2.png"
        ],
        addons:
        [
        {
            name: "Google Apps",
            url: "http://android.d3xt3r01.tk/cyanogen/gapps/gapps-hdpi-20101114-signed.zip"
        }
        ]
    },
    {
        name: "CyanogenMod 6.1.0-RC1",
        summary: "Release Candidate 1",
        device: "bravoc",
        product: "CyanogenMod",
        incremental: 6100,
        modversion: "CyanogenMod-6.1.0-Bravoc-RC1",
        url: "http://mirror.teamdouche.net/get/bravoc/update-cm-6.1.0-RC1-BravoC-signed.zip",
        screenshots:
        [
        "http://koush.tandtgaming.com//motorola/sholes/screeshot.png",
        "http://koush.tandtgaming.com//motorola/sholes/screenshot2.png"
        ],
        addons:
        [
        {
            name: "Google Apps",
            file: "google/gapps-hdpi-20100930-signed.zip"
        }
        ]
    },

    // ===== T-Mobile MyTouch Slide (espresso) ====
    {
        name: "CyanogenMod 6.1.0",
        summary: "Stable Release",
        device: "espresso",
        product: "CyanogenMod",
        incremental: 6104,
        modversion: "CyanogenMod-6.1.0-Slide",
        url: "http://mirror.teamdouche.net/get/espresso/update-cm-6.1.0-Slide-signed.zip",
        addons:
        [
        {
            name: "Google Apps",
            url: "http://www.tap3w0rm.com/hosted/android/gapps/gapps-mdpi-20101020-signed.zip"
        }
        ]
    },
    {
        name: "CyanogenMod 6.1.0-RC3",
        summary: "Release Candidate 3",
        device: "espresso",
        product: "CyanogenMod",
        incremental: 6103,
        modversion: "CyanogenMod-6.1.0-RC3-Slide",
        url: "http://mirror.teamdouche.net/get/espresso/update-cm-6.1.0-RC3-Slide-signed.zip",
        addons:
        [
        {
            name: "Google Apps",
            url: "http://www.tap3w0rm.com/hosted/android/gapps/gapps-mdpi-20101020-signed.zip"
        }
        ]
    },
    {
        name: "CyanogenMod 6.1.0-RC2",
        summary: "Release Candidate 2",
        device: "espresso",
        product: "CyanogenMod",
        incremental: 6102,
        modversion: "CyanogenMod-6.1.0-RC2-Slide",
        url: "http://mirror.teamdouche.net/get/espresso/update-cm-6.1.0-RC2-Slide-signed.zip",
        addons:
        [
        {
            name: "Google Apps",
            url: "http://www.tap3w0rm.com/hosted/android/gapps/gapps-mdpi-20101020-signed.zip"
        }
        ]
    },
    {
        name: "CyanogenMod 6.1.0-RC1",
        summary: "Release Candidate 1",
        device: "espresso",
        product: "CyanogenMod",
        incremental: 6100,
        modversion: "CyanogenMod-6.1.0-RC1-Slide",
        url: "http://mirror.teamdouche.net/get/espresso/update-cm-6.1.0-RC1-Slide-signed.zip",
        addons:
        [
        {
            name: "Google Apps",
            url: "http://www.tap3w0rm.com/hosted/android/gapps/gapps-mdpi-20101020-signed.zip"
        }
        ]
    },
    {
        name: "CyanogenMod 6.0.0",
        summary: "Stable Release",
        device: "espresso",
        product: "CyanogenMod",
        incremental: 6000,
        modversion: "CyanogenMod-6.0.0-Slide",
        url: "http://mirror.teamdouche.net/get/espresso/update-cm-6.0.0-Slide-signed.zip",
        addons:
        [
        {
            name: "Google Apps",
            url: "http://www.tap3w0rm.com/hosted/android/gapps/gapps-mdpi-20101020-signed.zip"
        }
        ]
    },

    // ===== Sprint Hero (heroc) ====
    {
        name: "CyanogenMod 6.1.0-RC1",
        summary: "Release Candidate 1",
        device: "heroc",
        product: "CyanogenMod",
        incremental: 6100,
        modversion: "CyanogenMod-6.1.0-Heroc-RC1",
        url: "http://mirror.teamdouche.net/get/heroc/update-cm-6.1.0-RC1-Heroc-signed.zip",
        addons:
        [
        {
            name: "Google Apps",
            url: "http://www.tap3w0rm.com/hosted/android/gapps/gapps-mdpi-20101020-signed.zip"
        }
        ]
    },
    // ===== Hero GSM (hero) ====
    {
        name: "CyanogenMod 6.1.0-RC1",
        summary: "Release Candidate 1",
        device: "hero",
        product: "CyanogenMod",
        incremental: 6100,
        modversion: "CyanogenMod-6.1.0-Hero-RC1",
        url: "http://mirror.teamdouche.net/get/hero/update-cm-6.1.0-RC1-Hero-signed.zip",
        addons:
        [
        {
            name: "Google Apps",
            url: "http://www.tap3w0rm.com/hosted/android/gapps/gapps-mdpi-20101020-signed.zip"
        }
        ]
    },

    // ===== HTC Aria (liberty) ====
    {
        name: "CyanogenMod 6.1.0",
        summary: "Stable Release",
        device: "liberty",
        product: "CyanogenMod",
        incremental: 6103,
        modversion: "CyanogenMod-6.1.0-liberty",
        url: "http://android.d3xt3r01.tk/cyanogen/liberty/update-cm-6.1.0-Liberty-signed.zip",
        addons:
        [
        {
            name: "Google Apps",
            url: "http://android.d3xt3r01.tk/cyanogen/gapps/gapps-mdpi-20101020-signed.zip"
        }
        ]
    },

    {
        name: "CyanogenMod 6.1.0-RC2",
        summary: "Release Canidate 2",
        device: "liberty",
        product: "CyanogenMod",
        incremental: 6102,
        modversion: "CyanogenMod-6.1.0-RC2-liberty",
        url: "http://android.d3xt3r01.tk/cyanogen/liberty/update-cm-6.1.0-RC2-Liberty-signed.zip",
        addons:
        [
        {
            name: "Google Apps",
            url: "http://android.d3xt3r01.tk/cyanogen/gapps/gapps-mdpi-20101020-signed.zip"
        }
        ]
    },

    // ===== HTC Wildfire  =====
    {
        name: "CyanogenMod 6.1.0-RC1",
        summary: "Release Candidate 1",
        device: "buzz",
        product: "CyanogenMod",
        incremental: 6100,
        modversion: "CyanogenMod-6.1.0-Buzz-RC1",
        url: "http://mirror.teamdouche.net/get/buzz/update-cm-6.1.0-RC1-Buzz-signed.zip",
        addons:
        [
        {
            name: "Google Apps",
            url: "http://android.d3xt3r01.tk/cyanogen/gapps/gapps-mdpi-20101020-signed.zip"
        }
        ]
    },

    // ===== Commtiva Z71 =====
    {
        name: "CyanogenMod 6.1.0",
        summary: "Stable Release",
        device: "z71",
        product: "CyanogenMod",
        incremental: 6105,
        modversion: "CyanogenMod-6.1.0-z71",
        url: "http://mirror.teamdouche.net/get/z71/update-cm-6.1.0-Z71-signed.zip",
        screenshots:
        [
        "http://dl.dropbox.com/u/10355648/mdpi-ss1.png",
        "http://dl.dropbox.com/u/10355648/mdpi-ss2.png"
        ],
        addons:
        [
        {
            name: "Google Apps",
            url: "http://android.d3xt3r01.tk/cyanogen/gapps/gapps-mdpi-20101020-signed.zip"
        }
        ]
    },
    {
        name: "CyanogenMod 6.1.0-RC4",
        summary: "Release Candidate 4",
        device: "z71",
        product: "CyanogenModRC",
        incremental: 6104,
        modversion: "CyanogenMod-6.1.0-z71-RC4",
        url: "http://dl.dropbox.com/u/10355648/update-cm-6.1.0-RC4-Z71-signed.zip",
        addons:
        [
        {
            name: "Google Apps",
            url: "http://android.d3xt3r01.tk/cyanogen/gapps/gapps-mdpi-20101020-signed.zip"
        }
        ]
    },

    // ===== HTC Legend =====
    {
        name: "CyanogenMod 6.1.0-RC2",
        summary: "Release Candidate 2",
        device: "legend",
        product: "CyanogenMod",
        incremental: 6102,
        modversion: "CyanogenMod-6.1.0-Legend-RC2",
        url: "http://www.cynicalpixels.com/cyanogenmod/legend/update-cm-6.1.0-RC2-Legend-signed.zip",
        addons:
        [
        {
            name: "Google Apps",
            url: "http://android.d3xt3r01.tk/cyanogen/gapps/gapps-mdpi-20101020-signed.zip"
        }
        ]
    },

    // ===== Geeksphone ONE =====
    {
        name: "CyanogenMod 6.1.0",
        summary: "Stable Release",
        device: "one",
        product: "CyanogenMod",
        incremental: 6102,
        modversion: "CyanogenMod-6.1.0-one",
        url: "http://mirror.teamdouche.net/get/one/update-cm-6.1.0-ONE-signed.zip",
        addons:
        [
        {
            name: "Google Apps",
            url: "http://android.d3xt3r01.tk/cyanogen/gapps/gapps-mdpi-tiny-20101020-signed.zip"
        }
        ]
    },
    {
        name: "CyanogenMod 6.1.0-RC1",
        summary: "Release Candidate 1",
        device: "one",
        product: "CyanogenModRC",
        incremental: 6101,
        modversion: "CyanogenMod-6.1.0-one-RC1",
        url: "http://dl.dropbox.com/u/10355648/update-cm-6.1.0-RC1-ONE-signed.zip",
        addons:
        [
        {
            name: "Google Apps",
            url: "http://android.d3xt3r01.tk/cyanogen/gapps/gapps-mdpi-tiny-20101020-signed.zip"
        }
        ]
    },

    // ==== Google Apps ====
    {
        name: "Google Apps (Froyo)",
        summary: "Google Add-On",
        device: "passion",
        file: "google/gapps-hdpi-20100930-signed.zip"
    },
    {
        name: "Google Apps (Froyo)",
        summary: "Google Add-On - 11-14-2010",
        device: "sholes",
        url: "http://android.d3xt3r01.tk/cyanogen/gapps/gapps-hdpi-20101114-signed.zip"
    },
    {
        name: "Google Apps (Froyo)",
        summary: "Google Add-On",
        device: "inc",
        file: "google/gapps-hdpi-20100930-signed.zip"
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
    }
    ]
}
