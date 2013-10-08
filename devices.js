{
  "manifest": "http://developer.clockworkmod.com/merge",
  "use_in_app": false,
  "owners": {
    "layhertony@gmail.com": true,
    "cvpcsm@gmail.com": true,
    "attn1.repo@gmail.com": true,
    "bigbeeshane@gmail.com": true,
    "ferguson.david@gmail.com": true,
    "daniel.hillenbrand@codeworkx.de": true,
    "keaneyw@gmail.com": true,
    "arcee@cyanogenmod.com": true,
    "utkanos@gmail.com": true,
    "koush@clockworkmod.com": true,
    "echen@cyngn.com": true,
    "njgreb@gmail.com": true,
    "playfulgod@gmail.com": true
  },
  "devices": [
    {
      "name": "Motorola Droid",
      "alternate_recovery": {
        "name": "SPRecovery 0.99.3b",
        "url": "http://koush.kanged.net/cm/recoveries/sprecovery.img",
        "clockwork": false
      },
      "legacy_versions": [
        "3.1.0.2",
        "2.5.1.4",
        "2.5.1.3",
        "2.5.1.1",
        "2.5.0.1"
      ],
      "version": "2.5.0.1",
      "init": "init.sholes.rc",
      "key": "sholes"
    },
    {
      "name": "HTC MyTouch 3G",
      "alternate_recovery": {
        "name": "RA Recovery v1.7.0G",
        "url": "http://files.androidspin.com/downloads.php?dir=amon_ra/RECOVERY/&file=recovery-RA-sapphire-v1.7.0G.img",
        "clockwork": false
      },
      "legacy_versions": [
        "2.5.0.7",
        "2.5.1.4",
        "2.5.1.3",
        "2.5.1.1"
      ],
      "version": "2.5.0.7",
      "init": "init.sapphire.rc",
      "key": "sapphire"
    },
    {
      "name": "HTC Magic",
      "alternate_recovery": {
        "name": "RA Recovery v1.7.0H",
        "url": "http://files.androidspin.com/downloads.php?dir=amon_ra/RECOVERY/&file=recovery-RA-sapphire-v1.7.0H.img",
        "clockwork": false
      },
      "legacy_versions": [
        "2.5.0.7",
        "2.5.1.4",
        "2.5.1.3",
        "2.5.1.1"
      ],
      "version": "2.5.0.7",
      "init": "init.sapphire.rc",
      "key": "magic"
    },
    {
      "name": "HTC G1/Dream",
      "alternate_recovery": {
        "name": "RA Recovery v1.7.0",
        "url": "http://files.androidspin.com/downloads.php?dir=amon_ra/RECOVERY/&file=recovery-RA-dream-v1.7.0.img",
        "clockwork": false
      },
      "legacy_versions": [
        "2.5.0.7",
        "2.5.1.4",
        "2.5.1.3",
        "2.5.1.1"
      ],
      "version": "2.5.0.7",
      "init": "init.trout.rc",
      "key": "dream"
    },
    {
      "name": "Google Nexus One",
      "alternate_recovery": {
        "name": "RA Recovery v2.2.1",
        "url": "http://files.androidspin.com/downloads.php?dir=amon_ra/RECOVERY/&file=recovery-RA-passion-v2.2.1.img",
        "clockwork": false
      },
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
      "version": "5.0.2.0",
      "init": "init.mahimahi.rc",
      "key": "passion"
    },
    {
      "name": "HTC Hero (GSM)",
      "alternate_recovery": {
        "name": "RA Recovery v1.7.0.1",
        "url": "http://files.androidspin.com/downloads.php?dir=amon_ra/RECOVERY/&file=recovery-RA-hero-v1.7.0.1.img",
        "clockwork": false
      },
      "legacy_versions": [
        "2.5.0.7",
        "2.5.1.4",
        "2.5.1.3",
        "2.5.1.1"
      ],
      "version": "2.5.0.7",
      "init": "init.hero.rc",
      "key": "hero"
    },
    {
      "name": "HTC Hero (CDMA)",
      "alternate_recovery": {
        "name": "RA Recovery v1.6.2",
        "url": "http://www.androidspin.com/downloads.php?dir=amon_ra/RECOVERY/&file=recovery-RA-heroc-v1.6.2.img",
        "clockwork": false
      },
      "legacy_versions": [
        "2.5.0.7",
        "2.5.1.4",
        "2.5.1.3",
        "2.5.1.1"
      ],
      "version": "2.5.0.7",
      "init": "init.heroc.rc",
      "key": "heroc"
    },
    {
      "name": "HTC Evo",
      "touch_version": "5.8.0.1",
      "alternate_recovery": {
        "name": "RA Recovery v2.3",
        "url": "http://files.androidspin.com/downloads.php?dir=amon_ra/RECOVERY/&file=recovery-RA-supersonic-v2.3.img",
        "clockwork": false
      },
      "lunch": "cyanogen_supersonic-eng",
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
      "version": "5.0.2.2",
      "init": "init.supersonic.rc",
      "key": "supersonic"
    },
    {
      "name": "HTC Legend",
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
      "version": "5.0.2.0",
      "init": "init.legend.rc",
      "key": "legend"
    },
    {
      "name": "HTC Desire",
      "touch_version": "5.8.0.2",
      "lunch": "cyanogen_bravo-eng",
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
      "version": "5.0.2.0",
      "init": "init.bravo.rc",
      "key": "bravo"
    },
    {
      "name": "HTC Desire CDMA",
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
      "version": "5.0.2.0",
      "init": "init.bravoc.rc",
      "key": "bravoc"
    },
    {
      "name": "Huawei Pulse Mini",
      "legacy_versions": [
        "2.5.0.7",
        "2.5.1.4",
        "2.5.1.3",
        "2.5.1.1"
      ],
      "version": "2.5.0.7",
      "init": "init.qcom.rc",
      "key": "pulsemini"
    },
    {
      "name": "HTC Incredible (CDMA)",
      "alternate_recovery": {
        "name": "RA_GNM Recovery v3.02",
        "url": "http://dl.dropbox.com/u/12949506/RomManager/recovery-RA-inc-3.02.img",
        "clockwork": false
      },
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
      "version": "5.0.2.0",
      "init": "init.inc.rc",
      "key": "inc"
    },
    {
      "name": "HTC Aria",
      "readonly_recovery": true,
      "legacy_versions": [
        "2.5.0.7",
        "2.5.1.4",
        "2.5.1.3",
        "2.5.1.1"
      ],
      "version": "2.5.0.7",
      "init": "init.liberty.rc",
      "key": "liberty"
    },
    {
      "name": "Motorola Droid Eris",
      "alternate_recovery": {
        "name": "RA Recovery v1.6.2",
        "url": "http://www.androidspin.com/downloads.php?dir=amon_ra/RECOVERY/&file=recovery-RA-eris-v1.6.2.img",
        "clockwork": false
      },
      "readonly_recovery": true,
      "legacy_versions": [
        "2.5.0.7",
        "2.5.1.4",
        "2.5.1.3",
        "2.5.1.1"
      ],
      "version": "2.5.0.7",
      "init": "init.desirec.rc",
      "key": "desirec"
    },
    {
      "name": "HTC Buzz (Wildfire)",
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
      "version": "5.0.2.0",
      "init": "init.buzz.rc",
      "key": "buzz"
    },
    {
      "name": "Dell Streak",
      "legacy_versions": [
        "2.5.0.7",
        "2.5.1.4",
        "2.5.1.3",
        "2.5.1.1"
      ],
      "version": "2.5.0.7",
      "init": "init.qcom.rc",
      "key": "streak"
    },
    {
      "name": "HTC MyTouch Slide",
      "readonly_recovery": true,
      "legacy_versions": [
        "2.5.0.7",
        "2.5.1.4",
        "2.5.1.3",
        "2.5.1.1"
      ],
      "version": "2.5.0.7",
      "init": "init.latte.rc",
      "key": "espresso"
    },
    {
      "name": "Samsung GalaxyS i9000",
      "readonly_recovery": true,
      "legacy_versions": [
        "2.5.1.2",
        "2.5.1.4",
        "2.5.1.3",
        "2.5.1.1"
      ],
      "version": "2.5.1.2",
      "init": "lpm.rc",
      "key": "galaxys"
    },
    {
      "name": "Samsung GalaxyS Fascinate",
      "readonly_recovery": true,
      "legacy_versions": [
        "3.0.0.8",
        "2.5.1.4",
        "2.5.1.3",
        "2.5.1.1"
      ],
      "version": "3.0.0.8",
      "init": "init.smdkc110.rc",
      "key": "fascinate"
    },
    {
      "name": "Samsung GalaxyS Vibrant",
      "readonly_recovery": true,
      "legacy_versions": [
        "2.5.1.2",
        "2.5.1.4",
        "2.5.1.3",
        "2.5.1.1"
      ],
      "version": "2.5.1.2",
      "init": "init.smdkc110.rc",
      "key": "vibrant"
    },
    {
      "name": "Samsung GalaxyS Captivate",
      "readonly_recovery": true,
      "legacy_versions": [
        "2.5.1.2",
        "2.5.1.4",
        "2.5.1.3",
        "2.5.1.1"
      ],
      "version": "2.5.1.2",
      "init": "init.smdkc110.rc",
      "key": "captivate"
    },
    {
      "name": "Huawei Pulse",
      "legacy_versions": [
        "2.5.0.7",
        "2.5.1.4",
        "2.5.1.3",
        "2.5.1.1"
      ],
      "version": "2.5.0.7",
      "init": "init.qcom.rc",
      "key": "pulse"
    },
    {
      "name": "LG Ally",
      "alternate_recovery": {
        "name": "RA_GNM Recovery v2.2.2",
        "url": "http://dl.dropbox.com/u/12949506/RomManager/recovery-RA-aloha-2.2.2-GNM.img",
        "clockwork": false
      },
      "legacy_versions": [
        "2.5.0.7",
        "2.5.1.4",
        "2.5.1.3",
        "2.5.1.1"
      ],
      "version": "2.5.0.7",
      "init": "init.aloha.rc",
      "key": "aloha"
    },
    {
      "name": "Motorola Milestone",
      "readonly_recovery": true,
      "legacy_versions": [
        "2.5.0.7",
        "2.5.1.4",
        "2.5.1.3",
        "2.5.1.1",
        "2.5.0.7"
      ],
      "version": "3.1.0.2",
      "init": "init.mapphone_cdma.rc",
      "key": "milestone"
    },
    {
      "name": "Motorola Droid X",
      "flash_recovery": "dd if=%s of=/preinstall/recovery/recovery.zip ; ",
      "reboot_recovery": "rm /cache/recovery/command ; echo 1 > /data/.recovery_mode ; sync ; reboot ;",
      "readonly_recovery": true,
      "legacy_versions": [
        "2.5.0.7"
      ],
      "version": "5.0.2.0",
      "init": "init.mapphone_cdma.rc",
      "key": "droidx"
    },
    {
      "name": "Motorola Droid X (2nd-init)",
      "flash_recovery": "dd if=%s of=/preinstall/recovery/recovery.zip ; ",
      "lunch": "cyanogen_shadow-eng",
      "reboot_recovery": "rm /cache/recovery/command ; echo 1 > /data/.recovery_mode ; sync ; reboot ;",
      "readonly_recovery": true,
      "legacy_versions": [
        "2.5.0.7"
      ],
      "version": "5.0.2.0",
      "init": "init.mapphone_cdma.rc",
      "key": "shadow"
    },
    {
      "name": "Acer Liquid",
      "legacy_versions": [
        "2.5.1.4",
        "2.5.1.3",
        "2.5.1.1",
        "2.5.1.0"
      ],
      "version": "2.5.1.0",
      "init": "init.salsa.rc",
      "key": "salsa"
    },
    {
      "name": "Commtiva Z71 (Boston, Blaze, and more)",
      "legacy_versions": [
        "2.5.1.4",
        "2.5.1.3",
        "2.5.1.1",
        "2.5.1.0"
      ],
      "version": "2.5.1.3",
      "init": "init.qcom.rc",
      "key": "z71"
    },
    {
      "name": "HTC G2",
      "touch_version": "5.8.1.0",
      "flash_recovery": "dd if=/dev/zero of=/dev/block/mmcblk0p21 bs=4096 ; dd if=%s of=/dev/block/mmcblk0p21 bs=4096 ; ",
      "lunch": "cyanogen_vision-eng",
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
      "version": "5.0.2.7",
      "init": "init.vision.rc",
      "key": "vision"
    },
    {
      "name": "HTC MyTouch 4G",
      "touch_version": "5.8.1.0",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p21 ; ",
      "lunch": "cyanogen_glacier-eng",
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
      "version": "5.0.2.0",
      "init": "init.glacier.rc",
      "key": "glacier"
    },
    {
      "name": "HTC Desire HD",
      "touch_version": "5.8.1.5",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p21 ; ",
      "lunch": "cyanogen_ace-eng",
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
      "version": "5.0.2.0",
      "init": "init.spade.rc",
      "key": "ace"
    },
    {
      "name": "Motorola Cliq",
      "touch_version": "5.8.1.0",
      "lunch": "cyanogen_morrison-eng",
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
      "version": "5.0.2.0",
      "init": "init.morrison.rc",
      "key": "morrison"
    },
    {
      "name": "Motorola Droid 2",
      "flash_recovery": "dd if=%s of=/preinstall/recovery/recovery.zip ; ",
      "lunch": "cyanogen_droid2-eng",
      "reboot_recovery": "rm /cache/recovery/command ; echo 1 > /data/.recovery_mode ; sync ; reboot ;",
      "readonly_recovery": true,
      "legacy_versions": [
        "2.5.0.8"
      ],
      "version": "5.0.2.0",
      "init": "init.mapphone_cdma.rc",
      "key": "droid2"
    },
    {
      "name": "Geeksphone ONE",
      "alternate_recovery": {
        "name": "ONE Recovery v1.6",
        "url": "http://dl.dropbox.com/u/10355648/recovery-ONE-1_6.img",
        "clockwork": false
      },
      "legacy_versions": [
        "2.5.1.4",
        "2.5.1.3",
        "2.5.1.1",
        "2.5.1.0"
      ],
      "version": "2.5.1.3",
      "init": "init.qcom.rc",
      "key": "one"
    },
    {
      "name": "Advent Vega",
      "flash_recovery": "/data/data/com.koushikdutta.rommanager/files/tegra_flash_image recovery %s ; ",
      "reboot_recovery": "echo start > /proc/ota ; ",
      "legacy_versions": [
        "2.5.1.4",
        "2.5.1.3",
        "2.5.1.1",
        "2.5.1.0",
        "2.5.1.4"
      ],
      "version": "3.0.2.7",
      "init": "init_recovery.rc",
      "key": "vega"
    },
    {
      "name": "Samsung Galaxy Tab - ATT",
      "readonly_recovery": true,
      "legacy_versions": [
        "2.5.1.8",
        "2.5.1.4",
        "2.5.1.3",
        "2.5.1.1"
      ],
      "version": "2.5.1.8",
      "init": "init.smdkc110.rc",
      "key": "att_tab"
    },
    {
      "name": "Samsung Galaxy Tab (T-Mobile)",
      "readonly_recovery": true,
      "legacy_versions": [
        "2.5.1.8",
        "2.5.1.4",
        "2.5.1.3",
        "2.5.1.1"
      ],
      "version": "2.5.1.8",
      "init": "init.smdkc110.rc",
      "key": "tmobile_tab"
    },
    {
      "name": "Commtiva Link N700, Spice MI700, and more",
      "alternate_recovery": {
        "name": "MI700 Recovery v1.6",
        "url": "http://dl.dropbox.com/u/15816725/MI700-recovery-V1_3.img",
        "clockwork": false
      },
      "legacy_versions": [
        "2.5.1.4",
        "2.5.1.3",
        "2.5.1.1",
        "2.5.1.0"
      ],
      "version": "2.5.1.2",
      "init": "init.qcom.rc",
      "key": "FM6"
    },
    {
      "name": "Google Nexus S",
      "touch_version": "6.0.4.3",
      "lunch": "cm_crespo-userdebug",
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
      "version": "6.0.4.3",
      "init": "init.herring.rc",
      "key": "crespo"
    },
    {
      "name": "Motorola Droid Pro",
      "readonly_recovery": true,
      "legacy_versions": [
        "2.5.0.8"
      ],
      "version": "2.5.0.8",
      "init": "init. mapphone_cdma.rc",
      "key": "droidpro"
    },
    {
      "name": "Huawei Ascend",
      "legacy_versions": [
        "3.0.0.5",
        "3.0.0.4"
      ],
      "version": "3.0.0.5",
      "init": "init.qcom.rc",
      "key": "ascend"
    },
    {
      "name": "ZTE Blade",
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
      "version": "5.0.2.0",
      "init": "init.blade.rc",
      "key": "blade"
    },
    {
      "name": "HTC Click/Tattoo",
      "lunch": "cyanogen_click-eng",
      "legacy_versions": [
        "3.0.0.6",
        "3.0.0.6",
        "3.0.2.7",
        "5.0.0.8",
        "5.0.1.0"
      ],
      "version": "5.0.2.0",
      "init": "init.bahamas.rc",
      "key": "click"
    },
    {
      "name": "Elocity A7",
      "readonly_recovery": true,
      "legacy_versions": [
        "3.0.0.8"
      ],
      "version": "3.0.0.8",
      "init": "init_recovery.rc",
      "key": "a7"
    },
    {
      "name": "Geeksphone Zero",
      "legacy_versions": [
        "3.0.1.3"
      ],
      "version": "3.0.1.3",
      "init": "init.zero.rc",
      "key": "zero"
    },
    {
      "name": "HTC Evo Shift",
      "touch_version": "5.8.1.6",
      "lunch": "cyanogen_speedy-eng",
      "legacy_versions": [
        "3.0.1.4",
        "3.0.1.3",
        "3.0.1.2",
        "3.0.1.1",
        "3.0.1.4",
        "3.0.2.8",
        "3.2.0.1"
      ],
      "version": "5.0.2.0",
      "init": "init.speedy.rc",
      "key": "speedy"
    },
    {
      "name": "Samsung Captivate (MTD)",
      "officially_supported": false,
      "reboot_recovery": "echo 1 > /cache/.startrecovery ; sync ; reboot ;",
      "legacy_versions": [

      ],
      "init": "init.aries.rc",
      "key": "captivatemtd"
    },
    {
      "name": "Samsung Showcase (MTD)",
      "officially_supported": false,
      "reboot_recovery": "echo 1 > /cache/.startrecovery ; sync ; reboot ;",
      "legacy_versions": [

      ],
      "init": "init.aries.rc",
      "key": "showcasemtd"
    },
    {
      "name": "Samsung Mesmerize (MTD)",
      "officially_supported": false,
      "reboot_recovery": "echo 1 > /cache/.startrecovery ; sync ; reboot ;",
      "legacy_versions": [

      ],
      "init": "init.aries.rc",
      "key": "mesmerizemtd"
    },
    {
      "name": "Samsung Fascinate (MTD)",
      "officially_supported": false,
      "reboot_recovery": "echo 1 > /cache/.startrecovery ; sync ; reboot ;",
      "legacy_versions": [

      ],
      "init": "init.aries.rc",
      "key": "fascinatemtd"
    },
    {
      "name": "Samsung Vibrant (MTD)",
      "officially_supported": false,
      "reboot_recovery": "echo 1 > /cache/.startrecovery ; sync ; reboot ;",
      "legacy_versions": [

      ],
      "init": "init.aries.rc",
      "key": "vibrantmtd"
    },
    {
      "name": "Samsung GalaxyS i9000B (MTD)",
      "officially_supported": false,
      "reboot_recovery": "echo 1 > /cache/.startrecovery ; sync ; reboot ;",
      "legacy_versions": [

      ],
      "init": "init.aries.rc",
      "key": "galaxysbmtd"
    },
    {
      "name": "Samsung GalaxyS i9000 (MTD)",
      "officially_supported": false,
      "reboot_recovery": "echo 1 > /cache/.startrecovery ; sync ; reboot ;",
      "legacy_versions": [

      ],
      "init": "init.aries.rc",
      "key": "galaxysmtd"
    },
    {
      "name": "Samsung Epic4G",
      "lunch": "full_epic4g-eng",
      "readonly_recovery": true,
      "legacy_versions": [

      ],
      "version": "5.0.2.7",
      "init": "lpm.rc",
      "key": "epic4g"
    },
    {
      "name": "Dell Streak 7",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk3p1 ; ",
      "legacy_versions": [
        "3.0.2.0",
        "3.0.1.9",
        "3.0.1.8",
        "3.0.1.7"
      ],
      "version": "3.0.2.0",
      "init": "init.tinyandroid.rc",
      "key": "streak7"
    },
    {
      "name": "HTC Thunderbolt",
      "touch_version": "5.8.0.2",
      "alternate_recovery": {
        "name": "RA_GNM Recovery v3.05",
        "url": "http://dl.dropbox.com/u/12949506/RomManager/recovery-ra-mecha-3.05.img",
        "clockwork": false
      },
      "lunch": "cyanogen_mecha-eng",
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
      "version": "5.0.2.1",
      "init": "init.mecha.rc",
      "key": "mecha"
    },
    {
      "name": "Huawei U8150 Ideos",
      "legacy_versions": [
        "3.0.2.4"
      ],
      "version": "3.0.2.4",
      "init": "init.ideos.rc",
      "key": "ideos"
    },
    {
      "name": "Motorola XOOM",
      "touch_version": "6.0.3.1",
      "flash_recovery": "dd if=%s of=/dev/block/platform/sdhci-tegra.3/by-name/recovery ; ",
      "lunch": "cm_stingray-userdebug",
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
      "version": "6.0.3.1",
      "init": "init.stingray.rc",
      "key": "stingray"
    },
    {
      "name": "HTC HD2",
      "legacy_versions": [
        "3.0.2.5",
        "3.0.2.4",
        "3.0.2.5"
      ],
      "version": "3.1.0.0",
      "init": "init.leo.rc",
      "key": "leo"
    },
    {
      "name": "Motorola CLIQ XT/Quench (MB501)",
      "lunch": "cyanogen_zeppelin-eng",
      "legacy_versions": [
        "3.0.2.4",
        "3.0.2.4",
        "5.0.0.8",
        "5.0.0.8",
        "5.0.1.0",
        "5.0.1.0"
      ],
      "version": "5.0.2.0",
      "init": "init.zeppelin.rc",
      "key": "zeppelin"
    },
    {
      "name": "HTC Desire S",
      "touch_version": "5.8.1.5",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p21 ; ",
      "lunch": "full_saga-eng",
      "legacy_versions": [
        "3.0.2.6",
        "5.0.1.9"
      ],
      "version": "5.0.2.0",
      "init": "init.saga.rc",
      "key": "saga"
    },
    {
      "name": "LG G2X (T-Mobile)",
      "lunch": "cyanogen_p999-eng",
      "reboot_recovery": "echo 'boot-recovery' | dd of=/dev/block/mmcblk0p3 seek=6144 bs=1 ; reboot ; ",
      "readonly_recovery": true,
      "legacy_versions": [
        "3.0.2.7",
        "5.0.0.8",
        "5.0.1.0",
        "5.0.1.4",
        "5.0.1.6"
      ],
      "version": "5.0.2.0",
      "init": "init_recovery.rc",
      "key": "p999"
    },
    {
      "name": "LG Optimus 2X",
      "touch_version": "6.0.3.1",
      "inits": [
        "init_recovery.rc",
        "/bootimages/opening_01.rle"
      ],
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p7 ; ",
      "lunch": "cm_p990-userdebug",
      "reboot_recovery": "echo 'boot-recovery' | dd of=/dev/block/mmcblk0p3 seek=6144 bs=1 ; reboot ; ",
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
      "version": "6.0.3.1",
      "key": "p990"
    },
    {
      "name": "Google Nexus S 4G",
      "touch_version": "6.0.4.3",
      "lunch": "cm_crespo4g-userdebug",
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
      "version": "6.0.4.3",
      "init": "init.herring.rc",
      "key": "crespo4g"
    },
    {
      "name": "LG Optimus One (old BB)",
      "alternate_recovery": {
        "name": "RA_GNM Recovery v2.2.1",
        "url": "http://dl.dropbox.com/u/12949506/RomManager/recovery-RA-thunderg-2.2.1-GNM.img",
        "clockwork": false
      },
      "lunch": "full_thunderg-eng",
      "legacy_versions": [
        "3.1.0.0",
        "5.0.0.8",
        "5.0.1.0"
      ],
      "version": "5.0.2.0",
      "init": "init.thunderg.rc",
      "key": "thunderg"
    },
    {
      "name": "LG Optimus One",
      "lunch": "cyanogen_p500-eng",
      "legacy_versions": [
        "5.0.2.0"
      ],
      "version": "5.0.2.7",
      "init": "init.thunderg.rc",
      "key": "p500"
    },
    {
      "name": "Huawei U8220/U8230",
      "legacy_versions": [

      ],
      "version": "3.1.0.1",
      "init": "init.qcom.rc",
      "key": "u8220"
    },
    {
      "name": "Samsung Charge",
      "readonly_recovery": true,
      "legacy_versions": [

      ],
      "version": "3.1.0.1",
      "init": "init.smdkc110.rc",
      "key": "charge"
    },
    {
      "name": "Motorola Defy",
      "officially_supported": false,
      "legacy_versions": [

      ],
      "init": "init.mapphone_umts.rc",
      "key": "umts_jordan"
    },
    {
      "name": "Samsung Galaxy S 4G",
      "readonly_recovery": true,
      "legacy_versions": [
        "3.2.0.0"
      ],
      "version": "3.2.0.0",
      "init": "init.smdkc110.rc",
      "key": "galaxys4g"
    },
    {
      "ro.product.device": [
        "i9100",
        "galaxys2"
      ],
      "name": "Samsung Galaxy S2",
      "touch_version": "5.8.1.5",
      "inits": [
        "init.smdkc210.rc",
        "init.smdk4210.rc"
      ],
      "readonly_recovery": true,
      "legacy_versions": [
        "4.0.1.4",
        "v4.0.1.4"
      ],
      "version": "4.0.1.5",
      "init": "init.smdkc210.rc",
      "key": "galaxys2"
    },
    {
      "ro.product.device": [
        "i9100",
        "galaxys2"
      ],
      "name": "Samsung Galaxy S2",
      "officially_supported": false,
      "touch_version": "6.0.4.3",
      "inits": [
        "init.smdkc210.rc",
        "init.smdk4210.rc"
      ],
      "lunch": "cm_i9100-userdebug",
      "legacy_versions": [
        "6.0.1.0",
        "6.0.4.0"
      ],
      "version": "6.0.4.3",
      "init": "init.smdk4210.rc",
      "key": "i9100"
    },
    {
      "name": "Samsung Galaxy Note (GT-N7000)",
      "touch_version": "6.0.4.3",
      "lunch": "cm_n7000-userdebug",
      "readonly_recovery": true,
      "legacy_versions": [
        "6.0.1.0",
        "6.0.1.2"
      ],
      "version": "6.0.4.3",
      "init": "init.smdk4210.rc",
      "key": "n7000"
    },
    {
      "name": "Samsung Sidekick 4G",
      "readonly_recovery": true,
      "legacy_versions": [

      ],
      "version": "4.0.0.2",
      "init": "init.smdkc110.rc",
      "key": "sidekick4g"
    },
    {
      "name": "HTC Incredible S",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p21 ; ",
      "lunch": "cyanogen_vivo-eng",
      "legacy_versions": [
        "4.0.0.4",
        "4.0.0.6",
        "4.0.0.7",
        "4.0.0.8",
        "5.0.1.9"
      ],
      "version": "5.0.2.0",
      "init": "init.vivo.rc",
      "key": "vivo"
    },
    {
      "name": "HTC Incredible 2",
      "alternate_recovery": {
        "name": "RA_GNM Recovery v3.05",
        "url": "http://dl.dropbox.com/u/12949506/RomManager/recovery-ra-vivow-3.05.img",
        "clockwork": false
      },
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p21 ; ",
      "lunch": "cyanogen_vivow-eng",
      "legacy_versions": [
        "4.0.0.4",
        "4.0.0.6",
        "4.0.0.7",
        "4.0.0.8",
        "5.0.1.9"
      ],
      "version": "5.0.2.0",
      "init": "init.vivow.rc",
      "key": "vivow"
    },
    {
      "name": "LG Optimus 3D",
      "touch_version": "6.0.1.9",
      "inits": [
        "init.p920.rc",
        "/bootimages/opening_01.rle"
      ],
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p6 ; ",
      "lunch": "cm_p920-userdebug",
      "reboot_recovery": "echo '518 R 1' > /sys/kernel/kobject_lge_nvdata/dynamic_nvdata_raw_write ; reboot ; ",
      "legacy_versions": [
        "4.0.0.7",
        "4.0.0.9",
        "5.0.1.4",
        "5.0.2.0",
        "5.0.2.7"
      ],
      "version": "6.0.1.9",
      "key": "p920"
    },
    {
      "name": "Samsung Galaxy Ace",
      "flash_recovery": "/data/data/com.koushikdutta.rommanager/files/flash_image recoveryonly %s ; ",
      "legacy_versions": [

      ],
      "version": "4.0.0.9",
      "init": "init.galaxyace.rc",
      "key": "galaxyace"
    },
    {
      "name": "Motorola Atrix 4G",
      "touch_version": "5.8.1.8",
      "inits": [
        "init_prep_keypad.sh",
        "init.olympus.rc"
      ],
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p10 ; ",
      "lunch": "generic_olympus-eng",
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
      "version": "5.0.2.0",
      "init": "init_prep_keypad.sh",
      "key": "olympus"
    },
    {
      "name": "Viewsonic GTablet (smb_a1002)",
      "flash_recovery": "/data/data/com.koushikdutta.rommanager/files/tegra_flash_image recovery %s ; ",
      "legacy_versions": [

      ],
      "version": "4.0.1.5",
      "init": "init_recovery.rc",
      "key": "smb_a1002"
    },
    {
      "name": "HTC EVO 3D",
      "touch_version": "5.8.0.2",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p22 ; ",
      "lunch": "htc_shooter-eng",
      "legacy_versions": [
        "4.0.1.5",
        "5.0.0.0",
        "5.0.1.0"
      ],
      "version": "5.0.2.0",
      "init": "init.shooter.rc",
      "key": "shooter"
    },
    {
      "name": "HTC Sensation",
      "touch_version": "5.8.0.9",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p21 ; ",
      "lunch": "full_pyramid-eng",
      "legacy_versions": [
        "4.0.1.5",
        "5.0.0.1",
        "5.0.0.7",
        "5.0.0.8",
        "5.0.1.0"
      ],
      "version": "5.0.2.0",
      "init": "init.pyramid.rc",
      "key": "pyramid"
    },
    {
      "name": "Huawei Ascend 2 (M865)",
      "inits": [
        "init.qcom.rc",
        "init.huawei.rc"
      ],
      "legacy_versions": [

      ],
      "version": "4.0.1.5",
      "init": "init.qcom.rc",
      "key": "ascend2"
    },
    {
      "name": "Micromax A70",
      "legacy_versions": [

      ],
      "version": "4.0.1.5",
      "init": "init.qcom.rc",
      "key": "a70"
    },
    {
      "name": "Samsung Galaxy Gio",
      "readonly_recovery": true,
      "legacy_versions": [

      ],
      "version": "4.0.1.5",
      "init": "init.galaxygio.rc",
      "key": "galaxygio"
    },
    {
      "name": "Samsung Indulge 910",
      "readonly_recovery": true,
      "legacy_versions": [

      ],
      "version": "4.0.1.5",
      "init": "init.smdkc110.rc",
      "key": "indulge910"
    },
    {
      "name": "Samsung Indulge 915",
      "readonly_recovery": true,
      "legacy_versions": [

      ],
      "version": "4.0.1.5",
      "init": "init.smdkc110.rc",
      "key": "indulge915"
    },
    {
      "name": "LG Optimus Black",
      "touch_version": "6.0.1.4",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p4 ; ",
      "lunch": "cm_p970-userdebug",
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
      "version": "6.0.1.4",
      "init": "/bootimages/ON_480x800_08fps_0000.rle",
      "key": "p970"
    },
    {
      "name": "HTC EVO 3D (GSM)",
      "touch_version": "5.8.0.2",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p21 ; ",
      "lunch": "full_shooteru-eng",
      "legacy_versions": [
        "5.0.1.6",
        "5.0.1.7",
        "5.0.1.8",
        "5.0.1.9"
      ],
      "version": "5.0.2.0",
      "init": "init.shooteru.rc",
      "key": "shooteru"
    },
    {
      "name": "Motorola Droid 2 Global",
      "flash_recovery": "dd if=%s of=/preinstall/recovery/recovery.zip ; ",
      "lunch": "cyanogen_droid2we-eng",
      "reboot_recovery": "rm /cache/recovery/command ; echo 1 > /data/.recovery_mode ; sync ; reboot ;",
      "readonly_recovery": true,
      "legacy_versions": [

      ],
      "version": "5.0.2.3",
      "init": "init.mapphone_cdma.rc",
      "key": "droid2we"
    },
    {
      "name": "Motorola Droid Bionic",
      "flash_recovery": "dd if=%s of=/preinstall/recovery/recovery.zip ; ",
      "lunch": "generic_targa-eng",
      "reboot_recovery": "rm /cache/recovery/command ; echo 1 > /data/.recovery_mode ; sync ; reboot ;",
      "readonly_recovery": true,
      "legacy_versions": [
        "5.0.2.3",
        "5.0.2.4"
      ],
      "version": "5.0.2.5",
      "init": "init.mapphone_cdma.rc",
      "key": "targa"
    },
    {
      "name": "Motorola Droid X2",
      "flash_recovery": "dd if=%s of=/preinstall/recovery/recovery.zip ; ",
      "lunch": "generic_daytona-eng",
      "reboot_recovery": "rm /cache/recovery/command ; echo 1 > /data/.recovery_mode ; sync ; reboot ;",
      "readonly_recovery": true,
      "legacy_versions": [
        "5.0.2.3",
        "5.0.2.4"
      ],
      "version": "5.0.2.5",
      "init": "init.mapphone_cdma.rc",
      "key": "daytona"
    },
    {
      "name": "Motorola Droid 3",
      "flash_recovery": "dd if=%s of=/preinstall/recovery/recovery.zip ; ",
      "lunch": "full_solana-eng",
      "reboot_recovery": "rm /cache/recovery/command ; echo 1 > /data/.recovery_mode ; sync ; reboot ;",
      "readonly_recovery": true,
      "legacy_versions": [
        "5.0.2.5"
      ],
      "version": "5.0.2.6",
      "init": "init.mapphone_cdma.rc",
      "key": "solana"
    },
    {
      "name": "Motorola Backflip",
      "lunch": "cyanogen_motus-eng",
      "legacy_versions": [

      ],
      "version": "5.0.2.6",
      "init": "init.motus.rc",
      "key": "motus"
    },
    {
      "name": "Samsung Galaxy Mini",
      "lunch": "tass-eng",
      "readonly_recovery": true,
      "legacy_versions": [

      ],
      "version": "5.0.2.6",
      "init": "init.gt-s5570.rc",
      "key": "tass"
    },
    {
      "name": "Huawei U8800",
      "flash_recovery": "mount -o remount,rw -t vfat /dev/block/mmcblk0p1 /cust_backup ; cat %s > /cust_backup/image/recovery.img ;",
      "lunch": "huawei_u8800-eng",
      "legacy_versions": [

      ],
      "version": "5.0.2.6",
      "init": "init.u8800.rc",
      "key": "u8800"
    },
    {
      "name": "Samsung Galaxy S2 (AT&T)",
      "touch_version": "5.8.1.5",
      "inits": [
        "init.smdkc210.rc",
        "init.smdk4210.rc"
      ],
      "lunch": "cyanogen_galaxys2att-eng",
      "readonly_recovery": true,
      "legacy_versions": [

      ],
      "version": "5.0.2.6",
      "init": "init.smdkc210.rc",
      "key": "galaxys2att"
    },
    {
      "name": "Samsung Galaxy S2 (T-Mobile)",
      "touch_version": "6.0.4.3",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p22 bs=4096 ; ",
      "owners": {
        "jmprblckwing182@gmail.com": true
      },
      "lunch": "cm_hercules-userdebug",
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
        "6.0.4.0",
        "6.0.4.1"
      ],
      "version": "6.0.4.3",
      "init": "init.target.rc",
      "key": "hercules"
    },
    {
      "name": "Samsung Epic 4G Touch",
      "touch_version": "5.8.1.5",
      "lunch": "full_epic4gtouch-eng",
      "readonly_recovery": true,
      "legacy_versions": [
        "5.0.2.6",
        "5.0.2.7"
      ],
      "version": "5.0.2.7",
      "init": "init.smdkc210.rc",
      "key": "epic4gtouch"
    },
    {
      "name": "HTC Amaze",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p23 bs=4096 ; ",
      "lunch": "full_ruby-eng",
      "legacy_versions": [

      ],
      "version": "5.0.2.6",
      "init": "init.ruby.rc",
      "key": "ruby"
    },
    {
      "name": "Samsung Galaxy 5",
      "lunch": "samsung_galaxy5-eng",
      "readonly_recovery": true,
      "legacy_versions": [
        "5.0.2.8"
      ],
      "version": "5.0.2.8",
      "init": "init.gt-i5500.rc",
      "key": "galaxy5"
    },
    {
      "name": "ZTE Racer",
      "lunch": "generic_mooncake-eng",
      "legacy_versions": [

      ],
      "version": "5.0.2.7",
      "init": "init.mooncake.rc",
      "key": "mooncake"
    },
    {
      "name": "Samsung Galaxy Tab (VZW)",
      "lunch": "full_vzwtab-eng",
      "readonly_recovery": true,
      "legacy_versions": [
        "5.0.2.7",
        "5.0.2.7",
        "5.0.2.7"
      ],
      "version": "5.0.2.7",
      "init": "init.smdkc110.rc",
      "key": "vzwtab"
    },
    {
      "name": "HTC MyTouch 4G Slide",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p21 bs=4096 ; ",
      "lunch": "full_doubleshot-eng",
      "legacy_versions": [
        "5.0.2.7",
        "5.0.2.7"
      ],
      "version": "5.0.2.7",
      "init": "init.doubleshot.rc",
      "key": "doubleshot"
    },
    {
      "name": "Google Galaxy Nexus (GSM)",
      "touch_version": "6.0.4.3",
      "flash_recovery": "dd if=%s of=/dev/block/platform/omap/omap_hsmmc.0/by-name/recovery bs=4096 ;",
      "lunch": "cm_maguro-userdebug",
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
        "6.0.4.0",
        "6.0.4.1"
      ],
      "version": "6.0.4.3",
      "init": "init.tuna.rc",
      "key": "maguro"
    },
    {
      "name": "Google Galaxy Nexus (Verizon)",
      "touch_version": "6.0.4.3",
      "flash_recovery": "dd if=%s of=/dev/block/platform/omap/omap_hsmmc.0/by-name/recovery bs=4096 ;",
      "lunch": "cm_toro-userdebug",
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
        "6.0.4.1",
        "6.0.4.2"
      ],
      "version": "6.0.4.3",
      "init": "init.tuna.rc",
      "key": "toro"
    },
    {
      "name": "LG Optimus C LW690 and Optimus M MS690",
      "lunch": "full_lg690-eng",
      "legacy_versions": [

      ],
      "version": "5.0.2.7",
      "init": "init.thunderc.rc",
      "key": "lg690"
    },
    {
      "name": "LG Optimus Pro",
      "lunch": "c660-eng",
      "legacy_versions": [

      ],
      "version": "5.0.2.7",
      "init": "init.muscat.rc",
      "key": "c660"
    },
    {
      "name": "LG Optimus Hub",
      "lunch": "e510-eng",
      "legacy_versions": [

      ],
      "version": "5.0.2.7",
      "init": "init.univa.rc",
      "key": "e510"
    },
    {
      "name": "Samsung Epic4G (MTD)",
      "officially_supported": false,
      "touch_version": "5.8.1.5",
      "lunch": "cyanogen_epicmtd-eng",
      "reboot_recovery": "/system/xbin/busybox devmem 0x57fff800 32 0x5EC0B007; sync ; reboot ;",
      "legacy_versions": [

      ],
      "version": "5.0.2.7",
      "init": "init.victory.rc",
      "key": "epicmtd"
    },
    {
      "name": "HTC Holiday",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p23 bs=4096 ; ",
      "lunch": "full_holiday-eng",
      "legacy_versions": [
        "5.0.2.7",
        "5.0.2.7",
        "5.0.2.7"
      ],
      "version": "5.0.2.7",
      "init": "init.holiday.rc",
      "key": "holiday"
    },
    {
      "name": "LG Optimus SOL / TMo LG myTouch",
      "inits": [
        "init.victor.rc",
        "init.e739.rc"
      ],
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p17 bs=4096 ;",
      "lunch": "e730-eng",
      "legacy_versions": [

      ],
      "version": "5.0.2.7",
      "key": "e730"
    },
    {
      "name": "HTC Wildfire S",
      "lunch": "generic_marvel-eng",
      "legacy_versions": [
        "5.0.2.7"
      ],
      "version": "5.0.2.8",
      "init": "init.marvel.rc",
      "key": "marvel"
    },
    {
      "name": "Motorola Photon 4G",
      "inits": [
        "init.mapphone_umts.rc",
        "init.mapphone_cdma.rc"
      ],
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p10 bs=4096 ;",
      "lunch": "full_sunfire-eng",
      "legacy_versions": [
        "5.0.2.7"
      ],
      "version": "5.0.2.8",
      "init": "init.mapphone_umts.rc",
      "key": "sunfire"
    },
    {
      "name": "Huawei U8160",
      "inits": [
        "init.huawei.rc",
        "init.u8160.rc"
      ],
      "lunch": "huawei_u8160-eng",
      "legacy_versions": [
        "5.0.2.8"
      ],
      "version": "5.0.2.8",
      "init": "init.u8160.rc",
      "key": "u8160"
    },
    {
      "name": "HTC Rezound",
      "touch_version": "6.0.3.1",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p23 bs=4096 ;",
      "lunch": "cm_vigor-userdebug",
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
      "version": "6.0.3.1",
      "init": "init.vigor.rc",
      "key": "vigor"
    },
    {
      "name": "HTC EVO View 4G",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p21 bs=4096 ;",
      "lunch": "full_express-userdebug",
      "legacy_versions": [

      ],
      "version": "5.8.1.5",
      "init": "init.expresskt.rc",
      "key": "express"
    },
    {
      "name": "Asus Transformer Prime",
      "touch_version": "5.8.3.4",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p4 ;",
      "lunch": "cm_tf201-userdebug",
      "legacy_versions": [
        "5.5.0.4",
        "5.8.2.0"
      ],
      "version": "5.8.3.4",
      "init": "init.cardhu.rc",
      "key": "tf201"
    },
    {
      "name": "Motorola Droid 4",
      "officially_supported": false,
      "reboot_recovery": "rm /cache/recovery/command ; echo 1 > /data/.recovery_mode ; sync ; reboot ;",
      "legacy_versions": [

      ],
      "version": "5.0.2.0",
      "init": "init.mapphone_cdma.rc",
      "key": "maserati"
    },
    {
      "name": "Motorola RAZR",
      "officially_supported": false,
      "reboot_recovery": "rm /cache/recovery/command ; echo 1 > /data/.recovery_mode ; sync ; reboot ;",
      "legacy_versions": [

      ],
      "version": "5.0.2.0",
      "init": "init.mapphone_cdma.rc",
      "key": "spyder"
    },
    {
      "name": "HTC Wildfire S CDMA",
      "lunch": "full_marvelc-eng",
      "legacy_versions": [

      ],
      "version": "5.0.2.8",
      "init": "init.marvelc.rc",
      "key": "marvelc"
    },
    {
      "name": "Asus Transformer",
      "touch_version": "5.8.3.4",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p4 ;",
      "lunch": "cm_tf101-userdebug",
      "legacy_versions": [
        "5.5.0.4",
        "5.8.1.9",
        "5.8.2.0",
        "5.8.2.1",
        "5.8.3.4"
      ],
      "version": "6.0.1.3",
      "init": "init.ventana.rc",
      "key": "tf101"
    },
    {
      "name": "LG Nitro HD / LG P930 (AT&T)",
      "touch_version": "6.0.1.5",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p13 ;",
      "lunch": "cm_p930-userdebug",
      "legacy_versions": [
        "5.8.2.0",
        "6.0.1.4"
      ],
      "version": "6.0.1.5",
      "init": "bootimages/boot_logo_00000.rle",
      "key": "p930"
    },
    {
      "name": "Samsung Galaxy S2 (SGH-I777)",
      "touch_version": "6.0.1.0",
      "inits": [
        "init.smdkc210.rc",
        "init.smdk4210.rc"
      ],
      "lunch": "cm_i777-userdebug",
      "readonly_recovery": true,
      "legacy_versions": [
        "5.8.1.8"
      ],
      "version": "6.0.1.0",
      "init": "init.smdkc210.rc",
      "key": "i777"
    },
    {
      "name": "HTC Pico",
      "lunch": "full_pico-eng",
      "legacy_versions": [

      ],
      "version": "5.0.2.8",
      "init": "init.pico.rc",
      "key": "pico"
    },
    {
      "name": "HTC One X (GSM)",
      "touch_version": "5.8.4.0",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p5 bs=4096 ;",
      "lunch": "cm_endeavoru-userdebug",
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
      "version": "5.8.4.0",
      "init": "ueventd.endeavoru.rc",
      "key": "endeavoru"
    },
    {
      "name": "HTC One S",
      "touch_version": "6.0.3.1",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p22 bs=4096 ;",
      "lunch": "cm_ville-userdebug",
      "legacy_versions": [
        "5.5.0.4",
        "5.8.2.1",
        "5.8.2.2",
        "5.8.2.3",
        "5.8.3.1",
        "6.0.2.9"
      ],
      "version": "6.0.3.1",
      "init": "init.ville.rc",
      "key": "ville"
    },
    {
      "name": "Samsung Galaxy Tab (MTD and GSM)",
      "officially_supported": false,
      "reboot_recovery": "echo 1 > /cache/.startrecovery ; sync ; reboot ;",
      "legacy_versions": [

      ],
      "version": "5.8.2.1",
      "init": "init.p1.rc",
      "key": "p1"
    },
    {
      "name": "Samsung Galaxy Tab (MTD and CDMA)",
      "officially_supported": false,
      "reboot_recovery": "echo 1 > /cache/.startrecovery ; sync ; reboot ;",
      "legacy_versions": [

      ],
      "version": "5.8.2.1",
      "init": "init.p1c.rc",
      "key": "p1c"
    },
    {
      "name": "Google Galaxy Nexus (Sprint)",
      "touch_version": "6.0.4.3",
      "flash_recovery": "dd if=%s of=/dev/block/platform/omap/omap_hsmmc.0/by-name/recovery bs=4096 ;",
      "lunch": "cm_toroplus-userdebug",
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
        "6.0.4.1",
        "6.0.4.2"
      ],
      "version": "6.0.4.3",
      "init": "init.tuna.rc",
      "key": "toroplus"
    },
    {
      "name": "Samsung Galaxy Tab 10.1 (Wifi)",
      "touch_version": "6.0.3.1",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p2 ; ",
      "lunch": "cm_p4wifi-userdebug",
      "legacy_versions": [
        "4.0.0.4",
        "5.8.3.1",
        "6.0.2.9",
        "6.0.3.0"
      ],
      "version": "6.0.3.1",
      "init": "ueventd.p3.rc",
      "key": "p4wifi"
    },
    {
      "name": "Motorola XOOM (Wi-Fi only)",
      "touch_version": "6.0.3.1",
      "flash_recovery": "dd if=%s of=/dev/block/platform/sdhci-tegra.3/by-name/recovery ; ",
      "lunch": "cm_wingray-userdebug",
      "legacy_versions": [
        "5.8.3.1",
        "6.0.2.9"
      ],
      "version": "6.0.3.1",
      "init": "init.wingray.rc",
      "key": "wingray"
    },
    {
      "name": "LG Marquee",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p4 bs=4096 ; ",
      "lunch": "full_marquee-eng",
      "legacy_versions": [

      ],
      "version": "5.0.2.8",
      "init": "init.omap.post_boot.sh",
      "key": "marquee"
    },
    {
      "name": "LG Ignite",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p4 bs=4096 ; ",
      "lunch": "full_ignite-eng",
      "legacy_versions": [

      ],
      "version": "5.0.2.8",
      "init": "init.omap.post_boot.sh",
      "key": "ignite"
    },
    {
      "name": "LG Connect 4G MS840",
      "touch_version": "5.8.3.1",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p13 bs=4096 ; ",
      "lunch": "full_ms840-userdebug",
      "legacy_versions": [

      ],
      "version": "5.8.3.1",
      "init": "init.target.rc",
      "key": "ms840"
    },
    {
      "name": "LG Lucid VS840",
      "touch_version": "5.8.3.1",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p13 bs=4096 ; ",
      "lunch": "full_vs840-userdebug",
      "legacy_versions": [

      ],
      "version": "5.8.3.1",
      "init": "init.target.rc",
      "key": "vs840"
    },
    {
      "name": "HTC EVO LTE",
      "touch_version": "5.8.3.5",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p22 bs=4096 ; ",
      "lunch": "cm_jewel-userdebug",
      "legacy_versions": [
        "5.8.3.4",
        "5.8.3.4"
      ],
      "version": "5.8.3.5",
      "init": "init.jewel.rc",
      "key": "jewel"
    },
    {
      "name": "Samsung Galaxy S3 (GT-I9300)",
      "ro.product.devices": [
        "i9300",
        "m0"
      ],
      "touch_version": "6.0.3.6",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p6 bs=4096 ; ",
      "lunch": "cm_i9300-userdebug",
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
        "6.0.3.2",
        "6.0.3.6"
      ],
      "version": "6.0.4.3",
      "init": "ueventd.smdk4x12.rc",
      "key": "i9300"
    },
    {
      "name": "Samsung Skyrocket",
      "touch_version": "6.0.4.3",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p22 bs=4096 ; ",
      "lunch": "cm_skyrocket-userdebug",
      "legacy_versions": [
        "5.8.4.3",
        "6.0.1.0",
        "6.0.1.4",
        "6.0.3.1",
        "6.0.4.0",
        "6.0.4.1"
      ],
      "version": "6.0.4.3",
      "init": "init.qcom.usb.rc",
      "key": "skyrocket"
    },
    {
      "name": "Samsung Galaxy Note (AT&T)",
      "touch_version": "6.0.4.3",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p22 bs=4096 ; ",
      "lunch": "cm_quincyatt-userdebug",
      "legacy_versions": [
        "5.8.4.3",
        "5.8.4.8",
        "6.0.3.1",
        "6.0.3.6",
        "6.0.4.1"
      ],
      "version": "6.0.4.3",
      "init": "init.qcom.usb.rc",
      "key": "quincyatt"
    },
    {
      "name": "LG Optimus L3",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p17 bs=4096 ; ",
      "lunch": "cm_e400-userdebug",
      "legacy_versions": [

      ],
      "version": "5.8.4.5",
      "init": "init.e0.rc",
      "key": "e400"
    },
    {
      "name": "HTC One V",
      "lunch": "cm_primou-userdebug",
      "readonly_recovery": true,
      "legacy_versions": [

      ],
      "version": "5.8.4.5",
      "init": "init.primou.rc",
      "key": "primou"
    },
    {
      "name": "Samsung Galaxy S3 (AT&T)",
      "touch_version": "6.0.4.3",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p18 bs=4096 ; ",
      "lunch": "cm_d2att-userdebug",
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
      "version": "6.0.4.3",
      "init": "init.d2att.rc",
      "key": "d2att"
    },
    {
      "name": "Samsung Galaxy S3 (T-Mobile)",
      "ro.product.devices": [
        "d2tmo",
        "d2lteMetroPCS"
      ],
      "touch_version": "6.0.4.3",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p18 bs=4096 ; ",
      "lunch": "cm_d2tmo-userdebug",
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
        "6.0.3.8",
        "6.0.4.1"
      ],
      "version": "6.0.4.3",
      "init": "init.d2tmo.rc",
      "key": "d2tmo"
    },
    {
      "name": "Samsung Galaxy S3 (Sprint)",
      "touch_version": "6.0.4.3",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p18 bs=4096 ; ",
      "lunch": "cm_d2spr-userdebug",
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
        "6.0.3.8",
        "6.0.4.1"
      ],
      "version": "6.0.4.3",
      "init": "init.d2spr.rc",
      "key": "d2spr"
    },
    {
      "name": "Samsung Galaxy S3 (Verizon)",
      "touch_version": "6.0.4.3",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p18 bs=4096 ; ",
      "lunch": "cm_d2vzw-userdebug",
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
        "6.0.3.8",
        "6.0.4.1"
      ],
      "version": "6.0.4.3",
      "init": "init.d2vzw.rc",
      "key": "d2vzw"
    },
    {
      "name": "HTC One V (CDMA)",
      "touch_version": "5.8.4.7",
      "lunch": "full_primoc-userdebug",
      "readonly_recovery": true,
      "legacy_versions": [
        "5.8.4.6",
        "5.8.4.7"
      ],
      "version": "5.8.4.7",
      "init": "init.primoc.rc",
      "key": "primoc"
    },
    {
      "name": "Google Nexus 7",
      "touch_version": "6.0.4.3",
      "flash_recovery": "dd if=%s of=/dev/block/platform/sdhci-tegra.3/by-name/SOS bs=4096 ; ",
      "lunch": "cm_grouper-userdebug",
      "legacy_versions": [
        "6.0.0.6",
        "6.0.1.0",
        "6.0.1.9",
        "6.0.2.3",
        "6.0.3.1",
        "6.0.3.4",
        "6.0.3.5",
        "6.0.3.6",
        "6.0.3.8",
        "6.0.4.1"
      ],
      "version": "6.0.4.3",
      "init": "init.grouper.rc",
      "key": "grouper"
    },
    {
      "name": "LG Optimus LTE (SKT)",
      "touch_version": "6.0.1.0",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p13 bs=4096 ; ",
      "lunch": "cm_su640-userdebug",
      "legacy_versions": [

      ],
      "version": "6.0.1.0",
      "init": "init.su640.rc",
      "key": "su640"
    },
    {
      "name": "Samsung Galaxy S2 (GT-I9100G)",
      "officially_supported": false,
      "touch_version": "6.0.4.0",
      "lunch": "cm_i9100g-userdebug",
      "legacy_versions": [
        "6.0.1.0"
      ],
      "version": "6.0.4.0",
      "init": "init.t1.rc",
      "key": "i9100g"
    },
    {
      "name": "Samsung Galaxy Tab 2 (GT-P3100)",
      "touch_version": "6.0.2.7",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p6 bs=4096 ; ",
      "lunch": "cm_p3100-userdebug",
      "legacy_versions": [
        "6.0.1.1",
        "6.0.2.3"
      ],
      "version": "6.0.2.7",
      "init": "init.espresso.rc",
      "key": "p3100"
    },
    {
      "name": "Samsung Galaxy Tab 2 (GT-P3110)",
      "touch_version": "6.0.2.7",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p6 bs=4096 ; ",
      "lunch": "cm_p3110-userdebug",
      "legacy_versions": [
        "6.0.1.1",
        "6.0.2.3"
      ],
      "version": "6.0.2.7",
      "init": "init.espresso.rc",
      "key": "p3110"
    },
    {
      "name": "Samsung Galaxy Tab 2 (GT-P3113)",
      "touch_version": "6.0.2.3",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p6 bs=4096 ; ",
      "lunch": "cm_p3113-userdebug",
      "legacy_versions": [
        "6.0.1.1"
      ],
      "version": "6.0.2.3",
      "init": "init.espresso.rc",
      "key": "p3113"
    },
    {
      "name": "Samsung Galaxy Tab 2 (GT-P5100)",
      "touch_version": "6.0.2.7",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p6 bs=4096 ; ",
      "lunch": "cm_p5100-userdebug",
      "legacy_versions": [
        "6.0.1.1",
        "6.0.2.3"
      ],
      "version": "6.0.2.7",
      "init": "init.espresso10.rc",
      "key": "p5100"
    },
    {
      "name": "Samsung Galaxy Tab 2 (GT-P5110)",
      "touch_version": "6.0.2.7",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p6 bs=4096 ; ",
      "lunch": "cm_p5110-userdebug",
      "legacy_versions": [
        "6.0.1.1",
        "6.0.2.3"
      ],
      "version": "6.0.2.7",
      "init": "init.espresso10.rc",
      "key": "p5110"
    },
    {
      "name": "Samsung Galaxy Tab 2 (GT-P5113)",
      "touch_version": "6.0.2.3",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p6 bs=4096 ; ",
      "lunch": "cm_p5113-userdebug",
      "legacy_versions": [
        "6.0.1.1"
      ],
      "version": "6.0.2.3",
      "init": "init.espresso10.rc",
      "key": "p5113"
    },
    {
      "name": "LG Spectrum 4G",
      "touch_version": "6.0.1.1",
      "inits": [
        "init.target.rc",
        "init.iproj.rc",
        "init.i_vzw.rc",
        "init.iprj.rc"
      ],
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p13 bs=4096 ; ",
      "lunch": "cm_vs920-userdebug",
      "legacy_versions": [

      ],
      "version": "6.0.1.1",
      "init": "init.target.rc",
      "key": "vs920"
    },
    {
      "name": "Score & Score M",
      "touch_version": "6.0.1.1",
      "lunch": "cm_x500-userdebug",
      "legacy_versions": [

      ],
      "version": "6.0.1.1",
      "init": "init.zte.rc",
      "key": "x500"
    },
    {
      "name": "LG Revolution 4G",
      "touch_version": "6.0.1.1",
      "inits": [
        "init.qcom.rc",
        "init.bryce.rc"
      ],
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p14 bs=4096 ; ",
      "lunch": "cm_vs910-userdebug",
      "legacy_versions": [

      ],
      "version": "6.0.1.1",
      "init": "init.qcom.rc",
      "key": "vs910"
    },
    {
      "name": "LG Esteeem 4G",
      "touch_version": "6.0.1.1",
      "inits": [
        "init.qcom.rc",
        "init.bryce.rc"
      ],
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p14 bs=4096 ; ",
      "lunch": "cm_ms910-userdebug",
      "legacy_versions": [
        "5.0.2.8"
      ],
      "version": "6.0.1.1",
      "init": "init.qcom.rc",
      "key": "ms910"
    },
    {
      "name": "LG Optimus M+",
      "touch_version": "6.0.1.1",
      "inits": [
        "init.qcom.rc",
        "init.m3.rc"
      ],
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p17 bs=4096 ; ",
      "lunch": "cm_ms695-userdebug",
      "legacy_versions": [
        "6.0.1.0"
      ],
      "version": "6.0.1.1",
      "init": "init.qcom.rc",
      "key": "ms695"
    },
    {
      "name": "Samsung Galaxy Tab (MTD and GSM - L)",
      "officially_supported": false,
      "reboot_recovery": "echo 1 > /cache/.startrecovery ; sync ; reboot ;",
      "legacy_versions": [

      ],
      "version": "5.8.2.1",
      "init": "init.p1.rc",
      "key": "p1l"
    },
    {
      "name": "Samsung Galaxy Tab (MTD and GSM - N)",
      "officially_supported": false,
      "reboot_recovery": "echo 1 > /cache/.startrecovery ; sync ; reboot ;",
      "legacy_versions": [

      ],
      "version": "5.8.2.1",
      "init": "init.p1.rc",
      "key": "p1n"
    },
    {
      "name": "Samsung Galaxy S3 (US Cellular)",
      "touch_version": "6.0.4.3",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p18 bs=4096 ; ",
      "lunch": "cm_d2usc-userdebug",
      "legacy_versions": [
        "6.0.1.2",
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
      "version": "6.0.4.3",
      "init": "init.d2usc.rc",
      "key": "d2usc"
    },
    {
      "name": "Motorola Photon Q",
      "inits": [
        "init.asanti.rc",
        "init.sprint.rc"
      ],
      "flash_recovery": "dd if=%s of=/dev/block/platform/msm_sdcc.1/by-name/recovery bs=4096 ; ",
      "lunch": "cm_asanti-userdebug",
      "legacy_versions": [

      ],
      "version": "6.0.1.3",
      "init": "init.mmi.usb.rc",
      "key": "asanti"
    },
    {
      "name": "LG Optimus Me",
      "lunch": "cm_p350-userdebug",
      "legacy_versions": [
        "6.0.1.3",
        "6.0.1.4"
      ],
      "version": "6.0.1.5",
      "init": "init.pecan.rc",
      "key": "p350"
    },
    {
      "name": "Samsung Galaxy Tab 8.9 (AT&T)",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p22 bs=4096 ; ",
      "lunch": "cm_p5att-userdebug",
      "legacy_versions": [

      ],
      "version": "6.0.1.4",
      "init": "fstab.qcom",
      "key": "p5att"
    },
    {
      "name": "Samsung Galaxy S Blaze 4G",
      "touch_version": "6.0.3.8",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p22 bs=4096 ; ",
      "lunch": "cm_t769-userdebug",
      "legacy_versions": [
        "6.0.1.4"
      ],
      "version": "6.0.3.8",
      "init": "init.target.rc",
      "key": "t769"
    },
    {
      "name": "Samsung Galaxy S3 (MetroPCS)",
      "touch_version": "6.0.4.3",
      "inits": [
        "init.carrier.rc",
        "init.d2mtr.rc"
      ],
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p18 bs=4096 ; ",
      "lunch": "cm_d2mtr-userdebug",
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
      "version": "6.0.4.3",
      "init": "init.carrier.rc",
      "key": "d2mtr"
    },
    {
      "name": "Asus Transformer Pad Infinity",
      "touch_version": "6.0.3.1",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p4 bs=4096 ; ",
      "lunch": "cm_tf700t-userdebug",
      "reboot_recovery": "echo 'boot-recovery' | dd of=/dev/block/mmcblk0p3 seek=6144 bs=1 ; reboot ; ",
      "legacy_versions": [
        "6.0.1.8",
        "6.0.2.3"
      ],
      "version": "6.0.3.1",
      "init": "init.tf700t.rc",
      "key": "tf700t"
    },
    {
      "name": "Google Nexus 10",
      "touch_version": "6.0.4.3",
      "flash_recovery": "dd if=%s of=/dev/block/platform/dw_mmc.0/by-name/recovery bs=4096 ; ",
      "lunch": "cm_manta-userdebug",
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
        "6.0.3.8",
        "6.0.4.1"
      ],
      "version": "6.0.4.3",
      "init": "init.manta.rc",
      "key": "manta"
    },
    {
      "name": "Google Nexus 4",
      "touch_version": "6.0.4.3",
      "flash_recovery": "dd if=%s of=/dev/block/platform/msm_sdcc.1/by-name/recovery bs=4096 ; ",
      "lunch": "cm_mako-userdebug",
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
        "6.0.3.8",
        "6.0.4.1"
      ],
      "version": "6.0.4.3",
      "init": "init.mako.rc",
      "key": "mako"
    },
    {
      "name": "HTC Droid DNA",
      "touch_version": "6.0.3.1",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p20 bs=4096 ; ",
      "lunch": "cm_dlx-userdebug",
      "legacy_versions": [
        "6.0.1.5",
        "6.0.1.9",
        "6.0.2.3",
        "6.0.2.7",
        "6.0.2.8",
        "6.0.3.0"
      ],
      "version": "6.0.3.1",
      "init": "init.debug_mfgkernel.rc",
      "key": "dlx"
    },
    {
      "name": "Samsung Galaxy Note 2 (HSPA+)",
      "touch_version": "6.0.4.3",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p9 bs=4096 ; ",
      "lunch": "cm_n7100-userdebug",
      "legacy_versions": [
        "6.0.1.9",
        "6.0.3.0",
        "6.0.3.1",
        "6.0.3.6"
      ],
      "version": "6.0.4.3",
      "init": "init.smdk4x12.rc",
      "key": "n7100"
    },
    {
      "name": "Acer A700",
      "touch_version": "6.0.3.1",
      "flash_recovery": "dd if=%s of=/dev/block/platform/sdhci-tegra.3/by-name/SOS bs=4096 ; ",
      "lunch": "cm_a700-userdebug",
      "legacy_versions": [
        "6.0.2.3"
      ],
      "version": "6.0.3.1",
      "init": "init.picasso_mf.rc",
      "key": "a700"
    },
    {
      "name": "Google Nexus 7 (GSM)",
      "touch_version": "6.0.4.3",
      "flash_recovery": "dd if=%s of=/dev/block/platform/sdhci-tegra.3/by-name/SOS bs=4096 ; ",
      "lunch": "cm_tilapia-userdebug",
      "legacy_versions": [
        "6.0.2.3",
        "6.0.3.1",
        "6.0.3.5",
        "6.0.3.6",
        "6.0.4.0",
        "6.0.4.1"
      ],
      "version": "6.0.4.3",
      "init": "init.tilapia.rc",
      "key": "tilapia"
    },
    {
      "name": "Samsung Galaxy Note 2 (LTE)",
      "touch_version": "6.0.4.1",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p9 bs=4096 ; ",
      "lunch": "cm_t0lte-userdebug",
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
      "version": "6.0.4.1",
      "init": "init.t0lte.rc",
      "key": "t0lte"
    },
    {
      "name": "LG Optimus 3DMax",
      "touch_version": "6.0.2.3",
      "inits": [
        "init.lgep720board.rc",
        "/bootimages/battery_charging_01.rle"
      ],
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p6 ; ",
      "lunch": "cm_p720-userdebug",
      "reboot_recovery": "echo '518 R 1' > /sys/kernel/kobject_lge_nvdata/dynamic_nvdata_raw_write ; reboot ; ",
      "legacy_versions": [

      ],
      "version": "6.0.2.3",
      "key": "p720"
    },
    {
      "name": "Samsung Galaxy S3 (Cricket)",
      "touch_version": "6.0.4.3",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p18 bs=4096 ; ",
      "lunch": "cm_d2cri-userdebug",
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
      "version": "6.0.4.3",
      "init": "init.d2cri.rc",
      "key": "d2cri"
    },
    {
      "name": "HTC Sensation XL",
      "touch_version": "6.0.2.7",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p21 bs=4096 ; ",
      "lunch": "cm_runnymede-userdebug",
      "legacy_versions": [

      ],
      "version": "6.0.2.7",
      "init": "init.runnymede.rc",
      "key": "runnymede"
    },
    {
      "name": "Pantech Presto",
      "touch_version": "6.0.2.7",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p18 bs=4096 ; ",
      "lunch": "cm_presto-userdebug",
      "legacy_versions": [

      ],
      "version": "6.0.2.7",
      "init": "init.presto.rc",
      "key": "presto"
    },
    {
      "name": "ZTE Sequent",
      "touch_version": "6.0.2.7",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p13 bs=4096 ; ",
      "lunch": "cm_warp2-userdebug",
      "legacy_versions": [

      ],
      "version": "6.0.2.7",
      "init": "init.warp2.rc",
      "key": "warp2"
    },
    {
      "name": "Google Nexus Q",
      "flash_recovery": "dd if=%s of=/dev/block/platform/omap/omap_hsmmc.0/by-name/recovery bs=4096 ; ",
      "lunch": "cm_steelhead-userdebug",
      "legacy_versions": [
        "6.0.2.7"
      ],
      "version": "6.0.3.1",
      "init": "init.steelhead.rc",
      "key": "steelhead"
    },
    {
      "name": "Samsung Prevail 2 (Boost Mobile)",
      "touch_version": "6.0.2.7",
      "inits": [
        "init.carrier.rc",
        "init.prevail2spr.rc"
      ],
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p15 bs=4096 ; ",
      "lunch": "cm_prevail2spr-userdebug",
      "legacy_versions": [

      ],
      "version": "6.0.2.7",
      "key": "prevail2spr"
    },
    {
      "name": "Samsung Galaxy S3 Mini",
      "touch_version": "6.0.2.7",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p21 bs=4096 ; ",
      "lunch": "cm_golden-userdebug",
      "legacy_versions": [

      ],
      "version": "6.0.2.7",
      "init": "init.golden.rc",
      "key": "golden"
    },
    {
      "name": "HTC Droid Incredible 4G LTE",
      "touch_version": "6.0.3.3",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p22 bs=4096 ; ",
      "lunch": "cm_fireball-userdebug",
      "legacy_versions": [
        "6.0.2.8",
        "6.0.2.9",
        "6.0.3.1"
      ],
      "version": "6.0.3.3",
      "init": "init.fireball.rc",
      "key": "fireball"
    },
    {
      "name": "HTC Jetstream",
      "touch_version": "6.0.2.8",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p23 bs=4096 ; ",
      "lunch": "cm_puccinilte-userdebug",
      "legacy_versions": [

      ],
      "version": "6.0.2.8",
      "init": "init.puccinilte.rc",
      "key": "puccinilte"
    },
    {
      "name": "LG Optimus L7",
      "touch_version": "6.0.2.8",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p17 bs=4096 ; ",
      "lunch": "cm_p700-userdebug",
      "legacy_versions": [

      ],
      "version": "6.0.2.8",
      "init": "init.u0.rc",
      "key": "p700"
    },
    {
      "name": "HTC One",
      "touch_version": "6.0.3.1",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p34 bs=4096 ; ",
      "lunch": "cm_m7-userdebug",
      "legacy_versions": [
        "6.0.2.8",
        "6.0.3.0"
      ],
      "version": "6.0.3.1",
      "init": "init.m7.rc",
      "key": "m7"
    },
    {
      "name": "HTC Butterfly (dlxu)",
      "touch_version": "6.0.3.1",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p20 bs=4096 ; ",
      "lunch": "cm_dlxu-userdebug",
      "legacy_versions": [
        "6.0.2.8",
        "6.0.3.0"
      ],
      "version": "6.0.3.1",
      "init": "init.dlxu.rc",
      "key": "dlxu"
    },
    {
      "name": "HTC Butterfly (dlxub1)",
      "touch_version": "6.0.3.1",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p20 bs=4096 ; ",
      "lunch": "cm_dlxub1-userdebug",
      "legacy_versions": [
        "6.0.2.8",
        "6.0.3.0"
      ],
      "version": "6.0.3.1",
      "init": "init.dlxub1.rc",
      "key": "dlxub1"
    },
    {
      "name": "HTC Butterfly J",
      "touch_version": "6.0.3.1",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p20 bs=4096 ; ",
      "lunch": "cm_dlxj-userdebug",
      "legacy_versions": [
        "6.0.2.8",
        "6.0.3.0"
      ],
      "version": "6.0.3.1",
      "init": "init.dlxj.rc",
      "key": "dlxj"
    },
    {
      "name": "LG Optimus L5",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p17 bs=4096 ; ",
      "lunch": "cm_e610-userdebug",
      "legacy_versions": [

      ],
      "version": "6.0.2.8",
      "init": "init.m4.rc",
      "key": "e610"
    },
    {
      "name": "HTC One X (AT&T)",
      "touch_version": "6.0.3.1",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p22 bs=4096 ; ",
      "lunch": "cm_evita-userdebug",
      "legacy_versions": [
        "6.0.2.8"
      ],
      "version": "6.0.3.1",
      "init": "init.evita.rc",
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
      "flash_recovery": "dd if=%s of=/dev/block/platform/sdhci-tegra.3/by-num/p2 bs=4096 ; ",
      "lunch": "cm_p4-userdebug",
      "legacy_versions": [
        "6.0.2.9",
        "6.0.3.0"
      ],
      "version": "6.0.3.1",
      "init": "init.p4.rc",
      "key": "p4"
    },
    {
      "name": "Samsung Galaxy Tab 10.1 (T-Mobile)",
      "touch_version": "6.0.3.1",
      "flash_recovery": "dd if=%s of=/dev/block/platform/sdhci-tegra.3/by-num/p2 bs=4096 ; ",
      "lunch": "cm_p4tmo-userdebug",
      "legacy_versions": [
        "6.0.2.9",
        "6.0.3.0"
      ],
      "version": "6.0.3.1",
      "init": "init.p4tmo.rc",
      "key": "p4tmo"
    },
    {
      "name": "Samsung Galaxy Tab 10.1 (Verizon)",
      "touch_version": "6.0.3.1",
      "flash_recovery": "dd if=%s of=/dev/block/platform/sdhci-tegra.3/by-num/p2 bs=4096 ; ",
      "lunch": "cm_p4vzw-userdebug",
      "legacy_versions": [
        "6.0.2.9",
        "6.0.3.0"
      ],
      "version": "6.0.3.1",
      "init": "init.p4vzw.rc",
      "key": "p4vzw"
    },
    {
      "name": "LG Optimus L9",
      "touch_version": "6.0.3.1",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p4 bs=4096 ; ",
      "lunch": "cm_p760-userdebug",
      "legacy_versions": [
        "6.0.2.9"
      ],
      "version": "6.0.3.1",
      "init": "init.u0.rc",
      "key": "p760"
    },
    {
      "name": "Samsung Galaxy S3 LTE (GT-I9305)",
      "touch_version": "6.0.3.6",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p9 bs=4096 ; ",
      "lunch": "cm_i9305-userdebug",
      "legacy_versions": [
        "6.0.2.9",
        "6.0.3.1",
        "6.0.3.2"
      ],
      "version": "6.0.3.6",
      "init": "ueventd.smdk4x12.rc",
      "key": "i9305"
    },
    {
      "name": "Samsung Galaxy Tab 10.1v",
      "touch_version": "6.0.3.1",
      "flash_recovery": "dd if=%s of=/dev/block/platform/sdhci-tegra.3/by-num/p2 bs=4096 ; ",
      "lunch": "cm_p3-userdebug",
      "legacy_versions": [
        "6.0.2.9"
      ],
      "version": "6.0.3.1",
      "init": "init.p3.rc",
      "key": "p3"
    },
    {
      "name": "Samsung Galaxy Note 10.1",
      "touch_version": "6.0.3.6",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p6 bs=4096 ; ",
      "lunch": "cm_n8013-userdebug",
      "legacy_versions": [
        "6.0.3.0",
        "6.0.3.1"
      ],
      "version": "6.0.3.6",
      "init": "init.n8013.rc",
      "key": "n8013"
    },
    {
      "name": "Samsung Galaxy Note 2 (Verizon)",
      "ro.product.devices": [
        "i605",
        "t0ltevzw"
      ],
      "touch_version": "6.0.4.3",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p9 bs=4096 ; ",
      "lunch": "cm_i605-userdebug",
      "legacy_versions": [
        "6.0.3.0",
        "6.0.4.1"
      ],
      "version": "6.0.4.3",
      "init": "init.i605.rc",
      "key": "i605"
    },
    {
      "name": "Samsung Galaxy Note 2 (Sprint)",
      "ro.product.devices": [
        "l900",
        "t0ltespr"
      ],
      "touch_version": "6.0.4.3",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p9 bs=4096 ; ",
      "lunch": "cm_l900-userdebug",
      "legacy_versions": [
        "6.0.3.0",
        "6.0.3.1",
        "6.0.4.1"
      ],
      "version": "6.0.4.3",
      "init": "init.l900.rc",
      "key": "l900"
    },
    {
      "name": "Samsung Galaxy Note 2 (AT&T)",
      "touch_version": "6.0.4.3",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p9 bs=4096 ; ",
      "lunch": "cm_t0lteatt-userdebug",
      "legacy_versions": [
        "6.0.3.0",
        "6.0.3.1",
        "6.0.3.6",
        "6.0.4.1"
      ],
      "version": "6.0.4.3",
      "init": "init.t0lteatt.rc",
      "key": "t0lteatt"
    },
    {
      "name": "Samsung Galaxy Note 2 (T-Mobile)",
      "touch_version": "6.0.4.3",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p9 bs=4096 ; ",
      "lunch": "cm_t0ltetmo-userdebug",
      "legacy_versions": [
        "6.0.3.0",
        "6.0.3.1",
        "6.0.3.6",
        "6.0.3.7",
        "6.0.4.1"
      ],
      "version": "6.0.4.3",
      "init": "init.t0ltetmo.rc",
      "key": "t0ltetmo"
    },
    {
      "name": "LG Optimus G Intl (E975)",
      "touch_version": "6.0.3.0",
      "flash_recovery": "dd if=%s of=/dev/block/platform/msm_sdcc.1/by-name/recovery bs=4096 ; ",
      "lunch": "cm_e975-userdebug",
      "legacy_versions": [

      ],
      "version": "6.0.3.0",
      "init": "init.geehrc.rc",
      "key": "e975"
    },
    {
      "name": "LG Optimus 4X HD",
      "touch_version": "6.0.3.1",
      "flash_recovery": "dd if=%s of=/dev/block/platform/sdhci-tegra.3/by-name/SOS bs=4096 ; ",
      "lunch": "cm_p880-userdebug",
      "reboot_recovery": "echo 'boot-recovery' | dd of=/dev/block/mmcblk0p5 bs=1 count=13 ; reboot ; ",
      "legacy_versions": [

      ],
      "version": "6.0.3.1",
      "init": "init.x3.rc",
      "key": "p880"
    },
    {
      "name": "Samsung Galaxy Note (T-Mobile)",
      "touch_version": "6.0.4.3",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p22 bs=4096 ; ",
      "lunch": "cm_quincytmo-userdebug",
      "legacy_versions": [
        "6.0.3.1",
        "6.0.3.6",
        "6.0.4.1"
      ],
      "version": "6.0.4.3",
      "init": "init.quincytmo.rc",
      "key": "quincytmo"
    },
    {
      "name": "Samsung Galaxy Note 10.1 (GSM)",
      "touch_version": "6.0.3.6",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p6 bs=4096 ; ",
      "lunch": "cm_n8000-userdebug",
      "legacy_versions": [
        "6.0.3.1"
      ],
      "version": "6.0.3.6",
      "init": "init.n8000.rc",
      "key": "n8000"
    },
    {
      "name": "Oppo Find5",
      "touch_version": "6.0.3.7",
      "flash_recovery": "dd if=%s of=/dev/block/platform/msm_sdcc.1/by-name/recovery bs=4096 ; ",
      "lunch": "cm_find5-userdebug",
      "legacy_versions": [
        "6.0.3.1"
      ],
      "version": "6.0.3.7",
      "init": "init.find5.rc",
      "key": "find5"
    },
    {
      "name": "Samsung Galaxy S4 (T-Mobile)",
      "ro.product.devices": [
        "jfltetmo",
        "jflteMetroPCS"
      ],
      "touch_version": "6.0.4.3",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p21 bs=4096 ; ",
      "lunch": "cm_jfltetmo-userdebug",
      "legacy_versions": [
        "6.0.3.2",
        "6.0.3.6",
        "6.0.3.8",
        "6.0.4.1"
      ],
      "version": "6.0.4.3",
      "init": "init.jfltetmo.rc",
      "key": "jfltetmo"
    },
    {
      "name": "Samsung Galaxy S4 (Canada/Bell)",
      "touch_version": "6.0.4.4",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p21 bs=4096 ; ",
      "lunch": "cm_jfltecan-userdebug",
      "legacy_versions": [
        "6.0.3.2",
        "6.0.3.6",
        "6.0.3.8",
        "6.0.4.1"
      ],
      "version": "6.0.4.4",
      "init": "init.jfltecan.rc",
      "key": "jfltecan"
    },
    {
      "name": "ZTE Engage",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p17 bs=4096 ; ",
      "lunch": "cm_V8000-userdebug",
      "legacy_versions": [

      ],
      "version": "6.0.3.2",
      "init": "init.zte.rc",
      "key": "V8000"
    },
    {
      "name": "Samsung Galaxy S4 (i9500)",
      "touch_version": "6.0.3.2",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p10 bs=4096 ; ",
      "lunch": "cm_i9500-userdebug",
      "legacy_versions": [

      ],
      "version": "6.0.3.2",
      "init": "init.i9500.rc",
      "key": "i9500"
    },
    {
      "name": "Motorola Xoom (GSM)",
      "touch_version": "6.0.3.2",
      "flash_recovery": "dd if=%s of=/dev/block/platform/sdhci-tegra.3/by-name/recovery bs=4096 ; ",
      "lunch": "cm_everest-userdebug",
      "legacy_versions": [

      ],
      "version": "6.0.3.2",
      "init": "init.everest.rc",
      "key": "everest"
    },
    {
      "name": "HTC Desire X",
      "touch_version": "6.0.3.2",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p21 bs=4096 ; ",
      "lunch": "cm_protou-userdebug",
      "legacy_versions": [

      ],
      "version": "6.0.3.2",
      "init": "init.protou.rc",
      "key": "protou"
    },
    {
      "name": "HTC One (Sprint)",
      "ro.product.devices": [
        "m7spr",
        "m7wls"
      ],
      "touch_version": "6.0.4.3",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p36 bs=4096 ; ",
      "lunch": "cm_m7spr-userdebug",
      "legacy_versions": [
        "6.0.3.2",
        "6.0.3.6",
        "6.0.3.8",
        "6.0.4.1"
      ],
      "version": "6.0.4.3",
      "init": "init.m7spr.rc",
      "key": "m7spr"
    },
    {
      "name": "HTC One (T-Mobile)",
      "touch_version": "6.0.4.3",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p34 bs=4096 ; ",
      "lunch": "cm_m7tmo-userdebug",
      "legacy_versions": [
        "6.0.3.2",
        "6.0.3.6",
        "6.0.3.8",
        "6.0.4.1"
      ],
      "version": "6.0.4.3",
      "init": "init.m7tmo.rc",
      "key": "m7tmo"
    },
    {
      "name": "HTC One (AT&T)",
      "touch_version": "6.0.4.3",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p34 bs=4096 ; ",
      "lunch": "cm_m7att-userdebug",
      "legacy_versions": [
        "6.0.3.2",
        "6.0.3.5",
        "6.0.3.6",
        "6.0.3.8",
        "6.0.4.1",
        "6.0.4.2"
      ],
      "version": "6.0.4.3",
      "init": "init.m7att.rc",
      "key": "m7att"
    },
    {
      "name": "Samsung Galaxy S4 (AT&T)",
      "touch_version": "6.0.4.1",
      "flash_recovery": "dd if=/dev/block/platform/msm_sdcc.1/by-name/aboot of=/sdcard/clockworkmod/aboot.img; /data/data/com.koushikdutta.rommanager/files/loki_patch recovery /sdcard/clockworkmod/aboot.img %s /sdcard/clockworkmod/recovery.lok ; /data/data/com.koushikdutta.rommanager/files/loki_flash recovery /sdcard/clockworkmod/recovery.lok ; ",
      "lunch": "cm_jflteatt-userdebug",
      "legacy_versions": [
        "6.0.3.2",
        "6.0.3.6",
        "6.0.3.8",
        "6.0.4.1"
      ],
      "version": "6.0.4.3",
      "init": "init.jflteatt.rc",
      "key": "jflteatt"
    },
    {
      "name": "HTC One (non-US GSM)",
      "touch_version": "6.0.4.3",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p34 bs=4096 ; ",
      "lunch": "cm_m7ul-userdebug",
      "legacy_versions": [
        "6.0.3.2",
        "6.0.3.6",
        "6.0.3.8",
        "6.0.4.1"
      ],
      "version": "6.0.4.3",
      "init": "init.m7ul.rc",
      "key": "m7ul"
    },
    {
      "name": "Samsung Galaxy S4 (Verizon)",
      "touch_version": "6.0.4.3",
      "flash_recovery": "dd if=/dev/block/platform/msm_sdcc.1/by-name/aboot of=/sdcard/clockworkmod/aboot.img; /data/data/com.koushikdutta.rommanager/files/loki_patch recovery /sdcard/clockworkmod/aboot.img %s /sdcard/clockworkmod/recovery.lok ; /data/data/com.koushikdutta.rommanager/files/loki_flash recovery /sdcard/clockworkmod/recovery.lok ; ",
      "lunch": "cm_jfltevzw-userdebug",
      "legacy_versions": [
        "6.0.3.2",
        "6.0.3.6",
        "6.0.3.8",
        "6.0.4.1"
      ],
      "version": "6.0.4.3",
      "init": "init.jfltevzw.rc",
      "key": "jfltevzw"
    },
    {
      "name": "Samsung Galaxy S4 (Sprint)",
      "touch_version": "6.0.4.3",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p21 bs=4096 ; ",
      "lunch": "cm_jfltespr-userdebug",
      "legacy_versions": [
        "6.0.3.2",
        "6.0.3.6",
        "6.0.3.8",
        "6.0.4.1"
      ],
      "version": "6.0.4.3",
      "init": "init.jfltespr.rc",
      "key": "jfltespr"
    },
    {
      "name": "Samsung Galaxy S4 (US Cellular)",
      "touch_version": "6.0.4.3",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p21 bs=4096 ; ",
      "lunch": "cm_jflteusc-userdebug",
      "legacy_versions": [
        "6.0.3.2",
        "6.0.3.8",
        "6.0.4.1"
      ],
      "version": "6.0.4.3",
      "init": "init.jflteusc.rc",
      "key": "jflteusc"
    },
    {
      "name": "Samsung Galaxy S4 (i9505)",
      "touch_version": "6.0.4.3",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p21 bs=4096 ; ",
      "lunch": "cm_jfltexx-userdebug",
      "legacy_versions": [
        "6.0.3.2",
        "6.0.3.3",
        "6.0.3.5",
        "6.0.3.6",
        "6.0.3.8",
        "6.0.4.1"
      ],
      "version": "6.0.4.3",
      "init": "init.jfltexx.rc",
      "key": "jfltexx"
    },
    {
      "name": "Samsung Galaxy S4 (Cricket)",
      "touch_version": "6.0.4.3",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p21 bs=4096 ; ",
      "lunch": "cm_jfltecri-userdebug",
      "legacy_versions": [
        "6.0.3.2",
        "6.0.3.6",
        "6.0.3.8",
        "6.0.4.1"
      ],
      "version": "6.0.4.3",
      "init": "init.jfltecri.rc",
      "key": "jfltecri"
    },
    {
      "name": "LG Optimus Q (LGL55C Tracfone)",
      "flash_recovery": "dd if=%s of=/dev/block/mtdblock2 bs=4096 ; ",
      "lunch": "cm_lgl55c-userdebug",
      "legacy_versions": [

      ],
      "version": "6.0.3.3",
      "init": "init.gelato.rc",
      "key": "lgl55c"
    },
    {
      "name": "Samsung Galaxy S4 (C Spire)",
      "touch_version": "6.0.4.3",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p21 bs=4096 ; ",
      "lunch": "cm_jfltecsp-userdebug",
      "legacy_versions": [
        "6.0.3.5",
        "6.0.3.6",
        "6.0.3.8",
        "6.0.4.1"
      ],
      "version": "6.0.4.3",
      "init": "init.jfltecsp.rc",
      "key": "jfltecsp"
    },
    {
      "name": "Huawei Ascend Q",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p16 ; ",
      "lunch": "cm_m660-userdebug",
      "legacy_versions": [

      ],
      "version": "6.0.3.5",
      "init": "init.highmem.rc",
      "key": "m660"
    },
    {
      "name": "Google Nexus 7 (2013)",
      "touch_version": "6.0.4.3",
      "flash_recovery": "dd if=%s of=/dev/block/platform/msm_sdcc.1/by-name/recovery bs=4096 ; ",
      "lunch": "cm_flo-userdebug",
      "legacy_versions": [
        "6.0.3.7",
        "6.0.4.1"
      ],
      "version": "6.0.4.3",
      "init": "init.flo.rc",
      "key": "flo"
    },
    {
      "name": "Samsung SGH-T699",
      "touch_version": "6.0.3.8",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p18 bs=4096 ; ",
      "lunch": "cm_apexqtmo-userdebug",
      "legacy_versions": [

      ],
      "version": "6.0.3.8",
      "init": "init.apexqtmo.rc",
      "key": "apexqtmo"
    },
    {
      "name": "LG Optimus G (ATT)",
      "touch_version": "6.0.3.8",
      "flash_recovery": "dd if=%s of=/dev/block/platform/msm_sdcc.1/by-name/recovery bs=4096 ; ",
      "lunch": "cm_e970-userdebug",
      "legacy_versions": [

      ],
      "version": "6.0.3.8",
      "init": "init.gee.rc",
      "key": "e970"
    },
    {
      "name": "LG Optimus G (Canada)",
      "touch_version": "6.0.3.8",
      "flash_recovery": "dd if=%s of=/dev/block/platform/msm_sdcc.1/by-name/recovery bs=4096 ; ",
      "lunch": "cm_e973-userdebug",
      "legacy_versions": [

      ],
      "version": "6.0.3.8",
      "init": "init.gee.rc",
      "key": "e973"
    },
    {
      "name": "LG Optimus G (Sprint)",
      "touch_version": "6.0.3.8",
      "flash_recovery": "dd if=%s of=/dev/block/platform/msm_sdcc.1/by-name/recovery bs=4096 ; ",
      "lunch": "cm_ls970-userdebug",
      "legacy_versions": [

      ],
      "version": "6.0.3.8",
      "init": "init.gee.rc",
      "key": "ls970"
    },
    {
      "name": "LG Optimus G Pro (GSM)",
      "touch_version": "6.0.3.8",
      "flash_recovery": "dd if=/dev/block/platform/msm_sdcc.1/by-name/aboot of=/sdcard/clockworkmod/aboot.img; /data/data/com.koushikdutta.rommanager/files/loki_patch recovery /sdcard/clockworkmod/aboot.img %s /sdcard/clockworkmod/recovery.lok ; /data/data/com.koushikdutta.rommanager/files/loki_flash recovery /sdcard/clockworkmod/recovery.lok ; ",
      "lunch": "cm_e980-userdebug",
      "legacy_versions": [

      ],
      "version": "6.0.3.8",
      "init": "init.gee_gk.rc",
      "key": "e980"
    },
    {
      "name": "LG Spirit 4G (MetroPCS)",
      "touch_version": "6.0.3.9",
      "flash_recovery": "dd if=/dev/block/platform/msm_sdcc.1/by-name/aboot of=/sdcard/clockworkmod/aboot.img; /data/data/com.koushikdutta.rommanager/files/loki_patch recovery /sdcard/clockworkmod/aboot.img %s /sdcard/clockworkmod/recovery.lok ; /data/data/com.koushikdutta.rommanager/files/loki_flash recovery /sdcard/clockworkmod/recovery.lok ; ",
      "lunch": "cm_l1m-userdebug",
      "legacy_versions": [
        "6.0.3.8"
      ],
      "version": "6.0.3.9",
      "init": "init.l1m.rc",
      "key": "l1m"
    },
    {
      "name": "m7vzw",
      "touch_version": "6.0.4.3",
      "lunch": "cm_m7vzw-userdebug",
      "legacy_versions": [
        "6.0.3.8",
        "6.0.4.1"
      ],
      "version": "6.0.4.3",
      "init": "init.m7vzw.rc",
      "key": "m7vzw"
    }
  ],
  "manifest_signature": "O8+Kc2mdQz0e/AjCQn6Rw6fK5Kr5LZItJ474Ua3gF2o4IgdCQZXIbwCHIo6xeqY3pVEGtjYmmyO1PkRYcGqq2rB2wQM8SoKFl/70vG0ihEZ5TDeruKUgxVVSNM3e09kBvCxYK89GWqVWkNHtvTu1T1F9w6FilzCsNFSAXHD0Bos=",
  "recovery_url": "http://download2.clockworkmod.com/recoveries/recovery-clockwork-%s-%s.img",
  "recovery_zip_url": "http://download2.clockworkmod.com/recoveries/recovery-clockwork-%s-%s.zip",
  "recovery_twrp_url": "http://download2.clockworkmod.com/twrp/openrecovery-twrp-%s-%s.img",
  "version": "2.5.0.1",
  "keywords": "phone accessories,droid,gadgets,bluetooth headset,car charger,sd card",
  "ad_network": "admob"
}