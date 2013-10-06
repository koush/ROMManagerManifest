{
  "version": "2.5.0.1",
  "owners": {
    "attn1.repo@gmail.com": true,
    "bigbeeshane@gmail.com": true,
    "cvpcsm@gmail.com": true,
    "njgreb@gmail.com": true,
    "utkanos@gmail.com": true,
    "keaneyw@gmail.com": true,
    "playfulgod@gmail.com": true,
    "layhertony@gmail.com": true,
    "echen@cyngn.com": true,
    "daniel.hillenbrand@codeworkx.de": true,
    "arcee@cyanogenmod.com": true,
    "ferguson.david@gmail.com": true,
    "koush@clockworkmod.com": true
  },
  "ad_network": "admob",
  "manifest": "http://developer.clockworkmod.com/merge",
  "devices": [
    {
      "version": "2.5.0.1",
      "key": "sholes",
      "name": "Motorola Droid",
      "legacy_versions": [
        "3.1.0.2",
        "2.5.1.4",
        "2.5.1.3",
        "2.5.1.1",
        "2.5.0.1"
      ],
      "init": "init.sholes.rc",
      "alternate_recovery": {
        "name": "SPRecovery 0.99.3b",
        "clockwork": false,
        "url": "http://koush.kanged.net/cm/recoveries/sprecovery.img"
      }
    },
    {
      "version": "2.5.0.7",
      "key": "sapphire",
      "name": "HTC MyTouch 3G",
      "legacy_versions": [
        "2.5.0.7",
        "2.5.1.4",
        "2.5.1.3",
        "2.5.1.1"
      ],
      "init": "init.sapphire.rc",
      "alternate_recovery": {
        "name": "RA Recovery v1.7.0G",
        "clockwork": false,
        "url": "http://files.androidspin.com/downloads.php?dir=amon_ra/RECOVERY/&file=recovery-RA-sapphire-v1.7.0G.img"
      }
    },
    {
      "version": "2.5.0.7",
      "key": "magic",
      "name": "HTC Magic",
      "legacy_versions": [
        "2.5.0.7",
        "2.5.1.4",
        "2.5.1.3",
        "2.5.1.1"
      ],
      "init": "init.sapphire.rc",
      "alternate_recovery": {
        "name": "RA Recovery v1.7.0H",
        "clockwork": false,
        "url": "http://files.androidspin.com/downloads.php?dir=amon_ra/RECOVERY/&file=recovery-RA-sapphire-v1.7.0H.img"
      }
    },
    {
      "version": "2.5.0.7",
      "key": "dream",
      "name": "HTC G1/Dream",
      "legacy_versions": [
        "2.5.0.7",
        "2.5.1.4",
        "2.5.1.3",
        "2.5.1.1"
      ],
      "init": "init.trout.rc",
      "alternate_recovery": {
        "name": "RA Recovery v1.7.0",
        "clockwork": false,
        "url": "http://files.androidspin.com/downloads.php?dir=amon_ra/RECOVERY/&file=recovery-RA-dream-v1.7.0.img"
      }
    },
    {
      "version": "5.0.2.0",
      "lunch": "cyanogen_passion-eng",
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
      "init": "init.mahimahi.rc",
      "alternate_recovery": {
        "name": "RA Recovery v2.2.1",
        "clockwork": false,
        "url": "http://files.androidspin.com/downloads.php?dir=amon_ra/RECOVERY/&file=recovery-RA-passion-v2.2.1.img"
      }
    },
    {
      "version": "2.5.0.7",
      "key": "hero",
      "name": "HTC Hero (GSM)",
      "legacy_versions": [
        "2.5.0.7",
        "2.5.1.4",
        "2.5.1.3",
        "2.5.1.1"
      ],
      "init": "init.hero.rc",
      "alternate_recovery": {
        "name": "RA Recovery v1.7.0.1",
        "clockwork": false,
        "url": "http://files.androidspin.com/downloads.php?dir=amon_ra/RECOVERY/&file=recovery-RA-hero-v1.7.0.1.img"
      }
    },
    {
      "version": "2.5.0.7",
      "key": "heroc",
      "name": "HTC Hero (CDMA)",
      "legacy_versions": [
        "2.5.0.7",
        "2.5.1.4",
        "2.5.1.3",
        "2.5.1.1"
      ],
      "init": "init.heroc.rc",
      "alternate_recovery": {
        "name": "RA Recovery v1.6.2",
        "clockwork": false,
        "url": "http://www.androidspin.com/downloads.php?dir=amon_ra/RECOVERY/&file=recovery-RA-heroc-v1.6.2.img"
      }
    },
    {
      "version": "5.0.2.2",
      "touch_version": "5.8.0.1",
      "lunch": "cyanogen_supersonic-eng",
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
      "init": "init.supersonic.rc",
      "alternate_recovery": {
        "name": "RA Recovery v2.3",
        "clockwork": false,
        "url": "http://files.androidspin.com/downloads.php?dir=amon_ra/RECOVERY/&file=recovery-RA-supersonic-v2.3.img"
      }
    },
    {
      "version": "5.0.2.0",
      "lunch": "cyanogen_legend-eng",
      "key": "legend",
      "name": "HTC Legend",
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
      "init": "init.legend.rc"
    },
    {
      "version": "5.0.2.0",
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
      "init": "init.bravo.rc"
    },
    {
      "version": "5.0.2.0",
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
      "init": "init.bravoc.rc"
    },
    {
      "version": "2.5.0.7",
      "key": "pulsemini",
      "name": "Huawei Pulse Mini",
      "legacy_versions": [
        "2.5.0.7",
        "2.5.1.4",
        "2.5.1.3",
        "2.5.1.1"
      ],
      "init": "init.qcom.rc"
    },
    {
      "version": "5.0.2.0",
      "lunch": "cyanogen_inc-eng",
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
      "init": "init.inc.rc",
      "alternate_recovery": {
        "name": "RA_GNM Recovery v3.02",
        "clockwork": false,
        "url": "http://dl.dropbox.com/u/12949506/RomManager/recovery-RA-inc-3.02.img"
      }
    },
    {
      "version": "2.5.0.7",
      "key": "liberty",
      "name": "HTC Aria",
      "readonly_recovery": true,
      "legacy_versions": [
        "2.5.0.7",
        "2.5.1.4",
        "2.5.1.3",
        "2.5.1.1"
      ],
      "init": "init.liberty.rc"
    },
    {
      "version": "2.5.0.7",
      "key": "desirec",
      "name": "Motorola Droid Eris",
      "readonly_recovery": true,
      "legacy_versions": [
        "2.5.0.7",
        "2.5.1.4",
        "2.5.1.3",
        "2.5.1.1"
      ],
      "init": "init.desirec.rc",
      "alternate_recovery": {
        "name": "RA Recovery v1.6.2",
        "clockwork": false,
        "url": "http://www.androidspin.com/downloads.php?dir=amon_ra/RECOVERY/&file=recovery-RA-eris-v1.6.2.img"
      }
    },
    {
      "version": "5.0.2.0",
      "lunch": "cyanogen_buzz-eng",
      "key": "buzz",
      "name": "HTC Buzz (Wildfire)",
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
      "init": "init.buzz.rc"
    },
    {
      "version": "2.5.0.7",
      "key": "streak",
      "name": "Dell Streak",
      "legacy_versions": [
        "2.5.0.7",
        "2.5.1.4",
        "2.5.1.3",
        "2.5.1.1"
      ],
      "init": "init.qcom.rc"
    },
    {
      "version": "2.5.0.7",
      "key": "espresso",
      "name": "HTC MyTouch Slide",
      "readonly_recovery": true,
      "legacy_versions": [
        "2.5.0.7",
        "2.5.1.4",
        "2.5.1.3",
        "2.5.1.1"
      ],
      "init": "init.latte.rc"
    },
    {
      "version": "2.5.1.2",
      "key": "galaxys",
      "name": "Samsung GalaxyS i9000",
      "readonly_recovery": true,
      "legacy_versions": [
        "2.5.1.2",
        "2.5.1.4",
        "2.5.1.3",
        "2.5.1.1"
      ],
      "init": "lpm.rc"
    },
    {
      "version": "3.0.0.8",
      "key": "fascinate",
      "name": "Samsung GalaxyS Fascinate",
      "readonly_recovery": true,
      "legacy_versions": [
        "3.0.0.8",
        "2.5.1.4",
        "2.5.1.3",
        "2.5.1.1"
      ],
      "init": "init.smdkc110.rc"
    },
    {
      "version": "2.5.1.2",
      "key": "vibrant",
      "name": "Samsung GalaxyS Vibrant",
      "readonly_recovery": true,
      "legacy_versions": [
        "2.5.1.2",
        "2.5.1.4",
        "2.5.1.3",
        "2.5.1.1"
      ],
      "init": "init.smdkc110.rc"
    },
    {
      "version": "2.5.1.2",
      "key": "captivate",
      "name": "Samsung GalaxyS Captivate",
      "readonly_recovery": true,
      "legacy_versions": [
        "2.5.1.2",
        "2.5.1.4",
        "2.5.1.3",
        "2.5.1.1"
      ],
      "init": "init.smdkc110.rc"
    },
    {
      "version": "2.5.0.7",
      "key": "pulse",
      "name": "Huawei Pulse",
      "legacy_versions": [
        "2.5.0.7",
        "2.5.1.4",
        "2.5.1.3",
        "2.5.1.1"
      ],
      "init": "init.qcom.rc"
    },
    {
      "version": "2.5.0.7",
      "key": "aloha",
      "name": "LG Ally",
      "legacy_versions": [
        "2.5.0.7",
        "2.5.1.4",
        "2.5.1.3",
        "2.5.1.1"
      ],
      "init": "init.aloha.rc",
      "alternate_recovery": {
        "name": "RA_GNM Recovery v2.2.2",
        "clockwork": false,
        "url": "http://dl.dropbox.com/u/12949506/RomManager/recovery-RA-aloha-2.2.2-GNM.img"
      }
    },
    {
      "version": "3.1.0.2",
      "key": "milestone",
      "name": "Motorola Milestone",
      "readonly_recovery": true,
      "legacy_versions": [
        "2.5.0.7",
        "2.5.1.4",
        "2.5.1.3",
        "2.5.1.1",
        "2.5.0.7"
      ],
      "init": "init.mapphone_cdma.rc"
    },
    {
      "version": "5.0.2.0",
      "key": "droidx",
      "name": "Motorola Droid X",
      "reboot_recovery": "rm /cache/recovery/command ; echo 1 > /data/.recovery_mode ; sync ; reboot ;",
      "flash_recovery": "dd if=%s of=/preinstall/recovery/recovery.zip ; ",
      "readonly_recovery": true,
      "legacy_versions": [
        "2.5.0.7"
      ],
      "init": "init.mapphone_cdma.rc"
    },
    {
      "version": "5.0.2.0",
      "lunch": "cyanogen_shadow-eng",
      "key": "shadow",
      "name": "Motorola Droid X (2nd-init)",
      "reboot_recovery": "rm /cache/recovery/command ; echo 1 > /data/.recovery_mode ; sync ; reboot ;",
      "flash_recovery": "dd if=%s of=/preinstall/recovery/recovery.zip ; ",
      "readonly_recovery": true,
      "legacy_versions": [
        "2.5.0.7"
      ],
      "init": "init.mapphone_cdma.rc"
    },
    {
      "version": "2.5.1.0",
      "key": "salsa",
      "name": "Acer Liquid",
      "legacy_versions": [
        "2.5.1.4",
        "2.5.1.3",
        "2.5.1.1",
        "2.5.1.0"
      ],
      "init": "init.salsa.rc"
    },
    {
      "version": "2.5.1.3",
      "key": "z71",
      "name": "Commtiva Z71 (Boston, Blaze, and more)",
      "legacy_versions": [
        "2.5.1.4",
        "2.5.1.3",
        "2.5.1.1",
        "2.5.1.0"
      ],
      "init": "init.qcom.rc"
    },
    {
      "version": "5.0.2.7",
      "touch_version": "5.8.1.0",
      "lunch": "cyanogen_vision-eng",
      "key": "vision",
      "name": "HTC G2",
      "flash_recovery": "dd if=/dev/zero of=/dev/block/mmcblk0p21 bs=4096 ; dd if=%s of=/dev/block/mmcblk0p21 bs=4096 ; ",
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
      "init": "init.vision.rc"
    },
    {
      "version": "5.0.2.0",
      "touch_version": "5.8.1.0",
      "lunch": "cyanogen_glacier-eng",
      "key": "glacier",
      "name": "HTC MyTouch 4G",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p21 ; ",
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
      "init": "init.glacier.rc"
    },
    {
      "version": "5.0.2.0",
      "touch_version": "5.8.1.5",
      "lunch": "cyanogen_ace-eng",
      "key": "ace",
      "name": "HTC Desire HD",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p21 ; ",
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
      "init": "init.spade.rc"
    },
    {
      "version": "5.0.2.0",
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
      "init": "init.morrison.rc"
    },
    {
      "version": "5.0.2.0",
      "lunch": "cyanogen_droid2-eng",
      "key": "droid2",
      "name": "Motorola Droid 2",
      "reboot_recovery": "rm /cache/recovery/command ; echo 1 > /data/.recovery_mode ; sync ; reboot ;",
      "flash_recovery": "dd if=%s of=/preinstall/recovery/recovery.zip ; ",
      "readonly_recovery": true,
      "legacy_versions": [
        "2.5.0.8"
      ],
      "init": "init.mapphone_cdma.rc"
    },
    {
      "version": "2.5.1.3",
      "key": "one",
      "name": "Geeksphone ONE",
      "legacy_versions": [
        "2.5.1.4",
        "2.5.1.3",
        "2.5.1.1",
        "2.5.1.0"
      ],
      "init": "init.qcom.rc",
      "alternate_recovery": {
        "name": "ONE Recovery v1.6",
        "clockwork": false,
        "url": "http://dl.dropbox.com/u/10355648/recovery-ONE-1_6.img"
      }
    },
    {
      "version": "3.0.2.7",
      "key": "vega",
      "name": "Advent Vega",
      "reboot_recovery": "echo start > /proc/ota ; ",
      "flash_recovery": "/data/data/com.koushikdutta.rommanager/files/tegra_flash_image recovery %s ; ",
      "legacy_versions": [
        "2.5.1.4",
        "2.5.1.3",
        "2.5.1.1",
        "2.5.1.0",
        "2.5.1.4"
      ],
      "init": "init_recovery.rc"
    },
    {
      "version": "2.5.1.8",
      "key": "att_tab",
      "name": "Samsung Galaxy Tab - ATT",
      "readonly_recovery": true,
      "legacy_versions": [
        "2.5.1.8",
        "2.5.1.4",
        "2.5.1.3",
        "2.5.1.1"
      ],
      "init": "init.smdkc110.rc"
    },
    {
      "version": "2.5.1.8",
      "key": "tmobile_tab",
      "name": "Samsung Galaxy Tab (T-Mobile)",
      "readonly_recovery": true,
      "legacy_versions": [
        "2.5.1.8",
        "2.5.1.4",
        "2.5.1.3",
        "2.5.1.1"
      ],
      "init": "init.smdkc110.rc"
    },
    {
      "version": "2.5.1.2",
      "key": "FM6",
      "name": "Commtiva Link N700, Spice MI700, and more",
      "legacy_versions": [
        "2.5.1.4",
        "2.5.1.3",
        "2.5.1.1",
        "2.5.1.0"
      ],
      "init": "init.qcom.rc",
      "alternate_recovery": {
        "name": "MI700 Recovery v1.6",
        "clockwork": false,
        "url": "http://dl.dropbox.com/u/15816725/MI700-recovery-V1_3.img"
      }
    },
    {
      "version": "6.0.4.3",
      "touch_version": "6.0.4.3",
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
        "6.0.3.6",
        "6.0.3.8",
        "6.0.4.1"
      ],
      "init": "init.herring.rc"
    },
    {
      "version": "2.5.0.8",
      "key": "droidpro",
      "name": "Motorola Droid Pro",
      "readonly_recovery": true,
      "legacy_versions": [
        "2.5.0.8"
      ],
      "init": "init. mapphone_cdma.rc"
    },
    {
      "version": "3.0.0.5",
      "key": "ascend",
      "name": "Huawei Ascend",
      "legacy_versions": [
        "3.0.0.5",
        "3.0.0.4"
      ],
      "init": "init.qcom.rc"
    },
    {
      "version": "5.0.2.0",
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
      "init": "init.blade.rc"
    },
    {
      "version": "5.0.2.0",
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
      "init": "init.bahamas.rc"
    },
    {
      "version": "3.0.0.8",
      "key": "a7",
      "name": "Elocity A7",
      "readonly_recovery": true,
      "legacy_versions": [
        "3.0.0.8"
      ],
      "init": "init_recovery.rc"
    },
    {
      "version": "3.0.1.3",
      "key": "zero",
      "name": "Geeksphone Zero",
      "legacy_versions": [
        "3.0.1.3"
      ],
      "init": "init.zero.rc"
    },
    {
      "version": "5.0.2.0",
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
      "init": "init.speedy.rc"
    },
    {
      "key": "captivatemtd",
      "name": "Samsung Captivate (MTD)",
      "reboot_recovery": "echo 1 > /cache/.startrecovery ; sync ; reboot ;",
      "legacy_versions": [

      ],
      "init": "init.aries.rc",
      "officially_supported": false
    },
    {
      "key": "showcasemtd",
      "name": "Samsung Showcase (MTD)",
      "reboot_recovery": "echo 1 > /cache/.startrecovery ; sync ; reboot ;",
      "legacy_versions": [

      ],
      "init": "init.aries.rc",
      "officially_supported": false
    },
    {
      "key": "mesmerizemtd",
      "name": "Samsung Mesmerize (MTD)",
      "reboot_recovery": "echo 1 > /cache/.startrecovery ; sync ; reboot ;",
      "legacy_versions": [

      ],
      "init": "init.aries.rc",
      "officially_supported": false
    },
    {
      "key": "fascinatemtd",
      "name": "Samsung Fascinate (MTD)",
      "reboot_recovery": "echo 1 > /cache/.startrecovery ; sync ; reboot ;",
      "legacy_versions": [

      ],
      "init": "init.aries.rc",
      "officially_supported": false
    },
    {
      "key": "vibrantmtd",
      "name": "Samsung Vibrant (MTD)",
      "reboot_recovery": "echo 1 > /cache/.startrecovery ; sync ; reboot ;",
      "legacy_versions": [

      ],
      "init": "init.aries.rc",
      "officially_supported": false
    },
    {
      "key": "galaxysbmtd",
      "name": "Samsung GalaxyS i9000B (MTD)",
      "reboot_recovery": "echo 1 > /cache/.startrecovery ; sync ; reboot ;",
      "legacy_versions": [

      ],
      "init": "init.aries.rc",
      "officially_supported": false
    },
    {
      "key": "galaxysmtd",
      "name": "Samsung GalaxyS i9000 (MTD)",
      "reboot_recovery": "echo 1 > /cache/.startrecovery ; sync ; reboot ;",
      "legacy_versions": [

      ],
      "init": "init.aries.rc",
      "officially_supported": false
    },
    {
      "version": "5.0.2.7",
      "lunch": "full_epic4g-eng",
      "key": "epic4g",
      "name": "Samsung Epic4G",
      "readonly_recovery": true,
      "legacy_versions": [

      ],
      "init": "lpm.rc"
    },
    {
      "version": "3.0.2.0",
      "key": "streak7",
      "name": "Dell Streak 7",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk3p1 ; ",
      "legacy_versions": [
        "3.0.2.0",
        "3.0.1.9",
        "3.0.1.8",
        "3.0.1.7"
      ],
      "init": "init.tinyandroid.rc"
    },
    {
      "version": "5.0.2.1",
      "touch_version": "5.8.0.2",
      "lunch": "cyanogen_mecha-eng",
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
      "init": "init.mecha.rc",
      "alternate_recovery": {
        "name": "RA_GNM Recovery v3.05",
        "clockwork": false,
        "url": "http://dl.dropbox.com/u/12949506/RomManager/recovery-ra-mecha-3.05.img"
      }
    },
    {
      "version": "3.0.2.4",
      "key": "ideos",
      "name": "Huawei U8150 Ideos",
      "legacy_versions": [
        "3.0.2.4"
      ],
      "init": "init.ideos.rc"
    },
    {
      "version": "6.0.3.1",
      "touch_version": "6.0.3.1",
      "lunch": "cm_stingray-userdebug",
      "key": "stingray",
      "name": "Motorola XOOM",
      "flash_recovery": "dd if=%s of=/dev/block/platform/sdhci-tegra.3/by-name/recovery ; ",
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
      "init": "init.stingray.rc"
    },
    {
      "version": "3.1.0.0",
      "key": "leo",
      "name": "HTC HD2",
      "legacy_versions": [
        "3.0.2.5",
        "3.0.2.4",
        "3.0.2.5"
      ],
      "init": "init.leo.rc"
    },
    {
      "version": "5.0.2.0",
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
      "init": "init.zeppelin.rc"
    },
    {
      "version": "5.0.2.0",
      "touch_version": "5.8.1.5",
      "lunch": "full_saga-eng",
      "key": "saga",
      "name": "HTC Desire S",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p21 ; ",
      "legacy_versions": [
        "3.0.2.6",
        "5.0.1.9"
      ],
      "init": "init.saga.rc"
    },
    {
      "version": "5.0.2.0",
      "lunch": "cyanogen_p999-eng",
      "key": "p999",
      "name": "LG G2X (T-Mobile)",
      "reboot_recovery": "echo 'boot-recovery' | dd of=/dev/block/mmcblk0p3 seek=6144 bs=1 ; reboot ; ",
      "readonly_recovery": true,
      "legacy_versions": [
        "3.0.2.7",
        "5.0.0.8",
        "5.0.1.0",
        "5.0.1.4",
        "5.0.1.6"
      ],
      "init": "init_recovery.rc"
    },
    {
      "version": "6.0.3.1",
      "touch_version": "6.0.3.1",
      "lunch": "cm_p990-userdebug",
      "key": "p990",
      "name": "LG Optimus 2X",
      "reboot_recovery": "echo 'boot-recovery' | dd of=/dev/block/mmcblk0p3 seek=6144 bs=1 ; reboot ; ",
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
      "inits": [
        "init_recovery.rc",
        "/bootimages/opening_01.rle"
      ]
    },
    {
      "version": "6.0.4.3",
      "touch_version": "6.0.4.3",
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
        "6.0.3.6",
        "6.0.3.8",
        "6.0.4.1"
      ],
      "init": "init.herring.rc"
    },
    {
      "version": "5.0.2.0",
      "lunch": "full_thunderg-eng",
      "key": "thunderg",
      "name": "LG Optimus One (old BB)",
      "legacy_versions": [
        "3.1.0.0",
        "5.0.0.8",
        "5.0.1.0"
      ],
      "init": "init.thunderg.rc",
      "alternate_recovery": {
        "name": "RA_GNM Recovery v2.2.1",
        "clockwork": false,
        "url": "http://dl.dropbox.com/u/12949506/RomManager/recovery-RA-thunderg-2.2.1-GNM.img"
      }
    },
    {
      "version": "5.0.2.7",
      "lunch": "cyanogen_p500-eng",
      "key": "p500",
      "name": "LG Optimus One",
      "legacy_versions": [
        "5.0.2.0"
      ],
      "init": "init.thunderg.rc"
    },
    {
      "version": "3.1.0.1",
      "key": "u8220",
      "name": "Huawei U8220/U8230",
      "legacy_versions": [

      ],
      "init": "init.qcom.rc"
    },
    {
      "version": "3.1.0.1",
      "key": "charge",
      "name": "Samsung Charge",
      "readonly_recovery": true,
      "legacy_versions": [

      ],
      "init": "init.smdkc110.rc"
    },
    {
      "key": "umts_jordan",
      "name": "Motorola Defy",
      "legacy_versions": [

      ],
      "init": "init.mapphone_umts.rc",
      "officially_supported": false
    },
    {
      "version": "3.2.0.0",
      "key": "galaxys4g",
      "name": "Samsung Galaxy S 4G",
      "readonly_recovery": true,
      "legacy_versions": [
        "3.2.0.0"
      ],
      "init": "init.smdkc110.rc"
    },
    {
      "version": "4.0.1.5",
      "touch_version": "5.8.1.5",
      "key": "galaxys2",
      "name": "Samsung Galaxy S2",
      "ro.product.device": [
        "i9100",
        "galaxys2"
      ],
      "readonly_recovery": true,
      "legacy_versions": [
        "4.0.1.4",
        "v4.0.1.4"
      ],
      "init": "init.smdkc210.rc",
      "inits": [
        "init.smdkc210.rc",
        "init.smdk4210.rc"
      ]
    },
    {
      "version": "6.0.4.0",
      "touch_version": "6.0.4.0",
      "lunch": "cm_i9100-userdebug",
      "key": "i9100",
      "name": "Samsung Galaxy S2",
      "ro.product.device": [
        "i9100",
        "galaxys2"
      ],
      "legacy_versions": [
        "6.0.1.0"
      ],
      "init": "init.smdk4210.rc",
      "officially_supported": false,
      "inits": [
        "init.smdkc210.rc",
        "init.smdk4210.rc"
      ]
    },
    {
      "version": "6.0.1.2",
      "lunch": "cm_n7000-userdebug",
      "key": "n7000",
      "name": "Samsung Galaxy Note (GT-N7000)",
      "readonly_recovery": true,
      "legacy_versions": [
        "6.0.1.0"
      ],
      "init": "init.smdk4210.rc"
    },
    {
      "version": "4.0.0.2",
      "key": "sidekick4g",
      "name": "Samsung Sidekick 4G",
      "readonly_recovery": true,
      "legacy_versions": [

      ],
      "init": "init.smdkc110.rc"
    },
    {
      "version": "5.0.2.0",
      "lunch": "cyanogen_vivo-eng",
      "key": "vivo",
      "name": "HTC Incredible S",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p21 ; ",
      "legacy_versions": [
        "4.0.0.4",
        "4.0.0.6",
        "4.0.0.7",
        "4.0.0.8",
        "5.0.1.9"
      ],
      "init": "init.vivo.rc"
    },
    {
      "version": "5.0.2.0",
      "lunch": "cyanogen_vivow-eng",
      "key": "vivow",
      "name": "HTC Incredible 2",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p21 ; ",
      "legacy_versions": [
        "4.0.0.4",
        "4.0.0.6",
        "4.0.0.7",
        "4.0.0.8",
        "5.0.1.9"
      ],
      "init": "init.vivow.rc",
      "alternate_recovery": {
        "name": "RA_GNM Recovery v3.05",
        "clockwork": false,
        "url": "http://dl.dropbox.com/u/12949506/RomManager/recovery-ra-vivow-3.05.img"
      }
    },
    {
      "version": "6.0.1.9",
      "touch_version": "6.0.1.9",
      "lunch": "cm_p920-userdebug",
      "key": "p920",
      "name": "LG Optimus 3D",
      "reboot_recovery": "echo '518 R 1' > /sys/kernel/kobject_lge_nvdata/dynamic_nvdata_raw_write ; reboot ; ",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p6 ; ",
      "legacy_versions": [
        "4.0.0.7",
        "4.0.0.9",
        "5.0.1.4",
        "5.0.2.0",
        "5.0.2.7"
      ],
      "inits": [
        "init.p920.rc",
        "/bootimages/opening_01.rle"
      ]
    },
    {
      "version": "4.0.0.9",
      "key": "galaxyace",
      "name": "Samsung Galaxy Ace",
      "flash_recovery": "/data/data/com.koushikdutta.rommanager/files/flash_image recoveryonly %s ; ",
      "legacy_versions": [

      ],
      "init": "init.galaxyace.rc"
    },
    {
      "version": "5.0.2.0",
      "touch_version": "5.8.1.8",
      "lunch": "generic_olympus-eng",
      "key": "olympus",
      "name": "Motorola Atrix 4G",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p10 ; ",
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
      "inits": [
        "init_prep_keypad.sh",
        "init.olympus.rc"
      ]
    },
    {
      "version": "4.0.1.5",
      "key": "smb_a1002",
      "name": "Viewsonic GTablet (smb_a1002)",
      "flash_recovery": "/data/data/com.koushikdutta.rommanager/files/tegra_flash_image recovery %s ; ",
      "legacy_versions": [

      ],
      "init": "init_recovery.rc"
    },
    {
      "version": "5.0.2.0",
      "touch_version": "5.8.0.2",
      "lunch": "htc_shooter-eng",
      "key": "shooter",
      "name": "HTC EVO 3D",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p22 ; ",
      "legacy_versions": [
        "4.0.1.5",
        "5.0.0.0",
        "5.0.1.0"
      ],
      "init": "init.shooter.rc"
    },
    {
      "version": "5.0.2.0",
      "touch_version": "5.8.0.9",
      "lunch": "full_pyramid-eng",
      "key": "pyramid",
      "name": "HTC Sensation",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p21 ; ",
      "legacy_versions": [
        "4.0.1.5",
        "5.0.0.1",
        "5.0.0.7",
        "5.0.0.8",
        "5.0.1.0"
      ],
      "init": "init.pyramid.rc"
    },
    {
      "version": "4.0.1.5",
      "key": "ascend2",
      "name": "Huawei Ascend 2 (M865)",
      "legacy_versions": [

      ],
      "init": "init.qcom.rc",
      "inits": [
        "init.qcom.rc",
        "init.huawei.rc"
      ]
    },
    {
      "version": "4.0.1.5",
      "key": "a70",
      "name": "Micromax A70",
      "legacy_versions": [

      ],
      "init": "init.qcom.rc"
    },
    {
      "version": "4.0.1.5",
      "key": "galaxygio",
      "name": "Samsung Galaxy Gio",
      "readonly_recovery": true,
      "legacy_versions": [

      ],
      "init": "init.galaxygio.rc"
    },
    {
      "version": "4.0.1.5",
      "key": "indulge910",
      "name": "Samsung Indulge 910",
      "readonly_recovery": true,
      "legacy_versions": [

      ],
      "init": "init.smdkc110.rc"
    },
    {
      "version": "4.0.1.5",
      "key": "indulge915",
      "name": "Samsung Indulge 915",
      "readonly_recovery": true,
      "legacy_versions": [

      ],
      "init": "init.smdkc110.rc"
    },
    {
      "version": "6.0.1.4",
      "touch_version": "6.0.1.4",
      "lunch": "cm_p970-userdebug",
      "key": "p970",
      "name": "LG Optimus Black",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p4 ; ",
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
      "init": "/bootimages/ON_480x800_08fps_0000.rle"
    },
    {
      "version": "5.0.2.0",
      "touch_version": "5.8.0.2",
      "lunch": "full_shooteru-eng",
      "key": "shooteru",
      "name": "HTC EVO 3D (GSM)",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p21 ; ",
      "legacy_versions": [
        "5.0.1.6",
        "5.0.1.7",
        "5.0.1.8",
        "5.0.1.9"
      ],
      "init": "init.shooteru.rc"
    },
    {
      "version": "5.0.2.3",
      "lunch": "cyanogen_droid2we-eng",
      "key": "droid2we",
      "name": "Motorola Droid 2 Global",
      "reboot_recovery": "rm /cache/recovery/command ; echo 1 > /data/.recovery_mode ; sync ; reboot ;",
      "flash_recovery": "dd if=%s of=/preinstall/recovery/recovery.zip ; ",
      "readonly_recovery": true,
      "legacy_versions": [

      ],
      "init": "init.mapphone_cdma.rc"
    },
    {
      "version": "5.0.2.5",
      "lunch": "generic_targa-eng",
      "key": "targa",
      "name": "Motorola Droid Bionic",
      "reboot_recovery": "rm /cache/recovery/command ; echo 1 > /data/.recovery_mode ; sync ; reboot ;",
      "flash_recovery": "dd if=%s of=/preinstall/recovery/recovery.zip ; ",
      "readonly_recovery": true,
      "legacy_versions": [
        "5.0.2.3",
        "5.0.2.4"
      ],
      "init": "init.mapphone_cdma.rc"
    },
    {
      "version": "5.0.2.5",
      "lunch": "generic_daytona-eng",
      "key": "daytona",
      "name": "Motorola Droid X2",
      "reboot_recovery": "rm /cache/recovery/command ; echo 1 > /data/.recovery_mode ; sync ; reboot ;",
      "flash_recovery": "dd if=%s of=/preinstall/recovery/recovery.zip ; ",
      "readonly_recovery": true,
      "legacy_versions": [
        "5.0.2.3",
        "5.0.2.4"
      ],
      "init": "init.mapphone_cdma.rc"
    },
    {
      "version": "5.0.2.6",
      "lunch": "full_solana-eng",
      "key": "solana",
      "name": "Motorola Droid 3",
      "reboot_recovery": "rm /cache/recovery/command ; echo 1 > /data/.recovery_mode ; sync ; reboot ;",
      "flash_recovery": "dd if=%s of=/preinstall/recovery/recovery.zip ; ",
      "readonly_recovery": true,
      "legacy_versions": [
        "5.0.2.5"
      ],
      "init": "init.mapphone_cdma.rc"
    },
    {
      "version": "5.0.2.6",
      "lunch": "cyanogen_motus-eng",
      "key": "motus",
      "name": "Motorola Backflip",
      "legacy_versions": [

      ],
      "init": "init.motus.rc"
    },
    {
      "version": "5.0.2.6",
      "lunch": "tass-eng",
      "key": "tass",
      "name": "Samsung Galaxy Mini",
      "readonly_recovery": true,
      "legacy_versions": [

      ],
      "init": "init.gt-s5570.rc"
    },
    {
      "version": "5.0.2.6",
      "lunch": "huawei_u8800-eng",
      "key": "u8800",
      "name": "Huawei U8800",
      "flash_recovery": "mount -o remount,rw -t vfat /dev/block/mmcblk0p1 /cust_backup ; cat %s > /cust_backup/image/recovery.img ;",
      "legacy_versions": [

      ],
      "init": "init.u8800.rc"
    },
    {
      "version": "5.0.2.6",
      "touch_version": "5.8.1.5",
      "lunch": "cyanogen_galaxys2att-eng",
      "key": "galaxys2att",
      "name": "Samsung Galaxy S2 (AT&T)",
      "readonly_recovery": true,
      "legacy_versions": [

      ],
      "init": "init.smdkc210.rc",
      "inits": [
        "init.smdkc210.rc",
        "init.smdk4210.rc"
      ]
    },
    {
      "version": "6.0.4.1",
      "owners": {
        "jmprblckwing182@gmail.com": true
      },
      "touch_version": "6.0.4.1",
      "lunch": "cm_hercules-userdebug",
      "key": "hercules",
      "name": "Samsung Galaxy S2 (T-Mobile)",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p22 bs=4096 ; ",
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
        "6.0.3.1",
        "6.0.3.6",
        "6.0.4.0"
      ],
      "init": "init.target.rc"
    },
    {
      "version": "5.0.2.7",
      "touch_version": "5.8.1.5",
      "lunch": "full_epic4gtouch-eng",
      "key": "epic4gtouch",
      "name": "Samsung Epic 4G Touch",
      "readonly_recovery": true,
      "legacy_versions": [
        "5.0.2.6",
        "5.0.2.7"
      ],
      "init": "init.smdkc210.rc"
    },
    {
      "version": "5.0.2.6",
      "lunch": "full_ruby-eng",
      "key": "ruby",
      "name": "HTC Amaze",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p23 bs=4096 ; ",
      "legacy_versions": [

      ],
      "init": "init.ruby.rc"
    },
    {
      "version": "5.0.2.8",
      "lunch": "samsung_galaxy5-eng",
      "key": "galaxy5",
      "name": "Samsung Galaxy 5",
      "readonly_recovery": true,
      "legacy_versions": [
        "5.0.2.8"
      ],
      "init": "init.gt-i5500.rc"
    },
    {
      "version": "5.0.2.7",
      "lunch": "generic_mooncake-eng",
      "key": "mooncake",
      "name": "ZTE Racer",
      "legacy_versions": [

      ],
      "init": "init.mooncake.rc"
    },
    {
      "version": "5.0.2.7",
      "lunch": "full_vzwtab-eng",
      "key": "vzwtab",
      "name": "Samsung Galaxy Tab (VZW)",
      "readonly_recovery": true,
      "legacy_versions": [
        "5.0.2.7",
        "5.0.2.7",
        "5.0.2.7"
      ],
      "init": "init.smdkc110.rc"
    },
    {
      "version": "5.0.2.7",
      "lunch": "full_doubleshot-eng",
      "key": "doubleshot",
      "name": "HTC MyTouch 4G Slide",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p21 bs=4096 ; ",
      "legacy_versions": [
        "5.0.2.7",
        "5.0.2.7"
      ],
      "init": "init.doubleshot.rc"
    },
    {
      "version": "6.0.4.1",
      "touch_version": "6.0.4.1",
      "lunch": "cm_maguro-userdebug",
      "key": "maguro",
      "name": "Google Galaxy Nexus (GSM)",
      "flash_recovery": "dd if=%s of=/dev/block/platform/omap/omap_hsmmc.0/by-name/recovery bs=4096 ;",
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
        "6.0.3.5",
        "6.0.3.6",
        "6.0.4.0"
      ],
      "init": "init.tuna.rc"
    },
    {
      "version": "6.0.4.2",
      "touch_version": "6.0.4.2",
      "lunch": "cm_toro-userdebug",
      "key": "toro",
      "name": "Google Galaxy Nexus (Verizon)",
      "flash_recovery": "dd if=%s of=/dev/block/platform/omap/omap_hsmmc.0/by-name/recovery bs=4096 ;",
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
        "6.0.3.5",
        "6.0.3.6",
        "6.0.4.0",
        "6.0.4.1"
      ],
      "init": "init.tuna.rc"
    },
    {
      "version": "5.0.2.7",
      "lunch": "full_lg690-eng",
      "key": "lg690",
      "name": "LG Optimus C LW690 and Optimus M MS690",
      "legacy_versions": [

      ],
      "init": "init.thunderc.rc"
    },
    {
      "version": "5.0.2.7",
      "lunch": "c660-eng",
      "key": "c660",
      "name": "LG Optimus Pro",
      "legacy_versions": [

      ],
      "init": "init.muscat.rc"
    },
    {
      "version": "5.0.2.7",
      "lunch": "e510-eng",
      "key": "e510",
      "name": "LG Optimus Hub",
      "legacy_versions": [

      ],
      "init": "init.univa.rc"
    },
    {
      "version": "5.0.2.7",
      "touch_version": "5.8.1.5",
      "lunch": "cyanogen_epicmtd-eng",
      "key": "epicmtd",
      "name": "Samsung Epic4G (MTD)",
      "reboot_recovery": "/system/xbin/busybox devmem 0x57fff800 32 0x5EC0B007; sync ; reboot ;",
      "legacy_versions": [

      ],
      "init": "init.victory.rc",
      "officially_supported": false
    },
    {
      "version": "5.0.2.7",
      "lunch": "full_holiday-eng",
      "key": "holiday",
      "name": "HTC Holiday",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p23 bs=4096 ; ",
      "legacy_versions": [
        "5.0.2.7",
        "5.0.2.7",
        "5.0.2.7"
      ],
      "init": "init.holiday.rc"
    },
    {
      "version": "5.0.2.7",
      "lunch": "e730-eng",
      "key": "e730",
      "name": "LG Optimus SOL / TMo LG myTouch",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p17 bs=4096 ;",
      "legacy_versions": [

      ],
      "inits": [
        "init.victor.rc",
        "init.e739.rc"
      ]
    },
    {
      "version": "5.0.2.8",
      "lunch": "generic_marvel-eng",
      "key": "marvel",
      "name": "HTC Wildfire S",
      "legacy_versions": [
        "5.0.2.7"
      ],
      "init": "init.marvel.rc"
    },
    {
      "version": "5.0.2.8",
      "lunch": "full_sunfire-eng",
      "key": "sunfire",
      "name": "Motorola Photon 4G",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p10 bs=4096 ;",
      "legacy_versions": [
        "5.0.2.7"
      ],
      "init": "init.mapphone_umts.rc",
      "inits": [
        "init.mapphone_umts.rc",
        "init.mapphone_cdma.rc"
      ]
    },
    {
      "version": "5.0.2.8",
      "lunch": "huawei_u8160-eng",
      "key": "u8160",
      "name": "Huawei U8160",
      "legacy_versions": [
        "5.0.2.8"
      ],
      "init": "init.u8160.rc",
      "inits": [
        "init.huawei.rc",
        "init.u8160.rc"
      ]
    },
    {
      "version": "6.0.3.1",
      "touch_version": "6.0.3.1",
      "lunch": "cm_vigor-userdebug",
      "key": "vigor",
      "name": "HTC Rezound",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p23 bs=4096 ;",
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
      "init": "init.vigor.rc"
    },
    {
      "version": "5.8.1.5",
      "lunch": "full_express-userdebug",
      "key": "express",
      "name": "HTC EVO View 4G",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p21 bs=4096 ;",
      "legacy_versions": [

      ],
      "init": "init.expresskt.rc"
    },
    {
      "version": "5.8.3.4",
      "touch_version": "5.8.3.4",
      "lunch": "cm_tf201-userdebug",
      "key": "tf201",
      "name": "Asus Transformer Prime",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p4 ;",
      "legacy_versions": [
        "5.5.0.4",
        "5.8.2.0"
      ],
      "init": "init.cardhu.rc"
    },
    {
      "version": "5.0.2.0",
      "key": "maserati",
      "name": "Motorola Droid 4",
      "reboot_recovery": "rm /cache/recovery/command ; echo 1 > /data/.recovery_mode ; sync ; reboot ;",
      "legacy_versions": [

      ],
      "init": "init.mapphone_cdma.rc",
      "officially_supported": false
    },
    {
      "version": "5.0.2.0",
      "key": "spyder",
      "name": "Motorola RAZR",
      "reboot_recovery": "rm /cache/recovery/command ; echo 1 > /data/.recovery_mode ; sync ; reboot ;",
      "legacy_versions": [

      ],
      "init": "init.mapphone_cdma.rc",
      "officially_supported": false
    },
    {
      "version": "5.0.2.8",
      "lunch": "full_marvelc-eng",
      "key": "marvelc",
      "name": "HTC Wildfire S CDMA",
      "legacy_versions": [

      ],
      "init": "init.marvelc.rc"
    },
    {
      "version": "6.0.1.3",
      "touch_version": "5.8.3.4",
      "lunch": "cm_tf101-userdebug",
      "key": "tf101",
      "name": "Asus Transformer",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p4 ;",
      "legacy_versions": [
        "5.5.0.4",
        "5.8.1.9",
        "5.8.2.0",
        "5.8.2.1",
        "5.8.3.4"
      ],
      "init": "init.ventana.rc"
    },
    {
      "version": "6.0.1.5",
      "touch_version": "6.0.1.5",
      "lunch": "cm_p930-userdebug",
      "key": "p930",
      "name": "LG Nitro HD / LG P930 (AT&T)",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p13 ;",
      "legacy_versions": [
        "5.8.2.0",
        "6.0.1.4"
      ],
      "init": "bootimages/boot_logo_00000.rle"
    },
    {
      "version": "6.0.1.0",
      "touch_version": "6.0.1.0",
      "lunch": "cm_i777-userdebug",
      "key": "i777",
      "name": "Samsung Galaxy S2 (SGH-I777)",
      "readonly_recovery": true,
      "legacy_versions": [
        "5.8.1.8"
      ],
      "init": "init.smdkc210.rc",
      "inits": [
        "init.smdkc210.rc",
        "init.smdk4210.rc"
      ]
    },
    {
      "version": "5.0.2.8",
      "lunch": "full_pico-eng",
      "key": "pico",
      "name": "HTC Pico",
      "legacy_versions": [

      ],
      "init": "init.pico.rc"
    },
    {
      "version": "5.8.4.0",
      "touch_version": "5.8.4.0",
      "lunch": "cm_endeavoru-userdebug",
      "key": "endeavoru",
      "name": "HTC One X (GSM)",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p5 bs=4096 ;",
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
      "init": "ueventd.endeavoru.rc"
    },
    {
      "version": "6.0.3.1",
      "touch_version": "6.0.3.1",
      "lunch": "cm_ville-userdebug",
      "key": "ville",
      "name": "HTC One S",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p22 bs=4096 ;",
      "legacy_versions": [
        "5.5.0.4",
        "5.8.2.1",
        "5.8.2.2",
        "5.8.2.3",
        "5.8.3.1",
        "6.0.2.9"
      ],
      "init": "init.ville.rc"
    },
    {
      "version": "5.8.2.1",
      "key": "p1",
      "name": "Samsung Galaxy Tab (MTD and GSM)",
      "reboot_recovery": "echo 1 > /cache/.startrecovery ; sync ; reboot ;",
      "legacy_versions": [

      ],
      "init": "init.p1.rc",
      "officially_supported": false
    },
    {
      "version": "5.8.2.1",
      "key": "p1c",
      "name": "Samsung Galaxy Tab (MTD and CDMA)",
      "reboot_recovery": "echo 1 > /cache/.startrecovery ; sync ; reboot ;",
      "legacy_versions": [

      ],
      "init": "init.p1c.rc",
      "officially_supported": false
    },
    {
      "version": "6.0.4.2",
      "touch_version": "6.0.4.2",
      "lunch": "cm_toroplus-userdebug",
      "key": "toroplus",
      "name": "Google Galaxy Nexus (Sprint)",
      "flash_recovery": "dd if=%s of=/dev/block/platform/omap/omap_hsmmc.0/by-name/recovery bs=4096 ;",
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
        "6.0.3.5",
        "6.0.3.6",
        "6.0.4.0",
        "6.0.4.1"
      ],
      "init": "init.tuna.rc"
    },
    {
      "version": "6.0.3.1",
      "touch_version": "6.0.3.1",
      "lunch": "cm_p4wifi-userdebug",
      "key": "p4wifi",
      "name": "Samsung Galaxy Tab 10.1 (Wifi)",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p2 ; ",
      "legacy_versions": [
        "4.0.0.4",
        "5.8.3.1",
        "6.0.2.9",
        "6.0.3.0"
      ],
      "init": "ueventd.p3.rc"
    },
    {
      "version": "6.0.3.1",
      "touch_version": "6.0.3.1",
      "lunch": "cm_wingray-userdebug",
      "key": "wingray",
      "name": "Motorola XOOM (Wi-Fi only)",
      "flash_recovery": "dd if=%s of=/dev/block/platform/sdhci-tegra.3/by-name/recovery ; ",
      "legacy_versions": [
        "5.8.3.1",
        "6.0.2.9"
      ],
      "init": "init.wingray.rc"
    },
    {
      "version": "5.0.2.8",
      "lunch": "full_marquee-eng",
      "key": "marquee",
      "name": "LG Marquee",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p4 bs=4096 ; ",
      "legacy_versions": [

      ],
      "init": "init.omap.post_boot.sh"
    },
    {
      "version": "5.0.2.8",
      "lunch": "full_ignite-eng",
      "key": "ignite",
      "name": "LG Ignite",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p4 bs=4096 ; ",
      "legacy_versions": [

      ],
      "init": "init.omap.post_boot.sh"
    },
    {
      "version": "5.8.3.1",
      "touch_version": "5.8.3.1",
      "lunch": "full_ms840-userdebug",
      "key": "ms840",
      "name": "LG Connect 4G MS840",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p13 bs=4096 ; ",
      "legacy_versions": [

      ],
      "init": "init.target.rc"
    },
    {
      "version": "5.8.3.1",
      "touch_version": "5.8.3.1",
      "lunch": "full_vs840-userdebug",
      "key": "vs840",
      "name": "LG Lucid VS840",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p13 bs=4096 ; ",
      "legacy_versions": [

      ],
      "init": "init.target.rc"
    },
    {
      "version": "5.8.3.5",
      "touch_version": "5.8.3.5",
      "lunch": "cm_jewel-userdebug",
      "key": "jewel",
      "name": "HTC EVO LTE",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p22 bs=4096 ; ",
      "legacy_versions": [
        "5.8.3.4",
        "5.8.3.4"
      ],
      "init": "init.jewel.rc"
    },
    {
      "version": "6.0.3.6",
      "touch_version": "6.0.3.6",
      "lunch": "cm_i9300-userdebug",
      "key": "i9300",
      "name": "Samsung Galaxy S3 (GT-I9300)",
      "ro.product.devices": [
        "i9300",
        "m0"
      ],
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p6 bs=4096 ; ",
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
      "init": "ueventd.smdk4x12.rc"
    },
    {
      "version": "6.0.4.1",
      "touch_version": "6.0.4.1",
      "lunch": "cm_skyrocket-userdebug",
      "key": "skyrocket",
      "name": "Samsung Skyrocket",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p22 bs=4096 ; ",
      "legacy_versions": [
        "5.8.4.3",
        "6.0.1.0",
        "6.0.1.4",
        "6.0.3.1",
        "6.0.4.0"
      ],
      "init": "init.qcom.usb.rc"
    },
    {
      "version": "6.0.4.1",
      "touch_version": "6.0.4.1",
      "lunch": "cm_quincyatt-userdebug",
      "key": "quincyatt",
      "name": "Samsung Galaxy Note (AT&T)",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p22 bs=4096 ; ",
      "legacy_versions": [
        "5.8.4.3",
        "5.8.4.8",
        "6.0.3.1",
        "6.0.3.6"
      ],
      "init": "init.qcom.usb.rc"
    },
    {
      "version": "5.8.4.5",
      "lunch": "cm_e400-userdebug",
      "key": "e400",
      "name": "LG Optimus L3",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p17 bs=4096 ; ",
      "legacy_versions": [

      ],
      "init": "init.e0.rc"
    },
    {
      "version": "5.8.4.5",
      "lunch": "cm_primou-userdebug",
      "key": "primou",
      "name": "HTC One V",
      "readonly_recovery": true,
      "legacy_versions": [

      ],
      "init": "init.primou.rc"
    },
    {
      "version": "6.0.4.3",
      "touch_version": "6.0.4.3",
      "lunch": "cm_d2att-userdebug",
      "key": "d2att",
      "name": "Samsung Galaxy S3 (AT&T)",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p18 bs=4096 ; ",
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
        "6.0.3.7",
        "6.0.3.8",
        "6.0.4.1"
      ],
      "init": "init.d2att.rc"
    },
    {
      "version": "6.0.4.1",
      "touch_version": "6.0.4.1",
      "lunch": "cm_d2tmo-userdebug",
      "key": "d2tmo",
      "name": "Samsung Galaxy S3 (T-Mobile)",
      "ro.product.devices": [
        "d2tmo",
        "d2lteMetroPCS"
      ],
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p18 bs=4096 ; ",
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
        "6.0.3.7",
        "6.0.3.8"
      ],
      "init": "init.d2tmo.rc"
    },
    {
      "version": "6.0.4.1",
      "touch_version": "6.0.4.1",
      "lunch": "cm_d2spr-userdebug",
      "key": "d2spr",
      "name": "Samsung Galaxy S3 (Sprint)",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p18 bs=4096 ; ",
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
        "6.0.3.7",
        "6.0.3.8"
      ],
      "init": "init.d2spr.rc"
    },
    {
      "version": "6.0.4.1",
      "touch_version": "6.0.4.1",
      "lunch": "cm_d2vzw-userdebug",
      "key": "d2vzw",
      "name": "Samsung Galaxy S3 (Verizon)",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p18 bs=4096 ; ",
      "twrp_version": "2.4.3.0",
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
        "6.0.3.7",
        "6.0.3.8"
      ],
      "init": "init.d2vzw.rc"
    },
    {
      "version": "5.8.4.7",
      "touch_version": "5.8.4.7",
      "lunch": "full_primoc-userdebug",
      "key": "primoc",
      "name": "HTC One V (CDMA)",
      "readonly_recovery": true,
      "legacy_versions": [
        "5.8.4.6",
        "5.8.4.7"
      ],
      "init": "init.primoc.rc"
    },
    {
      "version": "6.0.4.1",
      "touch_version": "6.0.4.1",
      "lunch": "cm_grouper-userdebug",
      "key": "grouper",
      "name": "Google Nexus 7",
      "flash_recovery": "dd if=%s of=/dev/block/platform/sdhci-tegra.3/by-name/SOS bs=4096 ; ",
      "legacy_versions": [
        "6.0.0.6",
        "6.0.1.0",
        "6.0.1.9",
        "6.0.2.3",
        "6.0.3.1",
        "6.0.3.4",
        "6.0.3.5",
        "6.0.3.6",
        "6.0.3.8"
      ],
      "init": "init.grouper.rc"
    },
    {
      "version": "6.0.1.0",
      "touch_version": "6.0.1.0",
      "lunch": "cm_su640-userdebug",
      "key": "su640",
      "name": "LG Optimus LTE (SKT)",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p13 bs=4096 ; ",
      "legacy_versions": [

      ],
      "init": "init.su640.rc"
    },
    {
      "version": "6.0.4.0",
      "touch_version": "6.0.4.0",
      "lunch": "cm_i9100g-userdebug",
      "key": "i9100g",
      "name": "Samsung Galaxy S2 (GT-I9100G)",
      "legacy_versions": [
        "6.0.1.0"
      ],
      "init": "init.t1.rc",
      "officially_supported": false
    },
    {
      "version": "6.0.2.7",
      "touch_version": "6.0.2.7",
      "lunch": "cm_p3100-userdebug",
      "key": "p3100",
      "name": "Samsung Galaxy Tab 2 (GT-P3100)",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p6 bs=4096 ; ",
      "legacy_versions": [
        "6.0.1.1",
        "6.0.2.3"
      ],
      "init": "init.espresso.rc"
    },
    {
      "version": "6.0.2.7",
      "touch_version": "6.0.2.7",
      "lunch": "cm_p3110-userdebug",
      "key": "p3110",
      "name": "Samsung Galaxy Tab 2 (GT-P3110)",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p6 bs=4096 ; ",
      "legacy_versions": [
        "6.0.1.1",
        "6.0.2.3"
      ],
      "init": "init.espresso.rc"
    },
    {
      "version": "6.0.2.3",
      "touch_version": "6.0.2.3",
      "lunch": "cm_p3113-userdebug",
      "key": "p3113",
      "name": "Samsung Galaxy Tab 2 (GT-P3113)",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p6 bs=4096 ; ",
      "legacy_versions": [
        "6.0.1.1"
      ],
      "init": "init.espresso.rc"
    },
    {
      "version": "6.0.2.7",
      "touch_version": "6.0.2.7",
      "lunch": "cm_p5100-userdebug",
      "key": "p5100",
      "name": "Samsung Galaxy Tab 2 (GT-P5100)",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p6 bs=4096 ; ",
      "legacy_versions": [
        "6.0.1.1",
        "6.0.2.3"
      ],
      "init": "init.espresso10.rc"
    },
    {
      "version": "6.0.2.7",
      "touch_version": "6.0.2.7",
      "lunch": "cm_p5110-userdebug",
      "key": "p5110",
      "name": "Samsung Galaxy Tab 2 (GT-P5110)",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p6 bs=4096 ; ",
      "legacy_versions": [
        "6.0.1.1",
        "6.0.2.3"
      ],
      "init": "init.espresso10.rc"
    },
    {
      "version": "6.0.2.3",
      "touch_version": "6.0.2.3",
      "lunch": "cm_p5113-userdebug",
      "key": "p5113",
      "name": "Samsung Galaxy Tab 2 (GT-P5113)",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p6 bs=4096 ; ",
      "legacy_versions": [
        "6.0.1.1"
      ],
      "init": "init.espresso10.rc"
    },
    {
      "version": "6.0.1.1",
      "touch_version": "6.0.1.1",
      "lunch": "cm_vs920-userdebug",
      "key": "vs920",
      "name": "LG Spectrum 4G",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p13 bs=4096 ; ",
      "legacy_versions": [

      ],
      "init": "init.target.rc",
      "inits": [
        "init.target.rc",
        "init.iproj.rc",
        "init.i_vzw.rc",
        "init.iprj.rc"
      ]
    },
    {
      "version": "6.0.1.1",
      "touch_version": "6.0.1.1",
      "lunch": "cm_x500-userdebug",
      "key": "x500",
      "name": "Score & Score M",
      "legacy_versions": [

      ],
      "init": "init.zte.rc"
    },
    {
      "version": "6.0.1.1",
      "touch_version": "6.0.1.1",
      "lunch": "cm_vs910-userdebug",
      "key": "vs910",
      "name": "LG Revolution 4G",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p14 bs=4096 ; ",
      "legacy_versions": [

      ],
      "init": "init.qcom.rc",
      "inits": [
        "init.qcom.rc",
        "init.bryce.rc"
      ]
    },
    {
      "version": "6.0.1.1",
      "touch_version": "6.0.1.1",
      "lunch": "cm_ms910-userdebug",
      "key": "ms910",
      "name": "LG Esteeem 4G",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p14 bs=4096 ; ",
      "legacy_versions": [
        "5.0.2.8"
      ],
      "init": "init.qcom.rc",
      "inits": [
        "init.qcom.rc",
        "init.bryce.rc"
      ]
    },
    {
      "version": "6.0.1.1",
      "touch_version": "6.0.1.1",
      "lunch": "cm_ms695-userdebug",
      "key": "ms695",
      "name": "LG Optimus M+",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p17 bs=4096 ; ",
      "legacy_versions": [
        "6.0.1.0"
      ],
      "init": "init.qcom.rc",
      "inits": [
        "init.qcom.rc",
        "init.m3.rc"
      ]
    },
    {
      "version": "5.8.2.1",
      "key": "p1l",
      "name": "Samsung Galaxy Tab (MTD and GSM - L)",
      "reboot_recovery": "echo 1 > /cache/.startrecovery ; sync ; reboot ;",
      "legacy_versions": [

      ],
      "init": "init.p1.rc",
      "officially_supported": false
    },
    {
      "version": "5.8.2.1",
      "key": "p1n",
      "name": "Samsung Galaxy Tab (MTD and GSM - N)",
      "reboot_recovery": "echo 1 > /cache/.startrecovery ; sync ; reboot ;",
      "legacy_versions": [

      ],
      "init": "init.p1.rc",
      "officially_supported": false
    },
    {
      "version": "6.0.4.1",
      "touch_version": "6.0.4.1",
      "lunch": "cm_d2usc-userdebug",
      "key": "d2usc",
      "name": "Samsung Galaxy S3 (US Cellular)",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p18 bs=4096 ; ",
      "legacy_versions": [
        "6.0.1.2",
        "6.0.2.3",
        "6.0.2.8",
        "6.0.2.9",
        "6.0.3.0",
        "6.0.3.1",
        "6.0.3.6",
        "6.0.3.7",
        "6.0.3.8"
      ],
      "init": "init.d2usc.rc"
    },
    {
      "version": "6.0.1.3",
      "lunch": "cm_asanti-userdebug",
      "key": "asanti",
      "name": "Motorola Photon Q",
      "flash_recovery": "dd if=%s of=/dev/block/platform/msm_sdcc.1/by-name/recovery bs=4096 ; ",
      "legacy_versions": [

      ],
      "init": "init.mmi.usb.rc",
      "inits": [
        "init.asanti.rc",
        "init.sprint.rc"
      ]
    },
    {
      "version": "6.0.1.5",
      "lunch": "cm_p350-userdebug",
      "key": "p350",
      "name": "LG Optimus Me",
      "legacy_versions": [
        "6.0.1.3",
        "6.0.1.4"
      ],
      "init": "init.pecan.rc"
    },
    {
      "version": "6.0.1.4",
      "lunch": "cm_p5att-userdebug",
      "key": "p5att",
      "name": "Samsung Galaxy Tab 8.9 (AT&T)",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p22 bs=4096 ; ",
      "legacy_versions": [

      ],
      "init": "fstab.qcom"
    },
    {
      "version": "6.0.3.8",
      "touch_version": "6.0.3.8",
      "lunch": "cm_t769-userdebug",
      "key": "t769",
      "name": "Samsung Galaxy S Blaze 4G",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p22 bs=4096 ; ",
      "legacy_versions": [
        "6.0.1.4"
      ],
      "init": "init.target.rc"
    },
    {
      "version": "6.0.4.3",
      "touch_version": "6.0.4.1",
      "lunch": "cm_d2mtr-userdebug",
      "key": "d2mtr",
      "name": "Samsung Galaxy S3 (MetroPCS)",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p18 bs=4096 ; ",
      "legacy_versions": [
        "6.0.1.5",
        "6.0.2.3",
        "6.0.2.8",
        "6.0.2.9",
        "6.0.3.0",
        "6.0.3.1",
        "6.0.3.6",
        "6.0.3.7",
        "6.0.3.8",
        "6.0.4.1"
      ],
      "init": "init.carrier.rc",
      "inits": [
        "init.carrier.rc",
        "init.d2mtr.rc"
      ]
    },
    {
      "version": "6.0.3.1",
      "touch_version": "6.0.3.1",
      "lunch": "cm_tf700t-userdebug",
      "key": "tf700t",
      "name": "Asus Transformer Pad Infinity",
      "reboot_recovery": "echo 'boot-recovery' | dd of=/dev/block/mmcblk0p3 seek=6144 bs=1 ; reboot ; ",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p4 bs=4096 ; ",
      "legacy_versions": [
        "6.0.1.8",
        "6.0.2.3"
      ],
      "init": "init.tf700t.rc"
    },
    {
      "version": "6.0.4.1",
      "touch_version": "6.0.4.1",
      "lunch": "cm_manta-userdebug",
      "key": "manta",
      "name": "Google Nexus 10",
      "flash_recovery": "dd if=%s of=/dev/block/platform/dw_mmc.0/by-name/recovery bs=4096 ; ",
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
        "6.0.3.5",
        "6.0.3.8"
      ],
      "init": "init.manta.rc"
    },
    {
      "version": "6.0.4.1",
      "touch_version": "6.0.4.1",
      "lunch": "cm_mako-userdebug",
      "key": "mako",
      "name": "Google Nexus 4",
      "flash_recovery": "dd if=%s of=/dev/block/platform/msm_sdcc.1/by-name/recovery bs=4096 ; ",
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
        "6.0.3.6",
        "6.0.3.8"
      ],
      "init": "init.mako.rc"
    },
    {
      "version": "6.0.3.1",
      "touch_version": "6.0.3.1",
      "lunch": "cm_dlx-userdebug",
      "key": "dlx",
      "name": "HTC Droid DNA",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p20 bs=4096 ; ",
      "legacy_versions": [
        "6.0.1.5",
        "6.0.1.9",
        "6.0.2.3",
        "6.0.2.7",
        "6.0.2.8",
        "6.0.3.0"
      ],
      "init": "init.debug_mfgkernel.rc"
    },
    {
      "version": "6.0.3.6",
      "touch_version": "6.0.3.6",
      "lunch": "cm_n7100-userdebug",
      "key": "n7100",
      "name": "Samsung Galaxy Note 2 (HSPA+)",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p9 bs=4096 ; ",
      "legacy_versions": [
        "6.0.1.9",
        "6.0.3.0",
        "6.0.3.1"
      ],
      "init": "init.smdk4x12.rc"
    },
    {
      "version": "6.0.3.1",
      "touch_version": "6.0.3.1",
      "lunch": "cm_a700-userdebug",
      "key": "a700",
      "name": "Acer A700",
      "flash_recovery": "dd if=%s of=/dev/block/platform/sdhci-tegra.3/by-name/SOS bs=4096 ; ",
      "legacy_versions": [
        "6.0.2.3"
      ],
      "init": "init.picasso_mf.rc"
    },
    {
      "version": "6.0.4.1",
      "touch_version": "6.0.4.1",
      "lunch": "cm_tilapia-userdebug",
      "key": "tilapia",
      "name": "Google Nexus 7 (GSM)",
      "flash_recovery": "dd if=%s of=/dev/block/platform/sdhci-tegra.3/by-name/SOS bs=4096 ; ",
      "legacy_versions": [
        "6.0.2.3",
        "6.0.3.1",
        "6.0.3.5",
        "6.0.3.6",
        "6.0.4.0"
      ],
      "init": "init.tilapia.rc"
    },
    {
      "version": "6.0.4.1",
      "touch_version": "6.0.4.1",
      "lunch": "cm_t0lte-userdebug",
      "key": "t0lte",
      "name": "Samsung Galaxy Note 2 (LTE)",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p9 bs=4096 ; ",
      "legacy_versions": [
        "6.0.2.3",
        "6.0.2.4",
        "6.0.2.5",
        "6.0.2.8",
        "6.0.3.0",
        "6.0.3.1",
        "6.0.3.2",
        "6.0.3.6"
      ],
      "init": "init.t0lte.rc"
    },
    {
      "version": "6.0.2.3",
      "touch_version": "6.0.2.3",
      "lunch": "cm_p720-userdebug",
      "key": "p720",
      "name": "LG Optimus 3DMax",
      "reboot_recovery": "echo '518 R 1' > /sys/kernel/kobject_lge_nvdata/dynamic_nvdata_raw_write ; reboot ; ",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p6 ; ",
      "legacy_versions": [

      ],
      "inits": [
        "init.lgep720board.rc",
        "/bootimages/battery_charging_01.rle"
      ]
    },
    {
      "version": "6.0.4.3",
      "touch_version": "6.0.4.3",
      "lunch": "cm_d2cri-userdebug",
      "key": "d2cri",
      "name": "Samsung Galaxy S3 (Cricket)",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p18 bs=4096 ; ",
      "legacy_versions": [
        "6.0.2.7",
        "6.0.2.8",
        "6.0.2.9",
        "6.0.3.0",
        "6.0.3.1",
        "6.0.3.6",
        "6.0.3.7",
        "6.0.3.8",
        "6.0.4.1"
      ],
      "init": "init.d2cri.rc"
    },
    {
      "version": "6.0.2.7",
      "touch_version": "6.0.2.7",
      "lunch": "cm_runnymede-userdebug",
      "key": "runnymede",
      "name": "HTC Sensation XL",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p21 bs=4096 ; ",
      "legacy_versions": [

      ],
      "init": "init.runnymede.rc"
    },
    {
      "version": "6.0.2.7",
      "touch_version": "6.0.2.7",
      "lunch": "cm_presto-userdebug",
      "key": "presto",
      "name": "Pantech Presto",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p18 bs=4096 ; ",
      "legacy_versions": [

      ],
      "init": "init.presto.rc"
    },
    {
      "version": "6.0.2.7",
      "touch_version": "6.0.2.7",
      "lunch": "cm_warp2-userdebug",
      "key": "warp2",
      "name": "ZTE Sequent",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p13 bs=4096 ; ",
      "legacy_versions": [

      ],
      "init": "init.warp2.rc"
    },
    {
      "version": "6.0.3.1",
      "lunch": "cm_steelhead-userdebug",
      "key": "steelhead",
      "name": "Google Nexus Q",
      "flash_recovery": "dd if=%s of=/dev/block/platform/omap/omap_hsmmc.0/by-name/recovery bs=4096 ; ",
      "legacy_versions": [
        "6.0.2.7"
      ],
      "init": "init.steelhead.rc"
    },
    {
      "version": "6.0.2.7",
      "touch_version": "6.0.2.7",
      "lunch": "cm_prevail2spr-userdebug",
      "key": "prevail2spr",
      "name": "Samsung Prevail 2 (Boost Mobile)",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p15 bs=4096 ; ",
      "legacy_versions": [

      ],
      "inits": [
        "init.carrier.rc",
        "init.prevail2spr.rc"
      ]
    },
    {
      "version": "6.0.2.7",
      "touch_version": "6.0.2.7",
      "lunch": "cm_golden-userdebug",
      "key": "golden",
      "name": "Samsung Galaxy S3 Mini",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p21 bs=4096 ; ",
      "legacy_versions": [

      ],
      "init": "init.golden.rc"
    },
    {
      "version": "6.0.3.3",
      "touch_version": "6.0.3.3",
      "lunch": "cm_fireball-userdebug",
      "key": "fireball",
      "name": "HTC Droid Incredible 4G LTE",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p22 bs=4096 ; ",
      "legacy_versions": [
        "6.0.2.8",
        "6.0.2.9",
        "6.0.3.1"
      ],
      "init": "init.fireball.rc"
    },
    {
      "version": "6.0.2.8",
      "touch_version": "6.0.2.8",
      "lunch": "cm_puccinilte-userdebug",
      "key": "puccinilte",
      "name": "HTC Jetstream",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p23 bs=4096 ; ",
      "legacy_versions": [

      ],
      "init": "init.puccinilte.rc"
    },
    {
      "version": "6.0.2.8",
      "touch_version": "6.0.2.8",
      "lunch": "cm_p700-userdebug",
      "key": "p700",
      "name": "LG Optimus L7",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p17 bs=4096 ; ",
      "legacy_versions": [

      ],
      "init": "init.u0.rc"
    },
    {
      "version": "6.0.3.1",
      "touch_version": "6.0.3.1",
      "lunch": "cm_m7-userdebug",
      "key": "m7",
      "name": "HTC One",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p34 bs=4096 ; ",
      "legacy_versions": [
        "6.0.2.8",
        "6.0.3.0"
      ],
      "init": "init.m7.rc"
    },
    {
      "version": "6.0.3.1",
      "touch_version": "6.0.3.1",
      "lunch": "cm_dlxu-userdebug",
      "key": "dlxu",
      "name": "HTC Butterfly (dlxu)",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p20 bs=4096 ; ",
      "legacy_versions": [
        "6.0.2.8",
        "6.0.3.0"
      ],
      "init": "init.dlxu.rc"
    },
    {
      "version": "6.0.3.1",
      "touch_version": "6.0.3.1",
      "lunch": "cm_dlxub1-userdebug",
      "key": "dlxub1",
      "name": "HTC Butterfly (dlxub1)",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p20 bs=4096 ; ",
      "legacy_versions": [
        "6.0.2.8",
        "6.0.3.0"
      ],
      "init": "init.dlxub1.rc"
    },
    {
      "version": "6.0.3.1",
      "touch_version": "6.0.3.1",
      "lunch": "cm_dlxj-userdebug",
      "key": "dlxj",
      "name": "HTC Butterfly J",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p20 bs=4096 ; ",
      "legacy_versions": [
        "6.0.2.8",
        "6.0.3.0"
      ],
      "init": "init.dlxj.rc"
    },
    {
      "version": "6.0.2.8",
      "lunch": "cm_e610-userdebug",
      "key": "e610",
      "name": "LG Optimus L5",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p17 bs=4096 ; ",
      "legacy_versions": [

      ],
      "init": "init.m4.rc"
    },
    {
      "version": "6.0.3.1",
      "touch_version": "6.0.3.1",
      "lunch": "cm_evita-userdebug",
      "key": "evita",
      "name": "HTC One X (AT&T)",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p22 bs=4096 ; ",
      "legacy_versions": [
        "6.0.2.8"
      ],
      "init": "init.evita.rc"
    },
    {
      "version": "6.0.3.1",
      "touch_version": "6.0.3.1",
      "lunch": "cm_p4-userdebug",
      "key": "p4",
      "name": "Samsung Galaxy Tab 10.1",
      "ro.product.devices": [
        "p4",
        "GT-P7500",
        "p7500"
      ],
      "flash_recovery": "dd if=%s of=/dev/block/platform/sdhci-tegra.3/by-num/p2 bs=4096 ; ",
      "legacy_versions": [
        "6.0.2.9",
        "6.0.3.0"
      ],
      "init": "init.p4.rc"
    },
    {
      "version": "6.0.3.1",
      "touch_version": "6.0.3.1",
      "lunch": "cm_p4tmo-userdebug",
      "key": "p4tmo",
      "name": "Samsung Galaxy Tab 10.1 (T-Mobile)",
      "flash_recovery": "dd if=%s of=/dev/block/platform/sdhci-tegra.3/by-num/p2 bs=4096 ; ",
      "legacy_versions": [
        "6.0.2.9",
        "6.0.3.0"
      ],
      "init": "init.p4tmo.rc"
    },
    {
      "version": "6.0.3.1",
      "touch_version": "6.0.3.1",
      "lunch": "cm_p4vzw-userdebug",
      "key": "p4vzw",
      "name": "Samsung Galaxy Tab 10.1 (Verizon)",
      "flash_recovery": "dd if=%s of=/dev/block/platform/sdhci-tegra.3/by-num/p2 bs=4096 ; ",
      "legacy_versions": [
        "6.0.2.9",
        "6.0.3.0"
      ],
      "init": "init.p4vzw.rc"
    },
    {
      "version": "6.0.3.1",
      "touch_version": "6.0.3.1",
      "lunch": "cm_p760-userdebug",
      "key": "p760",
      "name": "LG Optimus L9",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p4 bs=4096 ; ",
      "legacy_versions": [
        "6.0.2.9"
      ],
      "init": "init.u0.rc"
    },
    {
      "version": "6.0.3.6",
      "touch_version": "6.0.3.6",
      "lunch": "cm_i9305-userdebug",
      "key": "i9305",
      "name": "Samsung Galaxy S3 LTE (GT-I9305)",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p9 bs=4096 ; ",
      "legacy_versions": [
        "6.0.2.9",
        "6.0.3.1",
        "6.0.3.2"
      ],
      "init": "ueventd.smdk4x12.rc"
    },
    {
      "version": "6.0.3.1",
      "touch_version": "6.0.3.1",
      "lunch": "cm_p3-userdebug",
      "key": "p3",
      "name": "Samsung Galaxy Tab 10.1v",
      "flash_recovery": "dd if=%s of=/dev/block/platform/sdhci-tegra.3/by-num/p2 bs=4096 ; ",
      "legacy_versions": [
        "6.0.2.9"
      ],
      "init": "init.p3.rc"
    },
    {
      "version": "6.0.3.6",
      "touch_version": "6.0.3.6",
      "lunch": "cm_n8013-userdebug",
      "key": "n8013",
      "name": "Samsung Galaxy Note 10.1",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p6 bs=4096 ; ",
      "legacy_versions": [
        "6.0.3.0",
        "6.0.3.1"
      ],
      "init": "init.n8013.rc"
    },
    {
      "version": "6.0.4.1",
      "touch_version": "6.0.4.1",
      "lunch": "cm_i605-userdebug",
      "key": "i605",
      "name": "Samsung Galaxy Note 2 (Verizon)",
      "ro.product.devices": [
        "i605",
        "t0ltevzw"
      ],
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p9 bs=4096 ; ",
      "legacy_versions": [
        "6.0.3.0"
      ],
      "init": "init.i605.rc"
    },
    {
      "version": "6.0.4.1",
      "touch_version": "6.0.4.1",
      "lunch": "cm_l900-userdebug",
      "key": "l900",
      "name": "Samsung Galaxy Note 2 (Sprint)",
      "ro.product.devices": [
        "l900",
        "t0ltespr"
      ],
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p9 bs=4096 ; ",
      "legacy_versions": [
        "6.0.3.0",
        "6.0.3.1"
      ],
      "init": "init.l900.rc"
    },
    {
      "version": "6.0.4.1",
      "touch_version": "6.0.4.1",
      "lunch": "cm_t0lteatt-userdebug",
      "key": "t0lteatt",
      "name": "Samsung Galaxy Note 2 (AT&T)",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p9 bs=4096 ; ",
      "legacy_versions": [
        "6.0.3.0",
        "6.0.3.1",
        "6.0.3.6"
      ],
      "init": "init.t0lteatt.rc"
    },
    {
      "version": "6.0.4.1",
      "touch_version": "6.0.4.1",
      "lunch": "cm_t0ltetmo-userdebug",
      "key": "t0ltetmo",
      "name": "Samsung Galaxy Note 2 (T-Mobile)",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p9 bs=4096 ; ",
      "legacy_versions": [
        "6.0.3.0",
        "6.0.3.1",
        "6.0.3.6",
        "6.0.3.7"
      ],
      "init": "init.t0ltetmo.rc"
    },
    {
      "version": "6.0.3.0",
      "touch_version": "6.0.3.0",
      "lunch": "cm_e975-userdebug",
      "key": "e975",
      "name": "LG Optimus G Intl (E975)",
      "flash_recovery": "dd if=%s of=/dev/block/platform/msm_sdcc.1/by-name/recovery bs=4096 ; ",
      "legacy_versions": [

      ],
      "init": "init.geehrc.rc"
    },
    {
      "version": "6.0.3.1",
      "touch_version": "6.0.3.1",
      "lunch": "cm_p880-userdebug",
      "key": "p880",
      "name": "LG Optimus 4X HD",
      "reboot_recovery": "echo 'boot-recovery' | dd of=/dev/block/mmcblk0p5 bs=1 count=13 ; reboot ; ",
      "flash_recovery": "dd if=%s of=/dev/block/platform/sdhci-tegra.3/by-name/SOS bs=4096 ; ",
      "legacy_versions": [

      ],
      "init": "init.x3.rc"
    },
    {
      "version": "6.0.4.1",
      "touch_version": "6.0.4.1",
      "lunch": "cm_quincytmo-userdebug",
      "key": "quincytmo",
      "name": "Samsung Galaxy Note (T-Mobile)",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p22 bs=4096 ; ",
      "legacy_versions": [
        "6.0.3.1",
        "6.0.3.6"
      ],
      "init": "init.quincytmo.rc"
    },
    {
      "version": "6.0.3.6",
      "touch_version": "6.0.3.6",
      "lunch": "cm_n8000-userdebug",
      "key": "n8000",
      "name": "Samsung Galaxy Note 10.1 (GSM)",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p6 bs=4096 ; ",
      "legacy_versions": [
        "6.0.3.1"
      ],
      "init": "init.n8000.rc"
    },
    {
      "version": "6.0.3.7",
      "touch_version": "6.0.3.7",
      "lunch": "cm_find5-userdebug",
      "key": "find5",
      "name": "Oppo Find5",
      "flash_recovery": "dd if=%s of=/dev/block/platform/msm_sdcc.1/by-name/recovery bs=4096 ; ",
      "legacy_versions": [
        "6.0.3.1"
      ],
      "init": "init.find5.rc"
    },
    {
      "version": "6.0.4.1",
      "touch_version": "6.0.4.1",
      "lunch": "cm_jfltetmo-userdebug",
      "key": "jfltetmo",
      "name": "Samsung Galaxy S4 (T-Mobile)",
      "ro.product.devices": [
        "jfltetmo",
        "jflteMetroPCS"
      ],
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p21 bs=4096 ; ",
      "legacy_versions": [
        "6.0.3.2",
        "6.0.3.6",
        "6.0.3.8"
      ],
      "init": "init.jfltetmo.rc"
    },
    {
      "version": "6.0.4.1",
      "touch_version": "6.0.4.1",
      "lunch": "cm_jfltecan-userdebug",
      "key": "jfltecan",
      "name": "Samsung Galaxy S4 (Canada/Bell)",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p21 bs=4096 ; ",
      "legacy_versions": [
        "6.0.3.2",
        "6.0.3.6",
        "6.0.3.8"
      ],
      "init": "init.jfltecan.rc"
    },
    {
      "version": "6.0.3.2",
      "lunch": "cm_V8000-userdebug",
      "key": "V8000",
      "name": "ZTE Engage",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p17 bs=4096 ; ",
      "legacy_versions": [

      ],
      "init": "init.zte.rc"
    },
    {
      "version": "6.0.3.2",
      "touch_version": "6.0.3.2",
      "lunch": "cm_i9500-userdebug",
      "key": "i9500",
      "name": "Samsung Galaxy S4 (i9500)",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p10 bs=4096 ; ",
      "legacy_versions": [

      ],
      "init": "init.i9500.rc"
    },
    {
      "version": "6.0.3.2",
      "touch_version": "6.0.3.2",
      "lunch": "cm_everest-userdebug",
      "key": "everest",
      "name": "Motorola Xoom (GSM)",
      "flash_recovery": "dd if=%s of=/dev/block/platform/sdhci-tegra.3/by-name/recovery bs=4096 ; ",
      "legacy_versions": [

      ],
      "init": "init.everest.rc"
    },
    {
      "version": "6.0.3.2",
      "touch_version": "6.0.3.2",
      "lunch": "cm_protou-userdebug",
      "key": "protou",
      "name": "HTC Desire X",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p21 bs=4096 ; ",
      "legacy_versions": [

      ],
      "init": "init.protou.rc"
    },
    {
      "version": "6.0.4.1",
      "touch_version": "6.0.4.1",
      "lunch": "cm_m7spr-userdebug",
      "key": "m7spr",
      "name": "HTC One (Sprint)",
      "ro.product.devices": [
        "m7spr",
        "m7wls"
      ],
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p36 bs=4096 ; ",
      "legacy_versions": [
        "6.0.3.2",
        "6.0.3.6",
        "6.0.3.8"
      ],
      "init": "init.m7spr.rc"
    },
    {
      "version": "6.0.4.1",
      "touch_version": "6.0.4.1",
      "lunch": "cm_m7tmo-userdebug",
      "key": "m7tmo",
      "name": "HTC One (T-Mobile)",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p34 bs=4096 ; ",
      "legacy_versions": [
        "6.0.3.2",
        "6.0.3.6",
        "6.0.3.8"
      ],
      "init": "init.m7tmo.rc"
    },
    {
      "version": "6.0.4.3",
      "touch_version": "6.0.4.3",
      "lunch": "cm_m7att-userdebug",
      "key": "m7att",
      "name": "HTC One (AT&T)",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p34 bs=4096 ; ",
      "legacy_versions": [
        "6.0.3.2",
        "6.0.3.5",
        "6.0.3.6",
        "6.0.3.8",
        "6.0.4.1",
        "6.0.4.2"
      ],
      "init": "init.m7att.rc"
    },
    {
      "version": "6.0.4.1",
      "touch_version": "6.0.4.1",
      "lunch": "cm_jflteatt-userdebug",
      "key": "jflteatt",
      "name": "Samsung Galaxy S4 (AT&T)",
      "flash_recovery": "dd if=/dev/block/platform/msm_sdcc.1/by-name/aboot of=/sdcard/clockworkmod/aboot.img; /data/data/com.koushikdutta.rommanager/files/loki_patch recovery /sdcard/clockworkmod/aboot.img %s /sdcard/clockworkmod/recovery.lok ; /data/data/com.koushikdutta.rommanager/files/loki_flash recovery /sdcard/clockworkmod/recovery.lok ; ",
      "legacy_versions": [
        "6.0.3.2",
        "6.0.3.6",
        "6.0.3.8"
      ],
      "init": "init.jflteatt.rc"
    },
    {
      "version": "6.0.4.1",
      "touch_version": "6.0.4.1",
      "lunch": "cm_m7ul-userdebug",
      "key": "m7ul",
      "name": "HTC One (non-US GSM)",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p34 bs=4096 ; ",
      "legacy_versions": [
        "6.0.3.2",
        "6.0.3.6",
        "6.0.3.8"
      ],
      "init": "init.m7ul.rc"
    },
    {
      "version": "6.0.4.1",
      "touch_version": "6.0.4.1",
      "lunch": "cm_jfltevzw-userdebug",
      "key": "jfltevzw",
      "name": "Samsung Galaxy S4 (Verizon)",
      "flash_recovery": "dd if=/dev/block/platform/msm_sdcc.1/by-name/aboot of=/sdcard/clockworkmod/aboot.img; /data/data/com.koushikdutta.rommanager/files/loki_patch recovery /sdcard/clockworkmod/aboot.img %s /sdcard/clockworkmod/recovery.lok ; /data/data/com.koushikdutta.rommanager/files/loki_flash recovery /sdcard/clockworkmod/recovery.lok ; ",
      "legacy_versions": [
        "6.0.3.2",
        "6.0.3.6",
        "6.0.3.8"
      ],
      "init": "init.jfltevzw.rc"
    },
    {
      "version": "6.0.4.1",
      "touch_version": "6.0.4.1",
      "lunch": "cm_jfltespr-userdebug",
      "key": "jfltespr",
      "name": "Samsung Galaxy S4 (Sprint)",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p21 bs=4096 ; ",
      "legacy_versions": [
        "6.0.3.2",
        "6.0.3.6",
        "6.0.3.8"
      ],
      "init": "init.jfltespr.rc"
    },
    {
      "version": "6.0.4.1",
      "touch_version": "6.0.4.1",
      "lunch": "cm_jflteusc-userdebug",
      "key": "jflteusc",
      "name": "Samsung Galaxy S4 (US Cellular)",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p21 bs=4096 ; ",
      "legacy_versions": [
        "6.0.3.2",
        "6.0.3.8"
      ],
      "init": "init.jflteusc.rc"
    },
    {
      "version": "6.0.4.1",
      "touch_version": "6.0.4.1",
      "lunch": "cm_jfltexx-userdebug",
      "key": "jfltexx",
      "name": "Samsung Galaxy S4 (i9505)",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p21 bs=4096 ; ",
      "legacy_versions": [
        "6.0.3.2",
        "6.0.3.3",
        "6.0.3.5",
        "6.0.3.6",
        "6.0.3.8"
      ],
      "init": "init.jfltexx.rc"
    },
    {
      "version": "6.0.4.1",
      "touch_version": "6.0.4.1",
      "lunch": "cm_jfltecri-userdebug",
      "key": "jfltecri",
      "name": "Samsung Galaxy S4 (Cricket)",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p21 bs=4096 ; ",
      "legacy_versions": [
        "6.0.3.2",
        "6.0.3.6",
        "6.0.3.8"
      ],
      "init": "init.jfltecri.rc"
    },
    {
      "version": "6.0.3.3",
      "lunch": "cm_lgl55c-userdebug",
      "key": "lgl55c",
      "name": "LG Optimus Q (LGL55C Tracfone)",
      "flash_recovery": "dd if=%s of=/dev/block/mtdblock2 bs=4096 ; ",
      "legacy_versions": [

      ],
      "init": "init.gelato.rc"
    },
    {
      "version": "6.0.4.1",
      "touch_version": "6.0.4.1",
      "lunch": "cm_jfltecsp-userdebug",
      "key": "jfltecsp",
      "name": "Samsung Galaxy S4 (C Spire)",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p21 bs=4096 ; ",
      "legacy_versions": [
        "6.0.3.5",
        "6.0.3.6",
        "6.0.3.8"
      ],
      "init": "init.jfltecsp.rc"
    },
    {
      "version": "6.0.3.5",
      "lunch": "cm_m660-userdebug",
      "key": "m660",
      "name": "Huawei Ascend Q",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p16 ; ",
      "legacy_versions": [

      ],
      "init": "init.highmem.rc"
    },
    {
      "version": "6.0.4.1",
      "touch_version": "6.0.4.1",
      "lunch": "cm_flo-userdebug",
      "key": "flo",
      "name": "Google Nexus 7 (2013)",
      "flash_recovery": "dd if=%s of=/dev/block/platform/msm_sdcc.1/by-name/recovery bs=4096 ; ",
      "legacy_versions": [
        "6.0.3.7"
      ],
      "init": "init.flo.rc"
    },
    {
      "version": "6.0.3.8",
      "touch_version": "6.0.3.8",
      "lunch": "cm_apexqtmo-userdebug",
      "key": "apexqtmo",
      "name": "Samsung SGH-T699",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p18 bs=4096 ; ",
      "legacy_versions": [

      ],
      "init": "init.apexqtmo.rc"
    },
    {
      "version": "6.0.3.8",
      "touch_version": "6.0.3.8",
      "lunch": "cm_e970-userdebug",
      "key": "e970",
      "name": "LG Optimus G (ATT)",
      "flash_recovery": "dd if=%s of=/dev/block/platform/msm_sdcc.1/by-name/recovery bs=4096 ; ",
      "legacy_versions": [

      ],
      "init": "init.gee.rc"
    },
    {
      "version": "6.0.3.8",
      "touch_version": "6.0.3.8",
      "lunch": "cm_e973-userdebug",
      "key": "e973",
      "name": "LG Optimus G (Canada)",
      "flash_recovery": "dd if=%s of=/dev/block/platform/msm_sdcc.1/by-name/recovery bs=4096 ; ",
      "legacy_versions": [

      ],
      "init": "init.gee.rc"
    },
    {
      "version": "6.0.3.8",
      "touch_version": "6.0.3.8",
      "lunch": "cm_ls970-userdebug",
      "key": "ls970",
      "name": "LG Optimus G (Sprint)",
      "flash_recovery": "dd if=%s of=/dev/block/platform/msm_sdcc.1/by-name/recovery bs=4096 ; ",
      "legacy_versions": [

      ],
      "init": "init.gee.rc"
    },
    {
      "version": "6.0.3.8",
      "touch_version": "6.0.3.8",
      "lunch": "cm_e980-userdebug",
      "key": "e980",
      "name": "LG Optimus G Pro (GSM)",
      "flash_recovery": "dd if=/dev/block/platform/msm_sdcc.1/by-name/aboot of=/sdcard/clockworkmod/aboot.img; /data/data/com.koushikdutta.rommanager/files/loki_patch recovery /sdcard/clockworkmod/aboot.img %s /sdcard/clockworkmod/recovery.lok ; /data/data/com.koushikdutta.rommanager/files/loki_flash recovery /sdcard/clockworkmod/recovery.lok ; ",
      "legacy_versions": [

      ],
      "init": "init.gee_gk.rc"
    },
    {
      "version": "6.0.3.9",
      "touch_version": "6.0.3.9",
      "lunch": "cm_l1m-userdebug",
      "key": "l1m",
      "name": "LG Spirit 4G (MetroPCS)",
      "flash_recovery": "dd if=/dev/block/platform/msm_sdcc.1/by-name/aboot of=/sdcard/clockworkmod/aboot.img; /data/data/com.koushikdutta.rommanager/files/loki_patch recovery /sdcard/clockworkmod/aboot.img %s /sdcard/clockworkmod/recovery.lok ; /data/data/com.koushikdutta.rommanager/files/loki_flash recovery /sdcard/clockworkmod/recovery.lok ; ",
      "legacy_versions": [
        "6.0.3.8"
      ],
      "init": "init.l1m.rc"
    },
    {
      "version": "6.0.4.1",
      "touch_version": "6.0.4.1",
      "lunch": "cm_m7vzw-userdebug",
      "key": "m7vzw",
      "name": "m7vzw",
      "legacy_versions": [
        "6.0.3.8"
      ],
      "init": "init.m7vzw.rc"
    }
  ],
  "recovery_url": "http://download2.clockworkmod.com/recoveries/recovery-clockwork-%s-%s.img",
  "recovery_zip_url": "http://download2.clockworkmod.com/recoveries/recovery-clockwork-%s-%s.zip",
  "manifest_signature": "O8+Kc2mdQz0e/AjCQn6Rw6fK5Kr5LZItJ474Ua3gF2o4IgdCQZXIbwCHIo6xeqY3pVEGtjYmmyO1PkRYcGqq2rB2wQM8SoKFl/70vG0ihEZ5TDeruKUgxVVSNM3e09kBvCxYK89GWqVWkNHtvTu1T1F9w6FilzCsNFSAXHD0Bos=",
  "use_in_app": false,
  "keywords": "phone accessories,droid,gadgets,bluetooth headset,car charger,sd card",
  "recovery_twrp_url": "http://download2.clockworkmod.com/twrp/openrecovery-twrp-%s-%s.img"
}