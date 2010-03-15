{
  roms: 
  [
    {
      name: "CyanogenMod 5.0.4.2",
      device: "sholes",
      url: "http://clockworkmod.s3.amazonaws.com/motorola/sholes/cyanogen_sholes-ota-eng.koush_5.0.4.2.zip",
      incremental: 5042,
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
    },
    {
      name: "CyanogenMod 5.0.4.1",
      device: "passion",
      url: "http://n0rp.chemlab.org/android/nexus/update-cm-5.0.4.1-N1-signed.zip",
      incremental: 5041
    }
  ]
}