{
  "owners": {
    "cvpcsm@gmail.com": true,
    "njgreb@gmail.com": true,
    "arcee@cyanogenmod.com": true,
    "keaneyw@gmail.com": true,
    "utkanos@gmail.com": true,
    "daniel.hillenbrand@codeworkx.de": true,
    "playfulgod@gmail.com": true,
    "layhertony@gmail.com": true,
    "bigbeeshane@gmail.com": true,
    "ferguson.david@gmail.com": true,
    "koush@clockworkmod.com": true,
    "attn1.repo@gmail.com": true
  },
  "recovery_url": "http://download2.clockworkmod.com/recoveries/recovery-clockwork-%s-%s.img",
  "keywords": "phone accessories,droid,gadgets,bluetooth headset,car charger,sd card",
  "recovery_twrp_url": "http://download2.clockworkmod.com/twrp/openrecovery-twrp-%s-%s.img",
  "devices": [
    {
      "name": "Motorola Droid",
      "legacy_versions": [
        "3.1.0.2",
        "2.5.1.4",
        "2.5.1.3",
        "2.5.1.1",
        "2.5.0.1"
      ],
      "key": "sholes",
      "init": "init.sholes.rc",
      "alternate_recovery": {
        "name": "SPRecovery 0.99.3b",
        "clockwork": false,
        "url": "http://koush.kanged.net/cm/recoveries/sprecovery.img"
      },
      "version": "2.5.0.1"
    },
    {
      "name": "HTC MyTouch 3G",
      "legacy_versions": [
        "2.5.0.7",
        "2.5.1.4",
        "2.5.1.3",
        "2.5.1.1"
      ],
      "key": "sapphire",
      "init": "init.sapphire.rc",
      "alternate_recovery": {
        "name": "RA Recovery v1.7.0G",
        "clockwork": false,
        "url": "http://files.androidspin.com/downloads.php?dir=amon_ra/RECOVERY/&file=recovery-RA-sapphire-v1.7.0G.img"
      },
      "version": "2.5.0.7"
    },
    {
      "name": "HTC Magic",
      "legacy_versions": [
        "2.5.0.7",
        "2.5.1.4",
        "2.5.1.3",
        "2.5.1.1"
      ],
      "key": "magic",
      "init": "init.sapphire.rc",
      "alternate_recovery": {
        "name": "RA Recovery v1.7.0H",
        "clockwork": false,
        "url": "http://files.androidspin.com/downloads.php?dir=amon_ra/RECOVERY/&file=recovery-RA-sapphire-v1.7.0H.img"
      },
      "version": "2.5.0.7"
    },
    {
      "name": "HTC G1/Dream",
      "legacy_versions": [
        "2.5.0.7",
        "2.5.1.4",
        "2.5.1.3",
        "2.5.1.1"
      ],
      "key": "dream",
      "init": "init.trout.rc",
      "alternate_recovery": {
        "name": "RA Recovery v1.7.0",
        "clockwork": false,
        "url": "http://files.androidspin.com/downloads.php?dir=amon_ra/RECOVERY/&file=recovery-RA-dream-v1.7.0.img"
      },
      "version": "2.5.0.7"
    },
    {
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
      "key": "passion",
      "init": "init.mahimahi.rc",
      "lunch": "cyanogen_passion-eng",
      "alternate_recovery": {
        "name": "RA Recovery v2.2.1",
        "clockwork": false,
        "url": "http://files.androidspin.com/downloads.php?dir=amon_ra/RECOVERY/&file=recovery-RA-passion-v2.2.1.img"
      },
      "version": "5.0.2.0"
    },
    {
      "name": "HTC Hero (GSM)",
      "legacy_versions": [
        "2.5.0.7",
        "2.5.1.4",
        "2.5.1.3",
        "2.5.1.1"
      ],
      "key": "hero",
      "init": "init.hero.rc",
      "alternate_recovery": {
        "name": "RA Recovery v1.7.0.1",
        "clockwork": false,
        "url": "http://files.androidspin.com/downloads.php?dir=amon_ra/RECOVERY/&file=recovery-RA-hero-v1.7.0.1.img"
      },
      "version": "2.5.0.7"
    },
    {
      "name": "HTC Hero (CDMA)",
      "legacy_versions": [
        "2.5.0.7",
        "2.5.1.4",
        "2.5.1.3",
        "2.5.1.1"
      ],
      "key": "heroc",
      "init": "init.heroc.rc",
      "alternate_recovery": {
        "name": "RA Recovery v1.6.2",
        "clockwork": false,
        "url": "http://www.androidspin.com/downloads.php?dir=amon_ra/RECOVERY/&file=recovery-RA-heroc-v1.6.2.img"
      },
      "version": "2.5.0.7"
    },
    {
      "name": "HTC Evo",
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
      "key": "supersonic",
      "init": "init.supersonic.rc",
      "lunch": "cyanogen_supersonic-eng",
      "alternate_recovery": {
        "name": "RA Recovery v2.3",
        "clockwork": false,
        "url": "http://files.androidspin.com/downloads.php?dir=amon_ra/RECOVERY/&file=recovery-RA-supersonic-v2.3.img"
      },
      "version": "5.0.2.2"
    },
    {
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
      "key": "legend",
      "init": "init.legend.rc",
      "lunch": "cyanogen_legend-eng",
      "version": "5.0.2.0"
    },
    {
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
      "key": "bravo",
      "init": "init.bravo.rc",
      "lunch": "cyanogen_bravo-eng",
      "version": "5.0.2.0"
    },
    {
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
      "key": "bravoc",
      "init": "init.bravoc.rc",
      "lunch": "cyanogen_bravoc-eng",
      "version": "5.0.2.0"
    },
    {
      "name": "Huawei Pulse Mini",
      "legacy_versions": [
        "2.5.0.7",
        "2.5.1.4",
        "2.5.1.3",
        "2.5.1.1"
      ],
      "key": "pulsemini",
      "init": "init.qcom.rc",
      "version": "2.5.0.7"
    },
    {
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
      "key": "inc",
      "init": "init.inc.rc",
      "lunch": "cyanogen_inc-eng",
      "alternate_recovery": {
        "name": "RA_GNM Recovery v3.02",
        "clockwork": false,
        "url": "http://dl.dropbox.com/u/12949506/RomManager/recovery-RA-inc-3.02.img"
      },
      "version": "5.0.2.0"
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
      "key": "liberty",
      "init": "init.liberty.rc",
      "version": "2.5.0.7"
    },
    {
      "name": "Motorola Droid Eris",
      "readonly_recovery": true,
      "legacy_versions": [
        "2.5.0.7",
        "2.5.1.4",
        "2.5.1.3",
        "2.5.1.1"
      ],
      "key": "desirec",
      "init": "init.desirec.rc",
      "alternate_recovery": {
        "name": "RA Recovery v1.6.2",
        "clockwork": false,
        "url": "http://www.androidspin.com/downloads.php?dir=amon_ra/RECOVERY/&file=recovery-RA-eris-v1.6.2.img"
      },
      "version": "2.5.0.7"
    },
    {
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
      "key": "buzz",
      "init": "init.buzz.rc",
      "lunch": "cyanogen_buzz-eng",
      "version": "5.0.2.0"
    },
    {
      "name": "Dell Streak",
      "legacy_versions": [
        "2.5.0.7",
        "2.5.1.4",
        "2.5.1.3",
        "2.5.1.1"
      ],
      "key": "streak",
      "init": "init.qcom.rc",
      "version": "2.5.0.7"
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
      "key": "espresso",
      "init": "init.latte.rc",
      "version": "2.5.0.7"
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
      "key": "galaxys",
      "init": "lpm.rc",
      "version": "2.5.1.2"
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
      "key": "fascinate",
      "init": "init.smdkc110.rc",
      "version": "3.0.0.8"
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
      "key": "vibrant",
      "init": "init.smdkc110.rc",
      "version": "2.5.1.2"
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
      "key": "captivate",
      "init": "init.smdkc110.rc",
      "version": "2.5.1.2"
    },
    {
      "name": "Huawei Pulse",
      "legacy_versions": [
        "2.5.0.7",
        "2.5.1.4",
        "2.5.1.3",
        "2.5.1.1"
      ],
      "key": "pulse",
      "init": "init.qcom.rc",
      "version": "2.5.0.7"
    },
    {
      "name": "LG Ally",
      "legacy_versions": [
        "2.5.0.7",
        "2.5.1.4",
        "2.5.1.3",
        "2.5.1.1"
      ],
      "key": "aloha",
      "init": "init.aloha.rc",
      "alternate_recovery": {
        "name": "RA_GNM Recovery v2.2.2",
        "clockwork": false,
        "url": "http://dl.dropbox.com/u/12949506/RomManager/recovery-RA-aloha-2.2.2-GNM.img"
      },
      "version": "2.5.0.7"
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
      "key": "milestone",
      "init": "init.mapphone_cdma.rc",
      "version": "3.1.0.2"
    },
    {
      "name": "Motorola Droid X",
      "flash_recovery": "dd if=%s of=/preinstall/recovery/recovery.zip ; ",
      "readonly_recovery": true,
      "legacy_versions": [
        "2.5.0.7"
      ],
      "key": "droidx",
      "init": "init.mapphone_cdma.rc",
      "reboot_recovery": "rm /cache/recovery/command ; echo 1 > /data/.recovery_mode ; sync ; reboot ;",
      "version": "5.0.2.0"
    },
    {
      "name": "Motorola Droid X (2nd-init)",
      "flash_recovery": "dd if=%s of=/preinstall/recovery/recovery.zip ; ",
      "readonly_recovery": true,
      "legacy_versions": [
        "2.5.0.7"
      ],
      "key": "shadow",
      "init": "init.mapphone_cdma.rc",
      "lunch": "cyanogen_shadow-eng",
      "reboot_recovery": "rm /cache/recovery/command ; echo 1 > /data/.recovery_mode ; sync ; reboot ;",
      "version": "5.0.2.0"
    },
    {
      "name": "Acer Liquid",
      "legacy_versions": [
        "2.5.1.4",
        "2.5.1.3",
        "2.5.1.1",
        "2.5.1.0"
      ],
      "key": "salsa",
      "init": "init.salsa.rc",
      "version": "2.5.1.0"
    },
    {
      "name": "Commtiva Z71 (Boston, Blaze, and more)",
      "legacy_versions": [
        "2.5.1.4",
        "2.5.1.3",
        "2.5.1.1",
        "2.5.1.0"
      ],
      "key": "z71",
      "init": "init.qcom.rc",
      "version": "2.5.1.3"
    },
    {
      "name": "HTC G2",
      "touch_version": "5.8.1.0",
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
      "key": "vision",
      "init": "init.vision.rc",
      "lunch": "cyanogen_vision-eng",
      "version": "5.0.2.7"
    },
    {
      "name": "HTC MyTouch 4G",
      "touch_version": "5.8.1.0",
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
      "key": "glacier",
      "init": "init.glacier.rc",
      "lunch": "cyanogen_glacier-eng",
      "version": "5.0.2.0"
    },
    {
      "name": "HTC Desire HD",
      "touch_version": "5.8.1.5",
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
      "key": "ace",
      "init": "init.spade.rc",
      "lunch": "cyanogen_ace-eng",
      "version": "5.0.2.0"
    },
    {
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
      "key": "morrison",
      "init": "init.morrison.rc",
      "lunch": "cyanogen_morrison-eng",
      "version": "5.0.2.0"
    },
    {
      "name": "Motorola Droid 2",
      "flash_recovery": "dd if=%s of=/preinstall/recovery/recovery.zip ; ",
      "readonly_recovery": true,
      "legacy_versions": [
        "2.5.0.8"
      ],
      "key": "droid2",
      "init": "init.mapphone_cdma.rc",
      "lunch": "cyanogen_droid2-eng",
      "reboot_recovery": "rm /cache/recovery/command ; echo 1 > /data/.recovery_mode ; sync ; reboot ;",
      "version": "5.0.2.0"
    },
    {
      "name": "Geeksphone ONE",
      "legacy_versions": [
        "2.5.1.4",
        "2.5.1.3",
        "2.5.1.1",
        "2.5.1.0"
      ],
      "key": "one",
      "init": "init.qcom.rc",
      "alternate_recovery": {
        "name": "ONE Recovery v1.6",
        "clockwork": false,
        "url": "http://dl.dropbox.com/u/10355648/recovery-ONE-1_6.img"
      },
      "version": "2.5.1.3"
    },
    {
      "name": "Advent Vega",
      "flash_recovery": "/data/data/com.koushikdutta.rommanager/files/tegra_flash_image recovery %s ; ",
      "legacy_versions": [
        "2.5.1.4",
        "2.5.1.3",
        "2.5.1.1",
        "2.5.1.0",
        "2.5.1.4"
      ],
      "key": "vega",
      "init": "init_recovery.rc",
      "reboot_recovery": "echo start > /proc/ota ; ",
      "version": "3.0.2.7"
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
      "key": "att_tab",
      "init": "init.smdkc110.rc",
      "version": "2.5.1.8"
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
      "key": "tmobile_tab",
      "init": "init.smdkc110.rc",
      "version": "2.5.1.8"
    },
    {
      "name": "Commtiva Link N700, Spice MI700, and more",
      "legacy_versions": [
        "2.5.1.4",
        "2.5.1.3",
        "2.5.1.1",
        "2.5.1.0"
      ],
      "key": "FM6",
      "init": "init.qcom.rc",
      "alternate_recovery": {
        "name": "MI700 Recovery v1.6",
        "clockwork": false,
        "url": "http://dl.dropbox.com/u/15816725/MI700-recovery-V1_3.img"
      },
      "version": "2.5.1.2"
    },
    {
      "name": "Google Nexus S",
      "touch_version": "6.0.2.5",
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
        "6.0.1.0"
      ],
      "key": "crespo",
      "init": "init.herring.rc",
      "lunch": "cm_crespo-userdebug",
      "version": "6.0.2.5"
    },
    {
      "name": "Motorola Droid Pro",
      "readonly_recovery": true,
      "legacy_versions": [
        "2.5.0.8"
      ],
      "key": "droidpro",
      "init": "init. mapphone_cdma.rc",
      "version": "2.5.0.8"
    },
    {
      "name": "Huawei Ascend",
      "legacy_versions": [
        "3.0.0.5",
        "3.0.0.4"
      ],
      "key": "ascend",
      "init": "init.qcom.rc",
      "version": "3.0.0.5"
    },
    {
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
      "key": "blade",
      "init": "init.blade.rc",
      "lunch": "cyanogen_blade-eng",
      "version": "5.0.2.0"
    },
    {
      "name": "Nook Color",
      "flash_recovery": "busybox mount -orw,remount / ; mkdir /boot ; busybox mount /dev/block/mmcblk0p1 /boot ; busybox unzip -p %1$s ramdisk-recovery.ub > /boot/uRecRam ; busybox unzip -p %1$s kernel > /boot/uRecImg ; busybox umount /boot ; rmdir /boot; busybox mount -oro,remount / ; ",
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
        "3.2.0.1"
      ],
      "key": "encore",
      "init": "env.txt",
      "reboot_recovery": "dd if=/dev/zero of=/rom/bcb bs=64 count=1 ; echo 'recovery' >> /rom/bcb ; reboot ;",
      "inits": [
        "env.txt",
        "init.encore.rc"
      ],
      "version": "3.2.0.1"
    },
    {
      "name": "HTC Click/Tattoo",
      "legacy_versions": [
        "3.0.0.6",
        "3.0.0.6",
        "3.0.2.7",
        "5.0.0.8",
        "5.0.1.0"
      ],
      "key": "click",
      "init": "init.bahamas.rc",
      "lunch": "cyanogen_click-eng",
      "version": "5.0.2.0"
    },
    {
      "name": "Elocity A7",
      "readonly_recovery": true,
      "legacy_versions": [
        "3.0.0.8"
      ],
      "key": "a7",
      "init": "init_recovery.rc",
      "version": "3.0.0.8"
    },
    {
      "name": "Geeksphone Zero",
      "legacy_versions": [
        "3.0.1.3"
      ],
      "key": "zero",
      "init": "init.zero.rc",
      "version": "3.0.1.3"
    },
    {
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
      "key": "speedy",
      "init": "init.speedy.rc",
      "lunch": "cyanogen_speedy-eng",
      "version": "5.0.2.0"
    },
    {
      "name": "Samsung Captivate (MTD)",
      "legacy_versions": [

      ],
      "key": "captivatemtd",
      "officially_supported": false,
      "init": "init.aries.rc",
      "reboot_recovery": "echo 1 > /cache/.startrecovery ; sync ; reboot ;"
    },
    {
      "name": "Samsung Showcase (MTD)",
      "legacy_versions": [

      ],
      "key": "showcasemtd",
      "officially_supported": false,
      "init": "init.aries.rc",
      "reboot_recovery": "echo 1 > /cache/.startrecovery ; sync ; reboot ;"
    },
    {
      "name": "Samsung Mesmerize (MTD)",
      "legacy_versions": [

      ],
      "key": "mesmerizemtd",
      "officially_supported": false,
      "init": "init.aries.rc",
      "reboot_recovery": "echo 1 > /cache/.startrecovery ; sync ; reboot ;"
    },
    {
      "name": "Samsung Fascinate (MTD)",
      "legacy_versions": [

      ],
      "key": "fascinatemtd",
      "officially_supported": false,
      "init": "init.aries.rc",
      "reboot_recovery": "echo 1 > /cache/.startrecovery ; sync ; reboot ;"
    },
    {
      "name": "Samsung Vibrant (MTD)",
      "legacy_versions": [

      ],
      "key": "vibrantmtd",
      "officially_supported": false,
      "init": "init.aries.rc",
      "reboot_recovery": "echo 1 > /cache/.startrecovery ; sync ; reboot ;"
    },
    {
      "name": "Samsung GalaxyS i9000B (MTD)",
      "legacy_versions": [

      ],
      "key": "galaxysbmtd",
      "officially_supported": false,
      "init": "init.aries.rc",
      "reboot_recovery": "echo 1 > /cache/.startrecovery ; sync ; reboot ;"
    },
    {
      "name": "Samsung GalaxyS i9000 (MTD)",
      "legacy_versions": [

      ],
      "key": "galaxysmtd",
      "officially_supported": false,
      "init": "init.aries.rc",
      "reboot_recovery": "echo 1 > /cache/.startrecovery ; sync ; reboot ;"
    },
    {
      "name": "Samsung Epic4G",
      "readonly_recovery": true,
      "legacy_versions": [

      ],
      "key": "epic4g",
      "init": "lpm.rc",
      "lunch": "full_epic4g-eng",
      "version": "5.0.2.7"
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
      "key": "streak7",
      "init": "init.tinyandroid.rc",
      "version": "3.0.2.0"
    },
    {
      "name": "HTC Thunderbolt",
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
      "key": "mecha",
      "init": "init.mecha.rc",
      "lunch": "cyanogen_mecha-eng",
      "alternate_recovery": {
        "name": "RA_GNM Recovery v3.05",
        "clockwork": false,
        "url": "http://dl.dropbox.com/u/12949506/RomManager/recovery-ra-mecha-3.05.img"
      },
      "version": "5.0.2.1"
    },
    {
      "name": "Huawei U8150 Ideos",
      "legacy_versions": [
        "3.0.2.4"
      ],
      "key": "ideos",
      "init": "init.ideos.rc",
      "version": "3.0.2.4"
    },
    {
      "name": "Motorola XOOM",
      "touch_version": "6.0.2.9",
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
        "4.0.0.4"
      ],
      "key": "stingray",
      "init": "init.stingray.rc",
      "lunch": "cm_stingray-userdebug",
      "version": "6.0.2.9"
    },
    {
      "name": "HTC HD2",
      "legacy_versions": [
        "3.0.2.5",
        "3.0.2.4",
        "3.0.2.5"
      ],
      "key": "leo",
      "init": "init.leo.rc",
      "version": "3.1.0.0"
    },
    {
      "name": "Motorola CLIQ XT/Quench (MB501)",
      "legacy_versions": [
        "3.0.2.4",
        "3.0.2.4",
        "5.0.0.8",
        "5.0.0.8",
        "5.0.1.0",
        "5.0.1.0"
      ],
      "key": "zeppelin",
      "init": "init.zeppelin.rc",
      "lunch": "cyanogen_zeppelin-eng",
      "version": "5.0.2.0"
    },
    {
      "name": "HTC Desire S",
      "touch_version": "5.8.1.5",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p21 ; ",
      "legacy_versions": [
        "3.0.2.6",
        "5.0.1.9"
      ],
      "key": "saga",
      "init": "init.saga.rc",
      "lunch": "full_saga-eng",
      "version": "5.0.2.0"
    },
    {
      "name": "LG G2X (T-Mobile)",
      "readonly_recovery": true,
      "legacy_versions": [
        "3.0.2.7",
        "5.0.0.8",
        "5.0.1.0",
        "5.0.1.4",
        "5.0.1.6"
      ],
      "key": "p999",
      "init": "init_recovery.rc",
      "lunch": "cyanogen_p999-eng",
      "reboot_recovery": "echo 'boot-recovery' | dd of=/dev/block/mmcblk0p3 seek=6144 bs=1 ; reboot ; ",
      "version": "5.0.2.0"
    },
    {
      "name": "LG Optimus 2X",
      "touch_version": "6.0.1.5",
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
        "5.0.2.0"
      ],
      "key": "p990",
      "lunch": "cm_p990-userdebug",
      "reboot_recovery": "echo 'boot-recovery' | dd of=/dev/block/mmcblk0p3 seek=6144 bs=1 ; reboot ; ",
      "inits": [
        "init_recovery.rc",
        "/bootimages/opening_01.rle"
      ],
      "version": "6.0.1.5"
    },
    {
      "name": "Google Nexus S 4G",
      "touch_version": "6.0.2.5",
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
        "6.0.1.0"
      ],
      "key": "crespo4g",
      "init": "init.herring.rc",
      "lunch": "cm_crespo4g-userdebug",
      "version": "6.0.2.5"
    },
    {
      "name": "LG Optimus One (old BB)",
      "legacy_versions": [
        "3.1.0.0",
        "5.0.0.8",
        "5.0.1.0"
      ],
      "key": "thunderg",
      "init": "init.thunderg.rc",
      "lunch": "full_thunderg-eng",
      "alternate_recovery": {
        "name": "RA_GNM Recovery v2.2.1",
        "clockwork": false,
        "url": "http://dl.dropbox.com/u/12949506/RomManager/recovery-RA-thunderg-2.2.1-GNM.img"
      },
      "version": "5.0.2.0"
    },
    {
      "name": "LG Optimus One",
      "legacy_versions": [
        "5.0.2.0"
      ],
      "key": "p500",
      "init": "init.thunderg.rc",
      "lunch": "cyanogen_p500-eng",
      "version": "5.0.2.7"
    },
    {
      "name": "Huawei U8220/U8230",
      "legacy_versions": [

      ],
      "key": "u8220",
      "init": "init.qcom.rc",
      "version": "3.1.0.1"
    },
    {
      "name": "Samsung Charge",
      "readonly_recovery": true,
      "legacy_versions": [

      ],
      "key": "charge",
      "init": "init.smdkc110.rc",
      "version": "3.1.0.1"
    },
    {
      "name": "Motorola Defy",
      "legacy_versions": [

      ],
      "key": "umts_jordan",
      "officially_supported": false,
      "init": "init.mapphone_umts.rc"
    },
    {
      "name": "Samsung Galaxy S 4G",
      "readonly_recovery": true,
      "legacy_versions": [
        "3.2.0.0"
      ],
      "key": "galaxys4g",
      "init": "init.smdkc110.rc",
      "version": "3.2.0.0"
    },
    {
      "name": "Samsung Galaxy S2",
      "touch_version": "5.8.1.5",
      "ro.product.device": [
        "i9100",
        "galaxys2"
      ],
      "readonly_recovery": true,
      "legacy_versions": [
        "4.0.1.4",
        "v4.0.1.4"
      ],
      "key": "galaxys2",
      "init": "init.smdkc210.rc",
      "inits": [
        "init.smdkc210.rc",
        "init.smdk4210.rc"
      ],
      "version": "4.0.1.5"
    },
    {
      "name": "Samsung Galaxy S2",
      "ro.product.device": [
        "i9100",
        "galaxys2"
      ],
      "legacy_versions": [

      ],
      "key": "i9100",
      "officially_supported": false,
      "init": "init.smdk4210.rc",
      "lunch": "cm_i9100-userdebug",
      "inits": [
        "init.smdkc210.rc",
        "init.smdk4210.rc"
      ],
      "version": "6.0.1.0"
    },
    {
      "name": "Samsung Galaxy Note (GT-N7000)",
      "readonly_recovery": true,
      "legacy_versions": [
        "6.0.1.0"
      ],
      "key": "n7000",
      "init": "init.smdk4210.rc",
      "lunch": "cm_n7000-userdebug",
      "version": "6.0.1.2"
    },
    {
      "name": "Samsung Sidekick 4G",
      "readonly_recovery": true,
      "legacy_versions": [

      ],
      "key": "sidekick4g",
      "init": "init.smdkc110.rc",
      "version": "4.0.0.2"
    },
    {
      "name": "HTC Incredible S",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p21 ; ",
      "legacy_versions": [
        "4.0.0.4",
        "4.0.0.6",
        "4.0.0.7",
        "4.0.0.8",
        "5.0.1.9"
      ],
      "key": "vivo",
      "init": "init.vivo.rc",
      "lunch": "cyanogen_vivo-eng",
      "version": "5.0.2.0"
    },
    {
      "name": "HTC Incredible 2",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p21 ; ",
      "legacy_versions": [
        "4.0.0.4",
        "4.0.0.6",
        "4.0.0.7",
        "4.0.0.8",
        "5.0.1.9"
      ],
      "key": "vivow",
      "init": "init.vivow.rc",
      "lunch": "cyanogen_vivow-eng",
      "alternate_recovery": {
        "name": "RA_GNM Recovery v3.05",
        "clockwork": false,
        "url": "http://dl.dropbox.com/u/12949506/RomManager/recovery-ra-vivow-3.05.img"
      },
      "version": "5.0.2.0"
    },
    {
      "name": "LG Optimus 3D",
      "touch_version": "6.0.1.9",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p6 ; ",
      "legacy_versions": [
        "4.0.0.7",
        "4.0.0.9",
        "5.0.1.4",
        "5.0.2.0",
        "5.0.2.7"
      ],
      "key": "p920",
      "lunch": "cm_p920-userdebug",
      "reboot_recovery": "echo '518 R 1' > /sys/kernel/kobject_lge_nvdata/dynamic_nvdata_raw_write ; reboot ; ",
      "inits": [
        "init.p920.rc",
        "/bootimages/opening_01.rle"
      ],
      "version": "6.0.1.9"
    },
    {
      "name": "Samsung Galaxy Ace",
      "flash_recovery": "/data/data/com.koushikdutta.rommanager/files/flash_image recoveryonly %s ; ",
      "legacy_versions": [

      ],
      "key": "galaxyace",
      "init": "init.galaxyace.rc",
      "version": "4.0.0.9"
    },
    {
      "name": "Motorola Atrix 4G",
      "touch_version": "5.8.1.8",
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
      "key": "olympus",
      "init": "init_prep_keypad.sh",
      "lunch": "generic_olympus-eng",
      "inits": [
        "init_prep_keypad.sh",
        "init.olympus.rc"
      ],
      "version": "5.0.2.0"
    },
    {
      "name": "Viewsonic GTablet (smb_a1002)",
      "flash_recovery": "/data/data/com.koushikdutta.rommanager/files/tegra_flash_image recovery %s ; ",
      "legacy_versions": [

      ],
      "key": "smb_a1002",
      "init": "init_recovery.rc",
      "version": "4.0.1.5"
    },
    {
      "name": "HTC EVO 3D",
      "touch_version": "5.8.0.2",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p22 ; ",
      "legacy_versions": [
        "4.0.1.5",
        "5.0.0.0",
        "5.0.1.0"
      ],
      "key": "shooter",
      "init": "init.shooter.rc",
      "lunch": "htc_shooter-eng",
      "version": "5.0.2.0"
    },
    {
      "name": "HTC Sensation",
      "touch_version": "5.8.0.9",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p21 ; ",
      "legacy_versions": [
        "4.0.1.5",
        "5.0.0.1",
        "5.0.0.7",
        "5.0.0.8",
        "5.0.1.0"
      ],
      "key": "pyramid",
      "init": "init.pyramid.rc",
      "lunch": "full_pyramid-eng",
      "version": "5.0.2.0"
    },
    {
      "name": "Huawei Ascend 2 (M865)",
      "legacy_versions": [

      ],
      "key": "ascend2",
      "init": "init.qcom.rc",
      "inits": [
        "init.qcom.rc",
        "init.huawei.rc"
      ],
      "version": "4.0.1.5"
    },
    {
      "name": "Micromax A70",
      "legacy_versions": [

      ],
      "key": "a70",
      "init": "init.qcom.rc",
      "version": "4.0.1.5"
    },
    {
      "name": "Samsung Galaxy Gio",
      "readonly_recovery": true,
      "legacy_versions": [

      ],
      "key": "galaxygio",
      "init": "init.galaxygio.rc",
      "version": "4.0.1.5"
    },
    {
      "name": "Samsung Indulge 910",
      "readonly_recovery": true,
      "legacy_versions": [

      ],
      "key": "indulge910",
      "init": "init.smdkc110.rc",
      "version": "4.0.1.5"
    },
    {
      "name": "Samsung Indulge 915",
      "readonly_recovery": true,
      "legacy_versions": [

      ],
      "key": "indulge915",
      "init": "init.smdkc110.rc",
      "version": "4.0.1.5"
    },
    {
      "name": "LG Optimus Black",
      "touch_version": "6.0.1.4",
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
      "key": "p970",
      "init": "/bootimages/ON_480x800_08fps_0000.rle",
      "lunch": "cm_p970-userdebug",
      "version": "6.0.1.4"
    },
    {
      "name": "HTC EVO 3D (GSM)",
      "touch_version": "5.8.0.2",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p21 ; ",
      "legacy_versions": [
        "5.0.1.6",
        "5.0.1.7",
        "5.0.1.8",
        "5.0.1.9"
      ],
      "key": "shooteru",
      "init": "init.shooteru.rc",
      "lunch": "full_shooteru-eng",
      "version": "5.0.2.0"
    },
    {
      "name": "Motorola Droid 2 Global",
      "flash_recovery": "dd if=%s of=/preinstall/recovery/recovery.zip ; ",
      "readonly_recovery": true,
      "legacy_versions": [

      ],
      "key": "droid2we",
      "init": "init.mapphone_cdma.rc",
      "lunch": "cyanogen_droid2we-eng",
      "reboot_recovery": "rm /cache/recovery/command ; echo 1 > /data/.recovery_mode ; sync ; reboot ;",
      "version": "5.0.2.3"
    },
    {
      "name": "Motorola Droid Bionic",
      "flash_recovery": "dd if=%s of=/preinstall/recovery/recovery.zip ; ",
      "readonly_recovery": true,
      "legacy_versions": [
        "5.0.2.3",
        "5.0.2.4"
      ],
      "key": "targa",
      "init": "init.mapphone_cdma.rc",
      "lunch": "generic_targa-eng",
      "reboot_recovery": "rm /cache/recovery/command ; echo 1 > /data/.recovery_mode ; sync ; reboot ;",
      "version": "5.0.2.5"
    },
    {
      "name": "Motorola Droid X2",
      "flash_recovery": "dd if=%s of=/preinstall/recovery/recovery.zip ; ",
      "readonly_recovery": true,
      "legacy_versions": [
        "5.0.2.3",
        "5.0.2.4"
      ],
      "key": "daytona",
      "init": "init.mapphone_cdma.rc",
      "lunch": "generic_daytona-eng",
      "reboot_recovery": "rm /cache/recovery/command ; echo 1 > /data/.recovery_mode ; sync ; reboot ;",
      "version": "5.0.2.5"
    },
    {
      "name": "Motorola Droid 3",
      "flash_recovery": "dd if=%s of=/preinstall/recovery/recovery.zip ; ",
      "readonly_recovery": true,
      "legacy_versions": [
        "5.0.2.5"
      ],
      "key": "solana",
      "init": "init.mapphone_cdma.rc",
      "lunch": "full_solana-eng",
      "reboot_recovery": "rm /cache/recovery/command ; echo 1 > /data/.recovery_mode ; sync ; reboot ;",
      "version": "5.0.2.6"
    },
    {
      "name": "Motorola Backflip",
      "legacy_versions": [

      ],
      "key": "motus",
      "init": "init.motus.rc",
      "lunch": "cyanogen_motus-eng",
      "version": "5.0.2.6"
    },
    {
      "name": "Samsung Galaxy Mini",
      "readonly_recovery": true,
      "legacy_versions": [

      ],
      "key": "tass",
      "init": "init.gt-s5570.rc",
      "lunch": "tass-eng",
      "version": "5.0.2.6"
    },
    {
      "name": "Huawei U8800",
      "flash_recovery": "mount -o remount,rw -t vfat /dev/block/mmcblk0p1 /cust_backup ; cat %s > /cust_backup/image/recovery.img ;",
      "legacy_versions": [

      ],
      "key": "u8800",
      "init": "init.u8800.rc",
      "lunch": "huawei_u8800-eng",
      "version": "5.0.2.6"
    },
    {
      "name": "Samsung Galaxy S2 (AT&T)",
      "touch_version": "5.8.1.5",
      "readonly_recovery": true,
      "legacy_versions": [

      ],
      "key": "galaxys2att",
      "init": "init.smdkc210.rc",
      "lunch": "cyanogen_galaxys2att-eng",
      "inits": [
        "init.smdkc210.rc",
        "init.smdk4210.rc"
      ],
      "version": "5.0.2.6"
    },
    {
      "name": "Samsung Galaxy S2 (T-Mobile)",
      "owners": {
        "jmprblckwing182@gmail.com": true
      },
      "touch_version": "6.0.2.8",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p22 bs=4096 ; ",
      "legacy_versions": [
        "5.0.2.6",
        "5.0.2.7",
        "6.0.1.4",
        "6.0.1.5",
        "6.0.1.9",
        "6.0.2.3",
        "6.0.2.7"
      ],
      "key": "hercules",
      "init": "init.target.rc",
      "lunch": "cm_hercules-userdebug",
      "version": "6.0.2.8"
    },
    {
      "name": "Samsung Epic 4G Touch",
      "touch_version": "5.8.1.5",
      "readonly_recovery": true,
      "legacy_versions": [
        "5.0.2.6",
        "5.0.2.7"
      ],
      "key": "epic4gtouch",
      "init": "init.smdkc210.rc",
      "lunch": "full_epic4gtouch-eng",
      "version": "5.0.2.7"
    },
    {
      "name": "HTC Amaze",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p23 bs=4096 ; ",
      "legacy_versions": [

      ],
      "key": "ruby",
      "init": "init.ruby.rc",
      "lunch": "full_ruby-eng",
      "version": "5.0.2.6"
    },
    {
      "name": "Samsung Galaxy 5",
      "readonly_recovery": true,
      "legacy_versions": [
        "5.0.2.8"
      ],
      "key": "galaxy5",
      "init": "init.gt-i5500.rc",
      "lunch": "samsung_galaxy5-eng",
      "version": "5.0.2.8"
    },
    {
      "name": "ZTE Racer",
      "legacy_versions": [

      ],
      "key": "mooncake",
      "init": "init.mooncake.rc",
      "lunch": "generic_mooncake-eng",
      "version": "5.0.2.7"
    },
    {
      "name": "Samsung Galaxy Tab (VZW)",
      "readonly_recovery": true,
      "legacy_versions": [
        "5.0.2.7",
        "5.0.2.7",
        "5.0.2.7"
      ],
      "key": "vzwtab",
      "init": "init.smdkc110.rc",
      "lunch": "full_vzwtab-eng",
      "version": "5.0.2.7"
    },
    {
      "name": "HTC MyTouch 4G Slide",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p21 bs=4096 ; ",
      "legacy_versions": [
        "5.0.2.7",
        "5.0.2.7"
      ],
      "key": "doubleshot",
      "init": "init.doubleshot.rc",
      "lunch": "full_doubleshot-eng",
      "version": "5.0.2.7"
    },
    {
      "name": "Google Galaxy Nexus (GSM)",
      "touch_version": "6.0.2.3",
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
        "6.0.1.5"
      ],
      "key": "maguro",
      "init": "init.tuna.rc",
      "lunch": "cm_maguro-userdebug",
      "version": "6.0.2.3"
    },
    {
      "name": "Google Galaxy Nexus (Verizon)",
      "touch_version": "6.0.2.3",
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
        "6.0.1.5"
      ],
      "key": "toro",
      "init": "init.tuna.rc",
      "lunch": "cm_toro-userdebug",
      "version": "6.0.2.3"
    },
    {
      "name": "LG Optimus C LW690",
      "legacy_versions": [

      ],
      "key": "lg690",
      "init": "init.thunderc.rc",
      "lunch": "full_lg690-eng",
      "version": "5.0.2.7"
    },
    {
      "name": "LG Optimus Pro",
      "legacy_versions": [

      ],
      "key": "c660",
      "init": "init.muscat.rc",
      "lunch": "c660-eng",
      "version": "5.0.2.7"
    },
    {
      "name": "LG Optimus Hub",
      "legacy_versions": [

      ],
      "key": "e510",
      "init": "init.univa.rc",
      "lunch": "e510-eng",
      "version": "5.0.2.7"
    },
    {
      "name": "Samsung Epic4G (MTD)",
      "touch_version": "5.8.1.5",
      "legacy_versions": [

      ],
      "key": "epicmtd",
      "officially_supported": false,
      "init": "init.victory.rc",
      "lunch": "cyanogen_epicmtd-eng",
      "reboot_recovery": "/system/xbin/busybox devmem 0x57fff800 32 0x5EC0B007; sync ; reboot ;",
      "version": "5.0.2.7"
    },
    {
      "name": "HTC Holiday",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p23 bs=4096 ; ",
      "legacy_versions": [
        "5.0.2.7",
        "5.0.2.7",
        "5.0.2.7"
      ],
      "key": "holiday",
      "init": "init.holiday.rc",
      "lunch": "full_holiday-eng",
      "version": "5.0.2.7"
    },
    {
      "name": "LG Optimus SOL / TMo LG myTouch",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p17 bs=4096 ;",
      "legacy_versions": [

      ],
      "key": "e730",
      "lunch": "e730-eng",
      "inits": [
        "init.victor.rc",
        "init.e739.rc"
      ],
      "version": "5.0.2.7"
    },
    {
      "name": "HTC Wildfire S",
      "legacy_versions": [
        "5.0.2.7"
      ],
      "key": "marvel",
      "init": "init.marvel.rc",
      "lunch": "generic_marvel-eng",
      "version": "5.0.2.8"
    },
    {
      "name": "Motorola Photon 4G",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p10 bs=4096 ;",
      "legacy_versions": [
        "5.0.2.7"
      ],
      "key": "sunfire",
      "init": "init.mapphone_umts.rc",
      "lunch": "full_sunfire-eng",
      "inits": [
        "init.mapphone_umts.rc",
        "init.mapphone_cdma.rc"
      ],
      "version": "5.0.2.8"
    },
    {
      "name": "Huawei U8160",
      "legacy_versions": [
        "5.0.2.8"
      ],
      "key": "u8160",
      "init": "init.u8160.rc",
      "lunch": "huawei_u8160-eng",
      "inits": [
        "init.huawei.rc",
        "init.u8160.rc"
      ],
      "version": "5.0.2.8"
    },
    {
      "name": "HTC Rezound",
      "touch_version": "6.0.2.3",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p23 bs=4096 ;",
      "legacy_versions": [
        "5.5.0.4",
        "5.5.0.5",
        "5.8.1.3",
        "5.8.1.4",
        "5.8.1.4",
        "5.8.1.4",
        "5.8.1.4",
        "6.0.2.2"
      ],
      "key": "vigor",
      "init": "init.vigor.rc",
      "lunch": "cm_vigor-userdebug",
      "version": "6.0.2.3"
    },
    {
      "name": "HTC EVO View 4G",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p21 bs=4096 ;",
      "legacy_versions": [

      ],
      "key": "express",
      "init": "init.expresskt.rc",
      "lunch": "full_express-userdebug",
      "version": "5.8.1.5"
    },
    {
      "name": "Asus Transformer Prime",
      "touch_version": "5.8.3.4",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p4 ;",
      "legacy_versions": [
        "5.5.0.4",
        "5.8.2.0"
      ],
      "key": "tf201",
      "init": "init.cardhu.rc",
      "lunch": "cm_tf201-userdebug",
      "version": "5.8.3.4"
    },
    {
      "name": "Motorola Droid 4",
      "legacy_versions": [

      ],
      "key": "maserati",
      "officially_supported": false,
      "init": "init.mapphone_cdma.rc",
      "reboot_recovery": "rm /cache/recovery/command ; echo 1 > /data/.recovery_mode ; sync ; reboot ;",
      "version": "5.0.2.0"
    },
    {
      "name": "Motorola RAZR",
      "legacy_versions": [

      ],
      "key": "spyder",
      "officially_supported": false,
      "init": "init.mapphone_cdma.rc",
      "reboot_recovery": "rm /cache/recovery/command ; echo 1 > /data/.recovery_mode ; sync ; reboot ;",
      "version": "5.0.2.0"
    },
    {
      "name": "HTC Wildfire S CDMA",
      "legacy_versions": [

      ],
      "key": "marvelc",
      "init": "init.marvelc.rc",
      "lunch": "full_marvelc-eng",
      "version": "5.0.2.8"
    },
    {
      "name": "Asus Transformer",
      "touch_version": "5.8.3.4",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p4 ;",
      "legacy_versions": [
        "5.5.0.4",
        "5.8.1.9",
        "5.8.2.0",
        "5.8.2.1",
        "5.8.3.4"
      ],
      "key": "tf101",
      "init": "init.ventana.rc",
      "lunch": "cm_tf101-userdebug",
      "version": "6.0.1.3"
    },
    {
      "name": "LG Nitro HD / LG P930 (AT&T)",
      "touch_version": "6.0.1.5",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p13 ;",
      "legacy_versions": [
        "5.8.2.0",
        "6.0.1.4"
      ],
      "key": "p930",
      "init": "bootimages/boot_logo_00000.rle",
      "lunch": "cm_p930-userdebug",
      "version": "6.0.1.5"
    },
    {
      "name": "Samsung Galaxy S2 (SGH-I777)",
      "touch_version": "6.0.1.0",
      "readonly_recovery": true,
      "legacy_versions": [
        "5.8.1.8"
      ],
      "key": "i777",
      "init": "init.smdkc210.rc",
      "lunch": "cm_i777-userdebug",
      "inits": [
        "init.smdkc210.rc",
        "init.smdk4210.rc"
      ],
      "version": "6.0.1.0"
    },
    {
      "name": "HTC Pico",
      "legacy_versions": [

      ],
      "key": "pico",
      "init": "init.pico.rc",
      "lunch": "full_pico-eng",
      "version": "5.0.2.8"
    },
    {
      "name": "HTC One X (GSM)",
      "touch_version": "5.8.4.0",
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
      "key": "endeavoru",
      "init": "ueventd.endeavoru.rc",
      "lunch": "cm_endeavoru-userdebug",
      "version": "5.8.4.0"
    },
    {
      "name": "HTC One S",
      "touch_version": "6.0.2.9",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p22 bs=4096 ;",
      "legacy_versions": [
        "5.5.0.4",
        "5.8.2.1",
        "5.8.2.2",
        "5.8.2.3",
        "5.8.3.1"
      ],
      "key": "ville",
      "init": "init.ville.rc",
      "lunch": "cm_ville-userdebug",
      "version": "6.0.2.9"
    },
    {
      "name": "Samsung Galaxy Tab (MTD and GSM)",
      "legacy_versions": [

      ],
      "key": "p1",
      "officially_supported": false,
      "init": "init.p1.rc",
      "reboot_recovery": "echo 1 > /cache/.startrecovery ; sync ; reboot ;",
      "version": "5.8.2.1"
    },
    {
      "name": "Samsung Galaxy Tab (MTD and CDMA)",
      "legacy_versions": [

      ],
      "key": "p1c",
      "officially_supported": false,
      "init": "init.p1c.rc",
      "reboot_recovery": "echo 1 > /cache/.startrecovery ; sync ; reboot ;",
      "version": "5.8.2.1"
    },
    {
      "name": "Google Galaxy Nexus (Sprint)",
      "touch_version": "6.0.2.3",
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
        "6.0.1.5"
      ],
      "key": "toroplus",
      "init": "init.tuna.rc",
      "lunch": "cm_toroplus-userdebug",
      "version": "6.0.2.3"
    },
    {
      "name": "Samsung Galaxy Tab 10.1 (Wifi)",
      "touch_version": "5.8.3.1",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p2 ; ",
      "legacy_versions": [
        "4.0.0.4",
        "5.8.3.1"
      ],
      "key": "p4wifi",
      "init": "ueventd.p3.rc",
      "lunch": "cm_p4wifi-userdebug",
      "version": "6.0.2.9"
    },
    {
      "name": "Motorola XOOM (Wi-Fi only)",
      "touch_version": "6.0.2.9",
      "flash_recovery": "dd if=%s of=/dev/block/platform/sdhci-tegra.3/by-name/recovery ; ",
      "legacy_versions": [
        "5.8.3.1"
      ],
      "key": "wingray",
      "init": "init.wingray.rc",
      "lunch": "cm_wingray-userdebug",
      "version": "6.0.2.9"
    },
    {
      "name": "LG Marquee",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p4 bs=4096 ; ",
      "legacy_versions": [

      ],
      "key": "marquee",
      "init": "init.omap.post_boot.sh",
      "lunch": "full_marquee-eng",
      "version": "5.0.2.8"
    },
    {
      "name": "LG Ignite",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p4 bs=4096 ; ",
      "legacy_versions": [

      ],
      "key": "ignite",
      "init": "init.omap.post_boot.sh",
      "lunch": "full_ignite-eng",
      "version": "5.0.2.8"
    },
    {
      "name": "LG Connect 4G MS840",
      "touch_version": "5.8.3.1",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p13 bs=4096 ; ",
      "legacy_versions": [

      ],
      "key": "ms840",
      "init": "init.target.rc",
      "lunch": "full_ms840-userdebug",
      "version": "5.8.3.1"
    },
    {
      "name": "LG Lucid VS840",
      "touch_version": "5.8.3.1",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p13 bs=4096 ; ",
      "legacy_versions": [

      ],
      "key": "vs840",
      "init": "init.target.rc",
      "lunch": "full_vs840-userdebug",
      "version": "5.8.3.1"
    },
    {
      "name": "HTC EVO LTE",
      "touch_version": "5.8.3.5",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p22 bs=4096 ; ",
      "legacy_versions": [
        "5.8.3.4",
        "5.8.3.4"
      ],
      "key": "jewel",
      "init": "init.jewel.rc",
      "lunch": "cm_jewel-userdebug",
      "version": "5.8.3.5"
    },
    {
      "name": "Samsung Galaxy S3 (GT-I9300)",
      "touch_version": "6.0.2.7",
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
        "6.0.1.2"
      ],
      "key": "i9300",
      "init": "ueventd.smdk4x12.rc",
      "lunch": "cm_i9300-userdebug",
      "ro.product.devices": [
        "i9300",
        "m0"
      ],
      "version": "6.0.2.7"
    },
    {
      "name": "Samsung Skyrocket",
      "touch_version": "6.0.1.4",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p22 bs=4096 ; ",
      "legacy_versions": [
        "5.8.4.3",
        "6.0.1.0"
      ],
      "key": "skyrocket",
      "init": "init.qcom.usb.rc",
      "lunch": "cm_skyrocket-userdebug",
      "version": "6.0.1.4"
    },
    {
      "name": "Samsung Galaxy Note (AT&T)",
      "touch_version": "5.8.4.3",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p22 bs=4096 ; ",
      "legacy_versions": [
        "5.8.4.3"
      ],
      "key": "quincyatt",
      "init": "init.qcom.usb.rc",
      "lunch": "cm_quincyatt-userdebug",
      "version": "5.8.4.8"
    },
    {
      "name": "LG Optimus L3",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p17 bs=4096 ; ",
      "legacy_versions": [

      ],
      "key": "e400",
      "init": "init.e0.rc",
      "lunch": "cm_e400-userdebug",
      "version": "5.8.4.5"
    },
    {
      "name": "HTC One V",
      "readonly_recovery": true,
      "legacy_versions": [

      ],
      "key": "primou",
      "init": "init.primou.rc",
      "lunch": "cm_primou-userdebug",
      "version": "5.8.4.5"
    },
    {
      "name": "Samsung Galaxy S3 (AT&T)",
      "touch_version": "6.0.2.9",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p18 bs=4096 ; ",
      "legacy_versions": [
        "5.8.4.5",
        "5.8.4.6",
        "5.8.4.7",
        "6.0.1.1",
        "6.0.1.2",
        "6.0.2.3",
        "6.0.2.8"
      ],
      "key": "d2att",
      "init": "init.d2att.rc",
      "lunch": "cm_d2att-userdebug",
      "version": "6.0.2.9"
    },
    {
      "name": "Samsung Galaxy S3 (T-Mobile)",
      "touch_version": "6.0.2.9",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p18 bs=4096 ; ",
      "legacy_versions": [
        "5.8.4.5",
        "5.8.4.6",
        "5.8.4.7",
        "6.0.1.2",
        "6.0.2.3",
        "6.0.2.8"
      ],
      "key": "d2tmo",
      "init": "init.d2tmo.rc",
      "lunch": "cm_d2tmo-userdebug",
      "version": "6.0.2.9"
    },
    {
      "name": "Samsung Galaxy S3 (Sprint)",
      "touch_version": "6.0.2.9",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p18 bs=4096 ; ",
      "legacy_versions": [
        "5.8.4.5",
        "5.8.4.6",
        "5.8.4.7",
        "5.8.4.9",
        "6.0.1.2",
        "6.0.2.3",
        "6.0.2.8"
      ],
      "key": "d2spr",
      "init": "init.d2spr.rc",
      "lunch": "cm_d2spr-userdebug",
      "version": "6.0.2.9"
    },
    {
      "name": "Samsung Galaxy S3 (Verizon)",
      "touch_version": "6.0.2.8",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p18 bs=4096 ; ",
      "legacy_versions": [
        "5.8.4.6",
        "5.8.4.7",
        "5.8.4.8",
        "5.8.4.9",
        "6.0.1.2",
        "6.0.2.3",
        "6.0.2.8"
      ],
      "key": "d2vzw",
      "init": "init.d2vzw.rc",
      "twrp_version": "2.4.3.0",
      "lunch": "cm_d2vzw-userdebug",
      "version": "6.0.2.9"
    },
    {
      "name": "HTC One V (CDMA)",
      "touch_version": "5.8.4.7",
      "readonly_recovery": true,
      "legacy_versions": [
        "5.8.4.6",
        "5.8.4.7"
      ],
      "key": "primoc",
      "init": "init.primoc.rc",
      "lunch": "full_primoc-userdebug",
      "version": "5.8.4.7"
    },
    {
      "name": "Google Nexus 7",
      "touch_version": "6.0.2.3",
      "flash_recovery": "dd if=%s of=/dev/block/platform/sdhci-tegra.3/by-name/SOS bs=4096 ; ",
      "legacy_versions": [
        "6.0.0.6",
        "6.0.1.0",
        "6.0.1.9"
      ],
      "key": "grouper",
      "init": "init.grouper.rc",
      "lunch": "cm_grouper-userdebug",
      "version": "6.0.2.3"
    },
    {
      "name": "LG Optimus LTE (SKT)",
      "touch_version": "6.0.1.0",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p13 bs=4096 ; ",
      "legacy_versions": [

      ],
      "key": "su640",
      "init": "init.su640.rc",
      "lunch": "cm_su640-userdebug",
      "version": "6.0.1.0"
    },
    {
      "name": "Samsung Galaxy S2 (GT-I9100G)",
      "legacy_versions": [

      ],
      "key": "i9100g",
      "officially_supported": false,
      "init": "init.t1.rc",
      "lunch": "cm_i9100g-userdebug",
      "version": "6.0.1.0"
    },
    {
      "name": "Samsung Galaxy Tab 2 (GT-P3100)",
      "touch_version": "6.0.2.7",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p6 bs=4096 ; ",
      "legacy_versions": [
        "6.0.1.1",
        "6.0.2.3"
      ],
      "key": "p3100",
      "init": "init.espresso.rc",
      "lunch": "cm_p3100-userdebug",
      "version": "6.0.2.7"
    },
    {
      "name": "Samsung Galaxy Tab 2 (GT-P3110)",
      "touch_version": "6.0.2.7",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p6 bs=4096 ; ",
      "legacy_versions": [
        "6.0.1.1",
        "6.0.2.3"
      ],
      "key": "p3110",
      "init": "init.espresso.rc",
      "lunch": "cm_p3110-userdebug",
      "version": "6.0.2.7"
    },
    {
      "name": "Samsung Galaxy Tab 2 (GT-P3113)",
      "touch_version": "6.0.2.3",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p6 bs=4096 ; ",
      "legacy_versions": [
        "6.0.1.1"
      ],
      "key": "p3113",
      "init": "init.espresso.rc",
      "lunch": "cm_p3113-userdebug",
      "version": "6.0.2.3"
    },
    {
      "name": "Samsung Galaxy Tab 2 (GT-P5100)",
      "touch_version": "6.0.2.7",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p6 bs=4096 ; ",
      "legacy_versions": [
        "6.0.1.1",
        "6.0.2.3"
      ],
      "key": "p5100",
      "init": "init.espresso10.rc",
      "lunch": "cm_p5100-userdebug",
      "version": "6.0.2.7"
    },
    {
      "name": "Samsung Galaxy Tab 2 (GT-P5110)",
      "touch_version": "6.0.2.7",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p6 bs=4096 ; ",
      "legacy_versions": [
        "6.0.1.1",
        "6.0.2.3"
      ],
      "key": "p5110",
      "init": "init.espresso10.rc",
      "lunch": "cm_p5110-userdebug",
      "version": "6.0.2.7"
    },
    {
      "name": "Samsung Galaxy Tab 2 (GT-P5113)",
      "touch_version": "6.0.2.3",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p6 bs=4096 ; ",
      "legacy_versions": [
        "6.0.1.1"
      ],
      "key": "p5113",
      "init": "init.espresso10.rc",
      "lunch": "cm_p5113-userdebug",
      "version": "6.0.2.3"
    },
    {
      "name": "LG Spectrum 4G",
      "touch_version": "6.0.1.1",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p13 bs=4096 ; ",
      "legacy_versions": [

      ],
      "key": "vs920",
      "init": "init.target.rc",
      "lunch": "cm_vs920-userdebug",
      "inits": [
        "init.target.rc",
        "init.iproj.rc",
        "init.i_vzw.rc",
        "init.iprj.rc"
      ],
      "version": "6.0.1.1"
    },
    {
      "name": "Score & Score M",
      "touch_version": "6.0.1.1",
      "legacy_versions": [

      ],
      "key": "x500",
      "init": "init.zte.rc",
      "lunch": "cm_x500-userdebug",
      "version": "6.0.1.1"
    },
    {
      "name": "LG Revolution 4G",
      "touch_version": "6.0.1.1",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p14 bs=4096 ; ",
      "legacy_versions": [

      ],
      "key": "vs910",
      "init": "init.qcom.rc",
      "lunch": "cm_vs910-userdebug",
      "inits": [
        "init.qcom.rc",
        "init.bryce.rc"
      ],
      "version": "6.0.1.1"
    },
    {
      "name": "LG Esteeem 4G",
      "touch_version": "6.0.1.1",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p14 bs=4096 ; ",
      "legacy_versions": [
        "5.0.2.8"
      ],
      "key": "ms910",
      "init": "init.qcom.rc",
      "lunch": "cm_ms910-userdebug",
      "inits": [
        "init.qcom.rc",
        "init.bryce.rc"
      ],
      "version": "6.0.1.1"
    },
    {
      "name": "LG Optimus M+",
      "touch_version": "6.0.1.1",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p17 bs=4096 ; ",
      "legacy_versions": [
        "6.0.1.0"
      ],
      "key": "ms695",
      "init": "init.qcom.rc",
      "lunch": "cm_ms695-userdebug",
      "inits": [
        "init.qcom.rc",
        "init.m3.rc"
      ],
      "version": "6.0.1.1"
    },
    {
      "name": "Samsung Galaxy Tab (MTD and GSM - L)",
      "legacy_versions": [

      ],
      "key": "p1l",
      "officially_supported": false,
      "init": "init.p1.rc",
      "reboot_recovery": "echo 1 > /cache/.startrecovery ; sync ; reboot ;",
      "version": "5.8.2.1"
    },
    {
      "name": "Samsung Galaxy Tab (MTD and GSM - N)",
      "legacy_versions": [

      ],
      "key": "p1n",
      "officially_supported": false,
      "init": "init.p1.rc",
      "reboot_recovery": "echo 1 > /cache/.startrecovery ; sync ; reboot ;",
      "version": "5.8.2.1"
    },
    {
      "name": "Samsung Galaxy S3 (US Cellular)",
      "touch_version": "6.0.2.9",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p18 bs=4096 ; ",
      "legacy_versions": [
        "6.0.1.2",
        "6.0.2.3",
        "6.0.2.8"
      ],
      "key": "d2usc",
      "init": "init.d2usc.rc",
      "lunch": "cm_d2usc-userdebug",
      "version": "6.0.2.9"
    },
    {
      "name": "Motorola Photon Q",
      "flash_recovery": "dd if=%s of=/dev/block/platform/msm_sdcc.1/by-name/recovery bs=4096 ; ",
      "legacy_versions": [

      ],
      "key": "asanti",
      "init": "init.mmi.usb.rc",
      "lunch": "cm_asanti-userdebug",
      "inits": [
        "init.asanti.rc",
        "init.sprint.rc"
      ],
      "version": "6.0.1.3"
    },
    {
      "name": "LG Optimus Me",
      "legacy_versions": [
        "6.0.1.3",
        "6.0.1.4"
      ],
      "key": "p350",
      "init": "init.pecan.rc",
      "lunch": "cm_p350-userdebug",
      "version": "6.0.1.5"
    },
    {
      "name": "Samsung Galaxy Tab 8.9 (AT&T)",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p22 bs=4096 ; ",
      "legacy_versions": [

      ],
      "key": "p5att",
      "init": "fstab.qcom",
      "lunch": "cm_p5att-userdebug",
      "version": "6.0.1.4"
    },
    {
      "name": "Samsung Galaxy S Blaze 4G",
      "touch_version": "6.0.1.4",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p22 bs=4096 ; ",
      "legacy_versions": [

      ],
      "key": "t769",
      "init": "init.target.rc",
      "lunch": "cm_t769-userdebug",
      "version": "6.0.1.4"
    },
    {
      "name": "Samsung Galaxy S3 (MetroPCS)",
      "touch_version": "6.0.2.9",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p18 bs=4096 ; ",
      "legacy_versions": [
        "6.0.1.5",
        "6.0.2.3",
        "6.0.2.8"
      ],
      "key": "d2mtr",
      "init": "init.carrier.rc",
      "lunch": "cm_d2mtr-userdebug",
      "inits": [
        "init.carrier.rc",
        "init.d2mtr.rc"
      ],
      "version": "6.0.2.9"
    },
    {
      "name": "Asus Transformer Pad Infinity",
      "touch_version": "6.0.2.3",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p4 bs=4096 ; ",
      "legacy_versions": [
        "6.0.1.8"
      ],
      "key": "tf700t",
      "init": "init.tf700t.rc",
      "lunch": "cm_tf700t-userdebug",
      "reboot_recovery": "echo 'boot-recovery' | dd of=/dev/block/mmcblk0p3 seek=6144 bs=1 ; reboot ; ",
      "version": "6.0.2.3"
    },
    {
      "name": "Google Nexus 10",
      "touch_version": "6.0.2.3",
      "flash_recovery": "dd if=%s of=/dev/block/platform/dw_mmc.0/by-name/recovery bs=4096 ; ",
      "legacy_versions": [
        "6.0.1.5",
        "6.0.1.5",
        "6.0.1.6",
        "6.0.1.7",
        "6.0.1.8",
        "6.0.1.9"
      ],
      "key": "manta",
      "init": "init.manta.rc",
      "lunch": "cm_manta-userdebug",
      "version": "6.0.2.3"
    },
    {
      "name": "Google Nexus 4",
      "touch_version": "6.0.2.3",
      "flash_recovery": "dd if=%s of=/dev/block/platform/msm_sdcc.1/by-name/recovery bs=4096 ; ",
      "legacy_versions": [
        "6.0.1.5",
        "6.0.1.6",
        "6.0.1.8",
        "6.0.1.9",
        "6.0.2.0"
      ],
      "key": "mako",
      "init": "init.mako.rc",
      "lunch": "cm_mako-userdebug",
      "version": "6.0.2.3"
    },
    {
      "name": "HTC Droid DNA",
      "touch_version": "6.0.2.8",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p20 bs=4096 ; ",
      "legacy_versions": [
        "6.0.1.5",
        "6.0.1.9",
        "6.0.2.3",
        "6.0.2.7"
      ],
      "key": "dlx",
      "init": "init.debug_mfgkernel.rc",
      "lunch": "cm_dlx-userdebug",
      "version": "6.0.2.8"
    },
    {
      "name": "Samsung Galaxy Note 2 (HSPA+)",
      "touch_version": "6.0.1.9",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p6 bs=4096 ; ",
      "legacy_versions": [

      ],
      "key": "n7100",
      "init": "init.smdk4x12.rc",
      "lunch": "cm_n7100-userdebug",
      "version": "6.0.1.9"
    },
    {
      "name": "Acer A700",
      "touch_version": "6.0.2.3",
      "flash_recovery": "dd if=%s of=/dev/block/platform/sdhci-tegra.3/by-name/SOS bs=4096 ; ",
      "legacy_versions": [

      ],
      "key": "a700",
      "init": "init.picasso_mf.rc",
      "lunch": "cm_a700-userdebug",
      "version": "6.0.2.3"
    },
    {
      "name": "Google Nexus 7 (GSM)",
      "touch_version": "6.0.2.3",
      "flash_recovery": "dd if=%s of=/dev/block/platform/sdhci-tegra.3/by-name/SOS bs=4096 ; ",
      "legacy_versions": [

      ],
      "key": "tilapia",
      "init": "init.tilapia.rc",
      "lunch": "cm_tilapia-userdebug",
      "version": "6.0.2.3"
    },
    {
      "name": "Samsung Galaxy Note 2 (Sprint)",
      "touch_version": "6.0.2.5",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p9 bs=4096 ; ",
      "legacy_versions": [
        "6.0.2.3",
        "6.0.2.4"
      ],
      "key": "t0ltespr",
      "init": "init.t0ltespr.rc",
      "lunch": "cm_t0ltespr-userdebug",
      "version": "6.0.2.5"
    },
    {
      "name": "Samsung Galaxy Note 2 (T-Mobile)",
      "touch_version": "6.0.2.8",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p9 bs=4096 ; ",
      "legacy_versions": [
        "6.0.2.3",
        "6.0.2.4",
        "6.0.2.5",
        "6.0.2.7"
      ],
      "key": "t0ltetmo",
      "init": "init.t0ltetmo.rc",
      "lunch": "cm_t0ltetmo-userdebug",
      "version": "6.0.2.8"
    },
    {
      "name": "Samsung Galaxy Note 2 (Verizon)",
      "touch_version": "6.0.2.5",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p9 bs=4096 ; ",
      "legacy_versions": [
        "6.0.2.3",
        "6.0.2.4"
      ],
      "key": "t0ltevzw",
      "init": "init.t0ltevzw.rc",
      "lunch": "cm_t0ltevzw-userdebug",
      "version": "6.0.2.5"
    },
    {
      "name": "Samsung Galaxy Note 2 (AT&T)",
      "touch_version": "6.0.2.5",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p9 bs=4096 ; ",
      "legacy_versions": [
        "6.0.2.3",
        "6.0.2.4"
      ],
      "key": "t0lteatt",
      "init": "init.t0lteatt.rc",
      "lunch": "cm_t0lteatt-userdebug",
      "version": "6.0.2.5"
    },
    {
      "name": "Samsung Galaxy Note 2 (LTE)",
      "touch_version": "6.0.2.7",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p9 bs=4096 ; ",
      "legacy_versions": [
        "6.0.2.3",
        "6.0.2.4",
        "6.0.2.5"
      ],
      "key": "t0lte",
      "init": "init.t0lte.rc",
      "lunch": "cm_t0lte-userdebug",
      "version": "6.0.2.8"
    },
    {
      "name": "LG Optimus 3DMax",
      "touch_version": "6.0.2.3",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p6 ; ",
      "legacy_versions": [

      ],
      "key": "p720",
      "lunch": "cm_p720-userdebug",
      "reboot_recovery": "echo '518 R 1' > /sys/kernel/kobject_lge_nvdata/dynamic_nvdata_raw_write ; reboot ; ",
      "inits": [
        "init.lgep720board.rc",
        "/bootimages/battery_charging_01.rle"
      ],
      "version": "6.0.2.3"
    },
    {
      "name": "Samsung Galaxy S3 (Cricket)",
      "touch_version": "6.0.2.9",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p18 bs=4096 ; ",
      "legacy_versions": [
        "6.0.2.7",
        "6.0.2.8"
      ],
      "key": "d2cri",
      "init": "init.d2cri.rc",
      "lunch": "cm_d2cri-userdebug",
      "version": "6.0.2.9"
    },
    {
      "name": "HTC Sensation XL",
      "touch_version": "6.0.2.7",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p21 bs=4096 ; ",
      "legacy_versions": [

      ],
      "key": "runnymede",
      "init": "init.runnymede.rc",
      "lunch": "cm_runnymede-userdebug",
      "version": "6.0.2.7"
    },
    {
      "name": "Pantech Presto",
      "touch_version": "6.0.2.7",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p18 bs=4096 ; ",
      "legacy_versions": [

      ],
      "key": "presto",
      "init": "init.presto.rc",
      "lunch": "cm_presto-userdebug",
      "version": "6.0.2.7"
    },
    {
      "name": "ZTE Sequent",
      "touch_version": "6.0.2.7",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p13 bs=4096 ; ",
      "legacy_versions": [

      ],
      "key": "warp2",
      "init": "init.warp2.rc",
      "lunch": "cm_warp2-userdebug",
      "version": "6.0.2.7"
    },
    {
      "name": "Google Nexus Q",
      "flash_recovery": "dd if=%s of=/dev/block/platform/omap/omap_hsmmc.0/by-name/recovery bs=4096 ; ",
      "legacy_versions": [

      ],
      "key": "steelhead",
      "init": "init.steelhead.rc",
      "lunch": "cm_steelhead-userdebug",
      "version": "6.0.2.7"
    },
    {
      "name": "Samsung Prevail 2 (Boost Mobile)",
      "touch_version": "6.0.2.7",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p15 bs=4096 ; ",
      "legacy_versions": [

      ],
      "key": "prevail2spr",
      "lunch": "cm_prevail2spr-userdebug",
      "inits": [
        "init.carrier.rc",
        "init.prevail2spr.rc"
      ],
      "version": "6.0.2.7"
    },
    {
      "name": "Samsung Galaxy S3 Mini",
      "touch_version": "6.0.2.7",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p21 bs=4096 ; ",
      "legacy_versions": [

      ],
      "key": "golden",
      "init": "init.golden.rc",
      "lunch": "cm_golden-userdebug",
      "version": "6.0.2.7"
    },
    {
      "name": "HTC Droid Incredible 4G LTE",
      "touch_version": "6.0.2.9",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p22 bs=4096 ; ",
      "legacy_versions": [
        "6.0.2.8"
      ],
      "key": "fireball",
      "init": "init.fireball.rc",
      "lunch": "cm_fireball-userdebug",
      "version": "6.0.2.9"
    },
    {
      "name": "HTC Jetstream",
      "touch_version": "6.0.2.8",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p23 bs=4096 ; ",
      "legacy_versions": [

      ],
      "key": "puccinilte",
      "init": "init.puccinilte.rc",
      "lunch": "cm_puccinilte-userdebug",
      "version": "6.0.2.8"
    },
    {
      "name": "LG Optimus L7",
      "touch_version": "6.0.2.8",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p17 bs=4096 ; ",
      "legacy_versions": [

      ],
      "key": "p700",
      "init": "init.u0.rc",
      "lunch": "cm_p700-userdebug",
      "version": "6.0.2.8"
    },
    {
      "name": "HTC One",
      "touch_version": "6.0.2.8",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p34 bs=4096 ; ",
      "legacy_versions": [

      ],
      "key": "m7",
      "init": "init.m7.rc",
      "lunch": "cm_m7-userdebug",
      "version": "6.0.2.8"
    },
    {
      "name": "HTC Butterfly (dlxu)",
      "touch_version": "6.0.2.8",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p20 bs=4096 ; ",
      "legacy_versions": [

      ],
      "key": "dlxu",
      "init": "init.dlxu.rc",
      "lunch": "cm_dlxu-userdebug",
      "version": "6.0.2.8"
    },
    {
      "name": "HTC Butterfly (dlxub1)",
      "touch_version": "6.0.2.8",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p20 bs=4096 ; ",
      "legacy_versions": [

      ],
      "key": "dlxub1",
      "init": "init.dlxub1.rc",
      "lunch": "cm_dlxub1-userdebug",
      "version": "6.0.2.8"
    },
    {
      "name": "HTC Butterfly J",
      "touch_version": "6.0.2.8",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p20 bs=4096 ; ",
      "legacy_versions": [

      ],
      "key": "dlxj",
      "init": "init.dlxj.rc",
      "lunch": "cm_dlxj-userdebug",
      "version": "6.0.2.8"
    },
    {
      "name": "LG Optimus L5",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p17 bs=4096 ; ",
      "legacy_versions": [

      ],
      "key": "e610",
      "init": "init.m4.rc",
      "lunch": "cm_e610-userdebug",
      "version": "6.0.2.8"
    },
    {
      "name": "HTC One X (AT&T)",
      "touch_version": "6.0.2.8",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p22 bs=4096 ; ",
      "legacy_versions": [

      ],
      "key": "evita",
      "init": "init.evita.rc",
      "lunch": "cm_evita-userdebug",
      "version": "6.0.2.8"
    },
    {
      "name": "Samsung Galaxy Tab 10.1",
      "touch_version": "6.0.2.9",
      "flash_recovery": "dd if=%s of=/dev/block/platform/sdhci-tegra.3/by-num/p2 bs=4096 ; ",
      "legacy_versions": [

      ],
      "key": "p4",
      "init": "init.p4.rc",
      "lunch": "cm_p4-userdebug",
      "version": "6.0.2.9"
    },
    {
      "name": "Samsung Galaxy Tab 10.1 (T-Mobile)",
      "touch_version": "6.0.2.9",
      "flash_recovery": "dd if=%s of=/dev/block/platform/sdhci-tegra.3/by-num/p2 bs=4096 ; ",
      "legacy_versions": [

      ],
      "key": "p4tmo",
      "init": "init.p4tmo.rc",
      "lunch": "cm_p4tmo-userdebug",
      "version": "6.0.2.9"
    },
    {
      "name": "Samsung Galaxy Tab 10.1 (Verizon)",
      "touch_version": "6.0.2.9",
      "flash_recovery": "dd if=%s of=/dev/block/platform/sdhci-tegra.3/by-num/p2 bs=4096 ; ",
      "legacy_versions": [

      ],
      "key": "p4vzw",
      "init": "init.p4vzw.rc",
      "lunch": "cm_p4vzw-userdebug",
      "version": "6.0.2.9"
    },
    {
      "name": "LG Optimus L9",
      "touch_version": "6.0.2.9",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p4 bs=4096 ; ",
      "legacy_versions": [

      ],
      "key": "p760",
      "init": "init.u0.rc",
      "lunch": "cm_p760-userdebug",
      "version": "6.0.2.9"
    },
    {
      "name": "Samsung Galaxy S3 LTE (GT-I9305)",
      "touch_version": "6.0.2.9",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p9 bs=4096 ; ",
      "legacy_versions": [

      ],
      "key": "i9305",
      "init": "ueventd.smdk4x12.rc",
      "lunch": "cm_i9305-userdebug",
      "version": "6.0.2.9"
    }
  ],
  "use_in_app": false,
  "ad_network": "admob",
  "recovery_zip_url": "http://download2.clockworkmod.com/recoveries/recovery-clockwork-%s-%s.zip",
  "manifest_signature": "O8+Kc2mdQz0e/AjCQn6Rw6fK5Kr5LZItJ474Ua3gF2o4IgdCQZXIbwCHIo6xeqY3pVEGtjYmmyO1PkRYcGqq2rB2wQM8SoKFl/70vG0ihEZ5TDeruKUgxVVSNM3e09kBvCxYK89GWqVWkNHtvTu1T1F9w6FilzCsNFSAXHD0Bos=",
  "manifest": "http://developer.clockworkmod.com/merge",
  "version": "2.5.0.1"
}