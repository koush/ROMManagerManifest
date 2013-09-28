{
  "manifest": "http://developer.clockworkmod.com/merge",
  "ad_network": "admob",
  "use_in_app": false,
  "recovery_twrp_url": "http://download2.clockworkmod.com/twrp/openrecovery-twrp-%s-%s.img",
  "devices": [
    {
      "name": "Motorola Droid",
      "init": "init.sholes.rc",
      "legacy_versions": [
        "3.1.0.2",
        "2.5.1.4",
        "2.5.1.3",
        "2.5.1.1",
        "2.5.0.1"
      ],
      "version": "2.5.0.1",
      "key": "sholes",
      "alternate_recovery": {
        "name": "SPRecovery 0.99.3b",
        "clockwork": false,
        "url": "http://koush.kanged.net/cm/recoveries/sprecovery.img"
      }
    },
    {
      "name": "HTC MyTouch 3G",
      "init": "init.sapphire.rc",
      "legacy_versions": [
        "2.5.0.7",
        "2.5.1.4",
        "2.5.1.3",
        "2.5.1.1"
      ],
      "version": "2.5.0.7",
      "key": "sapphire",
      "alternate_recovery": {
        "name": "RA Recovery v1.7.0G",
        "clockwork": false,
        "url": "http://files.androidspin.com/downloads.php?dir=amon_ra/RECOVERY/&file=recovery-RA-sapphire-v1.7.0G.img"
      }
    },
    {
      "name": "HTC Magic",
      "init": "init.sapphire.rc",
      "legacy_versions": [
        "2.5.0.7",
        "2.5.1.4",
        "2.5.1.3",
        "2.5.1.1"
      ],
      "version": "2.5.0.7",
      "key": "magic",
      "alternate_recovery": {
        "name": "RA Recovery v1.7.0H",
        "clockwork": false,
        "url": "http://files.androidspin.com/downloads.php?dir=amon_ra/RECOVERY/&file=recovery-RA-sapphire-v1.7.0H.img"
      }
    },
    {
      "name": "HTC G1/Dream",
      "init": "init.trout.rc",
      "legacy_versions": [
        "2.5.0.7",
        "2.5.1.4",
        "2.5.1.3",
        "2.5.1.1"
      ],
      "version": "2.5.0.7",
      "key": "dream",
      "alternate_recovery": {
        "name": "RA Recovery v1.7.0",
        "clockwork": false,
        "url": "http://files.androidspin.com/downloads.php?dir=amon_ra/RECOVERY/&file=recovery-RA-dream-v1.7.0.img"
      }
    },
    {
      "name": "Google Nexus One",
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
      ],
      "lunch": "cyanogen_passion-eng",
      "version": "5.0.2.0",
      "key": "passion",
      "alternate_recovery": {
        "name": "RA Recovery v2.2.1",
        "clockwork": false,
        "url": "http://files.androidspin.com/downloads.php?dir=amon_ra/RECOVERY/&file=recovery-RA-passion-v2.2.1.img"
      }
    },
    {
      "name": "HTC Hero (GSM)",
      "init": "init.hero.rc",
      "legacy_versions": [
        "2.5.0.7",
        "2.5.1.4",
        "2.5.1.3",
        "2.5.1.1"
      ],
      "version": "2.5.0.7",
      "key": "hero",
      "alternate_recovery": {
        "name": "RA Recovery v1.7.0.1",
        "clockwork": false,
        "url": "http://files.androidspin.com/downloads.php?dir=amon_ra/RECOVERY/&file=recovery-RA-hero-v1.7.0.1.img"
      }
    },
    {
      "name": "HTC Hero (CDMA)",
      "init": "init.heroc.rc",
      "legacy_versions": [
        "2.5.0.7",
        "2.5.1.4",
        "2.5.1.3",
        "2.5.1.1"
      ],
      "version": "2.5.0.7",
      "key": "heroc",
      "alternate_recovery": {
        "name": "RA Recovery v1.6.2",
        "clockwork": false,
        "url": "http://www.androidspin.com/downloads.php?dir=amon_ra/RECOVERY/&file=recovery-RA-heroc-v1.6.2.img"
      }
    },
    {
      "name": "HTC Evo",
      "touch_version": "5.8.0.1",
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
      ],
      "lunch": "cyanogen_supersonic-eng",
      "version": "5.0.2.2",
      "key": "supersonic",
      "alternate_recovery": {
        "name": "RA Recovery v2.3",
        "clockwork": false,
        "url": "http://files.androidspin.com/downloads.php?dir=amon_ra/RECOVERY/&file=recovery-RA-supersonic-v2.3.img"
      }
    },
    {
      "name": "HTC Legend",
      "init": "init.legend.rc",
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
      "lunch": "cyanogen_legend-eng",
      "version": "5.0.2.0",
      "key": "legend"
    },
    {
      "name": "HTC Desire",
      "touch_version": "5.8.0.2",
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
      ],
      "lunch": "cyanogen_bravo-eng",
      "version": "5.0.2.0",
      "key": "bravo"
    },
    {
      "name": "HTC Desire CDMA",
      "init": "init.bravoc.rc",
      "legacy_versions": [
        "2.5.0.9",
        "2.5.1.4",
        "2.5.1.3",
        "2.5.1.1",
        "2.5.0.9",
        "5.0.0.1",
        "5.0.1.0"
      ],
      "lunch": "cyanogen_bravoc-eng",
      "version": "5.0.2.0",
      "key": "bravoc"
    },
    {
      "name": "Huawei Pulse Mini",
      "init": "init.qcom.rc",
      "legacy_versions": [
        "2.5.0.7",
        "2.5.1.4",
        "2.5.1.3",
        "2.5.1.1"
      ],
      "version": "2.5.0.7",
      "key": "pulsemini"
    },
    {
      "name": "HTC Incredible (CDMA)",
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
      ],
      "lunch": "cyanogen_inc-eng",
      "version": "5.0.2.0",
      "key": "inc",
      "alternate_recovery": {
        "name": "RA_GNM Recovery v3.02",
        "clockwork": false,
        "url": "http://dl.dropbox.com/u/12949506/RomManager/recovery-RA-inc-3.02.img"
      }
    },
    {
      "name": "HTC Aria",
      "init": "init.liberty.rc",
      "readonly_recovery": true,
      "legacy_versions": [
        "2.5.0.7",
        "2.5.1.4",
        "2.5.1.3",
        "2.5.1.1"
      ],
      "version": "2.5.0.7",
      "key": "liberty"
    },
    {
      "name": "Motorola Droid Eris",
      "init": "init.desirec.rc",
      "readonly_recovery": true,
      "legacy_versions": [
        "2.5.0.7",
        "2.5.1.4",
        "2.5.1.3",
        "2.5.1.1"
      ],
      "version": "2.5.0.7",
      "key": "desirec",
      "alternate_recovery": {
        "name": "RA Recovery v1.6.2",
        "clockwork": false,
        "url": "http://www.androidspin.com/downloads.php?dir=amon_ra/RECOVERY/&file=recovery-RA-eris-v1.6.2.img"
      }
    },
    {
      "name": "HTC Buzz (Wildfire)",
      "init": "init.buzz.rc",
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
      "lunch": "cyanogen_buzz-eng",
      "version": "5.0.2.0",
      "key": "buzz"
    },
    {
      "name": "Dell Streak",
      "init": "init.qcom.rc",
      "legacy_versions": [
        "2.5.0.7",
        "2.5.1.4",
        "2.5.1.3",
        "2.5.1.1"
      ],
      "version": "2.5.0.7",
      "key": "streak"
    },
    {
      "name": "HTC MyTouch Slide",
      "init": "init.latte.rc",
      "readonly_recovery": true,
      "legacy_versions": [
        "2.5.0.7",
        "2.5.1.4",
        "2.5.1.3",
        "2.5.1.1"
      ],
      "version": "2.5.0.7",
      "key": "espresso"
    },
    {
      "name": "Samsung GalaxyS i9000",
      "init": "lpm.rc",
      "readonly_recovery": true,
      "legacy_versions": [
        "2.5.1.2",
        "2.5.1.4",
        "2.5.1.3",
        "2.5.1.1"
      ],
      "version": "2.5.1.2",
      "key": "galaxys"
    },
    {
      "name": "Samsung GalaxyS Fascinate",
      "init": "init.smdkc110.rc",
      "readonly_recovery": true,
      "legacy_versions": [
        "3.0.0.8",
        "2.5.1.4",
        "2.5.1.3",
        "2.5.1.1"
      ],
      "version": "3.0.0.8",
      "key": "fascinate"
    },
    {
      "name": "Samsung GalaxyS Vibrant",
      "init": "init.smdkc110.rc",
      "readonly_recovery": true,
      "legacy_versions": [
        "2.5.1.2",
        "2.5.1.4",
        "2.5.1.3",
        "2.5.1.1"
      ],
      "version": "2.5.1.2",
      "key": "vibrant"
    },
    {
      "name": "Samsung GalaxyS Captivate",
      "init": "init.smdkc110.rc",
      "readonly_recovery": true,
      "legacy_versions": [
        "2.5.1.2",
        "2.5.1.4",
        "2.5.1.3",
        "2.5.1.1"
      ],
      "version": "2.5.1.2",
      "key": "captivate"
    },
    {
      "name": "Huawei Pulse",
      "init": "init.qcom.rc",
      "legacy_versions": [
        "2.5.0.7",
        "2.5.1.4",
        "2.5.1.3",
        "2.5.1.1"
      ],
      "version": "2.5.0.7",
      "key": "pulse"
    },
    {
      "name": "LG Ally",
      "init": "init.aloha.rc",
      "legacy_versions": [
        "2.5.0.7",
        "2.5.1.4",
        "2.5.1.3",
        "2.5.1.1"
      ],
      "version": "2.5.0.7",
      "key": "aloha",
      "alternate_recovery": {
        "name": "RA_GNM Recovery v2.2.2",
        "clockwork": false,
        "url": "http://dl.dropbox.com/u/12949506/RomManager/recovery-RA-aloha-2.2.2-GNM.img"
      }
    },
    {
      "name": "Motorola Milestone",
      "init": "init.mapphone_cdma.rc",
      "readonly_recovery": true,
      "legacy_versions": [
        "2.5.0.7",
        "2.5.1.4",
        "2.5.1.3",
        "2.5.1.1",
        "2.5.0.7"
      ],
      "version": "3.1.0.2",
      "key": "milestone"
    },
    {
      "name": "Motorola Droid X",
      "init": "init.mapphone_cdma.rc",
      "readonly_recovery": true,
      "legacy_versions": [
        "2.5.0.7"
      ],
      "flash_recovery": "dd if=%s of=/preinstall/recovery/recovery.zip ; ",
      "reboot_recovery": "rm /cache/recovery/command ; echo 1 > /data/.recovery_mode ; sync ; reboot ;",
      "version": "5.0.2.0",
      "key": "droidx"
    },
    {
      "name": "Motorola Droid X (2nd-init)",
      "init": "init.mapphone_cdma.rc",
      "readonly_recovery": true,
      "legacy_versions": [
        "2.5.0.7"
      ],
      "flash_recovery": "dd if=%s of=/preinstall/recovery/recovery.zip ; ",
      "lunch": "cyanogen_shadow-eng",
      "reboot_recovery": "rm /cache/recovery/command ; echo 1 > /data/.recovery_mode ; sync ; reboot ;",
      "version": "5.0.2.0",
      "key": "shadow"
    },
    {
      "name": "Acer Liquid",
      "init": "init.salsa.rc",
      "legacy_versions": [
        "2.5.1.4",
        "2.5.1.3",
        "2.5.1.1",
        "2.5.1.0"
      ],
      "version": "2.5.1.0",
      "key": "salsa"
    },
    {
      "name": "Commtiva Z71 (Boston, Blaze, and more)",
      "init": "init.qcom.rc",
      "legacy_versions": [
        "2.5.1.4",
        "2.5.1.3",
        "2.5.1.1",
        "2.5.1.0"
      ],
      "version": "2.5.1.3",
      "key": "z71"
    },
    {
      "name": "HTC G2",
      "touch_version": "5.8.1.0",
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
      ],
      "flash_recovery": "dd if=/dev/zero of=/dev/block/mmcblk0p21 bs=4096 ; dd if=%s of=/dev/block/mmcblk0p21 bs=4096 ; ",
      "lunch": "cyanogen_vision-eng",
      "version": "5.0.2.7",
      "key": "vision"
    },
    {
      "name": "HTC MyTouch 4G",
      "touch_version": "5.8.1.0",
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
      ],
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p21 ; ",
      "lunch": "cyanogen_glacier-eng",
      "version": "5.0.2.0",
      "key": "glacier"
    },
    {
      "name": "HTC Desire HD",
      "touch_version": "5.8.1.5",
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
      ],
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p21 ; ",
      "lunch": "cyanogen_ace-eng",
      "version": "5.0.2.0",
      "key": "ace"
    },
    {
      "name": "Motorola Cliq",
      "touch_version": "5.8.1.0",
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
      ],
      "lunch": "cyanogen_morrison-eng",
      "version": "5.0.2.0",
      "key": "morrison"
    },
    {
      "name": "Motorola Droid 2",
      "init": "init.mapphone_cdma.rc",
      "readonly_recovery": true,
      "legacy_versions": [
        "2.5.0.8"
      ],
      "flash_recovery": "dd if=%s of=/preinstall/recovery/recovery.zip ; ",
      "lunch": "cyanogen_droid2-eng",
      "reboot_recovery": "rm /cache/recovery/command ; echo 1 > /data/.recovery_mode ; sync ; reboot ;",
      "version": "5.0.2.0",
      "key": "droid2"
    },
    {
      "name": "Geeksphone ONE",
      "init": "init.qcom.rc",
      "legacy_versions": [
        "2.5.1.4",
        "2.5.1.3",
        "2.5.1.1",
        "2.5.1.0"
      ],
      "version": "2.5.1.3",
      "key": "one",
      "alternate_recovery": {
        "name": "ONE Recovery v1.6",
        "clockwork": false,
        "url": "http://dl.dropbox.com/u/10355648/recovery-ONE-1_6.img"
      }
    },
    {
      "name": "Advent Vega",
      "init": "init_recovery.rc",
      "legacy_versions": [
        "2.5.1.4",
        "2.5.1.3",
        "2.5.1.1",
        "2.5.1.0",
        "2.5.1.4"
      ],
      "flash_recovery": "/data/data/com.koushikdutta.rommanager/files/tegra_flash_image recovery %s ; ",
      "reboot_recovery": "echo start > /proc/ota ; ",
      "version": "3.0.2.7",
      "key": "vega"
    },
    {
      "name": "Samsung Galaxy Tab - ATT",
      "init": "init.smdkc110.rc",
      "readonly_recovery": true,
      "legacy_versions": [
        "2.5.1.8",
        "2.5.1.4",
        "2.5.1.3",
        "2.5.1.1"
      ],
      "version": "2.5.1.8",
      "key": "att_tab"
    },
    {
      "name": "Samsung Galaxy Tab (T-Mobile)",
      "init": "init.smdkc110.rc",
      "readonly_recovery": true,
      "legacy_versions": [
        "2.5.1.8",
        "2.5.1.4",
        "2.5.1.3",
        "2.5.1.1"
      ],
      "version": "2.5.1.8",
      "key": "tmobile_tab"
    },
    {
      "name": "Commtiva Link N700, Spice MI700, and more",
      "init": "init.qcom.rc",
      "legacy_versions": [
        "2.5.1.4",
        "2.5.1.3",
        "2.5.1.1",
        "2.5.1.0"
      ],
      "version": "2.5.1.2",
      "key": "FM6",
      "alternate_recovery": {
        "name": "MI700 Recovery v1.6",
        "clockwork": false,
        "url": "http://dl.dropbox.com/u/15816725/MI700-recovery-V1_3.img"
      }
    },
    {
      "name": "Google Nexus S",
      "touch_version": "6.0.3.8",
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
      ],
      "lunch": "cm_crespo-userdebug",
      "version": "6.0.3.8",
      "key": "crespo"
    },
    {
      "name": "Motorola Droid Pro",
      "init": "init. mapphone_cdma.rc",
      "readonly_recovery": true,
      "legacy_versions": [
        "2.5.0.8"
      ],
      "version": "2.5.0.8",
      "key": "droidpro"
    },
    {
      "name": "Huawei Ascend",
      "init": "init.qcom.rc",
      "legacy_versions": [
        "3.0.0.5",
        "3.0.0.4"
      ],
      "version": "3.0.0.5",
      "key": "ascend"
    },
    {
      "name": "ZTE Blade",
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
      ],
      "lunch": "cyanogen_blade-eng",
      "version": "5.0.2.0",
      "key": "blade"
    },
    {
      "name": "HTC Click/Tattoo",
      "init": "init.bahamas.rc",
      "legacy_versions": [
        "3.0.0.6",
        "3.0.0.6",
        "3.0.2.7",
        "5.0.0.8",
        "5.0.1.0"
      ],
      "lunch": "cyanogen_click-eng",
      "version": "5.0.2.0",
      "key": "click"
    },
    {
      "name": "Elocity A7",
      "init": "init_recovery.rc",
      "readonly_recovery": true,
      "legacy_versions": [
        "3.0.0.8"
      ],
      "version": "3.0.0.8",
      "key": "a7"
    },
    {
      "name": "Geeksphone Zero",
      "init": "init.zero.rc",
      "legacy_versions": [
        "3.0.1.3"
      ],
      "version": "3.0.1.3",
      "key": "zero"
    },
    {
      "name": "HTC Evo Shift",
      "touch_version": "5.8.1.6",
      "init": "init.speedy.rc",
      "legacy_versions": [
        "3.0.1.4",
        "3.0.1.3",
        "3.0.1.2",
        "3.0.1.1",
        "3.0.1.4",
        "3.0.2.8",
        "3.2.0.1"
      ],
      "lunch": "cyanogen_speedy-eng",
      "version": "5.0.2.0",
      "key": "speedy"
    },
    {
      "name": "Samsung Captivate (MTD)",
      "init": "init.aries.rc",
      "legacy_versions": [

      ],
      "reboot_recovery": "echo 1 > /cache/.startrecovery ; sync ; reboot ;",
      "officially_supported": false,
      "key": "captivatemtd"
    },
    {
      "name": "Samsung Showcase (MTD)",
      "init": "init.aries.rc",
      "legacy_versions": [

      ],
      "reboot_recovery": "echo 1 > /cache/.startrecovery ; sync ; reboot ;",
      "officially_supported": false,
      "key": "showcasemtd"
    },
    {
      "name": "Samsung Mesmerize (MTD)",
      "init": "init.aries.rc",
      "legacy_versions": [

      ],
      "reboot_recovery": "echo 1 > /cache/.startrecovery ; sync ; reboot ;",
      "officially_supported": false,
      "key": "mesmerizemtd"
    },
    {
      "name": "Samsung Fascinate (MTD)",
      "init": "init.aries.rc",
      "legacy_versions": [

      ],
      "reboot_recovery": "echo 1 > /cache/.startrecovery ; sync ; reboot ;",
      "officially_supported": false,
      "key": "fascinatemtd"
    },
    {
      "name": "Samsung Vibrant (MTD)",
      "init": "init.aries.rc",
      "legacy_versions": [

      ],
      "reboot_recovery": "echo 1 > /cache/.startrecovery ; sync ; reboot ;",
      "officially_supported": false,
      "key": "vibrantmtd"
    },
    {
      "name": "Samsung GalaxyS i9000B (MTD)",
      "init": "init.aries.rc",
      "legacy_versions": [

      ],
      "reboot_recovery": "echo 1 > /cache/.startrecovery ; sync ; reboot ;",
      "officially_supported": false,
      "key": "galaxysbmtd"
    },
    {
      "name": "Samsung GalaxyS i9000 (MTD)",
      "init": "init.aries.rc",
      "legacy_versions": [

      ],
      "reboot_recovery": "echo 1 > /cache/.startrecovery ; sync ; reboot ;",
      "officially_supported": false,
      "key": "galaxysmtd"
    },
    {
      "name": "Samsung Epic4G",
      "init": "lpm.rc",
      "readonly_recovery": true,
      "legacy_versions": [

      ],
      "lunch": "full_epic4g-eng",
      "version": "5.0.2.7",
      "key": "epic4g"
    },
    {
      "name": "Dell Streak 7",
      "init": "init.tinyandroid.rc",
      "legacy_versions": [
        "3.0.2.0",
        "3.0.1.9",
        "3.0.1.8",
        "3.0.1.7"
      ],
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk3p1 ; ",
      "version": "3.0.2.0",
      "key": "streak7"
    },
    {
      "name": "HTC Thunderbolt",
      "touch_version": "5.8.0.2",
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
      ],
      "lunch": "cyanogen_mecha-eng",
      "version": "5.0.2.1",
      "key": "mecha",
      "alternate_recovery": {
        "name": "RA_GNM Recovery v3.05",
        "clockwork": false,
        "url": "http://dl.dropbox.com/u/12949506/RomManager/recovery-ra-mecha-3.05.img"
      }
    },
    {
      "name": "Huawei U8150 Ideos",
      "init": "init.ideos.rc",
      "legacy_versions": [
        "3.0.2.4"
      ],
      "version": "3.0.2.4",
      "key": "ideos"
    },
    {
      "name": "Motorola XOOM",
      "touch_version": "6.0.3.1",
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
      ],
      "flash_recovery": "dd if=%s of=/dev/block/platform/sdhci-tegra.3/by-name/recovery ; ",
      "lunch": "cm_stingray-userdebug",
      "version": "6.0.3.1",
      "key": "stingray"
    },
    {
      "name": "HTC HD2",
      "init": "init.leo.rc",
      "legacy_versions": [
        "3.0.2.5",
        "3.0.2.4",
        "3.0.2.5"
      ],
      "version": "3.1.0.0",
      "key": "leo"
    },
    {
      "name": "Motorola CLIQ XT/Quench (MB501)",
      "init": "init.zeppelin.rc",
      "legacy_versions": [
        "3.0.2.4",
        "3.0.2.4",
        "5.0.0.8",
        "5.0.0.8",
        "5.0.1.0",
        "5.0.1.0"
      ],
      "lunch": "cyanogen_zeppelin-eng",
      "version": "5.0.2.0",
      "key": "zeppelin"
    },
    {
      "name": "HTC Desire S",
      "touch_version": "5.8.1.5",
      "init": "init.saga.rc",
      "legacy_versions": [
        "3.0.2.6",
        "5.0.1.9"
      ],
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p21 ; ",
      "lunch": "full_saga-eng",
      "version": "5.0.2.0",
      "key": "saga"
    },
    {
      "name": "LG G2X (T-Mobile)",
      "init": "init_recovery.rc",
      "readonly_recovery": true,
      "legacy_versions": [
        "3.0.2.7",
        "5.0.0.8",
        "5.0.1.0",
        "5.0.1.4",
        "5.0.1.6"
      ],
      "lunch": "cyanogen_p999-eng",
      "reboot_recovery": "echo 'boot-recovery' | dd of=/dev/block/mmcblk0p3 seek=6144 bs=1 ; reboot ; ",
      "version": "5.0.2.0",
      "key": "p999"
    },
    {
      "name": "LG Optimus 2X",
      "inits": [
        "init_recovery.rc",
        "/bootimages/opening_01.rle"
      ],
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
      "lunch": "cm_p990-userdebug",
      "reboot_recovery": "echo 'boot-recovery' | dd of=/dev/block/mmcblk0p3 seek=6144 bs=1 ; reboot ; ",
      "version": "6.0.3.1",
      "key": "p990"
    },
    {
      "name": "Google Nexus S 4G",
      "touch_version": "6.0.3.8",
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
      ],
      "lunch": "cm_crespo4g-userdebug",
      "version": "6.0.3.8",
      "key": "crespo4g"
    },
    {
      "name": "LG Optimus One (old BB)",
      "init": "init.thunderg.rc",
      "legacy_versions": [
        "3.1.0.0",
        "5.0.0.8",
        "5.0.1.0"
      ],
      "lunch": "full_thunderg-eng",
      "version": "5.0.2.0",
      "key": "thunderg",
      "alternate_recovery": {
        "name": "RA_GNM Recovery v2.2.1",
        "clockwork": false,
        "url": "http://dl.dropbox.com/u/12949506/RomManager/recovery-RA-thunderg-2.2.1-GNM.img"
      }
    },
    {
      "name": "LG Optimus One",
      "init": "init.thunderg.rc",
      "legacy_versions": [
        "5.0.2.0"
      ],
      "lunch": "cyanogen_p500-eng",
      "version": "5.0.2.7",
      "key": "p500"
    },
    {
      "name": "Huawei U8220/U8230",
      "init": "init.qcom.rc",
      "legacy_versions": [

      ],
      "version": "3.1.0.1",
      "key": "u8220"
    },
    {
      "name": "Samsung Charge",
      "init": "init.smdkc110.rc",
      "readonly_recovery": true,
      "legacy_versions": [

      ],
      "version": "3.1.0.1",
      "key": "charge"
    },
    {
      "name": "Motorola Defy",
      "init": "init.mapphone_umts.rc",
      "legacy_versions": [

      ],
      "officially_supported": false,
      "key": "umts_jordan"
    },
    {
      "name": "Samsung Galaxy S 4G",
      "init": "init.smdkc110.rc",
      "readonly_recovery": true,
      "legacy_versions": [
        "3.2.0.0"
      ],
      "version": "3.2.0.0",
      "key": "galaxys4g"
    },
    {
      "name": "Samsung Galaxy S2",
      "inits": [
        "init.smdkc210.rc",
        "init.smdk4210.rc"
      ],
      "touch_version": "5.8.1.5",
      "init": "init.smdkc210.rc",
      "readonly_recovery": true,
      "legacy_versions": [
        "4.0.1.4",
        "v4.0.1.4"
      ],
      "ro.product.device": [
        "i9100",
        "galaxys2"
      ],
      "version": "4.0.1.5",
      "key": "galaxys2"
    },
    {
      "name": "Samsung Galaxy S2",
      "inits": [
        "init.smdkc210.rc",
        "init.smdk4210.rc"
      ],
      "init": "init.smdk4210.rc",
      "legacy_versions": [

      ],
      "lunch": "cm_i9100-userdebug",
      "ro.product.device": [
        "i9100",
        "galaxys2"
      ],
      "version": "6.0.1.0",
      "officially_supported": false,
      "key": "i9100"
    },
    {
      "name": "Samsung Galaxy Note (GT-N7000)",
      "init": "init.smdk4210.rc",
      "readonly_recovery": true,
      "legacy_versions": [
        "6.0.1.0"
      ],
      "lunch": "cm_n7000-userdebug",
      "version": "6.0.1.2",
      "key": "n7000"
    },
    {
      "name": "Samsung Sidekick 4G",
      "init": "init.smdkc110.rc",
      "readonly_recovery": true,
      "legacy_versions": [

      ],
      "version": "4.0.0.2",
      "key": "sidekick4g"
    },
    {
      "name": "HTC Incredible S",
      "init": "init.vivo.rc",
      "legacy_versions": [
        "4.0.0.4",
        "4.0.0.6",
        "4.0.0.7",
        "4.0.0.8",
        "5.0.1.9"
      ],
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p21 ; ",
      "lunch": "cyanogen_vivo-eng",
      "version": "5.0.2.0",
      "key": "vivo"
    },
    {
      "name": "HTC Incredible 2",
      "init": "init.vivow.rc",
      "legacy_versions": [
        "4.0.0.4",
        "4.0.0.6",
        "4.0.0.7",
        "4.0.0.8",
        "5.0.1.9"
      ],
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p21 ; ",
      "lunch": "cyanogen_vivow-eng",
      "version": "5.0.2.0",
      "key": "vivow",
      "alternate_recovery": {
        "name": "RA_GNM Recovery v3.05",
        "clockwork": false,
        "url": "http://dl.dropbox.com/u/12949506/RomManager/recovery-ra-vivow-3.05.img"
      }
    },
    {
      "name": "LG Optimus 3D",
      "inits": [
        "init.p920.rc",
        "/bootimages/opening_01.rle"
      ],
      "touch_version": "6.0.1.9",
      "legacy_versions": [
        "4.0.0.7",
        "4.0.0.9",
        "5.0.1.4",
        "5.0.2.0",
        "5.0.2.7"
      ],
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p6 ; ",
      "lunch": "cm_p920-userdebug",
      "reboot_recovery": "echo '518 R 1' > /sys/kernel/kobject_lge_nvdata/dynamic_nvdata_raw_write ; reboot ; ",
      "version": "6.0.1.9",
      "key": "p920"
    },
    {
      "name": "Samsung Galaxy Ace",
      "init": "init.galaxyace.rc",
      "legacy_versions": [

      ],
      "flash_recovery": "/data/data/com.koushikdutta.rommanager/files/flash_image recoveryonly %s ; ",
      "version": "4.0.0.9",
      "key": "galaxyace"
    },
    {
      "name": "Motorola Atrix 4G",
      "inits": [
        "init_prep_keypad.sh",
        "init.olympus.rc"
      ],
      "touch_version": "5.8.1.8",
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
      ],
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p10 ; ",
      "lunch": "generic_olympus-eng",
      "version": "5.0.2.0",
      "key": "olympus"
    },
    {
      "name": "Viewsonic GTablet (smb_a1002)",
      "init": "init_recovery.rc",
      "legacy_versions": [

      ],
      "flash_recovery": "/data/data/com.koushikdutta.rommanager/files/tegra_flash_image recovery %s ; ",
      "version": "4.0.1.5",
      "key": "smb_a1002"
    },
    {
      "name": "HTC EVO 3D",
      "touch_version": "5.8.0.2",
      "init": "init.shooter.rc",
      "legacy_versions": [
        "4.0.1.5",
        "5.0.0.0",
        "5.0.1.0"
      ],
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p22 ; ",
      "lunch": "htc_shooter-eng",
      "version": "5.0.2.0",
      "key": "shooter"
    },
    {
      "name": "HTC Sensation",
      "touch_version": "5.8.0.9",
      "init": "init.pyramid.rc",
      "legacy_versions": [
        "4.0.1.5",
        "5.0.0.1",
        "5.0.0.7",
        "5.0.0.8",
        "5.0.1.0"
      ],
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p21 ; ",
      "lunch": "full_pyramid-eng",
      "version": "5.0.2.0",
      "key": "pyramid"
    },
    {
      "name": "Huawei Ascend 2 (M865)",
      "inits": [
        "init.qcom.rc",
        "init.huawei.rc"
      ],
      "init": "init.qcom.rc",
      "legacy_versions": [

      ],
      "version": "4.0.1.5",
      "key": "ascend2"
    },
    {
      "name": "Micromax A70",
      "init": "init.qcom.rc",
      "legacy_versions": [

      ],
      "version": "4.0.1.5",
      "key": "a70"
    },
    {
      "name": "Samsung Galaxy Gio",
      "init": "init.galaxygio.rc",
      "readonly_recovery": true,
      "legacy_versions": [

      ],
      "version": "4.0.1.5",
      "key": "galaxygio"
    },
    {
      "name": "Samsung Indulge 910",
      "init": "init.smdkc110.rc",
      "readonly_recovery": true,
      "legacy_versions": [

      ],
      "version": "4.0.1.5",
      "key": "indulge910"
    },
    {
      "name": "Samsung Indulge 915",
      "init": "init.smdkc110.rc",
      "readonly_recovery": true,
      "legacy_versions": [

      ],
      "version": "4.0.1.5",
      "key": "indulge915"
    },
    {
      "name": "LG Optimus Black",
      "touch_version": "6.0.1.4",
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
      ],
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p4 ; ",
      "lunch": "cm_p970-userdebug",
      "version": "6.0.1.4",
      "key": "p970"
    },
    {
      "name": "HTC EVO 3D (GSM)",
      "touch_version": "5.8.0.2",
      "init": "init.shooteru.rc",
      "legacy_versions": [
        "5.0.1.6",
        "5.0.1.7",
        "5.0.1.8",
        "5.0.1.9"
      ],
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p21 ; ",
      "lunch": "full_shooteru-eng",
      "version": "5.0.2.0",
      "key": "shooteru"
    },
    {
      "name": "Motorola Droid 2 Global",
      "init": "init.mapphone_cdma.rc",
      "readonly_recovery": true,
      "legacy_versions": [

      ],
      "flash_recovery": "dd if=%s of=/preinstall/recovery/recovery.zip ; ",
      "lunch": "cyanogen_droid2we-eng",
      "reboot_recovery": "rm /cache/recovery/command ; echo 1 > /data/.recovery_mode ; sync ; reboot ;",
      "version": "5.0.2.3",
      "key": "droid2we"
    },
    {
      "name": "Motorola Droid Bionic",
      "init": "init.mapphone_cdma.rc",
      "readonly_recovery": true,
      "legacy_versions": [
        "5.0.2.3",
        "5.0.2.4"
      ],
      "flash_recovery": "dd if=%s of=/preinstall/recovery/recovery.zip ; ",
      "lunch": "generic_targa-eng",
      "reboot_recovery": "rm /cache/recovery/command ; echo 1 > /data/.recovery_mode ; sync ; reboot ;",
      "version": "5.0.2.5",
      "key": "targa"
    },
    {
      "name": "Motorola Droid X2",
      "init": "init.mapphone_cdma.rc",
      "readonly_recovery": true,
      "legacy_versions": [
        "5.0.2.3",
        "5.0.2.4"
      ],
      "flash_recovery": "dd if=%s of=/preinstall/recovery/recovery.zip ; ",
      "lunch": "generic_daytona-eng",
      "reboot_recovery": "rm /cache/recovery/command ; echo 1 > /data/.recovery_mode ; sync ; reboot ;",
      "version": "5.0.2.5",
      "key": "daytona"
    },
    {
      "name": "Motorola Droid 3",
      "init": "init.mapphone_cdma.rc",
      "readonly_recovery": true,
      "legacy_versions": [
        "5.0.2.5"
      ],
      "flash_recovery": "dd if=%s of=/preinstall/recovery/recovery.zip ; ",
      "lunch": "full_solana-eng",
      "reboot_recovery": "rm /cache/recovery/command ; echo 1 > /data/.recovery_mode ; sync ; reboot ;",
      "version": "5.0.2.6",
      "key": "solana"
    },
    {
      "name": "Motorola Backflip",
      "init": "init.motus.rc",
      "legacy_versions": [

      ],
      "lunch": "cyanogen_motus-eng",
      "version": "5.0.2.6",
      "key": "motus"
    },
    {
      "name": "Samsung Galaxy Mini",
      "init": "init.gt-s5570.rc",
      "readonly_recovery": true,
      "legacy_versions": [

      ],
      "lunch": "tass-eng",
      "version": "5.0.2.6",
      "key": "tass"
    },
    {
      "name": "Huawei U8800",
      "init": "init.u8800.rc",
      "legacy_versions": [

      ],
      "flash_recovery": "mount -o remount,rw -t vfat /dev/block/mmcblk0p1 /cust_backup ; cat %s > /cust_backup/image/recovery.img ;",
      "lunch": "huawei_u8800-eng",
      "version": "5.0.2.6",
      "key": "u8800"
    },
    {
      "name": "Samsung Galaxy S2 (AT&T)",
      "inits": [
        "init.smdkc210.rc",
        "init.smdk4210.rc"
      ],
      "touch_version": "5.8.1.5",
      "init": "init.smdkc210.rc",
      "readonly_recovery": true,
      "legacy_versions": [

      ],
      "lunch": "cyanogen_galaxys2att-eng",
      "version": "5.0.2.6",
      "key": "galaxys2att"
    },
    {
      "name": "Samsung Galaxy S2 (T-Mobile)",
      "touch_version": "6.0.3.6",
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
      ],
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p22 bs=4096 ; ",
      "owners": {
        "jmprblckwing182@gmail.com": true
      },
      "lunch": "cm_hercules-userdebug",
      "version": "6.0.3.6",
      "key": "hercules"
    },
    {
      "name": "Samsung Epic 4G Touch",
      "touch_version": "5.8.1.5",
      "init": "init.smdkc210.rc",
      "readonly_recovery": true,
      "legacy_versions": [
        "5.0.2.6",
        "5.0.2.7"
      ],
      "lunch": "full_epic4gtouch-eng",
      "version": "5.0.2.7",
      "key": "epic4gtouch"
    },
    {
      "name": "HTC Amaze",
      "init": "init.ruby.rc",
      "legacy_versions": [

      ],
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p23 bs=4096 ; ",
      "lunch": "full_ruby-eng",
      "version": "5.0.2.6",
      "key": "ruby"
    },
    {
      "name": "Samsung Galaxy 5",
      "init": "init.gt-i5500.rc",
      "readonly_recovery": true,
      "legacy_versions": [
        "5.0.2.8"
      ],
      "lunch": "samsung_galaxy5-eng",
      "version": "5.0.2.8",
      "key": "galaxy5"
    },
    {
      "name": "ZTE Racer",
      "init": "init.mooncake.rc",
      "legacy_versions": [

      ],
      "lunch": "generic_mooncake-eng",
      "version": "5.0.2.7",
      "key": "mooncake"
    },
    {
      "name": "Samsung Galaxy Tab (VZW)",
      "init": "init.smdkc110.rc",
      "readonly_recovery": true,
      "legacy_versions": [
        "5.0.2.7",
        "5.0.2.7",
        "5.0.2.7"
      ],
      "lunch": "full_vzwtab-eng",
      "version": "5.0.2.7",
      "key": "vzwtab"
    },
    {
      "name": "HTC MyTouch 4G Slide",
      "init": "init.doubleshot.rc",
      "legacy_versions": [
        "5.0.2.7",
        "5.0.2.7"
      ],
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p21 bs=4096 ; ",
      "lunch": "full_doubleshot-eng",
      "version": "5.0.2.7",
      "key": "doubleshot"
    },
    {
      "name": "Google Galaxy Nexus (GSM)",
      "touch_version": "6.0.3.6",
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
      ],
      "flash_recovery": "dd if=%s of=/dev/block/platform/omap/omap_hsmmc.0/by-name/recovery bs=4096 ;",
      "lunch": "cm_maguro-userdebug",
      "version": "6.0.3.6",
      "key": "maguro"
    },
    {
      "name": "Google Galaxy Nexus (Verizon)",
      "touch_version": "6.0.3.6",
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
      ],
      "flash_recovery": "dd if=%s of=/dev/block/platform/omap/omap_hsmmc.0/by-name/recovery bs=4096 ;",
      "lunch": "cm_toro-userdebug",
      "version": "6.0.3.6",
      "key": "toro"
    },
    {
      "name": "LG Optimus C LW690 and Optimus M MS690",
      "init": "init.thunderc.rc",
      "legacy_versions": [

      ],
      "lunch": "full_lg690-eng",
      "version": "5.0.2.7",
      "key": "lg690"
    },
    {
      "name": "LG Optimus Pro",
      "init": "init.muscat.rc",
      "legacy_versions": [

      ],
      "lunch": "c660-eng",
      "version": "5.0.2.7",
      "key": "c660"
    },
    {
      "name": "LG Optimus Hub",
      "init": "init.univa.rc",
      "legacy_versions": [

      ],
      "lunch": "e510-eng",
      "version": "5.0.2.7",
      "key": "e510"
    },
    {
      "name": "Samsung Epic4G (MTD)",
      "touch_version": "5.8.1.5",
      "init": "init.victory.rc",
      "legacy_versions": [

      ],
      "lunch": "cyanogen_epicmtd-eng",
      "reboot_recovery": "/system/xbin/busybox devmem 0x57fff800 32 0x5EC0B007; sync ; reboot ;",
      "version": "5.0.2.7",
      "officially_supported": false,
      "key": "epicmtd"
    },
    {
      "name": "HTC Holiday",
      "init": "init.holiday.rc",
      "legacy_versions": [
        "5.0.2.7",
        "5.0.2.7",
        "5.0.2.7"
      ],
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p23 bs=4096 ; ",
      "lunch": "full_holiday-eng",
      "version": "5.0.2.7",
      "key": "holiday"
    },
    {
      "name": "LG Optimus SOL / TMo LG myTouch",
      "inits": [
        "init.victor.rc",
        "init.e739.rc"
      ],
      "legacy_versions": [

      ],
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p17 bs=4096 ;",
      "lunch": "e730-eng",
      "version": "5.0.2.7",
      "key": "e730"
    },
    {
      "name": "HTC Wildfire S",
      "init": "init.marvel.rc",
      "legacy_versions": [
        "5.0.2.7"
      ],
      "lunch": "generic_marvel-eng",
      "version": "5.0.2.8",
      "key": "marvel"
    },
    {
      "name": "Motorola Photon 4G",
      "inits": [
        "init.mapphone_umts.rc",
        "init.mapphone_cdma.rc"
      ],
      "init": "init.mapphone_umts.rc",
      "legacy_versions": [
        "5.0.2.7"
      ],
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p10 bs=4096 ;",
      "lunch": "full_sunfire-eng",
      "version": "5.0.2.8",
      "key": "sunfire"
    },
    {
      "name": "Huawei U8160",
      "inits": [
        "init.huawei.rc",
        "init.u8160.rc"
      ],
      "init": "init.u8160.rc",
      "legacy_versions": [
        "5.0.2.8"
      ],
      "lunch": "huawei_u8160-eng",
      "version": "5.0.2.8",
      "key": "u8160"
    },
    {
      "name": "HTC Rezound",
      "touch_version": "6.0.3.1",
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
      ],
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p23 bs=4096 ;",
      "lunch": "cm_vigor-userdebug",
      "version": "6.0.3.1",
      "key": "vigor"
    },
    {
      "name": "HTC EVO View 4G",
      "init": "init.expresskt.rc",
      "legacy_versions": [

      ],
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p21 bs=4096 ;",
      "lunch": "full_express-userdebug",
      "version": "5.8.1.5",
      "key": "express"
    },
    {
      "name": "Asus Transformer Prime",
      "touch_version": "5.8.3.4",
      "init": "init.cardhu.rc",
      "legacy_versions": [
        "5.5.0.4",
        "5.8.2.0"
      ],
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p4 ;",
      "lunch": "cm_tf201-userdebug",
      "version": "5.8.3.4",
      "key": "tf201"
    },
    {
      "name": "Motorola Droid 4",
      "init": "init.mapphone_cdma.rc",
      "legacy_versions": [

      ],
      "reboot_recovery": "rm /cache/recovery/command ; echo 1 > /data/.recovery_mode ; sync ; reboot ;",
      "version": "5.0.2.0",
      "officially_supported": false,
      "key": "maserati"
    },
    {
      "name": "Motorola RAZR",
      "init": "init.mapphone_cdma.rc",
      "legacy_versions": [

      ],
      "reboot_recovery": "rm /cache/recovery/command ; echo 1 > /data/.recovery_mode ; sync ; reboot ;",
      "version": "5.0.2.0",
      "officially_supported": false,
      "key": "spyder"
    },
    {
      "name": "HTC Wildfire S CDMA",
      "init": "init.marvelc.rc",
      "legacy_versions": [

      ],
      "lunch": "full_marvelc-eng",
      "version": "5.0.2.8",
      "key": "marvelc"
    },
    {
      "name": "Asus Transformer",
      "touch_version": "5.8.3.4",
      "init": "init.ventana.rc",
      "legacy_versions": [
        "5.5.0.4",
        "5.8.1.9",
        "5.8.2.0",
        "5.8.2.1",
        "5.8.3.4"
      ],
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p4 ;",
      "lunch": "cm_tf101-userdebug",
      "version": "6.0.1.3",
      "key": "tf101"
    },
    {
      "name": "LG Nitro HD / LG P930 (AT&T)",
      "touch_version": "6.0.1.5",
      "init": "bootimages/boot_logo_00000.rle",
      "legacy_versions": [
        "5.8.2.0",
        "6.0.1.4"
      ],
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p13 ;",
      "lunch": "cm_p930-userdebug",
      "version": "6.0.1.5",
      "key": "p930"
    },
    {
      "name": "Samsung Galaxy S2 (SGH-I777)",
      "inits": [
        "init.smdkc210.rc",
        "init.smdk4210.rc"
      ],
      "touch_version": "6.0.1.0",
      "init": "init.smdkc210.rc",
      "readonly_recovery": true,
      "legacy_versions": [
        "5.8.1.8"
      ],
      "lunch": "cm_i777-userdebug",
      "version": "6.0.1.0",
      "key": "i777"
    },
    {
      "name": "HTC Pico",
      "init": "init.pico.rc",
      "legacy_versions": [

      ],
      "lunch": "full_pico-eng",
      "version": "5.0.2.8",
      "key": "pico"
    },
    {
      "name": "HTC One X (GSM)",
      "touch_version": "5.8.4.0",
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
      ],
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p5 bs=4096 ;",
      "lunch": "cm_endeavoru-userdebug",
      "version": "5.8.4.0",
      "key": "endeavoru"
    },
    {
      "name": "HTC One S",
      "touch_version": "6.0.3.1",
      "init": "init.ville.rc",
      "legacy_versions": [
        "5.5.0.4",
        "5.8.2.1",
        "5.8.2.2",
        "5.8.2.3",
        "5.8.3.1",
        "6.0.2.9"
      ],
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p22 bs=4096 ;",
      "lunch": "cm_ville-userdebug",
      "version": "6.0.3.1",
      "key": "ville"
    },
    {
      "name": "Samsung Galaxy Tab (MTD and GSM)",
      "init": "init.p1.rc",
      "legacy_versions": [

      ],
      "reboot_recovery": "echo 1 > /cache/.startrecovery ; sync ; reboot ;",
      "version": "5.8.2.1",
      "officially_supported": false,
      "key": "p1"
    },
    {
      "name": "Samsung Galaxy Tab (MTD and CDMA)",
      "init": "init.p1c.rc",
      "legacy_versions": [

      ],
      "reboot_recovery": "echo 1 > /cache/.startrecovery ; sync ; reboot ;",
      "version": "5.8.2.1",
      "officially_supported": false,
      "key": "p1c"
    },
    {
      "name": "Google Galaxy Nexus (Sprint)",
      "touch_version": "6.0.3.6",
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
      ],
      "flash_recovery": "dd if=%s of=/dev/block/platform/omap/omap_hsmmc.0/by-name/recovery bs=4096 ;",
      "lunch": "cm_toroplus-userdebug",
      "version": "6.0.3.6",
      "key": "toroplus"
    },
    {
      "name": "Samsung Galaxy Tab 10.1 (Wifi)",
      "touch_version": "6.0.3.1",
      "init": "ueventd.p3.rc",
      "legacy_versions": [
        "4.0.0.4",
        "5.8.3.1",
        "6.0.2.9",
        "6.0.3.0"
      ],
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p2 ; ",
      "lunch": "cm_p4wifi-userdebug",
      "version": "6.0.3.1",
      "key": "p4wifi"
    },
    {
      "name": "Motorola XOOM (Wi-Fi only)",
      "touch_version": "6.0.3.1",
      "init": "init.wingray.rc",
      "legacy_versions": [
        "5.8.3.1",
        "6.0.2.9"
      ],
      "flash_recovery": "dd if=%s of=/dev/block/platform/sdhci-tegra.3/by-name/recovery ; ",
      "lunch": "cm_wingray-userdebug",
      "version": "6.0.3.1",
      "key": "wingray"
    },
    {
      "name": "LG Marquee",
      "init": "init.omap.post_boot.sh",
      "legacy_versions": [

      ],
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p4 bs=4096 ; ",
      "lunch": "full_marquee-eng",
      "version": "5.0.2.8",
      "key": "marquee"
    },
    {
      "name": "LG Ignite",
      "init": "init.omap.post_boot.sh",
      "legacy_versions": [

      ],
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p4 bs=4096 ; ",
      "lunch": "full_ignite-eng",
      "version": "5.0.2.8",
      "key": "ignite"
    },
    {
      "name": "LG Connect 4G MS840",
      "touch_version": "5.8.3.1",
      "init": "init.target.rc",
      "legacy_versions": [

      ],
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p13 bs=4096 ; ",
      "lunch": "full_ms840-userdebug",
      "version": "5.8.3.1",
      "key": "ms840"
    },
    {
      "name": "LG Lucid VS840",
      "touch_version": "5.8.3.1",
      "init": "init.target.rc",
      "legacy_versions": [

      ],
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p13 bs=4096 ; ",
      "lunch": "full_vs840-userdebug",
      "version": "5.8.3.1",
      "key": "vs840"
    },
    {
      "name": "HTC EVO LTE",
      "touch_version": "5.8.3.5",
      "init": "init.jewel.rc",
      "legacy_versions": [
        "5.8.3.4",
        "5.8.3.4"
      ],
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p22 bs=4096 ; ",
      "lunch": "cm_jewel-userdebug",
      "version": "5.8.3.5",
      "key": "jewel"
    },
    {
      "name": "Samsung Galaxy S3 (GT-I9300)",
      "ro.product.devices": [
        "i9300",
        "m0"
      ],
      "touch_version": "6.0.3.6",
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
      ],
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p6 bs=4096 ; ",
      "lunch": "cm_i9300-userdebug",
      "version": "6.0.3.6",
      "key": "i9300"
    },
    {
      "name": "Samsung Skyrocket",
      "touch_version": "6.0.3.3",
      "init": "init.qcom.usb.rc",
      "legacy_versions": [
        "5.8.4.3",
        "6.0.1.0",
        "6.0.1.4"
      ],
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p22 bs=4096 ; ",
      "lunch": "cm_skyrocket-userdebug",
      "version": "6.0.3.1",
      "key": "skyrocket"
    },
    {
      "name": "Samsung Galaxy Note (AT&T)",
      "touch_version": "6.0.3.6",
      "init": "init.qcom.usb.rc",
      "legacy_versions": [
        "5.8.4.3",
        "5.8.4.8",
        "6.0.3.1"
      ],
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p22 bs=4096 ; ",
      "lunch": "cm_quincyatt-userdebug",
      "version": "6.0.3.6",
      "key": "quincyatt"
    },
    {
      "name": "LG Optimus L3",
      "init": "init.e0.rc",
      "legacy_versions": [

      ],
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p17 bs=4096 ; ",
      "lunch": "cm_e400-userdebug",
      "version": "5.8.4.5",
      "key": "e400"
    },
    {
      "name": "HTC One V",
      "init": "init.primou.rc",
      "readonly_recovery": true,
      "legacy_versions": [

      ],
      "lunch": "cm_primou-userdebug",
      "version": "5.8.4.5",
      "key": "primou"
    },
    {
      "name": "Samsung Galaxy S3 (AT&T)",
      "touch_version": "6.0.3.8",
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
      ],
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p18 bs=4096 ; ",
      "lunch": "cm_d2att-userdebug",
      "version": "6.0.3.8",
      "key": "d2att"
    },
    {
      "name": "Samsung Galaxy S3 (T-Mobile)",
      "ro.product.devices": [
        "d2tmo",
        "d2lteMetroPCS"
      ],
      "touch_version": "6.0.3.8",
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
      ],
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p18 bs=4096 ; ",
      "lunch": "cm_d2tmo-userdebug",
      "version": "6.0.3.8",
      "key": "d2tmo"
    },
    {
      "name": "Samsung Galaxy S3 (Sprint)",
      "touch_version": "6.0.3.8",
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
      ],
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p18 bs=4096 ; ",
      "lunch": "cm_d2spr-userdebug",
      "version": "6.0.3.8",
      "key": "d2spr"
    },
    {
      "name": "Samsung Galaxy S3 (Verizon)",
      "touch_version": "6.0.3.8",
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
      ],
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p18 bs=4096 ; ",
      "twrp_version": "2.4.3.0",
      "lunch": "cm_d2vzw-userdebug",
      "version": "6.0.3.8",
      "key": "d2vzw"
    },
    {
      "name": "HTC One V (CDMA)",
      "touch_version": "5.8.4.7",
      "init": "init.primoc.rc",
      "readonly_recovery": true,
      "legacy_versions": [
        "5.8.4.6",
        "5.8.4.7"
      ],
      "lunch": "full_primoc-userdebug",
      "version": "5.8.4.7",
      "key": "primoc"
    },
    {
      "name": "Google Nexus 7",
      "touch_version": "6.0.3.8",
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
      ],
      "flash_recovery": "dd if=%s of=/dev/block/platform/sdhci-tegra.3/by-name/SOS bs=4096 ; ",
      "lunch": "cm_grouper-userdebug",
      "version": "6.0.3.8",
      "key": "grouper"
    },
    {
      "name": "LG Optimus LTE (SKT)",
      "touch_version": "6.0.1.0",
      "init": "init.su640.rc",
      "legacy_versions": [

      ],
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p13 bs=4096 ; ",
      "lunch": "cm_su640-userdebug",
      "version": "6.0.1.0",
      "key": "su640"
    },
    {
      "name": "Samsung Galaxy S2 (GT-I9100G)",
      "init": "init.t1.rc",
      "legacy_versions": [

      ],
      "lunch": "cm_i9100g-userdebug",
      "version": "6.0.1.0",
      "officially_supported": false,
      "key": "i9100g"
    },
    {
      "name": "Samsung Galaxy Tab 2 (GT-P3100)",
      "touch_version": "6.0.2.7",
      "init": "init.espresso.rc",
      "legacy_versions": [
        "6.0.1.1",
        "6.0.2.3"
      ],
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p6 bs=4096 ; ",
      "lunch": "cm_p3100-userdebug",
      "version": "6.0.2.7",
      "key": "p3100"
    },
    {
      "name": "Samsung Galaxy Tab 2 (GT-P3110)",
      "touch_version": "6.0.2.7",
      "init": "init.espresso.rc",
      "legacy_versions": [
        "6.0.1.1",
        "6.0.2.3"
      ],
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p6 bs=4096 ; ",
      "lunch": "cm_p3110-userdebug",
      "version": "6.0.2.7",
      "key": "p3110"
    },
    {
      "name": "Samsung Galaxy Tab 2 (GT-P3113)",
      "touch_version": "6.0.2.3",
      "init": "init.espresso.rc",
      "legacy_versions": [
        "6.0.1.1"
      ],
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p6 bs=4096 ; ",
      "lunch": "cm_p3113-userdebug",
      "version": "6.0.2.3",
      "key": "p3113"
    },
    {
      "name": "Samsung Galaxy Tab 2 (GT-P5100)",
      "touch_version": "6.0.2.7",
      "init": "init.espresso10.rc",
      "legacy_versions": [
        "6.0.1.1",
        "6.0.2.3"
      ],
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p6 bs=4096 ; ",
      "lunch": "cm_p5100-userdebug",
      "version": "6.0.2.7",
      "key": "p5100"
    },
    {
      "name": "Samsung Galaxy Tab 2 (GT-P5110)",
      "touch_version": "6.0.2.7",
      "init": "init.espresso10.rc",
      "legacy_versions": [
        "6.0.1.1",
        "6.0.2.3"
      ],
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p6 bs=4096 ; ",
      "lunch": "cm_p5110-userdebug",
      "version": "6.0.2.7",
      "key": "p5110"
    },
    {
      "name": "Samsung Galaxy Tab 2 (GT-P5113)",
      "touch_version": "6.0.2.3",
      "init": "init.espresso10.rc",
      "legacy_versions": [
        "6.0.1.1"
      ],
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p6 bs=4096 ; ",
      "lunch": "cm_p5113-userdebug",
      "version": "6.0.2.3",
      "key": "p5113"
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
      "init": "init.target.rc",
      "legacy_versions": [

      ],
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p13 bs=4096 ; ",
      "lunch": "cm_vs920-userdebug",
      "version": "6.0.1.1",
      "key": "vs920"
    },
    {
      "name": "Score & Score M",
      "touch_version": "6.0.1.1",
      "init": "init.zte.rc",
      "legacy_versions": [

      ],
      "lunch": "cm_x500-userdebug",
      "version": "6.0.1.1",
      "key": "x500"
    },
    {
      "name": "LG Revolution 4G",
      "inits": [
        "init.qcom.rc",
        "init.bryce.rc"
      ],
      "touch_version": "6.0.1.1",
      "init": "init.qcom.rc",
      "legacy_versions": [

      ],
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p14 bs=4096 ; ",
      "lunch": "cm_vs910-userdebug",
      "version": "6.0.1.1",
      "key": "vs910"
    },
    {
      "name": "LG Esteeem 4G",
      "inits": [
        "init.qcom.rc",
        "init.bryce.rc"
      ],
      "touch_version": "6.0.1.1",
      "init": "init.qcom.rc",
      "legacy_versions": [
        "5.0.2.8"
      ],
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p14 bs=4096 ; ",
      "lunch": "cm_ms910-userdebug",
      "version": "6.0.1.1",
      "key": "ms910"
    },
    {
      "name": "LG Optimus M+",
      "inits": [
        "init.qcom.rc",
        "init.m3.rc"
      ],
      "touch_version": "6.0.1.1",
      "init": "init.qcom.rc",
      "legacy_versions": [
        "6.0.1.0"
      ],
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p17 bs=4096 ; ",
      "lunch": "cm_ms695-userdebug",
      "version": "6.0.1.1",
      "key": "ms695"
    },
    {
      "name": "Samsung Galaxy Tab (MTD and GSM - L)",
      "init": "init.p1.rc",
      "legacy_versions": [

      ],
      "reboot_recovery": "echo 1 > /cache/.startrecovery ; sync ; reboot ;",
      "version": "5.8.2.1",
      "officially_supported": false,
      "key": "p1l"
    },
    {
      "name": "Samsung Galaxy Tab (MTD and GSM - N)",
      "init": "init.p1.rc",
      "legacy_versions": [

      ],
      "reboot_recovery": "echo 1 > /cache/.startrecovery ; sync ; reboot ;",
      "version": "5.8.2.1",
      "officially_supported": false,
      "key": "p1n"
    },
    {
      "name": "Samsung Galaxy S3 (US Cellular)",
      "touch_version": "6.0.3.8",
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
      ],
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p18 bs=4096 ; ",
      "lunch": "cm_d2usc-userdebug",
      "version": "6.0.3.8",
      "key": "d2usc"
    },
    {
      "name": "Motorola Photon Q",
      "inits": [
        "init.asanti.rc",
        "init.sprint.rc"
      ],
      "init": "init.mmi.usb.rc",
      "legacy_versions": [

      ],
      "flash_recovery": "dd if=%s of=/dev/block/platform/msm_sdcc.1/by-name/recovery bs=4096 ; ",
      "lunch": "cm_asanti-userdebug",
      "version": "6.0.1.3",
      "key": "asanti"
    },
    {
      "name": "LG Optimus Me",
      "init": "init.pecan.rc",
      "legacy_versions": [
        "6.0.1.3",
        "6.0.1.4"
      ],
      "lunch": "cm_p350-userdebug",
      "version": "6.0.1.5",
      "key": "p350"
    },
    {
      "name": "Samsung Galaxy Tab 8.9 (AT&T)",
      "init": "fstab.qcom",
      "legacy_versions": [

      ],
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p22 bs=4096 ; ",
      "lunch": "cm_p5att-userdebug",
      "version": "6.0.1.4",
      "key": "p5att"
    },
    {
      "name": "Samsung Galaxy S Blaze 4G",
      "touch_version": "6.0.3.8",
      "init": "init.target.rc",
      "legacy_versions": [
        "6.0.1.4"
      ],
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p22 bs=4096 ; ",
      "lunch": "cm_t769-userdebug",
      "version": "6.0.3.8",
      "key": "t769"
    },
    {
      "name": "Samsung Galaxy S3 (MetroPCS)",
      "inits": [
        "init.carrier.rc",
        "init.d2mtr.rc"
      ],
      "touch_version": "6.0.3.8",
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
      ],
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p18 bs=4096 ; ",
      "lunch": "cm_d2mtr-userdebug",
      "version": "6.0.3.8",
      "key": "d2mtr"
    },
    {
      "name": "Asus Transformer Pad Infinity",
      "touch_version": "6.0.3.1",
      "init": "init.tf700t.rc",
      "legacy_versions": [
        "6.0.1.8",
        "6.0.2.3"
      ],
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p4 bs=4096 ; ",
      "lunch": "cm_tf700t-userdebug",
      "reboot_recovery": "echo 'boot-recovery' | dd of=/dev/block/mmcblk0p3 seek=6144 bs=1 ; reboot ; ",
      "version": "6.0.3.1",
      "key": "tf700t"
    },
    {
      "name": "Google Nexus 10",
      "touch_version": "6.0.3.8",
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
      ],
      "flash_recovery": "dd if=%s of=/dev/block/platform/dw_mmc.0/by-name/recovery bs=4096 ; ",
      "lunch": "cm_manta-userdebug",
      "version": "6.0.3.8",
      "key": "manta"
    },
    {
      "name": "Google Nexus 4",
      "touch_version": "6.0.3.8",
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
      ],
      "flash_recovery": "dd if=%s of=/dev/block/platform/msm_sdcc.1/by-name/recovery bs=4096 ; ",
      "lunch": "cm_mako-userdebug",
      "version": "6.0.3.8",
      "key": "mako"
    },
    {
      "name": "HTC Droid DNA",
      "touch_version": "6.0.3.1",
      "init": "init.debug_mfgkernel.rc",
      "legacy_versions": [
        "6.0.1.5",
        "6.0.1.9",
        "6.0.2.3",
        "6.0.2.7",
        "6.0.2.8",
        "6.0.3.0"
      ],
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p20 bs=4096 ; ",
      "lunch": "cm_dlx-userdebug",
      "version": "6.0.3.1",
      "key": "dlx"
    },
    {
      "name": "Samsung Galaxy Note 2 (HSPA+)",
      "touch_version": "6.0.3.6",
      "init": "init.smdk4x12.rc",
      "legacy_versions": [
        "6.0.1.9",
        "6.0.3.0",
        "6.0.3.1"
      ],
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p9 bs=4096 ; ",
      "lunch": "cm_n7100-userdebug",
      "version": "6.0.3.6",
      "key": "n7100"
    },
    {
      "name": "Acer A700",
      "touch_version": "6.0.3.1",
      "init": "init.picasso_mf.rc",
      "legacy_versions": [
        "6.0.2.3"
      ],
      "flash_recovery": "dd if=%s of=/dev/block/platform/sdhci-tegra.3/by-name/SOS bs=4096 ; ",
      "lunch": "cm_a700-userdebug",
      "version": "6.0.3.1",
      "key": "a700"
    },
    {
      "name": "Google Nexus 7 (GSM)",
      "touch_version": "6.0.3.6",
      "init": "init.tilapia.rc",
      "legacy_versions": [
        "6.0.2.3",
        "6.0.3.1",
        "6.0.3.5"
      ],
      "flash_recovery": "dd if=%s of=/dev/block/platform/sdhci-tegra.3/by-name/SOS bs=4096 ; ",
      "lunch": "cm_tilapia-userdebug",
      "version": "6.0.3.6",
      "key": "tilapia"
    },
    {
      "name": "Samsung Galaxy Note 2 (LTE)",
      "touch_version": "6.0.3.6",
      "init": "init.t0lte.rc",
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
      "lunch": "cm_t0lte-userdebug",
      "version": "6.0.3.6",
      "key": "t0lte"
    },
    {
      "name": "LG Optimus 3DMax",
      "inits": [
        "init.lgep720board.rc",
        "/bootimages/battery_charging_01.rle"
      ],
      "touch_version": "6.0.2.3",
      "legacy_versions": [

      ],
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p6 ; ",
      "lunch": "cm_p720-userdebug",
      "reboot_recovery": "echo '518 R 1' > /sys/kernel/kobject_lge_nvdata/dynamic_nvdata_raw_write ; reboot ; ",
      "version": "6.0.2.3",
      "key": "p720"
    },
    {
      "name": "Samsung Galaxy S3 (Cricket)",
      "touch_version": "6.0.3.8",
      "init": "init.d2cri.rc",
      "legacy_versions": [
        "6.0.2.7",
        "6.0.2.8",
        "6.0.2.9",
        "6.0.3.0",
        "6.0.3.1",
        "6.0.3.6",
        "6.0.3.7"
      ],
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p18 bs=4096 ; ",
      "lunch": "cm_d2cri-userdebug",
      "version": "6.0.3.8",
      "key": "d2cri"
    },
    {
      "name": "HTC Sensation XL",
      "touch_version": "6.0.2.7",
      "init": "init.runnymede.rc",
      "legacy_versions": [

      ],
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p21 bs=4096 ; ",
      "lunch": "cm_runnymede-userdebug",
      "version": "6.0.2.7",
      "key": "runnymede"
    },
    {
      "name": "Pantech Presto",
      "touch_version": "6.0.2.7",
      "init": "init.presto.rc",
      "legacy_versions": [

      ],
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p18 bs=4096 ; ",
      "lunch": "cm_presto-userdebug",
      "version": "6.0.2.7",
      "key": "presto"
    },
    {
      "name": "ZTE Sequent",
      "touch_version": "6.0.2.7",
      "init": "init.warp2.rc",
      "legacy_versions": [

      ],
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p13 bs=4096 ; ",
      "lunch": "cm_warp2-userdebug",
      "version": "6.0.2.7",
      "key": "warp2"
    },
    {
      "name": "Google Nexus Q",
      "init": "init.steelhead.rc",
      "legacy_versions": [
        "6.0.2.7"
      ],
      "flash_recovery": "dd if=%s of=/dev/block/platform/omap/omap_hsmmc.0/by-name/recovery bs=4096 ; ",
      "lunch": "cm_steelhead-userdebug",
      "version": "6.0.3.1",
      "key": "steelhead"
    },
    {
      "name": "Samsung Prevail 2 (Boost Mobile)",
      "inits": [
        "init.carrier.rc",
        "init.prevail2spr.rc"
      ],
      "touch_version": "6.0.2.7",
      "legacy_versions": [

      ],
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p15 bs=4096 ; ",
      "lunch": "cm_prevail2spr-userdebug",
      "version": "6.0.2.7",
      "key": "prevail2spr"
    },
    {
      "name": "Samsung Galaxy S3 Mini",
      "touch_version": "6.0.2.7",
      "init": "init.golden.rc",
      "legacy_versions": [

      ],
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p21 bs=4096 ; ",
      "lunch": "cm_golden-userdebug",
      "version": "6.0.2.7",
      "key": "golden"
    },
    {
      "name": "HTC Droid Incredible 4G LTE",
      "touch_version": "6.0.3.3",
      "init": "init.fireball.rc",
      "legacy_versions": [
        "6.0.2.8",
        "6.0.2.9",
        "6.0.3.1"
      ],
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p22 bs=4096 ; ",
      "lunch": "cm_fireball-userdebug",
      "version": "6.0.3.3",
      "key": "fireball"
    },
    {
      "name": "HTC Jetstream",
      "touch_version": "6.0.2.8",
      "init": "init.puccinilte.rc",
      "legacy_versions": [

      ],
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p23 bs=4096 ; ",
      "lunch": "cm_puccinilte-userdebug",
      "version": "6.0.2.8",
      "key": "puccinilte"
    },
    {
      "name": "LG Optimus L7",
      "touch_version": "6.0.2.8",
      "init": "init.u0.rc",
      "legacy_versions": [

      ],
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p17 bs=4096 ; ",
      "lunch": "cm_p700-userdebug",
      "version": "6.0.2.8",
      "key": "p700"
    },
    {
      "name": "HTC One",
      "touch_version": "6.0.3.1",
      "init": "init.m7.rc",
      "legacy_versions": [
        "6.0.2.8",
        "6.0.3.0"
      ],
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p34 bs=4096 ; ",
      "lunch": "cm_m7-userdebug",
      "version": "6.0.3.1",
      "key": "m7"
    },
    {
      "name": "HTC Butterfly (dlxu)",
      "touch_version": "6.0.3.1",
      "init": "init.dlxu.rc",
      "legacy_versions": [
        "6.0.2.8",
        "6.0.3.0"
      ],
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p20 bs=4096 ; ",
      "lunch": "cm_dlxu-userdebug",
      "version": "6.0.3.1",
      "key": "dlxu"
    },
    {
      "name": "HTC Butterfly (dlxub1)",
      "touch_version": "6.0.3.1",
      "init": "init.dlxub1.rc",
      "legacy_versions": [
        "6.0.2.8",
        "6.0.3.0"
      ],
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p20 bs=4096 ; ",
      "lunch": "cm_dlxub1-userdebug",
      "version": "6.0.3.1",
      "key": "dlxub1"
    },
    {
      "name": "HTC Butterfly J",
      "touch_version": "6.0.3.1",
      "init": "init.dlxj.rc",
      "legacy_versions": [
        "6.0.2.8",
        "6.0.3.0"
      ],
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p20 bs=4096 ; ",
      "lunch": "cm_dlxj-userdebug",
      "version": "6.0.3.1",
      "key": "dlxj"
    },
    {
      "name": "LG Optimus L5",
      "init": "init.m4.rc",
      "legacy_versions": [

      ],
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p17 bs=4096 ; ",
      "lunch": "cm_e610-userdebug",
      "version": "6.0.2.8",
      "key": "e610"
    },
    {
      "name": "HTC One X (AT&T)",
      "touch_version": "6.0.3.1",
      "init": "init.evita.rc",
      "legacy_versions": [
        "6.0.2.8"
      ],
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p22 bs=4096 ; ",
      "lunch": "cm_evita-userdebug",
      "version": "6.0.3.1",
      "key": "evita"
    },
    {
      "name": "Samsung Galaxy Tab 10.1",
      "ro.product.devices": [
        "p4",
        "GT-P7500",
        "p7500"
      ],
      "touch_version": "6.0.3.1",
      "init": "init.p4.rc",
      "legacy_versions": [
        "6.0.2.9",
        "6.0.3.0"
      ],
      "flash_recovery": "dd if=%s of=/dev/block/platform/sdhci-tegra.3/by-num/p2 bs=4096 ; ",
      "lunch": "cm_p4-userdebug",
      "version": "6.0.3.1",
      "key": "p4"
    },
    {
      "name": "Samsung Galaxy Tab 10.1 (T-Mobile)",
      "touch_version": "6.0.3.1",
      "init": "init.p4tmo.rc",
      "legacy_versions": [
        "6.0.2.9",
        "6.0.3.0"
      ],
      "flash_recovery": "dd if=%s of=/dev/block/platform/sdhci-tegra.3/by-num/p2 bs=4096 ; ",
      "lunch": "cm_p4tmo-userdebug",
      "version": "6.0.3.1",
      "key": "p4tmo"
    },
    {
      "name": "Samsung Galaxy Tab 10.1 (Verizon)",
      "touch_version": "6.0.3.1",
      "init": "init.p4vzw.rc",
      "legacy_versions": [
        "6.0.2.9",
        "6.0.3.0"
      ],
      "flash_recovery": "dd if=%s of=/dev/block/platform/sdhci-tegra.3/by-num/p2 bs=4096 ; ",
      "lunch": "cm_p4vzw-userdebug",
      "version": "6.0.3.1",
      "key": "p4vzw"
    },
    {
      "name": "LG Optimus L9",
      "touch_version": "6.0.3.1",
      "init": "init.u0.rc",
      "legacy_versions": [
        "6.0.2.9"
      ],
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p4 bs=4096 ; ",
      "lunch": "cm_p760-userdebug",
      "version": "6.0.3.1",
      "key": "p760"
    },
    {
      "name": "Samsung Galaxy S3 LTE (GT-I9305)",
      "touch_version": "6.0.3.6",
      "init": "ueventd.smdk4x12.rc",
      "legacy_versions": [
        "6.0.2.9",
        "6.0.3.1",
        "6.0.3.2"
      ],
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p9 bs=4096 ; ",
      "lunch": "cm_i9305-userdebug",
      "version": "6.0.3.6",
      "key": "i9305"
    },
    {
      "name": "Samsung Galaxy Tab 10.1v",
      "touch_version": "6.0.3.1",
      "init": "init.p3.rc",
      "legacy_versions": [
        "6.0.2.9"
      ],
      "flash_recovery": "dd if=%s of=/dev/block/platform/sdhci-tegra.3/by-num/p2 bs=4096 ; ",
      "lunch": "cm_p3-userdebug",
      "version": "6.0.3.1",
      "key": "p3"
    },
    {
      "name": "Samsung Galaxy Note 10.1",
      "touch_version": "6.0.3.6",
      "init": "init.n8013.rc",
      "legacy_versions": [
        "6.0.3.0",
        "6.0.3.1"
      ],
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p6 bs=4096 ; ",
      "lunch": "cm_n8013-userdebug",
      "version": "6.0.3.6",
      "key": "n8013"
    },
    {
      "name": "Samsung Galaxy Note 2 (Verizon)",
      "ro.product.devices": [
        "i605",
        "t0ltevzw"
      ],
      "touch_version": "6.0.3.0",
      "init": "init.i605.rc",
      "legacy_versions": [

      ],
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p9 bs=4096 ; ",
      "lunch": "cm_i605-userdebug",
      "version": "6.0.3.0",
      "key": "i605"
    },
    {
      "name": "Samsung Galaxy Note 2 (Sprint)",
      "ro.product.devices": [
        "l900",
        "t0ltespr"
      ],
      "touch_version": "6.0.3.1",
      "init": "init.l900.rc",
      "legacy_versions": [
        "6.0.3.0"
      ],
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p9 bs=4096 ; ",
      "lunch": "cm_l900-userdebug",
      "version": "6.0.3.1",
      "key": "l900"
    },
    {
      "name": "Samsung Galaxy Note 2 (AT&T)",
      "touch_version": "6.0.3.6",
      "init": "init.t0lteatt.rc",
      "legacy_versions": [
        "6.0.3.0",
        "6.0.3.1"
      ],
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p9 bs=4096 ; ",
      "lunch": "cm_t0lteatt-userdebug",
      "version": "6.0.3.6",
      "key": "t0lteatt"
    },
    {
      "name": "Samsung Galaxy Note 2 (T-Mobile)",
      "touch_version": "6.0.3.7",
      "init": "init.t0ltetmo.rc",
      "legacy_versions": [
        "6.0.3.0",
        "6.0.3.1",
        "6.0.3.6"
      ],
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p9 bs=4096 ; ",
      "lunch": "cm_t0ltetmo-userdebug",
      "version": "6.0.3.7",
      "key": "t0ltetmo"
    },
    {
      "name": "LG Optimus G Intl (E975)",
      "touch_version": "6.0.3.0",
      "init": "init.geehrc.rc",
      "legacy_versions": [

      ],
      "flash_recovery": "dd if=%s of=/dev/block/platform/msm_sdcc.1/by-name/recovery bs=4096 ; ",
      "lunch": "cm_e975-userdebug",
      "version": "6.0.3.0",
      "key": "e975"
    },
    {
      "name": "LG Optimus 4X HD",
      "touch_version": "6.0.3.1",
      "init": "init.x3.rc",
      "legacy_versions": [

      ],
      "flash_recovery": "dd if=%s of=/dev/block/platform/sdhci-tegra.3/by-name/SOS bs=4096 ; ",
      "lunch": "cm_p880-userdebug",
      "reboot_recovery": "echo 'boot-recovery' | dd of=/dev/block/mmcblk0p5 bs=1 count=13 ; reboot ; ",
      "version": "6.0.3.1",
      "key": "p880"
    },
    {
      "name": "Samsung Galaxy Note (T-Mobile)",
      "touch_version": "6.0.3.6",
      "init": "init.quincytmo.rc",
      "legacy_versions": [
        "6.0.3.1"
      ],
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p22 bs=4096 ; ",
      "lunch": "cm_quincytmo-userdebug",
      "version": "6.0.3.6",
      "key": "quincytmo"
    },
    {
      "name": "Samsung Galaxy Note 10.1 (GSM)",
      "touch_version": "6.0.3.6",
      "init": "init.n8000.rc",
      "legacy_versions": [
        "6.0.3.1"
      ],
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p6 bs=4096 ; ",
      "lunch": "cm_n8000-userdebug",
      "version": "6.0.3.6",
      "key": "n8000"
    },
    {
      "name": "Oppo Find5",
      "touch_version": "6.0.3.7",
      "init": "init.find5.rc",
      "legacy_versions": [
        "6.0.3.1"
      ],
      "flash_recovery": "dd if=%s of=/dev/block/platform/msm_sdcc.1/by-name/recovery bs=4096 ; ",
      "lunch": "cm_find5-userdebug",
      "version": "6.0.3.7",
      "key": "find5"
    },
    {
      "name": "Samsung Galaxy S4 (T-Mobile)",
      "ro.product.devices": [
        "jfltetmo",
        "jflteMetroPCS"
      ],
      "touch_version": "6.0.3.6",
      "init": "init.jfltetmo.rc",
      "legacy_versions": [
        "6.0.3.2"
      ],
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p21 bs=4096 ; ",
      "lunch": "cm_jfltetmo-userdebug",
      "version": "6.0.3.6",
      "key": "jfltetmo"
    },
    {
      "name": "Samsung Galaxy S4 (Canada/Bell)",
      "touch_version": "6.0.3.6",
      "init": "init.jfltecan.rc",
      "legacy_versions": [
        "6.0.3.2"
      ],
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p21 bs=4096 ; ",
      "lunch": "cm_jfltecan-userdebug",
      "version": "6.0.3.6",
      "key": "jfltecan"
    },
    {
      "name": "ZTE Engage",
      "init": "init.zte.rc",
      "legacy_versions": [

      ],
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p17 bs=4096 ; ",
      "lunch": "cm_V8000-userdebug",
      "version": "6.0.3.2",
      "key": "V8000"
    },
    {
      "name": "Samsung Galaxy S4 (i9500)",
      "touch_version": "6.0.3.2",
      "init": "init.i9500.rc",
      "legacy_versions": [

      ],
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p10 bs=4096 ; ",
      "lunch": "cm_i9500-userdebug",
      "version": "6.0.3.2",
      "key": "i9500"
    },
    {
      "name": "Motorola Xoom (GSM)",
      "touch_version": "6.0.3.2",
      "init": "init.everest.rc",
      "legacy_versions": [

      ],
      "flash_recovery": "dd if=%s of=/dev/block/platform/sdhci-tegra.3/by-name/recovery bs=4096 ; ",
      "lunch": "cm_everest-userdebug",
      "version": "6.0.3.2",
      "key": "everest"
    },
    {
      "name": "HTC Desire X",
      "touch_version": "6.0.3.2",
      "init": "init.protou.rc",
      "legacy_versions": [

      ],
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p21 bs=4096 ; ",
      "lunch": "cm_protou-userdebug",
      "version": "6.0.3.2",
      "key": "protou"
    },
    {
      "name": "HTC One (Sprint)",
      "ro.product.devices": [
        "m7spr",
        "m7wls"
      ],
      "touch_version": "6.0.3.6",
      "init": "init.m7spr.rc",
      "legacy_versions": [
        "6.0.3.2"
      ],
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p36 bs=4096 ; ",
      "lunch": "cm_m7spr-userdebug",
      "version": "6.0.3.6",
      "key": "m7spr"
    },
    {
      "name": "HTC One (T-Mobile)",
      "touch_version": "6.0.3.6",
      "init": "init.m7tmo.rc",
      "legacy_versions": [
        "6.0.3.2"
      ],
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p34 bs=4096 ; ",
      "lunch": "cm_m7tmo-userdebug",
      "version": "6.0.3.6",
      "key": "m7tmo"
    },
    {
      "name": "HTC One (AT&T)",
      "touch_version": "6.0.3.6",
      "init": "init.m7att.rc",
      "legacy_versions": [
        "6.0.3.2",
        "6.0.3.5"
      ],
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p34 bs=4096 ; ",
      "lunch": "cm_m7att-userdebug",
      "version": "6.0.3.6",
      "key": "m7att"
    },
    {
      "name": "Samsung Galaxy S4 (AT&T)",
      "touch_version": "6.0.3.6",
      "init": "init.jflteatt.rc",
      "legacy_versions": [
        "6.0.3.2"
      ],
      "flash_recovery": "dd if=/dev/block/platform/msm_sdcc.1/by-name/aboot of=/sdcard/clockworkmod/aboot.img; /data/data/com.koushikdutta.rommanager/files/loki_patch recovery /sdcard/clockworkmod/aboot.img %s /sdcard/clockworkmod/recovery.lok ; /data/data/com.koushikdutta.rommanager/files/loki_flash recovery /sdcard/clockworkmod/recovery.lok ; ",
      "lunch": "cm_jflteatt-userdebug",
      "version": "6.0.3.6",
      "key": "jflteatt"
    },
    {
      "name": "HTC One (non-US GSM)",
      "touch_version": "6.0.3.6",
      "init": "init.m7ul.rc",
      "legacy_versions": [
        "6.0.3.2"
      ],
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p34 bs=4096 ; ",
      "lunch": "cm_m7ul-userdebug",
      "version": "6.0.3.6",
      "key": "m7ul"
    },
    {
      "name": "Samsung Galaxy S4 (Verizon)",
      "touch_version": "6.0.3.6",
      "init": "init.jfltevzw.rc",
      "legacy_versions": [
        "6.0.3.2"
      ],
      "flash_recovery": "dd if=/dev/block/platform/msm_sdcc.1/by-name/aboot of=/sdcard/clockworkmod/aboot.img; /data/data/com.koushikdutta.rommanager/files/loki_patch recovery /sdcard/clockworkmod/aboot.img %s /sdcard/clockworkmod/recovery.lok ; /data/data/com.koushikdutta.rommanager/files/loki_flash recovery /sdcard/clockworkmod/recovery.lok ; ",
      "lunch": "cm_jfltevzw-userdebug",
      "version": "6.0.3.6",
      "key": "jfltevzw"
    },
    {
      "name": "Samsung Galaxy S4 (Sprint)",
      "touch_version": "6.0.3.6",
      "init": "init.jfltespr.rc",
      "legacy_versions": [
        "6.0.3.2"
      ],
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p21 bs=4096 ; ",
      "lunch": "cm_jfltespr-userdebug",
      "version": "6.0.3.6",
      "key": "jfltespr"
    },
    {
      "name": "Samsung Galaxy S4 (US Cellular)",
      "touch_version": "6.0.3.2",
      "init": "init.jflteusc.rc",
      "legacy_versions": [

      ],
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p21 bs=4096 ; ",
      "lunch": "cm_jflteusc-userdebug",
      "version": "6.0.3.2",
      "key": "jflteusc"
    },
    {
      "name": "Samsung Galaxy S4 (i9505)",
      "touch_version": "6.0.3.6",
      "init": "init.jfltexx.rc",
      "legacy_versions": [
        "6.0.3.2",
        "6.0.3.3",
        "6.0.3.5"
      ],
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p21 bs=4096 ; ",
      "lunch": "cm_jfltexx-userdebug",
      "version": "6.0.3.6",
      "key": "jfltexx"
    },
    {
      "name": "Samsung Galaxy S4 (Cricket)",
      "touch_version": "6.0.3.6",
      "init": "init.jfltecri.rc",
      "legacy_versions": [
        "6.0.3.2"
      ],
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p21 bs=4096 ; ",
      "lunch": "cm_jfltecri-userdebug",
      "version": "6.0.3.6",
      "key": "jfltecri"
    },
    {
      "name": "LG Optimus Q (LGL55C Tracfone)",
      "init": "init.gelato.rc",
      "legacy_versions": [

      ],
      "flash_recovery": "dd if=%s of=/dev/block/mtdblock2 bs=4096 ; ",
      "lunch": "cm_lgl55c-userdebug",
      "version": "6.0.3.3",
      "key": "lgl55c"
    },
    {
      "name": "Samsung Galaxy S4 (C Spire)",
      "touch_version": "6.0.3.6",
      "init": "init.jfltecsp.rc",
      "legacy_versions": [
        "6.0.3.5"
      ],
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p21 bs=4096 ; ",
      "lunch": "cm_jfltecsp-userdebug",
      "version": "6.0.3.6",
      "key": "jfltecsp"
    },
    {
      "name": "Huawei Ascend Q",
      "init": "init.highmem.rc",
      "legacy_versions": [

      ],
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p16 ; ",
      "lunch": "cm_m660-userdebug",
      "version": "6.0.3.5",
      "key": "m660"
    },
    {
      "name": "Google Nexus 7 (2013)",
      "touch_version": "6.0.3.7",
      "init": "init.flo.rc",
      "legacy_versions": [

      ],
      "flash_recovery": "dd if=%s of=/dev/block/platform/msm_sdcc.1/by-name/recovery bs=4096 ; ",
      "lunch": "cm_flo-userdebug",
      "version": "6.0.3.7",
      "key": "flo"
    },
    {
      "name": "Samsung SGH-T699",
      "touch_version": "6.0.3.8",
      "init": "init.apexqtmo.rc",
      "legacy_versions": [

      ],
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p18 bs=4096 ; ",
      "lunch": "cm_apexqtmo-userdebug",
      "version": "6.0.3.8",
      "key": "apexqtmo"
    },
    {
      "name": "e970",
      "touch_version": "6.0.3.8",
      "init": "init.e970.rc",
      "legacy_versions": [

      ],
      "lunch": "cm_e970-userdebug",
      "version": "6.0.3.8",
      "key": "e970"
    },
    {
      "name": "e980",
      "touch_version": "6.0.3.8",
      "init": "init.e980.rc",
      "legacy_versions": [

      ],
      "key": "e980"
    }
  ],
  "keywords": "phone accessories,droid,gadgets,bluetooth headset,car charger,sd card",
  "recovery_zip_url": "http://download2.clockworkmod.com/recoveries/recovery-clockwork-%s-%s.zip",
  "recovery_url": "http://download2.clockworkmod.com/recoveries/recovery-clockwork-%s-%s.img",
  "owners": {
    "daniel.hillenbrand@codeworkx.de": true,
    "attn1.repo@gmail.com": true,
    "echen@cyngn.com": true,
    "ferguson.david@gmail.com": true,
    "keaneyw@gmail.com": true,
    "utkanos@gmail.com": true,
    "njgreb@gmail.com": true,
    "playfulgod@gmail.com": true,
    "bigbeeshane@gmail.com": true,
    "cvpcsm@gmail.com": true,
    "arcee@cyanogenmod.com": true,
    "layhertony@gmail.com": true,
    "koush@clockworkmod.com": true
  },
  "manifest_signature": "O8+Kc2mdQz0e/AjCQn6Rw6fK5Kr5LZItJ474Ua3gF2o4IgdCQZXIbwCHIo6xeqY3pVEGtjYmmyO1PkRYcGqq2rB2wQM8SoKFl/70vG0ihEZ5TDeruKUgxVVSNM3e09kBvCxYK89GWqVWkNHtvTu1T1F9w6FilzCsNFSAXHD0Bos=",
  "version": "2.5.0.1"
}