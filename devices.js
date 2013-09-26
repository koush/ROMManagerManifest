{
  "owners": {
    "cvpcsm@gmail.com": true,
    "koush@clockworkmod.com": true,
    "keaneyw@gmail.com": true,
    "bigbeeshane@gmail.com": true,
    "njgreb@gmail.com": true,
    "attn1.repo@gmail.com": true,
    "echen@cyngn.com": true,
    "daniel.hillenbrand@codeworkx.de": true,
    "arcee@cyanogenmod.com": true,
    "layhertony@gmail.com": true,
    "utkanos@gmail.com": true,
    "playfulgod@gmail.com": true,
    "ferguson.david@gmail.com": true
  },
  "recovery_zip_url": "http://download2.clockworkmod.com/recoveries/recovery-clockwork-%s-%s.zip",
  "keywords": "phone accessories,droid,gadgets,bluetooth headset,car charger,sd card",
  "devices": [
    {
      "key": "sholes",
      "legacy_versions": [
        "3.1.0.2",
        "2.5.1.4",
        "2.5.1.3",
        "2.5.1.1",
        "2.5.0.1"
      ],
      "version": "2.5.0.1",
      "name": "Motorola Droid",
      "alternate_recovery": {
        "url": "http://koush.kanged.net/cm/recoveries/sprecovery.img",
        "name": "SPRecovery 0.99.3b",
        "clockwork": false
      },
      "init": "init.sholes.rc"
    },
    {
      "key": "sapphire",
      "legacy_versions": [
        "2.5.0.7",
        "2.5.1.4",
        "2.5.1.3",
        "2.5.1.1"
      ],
      "version": "2.5.0.7",
      "name": "HTC MyTouch 3G",
      "alternate_recovery": {
        "url": "http://files.androidspin.com/downloads.php?dir=amon_ra/RECOVERY/&file=recovery-RA-sapphire-v1.7.0G.img",
        "name": "RA Recovery v1.7.0G",
        "clockwork": false
      },
      "init": "init.sapphire.rc"
    },
    {
      "key": "magic",
      "legacy_versions": [
        "2.5.0.7",
        "2.5.1.4",
        "2.5.1.3",
        "2.5.1.1"
      ],
      "version": "2.5.0.7",
      "name": "HTC Magic",
      "alternate_recovery": {
        "url": "http://files.androidspin.com/downloads.php?dir=amon_ra/RECOVERY/&file=recovery-RA-sapphire-v1.7.0H.img",
        "name": "RA Recovery v1.7.0H",
        "clockwork": false
      },
      "init": "init.sapphire.rc"
    },
    {
      "key": "dream",
      "legacy_versions": [
        "2.5.0.7",
        "2.5.1.4",
        "2.5.1.3",
        "2.5.1.1"
      ],
      "version": "2.5.0.7",
      "name": "HTC G1/Dream",
      "alternate_recovery": {
        "url": "http://files.androidspin.com/downloads.php?dir=amon_ra/RECOVERY/&file=recovery-RA-dream-v1.7.0.img",
        "name": "RA Recovery v1.7.0",
        "clockwork": false
      },
      "init": "init.trout.rc"
    },
    {
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
      "version": "5.0.2.0",
      "name": "Google Nexus One",
      "alternate_recovery": {
        "url": "http://files.androidspin.com/downloads.php?dir=amon_ra/RECOVERY/&file=recovery-RA-passion-v2.2.1.img",
        "name": "RA Recovery v2.2.1",
        "clockwork": false
      },
      "lunch": "cyanogen_passion-eng",
      "init": "init.mahimahi.rc"
    },
    {
      "key": "hero",
      "legacy_versions": [
        "2.5.0.7",
        "2.5.1.4",
        "2.5.1.3",
        "2.5.1.1"
      ],
      "version": "2.5.0.7",
      "name": "HTC Hero (GSM)",
      "alternate_recovery": {
        "url": "http://files.androidspin.com/downloads.php?dir=amon_ra/RECOVERY/&file=recovery-RA-hero-v1.7.0.1.img",
        "name": "RA Recovery v1.7.0.1",
        "clockwork": false
      },
      "init": "init.hero.rc"
    },
    {
      "key": "heroc",
      "legacy_versions": [
        "2.5.0.7",
        "2.5.1.4",
        "2.5.1.3",
        "2.5.1.1"
      ],
      "version": "2.5.0.7",
      "name": "HTC Hero (CDMA)",
      "alternate_recovery": {
        "url": "http://www.androidspin.com/downloads.php?dir=amon_ra/RECOVERY/&file=recovery-RA-heroc-v1.6.2.img",
        "name": "RA Recovery v1.6.2",
        "clockwork": false
      },
      "init": "init.heroc.rc"
    },
    {
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
      "version": "5.0.2.2",
      "name": "HTC Evo",
      "alternate_recovery": {
        "url": "http://files.androidspin.com/downloads.php?dir=amon_ra/RECOVERY/&file=recovery-RA-supersonic-v2.3.img",
        "name": "RA Recovery v2.3",
        "clockwork": false
      },
      "lunch": "cyanogen_supersonic-eng",
      "init": "init.supersonic.rc",
      "touch_version": "5.8.0.1"
    },
    {
      "key": "legend",
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
      "name": "HTC Legend",
      "lunch": "cyanogen_legend-eng",
      "init": "init.legend.rc"
    },
    {
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
      "version": "5.0.2.0",
      "name": "HTC Desire",
      "lunch": "cyanogen_bravo-eng",
      "init": "init.bravo.rc",
      "touch_version": "5.8.0.2"
    },
    {
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
      "version": "5.0.2.0",
      "name": "HTC Desire CDMA",
      "lunch": "cyanogen_bravoc-eng",
      "init": "init.bravoc.rc"
    },
    {
      "key": "pulsemini",
      "legacy_versions": [
        "2.5.0.7",
        "2.5.1.4",
        "2.5.1.3",
        "2.5.1.1"
      ],
      "version": "2.5.0.7",
      "name": "Huawei Pulse Mini",
      "init": "init.qcom.rc"
    },
    {
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
      "version": "5.0.2.0",
      "name": "HTC Incredible (CDMA)",
      "alternate_recovery": {
        "url": "http://dl.dropbox.com/u/12949506/RomManager/recovery-RA-inc-3.02.img",
        "name": "RA_GNM Recovery v3.02",
        "clockwork": false
      },
      "lunch": "cyanogen_inc-eng",
      "init": "init.inc.rc"
    },
    {
      "key": "liberty",
      "readonly_recovery": true,
      "legacy_versions": [
        "2.5.0.7",
        "2.5.1.4",
        "2.5.1.3",
        "2.5.1.1"
      ],
      "version": "2.5.0.7",
      "name": "HTC Aria",
      "init": "init.liberty.rc"
    },
    {
      "key": "desirec",
      "readonly_recovery": true,
      "legacy_versions": [
        "2.5.0.7",
        "2.5.1.4",
        "2.5.1.3",
        "2.5.1.1"
      ],
      "version": "2.5.0.7",
      "name": "Motorola Droid Eris",
      "alternate_recovery": {
        "url": "http://www.androidspin.com/downloads.php?dir=amon_ra/RECOVERY/&file=recovery-RA-eris-v1.6.2.img",
        "name": "RA Recovery v1.6.2",
        "clockwork": false
      },
      "init": "init.desirec.rc"
    },
    {
      "key": "buzz",
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
      "name": "HTC Buzz (Wildfire)",
      "lunch": "cyanogen_buzz-eng",
      "init": "init.buzz.rc"
    },
    {
      "key": "streak",
      "legacy_versions": [
        "2.5.0.7",
        "2.5.1.4",
        "2.5.1.3",
        "2.5.1.1"
      ],
      "version": "2.5.0.7",
      "name": "Dell Streak",
      "init": "init.qcom.rc"
    },
    {
      "key": "espresso",
      "readonly_recovery": true,
      "legacy_versions": [
        "2.5.0.7",
        "2.5.1.4",
        "2.5.1.3",
        "2.5.1.1"
      ],
      "version": "2.5.0.7",
      "name": "HTC MyTouch Slide",
      "init": "init.latte.rc"
    },
    {
      "key": "galaxys",
      "readonly_recovery": true,
      "legacy_versions": [
        "2.5.1.2",
        "2.5.1.4",
        "2.5.1.3",
        "2.5.1.1"
      ],
      "version": "2.5.1.2",
      "name": "Samsung GalaxyS i9000",
      "init": "lpm.rc"
    },
    {
      "key": "fascinate",
      "readonly_recovery": true,
      "legacy_versions": [
        "3.0.0.8",
        "2.5.1.4",
        "2.5.1.3",
        "2.5.1.1"
      ],
      "version": "3.0.0.8",
      "name": "Samsung GalaxyS Fascinate",
      "init": "init.smdkc110.rc"
    },
    {
      "key": "vibrant",
      "readonly_recovery": true,
      "legacy_versions": [
        "2.5.1.2",
        "2.5.1.4",
        "2.5.1.3",
        "2.5.1.1"
      ],
      "version": "2.5.1.2",
      "name": "Samsung GalaxyS Vibrant",
      "init": "init.smdkc110.rc"
    },
    {
      "key": "captivate",
      "readonly_recovery": true,
      "legacy_versions": [
        "2.5.1.2",
        "2.5.1.4",
        "2.5.1.3",
        "2.5.1.1"
      ],
      "version": "2.5.1.2",
      "name": "Samsung GalaxyS Captivate",
      "init": "init.smdkc110.rc"
    },
    {
      "key": "pulse",
      "legacy_versions": [
        "2.5.0.7",
        "2.5.1.4",
        "2.5.1.3",
        "2.5.1.1"
      ],
      "version": "2.5.0.7",
      "name": "Huawei Pulse",
      "init": "init.qcom.rc"
    },
    {
      "key": "aloha",
      "legacy_versions": [
        "2.5.0.7",
        "2.5.1.4",
        "2.5.1.3",
        "2.5.1.1"
      ],
      "version": "2.5.0.7",
      "name": "LG Ally",
      "alternate_recovery": {
        "url": "http://dl.dropbox.com/u/12949506/RomManager/recovery-RA-aloha-2.2.2-GNM.img",
        "name": "RA_GNM Recovery v2.2.2",
        "clockwork": false
      },
      "init": "init.aloha.rc"
    },
    {
      "key": "milestone",
      "readonly_recovery": true,
      "legacy_versions": [
        "2.5.0.7",
        "2.5.1.4",
        "2.5.1.3",
        "2.5.1.1",
        "2.5.0.7"
      ],
      "version": "3.1.0.2",
      "name": "Motorola Milestone",
      "init": "init.mapphone_cdma.rc"
    },
    {
      "key": "droidx",
      "readonly_recovery": true,
      "legacy_versions": [
        "2.5.0.7"
      ],
      "version": "5.0.2.0",
      "name": "Motorola Droid X",
      "reboot_recovery": "rm /cache/recovery/command ; echo 1 > /data/.recovery_mode ; sync ; reboot ;",
      "init": "init.mapphone_cdma.rc",
      "flash_recovery": "dd if=%s of=/preinstall/recovery/recovery.zip ; "
    },
    {
      "key": "shadow",
      "readonly_recovery": true,
      "legacy_versions": [
        "2.5.0.7"
      ],
      "version": "5.0.2.0",
      "name": "Motorola Droid X (2nd-init)",
      "reboot_recovery": "rm /cache/recovery/command ; echo 1 > /data/.recovery_mode ; sync ; reboot ;",
      "lunch": "cyanogen_shadow-eng",
      "init": "init.mapphone_cdma.rc",
      "flash_recovery": "dd if=%s of=/preinstall/recovery/recovery.zip ; "
    },
    {
      "key": "salsa",
      "legacy_versions": [
        "2.5.1.4",
        "2.5.1.3",
        "2.5.1.1",
        "2.5.1.0"
      ],
      "version": "2.5.1.0",
      "name": "Acer Liquid",
      "init": "init.salsa.rc"
    },
    {
      "key": "z71",
      "legacy_versions": [
        "2.5.1.4",
        "2.5.1.3",
        "2.5.1.1",
        "2.5.1.0"
      ],
      "version": "2.5.1.3",
      "name": "Commtiva Z71 (Boston, Blaze, and more)",
      "init": "init.qcom.rc"
    },
    {
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
      "version": "5.0.2.7",
      "name": "HTC G2",
      "lunch": "cyanogen_vision-eng",
      "init": "init.vision.rc",
      "touch_version": "5.8.1.0",
      "flash_recovery": "dd if=/dev/zero of=/dev/block/mmcblk0p21 bs=4096 ; dd if=%s of=/dev/block/mmcblk0p21 bs=4096 ; "
    },
    {
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
      "version": "5.0.2.0",
      "name": "HTC MyTouch 4G",
      "lunch": "cyanogen_glacier-eng",
      "init": "init.glacier.rc",
      "touch_version": "5.8.1.0",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p21 ; "
    },
    {
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
      "version": "5.0.2.0",
      "name": "HTC Desire HD",
      "lunch": "cyanogen_ace-eng",
      "init": "init.spade.rc",
      "touch_version": "5.8.1.5",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p21 ; "
    },
    {
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
      "version": "5.0.2.0",
      "name": "Motorola Cliq",
      "lunch": "cyanogen_morrison-eng",
      "init": "init.morrison.rc",
      "touch_version": "5.8.1.0"
    },
    {
      "key": "droid2",
      "readonly_recovery": true,
      "legacy_versions": [
        "2.5.0.8"
      ],
      "version": "5.0.2.0",
      "name": "Motorola Droid 2",
      "reboot_recovery": "rm /cache/recovery/command ; echo 1 > /data/.recovery_mode ; sync ; reboot ;",
      "lunch": "cyanogen_droid2-eng",
      "init": "init.mapphone_cdma.rc",
      "flash_recovery": "dd if=%s of=/preinstall/recovery/recovery.zip ; "
    },
    {
      "key": "one",
      "legacy_versions": [
        "2.5.1.4",
        "2.5.1.3",
        "2.5.1.1",
        "2.5.1.0"
      ],
      "version": "2.5.1.3",
      "name": "Geeksphone ONE",
      "alternate_recovery": {
        "url": "http://dl.dropbox.com/u/10355648/recovery-ONE-1_6.img",
        "name": "ONE Recovery v1.6",
        "clockwork": false
      },
      "init": "init.qcom.rc"
    },
    {
      "key": "vega",
      "legacy_versions": [
        "2.5.1.4",
        "2.5.1.3",
        "2.5.1.1",
        "2.5.1.0",
        "2.5.1.4"
      ],
      "version": "3.0.2.7",
      "name": "Advent Vega",
      "reboot_recovery": "echo start > /proc/ota ; ",
      "init": "init_recovery.rc",
      "flash_recovery": "/data/data/com.koushikdutta.rommanager/files/tegra_flash_image recovery %s ; "
    },
    {
      "key": "att_tab",
      "readonly_recovery": true,
      "legacy_versions": [
        "2.5.1.8",
        "2.5.1.4",
        "2.5.1.3",
        "2.5.1.1"
      ],
      "version": "2.5.1.8",
      "name": "Samsung Galaxy Tab - ATT",
      "init": "init.smdkc110.rc"
    },
    {
      "key": "tmobile_tab",
      "readonly_recovery": true,
      "legacy_versions": [
        "2.5.1.8",
        "2.5.1.4",
        "2.5.1.3",
        "2.5.1.1"
      ],
      "version": "2.5.1.8",
      "name": "Samsung Galaxy Tab (T-Mobile)",
      "init": "init.smdkc110.rc"
    },
    {
      "key": "FM6",
      "legacy_versions": [
        "2.5.1.4",
        "2.5.1.3",
        "2.5.1.1",
        "2.5.1.0"
      ],
      "version": "2.5.1.2",
      "name": "Commtiva Link N700, Spice MI700, and more",
      "alternate_recovery": {
        "url": "http://dl.dropbox.com/u/15816725/MI700-recovery-V1_3.img",
        "name": "MI700 Recovery v1.6",
        "clockwork": false
      },
      "init": "init.qcom.rc"
    },
    {
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
        "6.0.3.4"
      ],
      "version": "6.0.3.6",
      "name": "Google Nexus S",
      "lunch": "cm_crespo-userdebug",
      "init": "init.herring.rc",
      "touch_version": "6.0.3.8"
    },
    {
      "key": "droidpro",
      "readonly_recovery": true,
      "legacy_versions": [
        "2.5.0.8"
      ],
      "version": "2.5.0.8",
      "name": "Motorola Droid Pro",
      "init": "init. mapphone_cdma.rc"
    },
    {
      "key": "ascend",
      "legacy_versions": [
        "3.0.0.5",
        "3.0.0.4"
      ],
      "version": "3.0.0.5",
      "name": "Huawei Ascend",
      "init": "init.qcom.rc"
    },
    {
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
      "version": "5.0.2.0",
      "name": "ZTE Blade",
      "lunch": "cyanogen_blade-eng",
      "init": "init.blade.rc"
    },
    {
      "key": "click",
      "legacy_versions": [
        "3.0.0.6",
        "3.0.0.6",
        "3.0.2.7",
        "5.0.0.8",
        "5.0.1.0"
      ],
      "version": "5.0.2.0",
      "name": "HTC Click/Tattoo",
      "lunch": "cyanogen_click-eng",
      "init": "init.bahamas.rc"
    },
    {
      "key": "a7",
      "readonly_recovery": true,
      "legacy_versions": [
        "3.0.0.8"
      ],
      "version": "3.0.0.8",
      "name": "Elocity A7",
      "init": "init_recovery.rc"
    },
    {
      "key": "zero",
      "legacy_versions": [
        "3.0.1.3"
      ],
      "version": "3.0.1.3",
      "name": "Geeksphone Zero",
      "init": "init.zero.rc"
    },
    {
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
      "version": "5.0.2.0",
      "name": "HTC Evo Shift",
      "lunch": "cyanogen_speedy-eng",
      "init": "init.speedy.rc",
      "touch_version": "5.8.1.6"
    },
    {
      "key": "captivatemtd",
      "legacy_versions": [

      ],
      "officially_supported": false,
      "name": "Samsung Captivate (MTD)",
      "reboot_recovery": "echo 1 > /cache/.startrecovery ; sync ; reboot ;",
      "init": "init.aries.rc"
    },
    {
      "key": "showcasemtd",
      "legacy_versions": [

      ],
      "officially_supported": false,
      "name": "Samsung Showcase (MTD)",
      "reboot_recovery": "echo 1 > /cache/.startrecovery ; sync ; reboot ;",
      "init": "init.aries.rc"
    },
    {
      "key": "mesmerizemtd",
      "legacy_versions": [

      ],
      "officially_supported": false,
      "name": "Samsung Mesmerize (MTD)",
      "reboot_recovery": "echo 1 > /cache/.startrecovery ; sync ; reboot ;",
      "init": "init.aries.rc"
    },
    {
      "key": "fascinatemtd",
      "legacy_versions": [

      ],
      "officially_supported": false,
      "name": "Samsung Fascinate (MTD)",
      "reboot_recovery": "echo 1 > /cache/.startrecovery ; sync ; reboot ;",
      "init": "init.aries.rc"
    },
    {
      "key": "vibrantmtd",
      "legacy_versions": [

      ],
      "officially_supported": false,
      "name": "Samsung Vibrant (MTD)",
      "reboot_recovery": "echo 1 > /cache/.startrecovery ; sync ; reboot ;",
      "init": "init.aries.rc"
    },
    {
      "key": "galaxysbmtd",
      "legacy_versions": [

      ],
      "officially_supported": false,
      "name": "Samsung GalaxyS i9000B (MTD)",
      "reboot_recovery": "echo 1 > /cache/.startrecovery ; sync ; reboot ;",
      "init": "init.aries.rc"
    },
    {
      "key": "galaxysmtd",
      "legacy_versions": [

      ],
      "officially_supported": false,
      "name": "Samsung GalaxyS i9000 (MTD)",
      "reboot_recovery": "echo 1 > /cache/.startrecovery ; sync ; reboot ;",
      "init": "init.aries.rc"
    },
    {
      "key": "epic4g",
      "readonly_recovery": true,
      "legacy_versions": [

      ],
      "version": "5.0.2.7",
      "name": "Samsung Epic4G",
      "lunch": "full_epic4g-eng",
      "init": "lpm.rc"
    },
    {
      "key": "streak7",
      "legacy_versions": [
        "3.0.2.0",
        "3.0.1.9",
        "3.0.1.8",
        "3.0.1.7"
      ],
      "version": "3.0.2.0",
      "name": "Dell Streak 7",
      "init": "init.tinyandroid.rc",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk3p1 ; "
    },
    {
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
      "version": "5.0.2.1",
      "name": "HTC Thunderbolt",
      "alternate_recovery": {
        "url": "http://dl.dropbox.com/u/12949506/RomManager/recovery-ra-mecha-3.05.img",
        "name": "RA_GNM Recovery v3.05",
        "clockwork": false
      },
      "lunch": "cyanogen_mecha-eng",
      "init": "init.mecha.rc",
      "touch_version": "5.8.0.2"
    },
    {
      "key": "ideos",
      "legacy_versions": [
        "3.0.2.4"
      ],
      "version": "3.0.2.4",
      "name": "Huawei U8150 Ideos",
      "init": "init.ideos.rc"
    },
    {
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
      "version": "6.0.3.1",
      "name": "Motorola XOOM",
      "lunch": "cm_stingray-userdebug",
      "init": "init.stingray.rc",
      "touch_version": "6.0.3.1",
      "flash_recovery": "dd if=%s of=/dev/block/platform/sdhci-tegra.3/by-name/recovery ; "
    },
    {
      "key": "leo",
      "legacy_versions": [
        "3.0.2.5",
        "3.0.2.4",
        "3.0.2.5"
      ],
      "version": "3.1.0.0",
      "name": "HTC HD2",
      "init": "init.leo.rc"
    },
    {
      "key": "zeppelin",
      "legacy_versions": [
        "3.0.2.4",
        "3.0.2.4",
        "5.0.0.8",
        "5.0.0.8",
        "5.0.1.0",
        "5.0.1.0"
      ],
      "version": "5.0.2.0",
      "name": "Motorola CLIQ XT/Quench (MB501)",
      "lunch": "cyanogen_zeppelin-eng",
      "init": "init.zeppelin.rc"
    },
    {
      "key": "saga",
      "legacy_versions": [
        "3.0.2.6",
        "5.0.1.9"
      ],
      "version": "5.0.2.0",
      "name": "HTC Desire S",
      "lunch": "full_saga-eng",
      "init": "init.saga.rc",
      "touch_version": "5.8.1.5",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p21 ; "
    },
    {
      "key": "p999",
      "readonly_recovery": true,
      "legacy_versions": [
        "3.0.2.7",
        "5.0.0.8",
        "5.0.1.0",
        "5.0.1.4",
        "5.0.1.6"
      ],
      "version": "5.0.2.0",
      "name": "LG G2X (T-Mobile)",
      "reboot_recovery": "echo 'boot-recovery' | dd of=/dev/block/mmcblk0p3 seek=6144 bs=1 ; reboot ; ",
      "lunch": "cyanogen_p999-eng",
      "init": "init_recovery.rc"
    },
    {
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
      "version": "6.0.3.1",
      "name": "LG Optimus 2X",
      "reboot_recovery": "echo 'boot-recovery' | dd of=/dev/block/mmcblk0p3 seek=6144 bs=1 ; reboot ; ",
      "inits": [
        "init_recovery.rc",
        "/bootimages/opening_01.rle"
      ],
      "lunch": "cm_p990-userdebug",
      "touch_version": "6.0.3.1",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p7 ; "
    },
    {
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
        "6.0.3.3"
      ],
      "version": "6.0.3.6",
      "name": "Google Nexus S 4G",
      "lunch": "cm_crespo4g-userdebug",
      "init": "init.herring.rc",
      "touch_version": "6.0.3.6"
    },
    {
      "key": "thunderg",
      "legacy_versions": [
        "3.1.0.0",
        "5.0.0.8",
        "5.0.1.0"
      ],
      "version": "5.0.2.0",
      "name": "LG Optimus One (old BB)",
      "alternate_recovery": {
        "url": "http://dl.dropbox.com/u/12949506/RomManager/recovery-RA-thunderg-2.2.1-GNM.img",
        "name": "RA_GNM Recovery v2.2.1",
        "clockwork": false
      },
      "lunch": "full_thunderg-eng",
      "init": "init.thunderg.rc"
    },
    {
      "key": "p500",
      "legacy_versions": [
        "5.0.2.0"
      ],
      "version": "5.0.2.7",
      "name": "LG Optimus One",
      "lunch": "cyanogen_p500-eng",
      "init": "init.thunderg.rc"
    },
    {
      "key": "u8220",
      "legacy_versions": [

      ],
      "version": "3.1.0.1",
      "name": "Huawei U8220/U8230",
      "init": "init.qcom.rc"
    },
    {
      "key": "charge",
      "readonly_recovery": true,
      "legacy_versions": [

      ],
      "version": "3.1.0.1",
      "name": "Samsung Charge",
      "init": "init.smdkc110.rc"
    },
    {
      "key": "umts_jordan",
      "legacy_versions": [

      ],
      "officially_supported": false,
      "name": "Motorola Defy",
      "init": "init.mapphone_umts.rc"
    },
    {
      "key": "galaxys4g",
      "readonly_recovery": true,
      "legacy_versions": [
        "3.2.0.0"
      ],
      "version": "3.2.0.0",
      "name": "Samsung Galaxy S 4G",
      "init": "init.smdkc110.rc"
    },
    {
      "key": "galaxys2",
      "readonly_recovery": true,
      "legacy_versions": [
        "4.0.1.4",
        "v4.0.1.4"
      ],
      "version": "4.0.1.5",
      "ro.product.device": [
        "i9100",
        "galaxys2"
      ],
      "name": "Samsung Galaxy S2",
      "inits": [
        "init.smdkc210.rc",
        "init.smdk4210.rc"
      ],
      "init": "init.smdkc210.rc",
      "touch_version": "5.8.1.5"
    },
    {
      "key": "i9100",
      "legacy_versions": [

      ],
      "officially_supported": false,
      "version": "6.0.1.0",
      "ro.product.device": [
        "i9100",
        "galaxys2"
      ],
      "name": "Samsung Galaxy S2",
      "inits": [
        "init.smdkc210.rc",
        "init.smdk4210.rc"
      ],
      "lunch": "cm_i9100-userdebug",
      "init": "init.smdk4210.rc"
    },
    {
      "key": "n7000",
      "readonly_recovery": true,
      "legacy_versions": [
        "6.0.1.0"
      ],
      "version": "6.0.1.2",
      "name": "Samsung Galaxy Note (GT-N7000)",
      "lunch": "cm_n7000-userdebug",
      "init": "init.smdk4210.rc"
    },
    {
      "key": "sidekick4g",
      "readonly_recovery": true,
      "legacy_versions": [

      ],
      "version": "4.0.0.2",
      "name": "Samsung Sidekick 4G",
      "init": "init.smdkc110.rc"
    },
    {
      "key": "vivo",
      "legacy_versions": [
        "4.0.0.4",
        "4.0.0.6",
        "4.0.0.7",
        "4.0.0.8",
        "5.0.1.9"
      ],
      "version": "5.0.2.0",
      "name": "HTC Incredible S",
      "lunch": "cyanogen_vivo-eng",
      "init": "init.vivo.rc",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p21 ; "
    },
    {
      "key": "vivow",
      "legacy_versions": [
        "4.0.0.4",
        "4.0.0.6",
        "4.0.0.7",
        "4.0.0.8",
        "5.0.1.9"
      ],
      "version": "5.0.2.0",
      "name": "HTC Incredible 2",
      "alternate_recovery": {
        "url": "http://dl.dropbox.com/u/12949506/RomManager/recovery-ra-vivow-3.05.img",
        "name": "RA_GNM Recovery v3.05",
        "clockwork": false
      },
      "lunch": "cyanogen_vivow-eng",
      "init": "init.vivow.rc",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p21 ; "
    },
    {
      "key": "p920",
      "legacy_versions": [
        "4.0.0.7",
        "4.0.0.9",
        "5.0.1.4",
        "5.0.2.0",
        "5.0.2.7"
      ],
      "version": "6.0.1.9",
      "name": "LG Optimus 3D",
      "reboot_recovery": "echo '518 R 1' > /sys/kernel/kobject_lge_nvdata/dynamic_nvdata_raw_write ; reboot ; ",
      "inits": [
        "init.p920.rc",
        "/bootimages/opening_01.rle"
      ],
      "lunch": "cm_p920-userdebug",
      "touch_version": "6.0.1.9",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p6 ; "
    },
    {
      "key": "galaxyace",
      "legacy_versions": [

      ],
      "version": "4.0.0.9",
      "name": "Samsung Galaxy Ace",
      "init": "init.galaxyace.rc",
      "flash_recovery": "/data/data/com.koushikdutta.rommanager/files/flash_image recoveryonly %s ; "
    },
    {
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
      "version": "5.0.2.0",
      "name": "Motorola Atrix 4G",
      "inits": [
        "init_prep_keypad.sh",
        "init.olympus.rc"
      ],
      "lunch": "generic_olympus-eng",
      "init": "init_prep_keypad.sh",
      "touch_version": "5.8.1.8",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p10 ; "
    },
    {
      "key": "smb_a1002",
      "legacy_versions": [

      ],
      "version": "4.0.1.5",
      "name": "Viewsonic GTablet (smb_a1002)",
      "init": "init_recovery.rc",
      "flash_recovery": "/data/data/com.koushikdutta.rommanager/files/tegra_flash_image recovery %s ; "
    },
    {
      "key": "shooter",
      "legacy_versions": [
        "4.0.1.5",
        "5.0.0.0",
        "5.0.1.0"
      ],
      "version": "5.0.2.0",
      "name": "HTC EVO 3D",
      "lunch": "htc_shooter-eng",
      "init": "init.shooter.rc",
      "touch_version": "5.8.0.2",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p22 ; "
    },
    {
      "key": "pyramid",
      "legacy_versions": [
        "4.0.1.5",
        "5.0.0.1",
        "5.0.0.7",
        "5.0.0.8",
        "5.0.1.0"
      ],
      "version": "5.0.2.0",
      "name": "HTC Sensation",
      "lunch": "full_pyramid-eng",
      "init": "init.pyramid.rc",
      "touch_version": "5.8.0.9",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p21 ; "
    },
    {
      "key": "ascend2",
      "legacy_versions": [

      ],
      "version": "4.0.1.5",
      "name": "Huawei Ascend 2 (M865)",
      "inits": [
        "init.qcom.rc",
        "init.huawei.rc"
      ],
      "init": "init.qcom.rc"
    },
    {
      "key": "a70",
      "legacy_versions": [

      ],
      "version": "4.0.1.5",
      "name": "Micromax A70",
      "init": "init.qcom.rc"
    },
    {
      "key": "galaxygio",
      "readonly_recovery": true,
      "legacy_versions": [

      ],
      "version": "4.0.1.5",
      "name": "Samsung Galaxy Gio",
      "init": "init.galaxygio.rc"
    },
    {
      "key": "indulge910",
      "readonly_recovery": true,
      "legacy_versions": [

      ],
      "version": "4.0.1.5",
      "name": "Samsung Indulge 910",
      "init": "init.smdkc110.rc"
    },
    {
      "key": "indulge915",
      "readonly_recovery": true,
      "legacy_versions": [

      ],
      "version": "4.0.1.5",
      "name": "Samsung Indulge 915",
      "init": "init.smdkc110.rc"
    },
    {
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
      "version": "6.0.1.4",
      "name": "LG Optimus Black",
      "lunch": "cm_p970-userdebug",
      "init": "/bootimages/ON_480x800_08fps_0000.rle",
      "touch_version": "6.0.1.4",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p4 ; "
    },
    {
      "key": "shooteru",
      "legacy_versions": [
        "5.0.1.6",
        "5.0.1.7",
        "5.0.1.8",
        "5.0.1.9"
      ],
      "version": "5.0.2.0",
      "name": "HTC EVO 3D (GSM)",
      "lunch": "full_shooteru-eng",
      "init": "init.shooteru.rc",
      "touch_version": "5.8.0.2",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p21 ; "
    },
    {
      "key": "droid2we",
      "readonly_recovery": true,
      "legacy_versions": [

      ],
      "version": "5.0.2.3",
      "name": "Motorola Droid 2 Global",
      "reboot_recovery": "rm /cache/recovery/command ; echo 1 > /data/.recovery_mode ; sync ; reboot ;",
      "lunch": "cyanogen_droid2we-eng",
      "init": "init.mapphone_cdma.rc",
      "flash_recovery": "dd if=%s of=/preinstall/recovery/recovery.zip ; "
    },
    {
      "key": "targa",
      "readonly_recovery": true,
      "legacy_versions": [
        "5.0.2.3",
        "5.0.2.4"
      ],
      "version": "5.0.2.5",
      "name": "Motorola Droid Bionic",
      "reboot_recovery": "rm /cache/recovery/command ; echo 1 > /data/.recovery_mode ; sync ; reboot ;",
      "lunch": "generic_targa-eng",
      "init": "init.mapphone_cdma.rc",
      "flash_recovery": "dd if=%s of=/preinstall/recovery/recovery.zip ; "
    },
    {
      "key": "daytona",
      "readonly_recovery": true,
      "legacy_versions": [
        "5.0.2.3",
        "5.0.2.4"
      ],
      "version": "5.0.2.5",
      "name": "Motorola Droid X2",
      "reboot_recovery": "rm /cache/recovery/command ; echo 1 > /data/.recovery_mode ; sync ; reboot ;",
      "lunch": "generic_daytona-eng",
      "init": "init.mapphone_cdma.rc",
      "flash_recovery": "dd if=%s of=/preinstall/recovery/recovery.zip ; "
    },
    {
      "key": "solana",
      "readonly_recovery": true,
      "legacy_versions": [
        "5.0.2.5"
      ],
      "version": "5.0.2.6",
      "name": "Motorola Droid 3",
      "reboot_recovery": "rm /cache/recovery/command ; echo 1 > /data/.recovery_mode ; sync ; reboot ;",
      "lunch": "full_solana-eng",
      "init": "init.mapphone_cdma.rc",
      "flash_recovery": "dd if=%s of=/preinstall/recovery/recovery.zip ; "
    },
    {
      "key": "motus",
      "legacy_versions": [

      ],
      "version": "5.0.2.6",
      "name": "Motorola Backflip",
      "lunch": "cyanogen_motus-eng",
      "init": "init.motus.rc"
    },
    {
      "key": "tass",
      "readonly_recovery": true,
      "legacy_versions": [

      ],
      "version": "5.0.2.6",
      "name": "Samsung Galaxy Mini",
      "lunch": "tass-eng",
      "init": "init.gt-s5570.rc"
    },
    {
      "key": "u8800",
      "legacy_versions": [

      ],
      "version": "5.0.2.6",
      "name": "Huawei U8800",
      "lunch": "huawei_u8800-eng",
      "init": "init.u8800.rc",
      "flash_recovery": "mount -o remount,rw -t vfat /dev/block/mmcblk0p1 /cust_backup ; cat %s > /cust_backup/image/recovery.img ;"
    },
    {
      "key": "galaxys2att",
      "readonly_recovery": true,
      "legacy_versions": [

      ],
      "version": "5.0.2.6",
      "name": "Samsung Galaxy S2 (AT&T)",
      "inits": [
        "init.smdkc210.rc",
        "init.smdk4210.rc"
      ],
      "lunch": "cyanogen_galaxys2att-eng",
      "init": "init.smdkc210.rc",
      "touch_version": "5.8.1.5"
    },
    {
      "key": "hercules",
      "owners": {
        "jmprblckwing182@gmail.com": true
      },
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
      "version": "6.0.3.6",
      "name": "Samsung Galaxy S2 (T-Mobile)",
      "lunch": "cm_hercules-userdebug",
      "init": "init.target.rc",
      "touch_version": "6.0.3.6",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p22 bs=4096 ; "
    },
    {
      "key": "epic4gtouch",
      "readonly_recovery": true,
      "legacy_versions": [
        "5.0.2.6",
        "5.0.2.7"
      ],
      "version": "5.0.2.7",
      "name": "Samsung Epic 4G Touch",
      "lunch": "full_epic4gtouch-eng",
      "init": "init.smdkc210.rc",
      "touch_version": "5.8.1.5"
    },
    {
      "key": "ruby",
      "legacy_versions": [

      ],
      "version": "5.0.2.6",
      "name": "HTC Amaze",
      "lunch": "full_ruby-eng",
      "init": "init.ruby.rc",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p23 bs=4096 ; "
    },
    {
      "key": "galaxy5",
      "readonly_recovery": true,
      "legacy_versions": [
        "5.0.2.8"
      ],
      "version": "5.0.2.8",
      "name": "Samsung Galaxy 5",
      "lunch": "samsung_galaxy5-eng",
      "init": "init.gt-i5500.rc"
    },
    {
      "key": "mooncake",
      "legacy_versions": [

      ],
      "version": "5.0.2.7",
      "name": "ZTE Racer",
      "lunch": "generic_mooncake-eng",
      "init": "init.mooncake.rc"
    },
    {
      "key": "vzwtab",
      "readonly_recovery": true,
      "legacy_versions": [
        "5.0.2.7",
        "5.0.2.7",
        "5.0.2.7"
      ],
      "version": "5.0.2.7",
      "name": "Samsung Galaxy Tab (VZW)",
      "lunch": "full_vzwtab-eng",
      "init": "init.smdkc110.rc"
    },
    {
      "key": "doubleshot",
      "legacy_versions": [
        "5.0.2.7",
        "5.0.2.7"
      ],
      "version": "5.0.2.7",
      "name": "HTC MyTouch 4G Slide",
      "lunch": "full_doubleshot-eng",
      "init": "init.doubleshot.rc",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p21 bs=4096 ; "
    },
    {
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
      "version": "6.0.3.6",
      "name": "Google Galaxy Nexus (GSM)",
      "lunch": "cm_maguro-userdebug",
      "init": "init.tuna.rc",
      "touch_version": "6.0.3.6",
      "flash_recovery": "dd if=%s of=/dev/block/platform/omap/omap_hsmmc.0/by-name/recovery bs=4096 ;"
    },
    {
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
      "version": "6.0.3.6",
      "name": "Google Galaxy Nexus (Verizon)",
      "lunch": "cm_toro-userdebug",
      "init": "init.tuna.rc",
      "touch_version": "6.0.3.6",
      "flash_recovery": "dd if=%s of=/dev/block/platform/omap/omap_hsmmc.0/by-name/recovery bs=4096 ;"
    },
    {
      "key": "lg690",
      "legacy_versions": [

      ],
      "version": "5.0.2.7",
      "name": "LG Optimus C LW690 and Optimus M MS690",
      "lunch": "full_lg690-eng",
      "init": "init.thunderc.rc"
    },
    {
      "key": "c660",
      "legacy_versions": [

      ],
      "version": "5.0.2.7",
      "name": "LG Optimus Pro",
      "lunch": "c660-eng",
      "init": "init.muscat.rc"
    },
    {
      "key": "e510",
      "legacy_versions": [

      ],
      "version": "5.0.2.7",
      "name": "LG Optimus Hub",
      "lunch": "e510-eng",
      "init": "init.univa.rc"
    },
    {
      "key": "epicmtd",
      "legacy_versions": [

      ],
      "officially_supported": false,
      "version": "5.0.2.7",
      "name": "Samsung Epic4G (MTD)",
      "reboot_recovery": "/system/xbin/busybox devmem 0x57fff800 32 0x5EC0B007; sync ; reboot ;",
      "lunch": "cyanogen_epicmtd-eng",
      "init": "init.victory.rc",
      "touch_version": "5.8.1.5"
    },
    {
      "key": "holiday",
      "legacy_versions": [
        "5.0.2.7",
        "5.0.2.7",
        "5.0.2.7"
      ],
      "version": "5.0.2.7",
      "name": "HTC Holiday",
      "lunch": "full_holiday-eng",
      "init": "init.holiday.rc",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p23 bs=4096 ; "
    },
    {
      "key": "e730",
      "legacy_versions": [

      ],
      "version": "5.0.2.7",
      "name": "LG Optimus SOL / TMo LG myTouch",
      "inits": [
        "init.victor.rc",
        "init.e739.rc"
      ],
      "lunch": "e730-eng",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p17 bs=4096 ;"
    },
    {
      "key": "marvel",
      "legacy_versions": [
        "5.0.2.7"
      ],
      "version": "5.0.2.8",
      "name": "HTC Wildfire S",
      "lunch": "generic_marvel-eng",
      "init": "init.marvel.rc"
    },
    {
      "key": "sunfire",
      "legacy_versions": [
        "5.0.2.7"
      ],
      "version": "5.0.2.8",
      "name": "Motorola Photon 4G",
      "inits": [
        "init.mapphone_umts.rc",
        "init.mapphone_cdma.rc"
      ],
      "lunch": "full_sunfire-eng",
      "init": "init.mapphone_umts.rc",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p10 bs=4096 ;"
    },
    {
      "key": "u8160",
      "legacy_versions": [
        "5.0.2.8"
      ],
      "version": "5.0.2.8",
      "name": "Huawei U8160",
      "inits": [
        "init.huawei.rc",
        "init.u8160.rc"
      ],
      "lunch": "huawei_u8160-eng",
      "init": "init.u8160.rc"
    },
    {
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
      "version": "6.0.3.1",
      "name": "HTC Rezound",
      "lunch": "cm_vigor-userdebug",
      "init": "init.vigor.rc",
      "touch_version": "6.0.3.1",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p23 bs=4096 ;"
    },
    {
      "key": "express",
      "legacy_versions": [

      ],
      "version": "5.8.1.5",
      "name": "HTC EVO View 4G",
      "lunch": "full_express-userdebug",
      "init": "init.expresskt.rc",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p21 bs=4096 ;"
    },
    {
      "key": "tf201",
      "legacy_versions": [
        "5.5.0.4",
        "5.8.2.0"
      ],
      "version": "5.8.3.4",
      "name": "Asus Transformer Prime",
      "lunch": "cm_tf201-userdebug",
      "init": "init.cardhu.rc",
      "touch_version": "5.8.3.4",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p4 ;"
    },
    {
      "key": "maserati",
      "legacy_versions": [

      ],
      "officially_supported": false,
      "version": "5.0.2.0",
      "name": "Motorola Droid 4",
      "reboot_recovery": "rm /cache/recovery/command ; echo 1 > /data/.recovery_mode ; sync ; reboot ;",
      "init": "init.mapphone_cdma.rc"
    },
    {
      "key": "spyder",
      "legacy_versions": [

      ],
      "officially_supported": false,
      "version": "5.0.2.0",
      "name": "Motorola RAZR",
      "reboot_recovery": "rm /cache/recovery/command ; echo 1 > /data/.recovery_mode ; sync ; reboot ;",
      "init": "init.mapphone_cdma.rc"
    },
    {
      "key": "marvelc",
      "legacy_versions": [

      ],
      "version": "5.0.2.8",
      "name": "HTC Wildfire S CDMA",
      "lunch": "full_marvelc-eng",
      "init": "init.marvelc.rc"
    },
    {
      "key": "tf101",
      "legacy_versions": [
        "5.5.0.4",
        "5.8.1.9",
        "5.8.2.0",
        "5.8.2.1",
        "5.8.3.4"
      ],
      "version": "6.0.1.3",
      "name": "Asus Transformer",
      "lunch": "cm_tf101-userdebug",
      "init": "init.ventana.rc",
      "touch_version": "5.8.3.4",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p4 ;"
    },
    {
      "key": "p930",
      "legacy_versions": [
        "5.8.2.0",
        "6.0.1.4"
      ],
      "version": "6.0.1.5",
      "name": "LG Nitro HD / LG P930 (AT&T)",
      "lunch": "cm_p930-userdebug",
      "init": "bootimages/boot_logo_00000.rle",
      "touch_version": "6.0.1.5",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p13 ;"
    },
    {
      "key": "i777",
      "readonly_recovery": true,
      "legacy_versions": [
        "5.8.1.8"
      ],
      "version": "6.0.1.0",
      "name": "Samsung Galaxy S2 (SGH-I777)",
      "inits": [
        "init.smdkc210.rc",
        "init.smdk4210.rc"
      ],
      "lunch": "cm_i777-userdebug",
      "init": "init.smdkc210.rc",
      "touch_version": "6.0.1.0"
    },
    {
      "key": "pico",
      "legacy_versions": [

      ],
      "version": "5.0.2.8",
      "name": "HTC Pico",
      "lunch": "full_pico-eng",
      "init": "init.pico.rc"
    },
    {
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
      "version": "5.8.4.0",
      "name": "HTC One X (GSM)",
      "lunch": "cm_endeavoru-userdebug",
      "init": "ueventd.endeavoru.rc",
      "touch_version": "5.8.4.0",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p5 bs=4096 ;"
    },
    {
      "key": "ville",
      "legacy_versions": [
        "5.5.0.4",
        "5.8.2.1",
        "5.8.2.2",
        "5.8.2.3",
        "5.8.3.1",
        "6.0.2.9"
      ],
      "version": "6.0.3.1",
      "name": "HTC One S",
      "lunch": "cm_ville-userdebug",
      "init": "init.ville.rc",
      "touch_version": "6.0.3.1",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p22 bs=4096 ;"
    },
    {
      "key": "p1",
      "legacy_versions": [

      ],
      "officially_supported": false,
      "version": "5.8.2.1",
      "name": "Samsung Galaxy Tab (MTD and GSM)",
      "reboot_recovery": "echo 1 > /cache/.startrecovery ; sync ; reboot ;",
      "init": "init.p1.rc"
    },
    {
      "key": "p1c",
      "legacy_versions": [

      ],
      "officially_supported": false,
      "version": "5.8.2.1",
      "name": "Samsung Galaxy Tab (MTD and CDMA)",
      "reboot_recovery": "echo 1 > /cache/.startrecovery ; sync ; reboot ;",
      "init": "init.p1c.rc"
    },
    {
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
      "version": "6.0.3.6",
      "name": "Google Galaxy Nexus (Sprint)",
      "lunch": "cm_toroplus-userdebug",
      "init": "init.tuna.rc",
      "touch_version": "6.0.3.6",
      "flash_recovery": "dd if=%s of=/dev/block/platform/omap/omap_hsmmc.0/by-name/recovery bs=4096 ;"
    },
    {
      "key": "p4wifi",
      "legacy_versions": [
        "4.0.0.4",
        "5.8.3.1",
        "6.0.2.9",
        "6.0.3.0"
      ],
      "version": "6.0.3.1",
      "name": "Samsung Galaxy Tab 10.1 (Wifi)",
      "lunch": "cm_p4wifi-userdebug",
      "init": "ueventd.p3.rc",
      "touch_version": "6.0.3.1",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p2 ; "
    },
    {
      "key": "wingray",
      "legacy_versions": [
        "5.8.3.1",
        "6.0.2.9"
      ],
      "version": "6.0.3.1",
      "name": "Motorola XOOM (Wi-Fi only)",
      "lunch": "cm_wingray-userdebug",
      "init": "init.wingray.rc",
      "touch_version": "6.0.3.1",
      "flash_recovery": "dd if=%s of=/dev/block/platform/sdhci-tegra.3/by-name/recovery ; "
    },
    {
      "key": "marquee",
      "legacy_versions": [

      ],
      "version": "5.0.2.8",
      "name": "LG Marquee",
      "lunch": "full_marquee-eng",
      "init": "init.omap.post_boot.sh",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p4 bs=4096 ; "
    },
    {
      "key": "ignite",
      "legacy_versions": [

      ],
      "version": "5.0.2.8",
      "name": "LG Ignite",
      "lunch": "full_ignite-eng",
      "init": "init.omap.post_boot.sh",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p4 bs=4096 ; "
    },
    {
      "key": "ms840",
      "legacy_versions": [

      ],
      "version": "5.8.3.1",
      "name": "LG Connect 4G MS840",
      "lunch": "full_ms840-userdebug",
      "init": "init.target.rc",
      "touch_version": "5.8.3.1",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p13 bs=4096 ; "
    },
    {
      "key": "vs840",
      "legacy_versions": [

      ],
      "version": "5.8.3.1",
      "name": "LG Lucid VS840",
      "lunch": "full_vs840-userdebug",
      "init": "init.target.rc",
      "touch_version": "5.8.3.1",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p13 bs=4096 ; "
    },
    {
      "key": "jewel",
      "legacy_versions": [
        "5.8.3.4",
        "5.8.3.4"
      ],
      "version": "5.8.3.5",
      "name": "HTC EVO LTE",
      "lunch": "cm_jewel-userdebug",
      "init": "init.jewel.rc",
      "touch_version": "5.8.3.5",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p22 bs=4096 ; "
    },
    {
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
      "version": "6.0.3.6",
      "name": "Samsung Galaxy S3 (GT-I9300)",
      "ro.product.devices": [
        "i9300",
        "m0"
      ],
      "lunch": "cm_i9300-userdebug",
      "init": "ueventd.smdk4x12.rc",
      "touch_version": "6.0.3.6",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p6 bs=4096 ; "
    },
    {
      "key": "skyrocket",
      "legacy_versions": [
        "5.8.4.3",
        "6.0.1.0",
        "6.0.1.4"
      ],
      "version": "6.0.3.1",
      "name": "Samsung Skyrocket",
      "lunch": "cm_skyrocket-userdebug",
      "init": "init.qcom.usb.rc",
      "touch_version": "6.0.3.3",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p22 bs=4096 ; "
    },
    {
      "key": "quincyatt",
      "legacy_versions": [
        "5.8.4.3",
        "5.8.4.8",
        "6.0.3.1"
      ],
      "version": "6.0.3.6",
      "name": "Samsung Galaxy Note (AT&T)",
      "lunch": "cm_quincyatt-userdebug",
      "init": "init.qcom.usb.rc",
      "touch_version": "6.0.3.6",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p22 bs=4096 ; "
    },
    {
      "key": "e400",
      "legacy_versions": [

      ],
      "version": "5.8.4.5",
      "name": "LG Optimus L3",
      "lunch": "cm_e400-userdebug",
      "init": "init.e0.rc",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p17 bs=4096 ; "
    },
    {
      "key": "primou",
      "readonly_recovery": true,
      "legacy_versions": [

      ],
      "version": "5.8.4.5",
      "name": "HTC One V",
      "lunch": "cm_primou-userdebug",
      "init": "init.primou.rc"
    },
    {
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
        "6.0.3.6"
      ],
      "version": "6.0.3.7",
      "name": "Samsung Galaxy S3 (AT&T)",
      "lunch": "cm_d2att-userdebug",
      "init": "init.d2att.rc",
      "touch_version": "6.0.3.7",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p18 bs=4096 ; "
    },
    {
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
        "6.0.3.6"
      ],
      "version": "6.0.3.7",
      "name": "Samsung Galaxy S3 (T-Mobile)",
      "ro.product.devices": [
        "d2tmo",
        "d2lteMetroPCS"
      ],
      "lunch": "cm_d2tmo-userdebug",
      "init": "init.d2tmo.rc",
      "touch_version": "6.0.3.7",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p18 bs=4096 ; "
    },
    {
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
        "6.0.3.6"
      ],
      "version": "6.0.3.7",
      "name": "Samsung Galaxy S3 (Sprint)",
      "lunch": "cm_d2spr-userdebug",
      "init": "init.d2spr.rc",
      "touch_version": "6.0.3.7",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p18 bs=4096 ; "
    },
    {
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
        "6.0.3.6"
      ],
      "version": "6.0.3.7",
      "name": "Samsung Galaxy S3 (Verizon)",
      "twrp_version": "2.4.3.0",
      "lunch": "cm_d2vzw-userdebug",
      "init": "init.d2vzw.rc",
      "touch_version": "6.0.3.7",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p18 bs=4096 ; "
    },
    {
      "key": "primoc",
      "readonly_recovery": true,
      "legacy_versions": [
        "5.8.4.6",
        "5.8.4.7"
      ],
      "version": "5.8.4.7",
      "name": "HTC One V (CDMA)",
      "lunch": "full_primoc-userdebug",
      "init": "init.primoc.rc",
      "touch_version": "5.8.4.7"
    },
    {
      "key": "grouper",
      "legacy_versions": [
        "6.0.0.6",
        "6.0.1.0",
        "6.0.1.9",
        "6.0.2.3",
        "6.0.3.1",
        "6.0.3.4",
        "6.0.3.5"
      ],
      "version": "6.0.3.6",
      "name": "Google Nexus 7",
      "lunch": "cm_grouper-userdebug",
      "init": "init.grouper.rc",
      "touch_version": "6.0.3.8",
      "flash_recovery": "dd if=%s of=/dev/block/platform/sdhci-tegra.3/by-name/SOS bs=4096 ; "
    },
    {
      "key": "su640",
      "legacy_versions": [

      ],
      "version": "6.0.1.0",
      "name": "LG Optimus LTE (SKT)",
      "lunch": "cm_su640-userdebug",
      "init": "init.su640.rc",
      "touch_version": "6.0.1.0",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p13 bs=4096 ; "
    },
    {
      "key": "i9100g",
      "legacy_versions": [

      ],
      "officially_supported": false,
      "version": "6.0.1.0",
      "name": "Samsung Galaxy S2 (GT-I9100G)",
      "lunch": "cm_i9100g-userdebug",
      "init": "init.t1.rc"
    },
    {
      "key": "p3100",
      "legacy_versions": [
        "6.0.1.1",
        "6.0.2.3"
      ],
      "version": "6.0.2.7",
      "name": "Samsung Galaxy Tab 2 (GT-P3100)",
      "lunch": "cm_p3100-userdebug",
      "init": "init.espresso.rc",
      "touch_version": "6.0.2.7",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p6 bs=4096 ; "
    },
    {
      "key": "p3110",
      "legacy_versions": [
        "6.0.1.1",
        "6.0.2.3"
      ],
      "version": "6.0.2.7",
      "name": "Samsung Galaxy Tab 2 (GT-P3110)",
      "lunch": "cm_p3110-userdebug",
      "init": "init.espresso.rc",
      "touch_version": "6.0.2.7",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p6 bs=4096 ; "
    },
    {
      "key": "p3113",
      "legacy_versions": [
        "6.0.1.1"
      ],
      "version": "6.0.2.3",
      "name": "Samsung Galaxy Tab 2 (GT-P3113)",
      "lunch": "cm_p3113-userdebug",
      "init": "init.espresso.rc",
      "touch_version": "6.0.2.3",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p6 bs=4096 ; "
    },
    {
      "key": "p5100",
      "legacy_versions": [
        "6.0.1.1",
        "6.0.2.3"
      ],
      "version": "6.0.2.7",
      "name": "Samsung Galaxy Tab 2 (GT-P5100)",
      "lunch": "cm_p5100-userdebug",
      "init": "init.espresso10.rc",
      "touch_version": "6.0.2.7",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p6 bs=4096 ; "
    },
    {
      "key": "p5110",
      "legacy_versions": [
        "6.0.1.1",
        "6.0.2.3"
      ],
      "version": "6.0.2.7",
      "name": "Samsung Galaxy Tab 2 (GT-P5110)",
      "lunch": "cm_p5110-userdebug",
      "init": "init.espresso10.rc",
      "touch_version": "6.0.2.7",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p6 bs=4096 ; "
    },
    {
      "key": "p5113",
      "legacy_versions": [
        "6.0.1.1"
      ],
      "version": "6.0.2.3",
      "name": "Samsung Galaxy Tab 2 (GT-P5113)",
      "lunch": "cm_p5113-userdebug",
      "init": "init.espresso10.rc",
      "touch_version": "6.0.2.3",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p6 bs=4096 ; "
    },
    {
      "key": "vs920",
      "legacy_versions": [

      ],
      "version": "6.0.1.1",
      "name": "LG Spectrum 4G",
      "inits": [
        "init.target.rc",
        "init.iproj.rc",
        "init.i_vzw.rc",
        "init.iprj.rc"
      ],
      "lunch": "cm_vs920-userdebug",
      "init": "init.target.rc",
      "touch_version": "6.0.1.1",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p13 bs=4096 ; "
    },
    {
      "key": "x500",
      "legacy_versions": [

      ],
      "version": "6.0.1.1",
      "name": "Score & Score M",
      "lunch": "cm_x500-userdebug",
      "init": "init.zte.rc",
      "touch_version": "6.0.1.1"
    },
    {
      "key": "vs910",
      "legacy_versions": [

      ],
      "version": "6.0.1.1",
      "name": "LG Revolution 4G",
      "inits": [
        "init.qcom.rc",
        "init.bryce.rc"
      ],
      "lunch": "cm_vs910-userdebug",
      "init": "init.qcom.rc",
      "touch_version": "6.0.1.1",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p14 bs=4096 ; "
    },
    {
      "key": "ms910",
      "legacy_versions": [
        "5.0.2.8"
      ],
      "version": "6.0.1.1",
      "name": "LG Esteeem 4G",
      "inits": [
        "init.qcom.rc",
        "init.bryce.rc"
      ],
      "lunch": "cm_ms910-userdebug",
      "init": "init.qcom.rc",
      "touch_version": "6.0.1.1",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p14 bs=4096 ; "
    },
    {
      "key": "ms695",
      "legacy_versions": [
        "6.0.1.0"
      ],
      "version": "6.0.1.1",
      "name": "LG Optimus M+",
      "inits": [
        "init.qcom.rc",
        "init.m3.rc"
      ],
      "lunch": "cm_ms695-userdebug",
      "init": "init.qcom.rc",
      "touch_version": "6.0.1.1",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p17 bs=4096 ; "
    },
    {
      "key": "p1l",
      "legacy_versions": [

      ],
      "officially_supported": false,
      "version": "5.8.2.1",
      "name": "Samsung Galaxy Tab (MTD and GSM - L)",
      "reboot_recovery": "echo 1 > /cache/.startrecovery ; sync ; reboot ;",
      "init": "init.p1.rc"
    },
    {
      "key": "p1n",
      "legacy_versions": [

      ],
      "officially_supported": false,
      "version": "5.8.2.1",
      "name": "Samsung Galaxy Tab (MTD and GSM - N)",
      "reboot_recovery": "echo 1 > /cache/.startrecovery ; sync ; reboot ;",
      "init": "init.p1.rc"
    },
    {
      "key": "d2usc",
      "legacy_versions": [
        "6.0.1.2",
        "6.0.2.3",
        "6.0.2.8",
        "6.0.2.9",
        "6.0.3.0",
        "6.0.3.1",
        "6.0.3.6"
      ],
      "version": "6.0.3.7",
      "name": "Samsung Galaxy S3 (US Cellular)",
      "lunch": "cm_d2usc-userdebug",
      "init": "init.d2usc.rc",
      "touch_version": "6.0.3.7",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p18 bs=4096 ; "
    },
    {
      "key": "asanti",
      "legacy_versions": [

      ],
      "version": "6.0.1.3",
      "name": "Motorola Photon Q",
      "inits": [
        "init.asanti.rc",
        "init.sprint.rc"
      ],
      "lunch": "cm_asanti-userdebug",
      "init": "init.mmi.usb.rc",
      "flash_recovery": "dd if=%s of=/dev/block/platform/msm_sdcc.1/by-name/recovery bs=4096 ; "
    },
    {
      "key": "p350",
      "legacy_versions": [
        "6.0.1.3",
        "6.0.1.4"
      ],
      "version": "6.0.1.5",
      "name": "LG Optimus Me",
      "lunch": "cm_p350-userdebug",
      "init": "init.pecan.rc"
    },
    {
      "key": "p5att",
      "legacy_versions": [

      ],
      "version": "6.0.1.4",
      "name": "Samsung Galaxy Tab 8.9 (AT&T)",
      "lunch": "cm_p5att-userdebug",
      "init": "fstab.qcom",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p22 bs=4096 ; "
    },
    {
      "key": "t769",
      "legacy_versions": [

      ],
      "version": "6.0.1.4",
      "name": "Samsung Galaxy S Blaze 4G",
      "lunch": "cm_t769-userdebug",
      "init": "init.target.rc",
      "touch_version": "6.0.1.4",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p22 bs=4096 ; "
    },
    {
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
      "version": "6.0.3.7",
      "name": "Samsung Galaxy S3 (MetroPCS)",
      "inits": [
        "init.carrier.rc",
        "init.d2mtr.rc"
      ],
      "lunch": "cm_d2mtr-userdebug",
      "init": "init.carrier.rc",
      "touch_version": "6.0.3.7",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p18 bs=4096 ; "
    },
    {
      "key": "tf700t",
      "legacy_versions": [
        "6.0.1.8",
        "6.0.2.3"
      ],
      "version": "6.0.3.1",
      "name": "Asus Transformer Pad Infinity",
      "reboot_recovery": "echo 'boot-recovery' | dd of=/dev/block/mmcblk0p3 seek=6144 bs=1 ; reboot ; ",
      "lunch": "cm_tf700t-userdebug",
      "init": "init.tf700t.rc",
      "touch_version": "6.0.3.1",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p4 bs=4096 ; "
    },
    {
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
        "6.0.3.1"
      ],
      "version": "6.0.3.5",
      "name": "Google Nexus 10",
      "lunch": "cm_manta-userdebug",
      "init": "init.manta.rc",
      "touch_version": "6.0.3.5",
      "flash_recovery": "dd if=%s of=/dev/block/platform/dw_mmc.0/by-name/recovery bs=4096 ; "
    },
    {
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
        "6.0.3.5"
      ],
      "version": "6.0.3.6",
      "name": "Google Nexus 4",
      "lunch": "cm_mako-userdebug",
      "init": "init.mako.rc",
      "touch_version": "6.0.3.6",
      "flash_recovery": "dd if=%s of=/dev/block/platform/msm_sdcc.1/by-name/recovery bs=4096 ; "
    },
    {
      "key": "dlx",
      "legacy_versions": [
        "6.0.1.5",
        "6.0.1.9",
        "6.0.2.3",
        "6.0.2.7",
        "6.0.2.8",
        "6.0.3.0"
      ],
      "version": "6.0.3.1",
      "name": "HTC Droid DNA",
      "lunch": "cm_dlx-userdebug",
      "init": "init.debug_mfgkernel.rc",
      "touch_version": "6.0.3.1",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p20 bs=4096 ; "
    },
    {
      "key": "n7100",
      "legacy_versions": [
        "6.0.1.9",
        "6.0.3.0",
        "6.0.3.1"
      ],
      "version": "6.0.3.6",
      "name": "Samsung Galaxy Note 2 (HSPA+)",
      "lunch": "cm_n7100-userdebug",
      "init": "init.smdk4x12.rc",
      "touch_version": "6.0.3.6",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p9 bs=4096 ; "
    },
    {
      "key": "a700",
      "legacy_versions": [
        "6.0.2.3"
      ],
      "version": "6.0.3.1",
      "name": "Acer A700",
      "lunch": "cm_a700-userdebug",
      "init": "init.picasso_mf.rc",
      "touch_version": "6.0.3.1",
      "flash_recovery": "dd if=%s of=/dev/block/platform/sdhci-tegra.3/by-name/SOS bs=4096 ; "
    },
    {
      "key": "tilapia",
      "legacy_versions": [
        "6.0.2.3",
        "6.0.3.1",
        "6.0.3.5"
      ],
      "version": "6.0.3.6",
      "name": "Google Nexus 7 (GSM)",
      "lunch": "cm_tilapia-userdebug",
      "init": "init.tilapia.rc",
      "touch_version": "6.0.3.6",
      "flash_recovery": "dd if=%s of=/dev/block/platform/sdhci-tegra.3/by-name/SOS bs=4096 ; "
    },
    {
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
      "version": "6.0.3.6",
      "name": "Samsung Galaxy Note 2 (LTE)",
      "lunch": "cm_t0lte-userdebug",
      "init": "init.t0lte.rc",
      "touch_version": "6.0.3.6",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p9 bs=4096 ; "
    },
    {
      "key": "p720",
      "legacy_versions": [

      ],
      "version": "6.0.2.3",
      "name": "LG Optimus 3DMax",
      "reboot_recovery": "echo '518 R 1' > /sys/kernel/kobject_lge_nvdata/dynamic_nvdata_raw_write ; reboot ; ",
      "inits": [
        "init.lgep720board.rc",
        "/bootimages/battery_charging_01.rle"
      ],
      "lunch": "cm_p720-userdebug",
      "touch_version": "6.0.2.3",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p6 ; "
    },
    {
      "key": "d2cri",
      "legacy_versions": [
        "6.0.2.7",
        "6.0.2.8",
        "6.0.2.9",
        "6.0.3.0",
        "6.0.3.1",
        "6.0.3.6"
      ],
      "version": "6.0.3.7",
      "name": "Samsung Galaxy S3 (Cricket)",
      "lunch": "cm_d2cri-userdebug",
      "init": "init.d2cri.rc",
      "touch_version": "6.0.3.7",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p18 bs=4096 ; "
    },
    {
      "key": "runnymede",
      "legacy_versions": [

      ],
      "version": "6.0.2.7",
      "name": "HTC Sensation XL",
      "lunch": "cm_runnymede-userdebug",
      "init": "init.runnymede.rc",
      "touch_version": "6.0.2.7",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p21 bs=4096 ; "
    },
    {
      "key": "presto",
      "legacy_versions": [

      ],
      "version": "6.0.2.7",
      "name": "Pantech Presto",
      "lunch": "cm_presto-userdebug",
      "init": "init.presto.rc",
      "touch_version": "6.0.2.7",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p18 bs=4096 ; "
    },
    {
      "key": "warp2",
      "legacy_versions": [

      ],
      "version": "6.0.2.7",
      "name": "ZTE Sequent",
      "lunch": "cm_warp2-userdebug",
      "init": "init.warp2.rc",
      "touch_version": "6.0.2.7",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p13 bs=4096 ; "
    },
    {
      "key": "steelhead",
      "legacy_versions": [
        "6.0.2.7"
      ],
      "version": "6.0.3.1",
      "name": "Google Nexus Q",
      "lunch": "cm_steelhead-userdebug",
      "init": "init.steelhead.rc",
      "flash_recovery": "dd if=%s of=/dev/block/platform/omap/omap_hsmmc.0/by-name/recovery bs=4096 ; "
    },
    {
      "key": "prevail2spr",
      "legacy_versions": [

      ],
      "version": "6.0.2.7",
      "name": "Samsung Prevail 2 (Boost Mobile)",
      "inits": [
        "init.carrier.rc",
        "init.prevail2spr.rc"
      ],
      "lunch": "cm_prevail2spr-userdebug",
      "touch_version": "6.0.2.7",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p15 bs=4096 ; "
    },
    {
      "key": "golden",
      "legacy_versions": [

      ],
      "version": "6.0.2.7",
      "name": "Samsung Galaxy S3 Mini",
      "lunch": "cm_golden-userdebug",
      "init": "init.golden.rc",
      "touch_version": "6.0.2.7",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p21 bs=4096 ; "
    },
    {
      "key": "fireball",
      "legacy_versions": [
        "6.0.2.8",
        "6.0.2.9",
        "6.0.3.1"
      ],
      "version": "6.0.3.3",
      "name": "HTC Droid Incredible 4G LTE",
      "lunch": "cm_fireball-userdebug",
      "init": "init.fireball.rc",
      "touch_version": "6.0.3.3",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p22 bs=4096 ; "
    },
    {
      "key": "puccinilte",
      "legacy_versions": [

      ],
      "version": "6.0.2.8",
      "name": "HTC Jetstream",
      "lunch": "cm_puccinilte-userdebug",
      "init": "init.puccinilte.rc",
      "touch_version": "6.0.2.8",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p23 bs=4096 ; "
    },
    {
      "key": "p700",
      "legacy_versions": [

      ],
      "version": "6.0.2.8",
      "name": "LG Optimus L7",
      "lunch": "cm_p700-userdebug",
      "init": "init.u0.rc",
      "touch_version": "6.0.2.8",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p17 bs=4096 ; "
    },
    {
      "key": "m7",
      "legacy_versions": [
        "6.0.2.8",
        "6.0.3.0"
      ],
      "version": "6.0.3.1",
      "name": "HTC One",
      "lunch": "cm_m7-userdebug",
      "init": "init.m7.rc",
      "touch_version": "6.0.3.1",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p34 bs=4096 ; "
    },
    {
      "key": "dlxu",
      "legacy_versions": [
        "6.0.2.8",
        "6.0.3.0"
      ],
      "version": "6.0.3.1",
      "name": "HTC Butterfly (dlxu)",
      "lunch": "cm_dlxu-userdebug",
      "init": "init.dlxu.rc",
      "touch_version": "6.0.3.1",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p20 bs=4096 ; "
    },
    {
      "key": "dlxub1",
      "legacy_versions": [
        "6.0.2.8",
        "6.0.3.0"
      ],
      "version": "6.0.3.1",
      "name": "HTC Butterfly (dlxub1)",
      "lunch": "cm_dlxub1-userdebug",
      "init": "init.dlxub1.rc",
      "touch_version": "6.0.3.1",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p20 bs=4096 ; "
    },
    {
      "key": "dlxj",
      "legacy_versions": [
        "6.0.2.8",
        "6.0.3.0"
      ],
      "version": "6.0.3.1",
      "name": "HTC Butterfly J",
      "lunch": "cm_dlxj-userdebug",
      "init": "init.dlxj.rc",
      "touch_version": "6.0.3.1",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p20 bs=4096 ; "
    },
    {
      "key": "e610",
      "legacy_versions": [

      ],
      "version": "6.0.2.8",
      "name": "LG Optimus L5",
      "lunch": "cm_e610-userdebug",
      "init": "init.m4.rc",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p17 bs=4096 ; "
    },
    {
      "key": "evita",
      "legacy_versions": [
        "6.0.2.8"
      ],
      "version": "6.0.3.1",
      "name": "HTC One X (AT&T)",
      "lunch": "cm_evita-userdebug",
      "init": "init.evita.rc",
      "touch_version": "6.0.3.1",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p22 bs=4096 ; "
    },
    {
      "key": "p4",
      "legacy_versions": [
        "6.0.2.9",
        "6.0.3.0"
      ],
      "version": "6.0.3.1",
      "name": "Samsung Galaxy Tab 10.1",
      "ro.product.devices": [
        "p4",
        "GT-P7500",
        "p7500"
      ],
      "lunch": "cm_p4-userdebug",
      "init": "init.p4.rc",
      "touch_version": "6.0.3.1",
      "flash_recovery": "dd if=%s of=/dev/block/platform/sdhci-tegra.3/by-num/p2 bs=4096 ; "
    },
    {
      "key": "p4tmo",
      "legacy_versions": [
        "6.0.2.9",
        "6.0.3.0"
      ],
      "version": "6.0.3.1",
      "name": "Samsung Galaxy Tab 10.1 (T-Mobile)",
      "lunch": "cm_p4tmo-userdebug",
      "init": "init.p4tmo.rc",
      "touch_version": "6.0.3.1",
      "flash_recovery": "dd if=%s of=/dev/block/platform/sdhci-tegra.3/by-num/p2 bs=4096 ; "
    },
    {
      "key": "p4vzw",
      "legacy_versions": [
        "6.0.2.9",
        "6.0.3.0"
      ],
      "version": "6.0.3.1",
      "name": "Samsung Galaxy Tab 10.1 (Verizon)",
      "lunch": "cm_p4vzw-userdebug",
      "init": "init.p4vzw.rc",
      "touch_version": "6.0.3.1",
      "flash_recovery": "dd if=%s of=/dev/block/platform/sdhci-tegra.3/by-num/p2 bs=4096 ; "
    },
    {
      "key": "p760",
      "legacy_versions": [
        "6.0.2.9"
      ],
      "version": "6.0.3.1",
      "name": "LG Optimus L9",
      "lunch": "cm_p760-userdebug",
      "init": "init.u0.rc",
      "touch_version": "6.0.3.1",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p4 bs=4096 ; "
    },
    {
      "key": "i9305",
      "legacy_versions": [
        "6.0.2.9",
        "6.0.3.1",
        "6.0.3.2"
      ],
      "version": "6.0.3.6",
      "name": "Samsung Galaxy S3 LTE (GT-I9305)",
      "lunch": "cm_i9305-userdebug",
      "init": "ueventd.smdk4x12.rc",
      "touch_version": "6.0.3.6",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p9 bs=4096 ; "
    },
    {
      "key": "p3",
      "legacy_versions": [
        "6.0.2.9"
      ],
      "version": "6.0.3.1",
      "name": "Samsung Galaxy Tab 10.1v",
      "lunch": "cm_p3-userdebug",
      "init": "init.p3.rc",
      "touch_version": "6.0.3.1",
      "flash_recovery": "dd if=%s of=/dev/block/platform/sdhci-tegra.3/by-num/p2 bs=4096 ; "
    },
    {
      "key": "n8013",
      "legacy_versions": [
        "6.0.3.0",
        "6.0.3.1"
      ],
      "version": "6.0.3.6",
      "name": "Samsung Galaxy Note 10.1",
      "lunch": "cm_n8013-userdebug",
      "init": "init.n8013.rc",
      "touch_version": "6.0.3.6",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p6 bs=4096 ; "
    },
    {
      "key": "i605",
      "legacy_versions": [

      ],
      "version": "6.0.3.0",
      "name": "Samsung Galaxy Note 2 (Verizon)",
      "ro.product.devices": [
        "i605",
        "t0ltevzw"
      ],
      "lunch": "cm_i605-userdebug",
      "init": "init.i605.rc",
      "touch_version": "6.0.3.0",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p9 bs=4096 ; "
    },
    {
      "key": "l900",
      "legacy_versions": [
        "6.0.3.0"
      ],
      "version": "6.0.3.1",
      "name": "Samsung Galaxy Note 2 (Sprint)",
      "ro.product.devices": [
        "l900",
        "t0ltespr"
      ],
      "lunch": "cm_l900-userdebug",
      "init": "init.l900.rc",
      "touch_version": "6.0.3.1",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p9 bs=4096 ; "
    },
    {
      "key": "t0lteatt",
      "legacy_versions": [
        "6.0.3.0",
        "6.0.3.1"
      ],
      "version": "6.0.3.6",
      "name": "Samsung Galaxy Note 2 (AT&T)",
      "lunch": "cm_t0lteatt-userdebug",
      "init": "init.t0lteatt.rc",
      "touch_version": "6.0.3.6",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p9 bs=4096 ; "
    },
    {
      "key": "t0ltetmo",
      "legacy_versions": [
        "6.0.3.0",
        "6.0.3.1",
        "6.0.3.6"
      ],
      "version": "6.0.3.7",
      "name": "Samsung Galaxy Note 2 (T-Mobile)",
      "lunch": "cm_t0ltetmo-userdebug",
      "init": "init.t0ltetmo.rc",
      "touch_version": "6.0.3.7",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p9 bs=4096 ; "
    },
    {
      "key": "e975",
      "legacy_versions": [

      ],
      "version": "6.0.3.0",
      "name": "LG Optimus G Intl (E975)",
      "lunch": "cm_e975-userdebug",
      "init": "init.geehrc.rc",
      "touch_version": "6.0.3.0",
      "flash_recovery": "dd if=%s of=/dev/block/platform/msm_sdcc.1/by-name/recovery bs=4096 ; "
    },
    {
      "key": "p880",
      "legacy_versions": [

      ],
      "version": "6.0.3.1",
      "name": "LG Optimus 4X HD",
      "reboot_recovery": "echo 'boot-recovery' | dd of=/dev/block/mmcblk0p5 bs=1 count=13 ; reboot ; ",
      "lunch": "cm_p880-userdebug",
      "init": "init.x3.rc",
      "touch_version": "6.0.3.1",
      "flash_recovery": "dd if=%s of=/dev/block/platform/sdhci-tegra.3/by-name/SOS bs=4096 ; "
    },
    {
      "key": "quincytmo",
      "legacy_versions": [
        "6.0.3.1"
      ],
      "version": "6.0.3.6",
      "name": "Samsung Galaxy Note (T-Mobile)",
      "lunch": "cm_quincytmo-userdebug",
      "init": "init.quincytmo.rc",
      "touch_version": "6.0.3.6",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p22 bs=4096 ; "
    },
    {
      "key": "n8000",
      "legacy_versions": [
        "6.0.3.1"
      ],
      "version": "6.0.3.6",
      "name": "Samsung Galaxy Note 10.1 (GSM)",
      "lunch": "cm_n8000-userdebug",
      "init": "init.n8000.rc",
      "touch_version": "6.0.3.6",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p6 bs=4096 ; "
    },
    {
      "key": "find5",
      "legacy_versions": [

      ],
      "version": "6.0.3.1",
      "name": "Oppo Find5",
      "lunch": "cm_find5-userdebug",
      "init": "init.find5.rc",
      "touch_version": "6.0.3.1",
      "flash_recovery": "dd if=%s of=/dev/block/platform/msm_sdcc.1/by-name/recovery bs=4096 ; "
    },
    {
      "key": "jfltetmo",
      "legacy_versions": [
        "6.0.3.2"
      ],
      "version": "6.0.3.6",
      "name": "Samsung Galaxy S4 (T-Mobile)",
      "ro.product.devices": [
        "jfltetmo",
        "jflteMetroPCS"
      ],
      "lunch": "cm_jfltetmo-userdebug",
      "init": "init.jfltetmo.rc",
      "touch_version": "6.0.3.6",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p21 bs=4096 ; "
    },
    {
      "key": "jfltecan",
      "legacy_versions": [
        "6.0.3.2"
      ],
      "version": "6.0.3.6",
      "name": "Samsung Galaxy S4 (Canada/Bell)",
      "lunch": "cm_jfltecan-userdebug",
      "init": "init.jfltecan.rc",
      "touch_version": "6.0.3.6",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p21 bs=4096 ; "
    },
    {
      "key": "V8000",
      "legacy_versions": [

      ],
      "version": "6.0.3.2",
      "name": "ZTE Engage",
      "lunch": "cm_V8000-userdebug",
      "init": "init.zte.rc",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p17 bs=4096 ; "
    },
    {
      "key": "i9500",
      "legacy_versions": [

      ],
      "version": "6.0.3.2",
      "name": "Samsung Galaxy S4 (i9500)",
      "lunch": "cm_i9500-userdebug",
      "init": "init.i9500.rc",
      "touch_version": "6.0.3.2",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p10 bs=4096 ; "
    },
    {
      "key": "everest",
      "legacy_versions": [

      ],
      "version": "6.0.3.2",
      "name": "Motorola Xoom (GSM)",
      "lunch": "cm_everest-userdebug",
      "init": "init.everest.rc",
      "touch_version": "6.0.3.2",
      "flash_recovery": "dd if=%s of=/dev/block/platform/sdhci-tegra.3/by-name/recovery bs=4096 ; "
    },
    {
      "key": "protou",
      "legacy_versions": [

      ],
      "version": "6.0.3.2",
      "name": "HTC Desire X",
      "lunch": "cm_protou-userdebug",
      "init": "init.protou.rc",
      "touch_version": "6.0.3.2",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p21 bs=4096 ; "
    },
    {
      "key": "m7spr",
      "legacy_versions": [
        "6.0.3.2"
      ],
      "version": "6.0.3.6",
      "name": "HTC One (Sprint)",
      "ro.product.devices": [
        "m7spr",
        "m7wls"
      ],
      "lunch": "cm_m7spr-userdebug",
      "init": "init.m7spr.rc",
      "touch_version": "6.0.3.6",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p36 bs=4096 ; "
    },
    {
      "key": "m7tmo",
      "legacy_versions": [
        "6.0.3.2"
      ],
      "version": "6.0.3.6",
      "name": "HTC One (T-Mobile)",
      "lunch": "cm_m7tmo-userdebug",
      "init": "init.m7tmo.rc",
      "touch_version": "6.0.3.6",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p34 bs=4096 ; "
    },
    {
      "key": "m7att",
      "legacy_versions": [
        "6.0.3.2",
        "6.0.3.5"
      ],
      "version": "6.0.3.6",
      "name": "HTC One (AT&T)",
      "lunch": "cm_m7att-userdebug",
      "init": "init.m7att.rc",
      "touch_version": "6.0.3.6",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p34 bs=4096 ; "
    },
    {
      "key": "jflteatt",
      "legacy_versions": [
        "6.0.3.2"
      ],
      "version": "6.0.3.6",
      "name": "Samsung Galaxy S4 (AT&T)",
      "lunch": "cm_jflteatt-userdebug",
      "init": "init.jflteatt.rc",
      "touch_version": "6.0.3.6",
      "flash_recovery": "dd if=/dev/block/platform/msm_sdcc.1/by-name/aboot of=/sdcard/clockworkmod/aboot.img; /data/data/com.koushikdutta.rommanager/files/loki_patch recovery /sdcard/clockworkmod/aboot.img %s /sdcard/clockworkmod/recovery.lok ; /data/data/com.koushikdutta.rommanager/files/loki_flash recovery /sdcard/clockworkmod/recovery.lok ; "
    },
    {
      "key": "m7ul",
      "legacy_versions": [
        "6.0.3.2"
      ],
      "version": "6.0.3.6",
      "name": "HTC One (non-US GSM)",
      "lunch": "cm_m7ul-userdebug",
      "init": "init.m7ul.rc",
      "touch_version": "6.0.3.6",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p34 bs=4096 ; "
    },
    {
      "key": "jfltevzw",
      "legacy_versions": [
        "6.0.3.2"
      ],
      "version": "6.0.3.6",
      "name": "Samsung Galaxy S4 (Verizon)",
      "lunch": "cm_jfltevzw-userdebug",
      "init": "init.jfltevzw.rc",
      "touch_version": "6.0.3.6",
      "flash_recovery": "dd if=/dev/block/platform/msm_sdcc.1/by-name/aboot of=/sdcard/clockworkmod/aboot.img; /data/data/com.koushikdutta.rommanager/files/loki_patch recovery /sdcard/clockworkmod/aboot.img %s /sdcard/clockworkmod/recovery.lok ; /data/data/com.koushikdutta.rommanager/files/loki_flash recovery /sdcard/clockworkmod/recovery.lok ; "
    },
    {
      "key": "jfltespr",
      "legacy_versions": [
        "6.0.3.2"
      ],
      "version": "6.0.3.6",
      "name": "Samsung Galaxy S4 (Sprint)",
      "lunch": "cm_jfltespr-userdebug",
      "init": "init.jfltespr.rc",
      "touch_version": "6.0.3.6",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p21 bs=4096 ; "
    },
    {
      "key": "jflteusc",
      "legacy_versions": [

      ],
      "version": "6.0.3.2",
      "name": "Samsung Galaxy S4 (US Cellular)",
      "lunch": "cm_jflteusc-userdebug",
      "init": "init.jflteusc.rc",
      "touch_version": "6.0.3.2",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p21 bs=4096 ; "
    },
    {
      "key": "jfltexx",
      "legacy_versions": [
        "6.0.3.2",
        "6.0.3.3",
        "6.0.3.5"
      ],
      "version": "6.0.3.6",
      "name": "Samsung Galaxy S4 (i9505)",
      "lunch": "cm_jfltexx-userdebug",
      "init": "init.jfltexx.rc",
      "touch_version": "6.0.3.6",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p21 bs=4096 ; "
    },
    {
      "key": "jfltecri",
      "legacy_versions": [
        "6.0.3.2"
      ],
      "version": "6.0.3.6",
      "name": "Samsung Galaxy S4 (Cricket)",
      "lunch": "cm_jfltecri-userdebug",
      "init": "init.jfltecri.rc",
      "touch_version": "6.0.3.6",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p21 bs=4096 ; "
    },
    {
      "key": "lgl55c",
      "legacy_versions": [

      ],
      "version": "6.0.3.3",
      "name": "LG Optimus Q (LGL55C Tracfone)",
      "lunch": "cm_lgl55c-userdebug",
      "init": "init.gelato.rc",
      "flash_recovery": "dd if=%s of=/dev/block/mtdblock2 bs=4096 ; "
    },
    {
      "key": "jfltecsp",
      "legacy_versions": [
        "6.0.3.5"
      ],
      "version": "6.0.3.6",
      "name": "Samsung Galaxy S4 (C Spire)",
      "lunch": "cm_jfltecsp-userdebug",
      "init": "init.jfltecsp.rc",
      "touch_version": "6.0.3.6",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p21 bs=4096 ; "
    },
    {
      "key": "m660",
      "legacy_versions": [

      ],
      "version": "6.0.3.5",
      "name": "Huawei Ascend Q",
      "lunch": "cm_m660-userdebug",
      "init": "init.highmem.rc",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p16 ; "
    },
    {
      "key": "flo",
      "legacy_versions": [

      ],
      "version": "6.0.3.7",
      "name": "Google Nexus 7 (2013)",
      "lunch": "cm_flo-userdebug",
      "init": "init.flo.rc",
      "touch_version": "6.0.3.7",
      "flash_recovery": "dd if=%s of=/dev/block/platform/msm_sdcc.1/by-name/recovery bs=4096 ; "
    }
  ],
  "version": "2.5.0.1",
  "use_in_app": false,
  "manifest": "http://developer.clockworkmod.com/merge",
  "ad_network": "admob",
  "recovery_url": "http://download2.clockworkmod.com/recoveries/recovery-clockwork-%s-%s.img",
  "manifest_signature": "O8+Kc2mdQz0e/AjCQn6Rw6fK5Kr5LZItJ474Ua3gF2o4IgdCQZXIbwCHIo6xeqY3pVEGtjYmmyO1PkRYcGqq2rB2wQM8SoKFl/70vG0ihEZ5TDeruKUgxVVSNM3e09kBvCxYK89GWqVWkNHtvTu1T1F9w6FilzCsNFSAXHD0Bos=",
  "recovery_twrp_url": "http://download2.clockworkmod.com/twrp/openrecovery-twrp-%s-%s.img"
}