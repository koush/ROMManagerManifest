{
  "owners": {
    "playfulgod@gmail.com": true,
    "attn1.repo@gmail.com": true,
    "cvpcsm@gmail.com": true,
    "keaneyw@gmail.com": true,
    "arcee@cyanogenmod.com": true,
    "koush@clockworkmod.com": true,
    "daniel.hillenbrand@codeworkx.de": true,
    "ferguson.david@gmail.com": true,
    "layhertony@gmail.com": true,
    "bigbeeshane@gmail.com": true,
    "njgreb@gmail.com": true,
    "utkanos@gmail.com": true
  },
  "recovery_twrp_url": "http://download2.clockworkmod.com/twrp/openrecovery-twrp-%s-%s.img",
  "keywords": "phone accessories,droid,gadgets,bluetooth headset,car charger,sd card",
  "manifest": "http://developer.clockworkmod.com/merge",
  "version": "2.5.0.1",
  "devices": [
    {
      "version": "2.5.0.1",
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
        "clockwork": false,
        "url": "http://koush.kanged.net/cm/recoveries/sprecovery.img",
        "name": "SPRecovery 0.99.3b"
      },
      "key": "sholes"
    },
    {
      "version": "2.5.0.7",
      "name": "HTC MyTouch 3G",
      "legacy_versions": [
        "2.5.0.7",
        "2.5.1.4",
        "2.5.1.3",
        "2.5.1.1"
      ],
      "init": "init.sapphire.rc",
      "alternate_recovery": {
        "clockwork": false,
        "url": "http://files.androidspin.com/downloads.php?dir=amon_ra/RECOVERY/&file=recovery-RA-sapphire-v1.7.0G.img",
        "name": "RA Recovery v1.7.0G"
      },
      "key": "sapphire"
    },
    {
      "version": "2.5.0.7",
      "name": "HTC Magic",
      "legacy_versions": [
        "2.5.0.7",
        "2.5.1.4",
        "2.5.1.3",
        "2.5.1.1"
      ],
      "init": "init.sapphire.rc",
      "alternate_recovery": {
        "clockwork": false,
        "url": "http://files.androidspin.com/downloads.php?dir=amon_ra/RECOVERY/&file=recovery-RA-sapphire-v1.7.0H.img",
        "name": "RA Recovery v1.7.0H"
      },
      "key": "magic"
    },
    {
      "version": "2.5.0.7",
      "name": "HTC G1/Dream",
      "legacy_versions": [
        "2.5.0.7",
        "2.5.1.4",
        "2.5.1.3",
        "2.5.1.1"
      ],
      "init": "init.trout.rc",
      "alternate_recovery": {
        "clockwork": false,
        "url": "http://files.androidspin.com/downloads.php?dir=amon_ra/RECOVERY/&file=recovery-RA-dream-v1.7.0.img",
        "name": "RA Recovery v1.7.0"
      },
      "key": "dream"
    },
    {
      "version": "5.0.2.0",
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
      "lunch": "cyanogen_passion-eng",
      "alternate_recovery": {
        "clockwork": false,
        "url": "http://files.androidspin.com/downloads.php?dir=amon_ra/RECOVERY/&file=recovery-RA-passion-v2.2.1.img",
        "name": "RA Recovery v2.2.1"
      },
      "key": "passion"
    },
    {
      "version": "2.5.0.7",
      "name": "HTC Hero (GSM)",
      "legacy_versions": [
        "2.5.0.7",
        "2.5.1.4",
        "2.5.1.3",
        "2.5.1.1"
      ],
      "init": "init.hero.rc",
      "alternate_recovery": {
        "clockwork": false,
        "url": "http://files.androidspin.com/downloads.php?dir=amon_ra/RECOVERY/&file=recovery-RA-hero-v1.7.0.1.img",
        "name": "RA Recovery v1.7.0.1"
      },
      "key": "hero"
    },
    {
      "version": "2.5.0.7",
      "name": "HTC Hero (CDMA)",
      "legacy_versions": [
        "2.5.0.7",
        "2.5.1.4",
        "2.5.1.3",
        "2.5.1.1"
      ],
      "init": "init.heroc.rc",
      "alternate_recovery": {
        "clockwork": false,
        "url": "http://www.androidspin.com/downloads.php?dir=amon_ra/RECOVERY/&file=recovery-RA-heroc-v1.6.2.img",
        "name": "RA Recovery v1.6.2"
      },
      "key": "heroc"
    },
    {
      "version": "5.0.2.2",
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
      "lunch": "cyanogen_supersonic-eng",
      "touch_version": "5.8.0.1",
      "alternate_recovery": {
        "clockwork": false,
        "url": "http://files.androidspin.com/downloads.php?dir=amon_ra/RECOVERY/&file=recovery-RA-supersonic-v2.3.img",
        "name": "RA Recovery v2.3"
      },
      "key": "supersonic"
    },
    {
      "readonly_recovery": true,
      "version": "5.0.2.0",
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
      "init": "init.legend.rc",
      "lunch": "cyanogen_legend-eng",
      "key": "legend"
    },
    {
      "version": "5.0.2.0",
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
      "init": "init.bravo.rc",
      "lunch": "cyanogen_bravo-eng",
      "touch_version": "5.8.0.2",
      "key": "bravo"
    },
    {
      "version": "5.0.2.0",
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
      "init": "init.bravoc.rc",
      "lunch": "cyanogen_bravoc-eng",
      "key": "bravoc"
    },
    {
      "version": "2.5.0.7",
      "name": "Huawei Pulse Mini",
      "legacy_versions": [
        "2.5.0.7",
        "2.5.1.4",
        "2.5.1.3",
        "2.5.1.1"
      ],
      "init": "init.qcom.rc",
      "key": "pulsemini"
    },
    {
      "version": "5.0.2.0",
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
      "lunch": "cyanogen_inc-eng",
      "alternate_recovery": {
        "clockwork": false,
        "url": "http://dl.dropbox.com/u/12949506/RomManager/recovery-RA-inc-3.02.img",
        "name": "RA_GNM Recovery v3.02"
      },
      "key": "inc"
    },
    {
      "readonly_recovery": true,
      "version": "2.5.0.7",
      "name": "HTC Aria",
      "legacy_versions": [
        "2.5.0.7",
        "2.5.1.4",
        "2.5.1.3",
        "2.5.1.1"
      ],
      "init": "init.liberty.rc",
      "key": "liberty"
    },
    {
      "readonly_recovery": true,
      "version": "2.5.0.7",
      "name": "Motorola Droid Eris",
      "legacy_versions": [
        "2.5.0.7",
        "2.5.1.4",
        "2.5.1.3",
        "2.5.1.1"
      ],
      "init": "init.desirec.rc",
      "alternate_recovery": {
        "clockwork": false,
        "url": "http://www.androidspin.com/downloads.php?dir=amon_ra/RECOVERY/&file=recovery-RA-eris-v1.6.2.img",
        "name": "RA Recovery v1.6.2"
      },
      "key": "desirec"
    },
    {
      "readonly_recovery": true,
      "version": "5.0.2.0",
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
      "init": "init.buzz.rc",
      "lunch": "cyanogen_buzz-eng",
      "key": "buzz"
    },
    {
      "version": "2.5.0.7",
      "name": "Dell Streak",
      "legacy_versions": [
        "2.5.0.7",
        "2.5.1.4",
        "2.5.1.3",
        "2.5.1.1"
      ],
      "init": "init.qcom.rc",
      "key": "streak"
    },
    {
      "readonly_recovery": true,
      "version": "2.5.0.7",
      "name": "HTC MyTouch Slide",
      "legacy_versions": [
        "2.5.0.7",
        "2.5.1.4",
        "2.5.1.3",
        "2.5.1.1"
      ],
      "init": "init.latte.rc",
      "key": "espresso"
    },
    {
      "readonly_recovery": true,
      "version": "2.5.1.2",
      "name": "Samsung GalaxyS i9000",
      "legacy_versions": [
        "2.5.1.2",
        "2.5.1.4",
        "2.5.1.3",
        "2.5.1.1"
      ],
      "init": "lpm.rc",
      "key": "galaxys"
    },
    {
      "readonly_recovery": true,
      "version": "3.0.0.8",
      "name": "Samsung GalaxyS Fascinate",
      "legacy_versions": [
        "3.0.0.8",
        "2.5.1.4",
        "2.5.1.3",
        "2.5.1.1"
      ],
      "init": "init.smdkc110.rc",
      "key": "fascinate"
    },
    {
      "readonly_recovery": true,
      "version": "2.5.1.2",
      "name": "Samsung GalaxyS Vibrant",
      "legacy_versions": [
        "2.5.1.2",
        "2.5.1.4",
        "2.5.1.3",
        "2.5.1.1"
      ],
      "init": "init.smdkc110.rc",
      "key": "vibrant"
    },
    {
      "readonly_recovery": true,
      "version": "2.5.1.2",
      "name": "Samsung GalaxyS Captivate",
      "legacy_versions": [
        "2.5.1.2",
        "2.5.1.4",
        "2.5.1.3",
        "2.5.1.1"
      ],
      "init": "init.smdkc110.rc",
      "key": "captivate"
    },
    {
      "version": "2.5.0.7",
      "name": "Huawei Pulse",
      "legacy_versions": [
        "2.5.0.7",
        "2.5.1.4",
        "2.5.1.3",
        "2.5.1.1"
      ],
      "init": "init.qcom.rc",
      "key": "pulse"
    },
    {
      "version": "2.5.0.7",
      "name": "LG Ally",
      "legacy_versions": [
        "2.5.0.7",
        "2.5.1.4",
        "2.5.1.3",
        "2.5.1.1"
      ],
      "init": "init.aloha.rc",
      "alternate_recovery": {
        "clockwork": false,
        "url": "http://dl.dropbox.com/u/12949506/RomManager/recovery-RA-aloha-2.2.2-GNM.img",
        "name": "RA_GNM Recovery v2.2.2"
      },
      "key": "aloha"
    },
    {
      "readonly_recovery": true,
      "version": "3.1.0.2",
      "name": "Motorola Milestone",
      "legacy_versions": [
        "2.5.0.7",
        "2.5.1.4",
        "2.5.1.3",
        "2.5.1.1",
        "2.5.0.7"
      ],
      "init": "init.mapphone_cdma.rc",
      "key": "milestone"
    },
    {
      "readonly_recovery": true,
      "version": "5.0.2.0",
      "reboot_recovery": "rm /cache/recovery/command ; echo 1 > /data/.recovery_mode ; sync ; reboot ;",
      "flash_recovery": "dd if=%s of=/preinstall/recovery/recovery.zip ; ",
      "name": "Motorola Droid X",
      "legacy_versions": [
        "2.5.0.7"
      ],
      "init": "init.mapphone_cdma.rc",
      "key": "droidx"
    },
    {
      "readonly_recovery": true,
      "version": "5.0.2.0",
      "reboot_recovery": "rm /cache/recovery/command ; echo 1 > /data/.recovery_mode ; sync ; reboot ;",
      "flash_recovery": "dd if=%s of=/preinstall/recovery/recovery.zip ; ",
      "name": "Motorola Droid X (2nd-init)",
      "legacy_versions": [
        "2.5.0.7"
      ],
      "init": "init.mapphone_cdma.rc",
      "lunch": "cyanogen_shadow-eng",
      "key": "shadow"
    },
    {
      "version": "2.5.1.0",
      "name": "Acer Liquid",
      "legacy_versions": [
        "2.5.1.4",
        "2.5.1.3",
        "2.5.1.1",
        "2.5.1.0"
      ],
      "init": "init.salsa.rc",
      "key": "salsa"
    },
    {
      "version": "2.5.1.3",
      "name": "Commtiva Z71 (Boston, Blaze, and more)",
      "legacy_versions": [
        "2.5.1.4",
        "2.5.1.3",
        "2.5.1.1",
        "2.5.1.0"
      ],
      "init": "init.qcom.rc",
      "key": "z71"
    },
    {
      "version": "5.0.2.7",
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
      "init": "init.vision.rc",
      "lunch": "cyanogen_vision-eng",
      "touch_version": "5.8.1.0",
      "key": "vision"
    },
    {
      "version": "5.0.2.0",
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
      "init": "init.glacier.rc",
      "lunch": "cyanogen_glacier-eng",
      "touch_version": "5.8.1.0",
      "key": "glacier"
    },
    {
      "version": "5.0.2.0",
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
      "init": "init.spade.rc",
      "lunch": "cyanogen_ace-eng",
      "touch_version": "5.8.1.5",
      "key": "ace"
    },
    {
      "version": "5.0.2.0",
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
      "init": "init.morrison.rc",
      "lunch": "cyanogen_morrison-eng",
      "touch_version": "5.8.1.0",
      "key": "morrison"
    },
    {
      "readonly_recovery": true,
      "version": "5.0.2.0",
      "reboot_recovery": "rm /cache/recovery/command ; echo 1 > /data/.recovery_mode ; sync ; reboot ;",
      "flash_recovery": "dd if=%s of=/preinstall/recovery/recovery.zip ; ",
      "name": "Motorola Droid 2",
      "legacy_versions": [
        "2.5.0.8"
      ],
      "init": "init.mapphone_cdma.rc",
      "lunch": "cyanogen_droid2-eng",
      "key": "droid2"
    },
    {
      "version": "2.5.1.3",
      "name": "Geeksphone ONE",
      "legacy_versions": [
        "2.5.1.4",
        "2.5.1.3",
        "2.5.1.1",
        "2.5.1.0"
      ],
      "init": "init.qcom.rc",
      "alternate_recovery": {
        "clockwork": false,
        "url": "http://dl.dropbox.com/u/10355648/recovery-ONE-1_6.img",
        "name": "ONE Recovery v1.6"
      },
      "key": "one"
    },
    {
      "version": "3.0.2.7",
      "reboot_recovery": "echo start > /proc/ota ; ",
      "flash_recovery": "/data/data/com.koushikdutta.rommanager/files/tegra_flash_image recovery %s ; ",
      "name": "Advent Vega",
      "legacy_versions": [
        "2.5.1.4",
        "2.5.1.3",
        "2.5.1.1",
        "2.5.1.0",
        "2.5.1.4"
      ],
      "init": "init_recovery.rc",
      "key": "vega"
    },
    {
      "readonly_recovery": true,
      "version": "2.5.1.8",
      "name": "Samsung Galaxy Tab - ATT",
      "legacy_versions": [
        "2.5.1.8",
        "2.5.1.4",
        "2.5.1.3",
        "2.5.1.1"
      ],
      "init": "init.smdkc110.rc",
      "key": "att_tab"
    },
    {
      "readonly_recovery": true,
      "version": "2.5.1.8",
      "name": "Samsung Galaxy Tab (T-Mobile)",
      "legacy_versions": [
        "2.5.1.8",
        "2.5.1.4",
        "2.5.1.3",
        "2.5.1.1"
      ],
      "init": "init.smdkc110.rc",
      "key": "tmobile_tab"
    },
    {
      "version": "2.5.1.2",
      "name": "Commtiva Link N700, Spice MI700, and more",
      "legacy_versions": [
        "2.5.1.4",
        "2.5.1.3",
        "2.5.1.1",
        "2.5.1.0"
      ],
      "init": "init.qcom.rc",
      "alternate_recovery": {
        "clockwork": false,
        "url": "http://dl.dropbox.com/u/15816725/MI700-recovery-V1_3.img",
        "name": "MI700 Recovery v1.6"
      },
      "key": "FM6"
    },
    {
      "version": "6.0.2.5",
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
        "6.0.1.0"
      ],
      "init": "init.herring.rc",
      "lunch": "cm_crespo-userdebug",
      "touch_version": "6.0.2.5",
      "key": "crespo"
    },
    {
      "readonly_recovery": true,
      "version": "2.5.0.8",
      "name": "Motorola Droid Pro",
      "legacy_versions": [
        "2.5.0.8"
      ],
      "init": "init. mapphone_cdma.rc",
      "key": "droidpro"
    },
    {
      "version": "3.0.0.5",
      "name": "Huawei Ascend",
      "legacy_versions": [
        "3.0.0.5",
        "3.0.0.4"
      ],
      "init": "init.qcom.rc",
      "key": "ascend"
    },
    {
      "version": "5.0.2.0",
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
      "init": "init.blade.rc",
      "lunch": "cyanogen_blade-eng",
      "key": "blade"
    },
    {
      "version": "3.2.0.1",
      "reboot_recovery": "dd if=/dev/zero of=/rom/bcb bs=64 count=1 ; echo 'recovery' >> /rom/bcb ; reboot ;",
      "flash_recovery": "busybox mount -orw,remount / ; mkdir /boot ; busybox mount /dev/block/mmcblk0p1 /boot ; busybox unzip -p %1$s ramdisk-recovery.ub > /boot/uRecRam ; busybox unzip -p %1$s kernel > /boot/uRecImg ; busybox umount /boot ; rmdir /boot; busybox mount -oro,remount / ; ",
      "inits": [
        "env.txt",
        "init.encore.rc"
      ],
      "name": "Nook Color",
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
      "init": "env.txt",
      "key": "encore"
    },
    {
      "version": "5.0.2.0",
      "name": "HTC Click/Tattoo",
      "legacy_versions": [
        "3.0.0.6",
        "3.0.0.6",
        "3.0.2.7",
        "5.0.0.8",
        "5.0.1.0"
      ],
      "init": "init.bahamas.rc",
      "lunch": "cyanogen_click-eng",
      "key": "click"
    },
    {
      "readonly_recovery": true,
      "version": "3.0.0.8",
      "name": "Elocity A7",
      "legacy_versions": [
        "3.0.0.8"
      ],
      "init": "init_recovery.rc",
      "key": "a7"
    },
    {
      "version": "3.0.1.3",
      "name": "Geeksphone Zero",
      "legacy_versions": [
        "3.0.1.3"
      ],
      "init": "init.zero.rc",
      "key": "zero"
    },
    {
      "version": "5.0.2.0",
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
      "init": "init.speedy.rc",
      "lunch": "cyanogen_speedy-eng",
      "touch_version": "5.8.1.6",
      "key": "speedy"
    },
    {
      "reboot_recovery": "echo 1 > /cache/.startrecovery ; sync ; reboot ;",
      "officially_supported": false,
      "name": "Samsung Captivate (MTD)",
      "legacy_versions": [

      ],
      "init": "init.aries.rc",
      "key": "captivatemtd"
    },
    {
      "reboot_recovery": "echo 1 > /cache/.startrecovery ; sync ; reboot ;",
      "officially_supported": false,
      "name": "Samsung Showcase (MTD)",
      "legacy_versions": [

      ],
      "init": "init.aries.rc",
      "key": "showcasemtd"
    },
    {
      "reboot_recovery": "echo 1 > /cache/.startrecovery ; sync ; reboot ;",
      "officially_supported": false,
      "name": "Samsung Mesmerize (MTD)",
      "legacy_versions": [

      ],
      "init": "init.aries.rc",
      "key": "mesmerizemtd"
    },
    {
      "reboot_recovery": "echo 1 > /cache/.startrecovery ; sync ; reboot ;",
      "officially_supported": false,
      "name": "Samsung Fascinate (MTD)",
      "legacy_versions": [

      ],
      "init": "init.aries.rc",
      "key": "fascinatemtd"
    },
    {
      "reboot_recovery": "echo 1 > /cache/.startrecovery ; sync ; reboot ;",
      "officially_supported": false,
      "name": "Samsung Vibrant (MTD)",
      "legacy_versions": [

      ],
      "init": "init.aries.rc",
      "key": "vibrantmtd"
    },
    {
      "reboot_recovery": "echo 1 > /cache/.startrecovery ; sync ; reboot ;",
      "officially_supported": false,
      "name": "Samsung GalaxyS i9000B (MTD)",
      "legacy_versions": [

      ],
      "init": "init.aries.rc",
      "key": "galaxysbmtd"
    },
    {
      "reboot_recovery": "echo 1 > /cache/.startrecovery ; sync ; reboot ;",
      "officially_supported": false,
      "name": "Samsung GalaxyS i9000 (MTD)",
      "legacy_versions": [

      ],
      "init": "init.aries.rc",
      "key": "galaxysmtd"
    },
    {
      "readonly_recovery": true,
      "version": "5.0.2.7",
      "name": "Samsung Epic4G",
      "legacy_versions": [

      ],
      "init": "lpm.rc",
      "lunch": "full_epic4g-eng",
      "key": "epic4g"
    },
    {
      "version": "3.0.2.0",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk3p1 ; ",
      "name": "Dell Streak 7",
      "legacy_versions": [
        "3.0.2.0",
        "3.0.1.9",
        "3.0.1.8",
        "3.0.1.7"
      ],
      "init": "init.tinyandroid.rc",
      "key": "streak7"
    },
    {
      "version": "5.0.2.1",
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
      "lunch": "cyanogen_mecha-eng",
      "touch_version": "5.8.0.2",
      "alternate_recovery": {
        "clockwork": false,
        "url": "http://dl.dropbox.com/u/12949506/RomManager/recovery-ra-mecha-3.05.img",
        "name": "RA_GNM Recovery v3.05"
      },
      "key": "mecha"
    },
    {
      "version": "3.0.2.4",
      "name": "Huawei U8150 Ideos",
      "legacy_versions": [
        "3.0.2.4"
      ],
      "init": "init.ideos.rc",
      "key": "ideos"
    },
    {
      "version": "6.0.2.9",
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
        "4.0.0.4"
      ],
      "init": "init.stingray.rc",
      "lunch": "cm_stingray-userdebug",
      "touch_version": "6.0.2.9",
      "key": "stingray"
    },
    {
      "version": "3.1.0.0",
      "name": "HTC HD2",
      "legacy_versions": [
        "3.0.2.5",
        "3.0.2.4",
        "3.0.2.5"
      ],
      "init": "init.leo.rc",
      "key": "leo"
    },
    {
      "version": "5.0.2.0",
      "name": "Motorola CLIQ XT/Quench (MB501)",
      "legacy_versions": [
        "3.0.2.4",
        "3.0.2.4",
        "5.0.0.8",
        "5.0.0.8",
        "5.0.1.0",
        "5.0.1.0"
      ],
      "init": "init.zeppelin.rc",
      "lunch": "cyanogen_zeppelin-eng",
      "key": "zeppelin"
    },
    {
      "version": "5.0.2.0",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p21 ; ",
      "name": "HTC Desire S",
      "legacy_versions": [
        "3.0.2.6",
        "5.0.1.9"
      ],
      "init": "init.saga.rc",
      "lunch": "full_saga-eng",
      "touch_version": "5.8.1.5",
      "key": "saga"
    },
    {
      "readonly_recovery": true,
      "version": "5.0.2.0",
      "reboot_recovery": "echo 'boot-recovery' | dd of=/dev/block/mmcblk0p3 seek=6144 bs=1 ; reboot ; ",
      "name": "LG G2X (T-Mobile)",
      "legacy_versions": [
        "3.0.2.7",
        "5.0.0.8",
        "5.0.1.0",
        "5.0.1.4",
        "5.0.1.6"
      ],
      "init": "init_recovery.rc",
      "lunch": "cyanogen_p999-eng",
      "key": "p999"
    },
    {
      "version": "6.0.1.5",
      "reboot_recovery": "echo 'boot-recovery' | dd of=/dev/block/mmcblk0p3 seek=6144 bs=1 ; reboot ; ",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p7 ; ",
      "inits": [
        "init_recovery.rc",
        "/bootimages/opening_01.rle"
      ],
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
        "5.0.2.0"
      ],
      "lunch": "cm_p990-userdebug",
      "touch_version": "6.0.1.5",
      "key": "p990"
    },
    {
      "version": "6.0.2.5",
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
        "6.0.1.0"
      ],
      "init": "init.herring.rc",
      "lunch": "cm_crespo4g-userdebug",
      "touch_version": "6.0.2.5",
      "key": "crespo4g"
    },
    {
      "version": "5.0.2.0",
      "name": "LG Optimus One (old BB)",
      "legacy_versions": [
        "3.1.0.0",
        "5.0.0.8",
        "5.0.1.0"
      ],
      "init": "init.thunderg.rc",
      "lunch": "full_thunderg-eng",
      "alternate_recovery": {
        "clockwork": false,
        "url": "http://dl.dropbox.com/u/12949506/RomManager/recovery-RA-thunderg-2.2.1-GNM.img",
        "name": "RA_GNM Recovery v2.2.1"
      },
      "key": "thunderg"
    },
    {
      "version": "5.0.2.7",
      "name": "LG Optimus One",
      "legacy_versions": [
        "5.0.2.0"
      ],
      "init": "init.thunderg.rc",
      "lunch": "cyanogen_p500-eng",
      "key": "p500"
    },
    {
      "version": "3.1.0.1",
      "name": "Huawei U8220/U8230",
      "legacy_versions": [

      ],
      "init": "init.qcom.rc",
      "key": "u8220"
    },
    {
      "readonly_recovery": true,
      "version": "3.1.0.1",
      "name": "Samsung Charge",
      "legacy_versions": [

      ],
      "init": "init.smdkc110.rc",
      "key": "charge"
    },
    {
      "officially_supported": false,
      "name": "Motorola Defy",
      "legacy_versions": [

      ],
      "init": "init.mapphone_umts.rc",
      "key": "umts_jordan"
    },
    {
      "readonly_recovery": true,
      "version": "3.2.0.0",
      "name": "Samsung Galaxy S 4G",
      "legacy_versions": [
        "3.2.0.0"
      ],
      "init": "init.smdkc110.rc",
      "key": "galaxys4g"
    },
    {
      "ro.product.device": [
        "i9100",
        "galaxys2"
      ],
      "readonly_recovery": true,
      "version": "4.0.1.5",
      "inits": [
        "init.smdkc210.rc",
        "init.smdk4210.rc"
      ],
      "name": "Samsung Galaxy S2",
      "legacy_versions": [
        "4.0.1.4",
        "v4.0.1.4"
      ],
      "init": "init.smdkc210.rc",
      "touch_version": "5.8.1.5",
      "key": "galaxys2"
    },
    {
      "ro.product.device": [
        "i9100",
        "galaxys2"
      ],
      "version": "6.0.1.0",
      "officially_supported": false,
      "inits": [
        "init.smdkc210.rc",
        "init.smdk4210.rc"
      ],
      "name": "Samsung Galaxy S2",
      "legacy_versions": [

      ],
      "init": "init.smdk4210.rc",
      "lunch": "cm_i9100-userdebug",
      "key": "i9100"
    },
    {
      "readonly_recovery": true,
      "version": "6.0.1.2",
      "name": "Samsung Galaxy Note (GT-N7000)",
      "legacy_versions": [
        "6.0.1.0"
      ],
      "init": "init.smdk4210.rc",
      "lunch": "cm_n7000-userdebug",
      "key": "n7000"
    },
    {
      "readonly_recovery": true,
      "version": "4.0.0.2",
      "name": "Samsung Sidekick 4G",
      "legacy_versions": [

      ],
      "init": "init.smdkc110.rc",
      "key": "sidekick4g"
    },
    {
      "version": "5.0.2.0",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p21 ; ",
      "name": "HTC Incredible S",
      "legacy_versions": [
        "4.0.0.4",
        "4.0.0.6",
        "4.0.0.7",
        "4.0.0.8",
        "5.0.1.9"
      ],
      "init": "init.vivo.rc",
      "lunch": "cyanogen_vivo-eng",
      "key": "vivo"
    },
    {
      "version": "5.0.2.0",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p21 ; ",
      "name": "HTC Incredible 2",
      "legacy_versions": [
        "4.0.0.4",
        "4.0.0.6",
        "4.0.0.7",
        "4.0.0.8",
        "5.0.1.9"
      ],
      "init": "init.vivow.rc",
      "lunch": "cyanogen_vivow-eng",
      "alternate_recovery": {
        "clockwork": false,
        "url": "http://dl.dropbox.com/u/12949506/RomManager/recovery-ra-vivow-3.05.img",
        "name": "RA_GNM Recovery v3.05"
      },
      "key": "vivow"
    },
    {
      "version": "6.0.1.9",
      "reboot_recovery": "echo '518 R 1' > /sys/kernel/kobject_lge_nvdata/dynamic_nvdata_raw_write ; reboot ; ",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p6 ; ",
      "inits": [
        "init.p920.rc",
        "/bootimages/opening_01.rle"
      ],
      "name": "LG Optimus 3D",
      "legacy_versions": [
        "4.0.0.7",
        "4.0.0.9",
        "5.0.1.4",
        "5.0.2.0",
        "5.0.2.7"
      ],
      "lunch": "cm_p920-userdebug",
      "touch_version": "6.0.1.9",
      "key": "p920"
    },
    {
      "version": "4.0.0.9",
      "flash_recovery": "/data/data/com.koushikdutta.rommanager/files/flash_image recoveryonly %s ; ",
      "name": "Samsung Galaxy Ace",
      "legacy_versions": [

      ],
      "init": "init.galaxyace.rc",
      "key": "galaxyace"
    },
    {
      "version": "5.0.2.0",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p10 ; ",
      "inits": [
        "init_prep_keypad.sh",
        "init.olympus.rc"
      ],
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
      "init": "init_prep_keypad.sh",
      "lunch": "generic_olympus-eng",
      "touch_version": "5.8.1.8",
      "key": "olympus"
    },
    {
      "version": "4.0.1.5",
      "flash_recovery": "/data/data/com.koushikdutta.rommanager/files/tegra_flash_image recovery %s ; ",
      "name": "Viewsonic GTablet (smb_a1002)",
      "legacy_versions": [

      ],
      "init": "init_recovery.rc",
      "key": "smb_a1002"
    },
    {
      "version": "5.0.2.0",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p22 ; ",
      "name": "HTC EVO 3D",
      "legacy_versions": [
        "4.0.1.5",
        "5.0.0.0",
        "5.0.1.0"
      ],
      "init": "init.shooter.rc",
      "lunch": "htc_shooter-eng",
      "touch_version": "5.8.0.2",
      "key": "shooter"
    },
    {
      "version": "5.0.2.0",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p21 ; ",
      "name": "HTC Sensation",
      "legacy_versions": [
        "4.0.1.5",
        "5.0.0.1",
        "5.0.0.7",
        "5.0.0.8",
        "5.0.1.0"
      ],
      "init": "init.pyramid.rc",
      "lunch": "full_pyramid-eng",
      "touch_version": "5.8.0.9",
      "key": "pyramid"
    },
    {
      "version": "4.0.1.5",
      "inits": [
        "init.qcom.rc",
        "init.huawei.rc"
      ],
      "name": "Huawei Ascend 2 (M865)",
      "legacy_versions": [

      ],
      "init": "init.qcom.rc",
      "key": "ascend2"
    },
    {
      "version": "4.0.1.5",
      "name": "Micromax A70",
      "legacy_versions": [

      ],
      "init": "init.qcom.rc",
      "key": "a70"
    },
    {
      "readonly_recovery": true,
      "version": "4.0.1.5",
      "name": "Samsung Galaxy Gio",
      "legacy_versions": [

      ],
      "init": "init.galaxygio.rc",
      "key": "galaxygio"
    },
    {
      "readonly_recovery": true,
      "version": "4.0.1.5",
      "name": "Samsung Indulge 910",
      "legacy_versions": [

      ],
      "init": "init.smdkc110.rc",
      "key": "indulge910"
    },
    {
      "readonly_recovery": true,
      "version": "4.0.1.5",
      "name": "Samsung Indulge 915",
      "legacy_versions": [

      ],
      "init": "init.smdkc110.rc",
      "key": "indulge915"
    },
    {
      "version": "6.0.1.4",
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
      "init": "/bootimages/ON_480x800_08fps_0000.rle",
      "lunch": "cm_p970-userdebug",
      "touch_version": "6.0.1.4",
      "key": "p970"
    },
    {
      "version": "5.0.2.0",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p21 ; ",
      "name": "HTC EVO 3D (GSM)",
      "legacy_versions": [
        "5.0.1.6",
        "5.0.1.7",
        "5.0.1.8",
        "5.0.1.9"
      ],
      "init": "init.shooteru.rc",
      "lunch": "full_shooteru-eng",
      "touch_version": "5.8.0.2",
      "key": "shooteru"
    },
    {
      "readonly_recovery": true,
      "version": "5.0.2.3",
      "reboot_recovery": "rm /cache/recovery/command ; echo 1 > /data/.recovery_mode ; sync ; reboot ;",
      "flash_recovery": "dd if=%s of=/preinstall/recovery/recovery.zip ; ",
      "name": "Motorola Droid 2 Global",
      "legacy_versions": [

      ],
      "init": "init.mapphone_cdma.rc",
      "lunch": "cyanogen_droid2we-eng",
      "key": "droid2we"
    },
    {
      "readonly_recovery": true,
      "version": "5.0.2.5",
      "reboot_recovery": "rm /cache/recovery/command ; echo 1 > /data/.recovery_mode ; sync ; reboot ;",
      "flash_recovery": "dd if=%s of=/preinstall/recovery/recovery.zip ; ",
      "name": "Motorola Droid Bionic",
      "legacy_versions": [
        "5.0.2.3",
        "5.0.2.4"
      ],
      "init": "init.mapphone_cdma.rc",
      "lunch": "generic_targa-eng",
      "key": "targa"
    },
    {
      "readonly_recovery": true,
      "version": "5.0.2.5",
      "reboot_recovery": "rm /cache/recovery/command ; echo 1 > /data/.recovery_mode ; sync ; reboot ;",
      "flash_recovery": "dd if=%s of=/preinstall/recovery/recovery.zip ; ",
      "name": "Motorola Droid X2",
      "legacy_versions": [
        "5.0.2.3",
        "5.0.2.4"
      ],
      "init": "init.mapphone_cdma.rc",
      "lunch": "generic_daytona-eng",
      "key": "daytona"
    },
    {
      "readonly_recovery": true,
      "version": "5.0.2.6",
      "reboot_recovery": "rm /cache/recovery/command ; echo 1 > /data/.recovery_mode ; sync ; reboot ;",
      "flash_recovery": "dd if=%s of=/preinstall/recovery/recovery.zip ; ",
      "name": "Motorola Droid 3",
      "legacy_versions": [
        "5.0.2.5"
      ],
      "init": "init.mapphone_cdma.rc",
      "lunch": "full_solana-eng",
      "key": "solana"
    },
    {
      "version": "5.0.2.6",
      "name": "Motorola Backflip",
      "legacy_versions": [

      ],
      "init": "init.motus.rc",
      "lunch": "cyanogen_motus-eng",
      "key": "motus"
    },
    {
      "readonly_recovery": true,
      "version": "5.0.2.6",
      "name": "Samsung Galaxy Mini",
      "legacy_versions": [

      ],
      "init": "init.gt-s5570.rc",
      "lunch": "tass-eng",
      "key": "tass"
    },
    {
      "version": "5.0.2.6",
      "flash_recovery": "mount -o remount,rw -t vfat /dev/block/mmcblk0p1 /cust_backup ; cat %s > /cust_backup/image/recovery.img ;",
      "name": "Huawei U8800",
      "legacy_versions": [

      ],
      "init": "init.u8800.rc",
      "lunch": "huawei_u8800-eng",
      "key": "u8800"
    },
    {
      "readonly_recovery": true,
      "version": "5.0.2.6",
      "inits": [
        "init.smdkc210.rc",
        "init.smdk4210.rc"
      ],
      "name": "Samsung Galaxy S2 (AT&T)",
      "legacy_versions": [

      ],
      "init": "init.smdkc210.rc",
      "lunch": "cyanogen_galaxys2att-eng",
      "touch_version": "5.8.1.5",
      "key": "galaxys2att"
    },
    {
      "owners": {
        "jmprblckwing182@gmail.com": true
      },
      "version": "6.0.2.9",
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
        "6.0.2.8"
      ],
      "init": "init.target.rc",
      "lunch": "cm_hercules-userdebug",
      "touch_version": "6.0.2.9",
      "key": "hercules"
    },
    {
      "readonly_recovery": true,
      "version": "5.0.2.7",
      "name": "Samsung Epic 4G Touch",
      "legacy_versions": [
        "5.0.2.6",
        "5.0.2.7"
      ],
      "init": "init.smdkc210.rc",
      "lunch": "full_epic4gtouch-eng",
      "touch_version": "5.8.1.5",
      "key": "epic4gtouch"
    },
    {
      "version": "5.0.2.6",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p23 bs=4096 ; ",
      "name": "HTC Amaze",
      "legacy_versions": [

      ],
      "init": "init.ruby.rc",
      "lunch": "full_ruby-eng",
      "key": "ruby"
    },
    {
      "readonly_recovery": true,
      "version": "5.0.2.8",
      "name": "Samsung Galaxy 5",
      "legacy_versions": [
        "5.0.2.8"
      ],
      "init": "init.gt-i5500.rc",
      "lunch": "samsung_galaxy5-eng",
      "key": "galaxy5"
    },
    {
      "version": "5.0.2.7",
      "name": "ZTE Racer",
      "legacy_versions": [

      ],
      "init": "init.mooncake.rc",
      "lunch": "generic_mooncake-eng",
      "key": "mooncake"
    },
    {
      "readonly_recovery": true,
      "version": "5.0.2.7",
      "name": "Samsung Galaxy Tab (VZW)",
      "legacy_versions": [
        "5.0.2.7",
        "5.0.2.7",
        "5.0.2.7"
      ],
      "init": "init.smdkc110.rc",
      "lunch": "full_vzwtab-eng",
      "key": "vzwtab"
    },
    {
      "version": "5.0.2.7",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p21 bs=4096 ; ",
      "name": "HTC MyTouch 4G Slide",
      "legacy_versions": [
        "5.0.2.7",
        "5.0.2.7"
      ],
      "init": "init.doubleshot.rc",
      "lunch": "full_doubleshot-eng",
      "key": "doubleshot"
    },
    {
      "version": "6.0.2.3",
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
        "6.0.1.5"
      ],
      "init": "init.tuna.rc",
      "lunch": "cm_maguro-userdebug",
      "touch_version": "6.0.2.3",
      "key": "maguro"
    },
    {
      "version": "6.0.3.1",
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
        "6.0.2.3"
      ],
      "init": "init.tuna.rc",
      "lunch": "cm_toro-userdebug",
      "touch_version": "6.0.3.1",
      "key": "toro"
    },
    {
      "version": "5.0.2.7",
      "name": "LG Optimus C LW690 and Optimus M MS690",
      "legacy_versions": [

      ],
      "init": "init.thunderc.rc",
      "lunch": "full_lg690-eng",
      "key": "lg690"
    },
    {
      "version": "5.0.2.7",
      "name": "LG Optimus Pro",
      "legacy_versions": [

      ],
      "init": "init.muscat.rc",
      "lunch": "c660-eng",
      "key": "c660"
    },
    {
      "version": "5.0.2.7",
      "name": "LG Optimus Hub",
      "legacy_versions": [

      ],
      "init": "init.univa.rc",
      "lunch": "e510-eng",
      "key": "e510"
    },
    {
      "version": "5.0.2.7",
      "reboot_recovery": "/system/xbin/busybox devmem 0x57fff800 32 0x5EC0B007; sync ; reboot ;",
      "officially_supported": false,
      "name": "Samsung Epic4G (MTD)",
      "legacy_versions": [

      ],
      "init": "init.victory.rc",
      "lunch": "cyanogen_epicmtd-eng",
      "touch_version": "5.8.1.5",
      "key": "epicmtd"
    },
    {
      "version": "5.0.2.7",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p23 bs=4096 ; ",
      "name": "HTC Holiday",
      "legacy_versions": [
        "5.0.2.7",
        "5.0.2.7",
        "5.0.2.7"
      ],
      "init": "init.holiday.rc",
      "lunch": "full_holiday-eng",
      "key": "holiday"
    },
    {
      "version": "5.0.2.7",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p17 bs=4096 ;",
      "inits": [
        "init.victor.rc",
        "init.e739.rc"
      ],
      "name": "LG Optimus SOL / TMo LG myTouch",
      "legacy_versions": [

      ],
      "lunch": "e730-eng",
      "key": "e730"
    },
    {
      "version": "5.0.2.8",
      "name": "HTC Wildfire S",
      "legacy_versions": [
        "5.0.2.7"
      ],
      "init": "init.marvel.rc",
      "lunch": "generic_marvel-eng",
      "key": "marvel"
    },
    {
      "version": "5.0.2.8",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p10 bs=4096 ;",
      "inits": [
        "init.mapphone_umts.rc",
        "init.mapphone_cdma.rc"
      ],
      "name": "Motorola Photon 4G",
      "legacy_versions": [
        "5.0.2.7"
      ],
      "init": "init.mapphone_umts.rc",
      "lunch": "full_sunfire-eng",
      "key": "sunfire"
    },
    {
      "version": "5.0.2.8",
      "inits": [
        "init.huawei.rc",
        "init.u8160.rc"
      ],
      "name": "Huawei U8160",
      "legacy_versions": [
        "5.0.2.8"
      ],
      "init": "init.u8160.rc",
      "lunch": "huawei_u8160-eng",
      "key": "u8160"
    },
    {
      "version": "6.0.2.3",
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
        "6.0.2.2"
      ],
      "init": "init.vigor.rc",
      "lunch": "cm_vigor-userdebug",
      "touch_version": "6.0.2.3",
      "key": "vigor"
    },
    {
      "version": "5.8.1.5",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p21 bs=4096 ;",
      "name": "HTC EVO View 4G",
      "legacy_versions": [

      ],
      "init": "init.expresskt.rc",
      "lunch": "full_express-userdebug",
      "key": "express"
    },
    {
      "version": "5.8.3.4",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p4 ;",
      "name": "Asus Transformer Prime",
      "legacy_versions": [
        "5.5.0.4",
        "5.8.2.0"
      ],
      "init": "init.cardhu.rc",
      "lunch": "cm_tf201-userdebug",
      "touch_version": "5.8.3.4",
      "key": "tf201"
    },
    {
      "version": "5.0.2.0",
      "reboot_recovery": "rm /cache/recovery/command ; echo 1 > /data/.recovery_mode ; sync ; reboot ;",
      "officially_supported": false,
      "name": "Motorola Droid 4",
      "legacy_versions": [

      ],
      "init": "init.mapphone_cdma.rc",
      "key": "maserati"
    },
    {
      "version": "5.0.2.0",
      "reboot_recovery": "rm /cache/recovery/command ; echo 1 > /data/.recovery_mode ; sync ; reboot ;",
      "officially_supported": false,
      "name": "Motorola RAZR",
      "legacy_versions": [

      ],
      "init": "init.mapphone_cdma.rc",
      "key": "spyder"
    },
    {
      "version": "5.0.2.8",
      "name": "HTC Wildfire S CDMA",
      "legacy_versions": [

      ],
      "init": "init.marvelc.rc",
      "lunch": "full_marvelc-eng",
      "key": "marvelc"
    },
    {
      "version": "6.0.1.3",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p4 ;",
      "name": "Asus Transformer",
      "legacy_versions": [
        "5.5.0.4",
        "5.8.1.9",
        "5.8.2.0",
        "5.8.2.1",
        "5.8.3.4"
      ],
      "init": "init.ventana.rc",
      "lunch": "cm_tf101-userdebug",
      "touch_version": "5.8.3.4",
      "key": "tf101"
    },
    {
      "version": "6.0.1.5",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p13 ;",
      "name": "LG Nitro HD / LG P930 (AT&T)",
      "legacy_versions": [
        "5.8.2.0",
        "6.0.1.4"
      ],
      "init": "bootimages/boot_logo_00000.rle",
      "lunch": "cm_p930-userdebug",
      "touch_version": "6.0.1.5",
      "key": "p930"
    },
    {
      "readonly_recovery": true,
      "version": "6.0.1.0",
      "inits": [
        "init.smdkc210.rc",
        "init.smdk4210.rc"
      ],
      "name": "Samsung Galaxy S2 (SGH-I777)",
      "legacy_versions": [
        "5.8.1.8"
      ],
      "init": "init.smdkc210.rc",
      "lunch": "cm_i777-userdebug",
      "touch_version": "6.0.1.0",
      "key": "i777"
    },
    {
      "version": "5.0.2.8",
      "name": "HTC Pico",
      "legacy_versions": [

      ],
      "init": "init.pico.rc",
      "lunch": "full_pico-eng",
      "key": "pico"
    },
    {
      "version": "5.8.4.0",
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
      "init": "ueventd.endeavoru.rc",
      "lunch": "cm_endeavoru-userdebug",
      "touch_version": "5.8.4.0",
      "key": "endeavoru"
    },
    {
      "version": "6.0.2.9",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p22 bs=4096 ;",
      "name": "HTC One S",
      "legacy_versions": [
        "5.5.0.4",
        "5.8.2.1",
        "5.8.2.2",
        "5.8.2.3",
        "5.8.3.1"
      ],
      "init": "init.ville.rc",
      "lunch": "cm_ville-userdebug",
      "touch_version": "6.0.2.9",
      "key": "ville"
    },
    {
      "version": "5.8.2.1",
      "reboot_recovery": "echo 1 > /cache/.startrecovery ; sync ; reboot ;",
      "officially_supported": false,
      "name": "Samsung Galaxy Tab (MTD and GSM)",
      "legacy_versions": [

      ],
      "init": "init.p1.rc",
      "key": "p1"
    },
    {
      "version": "5.8.2.1",
      "reboot_recovery": "echo 1 > /cache/.startrecovery ; sync ; reboot ;",
      "officially_supported": false,
      "name": "Samsung Galaxy Tab (MTD and CDMA)",
      "legacy_versions": [

      ],
      "init": "init.p1c.rc",
      "key": "p1c"
    },
    {
      "version": "6.0.3.1",
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
        "6.0.2.3"
      ],
      "init": "init.tuna.rc",
      "lunch": "cm_toroplus-userdebug",
      "touch_version": "6.0.3.1",
      "key": "toroplus"
    },
    {
      "version": "6.0.3.0",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p2 ; ",
      "name": "Samsung Galaxy Tab 10.1 (Wifi)",
      "legacy_versions": [
        "4.0.0.4",
        "5.8.3.1",
        "6.0.2.9"
      ],
      "init": "ueventd.p3.rc",
      "lunch": "cm_p4wifi-userdebug",
      "touch_version": "6.0.3.0",
      "key": "p4wifi"
    },
    {
      "version": "6.0.2.9",
      "flash_recovery": "dd if=%s of=/dev/block/platform/sdhci-tegra.3/by-name/recovery ; ",
      "name": "Motorola XOOM (Wi-Fi only)",
      "legacy_versions": [
        "5.8.3.1"
      ],
      "init": "init.wingray.rc",
      "lunch": "cm_wingray-userdebug",
      "touch_version": "6.0.2.9",
      "key": "wingray"
    },
    {
      "version": "5.0.2.8",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p4 bs=4096 ; ",
      "name": "LG Marquee",
      "legacy_versions": [

      ],
      "init": "init.omap.post_boot.sh",
      "lunch": "full_marquee-eng",
      "key": "marquee"
    },
    {
      "version": "5.0.2.8",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p4 bs=4096 ; ",
      "name": "LG Ignite",
      "legacy_versions": [

      ],
      "init": "init.omap.post_boot.sh",
      "lunch": "full_ignite-eng",
      "key": "ignite"
    },
    {
      "version": "5.8.3.1",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p13 bs=4096 ; ",
      "name": "LG Connect 4G MS840",
      "legacy_versions": [

      ],
      "init": "init.target.rc",
      "lunch": "full_ms840-userdebug",
      "touch_version": "5.8.3.1",
      "key": "ms840"
    },
    {
      "version": "5.8.3.1",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p13 bs=4096 ; ",
      "name": "LG Lucid VS840",
      "legacy_versions": [

      ],
      "init": "init.target.rc",
      "lunch": "full_vs840-userdebug",
      "touch_version": "5.8.3.1",
      "key": "vs840"
    },
    {
      "version": "5.8.3.5",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p22 bs=4096 ; ",
      "name": "HTC EVO LTE",
      "legacy_versions": [
        "5.8.3.4",
        "5.8.3.4"
      ],
      "init": "init.jewel.rc",
      "lunch": "cm_jewel-userdebug",
      "touch_version": "5.8.3.5",
      "key": "jewel"
    },
    {
      "version": "6.0.3.0",
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
        "6.0.2.7"
      ],
      "init": "ueventd.smdk4x12.rc",
      "lunch": "cm_i9300-userdebug",
      "ro.product.devices": [
        "i9300",
        "m0"
      ],
      "touch_version": "6.0.3.0",
      "key": "i9300"
    },
    {
      "version": "6.0.1.4",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p22 bs=4096 ; ",
      "name": "Samsung Skyrocket",
      "legacy_versions": [
        "5.8.4.3",
        "6.0.1.0"
      ],
      "init": "init.qcom.usb.rc",
      "lunch": "cm_skyrocket-userdebug",
      "touch_version": "6.0.1.4",
      "key": "skyrocket"
    },
    {
      "version": "5.8.4.8",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p22 bs=4096 ; ",
      "name": "Samsung Galaxy Note (AT&T)",
      "legacy_versions": [
        "5.8.4.3"
      ],
      "init": "init.qcom.usb.rc",
      "lunch": "cm_quincyatt-userdebug",
      "touch_version": "5.8.4.3",
      "key": "quincyatt"
    },
    {
      "version": "5.8.4.5",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p17 bs=4096 ; ",
      "name": "LG Optimus L3",
      "legacy_versions": [

      ],
      "init": "init.e0.rc",
      "lunch": "cm_e400-userdebug",
      "key": "e400"
    },
    {
      "readonly_recovery": true,
      "version": "5.8.4.5",
      "name": "HTC One V",
      "legacy_versions": [

      ],
      "init": "init.primou.rc",
      "lunch": "cm_primou-userdebug",
      "key": "primou"
    },
    {
      "version": "6.0.3.1",
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
        "6.0.3.0"
      ],
      "init": "init.d2att.rc",
      "lunch": "cm_d2att-userdebug",
      "touch_version": "6.0.3.1",
      "key": "d2att"
    },
    {
      "version": "6.0.3.1",
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
        "6.0.3.0"
      ],
      "init": "init.d2tmo.rc",
      "lunch": "cm_d2tmo-userdebug",
      "touch_version": "6.0.3.1",
      "key": "d2tmo"
    },
    {
      "version": "6.0.3.1",
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
        "6.0.3.0"
      ],
      "init": "init.d2spr.rc",
      "lunch": "cm_d2spr-userdebug",
      "touch_version": "6.0.3.1",
      "key": "d2spr"
    },
    {
      "version": "6.0.3.1",
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
        "6.0.3.0"
      ],
      "init": "init.d2vzw.rc",
      "lunch": "cm_d2vzw-userdebug",
      "twrp_version": "2.4.3.0",
      "touch_version": "6.0.3.1",
      "key": "d2vzw"
    },
    {
      "readonly_recovery": true,
      "version": "5.8.4.7",
      "name": "HTC One V (CDMA)",
      "legacy_versions": [
        "5.8.4.6",
        "5.8.4.7"
      ],
      "init": "init.primoc.rc",
      "lunch": "full_primoc-userdebug",
      "touch_version": "5.8.4.7",
      "key": "primoc"
    },
    {
      "version": "6.0.3.1",
      "flash_recovery": "dd if=%s of=/dev/block/platform/sdhci-tegra.3/by-name/SOS bs=4096 ; ",
      "name": "Google Nexus 7",
      "legacy_versions": [
        "6.0.0.6",
        "6.0.1.0",
        "6.0.1.9",
        "6.0.2.3"
      ],
      "init": "init.grouper.rc",
      "lunch": "cm_grouper-userdebug",
      "touch_version": "6.0.3.1",
      "key": "grouper"
    },
    {
      "version": "6.0.1.0",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p13 bs=4096 ; ",
      "name": "LG Optimus LTE (SKT)",
      "legacy_versions": [

      ],
      "init": "init.su640.rc",
      "lunch": "cm_su640-userdebug",
      "touch_version": "6.0.1.0",
      "key": "su640"
    },
    {
      "version": "6.0.1.0",
      "officially_supported": false,
      "name": "Samsung Galaxy S2 (GT-I9100G)",
      "legacy_versions": [

      ],
      "init": "init.t1.rc",
      "lunch": "cm_i9100g-userdebug",
      "key": "i9100g"
    },
    {
      "version": "6.0.2.7",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p6 bs=4096 ; ",
      "name": "Samsung Galaxy Tab 2 (GT-P3100)",
      "legacy_versions": [
        "6.0.1.1",
        "6.0.2.3"
      ],
      "init": "init.espresso.rc",
      "lunch": "cm_p3100-userdebug",
      "touch_version": "6.0.2.7",
      "key": "p3100"
    },
    {
      "version": "6.0.2.7",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p6 bs=4096 ; ",
      "name": "Samsung Galaxy Tab 2 (GT-P3110)",
      "legacy_versions": [
        "6.0.1.1",
        "6.0.2.3"
      ],
      "init": "init.espresso.rc",
      "lunch": "cm_p3110-userdebug",
      "touch_version": "6.0.2.7",
      "key": "p3110"
    },
    {
      "version": "6.0.2.3",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p6 bs=4096 ; ",
      "name": "Samsung Galaxy Tab 2 (GT-P3113)",
      "legacy_versions": [
        "6.0.1.1"
      ],
      "init": "init.espresso.rc",
      "lunch": "cm_p3113-userdebug",
      "touch_version": "6.0.2.3",
      "key": "p3113"
    },
    {
      "version": "6.0.2.7",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p6 bs=4096 ; ",
      "name": "Samsung Galaxy Tab 2 (GT-P5100)",
      "legacy_versions": [
        "6.0.1.1",
        "6.0.2.3"
      ],
      "init": "init.espresso10.rc",
      "lunch": "cm_p5100-userdebug",
      "touch_version": "6.0.2.7",
      "key": "p5100"
    },
    {
      "version": "6.0.2.7",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p6 bs=4096 ; ",
      "name": "Samsung Galaxy Tab 2 (GT-P5110)",
      "legacy_versions": [
        "6.0.1.1",
        "6.0.2.3"
      ],
      "init": "init.espresso10.rc",
      "lunch": "cm_p5110-userdebug",
      "touch_version": "6.0.2.7",
      "key": "p5110"
    },
    {
      "version": "6.0.2.3",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p6 bs=4096 ; ",
      "name": "Samsung Galaxy Tab 2 (GT-P5113)",
      "legacy_versions": [
        "6.0.1.1"
      ],
      "init": "init.espresso10.rc",
      "lunch": "cm_p5113-userdebug",
      "touch_version": "6.0.2.3",
      "key": "p5113"
    },
    {
      "version": "6.0.1.1",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p13 bs=4096 ; ",
      "inits": [
        "init.target.rc",
        "init.iproj.rc",
        "init.i_vzw.rc",
        "init.iprj.rc"
      ],
      "name": "LG Spectrum 4G",
      "legacy_versions": [

      ],
      "init": "init.target.rc",
      "lunch": "cm_vs920-userdebug",
      "touch_version": "6.0.1.1",
      "key": "vs920"
    },
    {
      "version": "6.0.1.1",
      "name": "Score & Score M",
      "legacy_versions": [

      ],
      "init": "init.zte.rc",
      "lunch": "cm_x500-userdebug",
      "touch_version": "6.0.1.1",
      "key": "x500"
    },
    {
      "version": "6.0.1.1",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p14 bs=4096 ; ",
      "inits": [
        "init.qcom.rc",
        "init.bryce.rc"
      ],
      "name": "LG Revolution 4G",
      "legacy_versions": [

      ],
      "init": "init.qcom.rc",
      "lunch": "cm_vs910-userdebug",
      "touch_version": "6.0.1.1",
      "key": "vs910"
    },
    {
      "version": "6.0.1.1",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p14 bs=4096 ; ",
      "inits": [
        "init.qcom.rc",
        "init.bryce.rc"
      ],
      "name": "LG Esteeem 4G",
      "legacy_versions": [
        "5.0.2.8"
      ],
      "init": "init.qcom.rc",
      "lunch": "cm_ms910-userdebug",
      "touch_version": "6.0.1.1",
      "key": "ms910"
    },
    {
      "version": "6.0.1.1",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p17 bs=4096 ; ",
      "inits": [
        "init.qcom.rc",
        "init.m3.rc"
      ],
      "name": "LG Optimus M+",
      "legacy_versions": [
        "6.0.1.0"
      ],
      "init": "init.qcom.rc",
      "lunch": "cm_ms695-userdebug",
      "touch_version": "6.0.1.1",
      "key": "ms695"
    },
    {
      "version": "5.8.2.1",
      "reboot_recovery": "echo 1 > /cache/.startrecovery ; sync ; reboot ;",
      "officially_supported": false,
      "name": "Samsung Galaxy Tab (MTD and GSM - L)",
      "legacy_versions": [

      ],
      "init": "init.p1.rc",
      "key": "p1l"
    },
    {
      "version": "5.8.2.1",
      "reboot_recovery": "echo 1 > /cache/.startrecovery ; sync ; reboot ;",
      "officially_supported": false,
      "name": "Samsung Galaxy Tab (MTD and GSM - N)",
      "legacy_versions": [

      ],
      "init": "init.p1.rc",
      "key": "p1n"
    },
    {
      "version": "6.0.3.1",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p18 bs=4096 ; ",
      "name": "Samsung Galaxy S3 (US Cellular)",
      "legacy_versions": [
        "6.0.1.2",
        "6.0.2.3",
        "6.0.2.8",
        "6.0.2.9",
        "6.0.3.0"
      ],
      "init": "init.d2usc.rc",
      "lunch": "cm_d2usc-userdebug",
      "touch_version": "6.0.3.1",
      "key": "d2usc"
    },
    {
      "version": "6.0.1.3",
      "flash_recovery": "dd if=%s of=/dev/block/platform/msm_sdcc.1/by-name/recovery bs=4096 ; ",
      "inits": [
        "init.asanti.rc",
        "init.sprint.rc"
      ],
      "name": "Motorola Photon Q",
      "legacy_versions": [

      ],
      "init": "init.mmi.usb.rc",
      "lunch": "cm_asanti-userdebug",
      "key": "asanti"
    },
    {
      "version": "6.0.1.5",
      "name": "LG Optimus Me",
      "legacy_versions": [
        "6.0.1.3",
        "6.0.1.4"
      ],
      "init": "init.pecan.rc",
      "lunch": "cm_p350-userdebug",
      "key": "p350"
    },
    {
      "version": "6.0.1.4",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p22 bs=4096 ; ",
      "name": "Samsung Galaxy Tab 8.9 (AT&T)",
      "legacy_versions": [

      ],
      "init": "fstab.qcom",
      "lunch": "cm_p5att-userdebug",
      "key": "p5att"
    },
    {
      "version": "6.0.1.4",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p22 bs=4096 ; ",
      "name": "Samsung Galaxy S Blaze 4G",
      "legacy_versions": [

      ],
      "init": "init.target.rc",
      "lunch": "cm_t769-userdebug",
      "touch_version": "6.0.1.4",
      "key": "t769"
    },
    {
      "version": "6.0.3.1",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p18 bs=4096 ; ",
      "inits": [
        "init.carrier.rc",
        "init.d2mtr.rc"
      ],
      "name": "Samsung Galaxy S3 (MetroPCS)",
      "legacy_versions": [
        "6.0.1.5",
        "6.0.2.3",
        "6.0.2.8",
        "6.0.2.9",
        "6.0.3.0"
      ],
      "init": "init.carrier.rc",
      "lunch": "cm_d2mtr-userdebug",
      "touch_version": "6.0.3.1",
      "key": "d2mtr"
    },
    {
      "version": "6.0.2.3",
      "reboot_recovery": "echo 'boot-recovery' | dd of=/dev/block/mmcblk0p3 seek=6144 bs=1 ; reboot ; ",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p4 bs=4096 ; ",
      "name": "Asus Transformer Pad Infinity",
      "legacy_versions": [
        "6.0.1.8"
      ],
      "init": "init.tf700t.rc",
      "lunch": "cm_tf700t-userdebug",
      "touch_version": "6.0.2.3",
      "key": "tf700t"
    },
    {
      "version": "6.0.3.1",
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
        "6.0.3.0"
      ],
      "init": "init.manta.rc",
      "lunch": "cm_manta-userdebug",
      "touch_version": "6.0.3.1",
      "key": "manta"
    },
    {
      "version": "6.0.3.1",
      "flash_recovery": "dd if=%s of=/dev/block/platform/msm_sdcc.1/by-name/recovery bs=4096 ; ",
      "name": "Google Nexus 4",
      "legacy_versions": [
        "6.0.1.5",
        "6.0.1.6",
        "6.0.1.8",
        "6.0.1.9",
        "6.0.2.0",
        "6.0.2.3",
        "6.0.3.0"
      ],
      "init": "init.mako.rc",
      "lunch": "cm_mako-userdebug",
      "touch_version": "6.0.3.1",
      "key": "mako"
    },
    {
      "version": "6.0.3.0",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p20 bs=4096 ; ",
      "name": "HTC Droid DNA",
      "legacy_versions": [
        "6.0.1.5",
        "6.0.1.9",
        "6.0.2.3",
        "6.0.2.7",
        "6.0.2.8"
      ],
      "init": "init.debug_mfgkernel.rc",
      "lunch": "cm_dlx-userdebug",
      "touch_version": "6.0.3.0",
      "key": "dlx"
    },
    {
      "version": "6.0.3.0",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p9 bs=4096 ; ",
      "name": "Samsung Galaxy Note 2 (HSPA+)",
      "legacy_versions": [
        "6.0.1.9"
      ],
      "init": "init.smdk4x12.rc",
      "lunch": "cm_n7100-userdebug",
      "touch_version": "6.0.3.0",
      "key": "n7100"
    },
    {
      "version": "6.0.2.3",
      "flash_recovery": "dd if=%s of=/dev/block/platform/sdhci-tegra.3/by-name/SOS bs=4096 ; ",
      "name": "Acer A700",
      "legacy_versions": [

      ],
      "init": "init.picasso_mf.rc",
      "lunch": "cm_a700-userdebug",
      "touch_version": "6.0.2.3",
      "key": "a700"
    },
    {
      "version": "6.0.3.1",
      "flash_recovery": "dd if=%s of=/dev/block/platform/sdhci-tegra.3/by-name/SOS bs=4096 ; ",
      "name": "Google Nexus 7 (GSM)",
      "legacy_versions": [
        "6.0.2.3"
      ],
      "init": "init.tilapia.rc",
      "lunch": "cm_tilapia-userdebug",
      "touch_version": "6.0.3.1",
      "key": "tilapia"
    },
    {
      "version": "6.0.3.0",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p9 bs=4096 ; ",
      "name": "Samsung Galaxy Note 2 (LTE)",
      "legacy_versions": [
        "6.0.2.3",
        "6.0.2.4",
        "6.0.2.5",
        "6.0.2.8"
      ],
      "init": "init.t0lte.rc",
      "lunch": "cm_t0lte-userdebug",
      "touch_version": "6.0.3.0",
      "key": "t0lte"
    },
    {
      "version": "6.0.2.3",
      "reboot_recovery": "echo '518 R 1' > /sys/kernel/kobject_lge_nvdata/dynamic_nvdata_raw_write ; reboot ; ",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p6 ; ",
      "inits": [
        "init.lgep720board.rc",
        "/bootimages/battery_charging_01.rle"
      ],
      "name": "LG Optimus 3DMax",
      "legacy_versions": [

      ],
      "lunch": "cm_p720-userdebug",
      "touch_version": "6.0.2.3",
      "key": "p720"
    },
    {
      "version": "6.0.3.1",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p18 bs=4096 ; ",
      "name": "Samsung Galaxy S3 (Cricket)",
      "legacy_versions": [
        "6.0.2.7",
        "6.0.2.8",
        "6.0.2.9",
        "6.0.3.0"
      ],
      "init": "init.d2cri.rc",
      "lunch": "cm_d2cri-userdebug",
      "touch_version": "6.0.3.1",
      "key": "d2cri"
    },
    {
      "version": "6.0.2.7",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p21 bs=4096 ; ",
      "name": "HTC Sensation XL",
      "legacy_versions": [

      ],
      "init": "init.runnymede.rc",
      "lunch": "cm_runnymede-userdebug",
      "touch_version": "6.0.2.7",
      "key": "runnymede"
    },
    {
      "version": "6.0.2.7",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p18 bs=4096 ; ",
      "name": "Pantech Presto",
      "legacy_versions": [

      ],
      "init": "init.presto.rc",
      "lunch": "cm_presto-userdebug",
      "touch_version": "6.0.2.7",
      "key": "presto"
    },
    {
      "version": "6.0.2.7",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p13 bs=4096 ; ",
      "name": "ZTE Sequent",
      "legacy_versions": [

      ],
      "init": "init.warp2.rc",
      "lunch": "cm_warp2-userdebug",
      "touch_version": "6.0.2.7",
      "key": "warp2"
    },
    {
      "version": "6.0.2.7",
      "flash_recovery": "dd if=%s of=/dev/block/platform/omap/omap_hsmmc.0/by-name/recovery bs=4096 ; ",
      "name": "Google Nexus Q",
      "legacy_versions": [

      ],
      "init": "init.steelhead.rc",
      "lunch": "cm_steelhead-userdebug",
      "key": "steelhead"
    },
    {
      "version": "6.0.2.7",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p15 bs=4096 ; ",
      "inits": [
        "init.carrier.rc",
        "init.prevail2spr.rc"
      ],
      "name": "Samsung Prevail 2 (Boost Mobile)",
      "legacy_versions": [

      ],
      "lunch": "cm_prevail2spr-userdebug",
      "touch_version": "6.0.2.7",
      "key": "prevail2spr"
    },
    {
      "version": "6.0.2.7",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p21 bs=4096 ; ",
      "name": "Samsung Galaxy S3 Mini",
      "legacy_versions": [

      ],
      "init": "init.golden.rc",
      "lunch": "cm_golden-userdebug",
      "touch_version": "6.0.2.7",
      "key": "golden"
    },
    {
      "version": "6.0.2.9",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p22 bs=4096 ; ",
      "name": "HTC Droid Incredible 4G LTE",
      "legacy_versions": [
        "6.0.2.8"
      ],
      "init": "init.fireball.rc",
      "lunch": "cm_fireball-userdebug",
      "touch_version": "6.0.2.9",
      "key": "fireball"
    },
    {
      "version": "6.0.2.8",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p23 bs=4096 ; ",
      "name": "HTC Jetstream",
      "legacy_versions": [

      ],
      "init": "init.puccinilte.rc",
      "lunch": "cm_puccinilte-userdebug",
      "touch_version": "6.0.2.8",
      "key": "puccinilte"
    },
    {
      "version": "6.0.2.8",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p17 bs=4096 ; ",
      "name": "LG Optimus L7",
      "legacy_versions": [

      ],
      "init": "init.u0.rc",
      "lunch": "cm_p700-userdebug",
      "touch_version": "6.0.2.8",
      "key": "p700"
    },
    {
      "version": "6.0.3.0",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p34 bs=4096 ; ",
      "name": "HTC One",
      "legacy_versions": [
        "6.0.2.8"
      ],
      "init": "init.m7.rc",
      "lunch": "cm_m7-userdebug",
      "touch_version": "6.0.3.0",
      "key": "m7"
    },
    {
      "version": "6.0.3.0",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p20 bs=4096 ; ",
      "name": "HTC Butterfly (dlxu)",
      "legacy_versions": [
        "6.0.2.8"
      ],
      "init": "init.dlxu.rc",
      "lunch": "cm_dlxu-userdebug",
      "touch_version": "6.0.3.0",
      "key": "dlxu"
    },
    {
      "version": "6.0.3.0",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p20 bs=4096 ; ",
      "name": "HTC Butterfly (dlxub1)",
      "legacy_versions": [
        "6.0.2.8"
      ],
      "init": "init.dlxub1.rc",
      "lunch": "cm_dlxub1-userdebug",
      "touch_version": "6.0.3.0",
      "key": "dlxub1"
    },
    {
      "version": "6.0.3.0",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p20 bs=4096 ; ",
      "name": "HTC Butterfly J",
      "legacy_versions": [
        "6.0.2.8"
      ],
      "init": "init.dlxj.rc",
      "lunch": "cm_dlxj-userdebug",
      "touch_version": "6.0.3.0",
      "key": "dlxj"
    },
    {
      "version": "6.0.2.8",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p17 bs=4096 ; ",
      "name": "LG Optimus L5",
      "legacy_versions": [

      ],
      "init": "init.m4.rc",
      "lunch": "cm_e610-userdebug",
      "key": "e610"
    },
    {
      "version": "6.0.2.8",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p22 bs=4096 ; ",
      "name": "HTC One X (AT&T)",
      "legacy_versions": [

      ],
      "init": "init.evita.rc",
      "lunch": "cm_evita-userdebug",
      "touch_version": "6.0.2.8",
      "key": "evita"
    },
    {
      "version": "6.0.3.0",
      "flash_recovery": "dd if=%s of=/dev/block/platform/sdhci-tegra.3/by-num/p2 bs=4096 ; ",
      "name": "Samsung Galaxy Tab 10.1",
      "legacy_versions": [
        "6.0.2.9"
      ],
      "init": "init.p4.rc",
      "lunch": "cm_p4-userdebug",
      "touch_version": "6.0.3.0",
      "key": "p4"
    },
    {
      "version": "6.0.3.0",
      "flash_recovery": "dd if=%s of=/dev/block/platform/sdhci-tegra.3/by-num/p2 bs=4096 ; ",
      "name": "Samsung Galaxy Tab 10.1 (T-Mobile)",
      "legacy_versions": [
        "6.0.2.9"
      ],
      "init": "init.p4tmo.rc",
      "lunch": "cm_p4tmo-userdebug",
      "touch_version": "6.0.3.0",
      "key": "p4tmo"
    },
    {
      "version": "6.0.3.0",
      "flash_recovery": "dd if=%s of=/dev/block/platform/sdhci-tegra.3/by-num/p2 bs=4096 ; ",
      "name": "Samsung Galaxy Tab 10.1 (Verizon)",
      "legacy_versions": [
        "6.0.2.9"
      ],
      "init": "init.p4vzw.rc",
      "lunch": "cm_p4vzw-userdebug",
      "touch_version": "6.0.3.0",
      "key": "p4vzw"
    },
    {
      "version": "6.0.2.9",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p4 bs=4096 ; ",
      "name": "LG Optimus L9",
      "legacy_versions": [

      ],
      "init": "init.u0.rc",
      "lunch": "cm_p760-userdebug",
      "touch_version": "6.0.2.9",
      "key": "p760"
    },
    {
      "version": "6.0.2.9",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p9 bs=4096 ; ",
      "name": "Samsung Galaxy S3 LTE (GT-I9305)",
      "legacy_versions": [

      ],
      "init": "ueventd.smdk4x12.rc",
      "lunch": "cm_i9305-userdebug",
      "touch_version": "6.0.2.9",
      "key": "i9305"
    },
    {
      "version": "6.0.2.9",
      "flash_recovery": "dd if=%s of=/dev/block/platform/sdhci-tegra.3/by-num/p2 bs=4096 ; ",
      "name": "Samsung Galaxy Tab 10.1v",
      "legacy_versions": [

      ],
      "init": "init.p3.rc",
      "lunch": "cm_p3-userdebug",
      "touch_version": "6.0.2.9",
      "key": "p3"
    },
    {
      "version": "6.0.3.0",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p6 bs=4096 ; ",
      "name": "Samsung Galaxy Note 10.1",
      "legacy_versions": [

      ],
      "init": "init.n8013.rc",
      "lunch": "cm_n8013-userdebug",
      "touch_version": "6.0.3.0",
      "key": "n8013"
    },
    {
      "version": "6.0.3.0",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p9 bs=4096 ; ",
      "name": "Samsung Galaxy Note 2 (Verizon)",
      "legacy_versions": [

      ],
      "init": "init.i605.rc",
      "lunch": "cm_i605-userdebug",
      "ro.product.devices": [
        "i605",
        "t0ltevzw"
      ],
      "touch_version": "6.0.3.0",
      "key": "i605"
    },
    {
      "version": "6.0.3.0",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p9 bs=4096 ; ",
      "name": "Samsung Galaxy Note 2 (Sprint)",
      "legacy_versions": [

      ],
      "init": "init.l900.rc",
      "lunch": "cm_l900-userdebug",
      "ro.product.devices": [
        "l900",
        "t0ltespr"
      ],
      "touch_version": "6.0.3.0",
      "key": "l900"
    },
    {
      "version": "6.0.3.0",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p9 bs=4096 ; ",
      "name": "Samsung Galaxy Note 2 (AT&T)",
      "legacy_versions": [

      ],
      "init": "init.t0lteatt.rc",
      "lunch": "cm_t0lteatt-userdebug",
      "touch_version": "6.0.3.0",
      "key": "t0lteatt"
    },
    {
      "version": "6.0.3.0",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p9 bs=4096 ; ",
      "name": "Samsung Galaxy Note 2 (T-Mobile)",
      "legacy_versions": [

      ],
      "init": "init.t0ltetmo.rc",
      "lunch": "cm_t0ltetmo-userdebug",
      "touch_version": "6.0.3.0",
      "key": "t0ltetmo"
    },
    {
      "version": "6.0.3.0",
      "flash_recovery": "dd if=%s of=/dev/block/platform/msm_sdcc.1/by-name/recovery bs=4096 ; ",
      "name": "LG Optimus G Intl (E975)",
      "legacy_versions": [

      ],
      "init": "init.geehrc.rc",
      "lunch": "cm_e975-userdebug",
      "touch_version": "6.0.3.0",
      "key": "e975"
    }
  ],
  "manifest_signature": "O8+Kc2mdQz0e/AjCQn6Rw6fK5Kr5LZItJ474Ua3gF2o4IgdCQZXIbwCHIo6xeqY3pVEGtjYmmyO1PkRYcGqq2rB2wQM8SoKFl/70vG0ihEZ5TDeruKUgxVVSNM3e09kBvCxYK89GWqVWkNHtvTu1T1F9w6FilzCsNFSAXHD0Bos=",
  "recovery_url": "http://download2.clockworkmod.com/recoveries/recovery-clockwork-%s-%s.img",
  "ad_network": "admob",
  "recovery_zip_url": "http://download2.clockworkmod.com/recoveries/recovery-clockwork-%s-%s.zip",
  "use_in_app": false
}