{
  "ad_network": "admob",
  "manifest": "http://developer.clockworkmod.com/merge",
  "manifest_signature": "O8+Kc2mdQz0e/AjCQn6Rw6fK5Kr5LZItJ474Ua3gF2o4IgdCQZXIbwCHIo6xeqY3pVEGtjYmmyO1PkRYcGqq2rB2wQM8SoKFl/70vG0ihEZ5TDeruKUgxVVSNM3e09kBvCxYK89GWqVWkNHtvTu1T1F9w6FilzCsNFSAXHD0Bos=",
  "keywords": "phone accessories,droid,gadgets,bluetooth headset,car charger,sd card",
  "owners": {
    "utkanos@gmail.com": true,
    "njgreb@gmail.com": true,
    "keaneyw@gmail.com": true,
    "layhertony@gmail.com": true,
    "playfulgod@gmail.com": true,
    "cvpcsm@gmail.com": true,
    "ferguson.david@gmail.com": true,
    "daniel.hillenbrand@codeworkx.de": true,
    "attn1.repo@gmail.com": true,
    "bigbeeshane@gmail.com": true,
    "koush@clockworkmod.com": true,
    "arcee@cyanogenmod.com": true
  },
  "recovery_zip_url": "http://download2.clockworkmod.com/recoveries/recovery-clockwork-%s-%s.zip",
  "version": "2.5.0.1",
  "recovery_url": "http://download2.clockworkmod.com/recoveries/recovery-clockwork-%s-%s.img",
  "devices": [
    {
      "key": "sholes",
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
      "alternate_recovery": {
        "name": "SPRecovery 0.99.3b",
        "clockwork": false,
        "url": "http://koush.kanged.net/cm/recoveries/sprecovery.img"
      }
    },
    {
      "key": "sapphire",
      "name": "HTC MyTouch 3G",
      "init": "init.sapphire.rc",
      "legacy_versions": [
        "2.5.0.7",
        "2.5.1.4",
        "2.5.1.3",
        "2.5.1.1"
      ],
      "version": "2.5.0.7",
      "alternate_recovery": {
        "name": "RA Recovery v1.7.0G",
        "clockwork": false,
        "url": "http://files.androidspin.com/downloads.php?dir=amon_ra/RECOVERY/&file=recovery-RA-sapphire-v1.7.0G.img"
      }
    },
    {
      "key": "magic",
      "name": "HTC Magic",
      "init": "init.sapphire.rc",
      "legacy_versions": [
        "2.5.0.7",
        "2.5.1.4",
        "2.5.1.3",
        "2.5.1.1"
      ],
      "version": "2.5.0.7",
      "alternate_recovery": {
        "name": "RA Recovery v1.7.0H",
        "clockwork": false,
        "url": "http://files.androidspin.com/downloads.php?dir=amon_ra/RECOVERY/&file=recovery-RA-sapphire-v1.7.0H.img"
      }
    },
    {
      "key": "dream",
      "name": "HTC G1/Dream",
      "init": "init.trout.rc",
      "legacy_versions": [
        "2.5.0.7",
        "2.5.1.4",
        "2.5.1.3",
        "2.5.1.1"
      ],
      "version": "2.5.0.7",
      "alternate_recovery": {
        "name": "RA Recovery v1.7.0",
        "clockwork": false,
        "url": "http://files.androidspin.com/downloads.php?dir=amon_ra/RECOVERY/&file=recovery-RA-dream-v1.7.0.img"
      }
    },
    {
      "key": "passion",
      "name": "Google Nexus One",
      "init": "init.mahimahi.rc",
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
      "alternate_recovery": {
        "name": "RA Recovery v2.2.1",
        "clockwork": false,
        "url": "http://files.androidspin.com/downloads.php?dir=amon_ra/RECOVERY/&file=recovery-RA-passion-v2.2.1.img"
      }
    },
    {
      "key": "hero",
      "name": "HTC Hero (GSM)",
      "init": "init.hero.rc",
      "legacy_versions": [
        "2.5.0.7",
        "2.5.1.4",
        "2.5.1.3",
        "2.5.1.1"
      ],
      "version": "2.5.0.7",
      "alternate_recovery": {
        "name": "RA Recovery v1.7.0.1",
        "clockwork": false,
        "url": "http://files.androidspin.com/downloads.php?dir=amon_ra/RECOVERY/&file=recovery-RA-hero-v1.7.0.1.img"
      }
    },
    {
      "key": "heroc",
      "name": "HTC Hero (CDMA)",
      "init": "init.heroc.rc",
      "legacy_versions": [
        "2.5.0.7",
        "2.5.1.4",
        "2.5.1.3",
        "2.5.1.1"
      ],
      "version": "2.5.0.7",
      "alternate_recovery": {
        "name": "RA Recovery v1.6.2",
        "clockwork": false,
        "url": "http://www.androidspin.com/downloads.php?dir=amon_ra/RECOVERY/&file=recovery-RA-heroc-v1.6.2.img"
      }
    },
    {
      "key": "supersonic",
      "touch_version": "5.8.0.1",
      "name": "HTC Evo",
      "init": "init.supersonic.rc",
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
      "alternate_recovery": {
        "name": "RA Recovery v2.3",
        "clockwork": false,
        "url": "http://files.androidspin.com/downloads.php?dir=amon_ra/RECOVERY/&file=recovery-RA-supersonic-v2.3.img"
      }
    },
    {
      "key": "legend",
      "name": "HTC Legend",
      "init": "init.legend.rc",
      "lunch": "cyanogen_legend-eng",
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
      "readonly_recovery": true
    },
    {
      "key": "bravo",
      "touch_version": "5.8.0.2",
      "name": "HTC Desire",
      "init": "init.bravo.rc",
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
      "version": "5.0.2.0"
    },
    {
      "key": "bravoc",
      "name": "HTC Desire CDMA",
      "init": "init.bravoc.rc",
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
      "version": "5.0.2.0"
    },
    {
      "key": "pulsemini",
      "name": "Huawei Pulse Mini",
      "init": "init.qcom.rc",
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
      "name": "HTC Incredible (CDMA)",
      "init": "init.inc.rc",
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
      "alternate_recovery": {
        "name": "RA_GNM Recovery v3.02",
        "clockwork": false,
        "url": "http://dl.dropbox.com/u/12949506/RomManager/recovery-RA-inc-3.02.img"
      }
    },
    {
      "key": "liberty",
      "name": "HTC Aria",
      "init": "init.liberty.rc",
      "legacy_versions": [
        "2.5.0.7",
        "2.5.1.4",
        "2.5.1.3",
        "2.5.1.1"
      ],
      "version": "2.5.0.7",
      "readonly_recovery": true
    },
    {
      "key": "desirec",
      "name": "Motorola Droid Eris",
      "init": "init.desirec.rc",
      "legacy_versions": [
        "2.5.0.7",
        "2.5.1.4",
        "2.5.1.3",
        "2.5.1.1"
      ],
      "version": "2.5.0.7",
      "alternate_recovery": {
        "name": "RA Recovery v1.6.2",
        "clockwork": false,
        "url": "http://www.androidspin.com/downloads.php?dir=amon_ra/RECOVERY/&file=recovery-RA-eris-v1.6.2.img"
      },
      "readonly_recovery": true
    },
    {
      "key": "buzz",
      "name": "HTC Buzz (Wildfire)",
      "init": "init.buzz.rc",
      "lunch": "cyanogen_buzz-eng",
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
      "readonly_recovery": true
    },
    {
      "key": "streak",
      "name": "Dell Streak",
      "init": "init.qcom.rc",
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
      "name": "HTC MyTouch Slide",
      "init": "init.latte.rc",
      "legacy_versions": [
        "2.5.0.7",
        "2.5.1.4",
        "2.5.1.3",
        "2.5.1.1"
      ],
      "version": "2.5.0.7",
      "readonly_recovery": true
    },
    {
      "key": "galaxys",
      "name": "Samsung GalaxyS i9000",
      "init": "lpm.rc",
      "legacy_versions": [
        "2.5.1.2",
        "2.5.1.4",
        "2.5.1.3",
        "2.5.1.1"
      ],
      "version": "2.5.1.2",
      "readonly_recovery": true
    },
    {
      "key": "fascinate",
      "name": "Samsung GalaxyS Fascinate",
      "init": "init.smdkc110.rc",
      "legacy_versions": [
        "3.0.0.8",
        "2.5.1.4",
        "2.5.1.3",
        "2.5.1.1"
      ],
      "version": "3.0.0.8",
      "readonly_recovery": true
    },
    {
      "key": "vibrant",
      "name": "Samsung GalaxyS Vibrant",
      "init": "init.smdkc110.rc",
      "legacy_versions": [
        "2.5.1.2",
        "2.5.1.4",
        "2.5.1.3",
        "2.5.1.1"
      ],
      "version": "2.5.1.2",
      "readonly_recovery": true
    },
    {
      "key": "captivate",
      "name": "Samsung GalaxyS Captivate",
      "init": "init.smdkc110.rc",
      "legacy_versions": [
        "2.5.1.2",
        "2.5.1.4",
        "2.5.1.3",
        "2.5.1.1"
      ],
      "version": "2.5.1.2",
      "readonly_recovery": true
    },
    {
      "key": "pulse",
      "name": "Huawei Pulse",
      "init": "init.qcom.rc",
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
      "name": "LG Ally",
      "init": "init.aloha.rc",
      "legacy_versions": [
        "2.5.0.7",
        "2.5.1.4",
        "2.5.1.3",
        "2.5.1.1"
      ],
      "version": "2.5.0.7",
      "alternate_recovery": {
        "name": "RA_GNM Recovery v2.2.2",
        "clockwork": false,
        "url": "http://dl.dropbox.com/u/12949506/RomManager/recovery-RA-aloha-2.2.2-GNM.img"
      }
    },
    {
      "key": "milestone",
      "name": "Motorola Milestone",
      "init": "init.mapphone_cdma.rc",
      "legacy_versions": [
        "2.5.0.7",
        "2.5.1.4",
        "2.5.1.3",
        "2.5.1.1",
        "2.5.0.7"
      ],
      "version": "3.1.0.2",
      "readonly_recovery": true
    },
    {
      "key": "droidx",
      "name": "Motorola Droid X",
      "init": "init.mapphone_cdma.rc",
      "legacy_versions": [
        "2.5.0.7"
      ],
      "reboot_recovery": "rm /cache/recovery/command ; echo 1 > /data/.recovery_mode ; sync ; reboot ;",
      "version": "5.0.2.0",
      "readonly_recovery": true,
      "flash_recovery": "dd if=%s of=/preinstall/recovery/recovery.zip ; "
    },
    {
      "key": "shadow",
      "name": "Motorola Droid X (2nd-init)",
      "init": "init.mapphone_cdma.rc",
      "lunch": "cyanogen_shadow-eng",
      "legacy_versions": [
        "2.5.0.7"
      ],
      "reboot_recovery": "rm /cache/recovery/command ; echo 1 > /data/.recovery_mode ; sync ; reboot ;",
      "version": "5.0.2.0",
      "readonly_recovery": true,
      "flash_recovery": "dd if=%s of=/preinstall/recovery/recovery.zip ; "
    },
    {
      "key": "salsa",
      "name": "Acer Liquid",
      "init": "init.salsa.rc",
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
      "name": "Commtiva Z71 (Boston, Blaze, and more)",
      "init": "init.qcom.rc",
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
      "touch_version": "5.8.1.0",
      "name": "HTC G2",
      "init": "init.vision.rc",
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
      "flash_recovery": "dd if=/dev/zero of=/dev/block/mmcblk0p21 bs=4096 ; dd if=%s of=/dev/block/mmcblk0p21 bs=4096 ; "
    },
    {
      "key": "glacier",
      "touch_version": "5.8.1.0",
      "name": "HTC MyTouch 4G",
      "init": "init.glacier.rc",
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
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p21 ; "
    },
    {
      "key": "ace",
      "touch_version": "5.8.1.5",
      "name": "HTC Desire HD",
      "init": "init.spade.rc",
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
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p21 ; "
    },
    {
      "key": "morrison",
      "touch_version": "5.8.1.0",
      "name": "Motorola Cliq",
      "init": "init.morrison.rc",
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
      "version": "5.0.2.0"
    },
    {
      "key": "droid2",
      "name": "Motorola Droid 2",
      "init": "init.mapphone_cdma.rc",
      "lunch": "cyanogen_droid2-eng",
      "legacy_versions": [
        "2.5.0.8"
      ],
      "reboot_recovery": "rm /cache/recovery/command ; echo 1 > /data/.recovery_mode ; sync ; reboot ;",
      "version": "5.0.2.0",
      "readonly_recovery": true,
      "flash_recovery": "dd if=%s of=/preinstall/recovery/recovery.zip ; "
    },
    {
      "key": "one",
      "name": "Geeksphone ONE",
      "init": "init.qcom.rc",
      "legacy_versions": [
        "2.5.1.4",
        "2.5.1.3",
        "2.5.1.1",
        "2.5.1.0"
      ],
      "version": "2.5.1.3",
      "alternate_recovery": {
        "name": "ONE Recovery v1.6",
        "clockwork": false,
        "url": "http://dl.dropbox.com/u/10355648/recovery-ONE-1_6.img"
      }
    },
    {
      "key": "vega",
      "name": "Advent Vega",
      "init": "init_recovery.rc",
      "legacy_versions": [
        "2.5.1.4",
        "2.5.1.3",
        "2.5.1.1",
        "2.5.1.0",
        "2.5.1.4"
      ],
      "reboot_recovery": "echo start > /proc/ota ; ",
      "version": "3.0.2.7",
      "flash_recovery": "/data/data/com.koushikdutta.rommanager/files/tegra_flash_image recovery %s ; "
    },
    {
      "key": "att_tab",
      "name": "Samsung Galaxy Tab - ATT",
      "init": "init.smdkc110.rc",
      "legacy_versions": [
        "2.5.1.8",
        "2.5.1.4",
        "2.5.1.3",
        "2.5.1.1"
      ],
      "version": "2.5.1.8",
      "readonly_recovery": true
    },
    {
      "key": "tmobile_tab",
      "name": "Samsung Galaxy Tab (T-Mobile)",
      "init": "init.smdkc110.rc",
      "legacy_versions": [
        "2.5.1.8",
        "2.5.1.4",
        "2.5.1.3",
        "2.5.1.1"
      ],
      "version": "2.5.1.8",
      "readonly_recovery": true
    },
    {
      "key": "FM6",
      "name": "Commtiva Link N700, Spice MI700, and more",
      "init": "init.qcom.rc",
      "legacy_versions": [
        "2.5.1.4",
        "2.5.1.3",
        "2.5.1.1",
        "2.5.1.0"
      ],
      "version": "2.5.1.2",
      "alternate_recovery": {
        "name": "MI700 Recovery v1.6",
        "clockwork": false,
        "url": "http://dl.dropbox.com/u/15816725/MI700-recovery-V1_3.img"
      }
    },
    {
      "key": "crespo",
      "touch_version": "6.0.2.5",
      "name": "Google Nexus S",
      "init": "init.herring.rc",
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
        "6.0.1.0"
      ],
      "version": "6.0.2.5"
    },
    {
      "key": "droidpro",
      "name": "Motorola Droid Pro",
      "init": "init. mapphone_cdma.rc",
      "legacy_versions": [
        "2.5.0.8"
      ],
      "version": "2.5.0.8",
      "readonly_recovery": true
    },
    {
      "key": "ascend",
      "name": "Huawei Ascend",
      "init": "init.qcom.rc",
      "legacy_versions": [
        "3.0.0.5",
        "3.0.0.4"
      ],
      "version": "3.0.0.5"
    },
    {
      "key": "blade",
      "name": "ZTE Blade",
      "init": "init.blade.rc",
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
      "version": "5.0.2.0"
    },
    {
      "inits": [
        "env.txt",
        "init.encore.rc"
      ],
      "key": "encore",
      "name": "Nook Color",
      "init": "env.txt",
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
      "reboot_recovery": "dd if=/dev/zero of=/rom/bcb bs=64 count=1 ; echo 'recovery' >> /rom/bcb ; reboot ;",
      "version": "3.2.0.1",
      "flash_recovery": "busybox mount -orw,remount / ; mkdir /boot ; busybox mount /dev/block/mmcblk0p1 /boot ; busybox unzip -p %1$s ramdisk-recovery.ub > /boot/uRecRam ; busybox unzip -p %1$s kernel > /boot/uRecImg ; busybox umount /boot ; rmdir /boot; busybox mount -oro,remount / ; "
    },
    {
      "key": "click",
      "name": "HTC Click/Tattoo",
      "init": "init.bahamas.rc",
      "lunch": "cyanogen_click-eng",
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
      "name": "Elocity A7",
      "init": "init_recovery.rc",
      "legacy_versions": [
        "3.0.0.8"
      ],
      "version": "3.0.0.8",
      "readonly_recovery": true
    },
    {
      "key": "zero",
      "name": "Geeksphone Zero",
      "init": "init.zero.rc",
      "legacy_versions": [
        "3.0.1.3"
      ],
      "version": "3.0.1.3"
    },
    {
      "key": "speedy",
      "touch_version": "5.8.1.6",
      "name": "HTC Evo Shift",
      "init": "init.speedy.rc",
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
      "version": "5.0.2.0"
    },
    {
      "key": "captivatemtd",
      "name": "Samsung Captivate (MTD)",
      "init": "init.aries.rc",
      "legacy_versions": [

      ],
      "reboot_recovery": "echo 1 > /cache/.startrecovery ; sync ; reboot ;",
      "officially_supported": false
    },
    {
      "key": "showcasemtd",
      "name": "Samsung Showcase (MTD)",
      "init": "init.aries.rc",
      "legacy_versions": [

      ],
      "reboot_recovery": "echo 1 > /cache/.startrecovery ; sync ; reboot ;",
      "officially_supported": false
    },
    {
      "key": "mesmerizemtd",
      "name": "Samsung Mesmerize (MTD)",
      "init": "init.aries.rc",
      "legacy_versions": [

      ],
      "reboot_recovery": "echo 1 > /cache/.startrecovery ; sync ; reboot ;",
      "officially_supported": false
    },
    {
      "key": "fascinatemtd",
      "name": "Samsung Fascinate (MTD)",
      "init": "init.aries.rc",
      "legacy_versions": [

      ],
      "reboot_recovery": "echo 1 > /cache/.startrecovery ; sync ; reboot ;",
      "officially_supported": false
    },
    {
      "key": "vibrantmtd",
      "name": "Samsung Vibrant (MTD)",
      "init": "init.aries.rc",
      "legacy_versions": [

      ],
      "reboot_recovery": "echo 1 > /cache/.startrecovery ; sync ; reboot ;",
      "officially_supported": false
    },
    {
      "key": "galaxysbmtd",
      "name": "Samsung GalaxyS i9000B (MTD)",
      "init": "init.aries.rc",
      "legacy_versions": [

      ],
      "reboot_recovery": "echo 1 > /cache/.startrecovery ; sync ; reboot ;",
      "officially_supported": false
    },
    {
      "key": "galaxysmtd",
      "name": "Samsung GalaxyS i9000 (MTD)",
      "init": "init.aries.rc",
      "legacy_versions": [

      ],
      "reboot_recovery": "echo 1 > /cache/.startrecovery ; sync ; reboot ;",
      "officially_supported": false
    },
    {
      "key": "epic4g",
      "name": "Samsung Epic4G",
      "init": "lpm.rc",
      "lunch": "full_epic4g-eng",
      "legacy_versions": [

      ],
      "version": "5.0.2.7",
      "readonly_recovery": true
    },
    {
      "key": "streak7",
      "name": "Dell Streak 7",
      "init": "init.tinyandroid.rc",
      "legacy_versions": [
        "3.0.2.0",
        "3.0.1.9",
        "3.0.1.8",
        "3.0.1.7"
      ],
      "version": "3.0.2.0",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk3p1 ; "
    },
    {
      "key": "mecha",
      "touch_version": "5.8.0.2",
      "name": "HTC Thunderbolt",
      "init": "init.mecha.rc",
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
      "alternate_recovery": {
        "name": "RA_GNM Recovery v3.05",
        "clockwork": false,
        "url": "http://dl.dropbox.com/u/12949506/RomManager/recovery-ra-mecha-3.05.img"
      }
    },
    {
      "key": "ideos",
      "name": "Huawei U8150 Ideos",
      "init": "init.ideos.rc",
      "legacy_versions": [
        "3.0.2.4"
      ],
      "version": "3.0.2.4"
    },
    {
      "key": "stingray",
      "touch_version": "6.0.2.9",
      "name": "Motorola XOOM",
      "init": "init.stingray.rc",
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
        "4.0.0.4"
      ],
      "version": "6.0.2.9",
      "flash_recovery": "dd if=%s of=/dev/block/platform/sdhci-tegra.3/by-name/recovery ; "
    },
    {
      "key": "leo",
      "name": "HTC HD2",
      "init": "init.leo.rc",
      "legacy_versions": [
        "3.0.2.5",
        "3.0.2.4",
        "3.0.2.5"
      ],
      "version": "3.1.0.0"
    },
    {
      "key": "zeppelin",
      "name": "Motorola CLIQ XT/Quench (MB501)",
      "init": "init.zeppelin.rc",
      "lunch": "cyanogen_zeppelin-eng",
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
      "touch_version": "5.8.1.5",
      "name": "HTC Desire S",
      "init": "init.saga.rc",
      "lunch": "full_saga-eng",
      "legacy_versions": [
        "3.0.2.6",
        "5.0.1.9"
      ],
      "version": "5.0.2.0",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p21 ; "
    },
    {
      "key": "p999",
      "name": "LG G2X (T-Mobile)",
      "init": "init_recovery.rc",
      "lunch": "cyanogen_p999-eng",
      "legacy_versions": [
        "3.0.2.7",
        "5.0.0.8",
        "5.0.1.0",
        "5.0.1.4",
        "5.0.1.6"
      ],
      "reboot_recovery": "echo 'boot-recovery' | dd of=/dev/block/mmcblk0p3 seek=6144 bs=1 ; reboot ; ",
      "version": "5.0.2.0",
      "readonly_recovery": true
    },
    {
      "inits": [
        "init_recovery.rc",
        "/bootimages/opening_01.rle"
      ],
      "key": "p990",
      "touch_version": "6.0.1.5",
      "name": "LG Optimus 2X",
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
        "5.0.2.0"
      ],
      "reboot_recovery": "echo 'boot-recovery' | dd of=/dev/block/mmcblk0p3 seek=6144 bs=1 ; reboot ; ",
      "version": "6.0.1.5",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p7 ; "
    },
    {
      "key": "crespo4g",
      "touch_version": "6.0.2.5",
      "name": "Google Nexus S 4G",
      "init": "init.herring.rc",
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
        "6.0.1.0"
      ],
      "version": "6.0.2.5"
    },
    {
      "key": "thunderg",
      "name": "LG Optimus One (old BB)",
      "init": "init.thunderg.rc",
      "lunch": "full_thunderg-eng",
      "legacy_versions": [
        "3.1.0.0",
        "5.0.0.8",
        "5.0.1.0"
      ],
      "version": "5.0.2.0",
      "alternate_recovery": {
        "name": "RA_GNM Recovery v2.2.1",
        "clockwork": false,
        "url": "http://dl.dropbox.com/u/12949506/RomManager/recovery-RA-thunderg-2.2.1-GNM.img"
      }
    },
    {
      "key": "p500",
      "name": "LG Optimus One",
      "init": "init.thunderg.rc",
      "lunch": "cyanogen_p500-eng",
      "legacy_versions": [
        "5.0.2.0"
      ],
      "version": "5.0.2.7"
    },
    {
      "key": "u8220",
      "name": "Huawei U8220/U8230",
      "init": "init.qcom.rc",
      "legacy_versions": [

      ],
      "version": "3.1.0.1"
    },
    {
      "key": "charge",
      "name": "Samsung Charge",
      "init": "init.smdkc110.rc",
      "legacy_versions": [

      ],
      "version": "3.1.0.1",
      "readonly_recovery": true
    },
    {
      "key": "umts_jordan",
      "name": "Motorola Defy",
      "init": "init.mapphone_umts.rc",
      "legacy_versions": [

      ],
      "officially_supported": false
    },
    {
      "key": "galaxys4g",
      "name": "Samsung Galaxy S 4G",
      "init": "init.smdkc110.rc",
      "legacy_versions": [
        "3.2.0.0"
      ],
      "version": "3.2.0.0",
      "readonly_recovery": true
    },
    {
      "inits": [
        "init.smdkc210.rc",
        "init.smdk4210.rc"
      ],
      "key": "galaxys2",
      "touch_version": "5.8.1.5",
      "name": "Samsung Galaxy S2",
      "init": "init.smdkc210.rc",
      "ro.product.device": [
        "i9100",
        "galaxys2"
      ],
      "legacy_versions": [
        "4.0.1.4",
        "v4.0.1.4"
      ],
      "version": "4.0.1.5",
      "readonly_recovery": true
    },
    {
      "inits": [
        "init.smdkc210.rc",
        "init.smdk4210.rc"
      ],
      "key": "i9100",
      "name": "Samsung Galaxy S2",
      "init": "init.smdk4210.rc",
      "ro.product.device": [
        "i9100",
        "galaxys2"
      ],
      "lunch": "cm_i9100-userdebug",
      "legacy_versions": [

      ],
      "version": "6.0.1.0",
      "officially_supported": false
    },
    {
      "key": "n7000",
      "name": "Samsung Galaxy Note (GT-N7000)",
      "init": "init.smdk4210.rc",
      "lunch": "cm_n7000-userdebug",
      "legacy_versions": [
        "6.0.1.0"
      ],
      "version": "6.0.1.2",
      "readonly_recovery": true
    },
    {
      "key": "sidekick4g",
      "name": "Samsung Sidekick 4G",
      "init": "init.smdkc110.rc",
      "legacy_versions": [

      ],
      "version": "4.0.0.2",
      "readonly_recovery": true
    },
    {
      "key": "vivo",
      "name": "HTC Incredible S",
      "init": "init.vivo.rc",
      "lunch": "cyanogen_vivo-eng",
      "legacy_versions": [
        "4.0.0.4",
        "4.0.0.6",
        "4.0.0.7",
        "4.0.0.8",
        "5.0.1.9"
      ],
      "version": "5.0.2.0",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p21 ; "
    },
    {
      "key": "vivow",
      "name": "HTC Incredible 2",
      "init": "init.vivow.rc",
      "lunch": "cyanogen_vivow-eng",
      "legacy_versions": [
        "4.0.0.4",
        "4.0.0.6",
        "4.0.0.7",
        "4.0.0.8",
        "5.0.1.9"
      ],
      "version": "5.0.2.0",
      "alternate_recovery": {
        "name": "RA_GNM Recovery v3.05",
        "clockwork": false,
        "url": "http://dl.dropbox.com/u/12949506/RomManager/recovery-ra-vivow-3.05.img"
      },
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p21 ; "
    },
    {
      "inits": [
        "init.p920.rc",
        "/bootimages/opening_01.rle"
      ],
      "key": "p920",
      "touch_version": "6.0.1.9",
      "name": "LG Optimus 3D",
      "lunch": "cm_p920-userdebug",
      "legacy_versions": [
        "4.0.0.7",
        "4.0.0.9",
        "5.0.1.4",
        "5.0.2.0",
        "5.0.2.7"
      ],
      "reboot_recovery": "echo '518 R 1' > /sys/kernel/kobject_lge_nvdata/dynamic_nvdata_raw_write ; reboot ; ",
      "version": "6.0.1.9",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p6 ; "
    },
    {
      "key": "galaxyace",
      "name": "Samsung Galaxy Ace",
      "init": "init.galaxyace.rc",
      "legacy_versions": [

      ],
      "version": "4.0.0.9",
      "flash_recovery": "/data/data/com.koushikdutta.rommanager/files/flash_image recoveryonly %s ; "
    },
    {
      "inits": [
        "init_prep_keypad.sh",
        "init.olympus.rc"
      ],
      "key": "olympus",
      "touch_version": "5.8.1.8",
      "name": "Motorola Atrix 4G",
      "init": "init_prep_keypad.sh",
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
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p10 ; "
    },
    {
      "key": "smb_a1002",
      "name": "Viewsonic GTablet (smb_a1002)",
      "init": "init_recovery.rc",
      "legacy_versions": [

      ],
      "version": "4.0.1.5",
      "flash_recovery": "/data/data/com.koushikdutta.rommanager/files/tegra_flash_image recovery %s ; "
    },
    {
      "key": "shooter",
      "touch_version": "5.8.0.2",
      "name": "HTC EVO 3D",
      "init": "init.shooter.rc",
      "lunch": "htc_shooter-eng",
      "legacy_versions": [
        "4.0.1.5",
        "5.0.0.0",
        "5.0.1.0"
      ],
      "version": "5.0.2.0",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p22 ; "
    },
    {
      "key": "pyramid",
      "touch_version": "5.8.0.9",
      "name": "HTC Sensation",
      "init": "init.pyramid.rc",
      "lunch": "full_pyramid-eng",
      "legacy_versions": [
        "4.0.1.5",
        "5.0.0.1",
        "5.0.0.7",
        "5.0.0.8",
        "5.0.1.0"
      ],
      "version": "5.0.2.0",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p21 ; "
    },
    {
      "inits": [
        "init.qcom.rc",
        "init.huawei.rc"
      ],
      "key": "ascend2",
      "name": "Huawei Ascend 2 (M865)",
      "init": "init.qcom.rc",
      "legacy_versions": [

      ],
      "version": "4.0.1.5"
    },
    {
      "key": "a70",
      "name": "Micromax A70",
      "init": "init.qcom.rc",
      "legacy_versions": [

      ],
      "version": "4.0.1.5"
    },
    {
      "key": "galaxygio",
      "name": "Samsung Galaxy Gio",
      "init": "init.galaxygio.rc",
      "legacy_versions": [

      ],
      "version": "4.0.1.5",
      "readonly_recovery": true
    },
    {
      "key": "indulge910",
      "name": "Samsung Indulge 910",
      "init": "init.smdkc110.rc",
      "legacy_versions": [

      ],
      "version": "4.0.1.5",
      "readonly_recovery": true
    },
    {
      "key": "indulge915",
      "name": "Samsung Indulge 915",
      "init": "init.smdkc110.rc",
      "legacy_versions": [

      ],
      "version": "4.0.1.5",
      "readonly_recovery": true
    },
    {
      "key": "p970",
      "touch_version": "6.0.1.4",
      "name": "LG Optimus Black",
      "init": "/bootimages/ON_480x800_08fps_0000.rle",
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
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p4 ; "
    },
    {
      "key": "shooteru",
      "touch_version": "5.8.0.2",
      "name": "HTC EVO 3D (GSM)",
      "init": "init.shooteru.rc",
      "lunch": "full_shooteru-eng",
      "legacy_versions": [
        "5.0.1.6",
        "5.0.1.7",
        "5.0.1.8",
        "5.0.1.9"
      ],
      "version": "5.0.2.0",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p21 ; "
    },
    {
      "key": "droid2we",
      "name": "Motorola Droid 2 Global",
      "init": "init.mapphone_cdma.rc",
      "lunch": "cyanogen_droid2we-eng",
      "legacy_versions": [

      ],
      "reboot_recovery": "rm /cache/recovery/command ; echo 1 > /data/.recovery_mode ; sync ; reboot ;",
      "version": "5.0.2.3",
      "readonly_recovery": true,
      "flash_recovery": "dd if=%s of=/preinstall/recovery/recovery.zip ; "
    },
    {
      "key": "targa",
      "name": "Motorola Droid Bionic",
      "init": "init.mapphone_cdma.rc",
      "lunch": "generic_targa-eng",
      "legacy_versions": [
        "5.0.2.3",
        "5.0.2.4"
      ],
      "reboot_recovery": "rm /cache/recovery/command ; echo 1 > /data/.recovery_mode ; sync ; reboot ;",
      "version": "5.0.2.5",
      "readonly_recovery": true,
      "flash_recovery": "dd if=%s of=/preinstall/recovery/recovery.zip ; "
    },
    {
      "key": "daytona",
      "name": "Motorola Droid X2",
      "init": "init.mapphone_cdma.rc",
      "lunch": "generic_daytona-eng",
      "legacy_versions": [
        "5.0.2.3",
        "5.0.2.4"
      ],
      "reboot_recovery": "rm /cache/recovery/command ; echo 1 > /data/.recovery_mode ; sync ; reboot ;",
      "version": "5.0.2.5",
      "readonly_recovery": true,
      "flash_recovery": "dd if=%s of=/preinstall/recovery/recovery.zip ; "
    },
    {
      "key": "solana",
      "name": "Motorola Droid 3",
      "init": "init.mapphone_cdma.rc",
      "lunch": "full_solana-eng",
      "legacy_versions": [
        "5.0.2.5"
      ],
      "reboot_recovery": "rm /cache/recovery/command ; echo 1 > /data/.recovery_mode ; sync ; reboot ;",
      "version": "5.0.2.6",
      "readonly_recovery": true,
      "flash_recovery": "dd if=%s of=/preinstall/recovery/recovery.zip ; "
    },
    {
      "key": "motus",
      "name": "Motorola Backflip",
      "init": "init.motus.rc",
      "lunch": "cyanogen_motus-eng",
      "legacy_versions": [

      ],
      "version": "5.0.2.6"
    },
    {
      "key": "tass",
      "name": "Samsung Galaxy Mini",
      "init": "init.gt-s5570.rc",
      "lunch": "tass-eng",
      "legacy_versions": [

      ],
      "version": "5.0.2.6",
      "readonly_recovery": true
    },
    {
      "key": "u8800",
      "name": "Huawei U8800",
      "init": "init.u8800.rc",
      "lunch": "huawei_u8800-eng",
      "legacy_versions": [

      ],
      "version": "5.0.2.6",
      "flash_recovery": "mount -o remount,rw -t vfat /dev/block/mmcblk0p1 /cust_backup ; cat %s > /cust_backup/image/recovery.img ;"
    },
    {
      "inits": [
        "init.smdkc210.rc",
        "init.smdk4210.rc"
      ],
      "key": "galaxys2att",
      "touch_version": "5.8.1.5",
      "name": "Samsung Galaxy S2 (AT&T)",
      "init": "init.smdkc210.rc",
      "lunch": "cyanogen_galaxys2att-eng",
      "legacy_versions": [

      ],
      "version": "5.0.2.6",
      "readonly_recovery": true
    },
    {
      "key": "hercules",
      "touch_version": "6.0.2.8",
      "name": "Samsung Galaxy S2 (T-Mobile)",
      "init": "init.target.rc",
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
        "6.0.2.7"
      ],
      "version": "6.0.2.8",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p22 bs=4096 ; "
    },
    {
      "key": "epic4gtouch",
      "touch_version": "5.8.1.5",
      "name": "Samsung Epic 4G Touch",
      "init": "init.smdkc210.rc",
      "lunch": "full_epic4gtouch-eng",
      "legacy_versions": [
        "5.0.2.6",
        "5.0.2.7"
      ],
      "version": "5.0.2.7",
      "readonly_recovery": true
    },
    {
      "key": "ruby",
      "name": "HTC Amaze",
      "init": "init.ruby.rc",
      "lunch": "full_ruby-eng",
      "legacy_versions": [

      ],
      "version": "5.0.2.6",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p23 bs=4096 ; "
    },
    {
      "key": "galaxy5",
      "name": "Samsung Galaxy 5",
      "init": "init.gt-i5500.rc",
      "lunch": "samsung_galaxy5-eng",
      "legacy_versions": [
        "5.0.2.8"
      ],
      "version": "5.0.2.8",
      "readonly_recovery": true
    },
    {
      "key": "mooncake",
      "name": "ZTE Racer",
      "init": "init.mooncake.rc",
      "lunch": "generic_mooncake-eng",
      "legacy_versions": [

      ],
      "version": "5.0.2.7"
    },
    {
      "key": "vzwtab",
      "name": "Samsung Galaxy Tab (VZW)",
      "init": "init.smdkc110.rc",
      "lunch": "full_vzwtab-eng",
      "legacy_versions": [
        "5.0.2.7",
        "5.0.2.7",
        "5.0.2.7"
      ],
      "version": "5.0.2.7",
      "readonly_recovery": true
    },
    {
      "key": "doubleshot",
      "name": "HTC MyTouch 4G Slide",
      "init": "init.doubleshot.rc",
      "lunch": "full_doubleshot-eng",
      "legacy_versions": [
        "5.0.2.7",
        "5.0.2.7"
      ],
      "version": "5.0.2.7",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p21 bs=4096 ; "
    },
    {
      "key": "maguro",
      "touch_version": "6.0.2.3",
      "name": "Google Galaxy Nexus (GSM)",
      "init": "init.tuna.rc",
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
        "6.0.1.5"
      ],
      "version": "6.0.2.3",
      "flash_recovery": "dd if=%s of=/dev/block/platform/omap/omap_hsmmc.0/by-name/recovery bs=4096 ;"
    },
    {
      "key": "toro",
      "touch_version": "6.0.2.3",
      "name": "Google Galaxy Nexus (Verizon)",
      "init": "init.tuna.rc",
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
        "6.0.1.5"
      ],
      "version": "6.0.2.3",
      "flash_recovery": "dd if=%s of=/dev/block/platform/omap/omap_hsmmc.0/by-name/recovery bs=4096 ;"
    },
    {
      "key": "lg690",
      "name": "LG Optimus C LW690",
      "init": "init.thunderc.rc",
      "lunch": "full_lg690-eng",
      "legacy_versions": [

      ],
      "version": "5.0.2.7"
    },
    {
      "key": "c660",
      "name": "LG Optimus Pro",
      "init": "init.muscat.rc",
      "lunch": "c660-eng",
      "legacy_versions": [

      ],
      "version": "5.0.2.7"
    },
    {
      "key": "e510",
      "name": "LG Optimus Hub",
      "init": "init.univa.rc",
      "lunch": "e510-eng",
      "legacy_versions": [

      ],
      "version": "5.0.2.7"
    },
    {
      "key": "epicmtd",
      "touch_version": "5.8.1.5",
      "name": "Samsung Epic4G (MTD)",
      "init": "init.victory.rc",
      "lunch": "cyanogen_epicmtd-eng",
      "legacy_versions": [

      ],
      "reboot_recovery": "/system/xbin/busybox devmem 0x57fff800 32 0x5EC0B007; sync ; reboot ;",
      "version": "5.0.2.7",
      "officially_supported": false
    },
    {
      "key": "holiday",
      "name": "HTC Holiday",
      "init": "init.holiday.rc",
      "lunch": "full_holiday-eng",
      "legacy_versions": [
        "5.0.2.7",
        "5.0.2.7",
        "5.0.2.7"
      ],
      "version": "5.0.2.7",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p23 bs=4096 ; "
    },
    {
      "inits": [
        "init.victor.rc",
        "init.e739.rc"
      ],
      "key": "e730",
      "name": "LG Optimus SOL / TMo LG myTouch",
      "lunch": "e730-eng",
      "legacy_versions": [

      ],
      "version": "5.0.2.7",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p17 bs=4096 ;"
    },
    {
      "key": "marvel",
      "name": "HTC Wildfire S",
      "init": "init.marvel.rc",
      "lunch": "generic_marvel-eng",
      "legacy_versions": [
        "5.0.2.7"
      ],
      "version": "5.0.2.8"
    },
    {
      "inits": [
        "init.mapphone_umts.rc",
        "init.mapphone_cdma.rc"
      ],
      "key": "sunfire",
      "name": "Motorola Photon 4G",
      "init": "init.mapphone_umts.rc",
      "lunch": "full_sunfire-eng",
      "legacy_versions": [
        "5.0.2.7"
      ],
      "version": "5.0.2.8",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p10 bs=4096 ;"
    },
    {
      "inits": [
        "init.huawei.rc",
        "init.u8160.rc"
      ],
      "key": "u8160",
      "name": "Huawei U8160",
      "init": "init.u8160.rc",
      "lunch": "huawei_u8160-eng",
      "legacy_versions": [
        "5.0.2.8"
      ],
      "version": "5.0.2.8"
    },
    {
      "key": "vigor",
      "touch_version": "6.0.2.3",
      "name": "HTC Rezound",
      "init": "init.vigor.rc",
      "lunch": "cm_vigor-userdebug",
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
      "version": "6.0.2.3",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p23 bs=4096 ;"
    },
    {
      "key": "express",
      "name": "HTC EVO View 4G",
      "init": "init.expresskt.rc",
      "lunch": "full_express-userdebug",
      "legacy_versions": [

      ],
      "version": "5.8.1.5",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p21 bs=4096 ;"
    },
    {
      "key": "tf201",
      "touch_version": "5.8.3.4",
      "name": "Asus Transformer Prime",
      "init": "init.cardhu.rc",
      "lunch": "cm_tf201-userdebug",
      "legacy_versions": [
        "5.5.0.4",
        "5.8.2.0"
      ],
      "version": "5.8.3.4",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p4 ;"
    },
    {
      "key": "maserati",
      "name": "Motorola Droid 4",
      "init": "init.mapphone_cdma.rc",
      "legacy_versions": [

      ],
      "reboot_recovery": "rm /cache/recovery/command ; echo 1 > /data/.recovery_mode ; sync ; reboot ;",
      "version": "5.0.2.0",
      "officially_supported": false
    },
    {
      "key": "spyder",
      "name": "Motorola RAZR",
      "init": "init.mapphone_cdma.rc",
      "legacy_versions": [

      ],
      "reboot_recovery": "rm /cache/recovery/command ; echo 1 > /data/.recovery_mode ; sync ; reboot ;",
      "version": "5.0.2.0",
      "officially_supported": false
    },
    {
      "key": "marvelc",
      "name": "HTC Wildfire S CDMA",
      "init": "init.marvelc.rc",
      "lunch": "full_marvelc-eng",
      "legacy_versions": [

      ],
      "version": "5.0.2.8"
    },
    {
      "key": "tf101",
      "touch_version": "5.8.3.4",
      "name": "Asus Transformer",
      "init": "init.ventana.rc",
      "lunch": "cm_tf101-userdebug",
      "legacy_versions": [
        "5.5.0.4",
        "5.8.1.9",
        "5.8.2.0",
        "5.8.2.1",
        "5.8.3.4"
      ],
      "version": "6.0.1.3",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p4 ;"
    },
    {
      "key": "p930",
      "touch_version": "6.0.1.5",
      "name": "LG Nitro HD / LG P930 (AT&T)",
      "init": "bootimages/boot_logo_00000.rle",
      "lunch": "cm_p930-userdebug",
      "legacy_versions": [
        "5.8.2.0",
        "6.0.1.4"
      ],
      "version": "6.0.1.5",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p13 ;"
    },
    {
      "inits": [
        "init.smdkc210.rc",
        "init.smdk4210.rc"
      ],
      "key": "i777",
      "touch_version": "6.0.1.0",
      "name": "Samsung Galaxy S2 (SGH-I777)",
      "init": "init.smdkc210.rc",
      "lunch": "cm_i777-userdebug",
      "legacy_versions": [
        "5.8.1.8"
      ],
      "version": "6.0.1.0",
      "readonly_recovery": true
    },
    {
      "key": "pico",
      "name": "HTC Pico",
      "init": "init.pico.rc",
      "lunch": "full_pico-eng",
      "legacy_versions": [

      ],
      "version": "5.0.2.8"
    },
    {
      "key": "endeavoru",
      "touch_version": "5.8.4.0",
      "name": "HTC One X (GSM)",
      "init": "ueventd.endeavoru.rc",
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
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p5 bs=4096 ;"
    },
    {
      "key": "ville",
      "touch_version": "6.0.2.9",
      "name": "HTC One S",
      "init": "init.ville.rc",
      "lunch": "cm_ville-userdebug",
      "legacy_versions": [
        "5.5.0.4",
        "5.8.2.1",
        "5.8.2.2",
        "5.8.2.3",
        "5.8.3.1"
      ],
      "version": "6.0.2.9",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p22 bs=4096 ;"
    },
    {
      "key": "p1",
      "name": "Samsung Galaxy Tab (MTD and GSM)",
      "init": "init.p1.rc",
      "legacy_versions": [

      ],
      "reboot_recovery": "echo 1 > /cache/.startrecovery ; sync ; reboot ;",
      "version": "5.8.2.1",
      "officially_supported": false
    },
    {
      "key": "p1c",
      "name": "Samsung Galaxy Tab (MTD and CDMA)",
      "init": "init.p1c.rc",
      "legacy_versions": [

      ],
      "reboot_recovery": "echo 1 > /cache/.startrecovery ; sync ; reboot ;",
      "version": "5.8.2.1",
      "officially_supported": false
    },
    {
      "key": "toroplus",
      "touch_version": "6.0.2.3",
      "name": "Google Galaxy Nexus (Sprint)",
      "init": "init.tuna.rc",
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
        "6.0.1.5"
      ],
      "version": "6.0.2.3",
      "flash_recovery": "dd if=%s of=/dev/block/platform/omap/omap_hsmmc.0/by-name/recovery bs=4096 ;"
    },
    {
      "key": "p4wifi",
      "touch_version": "5.8.3.1",
      "name": "Samsung Galaxy Tab 10.1 (Wifi)",
      "init": "ueventd.p3.rc",
      "lunch": "cm_p4wifi-userdebug",
      "legacy_versions": [
        "4.0.0.4",
        "5.8.3.1"
      ],
      "version": "6.0.2.9",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p2 ; "
    },
    {
      "key": "wingray",
      "touch_version": "6.0.2.9",
      "name": "Motorola XOOM (Wi-Fi only)",
      "init": "init.wingray.rc",
      "lunch": "cm_wingray-userdebug",
      "legacy_versions": [
        "5.8.3.1"
      ],
      "version": "6.0.2.9",
      "flash_recovery": "dd if=%s of=/dev/block/platform/sdhci-tegra.3/by-name/recovery ; "
    },
    {
      "key": "marquee",
      "name": "LG Marquee",
      "init": "init.omap.post_boot.sh",
      "lunch": "full_marquee-eng",
      "legacy_versions": [

      ],
      "version": "5.0.2.8",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p4 bs=4096 ; "
    },
    {
      "key": "ignite",
      "name": "LG Ignite",
      "init": "init.omap.post_boot.sh",
      "lunch": "full_ignite-eng",
      "legacy_versions": [

      ],
      "version": "5.0.2.8",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p4 bs=4096 ; "
    },
    {
      "key": "ms840",
      "touch_version": "5.8.3.1",
      "name": "LG Connect 4G MS840",
      "init": "init.target.rc",
      "lunch": "full_ms840-userdebug",
      "legacy_versions": [

      ],
      "version": "5.8.3.1",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p13 bs=4096 ; "
    },
    {
      "key": "vs840",
      "touch_version": "5.8.3.1",
      "name": "LG Lucid VS840",
      "init": "init.target.rc",
      "lunch": "full_vs840-userdebug",
      "legacy_versions": [

      ],
      "version": "5.8.3.1",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p13 bs=4096 ; "
    },
    {
      "key": "jewel",
      "touch_version": "5.8.3.5",
      "name": "HTC EVO LTE",
      "init": "init.jewel.rc",
      "lunch": "cm_jewel-userdebug",
      "legacy_versions": [
        "5.8.3.4",
        "5.8.3.4"
      ],
      "version": "5.8.3.5",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p22 bs=4096 ; "
    },
    {
      "key": "i9300",
      "touch_version": "6.0.2.7",
      "name": "Samsung Galaxy S3 (GT-I9300)",
      "init": "ueventd.smdk4x12.rc",
      "ro.product.devices": [
        "i9300",
        "m0"
      ],
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
        "6.0.1.2"
      ],
      "version": "6.0.2.7",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p6 bs=4096 ; "
    },
    {
      "key": "skyrocket",
      "touch_version": "6.0.1.4",
      "name": "Samsung Skyrocket",
      "init": "init.qcom.usb.rc",
      "lunch": "cm_skyrocket-userdebug",
      "legacy_versions": [
        "5.8.4.3",
        "6.0.1.0"
      ],
      "version": "6.0.1.4",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p22 bs=4096 ; "
    },
    {
      "key": "quincyatt",
      "touch_version": "5.8.4.3",
      "name": "Samsung Galaxy Note (AT&T)",
      "init": "init.qcom.usb.rc",
      "lunch": "cm_quincyatt-userdebug",
      "legacy_versions": [
        "5.8.4.3"
      ],
      "version": "5.8.4.8",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p22 bs=4096 ; "
    },
    {
      "key": "e400",
      "name": "LG Optimus L3",
      "init": "init.e0.rc",
      "lunch": "cm_e400-userdebug",
      "legacy_versions": [

      ],
      "version": "5.8.4.5",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p17 bs=4096 ; "
    },
    {
      "key": "primou",
      "name": "HTC One V",
      "init": "init.primou.rc",
      "lunch": "cm_primou-userdebug",
      "legacy_versions": [

      ],
      "version": "5.8.4.5",
      "readonly_recovery": true
    },
    {
      "key": "d2att",
      "touch_version": "6.0.2.9",
      "name": "Samsung Galaxy S3 (AT&T)",
      "init": "init.d2att.rc",
      "lunch": "cm_d2att-userdebug",
      "legacy_versions": [
        "5.8.4.5",
        "5.8.4.6",
        "5.8.4.7",
        "6.0.1.1",
        "6.0.1.2",
        "6.0.2.3",
        "6.0.2.8"
      ],
      "version": "6.0.2.9",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p18 bs=4096 ; "
    },
    {
      "key": "d2tmo",
      "touch_version": "6.0.2.9",
      "name": "Samsung Galaxy S3 (T-Mobile)",
      "init": "init.d2tmo.rc",
      "lunch": "cm_d2tmo-userdebug",
      "legacy_versions": [
        "5.8.4.5",
        "5.8.4.6",
        "5.8.4.7",
        "6.0.1.2",
        "6.0.2.3",
        "6.0.2.8"
      ],
      "version": "6.0.2.9",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p18 bs=4096 ; "
    },
    {
      "key": "d2spr",
      "touch_version": "6.0.2.9",
      "name": "Samsung Galaxy S3 (Sprint)",
      "init": "init.d2spr.rc",
      "lunch": "cm_d2spr-userdebug",
      "legacy_versions": [
        "5.8.4.5",
        "5.8.4.6",
        "5.8.4.7",
        "5.8.4.9",
        "6.0.1.2",
        "6.0.2.3",
        "6.0.2.8"
      ],
      "version": "6.0.2.9",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p18 bs=4096 ; "
    },
    {
      "twrp_version": "2.4.3.0",
      "key": "d2vzw",
      "touch_version": "6.0.2.8",
      "name": "Samsung Galaxy S3 (Verizon)",
      "init": "init.d2vzw.rc",
      "lunch": "cm_d2vzw-userdebug",
      "legacy_versions": [
        "5.8.4.6",
        "5.8.4.7",
        "5.8.4.8",
        "5.8.4.9",
        "6.0.1.2",
        "6.0.2.3"
      ],
      "version": "6.0.2.8",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p18 bs=4096 ; "
    },
    {
      "key": "primoc",
      "touch_version": "5.8.4.7",
      "name": "HTC One V (CDMA)",
      "init": "init.primoc.rc",
      "lunch": "full_primoc-userdebug",
      "legacy_versions": [
        "5.8.4.6",
        "5.8.4.7"
      ],
      "version": "5.8.4.7",
      "readonly_recovery": true
    },
    {
      "key": "grouper",
      "touch_version": "6.0.2.3",
      "name": "Google Nexus 7",
      "init": "init.grouper.rc",
      "lunch": "cm_grouper-userdebug",
      "legacy_versions": [
        "6.0.0.6",
        "6.0.1.0",
        "6.0.1.9"
      ],
      "version": "6.0.2.3",
      "flash_recovery": "dd if=%s of=/dev/block/platform/sdhci-tegra.3/by-name/SOS bs=4096 ; "
    },
    {
      "key": "su640",
      "touch_version": "6.0.1.0",
      "name": "LG Optimus LTE (SKT)",
      "init": "init.su640.rc",
      "lunch": "cm_su640-userdebug",
      "legacy_versions": [

      ],
      "version": "6.0.1.0",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p13 bs=4096 ; "
    },
    {
      "key": "i9100g",
      "name": "Samsung Galaxy S2 (GT-I9100G)",
      "init": "init.t1.rc",
      "lunch": "cm_i9100g-userdebug",
      "legacy_versions": [

      ],
      "version": "6.0.1.0",
      "officially_supported": false
    },
    {
      "key": "p3100",
      "touch_version": "6.0.2.7",
      "name": "Samsung Galaxy Tab 2 (GT-P3100)",
      "init": "init.espresso.rc",
      "lunch": "cm_p3100-userdebug",
      "legacy_versions": [
        "6.0.1.1",
        "6.0.2.3"
      ],
      "version": "6.0.2.7",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p6 bs=4096 ; "
    },
    {
      "key": "p3110",
      "touch_version": "6.0.2.7",
      "name": "Samsung Galaxy Tab 2 (GT-P3110)",
      "init": "init.espresso.rc",
      "lunch": "cm_p3110-userdebug",
      "legacy_versions": [
        "6.0.1.1",
        "6.0.2.3"
      ],
      "version": "6.0.2.7",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p6 bs=4096 ; "
    },
    {
      "key": "p3113",
      "touch_version": "6.0.2.3",
      "name": "Samsung Galaxy Tab 2 (GT-P3113)",
      "init": "init.espresso.rc",
      "lunch": "cm_p3113-userdebug",
      "legacy_versions": [
        "6.0.1.1"
      ],
      "version": "6.0.2.3",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p6 bs=4096 ; "
    },
    {
      "key": "p5100",
      "touch_version": "6.0.2.7",
      "name": "Samsung Galaxy Tab 2 (GT-P5100)",
      "init": "init.espresso10.rc",
      "lunch": "cm_p5100-userdebug",
      "legacy_versions": [
        "6.0.1.1",
        "6.0.2.3"
      ],
      "version": "6.0.2.7",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p6 bs=4096 ; "
    },
    {
      "key": "p5110",
      "touch_version": "6.0.2.7",
      "name": "Samsung Galaxy Tab 2 (GT-P5110)",
      "init": "init.espresso10.rc",
      "lunch": "cm_p5110-userdebug",
      "legacy_versions": [
        "6.0.1.1",
        "6.0.2.3"
      ],
      "version": "6.0.2.7",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p6 bs=4096 ; "
    },
    {
      "key": "p5113",
      "touch_version": "6.0.2.3",
      "name": "Samsung Galaxy Tab 2 (GT-P5113)",
      "init": "init.espresso10.rc",
      "lunch": "cm_p5113-userdebug",
      "legacy_versions": [
        "6.0.1.1"
      ],
      "version": "6.0.2.3",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p6 bs=4096 ; "
    },
    {
      "inits": [
        "init.target.rc",
        "init.iproj.rc",
        "init.i_vzw.rc",
        "init.iprj.rc"
      ],
      "key": "vs920",
      "touch_version": "6.0.1.1",
      "name": "LG Spectrum 4G",
      "init": "init.target.rc",
      "lunch": "cm_vs920-userdebug",
      "legacy_versions": [

      ],
      "version": "6.0.1.1",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p13 bs=4096 ; "
    },
    {
      "key": "x500",
      "touch_version": "6.0.1.1",
      "name": "Score & Score M",
      "init": "init.zte.rc",
      "lunch": "cm_x500-userdebug",
      "legacy_versions": [

      ],
      "version": "6.0.1.1"
    },
    {
      "inits": [
        "init.qcom.rc",
        "init.bryce.rc"
      ],
      "key": "vs910",
      "touch_version": "6.0.1.1",
      "name": "LG Revolution 4G",
      "init": "init.qcom.rc",
      "lunch": "cm_vs910-userdebug",
      "legacy_versions": [

      ],
      "version": "6.0.1.1",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p14 bs=4096 ; "
    },
    {
      "inits": [
        "init.qcom.rc",
        "init.bryce.rc"
      ],
      "key": "ms910",
      "touch_version": "6.0.1.1",
      "name": "LG Esteeem 4G",
      "init": "init.qcom.rc",
      "lunch": "cm_ms910-userdebug",
      "legacy_versions": [
        "5.0.2.8"
      ],
      "version": "6.0.1.1",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p14 bs=4096 ; "
    },
    {
      "inits": [
        "init.qcom.rc",
        "init.m3.rc"
      ],
      "key": "ms695",
      "touch_version": "6.0.1.1",
      "name": "LG Optimus M+",
      "init": "init.qcom.rc",
      "lunch": "cm_ms695-userdebug",
      "legacy_versions": [
        "6.0.1.0"
      ],
      "version": "6.0.1.1",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p17 bs=4096 ; "
    },
    {
      "key": "p1l",
      "name": "Samsung Galaxy Tab (MTD and GSM - L)",
      "init": "init.p1.rc",
      "legacy_versions": [

      ],
      "reboot_recovery": "echo 1 > /cache/.startrecovery ; sync ; reboot ;",
      "version": "5.8.2.1",
      "officially_supported": false
    },
    {
      "key": "p1n",
      "name": "Samsung Galaxy Tab (MTD and GSM - N)",
      "init": "init.p1.rc",
      "legacy_versions": [

      ],
      "reboot_recovery": "echo 1 > /cache/.startrecovery ; sync ; reboot ;",
      "version": "5.8.2.1",
      "officially_supported": false
    },
    {
      "key": "d2usc",
      "touch_version": "6.0.2.8",
      "name": "Samsung Galaxy S3 (US Cellular)",
      "init": "init.d2usc.rc",
      "lunch": "cm_d2usc-userdebug",
      "legacy_versions": [
        "6.0.1.2",
        "6.0.2.3",
        "6.0.2.8"
      ],
      "version": "6.0.2.9",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p18 bs=4096 ; "
    },
    {
      "inits": [
        "init.asanti.rc",
        "init.sprint.rc"
      ],
      "key": "asanti",
      "name": "Motorola Photon Q",
      "init": "init.mmi.usb.rc",
      "lunch": "cm_asanti-userdebug",
      "legacy_versions": [

      ],
      "version": "6.0.1.3",
      "flash_recovery": "dd if=%s of=/dev/block/platform/msm_sdcc.1/by-name/recovery bs=4096 ; "
    },
    {
      "key": "p350",
      "name": "LG Optimus Me",
      "init": "init.pecan.rc",
      "lunch": "cm_p350-userdebug",
      "legacy_versions": [
        "6.0.1.3",
        "6.0.1.4"
      ],
      "version": "6.0.1.5"
    },
    {
      "key": "p5att",
      "name": "Samsung Galaxy Tab 8.9 (AT&T)",
      "init": "fstab.qcom",
      "lunch": "cm_p5att-userdebug",
      "legacy_versions": [

      ],
      "version": "6.0.1.4",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p22 bs=4096 ; "
    },
    {
      "key": "t769",
      "touch_version": "6.0.1.4",
      "name": "Samsung Galaxy S Blaze 4G",
      "init": "init.target.rc",
      "lunch": "cm_t769-userdebug",
      "legacy_versions": [

      ],
      "version": "6.0.1.4",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p22 bs=4096 ; "
    },
    {
      "inits": [
        "init.carrier.rc",
        "init.d2mtr.rc"
      ],
      "key": "d2mtr",
      "touch_version": "6.0.2.9",
      "name": "Samsung Galaxy S3 (MetroPCS)",
      "init": "init.carrier.rc",
      "lunch": "cm_d2mtr-userdebug",
      "legacy_versions": [
        "6.0.1.5",
        "6.0.2.3",
        "6.0.2.8"
      ],
      "version": "6.0.2.9",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p18 bs=4096 ; "
    },
    {
      "key": "tf700t",
      "touch_version": "6.0.2.3",
      "name": "Asus Transformer Pad Infinity",
      "init": "init.tf700t.rc",
      "lunch": "cm_tf700t-userdebug",
      "legacy_versions": [
        "6.0.1.8"
      ],
      "reboot_recovery": "echo 'boot-recovery' | dd of=/dev/block/mmcblk0p3 seek=6144 bs=1 ; reboot ; ",
      "version": "6.0.2.3",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p4 bs=4096 ; "
    },
    {
      "key": "manta",
      "touch_version": "6.0.2.3",
      "name": "Google Nexus 10",
      "init": "init.manta.rc",
      "lunch": "cm_manta-userdebug",
      "legacy_versions": [
        "6.0.1.5",
        "6.0.1.5",
        "6.0.1.6",
        "6.0.1.7",
        "6.0.1.8",
        "6.0.1.9"
      ],
      "version": "6.0.2.3",
      "flash_recovery": "dd if=%s of=/dev/block/platform/dw_mmc.0/by-name/recovery bs=4096 ; "
    },
    {
      "key": "mako",
      "touch_version": "6.0.2.3",
      "name": "Google Nexus 4",
      "init": "init.mako.rc",
      "lunch": "cm_mako-userdebug",
      "legacy_versions": [
        "6.0.1.5",
        "6.0.1.6",
        "6.0.1.8",
        "6.0.1.9",
        "6.0.2.0"
      ],
      "version": "6.0.2.3",
      "flash_recovery": "dd if=%s of=/dev/block/platform/msm_sdcc.1/by-name/recovery bs=4096 ; "
    },
    {
      "key": "dlx",
      "touch_version": "6.0.2.8",
      "name": "HTC Droid DNA",
      "init": "init.debug_mfgkernel.rc",
      "lunch": "cm_dlx-userdebug",
      "legacy_versions": [
        "6.0.1.5",
        "6.0.1.9",
        "6.0.2.3",
        "6.0.2.7"
      ],
      "version": "6.0.2.8",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p20 bs=4096 ; "
    },
    {
      "key": "n7100",
      "touch_version": "6.0.1.9",
      "name": "Samsung Galaxy Note 2 (HSPA+)",
      "init": "init.smdk4x12.rc",
      "lunch": "cm_n7100-userdebug",
      "legacy_versions": [

      ],
      "version": "6.0.1.9",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p6 bs=4096 ; "
    },
    {
      "key": "a700",
      "touch_version": "6.0.2.3",
      "name": "Acer A700",
      "init": "init.picasso_mf.rc",
      "lunch": "cm_a700-userdebug",
      "legacy_versions": [

      ],
      "version": "6.0.2.3",
      "flash_recovery": "dd if=%s of=/dev/block/platform/sdhci-tegra.3/by-name/SOS bs=4096 ; "
    },
    {
      "key": "tilapia",
      "touch_version": "6.0.2.3",
      "name": "Google Nexus 7 (GSM)",
      "init": "init.tilapia.rc",
      "lunch": "cm_tilapia-userdebug",
      "legacy_versions": [

      ],
      "version": "6.0.2.3",
      "flash_recovery": "dd if=%s of=/dev/block/platform/sdhci-tegra.3/by-name/SOS bs=4096 ; "
    },
    {
      "key": "t0ltespr",
      "touch_version": "6.0.2.5",
      "name": "Samsung Galaxy Note 2 (Sprint)",
      "init": "init.t0ltespr.rc",
      "lunch": "cm_t0ltespr-userdebug",
      "legacy_versions": [
        "6.0.2.3",
        "6.0.2.4"
      ],
      "version": "6.0.2.5",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p9 bs=4096 ; "
    },
    {
      "key": "t0ltetmo",
      "touch_version": "6.0.2.8",
      "name": "Samsung Galaxy Note 2 (T-Mobile)",
      "init": "init.t0ltetmo.rc",
      "lunch": "cm_t0ltetmo-userdebug",
      "legacy_versions": [
        "6.0.2.3",
        "6.0.2.4",
        "6.0.2.5",
        "6.0.2.7"
      ],
      "version": "6.0.2.8",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p9 bs=4096 ; "
    },
    {
      "key": "t0ltevzw",
      "touch_version": "6.0.2.5",
      "name": "Samsung Galaxy Note 2 (Verizon)",
      "init": "init.t0ltevzw.rc",
      "lunch": "cm_t0ltevzw-userdebug",
      "legacy_versions": [
        "6.0.2.3",
        "6.0.2.4"
      ],
      "version": "6.0.2.5",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p9 bs=4096 ; "
    },
    {
      "key": "t0lteatt",
      "touch_version": "6.0.2.5",
      "name": "Samsung Galaxy Note 2 (AT&T)",
      "init": "init.t0lteatt.rc",
      "lunch": "cm_t0lteatt-userdebug",
      "legacy_versions": [
        "6.0.2.3",
        "6.0.2.4"
      ],
      "version": "6.0.2.5",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p9 bs=4096 ; "
    },
    {
      "key": "t0lte",
      "touch_version": "6.0.2.7",
      "name": "Samsung Galaxy Note 2 (LTE)",
      "init": "init.t0lte.rc",
      "lunch": "cm_t0lte-userdebug",
      "legacy_versions": [
        "6.0.2.3",
        "6.0.2.4",
        "6.0.2.5"
      ],
      "version": "6.0.2.8",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p9 bs=4096 ; "
    },
    {
      "inits": [
        "init.lgep720board.rc",
        "/bootimages/battery_charging_01.rle"
      ],
      "key": "p720",
      "touch_version": "6.0.2.3",
      "name": "LG Optimus 3DMax",
      "lunch": "cm_p720-userdebug",
      "legacy_versions": [

      ],
      "reboot_recovery": "echo '518 R 1' > /sys/kernel/kobject_lge_nvdata/dynamic_nvdata_raw_write ; reboot ; ",
      "version": "6.0.2.3",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p6 ; "
    },
    {
      "key": "d2cri",
      "touch_version": "6.0.2.9",
      "name": "Samsung Galaxy S3 (Cricket)",
      "init": "init.d2cri.rc",
      "lunch": "cm_d2cri-userdebug",
      "legacy_versions": [
        "6.0.2.7",
        "6.0.2.8"
      ],
      "version": "6.0.2.9",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p18 bs=4096 ; "
    },
    {
      "key": "runnymede",
      "touch_version": "6.0.2.7",
      "name": "HTC Sensation XL",
      "init": "init.runnymede.rc",
      "lunch": "cm_runnymede-userdebug",
      "legacy_versions": [

      ],
      "version": "6.0.2.7",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p21 bs=4096 ; "
    },
    {
      "key": "presto",
      "touch_version": "6.0.2.7",
      "name": "Pantech Presto",
      "init": "init.presto.rc",
      "lunch": "cm_presto-userdebug",
      "legacy_versions": [

      ],
      "version": "6.0.2.7",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p18 bs=4096 ; "
    },
    {
      "key": "warp2",
      "touch_version": "6.0.2.7",
      "name": "ZTE Sequent",
      "init": "init.warp2.rc",
      "lunch": "cm_warp2-userdebug",
      "legacy_versions": [

      ],
      "version": "6.0.2.7",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p13 bs=4096 ; "
    },
    {
      "key": "steelhead",
      "name": "Google Nexus Q",
      "init": "init.steelhead.rc",
      "lunch": "cm_steelhead-userdebug",
      "legacy_versions": [

      ],
      "version": "6.0.2.7",
      "flash_recovery": "dd if=%s of=/dev/block/platform/omap/omap_hsmmc.0/by-name/recovery bs=4096 ; "
    },
    {
      "inits": [
        "init.carrier.rc",
        "init.prevail2spr.rc"
      ],
      "key": "prevail2spr",
      "touch_version": "6.0.2.7",
      "name": "Samsung Prevail 2 (Boost Mobile)",
      "lunch": "cm_prevail2spr-userdebug",
      "legacy_versions": [

      ],
      "version": "6.0.2.7",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p15 bs=4096 ; "
    },
    {
      "key": "golden",
      "touch_version": "6.0.2.7",
      "name": "Samsung Galaxy S3 Mini",
      "init": "init.golden.rc",
      "lunch": "cm_golden-userdebug",
      "legacy_versions": [

      ],
      "version": "6.0.2.7",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p21 bs=4096 ; "
    },
    {
      "key": "fireball",
      "touch_version": "6.0.2.9",
      "name": "HTC Droid Incredible 4G LTE",
      "init": "init.fireball.rc",
      "lunch": "cm_fireball-userdebug",
      "legacy_versions": [
        "6.0.2.8"
      ],
      "version": "6.0.2.9",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p22 bs=4096 ; "
    },
    {
      "key": "puccinilte",
      "touch_version": "6.0.2.8",
      "name": "HTC Jetstream",
      "init": "init.puccinilte.rc",
      "lunch": "cm_puccinilte-userdebug",
      "legacy_versions": [

      ],
      "version": "6.0.2.8",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p23 bs=4096 ; "
    },
    {
      "key": "p700",
      "touch_version": "6.0.2.8",
      "name": "LG Optimus L7",
      "init": "init.u0.rc",
      "lunch": "cm_p700-userdebug",
      "legacy_versions": [

      ],
      "version": "6.0.2.8",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p17 bs=4096 ; "
    },
    {
      "key": "m7",
      "touch_version": "6.0.2.8",
      "name": "HTC One",
      "init": "init.m7.rc",
      "lunch": "cm_m7-userdebug",
      "legacy_versions": [

      ],
      "version": "6.0.2.8",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p34 bs=4096 ; "
    },
    {
      "key": "dlxu",
      "touch_version": "6.0.2.8",
      "name": "HTC Butterfly (dlxu)",
      "init": "init.dlxu.rc",
      "lunch": "cm_dlxu-userdebug",
      "legacy_versions": [

      ],
      "version": "6.0.2.8",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p20 bs=4096 ; "
    },
    {
      "key": "dlxub1",
      "touch_version": "6.0.2.8",
      "name": "HTC Butterfly (dlxub1)",
      "init": "init.dlxub1.rc",
      "lunch": "cm_dlxub1-userdebug",
      "legacy_versions": [

      ],
      "version": "6.0.2.8",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p20 bs=4096 ; "
    },
    {
      "key": "dlxj",
      "touch_version": "6.0.2.8",
      "name": "HTC Butterfly J",
      "init": "init.dlxj.rc",
      "lunch": "cm_dlxj-userdebug",
      "legacy_versions": [

      ],
      "version": "6.0.2.8",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p20 bs=4096 ; "
    },
    {
      "key": "e610",
      "name": "LG Optimus L5",
      "init": "init.m4.rc",
      "lunch": "cm_e610-userdebug",
      "legacy_versions": [

      ],
      "version": "6.0.2.8",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p17 bs=4096 ; "
    },
    {
      "key": "evita",
      "touch_version": "6.0.2.8",
      "name": "HTC One X (AT&T)",
      "init": "init.evita.rc",
      "lunch": "cm_evita-userdebug",
      "legacy_versions": [

      ],
      "version": "6.0.2.8",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p22 bs=4096 ; "
    },
    {
      "key": "p4",
      "touch_version": "6.0.2.9",
      "name": "Samsung Galaxy Tab 10.1",
      "init": "init.p4.rc",
      "lunch": "cm_p4-userdebug",
      "legacy_versions": [

      ],
      "version": "6.0.2.9",
      "flash_recovery": "dd if=%s of=/dev/block/platform/sdhci-tegra.3/by-num/p2 bs=4096 ; "
    },
    {
      "key": "p4tmo",
      "touch_version": "6.0.2.9",
      "name": "Samsung Galaxy Tab 10.1 (T-Mobile)",
      "init": "init.p4tmo.rc",
      "lunch": "cm_p4tmo-userdebug",
      "legacy_versions": [

      ],
      "version": "6.0.2.9",
      "flash_recovery": "dd if=%s of=/dev/block/platform/sdhci-tegra.3/by-num/p2 bs=4096 ; "
    },
    {
      "key": "p4vzw",
      "touch_version": "6.0.2.9",
      "name": "Samsung Galaxy Tab 10.1 (Verizon)",
      "init": "init.p4vzw.rc",
      "lunch": "cm_p4vzw-userdebug",
      "legacy_versions": [

      ],
      "version": "6.0.2.9",
      "flash_recovery": "dd if=%s of=/dev/block/platform/sdhci-tegra.3/by-num/p2 bs=4096 ; "
    },
    {
      "key": "p760",
      "touch_version": "6.0.2.9",
      "name": "LG Optimus L9",
      "init": "init.u0.rc",
      "lunch": "cm_p760-userdebug",
      "legacy_versions": [

      ],
      "version": "6.0.2.9",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p4 bs=4096 ; "
    },
    {
      "key": "i9305",
      "touch_version": "6.0.2.9",
      "name": "Samsung Galaxy S3 LTE (GT-I9305)",
      "init": "ueventd.smdk4x12.rc",
      "lunch": "cm_i9305-userdebug",
      "legacy_versions": [

      ],
      "version": "6.0.2.9",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p9 bs=4096 ; "
    }
  ],
  "recovery_twrp_url": "http://download2.clockworkmod.com/twrp/openrecovery-twrp-%s-%s.img",
  "use_in_app": false
}