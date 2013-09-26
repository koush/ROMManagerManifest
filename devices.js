{
  "manifest": "http://developer.clockworkmod.com/merge",
  "owners": {
    "attn1.repo@gmail.com": true,
    "arcee@cyanogenmod.com": true,
    "ferguson.david@gmail.com": true,
    "koush@clockworkmod.com": true,
    "daniel.hillenbrand@codeworkx.de": true,
    "keaneyw@gmail.com": true,
    "bigbeeshane@gmail.com": true,
    "utkanos@gmail.com": true,
    "njgreb@gmail.com": true,
    "echen@cyngn.com": true,
    "cvpcsm@gmail.com": true,
    "playfulgod@gmail.com": true,
    "layhertony@gmail.com": true
  },
  "recovery_zip_url": "http://download2.clockworkmod.com/recoveries/recovery-clockwork-%s-%s.zip",
  "recovery_twrp_url": "http://download2.clockworkmod.com/twrp/openrecovery-twrp-%s-%s.img",
  "devices": [
    {
      "alternate_recovery": {
        "url": "http://koush.kanged.net/cm/recoveries/sprecovery.img",
        "clockwork": false,
        "name": "SPRecovery 0.99.3b"
      },
      "init": "init.sholes.rc",
      "key": "sholes",
      "legacy_versions": [
        "3.1.0.2",
        "2.5.1.4",
        "2.5.1.3",
        "2.5.1.1",
        "2.5.0.1"
      ],
      "name": "Motorola Droid",
      "version": "2.5.0.1"
    },
    {
      "alternate_recovery": {
        "url": "http://files.androidspin.com/downloads.php?dir=amon_ra/RECOVERY/&file=recovery-RA-sapphire-v1.7.0G.img",
        "clockwork": false,
        "name": "RA Recovery v1.7.0G"
      },
      "init": "init.sapphire.rc",
      "key": "sapphire",
      "legacy_versions": [
        "2.5.0.7",
        "2.5.1.4",
        "2.5.1.3",
        "2.5.1.1"
      ],
      "name": "HTC MyTouch 3G",
      "version": "2.5.0.7"
    },
    {
      "alternate_recovery": {
        "url": "http://files.androidspin.com/downloads.php?dir=amon_ra/RECOVERY/&file=recovery-RA-sapphire-v1.7.0H.img",
        "clockwork": false,
        "name": "RA Recovery v1.7.0H"
      },
      "init": "init.sapphire.rc",
      "key": "magic",
      "legacy_versions": [
        "2.5.0.7",
        "2.5.1.4",
        "2.5.1.3",
        "2.5.1.1"
      ],
      "name": "HTC Magic",
      "version": "2.5.0.7"
    },
    {
      "alternate_recovery": {
        "url": "http://files.androidspin.com/downloads.php?dir=amon_ra/RECOVERY/&file=recovery-RA-dream-v1.7.0.img",
        "clockwork": false,
        "name": "RA Recovery v1.7.0"
      },
      "init": "init.trout.rc",
      "key": "dream",
      "legacy_versions": [
        "2.5.0.7",
        "2.5.1.4",
        "2.5.1.3",
        "2.5.1.1"
      ],
      "name": "HTC G1/Dream",
      "version": "2.5.0.7"
    },
    {
      "alternate_recovery": {
        "url": "http://files.androidspin.com/downloads.php?dir=amon_ra/RECOVERY/&file=recovery-RA-passion-v2.2.1.img",
        "clockwork": false,
        "name": "RA Recovery v2.2.1"
      },
      "init": "init.mahimahi.rc",
      "key": "passion",
      "lunch": "cyanogen_passion-eng",
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
      "name": "Google Nexus One",
      "version": "5.0.2.0"
    },
    {
      "alternate_recovery": {
        "url": "http://files.androidspin.com/downloads.php?dir=amon_ra/RECOVERY/&file=recovery-RA-hero-v1.7.0.1.img",
        "clockwork": false,
        "name": "RA Recovery v1.7.0.1"
      },
      "init": "init.hero.rc",
      "key": "hero",
      "legacy_versions": [
        "2.5.0.7",
        "2.5.1.4",
        "2.5.1.3",
        "2.5.1.1"
      ],
      "name": "HTC Hero (GSM)",
      "version": "2.5.0.7"
    },
    {
      "alternate_recovery": {
        "url": "http://www.androidspin.com/downloads.php?dir=amon_ra/RECOVERY/&file=recovery-RA-heroc-v1.6.2.img",
        "clockwork": false,
        "name": "RA Recovery v1.6.2"
      },
      "init": "init.heroc.rc",
      "key": "heroc",
      "legacy_versions": [
        "2.5.0.7",
        "2.5.1.4",
        "2.5.1.3",
        "2.5.1.1"
      ],
      "name": "HTC Hero (CDMA)",
      "version": "2.5.0.7"
    },
    {
      "alternate_recovery": {
        "url": "http://files.androidspin.com/downloads.php?dir=amon_ra/RECOVERY/&file=recovery-RA-supersonic-v2.3.img",
        "clockwork": false,
        "name": "RA Recovery v2.3"
      },
      "init": "init.supersonic.rc",
      "key": "supersonic",
      "lunch": "cyanogen_supersonic-eng",
      "touch_version": "5.8.0.1",
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
      "name": "HTC Evo",
      "version": "5.0.2.2"
    },
    {
      "init": "init.legend.rc",
      "key": "legend",
      "lunch": "cyanogen_legend-eng",
      "readonly_recovery": true,
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
      "name": "HTC Legend",
      "version": "5.0.2.0"
    },
    {
      "init": "init.bravo.rc",
      "key": "bravo",
      "lunch": "cyanogen_bravo-eng",
      "touch_version": "5.8.0.2",
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
      "name": "HTC Desire",
      "version": "5.0.2.0"
    },
    {
      "init": "init.bravoc.rc",
      "key": "bravoc",
      "lunch": "cyanogen_bravoc-eng",
      "legacy_versions": [
        "2.5.0.9",
        "2.5.1.4",
        "2.5.1.3",
        "2.5.1.1",
        "2.5.0.9",
        "5.0.0.1",
        "5.0.1.0"
      ],
      "name": "HTC Desire CDMA",
      "version": "5.0.2.0"
    },
    {
      "init": "init.qcom.rc",
      "key": "pulsemini",
      "legacy_versions": [
        "2.5.0.7",
        "2.5.1.4",
        "2.5.1.3",
        "2.5.1.1"
      ],
      "name": "Huawei Pulse Mini",
      "version": "2.5.0.7"
    },
    {
      "alternate_recovery": {
        "url": "http://dl.dropbox.com/u/12949506/RomManager/recovery-RA-inc-3.02.img",
        "clockwork": false,
        "name": "RA_GNM Recovery v3.02"
      },
      "init": "init.inc.rc",
      "key": "inc",
      "lunch": "cyanogen_inc-eng",
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
      "name": "HTC Incredible (CDMA)",
      "version": "5.0.2.0"
    },
    {
      "init": "init.liberty.rc",
      "key": "liberty",
      "readonly_recovery": true,
      "legacy_versions": [
        "2.5.0.7",
        "2.5.1.4",
        "2.5.1.3",
        "2.5.1.1"
      ],
      "name": "HTC Aria",
      "version": "2.5.0.7"
    },
    {
      "alternate_recovery": {
        "url": "http://www.androidspin.com/downloads.php?dir=amon_ra/RECOVERY/&file=recovery-RA-eris-v1.6.2.img",
        "clockwork": false,
        "name": "RA Recovery v1.6.2"
      },
      "init": "init.desirec.rc",
      "key": "desirec",
      "readonly_recovery": true,
      "legacy_versions": [
        "2.5.0.7",
        "2.5.1.4",
        "2.5.1.3",
        "2.5.1.1"
      ],
      "name": "Motorola Droid Eris",
      "version": "2.5.0.7"
    },
    {
      "init": "init.buzz.rc",
      "key": "buzz",
      "lunch": "cyanogen_buzz-eng",
      "readonly_recovery": true,
      "legacy_versions": [
        "3.0.0.6",
        "2.5.1.4",
        "2.5.1.3",
        "2.5.1.1",
        "2.5.0.7",
        "5.0.0.8",
        "5.0.1.0"
      ],
      "name": "HTC Buzz (Wildfire)",
      "version": "5.0.2.0"
    },
    {
      "init": "init.qcom.rc",
      "key": "streak",
      "legacy_versions": [
        "2.5.0.7",
        "2.5.1.4",
        "2.5.1.3",
        "2.5.1.1"
      ],
      "name": "Dell Streak",
      "version": "2.5.0.7"
    },
    {
      "init": "init.latte.rc",
      "key": "espresso",
      "readonly_recovery": true,
      "legacy_versions": [
        "2.5.0.7",
        "2.5.1.4",
        "2.5.1.3",
        "2.5.1.1"
      ],
      "name": "HTC MyTouch Slide",
      "version": "2.5.0.7"
    },
    {
      "init": "lpm.rc",
      "key": "galaxys",
      "readonly_recovery": true,
      "legacy_versions": [
        "2.5.1.2",
        "2.5.1.4",
        "2.5.1.3",
        "2.5.1.1"
      ],
      "name": "Samsung GalaxyS i9000",
      "version": "2.5.1.2"
    },
    {
      "init": "init.smdkc110.rc",
      "key": "fascinate",
      "readonly_recovery": true,
      "legacy_versions": [
        "3.0.0.8",
        "2.5.1.4",
        "2.5.1.3",
        "2.5.1.1"
      ],
      "name": "Samsung GalaxyS Fascinate",
      "version": "3.0.0.8"
    },
    {
      "init": "init.smdkc110.rc",
      "key": "vibrant",
      "readonly_recovery": true,
      "legacy_versions": [
        "2.5.1.2",
        "2.5.1.4",
        "2.5.1.3",
        "2.5.1.1"
      ],
      "name": "Samsung GalaxyS Vibrant",
      "version": "2.5.1.2"
    },
    {
      "init": "init.smdkc110.rc",
      "key": "captivate",
      "readonly_recovery": true,
      "legacy_versions": [
        "2.5.1.2",
        "2.5.1.4",
        "2.5.1.3",
        "2.5.1.1"
      ],
      "name": "Samsung GalaxyS Captivate",
      "version": "2.5.1.2"
    },
    {
      "init": "init.qcom.rc",
      "key": "pulse",
      "legacy_versions": [
        "2.5.0.7",
        "2.5.1.4",
        "2.5.1.3",
        "2.5.1.1"
      ],
      "name": "Huawei Pulse",
      "version": "2.5.0.7"
    },
    {
      "alternate_recovery": {
        "url": "http://dl.dropbox.com/u/12949506/RomManager/recovery-RA-aloha-2.2.2-GNM.img",
        "clockwork": false,
        "name": "RA_GNM Recovery v2.2.2"
      },
      "init": "init.aloha.rc",
      "key": "aloha",
      "legacy_versions": [
        "2.5.0.7",
        "2.5.1.4",
        "2.5.1.3",
        "2.5.1.1"
      ],
      "name": "LG Ally",
      "version": "2.5.0.7"
    },
    {
      "init": "init.mapphone_cdma.rc",
      "key": "milestone",
      "readonly_recovery": true,
      "legacy_versions": [
        "2.5.0.7",
        "2.5.1.4",
        "2.5.1.3",
        "2.5.1.1",
        "2.5.0.7"
      ],
      "name": "Motorola Milestone",
      "version": "3.1.0.2"
    },
    {
      "reboot_recovery": "rm /cache/recovery/command ; echo 1 > /data/.recovery_mode ; sync ; reboot ;",
      "init": "init.mapphone_cdma.rc",
      "key": "droidx",
      "readonly_recovery": true,
      "legacy_versions": [
        "2.5.0.7"
      ],
      "flash_recovery": "dd if=%s of=/preinstall/recovery/recovery.zip ; ",
      "name": "Motorola Droid X",
      "version": "5.0.2.0"
    },
    {
      "reboot_recovery": "rm /cache/recovery/command ; echo 1 > /data/.recovery_mode ; sync ; reboot ;",
      "init": "init.mapphone_cdma.rc",
      "key": "shadow",
      "lunch": "cyanogen_shadow-eng",
      "readonly_recovery": true,
      "legacy_versions": [
        "2.5.0.7"
      ],
      "flash_recovery": "dd if=%s of=/preinstall/recovery/recovery.zip ; ",
      "name": "Motorola Droid X (2nd-init)",
      "version": "5.0.2.0"
    },
    {
      "init": "init.salsa.rc",
      "key": "salsa",
      "legacy_versions": [
        "2.5.1.4",
        "2.5.1.3",
        "2.5.1.1",
        "2.5.1.0"
      ],
      "name": "Acer Liquid",
      "version": "2.5.1.0"
    },
    {
      "init": "init.qcom.rc",
      "key": "z71",
      "legacy_versions": [
        "2.5.1.4",
        "2.5.1.3",
        "2.5.1.1",
        "2.5.1.0"
      ],
      "name": "Commtiva Z71 (Boston, Blaze, and more)",
      "version": "2.5.1.3"
    },
    {
      "init": "init.vision.rc",
      "key": "vision",
      "lunch": "cyanogen_vision-eng",
      "touch_version": "5.8.1.0",
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
      "flash_recovery": "dd if=/dev/zero of=/dev/block/mmcblk0p21 bs=4096 ; dd if=%s of=/dev/block/mmcblk0p21 bs=4096 ; ",
      "name": "HTC G2",
      "version": "5.0.2.7"
    },
    {
      "init": "init.glacier.rc",
      "key": "glacier",
      "lunch": "cyanogen_glacier-eng",
      "touch_version": "5.8.1.0",
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
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p21 ; ",
      "name": "HTC MyTouch 4G",
      "version": "5.0.2.0"
    },
    {
      "init": "init.spade.rc",
      "key": "ace",
      "lunch": "cyanogen_ace-eng",
      "touch_version": "5.8.1.5",
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
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p21 ; ",
      "name": "HTC Desire HD",
      "version": "5.0.2.0"
    },
    {
      "init": "init.morrison.rc",
      "key": "morrison",
      "lunch": "cyanogen_morrison-eng",
      "touch_version": "5.8.1.0",
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
      "name": "Motorola Cliq",
      "version": "5.0.2.0"
    },
    {
      "reboot_recovery": "rm /cache/recovery/command ; echo 1 > /data/.recovery_mode ; sync ; reboot ;",
      "init": "init.mapphone_cdma.rc",
      "key": "droid2",
      "lunch": "cyanogen_droid2-eng",
      "readonly_recovery": true,
      "legacy_versions": [
        "2.5.0.8"
      ],
      "flash_recovery": "dd if=%s of=/preinstall/recovery/recovery.zip ; ",
      "name": "Motorola Droid 2",
      "version": "5.0.2.0"
    },
    {
      "alternate_recovery": {
        "url": "http://dl.dropbox.com/u/10355648/recovery-ONE-1_6.img",
        "clockwork": false,
        "name": "ONE Recovery v1.6"
      },
      "init": "init.qcom.rc",
      "key": "one",
      "legacy_versions": [
        "2.5.1.4",
        "2.5.1.3",
        "2.5.1.1",
        "2.5.1.0"
      ],
      "name": "Geeksphone ONE",
      "version": "2.5.1.3"
    },
    {
      "reboot_recovery": "echo start > /proc/ota ; ",
      "init": "init_recovery.rc",
      "key": "vega",
      "legacy_versions": [
        "2.5.1.4",
        "2.5.1.3",
        "2.5.1.1",
        "2.5.1.0",
        "2.5.1.4"
      ],
      "flash_recovery": "/data/data/com.koushikdutta.rommanager/files/tegra_flash_image recovery %s ; ",
      "name": "Advent Vega",
      "version": "3.0.2.7"
    },
    {
      "init": "init.smdkc110.rc",
      "key": "att_tab",
      "readonly_recovery": true,
      "legacy_versions": [
        "2.5.1.8",
        "2.5.1.4",
        "2.5.1.3",
        "2.5.1.1"
      ],
      "name": "Samsung Galaxy Tab - ATT",
      "version": "2.5.1.8"
    },
    {
      "init": "init.smdkc110.rc",
      "key": "tmobile_tab",
      "readonly_recovery": true,
      "legacy_versions": [
        "2.5.1.8",
        "2.5.1.4",
        "2.5.1.3",
        "2.5.1.1"
      ],
      "name": "Samsung Galaxy Tab (T-Mobile)",
      "version": "2.5.1.8"
    },
    {
      "alternate_recovery": {
        "url": "http://dl.dropbox.com/u/15816725/MI700-recovery-V1_3.img",
        "clockwork": false,
        "name": "MI700 Recovery v1.6"
      },
      "init": "init.qcom.rc",
      "key": "FM6",
      "legacy_versions": [
        "2.5.1.4",
        "2.5.1.3",
        "2.5.1.1",
        "2.5.1.0"
      ],
      "name": "Commtiva Link N700, Spice MI700, and more",
      "version": "2.5.1.2"
    },
    {
      "init": "init.herring.rc",
      "key": "crespo",
      "lunch": "cm_crespo-userdebug",
      "touch_version": "6.0.3.8",
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
      "name": "Google Nexus S",
      "version": "6.0.3.8"
    },
    {
      "init": "init. mapphone_cdma.rc",
      "key": "droidpro",
      "readonly_recovery": true,
      "legacy_versions": [
        "2.5.0.8"
      ],
      "name": "Motorola Droid Pro",
      "version": "2.5.0.8"
    },
    {
      "init": "init.qcom.rc",
      "key": "ascend",
      "legacy_versions": [
        "3.0.0.5",
        "3.0.0.4"
      ],
      "name": "Huawei Ascend",
      "version": "3.0.0.5"
    },
    {
      "init": "init.blade.rc",
      "key": "blade",
      "lunch": "cyanogen_blade-eng",
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
      "name": "ZTE Blade",
      "version": "5.0.2.0"
    },
    {
      "init": "init.bahamas.rc",
      "key": "click",
      "lunch": "cyanogen_click-eng",
      "legacy_versions": [
        "3.0.0.6",
        "3.0.0.6",
        "3.0.2.7",
        "5.0.0.8",
        "5.0.1.0"
      ],
      "name": "HTC Click/Tattoo",
      "version": "5.0.2.0"
    },
    {
      "init": "init_recovery.rc",
      "key": "a7",
      "readonly_recovery": true,
      "legacy_versions": [
        "3.0.0.8"
      ],
      "name": "Elocity A7",
      "version": "3.0.0.8"
    },
    {
      "init": "init.zero.rc",
      "key": "zero",
      "legacy_versions": [
        "3.0.1.3"
      ],
      "name": "Geeksphone Zero",
      "version": "3.0.1.3"
    },
    {
      "init": "init.speedy.rc",
      "key": "speedy",
      "lunch": "cyanogen_speedy-eng",
      "touch_version": "5.8.1.6",
      "legacy_versions": [
        "3.0.1.4",
        "3.0.1.3",
        "3.0.1.2",
        "3.0.1.1",
        "3.0.1.4",
        "3.0.2.8",
        "3.2.0.1"
      ],
      "name": "HTC Evo Shift",
      "version": "5.0.2.0"
    },
    {
      "reboot_recovery": "echo 1 > /cache/.startrecovery ; sync ; reboot ;",
      "init": "init.aries.rc",
      "key": "captivatemtd",
      "officially_supported": false,
      "legacy_versions": [

      ],
      "name": "Samsung Captivate (MTD)"
    },
    {
      "reboot_recovery": "echo 1 > /cache/.startrecovery ; sync ; reboot ;",
      "init": "init.aries.rc",
      "key": "showcasemtd",
      "officially_supported": false,
      "legacy_versions": [

      ],
      "name": "Samsung Showcase (MTD)"
    },
    {
      "reboot_recovery": "echo 1 > /cache/.startrecovery ; sync ; reboot ;",
      "init": "init.aries.rc",
      "key": "mesmerizemtd",
      "officially_supported": false,
      "legacy_versions": [

      ],
      "name": "Samsung Mesmerize (MTD)"
    },
    {
      "reboot_recovery": "echo 1 > /cache/.startrecovery ; sync ; reboot ;",
      "init": "init.aries.rc",
      "key": "fascinatemtd",
      "officially_supported": false,
      "legacy_versions": [

      ],
      "name": "Samsung Fascinate (MTD)"
    },
    {
      "reboot_recovery": "echo 1 > /cache/.startrecovery ; sync ; reboot ;",
      "init": "init.aries.rc",
      "key": "vibrantmtd",
      "officially_supported": false,
      "legacy_versions": [

      ],
      "name": "Samsung Vibrant (MTD)"
    },
    {
      "reboot_recovery": "echo 1 > /cache/.startrecovery ; sync ; reboot ;",
      "init": "init.aries.rc",
      "key": "galaxysbmtd",
      "officially_supported": false,
      "legacy_versions": [

      ],
      "name": "Samsung GalaxyS i9000B (MTD)"
    },
    {
      "reboot_recovery": "echo 1 > /cache/.startrecovery ; sync ; reboot ;",
      "init": "init.aries.rc",
      "key": "galaxysmtd",
      "officially_supported": false,
      "legacy_versions": [

      ],
      "name": "Samsung GalaxyS i9000 (MTD)"
    },
    {
      "init": "lpm.rc",
      "key": "epic4g",
      "lunch": "full_epic4g-eng",
      "readonly_recovery": true,
      "legacy_versions": [

      ],
      "name": "Samsung Epic4G",
      "version": "5.0.2.7"
    },
    {
      "init": "init.tinyandroid.rc",
      "key": "streak7",
      "legacy_versions": [
        "3.0.2.0",
        "3.0.1.9",
        "3.0.1.8",
        "3.0.1.7"
      ],
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk3p1 ; ",
      "name": "Dell Streak 7",
      "version": "3.0.2.0"
    },
    {
      "alternate_recovery": {
        "url": "http://dl.dropbox.com/u/12949506/RomManager/recovery-ra-mecha-3.05.img",
        "clockwork": false,
        "name": "RA_GNM Recovery v3.05"
      },
      "init": "init.mecha.rc",
      "key": "mecha",
      "lunch": "cyanogen_mecha-eng",
      "touch_version": "5.8.0.2",
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
      "name": "HTC Thunderbolt",
      "version": "5.0.2.1"
    },
    {
      "init": "init.ideos.rc",
      "key": "ideos",
      "legacy_versions": [
        "3.0.2.4"
      ],
      "name": "Huawei U8150 Ideos",
      "version": "3.0.2.4"
    },
    {
      "init": "init.stingray.rc",
      "key": "stingray",
      "lunch": "cm_stingray-userdebug",
      "touch_version": "6.0.3.1",
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
      "flash_recovery": "dd if=%s of=/dev/block/platform/sdhci-tegra.3/by-name/recovery ; ",
      "name": "Motorola XOOM",
      "version": "6.0.3.1"
    },
    {
      "init": "init.leo.rc",
      "key": "leo",
      "legacy_versions": [
        "3.0.2.5",
        "3.0.2.4",
        "3.0.2.5"
      ],
      "name": "HTC HD2",
      "version": "3.1.0.0"
    },
    {
      "init": "init.zeppelin.rc",
      "key": "zeppelin",
      "lunch": "cyanogen_zeppelin-eng",
      "legacy_versions": [
        "3.0.2.4",
        "3.0.2.4",
        "5.0.0.8",
        "5.0.0.8",
        "5.0.1.0",
        "5.0.1.0"
      ],
      "name": "Motorola CLIQ XT/Quench (MB501)",
      "version": "5.0.2.0"
    },
    {
      "init": "init.saga.rc",
      "key": "saga",
      "lunch": "full_saga-eng",
      "touch_version": "5.8.1.5",
      "legacy_versions": [
        "3.0.2.6",
        "5.0.1.9"
      ],
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p21 ; ",
      "name": "HTC Desire S",
      "version": "5.0.2.0"
    },
    {
      "reboot_recovery": "echo 'boot-recovery' | dd of=/dev/block/mmcblk0p3 seek=6144 bs=1 ; reboot ; ",
      "init": "init_recovery.rc",
      "key": "p999",
      "lunch": "cyanogen_p999-eng",
      "readonly_recovery": true,
      "legacy_versions": [
        "3.0.2.7",
        "5.0.0.8",
        "5.0.1.0",
        "5.0.1.4",
        "5.0.1.6"
      ],
      "name": "LG G2X (T-Mobile)",
      "version": "5.0.2.0"
    },
    {
      "reboot_recovery": "echo 'boot-recovery' | dd of=/dev/block/mmcblk0p3 seek=6144 bs=1 ; reboot ; ",
      "inits": [
        "init_recovery.rc",
        "/bootimages/opening_01.rle"
      ],
      "key": "p990",
      "lunch": "cm_p990-userdebug",
      "touch_version": "6.0.3.1",
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
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p7 ; ",
      "name": "LG Optimus 2X",
      "version": "6.0.3.1"
    },
    {
      "init": "init.herring.rc",
      "key": "crespo4g",
      "lunch": "cm_crespo4g-userdebug",
      "touch_version": "6.0.3.8",
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
      "name": "Google Nexus S 4G",
      "version": "6.0.3.8"
    },
    {
      "alternate_recovery": {
        "url": "http://dl.dropbox.com/u/12949506/RomManager/recovery-RA-thunderg-2.2.1-GNM.img",
        "clockwork": false,
        "name": "RA_GNM Recovery v2.2.1"
      },
      "init": "init.thunderg.rc",
      "key": "thunderg",
      "lunch": "full_thunderg-eng",
      "legacy_versions": [
        "3.1.0.0",
        "5.0.0.8",
        "5.0.1.0"
      ],
      "name": "LG Optimus One (old BB)",
      "version": "5.0.2.0"
    },
    {
      "init": "init.thunderg.rc",
      "key": "p500",
      "lunch": "cyanogen_p500-eng",
      "legacy_versions": [
        "5.0.2.0"
      ],
      "name": "LG Optimus One",
      "version": "5.0.2.7"
    },
    {
      "init": "init.qcom.rc",
      "key": "u8220",
      "legacy_versions": [

      ],
      "name": "Huawei U8220/U8230",
      "version": "3.1.0.1"
    },
    {
      "init": "init.smdkc110.rc",
      "key": "charge",
      "readonly_recovery": true,
      "legacy_versions": [

      ],
      "name": "Samsung Charge",
      "version": "3.1.0.1"
    },
    {
      "init": "init.mapphone_umts.rc",
      "key": "umts_jordan",
      "officially_supported": false,
      "legacy_versions": [

      ],
      "name": "Motorola Defy"
    },
    {
      "init": "init.smdkc110.rc",
      "key": "galaxys4g",
      "readonly_recovery": true,
      "legacy_versions": [
        "3.2.0.0"
      ],
      "name": "Samsung Galaxy S 4G",
      "version": "3.2.0.0"
    },
    {
      "init": "init.smdkc210.rc",
      "ro.product.device": [
        "i9100",
        "galaxys2"
      ],
      "inits": [
        "init.smdkc210.rc",
        "init.smdk4210.rc"
      ],
      "key": "galaxys2",
      "touch_version": "5.8.1.5",
      "readonly_recovery": true,
      "legacy_versions": [
        "4.0.1.4",
        "v4.0.1.4"
      ],
      "name": "Samsung Galaxy S2",
      "version": "4.0.1.5"
    },
    {
      "init": "init.smdk4210.rc",
      "ro.product.device": [
        "i9100",
        "galaxys2"
      ],
      "inits": [
        "init.smdkc210.rc",
        "init.smdk4210.rc"
      ],
      "key": "i9100",
      "lunch": "cm_i9100-userdebug",
      "officially_supported": false,
      "legacy_versions": [

      ],
      "name": "Samsung Galaxy S2",
      "version": "6.0.1.0"
    },
    {
      "init": "init.smdk4210.rc",
      "key": "n7000",
      "lunch": "cm_n7000-userdebug",
      "readonly_recovery": true,
      "legacy_versions": [
        "6.0.1.0"
      ],
      "name": "Samsung Galaxy Note (GT-N7000)",
      "version": "6.0.1.2"
    },
    {
      "init": "init.smdkc110.rc",
      "key": "sidekick4g",
      "readonly_recovery": true,
      "legacy_versions": [

      ],
      "name": "Samsung Sidekick 4G",
      "version": "4.0.0.2"
    },
    {
      "init": "init.vivo.rc",
      "key": "vivo",
      "lunch": "cyanogen_vivo-eng",
      "legacy_versions": [
        "4.0.0.4",
        "4.0.0.6",
        "4.0.0.7",
        "4.0.0.8",
        "5.0.1.9"
      ],
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p21 ; ",
      "name": "HTC Incredible S",
      "version": "5.0.2.0"
    },
    {
      "alternate_recovery": {
        "url": "http://dl.dropbox.com/u/12949506/RomManager/recovery-ra-vivow-3.05.img",
        "clockwork": false,
        "name": "RA_GNM Recovery v3.05"
      },
      "init": "init.vivow.rc",
      "key": "vivow",
      "lunch": "cyanogen_vivow-eng",
      "legacy_versions": [
        "4.0.0.4",
        "4.0.0.6",
        "4.0.0.7",
        "4.0.0.8",
        "5.0.1.9"
      ],
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p21 ; ",
      "name": "HTC Incredible 2",
      "version": "5.0.2.0"
    },
    {
      "reboot_recovery": "echo '518 R 1' > /sys/kernel/kobject_lge_nvdata/dynamic_nvdata_raw_write ; reboot ; ",
      "inits": [
        "init.p920.rc",
        "/bootimages/opening_01.rle"
      ],
      "key": "p920",
      "lunch": "cm_p920-userdebug",
      "touch_version": "6.0.1.9",
      "legacy_versions": [
        "4.0.0.7",
        "4.0.0.9",
        "5.0.1.4",
        "5.0.2.0",
        "5.0.2.7"
      ],
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p6 ; ",
      "name": "LG Optimus 3D",
      "version": "6.0.1.9"
    },
    {
      "init": "init.galaxyace.rc",
      "key": "galaxyace",
      "legacy_versions": [

      ],
      "flash_recovery": "/data/data/com.koushikdutta.rommanager/files/flash_image recoveryonly %s ; ",
      "name": "Samsung Galaxy Ace",
      "version": "4.0.0.9"
    },
    {
      "init": "init_prep_keypad.sh",
      "inits": [
        "init_prep_keypad.sh",
        "init.olympus.rc"
      ],
      "key": "olympus",
      "lunch": "generic_olympus-eng",
      "touch_version": "5.8.1.8",
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
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p10 ; ",
      "name": "Motorola Atrix 4G",
      "version": "5.0.2.0"
    },
    {
      "init": "init_recovery.rc",
      "key": "smb_a1002",
      "legacy_versions": [

      ],
      "flash_recovery": "/data/data/com.koushikdutta.rommanager/files/tegra_flash_image recovery %s ; ",
      "name": "Viewsonic GTablet (smb_a1002)",
      "version": "4.0.1.5"
    },
    {
      "init": "init.shooter.rc",
      "key": "shooter",
      "lunch": "htc_shooter-eng",
      "touch_version": "5.8.0.2",
      "legacy_versions": [
        "4.0.1.5",
        "5.0.0.0",
        "5.0.1.0"
      ],
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p22 ; ",
      "name": "HTC EVO 3D",
      "version": "5.0.2.0"
    },
    {
      "init": "init.pyramid.rc",
      "key": "pyramid",
      "lunch": "full_pyramid-eng",
      "touch_version": "5.8.0.9",
      "legacy_versions": [
        "4.0.1.5",
        "5.0.0.1",
        "5.0.0.7",
        "5.0.0.8",
        "5.0.1.0"
      ],
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p21 ; ",
      "name": "HTC Sensation",
      "version": "5.0.2.0"
    },
    {
      "init": "init.qcom.rc",
      "inits": [
        "init.qcom.rc",
        "init.huawei.rc"
      ],
      "key": "ascend2",
      "legacy_versions": [

      ],
      "name": "Huawei Ascend 2 (M865)",
      "version": "4.0.1.5"
    },
    {
      "init": "init.qcom.rc",
      "key": "a70",
      "legacy_versions": [

      ],
      "name": "Micromax A70",
      "version": "4.0.1.5"
    },
    {
      "init": "init.galaxygio.rc",
      "key": "galaxygio",
      "readonly_recovery": true,
      "legacy_versions": [

      ],
      "name": "Samsung Galaxy Gio",
      "version": "4.0.1.5"
    },
    {
      "init": "init.smdkc110.rc",
      "key": "indulge910",
      "readonly_recovery": true,
      "legacy_versions": [

      ],
      "name": "Samsung Indulge 910",
      "version": "4.0.1.5"
    },
    {
      "init": "init.smdkc110.rc",
      "key": "indulge915",
      "readonly_recovery": true,
      "legacy_versions": [

      ],
      "name": "Samsung Indulge 915",
      "version": "4.0.1.5"
    },
    {
      "init": "/bootimages/ON_480x800_08fps_0000.rle",
      "key": "p970",
      "lunch": "cm_p970-userdebug",
      "touch_version": "6.0.1.4",
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
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p4 ; ",
      "name": "LG Optimus Black",
      "version": "6.0.1.4"
    },
    {
      "init": "init.shooteru.rc",
      "key": "shooteru",
      "lunch": "full_shooteru-eng",
      "touch_version": "5.8.0.2",
      "legacy_versions": [
        "5.0.1.6",
        "5.0.1.7",
        "5.0.1.8",
        "5.0.1.9"
      ],
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p21 ; ",
      "name": "HTC EVO 3D (GSM)",
      "version": "5.0.2.0"
    },
    {
      "reboot_recovery": "rm /cache/recovery/command ; echo 1 > /data/.recovery_mode ; sync ; reboot ;",
      "init": "init.mapphone_cdma.rc",
      "key": "droid2we",
      "lunch": "cyanogen_droid2we-eng",
      "readonly_recovery": true,
      "legacy_versions": [

      ],
      "flash_recovery": "dd if=%s of=/preinstall/recovery/recovery.zip ; ",
      "name": "Motorola Droid 2 Global",
      "version": "5.0.2.3"
    },
    {
      "reboot_recovery": "rm /cache/recovery/command ; echo 1 > /data/.recovery_mode ; sync ; reboot ;",
      "init": "init.mapphone_cdma.rc",
      "key": "targa",
      "lunch": "generic_targa-eng",
      "readonly_recovery": true,
      "legacy_versions": [
        "5.0.2.3",
        "5.0.2.4"
      ],
      "flash_recovery": "dd if=%s of=/preinstall/recovery/recovery.zip ; ",
      "name": "Motorola Droid Bionic",
      "version": "5.0.2.5"
    },
    {
      "reboot_recovery": "rm /cache/recovery/command ; echo 1 > /data/.recovery_mode ; sync ; reboot ;",
      "init": "init.mapphone_cdma.rc",
      "key": "daytona",
      "lunch": "generic_daytona-eng",
      "readonly_recovery": true,
      "legacy_versions": [
        "5.0.2.3",
        "5.0.2.4"
      ],
      "flash_recovery": "dd if=%s of=/preinstall/recovery/recovery.zip ; ",
      "name": "Motorola Droid X2",
      "version": "5.0.2.5"
    },
    {
      "reboot_recovery": "rm /cache/recovery/command ; echo 1 > /data/.recovery_mode ; sync ; reboot ;",
      "init": "init.mapphone_cdma.rc",
      "key": "solana",
      "lunch": "full_solana-eng",
      "readonly_recovery": true,
      "legacy_versions": [
        "5.0.2.5"
      ],
      "flash_recovery": "dd if=%s of=/preinstall/recovery/recovery.zip ; ",
      "name": "Motorola Droid 3",
      "version": "5.0.2.6"
    },
    {
      "init": "init.motus.rc",
      "key": "motus",
      "lunch": "cyanogen_motus-eng",
      "legacy_versions": [

      ],
      "name": "Motorola Backflip",
      "version": "5.0.2.6"
    },
    {
      "init": "init.gt-s5570.rc",
      "key": "tass",
      "lunch": "tass-eng",
      "readonly_recovery": true,
      "legacy_versions": [

      ],
      "name": "Samsung Galaxy Mini",
      "version": "5.0.2.6"
    },
    {
      "init": "init.u8800.rc",
      "key": "u8800",
      "lunch": "huawei_u8800-eng",
      "legacy_versions": [

      ],
      "flash_recovery": "mount -o remount,rw -t vfat /dev/block/mmcblk0p1 /cust_backup ; cat %s > /cust_backup/image/recovery.img ;",
      "name": "Huawei U8800",
      "version": "5.0.2.6"
    },
    {
      "init": "init.smdkc210.rc",
      "inits": [
        "init.smdkc210.rc",
        "init.smdk4210.rc"
      ],
      "key": "galaxys2att",
      "lunch": "cyanogen_galaxys2att-eng",
      "touch_version": "5.8.1.5",
      "readonly_recovery": true,
      "legacy_versions": [

      ],
      "name": "Samsung Galaxy S2 (AT&T)",
      "version": "5.0.2.6"
    },
    {
      "owners": {
        "jmprblckwing182@gmail.com": true
      },
      "init": "init.target.rc",
      "key": "hercules",
      "lunch": "cm_hercules-userdebug",
      "touch_version": "6.0.3.6",
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
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p22 bs=4096 ; ",
      "name": "Samsung Galaxy S2 (T-Mobile)",
      "version": "6.0.3.6"
    },
    {
      "init": "init.smdkc210.rc",
      "key": "epic4gtouch",
      "lunch": "full_epic4gtouch-eng",
      "touch_version": "5.8.1.5",
      "readonly_recovery": true,
      "legacy_versions": [
        "5.0.2.6",
        "5.0.2.7"
      ],
      "name": "Samsung Epic 4G Touch",
      "version": "5.0.2.7"
    },
    {
      "init": "init.ruby.rc",
      "key": "ruby",
      "lunch": "full_ruby-eng",
      "legacy_versions": [

      ],
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p23 bs=4096 ; ",
      "name": "HTC Amaze",
      "version": "5.0.2.6"
    },
    {
      "init": "init.gt-i5500.rc",
      "key": "galaxy5",
      "lunch": "samsung_galaxy5-eng",
      "readonly_recovery": true,
      "legacy_versions": [
        "5.0.2.8"
      ],
      "name": "Samsung Galaxy 5",
      "version": "5.0.2.8"
    },
    {
      "init": "init.mooncake.rc",
      "key": "mooncake",
      "lunch": "generic_mooncake-eng",
      "legacy_versions": [

      ],
      "name": "ZTE Racer",
      "version": "5.0.2.7"
    },
    {
      "init": "init.smdkc110.rc",
      "key": "vzwtab",
      "lunch": "full_vzwtab-eng",
      "readonly_recovery": true,
      "legacy_versions": [
        "5.0.2.7",
        "5.0.2.7",
        "5.0.2.7"
      ],
      "name": "Samsung Galaxy Tab (VZW)",
      "version": "5.0.2.7"
    },
    {
      "init": "init.doubleshot.rc",
      "key": "doubleshot",
      "lunch": "full_doubleshot-eng",
      "legacy_versions": [
        "5.0.2.7",
        "5.0.2.7"
      ],
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p21 bs=4096 ; ",
      "name": "HTC MyTouch 4G Slide",
      "version": "5.0.2.7"
    },
    {
      "init": "init.tuna.rc",
      "key": "maguro",
      "lunch": "cm_maguro-userdebug",
      "touch_version": "6.0.3.6",
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
      "flash_recovery": "dd if=%s of=/dev/block/platform/omap/omap_hsmmc.0/by-name/recovery bs=4096 ;",
      "name": "Google Galaxy Nexus (GSM)",
      "version": "6.0.3.6"
    },
    {
      "init": "init.tuna.rc",
      "key": "toro",
      "lunch": "cm_toro-userdebug",
      "touch_version": "6.0.3.6",
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
      "flash_recovery": "dd if=%s of=/dev/block/platform/omap/omap_hsmmc.0/by-name/recovery bs=4096 ;",
      "name": "Google Galaxy Nexus (Verizon)",
      "version": "6.0.3.6"
    },
    {
      "init": "init.thunderc.rc",
      "key": "lg690",
      "lunch": "full_lg690-eng",
      "legacy_versions": [

      ],
      "name": "LG Optimus C LW690 and Optimus M MS690",
      "version": "5.0.2.7"
    },
    {
      "init": "init.muscat.rc",
      "key": "c660",
      "lunch": "c660-eng",
      "legacy_versions": [

      ],
      "name": "LG Optimus Pro",
      "version": "5.0.2.7"
    },
    {
      "init": "init.univa.rc",
      "key": "e510",
      "lunch": "e510-eng",
      "legacy_versions": [

      ],
      "name": "LG Optimus Hub",
      "version": "5.0.2.7"
    },
    {
      "reboot_recovery": "/system/xbin/busybox devmem 0x57fff800 32 0x5EC0B007; sync ; reboot ;",
      "init": "init.victory.rc",
      "key": "epicmtd",
      "lunch": "cyanogen_epicmtd-eng",
      "touch_version": "5.8.1.5",
      "officially_supported": false,
      "legacy_versions": [

      ],
      "name": "Samsung Epic4G (MTD)",
      "version": "5.0.2.7"
    },
    {
      "init": "init.holiday.rc",
      "key": "holiday",
      "lunch": "full_holiday-eng",
      "legacy_versions": [
        "5.0.2.7",
        "5.0.2.7",
        "5.0.2.7"
      ],
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p23 bs=4096 ; ",
      "name": "HTC Holiday",
      "version": "5.0.2.7"
    },
    {
      "inits": [
        "init.victor.rc",
        "init.e739.rc"
      ],
      "key": "e730",
      "lunch": "e730-eng",
      "legacy_versions": [

      ],
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p17 bs=4096 ;",
      "name": "LG Optimus SOL / TMo LG myTouch",
      "version": "5.0.2.7"
    },
    {
      "init": "init.marvel.rc",
      "key": "marvel",
      "lunch": "generic_marvel-eng",
      "legacy_versions": [
        "5.0.2.7"
      ],
      "name": "HTC Wildfire S",
      "version": "5.0.2.8"
    },
    {
      "init": "init.mapphone_umts.rc",
      "inits": [
        "init.mapphone_umts.rc",
        "init.mapphone_cdma.rc"
      ],
      "key": "sunfire",
      "lunch": "full_sunfire-eng",
      "legacy_versions": [
        "5.0.2.7"
      ],
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p10 bs=4096 ;",
      "name": "Motorola Photon 4G",
      "version": "5.0.2.8"
    },
    {
      "init": "init.u8160.rc",
      "inits": [
        "init.huawei.rc",
        "init.u8160.rc"
      ],
      "key": "u8160",
      "lunch": "huawei_u8160-eng",
      "legacy_versions": [
        "5.0.2.8"
      ],
      "name": "Huawei U8160",
      "version": "5.0.2.8"
    },
    {
      "init": "init.vigor.rc",
      "key": "vigor",
      "lunch": "cm_vigor-userdebug",
      "touch_version": "6.0.3.1",
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
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p23 bs=4096 ;",
      "name": "HTC Rezound",
      "version": "6.0.3.1"
    },
    {
      "init": "init.expresskt.rc",
      "key": "express",
      "lunch": "full_express-userdebug",
      "legacy_versions": [

      ],
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p21 bs=4096 ;",
      "name": "HTC EVO View 4G",
      "version": "5.8.1.5"
    },
    {
      "init": "init.cardhu.rc",
      "key": "tf201",
      "lunch": "cm_tf201-userdebug",
      "touch_version": "5.8.3.4",
      "legacy_versions": [
        "5.5.0.4",
        "5.8.2.0"
      ],
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p4 ;",
      "name": "Asus Transformer Prime",
      "version": "5.8.3.4"
    },
    {
      "reboot_recovery": "rm /cache/recovery/command ; echo 1 > /data/.recovery_mode ; sync ; reboot ;",
      "init": "init.mapphone_cdma.rc",
      "key": "maserati",
      "officially_supported": false,
      "legacy_versions": [

      ],
      "name": "Motorola Droid 4",
      "version": "5.0.2.0"
    },
    {
      "reboot_recovery": "rm /cache/recovery/command ; echo 1 > /data/.recovery_mode ; sync ; reboot ;",
      "init": "init.mapphone_cdma.rc",
      "key": "spyder",
      "officially_supported": false,
      "legacy_versions": [

      ],
      "name": "Motorola RAZR",
      "version": "5.0.2.0"
    },
    {
      "init": "init.marvelc.rc",
      "key": "marvelc",
      "lunch": "full_marvelc-eng",
      "legacy_versions": [

      ],
      "name": "HTC Wildfire S CDMA",
      "version": "5.0.2.8"
    },
    {
      "init": "init.ventana.rc",
      "key": "tf101",
      "lunch": "cm_tf101-userdebug",
      "touch_version": "5.8.3.4",
      "legacy_versions": [
        "5.5.0.4",
        "5.8.1.9",
        "5.8.2.0",
        "5.8.2.1",
        "5.8.3.4"
      ],
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p4 ;",
      "name": "Asus Transformer",
      "version": "6.0.1.3"
    },
    {
      "init": "bootimages/boot_logo_00000.rle",
      "key": "p930",
      "lunch": "cm_p930-userdebug",
      "touch_version": "6.0.1.5",
      "legacy_versions": [
        "5.8.2.0",
        "6.0.1.4"
      ],
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p13 ;",
      "name": "LG Nitro HD / LG P930 (AT&T)",
      "version": "6.0.1.5"
    },
    {
      "init": "init.smdkc210.rc",
      "inits": [
        "init.smdkc210.rc",
        "init.smdk4210.rc"
      ],
      "key": "i777",
      "lunch": "cm_i777-userdebug",
      "touch_version": "6.0.1.0",
      "readonly_recovery": true,
      "legacy_versions": [
        "5.8.1.8"
      ],
      "name": "Samsung Galaxy S2 (SGH-I777)",
      "version": "6.0.1.0"
    },
    {
      "init": "init.pico.rc",
      "key": "pico",
      "lunch": "full_pico-eng",
      "legacy_versions": [

      ],
      "name": "HTC Pico",
      "version": "5.0.2.8"
    },
    {
      "init": "ueventd.endeavoru.rc",
      "key": "endeavoru",
      "lunch": "cm_endeavoru-userdebug",
      "touch_version": "5.8.4.0",
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
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p5 bs=4096 ;",
      "name": "HTC One X (GSM)",
      "version": "5.8.4.0"
    },
    {
      "init": "init.ville.rc",
      "key": "ville",
      "lunch": "cm_ville-userdebug",
      "touch_version": "6.0.3.1",
      "legacy_versions": [
        "5.5.0.4",
        "5.8.2.1",
        "5.8.2.2",
        "5.8.2.3",
        "5.8.3.1",
        "6.0.2.9"
      ],
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p22 bs=4096 ;",
      "name": "HTC One S",
      "version": "6.0.3.1"
    },
    {
      "reboot_recovery": "echo 1 > /cache/.startrecovery ; sync ; reboot ;",
      "init": "init.p1.rc",
      "key": "p1",
      "officially_supported": false,
      "legacy_versions": [

      ],
      "name": "Samsung Galaxy Tab (MTD and GSM)",
      "version": "5.8.2.1"
    },
    {
      "reboot_recovery": "echo 1 > /cache/.startrecovery ; sync ; reboot ;",
      "init": "init.p1c.rc",
      "key": "p1c",
      "officially_supported": false,
      "legacy_versions": [

      ],
      "name": "Samsung Galaxy Tab (MTD and CDMA)",
      "version": "5.8.2.1"
    },
    {
      "init": "init.tuna.rc",
      "key": "toroplus",
      "lunch": "cm_toroplus-userdebug",
      "touch_version": "6.0.3.6",
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
      "flash_recovery": "dd if=%s of=/dev/block/platform/omap/omap_hsmmc.0/by-name/recovery bs=4096 ;",
      "name": "Google Galaxy Nexus (Sprint)",
      "version": "6.0.3.6"
    },
    {
      "init": "ueventd.p3.rc",
      "key": "p4wifi",
      "lunch": "cm_p4wifi-userdebug",
      "touch_version": "6.0.3.1",
      "legacy_versions": [
        "4.0.0.4",
        "5.8.3.1",
        "6.0.2.9",
        "6.0.3.0"
      ],
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p2 ; ",
      "name": "Samsung Galaxy Tab 10.1 (Wifi)",
      "version": "6.0.3.1"
    },
    {
      "init": "init.wingray.rc",
      "key": "wingray",
      "lunch": "cm_wingray-userdebug",
      "touch_version": "6.0.3.1",
      "legacy_versions": [
        "5.8.3.1",
        "6.0.2.9"
      ],
      "flash_recovery": "dd if=%s of=/dev/block/platform/sdhci-tegra.3/by-name/recovery ; ",
      "name": "Motorola XOOM (Wi-Fi only)",
      "version": "6.0.3.1"
    },
    {
      "init": "init.omap.post_boot.sh",
      "key": "marquee",
      "lunch": "full_marquee-eng",
      "legacy_versions": [

      ],
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p4 bs=4096 ; ",
      "name": "LG Marquee",
      "version": "5.0.2.8"
    },
    {
      "init": "init.omap.post_boot.sh",
      "key": "ignite",
      "lunch": "full_ignite-eng",
      "legacy_versions": [

      ],
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p4 bs=4096 ; ",
      "name": "LG Ignite",
      "version": "5.0.2.8"
    },
    {
      "init": "init.target.rc",
      "key": "ms840",
      "lunch": "full_ms840-userdebug",
      "touch_version": "5.8.3.1",
      "legacy_versions": [

      ],
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p13 bs=4096 ; ",
      "name": "LG Connect 4G MS840",
      "version": "5.8.3.1"
    },
    {
      "init": "init.target.rc",
      "key": "vs840",
      "lunch": "full_vs840-userdebug",
      "touch_version": "5.8.3.1",
      "legacy_versions": [

      ],
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p13 bs=4096 ; ",
      "name": "LG Lucid VS840",
      "version": "5.8.3.1"
    },
    {
      "init": "init.jewel.rc",
      "key": "jewel",
      "lunch": "cm_jewel-userdebug",
      "touch_version": "5.8.3.5",
      "legacy_versions": [
        "5.8.3.4",
        "5.8.3.4"
      ],
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p22 bs=4096 ; ",
      "name": "HTC EVO LTE",
      "version": "5.8.3.5"
    },
    {
      "init": "ueventd.smdk4x12.rc",
      "key": "i9300",
      "lunch": "cm_i9300-userdebug",
      "touch_version": "6.0.3.6",
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
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p6 bs=4096 ; ",
      "name": "Samsung Galaxy S3 (GT-I9300)",
      "ro.product.devices": [
        "i9300",
        "m0"
      ],
      "version": "6.0.3.6"
    },
    {
      "init": "init.qcom.usb.rc",
      "key": "skyrocket",
      "lunch": "cm_skyrocket-userdebug",
      "touch_version": "6.0.3.3",
      "legacy_versions": [
        "5.8.4.3",
        "6.0.1.0",
        "6.0.1.4"
      ],
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p22 bs=4096 ; ",
      "name": "Samsung Skyrocket",
      "version": "6.0.3.1"
    },
    {
      "init": "init.qcom.usb.rc",
      "key": "quincyatt",
      "lunch": "cm_quincyatt-userdebug",
      "touch_version": "6.0.3.6",
      "legacy_versions": [
        "5.8.4.3",
        "5.8.4.8",
        "6.0.3.1"
      ],
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p22 bs=4096 ; ",
      "name": "Samsung Galaxy Note (AT&T)",
      "version": "6.0.3.6"
    },
    {
      "init": "init.e0.rc",
      "key": "e400",
      "lunch": "cm_e400-userdebug",
      "legacy_versions": [

      ],
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p17 bs=4096 ; ",
      "name": "LG Optimus L3",
      "version": "5.8.4.5"
    },
    {
      "init": "init.primou.rc",
      "key": "primou",
      "lunch": "cm_primou-userdebug",
      "readonly_recovery": true,
      "legacy_versions": [

      ],
      "name": "HTC One V",
      "version": "5.8.4.5"
    },
    {
      "init": "init.d2att.rc",
      "key": "d2att",
      "lunch": "cm_d2att-userdebug",
      "touch_version": "6.0.3.8",
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
        "6.0.3.6"
      ],
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p18 bs=4096 ; ",
      "name": "Samsung Galaxy S3 (AT&T)",
      "version": "6.0.3.7"
    },
    {
      "init": "init.d2tmo.rc",
      "key": "d2tmo",
      "lunch": "cm_d2tmo-userdebug",
      "touch_version": "6.0.3.7",
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
        "6.0.3.6"
      ],
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p18 bs=4096 ; ",
      "name": "Samsung Galaxy S3 (T-Mobile)",
      "ro.product.devices": [
        "d2tmo",
        "d2lteMetroPCS"
      ],
      "version": "6.0.3.7"
    },
    {
      "init": "init.d2spr.rc",
      "key": "d2spr",
      "lunch": "cm_d2spr-userdebug",
      "touch_version": "6.0.3.7",
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
        "6.0.3.6"
      ],
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p18 bs=4096 ; ",
      "name": "Samsung Galaxy S3 (Sprint)",
      "version": "6.0.3.7"
    },
    {
      "init": "init.d2vzw.rc",
      "key": "d2vzw",
      "twrp_version": "2.4.3.0",
      "lunch": "cm_d2vzw-userdebug",
      "touch_version": "6.0.3.7",
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
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p18 bs=4096 ; ",
      "name": "Samsung Galaxy S3 (Verizon)",
      "version": "6.0.3.7"
    },
    {
      "init": "init.primoc.rc",
      "key": "primoc",
      "lunch": "full_primoc-userdebug",
      "touch_version": "5.8.4.7",
      "readonly_recovery": true,
      "legacy_versions": [
        "5.8.4.6",
        "5.8.4.7"
      ],
      "name": "HTC One V (CDMA)",
      "version": "5.8.4.7"
    },
    {
      "init": "init.grouper.rc",
      "key": "grouper",
      "lunch": "cm_grouper-userdebug",
      "touch_version": "6.0.3.8",
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
      "flash_recovery": "dd if=%s of=/dev/block/platform/sdhci-tegra.3/by-name/SOS bs=4096 ; ",
      "name": "Google Nexus 7",
      "version": "6.0.3.8"
    },
    {
      "init": "init.su640.rc",
      "key": "su640",
      "lunch": "cm_su640-userdebug",
      "touch_version": "6.0.1.0",
      "legacy_versions": [

      ],
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p13 bs=4096 ; ",
      "name": "LG Optimus LTE (SKT)",
      "version": "6.0.1.0"
    },
    {
      "init": "init.t1.rc",
      "key": "i9100g",
      "lunch": "cm_i9100g-userdebug",
      "officially_supported": false,
      "legacy_versions": [

      ],
      "name": "Samsung Galaxy S2 (GT-I9100G)",
      "version": "6.0.1.0"
    },
    {
      "init": "init.espresso.rc",
      "key": "p3100",
      "lunch": "cm_p3100-userdebug",
      "touch_version": "6.0.2.7",
      "legacy_versions": [
        "6.0.1.1",
        "6.0.2.3"
      ],
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p6 bs=4096 ; ",
      "name": "Samsung Galaxy Tab 2 (GT-P3100)",
      "version": "6.0.2.7"
    },
    {
      "init": "init.espresso.rc",
      "key": "p3110",
      "lunch": "cm_p3110-userdebug",
      "touch_version": "6.0.2.7",
      "legacy_versions": [
        "6.0.1.1",
        "6.0.2.3"
      ],
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p6 bs=4096 ; ",
      "name": "Samsung Galaxy Tab 2 (GT-P3110)",
      "version": "6.0.2.7"
    },
    {
      "init": "init.espresso.rc",
      "key": "p3113",
      "lunch": "cm_p3113-userdebug",
      "touch_version": "6.0.2.3",
      "legacy_versions": [
        "6.0.1.1"
      ],
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p6 bs=4096 ; ",
      "name": "Samsung Galaxy Tab 2 (GT-P3113)",
      "version": "6.0.2.3"
    },
    {
      "init": "init.espresso10.rc",
      "key": "p5100",
      "lunch": "cm_p5100-userdebug",
      "touch_version": "6.0.2.7",
      "legacy_versions": [
        "6.0.1.1",
        "6.0.2.3"
      ],
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p6 bs=4096 ; ",
      "name": "Samsung Galaxy Tab 2 (GT-P5100)",
      "version": "6.0.2.7"
    },
    {
      "init": "init.espresso10.rc",
      "key": "p5110",
      "lunch": "cm_p5110-userdebug",
      "touch_version": "6.0.2.7",
      "legacy_versions": [
        "6.0.1.1",
        "6.0.2.3"
      ],
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p6 bs=4096 ; ",
      "name": "Samsung Galaxy Tab 2 (GT-P5110)",
      "version": "6.0.2.7"
    },
    {
      "init": "init.espresso10.rc",
      "key": "p5113",
      "lunch": "cm_p5113-userdebug",
      "touch_version": "6.0.2.3",
      "legacy_versions": [
        "6.0.1.1"
      ],
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p6 bs=4096 ; ",
      "name": "Samsung Galaxy Tab 2 (GT-P5113)",
      "version": "6.0.2.3"
    },
    {
      "init": "init.target.rc",
      "inits": [
        "init.target.rc",
        "init.iproj.rc",
        "init.i_vzw.rc",
        "init.iprj.rc"
      ],
      "key": "vs920",
      "lunch": "cm_vs920-userdebug",
      "touch_version": "6.0.1.1",
      "legacy_versions": [

      ],
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p13 bs=4096 ; ",
      "name": "LG Spectrum 4G",
      "version": "6.0.1.1"
    },
    {
      "init": "init.zte.rc",
      "key": "x500",
      "lunch": "cm_x500-userdebug",
      "touch_version": "6.0.1.1",
      "legacy_versions": [

      ],
      "name": "Score & Score M",
      "version": "6.0.1.1"
    },
    {
      "init": "init.qcom.rc",
      "inits": [
        "init.qcom.rc",
        "init.bryce.rc"
      ],
      "key": "vs910",
      "lunch": "cm_vs910-userdebug",
      "touch_version": "6.0.1.1",
      "legacy_versions": [

      ],
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p14 bs=4096 ; ",
      "name": "LG Revolution 4G",
      "version": "6.0.1.1"
    },
    {
      "init": "init.qcom.rc",
      "inits": [
        "init.qcom.rc",
        "init.bryce.rc"
      ],
      "key": "ms910",
      "lunch": "cm_ms910-userdebug",
      "touch_version": "6.0.1.1",
      "legacy_versions": [
        "5.0.2.8"
      ],
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p14 bs=4096 ; ",
      "name": "LG Esteeem 4G",
      "version": "6.0.1.1"
    },
    {
      "init": "init.qcom.rc",
      "inits": [
        "init.qcom.rc",
        "init.m3.rc"
      ],
      "key": "ms695",
      "lunch": "cm_ms695-userdebug",
      "touch_version": "6.0.1.1",
      "legacy_versions": [
        "6.0.1.0"
      ],
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p17 bs=4096 ; ",
      "name": "LG Optimus M+",
      "version": "6.0.1.1"
    },
    {
      "reboot_recovery": "echo 1 > /cache/.startrecovery ; sync ; reboot ;",
      "init": "init.p1.rc",
      "key": "p1l",
      "officially_supported": false,
      "legacy_versions": [

      ],
      "name": "Samsung Galaxy Tab (MTD and GSM - L)",
      "version": "5.8.2.1"
    },
    {
      "reboot_recovery": "echo 1 > /cache/.startrecovery ; sync ; reboot ;",
      "init": "init.p1.rc",
      "key": "p1n",
      "officially_supported": false,
      "legacy_versions": [

      ],
      "name": "Samsung Galaxy Tab (MTD and GSM - N)",
      "version": "5.8.2.1"
    },
    {
      "init": "init.d2usc.rc",
      "key": "d2usc",
      "lunch": "cm_d2usc-userdebug",
      "touch_version": "6.0.3.7",
      "legacy_versions": [
        "6.0.1.2",
        "6.0.2.3",
        "6.0.2.8",
        "6.0.2.9",
        "6.0.3.0",
        "6.0.3.1",
        "6.0.3.6"
      ],
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p18 bs=4096 ; ",
      "name": "Samsung Galaxy S3 (US Cellular)",
      "version": "6.0.3.7"
    },
    {
      "init": "init.mmi.usb.rc",
      "inits": [
        "init.asanti.rc",
        "init.sprint.rc"
      ],
      "key": "asanti",
      "lunch": "cm_asanti-userdebug",
      "legacy_versions": [

      ],
      "flash_recovery": "dd if=%s of=/dev/block/platform/msm_sdcc.1/by-name/recovery bs=4096 ; ",
      "name": "Motorola Photon Q",
      "version": "6.0.1.3"
    },
    {
      "init": "init.pecan.rc",
      "key": "p350",
      "lunch": "cm_p350-userdebug",
      "legacy_versions": [
        "6.0.1.3",
        "6.0.1.4"
      ],
      "name": "LG Optimus Me",
      "version": "6.0.1.5"
    },
    {
      "init": "fstab.qcom",
      "key": "p5att",
      "lunch": "cm_p5att-userdebug",
      "legacy_versions": [

      ],
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p22 bs=4096 ; ",
      "name": "Samsung Galaxy Tab 8.9 (AT&T)",
      "version": "6.0.1.4"
    },
    {
      "init": "init.target.rc",
      "key": "t769",
      "lunch": "cm_t769-userdebug",
      "touch_version": "6.0.3.8",
      "legacy_versions": [
        "6.0.1.4"
      ],
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p22 bs=4096 ; ",
      "name": "Samsung Galaxy S Blaze 4G",
      "version": "6.0.3.8"
    },
    {
      "init": "init.carrier.rc",
      "inits": [
        "init.carrier.rc",
        "init.d2mtr.rc"
      ],
      "key": "d2mtr",
      "lunch": "cm_d2mtr-userdebug",
      "touch_version": "6.0.3.7",
      "legacy_versions": [
        "6.0.1.5",
        "6.0.2.3",
        "6.0.2.8",
        "6.0.2.9",
        "6.0.3.0",
        "6.0.3.1",
        "6.0.3.6"
      ],
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p18 bs=4096 ; ",
      "name": "Samsung Galaxy S3 (MetroPCS)",
      "version": "6.0.3.7"
    },
    {
      "reboot_recovery": "echo 'boot-recovery' | dd of=/dev/block/mmcblk0p3 seek=6144 bs=1 ; reboot ; ",
      "init": "init.tf700t.rc",
      "key": "tf700t",
      "lunch": "cm_tf700t-userdebug",
      "touch_version": "6.0.3.1",
      "legacy_versions": [
        "6.0.1.8",
        "6.0.2.3"
      ],
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p4 bs=4096 ; ",
      "name": "Asus Transformer Pad Infinity",
      "version": "6.0.3.1"
    },
    {
      "init": "init.manta.rc",
      "key": "manta",
      "lunch": "cm_manta-userdebug",
      "touch_version": "6.0.3.8",
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
      "flash_recovery": "dd if=%s of=/dev/block/platform/dw_mmc.0/by-name/recovery bs=4096 ; ",
      "name": "Google Nexus 10",
      "version": "6.0.3.8"
    },
    {
      "init": "init.mako.rc",
      "key": "mako",
      "lunch": "cm_mako-userdebug",
      "touch_version": "6.0.3.8",
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
      "flash_recovery": "dd if=%s of=/dev/block/platform/msm_sdcc.1/by-name/recovery bs=4096 ; ",
      "name": "Google Nexus 4",
      "version": "6.0.3.8"
    },
    {
      "init": "init.debug_mfgkernel.rc",
      "key": "dlx",
      "lunch": "cm_dlx-userdebug",
      "touch_version": "6.0.3.1",
      "legacy_versions": [
        "6.0.1.5",
        "6.0.1.9",
        "6.0.2.3",
        "6.0.2.7",
        "6.0.2.8",
        "6.0.3.0"
      ],
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p20 bs=4096 ; ",
      "name": "HTC Droid DNA",
      "version": "6.0.3.1"
    },
    {
      "init": "init.smdk4x12.rc",
      "key": "n7100",
      "lunch": "cm_n7100-userdebug",
      "touch_version": "6.0.3.6",
      "legacy_versions": [
        "6.0.1.9",
        "6.0.3.0",
        "6.0.3.1"
      ],
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p9 bs=4096 ; ",
      "name": "Samsung Galaxy Note 2 (HSPA+)",
      "version": "6.0.3.6"
    },
    {
      "init": "init.picasso_mf.rc",
      "key": "a700",
      "lunch": "cm_a700-userdebug",
      "touch_version": "6.0.3.1",
      "legacy_versions": [
        "6.0.2.3"
      ],
      "flash_recovery": "dd if=%s of=/dev/block/platform/sdhci-tegra.3/by-name/SOS bs=4096 ; ",
      "name": "Acer A700",
      "version": "6.0.3.1"
    },
    {
      "init": "init.tilapia.rc",
      "key": "tilapia",
      "lunch": "cm_tilapia-userdebug",
      "touch_version": "6.0.3.6",
      "legacy_versions": [
        "6.0.2.3",
        "6.0.3.1",
        "6.0.3.5"
      ],
      "flash_recovery": "dd if=%s of=/dev/block/platform/sdhci-tegra.3/by-name/SOS bs=4096 ; ",
      "name": "Google Nexus 7 (GSM)",
      "version": "6.0.3.6"
    },
    {
      "init": "init.t0lte.rc",
      "key": "t0lte",
      "lunch": "cm_t0lte-userdebug",
      "touch_version": "6.0.3.6",
      "legacy_versions": [
        "6.0.2.3",
        "6.0.2.4",
        "6.0.2.5",
        "6.0.2.8",
        "6.0.3.0",
        "6.0.3.1",
        "6.0.3.2"
      ],
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p9 bs=4096 ; ",
      "name": "Samsung Galaxy Note 2 (LTE)",
      "version": "6.0.3.6"
    },
    {
      "reboot_recovery": "echo '518 R 1' > /sys/kernel/kobject_lge_nvdata/dynamic_nvdata_raw_write ; reboot ; ",
      "inits": [
        "init.lgep720board.rc",
        "/bootimages/battery_charging_01.rle"
      ],
      "key": "p720",
      "lunch": "cm_p720-userdebug",
      "touch_version": "6.0.2.3",
      "legacy_versions": [

      ],
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p6 ; ",
      "name": "LG Optimus 3DMax",
      "version": "6.0.2.3"
    },
    {
      "init": "init.d2cri.rc",
      "key": "d2cri",
      "lunch": "cm_d2cri-userdebug",
      "touch_version": "6.0.3.8",
      "legacy_versions": [
        "6.0.2.7",
        "6.0.2.8",
        "6.0.2.9",
        "6.0.3.0",
        "6.0.3.1",
        "6.0.3.6"
      ],
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p18 bs=4096 ; ",
      "name": "Samsung Galaxy S3 (Cricket)",
      "version": "6.0.3.7"
    },
    {
      "init": "init.runnymede.rc",
      "key": "runnymede",
      "lunch": "cm_runnymede-userdebug",
      "touch_version": "6.0.2.7",
      "legacy_versions": [

      ],
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p21 bs=4096 ; ",
      "name": "HTC Sensation XL",
      "version": "6.0.2.7"
    },
    {
      "init": "init.presto.rc",
      "key": "presto",
      "lunch": "cm_presto-userdebug",
      "touch_version": "6.0.2.7",
      "legacy_versions": [

      ],
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p18 bs=4096 ; ",
      "name": "Pantech Presto",
      "version": "6.0.2.7"
    },
    {
      "init": "init.warp2.rc",
      "key": "warp2",
      "lunch": "cm_warp2-userdebug",
      "touch_version": "6.0.2.7",
      "legacy_versions": [

      ],
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p13 bs=4096 ; ",
      "name": "ZTE Sequent",
      "version": "6.0.2.7"
    },
    {
      "init": "init.steelhead.rc",
      "key": "steelhead",
      "lunch": "cm_steelhead-userdebug",
      "legacy_versions": [
        "6.0.2.7"
      ],
      "flash_recovery": "dd if=%s of=/dev/block/platform/omap/omap_hsmmc.0/by-name/recovery bs=4096 ; ",
      "name": "Google Nexus Q",
      "version": "6.0.3.1"
    },
    {
      "inits": [
        "init.carrier.rc",
        "init.prevail2spr.rc"
      ],
      "key": "prevail2spr",
      "lunch": "cm_prevail2spr-userdebug",
      "touch_version": "6.0.2.7",
      "legacy_versions": [

      ],
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p15 bs=4096 ; ",
      "name": "Samsung Prevail 2 (Boost Mobile)",
      "version": "6.0.2.7"
    },
    {
      "init": "init.golden.rc",
      "key": "golden",
      "lunch": "cm_golden-userdebug",
      "touch_version": "6.0.2.7",
      "legacy_versions": [

      ],
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p21 bs=4096 ; ",
      "name": "Samsung Galaxy S3 Mini",
      "version": "6.0.2.7"
    },
    {
      "init": "init.fireball.rc",
      "key": "fireball",
      "lunch": "cm_fireball-userdebug",
      "touch_version": "6.0.3.3",
      "legacy_versions": [
        "6.0.2.8",
        "6.0.2.9",
        "6.0.3.1"
      ],
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p22 bs=4096 ; ",
      "name": "HTC Droid Incredible 4G LTE",
      "version": "6.0.3.3"
    },
    {
      "init": "init.puccinilte.rc",
      "key": "puccinilte",
      "lunch": "cm_puccinilte-userdebug",
      "touch_version": "6.0.2.8",
      "legacy_versions": [

      ],
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p23 bs=4096 ; ",
      "name": "HTC Jetstream",
      "version": "6.0.2.8"
    },
    {
      "init": "init.u0.rc",
      "key": "p700",
      "lunch": "cm_p700-userdebug",
      "touch_version": "6.0.2.8",
      "legacy_versions": [

      ],
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p17 bs=4096 ; ",
      "name": "LG Optimus L7",
      "version": "6.0.2.8"
    },
    {
      "init": "init.m7.rc",
      "key": "m7",
      "lunch": "cm_m7-userdebug",
      "touch_version": "6.0.3.1",
      "legacy_versions": [
        "6.0.2.8",
        "6.0.3.0"
      ],
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p34 bs=4096 ; ",
      "name": "HTC One",
      "version": "6.0.3.1"
    },
    {
      "init": "init.dlxu.rc",
      "key": "dlxu",
      "lunch": "cm_dlxu-userdebug",
      "touch_version": "6.0.3.1",
      "legacy_versions": [
        "6.0.2.8",
        "6.0.3.0"
      ],
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p20 bs=4096 ; ",
      "name": "HTC Butterfly (dlxu)",
      "version": "6.0.3.1"
    },
    {
      "init": "init.dlxub1.rc",
      "key": "dlxub1",
      "lunch": "cm_dlxub1-userdebug",
      "touch_version": "6.0.3.1",
      "legacy_versions": [
        "6.0.2.8",
        "6.0.3.0"
      ],
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p20 bs=4096 ; ",
      "name": "HTC Butterfly (dlxub1)",
      "version": "6.0.3.1"
    },
    {
      "init": "init.dlxj.rc",
      "key": "dlxj",
      "lunch": "cm_dlxj-userdebug",
      "touch_version": "6.0.3.1",
      "legacy_versions": [
        "6.0.2.8",
        "6.0.3.0"
      ],
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p20 bs=4096 ; ",
      "name": "HTC Butterfly J",
      "version": "6.0.3.1"
    },
    {
      "init": "init.m4.rc",
      "key": "e610",
      "lunch": "cm_e610-userdebug",
      "legacy_versions": [

      ],
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p17 bs=4096 ; ",
      "name": "LG Optimus L5",
      "version": "6.0.2.8"
    },
    {
      "init": "init.evita.rc",
      "key": "evita",
      "lunch": "cm_evita-userdebug",
      "touch_version": "6.0.3.1",
      "legacy_versions": [
        "6.0.2.8"
      ],
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p22 bs=4096 ; ",
      "name": "HTC One X (AT&T)",
      "version": "6.0.3.1"
    },
    {
      "init": "init.p4.rc",
      "key": "p4",
      "lunch": "cm_p4-userdebug",
      "touch_version": "6.0.3.1",
      "legacy_versions": [
        "6.0.2.9",
        "6.0.3.0"
      ],
      "flash_recovery": "dd if=%s of=/dev/block/platform/sdhci-tegra.3/by-num/p2 bs=4096 ; ",
      "name": "Samsung Galaxy Tab 10.1",
      "ro.product.devices": [
        "p4",
        "GT-P7500",
        "p7500"
      ],
      "version": "6.0.3.1"
    },
    {
      "init": "init.p4tmo.rc",
      "key": "p4tmo",
      "lunch": "cm_p4tmo-userdebug",
      "touch_version": "6.0.3.1",
      "legacy_versions": [
        "6.0.2.9",
        "6.0.3.0"
      ],
      "flash_recovery": "dd if=%s of=/dev/block/platform/sdhci-tegra.3/by-num/p2 bs=4096 ; ",
      "name": "Samsung Galaxy Tab 10.1 (T-Mobile)",
      "version": "6.0.3.1"
    },
    {
      "init": "init.p4vzw.rc",
      "key": "p4vzw",
      "lunch": "cm_p4vzw-userdebug",
      "touch_version": "6.0.3.1",
      "legacy_versions": [
        "6.0.2.9",
        "6.0.3.0"
      ],
      "flash_recovery": "dd if=%s of=/dev/block/platform/sdhci-tegra.3/by-num/p2 bs=4096 ; ",
      "name": "Samsung Galaxy Tab 10.1 (Verizon)",
      "version": "6.0.3.1"
    },
    {
      "init": "init.u0.rc",
      "key": "p760",
      "lunch": "cm_p760-userdebug",
      "touch_version": "6.0.3.1",
      "legacy_versions": [
        "6.0.2.9"
      ],
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p4 bs=4096 ; ",
      "name": "LG Optimus L9",
      "version": "6.0.3.1"
    },
    {
      "init": "ueventd.smdk4x12.rc",
      "key": "i9305",
      "lunch": "cm_i9305-userdebug",
      "touch_version": "6.0.3.6",
      "legacy_versions": [
        "6.0.2.9",
        "6.0.3.1",
        "6.0.3.2"
      ],
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p9 bs=4096 ; ",
      "name": "Samsung Galaxy S3 LTE (GT-I9305)",
      "version": "6.0.3.6"
    },
    {
      "init": "init.p3.rc",
      "key": "p3",
      "lunch": "cm_p3-userdebug",
      "touch_version": "6.0.3.1",
      "legacy_versions": [
        "6.0.2.9"
      ],
      "flash_recovery": "dd if=%s of=/dev/block/platform/sdhci-tegra.3/by-num/p2 bs=4096 ; ",
      "name": "Samsung Galaxy Tab 10.1v",
      "version": "6.0.3.1"
    },
    {
      "init": "init.n8013.rc",
      "key": "n8013",
      "lunch": "cm_n8013-userdebug",
      "touch_version": "6.0.3.6",
      "legacy_versions": [
        "6.0.3.0",
        "6.0.3.1"
      ],
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p6 bs=4096 ; ",
      "name": "Samsung Galaxy Note 10.1",
      "version": "6.0.3.6"
    },
    {
      "init": "init.i605.rc",
      "key": "i605",
      "lunch": "cm_i605-userdebug",
      "touch_version": "6.0.3.0",
      "legacy_versions": [

      ],
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p9 bs=4096 ; ",
      "name": "Samsung Galaxy Note 2 (Verizon)",
      "ro.product.devices": [
        "i605",
        "t0ltevzw"
      ],
      "version": "6.0.3.0"
    },
    {
      "init": "init.l900.rc",
      "key": "l900",
      "lunch": "cm_l900-userdebug",
      "touch_version": "6.0.3.1",
      "legacy_versions": [
        "6.0.3.0"
      ],
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p9 bs=4096 ; ",
      "name": "Samsung Galaxy Note 2 (Sprint)",
      "ro.product.devices": [
        "l900",
        "t0ltespr"
      ],
      "version": "6.0.3.1"
    },
    {
      "init": "init.t0lteatt.rc",
      "key": "t0lteatt",
      "lunch": "cm_t0lteatt-userdebug",
      "touch_version": "6.0.3.6",
      "legacy_versions": [
        "6.0.3.0",
        "6.0.3.1"
      ],
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p9 bs=4096 ; ",
      "name": "Samsung Galaxy Note 2 (AT&T)",
      "version": "6.0.3.6"
    },
    {
      "init": "init.t0ltetmo.rc",
      "key": "t0ltetmo",
      "lunch": "cm_t0ltetmo-userdebug",
      "touch_version": "6.0.3.7",
      "legacy_versions": [
        "6.0.3.0",
        "6.0.3.1",
        "6.0.3.6"
      ],
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p9 bs=4096 ; ",
      "name": "Samsung Galaxy Note 2 (T-Mobile)",
      "version": "6.0.3.7"
    },
    {
      "init": "init.geehrc.rc",
      "key": "e975",
      "lunch": "cm_e975-userdebug",
      "touch_version": "6.0.3.0",
      "legacy_versions": [

      ],
      "flash_recovery": "dd if=%s of=/dev/block/platform/msm_sdcc.1/by-name/recovery bs=4096 ; ",
      "name": "LG Optimus G Intl (E975)",
      "version": "6.0.3.0"
    },
    {
      "reboot_recovery": "echo 'boot-recovery' | dd of=/dev/block/mmcblk0p5 bs=1 count=13 ; reboot ; ",
      "init": "init.x3.rc",
      "key": "p880",
      "lunch": "cm_p880-userdebug",
      "touch_version": "6.0.3.1",
      "legacy_versions": [

      ],
      "flash_recovery": "dd if=%s of=/dev/block/platform/sdhci-tegra.3/by-name/SOS bs=4096 ; ",
      "name": "LG Optimus 4X HD",
      "version": "6.0.3.1"
    },
    {
      "init": "init.quincytmo.rc",
      "key": "quincytmo",
      "lunch": "cm_quincytmo-userdebug",
      "touch_version": "6.0.3.6",
      "legacy_versions": [
        "6.0.3.1"
      ],
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p22 bs=4096 ; ",
      "name": "Samsung Galaxy Note (T-Mobile)",
      "version": "6.0.3.6"
    },
    {
      "init": "init.n8000.rc",
      "key": "n8000",
      "lunch": "cm_n8000-userdebug",
      "touch_version": "6.0.3.6",
      "legacy_versions": [
        "6.0.3.1"
      ],
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p6 bs=4096 ; ",
      "name": "Samsung Galaxy Note 10.1 (GSM)",
      "version": "6.0.3.6"
    },
    {
      "init": "init.find5.rc",
      "key": "find5",
      "lunch": "cm_find5-userdebug",
      "touch_version": "6.0.3.1",
      "legacy_versions": [

      ],
      "flash_recovery": "dd if=%s of=/dev/block/platform/msm_sdcc.1/by-name/recovery bs=4096 ; ",
      "name": "Oppo Find5",
      "version": "6.0.3.1"
    },
    {
      "init": "init.jfltetmo.rc",
      "key": "jfltetmo",
      "lunch": "cm_jfltetmo-userdebug",
      "touch_version": "6.0.3.6",
      "legacy_versions": [
        "6.0.3.2"
      ],
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p21 bs=4096 ; ",
      "name": "Samsung Galaxy S4 (T-Mobile)",
      "ro.product.devices": [
        "jfltetmo",
        "jflteMetroPCS"
      ],
      "version": "6.0.3.6"
    },
    {
      "init": "init.jfltecan.rc",
      "key": "jfltecan",
      "lunch": "cm_jfltecan-userdebug",
      "touch_version": "6.0.3.6",
      "legacy_versions": [
        "6.0.3.2"
      ],
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p21 bs=4096 ; ",
      "name": "Samsung Galaxy S4 (Canada/Bell)",
      "version": "6.0.3.6"
    },
    {
      "init": "init.zte.rc",
      "key": "V8000",
      "lunch": "cm_V8000-userdebug",
      "legacy_versions": [

      ],
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p17 bs=4096 ; ",
      "name": "ZTE Engage",
      "version": "6.0.3.2"
    },
    {
      "init": "init.i9500.rc",
      "key": "i9500",
      "lunch": "cm_i9500-userdebug",
      "touch_version": "6.0.3.2",
      "legacy_versions": [

      ],
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p10 bs=4096 ; ",
      "name": "Samsung Galaxy S4 (i9500)",
      "version": "6.0.3.2"
    },
    {
      "init": "init.everest.rc",
      "key": "everest",
      "lunch": "cm_everest-userdebug",
      "touch_version": "6.0.3.2",
      "legacy_versions": [

      ],
      "flash_recovery": "dd if=%s of=/dev/block/platform/sdhci-tegra.3/by-name/recovery bs=4096 ; ",
      "name": "Motorola Xoom (GSM)",
      "version": "6.0.3.2"
    },
    {
      "init": "init.protou.rc",
      "key": "protou",
      "lunch": "cm_protou-userdebug",
      "touch_version": "6.0.3.2",
      "legacy_versions": [

      ],
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p21 bs=4096 ; ",
      "name": "HTC Desire X",
      "version": "6.0.3.2"
    },
    {
      "init": "init.m7spr.rc",
      "key": "m7spr",
      "lunch": "cm_m7spr-userdebug",
      "touch_version": "6.0.3.6",
      "legacy_versions": [
        "6.0.3.2"
      ],
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p36 bs=4096 ; ",
      "name": "HTC One (Sprint)",
      "ro.product.devices": [
        "m7spr",
        "m7wls"
      ],
      "version": "6.0.3.6"
    },
    {
      "init": "init.m7tmo.rc",
      "key": "m7tmo",
      "lunch": "cm_m7tmo-userdebug",
      "touch_version": "6.0.3.6",
      "legacy_versions": [
        "6.0.3.2"
      ],
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p34 bs=4096 ; ",
      "name": "HTC One (T-Mobile)",
      "version": "6.0.3.6"
    },
    {
      "init": "init.m7att.rc",
      "key": "m7att",
      "lunch": "cm_m7att-userdebug",
      "touch_version": "6.0.3.6",
      "legacy_versions": [
        "6.0.3.2",
        "6.0.3.5"
      ],
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p34 bs=4096 ; ",
      "name": "HTC One (AT&T)",
      "version": "6.0.3.6"
    },
    {
      "init": "init.jflteatt.rc",
      "key": "jflteatt",
      "lunch": "cm_jflteatt-userdebug",
      "touch_version": "6.0.3.6",
      "legacy_versions": [
        "6.0.3.2"
      ],
      "flash_recovery": "dd if=/dev/block/platform/msm_sdcc.1/by-name/aboot of=/sdcard/clockworkmod/aboot.img; /data/data/com.koushikdutta.rommanager/files/loki_patch recovery /sdcard/clockworkmod/aboot.img %s /sdcard/clockworkmod/recovery.lok ; /data/data/com.koushikdutta.rommanager/files/loki_flash recovery /sdcard/clockworkmod/recovery.lok ; ",
      "name": "Samsung Galaxy S4 (AT&T)",
      "version": "6.0.3.6"
    },
    {
      "init": "init.m7ul.rc",
      "key": "m7ul",
      "lunch": "cm_m7ul-userdebug",
      "touch_version": "6.0.3.6",
      "legacy_versions": [
        "6.0.3.2"
      ],
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p34 bs=4096 ; ",
      "name": "HTC One (non-US GSM)",
      "version": "6.0.3.6"
    },
    {
      "init": "init.jfltevzw.rc",
      "key": "jfltevzw",
      "lunch": "cm_jfltevzw-userdebug",
      "touch_version": "6.0.3.6",
      "legacy_versions": [
        "6.0.3.2"
      ],
      "flash_recovery": "dd if=/dev/block/platform/msm_sdcc.1/by-name/aboot of=/sdcard/clockworkmod/aboot.img; /data/data/com.koushikdutta.rommanager/files/loki_patch recovery /sdcard/clockworkmod/aboot.img %s /sdcard/clockworkmod/recovery.lok ; /data/data/com.koushikdutta.rommanager/files/loki_flash recovery /sdcard/clockworkmod/recovery.lok ; ",
      "name": "Samsung Galaxy S4 (Verizon)",
      "version": "6.0.3.6"
    },
    {
      "init": "init.jfltespr.rc",
      "key": "jfltespr",
      "lunch": "cm_jfltespr-userdebug",
      "touch_version": "6.0.3.6",
      "legacy_versions": [
        "6.0.3.2"
      ],
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p21 bs=4096 ; ",
      "name": "Samsung Galaxy S4 (Sprint)",
      "version": "6.0.3.6"
    },
    {
      "init": "init.jflteusc.rc",
      "key": "jflteusc",
      "lunch": "cm_jflteusc-userdebug",
      "touch_version": "6.0.3.2",
      "legacy_versions": [

      ],
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p21 bs=4096 ; ",
      "name": "Samsung Galaxy S4 (US Cellular)",
      "version": "6.0.3.2"
    },
    {
      "init": "init.jfltexx.rc",
      "key": "jfltexx",
      "lunch": "cm_jfltexx-userdebug",
      "touch_version": "6.0.3.6",
      "legacy_versions": [
        "6.0.3.2",
        "6.0.3.3",
        "6.0.3.5"
      ],
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p21 bs=4096 ; ",
      "name": "Samsung Galaxy S4 (i9505)",
      "version": "6.0.3.6"
    },
    {
      "init": "init.jfltecri.rc",
      "key": "jfltecri",
      "lunch": "cm_jfltecri-userdebug",
      "touch_version": "6.0.3.6",
      "legacy_versions": [
        "6.0.3.2"
      ],
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p21 bs=4096 ; ",
      "name": "Samsung Galaxy S4 (Cricket)",
      "version": "6.0.3.6"
    },
    {
      "init": "init.gelato.rc",
      "key": "lgl55c",
      "lunch": "cm_lgl55c-userdebug",
      "legacy_versions": [

      ],
      "flash_recovery": "dd if=%s of=/dev/block/mtdblock2 bs=4096 ; ",
      "name": "LG Optimus Q (LGL55C Tracfone)",
      "version": "6.0.3.3"
    },
    {
      "init": "init.jfltecsp.rc",
      "key": "jfltecsp",
      "lunch": "cm_jfltecsp-userdebug",
      "touch_version": "6.0.3.6",
      "legacy_versions": [
        "6.0.3.5"
      ],
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p21 bs=4096 ; ",
      "name": "Samsung Galaxy S4 (C Spire)",
      "version": "6.0.3.6"
    },
    {
      "init": "init.highmem.rc",
      "key": "m660",
      "lunch": "cm_m660-userdebug",
      "legacy_versions": [

      ],
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p16 ; ",
      "name": "Huawei Ascend Q",
      "version": "6.0.3.5"
    },
    {
      "init": "init.flo.rc",
      "key": "flo",
      "lunch": "cm_flo-userdebug",
      "touch_version": "6.0.3.7",
      "legacy_versions": [

      ],
      "flash_recovery": "dd if=%s of=/dev/block/platform/msm_sdcc.1/by-name/recovery bs=4096 ; ",
      "name": "Google Nexus 7 (2013)",
      "version": "6.0.3.7"
    },
    {
      "init": "init.apexqtmo.rc",
      "key": "apexqtmo",
      "lunch": "cm_apexqtmo-userdebug",
      "touch_version": "6.0.3.8",
      "legacy_versions": [

      ],
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p18 bs=4096 ; ",
      "name": "Samsung SGH-T699",
      "version": "6.0.3.8"
    }
  ],
  "keywords": "phone accessories,droid,gadgets,bluetooth headset,car charger,sd card",
  "manifest_signature": "O8+Kc2mdQz0e/AjCQn6Rw6fK5Kr5LZItJ474Ua3gF2o4IgdCQZXIbwCHIo6xeqY3pVEGtjYmmyO1PkRYcGqq2rB2wQM8SoKFl/70vG0ihEZ5TDeruKUgxVVSNM3e09kBvCxYK89GWqVWkNHtvTu1T1F9w6FilzCsNFSAXHD0Bos=",
  "recovery_url": "http://download2.clockworkmod.com/recoveries/recovery-clockwork-%s-%s.img",
  "ad_network": "admob",
  "version": "2.5.0.1",
  "use_in_app": false
}