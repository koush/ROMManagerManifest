{
    roms:
    [
    {
        name: "CM 5.0.4.3 (Experimental)",
        device: "sholes",
        urls:
        [
        "http://clockworkmod.s3.amazonaws.com/motorola/sholes/cyanogen_sholes-ota-eng.koush_5.0.4.3.zip"
        ],
        incremental: 5041,
        addons:
        [
        {
            name: "Google Apps",
            urls:
            [
            "http://clockworkmod.s3.amazonaws.com/common/gapps-passion-ERE36B-2-signed.zip"
            ]
        },
        {
            name: "Modules",
            urls:
            [
            "http://clockworkmod.s3.amazonaws.com/motorola/sholes/bekit-modules_0.7.zip"
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
        name: "CyanogenMod 5.0.4.2",
        device: "sholes",
        urls:
        [
        "http://clockworkmod.s3.amazonaws.com/motorola/sholes/cyanogen_sholes-ota-eng.koush_5.0.4.2.zip"
        ],
        incremental: 5042,
        addons:
        [
        {
            name: "Modules",
            urls:
            [
            "http://clockworkmod.s3.amazonaws.com/motorola/sholes/bekit-modules_0.7.zip"
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
                "http://clockworkmod.s3.amazonaws.com/motorola/sholes/cyanogen_sholes-ota-eng.koush_5.0.4.2.zip"
                ]
            }
            ]
        }
        ]
    },
    {
        name: "CyanogenMod 5.0.4.1 (JIT)",
        device: "sholes",
        urls:
        [
        "http://clockworkmod.s3.amazonaws.com/motorola/sholes/cyanogen_sholes-ota-eng.koush_5.0.4.1.zip"
        ],
        incremental: 5042,
        addons:
        [
        {
            name: "Modules",
            urls:
            [
            "http://clockworkmod.s3.amazonaws.com/motorola/sholes/bekit-modules_0.7.zip"
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
                "http://clockworkmod.s3.amazonaws.com/motorola/sholes/cyanogen_sholes-ota-eng.koush_5.0.4.2.zip"
                ]
            }
            ]
        }
        ]
    },
    {
        name: "CyanogenMod 5.0.4.1",
        device: "passion",
        urls:
        [
        "http://n0rp.chemlab.org/android/nexus/update-cm-5.0.4.1-N1-signed.zip"
        ],
        incremental: 5041,
        addons:
        [
        {
            name: "Google Apps",
            urls:
            [
            "http://clockworkmod.s3.amazonaws.com/common/gapps-passion-ERE36B-2-signed.zip"
            ]
        }
        ]
    }
    ]
}