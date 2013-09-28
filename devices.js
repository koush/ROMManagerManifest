{
  "owners": {
    "koush@clockworkmod.com": true,
    "keaneyw@gmail.com": true,
    "ferguson.david@gmail.com": true,
    "daniel.hillenbrand@codeworkx.de": true,
    "utkanos@gmail.com": true,
    "echen@cyngn.com": true,
    "arcee@cyanogenmod.com": true,
    "njgreb@gmail.com": true,
    "layhertony@gmail.com": true,
    "bigbeeshane@gmail.com": true,
    "playfulgod@gmail.com": true,
    "attn1.repo@gmail.com": true,
    "cvpcsm@gmail.com": true
  },
  "recovery_twrp_url": "http://download2.clockworkmod.com/twrp/openrecovery-twrp-%s-%s.img",
  "ad_network": "admob",
  "recovery_zip_url": "http://download2.clockworkmod.com/recoveries/recovery-clockwork-%s-%s.zip",
  "version": "2.5.0.1",
  "devices": [
    {
      "name": "Motorola Droid",
      "version": "2.5.0.1",
      "alternate_recovery": {
        "name": "SPRecovery 0.99.3b",
        "url": "http://koush.kanged.net/cm/recoveries/sprecovery.img",
        "clockwork": false
      },
      "key": "sholes",
      "init": "init.sholes.rc",
      "legacy_versions": [
        "3.1.0.2",
        "2.5.1.4",
        "2.5.1.3",
        "2.5.1.1",
        "2.5.0.1"
      ]
    },
    {
      "name": "HTC MyTouch 3G",
      "version": "2.5.0.7",
      "alternate_recovery": {
        "name": "RA Recovery v1.7.0G",
        "url": "http://files.androidspin.com/downloads.php?dir=amon_ra/RECOVERY/&file=recovery-RA-sapphire-v1.7.0G.img",
        "clockwork": false
      },
      "key": "sapphire",
      "init": "init.sapphire.rc",
      "legacy_versions": [
        "2.5.0.7",
        "2.5.1.4",
        "2.5.1.3",
        "2.5.1.1"
      ]
    },
    {
      "name": "HTC Magic",
      "version": "2.5.0.7",
      "alternate_recovery": {
        "name": "RA Recovery v1.7.0H",
        "url": "http://files.androidspin.com/downloads.php?dir=amon_ra/RECOVERY/&file=recovery-RA-sapphire-v1.7.0H.img",
        "clockwork": false
      },
      "key": "magic",
      "init": "init.sapphire.rc",
      "legacy_versions": [
        "2.5.0.7",
        "2.5.1.4",
        "2.5.1.3",
        "2.5.1.1"
      ]
    },
    {
      "name": "HTC G1/Dream",
      "version": "2.5.0.7",
      "alternate_recovery": {
        "name": "RA Recovery v1.7.0",
        "url": "http://files.androidspin.com/downloads.php?dir=amon_ra/RECOVERY/&file=recovery-RA-dream-v1.7.0.img",
        "clockwork": false
      },
      "key": "dream",
      "init": "init.trout.rc",
      "legacy_versions": [
        "2.5.0.7",
        "2.5.1.4",
        "2.5.1.3",
        "2.5.1.1"
      ]
    },
    {
      "name": "Google Nexus One",
      "version": "5.0.2.0",
      "alternate_recovery": {
        "name": "RA Recovery v2.2.1",
        "url": "http://files.androidspin.com/downloads.php?dir=amon_ra/RECOVERY/&file=recovery-RA-passion-v2.2.1.img",
        "clockwork": false
      },
      "lunch": "cyanogen_passion-eng",
      "key": "passion",
      "init": "init.mahimahi.rc",
      "legacy_versions": [
        "3.0.0.5",
        "2.5.1.4",
        "2.5.1.3",
        "2.5.1.1",
        "3.0.0.5",
        "5.0.0.1",
        "5.0.0.8",
        "5.0.1.0"
      ]
    },
    {
      "name": "HTC Hero (GSM)",
      "version": "2.5.0.7",
      "alternate_recovery": {
        "name": "RA Recovery v1.7.0.1",
        "url": "http://files.androidspin.com/downloads.php?dir=amon_ra/RECOVERY/&file=recovery-RA-hero-v1.7.0.1.img",
        "clockwork": false
      },
      "key": "hero",
      "init": "init.hero.rc",
      "legacy_versions": [
        "2.5.0.7",
        "2.5.1.4",
        "2.5.1.3",
        "2.5.1.1"
      ]
    },
    {
      "name": "HTC Hero (CDMA)",
      "version": "2.5.0.7",
      "alternate_recovery": {
        "name": "RA Recovery v1.6.2",
        "url": "http://www.androidspin.com/downloads.php?dir=amon_ra/RECOVERY/&file=recovery-RA-heroc-v1.6.2.img",
        "clockwork": false
      },
      "key": "heroc",
      "init": "init.heroc.rc",
      "legacy_versions": [
        "2.5.0.7",
        "2.5.1.4",
        "2.5.1.3",
        "2.5.1.1"
      ]
    },
    {
      "name": "HTC Evo",
      "touch_version": "5.8.0.1",
      "version": "5.0.2.2",
      "alternate_recovery": {
        "name": "RA Recovery v2.3",
        "url": "http://files.androidspin.com/downloads.php?dir=amon_ra/RECOVERY/&file=recovery-RA-supersonic-v2.3.img",
        "clockwork": false
      },
      "lunch": "cyanogen_supersonic-eng",
      "key": "supersonic",
      "init": "init.supersonic.rc",
      "legacy_versions": [
        "2.5.0.7",
        "3.0.0.5",
        "3.0.0.4",
        "3.0.0.3",
        "3.0.0.5",
        "5.0.0.0",
        "5.0.0.8",
        "5.0.1.0",
        "5.0.2.0",
        "5.0.2.2"
      ]
    },
    {
      "name": "HTC Legend",
      "readonly_recovery": true,
      "version": "5.0.2.0",
      "lunch": "cyanogen_legend-eng",
      "key": "legend",
      "init": "init.legend.rc",
      "legacy_versions": [
        "2.5.0.7",
        "2.5.1.4",
        "2.5.1.3",
        "2.5.1.1",
        "2.5.0.7",
        "5.0.0.1",
        "5.0.0.8",
        "5.0.1.0"
      ]
    },
    {
      "name": "HTC Desire",
      "touch_version": "5.8.0.2",
      "version": "5.0.2.0",
      "lunch": "cyanogen_bravo-eng",
      "key": "bravo",
      "init": "init.bravo.rc",
      "legacy_versions": [
        "2.5.0.7",
        "2.5.1.4",
        "2.5.1.3",
        "2.5.1.1",
        "2.5.0.7",
        "5.0.0.0",
        "5.0.0.8",
        "5.0.1.0"
      ]
    },
    {
      "name": "HTC Desire CDMA",
      "version": "5.0.2.0",
      "lunch": "cyanogen_bravoc-eng",
      "key": "bravoc",
      "init": "init.bravoc.rc",
      "legacy_versions": [
        "2.5.0.9",
        "2.5.1.4",
        "2.5.1.3",
        "2.5.1.1",
        "2.5.0.9",
        "5.0.0.1",
        "5.0.1.0"
      ]
    },
    {
      "name": "Huawei Pulse Mini",
      "version": "2.5.0.7",
      "key": "pulsemini",
      "init": "init.qcom.rc",
      "legacy_versions": [
        "2.5.0.7",
        "2.5.1.4",
        "2.5.1.3",
        "2.5.1.1"
      ]
    },
    {
      "name": "HTC Incredible (CDMA)",
      "version": "5.0.2.0",
      "alternate_recovery": {
        "name": "RA_GNM Recovery v3.02",
        "url": "http://dl.dropbox.com/u/12949506/RomManager/recovery-RA-inc-3.02.img",
        "clockwork": false
      },
      "lunch": "cyanogen_inc-eng",
      "key": "inc",
      "init": "init.inc.rc",
      "legacy_versions": [
        "3.0.0.8",
        "3.0.0.7",
        "3.0.0.6",
        "3.0.0.5",
        "3.0.0.8",
        "5.0.0.0",
        "5.0.0.1",
        "5.0.0.8",
        "5.0.1.0"
      ]
    },
    {
      "name": "HTC Aria",
      "readonly_recovery": true,
      "version": "2.5.0.7",
      "key": "liberty",
      "init": "init.liberty.rc",
      "legacy_versions": [
        "2.5.0.7",
        "2.5.1.4",
        "2.5.1.3",
        "2.5.1.1"
      ]
    },
    {
      "name": "Motorola Droid Eris",
      "readonly_recovery": true,
      "version": "2.5.0.7",
      "alternate_recovery": {
        "name": "RA Recovery v1.6.2",
        "url": "http://www.androidspin.com/downloads.php?dir=amon_ra/RECOVERY/&file=recovery-RA-eris-v1.6.2.img",
        "clockwork": false
      },
      "key": "desirec",
      "init": "init.desirec.rc",
      "legacy_versions": [
        "2.5.0.7",
        "2.5.1.4",
        "2.5.1.3",
        "2.5.1.1"
      ]
    },
    {
      "name": "HTC Buzz (Wildfire)",
      "readonly_recovery": true,
      "version": "5.0.2.0",
      "lunch": "cyanogen_buzz-eng",
      "key": "buzz",
      "init": "init.buzz.rc",
      "legacy_versions": [
        "3.0.0.6",
        "2.5.1.4",
        "2.5.1.3",
        "2.5.1.1",
        "2.5.0.7",
        "5.0.0.8",
        "5.0.1.0"
      ]
    },
    {
      "name": "Dell Streak",
      "version": "2.5.0.7",
      "key": "streak",
      "init": "init.qcom.rc",
      "legacy_versions": [
        "2.5.0.7",
        "2.5.1.4",
        "2.5.1.3",
        "2.5.1.1"
      ]
    },
    {
      "name": "HTC MyTouch Slide",
      "readonly_recovery": true,
      "version": "2.5.0.7",
      "key": "espresso",
      "init": "init.latte.rc",
      "legacy_versions": [
        "2.5.0.7",
        "2.5.1.4",
        "2.5.1.3",
        "2.5.1.1"
      ]
    },
    {
      "name": "Samsung GalaxyS i9000",
      "readonly_recovery": true,
      "version": "2.5.1.2",
      "key": "galaxys",
      "init": "lpm.rc",
      "legacy_versions": [
        "2.5.1.2",
        "2.5.1.4",
        "2.5.1.3",
        "2.5.1.1"
      ]
    },
    {
      "name": "Samsung GalaxyS Fascinate",
      "readonly_recovery": true,
      "version": "3.0.0.8",
      "key": "fascinate",
      "init": "init.smdkc110.rc",
      "legacy_versions": [
        "3.0.0.8",
        "2.5.1.4",
        "2.5.1.3",
        "2.5.1.1"
      ]
    },
    {
      "name": "Samsung GalaxyS Vibrant",
      "readonly_recovery": true,
      "version": "2.5.1.2",
      "key": "vibrant",
      "init": "init.smdkc110.rc",
      "legacy_versions": [
        "2.5.1.2",
        "2.5.1.4",
        "2.5.1.3",
        "2.5.1.1"
      ]
    },
    {
      "name": "Samsung GalaxyS Captivate",
      "readonly_recovery": true,
      "version": "2.5.1.2",
      "key": "captivate",
      "init": "init.smdkc110.rc",
      "legacy_versions": [
        "2.5.1.2",
        "2.5.1.4",
        "2.5.1.3",
        "2.5.1.1"
      ]
    },
    {
      "name": "Huawei Pulse",
      "version": "2.5.0.7",
      "key": "pulse",
      "init": "init.qcom.rc",
      "legacy_versions": [
        "2.5.0.7",
        "2.5.1.4",
        "2.5.1.3",
        "2.5.1.1"
      ]
    },
    {
      "name": "LG Ally",
      "version": "2.5.0.7",
      "alternate_recovery": {
        "name": "RA_GNM Recovery v2.2.2",
        "url": "http://dl.dropbox.com/u/12949506/RomManager/recovery-RA-aloha-2.2.2-GNM.img",
        "clockwork": false
      },
      "key": "aloha",
      "init": "init.aloha.rc",
      "legacy_versions": [
        "2.5.0.7",
        "2.5.1.4",
        "2.5.1.3",
        "2.5.1.1"
      ]
    },
    {
      "name": "Motorola Milestone",
      "readonly_recovery": true,
      "version": "3.1.0.2",
      "key": "milestone",
      "init": "init.mapphone_cdma.rc",
      "legacy_versions": [
        "2.5.0.7",
        "2.5.1.4",
        "2.5.1.3",
        "2.5.1.1",
        "2.5.0.7"
      ]
    },
    {
      "name": "Motorola Droid X",
      "readonly_recovery": true,
      "version": "5.0.2.0",
      "key": "droidx",
      "flash_recovery": "dd if=%s of=/preinstall/recovery/recovery.zip ; ",
      "init": "init.mapphone_cdma.rc",
      "legacy_versions": [
        "2.5.0.7"
      ],
      "reboot_recovery": "rm /cache/recovery/command ; echo 1 > /data/.recovery_mode ; sync ; reboot ;"
    },
    {
      "name": "Motorola Droid X (2nd-init)",
      "readonly_recovery": true,
      "version": "5.0.2.0",
      "lunch": "cyanogen_shadow-eng",
      "key": "shadow",
      "flash_recovery": "dd if=%s of=/preinstall/recovery/recovery.zip ; ",
      "init": "init.mapphone_cdma.rc",
      "legacy_versions": [
        "2.5.0.7"
      ],
      "reboot_recovery": "rm /cache/recovery/command ; echo 1 > /data/.recovery_mode ; sync ; reboot ;"
    },
    {
      "name": "Acer Liquid",
      "version": "2.5.1.0",
      "key": "salsa",
      "init": "init.salsa.rc",
      "legacy_versions": [
        "2.5.1.4",
        "2.5.1.3",
        "2.5.1.1",
        "2.5.1.0"
      ]
    },
    {
      "name": "Commtiva Z71 (Boston, Blaze, and more)",
      "version": "2.5.1.3",
      "key": "z71",
      "init": "init.qcom.rc",
      "legacy_versions": [
        "2.5.1.4",
        "2.5.1.3",
        "2.5.1.1",
        "2.5.1.0"
      ]
    },
    {
      "name": "HTC G2",
      "touch_version": "5.8.1.0",
      "version": "5.0.2.7",
      "lunch": "cyanogen_vision-eng",
      "key": "vision",
      "flash_recovery": "dd if=/dev/zero of=/dev/block/mmcblk0p21 bs=4096 ; dd if=%s of=/dev/block/mmcblk0p21 bs=4096 ; ",
      "init": "init.vision.rc",
      "legacy_versions": [
        "3.0.2.4",
        "3.0.0.5",
        "2.5.1.4",
        "2.5.1.3",
        "3.0.2.4",
        "5.0.0.1",
        "5.0.0.8",
        "5.0.1.0",
        "5.0.2.0",
        "5.0.2.6",
        "5.0.2.0"
      ]
    },
    {
      "name": "HTC MyTouch 4G",
      "touch_version": "5.8.1.0",
      "version": "5.0.2.0",
      "lunch": "cyanogen_glacier-eng",
      "key": "glacier",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p21 ; ",
      "init": "init.glacier.rc",
      "legacy_versions": [
        "3.0.2.4",
        "3.0.0.5",
        "2.5.1.4",
        "2.5.1.3",
        "3.0.2.4",
        "5.0.0.1",
        "5.0.0.8",
        "5.0.1.0"
      ]
    },
    {
      "name": "HTC Desire HD",
      "touch_version": "5.8.1.5",
      "version": "5.0.2.0",
      "lunch": "cyanogen_ace-eng",
      "key": "ace",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p21 ; ",
      "init": "init.spade.rc",
      "legacy_versions": [
        "3.0.2.5",
        "3.0.0.6",
        "3.0.0.5",
        "2.5.1.4",
        "3.0.2.5",
        "3.0.2.6",
        "5.0.0.1",
        "5.0.0.8",
        "5.0.1.0"
      ]
    },
    {
      "name": "Motorola Cliq",
      "touch_version": "5.8.1.0",
      "version": "5.0.2.0",
      "lunch": "cyanogen_morrison-eng",
      "key": "morrison",
      "init": "init.morrison.rc",
      "legacy_versions": [
        "2.5.1.2",
        "2.5.1.4",
        "2.5.1.3",
        "2.5.1.1",
        "2.5.1.2",
        "5.0.0.1",
        "5.0.0.1",
        "5.0.0.8",
        "5.0.1.0"
      ]
    },
    {
      "name": "Motorola Droid 2",
      "readonly_recovery": true,
      "version": "5.0.2.0",
      "lunch": "cyanogen_droid2-eng",
      "key": "droid2",
      "flash_recovery": "dd if=%s of=/preinstall/recovery/recovery.zip ; ",
      "init": "init.mapphone_cdma.rc",
      "legacy_versions": [
        "2.5.0.8"
      ],
      "reboot_recovery": "rm /cache/recovery/command ; echo 1 > /data/.recovery_mode ; sync ; reboot ;"
    },
    {
      "name": "Geeksphone ONE",
      "version": "2.5.1.3",
      "alternate_recovery": {
        "name": "ONE Recovery v1.6",
        "url": "http://dl.dropbox.com/u/10355648/recovery-ONE-1_6.img",
        "clockwork": false
      },
      "key": "one",
      "init": "init.qcom.rc",
      "legacy_versions": [
        "2.5.1.4",
        "2.5.1.3",
        "2.5.1.1",
        "2.5.1.0"
      ]
    },
    {
      "name": "Advent Vega",
      "version": "3.0.2.7",
      "key": "vega",
      "flash_recovery": "/data/data/com.koushikdutta.rommanager/files/tegra_flash_image recovery %s ; ",
      "init": "init_recovery.rc",
      "legacy_versions": [
        "2.5.1.4",
        "2.5.1.3",
        "2.5.1.1",
        "2.5.1.0",
        "2.5.1.4"
      ],
      "reboot_recovery": "echo start > /proc/ota ; "
    },
    {
      "name": "Samsung Galaxy Tab - ATT",
      "readonly_recovery": true,
      "version": "2.5.1.8",
      "key": "att_tab",
      "init": "init.smdkc110.rc",
      "legacy_versions": [
        "2.5.1.8",
        "2.5.1.4",
        "2.5.1.3",
        "2.5.1.1"
      ]
    },
    {
      "name": "Samsung Galaxy Tab (T-Mobile)",
      "readonly_recovery": true,
      "version": "2.5.1.8",
      "key": "tmobile_tab",
      "init": "init.smdkc110.rc",
      "legacy_versions": [
        "2.5.1.8",
        "2.5.1.4",
        "2.5.1.3",
        "2.5.1.1"
      ]
    },
    {
      "name": "Commtiva Link N700, Spice MI700, and more",
      "version": "2.5.1.2",
      "alternate_recovery": {
        "name": "MI700 Recovery v1.6",
        "url": "http://dl.dropbox.com/u/15816725/MI700-recovery-V1_3.img",
        "clockwork": false
      },
      "key": "FM6",
      "init": "init.qcom.rc",
      "legacy_versions": [
        "2.5.1.4",
        "2.5.1.3",
        "2.5.1.1",
        "2.5.1.0"
      ]
    },
    {
      "name": "Google Nexus S",
      "touch_version": "6.0.3.8",
      "version": "6.0.3.8",
      "lunch": "cm_crespo-userdebug",
      "key": "crespo",
      "init": "init.herring.rc",
      "legacy_versions": [
        "3.0.2.4",
        "3.0.0.5",
        "3.0.0.0",
        "2.5.1.8",
        "3.0.2.4",
        "5.0.0.0",
        "5.0.0.8",
        "5.0.1.0",
        "5.0.2.0",
        "6.0.0.6",
        "6.0.0.7",
        "6.0.0.7",
        "6.0.0.7",
        "6.0.0.7",
        "6.0.1.0",
        "6.0.2.5",
        "6.0.3.1",
        "6.0.3.3",
        "6.0.3.4",
        "6.0.3.6"
      ]
    },
    {
      "name": "Motorola Droid Pro",
      "readonly_recovery": true,
      "version": "2.5.0.8",
      "key": "droidpro",
      "init": "init. mapphone_cdma.rc",
      "legacy_versions": [
        "2.5.0.8"
      ]
    },
    {
      "name": "Huawei Ascend",
      "version": "3.0.0.5",
      "key": "ascend",
      "init": "init.qcom.rc",
      "legacy_versions": [
        "3.0.0.5",
        "3.0.0.4"
      ]
    },
    {
      "name": "ZTE Blade",
      "version": "5.0.2.0",
      "lunch": "cyanogen_blade-eng",
      "key": "blade",
      "init": "init.blade.rc",
      "legacy_versions": [
        "3.0.1.4",
        "3.0.0.6",
        "3.0.1.4",
        "3.0.2.6",
        "3.0.2.7",
        "5.0.0.1",
        "5.0.0.8",
        "5.0.1.0"
      ]
    },
    {
      "name": "HTC Click/Tattoo",
      "version": "5.0.2.0",
      "lunch": "cyanogen_click-eng",
      "key": "click",
      "init": "init.bahamas.rc",
      "legacy_versions": [
        "3.0.0.6",
        "3.0.0.6",
        "3.0.2.7",
        "5.0.0.8",
        "5.0.1.0"
      ]
    },
    {
      "name": "Elocity A7",
      "readonly_recovery": true,
      "version": "3.0.0.8",
      "key": "a7",
      "init": "init_recovery.rc",
      "legacy_versions": [
        "3.0.0.8"
      ]
    },
    {
      "name": "Geeksphone Zero",
      "version": "3.0.1.3",
      "key": "zero",
      "init": "init.zero.rc",
      "legacy_versions": [
        "3.0.1.3"
      ]
    },
    {
      "name": "HTC Evo Shift",
      "touch_version": "5.8.1.6",
      "version": "5.0.2.0",
      "lunch": "cyanogen_speedy-eng",
      "key": "speedy",
      "init": "init.speedy.rc",
      "legacy_versions": [
        "3.0.1.4",
        "3.0.1.3",
        "3.0.1.2",
        "3.0.1.1",
        "3.0.1.4",
        "3.0.2.8",
        "3.2.0.1"
      ]
    },
    {
      "name": "Samsung Captivate (MTD)",
      "officially_supported": false,
      "key": "captivatemtd",
      "init": "init.aries.rc",
      "legacy_versions": [

      ],
      "reboot_recovery": "echo 1 > /cache/.startrecovery ; sync ; reboot ;"
    },
    {
      "name": "Samsung Showcase (MTD)",
      "officially_supported": false,
      "key": "showcasemtd",
      "init": "init.aries.rc",
      "legacy_versions": [

      ],
      "reboot_recovery": "echo 1 > /cache/.startrecovery ; sync ; reboot ;"
    },
    {
      "name": "Samsung Mesmerize (MTD)",
      "officially_supported": false,
      "key": "mesmerizemtd",
      "init": "init.aries.rc",
      "legacy_versions": [

      ],
      "reboot_recovery": "echo 1 > /cache/.startrecovery ; sync ; reboot ;"
    },
    {
      "name": "Samsung Fascinate (MTD)",
      "officially_supported": false,
      "key": "fascinatemtd",
      "init": "init.aries.rc",
      "legacy_versions": [

      ],
      "reboot_recovery": "echo 1 > /cache/.startrecovery ; sync ; reboot ;"
    },
    {
      "name": "Samsung Vibrant (MTD)",
      "officially_supported": false,
      "key": "vibrantmtd",
      "init": "init.aries.rc",
      "legacy_versions": [

      ],
      "reboot_recovery": "echo 1 > /cache/.startrecovery ; sync ; reboot ;"
    },
    {
      "name": "Samsung GalaxyS i9000B (MTD)",
      "officially_supported": false,
      "key": "galaxysbmtd",
      "init": "init.aries.rc",
      "legacy_versions": [

      ],
      "reboot_recovery": "echo 1 > /cache/.startrecovery ; sync ; reboot ;"
    },
    {
      "name": "Samsung GalaxyS i9000 (MTD)",
      "officially_supported": false,
      "key": "galaxysmtd",
      "init": "init.aries.rc",
      "legacy_versions": [

      ],
      "reboot_recovery": "echo 1 > /cache/.startrecovery ; sync ; reboot ;"
    },
    {
      "name": "Samsung Epic4G",
      "readonly_recovery": true,
      "version": "5.0.2.7",
      "lunch": "full_epic4g-eng",
      "key": "epic4g",
      "init": "lpm.rc",
      "legacy_versions": [

      ]
    },
    {
      "name": "Dell Streak 7",
      "version": "3.0.2.0",
      "key": "streak7",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk3p1 ; ",
      "init": "init.tinyandroid.rc",
      "legacy_versions": [
        "3.0.2.0",
        "3.0.1.9",
        "3.0.1.8",
        "3.0.1.7"
      ]
    },
    {
      "name": "HTC Thunderbolt",
      "touch_version": "5.8.0.2",
      "version": "5.0.2.1",
      "alternate_recovery": {
        "name": "RA_GNM Recovery v3.05",
        "url": "http://dl.dropbox.com/u/12949506/RomManager/recovery-ra-mecha-3.05.img",
        "clockwork": false
      },
      "lunch": "cyanogen_mecha-eng",
      "key": "mecha",
      "init": "init.mecha.rc",
      "legacy_versions": [
        "3.0.2.5",
        "3.0.2.4",
        "3.0.2.3",
        "3.0.2.2",
        "3.0.2.5",
        "3.1.0.1",
        "3.1.0.2",
        "4.0.1.5",
        "5.0.0.1",
        "5.0.0.8",
        "5.0.1.0",
        "5.0.2.0"
      ]
    },
    {
      "name": "Huawei U8150 Ideos",
      "version": "3.0.2.4",
      "key": "ideos",
      "init": "init.ideos.rc",
      "legacy_versions": [
        "3.0.2.4"
      ]
    },
    {
      "name": "Motorola XOOM",
      "touch_version": "6.0.3.1",
      "version": "6.0.3.1",
      "lunch": "cm_stingray-userdebug",
      "key": "stingray",
      "flash_recovery": "dd if=%s of=/dev/block/platform/sdhci-tegra.3/by-name/recovery ; ",
      "init": "init.stingray.rc",
      "legacy_versions": [
        "3.0.2.5",
        "3.0.2.5",
        "4.0.0.0",
        "4.0.0.0",
        "4.0.0.0",
        "4.0.0.0",
        "4.0.0.0",
        "4.0.0.0",
        "4.0.0.1",
        "4.0.0.4",
        "6.0.2.9"
      ]
    },
    {
      "name": "HTC HD2",
      "version": "3.1.0.0",
      "key": "leo",
      "init": "init.leo.rc",
      "legacy_versions": [
        "3.0.2.5",
        "3.0.2.4",
        "3.0.2.5"
      ]
    },
    {
      "name": "Motorola CLIQ XT/Quench (MB501)",
      "version": "5.0.2.0",
      "lunch": "cyanogen_zeppelin-eng",
      "key": "zeppelin",
      "init": "init.zeppelin.rc",
      "legacy_versions": [
        "3.0.2.4",
        "3.0.2.4",
        "5.0.0.8",
        "5.0.0.8",
        "5.0.1.0",
        "5.0.1.0"
      ]
    },
    {
      "name": "HTC Desire S",
      "touch_version": "5.8.1.5",
      "version": "5.0.2.0",
      "lunch": "full_saga-eng",
      "key": "saga",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p21 ; ",
      "init": "init.saga.rc",
      "legacy_versions": [
        "3.0.2.6",
        "5.0.1.9"
      ]
    },
    {
      "name": "LG G2X (T-Mobile)",
      "readonly_recovery": true,
      "version": "5.0.2.0",
      "lunch": "cyanogen_p999-eng",
      "key": "p999",
      "init": "init_recovery.rc",
      "legacy_versions": [
        "3.0.2.7",
        "5.0.0.8",
        "5.0.1.0",
        "5.0.1.4",
        "5.0.1.6"
      ],
      "reboot_recovery": "echo 'boot-recovery' | dd of=/dev/block/mmcblk0p3 seek=6144 bs=1 ; reboot ; "
    },
    {
      "name": "LG Optimus 2X",
      "inits": [
        "init_recovery.rc",
        "/bootimages/opening_01.rle"
      ],
      "touch_version": "6.0.3.1",
      "version": "6.0.3.1",
      "lunch": "cm_p990-userdebug",
      "key": "p990",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p7 ; ",
      "legacy_versions": [
        "3.0.2.7",
        "3.0.2.7",
        "3.0.2.8",
        "4.0.0.9",
        "5.0.0.8",
        "5.0.1.0",
        "5.0.1.4",
        "5.0.1.6",
        "5.0.2.0",
        "6.0.1.5"
      ],
      "reboot_recovery": "echo 'boot-recovery' | dd of=/dev/block/mmcblk0p3 seek=6144 bs=1 ; reboot ; "
    },
    {
      "name": "Google Nexus S 4G",
      "touch_version": "6.0.3.8",
      "version": "6.0.3.8",
      "lunch": "cm_crespo4g-userdebug",
      "key": "crespo4g",
      "init": "init.herring.rc",
      "legacy_versions": [
        "3.1.0.0",
        "3.1.0.0",
        "3.1.0.1",
        "5.0.0.0",
        "5.0.0.8",
        "5.0.1.0",
        "5.0.2.0",
        "6.0.0.6",
        "6.0.0.7",
        "6.0.1.0",
        "6.0.2.5",
        "6.0.3.1",
        "6.0.3.3",
        "6.0.3.6"
      ]
    },
    {
      "name": "LG Optimus One (old BB)",
      "version": "5.0.2.0",
      "alternate_recovery": {
        "name": "RA_GNM Recovery v2.2.1",
        "url": "http://dl.dropbox.com/u/12949506/RomManager/recovery-RA-thunderg-2.2.1-GNM.img",
        "clockwork": false
      },
      "lunch": "full_thunderg-eng",
      "key": "thunderg",
      "init": "init.thunderg.rc",
      "legacy_versions": [
        "3.1.0.0",
        "5.0.0.8",
        "5.0.1.0"
      ]
    },
    {
      "name": "LG Optimus One",
      "version": "5.0.2.7",
      "lunch": "cyanogen_p500-eng",
      "key": "p500",
      "init": "init.thunderg.rc",
      "legacy_versions": [
        "5.0.2.0"
      ]
    },
    {
      "name": "Huawei U8220/U8230",
      "version": "3.1.0.1",
      "key": "u8220",
      "init": "init.qcom.rc",
      "legacy_versions": [

      ]
    },
    {
      "name": "Samsung Charge",
      "readonly_recovery": true,
      "version": "3.1.0.1",
      "key": "charge",
      "init": "init.smdkc110.rc",
      "legacy_versions": [

      ]
    },
    {
      "name": "Motorola Defy",
      "officially_supported": false,
      "key": "umts_jordan",
      "init": "init.mapphone_umts.rc",
      "legacy_versions": [

      ]
    },
    {
      "name": "Samsung Galaxy S 4G",
      "readonly_recovery": true,
      "version": "3.2.0.0",
      "key": "galaxys4g",
      "init": "init.smdkc110.rc",
      "legacy_versions": [
        "3.2.0.0"
      ]
    },
    {
      "name": "Samsung Galaxy S2",
      "readonly_recovery": true,
      "inits": [
        "init.smdkc210.rc",
        "init.smdk4210.rc"
      ],
      "touch_version": "5.8.1.5",
      "version": "4.0.1.5",
      "ro.product.device": [
        "i9100",
        "galaxys2"
      ],
      "key": "galaxys2",
      "init": "init.smdkc210.rc",
      "legacy_versions": [
        "4.0.1.4",
        "v4.0.1.4"
      ]
    },
    {
      "name": "Samsung Galaxy S2",
      "inits": [
        "init.smdkc210.rc",
        "init.smdk4210.rc"
      ],
      "officially_supported": false,
      "version": "6.0.1.0",
      "ro.product.device": [
        "i9100",
        "galaxys2"
      ],
      "lunch": "cm_i9100-userdebug",
      "key": "i9100",
      "init": "init.smdk4210.rc",
      "legacy_versions": [

      ]
    },
    {
      "name": "Samsung Galaxy Note (GT-N7000)",
      "readonly_recovery": true,
      "version": "6.0.1.2",
      "lunch": "cm_n7000-userdebug",
      "key": "n7000",
      "init": "init.smdk4210.rc",
      "legacy_versions": [
        "6.0.1.0"
      ]
    },
    {
      "name": "Samsung Sidekick 4G",
      "readonly_recovery": true,
      "version": "4.0.0.2",
      "key": "sidekick4g",
      "init": "init.smdkc110.rc",
      "legacy_versions": [

      ]
    },
    {
      "name": "HTC Incredible S",
      "version": "5.0.2.0",
      "lunch": "cyanogen_vivo-eng",
      "key": "vivo",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p21 ; ",
      "init": "init.vivo.rc",
      "legacy_versions": [
        "4.0.0.4",
        "4.0.0.6",
        "4.0.0.7",
        "4.0.0.8",
        "5.0.1.9"
      ]
    },
    {
      "name": "HTC Incredible 2",
      "version": "5.0.2.0",
      "alternate_recovery": {
        "name": "RA_GNM Recovery v3.05",
        "url": "http://dl.dropbox.com/u/12949506/RomManager/recovery-ra-vivow-3.05.img",
        "clockwork": false
      },
      "lunch": "cyanogen_vivow-eng",
      "key": "vivow",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p21 ; ",
      "init": "init.vivow.rc",
      "legacy_versions": [
        "4.0.0.4",
        "4.0.0.6",
        "4.0.0.7",
        "4.0.0.8",
        "5.0.1.9"
      ]
    },
    {
      "name": "LG Optimus 3D",
      "inits": [
        "init.p920.rc",
        "/bootimages/opening_01.rle"
      ],
      "touch_version": "6.0.1.9",
      "version": "6.0.1.9",
      "lunch": "cm_p920-userdebug",
      "key": "p920",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p6 ; ",
      "legacy_versions": [
        "4.0.0.7",
        "4.0.0.9",
        "5.0.1.4",
        "5.0.2.0",
        "5.0.2.7"
      ],
      "reboot_recovery": "echo '518 R 1' > /sys/kernel/kobject_lge_nvdata/dynamic_nvdata_raw_write ; reboot ; "
    },
    {
      "name": "Samsung Galaxy Ace",
      "version": "4.0.0.9",
      "key": "galaxyace",
      "flash_recovery": "/data/data/com.koushikdutta.rommanager/files/flash_image recoveryonly %s ; ",
      "init": "init.galaxyace.rc",
      "legacy_versions": [

      ]
    },
    {
      "name": "Motorola Atrix 4G",
      "inits": [
        "init_prep_keypad.sh",
        "init.olympus.rc"
      ],
      "touch_version": "5.8.1.8",
      "version": "5.0.2.0",
      "lunch": "generic_olympus-eng",
      "key": "olympus",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p10 ; ",
      "init": "init_prep_keypad.sh",
      "legacy_versions": [
        "4.0.1.0",
        "4.0.1.1",
        "3.2.0.1",
        "4.0.1.2",
        "4.0.1.3",
        "4.0.1.4",
        "4.0.1.5",
        "5.0.0.1",
        "5.0.0.1",
        "5.0.0.5",
        "5.0.0.6",
        "5.0.0.7",
        "5.0.1.0"
      ]
    },
    {
      "name": "Viewsonic GTablet (smb_a1002)",
      "version": "4.0.1.5",
      "key": "smb_a1002",
      "flash_recovery": "/data/data/com.koushikdutta.rommanager/files/tegra_flash_image recovery %s ; ",
      "init": "init_recovery.rc",
      "legacy_versions": [

      ]
    },
    {
      "name": "HTC EVO 3D",
      "touch_version": "5.8.0.2",
      "version": "5.0.2.0",
      "lunch": "htc_shooter-eng",
      "key": "shooter",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p22 ; ",
      "init": "init.shooter.rc",
      "legacy_versions": [
        "4.0.1.5",
        "5.0.0.0",
        "5.0.1.0"
      ]
    },
    {
      "name": "HTC Sensation",
      "touch_version": "5.8.0.9",
      "version": "5.0.2.0",
      "lunch": "full_pyramid-eng",
      "key": "pyramid",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p21 ; ",
      "init": "init.pyramid.rc",
      "legacy_versions": [
        "4.0.1.5",
        "5.0.0.1",
        "5.0.0.7",
        "5.0.0.8",
        "5.0.1.0"
      ]
    },
    {
      "name": "Huawei Ascend 2 (M865)",
      "inits": [
        "init.qcom.rc",
        "init.huawei.rc"
      ],
      "version": "4.0.1.5",
      "key": "ascend2",
      "init": "init.qcom.rc",
      "legacy_versions": [

      ]
    },
    {
      "name": "Micromax A70",
      "version": "4.0.1.5",
      "key": "a70",
      "init": "init.qcom.rc",
      "legacy_versions": [

      ]
    },
    {
      "name": "Samsung Galaxy Gio",
      "readonly_recovery": true,
      "version": "4.0.1.5",
      "key": "galaxygio",
      "init": "init.galaxygio.rc",
      "legacy_versions": [

      ]
    },
    {
      "name": "Samsung Indulge 910",
      "readonly_recovery": true,
      "version": "4.0.1.5",
      "key": "indulge910",
      "init": "init.smdkc110.rc",
      "legacy_versions": [

      ]
    },
    {
      "name": "Samsung Indulge 915",
      "readonly_recovery": true,
      "version": "4.0.1.5",
      "key": "indulge915",
      "init": "init.smdkc110.rc",
      "legacy_versions": [

      ]
    },
    {
      "name": "LG Optimus Black",
      "touch_version": "6.0.1.4",
      "version": "6.0.1.4",
      "lunch": "cm_p970-userdebug",
      "key": "p970",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p4 ; ",
      "init": "/bootimages/ON_480x800_08fps_0000.rle",
      "legacy_versions": [
        "5.0.0.0",
        "5.0.0.1",
        "5.0.0.8",
        "5.0.1.0",
        "5.0.1.1",
        "5.0.1.1",
        "5.0.1.2",
        "5.0.1.3",
        "5.0.2.0",
        "5.0.2.6"
      ]
    },
    {
      "name": "HTC EVO 3D (GSM)",
      "touch_version": "5.8.0.2",
      "version": "5.0.2.0",
      "lunch": "full_shooteru-eng",
      "key": "shooteru",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p21 ; ",
      "init": "init.shooteru.rc",
      "legacy_versions": [
        "5.0.1.6",
        "5.0.1.7",
        "5.0.1.8",
        "5.0.1.9"
      ]
    },
    {
      "name": "Motorola Droid 2 Global",
      "readonly_recovery": true,
      "version": "5.0.2.3",
      "lunch": "cyanogen_droid2we-eng",
      "key": "droid2we",
      "flash_recovery": "dd if=%s of=/preinstall/recovery/recovery.zip ; ",
      "init": "init.mapphone_cdma.rc",
      "legacy_versions": [

      ],
      "reboot_recovery": "rm /cache/recovery/command ; echo 1 > /data/.recovery_mode ; sync ; reboot ;"
    },
    {
      "name": "Motorola Droid Bionic",
      "readonly_recovery": true,
      "version": "5.0.2.5",
      "lunch": "generic_targa-eng",
      "key": "targa",
      "flash_recovery": "dd if=%s of=/preinstall/recovery/recovery.zip ; ",
      "init": "init.mapphone_cdma.rc",
      "legacy_versions": [
        "5.0.2.3",
        "5.0.2.4"
      ],
      "reboot_recovery": "rm /cache/recovery/command ; echo 1 > /data/.recovery_mode ; sync ; reboot ;"
    },
    {
      "name": "Motorola Droid X2",
      "readonly_recovery": true,
      "version": "5.0.2.5",
      "lunch": "generic_daytona-eng",
      "key": "daytona",
      "flash_recovery": "dd if=%s of=/preinstall/recovery/recovery.zip ; ",
      "init": "init.mapphone_cdma.rc",
      "legacy_versions": [
        "5.0.2.3",
        "5.0.2.4"
      ],
      "reboot_recovery": "rm /cache/recovery/command ; echo 1 > /data/.recovery_mode ; sync ; reboot ;"
    },
    {
      "name": "Motorola Droid 3",
      "readonly_recovery": true,
      "version": "5.0.2.6",
      "lunch": "full_solana-eng",
      "key": "solana",
      "flash_recovery": "dd if=%s of=/preinstall/recovery/recovery.zip ; ",
      "init": "init.mapphone_cdma.rc",
      "legacy_versions": [
        "5.0.2.5"
      ],
      "reboot_recovery": "rm /cache/recovery/command ; echo 1 > /data/.recovery_mode ; sync ; reboot ;"
    },
    {
      "name": "Motorola Backflip",
      "version": "5.0.2.6",
      "lunch": "cyanogen_motus-eng",
      "key": "motus",
      "init": "init.motus.rc",
      "legacy_versions": [

      ]
    },
    {
      "name": "Samsung Galaxy Mini",
      "readonly_recovery": true,
      "version": "5.0.2.6",
      "lunch": "tass-eng",
      "key": "tass",
      "init": "init.gt-s5570.rc",
      "legacy_versions": [

      ]
    },
    {
      "name": "Huawei U8800",
      "version": "5.0.2.6",
      "lunch": "huawei_u8800-eng",
      "key": "u8800",
      "flash_recovery": "mount -o remount,rw -t vfat /dev/block/mmcblk0p1 /cust_backup ; cat %s > /cust_backup/image/recovery.img ;",
      "init": "init.u8800.rc",
      "legacy_versions": [

      ]
    },
    {
      "name": "Samsung Galaxy S2 (AT&T)",
      "readonly_recovery": true,
      "inits": [
        "init.smdkc210.rc",
        "init.smdk4210.rc"
      ],
      "touch_version": "5.8.1.5",
      "version": "5.0.2.6",
      "lunch": "cyanogen_galaxys2att-eng",
      "key": "galaxys2att",
      "init": "init.smdkc210.rc",
      "legacy_versions": [

      ]
    },
    {
      "name": "Samsung Galaxy S2 (T-Mobile)",
      "owners": {
        "jmprblckwing182@gmail.com": true
      },
      "touch_version": "6.0.3.6",
      "version": "6.0.3.6",
      "lunch": "cm_hercules-userdebug",
      "key": "hercules",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p22 bs=4096 ; ",
      "init": "init.target.rc",
      "legacy_versions": [
        "5.0.2.6",
        "5.0.2.7",
        "6.0.1.4",
        "6.0.1.5",
        "6.0.1.9",
        "6.0.2.3",
        "6.0.2.7",
        "6.0.2.8",
        "6.0.2.9",
        "6.0.3.1"
      ]
    },
    {
      "name": "Samsung Epic 4G Touch",
      "readonly_recovery": true,
      "touch_version": "5.8.1.5",
      "version": "5.0.2.7",
      "lunch": "full_epic4gtouch-eng",
      "key": "epic4gtouch",
      "init": "init.smdkc210.rc",
      "legacy_versions": [
        "5.0.2.6",
        "5.0.2.7"
      ]
    },
    {
      "name": "HTC Amaze",
      "version": "5.0.2.6",
      "lunch": "full_ruby-eng",
      "key": "ruby",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p23 bs=4096 ; ",
      "init": "init.ruby.rc",
      "legacy_versions": [

      ]
    },
    {
      "name": "Samsung Galaxy 5",
      "readonly_recovery": true,
      "version": "5.0.2.8",
      "lunch": "samsung_galaxy5-eng",
      "key": "galaxy5",
      "init": "init.gt-i5500.rc",
      "legacy_versions": [
        "5.0.2.8"
      ]
    },
    {
      "name": "ZTE Racer",
      "version": "5.0.2.7",
      "lunch": "generic_mooncake-eng",
      "key": "mooncake",
      "init": "init.mooncake.rc",
      "legacy_versions": [

      ]
    },
    {
      "name": "Samsung Galaxy Tab (VZW)",
      "readonly_recovery": true,
      "version": "5.0.2.7",
      "lunch": "full_vzwtab-eng",
      "key": "vzwtab",
      "init": "init.smdkc110.rc",
      "legacy_versions": [
        "5.0.2.7",
        "5.0.2.7",
        "5.0.2.7"
      ]
    },
    {
      "name": "HTC MyTouch 4G Slide",
      "version": "5.0.2.7",
      "lunch": "full_doubleshot-eng",
      "key": "doubleshot",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p21 bs=4096 ; ",
      "init": "init.doubleshot.rc",
      "legacy_versions": [
        "5.0.2.7",
        "5.0.2.7"
      ]
    },
    {
      "name": "Google Galaxy Nexus (GSM)",
      "touch_version": "6.0.3.6",
      "version": "6.0.3.6",
      "lunch": "cm_maguro-userdebug",
      "key": "maguro",
      "flash_recovery": "dd if=%s of=/dev/block/platform/omap/omap_hsmmc.0/by-name/recovery bs=4096 ;",
      "init": "init.tuna.rc",
      "legacy_versions": [
        "5.5.0.0",
        "5.5.0.1",
        "5.5.0.2",
        "6.0.0.0",
        "6.0.0.1",
        "6.0.0.2",
        "6.0.0.3",
        "6.0.0.3",
        "6.0.0.4",
        "6.0.0.5",
        "6.0.1.0",
        "6.0.1.5",
        "6.0.2.3",
        "6.0.3.1",
        "6.0.3.3",
        "6.0.3.4",
        "6.0.3.5"
      ]
    },
    {
      "name": "Google Galaxy Nexus (Verizon)",
      "touch_version": "6.0.3.6",
      "version": "6.0.3.6",
      "lunch": "cm_toro-userdebug",
      "key": "toro",
      "flash_recovery": "dd if=%s of=/dev/block/platform/omap/omap_hsmmc.0/by-name/recovery bs=4096 ;",
      "init": "init.tuna.rc",
      "legacy_versions": [
        "5.5.0.2",
        "5.5.0.3",
        "5.5.0.4",
        "6.0.0.0",
        "6.0.0.1",
        "6.0.0.2",
        "6.0.0.3",
        "6.0.0.3",
        "6.0.0.4",
        "6.0.0.5",
        "6.0.1.0",
        "6.0.1.5",
        "6.0.2.3",
        "6.0.3.1",
        "6.0.3.3",
        "6.0.3.5"
      ]
    },
    {
      "name": "LG Optimus C LW690 and Optimus M MS690",
      "version": "5.0.2.7",
      "lunch": "full_lg690-eng",
      "key": "lg690",
      "init": "init.thunderc.rc",
      "legacy_versions": [

      ]
    },
    {
      "name": "LG Optimus Pro",
      "version": "5.0.2.7",
      "lunch": "c660-eng",
      "key": "c660",
      "init": "init.muscat.rc",
      "legacy_versions": [

      ]
    },
    {
      "name": "LG Optimus Hub",
      "version": "5.0.2.7",
      "lunch": "e510-eng",
      "key": "e510",
      "init": "init.univa.rc",
      "legacy_versions": [

      ]
    },
    {
      "name": "Samsung Epic4G (MTD)",
      "officially_supported": false,
      "touch_version": "5.8.1.5",
      "version": "5.0.2.7",
      "lunch": "cyanogen_epicmtd-eng",
      "key": "epicmtd",
      "init": "init.victory.rc",
      "legacy_versions": [

      ],
      "reboot_recovery": "/system/xbin/busybox devmem 0x57fff800 32 0x5EC0B007; sync ; reboot ;"
    },
    {
      "name": "HTC Holiday",
      "version": "5.0.2.7",
      "lunch": "full_holiday-eng",
      "key": "holiday",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p23 bs=4096 ; ",
      "init": "init.holiday.rc",
      "legacy_versions": [
        "5.0.2.7",
        "5.0.2.7",
        "5.0.2.7"
      ]
    },
    {
      "name": "LG Optimus SOL / TMo LG myTouch",
      "inits": [
        "init.victor.rc",
        "init.e739.rc"
      ],
      "version": "5.0.2.7",
      "lunch": "e730-eng",
      "key": "e730",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p17 bs=4096 ;",
      "legacy_versions": [

      ]
    },
    {
      "name": "HTC Wildfire S",
      "version": "5.0.2.8",
      "lunch": "generic_marvel-eng",
      "key": "marvel",
      "init": "init.marvel.rc",
      "legacy_versions": [
        "5.0.2.7"
      ]
    },
    {
      "name": "Motorola Photon 4G",
      "inits": [
        "init.mapphone_umts.rc",
        "init.mapphone_cdma.rc"
      ],
      "version": "5.0.2.8",
      "lunch": "full_sunfire-eng",
      "key": "sunfire",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p10 bs=4096 ;",
      "init": "init.mapphone_umts.rc",
      "legacy_versions": [
        "5.0.2.7"
      ]
    },
    {
      "name": "Huawei U8160",
      "inits": [
        "init.huawei.rc",
        "init.u8160.rc"
      ],
      "version": "5.0.2.8",
      "lunch": "huawei_u8160-eng",
      "key": "u8160",
      "init": "init.u8160.rc",
      "legacy_versions": [
        "5.0.2.8"
      ]
    },
    {
      "name": "HTC Rezound",
      "touch_version": "6.0.3.1",
      "version": "6.0.3.1",
      "lunch": "cm_vigor-userdebug",
      "key": "vigor",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p23 bs=4096 ;",
      "init": "init.vigor.rc",
      "legacy_versions": [
        "5.5.0.4",
        "5.5.0.5",
        "5.8.1.3",
        "5.8.1.4",
        "5.8.1.4",
        "5.8.1.4",
        "5.8.1.4",
        "6.0.2.2",
        "6.0.2.3"
      ]
    },
    {
      "name": "HTC EVO View 4G",
      "version": "5.8.1.5",
      "lunch": "full_express-userdebug",
      "key": "express",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p21 bs=4096 ;",
      "init": "init.expresskt.rc",
      "legacy_versions": [

      ]
    },
    {
      "name": "Asus Transformer Prime",
      "touch_version": "5.8.3.4",
      "version": "5.8.3.4",
      "lunch": "cm_tf201-userdebug",
      "key": "tf201",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p4 ;",
      "init": "init.cardhu.rc",
      "legacy_versions": [
        "5.5.0.4",
        "5.8.2.0"
      ]
    },
    {
      "name": "Motorola Droid 4",
      "officially_supported": false,
      "version": "5.0.2.0",
      "key": "maserati",
      "init": "init.mapphone_cdma.rc",
      "legacy_versions": [

      ],
      "reboot_recovery": "rm /cache/recovery/command ; echo 1 > /data/.recovery_mode ; sync ; reboot ;"
    },
    {
      "name": "Motorola RAZR",
      "officially_supported": false,
      "version": "5.0.2.0",
      "key": "spyder",
      "init": "init.mapphone_cdma.rc",
      "legacy_versions": [

      ],
      "reboot_recovery": "rm /cache/recovery/command ; echo 1 > /data/.recovery_mode ; sync ; reboot ;"
    },
    {
      "name": "HTC Wildfire S CDMA",
      "version": "5.0.2.8",
      "lunch": "full_marvelc-eng",
      "key": "marvelc",
      "init": "init.marvelc.rc",
      "legacy_versions": [

      ]
    },
    {
      "name": "Asus Transformer",
      "touch_version": "5.8.3.4",
      "version": "6.0.1.3",
      "lunch": "cm_tf101-userdebug",
      "key": "tf101",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p4 ;",
      "init": "init.ventana.rc",
      "legacy_versions": [
        "5.5.0.4",
        "5.8.1.9",
        "5.8.2.0",
        "5.8.2.1",
        "5.8.3.4"
      ]
    },
    {
      "name": "LG Nitro HD / LG P930 (AT&T)",
      "touch_version": "6.0.1.5",
      "version": "6.0.1.5",
      "lunch": "cm_p930-userdebug",
      "key": "p930",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p13 ;",
      "init": "bootimages/boot_logo_00000.rle",
      "legacy_versions": [
        "5.8.2.0",
        "6.0.1.4"
      ]
    },
    {
      "name": "Samsung Galaxy S2 (SGH-I777)",
      "readonly_recovery": true,
      "inits": [
        "init.smdkc210.rc",
        "init.smdk4210.rc"
      ],
      "touch_version": "6.0.1.0",
      "version": "6.0.1.0",
      "lunch": "cm_i777-userdebug",
      "key": "i777",
      "init": "init.smdkc210.rc",
      "legacy_versions": [
        "5.8.1.8"
      ]
    },
    {
      "name": "HTC Pico",
      "version": "5.0.2.8",
      "lunch": "full_pico-eng",
      "key": "pico",
      "init": "init.pico.rc",
      "legacy_versions": [

      ]
    },
    {
      "name": "HTC One X (GSM)",
      "touch_version": "5.8.4.0",
      "version": "5.8.4.0",
      "lunch": "cm_endeavoru-userdebug",
      "key": "endeavoru",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p5 bs=4096 ;",
      "init": "ueventd.endeavoru.rc",
      "legacy_versions": [
        "5.8.2.6",
        "5.8.2.7",
        "5.8.2.6",
        "5.8.2.6",
        "5.8.2.8",
        "5.8.2.9",
        "5.8.3.0",
        "5.8.3.1",
        "5.8.3.5",
        "5.8.3.6",
        "5.8.3.7",
        "5.8.3.8",
        "5.8.3.9"
      ]
    },
    {
      "name": "HTC One S",
      "touch_version": "6.0.3.1",
      "version": "6.0.3.1",
      "lunch": "cm_ville-userdebug",
      "key": "ville",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p22 bs=4096 ;",
      "init": "init.ville.rc",
      "legacy_versions": [
        "5.5.0.4",
        "5.8.2.1",
        "5.8.2.2",
        "5.8.2.3",
        "5.8.3.1",
        "6.0.2.9"
      ]
    },
    {
      "name": "Samsung Galaxy Tab (MTD and GSM)",
      "officially_supported": false,
      "version": "5.8.2.1",
      "key": "p1",
      "init": "init.p1.rc",
      "legacy_versions": [

      ],
      "reboot_recovery": "echo 1 > /cache/.startrecovery ; sync ; reboot ;"
    },
    {
      "name": "Samsung Galaxy Tab (MTD and CDMA)",
      "officially_supported": false,
      "version": "5.8.2.1",
      "key": "p1c",
      "init": "init.p1c.rc",
      "legacy_versions": [

      ],
      "reboot_recovery": "echo 1 > /cache/.startrecovery ; sync ; reboot ;"
    },
    {
      "name": "Google Galaxy Nexus (Sprint)",
      "touch_version": "6.0.3.6",
      "version": "6.0.3.6",
      "lunch": "cm_toroplus-userdebug",
      "key": "toroplus",
      "flash_recovery": "dd if=%s of=/dev/block/platform/omap/omap_hsmmc.0/by-name/recovery bs=4096 ;",
      "init": "init.tuna.rc",
      "legacy_versions": [
        "5.8.3.1",
        "6.0.0.0",
        "6.0.0.1",
        "6.0.0.2",
        "6.0.0.3",
        "6.0.0.4",
        "6.0.0.5",
        "6.0.1.0",
        "6.0.1.5",
        "6.0.2.3",
        "6.0.3.1",
        "6.0.3.3",
        "6.0.3.5"
      ]
    },
    {
      "name": "Samsung Galaxy Tab 10.1 (Wifi)",
      "touch_version": "6.0.3.1",
      "version": "6.0.3.1",
      "lunch": "cm_p4wifi-userdebug",
      "key": "p4wifi",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p2 ; ",
      "init": "ueventd.p3.rc",
      "legacy_versions": [
        "4.0.0.4",
        "5.8.3.1",
        "6.0.2.9",
        "6.0.3.0"
      ]
    },
    {
      "name": "Motorola XOOM (Wi-Fi only)",
      "touch_version": "6.0.3.1",
      "version": "6.0.3.1",
      "lunch": "cm_wingray-userdebug",
      "key": "wingray",
      "flash_recovery": "dd if=%s of=/dev/block/platform/sdhci-tegra.3/by-name/recovery ; ",
      "init": "init.wingray.rc",
      "legacy_versions": [
        "5.8.3.1",
        "6.0.2.9"
      ]
    },
    {
      "name": "LG Marquee",
      "version": "5.0.2.8",
      "lunch": "full_marquee-eng",
      "key": "marquee",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p4 bs=4096 ; ",
      "init": "init.omap.post_boot.sh",
      "legacy_versions": [

      ]
    },
    {
      "name": "LG Ignite",
      "version": "5.0.2.8",
      "lunch": "full_ignite-eng",
      "key": "ignite",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p4 bs=4096 ; ",
      "init": "init.omap.post_boot.sh",
      "legacy_versions": [

      ]
    },
    {
      "name": "LG Connect 4G MS840",
      "touch_version": "5.8.3.1",
      "version": "5.8.3.1",
      "lunch": "full_ms840-userdebug",
      "key": "ms840",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p13 bs=4096 ; ",
      "init": "init.target.rc",
      "legacy_versions": [

      ]
    },
    {
      "name": "LG Lucid VS840",
      "touch_version": "5.8.3.1",
      "version": "5.8.3.1",
      "lunch": "full_vs840-userdebug",
      "key": "vs840",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p13 bs=4096 ; ",
      "init": "init.target.rc",
      "legacy_versions": [

      ]
    },
    {
      "name": "HTC EVO LTE",
      "touch_version": "5.8.3.5",
      "version": "5.8.3.5",
      "lunch": "cm_jewel-userdebug",
      "key": "jewel",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p22 bs=4096 ; ",
      "init": "init.jewel.rc",
      "legacy_versions": [
        "5.8.3.4",
        "5.8.3.4"
      ]
    },
    {
      "name": "Samsung Galaxy S3 (GT-I9300)",
      "touch_version": "6.0.3.6",
      "version": "6.0.3.6",
      "lunch": "cm_i9300-userdebug",
      "key": "i9300",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p6 bs=4096 ; ",
      "ro.product.devices": [
        "i9300",
        "m0"
      ],
      "init": "ueventd.smdk4x12.rc",
      "legacy_versions": [
        "5.8.4.0",
        "5.8.4.1",
        "5.8.4.2",
        "5.8.4.3",
        "5.8.4.4",
        "5.8.4.5",
        "6.0.0.7",
        "6.0.0.8",
        "6.0.1.0",
        "6.0.1.2",
        "6.0.2.7",
        "6.0.3.0",
        "6.0.3.1",
        "6.0.3.2"
      ]
    },
    {
      "name": "Samsung Skyrocket",
      "touch_version": "6.0.3.3",
      "version": "6.0.3.1",
      "lunch": "cm_skyrocket-userdebug",
      "key": "skyrocket",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p22 bs=4096 ; ",
      "init": "init.qcom.usb.rc",
      "legacy_versions": [
        "5.8.4.3",
        "6.0.1.0",
        "6.0.1.4"
      ]
    },
    {
      "name": "Samsung Galaxy Note (AT&T)",
      "touch_version": "6.0.3.6",
      "version": "6.0.3.6",
      "lunch": "cm_quincyatt-userdebug",
      "key": "quincyatt",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p22 bs=4096 ; ",
      "init": "init.qcom.usb.rc",
      "legacy_versions": [
        "5.8.4.3",
        "5.8.4.8",
        "6.0.3.1"
      ]
    },
    {
      "name": "LG Optimus L3",
      "version": "5.8.4.5",
      "lunch": "cm_e400-userdebug",
      "key": "e400",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p17 bs=4096 ; ",
      "init": "init.e0.rc",
      "legacy_versions": [

      ]
    },
    {
      "name": "HTC One V",
      "readonly_recovery": true,
      "version": "5.8.4.5",
      "lunch": "cm_primou-userdebug",
      "key": "primou",
      "init": "init.primou.rc",
      "legacy_versions": [

      ]
    },
    {
      "name": "Samsung Galaxy S3 (AT&T)",
      "touch_version": "6.0.3.8",
      "version": "6.0.3.8",
      "lunch": "cm_d2att-userdebug",
      "key": "d2att",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p18 bs=4096 ; ",
      "init": "init.d2att.rc",
      "legacy_versions": [
        "5.8.4.5",
        "5.8.4.6",
        "5.8.4.7",
        "6.0.1.1",
        "6.0.1.2",
        "6.0.2.3",
        "6.0.2.8",
        "6.0.2.8",
        "6.0.3.0",
        "6.0.3.1",
        "6.0.3.6",
        "6.0.3.7"
      ]
    },
    {
      "name": "Samsung Galaxy S3 (T-Mobile)",
      "touch_version": "6.0.3.8",
      "version": "6.0.3.8",
      "lunch": "cm_d2tmo-userdebug",
      "key": "d2tmo",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p18 bs=4096 ; ",
      "ro.product.devices": [
        "d2tmo",
        "d2lteMetroPCS"
      ],
      "init": "init.d2tmo.rc",
      "legacy_versions": [
        "5.8.4.5",
        "5.8.4.6",
        "5.8.4.7",
        "6.0.1.2",
        "6.0.2.3",
        "6.0.2.8",
        "6.0.2.8",
        "6.0.3.0",
        "6.0.3.1",
        "6.0.3.6",
        "6.0.3.7"
      ]
    },
    {
      "name": "Samsung Galaxy S3 (Sprint)",
      "touch_version": "6.0.3.8",
      "version": "6.0.3.8",
      "lunch": "cm_d2spr-userdebug",
      "key": "d2spr",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p18 bs=4096 ; ",
      "init": "init.d2spr.rc",
      "legacy_versions": [
        "5.8.4.5",
        "5.8.4.6",
        "5.8.4.7",
        "5.8.4.9",
        "6.0.1.2",
        "6.0.2.3",
        "6.0.2.8",
        "6.0.2.8",
        "6.0.3.0",
        "6.0.3.1",
        "6.0.3.6",
        "6.0.3.7"
      ]
    },
    {
      "name": "Samsung Galaxy S3 (Verizon)",
      "touch_version": "6.0.3.8",
      "version": "6.0.3.8",
      "lunch": "cm_d2vzw-userdebug",
      "key": "d2vzw",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p18 bs=4096 ; ",
      "twrp_version": "2.4.3.0",
      "init": "init.d2vzw.rc",
      "legacy_versions": [
        "5.8.4.6",
        "5.8.4.7",
        "5.8.4.8",
        "5.8.4.9",
        "6.0.1.2",
        "6.0.2.3",
        "6.0.2.8",
        "6.0.2.8",
        "6.0.3.0",
        "6.0.3.1",
        "6.0.3.6",
        "6.0.3.7"
      ]
    },
    {
      "name": "HTC One V (CDMA)",
      "readonly_recovery": true,
      "touch_version": "5.8.4.7",
      "version": "5.8.4.7",
      "lunch": "full_primoc-userdebug",
      "key": "primoc",
      "init": "init.primoc.rc",
      "legacy_versions": [
        "5.8.4.6",
        "5.8.4.7"
      ]
    },
    {
      "name": "Google Nexus 7",
      "touch_version": "6.0.3.8",
      "version": "6.0.3.8",
      "lunch": "cm_grouper-userdebug",
      "key": "grouper",
      "flash_recovery": "dd if=%s of=/dev/block/platform/sdhci-tegra.3/by-name/SOS bs=4096 ; ",
      "init": "init.grouper.rc",
      "legacy_versions": [
        "6.0.0.6",
        "6.0.1.0",
        "6.0.1.9",
        "6.0.2.3",
        "6.0.3.1",
        "6.0.3.4",
        "6.0.3.5",
        "6.0.3.6"
      ]
    },
    {
      "name": "LG Optimus LTE (SKT)",
      "touch_version": "6.0.1.0",
      "version": "6.0.1.0",
      "lunch": "cm_su640-userdebug",
      "key": "su640",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p13 bs=4096 ; ",
      "init": "init.su640.rc",
      "legacy_versions": [

      ]
    },
    {
      "name": "Samsung Galaxy S2 (GT-I9100G)",
      "officially_supported": false,
      "version": "6.0.1.0",
      "lunch": "cm_i9100g-userdebug",
      "key": "i9100g",
      "init": "init.t1.rc",
      "legacy_versions": [

      ]
    },
    {
      "name": "Samsung Galaxy Tab 2 (GT-P3100)",
      "touch_version": "6.0.2.7",
      "version": "6.0.2.7",
      "lunch": "cm_p3100-userdebug",
      "key": "p3100",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p6 bs=4096 ; ",
      "init": "init.espresso.rc",
      "legacy_versions": [
        "6.0.1.1",
        "6.0.2.3"
      ]
    },
    {
      "name": "Samsung Galaxy Tab 2 (GT-P3110)",
      "touch_version": "6.0.2.7",
      "version": "6.0.2.7",
      "lunch": "cm_p3110-userdebug",
      "key": "p3110",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p6 bs=4096 ; ",
      "init": "init.espresso.rc",
      "legacy_versions": [
        "6.0.1.1",
        "6.0.2.3"
      ]
    },
    {
      "name": "Samsung Galaxy Tab 2 (GT-P3113)",
      "touch_version": "6.0.2.3",
      "version": "6.0.2.3",
      "lunch": "cm_p3113-userdebug",
      "key": "p3113",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p6 bs=4096 ; ",
      "init": "init.espresso.rc",
      "legacy_versions": [
        "6.0.1.1"
      ]
    },
    {
      "name": "Samsung Galaxy Tab 2 (GT-P5100)",
      "touch_version": "6.0.2.7",
      "version": "6.0.2.7",
      "lunch": "cm_p5100-userdebug",
      "key": "p5100",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p6 bs=4096 ; ",
      "init": "init.espresso10.rc",
      "legacy_versions": [
        "6.0.1.1",
        "6.0.2.3"
      ]
    },
    {
      "name": "Samsung Galaxy Tab 2 (GT-P5110)",
      "touch_version": "6.0.2.7",
      "version": "6.0.2.7",
      "lunch": "cm_p5110-userdebug",
      "key": "p5110",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p6 bs=4096 ; ",
      "init": "init.espresso10.rc",
      "legacy_versions": [
        "6.0.1.1",
        "6.0.2.3"
      ]
    },
    {
      "name": "Samsung Galaxy Tab 2 (GT-P5113)",
      "touch_version": "6.0.2.3",
      "version": "6.0.2.3",
      "lunch": "cm_p5113-userdebug",
      "key": "p5113",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p6 bs=4096 ; ",
      "init": "init.espresso10.rc",
      "legacy_versions": [
        "6.0.1.1"
      ]
    },
    {
      "name": "LG Spectrum 4G",
      "inits": [
        "init.target.rc",
        "init.iproj.rc",
        "init.i_vzw.rc",
        "init.iprj.rc"
      ],
      "touch_version": "6.0.1.1",
      "version": "6.0.1.1",
      "lunch": "cm_vs920-userdebug",
      "key": "vs920",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p13 bs=4096 ; ",
      "init": "init.target.rc",
      "legacy_versions": [

      ]
    },
    {
      "name": "Score & Score M",
      "touch_version": "6.0.1.1",
      "version": "6.0.1.1",
      "lunch": "cm_x500-userdebug",
      "key": "x500",
      "init": "init.zte.rc",
      "legacy_versions": [

      ]
    },
    {
      "name": "LG Revolution 4G",
      "inits": [
        "init.qcom.rc",
        "init.bryce.rc"
      ],
      "touch_version": "6.0.1.1",
      "version": "6.0.1.1",
      "lunch": "cm_vs910-userdebug",
      "key": "vs910",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p14 bs=4096 ; ",
      "init": "init.qcom.rc",
      "legacy_versions": [

      ]
    },
    {
      "name": "LG Esteeem 4G",
      "inits": [
        "init.qcom.rc",
        "init.bryce.rc"
      ],
      "touch_version": "6.0.1.1",
      "version": "6.0.1.1",
      "lunch": "cm_ms910-userdebug",
      "key": "ms910",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p14 bs=4096 ; ",
      "init": "init.qcom.rc",
      "legacy_versions": [
        "5.0.2.8"
      ]
    },
    {
      "name": "LG Optimus M+",
      "inits": [
        "init.qcom.rc",
        "init.m3.rc"
      ],
      "touch_version": "6.0.1.1",
      "version": "6.0.1.1",
      "lunch": "cm_ms695-userdebug",
      "key": "ms695",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p17 bs=4096 ; ",
      "init": "init.qcom.rc",
      "legacy_versions": [
        "6.0.1.0"
      ]
    },
    {
      "name": "Samsung Galaxy Tab (MTD and GSM - L)",
      "officially_supported": false,
      "version": "5.8.2.1",
      "key": "p1l",
      "init": "init.p1.rc",
      "legacy_versions": [

      ],
      "reboot_recovery": "echo 1 > /cache/.startrecovery ; sync ; reboot ;"
    },
    {
      "name": "Samsung Galaxy Tab (MTD and GSM - N)",
      "officially_supported": false,
      "version": "5.8.2.1",
      "key": "p1n",
      "init": "init.p1.rc",
      "legacy_versions": [

      ],
      "reboot_recovery": "echo 1 > /cache/.startrecovery ; sync ; reboot ;"
    },
    {
      "name": "Samsung Galaxy S3 (US Cellular)",
      "touch_version": "6.0.3.8",
      "version": "6.0.3.8",
      "lunch": "cm_d2usc-userdebug",
      "key": "d2usc",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p18 bs=4096 ; ",
      "init": "init.d2usc.rc",
      "legacy_versions": [
        "6.0.1.2",
        "6.0.2.3",
        "6.0.2.8",
        "6.0.2.9",
        "6.0.3.0",
        "6.0.3.1",
        "6.0.3.6",
        "6.0.3.7"
      ]
    },
    {
      "name": "Motorola Photon Q",
      "inits": [
        "init.asanti.rc",
        "init.sprint.rc"
      ],
      "version": "6.0.1.3",
      "lunch": "cm_asanti-userdebug",
      "key": "asanti",
      "flash_recovery": "dd if=%s of=/dev/block/platform/msm_sdcc.1/by-name/recovery bs=4096 ; ",
      "init": "init.mmi.usb.rc",
      "legacy_versions": [

      ]
    },
    {
      "name": "LG Optimus Me",
      "version": "6.0.1.5",
      "lunch": "cm_p350-userdebug",
      "key": "p350",
      "init": "init.pecan.rc",
      "legacy_versions": [
        "6.0.1.3",
        "6.0.1.4"
      ]
    },
    {
      "name": "Samsung Galaxy Tab 8.9 (AT&T)",
      "version": "6.0.1.4",
      "lunch": "cm_p5att-userdebug",
      "key": "p5att",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p22 bs=4096 ; ",
      "init": "fstab.qcom",
      "legacy_versions": [

      ]
    },
    {
      "name": "Samsung Galaxy S Blaze 4G",
      "touch_version": "6.0.3.8",
      "version": "6.0.3.8",
      "lunch": "cm_t769-userdebug",
      "key": "t769",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p22 bs=4096 ; ",
      "init": "init.target.rc",
      "legacy_versions": [
        "6.0.1.4"
      ]
    },
    {
      "name": "Samsung Galaxy S3 (MetroPCS)",
      "inits": [
        "init.carrier.rc",
        "init.d2mtr.rc"
      ],
      "touch_version": "6.0.3.8",
      "version": "6.0.3.8",
      "lunch": "cm_d2mtr-userdebug",
      "key": "d2mtr",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p18 bs=4096 ; ",
      "init": "init.carrier.rc",
      "legacy_versions": [
        "6.0.1.5",
        "6.0.2.3",
        "6.0.2.8",
        "6.0.2.9",
        "6.0.3.0",
        "6.0.3.1",
        "6.0.3.6",
        "6.0.3.7"
      ]
    },
    {
      "name": "Asus Transformer Pad Infinity",
      "touch_version": "6.0.3.1",
      "version": "6.0.3.1",
      "lunch": "cm_tf700t-userdebug",
      "key": "tf700t",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p4 bs=4096 ; ",
      "init": "init.tf700t.rc",
      "legacy_versions": [
        "6.0.1.8",
        "6.0.2.3"
      ],
      "reboot_recovery": "echo 'boot-recovery' | dd of=/dev/block/mmcblk0p3 seek=6144 bs=1 ; reboot ; "
    },
    {
      "name": "Google Nexus 10",
      "touch_version": "6.0.3.8",
      "version": "6.0.3.8",
      "lunch": "cm_manta-userdebug",
      "key": "manta",
      "flash_recovery": "dd if=%s of=/dev/block/platform/dw_mmc.0/by-name/recovery bs=4096 ; ",
      "init": "init.manta.rc",
      "legacy_versions": [
        "6.0.1.5",
        "6.0.1.5",
        "6.0.1.6",
        "6.0.1.7",
        "6.0.1.8",
        "6.0.1.9",
        "6.0.2.3",
        "6.0.3.0",
        "6.0.3.1",
        "6.0.3.5"
      ]
    },
    {
      "name": "Google Nexus 4",
      "touch_version": "6.0.3.8",
      "version": "6.0.3.8",
      "lunch": "cm_mako-userdebug",
      "key": "mako",
      "flash_recovery": "dd if=%s of=/dev/block/platform/msm_sdcc.1/by-name/recovery bs=4096 ; ",
      "init": "init.mako.rc",
      "legacy_versions": [
        "6.0.1.5",
        "6.0.1.6",
        "6.0.1.8",
        "6.0.1.9",
        "6.0.2.0",
        "6.0.2.3",
        "6.0.3.0",
        "6.0.3.1",
        "6.0.3.3",
        "6.0.3.4",
        "6.0.3.5",
        "6.0.3.6"
      ]
    },
    {
      "name": "HTC Droid DNA",
      "touch_version": "6.0.3.1",
      "version": "6.0.3.1",
      "lunch": "cm_dlx-userdebug",
      "key": "dlx",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p20 bs=4096 ; ",
      "init": "init.debug_mfgkernel.rc",
      "legacy_versions": [
        "6.0.1.5",
        "6.0.1.9",
        "6.0.2.3",
        "6.0.2.7",
        "6.0.2.8",
        "6.0.3.0"
      ]
    },
    {
      "name": "Samsung Galaxy Note 2 (HSPA+)",
      "touch_version": "6.0.3.6",
      "version": "6.0.3.6",
      "lunch": "cm_n7100-userdebug",
      "key": "n7100",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p9 bs=4096 ; ",
      "init": "init.smdk4x12.rc",
      "legacy_versions": [
        "6.0.1.9",
        "6.0.3.0",
        "6.0.3.1"
      ]
    },
    {
      "name": "Acer A700",
      "touch_version": "6.0.3.1",
      "version": "6.0.3.1",
      "lunch": "cm_a700-userdebug",
      "key": "a700",
      "flash_recovery": "dd if=%s of=/dev/block/platform/sdhci-tegra.3/by-name/SOS bs=4096 ; ",
      "init": "init.picasso_mf.rc",
      "legacy_versions": [
        "6.0.2.3"
      ]
    },
    {
      "name": "Google Nexus 7 (GSM)",
      "touch_version": "6.0.3.6",
      "version": "6.0.3.6",
      "lunch": "cm_tilapia-userdebug",
      "key": "tilapia",
      "flash_recovery": "dd if=%s of=/dev/block/platform/sdhci-tegra.3/by-name/SOS bs=4096 ; ",
      "init": "init.tilapia.rc",
      "legacy_versions": [
        "6.0.2.3",
        "6.0.3.1",
        "6.0.3.5"
      ]
    },
    {
      "name": "Samsung Galaxy Note 2 (LTE)",
      "touch_version": "6.0.3.6",
      "version": "6.0.3.6",
      "lunch": "cm_t0lte-userdebug",
      "key": "t0lte",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p9 bs=4096 ; ",
      "init": "init.t0lte.rc",
      "legacy_versions": [
        "6.0.2.3",
        "6.0.2.4",
        "6.0.2.5",
        "6.0.2.8",
        "6.0.3.0",
        "6.0.3.1",
        "6.0.3.2"
      ]
    },
    {
      "name": "LG Optimus 3DMax",
      "inits": [
        "init.lgep720board.rc",
        "/bootimages/battery_charging_01.rle"
      ],
      "touch_version": "6.0.2.3",
      "version": "6.0.2.3",
      "lunch": "cm_p720-userdebug",
      "key": "p720",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p6 ; ",
      "legacy_versions": [

      ],
      "reboot_recovery": "echo '518 R 1' > /sys/kernel/kobject_lge_nvdata/dynamic_nvdata_raw_write ; reboot ; "
    },
    {
      "name": "Samsung Galaxy S3 (Cricket)",
      "touch_version": "6.0.3.8",
      "version": "6.0.3.8",
      "lunch": "cm_d2cri-userdebug",
      "key": "d2cri",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p18 bs=4096 ; ",
      "init": "init.d2cri.rc",
      "legacy_versions": [
        "6.0.2.7",
        "6.0.2.8",
        "6.0.2.9",
        "6.0.3.0",
        "6.0.3.1",
        "6.0.3.6",
        "6.0.3.7"
      ]
    },
    {
      "name": "HTC Sensation XL",
      "touch_version": "6.0.2.7",
      "version": "6.0.2.7",
      "lunch": "cm_runnymede-userdebug",
      "key": "runnymede",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p21 bs=4096 ; ",
      "init": "init.runnymede.rc",
      "legacy_versions": [

      ]
    },
    {
      "name": "Pantech Presto",
      "touch_version": "6.0.2.7",
      "version": "6.0.2.7",
      "lunch": "cm_presto-userdebug",
      "key": "presto",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p18 bs=4096 ; ",
      "init": "init.presto.rc",
      "legacy_versions": [

      ]
    },
    {
      "name": "ZTE Sequent",
      "touch_version": "6.0.2.7",
      "version": "6.0.2.7",
      "lunch": "cm_warp2-userdebug",
      "key": "warp2",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p13 bs=4096 ; ",
      "init": "init.warp2.rc",
      "legacy_versions": [

      ]
    },
    {
      "name": "Google Nexus Q",
      "version": "6.0.3.1",
      "lunch": "cm_steelhead-userdebug",
      "key": "steelhead",
      "flash_recovery": "dd if=%s of=/dev/block/platform/omap/omap_hsmmc.0/by-name/recovery bs=4096 ; ",
      "init": "init.steelhead.rc",
      "legacy_versions": [
        "6.0.2.7"
      ]
    },
    {
      "name": "Samsung Prevail 2 (Boost Mobile)",
      "inits": [
        "init.carrier.rc",
        "init.prevail2spr.rc"
      ],
      "touch_version": "6.0.2.7",
      "version": "6.0.2.7",
      "lunch": "cm_prevail2spr-userdebug",
      "key": "prevail2spr",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p15 bs=4096 ; ",
      "legacy_versions": [

      ]
    },
    {
      "name": "Samsung Galaxy S3 Mini",
      "touch_version": "6.0.2.7",
      "version": "6.0.2.7",
      "lunch": "cm_golden-userdebug",
      "key": "golden",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p21 bs=4096 ; ",
      "init": "init.golden.rc",
      "legacy_versions": [

      ]
    },
    {
      "name": "HTC Droid Incredible 4G LTE",
      "touch_version": "6.0.3.3",
      "version": "6.0.3.3",
      "lunch": "cm_fireball-userdebug",
      "key": "fireball",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p22 bs=4096 ; ",
      "init": "init.fireball.rc",
      "legacy_versions": [
        "6.0.2.8",
        "6.0.2.9",
        "6.0.3.1"
      ]
    },
    {
      "name": "HTC Jetstream",
      "touch_version": "6.0.2.8",
      "version": "6.0.2.8",
      "lunch": "cm_puccinilte-userdebug",
      "key": "puccinilte",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p23 bs=4096 ; ",
      "init": "init.puccinilte.rc",
      "legacy_versions": [

      ]
    },
    {
      "name": "LG Optimus L7",
      "touch_version": "6.0.2.8",
      "version": "6.0.2.8",
      "lunch": "cm_p700-userdebug",
      "key": "p700",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p17 bs=4096 ; ",
      "init": "init.u0.rc",
      "legacy_versions": [

      ]
    },
    {
      "name": "HTC One",
      "touch_version": "6.0.3.1",
      "version": "6.0.3.1",
      "lunch": "cm_m7-userdebug",
      "key": "m7",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p34 bs=4096 ; ",
      "init": "init.m7.rc",
      "legacy_versions": [
        "6.0.2.8",
        "6.0.3.0"
      ]
    },
    {
      "name": "HTC Butterfly (dlxu)",
      "touch_version": "6.0.3.1",
      "version": "6.0.3.1",
      "lunch": "cm_dlxu-userdebug",
      "key": "dlxu",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p20 bs=4096 ; ",
      "init": "init.dlxu.rc",
      "legacy_versions": [
        "6.0.2.8",
        "6.0.3.0"
      ]
    },
    {
      "name": "HTC Butterfly (dlxub1)",
      "touch_version": "6.0.3.1",
      "version": "6.0.3.1",
      "lunch": "cm_dlxub1-userdebug",
      "key": "dlxub1",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p20 bs=4096 ; ",
      "init": "init.dlxub1.rc",
      "legacy_versions": [
        "6.0.2.8",
        "6.0.3.0"
      ]
    },
    {
      "name": "HTC Butterfly J",
      "touch_version": "6.0.3.1",
      "version": "6.0.3.1",
      "lunch": "cm_dlxj-userdebug",
      "key": "dlxj",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p20 bs=4096 ; ",
      "init": "init.dlxj.rc",
      "legacy_versions": [
        "6.0.2.8",
        "6.0.3.0"
      ]
    },
    {
      "name": "LG Optimus L5",
      "version": "6.0.2.8",
      "lunch": "cm_e610-userdebug",
      "key": "e610",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p17 bs=4096 ; ",
      "init": "init.m4.rc",
      "legacy_versions": [

      ]
    },
    {
      "name": "HTC One X (AT&T)",
      "touch_version": "6.0.3.1",
      "version": "6.0.3.1",
      "lunch": "cm_evita-userdebug",
      "key": "evita",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p22 bs=4096 ; ",
      "init": "init.evita.rc",
      "legacy_versions": [
        "6.0.2.8"
      ]
    },
    {
      "name": "Samsung Galaxy Tab 10.1",
      "touch_version": "6.0.3.1",
      "version": "6.0.3.1",
      "lunch": "cm_p4-userdebug",
      "key": "p4",
      "flash_recovery": "dd if=%s of=/dev/block/platform/sdhci-tegra.3/by-num/p2 bs=4096 ; ",
      "ro.product.devices": [
        "p4",
        "GT-P7500",
        "p7500"
      ],
      "init": "init.p4.rc",
      "legacy_versions": [
        "6.0.2.9",
        "6.0.3.0"
      ]
    },
    {
      "name": "Samsung Galaxy Tab 10.1 (T-Mobile)",
      "touch_version": "6.0.3.1",
      "version": "6.0.3.1",
      "lunch": "cm_p4tmo-userdebug",
      "key": "p4tmo",
      "flash_recovery": "dd if=%s of=/dev/block/platform/sdhci-tegra.3/by-num/p2 bs=4096 ; ",
      "init": "init.p4tmo.rc",
      "legacy_versions": [
        "6.0.2.9",
        "6.0.3.0"
      ]
    },
    {
      "name": "Samsung Galaxy Tab 10.1 (Verizon)",
      "touch_version": "6.0.3.1",
      "version": "6.0.3.1",
      "lunch": "cm_p4vzw-userdebug",
      "key": "p4vzw",
      "flash_recovery": "dd if=%s of=/dev/block/platform/sdhci-tegra.3/by-num/p2 bs=4096 ; ",
      "init": "init.p4vzw.rc",
      "legacy_versions": [
        "6.0.2.9",
        "6.0.3.0"
      ]
    },
    {
      "name": "LG Optimus L9",
      "touch_version": "6.0.3.1",
      "version": "6.0.3.1",
      "lunch": "cm_p760-userdebug",
      "key": "p760",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p4 bs=4096 ; ",
      "init": "init.u0.rc",
      "legacy_versions": [
        "6.0.2.9"
      ]
    },
    {
      "name": "Samsung Galaxy S3 LTE (GT-I9305)",
      "touch_version": "6.0.3.6",
      "version": "6.0.3.6",
      "lunch": "cm_i9305-userdebug",
      "key": "i9305",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p9 bs=4096 ; ",
      "init": "ueventd.smdk4x12.rc",
      "legacy_versions": [
        "6.0.2.9",
        "6.0.3.1",
        "6.0.3.2"
      ]
    },
    {
      "name": "Samsung Galaxy Tab 10.1v",
      "touch_version": "6.0.3.1",
      "version": "6.0.3.1",
      "lunch": "cm_p3-userdebug",
      "key": "p3",
      "flash_recovery": "dd if=%s of=/dev/block/platform/sdhci-tegra.3/by-num/p2 bs=4096 ; ",
      "init": "init.p3.rc",
      "legacy_versions": [
        "6.0.2.9"
      ]
    },
    {
      "name": "Samsung Galaxy Note 10.1",
      "touch_version": "6.0.3.6",
      "version": "6.0.3.6",
      "lunch": "cm_n8013-userdebug",
      "key": "n8013",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p6 bs=4096 ; ",
      "init": "init.n8013.rc",
      "legacy_versions": [
        "6.0.3.0",
        "6.0.3.1"
      ]
    },
    {
      "name": "Samsung Galaxy Note 2 (Verizon)",
      "touch_version": "6.0.3.0",
      "version": "6.0.3.0",
      "lunch": "cm_i605-userdebug",
      "key": "i605",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p9 bs=4096 ; ",
      "ro.product.devices": [
        "i605",
        "t0ltevzw"
      ],
      "init": "init.i605.rc",
      "legacy_versions": [

      ]
    },
    {
      "name": "Samsung Galaxy Note 2 (Sprint)",
      "touch_version": "6.0.3.1",
      "version": "6.0.3.1",
      "lunch": "cm_l900-userdebug",
      "key": "l900",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p9 bs=4096 ; ",
      "ro.product.devices": [
        "l900",
        "t0ltespr"
      ],
      "init": "init.l900.rc",
      "legacy_versions": [
        "6.0.3.0"
      ]
    },
    {
      "name": "Samsung Galaxy Note 2 (AT&T)",
      "touch_version": "6.0.3.6",
      "version": "6.0.3.6",
      "lunch": "cm_t0lteatt-userdebug",
      "key": "t0lteatt",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p9 bs=4096 ; ",
      "init": "init.t0lteatt.rc",
      "legacy_versions": [
        "6.0.3.0",
        "6.0.3.1"
      ]
    },
    {
      "name": "Samsung Galaxy Note 2 (T-Mobile)",
      "touch_version": "6.0.3.7",
      "version": "6.0.3.7",
      "lunch": "cm_t0ltetmo-userdebug",
      "key": "t0ltetmo",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p9 bs=4096 ; ",
      "init": "init.t0ltetmo.rc",
      "legacy_versions": [
        "6.0.3.0",
        "6.0.3.1",
        "6.0.3.6"
      ]
    },
    {
      "name": "LG Optimus G Intl (E975)",
      "touch_version": "6.0.3.0",
      "version": "6.0.3.0",
      "lunch": "cm_e975-userdebug",
      "key": "e975",
      "flash_recovery": "dd if=%s of=/dev/block/platform/msm_sdcc.1/by-name/recovery bs=4096 ; ",
      "init": "init.geehrc.rc",
      "legacy_versions": [

      ]
    },
    {
      "name": "LG Optimus 4X HD",
      "touch_version": "6.0.3.1",
      "version": "6.0.3.1",
      "lunch": "cm_p880-userdebug",
      "key": "p880",
      "flash_recovery": "dd if=%s of=/dev/block/platform/sdhci-tegra.3/by-name/SOS bs=4096 ; ",
      "init": "init.x3.rc",
      "legacy_versions": [

      ],
      "reboot_recovery": "echo 'boot-recovery' | dd of=/dev/block/mmcblk0p5 bs=1 count=13 ; reboot ; "
    },
    {
      "name": "Samsung Galaxy Note (T-Mobile)",
      "touch_version": "6.0.3.6",
      "version": "6.0.3.6",
      "lunch": "cm_quincytmo-userdebug",
      "key": "quincytmo",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p22 bs=4096 ; ",
      "init": "init.quincytmo.rc",
      "legacy_versions": [
        "6.0.3.1"
      ]
    },
    {
      "name": "Samsung Galaxy Note 10.1 (GSM)",
      "touch_version": "6.0.3.6",
      "version": "6.0.3.6",
      "lunch": "cm_n8000-userdebug",
      "key": "n8000",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p6 bs=4096 ; ",
      "init": "init.n8000.rc",
      "legacy_versions": [
        "6.0.3.1"
      ]
    },
    {
      "name": "Oppo Find5",
      "touch_version": "6.0.3.7",
      "version": "6.0.3.7",
      "lunch": "cm_find5-userdebug",
      "key": "find5",
      "flash_recovery": "dd if=%s of=/dev/block/platform/msm_sdcc.1/by-name/recovery bs=4096 ; ",
      "init": "init.find5.rc",
      "legacy_versions": [
        "6.0.3.1"
      ]
    },
    {
      "name": "Samsung Galaxy S4 (T-Mobile)",
      "touch_version": "6.0.3.8",
      "version": "6.0.3.8",
      "lunch": "cm_jfltetmo-userdebug",
      "key": "jfltetmo",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p21 bs=4096 ; ",
      "ro.product.devices": [
        "jfltetmo",
        "jflteMetroPCS"
      ],
      "init": "init.jfltetmo.rc",
      "legacy_versions": [
        "6.0.3.2",
        "6.0.3.6"
      ]
    },
    {
      "name": "Samsung Galaxy S4 (Canada/Bell)",
      "touch_version": "6.0.3.8",
      "version": "6.0.3.8",
      "lunch": "cm_jfltecan-userdebug",
      "key": "jfltecan",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p21 bs=4096 ; ",
      "init": "init.jfltecan.rc",
      "legacy_versions": [
        "6.0.3.2",
        "6.0.3.6"
      ]
    },
    {
      "name": "ZTE Engage",
      "version": "6.0.3.2",
      "lunch": "cm_V8000-userdebug",
      "key": "V8000",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p17 bs=4096 ; ",
      "init": "init.zte.rc",
      "legacy_versions": [

      ]
    },
    {
      "name": "Samsung Galaxy S4 (i9500)",
      "touch_version": "6.0.3.2",
      "version": "6.0.3.2",
      "lunch": "cm_i9500-userdebug",
      "key": "i9500",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p10 bs=4096 ; ",
      "init": "init.i9500.rc",
      "legacy_versions": [

      ]
    },
    {
      "name": "Motorola Xoom (GSM)",
      "touch_version": "6.0.3.2",
      "version": "6.0.3.2",
      "lunch": "cm_everest-userdebug",
      "key": "everest",
      "flash_recovery": "dd if=%s of=/dev/block/platform/sdhci-tegra.3/by-name/recovery bs=4096 ; ",
      "init": "init.everest.rc",
      "legacy_versions": [

      ]
    },
    {
      "name": "HTC Desire X",
      "touch_version": "6.0.3.2",
      "version": "6.0.3.2",
      "lunch": "cm_protou-userdebug",
      "key": "protou",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p21 bs=4096 ; ",
      "init": "init.protou.rc",
      "legacy_versions": [

      ]
    },
    {
      "name": "HTC One (Sprint)",
      "touch_version": "6.0.3.6",
      "version": "6.0.3.6",
      "lunch": "cm_m7spr-userdebug",
      "key": "m7spr",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p36 bs=4096 ; ",
      "ro.product.devices": [
        "m7spr",
        "m7wls"
      ],
      "init": "init.m7spr.rc",
      "legacy_versions": [
        "6.0.3.2"
      ]
    },
    {
      "name": "HTC One (T-Mobile)",
      "touch_version": "6.0.3.6",
      "version": "6.0.3.6",
      "lunch": "cm_m7tmo-userdebug",
      "key": "m7tmo",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p34 bs=4096 ; ",
      "init": "init.m7tmo.rc",
      "legacy_versions": [
        "6.0.3.2"
      ]
    },
    {
      "name": "HTC One (AT&T)",
      "touch_version": "6.0.3.6",
      "version": "6.0.3.6",
      "lunch": "cm_m7att-userdebug",
      "key": "m7att",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p34 bs=4096 ; ",
      "init": "init.m7att.rc",
      "legacy_versions": [
        "6.0.3.2",
        "6.0.3.5"
      ]
    },
    {
      "name": "Samsung Galaxy S4 (AT&T)",
      "touch_version": "6.0.3.8",
      "version": "6.0.3.8",
      "lunch": "cm_jflteatt-userdebug",
      "key": "jflteatt",
      "flash_recovery": "dd if=/dev/block/platform/msm_sdcc.1/by-name/aboot of=/sdcard/clockworkmod/aboot.img; /data/data/com.koushikdutta.rommanager/files/loki_patch recovery /sdcard/clockworkmod/aboot.img %s /sdcard/clockworkmod/recovery.lok ; /data/data/com.koushikdutta.rommanager/files/loki_flash recovery /sdcard/clockworkmod/recovery.lok ; ",
      "init": "init.jflteatt.rc",
      "legacy_versions": [
        "6.0.3.2",
        "6.0.3.6"
      ]
    },
    {
      "name": "HTC One (non-US GSM)",
      "touch_version": "6.0.3.6",
      "version": "6.0.3.6",
      "lunch": "cm_m7ul-userdebug",
      "key": "m7ul",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p34 bs=4096 ; ",
      "init": "init.m7ul.rc",
      "legacy_versions": [
        "6.0.3.2"
      ]
    },
    {
      "name": "Samsung Galaxy S4 (Verizon)",
      "touch_version": "6.0.3.6",
      "version": "6.0.3.6",
      "lunch": "cm_jfltevzw-userdebug",
      "key": "jfltevzw",
      "flash_recovery": "dd if=/dev/block/platform/msm_sdcc.1/by-name/aboot of=/sdcard/clockworkmod/aboot.img; /data/data/com.koushikdutta.rommanager/files/loki_patch recovery /sdcard/clockworkmod/aboot.img %s /sdcard/clockworkmod/recovery.lok ; /data/data/com.koushikdutta.rommanager/files/loki_flash recovery /sdcard/clockworkmod/recovery.lok ; ",
      "init": "init.jfltevzw.rc",
      "legacy_versions": [
        "6.0.3.2"
      ]
    },
    {
      "name": "Samsung Galaxy S4 (Sprint)",
      "touch_version": "6.0.3.8",
      "version": "6.0.3.8",
      "lunch": "cm_jfltespr-userdebug",
      "key": "jfltespr",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p21 bs=4096 ; ",
      "init": "init.jfltespr.rc",
      "legacy_versions": [
        "6.0.3.2",
        "6.0.3.6"
      ]
    },
    {
      "name": "Samsung Galaxy S4 (US Cellular)",
      "touch_version": "6.0.3.2",
      "version": "6.0.3.8",
      "lunch": "cm_jflteusc-userdebug",
      "key": "jflteusc",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p21 bs=4096 ; ",
      "init": "init.jflteusc.rc",
      "legacy_versions": [
        "6.0.3.2"
      ]
    },
    {
      "name": "Samsung Galaxy S4 (i9505)",
      "touch_version": "6.0.3.6",
      "version": "6.0.3.6",
      "lunch": "cm_jfltexx-userdebug",
      "key": "jfltexx",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p21 bs=4096 ; ",
      "init": "init.jfltexx.rc",
      "legacy_versions": [
        "6.0.3.2",
        "6.0.3.3",
        "6.0.3.5"
      ]
    },
    {
      "name": "Samsung Galaxy S4 (Cricket)",
      "touch_version": "6.0.3.8",
      "version": "6.0.3.8",
      "lunch": "cm_jfltecri-userdebug",
      "key": "jfltecri",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p21 bs=4096 ; ",
      "init": "init.jfltecri.rc",
      "legacy_versions": [
        "6.0.3.2",
        "6.0.3.6"
      ]
    },
    {
      "name": "LG Optimus Q (LGL55C Tracfone)",
      "version": "6.0.3.3",
      "lunch": "cm_lgl55c-userdebug",
      "key": "lgl55c",
      "flash_recovery": "dd if=%s of=/dev/block/mtdblock2 bs=4096 ; ",
      "init": "init.gelato.rc",
      "legacy_versions": [

      ]
    },
    {
      "name": "Samsung Galaxy S4 (C Spire)",
      "touch_version": "6.0.3.8",
      "version": "6.0.3.8",
      "lunch": "cm_jfltecsp-userdebug",
      "key": "jfltecsp",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p21 bs=4096 ; ",
      "init": "init.jfltecsp.rc",
      "legacy_versions": [
        "6.0.3.5",
        "6.0.3.6"
      ]
    },
    {
      "name": "Huawei Ascend Q",
      "version": "6.0.3.5",
      "lunch": "cm_m660-userdebug",
      "key": "m660",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p16 ; ",
      "init": "init.highmem.rc",
      "legacy_versions": [

      ]
    },
    {
      "name": "Google Nexus 7 (2013)",
      "touch_version": "6.0.3.7",
      "version": "6.0.3.7",
      "lunch": "cm_flo-userdebug",
      "key": "flo",
      "flash_recovery": "dd if=%s of=/dev/block/platform/msm_sdcc.1/by-name/recovery bs=4096 ; ",
      "init": "init.flo.rc",
      "legacy_versions": [

      ]
    },
    {
      "name": "Samsung SGH-T699",
      "touch_version": "6.0.3.8",
      "version": "6.0.3.8",
      "lunch": "cm_apexqtmo-userdebug",
      "key": "apexqtmo",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p18 bs=4096 ; ",
      "init": "init.apexqtmo.rc",
      "legacy_versions": [

      ]
    },
    {
      "name": "LG Optimus G (ATT)",
      "touch_version": "6.0.3.8",
      "version": "6.0.3.8",
      "lunch": "cm_e970-userdebug",
      "key": "e970",
      "flash_recovery": "dd if=%s of=/dev/block/platform/msm_sdcc.1/by-name/recovery bs=4096 ; ",
      "init": "init.gee.rc",
      "legacy_versions": [

      ]
    },
    {
      "name": "LG Optimus G (Canada)",
      "touch_version": "6.0.3.8",
      "version": "6.0.3.8",
      "lunch": "cm_e973-userdebug",
      "key": "e973",
      "flash_recovery": "dd if=%s of=/dev/block/platform/msm_sdcc.1/by-name/recovery bs=4096 ; ",
      "init": "init.gee.rc",
      "legacy_versions": [

      ]
    },
    {
      "name": "LG Optimus G (Sprint)",
      "touch_version": "6.0.3.8",
      "version": "6.0.3.8",
      "lunch": "cm_ls970-userdebug",
      "key": "ls970",
      "flash_recovery": "dd if=%s of=/dev/block/platform/msm_sdcc.1/by-name/recovery bs=4096 ; ",
      "init": "init.gee.rc",
      "legacy_versions": [

      ]
    },
    {
      "name": "LG Optimus G Pro (GSM)",
      "touch_version": "6.0.3.8",
      "version": "6.0.3.8",
      "lunch": "cm_e980-userdebug",
      "key": "e980",
      "flash_recovery": "dd if=/dev/block/platform/msm_sdcc.1/by-name/aboot of=/sdcard/clockworkmod/aboot.img; /data/data/com.koushikdutta.rommanager/files/loki_patch recovery /sdcard/clockworkmod/aboot.img %s /sdcard/clockworkmod/recovery.lok ; /data/data/com.koushikdutta.rommanager/files/loki_flash recovery /sdcard/clockworkmod/recovery.lok ; ",
      "init": "init.gee_gk.rc",
      "legacy_versions": [

      ]
    }
  ],
  "recovery_url": "http://download2.clockworkmod.com/recoveries/recovery-clockwork-%s-%s.img",
  "manifest_signature": "O8+Kc2mdQz0e/AjCQn6Rw6fK5Kr5LZItJ474Ua3gF2o4IgdCQZXIbwCHIo6xeqY3pVEGtjYmmyO1PkRYcGqq2rB2wQM8SoKFl/70vG0ihEZ5TDeruKUgxVVSNM3e09kBvCxYK89GWqVWkNHtvTu1T1F9w6FilzCsNFSAXHD0Bos=",
  "use_in_app": false,
  "keywords": "phone accessories,droid,gadgets,bluetooth headset,car charger,sd card",
  "manifest": "http://developer.clockworkmod.com/merge"
}