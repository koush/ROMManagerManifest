{
  "ad_network": "admob",
  "recovery_url": "http://download2.clockworkmod.com/recoveries/recovery-clockwork-%s-%s.img",
  "manifest": "http://developer.clockworkmod.com/merge",
  "owners": {
    "arcee@cyanogenmod.com": true,
    "daniel.hillenbrand@codeworkx.de": true,
    "cvpcsm@gmail.com": true,
    "attn1.repo@gmail.com": true,
    "ferguson.david@gmail.com": true,
    "koush@clockworkmod.com": true,
    "bigbeeshane@gmail.com": true,
    "playfulgod@gmail.com": true,
    "njgreb@gmail.com": true,
    "echen@cyngn.com": true,
    "layhertony@gmail.com": true,
    "keaneyw@gmail.com": true,
    "utkanos@gmail.com": true
  },
  "recovery_twrp_url": "http://download2.clockworkmod.com/twrp/openrecovery-twrp-%s-%s.img",
  "devices": [
    {
      "init": "init.sholes.rc",
      "alternate_recovery": {
        "clockwork": false,
        "url": "http://koush.kanged.net/cm/recoveries/sprecovery.img",
        "name": "SPRecovery 0.99.3b"
      },
      "key": "sholes",
      "name": "Motorola Droid",
      "legacy_versions": [
        "3.1.0.2",
        "2.5.1.4",
        "2.5.1.3",
        "2.5.1.1",
        "2.5.0.1"
      ],
      "version": "2.5.0.1"
    },
    {
      "init": "init.sapphire.rc",
      "alternate_recovery": {
        "clockwork": false,
        "url": "http://files.androidspin.com/downloads.php?dir=amon_ra/RECOVERY/&file=recovery-RA-sapphire-v1.7.0G.img",
        "name": "RA Recovery v1.7.0G"
      },
      "key": "sapphire",
      "name": "HTC MyTouch 3G",
      "legacy_versions": [
        "2.5.0.7",
        "2.5.1.4",
        "2.5.1.3",
        "2.5.1.1"
      ],
      "version": "2.5.0.7"
    },
    {
      "init": "init.sapphire.rc",
      "alternate_recovery": {
        "clockwork": false,
        "url": "http://files.androidspin.com/downloads.php?dir=amon_ra/RECOVERY/&file=recovery-RA-sapphire-v1.7.0H.img",
        "name": "RA Recovery v1.7.0H"
      },
      "key": "magic",
      "name": "HTC Magic",
      "legacy_versions": [
        "2.5.0.7",
        "2.5.1.4",
        "2.5.1.3",
        "2.5.1.1"
      ],
      "version": "2.5.0.7"
    },
    {
      "init": "init.trout.rc",
      "alternate_recovery": {
        "clockwork": false,
        "url": "http://files.androidspin.com/downloads.php?dir=amon_ra/RECOVERY/&file=recovery-RA-dream-v1.7.0.img",
        "name": "RA Recovery v1.7.0"
      },
      "key": "dream",
      "name": "HTC G1/Dream",
      "legacy_versions": [
        "2.5.0.7",
        "2.5.1.4",
        "2.5.1.3",
        "2.5.1.1"
      ],
      "version": "2.5.0.7"
    },
    {
      "init": "init.mahimahi.rc",
      "lunch": "cyanogen_passion-eng",
      "alternate_recovery": {
        "clockwork": false,
        "url": "http://files.androidspin.com/downloads.php?dir=amon_ra/RECOVERY/&file=recovery-RA-passion-v2.2.1.img",
        "name": "RA Recovery v2.2.1"
      },
      "key": "passion",
      "name": "Google Nexus One",
      "legacy_versions": [
        "3.0.0.5",
        "2.5.1.4",
        "2.5.1.3",
        "2.5.1.1",
        "3.0.0.5",
        "5.0.0.1",
        "5.0.0.8",
        "5.0.1.0"
      ],
      "version": "5.0.2.0"
    },
    {
      "init": "init.hero.rc",
      "alternate_recovery": {
        "clockwork": false,
        "url": "http://files.androidspin.com/downloads.php?dir=amon_ra/RECOVERY/&file=recovery-RA-hero-v1.7.0.1.img",
        "name": "RA Recovery v1.7.0.1"
      },
      "key": "hero",
      "name": "HTC Hero (GSM)",
      "legacy_versions": [
        "2.5.0.7",
        "2.5.1.4",
        "2.5.1.3",
        "2.5.1.1"
      ],
      "version": "2.5.0.7"
    },
    {
      "init": "init.heroc.rc",
      "alternate_recovery": {
        "clockwork": false,
        "url": "http://www.androidspin.com/downloads.php?dir=amon_ra/RECOVERY/&file=recovery-RA-heroc-v1.6.2.img",
        "name": "RA Recovery v1.6.2"
      },
      "key": "heroc",
      "name": "HTC Hero (CDMA)",
      "legacy_versions": [
        "2.5.0.7",
        "2.5.1.4",
        "2.5.1.3",
        "2.5.1.1"
      ],
      "version": "2.5.0.7"
    },
    {
      "init": "init.supersonic.rc",
      "touch_version": "5.8.0.1",
      "lunch": "cyanogen_supersonic-eng",
      "alternate_recovery": {
        "clockwork": false,
        "url": "http://files.androidspin.com/downloads.php?dir=amon_ra/RECOVERY/&file=recovery-RA-supersonic-v2.3.img",
        "name": "RA Recovery v2.3"
      },
      "key": "supersonic",
      "name": "HTC Evo",
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
      ],
      "version": "5.0.2.2"
    },
    {
      "readonly_recovery": true,
      "init": "init.legend.rc",
      "lunch": "cyanogen_legend-eng",
      "key": "legend",
      "name": "HTC Legend",
      "legacy_versions": [
        "2.5.0.7",
        "2.5.1.4",
        "2.5.1.3",
        "2.5.1.1",
        "2.5.0.7",
        "5.0.0.1",
        "5.0.0.8",
        "5.0.1.0"
      ],
      "version": "5.0.2.0"
    },
    {
      "init": "init.bravo.rc",
      "touch_version": "5.8.0.2",
      "lunch": "cyanogen_bravo-eng",
      "key": "bravo",
      "name": "HTC Desire",
      "legacy_versions": [
        "2.5.0.7",
        "2.5.1.4",
        "2.5.1.3",
        "2.5.1.1",
        "2.5.0.7",
        "5.0.0.0",
        "5.0.0.8",
        "5.0.1.0"
      ],
      "version": "5.0.2.0"
    },
    {
      "init": "init.bravoc.rc",
      "lunch": "cyanogen_bravoc-eng",
      "key": "bravoc",
      "name": "HTC Desire CDMA",
      "legacy_versions": [
        "2.5.0.9",
        "2.5.1.4",
        "2.5.1.3",
        "2.5.1.1",
        "2.5.0.9",
        "5.0.0.1",
        "5.0.1.0"
      ],
      "version": "5.0.2.0"
    },
    {
      "init": "init.qcom.rc",
      "key": "pulsemini",
      "name": "Huawei Pulse Mini",
      "legacy_versions": [
        "2.5.0.7",
        "2.5.1.4",
        "2.5.1.3",
        "2.5.1.1"
      ],
      "version": "2.5.0.7"
    },
    {
      "init": "init.inc.rc",
      "lunch": "cyanogen_inc-eng",
      "alternate_recovery": {
        "clockwork": false,
        "url": "http://dl.dropbox.com/u/12949506/RomManager/recovery-RA-inc-3.02.img",
        "name": "RA_GNM Recovery v3.02"
      },
      "key": "inc",
      "name": "HTC Incredible (CDMA)",
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
      ],
      "version": "5.0.2.0"
    },
    {
      "readonly_recovery": true,
      "init": "init.liberty.rc",
      "key": "liberty",
      "name": "HTC Aria",
      "legacy_versions": [
        "2.5.0.7",
        "2.5.1.4",
        "2.5.1.3",
        "2.5.1.1"
      ],
      "version": "2.5.0.7"
    },
    {
      "readonly_recovery": true,
      "init": "init.desirec.rc",
      "alternate_recovery": {
        "clockwork": false,
        "url": "http://www.androidspin.com/downloads.php?dir=amon_ra/RECOVERY/&file=recovery-RA-eris-v1.6.2.img",
        "name": "RA Recovery v1.6.2"
      },
      "key": "desirec",
      "name": "Motorola Droid Eris",
      "legacy_versions": [
        "2.5.0.7",
        "2.5.1.4",
        "2.5.1.3",
        "2.5.1.1"
      ],
      "version": "2.5.0.7"
    },
    {
      "readonly_recovery": true,
      "init": "init.buzz.rc",
      "lunch": "cyanogen_buzz-eng",
      "key": "buzz",
      "name": "HTC Buzz (Wildfire)",
      "legacy_versions": [
        "3.0.0.6",
        "2.5.1.4",
        "2.5.1.3",
        "2.5.1.1",
        "2.5.0.7",
        "5.0.0.8",
        "5.0.1.0"
      ],
      "version": "5.0.2.0"
    },
    {
      "init": "init.qcom.rc",
      "key": "streak",
      "name": "Dell Streak",
      "legacy_versions": [
        "2.5.0.7",
        "2.5.1.4",
        "2.5.1.3",
        "2.5.1.1"
      ],
      "version": "2.5.0.7"
    },
    {
      "readonly_recovery": true,
      "init": "init.latte.rc",
      "key": "espresso",
      "name": "HTC MyTouch Slide",
      "legacy_versions": [
        "2.5.0.7",
        "2.5.1.4",
        "2.5.1.3",
        "2.5.1.1"
      ],
      "version": "2.5.0.7"
    },
    {
      "readonly_recovery": true,
      "init": "lpm.rc",
      "key": "galaxys",
      "name": "Samsung GalaxyS i9000",
      "legacy_versions": [
        "2.5.1.2",
        "2.5.1.4",
        "2.5.1.3",
        "2.5.1.1"
      ],
      "version": "2.5.1.2"
    },
    {
      "readonly_recovery": true,
      "init": "init.smdkc110.rc",
      "key": "fascinate",
      "name": "Samsung GalaxyS Fascinate",
      "legacy_versions": [
        "3.0.0.8",
        "2.5.1.4",
        "2.5.1.3",
        "2.5.1.1"
      ],
      "version": "3.0.0.8"
    },
    {
      "readonly_recovery": true,
      "init": "init.smdkc110.rc",
      "key": "vibrant",
      "name": "Samsung GalaxyS Vibrant",
      "legacy_versions": [
        "2.5.1.2",
        "2.5.1.4",
        "2.5.1.3",
        "2.5.1.1"
      ],
      "version": "2.5.1.2"
    },
    {
      "readonly_recovery": true,
      "init": "init.smdkc110.rc",
      "key": "captivate",
      "name": "Samsung GalaxyS Captivate",
      "legacy_versions": [
        "2.5.1.2",
        "2.5.1.4",
        "2.5.1.3",
        "2.5.1.1"
      ],
      "version": "2.5.1.2"
    },
    {
      "init": "init.qcom.rc",
      "key": "pulse",
      "name": "Huawei Pulse",
      "legacy_versions": [
        "2.5.0.7",
        "2.5.1.4",
        "2.5.1.3",
        "2.5.1.1"
      ],
      "version": "2.5.0.7"
    },
    {
      "init": "init.aloha.rc",
      "alternate_recovery": {
        "clockwork": false,
        "url": "http://dl.dropbox.com/u/12949506/RomManager/recovery-RA-aloha-2.2.2-GNM.img",
        "name": "RA_GNM Recovery v2.2.2"
      },
      "key": "aloha",
      "name": "LG Ally",
      "legacy_versions": [
        "2.5.0.7",
        "2.5.1.4",
        "2.5.1.3",
        "2.5.1.1"
      ],
      "version": "2.5.0.7"
    },
    {
      "readonly_recovery": true,
      "init": "init.mapphone_cdma.rc",
      "key": "milestone",
      "name": "Motorola Milestone",
      "legacy_versions": [
        "2.5.0.7",
        "2.5.1.4",
        "2.5.1.3",
        "2.5.1.1",
        "2.5.0.7"
      ],
      "version": "3.1.0.2"
    },
    {
      "reboot_recovery": "rm /cache/recovery/command ; echo 1 > /data/.recovery_mode ; sync ; reboot ;",
      "readonly_recovery": true,
      "init": "init.mapphone_cdma.rc",
      "key": "droidx",
      "flash_recovery": "dd if=%s of=/preinstall/recovery/recovery.zip ; ",
      "name": "Motorola Droid X",
      "legacy_versions": [
        "2.5.0.7"
      ],
      "version": "5.0.2.0"
    },
    {
      "reboot_recovery": "rm /cache/recovery/command ; echo 1 > /data/.recovery_mode ; sync ; reboot ;",
      "readonly_recovery": true,
      "init": "init.mapphone_cdma.rc",
      "lunch": "cyanogen_shadow-eng",
      "key": "shadow",
      "flash_recovery": "dd if=%s of=/preinstall/recovery/recovery.zip ; ",
      "name": "Motorola Droid X (2nd-init)",
      "legacy_versions": [
        "2.5.0.7"
      ],
      "version": "5.0.2.0"
    },
    {
      "init": "init.salsa.rc",
      "key": "salsa",
      "name": "Acer Liquid",
      "legacy_versions": [
        "2.5.1.4",
        "2.5.1.3",
        "2.5.1.1",
        "2.5.1.0"
      ],
      "version": "2.5.1.0"
    },
    {
      "init": "init.qcom.rc",
      "key": "z71",
      "name": "Commtiva Z71 (Boston, Blaze, and more)",
      "legacy_versions": [
        "2.5.1.4",
        "2.5.1.3",
        "2.5.1.1",
        "2.5.1.0"
      ],
      "version": "2.5.1.3"
    },
    {
      "init": "init.vision.rc",
      "touch_version": "5.8.1.0",
      "lunch": "cyanogen_vision-eng",
      "key": "vision",
      "flash_recovery": "dd if=/dev/zero of=/dev/block/mmcblk0p21 bs=4096 ; dd if=%s of=/dev/block/mmcblk0p21 bs=4096 ; ",
      "name": "HTC G2",
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
      ],
      "version": "5.0.2.7"
    },
    {
      "init": "init.glacier.rc",
      "touch_version": "5.8.1.0",
      "lunch": "cyanogen_glacier-eng",
      "key": "glacier",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p21 ; ",
      "name": "HTC MyTouch 4G",
      "legacy_versions": [
        "3.0.2.4",
        "3.0.0.5",
        "2.5.1.4",
        "2.5.1.3",
        "3.0.2.4",
        "5.0.0.1",
        "5.0.0.8",
        "5.0.1.0"
      ],
      "version": "5.0.2.0"
    },
    {
      "init": "init.spade.rc",
      "touch_version": "5.8.1.5",
      "lunch": "cyanogen_ace-eng",
      "key": "ace",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p21 ; ",
      "name": "HTC Desire HD",
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
      ],
      "version": "5.0.2.0"
    },
    {
      "init": "init.morrison.rc",
      "touch_version": "5.8.1.0",
      "lunch": "cyanogen_morrison-eng",
      "key": "morrison",
      "name": "Motorola Cliq",
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
      ],
      "version": "5.0.2.0"
    },
    {
      "reboot_recovery": "rm /cache/recovery/command ; echo 1 > /data/.recovery_mode ; sync ; reboot ;",
      "readonly_recovery": true,
      "init": "init.mapphone_cdma.rc",
      "lunch": "cyanogen_droid2-eng",
      "key": "droid2",
      "flash_recovery": "dd if=%s of=/preinstall/recovery/recovery.zip ; ",
      "name": "Motorola Droid 2",
      "legacy_versions": [
        "2.5.0.8"
      ],
      "version": "5.0.2.0"
    },
    {
      "init": "init.qcom.rc",
      "alternate_recovery": {
        "clockwork": false,
        "url": "http://dl.dropbox.com/u/10355648/recovery-ONE-1_6.img",
        "name": "ONE Recovery v1.6"
      },
      "key": "one",
      "name": "Geeksphone ONE",
      "legacy_versions": [
        "2.5.1.4",
        "2.5.1.3",
        "2.5.1.1",
        "2.5.1.0"
      ],
      "version": "2.5.1.3"
    },
    {
      "reboot_recovery": "echo start > /proc/ota ; ",
      "init": "init_recovery.rc",
      "key": "vega",
      "flash_recovery": "/data/data/com.koushikdutta.rommanager/files/tegra_flash_image recovery %s ; ",
      "name": "Advent Vega",
      "legacy_versions": [
        "2.5.1.4",
        "2.5.1.3",
        "2.5.1.1",
        "2.5.1.0",
        "2.5.1.4"
      ],
      "version": "3.0.2.7"
    },
    {
      "readonly_recovery": true,
      "init": "init.smdkc110.rc",
      "key": "att_tab",
      "name": "Samsung Galaxy Tab - ATT",
      "legacy_versions": [
        "2.5.1.8",
        "2.5.1.4",
        "2.5.1.3",
        "2.5.1.1"
      ],
      "version": "2.5.1.8"
    },
    {
      "readonly_recovery": true,
      "init": "init.smdkc110.rc",
      "key": "tmobile_tab",
      "name": "Samsung Galaxy Tab (T-Mobile)",
      "legacy_versions": [
        "2.5.1.8",
        "2.5.1.4",
        "2.5.1.3",
        "2.5.1.1"
      ],
      "version": "2.5.1.8"
    },
    {
      "init": "init.qcom.rc",
      "alternate_recovery": {
        "clockwork": false,
        "url": "http://dl.dropbox.com/u/15816725/MI700-recovery-V1_3.img",
        "name": "MI700 Recovery v1.6"
      },
      "key": "FM6",
      "name": "Commtiva Link N700, Spice MI700, and more",
      "legacy_versions": [
        "2.5.1.4",
        "2.5.1.3",
        "2.5.1.1",
        "2.5.1.0"
      ],
      "version": "2.5.1.2"
    },
    {
      "init": "init.herring.rc",
      "touch_version": "6.0.3.8",
      "lunch": "cm_crespo-userdebug",
      "key": "crespo",
      "name": "Google Nexus S",
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
      ],
      "version": "6.0.3.8"
    },
    {
      "readonly_recovery": true,
      "init": "init. mapphone_cdma.rc",
      "key": "droidpro",
      "name": "Motorola Droid Pro",
      "legacy_versions": [
        "2.5.0.8"
      ],
      "version": "2.5.0.8"
    },
    {
      "init": "init.qcom.rc",
      "key": "ascend",
      "name": "Huawei Ascend",
      "legacy_versions": [
        "3.0.0.5",
        "3.0.0.4"
      ],
      "version": "3.0.0.5"
    },
    {
      "init": "init.blade.rc",
      "lunch": "cyanogen_blade-eng",
      "key": "blade",
      "name": "ZTE Blade",
      "legacy_versions": [
        "3.0.1.4",
        "3.0.0.6",
        "3.0.1.4",
        "3.0.2.6",
        "3.0.2.7",
        "5.0.0.1",
        "5.0.0.8",
        "5.0.1.0"
      ],
      "version": "5.0.2.0"
    },
    {
      "init": "init.bahamas.rc",
      "lunch": "cyanogen_click-eng",
      "key": "click",
      "name": "HTC Click/Tattoo",
      "legacy_versions": [
        "3.0.0.6",
        "3.0.0.6",
        "3.0.2.7",
        "5.0.0.8",
        "5.0.1.0"
      ],
      "version": "5.0.2.0"
    },
    {
      "readonly_recovery": true,
      "init": "init_recovery.rc",
      "key": "a7",
      "name": "Elocity A7",
      "legacy_versions": [
        "3.0.0.8"
      ],
      "version": "3.0.0.8"
    },
    {
      "init": "init.zero.rc",
      "key": "zero",
      "name": "Geeksphone Zero",
      "legacy_versions": [
        "3.0.1.3"
      ],
      "version": "3.0.1.3"
    },
    {
      "init": "init.speedy.rc",
      "touch_version": "5.8.1.6",
      "lunch": "cyanogen_speedy-eng",
      "key": "speedy",
      "name": "HTC Evo Shift",
      "legacy_versions": [
        "3.0.1.4",
        "3.0.1.3",
        "3.0.1.2",
        "3.0.1.1",
        "3.0.1.4",
        "3.0.2.8",
        "3.2.0.1"
      ],
      "version": "5.0.2.0"
    },
    {
      "reboot_recovery": "echo 1 > /cache/.startrecovery ; sync ; reboot ;",
      "init": "init.aries.rc",
      "key": "captivatemtd",
      "officially_supported": false,
      "name": "Samsung Captivate (MTD)",
      "legacy_versions": [

      ]
    },
    {
      "reboot_recovery": "echo 1 > /cache/.startrecovery ; sync ; reboot ;",
      "init": "init.aries.rc",
      "key": "showcasemtd",
      "officially_supported": false,
      "name": "Samsung Showcase (MTD)",
      "legacy_versions": [

      ]
    },
    {
      "reboot_recovery": "echo 1 > /cache/.startrecovery ; sync ; reboot ;",
      "init": "init.aries.rc",
      "key": "mesmerizemtd",
      "officially_supported": false,
      "name": "Samsung Mesmerize (MTD)",
      "legacy_versions": [

      ]
    },
    {
      "reboot_recovery": "echo 1 > /cache/.startrecovery ; sync ; reboot ;",
      "init": "init.aries.rc",
      "key": "fascinatemtd",
      "officially_supported": false,
      "name": "Samsung Fascinate (MTD)",
      "legacy_versions": [

      ]
    },
    {
      "reboot_recovery": "echo 1 > /cache/.startrecovery ; sync ; reboot ;",
      "init": "init.aries.rc",
      "key": "vibrantmtd",
      "officially_supported": false,
      "name": "Samsung Vibrant (MTD)",
      "legacy_versions": [

      ]
    },
    {
      "reboot_recovery": "echo 1 > /cache/.startrecovery ; sync ; reboot ;",
      "init": "init.aries.rc",
      "key": "galaxysbmtd",
      "officially_supported": false,
      "name": "Samsung GalaxyS i9000B (MTD)",
      "legacy_versions": [

      ]
    },
    {
      "reboot_recovery": "echo 1 > /cache/.startrecovery ; sync ; reboot ;",
      "init": "init.aries.rc",
      "key": "galaxysmtd",
      "officially_supported": false,
      "name": "Samsung GalaxyS i9000 (MTD)",
      "legacy_versions": [

      ]
    },
    {
      "readonly_recovery": true,
      "init": "lpm.rc",
      "lunch": "full_epic4g-eng",
      "key": "epic4g",
      "name": "Samsung Epic4G",
      "legacy_versions": [

      ],
      "version": "5.0.2.7"
    },
    {
      "init": "init.tinyandroid.rc",
      "key": "streak7",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk3p1 ; ",
      "name": "Dell Streak 7",
      "legacy_versions": [
        "3.0.2.0",
        "3.0.1.9",
        "3.0.1.8",
        "3.0.1.7"
      ],
      "version": "3.0.2.0"
    },
    {
      "init": "init.mecha.rc",
      "touch_version": "5.8.0.2",
      "lunch": "cyanogen_mecha-eng",
      "alternate_recovery": {
        "clockwork": false,
        "url": "http://dl.dropbox.com/u/12949506/RomManager/recovery-ra-mecha-3.05.img",
        "name": "RA_GNM Recovery v3.05"
      },
      "key": "mecha",
      "name": "HTC Thunderbolt",
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
      ],
      "version": "5.0.2.1"
    },
    {
      "init": "init.ideos.rc",
      "key": "ideos",
      "name": "Huawei U8150 Ideos",
      "legacy_versions": [
        "3.0.2.4"
      ],
      "version": "3.0.2.4"
    },
    {
      "init": "init.stingray.rc",
      "touch_version": "6.0.3.1",
      "lunch": "cm_stingray-userdebug",
      "key": "stingray",
      "flash_recovery": "dd if=%s of=/dev/block/platform/sdhci-tegra.3/by-name/recovery ; ",
      "name": "Motorola XOOM",
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
      ],
      "version": "6.0.3.1"
    },
    {
      "init": "init.leo.rc",
      "key": "leo",
      "name": "HTC HD2",
      "legacy_versions": [
        "3.0.2.5",
        "3.0.2.4",
        "3.0.2.5"
      ],
      "version": "3.1.0.0"
    },
    {
      "init": "init.zeppelin.rc",
      "lunch": "cyanogen_zeppelin-eng",
      "key": "zeppelin",
      "name": "Motorola CLIQ XT/Quench (MB501)",
      "legacy_versions": [
        "3.0.2.4",
        "3.0.2.4",
        "5.0.0.8",
        "5.0.0.8",
        "5.0.1.0",
        "5.0.1.0"
      ],
      "version": "5.0.2.0"
    },
    {
      "init": "init.saga.rc",
      "touch_version": "5.8.1.5",
      "lunch": "full_saga-eng",
      "key": "saga",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p21 ; ",
      "name": "HTC Desire S",
      "legacy_versions": [
        "3.0.2.6",
        "5.0.1.9"
      ],
      "version": "5.0.2.0"
    },
    {
      "reboot_recovery": "echo 'boot-recovery' | dd of=/dev/block/mmcblk0p3 seek=6144 bs=1 ; reboot ; ",
      "readonly_recovery": true,
      "init": "init_recovery.rc",
      "lunch": "cyanogen_p999-eng",
      "key": "p999",
      "name": "LG G2X (T-Mobile)",
      "legacy_versions": [
        "3.0.2.7",
        "5.0.0.8",
        "5.0.1.0",
        "5.0.1.4",
        "5.0.1.6"
      ],
      "version": "5.0.2.0"
    },
    {
      "reboot_recovery": "echo 'boot-recovery' | dd of=/dev/block/mmcblk0p3 seek=6144 bs=1 ; reboot ; ",
      "touch_version": "6.0.3.1",
      "lunch": "cm_p990-userdebug",
      "inits": [
        "init_recovery.rc",
        "/bootimages/opening_01.rle"
      ],
      "key": "p990",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p7 ; ",
      "name": "LG Optimus 2X",
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
      "version": "6.0.3.1"
    },
    {
      "init": "init.herring.rc",
      "touch_version": "6.0.3.8",
      "lunch": "cm_crespo4g-userdebug",
      "key": "crespo4g",
      "name": "Google Nexus S 4G",
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
      ],
      "version": "6.0.3.8"
    },
    {
      "init": "init.thunderg.rc",
      "lunch": "full_thunderg-eng",
      "alternate_recovery": {
        "clockwork": false,
        "url": "http://dl.dropbox.com/u/12949506/RomManager/recovery-RA-thunderg-2.2.1-GNM.img",
        "name": "RA_GNM Recovery v2.2.1"
      },
      "key": "thunderg",
      "name": "LG Optimus One (old BB)",
      "legacy_versions": [
        "3.1.0.0",
        "5.0.0.8",
        "5.0.1.0"
      ],
      "version": "5.0.2.0"
    },
    {
      "init": "init.thunderg.rc",
      "lunch": "cyanogen_p500-eng",
      "key": "p500",
      "name": "LG Optimus One",
      "legacy_versions": [
        "5.0.2.0"
      ],
      "version": "5.0.2.7"
    },
    {
      "init": "init.qcom.rc",
      "key": "u8220",
      "name": "Huawei U8220/U8230",
      "legacy_versions": [

      ],
      "version": "3.1.0.1"
    },
    {
      "readonly_recovery": true,
      "init": "init.smdkc110.rc",
      "key": "charge",
      "name": "Samsung Charge",
      "legacy_versions": [

      ],
      "version": "3.1.0.1"
    },
    {
      "init": "init.mapphone_umts.rc",
      "key": "umts_jordan",
      "officially_supported": false,
      "name": "Motorola Defy",
      "legacy_versions": [

      ]
    },
    {
      "readonly_recovery": true,
      "init": "init.smdkc110.rc",
      "key": "galaxys4g",
      "name": "Samsung Galaxy S 4G",
      "legacy_versions": [
        "3.2.0.0"
      ],
      "version": "3.2.0.0"
    },
    {
      "readonly_recovery": true,
      "init": "init.smdkc210.rc",
      "ro.product.device": [
        "i9100",
        "galaxys2"
      ],
      "touch_version": "5.8.1.5",
      "inits": [
        "init.smdkc210.rc",
        "init.smdk4210.rc"
      ],
      "key": "galaxys2",
      "name": "Samsung Galaxy S2",
      "legacy_versions": [
        "4.0.1.4",
        "v4.0.1.4"
      ],
      "version": "4.0.1.5"
    },
    {
      "init": "init.smdk4210.rc",
      "ro.product.device": [
        "i9100",
        "galaxys2"
      ],
      "lunch": "cm_i9100-userdebug",
      "inits": [
        "init.smdkc210.rc",
        "init.smdk4210.rc"
      ],
      "key": "i9100",
      "officially_supported": false,
      "name": "Samsung Galaxy S2",
      "legacy_versions": [

      ],
      "version": "6.0.1.0"
    },
    {
      "readonly_recovery": true,
      "init": "init.smdk4210.rc",
      "lunch": "cm_n7000-userdebug",
      "key": "n7000",
      "name": "Samsung Galaxy Note (GT-N7000)",
      "legacy_versions": [
        "6.0.1.0"
      ],
      "version": "6.0.1.2"
    },
    {
      "readonly_recovery": true,
      "init": "init.smdkc110.rc",
      "key": "sidekick4g",
      "name": "Samsung Sidekick 4G",
      "legacy_versions": [

      ],
      "version": "4.0.0.2"
    },
    {
      "init": "init.vivo.rc",
      "lunch": "cyanogen_vivo-eng",
      "key": "vivo",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p21 ; ",
      "name": "HTC Incredible S",
      "legacy_versions": [
        "4.0.0.4",
        "4.0.0.6",
        "4.0.0.7",
        "4.0.0.8",
        "5.0.1.9"
      ],
      "version": "5.0.2.0"
    },
    {
      "init": "init.vivow.rc",
      "lunch": "cyanogen_vivow-eng",
      "alternate_recovery": {
        "clockwork": false,
        "url": "http://dl.dropbox.com/u/12949506/RomManager/recovery-ra-vivow-3.05.img",
        "name": "RA_GNM Recovery v3.05"
      },
      "key": "vivow",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p21 ; ",
      "name": "HTC Incredible 2",
      "legacy_versions": [
        "4.0.0.4",
        "4.0.0.6",
        "4.0.0.7",
        "4.0.0.8",
        "5.0.1.9"
      ],
      "version": "5.0.2.0"
    },
    {
      "reboot_recovery": "echo '518 R 1' > /sys/kernel/kobject_lge_nvdata/dynamic_nvdata_raw_write ; reboot ; ",
      "touch_version": "6.0.1.9",
      "lunch": "cm_p920-userdebug",
      "inits": [
        "init.p920.rc",
        "/bootimages/opening_01.rle"
      ],
      "key": "p920",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p6 ; ",
      "name": "LG Optimus 3D",
      "legacy_versions": [
        "4.0.0.7",
        "4.0.0.9",
        "5.0.1.4",
        "5.0.2.0",
        "5.0.2.7"
      ],
      "version": "6.0.1.9"
    },
    {
      "init": "init.galaxyace.rc",
      "key": "galaxyace",
      "flash_recovery": "/data/data/com.koushikdutta.rommanager/files/flash_image recoveryonly %s ; ",
      "name": "Samsung Galaxy Ace",
      "legacy_versions": [

      ],
      "version": "4.0.0.9"
    },
    {
      "init": "init_prep_keypad.sh",
      "touch_version": "5.8.1.8",
      "lunch": "generic_olympus-eng",
      "inits": [
        "init_prep_keypad.sh",
        "init.olympus.rc"
      ],
      "key": "olympus",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p10 ; ",
      "name": "Motorola Atrix 4G",
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
      ],
      "version": "5.0.2.0"
    },
    {
      "init": "init_recovery.rc",
      "key": "smb_a1002",
      "flash_recovery": "/data/data/com.koushikdutta.rommanager/files/tegra_flash_image recovery %s ; ",
      "name": "Viewsonic GTablet (smb_a1002)",
      "legacy_versions": [

      ],
      "version": "4.0.1.5"
    },
    {
      "init": "init.shooter.rc",
      "touch_version": "5.8.0.2",
      "lunch": "htc_shooter-eng",
      "key": "shooter",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p22 ; ",
      "name": "HTC EVO 3D",
      "legacy_versions": [
        "4.0.1.5",
        "5.0.0.0",
        "5.0.1.0"
      ],
      "version": "5.0.2.0"
    },
    {
      "init": "init.pyramid.rc",
      "touch_version": "5.8.0.9",
      "lunch": "full_pyramid-eng",
      "key": "pyramid",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p21 ; ",
      "name": "HTC Sensation",
      "legacy_versions": [
        "4.0.1.5",
        "5.0.0.1",
        "5.0.0.7",
        "5.0.0.8",
        "5.0.1.0"
      ],
      "version": "5.0.2.0"
    },
    {
      "init": "init.qcom.rc",
      "inits": [
        "init.qcom.rc",
        "init.huawei.rc"
      ],
      "key": "ascend2",
      "name": "Huawei Ascend 2 (M865)",
      "legacy_versions": [

      ],
      "version": "4.0.1.5"
    },
    {
      "init": "init.qcom.rc",
      "key": "a70",
      "name": "Micromax A70",
      "legacy_versions": [

      ],
      "version": "4.0.1.5"
    },
    {
      "readonly_recovery": true,
      "init": "init.galaxygio.rc",
      "key": "galaxygio",
      "name": "Samsung Galaxy Gio",
      "legacy_versions": [

      ],
      "version": "4.0.1.5"
    },
    {
      "readonly_recovery": true,
      "init": "init.smdkc110.rc",
      "key": "indulge910",
      "name": "Samsung Indulge 910",
      "legacy_versions": [

      ],
      "version": "4.0.1.5"
    },
    {
      "readonly_recovery": true,
      "init": "init.smdkc110.rc",
      "key": "indulge915",
      "name": "Samsung Indulge 915",
      "legacy_versions": [

      ],
      "version": "4.0.1.5"
    },
    {
      "init": "/bootimages/ON_480x800_08fps_0000.rle",
      "touch_version": "6.0.1.4",
      "lunch": "cm_p970-userdebug",
      "key": "p970",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p4 ; ",
      "name": "LG Optimus Black",
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
      ],
      "version": "6.0.1.4"
    },
    {
      "init": "init.shooteru.rc",
      "touch_version": "5.8.0.2",
      "lunch": "full_shooteru-eng",
      "key": "shooteru",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p21 ; ",
      "name": "HTC EVO 3D (GSM)",
      "legacy_versions": [
        "5.0.1.6",
        "5.0.1.7",
        "5.0.1.8",
        "5.0.1.9"
      ],
      "version": "5.0.2.0"
    },
    {
      "reboot_recovery": "rm /cache/recovery/command ; echo 1 > /data/.recovery_mode ; sync ; reboot ;",
      "readonly_recovery": true,
      "init": "init.mapphone_cdma.rc",
      "lunch": "cyanogen_droid2we-eng",
      "key": "droid2we",
      "flash_recovery": "dd if=%s of=/preinstall/recovery/recovery.zip ; ",
      "name": "Motorola Droid 2 Global",
      "legacy_versions": [

      ],
      "version": "5.0.2.3"
    },
    {
      "reboot_recovery": "rm /cache/recovery/command ; echo 1 > /data/.recovery_mode ; sync ; reboot ;",
      "readonly_recovery": true,
      "init": "init.mapphone_cdma.rc",
      "lunch": "generic_targa-eng",
      "key": "targa",
      "flash_recovery": "dd if=%s of=/preinstall/recovery/recovery.zip ; ",
      "name": "Motorola Droid Bionic",
      "legacy_versions": [
        "5.0.2.3",
        "5.0.2.4"
      ],
      "version": "5.0.2.5"
    },
    {
      "reboot_recovery": "rm /cache/recovery/command ; echo 1 > /data/.recovery_mode ; sync ; reboot ;",
      "readonly_recovery": true,
      "init": "init.mapphone_cdma.rc",
      "lunch": "generic_daytona-eng",
      "key": "daytona",
      "flash_recovery": "dd if=%s of=/preinstall/recovery/recovery.zip ; ",
      "name": "Motorola Droid X2",
      "legacy_versions": [
        "5.0.2.3",
        "5.0.2.4"
      ],
      "version": "5.0.2.5"
    },
    {
      "reboot_recovery": "rm /cache/recovery/command ; echo 1 > /data/.recovery_mode ; sync ; reboot ;",
      "readonly_recovery": true,
      "init": "init.mapphone_cdma.rc",
      "lunch": "full_solana-eng",
      "key": "solana",
      "flash_recovery": "dd if=%s of=/preinstall/recovery/recovery.zip ; ",
      "name": "Motorola Droid 3",
      "legacy_versions": [
        "5.0.2.5"
      ],
      "version": "5.0.2.6"
    },
    {
      "init": "init.motus.rc",
      "lunch": "cyanogen_motus-eng",
      "key": "motus",
      "name": "Motorola Backflip",
      "legacy_versions": [

      ],
      "version": "5.0.2.6"
    },
    {
      "readonly_recovery": true,
      "init": "init.gt-s5570.rc",
      "lunch": "tass-eng",
      "key": "tass",
      "name": "Samsung Galaxy Mini",
      "legacy_versions": [

      ],
      "version": "5.0.2.6"
    },
    {
      "init": "init.u8800.rc",
      "lunch": "huawei_u8800-eng",
      "key": "u8800",
      "flash_recovery": "mount -o remount,rw -t vfat /dev/block/mmcblk0p1 /cust_backup ; cat %s > /cust_backup/image/recovery.img ;",
      "name": "Huawei U8800",
      "legacy_versions": [

      ],
      "version": "5.0.2.6"
    },
    {
      "readonly_recovery": true,
      "init": "init.smdkc210.rc",
      "touch_version": "5.8.1.5",
      "lunch": "cyanogen_galaxys2att-eng",
      "inits": [
        "init.smdkc210.rc",
        "init.smdk4210.rc"
      ],
      "key": "galaxys2att",
      "name": "Samsung Galaxy S2 (AT&T)",
      "legacy_versions": [

      ],
      "version": "5.0.2.6"
    },
    {
      "init": "init.target.rc",
      "touch_version": "6.0.3.6",
      "lunch": "cm_hercules-userdebug",
      "owners": {
        "jmprblckwing182@gmail.com": true
      },
      "key": "hercules",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p22 bs=4096 ; ",
      "name": "Samsung Galaxy S2 (T-Mobile)",
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
      ],
      "version": "6.0.3.6"
    },
    {
      "readonly_recovery": true,
      "init": "init.smdkc210.rc",
      "touch_version": "5.8.1.5",
      "lunch": "full_epic4gtouch-eng",
      "key": "epic4gtouch",
      "name": "Samsung Epic 4G Touch",
      "legacy_versions": [
        "5.0.2.6",
        "5.0.2.7"
      ],
      "version": "5.0.2.7"
    },
    {
      "init": "init.ruby.rc",
      "lunch": "full_ruby-eng",
      "key": "ruby",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p23 bs=4096 ; ",
      "name": "HTC Amaze",
      "legacy_versions": [

      ],
      "version": "5.0.2.6"
    },
    {
      "readonly_recovery": true,
      "init": "init.gt-i5500.rc",
      "lunch": "samsung_galaxy5-eng",
      "key": "galaxy5",
      "name": "Samsung Galaxy 5",
      "legacy_versions": [
        "5.0.2.8"
      ],
      "version": "5.0.2.8"
    },
    {
      "init": "init.mooncake.rc",
      "lunch": "generic_mooncake-eng",
      "key": "mooncake",
      "name": "ZTE Racer",
      "legacy_versions": [

      ],
      "version": "5.0.2.7"
    },
    {
      "readonly_recovery": true,
      "init": "init.smdkc110.rc",
      "lunch": "full_vzwtab-eng",
      "key": "vzwtab",
      "name": "Samsung Galaxy Tab (VZW)",
      "legacy_versions": [
        "5.0.2.7",
        "5.0.2.7",
        "5.0.2.7"
      ],
      "version": "5.0.2.7"
    },
    {
      "init": "init.doubleshot.rc",
      "lunch": "full_doubleshot-eng",
      "key": "doubleshot",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p21 bs=4096 ; ",
      "name": "HTC MyTouch 4G Slide",
      "legacy_versions": [
        "5.0.2.7",
        "5.0.2.7"
      ],
      "version": "5.0.2.7"
    },
    {
      "init": "init.tuna.rc",
      "touch_version": "6.0.3.6",
      "lunch": "cm_maguro-userdebug",
      "key": "maguro",
      "flash_recovery": "dd if=%s of=/dev/block/platform/omap/omap_hsmmc.0/by-name/recovery bs=4096 ;",
      "name": "Google Galaxy Nexus (GSM)",
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
      ],
      "version": "6.0.3.6"
    },
    {
      "init": "init.tuna.rc",
      "touch_version": "6.0.3.6",
      "lunch": "cm_toro-userdebug",
      "key": "toro",
      "flash_recovery": "dd if=%s of=/dev/block/platform/omap/omap_hsmmc.0/by-name/recovery bs=4096 ;",
      "name": "Google Galaxy Nexus (Verizon)",
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
      ],
      "version": "6.0.3.6"
    },
    {
      "init": "init.thunderc.rc",
      "lunch": "full_lg690-eng",
      "key": "lg690",
      "name": "LG Optimus C LW690 and Optimus M MS690",
      "legacy_versions": [

      ],
      "version": "5.0.2.7"
    },
    {
      "init": "init.muscat.rc",
      "lunch": "c660-eng",
      "key": "c660",
      "name": "LG Optimus Pro",
      "legacy_versions": [

      ],
      "version": "5.0.2.7"
    },
    {
      "init": "init.univa.rc",
      "lunch": "e510-eng",
      "key": "e510",
      "name": "LG Optimus Hub",
      "legacy_versions": [

      ],
      "version": "5.0.2.7"
    },
    {
      "reboot_recovery": "/system/xbin/busybox devmem 0x57fff800 32 0x5EC0B007; sync ; reboot ;",
      "init": "init.victory.rc",
      "touch_version": "5.8.1.5",
      "lunch": "cyanogen_epicmtd-eng",
      "key": "epicmtd",
      "officially_supported": false,
      "name": "Samsung Epic4G (MTD)",
      "legacy_versions": [

      ],
      "version": "5.0.2.7"
    },
    {
      "init": "init.holiday.rc",
      "lunch": "full_holiday-eng",
      "key": "holiday",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p23 bs=4096 ; ",
      "name": "HTC Holiday",
      "legacy_versions": [
        "5.0.2.7",
        "5.0.2.7",
        "5.0.2.7"
      ],
      "version": "5.0.2.7"
    },
    {
      "lunch": "e730-eng",
      "inits": [
        "init.victor.rc",
        "init.e739.rc"
      ],
      "key": "e730",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p17 bs=4096 ;",
      "name": "LG Optimus SOL / TMo LG myTouch",
      "legacy_versions": [

      ],
      "version": "5.0.2.7"
    },
    {
      "init": "init.marvel.rc",
      "lunch": "generic_marvel-eng",
      "key": "marvel",
      "name": "HTC Wildfire S",
      "legacy_versions": [
        "5.0.2.7"
      ],
      "version": "5.0.2.8"
    },
    {
      "init": "init.mapphone_umts.rc",
      "lunch": "full_sunfire-eng",
      "inits": [
        "init.mapphone_umts.rc",
        "init.mapphone_cdma.rc"
      ],
      "key": "sunfire",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p10 bs=4096 ;",
      "name": "Motorola Photon 4G",
      "legacy_versions": [
        "5.0.2.7"
      ],
      "version": "5.0.2.8"
    },
    {
      "init": "init.u8160.rc",
      "lunch": "huawei_u8160-eng",
      "inits": [
        "init.huawei.rc",
        "init.u8160.rc"
      ],
      "key": "u8160",
      "name": "Huawei U8160",
      "legacy_versions": [
        "5.0.2.8"
      ],
      "version": "5.0.2.8"
    },
    {
      "init": "init.vigor.rc",
      "touch_version": "6.0.3.1",
      "lunch": "cm_vigor-userdebug",
      "key": "vigor",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p23 bs=4096 ;",
      "name": "HTC Rezound",
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
      ],
      "version": "6.0.3.1"
    },
    {
      "init": "init.expresskt.rc",
      "lunch": "full_express-userdebug",
      "key": "express",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p21 bs=4096 ;",
      "name": "HTC EVO View 4G",
      "legacy_versions": [

      ],
      "version": "5.8.1.5"
    },
    {
      "init": "init.cardhu.rc",
      "touch_version": "5.8.3.4",
      "lunch": "cm_tf201-userdebug",
      "key": "tf201",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p4 ;",
      "name": "Asus Transformer Prime",
      "legacy_versions": [
        "5.5.0.4",
        "5.8.2.0"
      ],
      "version": "5.8.3.4"
    },
    {
      "reboot_recovery": "rm /cache/recovery/command ; echo 1 > /data/.recovery_mode ; sync ; reboot ;",
      "init": "init.mapphone_cdma.rc",
      "key": "maserati",
      "officially_supported": false,
      "name": "Motorola Droid 4",
      "legacy_versions": [

      ],
      "version": "5.0.2.0"
    },
    {
      "reboot_recovery": "rm /cache/recovery/command ; echo 1 > /data/.recovery_mode ; sync ; reboot ;",
      "init": "init.mapphone_cdma.rc",
      "key": "spyder",
      "officially_supported": false,
      "name": "Motorola RAZR",
      "legacy_versions": [

      ],
      "version": "5.0.2.0"
    },
    {
      "init": "init.marvelc.rc",
      "lunch": "full_marvelc-eng",
      "key": "marvelc",
      "name": "HTC Wildfire S CDMA",
      "legacy_versions": [

      ],
      "version": "5.0.2.8"
    },
    {
      "init": "init.ventana.rc",
      "touch_version": "5.8.3.4",
      "lunch": "cm_tf101-userdebug",
      "key": "tf101",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p4 ;",
      "name": "Asus Transformer",
      "legacy_versions": [
        "5.5.0.4",
        "5.8.1.9",
        "5.8.2.0",
        "5.8.2.1",
        "5.8.3.4"
      ],
      "version": "6.0.1.3"
    },
    {
      "init": "bootimages/boot_logo_00000.rle",
      "touch_version": "6.0.1.5",
      "lunch": "cm_p930-userdebug",
      "key": "p930",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p13 ;",
      "name": "LG Nitro HD / LG P930 (AT&T)",
      "legacy_versions": [
        "5.8.2.0",
        "6.0.1.4"
      ],
      "version": "6.0.1.5"
    },
    {
      "readonly_recovery": true,
      "init": "init.smdkc210.rc",
      "touch_version": "6.0.1.0",
      "lunch": "cm_i777-userdebug",
      "inits": [
        "init.smdkc210.rc",
        "init.smdk4210.rc"
      ],
      "key": "i777",
      "name": "Samsung Galaxy S2 (SGH-I777)",
      "legacy_versions": [
        "5.8.1.8"
      ],
      "version": "6.0.1.0"
    },
    {
      "init": "init.pico.rc",
      "lunch": "full_pico-eng",
      "key": "pico",
      "name": "HTC Pico",
      "legacy_versions": [

      ],
      "version": "5.0.2.8"
    },
    {
      "init": "ueventd.endeavoru.rc",
      "touch_version": "5.8.4.0",
      "lunch": "cm_endeavoru-userdebug",
      "key": "endeavoru",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p5 bs=4096 ;",
      "name": "HTC One X (GSM)",
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
      ],
      "version": "5.8.4.0"
    },
    {
      "init": "init.ville.rc",
      "touch_version": "6.0.3.1",
      "lunch": "cm_ville-userdebug",
      "key": "ville",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p22 bs=4096 ;",
      "name": "HTC One S",
      "legacy_versions": [
        "5.5.0.4",
        "5.8.2.1",
        "5.8.2.2",
        "5.8.2.3",
        "5.8.3.1",
        "6.0.2.9"
      ],
      "version": "6.0.3.1"
    },
    {
      "reboot_recovery": "echo 1 > /cache/.startrecovery ; sync ; reboot ;",
      "init": "init.p1.rc",
      "key": "p1",
      "officially_supported": false,
      "name": "Samsung Galaxy Tab (MTD and GSM)",
      "legacy_versions": [

      ],
      "version": "5.8.2.1"
    },
    {
      "reboot_recovery": "echo 1 > /cache/.startrecovery ; sync ; reboot ;",
      "init": "init.p1c.rc",
      "key": "p1c",
      "officially_supported": false,
      "name": "Samsung Galaxy Tab (MTD and CDMA)",
      "legacy_versions": [

      ],
      "version": "5.8.2.1"
    },
    {
      "init": "init.tuna.rc",
      "touch_version": "6.0.3.6",
      "lunch": "cm_toroplus-userdebug",
      "key": "toroplus",
      "flash_recovery": "dd if=%s of=/dev/block/platform/omap/omap_hsmmc.0/by-name/recovery bs=4096 ;",
      "name": "Google Galaxy Nexus (Sprint)",
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
      ],
      "version": "6.0.3.6"
    },
    {
      "init": "ueventd.p3.rc",
      "touch_version": "6.0.3.1",
      "lunch": "cm_p4wifi-userdebug",
      "key": "p4wifi",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p2 ; ",
      "name": "Samsung Galaxy Tab 10.1 (Wifi)",
      "legacy_versions": [
        "4.0.0.4",
        "5.8.3.1",
        "6.0.2.9",
        "6.0.3.0"
      ],
      "version": "6.0.3.1"
    },
    {
      "init": "init.wingray.rc",
      "touch_version": "6.0.3.1",
      "lunch": "cm_wingray-userdebug",
      "key": "wingray",
      "flash_recovery": "dd if=%s of=/dev/block/platform/sdhci-tegra.3/by-name/recovery ; ",
      "name": "Motorola XOOM (Wi-Fi only)",
      "legacy_versions": [
        "5.8.3.1",
        "6.0.2.9"
      ],
      "version": "6.0.3.1"
    },
    {
      "init": "init.omap.post_boot.sh",
      "lunch": "full_marquee-eng",
      "key": "marquee",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p4 bs=4096 ; ",
      "name": "LG Marquee",
      "legacy_versions": [

      ],
      "version": "5.0.2.8"
    },
    {
      "init": "init.omap.post_boot.sh",
      "lunch": "full_ignite-eng",
      "key": "ignite",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p4 bs=4096 ; ",
      "name": "LG Ignite",
      "legacy_versions": [

      ],
      "version": "5.0.2.8"
    },
    {
      "init": "init.target.rc",
      "touch_version": "5.8.3.1",
      "lunch": "full_ms840-userdebug",
      "key": "ms840",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p13 bs=4096 ; ",
      "name": "LG Connect 4G MS840",
      "legacy_versions": [

      ],
      "version": "5.8.3.1"
    },
    {
      "init": "init.target.rc",
      "touch_version": "5.8.3.1",
      "lunch": "full_vs840-userdebug",
      "key": "vs840",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p13 bs=4096 ; ",
      "name": "LG Lucid VS840",
      "legacy_versions": [

      ],
      "version": "5.8.3.1"
    },
    {
      "init": "init.jewel.rc",
      "touch_version": "5.8.3.5",
      "lunch": "cm_jewel-userdebug",
      "key": "jewel",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p22 bs=4096 ; ",
      "name": "HTC EVO LTE",
      "legacy_versions": [
        "5.8.3.4",
        "5.8.3.4"
      ],
      "version": "5.8.3.5"
    },
    {
      "init": "ueventd.smdk4x12.rc",
      "touch_version": "6.0.3.6",
      "lunch": "cm_i9300-userdebug",
      "key": "i9300",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p6 bs=4096 ; ",
      "name": "Samsung Galaxy S3 (GT-I9300)",
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
      ],
      "version": "6.0.3.6",
      "ro.product.devices": [
        "i9300",
        "m0"
      ]
    },
    {
      "init": "init.qcom.usb.rc",
      "touch_version": "6.0.3.3",
      "lunch": "cm_skyrocket-userdebug",
      "key": "skyrocket",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p22 bs=4096 ; ",
      "name": "Samsung Skyrocket",
      "legacy_versions": [
        "5.8.4.3",
        "6.0.1.0",
        "6.0.1.4"
      ],
      "version": "6.0.3.1"
    },
    {
      "init": "init.qcom.usb.rc",
      "touch_version": "6.0.3.6",
      "lunch": "cm_quincyatt-userdebug",
      "key": "quincyatt",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p22 bs=4096 ; ",
      "name": "Samsung Galaxy Note (AT&T)",
      "legacy_versions": [
        "5.8.4.3",
        "5.8.4.8",
        "6.0.3.1"
      ],
      "version": "6.0.3.6"
    },
    {
      "init": "init.e0.rc",
      "lunch": "cm_e400-userdebug",
      "key": "e400",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p17 bs=4096 ; ",
      "name": "LG Optimus L3",
      "legacy_versions": [

      ],
      "version": "5.8.4.5"
    },
    {
      "readonly_recovery": true,
      "init": "init.primou.rc",
      "lunch": "cm_primou-userdebug",
      "key": "primou",
      "name": "HTC One V",
      "legacy_versions": [

      ],
      "version": "5.8.4.5"
    },
    {
      "init": "init.d2att.rc",
      "touch_version": "6.0.3.8",
      "lunch": "cm_d2att-userdebug",
      "key": "d2att",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p18 bs=4096 ; ",
      "name": "Samsung Galaxy S3 (AT&T)",
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
      ],
      "version": "6.0.3.8"
    },
    {
      "init": "init.d2tmo.rc",
      "touch_version": "6.0.3.8",
      "lunch": "cm_d2tmo-userdebug",
      "key": "d2tmo",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p18 bs=4096 ; ",
      "name": "Samsung Galaxy S3 (T-Mobile)",
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
      ],
      "version": "6.0.3.8",
      "ro.product.devices": [
        "d2tmo",
        "d2lteMetroPCS"
      ]
    },
    {
      "init": "init.d2spr.rc",
      "touch_version": "6.0.3.8",
      "lunch": "cm_d2spr-userdebug",
      "key": "d2spr",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p18 bs=4096 ; ",
      "name": "Samsung Galaxy S3 (Sprint)",
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
      ],
      "version": "6.0.3.8"
    },
    {
      "init": "init.d2vzw.rc",
      "touch_version": "6.0.3.7",
      "lunch": "cm_d2vzw-userdebug",
      "key": "d2vzw",
      "twrp_version": "2.4.3.0",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p18 bs=4096 ; ",
      "name": "Samsung Galaxy S3 (Verizon)",
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
        "6.0.3.6"
      ],
      "version": "6.0.3.7"
    },
    {
      "readonly_recovery": true,
      "init": "init.primoc.rc",
      "touch_version": "5.8.4.7",
      "lunch": "full_primoc-userdebug",
      "key": "primoc",
      "name": "HTC One V (CDMA)",
      "legacy_versions": [
        "5.8.4.6",
        "5.8.4.7"
      ],
      "version": "5.8.4.7"
    },
    {
      "init": "init.grouper.rc",
      "touch_version": "6.0.3.8",
      "lunch": "cm_grouper-userdebug",
      "key": "grouper",
      "flash_recovery": "dd if=%s of=/dev/block/platform/sdhci-tegra.3/by-name/SOS bs=4096 ; ",
      "name": "Google Nexus 7",
      "legacy_versions": [
        "6.0.0.6",
        "6.0.1.0",
        "6.0.1.9",
        "6.0.2.3",
        "6.0.3.1",
        "6.0.3.4",
        "6.0.3.5",
        "6.0.3.6"
      ],
      "version": "6.0.3.8"
    },
    {
      "init": "init.su640.rc",
      "touch_version": "6.0.1.0",
      "lunch": "cm_su640-userdebug",
      "key": "su640",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p13 bs=4096 ; ",
      "name": "LG Optimus LTE (SKT)",
      "legacy_versions": [

      ],
      "version": "6.0.1.0"
    },
    {
      "init": "init.t1.rc",
      "lunch": "cm_i9100g-userdebug",
      "key": "i9100g",
      "officially_supported": false,
      "name": "Samsung Galaxy S2 (GT-I9100G)",
      "legacy_versions": [

      ],
      "version": "6.0.1.0"
    },
    {
      "init": "init.espresso.rc",
      "touch_version": "6.0.2.7",
      "lunch": "cm_p3100-userdebug",
      "key": "p3100",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p6 bs=4096 ; ",
      "name": "Samsung Galaxy Tab 2 (GT-P3100)",
      "legacy_versions": [
        "6.0.1.1",
        "6.0.2.3"
      ],
      "version": "6.0.2.7"
    },
    {
      "init": "init.espresso.rc",
      "touch_version": "6.0.2.7",
      "lunch": "cm_p3110-userdebug",
      "key": "p3110",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p6 bs=4096 ; ",
      "name": "Samsung Galaxy Tab 2 (GT-P3110)",
      "legacy_versions": [
        "6.0.1.1",
        "6.0.2.3"
      ],
      "version": "6.0.2.7"
    },
    {
      "init": "init.espresso.rc",
      "touch_version": "6.0.2.3",
      "lunch": "cm_p3113-userdebug",
      "key": "p3113",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p6 bs=4096 ; ",
      "name": "Samsung Galaxy Tab 2 (GT-P3113)",
      "legacy_versions": [
        "6.0.1.1"
      ],
      "version": "6.0.2.3"
    },
    {
      "init": "init.espresso10.rc",
      "touch_version": "6.0.2.7",
      "lunch": "cm_p5100-userdebug",
      "key": "p5100",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p6 bs=4096 ; ",
      "name": "Samsung Galaxy Tab 2 (GT-P5100)",
      "legacy_versions": [
        "6.0.1.1",
        "6.0.2.3"
      ],
      "version": "6.0.2.7"
    },
    {
      "init": "init.espresso10.rc",
      "touch_version": "6.0.2.7",
      "lunch": "cm_p5110-userdebug",
      "key": "p5110",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p6 bs=4096 ; ",
      "name": "Samsung Galaxy Tab 2 (GT-P5110)",
      "legacy_versions": [
        "6.0.1.1",
        "6.0.2.3"
      ],
      "version": "6.0.2.7"
    },
    {
      "init": "init.espresso10.rc",
      "touch_version": "6.0.2.3",
      "lunch": "cm_p5113-userdebug",
      "key": "p5113",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p6 bs=4096 ; ",
      "name": "Samsung Galaxy Tab 2 (GT-P5113)",
      "legacy_versions": [
        "6.0.1.1"
      ],
      "version": "6.0.2.3"
    },
    {
      "init": "init.target.rc",
      "touch_version": "6.0.1.1",
      "lunch": "cm_vs920-userdebug",
      "inits": [
        "init.target.rc",
        "init.iproj.rc",
        "init.i_vzw.rc",
        "init.iprj.rc"
      ],
      "key": "vs920",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p13 bs=4096 ; ",
      "name": "LG Spectrum 4G",
      "legacy_versions": [

      ],
      "version": "6.0.1.1"
    },
    {
      "init": "init.zte.rc",
      "touch_version": "6.0.1.1",
      "lunch": "cm_x500-userdebug",
      "key": "x500",
      "name": "Score & Score M",
      "legacy_versions": [

      ],
      "version": "6.0.1.1"
    },
    {
      "init": "init.qcom.rc",
      "touch_version": "6.0.1.1",
      "lunch": "cm_vs910-userdebug",
      "inits": [
        "init.qcom.rc",
        "init.bryce.rc"
      ],
      "key": "vs910",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p14 bs=4096 ; ",
      "name": "LG Revolution 4G",
      "legacy_versions": [

      ],
      "version": "6.0.1.1"
    },
    {
      "init": "init.qcom.rc",
      "touch_version": "6.0.1.1",
      "lunch": "cm_ms910-userdebug",
      "inits": [
        "init.qcom.rc",
        "init.bryce.rc"
      ],
      "key": "ms910",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p14 bs=4096 ; ",
      "name": "LG Esteeem 4G",
      "legacy_versions": [
        "5.0.2.8"
      ],
      "version": "6.0.1.1"
    },
    {
      "init": "init.qcom.rc",
      "touch_version": "6.0.1.1",
      "lunch": "cm_ms695-userdebug",
      "inits": [
        "init.qcom.rc",
        "init.m3.rc"
      ],
      "key": "ms695",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p17 bs=4096 ; ",
      "name": "LG Optimus M+",
      "legacy_versions": [
        "6.0.1.0"
      ],
      "version": "6.0.1.1"
    },
    {
      "reboot_recovery": "echo 1 > /cache/.startrecovery ; sync ; reboot ;",
      "init": "init.p1.rc",
      "key": "p1l",
      "officially_supported": false,
      "name": "Samsung Galaxy Tab (MTD and GSM - L)",
      "legacy_versions": [

      ],
      "version": "5.8.2.1"
    },
    {
      "reboot_recovery": "echo 1 > /cache/.startrecovery ; sync ; reboot ;",
      "init": "init.p1.rc",
      "key": "p1n",
      "officially_supported": false,
      "name": "Samsung Galaxy Tab (MTD and GSM - N)",
      "legacy_versions": [

      ],
      "version": "5.8.2.1"
    },
    {
      "init": "init.d2usc.rc",
      "touch_version": "6.0.3.7",
      "lunch": "cm_d2usc-userdebug",
      "key": "d2usc",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p18 bs=4096 ; ",
      "name": "Samsung Galaxy S3 (US Cellular)",
      "legacy_versions": [
        "6.0.1.2",
        "6.0.2.3",
        "6.0.2.8",
        "6.0.2.9",
        "6.0.3.0",
        "6.0.3.1",
        "6.0.3.6",
        "6.0.3.7"
      ],
      "version": "6.0.3.8"
    },
    {
      "init": "init.mmi.usb.rc",
      "lunch": "cm_asanti-userdebug",
      "inits": [
        "init.asanti.rc",
        "init.sprint.rc"
      ],
      "key": "asanti",
      "flash_recovery": "dd if=%s of=/dev/block/platform/msm_sdcc.1/by-name/recovery bs=4096 ; ",
      "name": "Motorola Photon Q",
      "legacy_versions": [

      ],
      "version": "6.0.1.3"
    },
    {
      "init": "init.pecan.rc",
      "lunch": "cm_p350-userdebug",
      "key": "p350",
      "name": "LG Optimus Me",
      "legacy_versions": [
        "6.0.1.3",
        "6.0.1.4"
      ],
      "version": "6.0.1.5"
    },
    {
      "init": "fstab.qcom",
      "lunch": "cm_p5att-userdebug",
      "key": "p5att",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p22 bs=4096 ; ",
      "name": "Samsung Galaxy Tab 8.9 (AT&T)",
      "legacy_versions": [

      ],
      "version": "6.0.1.4"
    },
    {
      "init": "init.target.rc",
      "touch_version": "6.0.3.8",
      "lunch": "cm_t769-userdebug",
      "key": "t769",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p22 bs=4096 ; ",
      "name": "Samsung Galaxy S Blaze 4G",
      "legacy_versions": [
        "6.0.1.4"
      ],
      "version": "6.0.3.8"
    },
    {
      "init": "init.carrier.rc",
      "touch_version": "6.0.3.8",
      "lunch": "cm_d2mtr-userdebug",
      "inits": [
        "init.carrier.rc",
        "init.d2mtr.rc"
      ],
      "key": "d2mtr",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p18 bs=4096 ; ",
      "name": "Samsung Galaxy S3 (MetroPCS)",
      "legacy_versions": [
        "6.0.1.5",
        "6.0.2.3",
        "6.0.2.8",
        "6.0.2.9",
        "6.0.3.0",
        "6.0.3.1",
        "6.0.3.6"
      ],
      "version": "6.0.3.7"
    },
    {
      "reboot_recovery": "echo 'boot-recovery' | dd of=/dev/block/mmcblk0p3 seek=6144 bs=1 ; reboot ; ",
      "init": "init.tf700t.rc",
      "touch_version": "6.0.3.1",
      "lunch": "cm_tf700t-userdebug",
      "key": "tf700t",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p4 bs=4096 ; ",
      "name": "Asus Transformer Pad Infinity",
      "legacy_versions": [
        "6.0.1.8",
        "6.0.2.3"
      ],
      "version": "6.0.3.1"
    },
    {
      "init": "init.manta.rc",
      "touch_version": "6.0.3.8",
      "lunch": "cm_manta-userdebug",
      "key": "manta",
      "flash_recovery": "dd if=%s of=/dev/block/platform/dw_mmc.0/by-name/recovery bs=4096 ; ",
      "name": "Google Nexus 10",
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
      ],
      "version": "6.0.3.8"
    },
    {
      "init": "init.mako.rc",
      "touch_version": "6.0.3.8",
      "lunch": "cm_mako-userdebug",
      "key": "mako",
      "flash_recovery": "dd if=%s of=/dev/block/platform/msm_sdcc.1/by-name/recovery bs=4096 ; ",
      "name": "Google Nexus 4",
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
      ],
      "version": "6.0.3.8"
    },
    {
      "init": "init.debug_mfgkernel.rc",
      "touch_version": "6.0.3.1",
      "lunch": "cm_dlx-userdebug",
      "key": "dlx",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p20 bs=4096 ; ",
      "name": "HTC Droid DNA",
      "legacy_versions": [
        "6.0.1.5",
        "6.0.1.9",
        "6.0.2.3",
        "6.0.2.7",
        "6.0.2.8",
        "6.0.3.0"
      ],
      "version": "6.0.3.1"
    },
    {
      "init": "init.smdk4x12.rc",
      "touch_version": "6.0.3.6",
      "lunch": "cm_n7100-userdebug",
      "key": "n7100",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p9 bs=4096 ; ",
      "name": "Samsung Galaxy Note 2 (HSPA+)",
      "legacy_versions": [
        "6.0.1.9",
        "6.0.3.0",
        "6.0.3.1"
      ],
      "version": "6.0.3.6"
    },
    {
      "init": "init.picasso_mf.rc",
      "touch_version": "6.0.3.1",
      "lunch": "cm_a700-userdebug",
      "key": "a700",
      "flash_recovery": "dd if=%s of=/dev/block/platform/sdhci-tegra.3/by-name/SOS bs=4096 ; ",
      "name": "Acer A700",
      "legacy_versions": [
        "6.0.2.3"
      ],
      "version": "6.0.3.1"
    },
    {
      "init": "init.tilapia.rc",
      "touch_version": "6.0.3.6",
      "lunch": "cm_tilapia-userdebug",
      "key": "tilapia",
      "flash_recovery": "dd if=%s of=/dev/block/platform/sdhci-tegra.3/by-name/SOS bs=4096 ; ",
      "name": "Google Nexus 7 (GSM)",
      "legacy_versions": [
        "6.0.2.3",
        "6.0.3.1",
        "6.0.3.5"
      ],
      "version": "6.0.3.6"
    },
    {
      "init": "init.t0lte.rc",
      "touch_version": "6.0.3.6",
      "lunch": "cm_t0lte-userdebug",
      "key": "t0lte",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p9 bs=4096 ; ",
      "name": "Samsung Galaxy Note 2 (LTE)",
      "legacy_versions": [
        "6.0.2.3",
        "6.0.2.4",
        "6.0.2.5",
        "6.0.2.8",
        "6.0.3.0",
        "6.0.3.1",
        "6.0.3.2"
      ],
      "version": "6.0.3.6"
    },
    {
      "reboot_recovery": "echo '518 R 1' > /sys/kernel/kobject_lge_nvdata/dynamic_nvdata_raw_write ; reboot ; ",
      "touch_version": "6.0.2.3",
      "lunch": "cm_p720-userdebug",
      "inits": [
        "init.lgep720board.rc",
        "/bootimages/battery_charging_01.rle"
      ],
      "key": "p720",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p6 ; ",
      "name": "LG Optimus 3DMax",
      "legacy_versions": [

      ],
      "version": "6.0.2.3"
    },
    {
      "init": "init.d2cri.rc",
      "touch_version": "6.0.3.8",
      "lunch": "cm_d2cri-userdebug",
      "key": "d2cri",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p18 bs=4096 ; ",
      "name": "Samsung Galaxy S3 (Cricket)",
      "legacy_versions": [
        "6.0.2.7",
        "6.0.2.8",
        "6.0.2.9",
        "6.0.3.0",
        "6.0.3.1",
        "6.0.3.6",
        "6.0.3.7"
      ],
      "version": "6.0.3.8"
    },
    {
      "init": "init.runnymede.rc",
      "touch_version": "6.0.2.7",
      "lunch": "cm_runnymede-userdebug",
      "key": "runnymede",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p21 bs=4096 ; ",
      "name": "HTC Sensation XL",
      "legacy_versions": [

      ],
      "version": "6.0.2.7"
    },
    {
      "init": "init.presto.rc",
      "touch_version": "6.0.2.7",
      "lunch": "cm_presto-userdebug",
      "key": "presto",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p18 bs=4096 ; ",
      "name": "Pantech Presto",
      "legacy_versions": [

      ],
      "version": "6.0.2.7"
    },
    {
      "init": "init.warp2.rc",
      "touch_version": "6.0.2.7",
      "lunch": "cm_warp2-userdebug",
      "key": "warp2",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p13 bs=4096 ; ",
      "name": "ZTE Sequent",
      "legacy_versions": [

      ],
      "version": "6.0.2.7"
    },
    {
      "init": "init.steelhead.rc",
      "lunch": "cm_steelhead-userdebug",
      "key": "steelhead",
      "flash_recovery": "dd if=%s of=/dev/block/platform/omap/omap_hsmmc.0/by-name/recovery bs=4096 ; ",
      "name": "Google Nexus Q",
      "legacy_versions": [
        "6.0.2.7"
      ],
      "version": "6.0.3.1"
    },
    {
      "touch_version": "6.0.2.7",
      "lunch": "cm_prevail2spr-userdebug",
      "inits": [
        "init.carrier.rc",
        "init.prevail2spr.rc"
      ],
      "key": "prevail2spr",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p15 bs=4096 ; ",
      "name": "Samsung Prevail 2 (Boost Mobile)",
      "legacy_versions": [

      ],
      "version": "6.0.2.7"
    },
    {
      "init": "init.golden.rc",
      "touch_version": "6.0.2.7",
      "lunch": "cm_golden-userdebug",
      "key": "golden",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p21 bs=4096 ; ",
      "name": "Samsung Galaxy S3 Mini",
      "legacy_versions": [

      ],
      "version": "6.0.2.7"
    },
    {
      "init": "init.fireball.rc",
      "touch_version": "6.0.3.3",
      "lunch": "cm_fireball-userdebug",
      "key": "fireball",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p22 bs=4096 ; ",
      "name": "HTC Droid Incredible 4G LTE",
      "legacy_versions": [
        "6.0.2.8",
        "6.0.2.9",
        "6.0.3.1"
      ],
      "version": "6.0.3.3"
    },
    {
      "init": "init.puccinilte.rc",
      "touch_version": "6.0.2.8",
      "lunch": "cm_puccinilte-userdebug",
      "key": "puccinilte",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p23 bs=4096 ; ",
      "name": "HTC Jetstream",
      "legacy_versions": [

      ],
      "version": "6.0.2.8"
    },
    {
      "init": "init.u0.rc",
      "touch_version": "6.0.2.8",
      "lunch": "cm_p700-userdebug",
      "key": "p700",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p17 bs=4096 ; ",
      "name": "LG Optimus L7",
      "legacy_versions": [

      ],
      "version": "6.0.2.8"
    },
    {
      "init": "init.m7.rc",
      "touch_version": "6.0.3.1",
      "lunch": "cm_m7-userdebug",
      "key": "m7",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p34 bs=4096 ; ",
      "name": "HTC One",
      "legacy_versions": [
        "6.0.2.8",
        "6.0.3.0"
      ],
      "version": "6.0.3.1"
    },
    {
      "init": "init.dlxu.rc",
      "touch_version": "6.0.3.1",
      "lunch": "cm_dlxu-userdebug",
      "key": "dlxu",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p20 bs=4096 ; ",
      "name": "HTC Butterfly (dlxu)",
      "legacy_versions": [
        "6.0.2.8",
        "6.0.3.0"
      ],
      "version": "6.0.3.1"
    },
    {
      "init": "init.dlxub1.rc",
      "touch_version": "6.0.3.1",
      "lunch": "cm_dlxub1-userdebug",
      "key": "dlxub1",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p20 bs=4096 ; ",
      "name": "HTC Butterfly (dlxub1)",
      "legacy_versions": [
        "6.0.2.8",
        "6.0.3.0"
      ],
      "version": "6.0.3.1"
    },
    {
      "init": "init.dlxj.rc",
      "touch_version": "6.0.3.1",
      "lunch": "cm_dlxj-userdebug",
      "key": "dlxj",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p20 bs=4096 ; ",
      "name": "HTC Butterfly J",
      "legacy_versions": [
        "6.0.2.8",
        "6.0.3.0"
      ],
      "version": "6.0.3.1"
    },
    {
      "init": "init.m4.rc",
      "lunch": "cm_e610-userdebug",
      "key": "e610",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p17 bs=4096 ; ",
      "name": "LG Optimus L5",
      "legacy_versions": [

      ],
      "version": "6.0.2.8"
    },
    {
      "init": "init.evita.rc",
      "touch_version": "6.0.3.1",
      "lunch": "cm_evita-userdebug",
      "key": "evita",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p22 bs=4096 ; ",
      "name": "HTC One X (AT&T)",
      "legacy_versions": [
        "6.0.2.8"
      ],
      "version": "6.0.3.1"
    },
    {
      "init": "init.p4.rc",
      "touch_version": "6.0.3.1",
      "lunch": "cm_p4-userdebug",
      "key": "p4",
      "flash_recovery": "dd if=%s of=/dev/block/platform/sdhci-tegra.3/by-num/p2 bs=4096 ; ",
      "name": "Samsung Galaxy Tab 10.1",
      "legacy_versions": [
        "6.0.2.9",
        "6.0.3.0"
      ],
      "version": "6.0.3.1",
      "ro.product.devices": [
        "p4",
        "GT-P7500",
        "p7500"
      ]
    },
    {
      "init": "init.p4tmo.rc",
      "touch_version": "6.0.3.1",
      "lunch": "cm_p4tmo-userdebug",
      "key": "p4tmo",
      "flash_recovery": "dd if=%s of=/dev/block/platform/sdhci-tegra.3/by-num/p2 bs=4096 ; ",
      "name": "Samsung Galaxy Tab 10.1 (T-Mobile)",
      "legacy_versions": [
        "6.0.2.9",
        "6.0.3.0"
      ],
      "version": "6.0.3.1"
    },
    {
      "init": "init.p4vzw.rc",
      "touch_version": "6.0.3.1",
      "lunch": "cm_p4vzw-userdebug",
      "key": "p4vzw",
      "flash_recovery": "dd if=%s of=/dev/block/platform/sdhci-tegra.3/by-num/p2 bs=4096 ; ",
      "name": "Samsung Galaxy Tab 10.1 (Verizon)",
      "legacy_versions": [
        "6.0.2.9",
        "6.0.3.0"
      ],
      "version": "6.0.3.1"
    },
    {
      "init": "init.u0.rc",
      "touch_version": "6.0.3.1",
      "lunch": "cm_p760-userdebug",
      "key": "p760",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p4 bs=4096 ; ",
      "name": "LG Optimus L9",
      "legacy_versions": [
        "6.0.2.9"
      ],
      "version": "6.0.3.1"
    },
    {
      "init": "ueventd.smdk4x12.rc",
      "touch_version": "6.0.3.6",
      "lunch": "cm_i9305-userdebug",
      "key": "i9305",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p9 bs=4096 ; ",
      "name": "Samsung Galaxy S3 LTE (GT-I9305)",
      "legacy_versions": [
        "6.0.2.9",
        "6.0.3.1",
        "6.0.3.2"
      ],
      "version": "6.0.3.6"
    },
    {
      "init": "init.p3.rc",
      "touch_version": "6.0.3.1",
      "lunch": "cm_p3-userdebug",
      "key": "p3",
      "flash_recovery": "dd if=%s of=/dev/block/platform/sdhci-tegra.3/by-num/p2 bs=4096 ; ",
      "name": "Samsung Galaxy Tab 10.1v",
      "legacy_versions": [
        "6.0.2.9"
      ],
      "version": "6.0.3.1"
    },
    {
      "init": "init.n8013.rc",
      "touch_version": "6.0.3.6",
      "lunch": "cm_n8013-userdebug",
      "key": "n8013",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p6 bs=4096 ; ",
      "name": "Samsung Galaxy Note 10.1",
      "legacy_versions": [
        "6.0.3.0",
        "6.0.3.1"
      ],
      "version": "6.0.3.6"
    },
    {
      "init": "init.i605.rc",
      "touch_version": "6.0.3.0",
      "lunch": "cm_i605-userdebug",
      "key": "i605",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p9 bs=4096 ; ",
      "name": "Samsung Galaxy Note 2 (Verizon)",
      "legacy_versions": [

      ],
      "version": "6.0.3.0",
      "ro.product.devices": [
        "i605",
        "t0ltevzw"
      ]
    },
    {
      "init": "init.l900.rc",
      "touch_version": "6.0.3.1",
      "lunch": "cm_l900-userdebug",
      "key": "l900",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p9 bs=4096 ; ",
      "name": "Samsung Galaxy Note 2 (Sprint)",
      "legacy_versions": [
        "6.0.3.0"
      ],
      "version": "6.0.3.1",
      "ro.product.devices": [
        "l900",
        "t0ltespr"
      ]
    },
    {
      "init": "init.t0lteatt.rc",
      "touch_version": "6.0.3.6",
      "lunch": "cm_t0lteatt-userdebug",
      "key": "t0lteatt",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p9 bs=4096 ; ",
      "name": "Samsung Galaxy Note 2 (AT&T)",
      "legacy_versions": [
        "6.0.3.0",
        "6.0.3.1"
      ],
      "version": "6.0.3.6"
    },
    {
      "init": "init.t0ltetmo.rc",
      "touch_version": "6.0.3.7",
      "lunch": "cm_t0ltetmo-userdebug",
      "key": "t0ltetmo",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p9 bs=4096 ; ",
      "name": "Samsung Galaxy Note 2 (T-Mobile)",
      "legacy_versions": [
        "6.0.3.0",
        "6.0.3.1",
        "6.0.3.6"
      ],
      "version": "6.0.3.7"
    },
    {
      "init": "init.geehrc.rc",
      "touch_version": "6.0.3.0",
      "lunch": "cm_e975-userdebug",
      "key": "e975",
      "flash_recovery": "dd if=%s of=/dev/block/platform/msm_sdcc.1/by-name/recovery bs=4096 ; ",
      "name": "LG Optimus G Intl (E975)",
      "legacy_versions": [

      ],
      "version": "6.0.3.0"
    },
    {
      "reboot_recovery": "echo 'boot-recovery' | dd of=/dev/block/mmcblk0p5 bs=1 count=13 ; reboot ; ",
      "init": "init.x3.rc",
      "touch_version": "6.0.3.1",
      "lunch": "cm_p880-userdebug",
      "key": "p880",
      "flash_recovery": "dd if=%s of=/dev/block/platform/sdhci-tegra.3/by-name/SOS bs=4096 ; ",
      "name": "LG Optimus 4X HD",
      "legacy_versions": [

      ],
      "version": "6.0.3.1"
    },
    {
      "init": "init.quincytmo.rc",
      "touch_version": "6.0.3.6",
      "lunch": "cm_quincytmo-userdebug",
      "key": "quincytmo",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p22 bs=4096 ; ",
      "name": "Samsung Galaxy Note (T-Mobile)",
      "legacy_versions": [
        "6.0.3.1"
      ],
      "version": "6.0.3.6"
    },
    {
      "init": "init.n8000.rc",
      "touch_version": "6.0.3.6",
      "lunch": "cm_n8000-userdebug",
      "key": "n8000",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p6 bs=4096 ; ",
      "name": "Samsung Galaxy Note 10.1 (GSM)",
      "legacy_versions": [
        "6.0.3.1"
      ],
      "version": "6.0.3.6"
    },
    {
      "init": "init.find5.rc",
      "touch_version": "6.0.3.1",
      "lunch": "cm_find5-userdebug",
      "key": "find5",
      "flash_recovery": "dd if=%s of=/dev/block/platform/msm_sdcc.1/by-name/recovery bs=4096 ; ",
      "name": "Oppo Find5",
      "legacy_versions": [

      ],
      "version": "6.0.3.1"
    },
    {
      "init": "init.jfltetmo.rc",
      "touch_version": "6.0.3.6",
      "lunch": "cm_jfltetmo-userdebug",
      "key": "jfltetmo",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p21 bs=4096 ; ",
      "name": "Samsung Galaxy S4 (T-Mobile)",
      "legacy_versions": [
        "6.0.3.2"
      ],
      "version": "6.0.3.6",
      "ro.product.devices": [
        "jfltetmo",
        "jflteMetroPCS"
      ]
    },
    {
      "init": "init.jfltecan.rc",
      "touch_version": "6.0.3.6",
      "lunch": "cm_jfltecan-userdebug",
      "key": "jfltecan",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p21 bs=4096 ; ",
      "name": "Samsung Galaxy S4 (Canada/Bell)",
      "legacy_versions": [
        "6.0.3.2"
      ],
      "version": "6.0.3.6"
    },
    {
      "init": "init.zte.rc",
      "lunch": "cm_V8000-userdebug",
      "key": "V8000",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p17 bs=4096 ; ",
      "name": "ZTE Engage",
      "legacy_versions": [

      ],
      "version": "6.0.3.2"
    },
    {
      "init": "init.i9500.rc",
      "touch_version": "6.0.3.2",
      "lunch": "cm_i9500-userdebug",
      "key": "i9500",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p10 bs=4096 ; ",
      "name": "Samsung Galaxy S4 (i9500)",
      "legacy_versions": [

      ],
      "version": "6.0.3.2"
    },
    {
      "init": "init.everest.rc",
      "touch_version": "6.0.3.2",
      "lunch": "cm_everest-userdebug",
      "key": "everest",
      "flash_recovery": "dd if=%s of=/dev/block/platform/sdhci-tegra.3/by-name/recovery bs=4096 ; ",
      "name": "Motorola Xoom (GSM)",
      "legacy_versions": [

      ],
      "version": "6.0.3.2"
    },
    {
      "init": "init.protou.rc",
      "touch_version": "6.0.3.2",
      "lunch": "cm_protou-userdebug",
      "key": "protou",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p21 bs=4096 ; ",
      "name": "HTC Desire X",
      "legacy_versions": [

      ],
      "version": "6.0.3.2"
    },
    {
      "init": "init.m7spr.rc",
      "touch_version": "6.0.3.6",
      "lunch": "cm_m7spr-userdebug",
      "key": "m7spr",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p36 bs=4096 ; ",
      "name": "HTC One (Sprint)",
      "legacy_versions": [
        "6.0.3.2"
      ],
      "version": "6.0.3.6",
      "ro.product.devices": [
        "m7spr",
        "m7wls"
      ]
    },
    {
      "init": "init.m7tmo.rc",
      "touch_version": "6.0.3.6",
      "lunch": "cm_m7tmo-userdebug",
      "key": "m7tmo",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p34 bs=4096 ; ",
      "name": "HTC One (T-Mobile)",
      "legacy_versions": [
        "6.0.3.2"
      ],
      "version": "6.0.3.6"
    },
    {
      "init": "init.m7att.rc",
      "touch_version": "6.0.3.6",
      "lunch": "cm_m7att-userdebug",
      "key": "m7att",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p34 bs=4096 ; ",
      "name": "HTC One (AT&T)",
      "legacy_versions": [
        "6.0.3.2",
        "6.0.3.5"
      ],
      "version": "6.0.3.6"
    },
    {
      "init": "init.jflteatt.rc",
      "touch_version": "6.0.3.6",
      "lunch": "cm_jflteatt-userdebug",
      "key": "jflteatt",
      "flash_recovery": "dd if=/dev/block/platform/msm_sdcc.1/by-name/aboot of=/sdcard/clockworkmod/aboot.img; /data/data/com.koushikdutta.rommanager/files/loki_patch recovery /sdcard/clockworkmod/aboot.img %s /sdcard/clockworkmod/recovery.lok ; /data/data/com.koushikdutta.rommanager/files/loki_flash recovery /sdcard/clockworkmod/recovery.lok ; ",
      "name": "Samsung Galaxy S4 (AT&T)",
      "legacy_versions": [
        "6.0.3.2"
      ],
      "version": "6.0.3.6"
    },
    {
      "init": "init.m7ul.rc",
      "touch_version": "6.0.3.6",
      "lunch": "cm_m7ul-userdebug",
      "key": "m7ul",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p34 bs=4096 ; ",
      "name": "HTC One (non-US GSM)",
      "legacy_versions": [
        "6.0.3.2"
      ],
      "version": "6.0.3.6"
    },
    {
      "init": "init.jfltevzw.rc",
      "touch_version": "6.0.3.6",
      "lunch": "cm_jfltevzw-userdebug",
      "key": "jfltevzw",
      "flash_recovery": "dd if=/dev/block/platform/msm_sdcc.1/by-name/aboot of=/sdcard/clockworkmod/aboot.img; /data/data/com.koushikdutta.rommanager/files/loki_patch recovery /sdcard/clockworkmod/aboot.img %s /sdcard/clockworkmod/recovery.lok ; /data/data/com.koushikdutta.rommanager/files/loki_flash recovery /sdcard/clockworkmod/recovery.lok ; ",
      "name": "Samsung Galaxy S4 (Verizon)",
      "legacy_versions": [
        "6.0.3.2"
      ],
      "version": "6.0.3.6"
    },
    {
      "init": "init.jfltespr.rc",
      "touch_version": "6.0.3.6",
      "lunch": "cm_jfltespr-userdebug",
      "key": "jfltespr",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p21 bs=4096 ; ",
      "name": "Samsung Galaxy S4 (Sprint)",
      "legacy_versions": [
        "6.0.3.2"
      ],
      "version": "6.0.3.6"
    },
    {
      "init": "init.jflteusc.rc",
      "touch_version": "6.0.3.2",
      "lunch": "cm_jflteusc-userdebug",
      "key": "jflteusc",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p21 bs=4096 ; ",
      "name": "Samsung Galaxy S4 (US Cellular)",
      "legacy_versions": [

      ],
      "version": "6.0.3.2"
    },
    {
      "init": "init.jfltexx.rc",
      "touch_version": "6.0.3.6",
      "lunch": "cm_jfltexx-userdebug",
      "key": "jfltexx",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p21 bs=4096 ; ",
      "name": "Samsung Galaxy S4 (i9505)",
      "legacy_versions": [
        "6.0.3.2",
        "6.0.3.3",
        "6.0.3.5"
      ],
      "version": "6.0.3.6"
    },
    {
      "init": "init.jfltecri.rc",
      "touch_version": "6.0.3.6",
      "lunch": "cm_jfltecri-userdebug",
      "key": "jfltecri",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p21 bs=4096 ; ",
      "name": "Samsung Galaxy S4 (Cricket)",
      "legacy_versions": [
        "6.0.3.2"
      ],
      "version": "6.0.3.6"
    },
    {
      "init": "init.gelato.rc",
      "lunch": "cm_lgl55c-userdebug",
      "key": "lgl55c",
      "flash_recovery": "dd if=%s of=/dev/block/mtdblock2 bs=4096 ; ",
      "name": "LG Optimus Q (LGL55C Tracfone)",
      "legacy_versions": [

      ],
      "version": "6.0.3.3"
    },
    {
      "init": "init.jfltecsp.rc",
      "touch_version": "6.0.3.6",
      "lunch": "cm_jfltecsp-userdebug",
      "key": "jfltecsp",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p21 bs=4096 ; ",
      "name": "Samsung Galaxy S4 (C Spire)",
      "legacy_versions": [
        "6.0.3.5"
      ],
      "version": "6.0.3.6"
    },
    {
      "init": "init.highmem.rc",
      "lunch": "cm_m660-userdebug",
      "key": "m660",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p16 ; ",
      "name": "Huawei Ascend Q",
      "legacy_versions": [

      ],
      "version": "6.0.3.5"
    },
    {
      "init": "init.flo.rc",
      "touch_version": "6.0.3.7",
      "lunch": "cm_flo-userdebug",
      "key": "flo",
      "flash_recovery": "dd if=%s of=/dev/block/platform/msm_sdcc.1/by-name/recovery bs=4096 ; ",
      "name": "Google Nexus 7 (2013)",
      "legacy_versions": [

      ],
      "version": "6.0.3.7"
    },
    {
      "init": "init.apexqtmo.rc",
      "touch_version": "6.0.3.8",
      "lunch": "cm_apexqtmo-userdebug",
      "key": "apexqtmo",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p18 bs=4096 ; ",
      "name": "Samsung SGH-T699",
      "legacy_versions": [

      ],
      "version": "6.0.3.8"
    }
  ],
  "use_in_app": false,
  "manifest_signature": "O8+Kc2mdQz0e/AjCQn6Rw6fK5Kr5LZItJ474Ua3gF2o4IgdCQZXIbwCHIo6xeqY3pVEGtjYmmyO1PkRYcGqq2rB2wQM8SoKFl/70vG0ihEZ5TDeruKUgxVVSNM3e09kBvCxYK89GWqVWkNHtvTu1T1F9w6FilzCsNFSAXHD0Bos=",
  "recovery_zip_url": "http://download2.clockworkmod.com/recoveries/recovery-clockwork-%s-%s.zip",
  "keywords": "phone accessories,droid,gadgets,bluetooth headset,car charger,sd card",
  "version": "2.5.0.1"
}