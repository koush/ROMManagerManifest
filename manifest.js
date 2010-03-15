{
  roms: 
  [
    {
      name: "CyanogenMod 5.0.4.2 for Droid",
      device: "sholes",
      url: "http://clockworkmod.s3.amazonaws.com/motorola/sholes/cyanogen_sholes-ota-eng.koush_5.0.4.2.zip"
      addons:
      [
        {
          name: "Modules",
          url: "http://dl.dropbox.com/u/1123576/Android/clockworkmod_bekit/bekit-modules.tar.gz"
        }
      ],
      choices:
      [
        {
          name: "kernel",
          options:
          [
            {
              name: "Overclocked",
              // This is the default
              url: ""
            },
            {
              name: "Stable",
              url: "http://clockworkmod.s3.amazonaws.com/motorola/sholes/cyanogen_sholes-ota-eng.koush_5.0.4.2.zip"
            }
          ]
        }
      ] 
    }
  ]
}