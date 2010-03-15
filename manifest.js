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
          url: "http://clockworkmod.s3.amazonaws.com/motorola/sholes/bekit-modules_0.7.zip"
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
      incremental: 5041,
      addons:
      [
        {
          name: "Google Apps",
          url: "http://clockworkmod.s3.amazonaws.com/common/gapps-passion-ERE36B-2-signed.zip"
        }
      ]
    }
  ]
}