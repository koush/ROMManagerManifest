{
  "version": "2.5.0.1",
  "owners": {
    "cvpcsm@gmail.com": true,
    "bigbeeshane@gmail.com": true,
    "playfulgod@gmail.com": true,
    "daniel.hillenbrand@codeworkx.de": true,
    "koush@clockworkmod.com": true
  },
  "pontiflex_startup_ad": 100,
  "recovery_url": "http://download2.clockworkmod.com/recoveries/recovery-clockwork-%s-%s.img",
  "manifest": "http://developer.clockworkmod.com/merge",
  "devices": [
    {
      "version": "2.5.0.1",
      "init": "init.sholes.rc",
      "legacy_versions": [
        "3.1.0.2",
        "2.5.1.4",
        "2.5.1.3",
        "2.5.1.1",
        "2.5.0.1"
      ],
      "key": "sholes",
      "name": "Motorola Droid",
      "alternate_recovery": {
        "url": "http://koush.kanged.net/cm/recoveries/sprecovery.img",
        "clockwork": false,
        "name": "SPRecovery 0.99.3b"
      }
    },
    {
      "version": "2.5.0.7",
      "init": "init.sapphire.rc",
      "legacy_versions": [
        "2.5.0.7",
        "2.5.1.4",
        "2.5.1.3",
        "2.5.1.1"
      ],
      "key": "sapphire",
      "name": "HTC MyTouch 3G",
      "alternate_recovery": {
        "url": "http://files.androidspin.com/downloads.php?dir=amon_ra/RECOVERY/&file=recovery-RA-sapphire-v1.7.0G.img",
        "clockwork": false,
        "name": "RA Recovery v1.7.0G"
      }
    },
    {
      "version": "2.5.0.7",
      "init": "init.sapphire.rc",
      "legacy_versions": [
        "2.5.0.7",
        "2.5.1.4",
        "2.5.1.3",
        "2.5.1.1"
      ],
      "key": "magic",
      "name": "HTC Magic",
      "alternate_recovery": {
        "url": "http://files.androidspin.com/downloads.php?dir=amon_ra/RECOVERY/&file=recovery-RA-sapphire-v1.7.0H.img",
        "clockwork": false,
        "name": "RA Recovery v1.7.0H"
      }
    },
    {
      "version": "2.5.0.7",
      "init": "init.trout.rc",
      "legacy_versions": [
        "2.5.0.7",
        "2.5.1.4",
        "2.5.1.3",
        "2.5.1.1"
      ],
      "key": "dream",
      "name": "HTC G1/Dream",
      "alternate_recovery": {
        "url": "http://files.androidspin.com/downloads.php?dir=amon_ra/RECOVERY/&file=recovery-RA-dream-v1.7.0.img",
        "clockwork": false,
        "name": "RA Recovery v1.7.0"
      }
    },
    {
      "version": "5.0.2.0",
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
      "key": "passion",
      "name": "Google Nexus One",
      "alternate_recovery": {
        "url": "http://files.androidspin.com/downloads.php?dir=amon_ra/RECOVERY/&file=recovery-RA-passion-v2.2.1.img",
        "clockwork": false,
        "name": "RA Recovery v2.2.1"
      },
      "lunch": "cyanogen_passion-eng"
    },
    {
      "version": "2.5.0.7",
      "init": "init.hero.rc",
      "legacy_versions": [
        "2.5.0.7",
        "2.5.1.4",
        "2.5.1.3",
        "2.5.1.1"
      ],
      "key": "hero",
      "name": "HTC Hero (GSM)",
      "alternate_recovery": {
        "url": "http://files.androidspin.com/downloads.php?dir=amon_ra/RECOVERY/&file=recovery-RA-hero-v1.7.0.1.img",
        "clockwork": false,
        "name": "RA Recovery v1.7.0.1"
      }
    },
    {
      "version": "2.5.0.7",
      "init": "init.heroc.rc",
      "legacy_versions": [
        "2.5.0.7",
        "2.5.1.4",
        "2.5.1.3",
        "2.5.1.1"
      ],
      "key": "heroc",
      "name": "HTC Hero (CDMA)",
      "alternate_recovery": {
        "url": "http://www.androidspin.com/downloads.php?dir=amon_ra/RECOVERY/&file=recovery-RA-heroc-v1.6.2.img",
        "clockwork": false,
        "name": "RA Recovery v1.6.2"
      }
    },
    {
      "version": "5.0.2.2",
      "init": "init.supersonic.rc",
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
      "name": "HTC Evo",
      "alternate_recovery": {
        "url": "http://files.androidspin.com/downloads.php?dir=amon_ra/RECOVERY/&file=recovery-RA-supersonic-v2.3.img",
        "clockwork": false,
        "name": "RA Recovery v2.3"
      },
      "lunch": "cyanogen_supersonic-eng"
    },
    {
      "version": "5.0.2.0",
      "readonly_recovery": true,
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
      ],
      "key": "legend",
      "name": "HTC Legend",
      "lunch": "cyanogen_legend-eng"
    },
    {
      "version": "5.0.2.0",
      "init": "init.bravo.rc",
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
      "name": "HTC Desire",
      "lunch": "cyanogen_bravo-eng"
    },
    {
      "version": "5.0.2.0",
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
      "key": "bravoc",
      "name": "HTC Desire CDMA",
      "lunch": "cyanogen_bravoc-eng"
    },
    {
      "version": "2.5.0.7",
      "init": "init.qcom.rc",
      "legacy_versions": [
        "2.5.0.7",
        "2.5.1.4",
        "2.5.1.3",
        "2.5.1.1"
      ],
      "key": "pulsemini",
      "name": "Huawei Pulse Mini"
    },
    {
      "version": "5.0.2.0",
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
      "key": "inc",
      "name": "HTC Incredible (CDMA)",
      "alternate_recovery": {
        "url": "http://dl.dropbox.com/u/12949506/RomManager/recovery-RA-inc-3.02.img",
        "clockwork": false,
        "name": "RA_GNM Recovery v3.02"
      },
      "lunch": "cyanogen_inc-eng"
    },
    {
      "version": "2.5.0.7",
      "readonly_recovery": true,
      "init": "init.liberty.rc",
      "legacy_versions": [
        "2.5.0.7",
        "2.5.1.4",
        "2.5.1.3",
        "2.5.1.1"
      ],
      "key": "liberty",
      "name": "HTC Aria"
    },
    {
      "version": "2.5.0.7",
      "readonly_recovery": true,
      "init": "init.desirec.rc",
      "legacy_versions": [
        "2.5.0.7",
        "2.5.1.4",
        "2.5.1.3",
        "2.5.1.1"
      ],
      "key": "desirec",
      "name": "Motorola Droid Eris",
      "alternate_recovery": {
        "url": "http://www.androidspin.com/downloads.php?dir=amon_ra/RECOVERY/&file=recovery-RA-eris-v1.6.2.img",
        "clockwork": false,
        "name": "RA Recovery v1.6.2"
      }
    },
    {
      "version": "5.0.2.0",
      "readonly_recovery": true,
      "init": "init.buzz.rc",
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
      "name": "HTC Buzz (Wildfire)",
      "lunch": "cyanogen_buzz-eng"
    },
    {
      "version": "2.5.0.7",
      "init": "init.qcom.rc",
      "legacy_versions": [
        "2.5.0.7",
        "2.5.1.4",
        "2.5.1.3",
        "2.5.1.1"
      ],
      "key": "streak",
      "name": "Dell Streak"
    },
    {
      "version": "2.5.0.7",
      "readonly_recovery": true,
      "init": "init.latte.rc",
      "legacy_versions": [
        "2.5.0.7",
        "2.5.1.4",
        "2.5.1.3",
        "2.5.1.1"
      ],
      "key": "espresso",
      "name": "HTC MyTouch Slide"
    },
    {
      "version": "2.5.1.2",
      "readonly_recovery": true,
      "init": "lpm.rc",
      "legacy_versions": [
        "2.5.1.2",
        "2.5.1.4",
        "2.5.1.3",
        "2.5.1.1"
      ],
      "key": "galaxys",
      "name": "Samsung GalaxyS i9000"
    },
    {
      "version": "3.0.0.8",
      "readonly_recovery": true,
      "init": "init.smdkc110.rc",
      "legacy_versions": [
        "3.0.0.8",
        "2.5.1.4",
        "2.5.1.3",
        "2.5.1.1"
      ],
      "key": "fascinate",
      "name": "Samsung GalaxyS Fascinate"
    },
    {
      "version": "2.5.1.2",
      "readonly_recovery": true,
      "init": "init.smdkc110.rc",
      "legacy_versions": [
        "2.5.1.2",
        "2.5.1.4",
        "2.5.1.3",
        "2.5.1.1"
      ],
      "key": "vibrant",
      "name": "Samsung GalaxyS Vibrant"
    },
    {
      "version": "2.5.1.2",
      "readonly_recovery": true,
      "init": "init.smdkc110.rc",
      "legacy_versions": [
        "2.5.1.2",
        "2.5.1.4",
        "2.5.1.3",
        "2.5.1.1"
      ],
      "key": "captivate",
      "name": "Samsung GalaxyS Captivate"
    },
    {
      "version": "2.5.0.7",
      "init": "init.qcom.rc",
      "legacy_versions": [
        "2.5.0.7",
        "2.5.1.4",
        "2.5.1.3",
        "2.5.1.1"
      ],
      "key": "pulse",
      "name": "Huawei Pulse"
    },
    {
      "version": "2.5.0.7",
      "init": "init.aloha.rc",
      "legacy_versions": [
        "2.5.0.7",
        "2.5.1.4",
        "2.5.1.3",
        "2.5.1.1"
      ],
      "key": "aloha",
      "name": "LGE Ally",
      "alternate_recovery": {
        "url": "http://dl.dropbox.com/u/12949506/RomManager/recovery-RA-aloha-2.2.2-GNM.img",
        "clockwork": false,
        "name": "RA_GNM Recovery v2.2.2"
      }
    },
    {
      "version": "3.1.0.2",
      "readonly_recovery": true,
      "init": "init.mapphone_cdma.rc",
      "legacy_versions": [
        "2.5.0.7",
        "2.5.1.4",
        "2.5.1.3",
        "2.5.1.1",
        "2.5.0.7"
      ],
      "key": "milestone",
      "name": "Motorola Milestone"
    },
    {
      "reboot_recovery": "rm /cache/recovery/command ; echo 1 > /data/.recovery_mode ; sync ; reboot ;",
      "version": "5.0.2.0",
      "readonly_recovery": true,
      "init": "init.mapphone_cdma.rc",
      "flash_recovery": "dd if=%s of=/preinstall/recovery/recovery.zip ; ",
      "legacy_versions": [
        "2.5.0.7"
      ],
      "key": "droidx",
      "name": "Motorola Droid X"
    },
    {
      "reboot_recovery": "rm /cache/recovery/command ; echo 1 > /data/.recovery_mode ; sync ; reboot ;",
      "version": "5.0.2.0",
      "readonly_recovery": true,
      "init": "init.mapphone_cdma.rc",
      "flash_recovery": "dd if=%s of=/preinstall/recovery/recovery.zip ; ",
      "legacy_versions": [
        "2.5.0.7"
      ],
      "key": "shadow",
      "name": "Motorola Droid X (2nd-init)",
      "lunch": "cyanogen_shadow-eng"
    },
    {
      "version": "2.5.1.0",
      "init": "init.salsa.rc",
      "legacy_versions": [
        "2.5.1.4",
        "2.5.1.3",
        "2.5.1.1",
        "2.5.1.0"
      ],
      "key": "salsa",
      "name": "Acer Liquid"
    },
    {
      "version": "2.5.1.3",
      "init": "init.qcom.rc",
      "legacy_versions": [
        "2.5.1.4",
        "2.5.1.3",
        "2.5.1.1",
        "2.5.1.0"
      ],
      "key": "z71",
      "name": "Commtiva Z71 (Boston, Blaze, and more)"
    },
    {
      "version": "5.0.2.7",
      "init": "init.vision.rc",
      "flash_recovery": "dd if=/dev/zero of=/dev/block/mmcblk0p21 bs=4096 ; dd if=%s of=/dev/block/mmcblk0p21 bs=4096 ; ",
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
      "key": "vision",
      "name": "HTC G2",
      "lunch": "cyanogen_vision-eng"
    },
    {
      "version": "5.0.2.0",
      "init": "init.glacier.rc",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p21 ; ",
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
      "key": "glacier",
      "name": "HTC MyTouch 4G",
      "lunch": "cyanogen_glacier-eng"
    },
    {
      "version": "5.0.2.0",
      "init": "init.spade.rc",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p21 ; ",
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
      "key": "ace",
      "name": "HTC Desire HD",
      "lunch": "cyanogen_ace-eng"
    },
    {
      "version": "5.0.2.0",
      "init": "init.morrison.rc",
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
      "name": "Motorola Cliq",
      "lunch": "cyanogen_morrison-eng"
    },
    {
      "reboot_recovery": "rm /cache/recovery/command ; echo 1 > /data/.recovery_mode ; sync ; reboot ;",
      "version": "5.0.2.0",
      "readonly_recovery": true,
      "init": "init.mapphone_cdma.rc",
      "flash_recovery": "dd if=%s of=/preinstall/recovery/recovery.zip ; ",
      "legacy_versions": [
        "2.5.0.8"
      ],
      "key": "droid2",
      "name": "Motorola Droid 2",
      "lunch": "cyanogen_droid2-eng"
    },
    {
      "version": "2.5.1.3",
      "init": "init.qcom.rc",
      "legacy_versions": [
        "2.5.1.4",
        "2.5.1.3",
        "2.5.1.1",
        "2.5.1.0"
      ],
      "key": "one",
      "name": "Geeksphone ONE",
      "alternate_recovery": {
        "url": "http://dl.dropbox.com/u/10355648/recovery-ONE-1_6.img",
        "clockwork": false,
        "name": "ONE Recovery v1.6"
      }
    },
    {
      "reboot_recovery": "echo start > /proc/ota ; ",
      "version": "3.0.2.7",
      "init": "init_recovery.rc",
      "flash_recovery": "/data/data/com.koushikdutta.rommanager/files/tegra_flash_image recovery %s ; ",
      "legacy_versions": [
        "2.5.1.4",
        "2.5.1.3",
        "2.5.1.1",
        "2.5.1.0",
        "2.5.1.4"
      ],
      "key": "vega",
      "name": "Advent Vega"
    },
    {
      "version": "2.5.1.8",
      "init": "init.harmony.rc",
      "flash_recovery": "/data/data/com.koushikdutta.rommanager/files/tegra_flash_image recovery %s ; ",
      "legacy_versions": [
        "2.5.1.8",
        "2.5.1.4",
        "2.5.1.3",
        "2.5.1.1"
      ],
      "key": "harmony",
      "name": "Viewsonic GTab (Deprecated - use smb_a1002)",
      "alternate_recovery": {
        "url": "http://dropbox.bekit.net/Android/gtablet/recovery/recovery-clockwork-2.5.1.1-bekit-0.8-harmony.img",
        "clockwork": true,
        "name": "ClockworkMod 2.5.1.1-bekit-0.8"
      }
    },
    {
      "version": "2.5.1.8",
      "readonly_recovery": true,
      "init": "init.smdkc110.rc",
      "legacy_versions": [
        "2.5.1.8",
        "2.5.1.4",
        "2.5.1.3",
        "2.5.1.1"
      ],
      "key": "att_tab",
      "name": "Galaxy Tab - ATT"
    },
    {
      "version": "2.5.1.8",
      "readonly_recovery": true,
      "init": "init.smdkc110.rc",
      "legacy_versions": [
        "2.5.1.8",
        "2.5.1.4",
        "2.5.1.3",
        "2.5.1.1"
      ],
      "key": "tmobile_tab",
      "name": "Samsung Galaxy Tab (T-Mobile)"
    },
    {
      "version": "2.5.1.2",
      "init": "init.qcom.rc",
      "legacy_versions": [
        "2.5.1.4",
        "2.5.1.3",
        "2.5.1.1",
        "2.5.1.0"
      ],
      "key": "FM6",
      "name": "Spice MI700, Commtiva Link N700 and more)",
      "alternate_recovery": {
        "url": "http://dl.dropbox.com/u/15816725/MI700-recovery-V1_3.img",
        "clockwork": false,
        "name": "MI700 Recovery v1.6"
      }
    },
    {
      "version": "6.0.1.0",
      "init": "init.herring.rc",
      "touch_version": "6.0.1.0",
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
      "key": "crespo",
      "name": "Google Nexus S",
      "lunch": "cm_crespo-userdebug"
    },
    {
      "version": "2.5.0.8",
      "readonly_recovery": true,
      "init": "init. mapphone_cdma.rc",
      "legacy_versions": [
        "2.5.0.8"
      ],
      "key": "droidpro",
      "name": "Motorola Droid Pro"
    },
    {
      "version": "3.0.0.5",
      "init": "init.qcom.rc",
      "legacy_versions": [
        "3.0.0.5",
        "3.0.0.4"
      ],
      "key": "ascend",
      "name": "Huawei Ascend"
    },
    {
      "version": "5.0.2.0",
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
      "key": "blade",
      "name": "ZTE Blade",
      "lunch": "cyanogen_blade-eng"
    },
    {
      "reboot_recovery": "dd if=/dev/zero of=/rom/bcb bs=64 count=1 ; echo 'recovery' >> /rom/bcb ; reboot ;",
      "version": "3.2.0.1",
      "init": "env.txt",
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
      "inits": [
        "env.txt",
        "init.encore.rc"
      ],
      "name": "Nook Color"
    },
    {
      "version": "5.0.2.0",
      "init": "init.bahamas.rc",
      "legacy_versions": [
        "3.0.0.6",
        "3.0.0.6",
        "3.0.2.7",
        "5.0.0.8",
        "5.0.1.0"
      ],
      "key": "click",
      "name": "HTC Click/Tattoo",
      "lunch": "cyanogen_click-eng"
    },
    {
      "version": "3.0.0.8",
      "readonly_recovery": true,
      "init": "init_recovery.rc",
      "legacy_versions": [
        "3.0.0.8"
      ],
      "key": "a7",
      "name": "Elocity A7"
    },
    {
      "version": "3.0.1.3",
      "init": "init.zero.rc",
      "legacy_versions": [
        "3.0.1.3"
      ],
      "key": "zero",
      "name": "Geeksphone Zero"
    },
    {
      "version": "5.0.2.0",
      "init": "init.speedy.rc",
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
      "name": "HTC Evo Shift",
      "lunch": "cyanogen_speedy-eng"
    },
    {
      "reboot_recovery": "echo 1 > /cache/.startrecovery ; sync ; reboot ;",
      "init": "init.aries.rc",
      "officially_supported": false,
      "legacy_versions": [

      ],
      "key": "captivatemtd",
      "name": "Samsung Captivate (MTD)"
    },
    {
      "reboot_recovery": "echo 1 > /cache/.startrecovery ; sync ; reboot ;",
      "init": "init.aries.rc",
      "officially_supported": false,
      "legacy_versions": [

      ],
      "key": "showcasemtd",
      "name": "Samsung Showcase (MTD)"
    },
    {
      "reboot_recovery": "echo 1 > /cache/.startrecovery ; sync ; reboot ;",
      "init": "init.aries.rc",
      "officially_supported": false,
      "legacy_versions": [

      ],
      "key": "mesmerizemtd",
      "name": "Samsung Mesmerize (MTD)"
    },
    {
      "reboot_recovery": "echo 1 > /cache/.startrecovery ; sync ; reboot ;",
      "init": "init.aries.rc",
      "officially_supported": false,
      "legacy_versions": [

      ],
      "key": "fascinatemtd",
      "name": "Samsung Fascinate (MTD)"
    },
    {
      "reboot_recovery": "echo 1 > /cache/.startrecovery ; sync ; reboot ;",
      "init": "init.aries.rc",
      "officially_supported": false,
      "legacy_versions": [

      ],
      "key": "vibrantmtd",
      "name": "Samsung Vibrant (MTD)"
    },
    {
      "reboot_recovery": "echo 1 > /cache/.startrecovery ; sync ; reboot ;",
      "init": "init.aries.rc",
      "officially_supported": false,
      "legacy_versions": [

      ],
      "key": "galaxysbmtd",
      "name": "Samsung GalaxyS i9000B (MTD)"
    },
    {
      "reboot_recovery": "echo 1 > /cache/.startrecovery ; sync ; reboot ;",
      "init": "init.aries.rc",
      "officially_supported": false,
      "legacy_versions": [

      ],
      "key": "galaxysmtd",
      "name": "Samsung GalaxyS i9000 (MTD)"
    },
    {
      "version": "5.0.2.7",
      "readonly_recovery": true,
      "init": "lpm.rc",
      "legacy_versions": [

      ],
      "key": "epic4g",
      "name": "Samsung Epic4G",
      "lunch": "full_epic4g-eng"
    },
    {
      "version": "3.0.2.0",
      "init": "init.tinyandroid.rc",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk3p1 ; ",
      "legacy_versions": [
        "3.0.2.0",
        "3.0.1.9",
        "3.0.1.8",
        "3.0.1.7"
      ],
      "key": "streak7",
      "name": "Dell Streak 7"
    },
    {
      "version": "5.0.2.1",
      "init": "init.mecha.rc",
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
      "name": "HTC Thunderbolt",
      "alternate_recovery": {
        "url": "http://dl.dropbox.com/u/12949506/RomManager/recovery-ra-mecha-3.05.img",
        "clockwork": false,
        "name": "RA_GNM Recovery v3.05"
      },
      "lunch": "cyanogen_mecha-eng"
    },
    {
      "version": "3.0.2.4",
      "init": "init.ideos.rc",
      "legacy_versions": [
        "3.0.2.4"
      ],
      "key": "ideos",
      "name": "Huawei U8150 Ideos"
    },
    {
      "version": "4.0.0.4",
      "init": "init.stingray.rc",
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
      "name": "Motorola XOOM"
    },
    {
      "version": "3.1.0.0",
      "init": "init.leo.rc",
      "legacy_versions": [
        "3.0.2.5",
        "3.0.2.4",
        "3.0.2.5"
      ],
      "key": "leo",
      "name": "HTC HD2"
    },
    {
      "version": "5.0.2.0",
      "init": "init.zeppelin.rc",
      "legacy_versions": [
        "3.0.2.4",
        "3.0.2.4",
        "5.0.0.8",
        "5.0.0.8",
        "5.0.1.0",
        "5.0.1.0"
      ],
      "key": "zeppelin",
      "name": "Motorola CLIQ XT/Quench (MB501)",
      "lunch": "cyanogen_zeppelin-eng"
    },
    {
      "version": "5.0.2.0",
      "init": "init.saga.rc",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p21 ; ",
      "touch_version": "5.8.1.5",
      "legacy_versions": [
        "3.0.2.6",
        "5.0.1.9"
      ],
      "key": "saga",
      "name": "HTC Desire S",
      "lunch": "full_saga-eng"
    },
    {
      "reboot_recovery": "echo 'boot-recovery' | dd of=/dev/block/mmcblk0p3 seek=6144 bs=1 ; reboot ; ",
      "version": "5.0.2.0",
      "readonly_recovery": true,
      "init": "init_recovery.rc",
      "legacy_versions": [
        "3.0.2.7",
        "5.0.0.8",
        "5.0.1.0",
        "5.0.1.4",
        "5.0.1.6"
      ],
      "key": "p999",
      "name": "LG/T-Mobile G2X",
      "lunch": "cyanogen_p999-eng"
    },
    {
      "reboot_recovery": "echo 'boot-recovery' | dd of=/dev/block/mmcblk0p3 seek=6144 bs=1 ; reboot ; ",
      "version": "5.0.2.0",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p7 ; ",
      "touch_version": "5.8.1.3",
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
      "key": "p990",
      "inits": [
        "init_recovery.rc",
        "/bootimages/opening_01.rle"
      ],
      "name": "LGE Optimus 2X",
      "lunch": "cyanogen_p990-eng"
    },
    {
      "version": "6.0.1.0",
      "init": "init.herring.rc",
      "touch_version": "6.0.1.0",
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
      "key": "crespo4g",
      "name": "Google Nexus S 4G",
      "lunch": "cm_crespo4g-userdebug"
    },
    {
      "version": "5.0.2.0",
      "init": "init.thunderg.rc",
      "legacy_versions": [
        "3.1.0.0",
        "5.0.0.8",
        "5.0.1.0"
      ],
      "key": "thunderg",
      "name": "LGE Optimus One (old BB)",
      "alternate_recovery": {
        "url": "http://dl.dropbox.com/u/12949506/RomManager/recovery-RA-thunderg-2.2.1-GNM.img",
        "clockwork": false,
        "name": "RA_GNM Recovery v2.2.1"
      },
      "lunch": "full_thunderg-eng"
    },
    {
      "version": "5.0.2.7",
      "init": "init.thunderg.rc",
      "legacy_versions": [
        "5.0.2.0"
      ],
      "key": "p500",
      "name": "LGE Optimus One",
      "lunch": "cyanogen_p500-eng"
    },
    {
      "version": "3.1.0.1",
      "init": "init.qcom.rc",
      "legacy_versions": [

      ],
      "key": "u8220",
      "name": "Huawei U8220/U8230"
    },
    {
      "version": "3.1.0.1",
      "readonly_recovery": true,
      "init": "init.smdkc110.rc",
      "legacy_versions": [

      ],
      "key": "charge",
      "name": "Samsung Charge"
    },
    {
      "init": "init.mapphone_umts.rc",
      "officially_supported": false,
      "legacy_versions": [

      ],
      "key": "umts_jordan",
      "name": "Motorola Defy"
    },
    {
      "version": "3.2.0.0",
      "readonly_recovery": true,
      "init": "init.smdkc110.rc",
      "legacy_versions": [
        "3.2.0.0"
      ],
      "key": "galaxys4g",
      "name": "Samsung Galaxy S 4G"
    },
    {
      "version": "4.0.1.5",
      "readonly_recovery": true,
      "init": "init.smdkc210.rc",
      "touch_version": "5.8.1.5",
      "legacy_versions": [
        "4.0.1.4",
        "v4.0.1.4"
      ],
      "key": "galaxys2",
      "inits": [
        "init.smdkc210.rc",
        "init.smdk4210.rc"
      ],
      "name": "Samsung Galaxy S2 (galaxys2)"
    },
    {
      "version": "6.0.1.0",
      "init": "init.smdk4210.rc",
      "officially_supported": false,
      "legacy_versions": [

      ],
      "key": "i9100",
      "inits": [
        "init.smdkc210.rc",
        "init.smdk4210.rc"
      ],
      "name": "Samsung Galaxy S2 (GT-I9100)",
      "lunch": "cm_i9100-userdebug"
    },
    {
      "version": "6.0.1.2",
      "readonly_recovery": true,
      "init": "init.smdk4210.rc",
      "legacy_versions": [
        "6.0.1.0"
      ],
      "key": "n7000",
      "name": "Samsung Galaxy Note (GT-N7000)",
      "lunch": "cm_n7000-userdebug"
    },
    {
      "version": "4.0.0.2",
      "readonly_recovery": true,
      "init": "init.smdkc110.rc",
      "legacy_versions": [

      ],
      "key": "sidekick4g",
      "name": "Samsung Sidekick 4G"
    },
    {
      "version": "5.0.2.0",
      "init": "init.vivo.rc",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p21 ; ",
      "legacy_versions": [
        "4.0.0.4",
        "4.0.0.6",
        "4.0.0.7",
        "4.0.0.8",
        "5.0.1.9"
      ],
      "key": "vivo",
      "name": "HTC Incredible S",
      "lunch": "cyanogen_vivo-eng"
    },
    {
      "version": "5.0.2.0",
      "init": "init.vivow.rc",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p21 ; ",
      "legacy_versions": [
        "4.0.0.4",
        "4.0.0.6",
        "4.0.0.7",
        "4.0.0.8",
        "5.0.1.9"
      ],
      "key": "vivow",
      "name": "HTC Incredible 2",
      "alternate_recovery": {
        "url": "http://dl.dropbox.com/u/12949506/RomManager/recovery-ra-vivow-3.05.img",
        "clockwork": false,
        "name": "RA_GNM Recovery v3.05"
      },
      "lunch": "cyanogen_vivow-eng"
    },
    {
      "reboot_recovery": "echo '518 R 1' > /sys/kernel/kobject_lge_nvdata/dynamic_nvdata_raw_write ; reboot ; ",
      "version": "5.0.2.7",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p6 ; ",
      "touch_version": "5.8.1.5",
      "legacy_versions": [
        "4.0.0.7",
        "4.0.0.9",
        "5.0.1.4",
        "5.0.2.0"
      ],
      "key": "p920",
      "inits": [
        "init.p920.rc",
        "/bootimages/opening_01.rle"
      ],
      "name": "LGE Optimus 3D",
      "lunch": "p920-eng"
    },
    {
      "version": "4.0.0.9",
      "init": "init.galaxyace.rc",
      "flash_recovery": "/data/data/com.koushikdutta.rommanager/files/flash_image recoveryonly %s ; ",
      "legacy_versions": [

      ],
      "key": "galaxyace",
      "name": "Samsung Galaxy Ace"
    },
    {
      "version": "5.0.2.0",
      "init": "init_prep_keypad.sh",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p10 ; ",
      "touch_version": "5.8.1.8",
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
      "inits": [
        "init_prep_keypad.sh",
        "init.olympus.rc"
      ],
      "name": "Motorola Atrix 4G",
      "lunch": "generic_olympus-eng"
    },
    {
      "version": "4.0.1.5",
      "init": "init_recovery.rc",
      "flash_recovery": "/data/data/com.koushikdutta.rommanager/files/tegra_flash_image recovery %s ; ",
      "legacy_versions": [

      ],
      "key": "smb_a1002",
      "name": "Viewsonic GTablet (smb_a1002) - Bootloader 1.1"
    },
    {
      "version": "5.0.2.0",
      "init": "init.shooter.rc",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p22 ; ",
      "touch_version": "5.8.0.2",
      "legacy_versions": [
        "4.0.1.5",
        "5.0.0.0",
        "5.0.1.0"
      ],
      "key": "shooter",
      "name": "HTC EVO 3D",
      "lunch": "htc_shooter-eng"
    },
    {
      "version": "5.0.2.0",
      "init": "init.pyramid.rc",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p21 ; ",
      "touch_version": "5.8.0.9",
      "legacy_versions": [
        "4.0.1.5",
        "5.0.0.1",
        "5.0.0.7",
        "5.0.0.8",
        "5.0.1.0"
      ],
      "key": "pyramid",
      "name": "HTC Sensation",
      "lunch": "full_pyramid-eng"
    },
    {
      "version": "4.0.1.5",
      "init": "init.qcom.rc",
      "legacy_versions": [

      ],
      "key": "ascend2",
      "name": "Huawei Ascend 2"
    },
    {
      "version": "4.0.1.5",
      "init": "init.qcom.rc",
      "legacy_versions": [

      ],
      "key": "a70",
      "name": "Micromax A70"
    },
    {
      "version": "4.0.1.5",
      "readonly_recovery": true,
      "init": "init.galaxygio.rc",
      "legacy_versions": [

      ],
      "key": "galaxygio",
      "name": "Samsung Galaxy Gio"
    },
    {
      "version": "4.0.1.5",
      "readonly_recovery": true,
      "init": "init.smdkc110.rc",
      "legacy_versions": [

      ],
      "key": "indulge910",
      "name": "Samsung Indulge 910"
    },
    {
      "version": "4.0.1.5",
      "readonly_recovery": true,
      "init": "init.smdkc110.rc",
      "legacy_versions": [

      ],
      "key": "indulge915",
      "name": "Samsung Indulge 915"
    },
    {
      "version": "5.0.2.6",
      "init": "/bootimages/ON_480x800_08fps_0000.rle",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p4 ; ",
      "touch_version": "5.8.1.3",
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
      "name": "LGE Optimus Black",
      "lunch": "p970-eng"
    },
    {
      "version": "5.0.2.0",
      "init": "init.shooteru.rc",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p21 ; ",
      "touch_version": "5.8.0.2",
      "legacy_versions": [
        "5.0.1.6",
        "5.0.1.7",
        "5.0.1.8",
        "5.0.1.9"
      ],
      "key": "shooteru",
      "name": "HTC EVO 3D (GSM)",
      "lunch": "full_shooteru-eng"
    },
    {
      "reboot_recovery": "rm /cache/recovery/command ; echo 1 > /data/.recovery_mode ; sync ; reboot ;",
      "version": "5.0.2.3",
      "readonly_recovery": true,
      "init": "init.mapphone_cdma.rc",
      "flash_recovery": "dd if=%s of=/preinstall/recovery/recovery.zip ; ",
      "legacy_versions": [

      ],
      "key": "droid2we",
      "name": "Motorola Droid 2 Global",
      "lunch": "cyanogen_droid2we-eng"
    },
    {
      "reboot_recovery": "rm /cache/recovery/command ; echo 1 > /data/.recovery_mode ; sync ; reboot ;",
      "version": "5.0.2.5",
      "readonly_recovery": true,
      "init": "init.mapphone_cdma.rc",
      "flash_recovery": "dd if=%s of=/preinstall/recovery/recovery.zip ; ",
      "legacy_versions": [
        "5.0.2.3",
        "5.0.2.4"
      ],
      "key": "targa",
      "name": "Motorola Droid Bionic",
      "lunch": "generic_targa-eng"
    },
    {
      "reboot_recovery": "rm /cache/recovery/command ; echo 1 > /data/.recovery_mode ; sync ; reboot ;",
      "version": "5.0.2.5",
      "readonly_recovery": true,
      "init": "init.mapphone_cdma.rc",
      "flash_recovery": "dd if=%s of=/preinstall/recovery/recovery.zip ; ",
      "legacy_versions": [
        "5.0.2.3",
        "5.0.2.4"
      ],
      "key": "daytona",
      "name": "Motorola Droid X2",
      "lunch": "generic_daytona-eng"
    },
    {
      "reboot_recovery": "rm /cache/recovery/command ; echo 1 > /data/.recovery_mode ; sync ; reboot ;",
      "version": "5.0.2.6",
      "readonly_recovery": true,
      "init": "init.mapphone_cdma.rc",
      "flash_recovery": "dd if=%s of=/preinstall/recovery/recovery.zip ; ",
      "legacy_versions": [
        "5.0.2.5"
      ],
      "key": "solana",
      "name": "Motorola Droid 3",
      "lunch": "full_solana-eng"
    },
    {
      "version": "5.0.2.6",
      "init": "init.motus.rc",
      "legacy_versions": [

      ],
      "key": "motus",
      "name": "Motorola Backflip",
      "lunch": "cyanogen_motus-eng"
    },
    {
      "version": "5.0.2.6",
      "readonly_recovery": true,
      "init": "init.gt-s5570.rc",
      "legacy_versions": [

      ],
      "key": "tass",
      "name": "Samsung Galaxy Mini",
      "lunch": "tass-eng"
    },
    {
      "version": "5.0.2.6",
      "init": "init.u8800.rc",
      "flash_recovery": "mount -o remount,rw -t vfat /dev/block/mmcblk0p1 /cust_backup ; cat %s > /cust_backup/image/recovery.img ;",
      "legacy_versions": [

      ],
      "key": "u8800",
      "name": "Huawei U8800",
      "lunch": "huawei_u8800-eng"
    },
    {
      "version": "5.0.2.6",
      "readonly_recovery": true,
      "init": "init.smdkc210.rc",
      "touch_version": "5.8.1.5",
      "legacy_versions": [

      ],
      "key": "galaxys2att",
      "inits": [
        "init.smdkc210.rc",
        "init.smdk4210.rc"
      ],
      "name": "Samsung Galaxy S2 (AT&T)",
      "lunch": "cyanogen_galaxys2att-eng"
    },
    {
      "version": "6.0.1.4",
      "owners": {
        "jmprblckwing182@gmail.com": true
      },
      "init": "init.target.rc",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p22 bs=4096 ; ",
      "touch_version": "6.0.1.4",
      "legacy_versions": [
        "5.0.2.6",
        "5.0.2.7"
      ],
      "key": "hercules",
      "name": "Samsung T-Mobile Galaxy S2",
      "lunch": "cm_hercules-userdebug"
    },
    {
      "version": "5.0.2.7",
      "readonly_recovery": true,
      "init": "init.smdkc210.rc",
      "touch_version": "5.8.1.5",
      "legacy_versions": [
        "5.0.2.6",
        "5.0.2.7"
      ],
      "key": "epic4gtouch",
      "name": "Samsung Epic 4G Touch",
      "lunch": "full_epic4gtouch-eng"
    },
    {
      "version": "5.0.2.6",
      "init": "init.ruby.rc",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p23 bs=4096 ; ",
      "legacy_versions": [

      ],
      "key": "ruby",
      "name": "HTC Amaze",
      "lunch": "full_ruby-eng"
    },
    {
      "version": "5.0.2.8",
      "readonly_recovery": true,
      "init": "init.gt-i5500.rc",
      "legacy_versions": [
        "5.0.2.8"
      ],
      "key": "galaxy5",
      "name": "Samsung Galaxy 5",
      "lunch": "samsung_galaxy5-eng"
    },
    {
      "version": "5.0.2.7",
      "init": "init.mooncake.rc",
      "legacy_versions": [

      ],
      "key": "mooncake",
      "name": "ZTE Racer",
      "lunch": "generic_mooncake-eng"
    },
    {
      "version": "5.0.2.7",
      "readonly_recovery": true,
      "init": "init.smdkc110.rc",
      "legacy_versions": [
        "5.0.2.7",
        "5.0.2.7",
        "5.0.2.7"
      ],
      "key": "vzwtab",
      "name": "Samsung Galaxy Tab (VZW)",
      "lunch": "full_vzwtab-eng"
    },
    {
      "version": "5.0.2.7",
      "init": "init.doubleshot.rc",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p21 bs=4096 ; ",
      "legacy_versions": [
        "5.0.2.7",
        "5.0.2.7"
      ],
      "key": "doubleshot",
      "name": "HTC MyTouch 4G Slide",
      "lunch": "full_doubleshot-eng"
    },
    {
      "version": "6.0.1.0",
      "init": "init.tuna.rc",
      "flash_recovery": "dd if=%s of=/dev/block/platform/omap/omap_hsmmc.0/by-name/recovery bs=4096 ;",
      "touch_version": "6.0.1.0",
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
        "6.0.0.5"
      ],
      "key": "maguro",
      "name": "Google Galaxy Nexus (GSM)",
      "lunch": "cm_maguro-userdebug"
    },
    {
      "version": "6.0.1.0",
      "init": "init.tuna.rc",
      "flash_recovery": "dd if=%s of=/dev/block/platform/omap/omap_hsmmc.0/by-name/recovery bs=4096 ;",
      "touch_version": "6.0.1.0",
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
        "6.0.0.5"
      ],
      "key": "toro",
      "name": "Google Galaxy Nexus (Verizon)",
      "lunch": "cm_toro-userdebug"
    },
    {
      "version": "5.0.2.7",
      "init": "init.thunderc.rc",
      "legacy_versions": [

      ],
      "key": "lg690",
      "name": "LG Optimus C LW690",
      "lunch": "full_lg690-eng"
    },
    {
      "version": "5.0.2.7",
      "init": "init.muscat.rc",
      "legacy_versions": [

      ],
      "key": "c660",
      "name": "LGE Optimus Pro",
      "lunch": "c660-eng"
    },
    {
      "version": "5.0.2.7",
      "init": "init.univa.rc",
      "legacy_versions": [

      ],
      "key": "e510",
      "name": "LGE Optimus Hub",
      "lunch": "e510-eng"
    },
    {
      "reboot_recovery": "/system/xbin/busybox devmem 0x57fff800 32 0x5EC0B007; sync ; reboot ;",
      "version": "5.0.2.7",
      "init": "init.victory.rc",
      "officially_supported": false,
      "touch_version": "5.8.1.5",
      "legacy_versions": [

      ],
      "key": "epicmtd",
      "name": "Samsung Epic4G (MTD)",
      "lunch": "cyanogen_epicmtd-eng"
    },
    {
      "version": "5.0.2.7",
      "init": "init.holiday.rc",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p23 bs=4096 ; ",
      "legacy_versions": [
        "5.0.2.7",
        "5.0.2.7",
        "5.0.2.7"
      ],
      "key": "holiday",
      "name": "HTC Holiday",
      "lunch": "full_holiday-eng"
    },
    {
      "version": "5.0.2.7",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p17 bs=4096 ;",
      "legacy_versions": [

      ],
      "key": "e730",
      "inits": [
        "init.victor.rc",
        "init.e739.rc"
      ],
      "name": "LG Optimus SOL / TMo LG myTouch",
      "lunch": "e730-eng"
    },
    {
      "version": "5.0.2.8",
      "init": "init.marvel.rc",
      "legacy_versions": [
        "5.0.2.7"
      ],
      "key": "marvel",
      "name": "HTC Wildfire S",
      "lunch": "generic_marvel-eng"
    },
    {
      "version": "5.0.2.8",
      "init": "init.mapphone_umts.rc",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p10 bs=4096 ;",
      "legacy_versions": [
        "5.0.2.7"
      ],
      "key": "sunfire",
      "inits": [
        "init.mapphone_umts.rc",
        "init.mapphone_cdma.rc"
      ],
      "name": "Motorola Photon 4G",
      "lunch": "full_sunfire-eng"
    },
    {
      "version": "5.0.2.8",
      "init": "init.u8160.rc",
      "legacy_versions": [
        "5.0.2.8"
      ],
      "key": "u8160",
      "inits": [
        "init.huawei.rc",
        "init.u8160.rc"
      ],
      "name": "Huawei U8160",
      "lunch": "huawei_u8160-eng"
    },
    {
      "version": "5.8.1.4",
      "init": "init.vigor.rc",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p23 bs=4096 ;",
      "touch_version": "5.8.1.4",
      "legacy_versions": [
        "5.5.0.4",
        "5.5.0.5",
        "5.8.1.3",
        "5.8.1.4",
        "5.8.1.4",
        "5.8.1.4"
      ],
      "key": "vigor",
      "name": "HTC Rezound",
      "lunch": "full_vigor-userdebug"
    },
    {
      "version": "5.8.1.5",
      "init": "init.expresskt.rc",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p21 bs=4096 ;",
      "legacy_versions": [

      ],
      "key": "express",
      "name": "HTC EVO View 4G",
      "lunch": "full_express-userdebug"
    },
    {
      "version": "5.8.3.4",
      "init": "init.cardhu.rc",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p4 ;",
      "touch_version": "5.8.3.4",
      "legacy_versions": [
        "5.5.0.4",
        "5.8.2.0"
      ],
      "key": "tf201",
      "name": "Asus Transformer Prime",
      "lunch": "cm_tf201-userdebug"
    },
    {
      "reboot_recovery": "rm /cache/recovery/command ; echo 1 > /data/.recovery_mode ; sync ; reboot ;",
      "version": "5.0.2.0",
      "init": "init.mapphone_cdma.rc",
      "officially_supported": false,
      "legacy_versions": [

      ],
      "key": "maserati",
      "name": "Motorola Droid 4"
    },
    {
      "reboot_recovery": "rm /cache/recovery/command ; echo 1 > /data/.recovery_mode ; sync ; reboot ;",
      "version": "5.0.2.0",
      "init": "init.mapphone_cdma.rc",
      "officially_supported": false,
      "legacy_versions": [

      ],
      "key": "spyder",
      "name": "Motorola RAZR"
    },
    {
      "version": "5.0.2.8",
      "init": "init.marvelc.rc",
      "legacy_versions": [

      ],
      "key": "marvelc",
      "name": "HTC Wildfire S CDMA",
      "lunch": "full_marvelc-eng"
    },
    {
      "version": "6.0.1.3",
      "init": "init.ventana.rc",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p4 ;",
      "touch_version": "5.8.3.4",
      "legacy_versions": [
        "5.5.0.4",
        "5.8.1.9",
        "5.8.2.0",
        "5.8.2.1",
        "5.8.3.4"
      ],
      "key": "tf101",
      "name": "Asus Transformer",
      "lunch": "cm_tf101-userdebug"
    },
    {
      "version": "5.8.2.0",
      "init": "bootimages/boot_logo_00000.rle",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p13 ;",
      "legacy_versions": [

      ],
      "key": "p930",
      "name": "AT&T Nitro HD / LGE P930",
      "lunch": "full_p930-userdebug"
    },
    {
      "version": "6.0.1.0",
      "readonly_recovery": true,
      "init": "init.smdkc210.rc",
      "touch_version": "6.0.1.0",
      "legacy_versions": [
        "5.8.1.8"
      ],
      "key": "i777",
      "inits": [
        "init.smdkc210.rc",
        "init.smdk4210.rc"
      ],
      "name": "Samsung Galaxy S2 (SGH-I777)",
      "lunch": "cm_i777-userdebug"
    },
    {
      "version": "5.0.2.8",
      "init": "init.pico.rc",
      "legacy_versions": [

      ],
      "key": "pico",
      "name": "HTC Pico",
      "lunch": "full_pico-eng"
    },
    {
      "version": "5.8.4.0",
      "init": "ueventd.endeavoru.rc",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p5 bs=4096 ;",
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
      "key": "endeavoru",
      "name": "HTC One X (GSM)",
      "lunch": "cm_endeavoru-userdebug"
    },
    {
      "version": "5.8.3.1",
      "init": "init.ville.rc",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p22 bs=4096 ;",
      "touch_version": "5.8.3.1",
      "legacy_versions": [
        "5.5.0.4",
        "5.8.2.1",
        "5.8.2.2",
        "5.8.2.3"
      ],
      "key": "ville",
      "name": "HTC One S",
      "lunch": "cm_ville-userdebug"
    },
    {
      "reboot_recovery": "echo 1 > /cache/.startrecovery ; sync ; reboot ;",
      "version": "5.8.2.1",
      "init": "init.p1.rc",
      "officially_supported": false,
      "legacy_versions": [

      ],
      "key": "p1",
      "name": "Samsung Galaxy Tab (MTD and GSM)"
    },
    {
      "reboot_recovery": "echo 1 > /cache/.startrecovery ; sync ; reboot ;",
      "version": "5.8.2.1",
      "init": "init.p1c.rc",
      "officially_supported": false,
      "legacy_versions": [

      ],
      "key": "p1c",
      "name": "Samsung Galaxy Tab (MTD and CDMA)"
    },
    {
      "version": "6.0.1.0",
      "init": "init.tuna.rc",
      "flash_recovery": "dd if=%s of=/dev/block/platform/omap/omap_hsmmc.0/by-name/recovery bs=4096 ;",
      "touch_version": "6.0.1.0",
      "legacy_versions": [
        "5.8.3.1",
        "6.0.0.0",
        "6.0.0.1",
        "6.0.0.2",
        "6.0.0.3",
        "6.0.0.4",
        "6.0.0.5"
      ],
      "key": "toroplus",
      "name": "Google Galaxy Nexus (Sprint)",
      "lunch": "cm_toroplus-userdebug"
    },
    {
      "version": "5.8.3.1",
      "init": "ueventd.p3.rc",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p2 ; ",
      "touch_version": "5.8.3.1",
      "legacy_versions": [
        "4.0.0.4"
      ],
      "key": "p4wifi",
      "name": "Samsung Galaxy Tab 10.1",
      "lunch": "cm_p4wifi-userdebug"
    },
    {
      "version": "5.8.3.1",
      "init": "init.wingray.rc",
      "flash_recovery": "dd if=%s of=/dev/block/platform/sdhci-tegra.3/by-name/recovery ; ",
      "touch_version": "5.8.3.1",
      "legacy_versions": [

      ],
      "key": "wingray",
      "name": "Motorola XOOM (Wi-Fi only)",
      "lunch": "cm_wingray-userdebug"
    },
    {
      "version": "5.0.2.8",
      "init": "init.omap.post_boot.sh",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p4 bs=4096 ; ",
      "legacy_versions": [

      ],
      "key": "marquee",
      "name": "LGE Marquee",
      "lunch": "full_marquee-eng"
    },
    {
      "version": "5.0.2.8",
      "init": "init.omap.post_boot.sh",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p4 bs=4096 ; ",
      "legacy_versions": [

      ],
      "key": "ignite",
      "name": "LGE Ignite",
      "lunch": "full_ignite-eng"
    },
    {
      "version": "5.8.3.1",
      "init": "init.target.rc",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p13 bs=4096 ; ",
      "touch_version": "5.8.3.1",
      "legacy_versions": [

      ],
      "key": "ms840",
      "name": "LG Connect 4G MS840",
      "lunch": "full_ms840-userdebug"
    },
    {
      "version": "5.8.3.1",
      "init": "init.target.rc",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p13 bs=4096 ; ",
      "touch_version": "5.8.3.1",
      "legacy_versions": [

      ],
      "key": "vs840",
      "name": "LG Lucid VS840",
      "lunch": "full_vs840-userdebug"
    },
    {
      "version": "5.8.3.5",
      "init": "init.jewel.rc",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p22 bs=4096 ; ",
      "touch_version": "5.8.3.5",
      "legacy_versions": [
        "5.8.3.4",
        "5.8.3.4"
      ],
      "key": "jewel",
      "name": "HTC EVO LTE",
      "lunch": "cm_jewel-userdebug"
    },
    {
      "version": "6.0.1.2",
      "init": "ueventd.smdk4x12.rc",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p6 bs=4096 ; ",
      "touch_version": "6.0.1.2",
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
      "name": "Samsung Galaxy S3 (GT-I9300)",
      "lunch": "cm_i9300-userdebug"
    },
    {
      "version": "6.0.1.0",
      "init": "init.qcom.usb.rc",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p22 bs=4096 ; ",
      "touch_version": "6.0.1.0",
      "legacy_versions": [
        "5.8.4.3"
      ],
      "key": "skyrocket",
      "name": "Samsung Skyrocket",
      "lunch": "cm_skyrocket-userdebug"
    },
    {
      "version": "5.8.4.8",
      "init": "init.qcom.usb.rc",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p22 bs=4096 ; ",
      "touch_version": "5.8.4.3",
      "legacy_versions": [
        "5.8.4.3"
      ],
      "key": "quincyatt",
      "name": "Samsung Galaxy Note (AT&T)",
      "lunch": "cm_quincyatt-userdebug"
    },
    {
      "version": "5.8.4.5",
      "init": "init.e0.rc",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p17 bs=4096 ; ",
      "legacy_versions": [

      ],
      "key": "e400",
      "name": "LGE Optimus L3",
      "lunch": "cm_e400-userdebug"
    },
    {
      "version": "5.8.4.5",
      "readonly_recovery": true,
      "init": "init.primou.rc",
      "legacy_versions": [

      ],
      "key": "primou",
      "name": "HTC One V",
      "lunch": "cm_primou-userdebug"
    },
    {
      "version": "6.0.1.2",
      "init": "init.d2att.rc",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p18 bs=4096 ; ",
      "touch_version": "6.0.1.4",
      "legacy_versions": [
        "5.8.4.5",
        "5.8.4.6",
        "5.8.4.7",
        "6.0.1.1"
      ],
      "key": "d2att",
      "name": "Samsung Galaxy S3 (AT&T)",
      "lunch": "cm_d2att-userdebug"
    },
    {
      "version": "6.0.1.2",
      "init": "init.d2tmo.rc",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p18 bs=4096 ; ",
      "touch_version": "6.0.1.2",
      "legacy_versions": [
        "5.8.4.5",
        "5.8.4.6",
        "5.8.4.7"
      ],
      "key": "d2tmo",
      "name": "Samsung Galaxy S3 (T-Mobile)",
      "lunch": "cm_d2tmo-userdebug"
    },
    {
      "version": "6.0.1.2",
      "init": "init.d2spr.rc",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p18 bs=4096 ; ",
      "touch_version": "6.0.1.2",
      "legacy_versions": [
        "5.8.4.5",
        "5.8.4.6",
        "5.8.4.7",
        "5.8.4.9"
      ],
      "key": "d2spr",
      "name": "Samsung Galaxy S3 (Sprint)",
      "lunch": "cm_d2spr-userdebug"
    },
    {
      "version": "6.0.1.2",
      "init": "init.d2vzw.rc",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p18 bs=4096 ; ",
      "touch_version": "6.0.1.2",
      "legacy_versions": [
        "5.8.4.6",
        "5.8.4.7",
        "5.8.4.8",
        "5.8.4.9"
      ],
      "key": "d2vzw",
      "name": "Samsung Galaxy S3 (Verizon)",
      "lunch": "cm_d2vzw-userdebug"
    },
    {
      "version": "5.8.4.7",
      "readonly_recovery": true,
      "init": "init.primoc.rc",
      "touch_version": "5.8.4.7",
      "legacy_versions": [
        "5.8.4.6",
        "5.8.4.7"
      ],
      "key": "primoc",
      "name": "HTC One V (CDMA)",
      "lunch": "full_primoc-userdebug"
    },
    {
      "version": "6.0.1.0",
      "init": "init.grouper.rc",
      "flash_recovery": "dd if=%s of=/dev/block/platform/sdhci-tegra.3/by-name/SOS bs=4096 ; ",
      "touch_version": "6.0.1.0",
      "legacy_versions": [
        "6.0.0.6"
      ],
      "key": "grouper",
      "name": "Google Nexus 7",
      "lunch": "cm_grouper-userdebug"
    },
    {
      "version": "6.0.1.0",
      "init": "init.su640.rc",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p13 bs=4096 ; ",
      "touch_version": "6.0.1.0",
      "legacy_versions": [

      ],
      "key": "su640",
      "name": "LG Optimus LTE (SKT)",
      "lunch": "cm_su640-userdebug"
    },
    {
      "version": "6.0.1.0",
      "init": "init.t1.rc",
      "officially_supported": false,
      "legacy_versions": [

      ],
      "key": "i9100g",
      "name": "Samsung Galaxy S2 (GT-I9100G)",
      "lunch": "cm_i9100g-userdebug"
    },
    {
      "version": "6.0.1.1",
      "init": "init.espresso.rc",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p6 bs=4096 ; ",
      "legacy_versions": [

      ],
      "key": "p3100",
      "name": "Samsung Galaxy Tab 2 (GT-P3100)",
      "lunch": "cm_p3100-userdebug"
    },
    {
      "version": "6.0.1.1",
      "init": "init.espresso.rc",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p6 bs=4096 ; ",
      "legacy_versions": [

      ],
      "key": "p3110",
      "name": "Samsung Galaxy Tab 2 (GT-P3110)",
      "lunch": "cm_p3110-userdebug"
    },
    {
      "version": "6.0.1.1",
      "init": "init.espresso.rc",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p6 bs=4096 ; ",
      "legacy_versions": [

      ],
      "key": "p3113",
      "name": "Samsung Galaxy Tab 2 (GT-P3113)",
      "lunch": "cm_p3113-userdebug"
    },
    {
      "version": "6.0.1.1",
      "init": "init.espresso10.rc",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p6 bs=4096 ; ",
      "legacy_versions": [

      ],
      "key": "p5100",
      "name": "Samsung Galaxy Tab 2 (GT-P5100)",
      "lunch": "cm_p5100-userdebug"
    },
    {
      "version": "6.0.1.1",
      "init": "init.espresso10.rc",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p6 bs=4096 ; ",
      "legacy_versions": [

      ],
      "key": "p5110",
      "name": "Samsung Galaxy Tab 2 (GT-P5110)",
      "lunch": "cm_p5110-userdebug"
    },
    {
      "version": "6.0.1.1",
      "init": "init.espresso10.rc",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p6 bs=4096 ; ",
      "legacy_versions": [

      ],
      "key": "p5113",
      "name": "Samsung Galaxy Tab 2 (GT-P5113)",
      "lunch": "cm_p5113-userdebug"
    },
    {
      "version": "6.0.1.1",
      "init": "init.target.rc",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p13 bs=4096 ; ",
      "touch_version": "6.0.1.1",
      "legacy_versions": [

      ],
      "key": "vs920",
      "inits": [
        "init.target.rc",
        "init.iproj.rc",
        "init.i_vzw.rc",
        "init.iprj.rc"
      ],
      "name": "LGE Spectrum 4G",
      "lunch": "cm_vs920-userdebug"
    },
    {
      "version": "6.0.1.1",
      "init": "init.zte.rc",
      "touch_version": "6.0.1.1",
      "legacy_versions": [

      ],
      "key": "x500",
      "name": "Score & Score M",
      "lunch": "cm_x500-userdebug"
    },
    {
      "version": "6.0.1.1",
      "init": "init.qcom.rc",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p14 bs=4096 ; ",
      "touch_version": "6.0.1.1",
      "legacy_versions": [

      ],
      "key": "vs910",
      "inits": [
        "init.qcom.rc",
        "init.bryce.rc"
      ],
      "name": "LGE Revolution 4G",
      "lunch": "cm_vs910-userdebug"
    },
    {
      "version": "6.0.1.1",
      "init": "init.qcom.rc",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p14 bs=4096 ; ",
      "touch_version": "6.0.1.1",
      "legacy_versions": [
        "5.0.2.8"
      ],
      "key": "ms910",
      "inits": [
        "init.qcom.rc",
        "init.bryce.rc"
      ],
      "name": "LGE Esteeem 4G",
      "lunch": "cm_ms910-userdebug"
    },
    {
      "version": "6.0.1.1",
      "init": "init.qcom.rc",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p17 bs=4096 ; ",
      "touch_version": "6.0.1.1",
      "legacy_versions": [
        "6.0.1.0"
      ],
      "key": "ms695",
      "inits": [
        "init.qcom.rc",
        "init.m3.rc"
      ],
      "name": "LGE Optimus M+",
      "lunch": "cm_ms695-userdebug"
    },
    {
      "reboot_recovery": "echo 1 > /cache/.startrecovery ; sync ; reboot ;",
      "version": "5.8.2.1",
      "init": "init.p1.rc",
      "officially_supported": false,
      "legacy_versions": [

      ],
      "key": "p1l",
      "name": "Samsung Galaxy Tab (MTD and GSM - L)"
    },
    {
      "reboot_recovery": "echo 1 > /cache/.startrecovery ; sync ; reboot ;",
      "version": "5.8.2.1",
      "init": "init.p1.rc",
      "officially_supported": false,
      "legacy_versions": [

      ],
      "key": "p1n",
      "name": "Samsung Galaxy Tab (MTD and GSM - N)"
    },
    {
      "version": "6.0.1.2",
      "init": "init.d2usc.rc",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p18 bs=4096 ; ",
      "touch_version": "6.0.1.4",
      "legacy_versions": [

      ],
      "key": "d2usc",
      "name": "Samsung Galaxy S3 (US Cellular)",
      "lunch": "cm_d2usc-userdebug"
    },
    {
      "version": "6.0.1.3",
      "owners": {
        "mckelvey.patrick@gmail.com": true
      },
      "init": "init.presto.rc",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p18 bs=4096 ; ",
      "legacy_versions": [
        "6.0.1.2"
      ],
      "key": "presto",
      "name": "Pantech Presto",
      "lunch": "cm_presto-userdebug"
    },
    {
      "version": "6.0.1.3",
      "init": "init.mmi.usb.rc",
      "flash_recovery": "dd if=%s of=/dev/block/platform/msm_sdcc.1/by-name/recovery bs=4096 ; ",
      "legacy_versions": [

      ],
      "key": "asanti",
      "inits": [
        "init.asanti.rc",
        "init.sprint.rc"
      ],
      "name": "Motorola Photon Q",
      "lunch": "cm_asanti-userdebug"
    },
    {
      "version": "6.0.1.4",
      "init": "init.pecan.rc",
      "legacy_versions": [
        "6.0.1.3"
      ],
      "key": "p350",
      "name": "LGE P350",
      "lunch": "cm_p350-userdebug"
    },
    {
      "version": "6.0.1.4",
      "init": "init.p5att.rc",
      "legacy_versions": [

      ],
      "key": "p5att",
      "name": "p5att",
      "lunch": "cm_p5att-userdebug"
    },
    {
      "version": "6.0.1.4",
      "init": "init.target.rc",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p22 bs=4096 ; ",
      "legacy_versions": [
        "6.0.1.0"
      ],
      "key": "T769",
      "name": "Samsung Galaxy S Blaze 4G",
      "lunch": "cm_T769-userdebug"
    }
  ],
  "ad_network": "admob",
  "manifest_signature": "O8+Kc2mdQz0e/AjCQn6Rw6fK5Kr5LZItJ474Ua3gF2o4IgdCQZXIbwCHIo6xeqY3pVEGtjYmmyO1PkRYcGqq2rB2wQM8SoKFl/70vG0ihEZ5TDeruKUgxVVSNM3e09kBvCxYK89GWqVWkNHtvTu1T1F9w6FilzCsNFSAXHD0Bos=",
  "recovery_zip_url": "http://download2.clockworkmod.com/recoveries/recovery-clockwork-%s-%s.zip",
  "use_in_app": false,
  "pontiflex_downloading": 100,
  "pontiflex_startup_register": 100,
  "keywords": "phone accessories,droid,gadgets,bluetooth headset,car charger,sd card"
}