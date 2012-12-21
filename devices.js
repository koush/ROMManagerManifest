{
  "keywords": "phone accessories,droid,gadgets,bluetooth headset,car charger,sd card",
  "owners": {
    "keaneyw@gmail.com": true,
    "arcee@cyanogenmod.com": true,
    "daniel.hillenbrand@codeworkx.de": true,
    "cvpcsm@gmail.com": true,
    "playfulgod@gmail.com": true,
    "koush@clockworkmod.com": true,
    "bigbeeshane@gmail.com": true,
    "ferguson.david@gmail.com": true
  },
  "use_in_app": false,
  "recovery_url": "http://download2.clockworkmod.com/recoveries/recovery-clockwork-%s-%s.img",
  "ad_network": "admob",
  "recovery_zip_url": "http://download2.clockworkmod.com/recoveries/recovery-clockwork-%s-%s.zip",
  "pontiflex_startup_ad": 100,
  "pontiflex_startup_register": 100,
  "manifest": "http://developer.clockworkmod.com/merge",
  "version": "2.5.0.1",
  "devices": [
    {
      "name": "Motorola Droid",
      "init": "init.sholes.rc",
      "version": "2.5.0.1",
      "alternate_recovery": {
        "url": "http://koush.kanged.net/cm/recoveries/sprecovery.img",
        "name": "SPRecovery 0.99.3b",
        "clockwork": false
      },
      "legacy_versions": [
        "3.1.0.2",
        "2.5.1.4",
        "2.5.1.3",
        "2.5.1.1",
        "2.5.0.1"
      ],
      "key": "sholes"
    },
    {
      "name": "HTC MyTouch 3G",
      "init": "init.sapphire.rc",
      "version": "2.5.0.7",
      "alternate_recovery": {
        "url": "http://files.androidspin.com/downloads.php?dir=amon_ra/RECOVERY/&file=recovery-RA-sapphire-v1.7.0G.img",
        "name": "RA Recovery v1.7.0G",
        "clockwork": false
      },
      "legacy_versions": [
        "2.5.0.7",
        "2.5.1.4",
        "2.5.1.3",
        "2.5.1.1"
      ],
      "key": "sapphire"
    },
    {
      "name": "HTC Magic",
      "init": "init.sapphire.rc",
      "version": "2.5.0.7",
      "alternate_recovery": {
        "url": "http://files.androidspin.com/downloads.php?dir=amon_ra/RECOVERY/&file=recovery-RA-sapphire-v1.7.0H.img",
        "name": "RA Recovery v1.7.0H",
        "clockwork": false
      },
      "legacy_versions": [
        "2.5.0.7",
        "2.5.1.4",
        "2.5.1.3",
        "2.5.1.1"
      ],
      "key": "magic"
    },
    {
      "name": "HTC G1/Dream",
      "init": "init.trout.rc",
      "version": "2.5.0.7",
      "alternate_recovery": {
        "url": "http://files.androidspin.com/downloads.php?dir=amon_ra/RECOVERY/&file=recovery-RA-dream-v1.7.0.img",
        "name": "RA Recovery v1.7.0",
        "clockwork": false
      },
      "legacy_versions": [
        "2.5.0.7",
        "2.5.1.4",
        "2.5.1.3",
        "2.5.1.1"
      ],
      "key": "dream"
    },
    {
      "name": "Google Nexus One",
      "init": "init.mahimahi.rc",
      "lunch": "cyanogen_passion-eng",
      "version": "5.0.2.0",
      "alternate_recovery": {
        "url": "http://files.androidspin.com/downloads.php?dir=amon_ra/RECOVERY/&file=recovery-RA-passion-v2.2.1.img",
        "name": "RA Recovery v2.2.1",
        "clockwork": false
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
      "key": "passion"
    },
    {
      "name": "HTC Hero (GSM)",
      "init": "init.hero.rc",
      "version": "2.5.0.7",
      "alternate_recovery": {
        "url": "http://files.androidspin.com/downloads.php?dir=amon_ra/RECOVERY/&file=recovery-RA-hero-v1.7.0.1.img",
        "name": "RA Recovery v1.7.0.1",
        "clockwork": false
      },
      "legacy_versions": [
        "2.5.0.7",
        "2.5.1.4",
        "2.5.1.3",
        "2.5.1.1"
      ],
      "key": "hero"
    },
    {
      "name": "HTC Hero (CDMA)",
      "init": "init.heroc.rc",
      "version": "2.5.0.7",
      "alternate_recovery": {
        "url": "http://www.androidspin.com/downloads.php?dir=amon_ra/RECOVERY/&file=recovery-RA-heroc-v1.6.2.img",
        "name": "RA Recovery v1.6.2",
        "clockwork": false
      },
      "legacy_versions": [
        "2.5.0.7",
        "2.5.1.4",
        "2.5.1.3",
        "2.5.1.1"
      ],
      "key": "heroc"
    },
    {
      "name": "HTC Evo",
      "init": "init.supersonic.rc",
      "lunch": "cyanogen_supersonic-eng",
      "touch_version": "5.8.0.1",
      "version": "5.0.2.2",
      "alternate_recovery": {
        "url": "http://files.androidspin.com/downloads.php?dir=amon_ra/RECOVERY/&file=recovery-RA-supersonic-v2.3.img",
        "name": "RA Recovery v2.3",
        "clockwork": false
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
      "key": "supersonic"
    },
    {
      "name": "HTC Legend",
      "init": "init.legend.rc",
      "readonly_recovery": true,
      "lunch": "cyanogen_legend-eng",
      "version": "5.0.2.0",
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
      "key": "legend"
    },
    {
      "name": "HTC Desire",
      "init": "init.bravo.rc",
      "lunch": "cyanogen_bravo-eng",
      "touch_version": "5.8.0.2",
      "version": "5.0.2.0",
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
      "key": "bravo"
    },
    {
      "name": "HTC Desire CDMA",
      "init": "init.bravoc.rc",
      "lunch": "cyanogen_bravoc-eng",
      "version": "5.0.2.0",
      "legacy_versions": [
        "2.5.0.9",
        "2.5.1.4",
        "2.5.1.3",
        "2.5.1.1",
        "2.5.0.9",
        "5.0.0.1",
        "5.0.1.0"
      ],
      "key": "bravoc"
    },
    {
      "name": "Huawei Pulse Mini",
      "init": "init.qcom.rc",
      "version": "2.5.0.7",
      "legacy_versions": [
        "2.5.0.7",
        "2.5.1.4",
        "2.5.1.3",
        "2.5.1.1"
      ],
      "key": "pulsemini"
    },
    {
      "name": "HTC Incredible (CDMA)",
      "init": "init.inc.rc",
      "lunch": "cyanogen_inc-eng",
      "version": "5.0.2.0",
      "alternate_recovery": {
        "url": "http://dl.dropbox.com/u/12949506/RomManager/recovery-RA-inc-3.02.img",
        "name": "RA_GNM Recovery v3.02",
        "clockwork": false
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
      "key": "inc"
    },
    {
      "name": "HTC Aria",
      "init": "init.liberty.rc",
      "readonly_recovery": true,
      "version": "2.5.0.7",
      "legacy_versions": [
        "2.5.0.7",
        "2.5.1.4",
        "2.5.1.3",
        "2.5.1.1"
      ],
      "key": "liberty"
    },
    {
      "name": "Motorola Droid Eris",
      "init": "init.desirec.rc",
      "readonly_recovery": true,
      "version": "2.5.0.7",
      "alternate_recovery": {
        "url": "http://www.androidspin.com/downloads.php?dir=amon_ra/RECOVERY/&file=recovery-RA-eris-v1.6.2.img",
        "name": "RA Recovery v1.6.2",
        "clockwork": false
      },
      "legacy_versions": [
        "2.5.0.7",
        "2.5.1.4",
        "2.5.1.3",
        "2.5.1.1"
      ],
      "key": "desirec"
    },
    {
      "name": "HTC Buzz (Wildfire)",
      "init": "init.buzz.rc",
      "readonly_recovery": true,
      "lunch": "cyanogen_buzz-eng",
      "version": "5.0.2.0",
      "legacy_versions": [
        "3.0.0.6",
        "2.5.1.4",
        "2.5.1.3",
        "2.5.1.1",
        "2.5.0.7",
        "5.0.0.8",
        "5.0.1.0"
      ],
      "key": "buzz"
    },
    {
      "name": "Dell Streak",
      "init": "init.qcom.rc",
      "version": "2.5.0.7",
      "legacy_versions": [
        "2.5.0.7",
        "2.5.1.4",
        "2.5.1.3",
        "2.5.1.1"
      ],
      "key": "streak"
    },
    {
      "name": "HTC MyTouch Slide",
      "init": "init.latte.rc",
      "readonly_recovery": true,
      "version": "2.5.0.7",
      "legacy_versions": [
        "2.5.0.7",
        "2.5.1.4",
        "2.5.1.3",
        "2.5.1.1"
      ],
      "key": "espresso"
    },
    {
      "name": "Samsung GalaxyS i9000",
      "init": "lpm.rc",
      "readonly_recovery": true,
      "version": "2.5.1.2",
      "legacy_versions": [
        "2.5.1.2",
        "2.5.1.4",
        "2.5.1.3",
        "2.5.1.1"
      ],
      "key": "galaxys"
    },
    {
      "name": "Samsung GalaxyS Fascinate",
      "init": "init.smdkc110.rc",
      "readonly_recovery": true,
      "version": "3.0.0.8",
      "legacy_versions": [
        "3.0.0.8",
        "2.5.1.4",
        "2.5.1.3",
        "2.5.1.1"
      ],
      "key": "fascinate"
    },
    {
      "name": "Samsung GalaxyS Vibrant",
      "init": "init.smdkc110.rc",
      "readonly_recovery": true,
      "version": "2.5.1.2",
      "legacy_versions": [
        "2.5.1.2",
        "2.5.1.4",
        "2.5.1.3",
        "2.5.1.1"
      ],
      "key": "vibrant"
    },
    {
      "name": "Samsung GalaxyS Captivate",
      "init": "init.smdkc110.rc",
      "readonly_recovery": true,
      "version": "2.5.1.2",
      "legacy_versions": [
        "2.5.1.2",
        "2.5.1.4",
        "2.5.1.3",
        "2.5.1.1"
      ],
      "key": "captivate"
    },
    {
      "name": "Huawei Pulse",
      "init": "init.qcom.rc",
      "version": "2.5.0.7",
      "legacy_versions": [
        "2.5.0.7",
        "2.5.1.4",
        "2.5.1.3",
        "2.5.1.1"
      ],
      "key": "pulse"
    },
    {
      "name": "LGE Ally",
      "init": "init.aloha.rc",
      "version": "2.5.0.7",
      "alternate_recovery": {
        "url": "http://dl.dropbox.com/u/12949506/RomManager/recovery-RA-aloha-2.2.2-GNM.img",
        "name": "RA_GNM Recovery v2.2.2",
        "clockwork": false
      },
      "legacy_versions": [
        "2.5.0.7",
        "2.5.1.4",
        "2.5.1.3",
        "2.5.1.1"
      ],
      "key": "aloha"
    },
    {
      "name": "Motorola Milestone",
      "init": "init.mapphone_cdma.rc",
      "readonly_recovery": true,
      "version": "3.1.0.2",
      "legacy_versions": [
        "2.5.0.7",
        "2.5.1.4",
        "2.5.1.3",
        "2.5.1.1",
        "2.5.0.7"
      ],
      "key": "milestone"
    },
    {
      "name": "Motorola Droid X",
      "init": "init.mapphone_cdma.rc",
      "readonly_recovery": true,
      "reboot_recovery": "rm /cache/recovery/command ; echo 1 > /data/.recovery_mode ; sync ; reboot ;",
      "version": "5.0.2.0",
      "legacy_versions": [
        "2.5.0.7"
      ],
      "key": "droidx",
      "flash_recovery": "dd if=%s of=/preinstall/recovery/recovery.zip ; "
    },
    {
      "name": "Motorola Droid X (2nd-init)",
      "init": "init.mapphone_cdma.rc",
      "readonly_recovery": true,
      "lunch": "cyanogen_shadow-eng",
      "reboot_recovery": "rm /cache/recovery/command ; echo 1 > /data/.recovery_mode ; sync ; reboot ;",
      "version": "5.0.2.0",
      "legacy_versions": [
        "2.5.0.7"
      ],
      "key": "shadow",
      "flash_recovery": "dd if=%s of=/preinstall/recovery/recovery.zip ; "
    },
    {
      "name": "Acer Liquid",
      "init": "init.salsa.rc",
      "version": "2.5.1.0",
      "legacy_versions": [
        "2.5.1.4",
        "2.5.1.3",
        "2.5.1.1",
        "2.5.1.0"
      ],
      "key": "salsa"
    },
    {
      "name": "Commtiva Z71 (Boston, Blaze, and more)",
      "init": "init.qcom.rc",
      "version": "2.5.1.3",
      "legacy_versions": [
        "2.5.1.4",
        "2.5.1.3",
        "2.5.1.1",
        "2.5.1.0"
      ],
      "key": "z71"
    },
    {
      "name": "HTC G2",
      "init": "init.vision.rc",
      "lunch": "cyanogen_vision-eng",
      "touch_version": "5.8.1.0",
      "version": "5.0.2.7",
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
      "flash_recovery": "dd if=/dev/zero of=/dev/block/mmcblk0p21 bs=4096 ; dd if=%s of=/dev/block/mmcblk0p21 bs=4096 ; "
    },
    {
      "name": "HTC MyTouch 4G",
      "init": "init.glacier.rc",
      "lunch": "cyanogen_glacier-eng",
      "touch_version": "5.8.1.0",
      "version": "5.0.2.0",
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
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p21 ; "
    },
    {
      "name": "HTC Desire HD",
      "init": "init.spade.rc",
      "lunch": "cyanogen_ace-eng",
      "touch_version": "5.8.1.5",
      "version": "5.0.2.0",
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
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p21 ; "
    },
    {
      "name": "Motorola Cliq",
      "init": "init.morrison.rc",
      "lunch": "cyanogen_morrison-eng",
      "touch_version": "5.8.1.0",
      "version": "5.0.2.0",
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
      "key": "morrison"
    },
    {
      "name": "Motorola Droid 2",
      "init": "init.mapphone_cdma.rc",
      "readonly_recovery": true,
      "lunch": "cyanogen_droid2-eng",
      "reboot_recovery": "rm /cache/recovery/command ; echo 1 > /data/.recovery_mode ; sync ; reboot ;",
      "version": "5.0.2.0",
      "legacy_versions": [
        "2.5.0.8"
      ],
      "key": "droid2",
      "flash_recovery": "dd if=%s of=/preinstall/recovery/recovery.zip ; "
    },
    {
      "name": "Geeksphone ONE",
      "init": "init.qcom.rc",
      "version": "2.5.1.3",
      "alternate_recovery": {
        "url": "http://dl.dropbox.com/u/10355648/recovery-ONE-1_6.img",
        "name": "ONE Recovery v1.6",
        "clockwork": false
      },
      "legacy_versions": [
        "2.5.1.4",
        "2.5.1.3",
        "2.5.1.1",
        "2.5.1.0"
      ],
      "key": "one"
    },
    {
      "name": "Advent Vega",
      "init": "init_recovery.rc",
      "reboot_recovery": "echo start > /proc/ota ; ",
      "version": "3.0.2.7",
      "legacy_versions": [
        "2.5.1.4",
        "2.5.1.3",
        "2.5.1.1",
        "2.5.1.0",
        "2.5.1.4"
      ],
      "key": "vega",
      "flash_recovery": "/data/data/com.koushikdutta.rommanager/files/tegra_flash_image recovery %s ; "
    },
    {
      "name": "Samsung Galaxy Tab - ATT",
      "init": "init.smdkc110.rc",
      "readonly_recovery": true,
      "version": "2.5.1.8",
      "legacy_versions": [
        "2.5.1.8",
        "2.5.1.4",
        "2.5.1.3",
        "2.5.1.1"
      ],
      "key": "att_tab"
    },
    {
      "name": "Samsung Galaxy Tab (T-Mobile)",
      "init": "init.smdkc110.rc",
      "readonly_recovery": true,
      "version": "2.5.1.8",
      "legacy_versions": [
        "2.5.1.8",
        "2.5.1.4",
        "2.5.1.3",
        "2.5.1.1"
      ],
      "key": "tmobile_tab"
    },
    {
      "name": "Commtiva Link N700, Spice MI700, and more",
      "init": "init.qcom.rc",
      "version": "2.5.1.2",
      "alternate_recovery": {
        "url": "http://dl.dropbox.com/u/15816725/MI700-recovery-V1_3.img",
        "name": "MI700 Recovery v1.6",
        "clockwork": false
      },
      "legacy_versions": [
        "2.5.1.4",
        "2.5.1.3",
        "2.5.1.1",
        "2.5.1.0"
      ],
      "key": "FM6"
    },
    {
      "name": "Google Nexus S",
      "init": "init.herring.rc",
      "lunch": "cm_crespo-userdebug",
      "touch_version": "6.0.1.0",
      "version": "6.0.1.0",
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
        "6.0.0.7"
      ],
      "key": "crespo"
    },
    {
      "name": "Motorola Droid Pro",
      "init": "init. mapphone_cdma.rc",
      "readonly_recovery": true,
      "version": "2.5.0.8",
      "legacy_versions": [
        "2.5.0.8"
      ],
      "key": "droidpro"
    },
    {
      "name": "Huawei Ascend",
      "init": "init.qcom.rc",
      "version": "3.0.0.5",
      "legacy_versions": [
        "3.0.0.5",
        "3.0.0.4"
      ],
      "key": "ascend"
    },
    {
      "name": "ZTE Blade",
      "init": "init.blade.rc",
      "lunch": "cyanogen_blade-eng",
      "version": "5.0.2.0",
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
      "key": "blade"
    },
    {
      "name": "Nook Color",
      "init": "env.txt",
      "reboot_recovery": "dd if=/dev/zero of=/rom/bcb bs=64 count=1 ; echo 'recovery' >> /rom/bcb ; reboot ;",
      "version": "3.2.0.1",
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
      "inits": [
        "env.txt",
        "init.encore.rc"
      ],
      "key": "encore",
      "flash_recovery": "busybox mount -orw,remount / ; mkdir /boot ; busybox mount /dev/block/mmcblk0p1 /boot ; busybox unzip -p %1$s ramdisk-recovery.ub > /boot/uRecRam ; busybox unzip -p %1$s kernel > /boot/uRecImg ; busybox umount /boot ; rmdir /boot; busybox mount -oro,remount / ; "
    },
    {
      "name": "HTC Click/Tattoo",
      "init": "init.bahamas.rc",
      "lunch": "cyanogen_click-eng",
      "version": "5.0.2.0",
      "legacy_versions": [
        "3.0.0.6",
        "3.0.0.6",
        "3.0.2.7",
        "5.0.0.8",
        "5.0.1.0"
      ],
      "key": "click"
    },
    {
      "name": "Elocity A7",
      "init": "init_recovery.rc",
      "readonly_recovery": true,
      "version": "3.0.0.8",
      "legacy_versions": [
        "3.0.0.8"
      ],
      "key": "a7"
    },
    {
      "name": "Geeksphone Zero",
      "init": "init.zero.rc",
      "version": "3.0.1.3",
      "legacy_versions": [
        "3.0.1.3"
      ],
      "key": "zero"
    },
    {
      "name": "HTC Evo Shift",
      "init": "init.speedy.rc",
      "lunch": "cyanogen_speedy-eng",
      "touch_version": "5.8.1.6",
      "version": "5.0.2.0",
      "legacy_versions": [
        "3.0.1.4",
        "3.0.1.3",
        "3.0.1.2",
        "3.0.1.1",
        "3.0.1.4",
        "3.0.2.8",
        "3.2.0.1"
      ],
      "key": "speedy"
    },
    {
      "name": "Samsung Captivate (MTD)",
      "init": "init.aries.rc",
      "reboot_recovery": "echo 1 > /cache/.startrecovery ; sync ; reboot ;",
      "officially_supported": false,
      "legacy_versions": [

      ],
      "key": "captivatemtd"
    },
    {
      "name": "Samsung Showcase (MTD)",
      "init": "init.aries.rc",
      "reboot_recovery": "echo 1 > /cache/.startrecovery ; sync ; reboot ;",
      "officially_supported": false,
      "legacy_versions": [

      ],
      "key": "showcasemtd"
    },
    {
      "name": "Samsung Mesmerize (MTD)",
      "init": "init.aries.rc",
      "reboot_recovery": "echo 1 > /cache/.startrecovery ; sync ; reboot ;",
      "officially_supported": false,
      "legacy_versions": [

      ],
      "key": "mesmerizemtd"
    },
    {
      "name": "Samsung Fascinate (MTD)",
      "init": "init.aries.rc",
      "reboot_recovery": "echo 1 > /cache/.startrecovery ; sync ; reboot ;",
      "officially_supported": false,
      "legacy_versions": [

      ],
      "key": "fascinatemtd"
    },
    {
      "name": "Samsung Vibrant (MTD)",
      "init": "init.aries.rc",
      "reboot_recovery": "echo 1 > /cache/.startrecovery ; sync ; reboot ;",
      "officially_supported": false,
      "legacy_versions": [

      ],
      "key": "vibrantmtd"
    },
    {
      "name": "Samsung GalaxyS i9000B (MTD)",
      "init": "init.aries.rc",
      "reboot_recovery": "echo 1 > /cache/.startrecovery ; sync ; reboot ;",
      "officially_supported": false,
      "legacy_versions": [

      ],
      "key": "galaxysbmtd"
    },
    {
      "name": "Samsung GalaxyS i9000 (MTD)",
      "init": "init.aries.rc",
      "reboot_recovery": "echo 1 > /cache/.startrecovery ; sync ; reboot ;",
      "officially_supported": false,
      "legacy_versions": [

      ],
      "key": "galaxysmtd"
    },
    {
      "name": "Samsung Epic4G",
      "init": "lpm.rc",
      "readonly_recovery": true,
      "lunch": "full_epic4g-eng",
      "version": "5.0.2.7",
      "legacy_versions": [

      ],
      "key": "epic4g"
    },
    {
      "name": "Dell Streak 7",
      "init": "init.tinyandroid.rc",
      "version": "3.0.2.0",
      "legacy_versions": [
        "3.0.2.0",
        "3.0.1.9",
        "3.0.1.8",
        "3.0.1.7"
      ],
      "key": "streak7",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk3p1 ; "
    },
    {
      "name": "HTC Thunderbolt",
      "init": "init.mecha.rc",
      "lunch": "cyanogen_mecha-eng",
      "touch_version": "5.8.0.2",
      "version": "5.0.2.1",
      "alternate_recovery": {
        "url": "http://dl.dropbox.com/u/12949506/RomManager/recovery-ra-mecha-3.05.img",
        "name": "RA_GNM Recovery v3.05",
        "clockwork": false
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
      "key": "mecha"
    },
    {
      "name": "Huawei U8150 Ideos",
      "init": "init.ideos.rc",
      "version": "3.0.2.4",
      "legacy_versions": [
        "3.0.2.4"
      ],
      "key": "ideos"
    },
    {
      "name": "Motorola XOOM",
      "init": "init.stingray.rc",
      "version": "4.0.0.4",
      "legacy_versions": [
        "3.0.2.5",
        "3.0.2.5",
        "4.0.0.0",
        "4.0.0.0",
        "4.0.0.0",
        "4.0.0.0",
        "4.0.0.0",
        "4.0.0.0",
        "4.0.0.1"
      ],
      "key": "stingray",
      "flash_recovery": "dd if=%s of=/dev/block/platform/sdhci-tegra.3/by-name/recovery ; "
    },
    {
      "name": "HTC HD2",
      "init": "init.leo.rc",
      "version": "3.1.0.0",
      "legacy_versions": [
        "3.0.2.5",
        "3.0.2.4",
        "3.0.2.5"
      ],
      "key": "leo"
    },
    {
      "name": "Motorola CLIQ XT/Quench (MB501)",
      "init": "init.zeppelin.rc",
      "lunch": "cyanogen_zeppelin-eng",
      "version": "5.0.2.0",
      "legacy_versions": [
        "3.0.2.4",
        "3.0.2.4",
        "5.0.0.8",
        "5.0.0.8",
        "5.0.1.0",
        "5.0.1.0"
      ],
      "key": "zeppelin"
    },
    {
      "name": "HTC Desire S",
      "init": "init.saga.rc",
      "lunch": "full_saga-eng",
      "touch_version": "5.8.1.5",
      "version": "5.0.2.0",
      "legacy_versions": [
        "3.0.2.6",
        "5.0.1.9"
      ],
      "key": "saga",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p21 ; "
    },
    {
      "name": "LGE G2X (T-Mobile)",
      "init": "init_recovery.rc",
      "readonly_recovery": true,
      "lunch": "cyanogen_p999-eng",
      "reboot_recovery": "echo 'boot-recovery' | dd of=/dev/block/mmcblk0p3 seek=6144 bs=1 ; reboot ; ",
      "version": "5.0.2.0",
      "legacy_versions": [
        "3.0.2.7",
        "5.0.0.8",
        "5.0.1.0",
        "5.0.1.4",
        "5.0.1.6"
      ],
      "key": "p999"
    },
    {
      "name": "LGE Optimus 2X",
      "lunch": "cm_p990-userdebug",
      "reboot_recovery": "echo 'boot-recovery' | dd of=/dev/block/mmcblk0p3 seek=6144 bs=1 ; reboot ; ",
      "touch_version": "6.0.1.5",
      "version": "6.0.1.5",
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
      "inits": [
        "init_recovery.rc",
        "/bootimages/opening_01.rle"
      ],
      "key": "p990",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p7 ; "
    },
    {
      "name": "Google Nexus S 4G",
      "init": "init.herring.rc",
      "lunch": "cm_crespo4g-userdebug",
      "touch_version": "6.0.1.0",
      "version": "6.0.1.0",
      "legacy_versions": [
        "3.1.0.0",
        "3.1.0.0",
        "3.1.0.1",
        "5.0.0.0",
        "5.0.0.8",
        "5.0.1.0",
        "5.0.2.0",
        "6.0.0.6",
        "6.0.0.7"
      ],
      "key": "crespo4g"
    },
    {
      "name": "LGE Optimus One (old BB)",
      "init": "init.thunderg.rc",
      "lunch": "full_thunderg-eng",
      "version": "5.0.2.0",
      "alternate_recovery": {
        "url": "http://dl.dropbox.com/u/12949506/RomManager/recovery-RA-thunderg-2.2.1-GNM.img",
        "name": "RA_GNM Recovery v2.2.1",
        "clockwork": false
      },
      "legacy_versions": [
        "3.1.0.0",
        "5.0.0.8",
        "5.0.1.0"
      ],
      "key": "thunderg"
    },
    {
      "name": "LGE Optimus One",
      "init": "init.thunderg.rc",
      "lunch": "cyanogen_p500-eng",
      "version": "5.0.2.7",
      "legacy_versions": [
        "5.0.2.0"
      ],
      "key": "p500"
    },
    {
      "name": "Huawei U8220/U8230",
      "init": "init.qcom.rc",
      "version": "3.1.0.1",
      "legacy_versions": [

      ],
      "key": "u8220"
    },
    {
      "name": "Samsung Charge",
      "init": "init.smdkc110.rc",
      "readonly_recovery": true,
      "version": "3.1.0.1",
      "legacy_versions": [

      ],
      "key": "charge"
    },
    {
      "name": "Motorola Defy",
      "init": "init.mapphone_umts.rc",
      "officially_supported": false,
      "legacy_versions": [

      ],
      "key": "umts_jordan"
    },
    {
      "name": "Samsung Galaxy S 4G",
      "init": "init.smdkc110.rc",
      "readonly_recovery": true,
      "version": "3.2.0.0",
      "legacy_versions": [
        "3.2.0.0"
      ],
      "key": "galaxys4g"
    },
    {
      "name": "Samsung Galaxy S2 (galaxys2)",
      "init": "init.smdkc210.rc",
      "readonly_recovery": true,
      "touch_version": "5.8.1.5",
      "version": "4.0.1.5",
      "legacy_versions": [
        "4.0.1.4",
        "v4.0.1.4"
      ],
      "inits": [
        "init.smdkc210.rc",
        "init.smdk4210.rc"
      ],
      "key": "galaxys2"
    },
    {
      "name": "Samsung Galaxy S2 (GT-I9100)",
      "init": "init.smdk4210.rc",
      "lunch": "cm_i9100-userdebug",
      "officially_supported": false,
      "version": "6.0.1.0",
      "legacy_versions": [

      ],
      "inits": [
        "init.smdkc210.rc",
        "init.smdk4210.rc"
      ],
      "key": "i9100"
    },
    {
      "name": "Samsung Galaxy Note (GT-N7000)",
      "init": "init.smdk4210.rc",
      "readonly_recovery": true,
      "lunch": "cm_n7000-userdebug",
      "version": "6.0.1.2",
      "legacy_versions": [
        "6.0.1.0"
      ],
      "key": "n7000"
    },
    {
      "name": "Samsung Sidekick 4G",
      "init": "init.smdkc110.rc",
      "readonly_recovery": true,
      "version": "4.0.0.2",
      "legacy_versions": [

      ],
      "key": "sidekick4g"
    },
    {
      "name": "HTC Incredible S",
      "init": "init.vivo.rc",
      "lunch": "cyanogen_vivo-eng",
      "version": "5.0.2.0",
      "legacy_versions": [
        "4.0.0.4",
        "4.0.0.6",
        "4.0.0.7",
        "4.0.0.8",
        "5.0.1.9"
      ],
      "key": "vivo",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p21 ; "
    },
    {
      "name": "HTC Incredible 2",
      "init": "init.vivow.rc",
      "lunch": "cyanogen_vivow-eng",
      "version": "5.0.2.0",
      "alternate_recovery": {
        "url": "http://dl.dropbox.com/u/12949506/RomManager/recovery-ra-vivow-3.05.img",
        "name": "RA_GNM Recovery v3.05",
        "clockwork": false
      },
      "legacy_versions": [
        "4.0.0.4",
        "4.0.0.6",
        "4.0.0.7",
        "4.0.0.8",
        "5.0.1.9"
      ],
      "key": "vivow",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p21 ; "
    },
    {
      "name": "LGE Optimus 3D",
      "lunch": "cm_p920-userdebug",
      "reboot_recovery": "echo '518 R 1' > /sys/kernel/kobject_lge_nvdata/dynamic_nvdata_raw_write ; reboot ; ",
      "touch_version": "6.0.1.9",
      "version": "6.0.1.9",
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
      ],
      "key": "p920",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p6 ; "
    },
    {
      "name": "Samsung Galaxy Ace",
      "init": "init.galaxyace.rc",
      "version": "4.0.0.9",
      "legacy_versions": [

      ],
      "key": "galaxyace",
      "flash_recovery": "/data/data/com.koushikdutta.rommanager/files/flash_image recoveryonly %s ; "
    },
    {
      "name": "Motorola Atrix 4G",
      "init": "init_prep_keypad.sh",
      "lunch": "generic_olympus-eng",
      "touch_version": "5.8.1.8",
      "version": "5.0.2.0",
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
      "inits": [
        "init_prep_keypad.sh",
        "init.olympus.rc"
      ],
      "key": "olympus",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p10 ; "
    },
    {
      "name": "Viewsonic GTablet (smb_a1002)",
      "init": "init_recovery.rc",
      "version": "4.0.1.5",
      "legacy_versions": [

      ],
      "key": "smb_a1002",
      "flash_recovery": "/data/data/com.koushikdutta.rommanager/files/tegra_flash_image recovery %s ; "
    },
    {
      "name": "HTC EVO 3D",
      "init": "init.shooter.rc",
      "lunch": "htc_shooter-eng",
      "touch_version": "5.8.0.2",
      "version": "5.0.2.0",
      "legacy_versions": [
        "4.0.1.5",
        "5.0.0.0",
        "5.0.1.0"
      ],
      "key": "shooter",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p22 ; "
    },
    {
      "name": "HTC Sensation",
      "init": "init.pyramid.rc",
      "lunch": "full_pyramid-eng",
      "touch_version": "5.8.0.9",
      "version": "5.0.2.0",
      "legacy_versions": [
        "4.0.1.5",
        "5.0.0.1",
        "5.0.0.7",
        "5.0.0.8",
        "5.0.1.0"
      ],
      "key": "pyramid",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p21 ; "
    },
    {
      "name": "Huawei Ascend 2 (M865)",
      "init": "init.qcom.rc",
      "version": "4.0.1.5",
      "legacy_versions": [

      ],
      "inits": [
        "init.qcom.rc",
        "init.huawei.rc"
      ],
      "key": "ascend2"
    },
    {
      "name": "Micromax A70",
      "init": "init.qcom.rc",
      "version": "4.0.1.5",
      "legacy_versions": [

      ],
      "key": "a70"
    },
    {
      "name": "Samsung Galaxy Gio",
      "init": "init.galaxygio.rc",
      "readonly_recovery": true,
      "version": "4.0.1.5",
      "legacy_versions": [

      ],
      "key": "galaxygio"
    },
    {
      "name": "Samsung Indulge 910",
      "init": "init.smdkc110.rc",
      "readonly_recovery": true,
      "version": "4.0.1.5",
      "legacy_versions": [

      ],
      "key": "indulge910"
    },
    {
      "name": "Samsung Indulge 915",
      "init": "init.smdkc110.rc",
      "readonly_recovery": true,
      "version": "4.0.1.5",
      "legacy_versions": [

      ],
      "key": "indulge915"
    },
    {
      "name": "LGE Optimus Black",
      "init": "/bootimages/ON_480x800_08fps_0000.rle",
      "lunch": "cm_p970-userdebug",
      "touch_version": "6.0.1.4",
      "version": "6.0.1.4",
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
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p4 ; "
    },
    {
      "name": "HTC EVO 3D (GSM)",
      "init": "init.shooteru.rc",
      "lunch": "full_shooteru-eng",
      "touch_version": "5.8.0.2",
      "version": "5.0.2.0",
      "legacy_versions": [
        "5.0.1.6",
        "5.0.1.7",
        "5.0.1.8",
        "5.0.1.9"
      ],
      "key": "shooteru",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p21 ; "
    },
    {
      "name": "Motorola Droid 2 Global",
      "init": "init.mapphone_cdma.rc",
      "readonly_recovery": true,
      "lunch": "cyanogen_droid2we-eng",
      "reboot_recovery": "rm /cache/recovery/command ; echo 1 > /data/.recovery_mode ; sync ; reboot ;",
      "version": "5.0.2.3",
      "legacy_versions": [

      ],
      "key": "droid2we",
      "flash_recovery": "dd if=%s of=/preinstall/recovery/recovery.zip ; "
    },
    {
      "name": "Motorola Droid Bionic",
      "init": "init.mapphone_cdma.rc",
      "readonly_recovery": true,
      "lunch": "generic_targa-eng",
      "reboot_recovery": "rm /cache/recovery/command ; echo 1 > /data/.recovery_mode ; sync ; reboot ;",
      "version": "5.0.2.5",
      "legacy_versions": [
        "5.0.2.3",
        "5.0.2.4"
      ],
      "key": "targa",
      "flash_recovery": "dd if=%s of=/preinstall/recovery/recovery.zip ; "
    },
    {
      "name": "Motorola Droid X2",
      "init": "init.mapphone_cdma.rc",
      "readonly_recovery": true,
      "lunch": "generic_daytona-eng",
      "reboot_recovery": "rm /cache/recovery/command ; echo 1 > /data/.recovery_mode ; sync ; reboot ;",
      "version": "5.0.2.5",
      "legacy_versions": [
        "5.0.2.3",
        "5.0.2.4"
      ],
      "key": "daytona",
      "flash_recovery": "dd if=%s of=/preinstall/recovery/recovery.zip ; "
    },
    {
      "name": "Motorola Droid 3",
      "init": "init.mapphone_cdma.rc",
      "readonly_recovery": true,
      "lunch": "full_solana-eng",
      "reboot_recovery": "rm /cache/recovery/command ; echo 1 > /data/.recovery_mode ; sync ; reboot ;",
      "version": "5.0.2.6",
      "legacy_versions": [
        "5.0.2.5"
      ],
      "key": "solana",
      "flash_recovery": "dd if=%s of=/preinstall/recovery/recovery.zip ; "
    },
    {
      "name": "Motorola Backflip",
      "init": "init.motus.rc",
      "lunch": "cyanogen_motus-eng",
      "version": "5.0.2.6",
      "legacy_versions": [

      ],
      "key": "motus"
    },
    {
      "name": "Samsung Galaxy Mini",
      "init": "init.gt-s5570.rc",
      "readonly_recovery": true,
      "lunch": "tass-eng",
      "version": "5.0.2.6",
      "legacy_versions": [

      ],
      "key": "tass"
    },
    {
      "name": "Huawei U8800",
      "init": "init.u8800.rc",
      "lunch": "huawei_u8800-eng",
      "version": "5.0.2.6",
      "legacy_versions": [

      ],
      "key": "u8800",
      "flash_recovery": "mount -o remount,rw -t vfat /dev/block/mmcblk0p1 /cust_backup ; cat %s > /cust_backup/image/recovery.img ;"
    },
    {
      "name": "Samsung Galaxy S2 (AT&T)",
      "init": "init.smdkc210.rc",
      "readonly_recovery": true,
      "lunch": "cyanogen_galaxys2att-eng",
      "touch_version": "5.8.1.5",
      "version": "5.0.2.6",
      "legacy_versions": [

      ],
      "inits": [
        "init.smdkc210.rc",
        "init.smdk4210.rc"
      ],
      "key": "galaxys2att"
    },
    {
      "name": "Samsung T-Mobile Galaxy S2",
      "init": "init.target.rc",
      "owners": {
        "jmprblckwing182@gmail.com": true
      },
      "lunch": "cm_hercules-userdebug",
      "touch_version": "6.0.1.9",
      "version": "6.0.2.3",
      "legacy_versions": [
        "5.0.2.6",
        "5.0.2.7",
        "6.0.1.4",
        "6.0.1.5",
        "6.0.1.9"
      ],
      "key": "hercules",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p22 bs=4096 ; "
    },
    {
      "name": "Samsung Epic 4G Touch",
      "init": "init.smdkc210.rc",
      "readonly_recovery": true,
      "lunch": "full_epic4gtouch-eng",
      "touch_version": "5.8.1.5",
      "version": "5.0.2.7",
      "legacy_versions": [
        "5.0.2.6",
        "5.0.2.7"
      ],
      "key": "epic4gtouch"
    },
    {
      "name": "HTC Amaze",
      "init": "init.ruby.rc",
      "lunch": "full_ruby-eng",
      "version": "5.0.2.6",
      "legacy_versions": [

      ],
      "key": "ruby",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p23 bs=4096 ; "
    },
    {
      "name": "Samsung Galaxy 5",
      "init": "init.gt-i5500.rc",
      "readonly_recovery": true,
      "lunch": "samsung_galaxy5-eng",
      "version": "5.0.2.8",
      "legacy_versions": [
        "5.0.2.8"
      ],
      "key": "galaxy5"
    },
    {
      "name": "ZTE Racer",
      "init": "init.mooncake.rc",
      "lunch": "generic_mooncake-eng",
      "version": "5.0.2.7",
      "legacy_versions": [

      ],
      "key": "mooncake"
    },
    {
      "name": "Samsung Galaxy Tab (VZW)",
      "init": "init.smdkc110.rc",
      "readonly_recovery": true,
      "lunch": "full_vzwtab-eng",
      "version": "5.0.2.7",
      "legacy_versions": [
        "5.0.2.7",
        "5.0.2.7",
        "5.0.2.7"
      ],
      "key": "vzwtab"
    },
    {
      "name": "HTC MyTouch 4G Slide",
      "init": "init.doubleshot.rc",
      "lunch": "full_doubleshot-eng",
      "version": "5.0.2.7",
      "legacy_versions": [
        "5.0.2.7",
        "5.0.2.7"
      ],
      "key": "doubleshot",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p21 bs=4096 ; "
    },
    {
      "name": "Google Galaxy Nexus (GSM)",
      "init": "init.tuna.rc",
      "lunch": "cm_maguro-userdebug",
      "touch_version": "6.0.2.3",
      "version": "6.0.2.3",
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
      "flash_recovery": "dd if=%s of=/dev/block/platform/omap/omap_hsmmc.0/by-name/recovery bs=4096 ;"
    },
    {
      "name": "Google Galaxy Nexus (Verizon)",
      "init": "init.tuna.rc",
      "lunch": "cm_toro-userdebug",
      "touch_version": "6.0.2.3",
      "version": "6.0.2.3",
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
      "flash_recovery": "dd if=%s of=/dev/block/platform/omap/omap_hsmmc.0/by-name/recovery bs=4096 ;"
    },
    {
      "name": "LGE Optimus C LW690",
      "init": "init.thunderc.rc",
      "lunch": "full_lg690-eng",
      "version": "5.0.2.7",
      "legacy_versions": [

      ],
      "key": "lg690"
    },
    {
      "name": "LGE Optimus Pro",
      "init": "init.muscat.rc",
      "lunch": "c660-eng",
      "version": "5.0.2.7",
      "legacy_versions": [

      ],
      "key": "c660"
    },
    {
      "name": "LGE Optimus Hub",
      "init": "init.univa.rc",
      "lunch": "e510-eng",
      "version": "5.0.2.7",
      "legacy_versions": [

      ],
      "key": "e510"
    },
    {
      "name": "Samsung Epic4G (MTD)",
      "init": "init.victory.rc",
      "lunch": "cyanogen_epicmtd-eng",
      "reboot_recovery": "/system/xbin/busybox devmem 0x57fff800 32 0x5EC0B007; sync ; reboot ;",
      "officially_supported": false,
      "touch_version": "5.8.1.5",
      "version": "5.0.2.7",
      "legacy_versions": [

      ],
      "key": "epicmtd"
    },
    {
      "name": "HTC Holiday",
      "init": "init.holiday.rc",
      "lunch": "full_holiday-eng",
      "version": "5.0.2.7",
      "legacy_versions": [
        "5.0.2.7",
        "5.0.2.7",
        "5.0.2.7"
      ],
      "key": "holiday",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p23 bs=4096 ; "
    },
    {
      "name": "LGE Optimus SOL / TMo LGE myTouch",
      "lunch": "e730-eng",
      "version": "5.0.2.7",
      "legacy_versions": [

      ],
      "inits": [
        "init.victor.rc",
        "init.e739.rc"
      ],
      "key": "e730",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p17 bs=4096 ;"
    },
    {
      "name": "HTC Wildfire S",
      "init": "init.marvel.rc",
      "lunch": "generic_marvel-eng",
      "version": "5.0.2.8",
      "legacy_versions": [
        "5.0.2.7"
      ],
      "key": "marvel"
    },
    {
      "name": "Motorola Photon 4G",
      "init": "init.mapphone_umts.rc",
      "lunch": "full_sunfire-eng",
      "version": "5.0.2.8",
      "legacy_versions": [
        "5.0.2.7"
      ],
      "inits": [
        "init.mapphone_umts.rc",
        "init.mapphone_cdma.rc"
      ],
      "key": "sunfire",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p10 bs=4096 ;"
    },
    {
      "name": "Huawei U8160",
      "init": "init.u8160.rc",
      "lunch": "huawei_u8160-eng",
      "version": "5.0.2.8",
      "legacy_versions": [
        "5.0.2.8"
      ],
      "inits": [
        "init.huawei.rc",
        "init.u8160.rc"
      ],
      "key": "u8160"
    },
    {
      "name": "HTC Rezound",
      "init": "init.vigor.rc",
      "lunch": "cm_vigor-userdebug",
      "touch_version": "6.0.2.3",
      "version": "6.0.2.3",
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
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p23 bs=4096 ;"
    },
    {
      "name": "HTC EVO View 4G",
      "init": "init.expresskt.rc",
      "lunch": "full_express-userdebug",
      "version": "5.8.1.5",
      "legacy_versions": [

      ],
      "key": "express",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p21 bs=4096 ;"
    },
    {
      "name": "Asus Transformer Prime",
      "init": "init.cardhu.rc",
      "lunch": "cm_tf201-userdebug",
      "touch_version": "5.8.3.4",
      "version": "5.8.3.4",
      "legacy_versions": [
        "5.5.0.4",
        "5.8.2.0"
      ],
      "key": "tf201",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p4 ;"
    },
    {
      "name": "Motorola Droid 4",
      "init": "init.mapphone_cdma.rc",
      "reboot_recovery": "rm /cache/recovery/command ; echo 1 > /data/.recovery_mode ; sync ; reboot ;",
      "officially_supported": false,
      "version": "5.0.2.0",
      "legacy_versions": [

      ],
      "key": "maserati"
    },
    {
      "name": "Motorola RAZR",
      "init": "init.mapphone_cdma.rc",
      "reboot_recovery": "rm /cache/recovery/command ; echo 1 > /data/.recovery_mode ; sync ; reboot ;",
      "officially_supported": false,
      "version": "5.0.2.0",
      "legacy_versions": [

      ],
      "key": "spyder"
    },
    {
      "name": "HTC Wildfire S CDMA",
      "init": "init.marvelc.rc",
      "lunch": "full_marvelc-eng",
      "version": "5.0.2.8",
      "legacy_versions": [

      ],
      "key": "marvelc"
    },
    {
      "name": "Asus Transformer",
      "init": "init.ventana.rc",
      "lunch": "cm_tf101-userdebug",
      "touch_version": "5.8.3.4",
      "version": "6.0.1.3",
      "legacy_versions": [
        "5.5.0.4",
        "5.8.1.9",
        "5.8.2.0",
        "5.8.2.1",
        "5.8.3.4"
      ],
      "key": "tf101",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p4 ;"
    },
    {
      "name": "LGE Nitro HD / LGE P930 (AT&T)",
      "init": "bootimages/boot_logo_00000.rle",
      "lunch": "cm_p930-userdebug",
      "touch_version": "6.0.1.5",
      "version": "6.0.1.5",
      "legacy_versions": [
        "5.8.2.0",
        "6.0.1.4"
      ],
      "key": "p930",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p13 ;"
    },
    {
      "name": "Samsung Galaxy S2 (SGH-I777)",
      "init": "init.smdkc210.rc",
      "readonly_recovery": true,
      "lunch": "cm_i777-userdebug",
      "touch_version": "6.0.1.0",
      "version": "6.0.1.0",
      "legacy_versions": [
        "5.8.1.8"
      ],
      "inits": [
        "init.smdkc210.rc",
        "init.smdk4210.rc"
      ],
      "key": "i777"
    },
    {
      "name": "HTC Pico",
      "init": "init.pico.rc",
      "lunch": "full_pico-eng",
      "version": "5.0.2.8",
      "legacy_versions": [

      ],
      "key": "pico"
    },
    {
      "name": "HTC One X (GSM)",
      "init": "ueventd.endeavoru.rc",
      "lunch": "cm_endeavoru-userdebug",
      "touch_version": "5.8.4.0",
      "version": "5.8.4.0",
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
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p5 bs=4096 ;"
    },
    {
      "name": "HTC One S",
      "init": "init.ville.rc",
      "lunch": "cm_ville-userdebug",
      "touch_version": "5.8.3.1",
      "version": "5.8.3.1",
      "legacy_versions": [
        "5.5.0.4",
        "5.8.2.1",
        "5.8.2.2",
        "5.8.2.3"
      ],
      "key": "ville",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p22 bs=4096 ;"
    },
    {
      "name": "Samsung Galaxy Tab (MTD and GSM)",
      "init": "init.p1.rc",
      "reboot_recovery": "echo 1 > /cache/.startrecovery ; sync ; reboot ;",
      "officially_supported": false,
      "version": "5.8.2.1",
      "legacy_versions": [

      ],
      "key": "p1"
    },
    {
      "name": "Samsung Galaxy Tab (MTD and CDMA)",
      "init": "init.p1c.rc",
      "reboot_recovery": "echo 1 > /cache/.startrecovery ; sync ; reboot ;",
      "officially_supported": false,
      "version": "5.8.2.1",
      "legacy_versions": [

      ],
      "key": "p1c"
    },
    {
      "name": "Google Galaxy Nexus (Sprint)",
      "init": "init.tuna.rc",
      "lunch": "cm_toroplus-userdebug",
      "touch_version": "6.0.2.3",
      "version": "6.0.2.3",
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
      "flash_recovery": "dd if=%s of=/dev/block/platform/omap/omap_hsmmc.0/by-name/recovery bs=4096 ;"
    },
    {
      "name": "Samsung Galaxy Tab 10.1",
      "init": "ueventd.p3.rc",
      "lunch": "cm_p4wifi-userdebug",
      "touch_version": "5.8.3.1",
      "version": "5.8.3.1",
      "legacy_versions": [
        "4.0.0.4"
      ],
      "key": "p4wifi",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p2 ; "
    },
    {
      "name": "Motorola XOOM (Wi-Fi only)",
      "init": "init.wingray.rc",
      "lunch": "cm_wingray-userdebug",
      "touch_version": "5.8.3.1",
      "version": "5.8.3.1",
      "legacy_versions": [

      ],
      "key": "wingray",
      "flash_recovery": "dd if=%s of=/dev/block/platform/sdhci-tegra.3/by-name/recovery ; "
    },
    {
      "name": "LGE Marquee",
      "init": "init.omap.post_boot.sh",
      "lunch": "full_marquee-eng",
      "version": "5.0.2.8",
      "legacy_versions": [

      ],
      "key": "marquee",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p4 bs=4096 ; "
    },
    {
      "name": "LGE Ignite",
      "init": "init.omap.post_boot.sh",
      "lunch": "full_ignite-eng",
      "version": "5.0.2.8",
      "legacy_versions": [

      ],
      "key": "ignite",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p4 bs=4096 ; "
    },
    {
      "name": "LGE Connect 4G MS840",
      "init": "init.target.rc",
      "lunch": "full_ms840-userdebug",
      "touch_version": "5.8.3.1",
      "version": "5.8.3.1",
      "legacy_versions": [

      ],
      "key": "ms840",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p13 bs=4096 ; "
    },
    {
      "name": "LGE Lucid VS840",
      "init": "init.target.rc",
      "lunch": "full_vs840-userdebug",
      "touch_version": "5.8.3.1",
      "version": "5.8.3.1",
      "legacy_versions": [

      ],
      "key": "vs840",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p13 bs=4096 ; "
    },
    {
      "name": "HTC EVO LTE",
      "init": "init.jewel.rc",
      "lunch": "cm_jewel-userdebug",
      "touch_version": "5.8.3.5",
      "version": "5.8.3.5",
      "legacy_versions": [
        "5.8.3.4",
        "5.8.3.4"
      ],
      "key": "jewel",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p22 bs=4096 ; "
    },
    {
      "name": "Samsung Galaxy S3 (GT-I9300)",
      "init": "ueventd.smdk4x12.rc",
      "lunch": "cm_i9300-userdebug",
      "touch_version": "6.0.1.9",
      "version": "6.0.1.2",
      "legacy_versions": [
        "5.8.4.0",
        "5.8.4.1",
        "5.8.4.2",
        "5.8.4.3",
        "5.8.4.4",
        "5.8.4.5",
        "6.0.0.7",
        "6.0.0.8",
        "6.0.1.0"
      ],
      "key": "i9300",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p6 bs=4096 ; "
    },
    {
      "name": "Samsung Skyrocket",
      "init": "init.qcom.usb.rc",
      "lunch": "cm_skyrocket-userdebug",
      "touch_version": "6.0.1.4",
      "version": "6.0.1.4",
      "legacy_versions": [
        "5.8.4.3",
        "6.0.1.0"
      ],
      "key": "skyrocket",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p22 bs=4096 ; "
    },
    {
      "name": "Samsung Galaxy Note (AT&T)",
      "init": "init.qcom.usb.rc",
      "lunch": "cm_quincyatt-userdebug",
      "touch_version": "5.8.4.3",
      "version": "5.8.4.8",
      "legacy_versions": [
        "5.8.4.3"
      ],
      "key": "quincyatt",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p22 bs=4096 ; "
    },
    {
      "name": "LGE Optimus L3",
      "init": "init.e0.rc",
      "lunch": "cm_e400-userdebug",
      "version": "5.8.4.5",
      "legacy_versions": [

      ],
      "key": "e400",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p17 bs=4096 ; "
    },
    {
      "name": "HTC One V",
      "init": "init.primou.rc",
      "readonly_recovery": true,
      "lunch": "cm_primou-userdebug",
      "version": "5.8.4.5",
      "legacy_versions": [

      ],
      "key": "primou"
    },
    {
      "name": "Samsung Galaxy S3 (AT&T)",
      "init": "init.d2att.rc",
      "lunch": "cm_d2att-userdebug",
      "touch_version": "6.0.2.3",
      "version": "6.0.2.3",
      "legacy_versions": [
        "5.8.4.5",
        "5.8.4.6",
        "5.8.4.7",
        "6.0.1.1",
        "6.0.1.2"
      ],
      "key": "d2att",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p18 bs=4096 ; "
    },
    {
      "name": "Samsung Galaxy S3 (T-Mobile)",
      "init": "init.d2tmo.rc",
      "lunch": "cm_d2tmo-userdebug",
      "touch_version": "6.0.2.3",
      "version": "6.0.2.3",
      "legacy_versions": [
        "5.8.4.5",
        "5.8.4.6",
        "5.8.4.7",
        "6.0.1.2"
      ],
      "key": "d2tmo",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p18 bs=4096 ; "
    },
    {
      "name": "Samsung Galaxy S3 (Sprint)",
      "init": "init.d2spr.rc",
      "lunch": "cm_d2spr-userdebug",
      "touch_version": "6.0.2.3",
      "version": "6.0.2.3",
      "legacy_versions": [
        "5.8.4.5",
        "5.8.4.6",
        "5.8.4.7",
        "5.8.4.9",
        "6.0.1.2"
      ],
      "key": "d2spr",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p18 bs=4096 ; "
    },
    {
      "name": "Samsung Galaxy S3 (Verizon)",
      "init": "init.d2vzw.rc",
      "lunch": "cm_d2vzw-userdebug",
      "touch_version": "6.0.2.3",
      "version": "6.0.2.3",
      "legacy_versions": [
        "5.8.4.6",
        "5.8.4.7",
        "5.8.4.8",
        "5.8.4.9",
        "6.0.1.2"
      ],
      "key": "d2vzw",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p18 bs=4096 ; "
    },
    {
      "name": "HTC One V (CDMA)",
      "init": "init.primoc.rc",
      "readonly_recovery": true,
      "lunch": "full_primoc-userdebug",
      "touch_version": "5.8.4.7",
      "version": "5.8.4.7",
      "legacy_versions": [
        "5.8.4.6",
        "5.8.4.7"
      ],
      "key": "primoc"
    },
    {
      "name": "Google Nexus 7",
      "init": "init.grouper.rc",
      "lunch": "cm_grouper-userdebug",
      "touch_version": "6.0.2.3",
      "version": "6.0.2.3",
      "legacy_versions": [
        "6.0.0.6",
        "6.0.1.0",
        "6.0.1.9"
      ],
      "key": "grouper",
      "flash_recovery": "dd if=%s of=/dev/block/platform/sdhci-tegra.3/by-name/SOS bs=4096 ; "
    },
    {
      "name": "LGE Optimus LTE (SKT)",
      "init": "init.su640.rc",
      "lunch": "cm_su640-userdebug",
      "touch_version": "6.0.1.0",
      "version": "6.0.1.0",
      "legacy_versions": [

      ],
      "key": "su640",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p13 bs=4096 ; "
    },
    {
      "name": "Samsung Galaxy S2 (GT-I9100G)",
      "init": "init.t1.rc",
      "lunch": "cm_i9100g-userdebug",
      "officially_supported": false,
      "version": "6.0.1.0",
      "legacy_versions": [

      ],
      "key": "i9100g"
    },
    {
      "name": "Samsung Galaxy Tab 2 (GT-P3100)",
      "init": "init.espresso.rc",
      "lunch": "cm_p3100-userdebug",
      "touch_version": "6.0.2.3",
      "version": "6.0.2.3",
      "legacy_versions": [
        "6.0.1.1"
      ],
      "key": "p3100",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p6 bs=4096 ; "
    },
    {
      "name": "Samsung Galaxy Tab 2 (GT-P3110)",
      "init": "init.espresso.rc",
      "lunch": "cm_p3110-userdebug",
      "touch_version": "6.0.2.3",
      "version": "6.0.2.3",
      "legacy_versions": [
        "6.0.1.1"
      ],
      "key": "p3110",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p6 bs=4096 ; "
    },
    {
      "name": "Samsung Galaxy Tab 2 (GT-P3113)",
      "init": "init.espresso.rc",
      "lunch": "cm_p3113-userdebug",
      "touch_version": "6.0.2.3",
      "version": "6.0.2.3",
      "legacy_versions": [
        "6.0.1.1"
      ],
      "key": "p3113",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p6 bs=4096 ; "
    },
    {
      "name": "Samsung Galaxy Tab 2 (GT-P5100)",
      "init": "init.espresso10.rc",
      "lunch": "cm_p5100-userdebug",
      "touch_version": "6.0.2.3",
      "version": "6.0.2.3",
      "legacy_versions": [
        "6.0.1.1"
      ],
      "key": "p5100",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p6 bs=4096 ; "
    },
    {
      "name": "Samsung Galaxy Tab 2 (GT-P5110)",
      "init": "init.espresso10.rc",
      "lunch": "cm_p5110-userdebug",
      "touch_version": "6.0.2.3",
      "version": "6.0.2.3",
      "legacy_versions": [
        "6.0.1.1"
      ],
      "key": "p5110",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p6 bs=4096 ; "
    },
    {
      "name": "Samsung Galaxy Tab 2 (GT-P5113)",
      "init": "init.espresso10.rc",
      "lunch": "cm_p5113-userdebug",
      "touch_version": "6.0.2.3",
      "version": "6.0.2.3",
      "legacy_versions": [
        "6.0.1.1"
      ],
      "key": "p5113",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p6 bs=4096 ; "
    },
    {
      "name": "LGE Spectrum 4G",
      "init": "init.target.rc",
      "lunch": "cm_vs920-userdebug",
      "touch_version": "6.0.1.1",
      "version": "6.0.1.1",
      "legacy_versions": [

      ],
      "inits": [
        "init.target.rc",
        "init.iproj.rc",
        "init.i_vzw.rc",
        "init.iprj.rc"
      ],
      "key": "vs920",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p13 bs=4096 ; "
    },
    {
      "name": "Score & Score M",
      "init": "init.zte.rc",
      "lunch": "cm_x500-userdebug",
      "touch_version": "6.0.1.1",
      "version": "6.0.1.1",
      "legacy_versions": [

      ],
      "key": "x500"
    },
    {
      "name": "LGE Revolution 4G",
      "init": "init.qcom.rc",
      "lunch": "cm_vs910-userdebug",
      "touch_version": "6.0.1.1",
      "version": "6.0.1.1",
      "legacy_versions": [

      ],
      "inits": [
        "init.qcom.rc",
        "init.bryce.rc"
      ],
      "key": "vs910",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p14 bs=4096 ; "
    },
    {
      "name": "LGE Esteeem 4G",
      "init": "init.qcom.rc",
      "lunch": "cm_ms910-userdebug",
      "touch_version": "6.0.1.1",
      "version": "6.0.1.1",
      "legacy_versions": [
        "5.0.2.8"
      ],
      "inits": [
        "init.qcom.rc",
        "init.bryce.rc"
      ],
      "key": "ms910",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p14 bs=4096 ; "
    },
    {
      "name": "LGE Optimus M+",
      "init": "init.qcom.rc",
      "lunch": "cm_ms695-userdebug",
      "touch_version": "6.0.1.1",
      "version": "6.0.1.1",
      "legacy_versions": [
        "6.0.1.0"
      ],
      "inits": [
        "init.qcom.rc",
        "init.m3.rc"
      ],
      "key": "ms695",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p17 bs=4096 ; "
    },
    {
      "name": "Samsung Galaxy Tab (MTD and GSM - L)",
      "init": "init.p1.rc",
      "reboot_recovery": "echo 1 > /cache/.startrecovery ; sync ; reboot ;",
      "officially_supported": false,
      "version": "5.8.2.1",
      "legacy_versions": [

      ],
      "key": "p1l"
    },
    {
      "name": "Samsung Galaxy Tab (MTD and GSM - N)",
      "init": "init.p1.rc",
      "reboot_recovery": "echo 1 > /cache/.startrecovery ; sync ; reboot ;",
      "officially_supported": false,
      "version": "5.8.2.1",
      "legacy_versions": [

      ],
      "key": "p1n"
    },
    {
      "name": "Samsung Galaxy S3 (US Cellular)",
      "init": "init.d2usc.rc",
      "lunch": "cm_d2usc-userdebug",
      "touch_version": "6.0.1.4",
      "version": "6.0.1.2",
      "legacy_versions": [

      ],
      "key": "d2usc",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p18 bs=4096 ; "
    },
    {
      "name": "Motorola Photon Q",
      "init": "init.mmi.usb.rc",
      "lunch": "cm_asanti-userdebug",
      "version": "6.0.1.3",
      "legacy_versions": [

      ],
      "inits": [
        "init.asanti.rc",
        "init.sprint.rc"
      ],
      "key": "asanti",
      "flash_recovery": "dd if=%s of=/dev/block/platform/msm_sdcc.1/by-name/recovery bs=4096 ; "
    },
    {
      "name": "LGE P350",
      "init": "init.pecan.rc",
      "lunch": "cm_p350-userdebug",
      "version": "6.0.1.5",
      "legacy_versions": [
        "6.0.1.3",
        "6.0.1.4"
      ],
      "key": "p350"
    },
    {
      "name": "Samsung Galaxy Tab 8.9 (AT&T)",
      "init": "fstab.qcom",
      "lunch": "cm_p5att-userdebug",
      "version": "6.0.1.4",
      "legacy_versions": [

      ],
      "key": "p5att",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p22 bs=4096 ; "
    },
    {
      "name": "Samsung Galaxy S Blaze 4G",
      "init": "init.target.rc",
      "lunch": "cm_t769-userdebug",
      "touch_version": "6.0.1.4",
      "version": "6.0.1.4",
      "legacy_versions": [

      ],
      "key": "t769",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p22 bs=4096 ; "
    },
    {
      "name": "Samsung Galaxy S3 (MetroPCS)",
      "init": "init.carrier.rc",
      "lunch": "cm_d2mtr-userdebug",
      "touch_version": "6.0.2.3",
      "version": "6.0.2.3",
      "legacy_versions": [
        "6.0.1.5"
      ],
      "inits": [
        "init.carrier.rc",
        "init.d2mtr.rc"
      ],
      "key": "d2mtr",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p18 bs=4096 ; "
    },
    {
      "name": "Asus Transformer Pad Infinity",
      "init": "init.tf700t.rc",
      "lunch": "cm_tf700t-userdebug",
      "reboot_recovery": "echo 'boot-recovery' | dd of=/dev/block/mmcblk0p3 seek=6144 bs=1 ; reboot ; ",
      "touch_version": "6.0.2.3",
      "version": "6.0.2.3",
      "legacy_versions": [
        "6.0.1.8"
      ],
      "key": "tf700t",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p4 bs=4096 ; "
    },
    {
      "name": "Google Nexus 10",
      "init": "init.manta.rc",
      "lunch": "cm_manta-userdebug",
      "touch_version": "6.0.2.3",
      "version": "6.0.2.3",
      "legacy_versions": [
        "6.0.1.5",
        "6.0.1.5",
        "6.0.1.6",
        "6.0.1.7",
        "6.0.1.8",
        "6.0.1.9"
      ],
      "key": "manta",
      "flash_recovery": "dd if=%s of=/dev/block/platform/dw_mmc.0/by-name/recovery bs=4096 ; "
    },
    {
      "name": "Google Nexus 4",
      "init": "init.mako.rc",
      "lunch": "cm_mako-userdebug",
      "touch_version": "6.0.2.3",
      "version": "6.0.2.3",
      "legacy_versions": [
        "6.0.1.5",
        "6.0.1.6",
        "6.0.1.8",
        "6.0.1.9",
        "6.0.2.0"
      ],
      "key": "mako",
      "flash_recovery": "dd if=%s of=/dev/block/platform/msm_sdcc.1/by-name/recovery bs=4096 ; "
    },
    {
      "name": "HTC Droid DNA",
      "init": "init.debug_mfgkernel.rc",
      "lunch": "cm_dlx-userdebug",
      "touch_version": "6.0.2.3",
      "version": "6.0.2.3",
      "legacy_versions": [
        "6.0.1.5",
        "6.0.1.9"
      ],
      "key": "dlx",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p20 bs=4096 ; "
    },
    {
      "name": "Samsung Galaxy Note 2 (HSPA+)",
      "init": "init.smdk4x12.rc",
      "lunch": "cm_n7100-userdebug",
      "touch_version": "6.0.1.9",
      "version": "6.0.1.9",
      "legacy_versions": [

      ],
      "key": "n7100",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p6 bs=4096 ; "
    },
    {
      "name": "Acer A700",
      "init": "init.a700.rc",
      "lunch": "cm_a700-userdebug",
      "touch_version": "6.0.2.3",
      "version": "6.0.2.3",
      "legacy_versions": [

      ],
      "key": "a700",
      "flash_recovery": "dd if=%s of=/dev/block/platform/sdhci-tegra.3/by-name/SOS bs=4096 ; "
    },
    {
      "name": "Google Nexus 7 (GSM)",
      "init": "init.tilapia.rc",
      "lunch": "cm_tilapia-userdebug",
      "touch_version": "6.0.2.3",
      "version": "6.0.2.3",
      "legacy_versions": [

      ],
      "key": "tilapia",
      "flash_recovery": "dd if=%s of=/dev/block/platform/sdhci-tegra.3/by-name/SOS bs=4096 ; "
    },
    {
      "name": "Samsung Galaxy Note 2 (Sprint)",
      "init": "init.t0ltespr.rc",
      "lunch": "cm_t0ltespr-userdebug",
      "touch_version": "6.0.2.5",
      "version": "6.0.2.4",
      "legacy_versions": [
        "6.0.2.3"
      ],
      "key": "t0ltespr",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p9 bs=4096 ; "
    },
    {
      "name": "Samsung Galaxy Note 2 (T-Mobile)",
      "init": "init.t0ltetmo.rc",
      "lunch": "cm_t0ltetmo-userdebug",
      "touch_version": "6.0.2.5",
      "version": "6.0.2.4",
      "legacy_versions": [
        "6.0.2.3"
      ],
      "key": "t0ltetmo"
    },
    {
      "name": "Samsung Galaxy Note 2 (Verizon)",
      "init": "init.t0ltevzw.rc",
      "lunch": "cm_t0ltevzw-userdebug",
      "touch_version": "6.0.2.5",
      "version": "6.0.2.4",
      "legacy_versions": [
        "6.0.2.3"
      ],
      "key": "t0ltevzw",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p9 bs=4096 ; "
    },
    {
      "name": "Samsung Galaxy Note 2 (AT&T)",
      "init": "init.t0lteatt.rc",
      "lunch": "cm_t0lteatt-userdebug",
      "touch_version": "6.0.2.5",
      "version": "6.0.2.4",
      "legacy_versions": [
        "6.0.2.3"
      ],
      "key": "t0lteatt",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p9 bs=4096 ; "
    },
    {
      "name": "Samsung Galaxy Note 2 (LTE)",
      "init": "init.t0lte.rc",
      "lunch": "cm_t0lte-userdebug",
      "touch_version": "6.0.2.5",
      "version": "6.0.2.4",
      "legacy_versions": [
        "6.0.2.3"
      ],
      "key": "t0lte",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p9 bs=4096 ; "
    }
  ],
  "manifest_signature": "O8+Kc2mdQz0e/AjCQn6Rw6fK5Kr5LZItJ474Ua3gF2o4IgdCQZXIbwCHIo6xeqY3pVEGtjYmmyO1PkRYcGqq2rB2wQM8SoKFl/70vG0ihEZ5TDeruKUgxVVSNM3e09kBvCxYK89GWqVWkNHtvTu1T1F9w6FilzCsNFSAXHD0Bos=",
  "pontiflex_downloading": 100
}