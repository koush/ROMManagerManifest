{
  "manifest": "http://developer.clockworkmod.com/merge",
  "use_in_app": false,
  "version": "2.5.0.1",
  "keywords": "phone accessories,droid,gadgets,bluetooth headset,car charger,sd card",
  "owners": {
    "echen@cyngn.com": true,
    "daniel.hillenbrand@codeworkx.de": true,
    "attn1.repo@gmail.com": true,
    "utkanos@gmail.com": true,
    "playfulgod@gmail.com": true,
    "cvpcsm@gmail.com": true,
    "ferguson.david@gmail.com": true,
    "layhertony@gmail.com": true,
    "koush@clockworkmod.com": true,
    "arcee@cyanogenmod.com": true,
    "njgreb@gmail.com": true,
    "keaneyw@gmail.com": true,
    "bigbeeshane@gmail.com": true
  },
  "ad_network": "admob",
  "recovery_url": "http://download2.clockworkmod.com/recoveries/recovery-clockwork-%s-%s.img",
  "devices": [
    {
      "version": "2.5.0.1",
      "key": "sholes",
      "legacy_versions": [
        "3.1.0.2",
        "2.5.1.4",
        "2.5.1.3",
        "2.5.1.1",
        "2.5.0.1"
      ],
      "init": "init.sholes.rc",
      "name": "Motorola Droid",
      "alternate_recovery": {
        "clockwork": false,
        "name": "SPRecovery 0.99.3b",
        "url": "http://koush.kanged.net/cm/recoveries/sprecovery.img"
      }
    },
    {
      "version": "2.5.0.7",
      "key": "sapphire",
      "legacy_versions": [
        "2.5.0.7",
        "2.5.1.4",
        "2.5.1.3",
        "2.5.1.1"
      ],
      "init": "init.sapphire.rc",
      "name": "HTC MyTouch 3G",
      "alternate_recovery": {
        "clockwork": false,
        "name": "RA Recovery v1.7.0G",
        "url": "http://files.androidspin.com/downloads.php?dir=amon_ra/RECOVERY/&file=recovery-RA-sapphire-v1.7.0G.img"
      }
    },
    {
      "version": "2.5.0.7",
      "key": "magic",
      "legacy_versions": [
        "2.5.0.7",
        "2.5.1.4",
        "2.5.1.3",
        "2.5.1.1"
      ],
      "init": "init.sapphire.rc",
      "name": "HTC Magic",
      "alternate_recovery": {
        "clockwork": false,
        "name": "RA Recovery v1.7.0H",
        "url": "http://files.androidspin.com/downloads.php?dir=amon_ra/RECOVERY/&file=recovery-RA-sapphire-v1.7.0H.img"
      }
    },
    {
      "version": "2.5.0.7",
      "key": "dream",
      "legacy_versions": [
        "2.5.0.7",
        "2.5.1.4",
        "2.5.1.3",
        "2.5.1.1"
      ],
      "init": "init.trout.rc",
      "name": "HTC G1/Dream",
      "alternate_recovery": {
        "clockwork": false,
        "name": "RA Recovery v1.7.0",
        "url": "http://files.androidspin.com/downloads.php?dir=amon_ra/RECOVERY/&file=recovery-RA-dream-v1.7.0.img"
      }
    },
    {
      "version": "5.0.2.0",
      "key": "passion",
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
      "init": "init.mahimahi.rc",
      "name": "Google Nexus One",
      "lunch": "cyanogen_passion-eng",
      "alternate_recovery": {
        "clockwork": false,
        "name": "RA Recovery v2.2.1",
        "url": "http://files.androidspin.com/downloads.php?dir=amon_ra/RECOVERY/&file=recovery-RA-passion-v2.2.1.img"
      }
    },
    {
      "version": "2.5.0.7",
      "key": "hero",
      "legacy_versions": [
        "2.5.0.7",
        "2.5.1.4",
        "2.5.1.3",
        "2.5.1.1"
      ],
      "init": "init.hero.rc",
      "name": "HTC Hero (GSM)",
      "alternate_recovery": {
        "clockwork": false,
        "name": "RA Recovery v1.7.0.1",
        "url": "http://files.androidspin.com/downloads.php?dir=amon_ra/RECOVERY/&file=recovery-RA-hero-v1.7.0.1.img"
      }
    },
    {
      "version": "2.5.0.7",
      "key": "heroc",
      "legacy_versions": [
        "2.5.0.7",
        "2.5.1.4",
        "2.5.1.3",
        "2.5.1.1"
      ],
      "init": "init.heroc.rc",
      "name": "HTC Hero (CDMA)",
      "alternate_recovery": {
        "clockwork": false,
        "name": "RA Recovery v1.6.2",
        "url": "http://www.androidspin.com/downloads.php?dir=amon_ra/RECOVERY/&file=recovery-RA-heroc-v1.6.2.img"
      }
    },
    {
      "version": "5.0.2.2",
      "key": "supersonic",
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
      "init": "init.supersonic.rc",
      "name": "HTC Evo",
      "touch_version": "5.8.0.1",
      "lunch": "cyanogen_supersonic-eng",
      "alternate_recovery": {
        "clockwork": false,
        "name": "RA Recovery v2.3",
        "url": "http://files.androidspin.com/downloads.php?dir=amon_ra/RECOVERY/&file=recovery-RA-supersonic-v2.3.img"
      }
    },
    {
      "readonly_recovery": true,
      "version": "5.0.2.0",
      "key": "legend",
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
      "init": "init.legend.rc",
      "name": "HTC Legend",
      "lunch": "cyanogen_legend-eng"
    },
    {
      "version": "5.0.2.0",
      "key": "bravo",
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
      "init": "init.bravo.rc",
      "name": "HTC Desire",
      "touch_version": "5.8.0.2",
      "lunch": "cyanogen_bravo-eng"
    },
    {
      "version": "5.0.2.0",
      "key": "bravoc",
      "legacy_versions": [
        "2.5.0.9",
        "2.5.1.4",
        "2.5.1.3",
        "2.5.1.1",
        "2.5.0.9",
        "5.0.0.1",
        "5.0.1.0"
      ],
      "init": "init.bravoc.rc",
      "name": "HTC Desire CDMA",
      "lunch": "cyanogen_bravoc-eng"
    },
    {
      "version": "2.5.0.7",
      "key": "pulsemini",
      "legacy_versions": [
        "2.5.0.7",
        "2.5.1.4",
        "2.5.1.3",
        "2.5.1.1"
      ],
      "init": "init.qcom.rc",
      "name": "Huawei Pulse Mini"
    },
    {
      "version": "5.0.2.0",
      "key": "inc",
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
      "init": "init.inc.rc",
      "name": "HTC Incredible (CDMA)",
      "lunch": "cyanogen_inc-eng",
      "alternate_recovery": {
        "clockwork": false,
        "name": "RA_GNM Recovery v3.02",
        "url": "http://dl.dropbox.com/u/12949506/RomManager/recovery-RA-inc-3.02.img"
      }
    },
    {
      "readonly_recovery": true,
      "version": "2.5.0.7",
      "key": "liberty",
      "legacy_versions": [
        "2.5.0.7",
        "2.5.1.4",
        "2.5.1.3",
        "2.5.1.1"
      ],
      "init": "init.liberty.rc",
      "name": "HTC Aria"
    },
    {
      "readonly_recovery": true,
      "version": "2.5.0.7",
      "key": "desirec",
      "legacy_versions": [
        "2.5.0.7",
        "2.5.1.4",
        "2.5.1.3",
        "2.5.1.1"
      ],
      "init": "init.desirec.rc",
      "name": "Motorola Droid Eris",
      "alternate_recovery": {
        "clockwork": false,
        "name": "RA Recovery v1.6.2",
        "url": "http://www.androidspin.com/downloads.php?dir=amon_ra/RECOVERY/&file=recovery-RA-eris-v1.6.2.img"
      }
    },
    {
      "readonly_recovery": true,
      "version": "5.0.2.0",
      "key": "buzz",
      "legacy_versions": [
        "3.0.0.6",
        "2.5.1.4",
        "2.5.1.3",
        "2.5.1.1",
        "2.5.0.7",
        "5.0.0.8",
        "5.0.1.0"
      ],
      "init": "init.buzz.rc",
      "name": "HTC Buzz (Wildfire)",
      "lunch": "cyanogen_buzz-eng"
    },
    {
      "version": "2.5.0.7",
      "key": "streak",
      "legacy_versions": [
        "2.5.0.7",
        "2.5.1.4",
        "2.5.1.3",
        "2.5.1.1"
      ],
      "init": "init.qcom.rc",
      "name": "Dell Streak"
    },
    {
      "readonly_recovery": true,
      "version": "2.5.0.7",
      "key": "espresso",
      "legacy_versions": [
        "2.5.0.7",
        "2.5.1.4",
        "2.5.1.3",
        "2.5.1.1"
      ],
      "init": "init.latte.rc",
      "name": "HTC MyTouch Slide"
    },
    {
      "readonly_recovery": true,
      "version": "2.5.1.2",
      "key": "galaxys",
      "legacy_versions": [
        "2.5.1.2",
        "2.5.1.4",
        "2.5.1.3",
        "2.5.1.1"
      ],
      "init": "lpm.rc",
      "name": "Samsung GalaxyS i9000"
    },
    {
      "readonly_recovery": true,
      "version": "3.0.0.8",
      "key": "fascinate",
      "legacy_versions": [
        "3.0.0.8",
        "2.5.1.4",
        "2.5.1.3",
        "2.5.1.1"
      ],
      "init": "init.smdkc110.rc",
      "name": "Samsung GalaxyS Fascinate"
    },
    {
      "readonly_recovery": true,
      "version": "2.5.1.2",
      "key": "vibrant",
      "legacy_versions": [
        "2.5.1.2",
        "2.5.1.4",
        "2.5.1.3",
        "2.5.1.1"
      ],
      "init": "init.smdkc110.rc",
      "name": "Samsung GalaxyS Vibrant"
    },
    {
      "readonly_recovery": true,
      "version": "2.5.1.2",
      "key": "captivate",
      "legacy_versions": [
        "2.5.1.2",
        "2.5.1.4",
        "2.5.1.3",
        "2.5.1.1"
      ],
      "init": "init.smdkc110.rc",
      "name": "Samsung GalaxyS Captivate"
    },
    {
      "version": "2.5.0.7",
      "key": "pulse",
      "legacy_versions": [
        "2.5.0.7",
        "2.5.1.4",
        "2.5.1.3",
        "2.5.1.1"
      ],
      "init": "init.qcom.rc",
      "name": "Huawei Pulse"
    },
    {
      "version": "2.5.0.7",
      "key": "aloha",
      "legacy_versions": [
        "2.5.0.7",
        "2.5.1.4",
        "2.5.1.3",
        "2.5.1.1"
      ],
      "init": "init.aloha.rc",
      "name": "LG Ally",
      "alternate_recovery": {
        "clockwork": false,
        "name": "RA_GNM Recovery v2.2.2",
        "url": "http://dl.dropbox.com/u/12949506/RomManager/recovery-RA-aloha-2.2.2-GNM.img"
      }
    },
    {
      "readonly_recovery": true,
      "version": "3.1.0.2",
      "key": "milestone",
      "legacy_versions": [
        "2.5.0.7",
        "2.5.1.4",
        "2.5.1.3",
        "2.5.1.1",
        "2.5.0.7"
      ],
      "init": "init.mapphone_cdma.rc",
      "name": "Motorola Milestone"
    },
    {
      "readonly_recovery": true,
      "version": "5.0.2.0",
      "key": "droidx",
      "legacy_versions": [
        "2.5.0.7"
      ],
      "reboot_recovery": "rm /cache/recovery/command ; echo 1 > /data/.recovery_mode ; sync ; reboot ;",
      "init": "init.mapphone_cdma.rc",
      "name": "Motorola Droid X",
      "flash_recovery": "dd if=%s of=/preinstall/recovery/recovery.zip ; "
    },
    {
      "readonly_recovery": true,
      "version": "5.0.2.0",
      "key": "shadow",
      "legacy_versions": [
        "2.5.0.7"
      ],
      "reboot_recovery": "rm /cache/recovery/command ; echo 1 > /data/.recovery_mode ; sync ; reboot ;",
      "init": "init.mapphone_cdma.rc",
      "name": "Motorola Droid X (2nd-init)",
      "flash_recovery": "dd if=%s of=/preinstall/recovery/recovery.zip ; ",
      "lunch": "cyanogen_shadow-eng"
    },
    {
      "version": "2.5.1.0",
      "key": "salsa",
      "legacy_versions": [
        "2.5.1.4",
        "2.5.1.3",
        "2.5.1.1",
        "2.5.1.0"
      ],
      "init": "init.salsa.rc",
      "name": "Acer Liquid"
    },
    {
      "version": "2.5.1.3",
      "key": "z71",
      "legacy_versions": [
        "2.5.1.4",
        "2.5.1.3",
        "2.5.1.1",
        "2.5.1.0"
      ],
      "init": "init.qcom.rc",
      "name": "Commtiva Z71 (Boston, Blaze, and more)"
    },
    {
      "version": "5.0.2.7",
      "key": "vision",
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
      "init": "init.vision.rc",
      "name": "HTC G2",
      "flash_recovery": "dd if=/dev/zero of=/dev/block/mmcblk0p21 bs=4096 ; dd if=%s of=/dev/block/mmcblk0p21 bs=4096 ; ",
      "touch_version": "5.8.1.0",
      "lunch": "cyanogen_vision-eng"
    },
    {
      "version": "5.0.2.0",
      "key": "glacier",
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
      "init": "init.glacier.rc",
      "name": "HTC MyTouch 4G",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p21 ; ",
      "touch_version": "5.8.1.0",
      "lunch": "cyanogen_glacier-eng"
    },
    {
      "version": "5.0.2.0",
      "key": "ace",
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
      "init": "init.spade.rc",
      "name": "HTC Desire HD",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p21 ; ",
      "touch_version": "5.8.1.5",
      "lunch": "cyanogen_ace-eng"
    },
    {
      "version": "5.0.2.0",
      "key": "morrison",
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
      "init": "init.morrison.rc",
      "name": "Motorola Cliq",
      "touch_version": "5.8.1.0",
      "lunch": "cyanogen_morrison-eng"
    },
    {
      "readonly_recovery": true,
      "version": "5.0.2.0",
      "key": "droid2",
      "legacy_versions": [
        "2.5.0.8"
      ],
      "reboot_recovery": "rm /cache/recovery/command ; echo 1 > /data/.recovery_mode ; sync ; reboot ;",
      "init": "init.mapphone_cdma.rc",
      "name": "Motorola Droid 2",
      "flash_recovery": "dd if=%s of=/preinstall/recovery/recovery.zip ; ",
      "lunch": "cyanogen_droid2-eng"
    },
    {
      "version": "2.5.1.3",
      "key": "one",
      "legacy_versions": [
        "2.5.1.4",
        "2.5.1.3",
        "2.5.1.1",
        "2.5.1.0"
      ],
      "init": "init.qcom.rc",
      "name": "Geeksphone ONE",
      "alternate_recovery": {
        "clockwork": false,
        "name": "ONE Recovery v1.6",
        "url": "http://dl.dropbox.com/u/10355648/recovery-ONE-1_6.img"
      }
    },
    {
      "version": "3.0.2.7",
      "key": "vega",
      "legacy_versions": [
        "2.5.1.4",
        "2.5.1.3",
        "2.5.1.1",
        "2.5.1.0",
        "2.5.1.4"
      ],
      "reboot_recovery": "echo start > /proc/ota ; ",
      "init": "init_recovery.rc",
      "name": "Advent Vega",
      "flash_recovery": "/data/data/com.koushikdutta.rommanager/files/tegra_flash_image recovery %s ; "
    },
    {
      "readonly_recovery": true,
      "version": "2.5.1.8",
      "key": "att_tab",
      "legacy_versions": [
        "2.5.1.8",
        "2.5.1.4",
        "2.5.1.3",
        "2.5.1.1"
      ],
      "init": "init.smdkc110.rc",
      "name": "Samsung Galaxy Tab - ATT"
    },
    {
      "readonly_recovery": true,
      "version": "2.5.1.8",
      "key": "tmobile_tab",
      "legacy_versions": [
        "2.5.1.8",
        "2.5.1.4",
        "2.5.1.3",
        "2.5.1.1"
      ],
      "init": "init.smdkc110.rc",
      "name": "Samsung Galaxy Tab (T-Mobile)"
    },
    {
      "version": "2.5.1.2",
      "key": "FM6",
      "legacy_versions": [
        "2.5.1.4",
        "2.5.1.3",
        "2.5.1.1",
        "2.5.1.0"
      ],
      "init": "init.qcom.rc",
      "name": "Commtiva Link N700, Spice MI700, and more",
      "alternate_recovery": {
        "clockwork": false,
        "name": "MI700 Recovery v1.6",
        "url": "http://dl.dropbox.com/u/15816725/MI700-recovery-V1_3.img"
      }
    },
    {
      "version": "6.0.3.8",
      "key": "crespo",
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
      "init": "init.herring.rc",
      "name": "Google Nexus S",
      "touch_version": "6.0.3.8",
      "lunch": "cm_crespo-userdebug"
    },
    {
      "readonly_recovery": true,
      "version": "2.5.0.8",
      "key": "droidpro",
      "legacy_versions": [
        "2.5.0.8"
      ],
      "init": "init. mapphone_cdma.rc",
      "name": "Motorola Droid Pro"
    },
    {
      "version": "3.0.0.5",
      "key": "ascend",
      "legacy_versions": [
        "3.0.0.5",
        "3.0.0.4"
      ],
      "init": "init.qcom.rc",
      "name": "Huawei Ascend"
    },
    {
      "version": "5.0.2.0",
      "key": "blade",
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
      "init": "init.blade.rc",
      "name": "ZTE Blade",
      "lunch": "cyanogen_blade-eng"
    },
    {
      "version": "5.0.2.0",
      "key": "click",
      "legacy_versions": [
        "3.0.0.6",
        "3.0.0.6",
        "3.0.2.7",
        "5.0.0.8",
        "5.0.1.0"
      ],
      "init": "init.bahamas.rc",
      "name": "HTC Click/Tattoo",
      "lunch": "cyanogen_click-eng"
    },
    {
      "readonly_recovery": true,
      "version": "3.0.0.8",
      "key": "a7",
      "legacy_versions": [
        "3.0.0.8"
      ],
      "init": "init_recovery.rc",
      "name": "Elocity A7"
    },
    {
      "version": "3.0.1.3",
      "key": "zero",
      "legacy_versions": [
        "3.0.1.3"
      ],
      "init": "init.zero.rc",
      "name": "Geeksphone Zero"
    },
    {
      "version": "5.0.2.0",
      "key": "speedy",
      "legacy_versions": [
        "3.0.1.4",
        "3.0.1.3",
        "3.0.1.2",
        "3.0.1.1",
        "3.0.1.4",
        "3.0.2.8",
        "3.2.0.1"
      ],
      "init": "init.speedy.rc",
      "name": "HTC Evo Shift",
      "touch_version": "5.8.1.6",
      "lunch": "cyanogen_speedy-eng"
    },
    {
      "key": "captivatemtd",
      "legacy_versions": [

      ],
      "reboot_recovery": "echo 1 > /cache/.startrecovery ; sync ; reboot ;",
      "init": "init.aries.rc",
      "name": "Samsung Captivate (MTD)",
      "officially_supported": false
    },
    {
      "key": "showcasemtd",
      "legacy_versions": [

      ],
      "reboot_recovery": "echo 1 > /cache/.startrecovery ; sync ; reboot ;",
      "init": "init.aries.rc",
      "name": "Samsung Showcase (MTD)",
      "officially_supported": false
    },
    {
      "key": "mesmerizemtd",
      "legacy_versions": [

      ],
      "reboot_recovery": "echo 1 > /cache/.startrecovery ; sync ; reboot ;",
      "init": "init.aries.rc",
      "name": "Samsung Mesmerize (MTD)",
      "officially_supported": false
    },
    {
      "key": "fascinatemtd",
      "legacy_versions": [

      ],
      "reboot_recovery": "echo 1 > /cache/.startrecovery ; sync ; reboot ;",
      "init": "init.aries.rc",
      "name": "Samsung Fascinate (MTD)",
      "officially_supported": false
    },
    {
      "key": "vibrantmtd",
      "legacy_versions": [

      ],
      "reboot_recovery": "echo 1 > /cache/.startrecovery ; sync ; reboot ;",
      "init": "init.aries.rc",
      "name": "Samsung Vibrant (MTD)",
      "officially_supported": false
    },
    {
      "key": "galaxysbmtd",
      "legacy_versions": [

      ],
      "reboot_recovery": "echo 1 > /cache/.startrecovery ; sync ; reboot ;",
      "init": "init.aries.rc",
      "name": "Samsung GalaxyS i9000B (MTD)",
      "officially_supported": false
    },
    {
      "key": "galaxysmtd",
      "legacy_versions": [

      ],
      "reboot_recovery": "echo 1 > /cache/.startrecovery ; sync ; reboot ;",
      "init": "init.aries.rc",
      "name": "Samsung GalaxyS i9000 (MTD)",
      "officially_supported": false
    },
    {
      "readonly_recovery": true,
      "version": "5.0.2.7",
      "key": "epic4g",
      "legacy_versions": [

      ],
      "init": "lpm.rc",
      "name": "Samsung Epic4G",
      "lunch": "full_epic4g-eng"
    },
    {
      "version": "3.0.2.0",
      "key": "streak7",
      "legacy_versions": [
        "3.0.2.0",
        "3.0.1.9",
        "3.0.1.8",
        "3.0.1.7"
      ],
      "init": "init.tinyandroid.rc",
      "name": "Dell Streak 7",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk3p1 ; "
    },
    {
      "version": "5.0.2.1",
      "key": "mecha",
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
      "init": "init.mecha.rc",
      "name": "HTC Thunderbolt",
      "touch_version": "5.8.0.2",
      "lunch": "cyanogen_mecha-eng",
      "alternate_recovery": {
        "clockwork": false,
        "name": "RA_GNM Recovery v3.05",
        "url": "http://dl.dropbox.com/u/12949506/RomManager/recovery-ra-mecha-3.05.img"
      }
    },
    {
      "version": "3.0.2.4",
      "key": "ideos",
      "legacy_versions": [
        "3.0.2.4"
      ],
      "init": "init.ideos.rc",
      "name": "Huawei U8150 Ideos"
    },
    {
      "version": "6.0.3.1",
      "key": "stingray",
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
      "init": "init.stingray.rc",
      "name": "Motorola XOOM",
      "flash_recovery": "dd if=%s of=/dev/block/platform/sdhci-tegra.3/by-name/recovery ; ",
      "touch_version": "6.0.3.1",
      "lunch": "cm_stingray-userdebug"
    },
    {
      "version": "3.1.0.0",
      "key": "leo",
      "legacy_versions": [
        "3.0.2.5",
        "3.0.2.4",
        "3.0.2.5"
      ],
      "init": "init.leo.rc",
      "name": "HTC HD2"
    },
    {
      "version": "5.0.2.0",
      "key": "zeppelin",
      "legacy_versions": [
        "3.0.2.4",
        "3.0.2.4",
        "5.0.0.8",
        "5.0.0.8",
        "5.0.1.0",
        "5.0.1.0"
      ],
      "init": "init.zeppelin.rc",
      "name": "Motorola CLIQ XT/Quench (MB501)",
      "lunch": "cyanogen_zeppelin-eng"
    },
    {
      "version": "5.0.2.0",
      "key": "saga",
      "legacy_versions": [
        "3.0.2.6",
        "5.0.1.9"
      ],
      "init": "init.saga.rc",
      "name": "HTC Desire S",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p21 ; ",
      "touch_version": "5.8.1.5",
      "lunch": "full_saga-eng"
    },
    {
      "readonly_recovery": true,
      "version": "5.0.2.0",
      "key": "p999",
      "legacy_versions": [
        "3.0.2.7",
        "5.0.0.8",
        "5.0.1.0",
        "5.0.1.4",
        "5.0.1.6"
      ],
      "reboot_recovery": "echo 'boot-recovery' | dd of=/dev/block/mmcblk0p3 seek=6144 bs=1 ; reboot ; ",
      "init": "init_recovery.rc",
      "name": "LG G2X (T-Mobile)",
      "lunch": "cyanogen_p999-eng"
    },
    {
      "inits": [
        "init_recovery.rc",
        "/bootimages/opening_01.rle"
      ],
      "version": "6.0.3.1",
      "key": "p990",
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
      "reboot_recovery": "echo 'boot-recovery' | dd of=/dev/block/mmcblk0p3 seek=6144 bs=1 ; reboot ; ",
      "name": "LG Optimus 2X",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p7 ; ",
      "touch_version": "6.0.3.1",
      "lunch": "cm_p990-userdebug"
    },
    {
      "version": "6.0.3.8",
      "key": "crespo4g",
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
      "init": "init.herring.rc",
      "name": "Google Nexus S 4G",
      "touch_version": "6.0.3.8",
      "lunch": "cm_crespo4g-userdebug"
    },
    {
      "version": "5.0.2.0",
      "key": "thunderg",
      "legacy_versions": [
        "3.1.0.0",
        "5.0.0.8",
        "5.0.1.0"
      ],
      "init": "init.thunderg.rc",
      "name": "LG Optimus One (old BB)",
      "lunch": "full_thunderg-eng",
      "alternate_recovery": {
        "clockwork": false,
        "name": "RA_GNM Recovery v2.2.1",
        "url": "http://dl.dropbox.com/u/12949506/RomManager/recovery-RA-thunderg-2.2.1-GNM.img"
      }
    },
    {
      "version": "5.0.2.7",
      "key": "p500",
      "legacy_versions": [
        "5.0.2.0"
      ],
      "init": "init.thunderg.rc",
      "name": "LG Optimus One",
      "lunch": "cyanogen_p500-eng"
    },
    {
      "version": "3.1.0.1",
      "key": "u8220",
      "legacy_versions": [

      ],
      "init": "init.qcom.rc",
      "name": "Huawei U8220/U8230"
    },
    {
      "readonly_recovery": true,
      "version": "3.1.0.1",
      "key": "charge",
      "legacy_versions": [

      ],
      "init": "init.smdkc110.rc",
      "name": "Samsung Charge"
    },
    {
      "key": "umts_jordan",
      "legacy_versions": [

      ],
      "init": "init.mapphone_umts.rc",
      "name": "Motorola Defy",
      "officially_supported": false
    },
    {
      "readonly_recovery": true,
      "version": "3.2.0.0",
      "key": "galaxys4g",
      "legacy_versions": [
        "3.2.0.0"
      ],
      "init": "init.smdkc110.rc",
      "name": "Samsung Galaxy S 4G"
    },
    {
      "readonly_recovery": true,
      "inits": [
        "init.smdkc210.rc",
        "init.smdk4210.rc"
      ],
      "version": "4.0.1.5",
      "key": "galaxys2",
      "ro.product.device": [
        "i9100",
        "galaxys2"
      ],
      "legacy_versions": [
        "4.0.1.4",
        "v4.0.1.4"
      ],
      "init": "init.smdkc210.rc",
      "name": "Samsung Galaxy S2",
      "touch_version": "5.8.1.5"
    },
    {
      "inits": [
        "init.smdkc210.rc",
        "init.smdk4210.rc"
      ],
      "version": "6.0.1.0",
      "key": "i9100",
      "ro.product.device": [
        "i9100",
        "galaxys2"
      ],
      "legacy_versions": [

      ],
      "init": "init.smdk4210.rc",
      "name": "Samsung Galaxy S2",
      "lunch": "cm_i9100-userdebug",
      "officially_supported": false
    },
    {
      "readonly_recovery": true,
      "version": "6.0.1.2",
      "key": "n7000",
      "legacy_versions": [
        "6.0.1.0"
      ],
      "init": "init.smdk4210.rc",
      "name": "Samsung Galaxy Note (GT-N7000)",
      "lunch": "cm_n7000-userdebug"
    },
    {
      "readonly_recovery": true,
      "version": "4.0.0.2",
      "key": "sidekick4g",
      "legacy_versions": [

      ],
      "init": "init.smdkc110.rc",
      "name": "Samsung Sidekick 4G"
    },
    {
      "version": "5.0.2.0",
      "key": "vivo",
      "legacy_versions": [
        "4.0.0.4",
        "4.0.0.6",
        "4.0.0.7",
        "4.0.0.8",
        "5.0.1.9"
      ],
      "init": "init.vivo.rc",
      "name": "HTC Incredible S",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p21 ; ",
      "lunch": "cyanogen_vivo-eng"
    },
    {
      "version": "5.0.2.0",
      "key": "vivow",
      "legacy_versions": [
        "4.0.0.4",
        "4.0.0.6",
        "4.0.0.7",
        "4.0.0.8",
        "5.0.1.9"
      ],
      "init": "init.vivow.rc",
      "name": "HTC Incredible 2",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p21 ; ",
      "lunch": "cyanogen_vivow-eng",
      "alternate_recovery": {
        "clockwork": false,
        "name": "RA_GNM Recovery v3.05",
        "url": "http://dl.dropbox.com/u/12949506/RomManager/recovery-ra-vivow-3.05.img"
      }
    },
    {
      "inits": [
        "init.p920.rc",
        "/bootimages/opening_01.rle"
      ],
      "version": "6.0.1.9",
      "key": "p920",
      "legacy_versions": [
        "4.0.0.7",
        "4.0.0.9",
        "5.0.1.4",
        "5.0.2.0",
        "5.0.2.7"
      ],
      "reboot_recovery": "echo '518 R 1' > /sys/kernel/kobject_lge_nvdata/dynamic_nvdata_raw_write ; reboot ; ",
      "name": "LG Optimus 3D",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p6 ; ",
      "touch_version": "6.0.1.9",
      "lunch": "cm_p920-userdebug"
    },
    {
      "version": "4.0.0.9",
      "key": "galaxyace",
      "legacy_versions": [

      ],
      "init": "init.galaxyace.rc",
      "name": "Samsung Galaxy Ace",
      "flash_recovery": "/data/data/com.koushikdutta.rommanager/files/flash_image recoveryonly %s ; "
    },
    {
      "inits": [
        "init_prep_keypad.sh",
        "init.olympus.rc"
      ],
      "version": "5.0.2.0",
      "key": "olympus",
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
      "init": "init_prep_keypad.sh",
      "name": "Motorola Atrix 4G",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p10 ; ",
      "touch_version": "5.8.1.8",
      "lunch": "generic_olympus-eng"
    },
    {
      "version": "4.0.1.5",
      "key": "smb_a1002",
      "legacy_versions": [

      ],
      "init": "init_recovery.rc",
      "name": "Viewsonic GTablet (smb_a1002)",
      "flash_recovery": "/data/data/com.koushikdutta.rommanager/files/tegra_flash_image recovery %s ; "
    },
    {
      "version": "5.0.2.0",
      "key": "shooter",
      "legacy_versions": [
        "4.0.1.5",
        "5.0.0.0",
        "5.0.1.0"
      ],
      "init": "init.shooter.rc",
      "name": "HTC EVO 3D",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p22 ; ",
      "touch_version": "5.8.0.2",
      "lunch": "htc_shooter-eng"
    },
    {
      "version": "5.0.2.0",
      "key": "pyramid",
      "legacy_versions": [
        "4.0.1.5",
        "5.0.0.1",
        "5.0.0.7",
        "5.0.0.8",
        "5.0.1.0"
      ],
      "init": "init.pyramid.rc",
      "name": "HTC Sensation",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p21 ; ",
      "touch_version": "5.8.0.9",
      "lunch": "full_pyramid-eng"
    },
    {
      "inits": [
        "init.qcom.rc",
        "init.huawei.rc"
      ],
      "version": "4.0.1.5",
      "key": "ascend2",
      "legacy_versions": [

      ],
      "init": "init.qcom.rc",
      "name": "Huawei Ascend 2 (M865)"
    },
    {
      "version": "4.0.1.5",
      "key": "a70",
      "legacy_versions": [

      ],
      "init": "init.qcom.rc",
      "name": "Micromax A70"
    },
    {
      "readonly_recovery": true,
      "version": "4.0.1.5",
      "key": "galaxygio",
      "legacy_versions": [

      ],
      "init": "init.galaxygio.rc",
      "name": "Samsung Galaxy Gio"
    },
    {
      "readonly_recovery": true,
      "version": "4.0.1.5",
      "key": "indulge910",
      "legacy_versions": [

      ],
      "init": "init.smdkc110.rc",
      "name": "Samsung Indulge 910"
    },
    {
      "readonly_recovery": true,
      "version": "4.0.1.5",
      "key": "indulge915",
      "legacy_versions": [

      ],
      "init": "init.smdkc110.rc",
      "name": "Samsung Indulge 915"
    },
    {
      "version": "6.0.1.4",
      "key": "p970",
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
      "init": "/bootimages/ON_480x800_08fps_0000.rle",
      "name": "LG Optimus Black",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p4 ; ",
      "touch_version": "6.0.1.4",
      "lunch": "cm_p970-userdebug"
    },
    {
      "version": "5.0.2.0",
      "key": "shooteru",
      "legacy_versions": [
        "5.0.1.6",
        "5.0.1.7",
        "5.0.1.8",
        "5.0.1.9"
      ],
      "init": "init.shooteru.rc",
      "name": "HTC EVO 3D (GSM)",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p21 ; ",
      "touch_version": "5.8.0.2",
      "lunch": "full_shooteru-eng"
    },
    {
      "readonly_recovery": true,
      "version": "5.0.2.3",
      "key": "droid2we",
      "legacy_versions": [

      ],
      "reboot_recovery": "rm /cache/recovery/command ; echo 1 > /data/.recovery_mode ; sync ; reboot ;",
      "init": "init.mapphone_cdma.rc",
      "name": "Motorola Droid 2 Global",
      "flash_recovery": "dd if=%s of=/preinstall/recovery/recovery.zip ; ",
      "lunch": "cyanogen_droid2we-eng"
    },
    {
      "readonly_recovery": true,
      "version": "5.0.2.5",
      "key": "targa",
      "legacy_versions": [
        "5.0.2.3",
        "5.0.2.4"
      ],
      "reboot_recovery": "rm /cache/recovery/command ; echo 1 > /data/.recovery_mode ; sync ; reboot ;",
      "init": "init.mapphone_cdma.rc",
      "name": "Motorola Droid Bionic",
      "flash_recovery": "dd if=%s of=/preinstall/recovery/recovery.zip ; ",
      "lunch": "generic_targa-eng"
    },
    {
      "readonly_recovery": true,
      "version": "5.0.2.5",
      "key": "daytona",
      "legacy_versions": [
        "5.0.2.3",
        "5.0.2.4"
      ],
      "reboot_recovery": "rm /cache/recovery/command ; echo 1 > /data/.recovery_mode ; sync ; reboot ;",
      "init": "init.mapphone_cdma.rc",
      "name": "Motorola Droid X2",
      "flash_recovery": "dd if=%s of=/preinstall/recovery/recovery.zip ; ",
      "lunch": "generic_daytona-eng"
    },
    {
      "readonly_recovery": true,
      "version": "5.0.2.6",
      "key": "solana",
      "legacy_versions": [
        "5.0.2.5"
      ],
      "reboot_recovery": "rm /cache/recovery/command ; echo 1 > /data/.recovery_mode ; sync ; reboot ;",
      "init": "init.mapphone_cdma.rc",
      "name": "Motorola Droid 3",
      "flash_recovery": "dd if=%s of=/preinstall/recovery/recovery.zip ; ",
      "lunch": "full_solana-eng"
    },
    {
      "version": "5.0.2.6",
      "key": "motus",
      "legacy_versions": [

      ],
      "init": "init.motus.rc",
      "name": "Motorola Backflip",
      "lunch": "cyanogen_motus-eng"
    },
    {
      "readonly_recovery": true,
      "version": "5.0.2.6",
      "key": "tass",
      "legacy_versions": [

      ],
      "init": "init.gt-s5570.rc",
      "name": "Samsung Galaxy Mini",
      "lunch": "tass-eng"
    },
    {
      "version": "5.0.2.6",
      "key": "u8800",
      "legacy_versions": [

      ],
      "init": "init.u8800.rc",
      "name": "Huawei U8800",
      "flash_recovery": "mount -o remount,rw -t vfat /dev/block/mmcblk0p1 /cust_backup ; cat %s > /cust_backup/image/recovery.img ;",
      "lunch": "huawei_u8800-eng"
    },
    {
      "readonly_recovery": true,
      "inits": [
        "init.smdkc210.rc",
        "init.smdk4210.rc"
      ],
      "version": "5.0.2.6",
      "key": "galaxys2att",
      "legacy_versions": [

      ],
      "init": "init.smdkc210.rc",
      "name": "Samsung Galaxy S2 (AT&T)",
      "touch_version": "5.8.1.5",
      "lunch": "cyanogen_galaxys2att-eng"
    },
    {
      "version": "6.0.3.6",
      "owners": {
        "jmprblckwing182@gmail.com": true
      },
      "key": "hercules",
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
      "init": "init.target.rc",
      "name": "Samsung Galaxy S2 (T-Mobile)",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p22 bs=4096 ; ",
      "touch_version": "6.0.3.6",
      "lunch": "cm_hercules-userdebug"
    },
    {
      "readonly_recovery": true,
      "version": "5.0.2.7",
      "key": "epic4gtouch",
      "legacy_versions": [
        "5.0.2.6",
        "5.0.2.7"
      ],
      "init": "init.smdkc210.rc",
      "name": "Samsung Epic 4G Touch",
      "touch_version": "5.8.1.5",
      "lunch": "full_epic4gtouch-eng"
    },
    {
      "version": "5.0.2.6",
      "key": "ruby",
      "legacy_versions": [

      ],
      "init": "init.ruby.rc",
      "name": "HTC Amaze",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p23 bs=4096 ; ",
      "lunch": "full_ruby-eng"
    },
    {
      "readonly_recovery": true,
      "version": "5.0.2.8",
      "key": "galaxy5",
      "legacy_versions": [
        "5.0.2.8"
      ],
      "init": "init.gt-i5500.rc",
      "name": "Samsung Galaxy 5",
      "lunch": "samsung_galaxy5-eng"
    },
    {
      "version": "5.0.2.7",
      "key": "mooncake",
      "legacy_versions": [

      ],
      "init": "init.mooncake.rc",
      "name": "ZTE Racer",
      "lunch": "generic_mooncake-eng"
    },
    {
      "readonly_recovery": true,
      "version": "5.0.2.7",
      "key": "vzwtab",
      "legacy_versions": [
        "5.0.2.7",
        "5.0.2.7",
        "5.0.2.7"
      ],
      "init": "init.smdkc110.rc",
      "name": "Samsung Galaxy Tab (VZW)",
      "lunch": "full_vzwtab-eng"
    },
    {
      "version": "5.0.2.7",
      "key": "doubleshot",
      "legacy_versions": [
        "5.0.2.7",
        "5.0.2.7"
      ],
      "init": "init.doubleshot.rc",
      "name": "HTC MyTouch 4G Slide",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p21 bs=4096 ; ",
      "lunch": "full_doubleshot-eng"
    },
    {
      "version": "6.0.3.6",
      "key": "maguro",
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
      "init": "init.tuna.rc",
      "name": "Google Galaxy Nexus (GSM)",
      "flash_recovery": "dd if=%s of=/dev/block/platform/omap/omap_hsmmc.0/by-name/recovery bs=4096 ;",
      "touch_version": "6.0.3.6",
      "lunch": "cm_maguro-userdebug"
    },
    {
      "version": "6.0.3.6",
      "key": "toro",
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
      "init": "init.tuna.rc",
      "name": "Google Galaxy Nexus (Verizon)",
      "flash_recovery": "dd if=%s of=/dev/block/platform/omap/omap_hsmmc.0/by-name/recovery bs=4096 ;",
      "touch_version": "6.0.3.6",
      "lunch": "cm_toro-userdebug"
    },
    {
      "version": "5.0.2.7",
      "key": "lg690",
      "legacy_versions": [

      ],
      "init": "init.thunderc.rc",
      "name": "LG Optimus C LW690 and Optimus M MS690",
      "lunch": "full_lg690-eng"
    },
    {
      "version": "5.0.2.7",
      "key": "c660",
      "legacy_versions": [

      ],
      "init": "init.muscat.rc",
      "name": "LG Optimus Pro",
      "lunch": "c660-eng"
    },
    {
      "version": "5.0.2.7",
      "key": "e510",
      "legacy_versions": [

      ],
      "init": "init.univa.rc",
      "name": "LG Optimus Hub",
      "lunch": "e510-eng"
    },
    {
      "version": "5.0.2.7",
      "key": "epicmtd",
      "legacy_versions": [

      ],
      "reboot_recovery": "/system/xbin/busybox devmem 0x57fff800 32 0x5EC0B007; sync ; reboot ;",
      "init": "init.victory.rc",
      "name": "Samsung Epic4G (MTD)",
      "touch_version": "5.8.1.5",
      "lunch": "cyanogen_epicmtd-eng",
      "officially_supported": false
    },
    {
      "version": "5.0.2.7",
      "key": "holiday",
      "legacy_versions": [
        "5.0.2.7",
        "5.0.2.7",
        "5.0.2.7"
      ],
      "init": "init.holiday.rc",
      "name": "HTC Holiday",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p23 bs=4096 ; ",
      "lunch": "full_holiday-eng"
    },
    {
      "inits": [
        "init.victor.rc",
        "init.e739.rc"
      ],
      "version": "5.0.2.7",
      "key": "e730",
      "legacy_versions": [

      ],
      "name": "LG Optimus SOL / TMo LG myTouch",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p17 bs=4096 ;",
      "lunch": "e730-eng"
    },
    {
      "version": "5.0.2.8",
      "key": "marvel",
      "legacy_versions": [
        "5.0.2.7"
      ],
      "init": "init.marvel.rc",
      "name": "HTC Wildfire S",
      "lunch": "generic_marvel-eng"
    },
    {
      "inits": [
        "init.mapphone_umts.rc",
        "init.mapphone_cdma.rc"
      ],
      "version": "5.0.2.8",
      "key": "sunfire",
      "legacy_versions": [
        "5.0.2.7"
      ],
      "init": "init.mapphone_umts.rc",
      "name": "Motorola Photon 4G",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p10 bs=4096 ;",
      "lunch": "full_sunfire-eng"
    },
    {
      "inits": [
        "init.huawei.rc",
        "init.u8160.rc"
      ],
      "version": "5.0.2.8",
      "key": "u8160",
      "legacy_versions": [
        "5.0.2.8"
      ],
      "init": "init.u8160.rc",
      "name": "Huawei U8160",
      "lunch": "huawei_u8160-eng"
    },
    {
      "version": "6.0.3.1",
      "key": "vigor",
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
      "init": "init.vigor.rc",
      "name": "HTC Rezound",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p23 bs=4096 ;",
      "touch_version": "6.0.3.1",
      "lunch": "cm_vigor-userdebug"
    },
    {
      "version": "5.8.1.5",
      "key": "express",
      "legacy_versions": [

      ],
      "init": "init.expresskt.rc",
      "name": "HTC EVO View 4G",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p21 bs=4096 ;",
      "lunch": "full_express-userdebug"
    },
    {
      "version": "5.8.3.4",
      "key": "tf201",
      "legacy_versions": [
        "5.5.0.4",
        "5.8.2.0"
      ],
      "init": "init.cardhu.rc",
      "name": "Asus Transformer Prime",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p4 ;",
      "touch_version": "5.8.3.4",
      "lunch": "cm_tf201-userdebug"
    },
    {
      "version": "5.0.2.0",
      "key": "maserati",
      "legacy_versions": [

      ],
      "reboot_recovery": "rm /cache/recovery/command ; echo 1 > /data/.recovery_mode ; sync ; reboot ;",
      "init": "init.mapphone_cdma.rc",
      "name": "Motorola Droid 4",
      "officially_supported": false
    },
    {
      "version": "5.0.2.0",
      "key": "spyder",
      "legacy_versions": [

      ],
      "reboot_recovery": "rm /cache/recovery/command ; echo 1 > /data/.recovery_mode ; sync ; reboot ;",
      "init": "init.mapphone_cdma.rc",
      "name": "Motorola RAZR",
      "officially_supported": false
    },
    {
      "version": "5.0.2.8",
      "key": "marvelc",
      "legacy_versions": [

      ],
      "init": "init.marvelc.rc",
      "name": "HTC Wildfire S CDMA",
      "lunch": "full_marvelc-eng"
    },
    {
      "version": "6.0.1.3",
      "key": "tf101",
      "legacy_versions": [
        "5.5.0.4",
        "5.8.1.9",
        "5.8.2.0",
        "5.8.2.1",
        "5.8.3.4"
      ],
      "init": "init.ventana.rc",
      "name": "Asus Transformer",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p4 ;",
      "touch_version": "5.8.3.4",
      "lunch": "cm_tf101-userdebug"
    },
    {
      "version": "6.0.1.5",
      "key": "p930",
      "legacy_versions": [
        "5.8.2.0",
        "6.0.1.4"
      ],
      "init": "bootimages/boot_logo_00000.rle",
      "name": "LG Nitro HD / LG P930 (AT&T)",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p13 ;",
      "touch_version": "6.0.1.5",
      "lunch": "cm_p930-userdebug"
    },
    {
      "readonly_recovery": true,
      "inits": [
        "init.smdkc210.rc",
        "init.smdk4210.rc"
      ],
      "version": "6.0.1.0",
      "key": "i777",
      "legacy_versions": [
        "5.8.1.8"
      ],
      "init": "init.smdkc210.rc",
      "name": "Samsung Galaxy S2 (SGH-I777)",
      "touch_version": "6.0.1.0",
      "lunch": "cm_i777-userdebug"
    },
    {
      "version": "5.0.2.8",
      "key": "pico",
      "legacy_versions": [

      ],
      "init": "init.pico.rc",
      "name": "HTC Pico",
      "lunch": "full_pico-eng"
    },
    {
      "version": "5.8.4.0",
      "key": "endeavoru",
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
      "init": "ueventd.endeavoru.rc",
      "name": "HTC One X (GSM)",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p5 bs=4096 ;",
      "touch_version": "5.8.4.0",
      "lunch": "cm_endeavoru-userdebug"
    },
    {
      "version": "6.0.3.1",
      "key": "ville",
      "legacy_versions": [
        "5.5.0.4",
        "5.8.2.1",
        "5.8.2.2",
        "5.8.2.3",
        "5.8.3.1",
        "6.0.2.9"
      ],
      "init": "init.ville.rc",
      "name": "HTC One S",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p22 bs=4096 ;",
      "touch_version": "6.0.3.1",
      "lunch": "cm_ville-userdebug"
    },
    {
      "version": "5.8.2.1",
      "key": "p1",
      "legacy_versions": [

      ],
      "reboot_recovery": "echo 1 > /cache/.startrecovery ; sync ; reboot ;",
      "init": "init.p1.rc",
      "name": "Samsung Galaxy Tab (MTD and GSM)",
      "officially_supported": false
    },
    {
      "version": "5.8.2.1",
      "key": "p1c",
      "legacy_versions": [

      ],
      "reboot_recovery": "echo 1 > /cache/.startrecovery ; sync ; reboot ;",
      "init": "init.p1c.rc",
      "name": "Samsung Galaxy Tab (MTD and CDMA)",
      "officially_supported": false
    },
    {
      "version": "6.0.3.6",
      "key": "toroplus",
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
      "init": "init.tuna.rc",
      "name": "Google Galaxy Nexus (Sprint)",
      "flash_recovery": "dd if=%s of=/dev/block/platform/omap/omap_hsmmc.0/by-name/recovery bs=4096 ;",
      "touch_version": "6.0.3.6",
      "lunch": "cm_toroplus-userdebug"
    },
    {
      "version": "6.0.3.1",
      "key": "p4wifi",
      "legacy_versions": [
        "4.0.0.4",
        "5.8.3.1",
        "6.0.2.9",
        "6.0.3.0"
      ],
      "init": "ueventd.p3.rc",
      "name": "Samsung Galaxy Tab 10.1 (Wifi)",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p2 ; ",
      "touch_version": "6.0.3.1",
      "lunch": "cm_p4wifi-userdebug"
    },
    {
      "version": "6.0.3.1",
      "key": "wingray",
      "legacy_versions": [
        "5.8.3.1",
        "6.0.2.9"
      ],
      "init": "init.wingray.rc",
      "name": "Motorola XOOM (Wi-Fi only)",
      "flash_recovery": "dd if=%s of=/dev/block/platform/sdhci-tegra.3/by-name/recovery ; ",
      "touch_version": "6.0.3.1",
      "lunch": "cm_wingray-userdebug"
    },
    {
      "version": "5.0.2.8",
      "key": "marquee",
      "legacy_versions": [

      ],
      "init": "init.omap.post_boot.sh",
      "name": "LG Marquee",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p4 bs=4096 ; ",
      "lunch": "full_marquee-eng"
    },
    {
      "version": "5.0.2.8",
      "key": "ignite",
      "legacy_versions": [

      ],
      "init": "init.omap.post_boot.sh",
      "name": "LG Ignite",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p4 bs=4096 ; ",
      "lunch": "full_ignite-eng"
    },
    {
      "version": "5.8.3.1",
      "key": "ms840",
      "legacy_versions": [

      ],
      "init": "init.target.rc",
      "name": "LG Connect 4G MS840",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p13 bs=4096 ; ",
      "touch_version": "5.8.3.1",
      "lunch": "full_ms840-userdebug"
    },
    {
      "version": "5.8.3.1",
      "key": "vs840",
      "legacy_versions": [

      ],
      "init": "init.target.rc",
      "name": "LG Lucid VS840",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p13 bs=4096 ; ",
      "touch_version": "5.8.3.1",
      "lunch": "full_vs840-userdebug"
    },
    {
      "version": "5.8.3.5",
      "key": "jewel",
      "legacy_versions": [
        "5.8.3.4",
        "5.8.3.4"
      ],
      "init": "init.jewel.rc",
      "name": "HTC EVO LTE",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p22 bs=4096 ; ",
      "touch_version": "5.8.3.5",
      "lunch": "cm_jewel-userdebug"
    },
    {
      "version": "6.0.3.6",
      "key": "i9300",
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
      "ro.product.devices": [
        "i9300",
        "m0"
      ],
      "init": "ueventd.smdk4x12.rc",
      "name": "Samsung Galaxy S3 (GT-I9300)",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p6 bs=4096 ; ",
      "touch_version": "6.0.3.6",
      "lunch": "cm_i9300-userdebug"
    },
    {
      "version": "6.0.3.1",
      "key": "skyrocket",
      "legacy_versions": [
        "5.8.4.3",
        "6.0.1.0",
        "6.0.1.4"
      ],
      "init": "init.qcom.usb.rc",
      "name": "Samsung Skyrocket",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p22 bs=4096 ; ",
      "touch_version": "6.0.3.3",
      "lunch": "cm_skyrocket-userdebug"
    },
    {
      "version": "6.0.3.6",
      "key": "quincyatt",
      "legacy_versions": [
        "5.8.4.3",
        "5.8.4.8",
        "6.0.3.1"
      ],
      "init": "init.qcom.usb.rc",
      "name": "Samsung Galaxy Note (AT&T)",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p22 bs=4096 ; ",
      "touch_version": "6.0.3.6",
      "lunch": "cm_quincyatt-userdebug"
    },
    {
      "version": "5.8.4.5",
      "key": "e400",
      "legacy_versions": [

      ],
      "init": "init.e0.rc",
      "name": "LG Optimus L3",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p17 bs=4096 ; ",
      "lunch": "cm_e400-userdebug"
    },
    {
      "readonly_recovery": true,
      "version": "5.8.4.5",
      "key": "primou",
      "legacy_versions": [

      ],
      "init": "init.primou.rc",
      "name": "HTC One V",
      "lunch": "cm_primou-userdebug"
    },
    {
      "version": "6.0.3.8",
      "key": "d2att",
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
      "init": "init.d2att.rc",
      "name": "Samsung Galaxy S3 (AT&T)",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p18 bs=4096 ; ",
      "touch_version": "6.0.3.8",
      "lunch": "cm_d2att-userdebug"
    },
    {
      "version": "6.0.3.8",
      "key": "d2tmo",
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
      "ro.product.devices": [
        "d2tmo",
        "d2lteMetroPCS"
      ],
      "init": "init.d2tmo.rc",
      "name": "Samsung Galaxy S3 (T-Mobile)",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p18 bs=4096 ; ",
      "touch_version": "6.0.3.8",
      "lunch": "cm_d2tmo-userdebug"
    },
    {
      "version": "6.0.3.8",
      "key": "d2spr",
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
      "init": "init.d2spr.rc",
      "name": "Samsung Galaxy S3 (Sprint)",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p18 bs=4096 ; ",
      "touch_version": "6.0.3.8",
      "lunch": "cm_d2spr-userdebug"
    },
    {
      "version": "6.0.3.8",
      "key": "d2vzw",
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
      ],
      "twrp_version": "2.4.3.0",
      "init": "init.d2vzw.rc",
      "name": "Samsung Galaxy S3 (Verizon)",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p18 bs=4096 ; ",
      "touch_version": "6.0.3.7",
      "lunch": "cm_d2vzw-userdebug"
    },
    {
      "readonly_recovery": true,
      "version": "5.8.4.7",
      "key": "primoc",
      "legacy_versions": [
        "5.8.4.6",
        "5.8.4.7"
      ],
      "init": "init.primoc.rc",
      "name": "HTC One V (CDMA)",
      "touch_version": "5.8.4.7",
      "lunch": "full_primoc-userdebug"
    },
    {
      "version": "6.0.3.8",
      "key": "grouper",
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
      "init": "init.grouper.rc",
      "name": "Google Nexus 7",
      "flash_recovery": "dd if=%s of=/dev/block/platform/sdhci-tegra.3/by-name/SOS bs=4096 ; ",
      "touch_version": "6.0.3.8",
      "lunch": "cm_grouper-userdebug"
    },
    {
      "version": "6.0.1.0",
      "key": "su640",
      "legacy_versions": [

      ],
      "init": "init.su640.rc",
      "name": "LG Optimus LTE (SKT)",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p13 bs=4096 ; ",
      "touch_version": "6.0.1.0",
      "lunch": "cm_su640-userdebug"
    },
    {
      "version": "6.0.1.0",
      "key": "i9100g",
      "legacy_versions": [

      ],
      "init": "init.t1.rc",
      "name": "Samsung Galaxy S2 (GT-I9100G)",
      "lunch": "cm_i9100g-userdebug",
      "officially_supported": false
    },
    {
      "version": "6.0.2.7",
      "key": "p3100",
      "legacy_versions": [
        "6.0.1.1",
        "6.0.2.3"
      ],
      "init": "init.espresso.rc",
      "name": "Samsung Galaxy Tab 2 (GT-P3100)",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p6 bs=4096 ; ",
      "touch_version": "6.0.2.7",
      "lunch": "cm_p3100-userdebug"
    },
    {
      "version": "6.0.2.7",
      "key": "p3110",
      "legacy_versions": [
        "6.0.1.1",
        "6.0.2.3"
      ],
      "init": "init.espresso.rc",
      "name": "Samsung Galaxy Tab 2 (GT-P3110)",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p6 bs=4096 ; ",
      "touch_version": "6.0.2.7",
      "lunch": "cm_p3110-userdebug"
    },
    {
      "version": "6.0.2.3",
      "key": "p3113",
      "legacy_versions": [
        "6.0.1.1"
      ],
      "init": "init.espresso.rc",
      "name": "Samsung Galaxy Tab 2 (GT-P3113)",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p6 bs=4096 ; ",
      "touch_version": "6.0.2.3",
      "lunch": "cm_p3113-userdebug"
    },
    {
      "version": "6.0.2.7",
      "key": "p5100",
      "legacy_versions": [
        "6.0.1.1",
        "6.0.2.3"
      ],
      "init": "init.espresso10.rc",
      "name": "Samsung Galaxy Tab 2 (GT-P5100)",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p6 bs=4096 ; ",
      "touch_version": "6.0.2.7",
      "lunch": "cm_p5100-userdebug"
    },
    {
      "version": "6.0.2.7",
      "key": "p5110",
      "legacy_versions": [
        "6.0.1.1",
        "6.0.2.3"
      ],
      "init": "init.espresso10.rc",
      "name": "Samsung Galaxy Tab 2 (GT-P5110)",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p6 bs=4096 ; ",
      "touch_version": "6.0.2.7",
      "lunch": "cm_p5110-userdebug"
    },
    {
      "version": "6.0.2.3",
      "key": "p5113",
      "legacy_versions": [
        "6.0.1.1"
      ],
      "init": "init.espresso10.rc",
      "name": "Samsung Galaxy Tab 2 (GT-P5113)",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p6 bs=4096 ; ",
      "touch_version": "6.0.2.3",
      "lunch": "cm_p5113-userdebug"
    },
    {
      "inits": [
        "init.target.rc",
        "init.iproj.rc",
        "init.i_vzw.rc",
        "init.iprj.rc"
      ],
      "version": "6.0.1.1",
      "key": "vs920",
      "legacy_versions": [

      ],
      "init": "init.target.rc",
      "name": "LG Spectrum 4G",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p13 bs=4096 ; ",
      "touch_version": "6.0.1.1",
      "lunch": "cm_vs920-userdebug"
    },
    {
      "version": "6.0.1.1",
      "key": "x500",
      "legacy_versions": [

      ],
      "init": "init.zte.rc",
      "name": "Score & Score M",
      "touch_version": "6.0.1.1",
      "lunch": "cm_x500-userdebug"
    },
    {
      "inits": [
        "init.qcom.rc",
        "init.bryce.rc"
      ],
      "version": "6.0.1.1",
      "key": "vs910",
      "legacy_versions": [

      ],
      "init": "init.qcom.rc",
      "name": "LG Revolution 4G",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p14 bs=4096 ; ",
      "touch_version": "6.0.1.1",
      "lunch": "cm_vs910-userdebug"
    },
    {
      "inits": [
        "init.qcom.rc",
        "init.bryce.rc"
      ],
      "version": "6.0.1.1",
      "key": "ms910",
      "legacy_versions": [
        "5.0.2.8"
      ],
      "init": "init.qcom.rc",
      "name": "LG Esteeem 4G",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p14 bs=4096 ; ",
      "touch_version": "6.0.1.1",
      "lunch": "cm_ms910-userdebug"
    },
    {
      "inits": [
        "init.qcom.rc",
        "init.m3.rc"
      ],
      "version": "6.0.1.1",
      "key": "ms695",
      "legacy_versions": [
        "6.0.1.0"
      ],
      "init": "init.qcom.rc",
      "name": "LG Optimus M+",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p17 bs=4096 ; ",
      "touch_version": "6.0.1.1",
      "lunch": "cm_ms695-userdebug"
    },
    {
      "version": "5.8.2.1",
      "key": "p1l",
      "legacy_versions": [

      ],
      "reboot_recovery": "echo 1 > /cache/.startrecovery ; sync ; reboot ;",
      "init": "init.p1.rc",
      "name": "Samsung Galaxy Tab (MTD and GSM - L)",
      "officially_supported": false
    },
    {
      "version": "5.8.2.1",
      "key": "p1n",
      "legacy_versions": [

      ],
      "reboot_recovery": "echo 1 > /cache/.startrecovery ; sync ; reboot ;",
      "init": "init.p1.rc",
      "name": "Samsung Galaxy Tab (MTD and GSM - N)",
      "officially_supported": false
    },
    {
      "version": "6.0.3.8",
      "key": "d2usc",
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
      "init": "init.d2usc.rc",
      "name": "Samsung Galaxy S3 (US Cellular)",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p18 bs=4096 ; ",
      "touch_version": "6.0.3.8",
      "lunch": "cm_d2usc-userdebug"
    },
    {
      "inits": [
        "init.asanti.rc",
        "init.sprint.rc"
      ],
      "version": "6.0.1.3",
      "key": "asanti",
      "legacy_versions": [

      ],
      "init": "init.mmi.usb.rc",
      "name": "Motorola Photon Q",
      "flash_recovery": "dd if=%s of=/dev/block/platform/msm_sdcc.1/by-name/recovery bs=4096 ; ",
      "lunch": "cm_asanti-userdebug"
    },
    {
      "version": "6.0.1.5",
      "key": "p350",
      "legacy_versions": [
        "6.0.1.3",
        "6.0.1.4"
      ],
      "init": "init.pecan.rc",
      "name": "LG Optimus Me",
      "lunch": "cm_p350-userdebug"
    },
    {
      "version": "6.0.1.4",
      "key": "p5att",
      "legacy_versions": [

      ],
      "init": "fstab.qcom",
      "name": "Samsung Galaxy Tab 8.9 (AT&T)",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p22 bs=4096 ; ",
      "lunch": "cm_p5att-userdebug"
    },
    {
      "version": "6.0.3.8",
      "key": "t769",
      "legacy_versions": [
        "6.0.1.4"
      ],
      "init": "init.target.rc",
      "name": "Samsung Galaxy S Blaze 4G",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p22 bs=4096 ; ",
      "touch_version": "6.0.3.8",
      "lunch": "cm_t769-userdebug"
    },
    {
      "inits": [
        "init.carrier.rc",
        "init.d2mtr.rc"
      ],
      "version": "6.0.3.7",
      "key": "d2mtr",
      "legacy_versions": [
        "6.0.1.5",
        "6.0.2.3",
        "6.0.2.8",
        "6.0.2.9",
        "6.0.3.0",
        "6.0.3.1",
        "6.0.3.6"
      ],
      "init": "init.carrier.rc",
      "name": "Samsung Galaxy S3 (MetroPCS)",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p18 bs=4096 ; ",
      "touch_version": "6.0.3.8",
      "lunch": "cm_d2mtr-userdebug"
    },
    {
      "version": "6.0.3.1",
      "key": "tf700t",
      "legacy_versions": [
        "6.0.1.8",
        "6.0.2.3"
      ],
      "reboot_recovery": "echo 'boot-recovery' | dd of=/dev/block/mmcblk0p3 seek=6144 bs=1 ; reboot ; ",
      "init": "init.tf700t.rc",
      "name": "Asus Transformer Pad Infinity",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p4 bs=4096 ; ",
      "touch_version": "6.0.3.1",
      "lunch": "cm_tf700t-userdebug"
    },
    {
      "version": "6.0.3.8",
      "key": "manta",
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
      "init": "init.manta.rc",
      "name": "Google Nexus 10",
      "flash_recovery": "dd if=%s of=/dev/block/platform/dw_mmc.0/by-name/recovery bs=4096 ; ",
      "touch_version": "6.0.3.8",
      "lunch": "cm_manta-userdebug"
    },
    {
      "version": "6.0.3.8",
      "key": "mako",
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
      "init": "init.mako.rc",
      "name": "Google Nexus 4",
      "flash_recovery": "dd if=%s of=/dev/block/platform/msm_sdcc.1/by-name/recovery bs=4096 ; ",
      "touch_version": "6.0.3.8",
      "lunch": "cm_mako-userdebug"
    },
    {
      "version": "6.0.3.1",
      "key": "dlx",
      "legacy_versions": [
        "6.0.1.5",
        "6.0.1.9",
        "6.0.2.3",
        "6.0.2.7",
        "6.0.2.8",
        "6.0.3.0"
      ],
      "init": "init.debug_mfgkernel.rc",
      "name": "HTC Droid DNA",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p20 bs=4096 ; ",
      "touch_version": "6.0.3.1",
      "lunch": "cm_dlx-userdebug"
    },
    {
      "version": "6.0.3.6",
      "key": "n7100",
      "legacy_versions": [
        "6.0.1.9",
        "6.0.3.0",
        "6.0.3.1"
      ],
      "init": "init.smdk4x12.rc",
      "name": "Samsung Galaxy Note 2 (HSPA+)",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p9 bs=4096 ; ",
      "touch_version": "6.0.3.6",
      "lunch": "cm_n7100-userdebug"
    },
    {
      "version": "6.0.3.1",
      "key": "a700",
      "legacy_versions": [
        "6.0.2.3"
      ],
      "init": "init.picasso_mf.rc",
      "name": "Acer A700",
      "flash_recovery": "dd if=%s of=/dev/block/platform/sdhci-tegra.3/by-name/SOS bs=4096 ; ",
      "touch_version": "6.0.3.1",
      "lunch": "cm_a700-userdebug"
    },
    {
      "version": "6.0.3.6",
      "key": "tilapia",
      "legacy_versions": [
        "6.0.2.3",
        "6.0.3.1",
        "6.0.3.5"
      ],
      "init": "init.tilapia.rc",
      "name": "Google Nexus 7 (GSM)",
      "flash_recovery": "dd if=%s of=/dev/block/platform/sdhci-tegra.3/by-name/SOS bs=4096 ; ",
      "touch_version": "6.0.3.6",
      "lunch": "cm_tilapia-userdebug"
    },
    {
      "version": "6.0.3.6",
      "key": "t0lte",
      "legacy_versions": [
        "6.0.2.3",
        "6.0.2.4",
        "6.0.2.5",
        "6.0.2.8",
        "6.0.3.0",
        "6.0.3.1",
        "6.0.3.2"
      ],
      "init": "init.t0lte.rc",
      "name": "Samsung Galaxy Note 2 (LTE)",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p9 bs=4096 ; ",
      "touch_version": "6.0.3.6",
      "lunch": "cm_t0lte-userdebug"
    },
    {
      "inits": [
        "init.lgep720board.rc",
        "/bootimages/battery_charging_01.rle"
      ],
      "version": "6.0.2.3",
      "key": "p720",
      "legacy_versions": [

      ],
      "reboot_recovery": "echo '518 R 1' > /sys/kernel/kobject_lge_nvdata/dynamic_nvdata_raw_write ; reboot ; ",
      "name": "LG Optimus 3DMax",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p6 ; ",
      "touch_version": "6.0.2.3",
      "lunch": "cm_p720-userdebug"
    },
    {
      "version": "6.0.3.8",
      "key": "d2cri",
      "legacy_versions": [
        "6.0.2.7",
        "6.0.2.8",
        "6.0.2.9",
        "6.0.3.0",
        "6.0.3.1",
        "6.0.3.6",
        "6.0.3.7"
      ],
      "init": "init.d2cri.rc",
      "name": "Samsung Galaxy S3 (Cricket)",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p18 bs=4096 ; ",
      "touch_version": "6.0.3.8",
      "lunch": "cm_d2cri-userdebug"
    },
    {
      "version": "6.0.2.7",
      "key": "runnymede",
      "legacy_versions": [

      ],
      "init": "init.runnymede.rc",
      "name": "HTC Sensation XL",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p21 bs=4096 ; ",
      "touch_version": "6.0.2.7",
      "lunch": "cm_runnymede-userdebug"
    },
    {
      "version": "6.0.2.7",
      "key": "presto",
      "legacy_versions": [

      ],
      "init": "init.presto.rc",
      "name": "Pantech Presto",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p18 bs=4096 ; ",
      "touch_version": "6.0.2.7",
      "lunch": "cm_presto-userdebug"
    },
    {
      "version": "6.0.2.7",
      "key": "warp2",
      "legacy_versions": [

      ],
      "init": "init.warp2.rc",
      "name": "ZTE Sequent",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p13 bs=4096 ; ",
      "touch_version": "6.0.2.7",
      "lunch": "cm_warp2-userdebug"
    },
    {
      "version": "6.0.3.1",
      "key": "steelhead",
      "legacy_versions": [
        "6.0.2.7"
      ],
      "init": "init.steelhead.rc",
      "name": "Google Nexus Q",
      "flash_recovery": "dd if=%s of=/dev/block/platform/omap/omap_hsmmc.0/by-name/recovery bs=4096 ; ",
      "lunch": "cm_steelhead-userdebug"
    },
    {
      "inits": [
        "init.carrier.rc",
        "init.prevail2spr.rc"
      ],
      "version": "6.0.2.7",
      "key": "prevail2spr",
      "legacy_versions": [

      ],
      "name": "Samsung Prevail 2 (Boost Mobile)",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p15 bs=4096 ; ",
      "touch_version": "6.0.2.7",
      "lunch": "cm_prevail2spr-userdebug"
    },
    {
      "version": "6.0.2.7",
      "key": "golden",
      "legacy_versions": [

      ],
      "init": "init.golden.rc",
      "name": "Samsung Galaxy S3 Mini",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p21 bs=4096 ; ",
      "touch_version": "6.0.2.7",
      "lunch": "cm_golden-userdebug"
    },
    {
      "version": "6.0.3.3",
      "key": "fireball",
      "legacy_versions": [
        "6.0.2.8",
        "6.0.2.9",
        "6.0.3.1"
      ],
      "init": "init.fireball.rc",
      "name": "HTC Droid Incredible 4G LTE",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p22 bs=4096 ; ",
      "touch_version": "6.0.3.3",
      "lunch": "cm_fireball-userdebug"
    },
    {
      "version": "6.0.2.8",
      "key": "puccinilte",
      "legacy_versions": [

      ],
      "init": "init.puccinilte.rc",
      "name": "HTC Jetstream",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p23 bs=4096 ; ",
      "touch_version": "6.0.2.8",
      "lunch": "cm_puccinilte-userdebug"
    },
    {
      "version": "6.0.2.8",
      "key": "p700",
      "legacy_versions": [

      ],
      "init": "init.u0.rc",
      "name": "LG Optimus L7",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p17 bs=4096 ; ",
      "touch_version": "6.0.2.8",
      "lunch": "cm_p700-userdebug"
    },
    {
      "version": "6.0.3.1",
      "key": "m7",
      "legacy_versions": [
        "6.0.2.8",
        "6.0.3.0"
      ],
      "init": "init.m7.rc",
      "name": "HTC One",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p34 bs=4096 ; ",
      "touch_version": "6.0.3.1",
      "lunch": "cm_m7-userdebug"
    },
    {
      "version": "6.0.3.1",
      "key": "dlxu",
      "legacy_versions": [
        "6.0.2.8",
        "6.0.3.0"
      ],
      "init": "init.dlxu.rc",
      "name": "HTC Butterfly (dlxu)",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p20 bs=4096 ; ",
      "touch_version": "6.0.3.1",
      "lunch": "cm_dlxu-userdebug"
    },
    {
      "version": "6.0.3.1",
      "key": "dlxub1",
      "legacy_versions": [
        "6.0.2.8",
        "6.0.3.0"
      ],
      "init": "init.dlxub1.rc",
      "name": "HTC Butterfly (dlxub1)",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p20 bs=4096 ; ",
      "touch_version": "6.0.3.1",
      "lunch": "cm_dlxub1-userdebug"
    },
    {
      "version": "6.0.3.1",
      "key": "dlxj",
      "legacy_versions": [
        "6.0.2.8",
        "6.0.3.0"
      ],
      "init": "init.dlxj.rc",
      "name": "HTC Butterfly J",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p20 bs=4096 ; ",
      "touch_version": "6.0.3.1",
      "lunch": "cm_dlxj-userdebug"
    },
    {
      "version": "6.0.2.8",
      "key": "e610",
      "legacy_versions": [

      ],
      "init": "init.m4.rc",
      "name": "LG Optimus L5",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p17 bs=4096 ; ",
      "lunch": "cm_e610-userdebug"
    },
    {
      "version": "6.0.3.1",
      "key": "evita",
      "legacy_versions": [
        "6.0.2.8"
      ],
      "init": "init.evita.rc",
      "name": "HTC One X (AT&T)",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p22 bs=4096 ; ",
      "touch_version": "6.0.3.1",
      "lunch": "cm_evita-userdebug"
    },
    {
      "version": "6.0.3.1",
      "key": "p4",
      "legacy_versions": [
        "6.0.2.9",
        "6.0.3.0"
      ],
      "ro.product.devices": [
        "p4",
        "GT-P7500",
        "p7500"
      ],
      "init": "init.p4.rc",
      "name": "Samsung Galaxy Tab 10.1",
      "flash_recovery": "dd if=%s of=/dev/block/platform/sdhci-tegra.3/by-num/p2 bs=4096 ; ",
      "touch_version": "6.0.3.1",
      "lunch": "cm_p4-userdebug"
    },
    {
      "version": "6.0.3.1",
      "key": "p4tmo",
      "legacy_versions": [
        "6.0.2.9",
        "6.0.3.0"
      ],
      "init": "init.p4tmo.rc",
      "name": "Samsung Galaxy Tab 10.1 (T-Mobile)",
      "flash_recovery": "dd if=%s of=/dev/block/platform/sdhci-tegra.3/by-num/p2 bs=4096 ; ",
      "touch_version": "6.0.3.1",
      "lunch": "cm_p4tmo-userdebug"
    },
    {
      "version": "6.0.3.1",
      "key": "p4vzw",
      "legacy_versions": [
        "6.0.2.9",
        "6.0.3.0"
      ],
      "init": "init.p4vzw.rc",
      "name": "Samsung Galaxy Tab 10.1 (Verizon)",
      "flash_recovery": "dd if=%s of=/dev/block/platform/sdhci-tegra.3/by-num/p2 bs=4096 ; ",
      "touch_version": "6.0.3.1",
      "lunch": "cm_p4vzw-userdebug"
    },
    {
      "version": "6.0.3.1",
      "key": "p760",
      "legacy_versions": [
        "6.0.2.9"
      ],
      "init": "init.u0.rc",
      "name": "LG Optimus L9",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p4 bs=4096 ; ",
      "touch_version": "6.0.3.1",
      "lunch": "cm_p760-userdebug"
    },
    {
      "version": "6.0.3.6",
      "key": "i9305",
      "legacy_versions": [
        "6.0.2.9",
        "6.0.3.1",
        "6.0.3.2"
      ],
      "init": "ueventd.smdk4x12.rc",
      "name": "Samsung Galaxy S3 LTE (GT-I9305)",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p9 bs=4096 ; ",
      "touch_version": "6.0.3.6",
      "lunch": "cm_i9305-userdebug"
    },
    {
      "version": "6.0.3.1",
      "key": "p3",
      "legacy_versions": [
        "6.0.2.9"
      ],
      "init": "init.p3.rc",
      "name": "Samsung Galaxy Tab 10.1v",
      "flash_recovery": "dd if=%s of=/dev/block/platform/sdhci-tegra.3/by-num/p2 bs=4096 ; ",
      "touch_version": "6.0.3.1",
      "lunch": "cm_p3-userdebug"
    },
    {
      "version": "6.0.3.6",
      "key": "n8013",
      "legacy_versions": [
        "6.0.3.0",
        "6.0.3.1"
      ],
      "init": "init.n8013.rc",
      "name": "Samsung Galaxy Note 10.1",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p6 bs=4096 ; ",
      "touch_version": "6.0.3.6",
      "lunch": "cm_n8013-userdebug"
    },
    {
      "version": "6.0.3.0",
      "key": "i605",
      "legacy_versions": [

      ],
      "ro.product.devices": [
        "i605",
        "t0ltevzw"
      ],
      "init": "init.i605.rc",
      "name": "Samsung Galaxy Note 2 (Verizon)",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p9 bs=4096 ; ",
      "touch_version": "6.0.3.0",
      "lunch": "cm_i605-userdebug"
    },
    {
      "version": "6.0.3.1",
      "key": "l900",
      "legacy_versions": [
        "6.0.3.0"
      ],
      "ro.product.devices": [
        "l900",
        "t0ltespr"
      ],
      "init": "init.l900.rc",
      "name": "Samsung Galaxy Note 2 (Sprint)",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p9 bs=4096 ; ",
      "touch_version": "6.0.3.1",
      "lunch": "cm_l900-userdebug"
    },
    {
      "version": "6.0.3.6",
      "key": "t0lteatt",
      "legacy_versions": [
        "6.0.3.0",
        "6.0.3.1"
      ],
      "init": "init.t0lteatt.rc",
      "name": "Samsung Galaxy Note 2 (AT&T)",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p9 bs=4096 ; ",
      "touch_version": "6.0.3.6",
      "lunch": "cm_t0lteatt-userdebug"
    },
    {
      "version": "6.0.3.7",
      "key": "t0ltetmo",
      "legacy_versions": [
        "6.0.3.0",
        "6.0.3.1",
        "6.0.3.6"
      ],
      "init": "init.t0ltetmo.rc",
      "name": "Samsung Galaxy Note 2 (T-Mobile)",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p9 bs=4096 ; ",
      "touch_version": "6.0.3.7",
      "lunch": "cm_t0ltetmo-userdebug"
    },
    {
      "version": "6.0.3.0",
      "key": "e975",
      "legacy_versions": [

      ],
      "init": "init.geehrc.rc",
      "name": "LG Optimus G Intl (E975)",
      "flash_recovery": "dd if=%s of=/dev/block/platform/msm_sdcc.1/by-name/recovery bs=4096 ; ",
      "touch_version": "6.0.3.0",
      "lunch": "cm_e975-userdebug"
    },
    {
      "version": "6.0.3.1",
      "key": "p880",
      "legacy_versions": [

      ],
      "reboot_recovery": "echo 'boot-recovery' | dd of=/dev/block/mmcblk0p5 bs=1 count=13 ; reboot ; ",
      "init": "init.x3.rc",
      "name": "LG Optimus 4X HD",
      "flash_recovery": "dd if=%s of=/dev/block/platform/sdhci-tegra.3/by-name/SOS bs=4096 ; ",
      "touch_version": "6.0.3.1",
      "lunch": "cm_p880-userdebug"
    },
    {
      "version": "6.0.3.6",
      "key": "quincytmo",
      "legacy_versions": [
        "6.0.3.1"
      ],
      "init": "init.quincytmo.rc",
      "name": "Samsung Galaxy Note (T-Mobile)",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p22 bs=4096 ; ",
      "touch_version": "6.0.3.6",
      "lunch": "cm_quincytmo-userdebug"
    },
    {
      "version": "6.0.3.6",
      "key": "n8000",
      "legacy_versions": [
        "6.0.3.1"
      ],
      "init": "init.n8000.rc",
      "name": "Samsung Galaxy Note 10.1 (GSM)",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p6 bs=4096 ; ",
      "touch_version": "6.0.3.6",
      "lunch": "cm_n8000-userdebug"
    },
    {
      "version": "6.0.3.1",
      "key": "find5",
      "legacy_versions": [

      ],
      "init": "init.find5.rc",
      "name": "Oppo Find5",
      "flash_recovery": "dd if=%s of=/dev/block/platform/msm_sdcc.1/by-name/recovery bs=4096 ; ",
      "touch_version": "6.0.3.1",
      "lunch": "cm_find5-userdebug"
    },
    {
      "version": "6.0.3.6",
      "key": "jfltetmo",
      "legacy_versions": [
        "6.0.3.2"
      ],
      "ro.product.devices": [
        "jfltetmo",
        "jflteMetroPCS"
      ],
      "init": "init.jfltetmo.rc",
      "name": "Samsung Galaxy S4 (T-Mobile)",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p21 bs=4096 ; ",
      "touch_version": "6.0.3.6",
      "lunch": "cm_jfltetmo-userdebug"
    },
    {
      "version": "6.0.3.6",
      "key": "jfltecan",
      "legacy_versions": [
        "6.0.3.2"
      ],
      "init": "init.jfltecan.rc",
      "name": "Samsung Galaxy S4 (Canada/Bell)",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p21 bs=4096 ; ",
      "touch_version": "6.0.3.6",
      "lunch": "cm_jfltecan-userdebug"
    },
    {
      "version": "6.0.3.2",
      "key": "V8000",
      "legacy_versions": [

      ],
      "init": "init.zte.rc",
      "name": "ZTE Engage",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p17 bs=4096 ; ",
      "lunch": "cm_V8000-userdebug"
    },
    {
      "version": "6.0.3.2",
      "key": "i9500",
      "legacy_versions": [

      ],
      "init": "init.i9500.rc",
      "name": "Samsung Galaxy S4 (i9500)",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p10 bs=4096 ; ",
      "touch_version": "6.0.3.2",
      "lunch": "cm_i9500-userdebug"
    },
    {
      "version": "6.0.3.2",
      "key": "everest",
      "legacy_versions": [

      ],
      "init": "init.everest.rc",
      "name": "Motorola Xoom (GSM)",
      "flash_recovery": "dd if=%s of=/dev/block/platform/sdhci-tegra.3/by-name/recovery bs=4096 ; ",
      "touch_version": "6.0.3.2",
      "lunch": "cm_everest-userdebug"
    },
    {
      "version": "6.0.3.2",
      "key": "protou",
      "legacy_versions": [

      ],
      "init": "init.protou.rc",
      "name": "HTC Desire X",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p21 bs=4096 ; ",
      "touch_version": "6.0.3.2",
      "lunch": "cm_protou-userdebug"
    },
    {
      "version": "6.0.3.6",
      "key": "m7spr",
      "legacy_versions": [
        "6.0.3.2"
      ],
      "ro.product.devices": [
        "m7spr",
        "m7wls"
      ],
      "init": "init.m7spr.rc",
      "name": "HTC One (Sprint)",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p36 bs=4096 ; ",
      "touch_version": "6.0.3.6",
      "lunch": "cm_m7spr-userdebug"
    },
    {
      "version": "6.0.3.6",
      "key": "m7tmo",
      "legacy_versions": [
        "6.0.3.2"
      ],
      "init": "init.m7tmo.rc",
      "name": "HTC One (T-Mobile)",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p34 bs=4096 ; ",
      "touch_version": "6.0.3.6",
      "lunch": "cm_m7tmo-userdebug"
    },
    {
      "version": "6.0.3.6",
      "key": "m7att",
      "legacy_versions": [
        "6.0.3.2",
        "6.0.3.5"
      ],
      "init": "init.m7att.rc",
      "name": "HTC One (AT&T)",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p34 bs=4096 ; ",
      "touch_version": "6.0.3.6",
      "lunch": "cm_m7att-userdebug"
    },
    {
      "version": "6.0.3.6",
      "key": "jflteatt",
      "legacy_versions": [
        "6.0.3.2"
      ],
      "init": "init.jflteatt.rc",
      "name": "Samsung Galaxy S4 (AT&T)",
      "flash_recovery": "dd if=/dev/block/platform/msm_sdcc.1/by-name/aboot of=/sdcard/clockworkmod/aboot.img; /data/data/com.koushikdutta.rommanager/files/loki_patch recovery /sdcard/clockworkmod/aboot.img %s /sdcard/clockworkmod/recovery.lok ; /data/data/com.koushikdutta.rommanager/files/loki_flash recovery /sdcard/clockworkmod/recovery.lok ; ",
      "touch_version": "6.0.3.6",
      "lunch": "cm_jflteatt-userdebug"
    },
    {
      "version": "6.0.3.6",
      "key": "m7ul",
      "legacy_versions": [
        "6.0.3.2"
      ],
      "init": "init.m7ul.rc",
      "name": "HTC One (non-US GSM)",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p34 bs=4096 ; ",
      "touch_version": "6.0.3.6",
      "lunch": "cm_m7ul-userdebug"
    },
    {
      "version": "6.0.3.6",
      "key": "jfltevzw",
      "legacy_versions": [
        "6.0.3.2"
      ],
      "init": "init.jfltevzw.rc",
      "name": "Samsung Galaxy S4 (Verizon)",
      "flash_recovery": "dd if=/dev/block/platform/msm_sdcc.1/by-name/aboot of=/sdcard/clockworkmod/aboot.img; /data/data/com.koushikdutta.rommanager/files/loki_patch recovery /sdcard/clockworkmod/aboot.img %s /sdcard/clockworkmod/recovery.lok ; /data/data/com.koushikdutta.rommanager/files/loki_flash recovery /sdcard/clockworkmod/recovery.lok ; ",
      "touch_version": "6.0.3.6",
      "lunch": "cm_jfltevzw-userdebug"
    },
    {
      "version": "6.0.3.6",
      "key": "jfltespr",
      "legacy_versions": [
        "6.0.3.2"
      ],
      "init": "init.jfltespr.rc",
      "name": "Samsung Galaxy S4 (Sprint)",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p21 bs=4096 ; ",
      "touch_version": "6.0.3.6",
      "lunch": "cm_jfltespr-userdebug"
    },
    {
      "version": "6.0.3.2",
      "key": "jflteusc",
      "legacy_versions": [

      ],
      "init": "init.jflteusc.rc",
      "name": "Samsung Galaxy S4 (US Cellular)",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p21 bs=4096 ; ",
      "touch_version": "6.0.3.2",
      "lunch": "cm_jflteusc-userdebug"
    },
    {
      "version": "6.0.3.6",
      "key": "jfltexx",
      "legacy_versions": [
        "6.0.3.2",
        "6.0.3.3",
        "6.0.3.5"
      ],
      "init": "init.jfltexx.rc",
      "name": "Samsung Galaxy S4 (i9505)",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p21 bs=4096 ; ",
      "touch_version": "6.0.3.6",
      "lunch": "cm_jfltexx-userdebug"
    },
    {
      "version": "6.0.3.6",
      "key": "jfltecri",
      "legacy_versions": [
        "6.0.3.2"
      ],
      "init": "init.jfltecri.rc",
      "name": "Samsung Galaxy S4 (Cricket)",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p21 bs=4096 ; ",
      "touch_version": "6.0.3.6",
      "lunch": "cm_jfltecri-userdebug"
    },
    {
      "version": "6.0.3.3",
      "key": "lgl55c",
      "legacy_versions": [

      ],
      "init": "init.gelato.rc",
      "name": "LG Optimus Q (LGL55C Tracfone)",
      "flash_recovery": "dd if=%s of=/dev/block/mtdblock2 bs=4096 ; ",
      "lunch": "cm_lgl55c-userdebug"
    },
    {
      "version": "6.0.3.6",
      "key": "jfltecsp",
      "legacy_versions": [
        "6.0.3.5"
      ],
      "init": "init.jfltecsp.rc",
      "name": "Samsung Galaxy S4 (C Spire)",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p21 bs=4096 ; ",
      "touch_version": "6.0.3.6",
      "lunch": "cm_jfltecsp-userdebug"
    },
    {
      "version": "6.0.3.5",
      "key": "m660",
      "legacy_versions": [

      ],
      "init": "init.highmem.rc",
      "name": "Huawei Ascend Q",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p16 ; ",
      "lunch": "cm_m660-userdebug"
    },
    {
      "version": "6.0.3.7",
      "key": "flo",
      "legacy_versions": [

      ],
      "init": "init.flo.rc",
      "name": "Google Nexus 7 (2013)",
      "flash_recovery": "dd if=%s of=/dev/block/platform/msm_sdcc.1/by-name/recovery bs=4096 ; ",
      "touch_version": "6.0.3.7",
      "lunch": "cm_flo-userdebug"
    },
    {
      "version": "6.0.3.8",
      "key": "apexqtmo",
      "legacy_versions": [

      ],
      "init": "init.apexqtmo.rc",
      "name": "Samsung SGH-T699",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p18 bs=4096 ; ",
      "touch_version": "6.0.3.8",
      "lunch": "cm_apexqtmo-userdebug"
    }
  ],
  "recovery_twrp_url": "http://download2.clockworkmod.com/twrp/openrecovery-twrp-%s-%s.img",
  "manifest_signature": "O8+Kc2mdQz0e/AjCQn6Rw6fK5Kr5LZItJ474Ua3gF2o4IgdCQZXIbwCHIo6xeqY3pVEGtjYmmyO1PkRYcGqq2rB2wQM8SoKFl/70vG0ihEZ5TDeruKUgxVVSNM3e09kBvCxYK89GWqVWkNHtvTu1T1F9w6FilzCsNFSAXHD0Bos=",
  "recovery_zip_url": "http://download2.clockworkmod.com/recoveries/recovery-clockwork-%s-%s.zip"
}