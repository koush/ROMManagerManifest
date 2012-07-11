{
  "pontiflex_startup_register": 100,
  "manifest": "http://developer.clockworkmod.com/merge",
  "recovery_url": "http://download2.clockworkmod.com/recoveries/recovery-clockwork-%s-%s.img",
  "recovery_zip_url": "http://download2.clockworkmod.com/recoveries/recovery-clockwork-%s-%s.zip",
  "manifest_signature": "O8+Kc2mdQz0e/AjCQn6Rw6fK5Kr5LZItJ474Ua3gF2o4IgdCQZXIbwCHIo6xeqY3pVEGtjYmmyO1PkRYcGqq2rB2wQM8SoKFl/70vG0ihEZ5TDeruKUgxVVSNM3e09kBvCxYK89GWqVWkNHtvTu1T1F9w6FilzCsNFSAXHD0Bos=",
  "use_in_app": false,
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
      "version": "2.5.0.1",
      "init": "init.sholes.rc",
      "alternate_recovery": {
        "name": "SPRecovery 0.99.3b",
        "clockwork": false,
        "url": "http://koush.kanged.net/cm/recoveries/sprecovery.img"
      }
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
      "version": "2.5.0.7",
      "init": "init.sapphire.rc",
      "alternate_recovery": {
        "name": "RA Recovery v1.7.0G",
        "clockwork": false,
        "url": "http://files.androidspin.com/downloads.php?dir=amon_ra/RECOVERY/&file=recovery-RA-sapphire-v1.7.0G.img"
      }
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
      "version": "2.5.0.7",
      "init": "init.sapphire.rc",
      "alternate_recovery": {
        "name": "RA Recovery v1.7.0H",
        "clockwork": false,
        "url": "http://files.androidspin.com/downloads.php?dir=amon_ra/RECOVERY/&file=recovery-RA-sapphire-v1.7.0H.img"
      }
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
      "version": "2.5.0.7",
      "init": "init.trout.rc",
      "alternate_recovery": {
        "name": "RA Recovery v1.7.0",
        "clockwork": false,
        "url": "http://files.androidspin.com/downloads.php?dir=amon_ra/RECOVERY/&file=recovery-RA-dream-v1.7.0.img"
      }
    },
    {
      "name": "Google Nexus One",
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
      "key": "passion",
      "version": "5.0.2.0",
      "init": "init.mahimahi.rc",
      "alternate_recovery": {
        "name": "RA Recovery v2.2.1",
        "clockwork": false,
        "url": "http://files.androidspin.com/downloads.php?dir=amon_ra/RECOVERY/&file=recovery-RA-passion-v2.2.1.img"
      }
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
      "version": "2.5.0.7",
      "init": "init.hero.rc",
      "alternate_recovery": {
        "name": "RA Recovery v1.7.0.1",
        "clockwork": false,
        "url": "http://files.androidspin.com/downloads.php?dir=amon_ra/RECOVERY/&file=recovery-RA-hero-v1.7.0.1.img"
      }
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
      "version": "2.5.0.7",
      "init": "init.heroc.rc",
      "alternate_recovery": {
        "name": "RA Recovery v1.6.2",
        "clockwork": false,
        "url": "http://www.androidspin.com/downloads.php?dir=amon_ra/RECOVERY/&file=recovery-RA-heroc-v1.6.2.img"
      }
    },
    {
      "name": "HTC Evo",
      "touch_version": "5.8.0.1",
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
      "key": "supersonic",
      "version": "5.0.2.2",
      "init": "init.supersonic.rc",
      "alternate_recovery": {
        "name": "RA Recovery v2.3",
        "clockwork": false,
        "url": "http://files.androidspin.com/downloads.php?dir=amon_ra/RECOVERY/&file=recovery-RA-supersonic-v2.3.img"
      }
    },
    {
      "name": "HTC Legend",
      "readonly_recovery": true,
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
      "key": "legend",
      "version": "5.0.2.0",
      "init": "init.legend.rc"
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
      "key": "bravo",
      "version": "5.0.2.0",
      "init": "init.bravo.rc"
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
      "key": "bravoc",
      "version": "5.0.2.0",
      "init": "init.bravoc.rc"
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
      "version": "2.5.0.7",
      "init": "init.qcom.rc"
    },
    {
      "name": "HTC Incredible (CDMA)",
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
      "key": "inc",
      "version": "5.0.2.0",
      "init": "init.inc.rc",
      "alternate_recovery": {
        "name": "RA_GNM Recovery v3.02",
        "clockwork": false,
        "url": "http://dl.dropbox.com/u/12949506/RomManager/recovery-RA-inc-3.02.img"
      }
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
      "version": "2.5.0.7",
      "init": "init.liberty.rc"
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
      "version": "2.5.0.7",
      "init": "init.desirec.rc",
      "alternate_recovery": {
        "name": "RA Recovery v1.6.2",
        "clockwork": false,
        "url": "http://www.androidspin.com/downloads.php?dir=amon_ra/RECOVERY/&file=recovery-RA-eris-v1.6.2.img"
      }
    },
    {
      "name": "HTC Buzz (Wildfire)",
      "readonly_recovery": true,
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
      "key": "buzz",
      "version": "5.0.2.0",
      "init": "init.buzz.rc"
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
      "version": "2.5.0.7",
      "init": "init.qcom.rc"
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
      "version": "2.5.0.7",
      "init": "init.latte.rc"
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
      "version": "2.5.1.2",
      "init": "lpm.rc"
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
      "version": "3.0.0.8",
      "init": "init.smdkc110.rc"
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
      "version": "2.5.1.2",
      "init": "init.smdkc110.rc"
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
      "version": "2.5.1.2",
      "init": "init.smdkc110.rc"
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
      "version": "2.5.0.7",
      "init": "init.qcom.rc"
    },
    {
      "name": "LGE Ally",
      "legacy_versions": [
        "2.5.0.7",
        "2.5.1.4",
        "2.5.1.3",
        "2.5.1.1"
      ],
      "key": "aloha",
      "version": "2.5.0.7",
      "init": "init.aloha.rc",
      "alternate_recovery": {
        "name": "RA_GNM Recovery v2.2.2",
        "clockwork": false,
        "url": "http://dl.dropbox.com/u/12949506/RomManager/recovery-RA-aloha-2.2.2-GNM.img"
      }
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
      "version": "3.1.0.2",
      "init": "init.mapphone_cdma.rc"
    },
    {
      "name": "Motorola Droid X",
      "readonly_recovery": true,
      "flash_recovery": "dd if=%s of=/preinstall/recovery/recovery.zip ; ",
      "reboot_recovery": "rm /cache/recovery/command ; echo 1 > /data/.recovery_mode ; sync ; reboot ;",
      "legacy_versions": [
        "2.5.0.7"
      ],
      "key": "droidx",
      "version": "5.0.2.0",
      "init": "init.mapphone_cdma.rc"
    },
    {
      "name": "Motorola Droid X (2nd-init)",
      "readonly_recovery": true,
      "lunch": "cyanogen_shadow-eng",
      "flash_recovery": "dd if=%s of=/preinstall/recovery/recovery.zip ; ",
      "reboot_recovery": "rm /cache/recovery/command ; echo 1 > /data/.recovery_mode ; sync ; reboot ;",
      "legacy_versions": [
        "2.5.0.7"
      ],
      "key": "shadow",
      "version": "5.0.2.0",
      "init": "init.mapphone_cdma.rc"
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
      "version": "2.5.1.0",
      "init": "init.salsa.rc"
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
      "version": "2.5.1.3",
      "init": "init.qcom.rc"
    },
    {
      "name": "HTC G2",
      "touch_version": "5.8.1.0",
      "lunch": "cyanogen_vision-eng",
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
      "version": "5.0.2.7",
      "init": "init.vision.rc"
    },
    {
      "name": "HTC MyTouch 4G",
      "touch_version": "5.8.1.0",
      "lunch": "cyanogen_glacier-eng",
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
      "version": "5.0.2.0",
      "init": "init.glacier.rc"
    },
    {
      "name": "HTC Desire HD",
      "touch_version": "5.8.1.5",
      "lunch": "cyanogen_ace-eng",
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
      "version": "5.0.2.0",
      "init": "init.spade.rc"
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
      "key": "morrison",
      "version": "5.0.2.0",
      "init": "init.morrison.rc"
    },
    {
      "name": "Motorola Droid 2",
      "readonly_recovery": true,
      "lunch": "cyanogen_droid2-eng",
      "flash_recovery": "dd if=%s of=/preinstall/recovery/recovery.zip ; ",
      "reboot_recovery": "rm /cache/recovery/command ; echo 1 > /data/.recovery_mode ; sync ; reboot ;",
      "legacy_versions": [
        "2.5.0.8"
      ],
      "key": "droid2",
      "version": "5.0.2.0",
      "init": "init.mapphone_cdma.rc"
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
      "version": "2.5.1.3",
      "init": "init.qcom.rc",
      "alternate_recovery": {
        "name": "ONE Recovery v1.6",
        "clockwork": false,
        "url": "http://dl.dropbox.com/u/10355648/recovery-ONE-1_6.img"
      }
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
      "key": "vega",
      "version": "3.0.2.7",
      "init": "init_recovery.rc"
    },
    {
      "name": "Viewsonic GTab (Deprecated - use smb_a1002)",
      "flash_recovery": "/data/data/com.koushikdutta.rommanager/files/tegra_flash_image recovery %s ; ",
      "legacy_versions": [
        "2.5.1.8",
        "2.5.1.4",
        "2.5.1.3",
        "2.5.1.1"
      ],
      "key": "harmony",
      "version": "2.5.1.8",
      "init": "init.harmony.rc",
      "alternate_recovery": {
        "name": "ClockworkMod 2.5.1.1-bekit-0.8",
        "clockwork": true,
        "url": "http://dropbox.bekit.net/Android/gtablet/recovery/recovery-clockwork-2.5.1.1-bekit-0.8-harmony.img"
      }
    },
    {
      "name": "Galaxy Tab - ATT",
      "readonly_recovery": true,
      "legacy_versions": [
        "2.5.1.8",
        "2.5.1.4",
        "2.5.1.3",
        "2.5.1.1"
      ],
      "key": "att_tab",
      "version": "2.5.1.8",
      "init": "init.smdkc110.rc"
    },
    {
      "name": "Samsung Galaxy Tab - T-Mobile",
      "readonly_recovery": true,
      "legacy_versions": [
        "2.5.1.8",
        "2.5.1.4",
        "2.5.1.3",
        "2.5.1.1"
      ],
      "key": "tmobile_tab",
      "version": "2.5.1.8",
      "init": "init.smdkc110.rc"
    },
    {
      "name": "Spice MI700, Commtiva Link N700 and more)",
      "legacy_versions": [
        "2.5.1.4",
        "2.5.1.3",
        "2.5.1.1",
        "2.5.1.0"
      ],
      "key": "FM6",
      "version": "2.5.1.2",
      "init": "init.qcom.rc",
      "alternate_recovery": {
        "name": "MI700 Recovery v1.6",
        "clockwork": false,
        "url": "http://dl.dropbox.com/u/15816725/MI700-recovery-V1_3.img"
      }
    },
    {
      "name": "Google Nexus S",
      "touch_version": "5.8.0.2",
      "lunch": "cyanogen_crespo-eng",
      "legacy_versions": [
        "3.0.2.4",
        "3.0.0.5",
        "3.0.0.0",
        "2.5.1.8",
        "3.0.2.4",
        "5.0.0.0",
        "5.0.0.8",
        "5.0.1.0"
      ],
      "key": "crespo",
      "version": "5.0.2.0",
      "init": "init.herring.rc"
    },
    {
      "name": "Motorola Droid Pro",
      "readonly_recovery": true,
      "legacy_versions": [
        "2.5.0.8"
      ],
      "key": "droidpro",
      "version": "2.5.0.8",
      "init": "init. mapphone_cdma.rc"
    },
    {
      "name": "Huawei Ascend",
      "legacy_versions": [
        "3.0.0.5",
        "3.0.0.4"
      ],
      "key": "ascend",
      "version": "3.0.0.5",
      "init": "init.qcom.rc"
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
      "key": "blade",
      "version": "5.0.2.0",
      "init": "init.blade.rc"
    },
    {
      "name": "Nook Color",
      "flash_recovery": "busybox mount -orw,remount / ; mkdir /boot ; busybox mount /dev/block/mmcblk0p1 /boot ; busybox unzip -p %1$s ramdisk-recovery.ub > /boot/uRecRam ; busybox unzip -p %1$s kernel > /boot/uRecImg ; busybox umount /boot ; rmdir /boot; busybox mount -oro,remount / ; ",
      "reboot_recovery": "dd if=/dev/zero of=/rom/bcb bs=64 count=1 ; echo 'recovery' >> /rom/bcb ; reboot ;",
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
      "version": "3.2.0.1",
      "init": "env.txt"
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
      "key": "click",
      "version": "5.0.2.0",
      "init": "init.bahamas.rc"
    },
    {
      "name": "Elocity A7",
      "readonly_recovery": true,
      "legacy_versions": [
        "3.0.0.8"
      ],
      "key": "a7",
      "version": "3.0.0.8",
      "init": "init_recovery.rc"
    },
    {
      "name": "Geeksphone Zero",
      "legacy_versions": [
        "3.0.1.3"
      ],
      "key": "zero",
      "version": "3.0.1.3",
      "init": "init.zero.rc"
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
      "key": "speedy",
      "version": "5.0.2.0",
      "init": "init.speedy.rc"
    },
    {
      "name": "Samsung Captivate (MTD)",
      "reboot_recovery": "echo 1 > /cache/.startrecovery ; sync ; reboot ;",
      "legacy_versions": [

      ],
      "key": "captivatemtd",
      "init": "init.aries.rc",
      "officially_supported": false
    },
    {
      "name": "Samsung Showcase (MTD)",
      "reboot_recovery": "echo 1 > /cache/.startrecovery ; sync ; reboot ;",
      "legacy_versions": [

      ],
      "key": "showcasemtd",
      "init": "init.aries.rc",
      "officially_supported": false
    },
    {
      "name": "Samsung Mesmerize (MTD)",
      "reboot_recovery": "echo 1 > /cache/.startrecovery ; sync ; reboot ;",
      "legacy_versions": [

      ],
      "key": "mesmerizemtd",
      "init": "init.aries.rc",
      "officially_supported": false
    },
    {
      "name": "Samsung Fascinate (MTD)",
      "reboot_recovery": "echo 1 > /cache/.startrecovery ; sync ; reboot ;",
      "legacy_versions": [

      ],
      "key": "fascinatemtd",
      "init": "init.aries.rc",
      "officially_supported": false
    },
    {
      "name": "Samsung Vibrant (MTD)",
      "reboot_recovery": "echo 1 > /cache/.startrecovery ; sync ; reboot ;",
      "legacy_versions": [

      ],
      "key": "vibrantmtd",
      "init": "init.aries.rc",
      "officially_supported": false
    },
    {
      "name": "Samsung GalaxyS i9000B (MTD)",
      "reboot_recovery": "echo 1 > /cache/.startrecovery ; sync ; reboot ;",
      "legacy_versions": [

      ],
      "key": "galaxysbmtd",
      "init": "init.aries.rc",
      "officially_supported": false
    },
    {
      "name": "Samsung GalaxyS i9000 (MTD)",
      "reboot_recovery": "echo 1 > /cache/.startrecovery ; sync ; reboot ;",
      "legacy_versions": [

      ],
      "key": "galaxysmtd",
      "init": "init.aries.rc",
      "officially_supported": false
    },
    {
      "name": "Samsung Epic4G",
      "readonly_recovery": true,
      "lunch": "full_epic4g-eng",
      "legacy_versions": [

      ],
      "key": "epic4g",
      "version": "5.0.2.7",
      "init": "lpm.rc"
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
      "version": "3.0.2.0",
      "init": "init.tinyandroid.rc"
    },
    {
      "name": "HTC Thunderbolt",
      "touch_version": "5.8.0.2",
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
      "key": "mecha",
      "version": "5.0.2.1",
      "init": "init.mecha.rc",
      "alternate_recovery": {
        "name": "RA_GNM Recovery v3.05",
        "clockwork": false,
        "url": "http://dl.dropbox.com/u/12949506/RomManager/recovery-ra-mecha-3.05.img"
      }
    },
    {
      "name": "Huawei U8150 Ideos",
      "legacy_versions": [
        "3.0.2.4"
      ],
      "key": "ideos",
      "version": "3.0.2.4",
      "init": "init.ideos.rc"
    },
    {
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
        "4.0.0.1"
      ],
      "key": "stingray",
      "version": "4.0.0.4",
      "init": "init.stingray.rc"
    },
    {
      "name": "HTC HD2",
      "legacy_versions": [
        "3.0.2.5",
        "3.0.2.4",
        "3.0.2.5"
      ],
      "key": "leo",
      "version": "3.1.0.0",
      "init": "init.leo.rc"
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
      "key": "zeppelin",
      "version": "5.0.2.0",
      "init": "init.zeppelin.rc"
    },
    {
      "name": "HTC Desire S",
      "touch_version": "5.8.1.5",
      "lunch": "full_saga-eng",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p21 ; ",
      "legacy_versions": [
        "3.0.2.6",
        "5.0.1.9"
      ],
      "key": "saga",
      "version": "5.0.2.0",
      "init": "init.saga.rc"
    },
    {
      "name": "LG/T-Mobile G2X",
      "readonly_recovery": true,
      "lunch": "cyanogen_p999-eng",
      "reboot_recovery": "echo 'boot-recovery' | dd of=/dev/block/mmcblk0p3 seek=6144 bs=1 ; reboot ; ",
      "legacy_versions": [
        "3.0.2.7",
        "5.0.0.8",
        "5.0.1.0",
        "5.0.1.4",
        "5.0.1.6"
      ],
      "key": "p999",
      "version": "5.0.2.0",
      "init": "init_recovery.rc"
    },
    {
      "name": "LGE Optimus 2X",
      "touch_version": "5.8.1.3",
      "lunch": "cyanogen_p990-eng",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p7 ; ",
      "reboot_recovery": "echo 'boot-recovery' | dd of=/dev/block/mmcblk0p3 seek=6144 bs=1 ; reboot ; ",
      "legacy_versions": [
        "3.0.2.7",
        "3.0.2.7",
        "3.0.2.8",
        "4.0.0.9",
        "5.0.0.8",
        "5.0.1.0",
        "5.0.1.4",
        "5.0.1.6"
      ],
      "inits": [
        "init_recovery.rc",
        "/bootimages/opening_01.rle"
      ],
      "key": "p990",
      "version": "5.0.2.0"
    },
    {
      "name": "Google Nexus S 4G",
      "touch_version": "5.8.0.2",
      "lunch": "cyanogen_crespo4g-eng",
      "legacy_versions": [
        "3.1.0.0",
        "3.1.0.0",
        "3.1.0.1",
        "5.0.0.0",
        "5.0.0.8",
        "5.0.1.0"
      ],
      "key": "crespo4g",
      "version": "5.0.2.0",
      "init": "init.herring.rc"
    },
    {
      "name": "LGE Optimus One (old BB)",
      "lunch": "full_thunderg-eng",
      "legacy_versions": [
        "3.1.0.0",
        "5.0.0.8",
        "5.0.1.0"
      ],
      "key": "thunderg",
      "version": "5.0.2.0",
      "init": "init.thunderg.rc",
      "alternate_recovery": {
        "name": "RA_GNM Recovery v2.2.1",
        "clockwork": false,
        "url": "http://dl.dropbox.com/u/12949506/RomManager/recovery-RA-thunderg-2.2.1-GNM.img"
      }
    },
    {
      "name": "LGE Optimus One",
      "lunch": "cyanogen_p500-eng",
      "legacy_versions": [
        "5.0.2.0"
      ],
      "key": "p500",
      "version": "5.0.2.7",
      "init": "init.thunderg.rc"
    },
    {
      "name": "Huawei U8220/U8230",
      "legacy_versions": [

      ],
      "key": "u8220",
      "version": "3.1.0.1",
      "init": "init.qcom.rc"
    },
    {
      "name": "Samsung Charge",
      "readonly_recovery": true,
      "legacy_versions": [

      ],
      "key": "charge",
      "version": "3.1.0.1",
      "init": "init.smdkc110.rc"
    },
    {
      "name": "Motorola Defy",
      "legacy_versions": [

      ],
      "key": "umts_jordan",
      "init": "init.mapphone_umts.rc",
      "officially_supported": false
    },
    {
      "name": "Samsung GalaxyS 4G",
      "readonly_recovery": true,
      "legacy_versions": [
        "3.2.0.0"
      ],
      "key": "galaxys4g",
      "version": "3.2.0.0",
      "init": "init.smdkc110.rc"
    },
    {
      "name": "Samsung GalaxyS2",
      "touch_version": "5.8.1.5",
      "readonly_recovery": true,
      "legacy_versions": [
        "4.0.1.4",
        "v4.0.1.4"
      ],
      "inits": [
        "init.smdkc210.rc",
        "init.smdk4210.rc"
      ],
      "key": "galaxys2",
      "version": "4.0.1.5",
      "init": "init.smdkc210.rc"
    },
    {
      "name": "Samsung Sidekick 4G",
      "readonly_recovery": true,
      "legacy_versions": [

      ],
      "key": "sidekick4g",
      "version": "4.0.0.2",
      "init": "init.smdkc110.rc"
    },
    {
      "name": "HTC Incredible S",
      "lunch": "cyanogen_vivo-eng",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p21 ; ",
      "legacy_versions": [
        "4.0.0.4",
        "4.0.0.6",
        "4.0.0.7",
        "4.0.0.8",
        "5.0.1.9"
      ],
      "key": "vivo",
      "version": "5.0.2.0",
      "init": "init.vivo.rc"
    },
    {
      "name": "HTC Incredible 2",
      "lunch": "cyanogen_vivow-eng",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p21 ; ",
      "legacy_versions": [
        "4.0.0.4",
        "4.0.0.6",
        "4.0.0.7",
        "4.0.0.8",
        "5.0.1.9"
      ],
      "key": "vivow",
      "version": "5.0.2.0",
      "init": "init.vivow.rc",
      "alternate_recovery": {
        "name": "RA_GNM Recovery v3.05",
        "clockwork": false,
        "url": "http://dl.dropbox.com/u/12949506/RomManager/recovery-ra-vivow-3.05.img"
      }
    },
    {
      "name": "LGE Optimus V",
      "legacy_versions": [

      ],
      "key": "thunderc",
      "version": "3.2.0.1",
      "init": "init.cappuccino.rc"
    },
    {
      "name": "LGE Optimus 3D",
      "touch_version": "5.8.1.5",
      "lunch": "p920-eng",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p6 ; ",
      "reboot_recovery": "echo '518 R 1' > /sys/kernel/kobject_lge_nvdata/dynamic_nvdata_raw_write ; reboot ; ",
      "legacy_versions": [
        "4.0.0.7",
        "4.0.0.9",
        "5.0.1.4",
        "5.0.2.0"
      ],
      "inits": [
        "init.p920.rc",
        "/bootimages/opening_01.rle"
      ],
      "key": "p920",
      "version": "5.0.2.7"
    },
    {
      "name": "Samsung Galaxy Ace",
      "flash_recovery": "/data/data/com.koushikdutta.rommanager/files/flash_image recoveryonly %s ; ",
      "legacy_versions": [

      ],
      "key": "galaxyace",
      "version": "4.0.0.9",
      "init": "init.galaxyace.rc"
    },
    {
      "name": "Motorola Atrix 4G",
      "touch_version": "5.8.1.8",
      "lunch": "generic_olympus-eng",
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
      "inits": [
        "init_prep_keypad.sh",
        "init.olympus.rc"
      ],
      "key": "olympus",
      "version": "5.0.2.0",
      "init": "init_prep_keypad.sh"
    },
    {
      "name": "Viewsonic GTablet (smb_a1002) - Bootloader 1.1",
      "flash_recovery": "/data/data/com.koushikdutta.rommanager/files/tegra_flash_image recovery %s ; ",
      "legacy_versions": [

      ],
      "key": "smb_a1002",
      "version": "4.0.1.5",
      "init": "init_recovery.rc"
    },
    {
      "name": "HTC EVO 3D",
      "touch_version": "5.8.0.2",
      "lunch": "htc_shooter-eng",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p22 ; ",
      "legacy_versions": [
        "4.0.1.5",
        "5.0.0.0",
        "5.0.1.0"
      ],
      "key": "shooter",
      "version": "5.0.2.0",
      "init": "init.shooter.rc"
    },
    {
      "name": "HTC Sensation",
      "touch_version": "5.8.0.9",
      "lunch": "full_pyramid-eng",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p21 ; ",
      "legacy_versions": [
        "4.0.1.5",
        "5.0.0.1",
        "5.0.0.7",
        "5.0.0.8",
        "5.0.1.0"
      ],
      "key": "pyramid",
      "version": "5.0.2.0",
      "init": "init.pyramid.rc"
    },
    {
      "name": "Huawei Ascend 2",
      "legacy_versions": [

      ],
      "key": "ascend2",
      "version": "4.0.1.5",
      "init": "init.qcom.rc"
    },
    {
      "name": "Micromax A70",
      "legacy_versions": [

      ],
      "key": "a70",
      "version": "4.0.1.5",
      "init": "init.qcom.rc"
    },
    {
      "name": "Samsung Galaxy Gio",
      "readonly_recovery": true,
      "legacy_versions": [

      ],
      "key": "galaxygio",
      "version": "4.0.1.5",
      "init": "init.galaxygio.rc"
    },
    {
      "name": "Samsung Indulge 910",
      "readonly_recovery": true,
      "legacy_versions": [

      ],
      "key": "indulge910",
      "version": "4.0.1.5",
      "init": "init.smdkc110.rc"
    },
    {
      "name": "Samsung Indulge 915",
      "readonly_recovery": true,
      "legacy_versions": [

      ],
      "key": "indulge915",
      "version": "4.0.1.5",
      "init": "init.smdkc110.rc"
    },
    {
      "name": "LGE Optimus Black",
      "touch_version": "5.8.1.3",
      "lunch": "p970-eng",
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
        "5.0.2.0"
      ],
      "key": "p970",
      "version": "5.0.2.6",
      "init": "/bootimages/ON_480x800_08fps_0000.rle"
    },
    {
      "name": "HTC EVO 3D (GSM)",
      "touch_version": "5.8.0.2",
      "lunch": "full_shooteru-eng",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p21 ; ",
      "legacy_versions": [
        "5.0.1.6",
        "5.0.1.7",
        "5.0.1.8",
        "5.0.1.9"
      ],
      "key": "shooteru",
      "version": "5.0.2.0",
      "init": "init.shooteru.rc"
    },
    {
      "name": "Motorola Droid 2 Global",
      "readonly_recovery": true,
      "lunch": "cyanogen_droid2we-eng",
      "flash_recovery": "dd if=%s of=/preinstall/recovery/recovery.zip ; ",
      "reboot_recovery": "rm /cache/recovery/command ; echo 1 > /data/.recovery_mode ; sync ; reboot ;",
      "legacy_versions": [

      ],
      "key": "droid2we",
      "version": "5.0.2.3",
      "init": "init.mapphone_cdma.rc"
    },
    {
      "name": "Motorola Droid Bionic",
      "readonly_recovery": true,
      "lunch": "generic_targa-eng",
      "flash_recovery": "dd if=%s of=/preinstall/recovery/recovery.zip ; ",
      "reboot_recovery": "rm /cache/recovery/command ; echo 1 > /data/.recovery_mode ; sync ; reboot ;",
      "legacy_versions": [
        "5.0.2.3",
        "5.0.2.4"
      ],
      "key": "targa",
      "version": "5.0.2.5",
      "init": "init.mapphone_cdma.rc"
    },
    {
      "name": "Motorola Droid X2",
      "readonly_recovery": true,
      "lunch": "generic_daytona-eng",
      "flash_recovery": "dd if=%s of=/preinstall/recovery/recovery.zip ; ",
      "reboot_recovery": "rm /cache/recovery/command ; echo 1 > /data/.recovery_mode ; sync ; reboot ;",
      "legacy_versions": [
        "5.0.2.3",
        "5.0.2.4"
      ],
      "key": "daytona",
      "version": "5.0.2.5",
      "init": "init.mapphone_cdma.rc"
    },
    {
      "name": "Motorola Droid 3",
      "readonly_recovery": true,
      "lunch": "full_solana-eng",
      "flash_recovery": "dd if=%s of=/preinstall/recovery/recovery.zip ; ",
      "reboot_recovery": "rm /cache/recovery/command ; echo 1 > /data/.recovery_mode ; sync ; reboot ;",
      "legacy_versions": [
        "5.0.2.5"
      ],
      "key": "solana",
      "version": "5.0.2.6",
      "init": "init.mapphone_cdma.rc"
    },
    {
      "name": "Motorola Backflip",
      "lunch": "cyanogen_motus-eng",
      "legacy_versions": [

      ],
      "key": "motus",
      "version": "5.0.2.6",
      "init": "init.motus.rc"
    },
    {
      "name": "Samsung Galaxy Mini",
      "readonly_recovery": true,
      "lunch": "tass-eng",
      "legacy_versions": [

      ],
      "key": "tass",
      "version": "5.0.2.6",
      "init": "init.gt-s5570.rc"
    },
    {
      "name": "Huawei U8800",
      "lunch": "huawei_u8800-eng",
      "flash_recovery": "mount -o remount,rw -t vfat /dev/block/mmcblk0p1 /cust_backup ; cat %s > /cust_backup/image/recovery.img ;",
      "legacy_versions": [

      ],
      "key": "u8800",
      "version": "5.0.2.6",
      "init": "init.u8800.rc"
    },
    {
      "name": "Samsung AT&T GalaxyS2",
      "touch_version": "5.8.1.5",
      "readonly_recovery": true,
      "lunch": "cyanogen_galaxys2att-eng",
      "legacy_versions": [

      ],
      "inits": [
        "init.smdkc210.rc",
        "init.smdk4210.rc"
      ],
      "key": "galaxys2att",
      "version": "5.0.2.6",
      "init": "init.smdkc210.rc"
    },
    {
      "name": "Samsung T-Mobile GalaxyS2",
      "touch_version": "5.8.1.3",
      "lunch": "full_hercules-eng",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p22 bs=4096 ; ",
      "legacy_versions": [
        "5.0.2.6"
      ],
      "key": "hercules",
      "version": "5.0.2.7",
      "init": "init.target.rc"
    },
    {
      "name": "Samsung Epic 4G Touch",
      "touch_version": "5.8.1.5",
      "readonly_recovery": true,
      "lunch": "full_epic4gtouch-eng",
      "legacy_versions": [
        "5.0.2.6",
        "5.0.2.7"
      ],
      "key": "epic4gtouch",
      "version": "5.0.2.7",
      "init": "init.smdkc210.rc"
    },
    {
      "name": "HTC Amaze",
      "lunch": "full_ruby-eng",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p23 bs=4096 ; ",
      "legacy_versions": [

      ],
      "key": "ruby",
      "version": "5.0.2.6",
      "init": "init.ruby.rc"
    },
    {
      "name": "Samsung Galaxy 5",
      "readonly_recovery": true,
      "lunch": "samsung_galaxy5-eng",
      "legacy_versions": [
        "5.0.2.8"
      ],
      "key": "galaxy5",
      "version": "5.0.2.8",
      "init": "init.gt-i5500.rc"
    },
    {
      "name": "ZTE Racer",
      "lunch": "generic_mooncake-eng",
      "legacy_versions": [

      ],
      "key": "mooncake",
      "version": "5.0.2.7",
      "init": "init.mooncake.rc"
    },
    {
      "name": "Samsung Galaxy Tab - VZW",
      "readonly_recovery": true,
      "lunch": "full_vzwtab-eng",
      "legacy_versions": [
        "5.0.2.7",
        "5.0.2.7",
        "5.0.2.7"
      ],
      "key": "vzwtab",
      "version": "5.0.2.7",
      "init": "init.smdkc110.rc"
    },
    {
      "name": "HTC MyTouch 4G Slide",
      "lunch": "full_doubleshot-eng",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p21 bs=4096 ; ",
      "legacy_versions": [
        "5.0.2.7",
        "5.0.2.7"
      ],
      "key": "doubleshot",
      "version": "5.0.2.7",
      "init": "init.doubleshot.rc"
    },
    {
      "name": "Google Galaxy Nexus (GSM)",
      "touch_version": "5.8.0.2",
      "lunch": "full_maguro-userdebug",
      "flash_recovery": "dd if=%s of=/dev/block/platform/omap/omap_hsmmc.0/by-name/recovery bs=4096 ;",
      "legacy_versions": [
        "5.5.0.0",
        "5.5.0.1"
      ],
      "key": "maguro",
      "version": "5.5.0.2",
      "init": "init.tuna.rc"
    },
    {
      "name": "Google Galaxy Nexus (Verizon)",
      "touch_version": "5.8.0.2",
      "lunch": "full_toro-eng",
      "flash_recovery": "dd if=%s of=/dev/block/platform/omap/omap_hsmmc.0/by-name/recovery bs=4096 ;",
      "legacy_versions": [
        "5.5.0.2",
        "5.5.0.3"
      ],
      "key": "toro",
      "version": "5.5.0.4",
      "init": "init.tuna.rc"
    },
    {
      "name": "LG Optimus C LW690",
      "lunch": "full_lg690-eng",
      "legacy_versions": [

      ],
      "key": "lg690",
      "version": "5.0.2.7",
      "init": "init.thunderc.rc"
    },
    {
      "name": "LGE Optimus Pro",
      "lunch": "c660-eng",
      "legacy_versions": [

      ],
      "key": "c660",
      "version": "5.0.2.7",
      "init": "init.muscat.rc"
    },
    {
      "name": "LGE Optimus Hub",
      "lunch": "e510-eng",
      "legacy_versions": [

      ],
      "key": "e510",
      "version": "5.0.2.7",
      "init": "init.univa.rc"
    },
    {
      "name": "Samsung Epic4G (MTD)",
      "touch_version": "5.8.1.5",
      "lunch": "cyanogen_epicmtd-eng",
      "reboot_recovery": "/system/xbin/busybox devmem 0x57fff800 32 0x5EC0B007; sync ; reboot ;",
      "legacy_versions": [

      ],
      "key": "epicmtd",
      "version": "5.0.2.7",
      "init": "init.victory.rc",
      "officially_supported": false
    },
    {
      "name": "HTC Holiday",
      "lunch": "full_holiday-eng",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p23 bs=4096 ; ",
      "legacy_versions": [
        "5.0.2.7",
        "5.0.2.7",
        "5.0.2.7"
      ],
      "key": "holiday",
      "version": "5.0.2.7",
      "init": "init.holiday.rc"
    },
    {
      "name": "LG Optimus SOL / TMo LG myTouch",
      "lunch": "e730-eng",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p17 bs=4096 ;",
      "legacy_versions": [

      ],
      "inits": [
        "init.victor.rc",
        "init.e739.rc"
      ],
      "key": "e730",
      "version": "5.0.2.7"
    },
    {
      "name": "HTC Wildfire S",
      "lunch": "generic_marvel-eng",
      "legacy_versions": [
        "5.0.2.7"
      ],
      "key": "marvel",
      "version": "5.0.2.8",
      "init": "init.marvel.rc"
    },
    {
      "name": "Motorola Photon 4G",
      "lunch": "full_sunfire-eng",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p10 bs=4096 ;",
      "legacy_versions": [
        "5.0.2.7"
      ],
      "inits": [
        "init.mapphone_umts.rc",
        "init.mapphone_cdma.rc"
      ],
      "key": "sunfire",
      "version": "5.0.2.8",
      "init": "init.mapphone_umts.rc"
    },
    {
      "name": "LGE Esteem",
      "lunch": "full_esteem-eng",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p14 bs=4096 ;",
      "legacy_versions": [

      ],
      "inits": [
        "init.qcom.rc",
        "init.bryce.rc"
      ],
      "key": "esteem",
      "version": "5.0.2.8",
      "init": "init.qcom.rc"
    },
    {
      "name": "Huawei U8160",
      "lunch": "huawei_u8160-eng",
      "legacy_versions": [
        "5.0.2.8"
      ],
      "inits": [
        "init.huawei.rc",
        "init.u8160.rc"
      ],
      "key": "u8160",
      "version": "5.0.2.8",
      "init": "init.u8160.rc"
    },
    {
      "name": "HTC Rezound",
      "touch_version": "5.8.1.4",
      "lunch": "full_vigor-userdebug",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p23 bs=4096 ;",
      "legacy_versions": [
        "5.5.0.4",
        "5.5.0.5",
        "5.8.1.3",
        "5.8.1.4",
        "5.8.1.4",
        "5.8.1.4"
      ],
      "key": "vigor",
      "version": "5.8.1.4",
      "init": "init.vigor.rc"
    },
    {
      "name": "HTC EVO View 4G",
      "lunch": "full_express-userdebug",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p21 bs=4096 ;",
      "legacy_versions": [

      ],
      "key": "express",
      "version": "5.8.1.5",
      "init": "init.expresskt.rc"
    },
    {
      "name": "Asus Transformer Prime",
      "touch_version": "5.8.3.4",
      "lunch": "cm_tf201-userdebug",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p4 ;",
      "legacy_versions": [
        "5.5.0.4",
        "5.8.2.0"
      ],
      "key": "tf201",
      "version": "5.8.3.4",
      "init": "init.cardhu.rc"
    },
    {
      "name": "Motorola Droid 4",
      "reboot_recovery": "rm /cache/recovery/command ; echo 1 > /data/.recovery_mode ; sync ; reboot ;",
      "legacy_versions": [

      ],
      "key": "maserati",
      "version": "5.0.2.0",
      "init": "init.mapphone_cdma.rc",
      "officially_supported": false
    },
    {
      "name": "Motorola RAZR",
      "reboot_recovery": "rm /cache/recovery/command ; echo 1 > /data/.recovery_mode ; sync ; reboot ;",
      "legacy_versions": [

      ],
      "key": "spyder",
      "version": "5.0.2.0",
      "init": "init.mapphone_cdma.rc",
      "officially_supported": false
    },
    {
      "name": "HTC Wildfire S CDMA",
      "lunch": "full_marvelc-eng",
      "legacy_versions": [

      ],
      "key": "marvelc",
      "version": "5.0.2.8",
      "init": "init.marvelc.rc"
    },
    {
      "name": "Asus Transformer",
      "touch_version": "5.8.3.4",
      "lunch": "cm_tf101-userdebug",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p4 ;",
      "legacy_versions": [
        "5.5.0.4",
        "5.8.1.9",
        "5.8.2.0",
        "5.8.2.1"
      ],
      "key": "tf101",
      "version": "5.8.3.4",
      "init": "init.ventana.rc"
    },
    {
      "name": "AT&T Nitro HD / LGE P930",
      "lunch": "full_p930-userdebug",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p13 ;",
      "legacy_versions": [

      ],
      "key": "p930",
      "version": "5.8.2.0",
      "init": "bootimages/boot_logo_00000.rle"
    },
    {
      "name": "Samsung GalaxyS2 (SGH-I777)",
      "readonly_recovery": true,
      "lunch": "cm_i777-userdebug",
      "legacy_versions": [

      ],
      "inits": [
        "init.smdkc210.rc",
        "init.smdk4210.rc"
      ],
      "key": "i777",
      "version": "5.8.1.8",
      "init": "init.smdkc210.rc"
    },
    {
      "name": "HTC Pico",
      "lunch": "full_pico-eng",
      "legacy_versions": [

      ],
      "key": "pico",
      "version": "5.0.2.8",
      "init": "init.pico.rc"
    },
    {
      "name": "HTC One X (GSM)",
      "touch_version": "5.8.4.0",
      "lunch": "cm_endeavoru-userdebug",
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
      "version": "5.8.4.0",
      "init": "ueventd.endeavoru.rc"
    },
    {
      "name": "HTC One S",
      "touch_version": "5.8.3.1",
      "lunch": "cm_ville-userdebug",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p22 bs=4096 ;",
      "legacy_versions": [
        "5.5.0.4",
        "5.8.2.1",
        "5.8.2.2",
        "5.8.2.3"
      ],
      "key": "ville",
      "version": "5.8.3.1",
      "init": "init.ville.rc"
    },
    {
      "name": "Samsung Galaxy Tab (MTD and GSM)",
      "reboot_recovery": "echo 1 > /cache/.startrecovery ; sync ; reboot ;",
      "legacy_versions": [

      ],
      "key": "p1",
      "version": "5.8.2.1",
      "init": "init.p1.rc",
      "officially_supported": false
    },
    {
      "name": "Samsung Galaxy Tab (MTD and CDMA)",
      "reboot_recovery": "echo 1 > /cache/.startrecovery ; sync ; reboot ;",
      "legacy_versions": [

      ],
      "key": "p1c",
      "version": "5.8.2.1",
      "init": "init.p1c.rc",
      "officially_supported": false
    },
    {
      "name": "Google Galaxy Nexus (Sprint)",
      "touch_version": "5.8.3.1",
      "lunch": "cm_toroplus-userdebug",
      "flash_recovery": "dd if=%s of=/dev/block/platform/omap/omap_hsmmc.0/by-name/recovery bs=4096 ;",
      "legacy_versions": [

      ],
      "key": "toroplus",
      "version": "5.8.3.1",
      "init": "init.tuna.rc"
    },
    {
      "name": "Samsung Galaxy Tab 10.1",
      "touch_version": "5.8.3.1",
      "lunch": "cm_p4wifi-userdebug",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p2 ; ",
      "legacy_versions": [
        "4.0.0.4"
      ],
      "key": "p4wifi",
      "version": "5.8.3.1",
      "init": "ueventd.p3.rc"
    },
    {
      "name": "Motorola XOOM (Wi-Fi only)",
      "touch_version": "5.8.3.1",
      "lunch": "cm_wingray-userdebug",
      "flash_recovery": "dd if=%s of=/dev/block/platform/sdhci-tegra.3/by-name/recovery ; ",
      "legacy_versions": [

      ],
      "key": "wingray",
      "version": "5.8.3.1",
      "init": "init.wingray.rc"
    },
    {
      "name": "LGE Marquee",
      "lunch": "full_marquee-eng",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p4 bs=4096 ; ",
      "legacy_versions": [

      ],
      "key": "marquee",
      "version": "5.0.2.8",
      "init": "init.omap.post_boot.sh"
    },
    {
      "name": "LGE Ignite",
      "lunch": "full_ignite-eng",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p4 bs=4096 ; ",
      "legacy_versions": [

      ],
      "key": "ignite",
      "version": "5.0.2.8",
      "init": "init.omap.post_boot.sh"
    },
    {
      "name": "LG Connect 4G MS840",
      "touch_version": "5.8.3.1",
      "lunch": "full_ms840-userdebug",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p13 bs=4096 ; ",
      "legacy_versions": [

      ],
      "key": "ms840",
      "version": "5.8.3.1",
      "init": "init.target.rc"
    },
    {
      "name": "LG Lucid VS840",
      "touch_version": "5.8.3.1",
      "lunch": "full_vs840-userdebug",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p13 bs=4096 ; ",
      "legacy_versions": [

      ],
      "key": "vs840",
      "version": "5.8.3.1",
      "init": "init.target.rc"
    },
    {
      "name": "HTC EVO LTE",
      "touch_version": "5.8.3.5",
      "lunch": "cm_jewel-userdebug",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p22 bs=4096 ; ",
      "legacy_versions": [
        "5.8.3.4",
        "5.8.3.4"
      ],
      "key": "jewel",
      "version": "5.8.3.5",
      "init": "init.jewel.rc"
    },
    {
      "name": "Samsung Galaxy S3",
      "touch_version": "5.8.4.5",
      "lunch": "cm_i9300-userdebug",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p6 bs=4096 ; ",
      "legacy_versions": [
        "5.8.4.0",
        "5.8.4.1",
        "5.8.4.2",
        "5.8.4.3",
        "5.8.4.4"
      ],
      "key": "i9300",
      "version": "5.8.4.5",
      "init": "ueventd.smdk4x12.rc"
    },
    {
      "name": "Samsung Skyrocket",
      "touch_version": "5.8.4.3",
      "lunch": "cm_skyrocket-userdebug",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p22 bs=4096 ; ",
      "legacy_versions": [

      ],
      "key": "skyrocket",
      "version": "5.8.4.3",
      "init": "init.qcom.usb.rc"
    },
    {
      "name": "Samsung Galaxy Note (AT&T)",
      "touch_version": "5.8.4.3",
      "lunch": "cm_quincyatt-userdebug",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p22 bs=4096 ; ",
      "legacy_versions": [

      ],
      "key": "quincyatt",
      "version": "5.8.4.3",
      "init": "init.qcom.usb.rc"
    },
    {
      "name": "LGE Optimus L3",
      "lunch": "cm_e400-userdebug",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p17 bs=4096 ; ",
      "legacy_versions": [

      ],
      "key": "e400",
      "version": "5.8.4.5",
      "init": "init.e0.rc"
    },
    {
      "name": "HTC One V",
      "readonly_recovery": true,
      "lunch": "cm_primou-userdebug",
      "legacy_versions": [

      ],
      "key": "primou",
      "version": "5.8.4.5",
      "init": "init.primou.rc"
    },
    {
      "name": "Samsung Galaxy S3 (AT&T)",
      "touch_version": "5.8.4.6",
      "lunch": "cm_d2att-userdebug",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p18 bs=4096 ; ",
      "legacy_versions": [
        "5.8.4.5"
      ],
      "key": "d2att",
      "version": "5.8.4.6",
      "init": "init.d2att.rc"
    },
    {
      "name": "Samsung Galaxy S3 (T-Mobile)",
      "touch_version": "5.8.4.6",
      "lunch": "cm_d2tmo-userdebug",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p18 bs=4096 ; ",
      "legacy_versions": [
        "5.8.4.5"
      ],
      "key": "d2tmo",
      "version": "5.8.4.6",
      "init": "init.d2tmo.rc"
    },
    {
      "name": "Samsung Galaxy S3 (Sprint)",
      "touch_version": "5.8.4.6",
      "lunch": "cm_d2spr-userdebug",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p18 bs=4096 ; ",
      "legacy_versions": [
        "5.8.4.5"
      ],
      "key": "d2spr",
      "version": "5.8.4.6",
      "init": "init.d2spr.rc"
    },
    {
      "name": "Samsung Galaxy S3 (Verizon)",
      "touch_version": "5.8.4.6",
      "lunch": "cm_d2vzw-userdebug",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p18 bs=4096 ; ",
      "legacy_versions": [

      ],
      "key": "d2vzw",
      "version": "5.8.4.6",
      "init": "init.d2vzw.rc"
    },
    {
      "name": "HTC One V (CDMA)",
      "readonly_recovery": true,
      "lunch": "full_primoc-userdebug",
      "legacy_versions": [

      ],
      "version": "5.8.4.6",
      "key": "primoc",
      "init": "init.primoc.rc"
    }
  ],
  "pontiflex_downloading": 100,
  "version": "2.5.0.1",
  "keywords": "phone accessories,droid,gadgets,bluetooth headset,car charger,sd card",
  "pontiflex_startup_ad": 100,
  "ad_network": "admob"
}