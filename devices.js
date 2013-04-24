{
  "manifest": "http://developer.clockworkmod.com/merge",
  "ad_network": "admob",
  "keywords": "phone accessories,droid,gadgets,bluetooth headset,car charger,sd card",
  "owners": {
    "layhertony@gmail.com": true,
    "keaneyw@gmail.com": true,
    "ferguson.david@gmail.com": true,
    "utkanos@gmail.com": true,
    "njgreb@gmail.com": true,
    "attn1.repo@gmail.com": true,
    "playfulgod@gmail.com": true,
    "daniel.hillenbrand@codeworkx.de": true,
    "bigbeeshane@gmail.com": true,
    "cvpcsm@gmail.com": true,
    "arcee@cyanogenmod.com": true,
    "koush@clockworkmod.com": true
  },
  "devices": [
    {
      "key": "sholes",
      "init": "init.sholes.rc",
      "name": "Motorola Droid",
      "alternate_recovery": {
        "url": "http://koush.kanged.net/cm/recoveries/sprecovery.img",
        "clockwork": false,
        "name": "SPRecovery 0.99.3b"
      },
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
      "key": "sapphire",
      "init": "init.sapphire.rc",
      "name": "HTC MyTouch 3G",
      "alternate_recovery": {
        "url": "http://files.androidspin.com/downloads.php?dir=amon_ra/RECOVERY/&file=recovery-RA-sapphire-v1.7.0G.img",
        "clockwork": false,
        "name": "RA Recovery v1.7.0G"
      },
      "legacy_versions": [
        "2.5.0.7",
        "2.5.1.4",
        "2.5.1.3",
        "2.5.1.1"
      ],
      "version": "2.5.0.7"
    },
    {
      "key": "magic",
      "init": "init.sapphire.rc",
      "name": "HTC Magic",
      "alternate_recovery": {
        "url": "http://files.androidspin.com/downloads.php?dir=amon_ra/RECOVERY/&file=recovery-RA-sapphire-v1.7.0H.img",
        "clockwork": false,
        "name": "RA Recovery v1.7.0H"
      },
      "legacy_versions": [
        "2.5.0.7",
        "2.5.1.4",
        "2.5.1.3",
        "2.5.1.1"
      ],
      "version": "2.5.0.7"
    },
    {
      "key": "dream",
      "init": "init.trout.rc",
      "name": "HTC G1/Dream",
      "alternate_recovery": {
        "url": "http://files.androidspin.com/downloads.php?dir=amon_ra/RECOVERY/&file=recovery-RA-dream-v1.7.0.img",
        "clockwork": false,
        "name": "RA Recovery v1.7.0"
      },
      "legacy_versions": [
        "2.5.0.7",
        "2.5.1.4",
        "2.5.1.3",
        "2.5.1.1"
      ],
      "version": "2.5.0.7"
    },
    {
      "key": "passion",
      "lunch": "cyanogen_passion-eng",
      "init": "init.mahimahi.rc",
      "name": "Google Nexus One",
      "alternate_recovery": {
        "url": "http://files.androidspin.com/downloads.php?dir=amon_ra/RECOVERY/&file=recovery-RA-passion-v2.2.1.img",
        "clockwork": false,
        "name": "RA Recovery v2.2.1"
      },
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
      "key": "hero",
      "init": "init.hero.rc",
      "name": "HTC Hero (GSM)",
      "alternate_recovery": {
        "url": "http://files.androidspin.com/downloads.php?dir=amon_ra/RECOVERY/&file=recovery-RA-hero-v1.7.0.1.img",
        "clockwork": false,
        "name": "RA Recovery v1.7.0.1"
      },
      "legacy_versions": [
        "2.5.0.7",
        "2.5.1.4",
        "2.5.1.3",
        "2.5.1.1"
      ],
      "version": "2.5.0.7"
    },
    {
      "key": "heroc",
      "init": "init.heroc.rc",
      "name": "HTC Hero (CDMA)",
      "alternate_recovery": {
        "url": "http://www.androidspin.com/downloads.php?dir=amon_ra/RECOVERY/&file=recovery-RA-heroc-v1.6.2.img",
        "clockwork": false,
        "name": "RA Recovery v1.6.2"
      },
      "legacy_versions": [
        "2.5.0.7",
        "2.5.1.4",
        "2.5.1.3",
        "2.5.1.1"
      ],
      "version": "2.5.0.7"
    },
    {
      "key": "supersonic",
      "lunch": "cyanogen_supersonic-eng",
      "init": "init.supersonic.rc",
      "name": "HTC Evo",
      "touch_version": "5.8.0.1",
      "alternate_recovery": {
        "url": "http://files.androidspin.com/downloads.php?dir=amon_ra/RECOVERY/&file=recovery-RA-supersonic-v2.3.img",
        "clockwork": false,
        "name": "RA Recovery v2.3"
      },
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
      "key": "legend",
      "readonly_recovery": true,
      "lunch": "cyanogen_legend-eng",
      "init": "init.legend.rc",
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
      "key": "bravo",
      "lunch": "cyanogen_bravo-eng",
      "init": "init.bravo.rc",
      "name": "HTC Desire",
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
      "version": "5.0.2.0"
    },
    {
      "key": "bravoc",
      "lunch": "cyanogen_bravoc-eng",
      "init": "init.bravoc.rc",
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
      "key": "pulsemini",
      "init": "init.qcom.rc",
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
      "key": "inc",
      "lunch": "cyanogen_inc-eng",
      "init": "init.inc.rc",
      "name": "HTC Incredible (CDMA)",
      "alternate_recovery": {
        "url": "http://dl.dropbox.com/u/12949506/RomManager/recovery-RA-inc-3.02.img",
        "clockwork": false,
        "name": "RA_GNM Recovery v3.02"
      },
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
      "key": "liberty",
      "readonly_recovery": true,
      "init": "init.liberty.rc",
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
      "key": "desirec",
      "readonly_recovery": true,
      "init": "init.desirec.rc",
      "name": "Motorola Droid Eris",
      "alternate_recovery": {
        "url": "http://www.androidspin.com/downloads.php?dir=amon_ra/RECOVERY/&file=recovery-RA-eris-v1.6.2.img",
        "clockwork": false,
        "name": "RA Recovery v1.6.2"
      },
      "legacy_versions": [
        "2.5.0.7",
        "2.5.1.4",
        "2.5.1.3",
        "2.5.1.1"
      ],
      "version": "2.5.0.7"
    },
    {
      "key": "buzz",
      "readonly_recovery": true,
      "lunch": "cyanogen_buzz-eng",
      "init": "init.buzz.rc",
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
      "key": "streak",
      "init": "init.qcom.rc",
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
      "key": "espresso",
      "readonly_recovery": true,
      "init": "init.latte.rc",
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
      "key": "galaxys",
      "readonly_recovery": true,
      "init": "lpm.rc",
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
      "key": "fascinate",
      "readonly_recovery": true,
      "init": "init.smdkc110.rc",
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
      "key": "vibrant",
      "readonly_recovery": true,
      "init": "init.smdkc110.rc",
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
      "key": "captivate",
      "readonly_recovery": true,
      "init": "init.smdkc110.rc",
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
      "key": "pulse",
      "init": "init.qcom.rc",
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
      "key": "aloha",
      "init": "init.aloha.rc",
      "name": "LG Ally",
      "alternate_recovery": {
        "url": "http://dl.dropbox.com/u/12949506/RomManager/recovery-RA-aloha-2.2.2-GNM.img",
        "clockwork": false,
        "name": "RA_GNM Recovery v2.2.2"
      },
      "legacy_versions": [
        "2.5.0.7",
        "2.5.1.4",
        "2.5.1.3",
        "2.5.1.1"
      ],
      "version": "2.5.0.7"
    },
    {
      "key": "milestone",
      "readonly_recovery": true,
      "init": "init.mapphone_cdma.rc",
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
      "key": "droidx",
      "readonly_recovery": true,
      "reboot_recovery": "rm /cache/recovery/command ; echo 1 > /data/.recovery_mode ; sync ; reboot ;",
      "init": "init.mapphone_cdma.rc",
      "flash_recovery": "dd if=%s of=/preinstall/recovery/recovery.zip ; ",
      "name": "Motorola Droid X",
      "legacy_versions": [
        "2.5.0.7"
      ],
      "version": "5.0.2.0"
    },
    {
      "key": "shadow",
      "readonly_recovery": true,
      "lunch": "cyanogen_shadow-eng",
      "reboot_recovery": "rm /cache/recovery/command ; echo 1 > /data/.recovery_mode ; sync ; reboot ;",
      "init": "init.mapphone_cdma.rc",
      "flash_recovery": "dd if=%s of=/preinstall/recovery/recovery.zip ; ",
      "name": "Motorola Droid X (2nd-init)",
      "legacy_versions": [
        "2.5.0.7"
      ],
      "version": "5.0.2.0"
    },
    {
      "key": "salsa",
      "init": "init.salsa.rc",
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
      "key": "z71",
      "init": "init.qcom.rc",
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
      "key": "vision",
      "lunch": "cyanogen_vision-eng",
      "init": "init.vision.rc",
      "flash_recovery": "dd if=/dev/zero of=/dev/block/mmcblk0p21 bs=4096 ; dd if=%s of=/dev/block/mmcblk0p21 bs=4096 ; ",
      "name": "HTC G2",
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
      "version": "5.0.2.7"
    },
    {
      "key": "glacier",
      "lunch": "cyanogen_glacier-eng",
      "init": "init.glacier.rc",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p21 ; ",
      "name": "HTC MyTouch 4G",
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
      "version": "5.0.2.0"
    },
    {
      "key": "ace",
      "lunch": "cyanogen_ace-eng",
      "init": "init.spade.rc",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p21 ; ",
      "name": "HTC Desire HD",
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
      "version": "5.0.2.0"
    },
    {
      "key": "morrison",
      "lunch": "cyanogen_morrison-eng",
      "init": "init.morrison.rc",
      "name": "Motorola Cliq",
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
      "version": "5.0.2.0"
    },
    {
      "key": "droid2",
      "readonly_recovery": true,
      "lunch": "cyanogen_droid2-eng",
      "reboot_recovery": "rm /cache/recovery/command ; echo 1 > /data/.recovery_mode ; sync ; reboot ;",
      "init": "init.mapphone_cdma.rc",
      "flash_recovery": "dd if=%s of=/preinstall/recovery/recovery.zip ; ",
      "name": "Motorola Droid 2",
      "legacy_versions": [
        "2.5.0.8"
      ],
      "version": "5.0.2.0"
    },
    {
      "key": "one",
      "init": "init.qcom.rc",
      "name": "Geeksphone ONE",
      "alternate_recovery": {
        "url": "http://dl.dropbox.com/u/10355648/recovery-ONE-1_6.img",
        "clockwork": false,
        "name": "ONE Recovery v1.6"
      },
      "legacy_versions": [
        "2.5.1.4",
        "2.5.1.3",
        "2.5.1.1",
        "2.5.1.0"
      ],
      "version": "2.5.1.3"
    },
    {
      "key": "vega",
      "reboot_recovery": "echo start > /proc/ota ; ",
      "init": "init_recovery.rc",
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
      "key": "att_tab",
      "readonly_recovery": true,
      "init": "init.smdkc110.rc",
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
      "key": "tmobile_tab",
      "readonly_recovery": true,
      "init": "init.smdkc110.rc",
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
      "key": "FM6",
      "init": "init.qcom.rc",
      "name": "Commtiva Link N700, Spice MI700, and more",
      "alternate_recovery": {
        "url": "http://dl.dropbox.com/u/15816725/MI700-recovery-V1_3.img",
        "clockwork": false,
        "name": "MI700 Recovery v1.6"
      },
      "legacy_versions": [
        "2.5.1.4",
        "2.5.1.3",
        "2.5.1.1",
        "2.5.1.0"
      ],
      "version": "2.5.1.2"
    },
    {
      "key": "crespo",
      "lunch": "cm_crespo-userdebug",
      "init": "init.herring.rc",
      "name": "Google Nexus S",
      "touch_version": "6.0.3.1",
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
        "6.0.2.5"
      ],
      "version": "6.0.3.1"
    },
    {
      "key": "droidpro",
      "readonly_recovery": true,
      "init": "init. mapphone_cdma.rc",
      "name": "Motorola Droid Pro",
      "legacy_versions": [
        "2.5.0.8"
      ],
      "version": "2.5.0.8"
    },
    {
      "key": "ascend",
      "init": "init.qcom.rc",
      "name": "Huawei Ascend",
      "legacy_versions": [
        "3.0.0.5",
        "3.0.0.4"
      ],
      "version": "3.0.0.5"
    },
    {
      "key": "blade",
      "lunch": "cyanogen_blade-eng",
      "init": "init.blade.rc",
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
      "key": "encore",
      "lunch": "cm_encore-userdebug",
      "reboot_recovery": "dd if=/dev/zero of=/rom/bcb bs=64 count=1 ; echo 'recovery' >> /rom/bcb ; reboot ;",
      "init": "env.txt",
      "flash_recovery": "busybox mount -orw,remount / ; mkdir /boot ; busybox mount /dev/block/mmcblk0p1 /boot ; busybox unzip -p %1$s ramdisk-recovery.ub > /boot/uRecRam ; busybox unzip -p %1$s kernel > /boot/uRecImg ; busybox umount /boot ; rmdir /boot; busybox mount -oro,remount / ; ",
      "name": "Nook Color",
      "touch_version": "6.0.3.1",
      "inits": [
        "env.txt",
        "init.encore.rc"
      ],
      "legacy_versions": [
        "3.0.1.0",
        "3.0.0.9",
        "3.0.0.8",
        "3.0.0.6",
        "3.0.1.0",
        "3.0.2.8",
        "3.2.0.0",
        "3.2.0.0",
        "3.2.0.1",
        "3.2.0.1",
        "3.2.0.1"
      ],
      "version": "6.0.3.1"
    },
    {
      "key": "click",
      "lunch": "cyanogen_click-eng",
      "init": "init.bahamas.rc",
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
      "key": "a7",
      "readonly_recovery": true,
      "init": "init_recovery.rc",
      "name": "Elocity A7",
      "legacy_versions": [
        "3.0.0.8"
      ],
      "version": "3.0.0.8"
    },
    {
      "key": "zero",
      "init": "init.zero.rc",
      "name": "Geeksphone Zero",
      "legacy_versions": [
        "3.0.1.3"
      ],
      "version": "3.0.1.3"
    },
    {
      "key": "speedy",
      "lunch": "cyanogen_speedy-eng",
      "init": "init.speedy.rc",
      "name": "HTC Evo Shift",
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
      "version": "5.0.2.0"
    },
    {
      "key": "captivatemtd",
      "officially_supported": false,
      "reboot_recovery": "echo 1 > /cache/.startrecovery ; sync ; reboot ;",
      "init": "init.aries.rc",
      "name": "Samsung Captivate (MTD)",
      "legacy_versions": [

      ]
    },
    {
      "key": "showcasemtd",
      "officially_supported": false,
      "reboot_recovery": "echo 1 > /cache/.startrecovery ; sync ; reboot ;",
      "init": "init.aries.rc",
      "name": "Samsung Showcase (MTD)",
      "legacy_versions": [

      ]
    },
    {
      "key": "mesmerizemtd",
      "officially_supported": false,
      "reboot_recovery": "echo 1 > /cache/.startrecovery ; sync ; reboot ;",
      "init": "init.aries.rc",
      "name": "Samsung Mesmerize (MTD)",
      "legacy_versions": [

      ]
    },
    {
      "key": "fascinatemtd",
      "officially_supported": false,
      "reboot_recovery": "echo 1 > /cache/.startrecovery ; sync ; reboot ;",
      "init": "init.aries.rc",
      "name": "Samsung Fascinate (MTD)",
      "legacy_versions": [

      ]
    },
    {
      "key": "vibrantmtd",
      "officially_supported": false,
      "reboot_recovery": "echo 1 > /cache/.startrecovery ; sync ; reboot ;",
      "init": "init.aries.rc",
      "name": "Samsung Vibrant (MTD)",
      "legacy_versions": [

      ]
    },
    {
      "key": "galaxysbmtd",
      "officially_supported": false,
      "reboot_recovery": "echo 1 > /cache/.startrecovery ; sync ; reboot ;",
      "init": "init.aries.rc",
      "name": "Samsung GalaxyS i9000B (MTD)",
      "legacy_versions": [

      ]
    },
    {
      "key": "galaxysmtd",
      "officially_supported": false,
      "reboot_recovery": "echo 1 > /cache/.startrecovery ; sync ; reboot ;",
      "init": "init.aries.rc",
      "name": "Samsung GalaxyS i9000 (MTD)",
      "legacy_versions": [

      ]
    },
    {
      "key": "epic4g",
      "readonly_recovery": true,
      "lunch": "full_epic4g-eng",
      "init": "lpm.rc",
      "name": "Samsung Epic4G",
      "legacy_versions": [

      ],
      "version": "5.0.2.7"
    },
    {
      "key": "streak7",
      "init": "init.tinyandroid.rc",
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
      "key": "mecha",
      "lunch": "cyanogen_mecha-eng",
      "init": "init.mecha.rc",
      "name": "HTC Thunderbolt",
      "touch_version": "5.8.0.2",
      "alternate_recovery": {
        "url": "http://dl.dropbox.com/u/12949506/RomManager/recovery-ra-mecha-3.05.img",
        "clockwork": false,
        "name": "RA_GNM Recovery v3.05"
      },
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
      "key": "ideos",
      "init": "init.ideos.rc",
      "name": "Huawei U8150 Ideos",
      "legacy_versions": [
        "3.0.2.4"
      ],
      "version": "3.0.2.4"
    },
    {
      "key": "stingray",
      "lunch": "cm_stingray-userdebug",
      "init": "init.stingray.rc",
      "flash_recovery": "dd if=%s of=/dev/block/platform/sdhci-tegra.3/by-name/recovery ; ",
      "name": "Motorola XOOM",
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
      "version": "6.0.3.1"
    },
    {
      "key": "leo",
      "init": "init.leo.rc",
      "name": "HTC HD2",
      "legacy_versions": [
        "3.0.2.5",
        "3.0.2.4",
        "3.0.2.5"
      ],
      "version": "3.1.0.0"
    },
    {
      "key": "zeppelin",
      "lunch": "cyanogen_zeppelin-eng",
      "init": "init.zeppelin.rc",
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
      "key": "saga",
      "lunch": "full_saga-eng",
      "init": "init.saga.rc",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p21 ; ",
      "name": "HTC Desire S",
      "touch_version": "5.8.1.5",
      "legacy_versions": [
        "3.0.2.6",
        "5.0.1.9"
      ],
      "version": "5.0.2.0"
    },
    {
      "key": "p999",
      "readonly_recovery": true,
      "lunch": "cyanogen_p999-eng",
      "reboot_recovery": "echo 'boot-recovery' | dd of=/dev/block/mmcblk0p3 seek=6144 bs=1 ; reboot ; ",
      "init": "init_recovery.rc",
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
      "key": "p990",
      "lunch": "cm_p990-userdebug",
      "reboot_recovery": "echo 'boot-recovery' | dd of=/dev/block/mmcblk0p3 seek=6144 bs=1 ; reboot ; ",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p7 ; ",
      "name": "LG Optimus 2X",
      "touch_version": "6.0.3.1",
      "inits": [
        "init_recovery.rc",
        "/bootimages/opening_01.rle"
      ],
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
      "key": "crespo4g",
      "lunch": "cm_crespo4g-userdebug",
      "init": "init.herring.rc",
      "name": "Google Nexus S 4G",
      "touch_version": "6.0.3.1",
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
        "6.0.2.5"
      ],
      "version": "6.0.3.1"
    },
    {
      "key": "thunderg",
      "lunch": "full_thunderg-eng",
      "init": "init.thunderg.rc",
      "name": "LG Optimus One (old BB)",
      "alternate_recovery": {
        "url": "http://dl.dropbox.com/u/12949506/RomManager/recovery-RA-thunderg-2.2.1-GNM.img",
        "clockwork": false,
        "name": "RA_GNM Recovery v2.2.1"
      },
      "legacy_versions": [
        "3.1.0.0",
        "5.0.0.8",
        "5.0.1.0"
      ],
      "version": "5.0.2.0"
    },
    {
      "key": "p500",
      "lunch": "cyanogen_p500-eng",
      "init": "init.thunderg.rc",
      "name": "LG Optimus One",
      "legacy_versions": [
        "5.0.2.0"
      ],
      "version": "5.0.2.7"
    },
    {
      "key": "u8220",
      "init": "init.qcom.rc",
      "name": "Huawei U8220/U8230",
      "legacy_versions": [

      ],
      "version": "3.1.0.1"
    },
    {
      "key": "charge",
      "readonly_recovery": true,
      "init": "init.smdkc110.rc",
      "name": "Samsung Charge",
      "legacy_versions": [

      ],
      "version": "3.1.0.1"
    },
    {
      "key": "umts_jordan",
      "officially_supported": false,
      "init": "init.mapphone_umts.rc",
      "name": "Motorola Defy",
      "legacy_versions": [

      ]
    },
    {
      "key": "galaxys4g",
      "readonly_recovery": true,
      "init": "init.smdkc110.rc",
      "name": "Samsung Galaxy S 4G",
      "legacy_versions": [
        "3.2.0.0"
      ],
      "version": "3.2.0.0"
    },
    {
      "key": "galaxys2",
      "readonly_recovery": true,
      "init": "init.smdkc210.rc",
      "name": "Samsung Galaxy S2",
      "touch_version": "5.8.1.5",
      "ro.product.device": [
        "i9100",
        "galaxys2"
      ],
      "inits": [
        "init.smdkc210.rc",
        "init.smdk4210.rc"
      ],
      "legacy_versions": [
        "4.0.1.4",
        "v4.0.1.4"
      ],
      "version": "4.0.1.5"
    },
    {
      "key": "i9100",
      "officially_supported": false,
      "lunch": "cm_i9100-userdebug",
      "init": "init.smdk4210.rc",
      "name": "Samsung Galaxy S2",
      "ro.product.device": [
        "i9100",
        "galaxys2"
      ],
      "inits": [
        "init.smdkc210.rc",
        "init.smdk4210.rc"
      ],
      "legacy_versions": [

      ],
      "version": "6.0.1.0"
    },
    {
      "key": "n7000",
      "readonly_recovery": true,
      "lunch": "cm_n7000-userdebug",
      "init": "init.smdk4210.rc",
      "name": "Samsung Galaxy Note (GT-N7000)",
      "legacy_versions": [
        "6.0.1.0"
      ],
      "version": "6.0.1.2"
    },
    {
      "key": "sidekick4g",
      "readonly_recovery": true,
      "init": "init.smdkc110.rc",
      "name": "Samsung Sidekick 4G",
      "legacy_versions": [

      ],
      "version": "4.0.0.2"
    },
    {
      "key": "vivo",
      "lunch": "cyanogen_vivo-eng",
      "init": "init.vivo.rc",
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
      "key": "vivow",
      "lunch": "cyanogen_vivow-eng",
      "init": "init.vivow.rc",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p21 ; ",
      "name": "HTC Incredible 2",
      "alternate_recovery": {
        "url": "http://dl.dropbox.com/u/12949506/RomManager/recovery-ra-vivow-3.05.img",
        "clockwork": false,
        "name": "RA_GNM Recovery v3.05"
      },
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
      "key": "p920",
      "lunch": "cm_p920-userdebug",
      "reboot_recovery": "echo '518 R 1' > /sys/kernel/kobject_lge_nvdata/dynamic_nvdata_raw_write ; reboot ; ",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p6 ; ",
      "name": "LG Optimus 3D",
      "touch_version": "6.0.1.9",
      "inits": [
        "init.p920.rc",
        "/bootimages/opening_01.rle"
      ],
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
      "key": "galaxyace",
      "init": "init.galaxyace.rc",
      "flash_recovery": "/data/data/com.koushikdutta.rommanager/files/flash_image recoveryonly %s ; ",
      "name": "Samsung Galaxy Ace",
      "legacy_versions": [

      ],
      "version": "4.0.0.9"
    },
    {
      "key": "olympus",
      "lunch": "generic_olympus-eng",
      "init": "init_prep_keypad.sh",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p10 ; ",
      "name": "Motorola Atrix 4G",
      "touch_version": "5.8.1.8",
      "inits": [
        "init_prep_keypad.sh",
        "init.olympus.rc"
      ],
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
      "key": "smb_a1002",
      "init": "init_recovery.rc",
      "flash_recovery": "/data/data/com.koushikdutta.rommanager/files/tegra_flash_image recovery %s ; ",
      "name": "Viewsonic GTablet (smb_a1002)",
      "legacy_versions": [

      ],
      "version": "4.0.1.5"
    },
    {
      "key": "shooter",
      "lunch": "htc_shooter-eng",
      "init": "init.shooter.rc",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p22 ; ",
      "name": "HTC EVO 3D",
      "touch_version": "5.8.0.2",
      "legacy_versions": [
        "4.0.1.5",
        "5.0.0.0",
        "5.0.1.0"
      ],
      "version": "5.0.2.0"
    },
    {
      "key": "pyramid",
      "lunch": "full_pyramid-eng",
      "init": "init.pyramid.rc",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p21 ; ",
      "name": "HTC Sensation",
      "touch_version": "5.8.0.9",
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
      "key": "ascend2",
      "init": "init.qcom.rc",
      "name": "Huawei Ascend 2 (M865)",
      "inits": [
        "init.qcom.rc",
        "init.huawei.rc"
      ],
      "legacy_versions": [

      ],
      "version": "4.0.1.5"
    },
    {
      "key": "a70",
      "init": "init.qcom.rc",
      "name": "Micromax A70",
      "legacy_versions": [

      ],
      "version": "4.0.1.5"
    },
    {
      "key": "galaxygio",
      "readonly_recovery": true,
      "init": "init.galaxygio.rc",
      "name": "Samsung Galaxy Gio",
      "legacy_versions": [

      ],
      "version": "4.0.1.5"
    },
    {
      "key": "indulge910",
      "readonly_recovery": true,
      "init": "init.smdkc110.rc",
      "name": "Samsung Indulge 910",
      "legacy_versions": [

      ],
      "version": "4.0.1.5"
    },
    {
      "key": "indulge915",
      "readonly_recovery": true,
      "init": "init.smdkc110.rc",
      "name": "Samsung Indulge 915",
      "legacy_versions": [

      ],
      "version": "4.0.1.5"
    },
    {
      "key": "p970",
      "lunch": "cm_p970-userdebug",
      "init": "/bootimages/ON_480x800_08fps_0000.rle",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p4 ; ",
      "name": "LG Optimus Black",
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
      "version": "6.0.1.4"
    },
    {
      "key": "shooteru",
      "lunch": "full_shooteru-eng",
      "init": "init.shooteru.rc",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p21 ; ",
      "name": "HTC EVO 3D (GSM)",
      "touch_version": "5.8.0.2",
      "legacy_versions": [
        "5.0.1.6",
        "5.0.1.7",
        "5.0.1.8",
        "5.0.1.9"
      ],
      "version": "5.0.2.0"
    },
    {
      "key": "droid2we",
      "readonly_recovery": true,
      "lunch": "cyanogen_droid2we-eng",
      "reboot_recovery": "rm /cache/recovery/command ; echo 1 > /data/.recovery_mode ; sync ; reboot ;",
      "init": "init.mapphone_cdma.rc",
      "flash_recovery": "dd if=%s of=/preinstall/recovery/recovery.zip ; ",
      "name": "Motorola Droid 2 Global",
      "legacy_versions": [

      ],
      "version": "5.0.2.3"
    },
    {
      "key": "targa",
      "readonly_recovery": true,
      "lunch": "generic_targa-eng",
      "reboot_recovery": "rm /cache/recovery/command ; echo 1 > /data/.recovery_mode ; sync ; reboot ;",
      "init": "init.mapphone_cdma.rc",
      "flash_recovery": "dd if=%s of=/preinstall/recovery/recovery.zip ; ",
      "name": "Motorola Droid Bionic",
      "legacy_versions": [
        "5.0.2.3",
        "5.0.2.4"
      ],
      "version": "5.0.2.5"
    },
    {
      "key": "daytona",
      "readonly_recovery": true,
      "lunch": "generic_daytona-eng",
      "reboot_recovery": "rm /cache/recovery/command ; echo 1 > /data/.recovery_mode ; sync ; reboot ;",
      "init": "init.mapphone_cdma.rc",
      "flash_recovery": "dd if=%s of=/preinstall/recovery/recovery.zip ; ",
      "name": "Motorola Droid X2",
      "legacy_versions": [
        "5.0.2.3",
        "5.0.2.4"
      ],
      "version": "5.0.2.5"
    },
    {
      "key": "solana",
      "readonly_recovery": true,
      "lunch": "full_solana-eng",
      "reboot_recovery": "rm /cache/recovery/command ; echo 1 > /data/.recovery_mode ; sync ; reboot ;",
      "init": "init.mapphone_cdma.rc",
      "flash_recovery": "dd if=%s of=/preinstall/recovery/recovery.zip ; ",
      "name": "Motorola Droid 3",
      "legacy_versions": [
        "5.0.2.5"
      ],
      "version": "5.0.2.6"
    },
    {
      "key": "motus",
      "lunch": "cyanogen_motus-eng",
      "init": "init.motus.rc",
      "name": "Motorola Backflip",
      "legacy_versions": [

      ],
      "version": "5.0.2.6"
    },
    {
      "key": "tass",
      "readonly_recovery": true,
      "lunch": "tass-eng",
      "init": "init.gt-s5570.rc",
      "name": "Samsung Galaxy Mini",
      "legacy_versions": [

      ],
      "version": "5.0.2.6"
    },
    {
      "key": "u8800",
      "lunch": "huawei_u8800-eng",
      "init": "init.u8800.rc",
      "flash_recovery": "mount -o remount,rw -t vfat /dev/block/mmcblk0p1 /cust_backup ; cat %s > /cust_backup/image/recovery.img ;",
      "name": "Huawei U8800",
      "legacy_versions": [

      ],
      "version": "5.0.2.6"
    },
    {
      "key": "galaxys2att",
      "readonly_recovery": true,
      "lunch": "cyanogen_galaxys2att-eng",
      "init": "init.smdkc210.rc",
      "name": "Samsung Galaxy S2 (AT&T)",
      "touch_version": "5.8.1.5",
      "inits": [
        "init.smdkc210.rc",
        "init.smdk4210.rc"
      ],
      "legacy_versions": [

      ],
      "version": "5.0.2.6"
    },
    {
      "key": "hercules",
      "lunch": "cm_hercules-userdebug",
      "owners": {
        "jmprblckwing182@gmail.com": true
      },
      "init": "init.target.rc",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p22 bs=4096 ; ",
      "name": "Samsung Galaxy S2 (T-Mobile)",
      "touch_version": "6.0.3.1",
      "legacy_versions": [
        "5.0.2.6",
        "5.0.2.7",
        "6.0.1.4",
        "6.0.1.5",
        "6.0.1.9",
        "6.0.2.3",
        "6.0.2.7",
        "6.0.2.8",
        "6.0.2.9"
      ],
      "version": "6.0.3.1"
    },
    {
      "key": "epic4gtouch",
      "readonly_recovery": true,
      "lunch": "full_epic4gtouch-eng",
      "init": "init.smdkc210.rc",
      "name": "Samsung Epic 4G Touch",
      "touch_version": "5.8.1.5",
      "legacy_versions": [
        "5.0.2.6",
        "5.0.2.7"
      ],
      "version": "5.0.2.7"
    },
    {
      "key": "ruby",
      "lunch": "full_ruby-eng",
      "init": "init.ruby.rc",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p23 bs=4096 ; ",
      "name": "HTC Amaze",
      "legacy_versions": [

      ],
      "version": "5.0.2.6"
    },
    {
      "key": "galaxy5",
      "readonly_recovery": true,
      "lunch": "samsung_galaxy5-eng",
      "init": "init.gt-i5500.rc",
      "name": "Samsung Galaxy 5",
      "legacy_versions": [
        "5.0.2.8"
      ],
      "version": "5.0.2.8"
    },
    {
      "key": "mooncake",
      "lunch": "generic_mooncake-eng",
      "init": "init.mooncake.rc",
      "name": "ZTE Racer",
      "legacy_versions": [

      ],
      "version": "5.0.2.7"
    },
    {
      "key": "vzwtab",
      "readonly_recovery": true,
      "lunch": "full_vzwtab-eng",
      "init": "init.smdkc110.rc",
      "name": "Samsung Galaxy Tab (VZW)",
      "legacy_versions": [
        "5.0.2.7",
        "5.0.2.7",
        "5.0.2.7"
      ],
      "version": "5.0.2.7"
    },
    {
      "key": "doubleshot",
      "lunch": "full_doubleshot-eng",
      "init": "init.doubleshot.rc",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p21 bs=4096 ; ",
      "name": "HTC MyTouch 4G Slide",
      "legacy_versions": [
        "5.0.2.7",
        "5.0.2.7"
      ],
      "version": "5.0.2.7"
    },
    {
      "key": "maguro",
      "lunch": "cm_maguro-userdebug",
      "init": "init.tuna.rc",
      "flash_recovery": "dd if=%s of=/dev/block/platform/omap/omap_hsmmc.0/by-name/recovery bs=4096 ;",
      "name": "Google Galaxy Nexus (GSM)",
      "touch_version": "6.0.3.1",
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
        "6.0.2.3"
      ],
      "version": "6.0.3.1"
    },
    {
      "key": "toro",
      "lunch": "cm_toro-userdebug",
      "init": "init.tuna.rc",
      "flash_recovery": "dd if=%s of=/dev/block/platform/omap/omap_hsmmc.0/by-name/recovery bs=4096 ;",
      "name": "Google Galaxy Nexus (Verizon)",
      "touch_version": "6.0.3.1",
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
        "6.0.2.3"
      ],
      "version": "6.0.3.1"
    },
    {
      "key": "lg690",
      "lunch": "full_lg690-eng",
      "init": "init.thunderc.rc",
      "name": "LG Optimus C LW690 and Optimus M MS690",
      "legacy_versions": [

      ],
      "version": "5.0.2.7"
    },
    {
      "key": "c660",
      "lunch": "c660-eng",
      "init": "init.muscat.rc",
      "name": "LG Optimus Pro",
      "legacy_versions": [

      ],
      "version": "5.0.2.7"
    },
    {
      "key": "e510",
      "lunch": "e510-eng",
      "init": "init.univa.rc",
      "name": "LG Optimus Hub",
      "legacy_versions": [

      ],
      "version": "5.0.2.7"
    },
    {
      "key": "epicmtd",
      "officially_supported": false,
      "lunch": "cyanogen_epicmtd-eng",
      "reboot_recovery": "/system/xbin/busybox devmem 0x57fff800 32 0x5EC0B007; sync ; reboot ;",
      "init": "init.victory.rc",
      "name": "Samsung Epic4G (MTD)",
      "touch_version": "5.8.1.5",
      "legacy_versions": [

      ],
      "version": "5.0.2.7"
    },
    {
      "key": "holiday",
      "lunch": "full_holiday-eng",
      "init": "init.holiday.rc",
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
      "key": "e730",
      "lunch": "e730-eng",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p17 bs=4096 ;",
      "name": "LG Optimus SOL / TMo LG myTouch",
      "inits": [
        "init.victor.rc",
        "init.e739.rc"
      ],
      "legacy_versions": [

      ],
      "version": "5.0.2.7"
    },
    {
      "key": "marvel",
      "lunch": "generic_marvel-eng",
      "init": "init.marvel.rc",
      "name": "HTC Wildfire S",
      "legacy_versions": [
        "5.0.2.7"
      ],
      "version": "5.0.2.8"
    },
    {
      "key": "sunfire",
      "lunch": "full_sunfire-eng",
      "init": "init.mapphone_umts.rc",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p10 bs=4096 ;",
      "name": "Motorola Photon 4G",
      "inits": [
        "init.mapphone_umts.rc",
        "init.mapphone_cdma.rc"
      ],
      "legacy_versions": [
        "5.0.2.7"
      ],
      "version": "5.0.2.8"
    },
    {
      "key": "u8160",
      "lunch": "huawei_u8160-eng",
      "init": "init.u8160.rc",
      "name": "Huawei U8160",
      "inits": [
        "init.huawei.rc",
        "init.u8160.rc"
      ],
      "legacy_versions": [
        "5.0.2.8"
      ],
      "version": "5.0.2.8"
    },
    {
      "key": "vigor",
      "lunch": "cm_vigor-userdebug",
      "init": "init.vigor.rc",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p23 bs=4096 ;",
      "name": "HTC Rezound",
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
      "version": "6.0.3.1"
    },
    {
      "key": "express",
      "lunch": "full_express-userdebug",
      "init": "init.expresskt.rc",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p21 bs=4096 ;",
      "name": "HTC EVO View 4G",
      "legacy_versions": [

      ],
      "version": "5.8.1.5"
    },
    {
      "key": "tf201",
      "lunch": "cm_tf201-userdebug",
      "init": "init.cardhu.rc",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p4 ;",
      "name": "Asus Transformer Prime",
      "touch_version": "5.8.3.4",
      "legacy_versions": [
        "5.5.0.4",
        "5.8.2.0"
      ],
      "version": "5.8.3.4"
    },
    {
      "key": "maserati",
      "officially_supported": false,
      "reboot_recovery": "rm /cache/recovery/command ; echo 1 > /data/.recovery_mode ; sync ; reboot ;",
      "init": "init.mapphone_cdma.rc",
      "name": "Motorola Droid 4",
      "legacy_versions": [

      ],
      "version": "5.0.2.0"
    },
    {
      "key": "spyder",
      "officially_supported": false,
      "reboot_recovery": "rm /cache/recovery/command ; echo 1 > /data/.recovery_mode ; sync ; reboot ;",
      "init": "init.mapphone_cdma.rc",
      "name": "Motorola RAZR",
      "legacy_versions": [

      ],
      "version": "5.0.2.0"
    },
    {
      "key": "marvelc",
      "lunch": "full_marvelc-eng",
      "init": "init.marvelc.rc",
      "name": "HTC Wildfire S CDMA",
      "legacy_versions": [

      ],
      "version": "5.0.2.8"
    },
    {
      "key": "tf101",
      "lunch": "cm_tf101-userdebug",
      "init": "init.ventana.rc",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p4 ;",
      "name": "Asus Transformer",
      "touch_version": "5.8.3.4",
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
      "key": "p930",
      "lunch": "cm_p930-userdebug",
      "init": "bootimages/boot_logo_00000.rle",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p13 ;",
      "name": "LG Nitro HD / LG P930 (AT&T)",
      "touch_version": "6.0.1.5",
      "legacy_versions": [
        "5.8.2.0",
        "6.0.1.4"
      ],
      "version": "6.0.1.5"
    },
    {
      "key": "i777",
      "readonly_recovery": true,
      "lunch": "cm_i777-userdebug",
      "init": "init.smdkc210.rc",
      "name": "Samsung Galaxy S2 (SGH-I777)",
      "touch_version": "6.0.1.0",
      "inits": [
        "init.smdkc210.rc",
        "init.smdk4210.rc"
      ],
      "legacy_versions": [
        "5.8.1.8"
      ],
      "version": "6.0.1.0"
    },
    {
      "key": "pico",
      "lunch": "full_pico-eng",
      "init": "init.pico.rc",
      "name": "HTC Pico",
      "legacy_versions": [

      ],
      "version": "5.0.2.8"
    },
    {
      "key": "endeavoru",
      "lunch": "cm_endeavoru-userdebug",
      "init": "ueventd.endeavoru.rc",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p5 bs=4096 ;",
      "name": "HTC One X (GSM)",
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
      "version": "5.8.4.0"
    },
    {
      "key": "ville",
      "lunch": "cm_ville-userdebug",
      "init": "init.ville.rc",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p22 bs=4096 ;",
      "name": "HTC One S",
      "touch_version": "6.0.3.1",
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
      "key": "p1",
      "officially_supported": false,
      "reboot_recovery": "echo 1 > /cache/.startrecovery ; sync ; reboot ;",
      "init": "init.p1.rc",
      "name": "Samsung Galaxy Tab (MTD and GSM)",
      "legacy_versions": [

      ],
      "version": "5.8.2.1"
    },
    {
      "key": "p1c",
      "officially_supported": false,
      "reboot_recovery": "echo 1 > /cache/.startrecovery ; sync ; reboot ;",
      "init": "init.p1c.rc",
      "name": "Samsung Galaxy Tab (MTD and CDMA)",
      "legacy_versions": [

      ],
      "version": "5.8.2.1"
    },
    {
      "key": "toroplus",
      "lunch": "cm_toroplus-userdebug",
      "init": "init.tuna.rc",
      "flash_recovery": "dd if=%s of=/dev/block/platform/omap/omap_hsmmc.0/by-name/recovery bs=4096 ;",
      "name": "Google Galaxy Nexus (Sprint)",
      "touch_version": "6.0.3.1",
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
        "6.0.2.3"
      ],
      "version": "6.0.3.1"
    },
    {
      "key": "p4wifi",
      "lunch": "cm_p4wifi-userdebug",
      "init": "ueventd.p3.rc",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p2 ; ",
      "name": "Samsung Galaxy Tab 10.1 (Wifi)",
      "touch_version": "6.0.3.1",
      "legacy_versions": [
        "4.0.0.4",
        "5.8.3.1",
        "6.0.2.9",
        "6.0.3.0"
      ],
      "version": "6.0.3.1"
    },
    {
      "key": "wingray",
      "lunch": "cm_wingray-userdebug",
      "init": "init.wingray.rc",
      "flash_recovery": "dd if=%s of=/dev/block/platform/sdhci-tegra.3/by-name/recovery ; ",
      "name": "Motorola XOOM (Wi-Fi only)",
      "touch_version": "6.0.3.1",
      "legacy_versions": [
        "5.8.3.1",
        "6.0.2.9"
      ],
      "version": "6.0.3.1"
    },
    {
      "key": "marquee",
      "lunch": "full_marquee-eng",
      "init": "init.omap.post_boot.sh",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p4 bs=4096 ; ",
      "name": "LG Marquee",
      "legacy_versions": [

      ],
      "version": "5.0.2.8"
    },
    {
      "key": "ignite",
      "lunch": "full_ignite-eng",
      "init": "init.omap.post_boot.sh",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p4 bs=4096 ; ",
      "name": "LG Ignite",
      "legacy_versions": [

      ],
      "version": "5.0.2.8"
    },
    {
      "key": "ms840",
      "lunch": "full_ms840-userdebug",
      "init": "init.target.rc",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p13 bs=4096 ; ",
      "name": "LG Connect 4G MS840",
      "touch_version": "5.8.3.1",
      "legacy_versions": [

      ],
      "version": "5.8.3.1"
    },
    {
      "key": "vs840",
      "lunch": "full_vs840-userdebug",
      "init": "init.target.rc",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p13 bs=4096 ; ",
      "name": "LG Lucid VS840",
      "touch_version": "5.8.3.1",
      "legacy_versions": [

      ],
      "version": "5.8.3.1"
    },
    {
      "key": "jewel",
      "lunch": "cm_jewel-userdebug",
      "init": "init.jewel.rc",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p22 bs=4096 ; ",
      "name": "HTC EVO LTE",
      "touch_version": "5.8.3.5",
      "legacy_versions": [
        "5.8.3.4",
        "5.8.3.4"
      ],
      "version": "5.8.3.5"
    },
    {
      "key": "i9300",
      "lunch": "cm_i9300-userdebug",
      "ro.product.devices": [
        "i9300",
        "m0"
      ],
      "init": "ueventd.smdk4x12.rc",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p6 bs=4096 ; ",
      "name": "Samsung Galaxy S3 (GT-I9300)",
      "touch_version": "6.0.3.1",
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
        "6.0.3.0"
      ],
      "version": "6.0.3.1"
    },
    {
      "key": "skyrocket",
      "lunch": "cm_skyrocket-userdebug",
      "init": "init.qcom.usb.rc",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p22 bs=4096 ; ",
      "name": "Samsung Skyrocket",
      "touch_version": "6.0.1.4",
      "legacy_versions": [
        "5.8.4.3",
        "6.0.1.0"
      ],
      "version": "6.0.1.4"
    },
    {
      "key": "quincyatt",
      "lunch": "cm_quincyatt-userdebug",
      "init": "init.qcom.usb.rc",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p22 bs=4096 ; ",
      "name": "Samsung Galaxy Note (AT&T)",
      "touch_version": "6.0.3.1",
      "legacy_versions": [
        "5.8.4.3",
        "5.8.4.8"
      ],
      "version": "6.0.3.1"
    },
    {
      "key": "e400",
      "lunch": "cm_e400-userdebug",
      "init": "init.e0.rc",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p17 bs=4096 ; ",
      "name": "LG Optimus L3",
      "legacy_versions": [

      ],
      "version": "5.8.4.5"
    },
    {
      "key": "primou",
      "readonly_recovery": true,
      "lunch": "cm_primou-userdebug",
      "init": "init.primou.rc",
      "name": "HTC One V",
      "legacy_versions": [

      ],
      "version": "5.8.4.5"
    },
    {
      "key": "d2att",
      "lunch": "cm_d2att-userdebug",
      "init": "init.d2att.rc",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p18 bs=4096 ; ",
      "name": "Samsung Galaxy S3 (AT&T)",
      "touch_version": "6.0.3.1",
      "legacy_versions": [
        "5.8.4.5",
        "5.8.4.6",
        "5.8.4.7",
        "6.0.1.1",
        "6.0.1.2",
        "6.0.2.3",
        "6.0.2.8",
        "6.0.2.8",
        "6.0.3.0"
      ],
      "version": "6.0.3.1"
    },
    {
      "key": "d2tmo",
      "lunch": "cm_d2tmo-userdebug",
      "init": "init.d2tmo.rc",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p18 bs=4096 ; ",
      "name": "Samsung Galaxy S3 (T-Mobile)",
      "touch_version": "6.0.3.1",
      "legacy_versions": [
        "5.8.4.5",
        "5.8.4.6",
        "5.8.4.7",
        "6.0.1.2",
        "6.0.2.3",
        "6.0.2.8",
        "6.0.2.8",
        "6.0.3.0"
      ],
      "version": "6.0.3.1"
    },
    {
      "key": "d2spr",
      "lunch": "cm_d2spr-userdebug",
      "init": "init.d2spr.rc",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p18 bs=4096 ; ",
      "name": "Samsung Galaxy S3 (Sprint)",
      "touch_version": "6.0.3.1",
      "legacy_versions": [
        "5.8.4.5",
        "5.8.4.6",
        "5.8.4.7",
        "5.8.4.9",
        "6.0.1.2",
        "6.0.2.3",
        "6.0.2.8",
        "6.0.2.8",
        "6.0.3.0"
      ],
      "version": "6.0.3.1"
    },
    {
      "key": "d2vzw",
      "twrp_version": "2.4.3.0",
      "lunch": "cm_d2vzw-userdebug",
      "init": "init.d2vzw.rc",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p18 bs=4096 ; ",
      "name": "Samsung Galaxy S3 (Verizon)",
      "touch_version": "6.0.3.1",
      "legacy_versions": [
        "5.8.4.6",
        "5.8.4.7",
        "5.8.4.8",
        "5.8.4.9",
        "6.0.1.2",
        "6.0.2.3",
        "6.0.2.8",
        "6.0.2.8",
        "6.0.3.0"
      ],
      "version": "6.0.3.1"
    },
    {
      "key": "primoc",
      "readonly_recovery": true,
      "lunch": "full_primoc-userdebug",
      "init": "init.primoc.rc",
      "name": "HTC One V (CDMA)",
      "touch_version": "5.8.4.7",
      "legacy_versions": [
        "5.8.4.6",
        "5.8.4.7"
      ],
      "version": "5.8.4.7"
    },
    {
      "key": "grouper",
      "lunch": "cm_grouper-userdebug",
      "init": "init.grouper.rc",
      "flash_recovery": "dd if=%s of=/dev/block/platform/sdhci-tegra.3/by-name/SOS bs=4096 ; ",
      "name": "Google Nexus 7",
      "touch_version": "6.0.3.1",
      "legacy_versions": [
        "6.0.0.6",
        "6.0.1.0",
        "6.0.1.9",
        "6.0.2.3"
      ],
      "version": "6.0.3.1"
    },
    {
      "key": "su640",
      "lunch": "cm_su640-userdebug",
      "init": "init.su640.rc",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p13 bs=4096 ; ",
      "name": "LG Optimus LTE (SKT)",
      "touch_version": "6.0.1.0",
      "legacy_versions": [

      ],
      "version": "6.0.1.0"
    },
    {
      "key": "i9100g",
      "officially_supported": false,
      "lunch": "cm_i9100g-userdebug",
      "init": "init.t1.rc",
      "name": "Samsung Galaxy S2 (GT-I9100G)",
      "legacy_versions": [

      ],
      "version": "6.0.1.0"
    },
    {
      "key": "p3100",
      "lunch": "cm_p3100-userdebug",
      "init": "init.espresso.rc",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p6 bs=4096 ; ",
      "name": "Samsung Galaxy Tab 2 (GT-P3100)",
      "touch_version": "6.0.2.7",
      "legacy_versions": [
        "6.0.1.1",
        "6.0.2.3"
      ],
      "version": "6.0.2.7"
    },
    {
      "key": "p3110",
      "lunch": "cm_p3110-userdebug",
      "init": "init.espresso.rc",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p6 bs=4096 ; ",
      "name": "Samsung Galaxy Tab 2 (GT-P3110)",
      "touch_version": "6.0.2.7",
      "legacy_versions": [
        "6.0.1.1",
        "6.0.2.3"
      ],
      "version": "6.0.2.7"
    },
    {
      "key": "p3113",
      "lunch": "cm_p3113-userdebug",
      "init": "init.espresso.rc",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p6 bs=4096 ; ",
      "name": "Samsung Galaxy Tab 2 (GT-P3113)",
      "touch_version": "6.0.2.3",
      "legacy_versions": [
        "6.0.1.1"
      ],
      "version": "6.0.2.3"
    },
    {
      "key": "p5100",
      "lunch": "cm_p5100-userdebug",
      "init": "init.espresso10.rc",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p6 bs=4096 ; ",
      "name": "Samsung Galaxy Tab 2 (GT-P5100)",
      "touch_version": "6.0.2.7",
      "legacy_versions": [
        "6.0.1.1",
        "6.0.2.3"
      ],
      "version": "6.0.2.7"
    },
    {
      "key": "p5110",
      "lunch": "cm_p5110-userdebug",
      "init": "init.espresso10.rc",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p6 bs=4096 ; ",
      "name": "Samsung Galaxy Tab 2 (GT-P5110)",
      "touch_version": "6.0.2.7",
      "legacy_versions": [
        "6.0.1.1",
        "6.0.2.3"
      ],
      "version": "6.0.2.7"
    },
    {
      "key": "p5113",
      "lunch": "cm_p5113-userdebug",
      "init": "init.espresso10.rc",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p6 bs=4096 ; ",
      "name": "Samsung Galaxy Tab 2 (GT-P5113)",
      "touch_version": "6.0.2.3",
      "legacy_versions": [
        "6.0.1.1"
      ],
      "version": "6.0.2.3"
    },
    {
      "key": "vs920",
      "lunch": "cm_vs920-userdebug",
      "init": "init.target.rc",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p13 bs=4096 ; ",
      "name": "LG Spectrum 4G",
      "touch_version": "6.0.1.1",
      "inits": [
        "init.target.rc",
        "init.iproj.rc",
        "init.i_vzw.rc",
        "init.iprj.rc"
      ],
      "legacy_versions": [

      ],
      "version": "6.0.1.1"
    },
    {
      "key": "x500",
      "lunch": "cm_x500-userdebug",
      "init": "init.zte.rc",
      "name": "Score & Score M",
      "touch_version": "6.0.1.1",
      "legacy_versions": [

      ],
      "version": "6.0.1.1"
    },
    {
      "key": "vs910",
      "lunch": "cm_vs910-userdebug",
      "init": "init.qcom.rc",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p14 bs=4096 ; ",
      "name": "LG Revolution 4G",
      "touch_version": "6.0.1.1",
      "inits": [
        "init.qcom.rc",
        "init.bryce.rc"
      ],
      "legacy_versions": [

      ],
      "version": "6.0.1.1"
    },
    {
      "key": "ms910",
      "lunch": "cm_ms910-userdebug",
      "init": "init.qcom.rc",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p14 bs=4096 ; ",
      "name": "LG Esteeem 4G",
      "touch_version": "6.0.1.1",
      "inits": [
        "init.qcom.rc",
        "init.bryce.rc"
      ],
      "legacy_versions": [
        "5.0.2.8"
      ],
      "version": "6.0.1.1"
    },
    {
      "key": "ms695",
      "lunch": "cm_ms695-userdebug",
      "init": "init.qcom.rc",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p17 bs=4096 ; ",
      "name": "LG Optimus M+",
      "touch_version": "6.0.1.1",
      "inits": [
        "init.qcom.rc",
        "init.m3.rc"
      ],
      "legacy_versions": [
        "6.0.1.0"
      ],
      "version": "6.0.1.1"
    },
    {
      "key": "p1l",
      "officially_supported": false,
      "reboot_recovery": "echo 1 > /cache/.startrecovery ; sync ; reboot ;",
      "init": "init.p1.rc",
      "name": "Samsung Galaxy Tab (MTD and GSM - L)",
      "legacy_versions": [

      ],
      "version": "5.8.2.1"
    },
    {
      "key": "p1n",
      "officially_supported": false,
      "reboot_recovery": "echo 1 > /cache/.startrecovery ; sync ; reboot ;",
      "init": "init.p1.rc",
      "name": "Samsung Galaxy Tab (MTD and GSM - N)",
      "legacy_versions": [

      ],
      "version": "5.8.2.1"
    },
    {
      "key": "d2usc",
      "lunch": "cm_d2usc-userdebug",
      "init": "init.d2usc.rc",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p18 bs=4096 ; ",
      "name": "Samsung Galaxy S3 (US Cellular)",
      "touch_version": "6.0.3.1",
      "legacy_versions": [
        "6.0.1.2",
        "6.0.2.3",
        "6.0.2.8",
        "6.0.2.9",
        "6.0.3.0"
      ],
      "version": "6.0.3.1"
    },
    {
      "key": "asanti",
      "lunch": "cm_asanti-userdebug",
      "init": "init.mmi.usb.rc",
      "flash_recovery": "dd if=%s of=/dev/block/platform/msm_sdcc.1/by-name/recovery bs=4096 ; ",
      "name": "Motorola Photon Q",
      "inits": [
        "init.asanti.rc",
        "init.sprint.rc"
      ],
      "legacy_versions": [

      ],
      "version": "6.0.1.3"
    },
    {
      "key": "p350",
      "lunch": "cm_p350-userdebug",
      "init": "init.pecan.rc",
      "name": "LG Optimus Me",
      "legacy_versions": [
        "6.0.1.3",
        "6.0.1.4"
      ],
      "version": "6.0.1.5"
    },
    {
      "key": "p5att",
      "lunch": "cm_p5att-userdebug",
      "init": "fstab.qcom",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p22 bs=4096 ; ",
      "name": "Samsung Galaxy Tab 8.9 (AT&T)",
      "legacy_versions": [

      ],
      "version": "6.0.1.4"
    },
    {
      "key": "t769",
      "lunch": "cm_t769-userdebug",
      "init": "init.target.rc",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p22 bs=4096 ; ",
      "name": "Samsung Galaxy S Blaze 4G",
      "touch_version": "6.0.1.4",
      "legacy_versions": [

      ],
      "version": "6.0.1.4"
    },
    {
      "key": "d2mtr",
      "lunch": "cm_d2mtr-userdebug",
      "init": "init.carrier.rc",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p18 bs=4096 ; ",
      "name": "Samsung Galaxy S3 (MetroPCS)",
      "touch_version": "6.0.3.1",
      "inits": [
        "init.carrier.rc",
        "init.d2mtr.rc"
      ],
      "legacy_versions": [
        "6.0.1.5",
        "6.0.2.3",
        "6.0.2.8",
        "6.0.2.9",
        "6.0.3.0"
      ],
      "version": "6.0.3.1"
    },
    {
      "key": "tf700t",
      "lunch": "cm_tf700t-userdebug",
      "reboot_recovery": "echo 'boot-recovery' | dd of=/dev/block/mmcblk0p3 seek=6144 bs=1 ; reboot ; ",
      "init": "init.tf700t.rc",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p4 bs=4096 ; ",
      "name": "Asus Transformer Pad Infinity",
      "touch_version": "6.0.3.1",
      "legacy_versions": [
        "6.0.1.8",
        "6.0.2.3"
      ],
      "version": "6.0.3.1"
    },
    {
      "key": "manta",
      "lunch": "cm_manta-userdebug",
      "init": "init.manta.rc",
      "flash_recovery": "dd if=%s of=/dev/block/platform/dw_mmc.0/by-name/recovery bs=4096 ; ",
      "name": "Google Nexus 10",
      "touch_version": "6.0.3.1",
      "legacy_versions": [
        "6.0.1.5",
        "6.0.1.5",
        "6.0.1.6",
        "6.0.1.7",
        "6.0.1.8",
        "6.0.1.9",
        "6.0.2.3",
        "6.0.3.0"
      ],
      "version": "6.0.3.1"
    },
    {
      "key": "mako",
      "lunch": "cm_mako-userdebug",
      "init": "init.mako.rc",
      "flash_recovery": "dd if=%s of=/dev/block/platform/msm_sdcc.1/by-name/recovery bs=4096 ; ",
      "name": "Google Nexus 4",
      "touch_version": "6.0.3.1",
      "legacy_versions": [
        "6.0.1.5",
        "6.0.1.6",
        "6.0.1.8",
        "6.0.1.9",
        "6.0.2.0",
        "6.0.2.3",
        "6.0.3.0"
      ],
      "version": "6.0.3.1"
    },
    {
      "key": "dlx",
      "lunch": "cm_dlx-userdebug",
      "init": "init.debug_mfgkernel.rc",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p20 bs=4096 ; ",
      "name": "HTC Droid DNA",
      "touch_version": "6.0.3.1",
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
      "key": "n7100",
      "lunch": "cm_n7100-userdebug",
      "init": "init.smdk4x12.rc",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p9 bs=4096 ; ",
      "name": "Samsung Galaxy Note 2 (HSPA+)",
      "touch_version": "6.0.3.1",
      "legacy_versions": [
        "6.0.1.9",
        "6.0.3.0"
      ],
      "version": "6.0.3.1"
    },
    {
      "key": "a700",
      "lunch": "cm_a700-userdebug",
      "init": "init.picasso_mf.rc",
      "flash_recovery": "dd if=%s of=/dev/block/platform/sdhci-tegra.3/by-name/SOS bs=4096 ; ",
      "name": "Acer A700",
      "touch_version": "6.0.3.1",
      "legacy_versions": [
        "6.0.2.3"
      ],
      "version": "6.0.3.1"
    },
    {
      "key": "tilapia",
      "lunch": "cm_tilapia-userdebug",
      "init": "init.tilapia.rc",
      "flash_recovery": "dd if=%s of=/dev/block/platform/sdhci-tegra.3/by-name/SOS bs=4096 ; ",
      "name": "Google Nexus 7 (GSM)",
      "touch_version": "6.0.3.1",
      "legacy_versions": [
        "6.0.2.3"
      ],
      "version": "6.0.3.1"
    },
    {
      "key": "t0lte",
      "lunch": "cm_t0lte-userdebug",
      "init": "init.t0lte.rc",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p9 bs=4096 ; ",
      "name": "Samsung Galaxy Note 2 (LTE)",
      "touch_version": "6.0.3.1",
      "legacy_versions": [
        "6.0.2.3",
        "6.0.2.4",
        "6.0.2.5",
        "6.0.2.8",
        "6.0.3.0"
      ],
      "version": "6.0.3.1"
    },
    {
      "key": "p720",
      "lunch": "cm_p720-userdebug",
      "reboot_recovery": "echo '518 R 1' > /sys/kernel/kobject_lge_nvdata/dynamic_nvdata_raw_write ; reboot ; ",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p6 ; ",
      "name": "LG Optimus 3DMax",
      "touch_version": "6.0.2.3",
      "inits": [
        "init.lgep720board.rc",
        "/bootimages/battery_charging_01.rle"
      ],
      "legacy_versions": [

      ],
      "version": "6.0.2.3"
    },
    {
      "key": "d2cri",
      "lunch": "cm_d2cri-userdebug",
      "init": "init.d2cri.rc",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p18 bs=4096 ; ",
      "name": "Samsung Galaxy S3 (Cricket)",
      "touch_version": "6.0.3.1",
      "legacy_versions": [
        "6.0.2.7",
        "6.0.2.8",
        "6.0.2.9",
        "6.0.3.0"
      ],
      "version": "6.0.3.1"
    },
    {
      "key": "runnymede",
      "lunch": "cm_runnymede-userdebug",
      "init": "init.runnymede.rc",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p21 bs=4096 ; ",
      "name": "HTC Sensation XL",
      "touch_version": "6.0.2.7",
      "legacy_versions": [

      ],
      "version": "6.0.2.7"
    },
    {
      "key": "presto",
      "lunch": "cm_presto-userdebug",
      "init": "init.presto.rc",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p18 bs=4096 ; ",
      "name": "Pantech Presto",
      "touch_version": "6.0.2.7",
      "legacy_versions": [

      ],
      "version": "6.0.2.7"
    },
    {
      "key": "warp2",
      "lunch": "cm_warp2-userdebug",
      "init": "init.warp2.rc",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p13 bs=4096 ; ",
      "name": "ZTE Sequent",
      "touch_version": "6.0.2.7",
      "legacy_versions": [

      ],
      "version": "6.0.2.7"
    },
    {
      "key": "steelhead",
      "lunch": "cm_steelhead-userdebug",
      "init": "init.steelhead.rc",
      "flash_recovery": "dd if=%s of=/dev/block/platform/omap/omap_hsmmc.0/by-name/recovery bs=4096 ; ",
      "name": "Google Nexus Q",
      "legacy_versions": [
        "6.0.2.7"
      ],
      "version": "6.0.3.1"
    },
    {
      "key": "prevail2spr",
      "lunch": "cm_prevail2spr-userdebug",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p15 bs=4096 ; ",
      "name": "Samsung Prevail 2 (Boost Mobile)",
      "touch_version": "6.0.2.7",
      "inits": [
        "init.carrier.rc",
        "init.prevail2spr.rc"
      ],
      "legacy_versions": [

      ],
      "version": "6.0.2.7"
    },
    {
      "key": "golden",
      "lunch": "cm_golden-userdebug",
      "init": "init.golden.rc",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p21 bs=4096 ; ",
      "name": "Samsung Galaxy S3 Mini",
      "touch_version": "6.0.2.7",
      "legacy_versions": [

      ],
      "version": "6.0.2.7"
    },
    {
      "key": "fireball",
      "lunch": "cm_fireball-userdebug",
      "init": "init.fireball.rc",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p22 bs=4096 ; ",
      "name": "HTC Droid Incredible 4G LTE",
      "touch_version": "6.0.3.1",
      "legacy_versions": [
        "6.0.2.8",
        "6.0.2.9"
      ],
      "version": "6.0.3.1"
    },
    {
      "key": "puccinilte",
      "lunch": "cm_puccinilte-userdebug",
      "init": "init.puccinilte.rc",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p23 bs=4096 ; ",
      "name": "HTC Jetstream",
      "touch_version": "6.0.2.8",
      "legacy_versions": [

      ],
      "version": "6.0.2.8"
    },
    {
      "key": "p700",
      "lunch": "cm_p700-userdebug",
      "init": "init.u0.rc",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p17 bs=4096 ; ",
      "name": "LG Optimus L7",
      "touch_version": "6.0.2.8",
      "legacy_versions": [

      ],
      "version": "6.0.2.8"
    },
    {
      "key": "m7",
      "lunch": "cm_m7-userdebug",
      "init": "init.m7.rc",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p34 bs=4096 ; ",
      "name": "HTC One",
      "touch_version": "6.0.3.1",
      "legacy_versions": [
        "6.0.2.8",
        "6.0.3.0"
      ],
      "version": "6.0.3.1"
    },
    {
      "key": "dlxu",
      "lunch": "cm_dlxu-userdebug",
      "init": "init.dlxu.rc",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p20 bs=4096 ; ",
      "name": "HTC Butterfly (dlxu)",
      "touch_version": "6.0.3.1",
      "legacy_versions": [
        "6.0.2.8",
        "6.0.3.0"
      ],
      "version": "6.0.3.1"
    },
    {
      "key": "dlxub1",
      "lunch": "cm_dlxub1-userdebug",
      "init": "init.dlxub1.rc",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p20 bs=4096 ; ",
      "name": "HTC Butterfly (dlxub1)",
      "touch_version": "6.0.3.1",
      "legacy_versions": [
        "6.0.2.8",
        "6.0.3.0"
      ],
      "version": "6.0.3.1"
    },
    {
      "key": "dlxj",
      "lunch": "cm_dlxj-userdebug",
      "init": "init.dlxj.rc",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p20 bs=4096 ; ",
      "name": "HTC Butterfly J",
      "touch_version": "6.0.3.1",
      "legacy_versions": [
        "6.0.2.8",
        "6.0.3.0"
      ],
      "version": "6.0.3.1"
    },
    {
      "key": "e610",
      "lunch": "cm_e610-userdebug",
      "init": "init.m4.rc",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p17 bs=4096 ; ",
      "name": "LG Optimus L5",
      "legacy_versions": [

      ],
      "version": "6.0.2.8"
    },
    {
      "key": "evita",
      "lunch": "cm_evita-userdebug",
      "init": "init.evita.rc",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p22 bs=4096 ; ",
      "name": "HTC One X (AT&T)",
      "touch_version": "6.0.3.1",
      "legacy_versions": [
        "6.0.2.8"
      ],
      "version": "6.0.3.1"
    },
    {
      "key": "p4",
      "lunch": "cm_p4-userdebug",
      "ro.product.devices": [
        "p4",
        "gt-p7500",
        "p7500"
      ],
      "init": "init.p4.rc",
      "flash_recovery": "dd if=%s of=/dev/block/platform/sdhci-tegra.3/by-num/p2 bs=4096 ; ",
      "name": "Samsung Galaxy Tab 10.1",
      "touch_version": "6.0.3.1",
      "legacy_versions": [
        "6.0.2.9",
        "6.0.3.0"
      ],
      "version": "6.0.3.1"
    },
    {
      "key": "p4tmo",
      "lunch": "cm_p4tmo-userdebug",
      "init": "init.p4tmo.rc",
      "flash_recovery": "dd if=%s of=/dev/block/platform/sdhci-tegra.3/by-num/p2 bs=4096 ; ",
      "name": "Samsung Galaxy Tab 10.1 (T-Mobile)",
      "touch_version": "6.0.3.1",
      "legacy_versions": [
        "6.0.2.9",
        "6.0.3.0"
      ],
      "version": "6.0.3.1"
    },
    {
      "key": "p4vzw",
      "lunch": "cm_p4vzw-userdebug",
      "init": "init.p4vzw.rc",
      "flash_recovery": "dd if=%s of=/dev/block/platform/sdhci-tegra.3/by-num/p2 bs=4096 ; ",
      "name": "Samsung Galaxy Tab 10.1 (Verizon)",
      "touch_version": "6.0.3.1",
      "legacy_versions": [
        "6.0.2.9",
        "6.0.3.0"
      ],
      "version": "6.0.3.1"
    },
    {
      "key": "p760",
      "lunch": "cm_p760-userdebug",
      "init": "init.u0.rc",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p4 bs=4096 ; ",
      "name": "LG Optimus L9",
      "touch_version": "6.0.3.1",
      "legacy_versions": [
        "6.0.2.9"
      ],
      "version": "6.0.3.1"
    },
    {
      "key": "i9305",
      "lunch": "cm_i9305-userdebug",
      "init": "ueventd.smdk4x12.rc",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p9 bs=4096 ; ",
      "name": "Samsung Galaxy S3 LTE (GT-I9305)",
      "touch_version": "6.0.3.1",
      "legacy_versions": [
        "6.0.2.9"
      ],
      "version": "6.0.3.1"
    },
    {
      "key": "p3",
      "lunch": "cm_p3-userdebug",
      "init": "init.p3.rc",
      "flash_recovery": "dd if=%s of=/dev/block/platform/sdhci-tegra.3/by-num/p2 bs=4096 ; ",
      "name": "Samsung Galaxy Tab 10.1v",
      "touch_version": "6.0.3.1",
      "legacy_versions": [
        "6.0.2.9"
      ],
      "version": "6.0.3.1"
    },
    {
      "key": "n8013",
      "lunch": "cm_n8013-userdebug",
      "init": "init.n8013.rc",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p6 bs=4096 ; ",
      "name": "Samsung Galaxy Note 10.1",
      "touch_version": "6.0.3.1",
      "legacy_versions": [
        "6.0.3.0"
      ],
      "version": "6.0.3.1"
    },
    {
      "key": "i605",
      "lunch": "cm_i605-userdebug",
      "ro.product.devices": [
        "i605",
        "t0ltevzw"
      ],
      "init": "init.i605.rc",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p9 bs=4096 ; ",
      "name": "Samsung Galaxy Note 2 (Verizon)",
      "touch_version": "6.0.3.0",
      "legacy_versions": [

      ],
      "version": "6.0.3.0"
    },
    {
      "key": "l900",
      "lunch": "cm_l900-userdebug",
      "ro.product.devices": [
        "l900",
        "t0ltespr"
      ],
      "init": "init.l900.rc",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p9 bs=4096 ; ",
      "name": "Samsung Galaxy Note 2 (Sprint)",
      "touch_version": "6.0.3.1",
      "legacy_versions": [
        "6.0.3.0"
      ],
      "version": "6.0.3.1"
    },
    {
      "key": "t0lteatt",
      "lunch": "cm_t0lteatt-userdebug",
      "init": "init.t0lteatt.rc",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p9 bs=4096 ; ",
      "name": "Samsung Galaxy Note 2 (AT&T)",
      "touch_version": "6.0.3.1",
      "legacy_versions": [
        "6.0.3.0"
      ],
      "version": "6.0.3.1"
    },
    {
      "key": "t0ltetmo",
      "lunch": "cm_t0ltetmo-userdebug",
      "init": "init.t0ltetmo.rc",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p9 bs=4096 ; ",
      "name": "Samsung Galaxy Note 2 (T-Mobile)",
      "touch_version": "6.0.3.1",
      "legacy_versions": [
        "6.0.3.0"
      ],
      "version": "6.0.3.1"
    },
    {
      "key": "e975",
      "lunch": "cm_e975-userdebug",
      "init": "init.geehrc.rc",
      "flash_recovery": "dd if=%s of=/dev/block/platform/msm_sdcc.1/by-name/recovery bs=4096 ; ",
      "name": "LG Optimus G Intl (E975)",
      "touch_version": "6.0.3.0",
      "legacy_versions": [

      ],
      "version": "6.0.3.0"
    },
    {
      "key": "p880",
      "lunch": "cm_p880-userdebug",
      "reboot_recovery": "echo 'boot-recovery' | dd of=/dev/block/mmcblk0p5 bs=1 count=13 ; reboot ; ",
      "init": "init.x3.rc",
      "flash_recovery": "dd if=%s of=/dev/block/platform/sdhci-tegra.3/by-name/SOS bs=4096 ; ",
      "name": "LG Optimus 4X HD",
      "touch_version": "6.0.3.1",
      "legacy_versions": [

      ],
      "version": "6.0.3.1"
    },
    {
      "key": "quincytmo",
      "lunch": "cm_quincytmo-userdebug",
      "init": "init.quincytmo.rc",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p22 bs=4096 ; ",
      "name": "Samsung Galaxy Note (T-Mobile)",
      "touch_version": "6.0.3.1",
      "legacy_versions": [

      ],
      "version": "6.0.3.1"
    },
    {
      "key": "n8000",
      "lunch": "cm_n8000-userdebug",
      "init": "init.n8000.rc",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p6 bs=4096 ; ",
      "name": "Samsung Galaxy Note 10.1 (GSM)",
      "touch_version": "6.0.3.1",
      "legacy_versions": [

      ],
      "version": "6.0.3.1"
    }
  ],
  "recovery_url": "http://download2.clockworkmod.com/recoveries/recovery-clockwork-%s-%s.img",
  "manifest_signature": "O8+Kc2mdQz0e/AjCQn6Rw6fK5Kr5LZItJ474Ua3gF2o4IgdCQZXIbwCHIo6xeqY3pVEGtjYmmyO1PkRYcGqq2rB2wQM8SoKFl/70vG0ihEZ5TDeruKUgxVVSNM3e09kBvCxYK89GWqVWkNHtvTu1T1F9w6FilzCsNFSAXHD0Bos=",
  "recovery_twrp_url": "http://download2.clockworkmod.com/twrp/openrecovery-twrp-%s-%s.img",
  "version": "2.5.0.1",
  "recovery_zip_url": "http://download2.clockworkmod.com/recoveries/recovery-clockwork-%s-%s.zip",
  "use_in_app": false
}