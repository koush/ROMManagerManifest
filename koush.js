{
    // The version of the manifest, so ROM Manager knows how to load it
    version: 1,
    mirrors:
    [
    "http://droidk.macleod-web.net/",
    "http://www.thekilpatrickproject.com/downloads/koush/",
    "http://www.clockworkmod.com/download/",
    "http://koush.tandtgaming.com/",
    "http://koush.droid.co"
    ],
    
    // Your list of ROMs
    roms:
    [
    {
        name: "CyanogenMod 7 Alpha",
        summary: "Test/Alpha",
        device: "crespo",
        urls:
        [
        "http://koush.tandtgaming.com//samsung/crespo/update-cm-7.0.0-RC0-NS-signed.zip",
        "http://koush.droid.co//samsung/crespo/update-cm-7.0.0-RC0-NS-signed.zip"
        ],
        addons:
        [
        {
            name: "Google Apps",
            urls:
            [
            "http://koush.tandtgaming.com//google/gapps-gb.zip",
            "http://koush.droid.co//google/gapps-gb.zip"
            ]
        }
        ]
    }
    ]
}
