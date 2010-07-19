{
    // The version of the manifest, so ROM Manager knows how to load it
    version: 1,
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
        name: "CyanogenMod 6.0.0 test2",
        summary: "Broken Camera",
        device: "inc",
        url: "http://koush.tandtgaming.com//test/update-cm-6.0.0-Inc-test2-signed.zip",
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
        name: "CyanogenMod 6.0.0 test1",
        summary: "Broken Camera",
        device: "inc",
        url: "http://koush.tandtgaming.com//test/update-cm-6.0.0-Inc-test1-signed.zip",
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
    }
    ]
}