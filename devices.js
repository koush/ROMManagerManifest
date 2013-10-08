{
  "ad_network": "admob",
  "recovery_zip_url": "http://download2.clockworkmod.com/recoveries/recovery-clockwork-%s-%s.zip",
  "owners": {
    "keaneyw@gmail.com": true,
    "koush@clockworkmod.com": true,
    "njgreb@gmail.com": true,
    "cvpcsm@gmail.com": true,
    "ferguson.david@gmail.com": true,
    "playfulgod@gmail.com": true,
    "layhertony@gmail.com": true,
    "echen@cyngn.com": true,
    "attn1.repo@gmail.com": true,
    "arcee@cyanogenmod.com": true,
    "utkanos@gmail.com": true,
    "bigbeeshane@gmail.com": true,
    "daniel.hillenbrand@codeworkx.de": true
  },
  "recovery_twrp_url": "http://download2.clockworkmod.com/twrp/openrecovery-twrp-%s-%s.img",
  "use_in_app": false,
  "devices": [
    {
      "name": "Motorola Droid",
      "key": "sholes",
      "version": "2.5.0.1",
      "alternate_recovery": {
        "name": "SPRecovery 0.99.3b",
        "url": "http://koush.kanged.net/cm/recoveries/sprecovery.img",
        "clockwork": false
      },
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
      "key": "sapphire",
      "version": "2.5.0.7",
      "alternate_recovery": {
        "name": "RA Recovery v1.7.0G",
        "url": "http://files.androidspin.com/downloads.php?dir=amon_ra/RECOVERY/&file=recovery-RA-sapphire-v1.7.0G.img",
        "clockwork": false
      },
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
      "key": "magic",
      "version": "2.5.0.7",
      "alternate_recovery": {
        "name": "RA Recovery v1.7.0H",
        "url": "http://files.androidspin.com/downloads.php?dir=amon_ra/RECOVERY/&file=recovery-RA-sapphire-v1.7.0H.img",
        "clockwork": false
      },
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
      "key": "dream",
      "version": "2.5.0.7",
      "alternate_recovery": {
        "name": "RA Recovery v1.7.0",
        "url": "http://files.androidspin.com/downloads.php?dir=amon_ra/RECOVERY/&file=recovery-RA-dream-v1.7.0.img",
        "clockwork": false
      },
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
      "key": "passion",
      "version": "5.0.2.0",
      "alternate_recovery": {
        "name": "RA Recovery v2.2.1",
        "url": "http://files.androidspin.com/downloads.php?dir=amon_ra/RECOVERY/&file=recovery-RA-passion-v2.2.1.img",
        "clockwork": false
      },
      "lunch": "cyanogen_passion-eng",
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
      "key": "hero",
      "version": "2.5.0.7",
      "alternate_recovery": {
        "name": "RA Recovery v1.7.0.1",
        "url": "http://files.androidspin.com/downloads.php?dir=amon_ra/RECOVERY/&file=recovery-RA-hero-v1.7.0.1.img",
        "clockwork": false
      },
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
      "key": "heroc",
      "version": "2.5.0.7",
      "alternate_recovery": {
        "name": "RA Recovery v1.6.2",
        "url": "http://www.androidspin.com/downloads.php?dir=amon_ra/RECOVERY/&file=recovery-RA-heroc-v1.6.2.img",
        "clockwork": false
      },
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
      "key": "supersonic",
      "version": "5.0.2.2",
      "alternate_recovery": {
        "name": "RA Recovery v2.3",
        "url": "http://files.androidspin.com/downloads.php?dir=amon_ra/RECOVERY/&file=recovery-RA-supersonic-v2.3.img",
        "clockwork": false
      },
      "lunch": "cyanogen_supersonic-eng",
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
      "key": "legend",
      "version": "5.0.2.0",
      "lunch": "cyanogen_legend-eng",
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
      "key": "bravo",
      "version": "5.0.2.0",
      "lunch": "cyanogen_bravo-eng",
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
      "key": "bravoc",
      "version": "5.0.2.0",
      "lunch": "cyanogen_bravoc-eng",
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
      "key": "pulsemini",
      "version": "2.5.0.7",
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
      "key": "inc",
      "version": "5.0.2.0",
      "alternate_recovery": {
        "name": "RA_GNM Recovery v3.02",
        "url": "http://dl.dropbox.com/u/12949506/RomManager/recovery-RA-inc-3.02.img",
        "clockwork": false
      },
      "lunch": "cyanogen_inc-eng",
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
      "key": "liberty",
      "version": "2.5.0.7",
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
      "key": "desirec",
      "version": "2.5.0.7",
      "alternate_recovery": {
        "name": "RA Recovery v1.6.2",
        "url": "http://www.androidspin.com/downloads.php?dir=amon_ra/RECOVERY/&file=recovery-RA-eris-v1.6.2.img",
        "clockwork": false
      },
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
      "key": "buzz",
      "version": "5.0.2.0",
      "lunch": "cyanogen_buzz-eng",
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
      "key": "streak",
      "version": "2.5.0.7",
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
      "key": "espresso",
      "version": "2.5.0.7",
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
      "key": "galaxys",
      "version": "2.5.1.2",
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
      "key": "fascinate",
      "version": "3.0.0.8",
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
      "key": "vibrant",
      "version": "2.5.1.2",
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
      "key": "captivate",
      "version": "2.5.1.2",
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
      "key": "pulse",
      "version": "2.5.0.7",
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
      "key": "aloha",
      "version": "2.5.0.7",
      "alternate_recovery": {
        "name": "RA_GNM Recovery v2.2.2",
        "url": "http://dl.dropbox.com/u/12949506/RomManager/recovery-RA-aloha-2.2.2-GNM.img",
        "clockwork": false
      },
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
      "key": "milestone",
      "version": "3.1.0.2",
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
      "reboot_recovery": "rm /cache/recovery/command ; echo 1 > /data/.recovery_mode ; sync ; reboot ;",
      "flash_recovery": "dd if=%s of=/preinstall/recovery/recovery.zip ; ",
      "readonly_recovery": true,
      "key": "droidx",
      "version": "5.0.2.0",
      "init": "init.mapphone_cdma.rc",
      "legacy_versions": [
        "2.5.0.7"
      ]
    },
    {
      "name": "Motorola Droid X (2nd-init)",
      "reboot_recovery": "rm /cache/recovery/command ; echo 1 > /data/.recovery_mode ; sync ; reboot ;",
      "flash_recovery": "dd if=%s of=/preinstall/recovery/recovery.zip ; ",
      "readonly_recovery": true,
      "key": "shadow",
      "version": "5.0.2.0",
      "lunch": "cyanogen_shadow-eng",
      "init": "init.mapphone_cdma.rc",
      "legacy_versions": [
        "2.5.0.7"
      ]
    },
    {
      "name": "Acer Liquid",
      "key": "salsa",
      "version": "2.5.1.0",
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
      "key": "z71",
      "version": "2.5.1.3",
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
      "flash_recovery": "dd if=/dev/zero of=/dev/block/mmcblk0p21 bs=4096 ; dd if=%s of=/dev/block/mmcblk0p21 bs=4096 ; ",
      "touch_version": "5.8.1.0",
      "key": "vision",
      "version": "5.0.2.7",
      "lunch": "cyanogen_vision-eng",
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
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p21 ; ",
      "touch_version": "5.8.1.0",
      "key": "glacier",
      "version": "5.0.2.0",
      "lunch": "cyanogen_glacier-eng",
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
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p21 ; ",
      "touch_version": "5.8.1.5",
      "key": "ace",
      "version": "5.0.2.0",
      "lunch": "cyanogen_ace-eng",
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
      "key": "morrison",
      "version": "5.0.2.0",
      "lunch": "cyanogen_morrison-eng",
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
      "reboot_recovery": "rm /cache/recovery/command ; echo 1 > /data/.recovery_mode ; sync ; reboot ;",
      "flash_recovery": "dd if=%s of=/preinstall/recovery/recovery.zip ; ",
      "readonly_recovery": true,
      "key": "droid2",
      "version": "5.0.2.0",
      "lunch": "cyanogen_droid2-eng",
      "init": "init.mapphone_cdma.rc",
      "legacy_versions": [
        "2.5.0.8"
      ]
    },
    {
      "name": "Geeksphone ONE",
      "key": "one",
      "version": "2.5.1.3",
      "alternate_recovery": {
        "name": "ONE Recovery v1.6",
        "url": "http://dl.dropbox.com/u/10355648/recovery-ONE-1_6.img",
        "clockwork": false
      },
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
      "reboot_recovery": "echo start > /proc/ota ; ",
      "flash_recovery": "/data/data/com.koushikdutta.rommanager/files/tegra_flash_image recovery %s ; ",
      "key": "vega",
      "version": "3.0.2.7",
      "init": "init_recovery.rc",
      "legacy_versions": [
        "2.5.1.4",
        "2.5.1.3",
        "2.5.1.1",
        "2.5.1.0",
        "2.5.1.4"
      ]
    },
    {
      "name": "Samsung Galaxy Tab - ATT",
      "readonly_recovery": true,
      "key": "att_tab",
      "version": "2.5.1.8",
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
      "key": "tmobile_tab",
      "version": "2.5.1.8",
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
      "key": "FM6",
      "version": "2.5.1.2",
      "alternate_recovery": {
        "name": "MI700 Recovery v1.6",
        "url": "http://dl.dropbox.com/u/15816725/MI700-recovery-V1_3.img",
        "clockwork": false
      },
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
      "touch_version": "6.0.4.3",
      "key": "crespo",
      "version": "6.0.4.3",
      "lunch": "cm_crespo-userdebug",
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
        "6.0.3.6",
        "6.0.3.8",
        "6.0.4.1"
      ]
    },
    {
      "name": "Motorola Droid Pro",
      "readonly_recovery": true,
      "key": "droidpro",
      "version": "2.5.0.8",
      "init": "init. mapphone_cdma.rc",
      "legacy_versions": [
        "2.5.0.8"
      ]
    },
    {
      "name": "Huawei Ascend",
      "key": "ascend",
      "version": "3.0.0.5",
      "init": "init.qcom.rc",
      "legacy_versions": [
        "3.0.0.5",
        "3.0.0.4"
      ]
    },
    {
      "name": "ZTE Blade",
      "key": "blade",
      "version": "5.0.2.0",
      "lunch": "cyanogen_blade-eng",
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
      "key": "click",
      "version": "5.0.2.0",
      "lunch": "cyanogen_click-eng",
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
      "key": "a7",
      "version": "3.0.0.8",
      "init": "init_recovery.rc",
      "legacy_versions": [
        "3.0.0.8"
      ]
    },
    {
      "name": "Geeksphone Zero",
      "key": "zero",
      "version": "3.0.1.3",
      "init": "init.zero.rc",
      "legacy_versions": [
        "3.0.1.3"
      ]
    },
    {
      "name": "HTC Evo Shift",
      "touch_version": "5.8.1.6",
      "key": "speedy",
      "version": "5.0.2.0",
      "lunch": "cyanogen_speedy-eng",
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
      "reboot_recovery": "echo 1 > /cache/.startrecovery ; sync ; reboot ;",
      "key": "captivatemtd",
      "officially_supported": false,
      "init": "init.aries.rc",
      "legacy_versions": [

      ]
    },
    {
      "name": "Samsung Showcase (MTD)",
      "reboot_recovery": "echo 1 > /cache/.startrecovery ; sync ; reboot ;",
      "key": "showcasemtd",
      "officially_supported": false,
      "init": "init.aries.rc",
      "legacy_versions": [

      ]
    },
    {
      "name": "Samsung Mesmerize (MTD)",
      "reboot_recovery": "echo 1 > /cache/.startrecovery ; sync ; reboot ;",
      "key": "mesmerizemtd",
      "officially_supported": false,
      "init": "init.aries.rc",
      "legacy_versions": [

      ]
    },
    {
      "name": "Samsung Fascinate (MTD)",
      "reboot_recovery": "echo 1 > /cache/.startrecovery ; sync ; reboot ;",
      "key": "fascinatemtd",
      "officially_supported": false,
      "init": "init.aries.rc",
      "legacy_versions": [

      ]
    },
    {
      "name": "Samsung Vibrant (MTD)",
      "reboot_recovery": "echo 1 > /cache/.startrecovery ; sync ; reboot ;",
      "key": "vibrantmtd",
      "officially_supported": false,
      "init": "init.aries.rc",
      "legacy_versions": [

      ]
    },
    {
      "name": "Samsung GalaxyS i9000B (MTD)",
      "reboot_recovery": "echo 1 > /cache/.startrecovery ; sync ; reboot ;",
      "key": "galaxysbmtd",
      "officially_supported": false,
      "init": "init.aries.rc",
      "legacy_versions": [

      ]
    },
    {
      "name": "Samsung GalaxyS i9000 (MTD)",
      "reboot_recovery": "echo 1 > /cache/.startrecovery ; sync ; reboot ;",
      "key": "galaxysmtd",
      "officially_supported": false,
      "init": "init.aries.rc",
      "legacy_versions": [

      ]
    },
    {
      "name": "Samsung Epic4G",
      "readonly_recovery": true,
      "key": "epic4g",
      "version": "5.0.2.7",
      "lunch": "full_epic4g-eng",
      "init": "lpm.rc",
      "legacy_versions": [

      ]
    },
    {
      "name": "Dell Streak 7",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk3p1 ; ",
      "key": "streak7",
      "version": "3.0.2.0",
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
      "key": "mecha",
      "version": "5.0.2.1",
      "alternate_recovery": {
        "name": "RA_GNM Recovery v3.05",
        "url": "http://dl.dropbox.com/u/12949506/RomManager/recovery-ra-mecha-3.05.img",
        "clockwork": false
      },
      "lunch": "cyanogen_mecha-eng",
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
      "key": "ideos",
      "version": "3.0.2.4",
      "init": "init.ideos.rc",
      "legacy_versions": [
        "3.0.2.4"
      ]
    },
    {
      "name": "Motorola XOOM",
      "flash_recovery": "dd if=%s of=/dev/block/platform/sdhci-tegra.3/by-name/recovery ; ",
      "touch_version": "6.0.3.1",
      "key": "stingray",
      "version": "6.0.3.1",
      "lunch": "cm_stingray-userdebug",
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
      "key": "leo",
      "version": "3.1.0.0",
      "init": "init.leo.rc",
      "legacy_versions": [
        "3.0.2.5",
        "3.0.2.4",
        "3.0.2.5"
      ]
    },
    {
      "name": "Motorola CLIQ XT/Quench (MB501)",
      "key": "zeppelin",
      "version": "5.0.2.0",
      "lunch": "cyanogen_zeppelin-eng",
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
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p21 ; ",
      "touch_version": "5.8.1.5",
      "key": "saga",
      "version": "5.0.2.0",
      "lunch": "full_saga-eng",
      "init": "init.saga.rc",
      "legacy_versions": [
        "3.0.2.6",
        "5.0.1.9"
      ]
    },
    {
      "name": "LG G2X (T-Mobile)",
      "reboot_recovery": "echo 'boot-recovery' | dd of=/dev/block/mmcblk0p3 seek=6144 bs=1 ; reboot ; ",
      "readonly_recovery": true,
      "key": "p999",
      "version": "5.0.2.0",
      "lunch": "cyanogen_p999-eng",
      "init": "init_recovery.rc",
      "legacy_versions": [
        "3.0.2.7",
        "5.0.0.8",
        "5.0.1.0",
        "5.0.1.4",
        "5.0.1.6"
      ]
    },
    {
      "name": "LG Optimus 2X",
      "reboot_recovery": "echo 'boot-recovery' | dd of=/dev/block/mmcblk0p3 seek=6144 bs=1 ; reboot ; ",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p7 ; ",
      "touch_version": "6.0.3.1",
      "key": "p990",
      "version": "6.0.3.1",
      "inits": [
        "init_recovery.rc",
        "/bootimages/opening_01.rle"
      ],
      "lunch": "cm_p990-userdebug",
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
      ]
    },
    {
      "name": "Google Nexus S 4G",
      "touch_version": "6.0.4.3",
      "key": "crespo4g",
      "version": "6.0.4.3",
      "lunch": "cm_crespo4g-userdebug",
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
        "6.0.3.6",
        "6.0.3.8",
        "6.0.4.1"
      ]
    },
    {
      "name": "LG Optimus One (old BB)",
      "key": "thunderg",
      "version": "5.0.2.0",
      "alternate_recovery": {
        "name": "RA_GNM Recovery v2.2.1",
        "url": "http://dl.dropbox.com/u/12949506/RomManager/recovery-RA-thunderg-2.2.1-GNM.img",
        "clockwork": false
      },
      "lunch": "full_thunderg-eng",
      "init": "init.thunderg.rc",
      "legacy_versions": [
        "3.1.0.0",
        "5.0.0.8",
        "5.0.1.0"
      ]
    },
    {
      "name": "LG Optimus One",
      "key": "p500",
      "version": "5.0.2.7",
      "lunch": "cyanogen_p500-eng",
      "init": "init.thunderg.rc",
      "legacy_versions": [
        "5.0.2.0"
      ]
    },
    {
      "name": "Huawei U8220/U8230",
      "key": "u8220",
      "version": "3.1.0.1",
      "init": "init.qcom.rc",
      "legacy_versions": [

      ]
    },
    {
      "name": "Samsung Charge",
      "readonly_recovery": true,
      "key": "charge",
      "version": "3.1.0.1",
      "init": "init.smdkc110.rc",
      "legacy_versions": [

      ]
    },
    {
      "name": "Motorola Defy",
      "key": "umts_jordan",
      "officially_supported": false,
      "init": "init.mapphone_umts.rc",
      "legacy_versions": [

      ]
    },
    {
      "name": "Samsung Galaxy S 4G",
      "readonly_recovery": true,
      "key": "galaxys4g",
      "version": "3.2.0.0",
      "init": "init.smdkc110.rc",
      "legacy_versions": [
        "3.2.0.0"
      ]
    },
    {
      "name": "Samsung Galaxy S2",
      "ro.product.device": [
        "i9100",
        "galaxys2"
      ],
      "touch_version": "5.8.1.5",
      "readonly_recovery": true,
      "key": "galaxys2",
      "version": "4.0.1.5",
      "inits": [
        "init.smdkc210.rc",
        "init.smdk4210.rc"
      ],
      "init": "init.smdkc210.rc",
      "legacy_versions": [
        "4.0.1.4",
        "v4.0.1.4"
      ]
    },
    {
      "name": "Samsung Galaxy S2",
      "ro.product.device": [
        "i9100",
        "galaxys2"
      ],
      "touch_version": "6.0.4.3",
      "key": "i9100",
      "officially_supported": false,
      "version": "6.0.4.3",
      "inits": [
        "init.smdkc210.rc",
        "init.smdk4210.rc"
      ],
      "lunch": "cm_i9100-userdebug",
      "init": "init.smdk4210.rc",
      "legacy_versions": [
        "6.0.1.0",
        "6.0.4.0"
      ]
    },
    {
      "name": "Samsung Galaxy Note (GT-N7000)",
      "touch_version": "6.0.4.3",
      "readonly_recovery": true,
      "key": "n7000",
      "version": "6.0.4.3",
      "lunch": "cm_n7000-userdebug",
      "init": "init.smdk4210.rc",
      "legacy_versions": [
        "6.0.1.0",
        "6.0.1.2"
      ]
    },
    {
      "name": "Samsung Sidekick 4G",
      "readonly_recovery": true,
      "key": "sidekick4g",
      "version": "4.0.0.2",
      "init": "init.smdkc110.rc",
      "legacy_versions": [

      ]
    },
    {
      "name": "HTC Incredible S",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p21 ; ",
      "key": "vivo",
      "version": "5.0.2.0",
      "lunch": "cyanogen_vivo-eng",
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
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p21 ; ",
      "key": "vivow",
      "version": "5.0.2.0",
      "alternate_recovery": {
        "name": "RA_GNM Recovery v3.05",
        "url": "http://dl.dropbox.com/u/12949506/RomManager/recovery-ra-vivow-3.05.img",
        "clockwork": false
      },
      "lunch": "cyanogen_vivow-eng",
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
      "reboot_recovery": "echo '518 R 1' > /sys/kernel/kobject_lge_nvdata/dynamic_nvdata_raw_write ; reboot ; ",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p6 ; ",
      "touch_version": "6.0.1.9",
      "key": "p920",
      "version": "6.0.1.9",
      "inits": [
        "init.p920.rc",
        "/bootimages/opening_01.rle"
      ],
      "lunch": "cm_p920-userdebug",
      "legacy_versions": [
        "4.0.0.7",
        "4.0.0.9",
        "5.0.1.4",
        "5.0.2.0",
        "5.0.2.7"
      ]
    },
    {
      "name": "Samsung Galaxy Ace",
      "flash_recovery": "/data/data/com.koushikdutta.rommanager/files/flash_image recoveryonly %s ; ",
      "key": "galaxyace",
      "version": "4.0.0.9",
      "init": "init.galaxyace.rc",
      "legacy_versions": [

      ]
    },
    {
      "name": "Motorola Atrix 4G",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p10 ; ",
      "touch_version": "5.8.1.8",
      "key": "olympus",
      "version": "5.0.2.0",
      "inits": [
        "init_prep_keypad.sh",
        "init.olympus.rc"
      ],
      "lunch": "generic_olympus-eng",
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
      "flash_recovery": "/data/data/com.koushikdutta.rommanager/files/tegra_flash_image recovery %s ; ",
      "key": "smb_a1002",
      "version": "4.0.1.5",
      "init": "init_recovery.rc",
      "legacy_versions": [

      ]
    },
    {
      "name": "HTC EVO 3D",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p22 ; ",
      "touch_version": "5.8.0.2",
      "key": "shooter",
      "version": "5.0.2.0",
      "lunch": "htc_shooter-eng",
      "init": "init.shooter.rc",
      "legacy_versions": [
        "4.0.1.5",
        "5.0.0.0",
        "5.0.1.0"
      ]
    },
    {
      "name": "HTC Sensation",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p21 ; ",
      "touch_version": "5.8.0.9",
      "key": "pyramid",
      "version": "5.0.2.0",
      "lunch": "full_pyramid-eng",
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
      "key": "ascend2",
      "version": "4.0.1.5",
      "inits": [
        "init.qcom.rc",
        "init.huawei.rc"
      ],
      "init": "init.qcom.rc",
      "legacy_versions": [

      ]
    },
    {
      "name": "Micromax A70",
      "key": "a70",
      "version": "4.0.1.5",
      "init": "init.qcom.rc",
      "legacy_versions": [

      ]
    },
    {
      "name": "Samsung Galaxy Gio",
      "readonly_recovery": true,
      "key": "galaxygio",
      "version": "4.0.1.5",
      "init": "init.galaxygio.rc",
      "legacy_versions": [

      ]
    },
    {
      "name": "Samsung Indulge 910",
      "readonly_recovery": true,
      "key": "indulge910",
      "version": "4.0.1.5",
      "init": "init.smdkc110.rc",
      "legacy_versions": [

      ]
    },
    {
      "name": "Samsung Indulge 915",
      "readonly_recovery": true,
      "key": "indulge915",
      "version": "4.0.1.5",
      "init": "init.smdkc110.rc",
      "legacy_versions": [

      ]
    },
    {
      "name": "LG Optimus Black",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p4 ; ",
      "touch_version": "6.0.1.4",
      "key": "p970",
      "version": "6.0.1.4",
      "lunch": "cm_p970-userdebug",
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
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p21 ; ",
      "touch_version": "5.8.0.2",
      "key": "shooteru",
      "version": "5.0.2.0",
      "lunch": "full_shooteru-eng",
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
      "reboot_recovery": "rm /cache/recovery/command ; echo 1 > /data/.recovery_mode ; sync ; reboot ;",
      "flash_recovery": "dd if=%s of=/preinstall/recovery/recovery.zip ; ",
      "readonly_recovery": true,
      "key": "droid2we",
      "version": "5.0.2.3",
      "lunch": "cyanogen_droid2we-eng",
      "init": "init.mapphone_cdma.rc",
      "legacy_versions": [

      ]
    },
    {
      "name": "Motorola Droid Bionic",
      "reboot_recovery": "rm /cache/recovery/command ; echo 1 > /data/.recovery_mode ; sync ; reboot ;",
      "flash_recovery": "dd if=%s of=/preinstall/recovery/recovery.zip ; ",
      "readonly_recovery": true,
      "key": "targa",
      "version": "5.0.2.5",
      "lunch": "generic_targa-eng",
      "init": "init.mapphone_cdma.rc",
      "legacy_versions": [
        "5.0.2.3",
        "5.0.2.4"
      ]
    },
    {
      "name": "Motorola Droid X2",
      "reboot_recovery": "rm /cache/recovery/command ; echo 1 > /data/.recovery_mode ; sync ; reboot ;",
      "flash_recovery": "dd if=%s of=/preinstall/recovery/recovery.zip ; ",
      "readonly_recovery": true,
      "key": "daytona",
      "version": "5.0.2.5",
      "lunch": "generic_daytona-eng",
      "init": "init.mapphone_cdma.rc",
      "legacy_versions": [
        "5.0.2.3",
        "5.0.2.4"
      ]
    },
    {
      "name": "Motorola Droid 3",
      "reboot_recovery": "rm /cache/recovery/command ; echo 1 > /data/.recovery_mode ; sync ; reboot ;",
      "flash_recovery": "dd if=%s of=/preinstall/recovery/recovery.zip ; ",
      "readonly_recovery": true,
      "key": "solana",
      "version": "5.0.2.6",
      "lunch": "full_solana-eng",
      "init": "init.mapphone_cdma.rc",
      "legacy_versions": [
        "5.0.2.5"
      ]
    },
    {
      "name": "Motorola Backflip",
      "key": "motus",
      "version": "5.0.2.6",
      "lunch": "cyanogen_motus-eng",
      "init": "init.motus.rc",
      "legacy_versions": [

      ]
    },
    {
      "name": "Samsung Galaxy Mini",
      "readonly_recovery": true,
      "key": "tass",
      "version": "5.0.2.6",
      "lunch": "tass-eng",
      "init": "init.gt-s5570.rc",
      "legacy_versions": [

      ]
    },
    {
      "name": "Huawei U8800",
      "flash_recovery": "mount -o remount,rw -t vfat /dev/block/mmcblk0p1 /cust_backup ; cat %s > /cust_backup/image/recovery.img ;",
      "key": "u8800",
      "version": "5.0.2.6",
      "lunch": "huawei_u8800-eng",
      "init": "init.u8800.rc",
      "legacy_versions": [

      ]
    },
    {
      "name": "Samsung Galaxy S2 (AT&T)",
      "touch_version": "5.8.1.5",
      "readonly_recovery": true,
      "key": "galaxys2att",
      "version": "5.0.2.6",
      "inits": [
        "init.smdkc210.rc",
        "init.smdk4210.rc"
      ],
      "lunch": "cyanogen_galaxys2att-eng",
      "init": "init.smdkc210.rc",
      "legacy_versions": [

      ]
    },
    {
      "name": "Samsung Galaxy S2 (T-Mobile)",
      "owners": {
        "jmprblckwing182@gmail.com": true
      },
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p22 bs=4096 ; ",
      "touch_version": "6.0.4.3",
      "key": "hercules",
      "version": "6.0.4.3",
      "lunch": "cm_hercules-userdebug",
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
        "6.0.3.1",
        "6.0.3.6",
        "6.0.4.0",
        "6.0.4.1"
      ]
    },
    {
      "name": "Samsung Epic 4G Touch",
      "touch_version": "5.8.1.5",
      "readonly_recovery": true,
      "key": "epic4gtouch",
      "version": "5.0.2.7",
      "lunch": "full_epic4gtouch-eng",
      "init": "init.smdkc210.rc",
      "legacy_versions": [
        "5.0.2.6",
        "5.0.2.7"
      ]
    },
    {
      "name": "HTC Amaze",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p23 bs=4096 ; ",
      "key": "ruby",
      "version": "5.0.2.6",
      "lunch": "full_ruby-eng",
      "init": "init.ruby.rc",
      "legacy_versions": [

      ]
    },
    {
      "name": "Samsung Galaxy 5",
      "readonly_recovery": true,
      "key": "galaxy5",
      "version": "5.0.2.8",
      "lunch": "samsung_galaxy5-eng",
      "init": "init.gt-i5500.rc",
      "legacy_versions": [
        "5.0.2.8"
      ]
    },
    {
      "name": "ZTE Racer",
      "key": "mooncake",
      "version": "5.0.2.7",
      "lunch": "generic_mooncake-eng",
      "init": "init.mooncake.rc",
      "legacy_versions": [

      ]
    },
    {
      "name": "Samsung Galaxy Tab (VZW)",
      "readonly_recovery": true,
      "key": "vzwtab",
      "version": "5.0.2.7",
      "lunch": "full_vzwtab-eng",
      "init": "init.smdkc110.rc",
      "legacy_versions": [
        "5.0.2.7",
        "5.0.2.7",
        "5.0.2.7"
      ]
    },
    {
      "name": "HTC MyTouch 4G Slide",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p21 bs=4096 ; ",
      "key": "doubleshot",
      "version": "5.0.2.7",
      "lunch": "full_doubleshot-eng",
      "init": "init.doubleshot.rc",
      "legacy_versions": [
        "5.0.2.7",
        "5.0.2.7"
      ]
    },
    {
      "name": "Google Galaxy Nexus (GSM)",
      "flash_recovery": "dd if=%s of=/dev/block/platform/omap/omap_hsmmc.0/by-name/recovery bs=4096 ;",
      "touch_version": "6.0.4.3",
      "key": "maguro",
      "version": "6.0.4.3",
      "lunch": "cm_maguro-userdebug",
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
        "6.0.3.5",
        "6.0.3.6",
        "6.0.4.0",
        "6.0.4.1"
      ]
    },
    {
      "name": "Google Galaxy Nexus (Verizon)",
      "flash_recovery": "dd if=%s of=/dev/block/platform/omap/omap_hsmmc.0/by-name/recovery bs=4096 ;",
      "touch_version": "6.0.4.3",
      "key": "toro",
      "version": "6.0.4.3",
      "lunch": "cm_toro-userdebug",
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
        "6.0.3.5",
        "6.0.3.6",
        "6.0.4.0",
        "6.0.4.1",
        "6.0.4.2"
      ]
    },
    {
      "name": "LG Optimus C LW690 and Optimus M MS690",
      "key": "lg690",
      "version": "5.0.2.7",
      "lunch": "full_lg690-eng",
      "init": "init.thunderc.rc",
      "legacy_versions": [

      ]
    },
    {
      "name": "LG Optimus Pro",
      "key": "c660",
      "version": "5.0.2.7",
      "lunch": "c660-eng",
      "init": "init.muscat.rc",
      "legacy_versions": [

      ]
    },
    {
      "name": "LG Optimus Hub",
      "key": "e510",
      "version": "5.0.2.7",
      "lunch": "e510-eng",
      "init": "init.univa.rc",
      "legacy_versions": [

      ]
    },
    {
      "name": "Samsung Epic4G (MTD)",
      "reboot_recovery": "/system/xbin/busybox devmem 0x57fff800 32 0x5EC0B007; sync ; reboot ;",
      "touch_version": "5.8.1.5",
      "key": "epicmtd",
      "officially_supported": false,
      "version": "5.0.2.7",
      "lunch": "cyanogen_epicmtd-eng",
      "init": "init.victory.rc",
      "legacy_versions": [

      ]
    },
    {
      "name": "HTC Holiday",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p23 bs=4096 ; ",
      "key": "holiday",
      "version": "5.0.2.7",
      "lunch": "full_holiday-eng",
      "init": "init.holiday.rc",
      "legacy_versions": [
        "5.0.2.7",
        "5.0.2.7",
        "5.0.2.7"
      ]
    },
    {
      "name": "LG Optimus SOL / TMo LG myTouch",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p17 bs=4096 ;",
      "key": "e730",
      "version": "5.0.2.7",
      "inits": [
        "init.victor.rc",
        "init.e739.rc"
      ],
      "lunch": "e730-eng",
      "legacy_versions": [

      ]
    },
    {
      "name": "HTC Wildfire S",
      "key": "marvel",
      "version": "5.0.2.8",
      "lunch": "generic_marvel-eng",
      "init": "init.marvel.rc",
      "legacy_versions": [
        "5.0.2.7"
      ]
    },
    {
      "name": "Motorola Photon 4G",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p10 bs=4096 ;",
      "key": "sunfire",
      "version": "5.0.2.8",
      "inits": [
        "init.mapphone_umts.rc",
        "init.mapphone_cdma.rc"
      ],
      "lunch": "full_sunfire-eng",
      "init": "init.mapphone_umts.rc",
      "legacy_versions": [
        "5.0.2.7"
      ]
    },
    {
      "name": "Huawei U8160",
      "key": "u8160",
      "version": "5.0.2.8",
      "inits": [
        "init.huawei.rc",
        "init.u8160.rc"
      ],
      "lunch": "huawei_u8160-eng",
      "init": "init.u8160.rc",
      "legacy_versions": [
        "5.0.2.8"
      ]
    },
    {
      "name": "HTC Rezound",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p23 bs=4096 ;",
      "touch_version": "6.0.3.1",
      "key": "vigor",
      "version": "6.0.3.1",
      "lunch": "cm_vigor-userdebug",
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
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p21 bs=4096 ;",
      "key": "express",
      "version": "5.8.1.5",
      "lunch": "full_express-userdebug",
      "init": "init.expresskt.rc",
      "legacy_versions": [

      ]
    },
    {
      "name": "Asus Transformer Prime",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p4 ;",
      "touch_version": "5.8.3.4",
      "key": "tf201",
      "version": "5.8.3.4",
      "lunch": "cm_tf201-userdebug",
      "init": "init.cardhu.rc",
      "legacy_versions": [
        "5.5.0.4",
        "5.8.2.0"
      ]
    },
    {
      "name": "Motorola Droid 4",
      "reboot_recovery": "rm /cache/recovery/command ; echo 1 > /data/.recovery_mode ; sync ; reboot ;",
      "key": "maserati",
      "officially_supported": false,
      "version": "5.0.2.0",
      "init": "init.mapphone_cdma.rc",
      "legacy_versions": [

      ]
    },
    {
      "name": "Motorola RAZR",
      "reboot_recovery": "rm /cache/recovery/command ; echo 1 > /data/.recovery_mode ; sync ; reboot ;",
      "key": "spyder",
      "officially_supported": false,
      "version": "5.0.2.0",
      "init": "init.mapphone_cdma.rc",
      "legacy_versions": [

      ]
    },
    {
      "name": "HTC Wildfire S CDMA",
      "key": "marvelc",
      "version": "5.0.2.8",
      "lunch": "full_marvelc-eng",
      "init": "init.marvelc.rc",
      "legacy_versions": [

      ]
    },
    {
      "name": "Asus Transformer",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p4 ;",
      "touch_version": "5.8.3.4",
      "key": "tf101",
      "version": "6.0.1.3",
      "lunch": "cm_tf101-userdebug",
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
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p13 ;",
      "touch_version": "6.0.1.5",
      "key": "p930",
      "version": "6.0.1.5",
      "lunch": "cm_p930-userdebug",
      "init": "bootimages/boot_logo_00000.rle",
      "legacy_versions": [
        "5.8.2.0",
        "6.0.1.4"
      ]
    },
    {
      "name": "Samsung Galaxy S2 (SGH-I777)",
      "touch_version": "6.0.1.0",
      "readonly_recovery": true,
      "key": "i777",
      "version": "6.0.1.0",
      "inits": [
        "init.smdkc210.rc",
        "init.smdk4210.rc"
      ],
      "lunch": "cm_i777-userdebug",
      "init": "init.smdkc210.rc",
      "legacy_versions": [
        "5.8.1.8"
      ]
    },
    {
      "name": "HTC Pico",
      "key": "pico",
      "version": "5.0.2.8",
      "lunch": "full_pico-eng",
      "init": "init.pico.rc",
      "legacy_versions": [

      ]
    },
    {
      "name": "HTC One X (GSM)",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p5 bs=4096 ;",
      "touch_version": "5.8.4.0",
      "key": "endeavoru",
      "version": "5.8.4.0",
      "lunch": "cm_endeavoru-userdebug",
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
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p22 bs=4096 ;",
      "touch_version": "6.0.3.1",
      "key": "ville",
      "version": "6.0.3.1",
      "lunch": "cm_ville-userdebug",
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
      "reboot_recovery": "echo 1 > /cache/.startrecovery ; sync ; reboot ;",
      "key": "p1",
      "officially_supported": false,
      "version": "5.8.2.1",
      "init": "init.p1.rc",
      "legacy_versions": [

      ]
    },
    {
      "name": "Samsung Galaxy Tab (MTD and CDMA)",
      "reboot_recovery": "echo 1 > /cache/.startrecovery ; sync ; reboot ;",
      "key": "p1c",
      "officially_supported": false,
      "version": "5.8.2.1",
      "init": "init.p1c.rc",
      "legacy_versions": [

      ]
    },
    {
      "name": "Google Galaxy Nexus (Sprint)",
      "flash_recovery": "dd if=%s of=/dev/block/platform/omap/omap_hsmmc.0/by-name/recovery bs=4096 ;",
      "touch_version": "6.0.4.3",
      "key": "toroplus",
      "version": "6.0.4.3",
      "lunch": "cm_toroplus-userdebug",
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
        "6.0.3.5",
        "6.0.3.6",
        "6.0.4.0",
        "6.0.4.1",
        "6.0.4.2"
      ]
    },
    {
      "name": "Samsung Galaxy Tab 10.1 (Wifi)",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p2 ; ",
      "touch_version": "6.0.3.1",
      "key": "p4wifi",
      "version": "6.0.3.1",
      "lunch": "cm_p4wifi-userdebug",
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
      "flash_recovery": "dd if=%s of=/dev/block/platform/sdhci-tegra.3/by-name/recovery ; ",
      "touch_version": "6.0.3.1",
      "key": "wingray",
      "version": "6.0.3.1",
      "lunch": "cm_wingray-userdebug",
      "init": "init.wingray.rc",
      "legacy_versions": [
        "5.8.3.1",
        "6.0.2.9"
      ]
    },
    {
      "name": "LG Marquee",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p4 bs=4096 ; ",
      "key": "marquee",
      "version": "5.0.2.8",
      "lunch": "full_marquee-eng",
      "init": "init.omap.post_boot.sh",
      "legacy_versions": [

      ]
    },
    {
      "name": "LG Ignite",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p4 bs=4096 ; ",
      "key": "ignite",
      "version": "5.0.2.8",
      "lunch": "full_ignite-eng",
      "init": "init.omap.post_boot.sh",
      "legacy_versions": [

      ]
    },
    {
      "name": "LG Connect 4G MS840",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p13 bs=4096 ; ",
      "touch_version": "5.8.3.1",
      "key": "ms840",
      "version": "5.8.3.1",
      "lunch": "full_ms840-userdebug",
      "init": "init.target.rc",
      "legacy_versions": [

      ]
    },
    {
      "name": "LG Lucid VS840",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p13 bs=4096 ; ",
      "touch_version": "5.8.3.1",
      "key": "vs840",
      "version": "5.8.3.1",
      "lunch": "full_vs840-userdebug",
      "init": "init.target.rc",
      "legacy_versions": [

      ]
    },
    {
      "name": "HTC EVO LTE",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p22 bs=4096 ; ",
      "touch_version": "5.8.3.5",
      "key": "jewel",
      "version": "5.8.3.5",
      "lunch": "cm_jewel-userdebug",
      "init": "init.jewel.rc",
      "legacy_versions": [
        "5.8.3.4",
        "5.8.3.4"
      ]
    },
    {
      "name": "Samsung Galaxy S3 (GT-I9300)",
      "ro.product.devices": [
        "i9300",
        "m0"
      ],
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p6 bs=4096 ; ",
      "touch_version": "6.0.3.6",
      "key": "i9300",
      "version": "6.0.4.3",
      "lunch": "cm_i9300-userdebug",
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
        "6.0.3.2",
        "6.0.3.6"
      ]
    },
    {
      "name": "Samsung Skyrocket",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p22 bs=4096 ; ",
      "touch_version": "6.0.4.3",
      "key": "skyrocket",
      "version": "6.0.4.3",
      "lunch": "cm_skyrocket-userdebug",
      "init": "init.qcom.usb.rc",
      "legacy_versions": [
        "5.8.4.3",
        "6.0.1.0",
        "6.0.1.4",
        "6.0.3.1",
        "6.0.4.0",
        "6.0.4.1"
      ]
    },
    {
      "name": "Samsung Galaxy Note (AT&T)",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p22 bs=4096 ; ",
      "touch_version": "6.0.4.3",
      "key": "quincyatt",
      "version": "6.0.4.3",
      "lunch": "cm_quincyatt-userdebug",
      "init": "init.qcom.usb.rc",
      "legacy_versions": [
        "5.8.4.3",
        "5.8.4.8",
        "6.0.3.1",
        "6.0.3.6",
        "6.0.4.1"
      ]
    },
    {
      "name": "LG Optimus L3",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p17 bs=4096 ; ",
      "key": "e400",
      "version": "5.8.4.5",
      "lunch": "cm_e400-userdebug",
      "init": "init.e0.rc",
      "legacy_versions": [

      ]
    },
    {
      "name": "HTC One V",
      "readonly_recovery": true,
      "key": "primou",
      "version": "5.8.4.5",
      "lunch": "cm_primou-userdebug",
      "init": "init.primou.rc",
      "legacy_versions": [

      ]
    },
    {
      "name": "Samsung Galaxy S3 (AT&T)",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p18 bs=4096 ; ",
      "touch_version": "6.0.4.3",
      "key": "d2att",
      "version": "6.0.4.3",
      "lunch": "cm_d2att-userdebug",
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
        "6.0.3.7",
        "6.0.3.8",
        "6.0.4.1"
      ]
    },
    {
      "name": "Samsung Galaxy S3 (T-Mobile)",
      "ro.product.devices": [
        "d2tmo",
        "d2lteMetroPCS"
      ],
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p18 bs=4096 ; ",
      "touch_version": "6.0.4.3",
      "key": "d2tmo",
      "version": "6.0.4.3",
      "lunch": "cm_d2tmo-userdebug",
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
        "6.0.3.7",
        "6.0.3.8",
        "6.0.4.1"
      ]
    },
    {
      "name": "Samsung Galaxy S3 (Sprint)",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p18 bs=4096 ; ",
      "touch_version": "6.0.4.3",
      "key": "d2spr",
      "version": "6.0.4.3",
      "lunch": "cm_d2spr-userdebug",
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
        "6.0.3.7",
        "6.0.3.8",
        "6.0.4.1"
      ]
    },
    {
      "name": "Samsung Galaxy S3 (Verizon)",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p18 bs=4096 ; ",
      "twrp_version": "2.4.3.0",
      "touch_version": "6.0.4.3",
      "key": "d2vzw",
      "version": "6.0.4.3",
      "lunch": "cm_d2vzw-userdebug",
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
        "6.0.3.7",
        "6.0.3.8",
        "6.0.4.1"
      ]
    },
    {
      "name": "HTC One V (CDMA)",
      "touch_version": "5.8.4.7",
      "readonly_recovery": true,
      "key": "primoc",
      "version": "5.8.4.7",
      "lunch": "full_primoc-userdebug",
      "init": "init.primoc.rc",
      "legacy_versions": [
        "5.8.4.6",
        "5.8.4.7"
      ]
    },
    {
      "name": "Google Nexus 7",
      "flash_recovery": "dd if=%s of=/dev/block/platform/sdhci-tegra.3/by-name/SOS bs=4096 ; ",
      "touch_version": "6.0.4.3",
      "key": "grouper",
      "version": "6.0.4.3",
      "lunch": "cm_grouper-userdebug",
      "init": "init.grouper.rc",
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
      ]
    },
    {
      "name": "LG Optimus LTE (SKT)",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p13 bs=4096 ; ",
      "touch_version": "6.0.1.0",
      "key": "su640",
      "version": "6.0.1.0",
      "lunch": "cm_su640-userdebug",
      "init": "init.su640.rc",
      "legacy_versions": [

      ]
    },
    {
      "name": "Samsung Galaxy S2 (GT-I9100G)",
      "touch_version": "6.0.4.0",
      "key": "i9100g",
      "officially_supported": false,
      "version": "6.0.4.0",
      "lunch": "cm_i9100g-userdebug",
      "init": "init.t1.rc",
      "legacy_versions": [
        "6.0.1.0"
      ]
    },
    {
      "name": "Samsung Galaxy Tab 2 (GT-P3100)",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p6 bs=4096 ; ",
      "touch_version": "6.0.2.7",
      "key": "p3100",
      "version": "6.0.2.7",
      "lunch": "cm_p3100-userdebug",
      "init": "init.espresso.rc",
      "legacy_versions": [
        "6.0.1.1",
        "6.0.2.3"
      ]
    },
    {
      "name": "Samsung Galaxy Tab 2 (GT-P3110)",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p6 bs=4096 ; ",
      "touch_version": "6.0.2.7",
      "key": "p3110",
      "version": "6.0.2.7",
      "lunch": "cm_p3110-userdebug",
      "init": "init.espresso.rc",
      "legacy_versions": [
        "6.0.1.1",
        "6.0.2.3"
      ]
    },
    {
      "name": "Samsung Galaxy Tab 2 (GT-P3113)",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p6 bs=4096 ; ",
      "touch_version": "6.0.2.3",
      "key": "p3113",
      "version": "6.0.2.3",
      "lunch": "cm_p3113-userdebug",
      "init": "init.espresso.rc",
      "legacy_versions": [
        "6.0.1.1"
      ]
    },
    {
      "name": "Samsung Galaxy Tab 2 (GT-P5100)",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p6 bs=4096 ; ",
      "touch_version": "6.0.2.7",
      "key": "p5100",
      "version": "6.0.2.7",
      "lunch": "cm_p5100-userdebug",
      "init": "init.espresso10.rc",
      "legacy_versions": [
        "6.0.1.1",
        "6.0.2.3"
      ]
    },
    {
      "name": "Samsung Galaxy Tab 2 (GT-P5110)",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p6 bs=4096 ; ",
      "touch_version": "6.0.2.7",
      "key": "p5110",
      "version": "6.0.2.7",
      "lunch": "cm_p5110-userdebug",
      "init": "init.espresso10.rc",
      "legacy_versions": [
        "6.0.1.1",
        "6.0.2.3"
      ]
    },
    {
      "name": "Samsung Galaxy Tab 2 (GT-P5113)",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p6 bs=4096 ; ",
      "touch_version": "6.0.2.3",
      "key": "p5113",
      "version": "6.0.2.3",
      "lunch": "cm_p5113-userdebug",
      "init": "init.espresso10.rc",
      "legacy_versions": [
        "6.0.1.1"
      ]
    },
    {
      "name": "LG Spectrum 4G",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p13 bs=4096 ; ",
      "touch_version": "6.0.1.1",
      "key": "vs920",
      "version": "6.0.1.1",
      "inits": [
        "init.target.rc",
        "init.iproj.rc",
        "init.i_vzw.rc",
        "init.iprj.rc"
      ],
      "lunch": "cm_vs920-userdebug",
      "init": "init.target.rc",
      "legacy_versions": [

      ]
    },
    {
      "name": "Score & Score M",
      "touch_version": "6.0.1.1",
      "key": "x500",
      "version": "6.0.1.1",
      "lunch": "cm_x500-userdebug",
      "init": "init.zte.rc",
      "legacy_versions": [

      ]
    },
    {
      "name": "LG Revolution 4G",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p14 bs=4096 ; ",
      "touch_version": "6.0.1.1",
      "key": "vs910",
      "version": "6.0.1.1",
      "inits": [
        "init.qcom.rc",
        "init.bryce.rc"
      ],
      "lunch": "cm_vs910-userdebug",
      "init": "init.qcom.rc",
      "legacy_versions": [

      ]
    },
    {
      "name": "LG Esteeem 4G",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p14 bs=4096 ; ",
      "touch_version": "6.0.1.1",
      "key": "ms910",
      "version": "6.0.1.1",
      "inits": [
        "init.qcom.rc",
        "init.bryce.rc"
      ],
      "lunch": "cm_ms910-userdebug",
      "init": "init.qcom.rc",
      "legacy_versions": [
        "5.0.2.8"
      ]
    },
    {
      "name": "LG Optimus M+",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p17 bs=4096 ; ",
      "touch_version": "6.0.1.1",
      "key": "ms695",
      "version": "6.0.1.1",
      "inits": [
        "init.qcom.rc",
        "init.m3.rc"
      ],
      "lunch": "cm_ms695-userdebug",
      "init": "init.qcom.rc",
      "legacy_versions": [
        "6.0.1.0"
      ]
    },
    {
      "name": "Samsung Galaxy Tab (MTD and GSM - L)",
      "reboot_recovery": "echo 1 > /cache/.startrecovery ; sync ; reboot ;",
      "key": "p1l",
      "officially_supported": false,
      "version": "5.8.2.1",
      "init": "init.p1.rc",
      "legacy_versions": [

      ]
    },
    {
      "name": "Samsung Galaxy Tab (MTD and GSM - N)",
      "reboot_recovery": "echo 1 > /cache/.startrecovery ; sync ; reboot ;",
      "key": "p1n",
      "officially_supported": false,
      "version": "5.8.2.1",
      "init": "init.p1.rc",
      "legacy_versions": [

      ]
    },
    {
      "name": "Samsung Galaxy S3 (US Cellular)",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p18 bs=4096 ; ",
      "touch_version": "6.0.4.3",
      "key": "d2usc",
      "version": "6.0.4.3",
      "lunch": "cm_d2usc-userdebug",
      "init": "init.d2usc.rc",
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
      ]
    },
    {
      "name": "Motorola Photon Q",
      "flash_recovery": "dd if=%s of=/dev/block/platform/msm_sdcc.1/by-name/recovery bs=4096 ; ",
      "key": "asanti",
      "version": "6.0.1.3",
      "inits": [
        "init.asanti.rc",
        "init.sprint.rc"
      ],
      "lunch": "cm_asanti-userdebug",
      "init": "init.mmi.usb.rc",
      "legacy_versions": [

      ]
    },
    {
      "name": "LG Optimus Me",
      "key": "p350",
      "version": "6.0.1.5",
      "lunch": "cm_p350-userdebug",
      "init": "init.pecan.rc",
      "legacy_versions": [
        "6.0.1.3",
        "6.0.1.4"
      ]
    },
    {
      "name": "Samsung Galaxy Tab 8.9 (AT&T)",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p22 bs=4096 ; ",
      "key": "p5att",
      "version": "6.0.1.4",
      "lunch": "cm_p5att-userdebug",
      "init": "fstab.qcom",
      "legacy_versions": [

      ]
    },
    {
      "name": "Samsung Galaxy S Blaze 4G",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p22 bs=4096 ; ",
      "touch_version": "6.0.3.8",
      "key": "t769",
      "version": "6.0.3.8",
      "lunch": "cm_t769-userdebug",
      "init": "init.target.rc",
      "legacy_versions": [
        "6.0.1.4"
      ]
    },
    {
      "name": "Samsung Galaxy S3 (MetroPCS)",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p18 bs=4096 ; ",
      "touch_version": "6.0.4.3",
      "key": "d2mtr",
      "version": "6.0.4.3",
      "inits": [
        "init.carrier.rc",
        "init.d2mtr.rc"
      ],
      "lunch": "cm_d2mtr-userdebug",
      "init": "init.carrier.rc",
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
      ]
    },
    {
      "name": "Asus Transformer Pad Infinity",
      "reboot_recovery": "echo 'boot-recovery' | dd of=/dev/block/mmcblk0p3 seek=6144 bs=1 ; reboot ; ",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p4 bs=4096 ; ",
      "touch_version": "6.0.3.1",
      "key": "tf700t",
      "version": "6.0.3.1",
      "lunch": "cm_tf700t-userdebug",
      "init": "init.tf700t.rc",
      "legacy_versions": [
        "6.0.1.8",
        "6.0.2.3"
      ]
    },
    {
      "name": "Google Nexus 10",
      "flash_recovery": "dd if=%s of=/dev/block/platform/dw_mmc.0/by-name/recovery bs=4096 ; ",
      "touch_version": "6.0.4.3",
      "key": "manta",
      "version": "6.0.4.3",
      "lunch": "cm_manta-userdebug",
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
        "6.0.3.5",
        "6.0.3.8",
        "6.0.4.1"
      ]
    },
    {
      "name": "Google Nexus 4",
      "flash_recovery": "dd if=%s of=/dev/block/platform/msm_sdcc.1/by-name/recovery bs=4096 ; ",
      "touch_version": "6.0.4.3",
      "key": "mako",
      "version": "6.0.4.3",
      "lunch": "cm_mako-userdebug",
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
        "6.0.3.6",
        "6.0.3.8",
        "6.0.4.1"
      ]
    },
    {
      "name": "HTC Droid DNA",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p20 bs=4096 ; ",
      "touch_version": "6.0.3.1",
      "key": "dlx",
      "version": "6.0.3.1",
      "lunch": "cm_dlx-userdebug",
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
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p9 bs=4096 ; ",
      "touch_version": "6.0.4.3",
      "key": "n7100",
      "version": "6.0.4.3",
      "lunch": "cm_n7100-userdebug",
      "init": "init.smdk4x12.rc",
      "legacy_versions": [
        "6.0.1.9",
        "6.0.3.0",
        "6.0.3.1",
        "6.0.3.6"
      ]
    },
    {
      "name": "Acer A700",
      "flash_recovery": "dd if=%s of=/dev/block/platform/sdhci-tegra.3/by-name/SOS bs=4096 ; ",
      "touch_version": "6.0.3.1",
      "key": "a700",
      "version": "6.0.3.1",
      "lunch": "cm_a700-userdebug",
      "init": "init.picasso_mf.rc",
      "legacy_versions": [
        "6.0.2.3"
      ]
    },
    {
      "name": "Google Nexus 7 (GSM)",
      "flash_recovery": "dd if=%s of=/dev/block/platform/sdhci-tegra.3/by-name/SOS bs=4096 ; ",
      "touch_version": "6.0.4.3",
      "key": "tilapia",
      "version": "6.0.4.3",
      "lunch": "cm_tilapia-userdebug",
      "init": "init.tilapia.rc",
      "legacy_versions": [
        "6.0.2.3",
        "6.0.3.1",
        "6.0.3.5",
        "6.0.3.6",
        "6.0.4.0",
        "6.0.4.1"
      ]
    },
    {
      "name": "Samsung Galaxy Note 2 (LTE)",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p9 bs=4096 ; ",
      "touch_version": "6.0.4.1",
      "key": "t0lte",
      "version": "6.0.4.1",
      "lunch": "cm_t0lte-userdebug",
      "init": "init.t0lte.rc",
      "legacy_versions": [
        "6.0.2.3",
        "6.0.2.4",
        "6.0.2.5",
        "6.0.2.8",
        "6.0.3.0",
        "6.0.3.1",
        "6.0.3.2",
        "6.0.3.6"
      ]
    },
    {
      "name": "LG Optimus 3DMax",
      "reboot_recovery": "echo '518 R 1' > /sys/kernel/kobject_lge_nvdata/dynamic_nvdata_raw_write ; reboot ; ",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p6 ; ",
      "touch_version": "6.0.2.3",
      "key": "p720",
      "version": "6.0.2.3",
      "inits": [
        "init.lgep720board.rc",
        "/bootimages/battery_charging_01.rle"
      ],
      "lunch": "cm_p720-userdebug",
      "legacy_versions": [

      ]
    },
    {
      "name": "Samsung Galaxy S3 (Cricket)",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p18 bs=4096 ; ",
      "touch_version": "6.0.4.3",
      "key": "d2cri",
      "version": "6.0.4.3",
      "lunch": "cm_d2cri-userdebug",
      "init": "init.d2cri.rc",
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
      ]
    },
    {
      "name": "HTC Sensation XL",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p21 bs=4096 ; ",
      "touch_version": "6.0.2.7",
      "key": "runnymede",
      "version": "6.0.2.7",
      "lunch": "cm_runnymede-userdebug",
      "init": "init.runnymede.rc",
      "legacy_versions": [

      ]
    },
    {
      "name": "Pantech Presto",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p18 bs=4096 ; ",
      "touch_version": "6.0.2.7",
      "key": "presto",
      "version": "6.0.2.7",
      "lunch": "cm_presto-userdebug",
      "init": "init.presto.rc",
      "legacy_versions": [

      ]
    },
    {
      "name": "ZTE Sequent",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p13 bs=4096 ; ",
      "touch_version": "6.0.2.7",
      "key": "warp2",
      "version": "6.0.2.7",
      "lunch": "cm_warp2-userdebug",
      "init": "init.warp2.rc",
      "legacy_versions": [

      ]
    },
    {
      "name": "Google Nexus Q",
      "flash_recovery": "dd if=%s of=/dev/block/platform/omap/omap_hsmmc.0/by-name/recovery bs=4096 ; ",
      "key": "steelhead",
      "version": "6.0.3.1",
      "lunch": "cm_steelhead-userdebug",
      "init": "init.steelhead.rc",
      "legacy_versions": [
        "6.0.2.7"
      ]
    },
    {
      "name": "Samsung Prevail 2 (Boost Mobile)",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p15 bs=4096 ; ",
      "touch_version": "6.0.2.7",
      "key": "prevail2spr",
      "version": "6.0.2.7",
      "inits": [
        "init.carrier.rc",
        "init.prevail2spr.rc"
      ],
      "lunch": "cm_prevail2spr-userdebug",
      "legacy_versions": [

      ]
    },
    {
      "name": "Samsung Galaxy S3 Mini",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p21 bs=4096 ; ",
      "touch_version": "6.0.2.7",
      "key": "golden",
      "version": "6.0.2.7",
      "lunch": "cm_golden-userdebug",
      "init": "init.golden.rc",
      "legacy_versions": [

      ]
    },
    {
      "name": "HTC Droid Incredible 4G LTE",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p22 bs=4096 ; ",
      "touch_version": "6.0.3.3",
      "key": "fireball",
      "version": "6.0.3.3",
      "lunch": "cm_fireball-userdebug",
      "init": "init.fireball.rc",
      "legacy_versions": [
        "6.0.2.8",
        "6.0.2.9",
        "6.0.3.1"
      ]
    },
    {
      "name": "HTC Jetstream",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p23 bs=4096 ; ",
      "touch_version": "6.0.2.8",
      "key": "puccinilte",
      "version": "6.0.2.8",
      "lunch": "cm_puccinilte-userdebug",
      "init": "init.puccinilte.rc",
      "legacy_versions": [

      ]
    },
    {
      "name": "LG Optimus L7",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p17 bs=4096 ; ",
      "touch_version": "6.0.2.8",
      "key": "p700",
      "version": "6.0.2.8",
      "lunch": "cm_p700-userdebug",
      "init": "init.u0.rc",
      "legacy_versions": [

      ]
    },
    {
      "name": "HTC One",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p34 bs=4096 ; ",
      "touch_version": "6.0.3.1",
      "key": "m7",
      "version": "6.0.3.1",
      "lunch": "cm_m7-userdebug",
      "init": "init.m7.rc",
      "legacy_versions": [
        "6.0.2.8",
        "6.0.3.0"
      ]
    },
    {
      "name": "HTC Butterfly (dlxu)",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p20 bs=4096 ; ",
      "touch_version": "6.0.3.1",
      "key": "dlxu",
      "version": "6.0.3.1",
      "lunch": "cm_dlxu-userdebug",
      "init": "init.dlxu.rc",
      "legacy_versions": [
        "6.0.2.8",
        "6.0.3.0"
      ]
    },
    {
      "name": "HTC Butterfly (dlxub1)",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p20 bs=4096 ; ",
      "touch_version": "6.0.3.1",
      "key": "dlxub1",
      "version": "6.0.3.1",
      "lunch": "cm_dlxub1-userdebug",
      "init": "init.dlxub1.rc",
      "legacy_versions": [
        "6.0.2.8",
        "6.0.3.0"
      ]
    },
    {
      "name": "HTC Butterfly J",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p20 bs=4096 ; ",
      "touch_version": "6.0.3.1",
      "key": "dlxj",
      "version": "6.0.3.1",
      "lunch": "cm_dlxj-userdebug",
      "init": "init.dlxj.rc",
      "legacy_versions": [
        "6.0.2.8",
        "6.0.3.0"
      ]
    },
    {
      "name": "LG Optimus L5",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p17 bs=4096 ; ",
      "key": "e610",
      "version": "6.0.2.8",
      "lunch": "cm_e610-userdebug",
      "init": "init.m4.rc",
      "legacy_versions": [

      ]
    },
    {
      "name": "HTC One X (AT&T)",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p22 bs=4096 ; ",
      "touch_version": "6.0.3.1",
      "key": "evita",
      "version": "6.0.3.1",
      "lunch": "cm_evita-userdebug",
      "init": "init.evita.rc",
      "legacy_versions": [
        "6.0.2.8"
      ]
    },
    {
      "name": "Samsung Galaxy Tab 10.1",
      "ro.product.devices": [
        "p4",
        "GT-P7500",
        "p7500"
      ],
      "flash_recovery": "dd if=%s of=/dev/block/platform/sdhci-tegra.3/by-num/p2 bs=4096 ; ",
      "touch_version": "6.0.3.1",
      "key": "p4",
      "version": "6.0.3.1",
      "lunch": "cm_p4-userdebug",
      "init": "init.p4.rc",
      "legacy_versions": [
        "6.0.2.9",
        "6.0.3.0"
      ]
    },
    {
      "name": "Samsung Galaxy Tab 10.1 (T-Mobile)",
      "flash_recovery": "dd if=%s of=/dev/block/platform/sdhci-tegra.3/by-num/p2 bs=4096 ; ",
      "touch_version": "6.0.3.1",
      "key": "p4tmo",
      "version": "6.0.3.1",
      "lunch": "cm_p4tmo-userdebug",
      "init": "init.p4tmo.rc",
      "legacy_versions": [
        "6.0.2.9",
        "6.0.3.0"
      ]
    },
    {
      "name": "Samsung Galaxy Tab 10.1 (Verizon)",
      "flash_recovery": "dd if=%s of=/dev/block/platform/sdhci-tegra.3/by-num/p2 bs=4096 ; ",
      "touch_version": "6.0.3.1",
      "key": "p4vzw",
      "version": "6.0.3.1",
      "lunch": "cm_p4vzw-userdebug",
      "init": "init.p4vzw.rc",
      "legacy_versions": [
        "6.0.2.9",
        "6.0.3.0"
      ]
    },
    {
      "name": "LG Optimus L9",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p4 bs=4096 ; ",
      "touch_version": "6.0.3.1",
      "key": "p760",
      "version": "6.0.3.1",
      "lunch": "cm_p760-userdebug",
      "init": "init.u0.rc",
      "legacy_versions": [
        "6.0.2.9"
      ]
    },
    {
      "name": "Samsung Galaxy S3 LTE (GT-I9305)",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p9 bs=4096 ; ",
      "touch_version": "6.0.3.6",
      "key": "i9305",
      "version": "6.0.3.6",
      "lunch": "cm_i9305-userdebug",
      "init": "ueventd.smdk4x12.rc",
      "legacy_versions": [
        "6.0.2.9",
        "6.0.3.1",
        "6.0.3.2"
      ]
    },
    {
      "name": "Samsung Galaxy Tab 10.1v",
      "flash_recovery": "dd if=%s of=/dev/block/platform/sdhci-tegra.3/by-num/p2 bs=4096 ; ",
      "touch_version": "6.0.3.1",
      "key": "p3",
      "version": "6.0.3.1",
      "lunch": "cm_p3-userdebug",
      "init": "init.p3.rc",
      "legacy_versions": [
        "6.0.2.9"
      ]
    },
    {
      "name": "Samsung Galaxy Note 10.1",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p6 bs=4096 ; ",
      "touch_version": "6.0.3.6",
      "key": "n8013",
      "version": "6.0.3.6",
      "lunch": "cm_n8013-userdebug",
      "init": "init.n8013.rc",
      "legacy_versions": [
        "6.0.3.0",
        "6.0.3.1"
      ]
    },
    {
      "name": "Samsung Galaxy Note 2 (Verizon)",
      "ro.product.devices": [
        "i605",
        "t0ltevzw"
      ],
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p9 bs=4096 ; ",
      "touch_version": "6.0.4.3",
      "key": "i605",
      "version": "6.0.4.3",
      "lunch": "cm_i605-userdebug",
      "init": "init.i605.rc",
      "legacy_versions": [
        "6.0.3.0",
        "6.0.4.1"
      ]
    },
    {
      "name": "Samsung Galaxy Note 2 (Sprint)",
      "ro.product.devices": [
        "l900",
        "t0ltespr"
      ],
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p9 bs=4096 ; ",
      "touch_version": "6.0.4.3",
      "key": "l900",
      "version": "6.0.4.3",
      "lunch": "cm_l900-userdebug",
      "init": "init.l900.rc",
      "legacy_versions": [
        "6.0.3.0",
        "6.0.3.1",
        "6.0.4.1"
      ]
    },
    {
      "name": "Samsung Galaxy Note 2 (AT&T)",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p9 bs=4096 ; ",
      "touch_version": "6.0.4.3",
      "key": "t0lteatt",
      "version": "6.0.4.3",
      "lunch": "cm_t0lteatt-userdebug",
      "init": "init.t0lteatt.rc",
      "legacy_versions": [
        "6.0.3.0",
        "6.0.3.1",
        "6.0.3.6",
        "6.0.4.1"
      ]
    },
    {
      "name": "Samsung Galaxy Note 2 (T-Mobile)",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p9 bs=4096 ; ",
      "touch_version": "6.0.4.3",
      "key": "t0ltetmo",
      "version": "6.0.4.3",
      "lunch": "cm_t0ltetmo-userdebug",
      "init": "init.t0ltetmo.rc",
      "legacy_versions": [
        "6.0.3.0",
        "6.0.3.1",
        "6.0.3.6",
        "6.0.3.7",
        "6.0.4.1"
      ]
    },
    {
      "name": "LG Optimus G Intl (E975)",
      "flash_recovery": "dd if=%s of=/dev/block/platform/msm_sdcc.1/by-name/recovery bs=4096 ; ",
      "touch_version": "6.0.3.0",
      "key": "e975",
      "version": "6.0.3.0",
      "lunch": "cm_e975-userdebug",
      "init": "init.geehrc.rc",
      "legacy_versions": [

      ]
    },
    {
      "name": "LG Optimus 4X HD",
      "reboot_recovery": "echo 'boot-recovery' | dd of=/dev/block/mmcblk0p5 bs=1 count=13 ; reboot ; ",
      "flash_recovery": "dd if=%s of=/dev/block/platform/sdhci-tegra.3/by-name/SOS bs=4096 ; ",
      "touch_version": "6.0.3.1",
      "key": "p880",
      "version": "6.0.3.1",
      "lunch": "cm_p880-userdebug",
      "init": "init.x3.rc",
      "legacy_versions": [

      ]
    },
    {
      "name": "Samsung Galaxy Note (T-Mobile)",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p22 bs=4096 ; ",
      "touch_version": "6.0.4.3",
      "key": "quincytmo",
      "version": "6.0.4.3",
      "lunch": "cm_quincytmo-userdebug",
      "init": "init.quincytmo.rc",
      "legacy_versions": [
        "6.0.3.1",
        "6.0.3.6",
        "6.0.4.1"
      ]
    },
    {
      "name": "Samsung Galaxy Note 10.1 (GSM)",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p6 bs=4096 ; ",
      "touch_version": "6.0.3.6",
      "key": "n8000",
      "version": "6.0.3.6",
      "lunch": "cm_n8000-userdebug",
      "init": "init.n8000.rc",
      "legacy_versions": [
        "6.0.3.1"
      ]
    },
    {
      "name": "Oppo Find5",
      "flash_recovery": "dd if=%s of=/dev/block/platform/msm_sdcc.1/by-name/recovery bs=4096 ; ",
      "touch_version": "6.0.3.7",
      "key": "find5",
      "version": "6.0.3.7",
      "lunch": "cm_find5-userdebug",
      "init": "init.find5.rc",
      "legacy_versions": [
        "6.0.3.1"
      ]
    },
    {
      "name": "Samsung Galaxy S4 (T-Mobile)",
      "ro.product.devices": [
        "jfltetmo",
        "jflteMetroPCS"
      ],
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p21 bs=4096 ; ",
      "touch_version": "6.0.4.3",
      "key": "jfltetmo",
      "version": "6.0.4.3",
      "lunch": "cm_jfltetmo-userdebug",
      "init": "init.jfltetmo.rc",
      "legacy_versions": [
        "6.0.3.2",
        "6.0.3.6",
        "6.0.3.8",
        "6.0.4.1"
      ]
    },
    {
      "name": "Samsung Galaxy S4 (Canada/Bell)",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p21 bs=4096 ; ",
      "touch_version": "6.0.4.4",
      "key": "jfltecan",
      "version": "6.0.4.4",
      "lunch": "cm_jfltecan-userdebug",
      "init": "init.jfltecan.rc",
      "legacy_versions": [
        "6.0.3.2",
        "6.0.3.6",
        "6.0.3.8",
        "6.0.4.1"
      ]
    },
    {
      "name": "ZTE Engage",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p17 bs=4096 ; ",
      "key": "V8000",
      "version": "6.0.3.2",
      "lunch": "cm_V8000-userdebug",
      "init": "init.zte.rc",
      "legacy_versions": [

      ]
    },
    {
      "name": "Samsung Galaxy S4 (i9500)",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p10 bs=4096 ; ",
      "touch_version": "6.0.3.2",
      "key": "i9500",
      "version": "6.0.3.2",
      "lunch": "cm_i9500-userdebug",
      "init": "init.i9500.rc",
      "legacy_versions": [

      ]
    },
    {
      "name": "Motorola Xoom (GSM)",
      "flash_recovery": "dd if=%s of=/dev/block/platform/sdhci-tegra.3/by-name/recovery bs=4096 ; ",
      "touch_version": "6.0.3.2",
      "key": "everest",
      "version": "6.0.3.2",
      "lunch": "cm_everest-userdebug",
      "init": "init.everest.rc",
      "legacy_versions": [

      ]
    },
    {
      "name": "HTC Desire X",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p21 bs=4096 ; ",
      "touch_version": "6.0.3.2",
      "key": "protou",
      "version": "6.0.3.2",
      "lunch": "cm_protou-userdebug",
      "init": "init.protou.rc",
      "legacy_versions": [

      ]
    },
    {
      "name": "HTC One (Sprint)",
      "ro.product.devices": [
        "m7spr",
        "m7wls"
      ],
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p36 bs=4096 ; ",
      "touch_version": "6.0.4.3",
      "key": "m7spr",
      "version": "6.0.4.3",
      "lunch": "cm_m7spr-userdebug",
      "init": "init.m7spr.rc",
      "legacy_versions": [
        "6.0.3.2",
        "6.0.3.6",
        "6.0.3.8",
        "6.0.4.1"
      ]
    },
    {
      "name": "HTC One (T-Mobile)",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p34 bs=4096 ; ",
      "touch_version": "6.0.4.3",
      "key": "m7tmo",
      "version": "6.0.4.3",
      "lunch": "cm_m7tmo-userdebug",
      "init": "init.m7tmo.rc",
      "legacy_versions": [
        "6.0.3.2",
        "6.0.3.6",
        "6.0.3.8",
        "6.0.4.1"
      ]
    },
    {
      "name": "HTC One (AT&T)",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p34 bs=4096 ; ",
      "touch_version": "6.0.4.3",
      "key": "m7att",
      "version": "6.0.4.3",
      "lunch": "cm_m7att-userdebug",
      "init": "init.m7att.rc",
      "legacy_versions": [
        "6.0.3.2",
        "6.0.3.5",
        "6.0.3.6",
        "6.0.3.8",
        "6.0.4.1",
        "6.0.4.2"
      ]
    },
    {
      "name": "Samsung Galaxy S4 (AT&T)",
      "flash_recovery": "dd if=/dev/block/platform/msm_sdcc.1/by-name/aboot of=/sdcard/clockworkmod/aboot.img; /data/data/com.koushikdutta.rommanager/files/loki_patch recovery /sdcard/clockworkmod/aboot.img %s /sdcard/clockworkmod/recovery.lok ; /data/data/com.koushikdutta.rommanager/files/loki_flash recovery /sdcard/clockworkmod/recovery.lok ; ",
      "touch_version": "6.0.4.4",
      "key": "jflteatt",
      "version": "6.0.4.4",
      "lunch": "cm_jflteatt-userdebug",
      "init": "init.jflteatt.rc",
      "legacy_versions": [
        "6.0.3.2",
        "6.0.3.6",
        "6.0.3.8",
        "6.0.4.1",
        "6.0.4.3"
      ]
    },
    {
      "name": "HTC One (non-US GSM)",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p34 bs=4096 ; ",
      "touch_version": "6.0.4.3",
      "key": "m7ul",
      "version": "6.0.4.3",
      "lunch": "cm_m7ul-userdebug",
      "init": "init.m7ul.rc",
      "legacy_versions": [
        "6.0.3.2",
        "6.0.3.6",
        "6.0.3.8",
        "6.0.4.1"
      ]
    },
    {
      "name": "Samsung Galaxy S4 (Verizon)",
      "flash_recovery": "dd if=/dev/block/platform/msm_sdcc.1/by-name/aboot of=/sdcard/clockworkmod/aboot.img; /data/data/com.koushikdutta.rommanager/files/loki_patch recovery /sdcard/clockworkmod/aboot.img %s /sdcard/clockworkmod/recovery.lok ; /data/data/com.koushikdutta.rommanager/files/loki_flash recovery /sdcard/clockworkmod/recovery.lok ; ",
      "touch_version": "6.0.4.3",
      "key": "jfltevzw",
      "version": "6.0.4.3",
      "lunch": "cm_jfltevzw-userdebug",
      "init": "init.jfltevzw.rc",
      "legacy_versions": [
        "6.0.3.2",
        "6.0.3.6",
        "6.0.3.8",
        "6.0.4.1"
      ]
    },
    {
      "name": "Samsung Galaxy S4 (Sprint)",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p21 bs=4096 ; ",
      "touch_version": "6.0.4.3",
      "key": "jfltespr",
      "version": "6.0.4.4",
      "lunch": "cm_jfltespr-userdebug",
      "init": "init.jfltespr.rc",
      "legacy_versions": [
        "6.0.3.2",
        "6.0.3.6",
        "6.0.3.8",
        "6.0.4.1",
        "6.0.4.3"
      ]
    },
    {
      "name": "Samsung Galaxy S4 (US Cellular)",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p21 bs=4096 ; ",
      "touch_version": "6.0.4.3",
      "key": "jflteusc",
      "version": "6.0.4.3",
      "lunch": "cm_jflteusc-userdebug",
      "init": "init.jflteusc.rc",
      "legacy_versions": [
        "6.0.3.2",
        "6.0.3.8",
        "6.0.4.1"
      ]
    },
    {
      "name": "Samsung Galaxy S4 (i9505)",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p21 bs=4096 ; ",
      "touch_version": "6.0.4.3",
      "key": "jfltexx",
      "version": "6.0.4.3",
      "lunch": "cm_jfltexx-userdebug",
      "init": "init.jfltexx.rc",
      "legacy_versions": [
        "6.0.3.2",
        "6.0.3.3",
        "6.0.3.5",
        "6.0.3.6",
        "6.0.3.8",
        "6.0.4.1"
      ]
    },
    {
      "name": "Samsung Galaxy S4 (Cricket)",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p21 bs=4096 ; ",
      "touch_version": "6.0.4.4",
      "key": "jfltecri",
      "version": "6.0.4.3",
      "lunch": "cm_jfltecri-userdebug",
      "init": "init.jfltecri.rc",
      "legacy_versions": [
        "6.0.3.2",
        "6.0.3.6",
        "6.0.3.8",
        "6.0.4.1"
      ]
    },
    {
      "name": "LG Optimus Q (LGL55C Tracfone)",
      "flash_recovery": "dd if=%s of=/dev/block/mtdblock2 bs=4096 ; ",
      "key": "lgl55c",
      "version": "6.0.3.3",
      "lunch": "cm_lgl55c-userdebug",
      "init": "init.gelato.rc",
      "legacy_versions": [

      ]
    },
    {
      "name": "Samsung Galaxy S4 (C Spire)",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p21 bs=4096 ; ",
      "touch_version": "6.0.4.4",
      "key": "jfltecsp",
      "version": "6.0.4.4",
      "lunch": "cm_jfltecsp-userdebug",
      "init": "init.jfltecsp.rc",
      "legacy_versions": [
        "6.0.3.5",
        "6.0.3.6",
        "6.0.3.8",
        "6.0.4.1",
        "6.0.4.3"
      ]
    },
    {
      "name": "Huawei Ascend Q",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p16 ; ",
      "key": "m660",
      "version": "6.0.3.5",
      "lunch": "cm_m660-userdebug",
      "init": "init.highmem.rc",
      "legacy_versions": [

      ]
    },
    {
      "name": "Google Nexus 7 (2013)",
      "flash_recovery": "dd if=%s of=/dev/block/platform/msm_sdcc.1/by-name/recovery bs=4096 ; ",
      "touch_version": "6.0.4.3",
      "key": "flo",
      "version": "6.0.4.3",
      "lunch": "cm_flo-userdebug",
      "init": "init.flo.rc",
      "legacy_versions": [
        "6.0.3.7",
        "6.0.4.1"
      ]
    },
    {
      "name": "Samsung SGH-T699",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p18 bs=4096 ; ",
      "touch_version": "6.0.3.8",
      "key": "apexqtmo",
      "version": "6.0.3.8",
      "lunch": "cm_apexqtmo-userdebug",
      "init": "init.apexqtmo.rc",
      "legacy_versions": [

      ]
    },
    {
      "name": "LG Optimus G (ATT)",
      "flash_recovery": "dd if=%s of=/dev/block/platform/msm_sdcc.1/by-name/recovery bs=4096 ; ",
      "touch_version": "6.0.3.8",
      "key": "e970",
      "version": "6.0.3.8",
      "lunch": "cm_e970-userdebug",
      "init": "init.gee.rc",
      "legacy_versions": [

      ]
    },
    {
      "name": "LG Optimus G (Canada)",
      "flash_recovery": "dd if=%s of=/dev/block/platform/msm_sdcc.1/by-name/recovery bs=4096 ; ",
      "touch_version": "6.0.3.8",
      "key": "e973",
      "version": "6.0.3.8",
      "lunch": "cm_e973-userdebug",
      "init": "init.gee.rc",
      "legacy_versions": [

      ]
    },
    {
      "name": "LG Optimus G (Sprint)",
      "flash_recovery": "dd if=%s of=/dev/block/platform/msm_sdcc.1/by-name/recovery bs=4096 ; ",
      "touch_version": "6.0.3.8",
      "key": "ls970",
      "version": "6.0.3.8",
      "lunch": "cm_ls970-userdebug",
      "init": "init.gee.rc",
      "legacy_versions": [

      ]
    },
    {
      "name": "LG Optimus G Pro (GSM)",
      "flash_recovery": "dd if=/dev/block/platform/msm_sdcc.1/by-name/aboot of=/sdcard/clockworkmod/aboot.img; /data/data/com.koushikdutta.rommanager/files/loki_patch recovery /sdcard/clockworkmod/aboot.img %s /sdcard/clockworkmod/recovery.lok ; /data/data/com.koushikdutta.rommanager/files/loki_flash recovery /sdcard/clockworkmod/recovery.lok ; ",
      "touch_version": "6.0.3.8",
      "key": "e980",
      "version": "6.0.3.8",
      "lunch": "cm_e980-userdebug",
      "init": "init.gee_gk.rc",
      "legacy_versions": [

      ]
    },
    {
      "name": "LG Spirit 4G (MetroPCS)",
      "flash_recovery": "dd if=/dev/block/platform/msm_sdcc.1/by-name/aboot of=/sdcard/clockworkmod/aboot.img; /data/data/com.koushikdutta.rommanager/files/loki_patch recovery /sdcard/clockworkmod/aboot.img %s /sdcard/clockworkmod/recovery.lok ; /data/data/com.koushikdutta.rommanager/files/loki_flash recovery /sdcard/clockworkmod/recovery.lok ; ",
      "touch_version": "6.0.3.9",
      "key": "l1m",
      "version": "6.0.3.9",
      "lunch": "cm_l1m-userdebug",
      "init": "init.l1m.rc",
      "legacy_versions": [
        "6.0.3.8"
      ]
    },
    {
      "name": "m7vzw",
      "touch_version": "6.0.4.3",
      "key": "m7vzw",
      "version": "6.0.4.3",
      "lunch": "cm_m7vzw-userdebug",
      "init": "init.m7vzw.rc",
      "legacy_versions": [
        "6.0.3.8",
        "6.0.4.1"
      ]
    }
  ],
  "manifest": "http://developer.clockworkmod.com/merge",
  "recovery_url": "http://download2.clockworkmod.com/recoveries/recovery-clockwork-%s-%s.img",
  "manifest_signature": "O8+Kc2mdQz0e/AjCQn6Rw6fK5Kr5LZItJ474Ua3gF2o4IgdCQZXIbwCHIo6xeqY3pVEGtjYmmyO1PkRYcGqq2rB2wQM8SoKFl/70vG0ihEZ5TDeruKUgxVVSNM3e09kBvCxYK89GWqVWkNHtvTu1T1F9w6FilzCsNFSAXHD0Bos=",
  "version": "2.5.0.1",
  "keywords": "phone accessories,droid,gadgets,bluetooth headset,car charger,sd card"
}