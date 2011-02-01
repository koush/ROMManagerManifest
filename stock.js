{
    version: 1,

    mirrors:
    [
    "http://www.thekilpatrickproject.com/downloads/koush/",
    "http://www.clockworkmod.com/download/",
    "http://koush.tandtgaming.com/"
    ],

    roms:
    [
    {
        name: "Nexus S 2.3.1",
        summary: "Stable",
        device: "crespo",
        file: "samsung/crespo/android-2.3.1.zip"
    },
    {
        name: "Verizon Droid X 2.2",
        summary: "MUST HAVE 2.1 INSTALLED. Stable, stock, rooted",
        device: "droidx",
        file: "motorola/droidx/droidx_rooted_froyo.zip"
    },
    {
        name: "Verizon Droid 2.2 FRG01B",
        summary: "Stable, stock, odexed, unrooted/rooted choice",
        device: "sholes",
        file: "motorola/sholes/FRG01B.zip",
        addons:
        [
        {
            name: "Superuser 2.2",
            file: "recoveries/su-2.2-ef-signed.zip"
        }
        ]
    },
    {
        name: "C_01.43.01P Baseband",
        summary: "Experimental. MUST INSTALL C_01.41.00R Baseband FIRST.",
        device: "sholes",
        urls:
        [
        "http://www.droidaftermarket.com/koush//motorola/sholes/p3droid-baseband-update.zip",
        "http://droidk.macleod-web.net//motorola/sholes/p3droid-baseband-update.zip",
        "http://www.thekilpatrickproject.com/downloads/koush//motorola/sholes/p3droid-baseband-update.zip",
        "http://www.clockworkmod.com/download//motorola/sholes/p3droid-baseband-update.zip",
        "http://koush.tandtgaming.com//motorola/sholes/p3droid-baseband-update.zip"
        ]
    },
    {
        name: "C_01.41.00R Baseband",
        summary: "Experimental",
        device: "sholes",
        urls:
        [
        "http://www.droidaftermarket.com/koush//motorola/sholes/before-p3droid-baseband-update.zip",
        "http://droidk.macleod-web.net//motorola/sholes/before-p3droid-baseband-update.zip",
        "http://www.thekilpatrickproject.com/downloads/koush//motorola/sholes/before-p3droid-baseband-update.zip",
        "http://www.clockworkmod.com/download//motorola/sholes/before-p3droid-baseband-update.zip",
        "http://koush.tandtgaming.com//motorola/sholes/before-p3droid-baseband-update.zip"
        ]
    },
    {
        name: "Nexus One FRF91",
        summary: "Odexed (Rooted or stock options)",
        device: "passion",
        file: "/google/passion/passion-FRF91.zip",
        addons:
        [
        {
            name: "Rooted Boot Image",
            file: "google/passion/FRF91-rootboot.zip"
        },
        {
            name: "Superuser 2.2",
            file: "recoveries/su-2.2-ef-signed.zip"
        }
        ]
    },
    {
        name: "Nexus One ERE27",
        summary: "Unrooted, Odexed",
        device: "passion",
        file: "google/passion/update-nexusone-ERE27-signed.zip"
    },
    {
        name: "Verizon Droid 2.0.1 Stock",
        summary: "Odexed (Rooted or stock options)",
        device: "sholes",
        file: "motorola/sholes/sholes-2.0.1.zip",
        addons:
        [
        {
            name: "Superuser 2.2",
            file: "recoveries/su-2.2-ef-signed.zip"
        }
        ]
    },
    {
        name: "Tap 'n Tap build 3588",
        summary: "Stock Tap 'n Tap update without replacing recovery",
        device: "harmony",
        urls:
        [
        "http://dropbox.bekit.net/Android/gtablet/stock/update-smb_a1002-3588-user-no_recovery.zip"
        ]
    },
    {
        name: "Tap 'n Tap build 3389",
        summary: "Stock Tap 'n Tap update without replacing recovery",
        device: "harmony",
        urls:
        [
        "http://dropbox.bekit.net/Android/gtablet/stock/update-smb_a1002-3389-user-no_recovery.zip"
        ]
    }
    ]
}
    
