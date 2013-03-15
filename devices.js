{
  "manifest": "http://developer.clockworkmod.com/merge",
  "keywords": "phone accessories,droid,gadgets,bluetooth headset,car charger,sd card",
  "version": "2.5.0.1",
  "use_in_app": false,
  "manifest_signature": "O8+Kc2mdQz0e/AjCQn6Rw6fK5Kr5LZItJ474Ua3gF2o4IgdCQZXIbwCHIo6xeqY3pVEGtjYmmyO1PkRYcGqq2rB2wQM8SoKFl/70vG0ihEZ5TDeruKUgxVVSNM3e09kBvCxYK89GWqVWkNHtvTu1T1F9w6FilzCsNFSAXHD0Bos=",
  "owners": {
    "layhertony@gmail.com": true,
    "attn1.repo@gmail.com": true,
    "ferguson.david@gmail.com": true,
    "bigbeeshane@gmail.com": true,
    "daniel.hillenbrand@codeworkx.de": true,
    "cvpcsm@gmail.com": true,
    "koush@clockworkmod.com": true,
    "njgreb@gmail.com": true,
    "arcee@cyanogenmod.com": true,
    "playfulgod@gmail.com": true,
    "keaneyw@gmail.com": true,
    "utkanos@gmail.com": true
  },
  "recovery_url": "http://download2.clockworkmod.com/recoveries/recovery-clockwork-%s-%s.img",
  "recovery_zip_url": "http://download2.clockworkmod.com/recoveries/recovery-clockwork-%s-%s.zip",
  "recovery_twrp_url": "http://download2.clockworkmod.com/twrp/openrecovery-twrp-%s-%s.img",
  "devices": [
    {
      "init": "init.sholes.rc",
      "key": "sholes",
      "version": "2.5.0.1",
      "name": "Motorola Droid",
      "legacy_versions": [
        "3.1.0.2",
        "2.5.1.4",
        "2.5.1.3",
        "2.5.1.1",
        "2.5.0.1"
      ],
      "alternate_recovery": {
        "clockwork": false,
        "name": "SPRecovery 0.99.3b",
        "url": "http://koush.kanged.net/cm/recoveries/sprecovery.img"
      }
    },
    {
      "init": "init.sapphire.rc",
      "key": "sapphire",
      "version": "2.5.0.7",
      "name": "HTC MyTouch 3G",
      "legacy_versions": [
        "2.5.0.7",
        "2.5.1.4",
        "2.5.1.3",
        "2.5.1.1"
      ],
      "alternate_recovery": {
        "clockwork": false,
        "name": "RA Recovery v1.7.0G",
        "url": "http://files.androidspin.com/downloads.php?dir=amon_ra/RECOVERY/&file=recovery-RA-sapphire-v1.7.0G.img"
      }
    },
    {
      "init": "init.sapphire.rc",
      "key": "magic",
      "version": "2.5.0.7",
      "name": "HTC Magic",
      "legacy_versions": [
        "2.5.0.7",
        "2.5.1.4",
        "2.5.1.3",
        "2.5.1.1"
      ],
      "alternate_recovery": {
        "clockwork": false,
        "name": "RA Recovery v1.7.0H",
        "url": "http://files.androidspin.com/downloads.php?dir=amon_ra/RECOVERY/&file=recovery-RA-sapphire-v1.7.0H.img"
      }
    },
    {
      "init": "init.trout.rc",
      "key": "dream",
      "version": "2.5.0.7",
      "name": "HTC G1/Dream",
      "legacy_versions": [
        "2.5.0.7",
        "2.5.1.4",
        "2.5.1.3",
        "2.5.1.1"
      ],
      "alternate_recovery": {
        "clockwork": false,
        "name": "RA Recovery v1.7.0",
        "url": "http://files.androidspin.com/downloads.php?dir=amon_ra/RECOVERY/&file=recovery-RA-dream-v1.7.0.img"
      }
    },
    {
      "init": "init.mahimahi.rc",
      "key": "passion",
      "lunch": "cyanogen_passion-eng",
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
      "alternate_recovery": {
        "clockwork": false,
        "name": "RA Recovery v2.2.1",
        "url": "http://files.androidspin.com/downloads.php?dir=amon_ra/RECOVERY/&file=recovery-RA-passion-v2.2.1.img"
      }
    },
    {
      "init": "init.hero.rc",
      "key": "hero",
      "version": "2.5.0.7",
      "name": "HTC Hero (GSM)",
      "legacy_versions": [
        "2.5.0.7",
        "2.5.1.4",
        "2.5.1.3",
        "2.5.1.1"
      ],
      "alternate_recovery": {
        "clockwork": false,
        "name": "RA Recovery v1.7.0.1",
        "url": "http://files.androidspin.com/downloads.php?dir=amon_ra/RECOVERY/&file=recovery-RA-hero-v1.7.0.1.img"
      }
    },
    {
      "init": "init.heroc.rc",
      "key": "heroc",
      "version": "2.5.0.7",
      "name": "HTC Hero (CDMA)",
      "legacy_versions": [
        "2.5.0.7",
        "2.5.1.4",
        "2.5.1.3",
        "2.5.1.1"
      ],
      "alternate_recovery": {
        "clockwork": false,
        "name": "RA Recovery v1.6.2",
        "url": "http://www.androidspin.com/downloads.php?dir=amon_ra/RECOVERY/&file=recovery-RA-heroc-v1.6.2.img"
      }
    },
    {
      "init": "init.supersonic.rc",
      "key": "supersonic",
      "touch_version": "5.8.0.1",
      "lunch": "cyanogen_supersonic-eng",
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
      "alternate_recovery": {
        "clockwork": false,
        "name": "RA Recovery v2.3",
        "url": "http://files.androidspin.com/downloads.php?dir=amon_ra/RECOVERY/&file=recovery-RA-supersonic-v2.3.img"
      }
    },
    {
      "init": "init.legend.rc",
      "key": "legend",
      "lunch": "cyanogen_legend-eng",
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
      "readonly_recovery": true
    },
    {
      "init": "init.bravo.rc",
      "key": "bravo",
      "touch_version": "5.8.0.2",
      "lunch": "cyanogen_bravo-eng",
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
      ]
    },
    {
      "init": "init.bravoc.rc",
      "key": "bravoc",
      "lunch": "cyanogen_bravoc-eng",
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
      ]
    },
    {
      "init": "init.qcom.rc",
      "key": "pulsemini",
      "version": "2.5.0.7",
      "name": "Huawei Pulse Mini",
      "legacy_versions": [
        "2.5.0.7",
        "2.5.1.4",
        "2.5.1.3",
        "2.5.1.1"
      ]
    },
    {
      "init": "init.inc.rc",
      "key": "inc",
      "lunch": "cyanogen_inc-eng",
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
      "alternate_recovery": {
        "clockwork": false,
        "name": "RA_GNM Recovery v3.02",
        "url": "http://dl.dropbox.com/u/12949506/RomManager/recovery-RA-inc-3.02.img"
      }
    },
    {
      "init": "init.liberty.rc",
      "key": "liberty",
      "version": "2.5.0.7",
      "name": "HTC Aria",
      "legacy_versions": [
        "2.5.0.7",
        "2.5.1.4",
        "2.5.1.3",
        "2.5.1.1"
      ],
      "readonly_recovery": true
    },
    {
      "init": "init.desirec.rc",
      "key": "desirec",
      "version": "2.5.0.7",
      "name": "Motorola Droid Eris",
      "legacy_versions": [
        "2.5.0.7",
        "2.5.1.4",
        "2.5.1.3",
        "2.5.1.1"
      ],
      "readonly_recovery": true,
      "alternate_recovery": {
        "clockwork": false,
        "name": "RA Recovery v1.6.2",
        "url": "http://www.androidspin.com/downloads.php?dir=amon_ra/RECOVERY/&file=recovery-RA-eris-v1.6.2.img"
      }
    },
    {
      "init": "init.buzz.rc",
      "key": "buzz",
      "lunch": "cyanogen_buzz-eng",
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
      "readonly_recovery": true
    },
    {
      "init": "init.qcom.rc",
      "key": "streak",
      "version": "2.5.0.7",
      "name": "Dell Streak",
      "legacy_versions": [
        "2.5.0.7",
        "2.5.1.4",
        "2.5.1.3",
        "2.5.1.1"
      ]
    },
    {
      "init": "init.latte.rc",
      "key": "espresso",
      "version": "2.5.0.7",
      "name": "HTC MyTouch Slide",
      "legacy_versions": [
        "2.5.0.7",
        "2.5.1.4",
        "2.5.1.3",
        "2.5.1.1"
      ],
      "readonly_recovery": true
    },
    {
      "init": "lpm.rc",
      "key": "galaxys",
      "version": "2.5.1.2",
      "name": "Samsung GalaxyS i9000",
      "legacy_versions": [
        "2.5.1.2",
        "2.5.1.4",
        "2.5.1.3",
        "2.5.1.1"
      ],
      "readonly_recovery": true
    },
    {
      "init": "init.smdkc110.rc",
      "key": "fascinate",
      "version": "3.0.0.8",
      "name": "Samsung GalaxyS Fascinate",
      "legacy_versions": [
        "3.0.0.8",
        "2.5.1.4",
        "2.5.1.3",
        "2.5.1.1"
      ],
      "readonly_recovery": true
    },
    {
      "init": "init.smdkc110.rc",
      "key": "vibrant",
      "version": "2.5.1.2",
      "name": "Samsung GalaxyS Vibrant",
      "legacy_versions": [
        "2.5.1.2",
        "2.5.1.4",
        "2.5.1.3",
        "2.5.1.1"
      ],
      "readonly_recovery": true
    },
    {
      "init": "init.smdkc110.rc",
      "key": "captivate",
      "version": "2.5.1.2",
      "name": "Samsung GalaxyS Captivate",
      "legacy_versions": [
        "2.5.1.2",
        "2.5.1.4",
        "2.5.1.3",
        "2.5.1.1"
      ],
      "readonly_recovery": true
    },
    {
      "init": "init.qcom.rc",
      "key": "pulse",
      "version": "2.5.0.7",
      "name": "Huawei Pulse",
      "legacy_versions": [
        "2.5.0.7",
        "2.5.1.4",
        "2.5.1.3",
        "2.5.1.1"
      ]
    },
    {
      "init": "init.aloha.rc",
      "key": "aloha",
      "version": "2.5.0.7",
      "name": "LG Ally",
      "legacy_versions": [
        "2.5.0.7",
        "2.5.1.4",
        "2.5.1.3",
        "2.5.1.1"
      ],
      "alternate_recovery": {
        "clockwork": false,
        "name": "RA_GNM Recovery v2.2.2",
        "url": "http://dl.dropbox.com/u/12949506/RomManager/recovery-RA-aloha-2.2.2-GNM.img"
      }
    },
    {
      "init": "init.mapphone_cdma.rc",
      "key": "milestone",
      "version": "3.1.0.2",
      "name": "Motorola Milestone",
      "legacy_versions": [
        "2.5.0.7",
        "2.5.1.4",
        "2.5.1.3",
        "2.5.1.1",
        "2.5.0.7"
      ],
      "readonly_recovery": true
    },
    {
      "init": "init.mapphone_cdma.rc",
      "key": "droidx",
      "reboot_recovery": "rm /cache/recovery/command ; echo 1 > /data/.recovery_mode ; sync ; reboot ;",
      "version": "5.0.2.0",
      "flash_recovery": "dd if=%s of=/preinstall/recovery/recovery.zip ; ",
      "name": "Motorola Droid X",
      "legacy_versions": [
        "2.5.0.7"
      ],
      "readonly_recovery": true
    },
    {
      "init": "init.mapphone_cdma.rc",
      "key": "shadow",
      "reboot_recovery": "rm /cache/recovery/command ; echo 1 > /data/.recovery_mode ; sync ; reboot ;",
      "lunch": "cyanogen_shadow-eng",
      "version": "5.0.2.0",
      "flash_recovery": "dd if=%s of=/preinstall/recovery/recovery.zip ; ",
      "name": "Motorola Droid X (2nd-init)",
      "legacy_versions": [
        "2.5.0.7"
      ],
      "readonly_recovery": true
    },
    {
      "init": "init.salsa.rc",
      "key": "salsa",
      "version": "2.5.1.0",
      "name": "Acer Liquid",
      "legacy_versions": [
        "2.5.1.4",
        "2.5.1.3",
        "2.5.1.1",
        "2.5.1.0"
      ]
    },
    {
      "init": "init.qcom.rc",
      "key": "z71",
      "version": "2.5.1.3",
      "name": "Commtiva Z71 (Boston, Blaze, and more)",
      "legacy_versions": [
        "2.5.1.4",
        "2.5.1.3",
        "2.5.1.1",
        "2.5.1.0"
      ]
    },
    {
      "init": "init.vision.rc",
      "key": "vision",
      "touch_version": "5.8.1.0",
      "lunch": "cyanogen_vision-eng",
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
      ]
    },
    {
      "init": "init.glacier.rc",
      "key": "glacier",
      "touch_version": "5.8.1.0",
      "lunch": "cyanogen_glacier-eng",
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
      ]
    },
    {
      "init": "init.spade.rc",
      "key": "ace",
      "touch_version": "5.8.1.5",
      "lunch": "cyanogen_ace-eng",
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
      ]
    },
    {
      "init": "init.morrison.rc",
      "key": "morrison",
      "touch_version": "5.8.1.0",
      "lunch": "cyanogen_morrison-eng",
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
      ]
    },
    {
      "init": "init.mapphone_cdma.rc",
      "key": "droid2",
      "reboot_recovery": "rm /cache/recovery/command ; echo 1 > /data/.recovery_mode ; sync ; reboot ;",
      "lunch": "cyanogen_droid2-eng",
      "version": "5.0.2.0",
      "flash_recovery": "dd if=%s of=/preinstall/recovery/recovery.zip ; ",
      "name": "Motorola Droid 2",
      "legacy_versions": [
        "2.5.0.8"
      ],
      "readonly_recovery": true
    },
    {
      "init": "init.qcom.rc",
      "key": "one",
      "version": "2.5.1.3",
      "name": "Geeksphone ONE",
      "legacy_versions": [
        "2.5.1.4",
        "2.5.1.3",
        "2.5.1.1",
        "2.5.1.0"
      ],
      "alternate_recovery": {
        "clockwork": false,
        "name": "ONE Recovery v1.6",
        "url": "http://dl.dropbox.com/u/10355648/recovery-ONE-1_6.img"
      }
    },
    {
      "init": "init_recovery.rc",
      "key": "vega",
      "reboot_recovery": "echo start > /proc/ota ; ",
      "version": "3.0.2.7",
      "flash_recovery": "/data/data/com.koushikdutta.rommanager/files/tegra_flash_image recovery %s ; ",
      "name": "Advent Vega",
      "legacy_versions": [
        "2.5.1.4",
        "2.5.1.3",
        "2.5.1.1",
        "2.5.1.0",
        "2.5.1.4"
      ]
    },
    {
      "init": "init.smdkc110.rc",
      "key": "att_tab",
      "version": "2.5.1.8",
      "name": "Samsung Galaxy Tab - ATT",
      "legacy_versions": [
        "2.5.1.8",
        "2.5.1.4",
        "2.5.1.3",
        "2.5.1.1"
      ],
      "readonly_recovery": true
    },
    {
      "init": "init.smdkc110.rc",
      "key": "tmobile_tab",
      "version": "2.5.1.8",
      "name": "Samsung Galaxy Tab (T-Mobile)",
      "legacy_versions": [
        "2.5.1.8",
        "2.5.1.4",
        "2.5.1.3",
        "2.5.1.1"
      ],
      "readonly_recovery": true
    },
    {
      "init": "init.qcom.rc",
      "key": "FM6",
      "version": "2.5.1.2",
      "name": "Commtiva Link N700, Spice MI700, and more",
      "legacy_versions": [
        "2.5.1.4",
        "2.5.1.3",
        "2.5.1.1",
        "2.5.1.0"
      ],
      "alternate_recovery": {
        "clockwork": false,
        "name": "MI700 Recovery v1.6",
        "url": "http://dl.dropbox.com/u/15816725/MI700-recovery-V1_3.img"
      }
    },
    {
      "init": "init.herring.rc",
      "key": "crespo",
      "touch_version": "6.0.2.5",
      "lunch": "cm_crespo-userdebug",
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
      ]
    },
    {
      "init": "init. mapphone_cdma.rc",
      "key": "droidpro",
      "version": "2.5.0.8",
      "name": "Motorola Droid Pro",
      "legacy_versions": [
        "2.5.0.8"
      ],
      "readonly_recovery": true
    },
    {
      "init": "init.qcom.rc",
      "key": "ascend",
      "version": "3.0.0.5",
      "name": "Huawei Ascend",
      "legacy_versions": [
        "3.0.0.5",
        "3.0.0.4"
      ]
    },
    {
      "init": "init.blade.rc",
      "key": "blade",
      "lunch": "cyanogen_blade-eng",
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
      ]
    },
    {
      "init": "env.txt",
      "key": "encore",
      "reboot_recovery": "dd if=/dev/zero of=/rom/bcb bs=64 count=1 ; echo 'recovery' >> /rom/bcb ; reboot ;",
      "version": "3.2.0.1",
      "flash_recovery": "busybox mount -orw,remount / ; mkdir /boot ; busybox mount /dev/block/mmcblk0p1 /boot ; busybox unzip -p %1$s ramdisk-recovery.ub > /boot/uRecRam ; busybox unzip -p %1$s kernel > /boot/uRecImg ; busybox umount /boot ; rmdir /boot; busybox mount -oro,remount / ; ",
      "name": "Nook Color",
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
        "3.2.0.1"
      ]
    },
    {
      "init": "init.bahamas.rc",
      "key": "click",
      "lunch": "cyanogen_click-eng",
      "version": "5.0.2.0",
      "name": "HTC Click/Tattoo",
      "legacy_versions": [
        "3.0.0.6",
        "3.0.0.6",
        "3.0.2.7",
        "5.0.0.8",
        "5.0.1.0"
      ]
    },
    {
      "init": "init_recovery.rc",
      "key": "a7",
      "version": "3.0.0.8",
      "name": "Elocity A7",
      "legacy_versions": [
        "3.0.0.8"
      ],
      "readonly_recovery": true
    },
    {
      "init": "init.zero.rc",
      "key": "zero",
      "version": "3.0.1.3",
      "name": "Geeksphone Zero",
      "legacy_versions": [
        "3.0.1.3"
      ]
    },
    {
      "init": "init.speedy.rc",
      "key": "speedy",
      "touch_version": "5.8.1.6",
      "lunch": "cyanogen_speedy-eng",
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
      ]
    },
    {
      "init": "init.aries.rc",
      "key": "captivatemtd",
      "reboot_recovery": "echo 1 > /cache/.startrecovery ; sync ; reboot ;",
      "name": "Samsung Captivate (MTD)",
      "legacy_versions": [

      ],
      "officially_supported": false
    },
    {
      "init": "init.aries.rc",
      "key": "showcasemtd",
      "reboot_recovery": "echo 1 > /cache/.startrecovery ; sync ; reboot ;",
      "name": "Samsung Showcase (MTD)",
      "legacy_versions": [

      ],
      "officially_supported": false
    },
    {
      "init": "init.aries.rc",
      "key": "mesmerizemtd",
      "reboot_recovery": "echo 1 > /cache/.startrecovery ; sync ; reboot ;",
      "name": "Samsung Mesmerize (MTD)",
      "legacy_versions": [

      ],
      "officially_supported": false
    },
    {
      "init": "init.aries.rc",
      "key": "fascinatemtd",
      "reboot_recovery": "echo 1 > /cache/.startrecovery ; sync ; reboot ;",
      "name": "Samsung Fascinate (MTD)",
      "legacy_versions": [

      ],
      "officially_supported": false
    },
    {
      "init": "init.aries.rc",
      "key": "vibrantmtd",
      "reboot_recovery": "echo 1 > /cache/.startrecovery ; sync ; reboot ;",
      "name": "Samsung Vibrant (MTD)",
      "legacy_versions": [

      ],
      "officially_supported": false
    },
    {
      "init": "init.aries.rc",
      "key": "galaxysbmtd",
      "reboot_recovery": "echo 1 > /cache/.startrecovery ; sync ; reboot ;",
      "name": "Samsung GalaxyS i9000B (MTD)",
      "legacy_versions": [

      ],
      "officially_supported": false
    },
    {
      "init": "init.aries.rc",
      "key": "galaxysmtd",
      "reboot_recovery": "echo 1 > /cache/.startrecovery ; sync ; reboot ;",
      "name": "Samsung GalaxyS i9000 (MTD)",
      "legacy_versions": [

      ],
      "officially_supported": false
    },
    {
      "init": "lpm.rc",
      "key": "epic4g",
      "lunch": "full_epic4g-eng",
      "version": "5.0.2.7",
      "name": "Samsung Epic4G",
      "legacy_versions": [

      ],
      "readonly_recovery": true
    },
    {
      "init": "init.tinyandroid.rc",
      "key": "streak7",
      "version": "3.0.2.0",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk3p1 ; ",
      "name": "Dell Streak 7",
      "legacy_versions": [
        "3.0.2.0",
        "3.0.1.9",
        "3.0.1.8",
        "3.0.1.7"
      ]
    },
    {
      "init": "init.mecha.rc",
      "key": "mecha",
      "touch_version": "5.8.0.2",
      "lunch": "cyanogen_mecha-eng",
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
      "alternate_recovery": {
        "clockwork": false,
        "name": "RA_GNM Recovery v3.05",
        "url": "http://dl.dropbox.com/u/12949506/RomManager/recovery-ra-mecha-3.05.img"
      }
    },
    {
      "init": "init.ideos.rc",
      "key": "ideos",
      "version": "3.0.2.4",
      "name": "Huawei U8150 Ideos",
      "legacy_versions": [
        "3.0.2.4"
      ]
    },
    {
      "init": "init.stingray.rc",
      "key": "stingray",
      "touch_version": "6.0.2.9",
      "lunch": "cm_stingray-userdebug",
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
      ]
    },
    {
      "init": "init.leo.rc",
      "key": "leo",
      "version": "3.1.0.0",
      "name": "HTC HD2",
      "legacy_versions": [
        "3.0.2.5",
        "3.0.2.4",
        "3.0.2.5"
      ]
    },
    {
      "init": "init.zeppelin.rc",
      "key": "zeppelin",
      "lunch": "cyanogen_zeppelin-eng",
      "version": "5.0.2.0",
      "name": "Motorola CLIQ XT/Quench (MB501)",
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
      "init": "init.saga.rc",
      "key": "saga",
      "touch_version": "5.8.1.5",
      "lunch": "full_saga-eng",
      "version": "5.0.2.0",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p21 ; ",
      "name": "HTC Desire S",
      "legacy_versions": [
        "3.0.2.6",
        "5.0.1.9"
      ]
    },
    {
      "init": "init_recovery.rc",
      "key": "p999",
      "reboot_recovery": "echo 'boot-recovery' | dd of=/dev/block/mmcblk0p3 seek=6144 bs=1 ; reboot ; ",
      "lunch": "cyanogen_p999-eng",
      "version": "5.0.2.0",
      "name": "LG G2X (T-Mobile)",
      "legacy_versions": [
        "3.0.2.7",
        "5.0.0.8",
        "5.0.1.0",
        "5.0.1.4",
        "5.0.1.6"
      ],
      "readonly_recovery": true
    },
    {
      "key": "p990",
      "reboot_recovery": "echo 'boot-recovery' | dd of=/dev/block/mmcblk0p3 seek=6144 bs=1 ; reboot ; ",
      "touch_version": "6.0.1.5",
      "lunch": "cm_p990-userdebug",
      "version": "6.0.1.5",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p7 ; ",
      "name": "LG Optimus 2X",
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
        "5.0.2.0"
      ]
    },
    {
      "init": "init.herring.rc",
      "key": "crespo4g",
      "touch_version": "6.0.2.5",
      "lunch": "cm_crespo4g-userdebug",
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
      ]
    },
    {
      "init": "init.thunderg.rc",
      "key": "thunderg",
      "lunch": "full_thunderg-eng",
      "version": "5.0.2.0",
      "name": "LG Optimus One (old BB)",
      "legacy_versions": [
        "3.1.0.0",
        "5.0.0.8",
        "5.0.1.0"
      ],
      "alternate_recovery": {
        "clockwork": false,
        "name": "RA_GNM Recovery v2.2.1",
        "url": "http://dl.dropbox.com/u/12949506/RomManager/recovery-RA-thunderg-2.2.1-GNM.img"
      }
    },
    {
      "init": "init.thunderg.rc",
      "key": "p500",
      "lunch": "cyanogen_p500-eng",
      "version": "5.0.2.7",
      "name": "LG Optimus One",
      "legacy_versions": [
        "5.0.2.0"
      ]
    },
    {
      "init": "init.qcom.rc",
      "key": "u8220",
      "version": "3.1.0.1",
      "name": "Huawei U8220/U8230",
      "legacy_versions": [

      ]
    },
    {
      "init": "init.smdkc110.rc",
      "key": "charge",
      "version": "3.1.0.1",
      "name": "Samsung Charge",
      "legacy_versions": [

      ],
      "readonly_recovery": true
    },
    {
      "init": "init.mapphone_umts.rc",
      "key": "umts_jordan",
      "name": "Motorola Defy",
      "legacy_versions": [

      ],
      "officially_supported": false
    },
    {
      "init": "init.smdkc110.rc",
      "key": "galaxys4g",
      "version": "3.2.0.0",
      "name": "Samsung Galaxy S 4G",
      "legacy_versions": [
        "3.2.0.0"
      ],
      "readonly_recovery": true
    },
    {
      "init": "init.smdkc210.rc",
      "key": "galaxys2",
      "touch_version": "5.8.1.5",
      "version": "4.0.1.5",
      "name": "Samsung Galaxy S2",
      "inits": [
        "init.smdkc210.rc",
        "init.smdk4210.rc"
      ],
      "legacy_versions": [
        "4.0.1.4",
        "v4.0.1.4"
      ],
      "readonly_recovery": true,
      "ro.product.device": [
        "i9100",
        "galaxys2"
      ]
    },
    {
      "init": "init.smdk4210.rc",
      "key": "i9100",
      "lunch": "cm_i9100-userdebug",
      "version": "6.0.1.0",
      "name": "Samsung Galaxy S2",
      "inits": [
        "init.smdkc210.rc",
        "init.smdk4210.rc"
      ],
      "legacy_versions": [

      ],
      "officially_supported": false,
      "ro.product.device": [
        "i9100",
        "galaxys2"
      ]
    },
    {
      "init": "init.smdk4210.rc",
      "key": "n7000",
      "lunch": "cm_n7000-userdebug",
      "version": "6.0.1.2",
      "name": "Samsung Galaxy Note (GT-N7000)",
      "legacy_versions": [
        "6.0.1.0"
      ],
      "readonly_recovery": true
    },
    {
      "init": "init.smdkc110.rc",
      "key": "sidekick4g",
      "version": "4.0.0.2",
      "name": "Samsung Sidekick 4G",
      "legacy_versions": [

      ],
      "readonly_recovery": true
    },
    {
      "init": "init.vivo.rc",
      "key": "vivo",
      "lunch": "cyanogen_vivo-eng",
      "version": "5.0.2.0",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p21 ; ",
      "name": "HTC Incredible S",
      "legacy_versions": [
        "4.0.0.4",
        "4.0.0.6",
        "4.0.0.7",
        "4.0.0.8",
        "5.0.1.9"
      ]
    },
    {
      "init": "init.vivow.rc",
      "key": "vivow",
      "lunch": "cyanogen_vivow-eng",
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
      "alternate_recovery": {
        "clockwork": false,
        "name": "RA_GNM Recovery v3.05",
        "url": "http://dl.dropbox.com/u/12949506/RomManager/recovery-ra-vivow-3.05.img"
      }
    },
    {
      "key": "p920",
      "reboot_recovery": "echo '518 R 1' > /sys/kernel/kobject_lge_nvdata/dynamic_nvdata_raw_write ; reboot ; ",
      "touch_version": "6.0.1.9",
      "lunch": "cm_p920-userdebug",
      "version": "6.0.1.9",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p6 ; ",
      "name": "LG Optimus 3D",
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
      ]
    },
    {
      "init": "init.galaxyace.rc",
      "key": "galaxyace",
      "version": "4.0.0.9",
      "flash_recovery": "/data/data/com.koushikdutta.rommanager/files/flash_image recoveryonly %s ; ",
      "name": "Samsung Galaxy Ace",
      "legacy_versions": [

      ]
    },
    {
      "init": "init_prep_keypad.sh",
      "key": "olympus",
      "touch_version": "5.8.1.8",
      "lunch": "generic_olympus-eng",
      "version": "5.0.2.0",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p10 ; ",
      "name": "Motorola Atrix 4G",
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
      ]
    },
    {
      "init": "init_recovery.rc",
      "key": "smb_a1002",
      "version": "4.0.1.5",
      "flash_recovery": "/data/data/com.koushikdutta.rommanager/files/tegra_flash_image recovery %s ; ",
      "name": "Viewsonic GTablet (smb_a1002)",
      "legacy_versions": [

      ]
    },
    {
      "init": "init.shooter.rc",
      "key": "shooter",
      "touch_version": "5.8.0.2",
      "lunch": "htc_shooter-eng",
      "version": "5.0.2.0",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p22 ; ",
      "name": "HTC EVO 3D",
      "legacy_versions": [
        "4.0.1.5",
        "5.0.0.0",
        "5.0.1.0"
      ]
    },
    {
      "init": "init.pyramid.rc",
      "key": "pyramid",
      "touch_version": "5.8.0.9",
      "lunch": "full_pyramid-eng",
      "version": "5.0.2.0",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p21 ; ",
      "name": "HTC Sensation",
      "legacy_versions": [
        "4.0.1.5",
        "5.0.0.1",
        "5.0.0.7",
        "5.0.0.8",
        "5.0.1.0"
      ]
    },
    {
      "init": "init.qcom.rc",
      "key": "ascend2",
      "version": "4.0.1.5",
      "name": "Huawei Ascend 2 (M865)",
      "inits": [
        "init.qcom.rc",
        "init.huawei.rc"
      ],
      "legacy_versions": [

      ]
    },
    {
      "init": "init.qcom.rc",
      "key": "a70",
      "version": "4.0.1.5",
      "name": "Micromax A70",
      "legacy_versions": [

      ]
    },
    {
      "init": "init.galaxygio.rc",
      "key": "galaxygio",
      "version": "4.0.1.5",
      "name": "Samsung Galaxy Gio",
      "legacy_versions": [

      ],
      "readonly_recovery": true
    },
    {
      "init": "init.smdkc110.rc",
      "key": "indulge910",
      "version": "4.0.1.5",
      "name": "Samsung Indulge 910",
      "legacy_versions": [

      ],
      "readonly_recovery": true
    },
    {
      "init": "init.smdkc110.rc",
      "key": "indulge915",
      "version": "4.0.1.5",
      "name": "Samsung Indulge 915",
      "legacy_versions": [

      ],
      "readonly_recovery": true
    },
    {
      "init": "/bootimages/ON_480x800_08fps_0000.rle",
      "key": "p970",
      "touch_version": "6.0.1.4",
      "lunch": "cm_p970-userdebug",
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
      ]
    },
    {
      "init": "init.shooteru.rc",
      "key": "shooteru",
      "touch_version": "5.8.0.2",
      "lunch": "full_shooteru-eng",
      "version": "5.0.2.0",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p21 ; ",
      "name": "HTC EVO 3D (GSM)",
      "legacy_versions": [
        "5.0.1.6",
        "5.0.1.7",
        "5.0.1.8",
        "5.0.1.9"
      ]
    },
    {
      "init": "init.mapphone_cdma.rc",
      "key": "droid2we",
      "reboot_recovery": "rm /cache/recovery/command ; echo 1 > /data/.recovery_mode ; sync ; reboot ;",
      "lunch": "cyanogen_droid2we-eng",
      "version": "5.0.2.3",
      "flash_recovery": "dd if=%s of=/preinstall/recovery/recovery.zip ; ",
      "name": "Motorola Droid 2 Global",
      "legacy_versions": [

      ],
      "readonly_recovery": true
    },
    {
      "init": "init.mapphone_cdma.rc",
      "key": "targa",
      "reboot_recovery": "rm /cache/recovery/command ; echo 1 > /data/.recovery_mode ; sync ; reboot ;",
      "lunch": "generic_targa-eng",
      "version": "5.0.2.5",
      "flash_recovery": "dd if=%s of=/preinstall/recovery/recovery.zip ; ",
      "name": "Motorola Droid Bionic",
      "legacy_versions": [
        "5.0.2.3",
        "5.0.2.4"
      ],
      "readonly_recovery": true
    },
    {
      "init": "init.mapphone_cdma.rc",
      "key": "daytona",
      "reboot_recovery": "rm /cache/recovery/command ; echo 1 > /data/.recovery_mode ; sync ; reboot ;",
      "lunch": "generic_daytona-eng",
      "version": "5.0.2.5",
      "flash_recovery": "dd if=%s of=/preinstall/recovery/recovery.zip ; ",
      "name": "Motorola Droid X2",
      "legacy_versions": [
        "5.0.2.3",
        "5.0.2.4"
      ],
      "readonly_recovery": true
    },
    {
      "init": "init.mapphone_cdma.rc",
      "key": "solana",
      "reboot_recovery": "rm /cache/recovery/command ; echo 1 > /data/.recovery_mode ; sync ; reboot ;",
      "lunch": "full_solana-eng",
      "version": "5.0.2.6",
      "flash_recovery": "dd if=%s of=/preinstall/recovery/recovery.zip ; ",
      "name": "Motorola Droid 3",
      "legacy_versions": [
        "5.0.2.5"
      ],
      "readonly_recovery": true
    },
    {
      "init": "init.motus.rc",
      "key": "motus",
      "lunch": "cyanogen_motus-eng",
      "version": "5.0.2.6",
      "name": "Motorola Backflip",
      "legacy_versions": [

      ]
    },
    {
      "init": "init.gt-s5570.rc",
      "key": "tass",
      "lunch": "tass-eng",
      "version": "5.0.2.6",
      "name": "Samsung Galaxy Mini",
      "legacy_versions": [

      ],
      "readonly_recovery": true
    },
    {
      "init": "init.u8800.rc",
      "key": "u8800",
      "lunch": "huawei_u8800-eng",
      "version": "5.0.2.6",
      "flash_recovery": "mount -o remount,rw -t vfat /dev/block/mmcblk0p1 /cust_backup ; cat %s > /cust_backup/image/recovery.img ;",
      "name": "Huawei U8800",
      "legacy_versions": [

      ]
    },
    {
      "init": "init.smdkc210.rc",
      "key": "galaxys2att",
      "touch_version": "5.8.1.5",
      "lunch": "cyanogen_galaxys2att-eng",
      "version": "5.0.2.6",
      "name": "Samsung Galaxy S2 (AT&T)",
      "inits": [
        "init.smdkc210.rc",
        "init.smdk4210.rc"
      ],
      "legacy_versions": [

      ],
      "readonly_recovery": true
    },
    {
      "init": "init.target.rc",
      "key": "hercules",
      "touch_version": "6.0.2.8",
      "lunch": "cm_hercules-userdebug",
      "version": "6.0.2.8",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p22 bs=4096 ; ",
      "name": "Samsung Galaxy S2 (T-Mobile)",
      "legacy_versions": [
        "5.0.2.6",
        "5.0.2.7",
        "6.0.1.4",
        "6.0.1.5",
        "6.0.1.9",
        "6.0.2.3",
        "6.0.2.7"
      ],
      "owners": {
        "jmprblckwing182@gmail.com": true
      }
    },
    {
      "init": "init.smdkc210.rc",
      "key": "epic4gtouch",
      "touch_version": "5.8.1.5",
      "lunch": "full_epic4gtouch-eng",
      "version": "5.0.2.7",
      "name": "Samsung Epic 4G Touch",
      "legacy_versions": [
        "5.0.2.6",
        "5.0.2.7"
      ],
      "readonly_recovery": true
    },
    {
      "init": "init.ruby.rc",
      "key": "ruby",
      "lunch": "full_ruby-eng",
      "version": "5.0.2.6",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p23 bs=4096 ; ",
      "name": "HTC Amaze",
      "legacy_versions": [

      ]
    },
    {
      "init": "init.gt-i5500.rc",
      "key": "galaxy5",
      "lunch": "samsung_galaxy5-eng",
      "version": "5.0.2.8",
      "name": "Samsung Galaxy 5",
      "legacy_versions": [
        "5.0.2.8"
      ],
      "readonly_recovery": true
    },
    {
      "init": "init.mooncake.rc",
      "key": "mooncake",
      "lunch": "generic_mooncake-eng",
      "version": "5.0.2.7",
      "name": "ZTE Racer",
      "legacy_versions": [

      ]
    },
    {
      "init": "init.smdkc110.rc",
      "key": "vzwtab",
      "lunch": "full_vzwtab-eng",
      "version": "5.0.2.7",
      "name": "Samsung Galaxy Tab (VZW)",
      "legacy_versions": [
        "5.0.2.7",
        "5.0.2.7",
        "5.0.2.7"
      ],
      "readonly_recovery": true
    },
    {
      "init": "init.doubleshot.rc",
      "key": "doubleshot",
      "lunch": "full_doubleshot-eng",
      "version": "5.0.2.7",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p21 bs=4096 ; ",
      "name": "HTC MyTouch 4G Slide",
      "legacy_versions": [
        "5.0.2.7",
        "5.0.2.7"
      ]
    },
    {
      "init": "init.tuna.rc",
      "key": "maguro",
      "touch_version": "6.0.2.3",
      "lunch": "cm_maguro-userdebug",
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
      ]
    },
    {
      "init": "init.tuna.rc",
      "key": "toro",
      "touch_version": "6.0.2.3",
      "lunch": "cm_toro-userdebug",
      "version": "6.0.2.3",
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
        "6.0.1.5"
      ]
    },
    {
      "init": "init.thunderc.rc",
      "key": "lg690",
      "lunch": "full_lg690-eng",
      "version": "5.0.2.7",
      "name": "LG Optimus C LW690",
      "legacy_versions": [

      ]
    },
    {
      "init": "init.muscat.rc",
      "key": "c660",
      "lunch": "c660-eng",
      "version": "5.0.2.7",
      "name": "LG Optimus Pro",
      "legacy_versions": [

      ]
    },
    {
      "init": "init.univa.rc",
      "key": "e510",
      "lunch": "e510-eng",
      "version": "5.0.2.7",
      "name": "LG Optimus Hub",
      "legacy_versions": [

      ]
    },
    {
      "init": "init.victory.rc",
      "key": "epicmtd",
      "reboot_recovery": "/system/xbin/busybox devmem 0x57fff800 32 0x5EC0B007; sync ; reboot ;",
      "touch_version": "5.8.1.5",
      "lunch": "cyanogen_epicmtd-eng",
      "version": "5.0.2.7",
      "name": "Samsung Epic4G (MTD)",
      "legacy_versions": [

      ],
      "officially_supported": false
    },
    {
      "init": "init.holiday.rc",
      "key": "holiday",
      "lunch": "full_holiday-eng",
      "version": "5.0.2.7",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p23 bs=4096 ; ",
      "name": "HTC Holiday",
      "legacy_versions": [
        "5.0.2.7",
        "5.0.2.7",
        "5.0.2.7"
      ]
    },
    {
      "key": "e730",
      "lunch": "e730-eng",
      "version": "5.0.2.7",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p17 bs=4096 ;",
      "name": "LG Optimus SOL / TMo LG myTouch",
      "inits": [
        "init.victor.rc",
        "init.e739.rc"
      ],
      "legacy_versions": [

      ]
    },
    {
      "init": "init.marvel.rc",
      "key": "marvel",
      "lunch": "generic_marvel-eng",
      "version": "5.0.2.8",
      "name": "HTC Wildfire S",
      "legacy_versions": [
        "5.0.2.7"
      ]
    },
    {
      "init": "init.mapphone_umts.rc",
      "key": "sunfire",
      "lunch": "full_sunfire-eng",
      "version": "5.0.2.8",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p10 bs=4096 ;",
      "name": "Motorola Photon 4G",
      "inits": [
        "init.mapphone_umts.rc",
        "init.mapphone_cdma.rc"
      ],
      "legacy_versions": [
        "5.0.2.7"
      ]
    },
    {
      "init": "init.u8160.rc",
      "key": "u8160",
      "lunch": "huawei_u8160-eng",
      "version": "5.0.2.8",
      "name": "Huawei U8160",
      "inits": [
        "init.huawei.rc",
        "init.u8160.rc"
      ],
      "legacy_versions": [
        "5.0.2.8"
      ]
    },
    {
      "init": "init.vigor.rc",
      "key": "vigor",
      "touch_version": "6.0.2.3",
      "lunch": "cm_vigor-userdebug",
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
      ]
    },
    {
      "init": "init.expresskt.rc",
      "key": "express",
      "lunch": "full_express-userdebug",
      "version": "5.8.1.5",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p21 bs=4096 ;",
      "name": "HTC EVO View 4G",
      "legacy_versions": [

      ]
    },
    {
      "init": "init.cardhu.rc",
      "key": "tf201",
      "touch_version": "5.8.3.4",
      "lunch": "cm_tf201-userdebug",
      "version": "5.8.3.4",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p4 ;",
      "name": "Asus Transformer Prime",
      "legacy_versions": [
        "5.5.0.4",
        "5.8.2.0"
      ]
    },
    {
      "init": "init.mapphone_cdma.rc",
      "key": "maserati",
      "reboot_recovery": "rm /cache/recovery/command ; echo 1 > /data/.recovery_mode ; sync ; reboot ;",
      "version": "5.0.2.0",
      "name": "Motorola Droid 4",
      "legacy_versions": [

      ],
      "officially_supported": false
    },
    {
      "init": "init.mapphone_cdma.rc",
      "key": "spyder",
      "reboot_recovery": "rm /cache/recovery/command ; echo 1 > /data/.recovery_mode ; sync ; reboot ;",
      "version": "5.0.2.0",
      "name": "Motorola RAZR",
      "legacy_versions": [

      ],
      "officially_supported": false
    },
    {
      "init": "init.marvelc.rc",
      "key": "marvelc",
      "lunch": "full_marvelc-eng",
      "version": "5.0.2.8",
      "name": "HTC Wildfire S CDMA",
      "legacy_versions": [

      ]
    },
    {
      "init": "init.ventana.rc",
      "key": "tf101",
      "touch_version": "5.8.3.4",
      "lunch": "cm_tf101-userdebug",
      "version": "6.0.1.3",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p4 ;",
      "name": "Asus Transformer",
      "legacy_versions": [
        "5.5.0.4",
        "5.8.1.9",
        "5.8.2.0",
        "5.8.2.1",
        "5.8.3.4"
      ]
    },
    {
      "init": "bootimages/boot_logo_00000.rle",
      "key": "p930",
      "touch_version": "6.0.1.5",
      "lunch": "cm_p930-userdebug",
      "version": "6.0.1.5",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p13 ;",
      "name": "LG Nitro HD / LG P930 (AT&T)",
      "legacy_versions": [
        "5.8.2.0",
        "6.0.1.4"
      ]
    },
    {
      "init": "init.smdkc210.rc",
      "key": "i777",
      "touch_version": "6.0.1.0",
      "lunch": "cm_i777-userdebug",
      "version": "6.0.1.0",
      "name": "Samsung Galaxy S2 (SGH-I777)",
      "inits": [
        "init.smdkc210.rc",
        "init.smdk4210.rc"
      ],
      "legacy_versions": [
        "5.8.1.8"
      ],
      "readonly_recovery": true
    },
    {
      "init": "init.pico.rc",
      "key": "pico",
      "lunch": "full_pico-eng",
      "version": "5.0.2.8",
      "name": "HTC Pico",
      "legacy_versions": [

      ]
    },
    {
      "init": "ueventd.endeavoru.rc",
      "key": "endeavoru",
      "touch_version": "5.8.4.0",
      "lunch": "cm_endeavoru-userdebug",
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
      ]
    },
    {
      "init": "init.ville.rc",
      "key": "ville",
      "touch_version": "6.0.2.9",
      "lunch": "cm_ville-userdebug",
      "version": "6.0.2.9",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p22 bs=4096 ;",
      "name": "HTC One S",
      "legacy_versions": [
        "5.5.0.4",
        "5.8.2.1",
        "5.8.2.2",
        "5.8.2.3",
        "5.8.3.1"
      ]
    },
    {
      "init": "init.p1.rc",
      "key": "p1",
      "reboot_recovery": "echo 1 > /cache/.startrecovery ; sync ; reboot ;",
      "version": "5.8.2.1",
      "name": "Samsung Galaxy Tab (MTD and GSM)",
      "legacy_versions": [

      ],
      "officially_supported": false
    },
    {
      "init": "init.p1c.rc",
      "key": "p1c",
      "reboot_recovery": "echo 1 > /cache/.startrecovery ; sync ; reboot ;",
      "version": "5.8.2.1",
      "name": "Samsung Galaxy Tab (MTD and CDMA)",
      "legacy_versions": [

      ],
      "officially_supported": false
    },
    {
      "init": "init.tuna.rc",
      "key": "toroplus",
      "touch_version": "6.0.2.3",
      "lunch": "cm_toroplus-userdebug",
      "version": "6.0.2.3",
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
        "6.0.1.5"
      ]
    },
    {
      "init": "ueventd.p3.rc",
      "key": "p4wifi",
      "touch_version": "5.8.3.1",
      "lunch": "cm_p4wifi-userdebug",
      "version": "6.0.2.9",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p2 ; ",
      "name": "Samsung Galaxy Tab 10.1 (Wifi)",
      "legacy_versions": [
        "4.0.0.4",
        "5.8.3.1"
      ]
    },
    {
      "init": "init.wingray.rc",
      "key": "wingray",
      "touch_version": "6.0.2.9",
      "lunch": "cm_wingray-userdebug",
      "version": "6.0.2.9",
      "flash_recovery": "dd if=%s of=/dev/block/platform/sdhci-tegra.3/by-name/recovery ; ",
      "name": "Motorola XOOM (Wi-Fi only)",
      "legacy_versions": [
        "5.8.3.1"
      ]
    },
    {
      "init": "init.omap.post_boot.sh",
      "key": "marquee",
      "lunch": "full_marquee-eng",
      "version": "5.0.2.8",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p4 bs=4096 ; ",
      "name": "LG Marquee",
      "legacy_versions": [

      ]
    },
    {
      "init": "init.omap.post_boot.sh",
      "key": "ignite",
      "lunch": "full_ignite-eng",
      "version": "5.0.2.8",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p4 bs=4096 ; ",
      "name": "LG Ignite",
      "legacy_versions": [

      ]
    },
    {
      "init": "init.target.rc",
      "key": "ms840",
      "touch_version": "5.8.3.1",
      "lunch": "full_ms840-userdebug",
      "version": "5.8.3.1",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p13 bs=4096 ; ",
      "name": "LG Connect 4G MS840",
      "legacy_versions": [

      ]
    },
    {
      "init": "init.target.rc",
      "key": "vs840",
      "touch_version": "5.8.3.1",
      "lunch": "full_vs840-userdebug",
      "version": "5.8.3.1",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p13 bs=4096 ; ",
      "name": "LG Lucid VS840",
      "legacy_versions": [

      ]
    },
    {
      "init": "init.jewel.rc",
      "key": "jewel",
      "touch_version": "5.8.3.5",
      "lunch": "cm_jewel-userdebug",
      "version": "5.8.3.5",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p22 bs=4096 ; ",
      "name": "HTC EVO LTE",
      "legacy_versions": [
        "5.8.3.4",
        "5.8.3.4"
      ]
    },
    {
      "init": "ueventd.smdk4x12.rc",
      "key": "i9300",
      "touch_version": "6.0.2.7",
      "lunch": "cm_i9300-userdebug",
      "version": "6.0.2.7",
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
        "6.0.1.2"
      ],
      "ro.product.devices": [
        "i9300",
        "m0"
      ]
    },
    {
      "init": "init.qcom.usb.rc",
      "key": "skyrocket",
      "touch_version": "6.0.1.4",
      "lunch": "cm_skyrocket-userdebug",
      "version": "6.0.1.4",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p22 bs=4096 ; ",
      "name": "Samsung Skyrocket",
      "legacy_versions": [
        "5.8.4.3",
        "6.0.1.0"
      ]
    },
    {
      "init": "init.qcom.usb.rc",
      "key": "quincyatt",
      "touch_version": "5.8.4.3",
      "lunch": "cm_quincyatt-userdebug",
      "version": "5.8.4.8",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p22 bs=4096 ; ",
      "name": "Samsung Galaxy Note (AT&T)",
      "legacy_versions": [
        "5.8.4.3"
      ]
    },
    {
      "init": "init.e0.rc",
      "key": "e400",
      "lunch": "cm_e400-userdebug",
      "version": "5.8.4.5",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p17 bs=4096 ; ",
      "name": "LG Optimus L3",
      "legacy_versions": [

      ]
    },
    {
      "init": "init.primou.rc",
      "key": "primou",
      "lunch": "cm_primou-userdebug",
      "version": "5.8.4.5",
      "name": "HTC One V",
      "legacy_versions": [

      ],
      "readonly_recovery": true
    },
    {
      "init": "init.d2att.rc",
      "key": "d2att",
      "touch_version": "6.0.2.8",
      "lunch": "cm_d2att-userdebug",
      "version": "6.0.2.8",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p18 bs=4096 ; ",
      "name": "Samsung Galaxy S3 (AT&T)",
      "legacy_versions": [
        "5.8.4.5",
        "5.8.4.6",
        "5.8.4.7",
        "6.0.1.1",
        "6.0.1.2",
        "6.0.2.3"
      ]
    },
    {
      "init": "init.d2tmo.rc",
      "key": "d2tmo",
      "touch_version": "6.0.2.8",
      "lunch": "cm_d2tmo-userdebug",
      "version": "6.0.2.8",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p18 bs=4096 ; ",
      "name": "Samsung Galaxy S3 (T-Mobile)",
      "legacy_versions": [
        "5.8.4.5",
        "5.8.4.6",
        "5.8.4.7",
        "6.0.1.2",
        "6.0.2.3"
      ]
    },
    {
      "init": "init.d2spr.rc",
      "key": "d2spr",
      "touch_version": "6.0.2.8",
      "lunch": "cm_d2spr-userdebug",
      "version": "6.0.2.8",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p18 bs=4096 ; ",
      "name": "Samsung Galaxy S3 (Sprint)",
      "legacy_versions": [
        "5.8.4.5",
        "5.8.4.6",
        "5.8.4.7",
        "5.8.4.9",
        "6.0.1.2",
        "6.0.2.3"
      ]
    },
    {
      "init": "init.d2vzw.rc",
      "key": "d2vzw",
      "touch_version": "6.0.2.8",
      "lunch": "cm_d2vzw-userdebug",
      "twrp_version": "2.4.3.0",
      "version": "6.0.2.8",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p18 bs=4096 ; ",
      "name": "Samsung Galaxy S3 (Verizon)",
      "legacy_versions": [
        "5.8.4.6",
        "5.8.4.7",
        "5.8.4.8",
        "5.8.4.9",
        "6.0.1.2",
        "6.0.2.3"
      ]
    },
    {
      "init": "init.primoc.rc",
      "key": "primoc",
      "touch_version": "5.8.4.7",
      "lunch": "full_primoc-userdebug",
      "version": "5.8.4.7",
      "name": "HTC One V (CDMA)",
      "legacy_versions": [
        "5.8.4.6",
        "5.8.4.7"
      ],
      "readonly_recovery": true
    },
    {
      "init": "init.grouper.rc",
      "key": "grouper",
      "touch_version": "6.0.2.3",
      "lunch": "cm_grouper-userdebug",
      "version": "6.0.2.3",
      "flash_recovery": "dd if=%s of=/dev/block/platform/sdhci-tegra.3/by-name/SOS bs=4096 ; ",
      "name": "Google Nexus 7",
      "legacy_versions": [
        "6.0.0.6",
        "6.0.1.0",
        "6.0.1.9"
      ]
    },
    {
      "init": "init.su640.rc",
      "key": "su640",
      "touch_version": "6.0.1.0",
      "lunch": "cm_su640-userdebug",
      "version": "6.0.1.0",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p13 bs=4096 ; ",
      "name": "LG Optimus LTE (SKT)",
      "legacy_versions": [

      ]
    },
    {
      "init": "init.t1.rc",
      "key": "i9100g",
      "lunch": "cm_i9100g-userdebug",
      "version": "6.0.1.0",
      "name": "Samsung Galaxy S2 (GT-I9100G)",
      "legacy_versions": [

      ],
      "officially_supported": false
    },
    {
      "init": "init.espresso.rc",
      "key": "p3100",
      "touch_version": "6.0.2.7",
      "lunch": "cm_p3100-userdebug",
      "version": "6.0.2.7",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p6 bs=4096 ; ",
      "name": "Samsung Galaxy Tab 2 (GT-P3100)",
      "legacy_versions": [
        "6.0.1.1",
        "6.0.2.3"
      ]
    },
    {
      "init": "init.espresso.rc",
      "key": "p3110",
      "touch_version": "6.0.2.7",
      "lunch": "cm_p3110-userdebug",
      "version": "6.0.2.7",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p6 bs=4096 ; ",
      "name": "Samsung Galaxy Tab 2 (GT-P3110)",
      "legacy_versions": [
        "6.0.1.1",
        "6.0.2.3"
      ]
    },
    {
      "init": "init.espresso.rc",
      "key": "p3113",
      "touch_version": "6.0.2.3",
      "lunch": "cm_p3113-userdebug",
      "version": "6.0.2.3",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p6 bs=4096 ; ",
      "name": "Samsung Galaxy Tab 2 (GT-P3113)",
      "legacy_versions": [
        "6.0.1.1"
      ]
    },
    {
      "init": "init.espresso10.rc",
      "key": "p5100",
      "touch_version": "6.0.2.7",
      "lunch": "cm_p5100-userdebug",
      "version": "6.0.2.7",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p6 bs=4096 ; ",
      "name": "Samsung Galaxy Tab 2 (GT-P5100)",
      "legacy_versions": [
        "6.0.1.1",
        "6.0.2.3"
      ]
    },
    {
      "init": "init.espresso10.rc",
      "key": "p5110",
      "touch_version": "6.0.2.7",
      "lunch": "cm_p5110-userdebug",
      "version": "6.0.2.7",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p6 bs=4096 ; ",
      "name": "Samsung Galaxy Tab 2 (GT-P5110)",
      "legacy_versions": [
        "6.0.1.1",
        "6.0.2.3"
      ]
    },
    {
      "init": "init.espresso10.rc",
      "key": "p5113",
      "touch_version": "6.0.2.3",
      "lunch": "cm_p5113-userdebug",
      "version": "6.0.2.3",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p6 bs=4096 ; ",
      "name": "Samsung Galaxy Tab 2 (GT-P5113)",
      "legacy_versions": [
        "6.0.1.1"
      ]
    },
    {
      "init": "init.target.rc",
      "key": "vs920",
      "touch_version": "6.0.1.1",
      "lunch": "cm_vs920-userdebug",
      "version": "6.0.1.1",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p13 bs=4096 ; ",
      "name": "LG Spectrum 4G",
      "inits": [
        "init.target.rc",
        "init.iproj.rc",
        "init.i_vzw.rc",
        "init.iprj.rc"
      ],
      "legacy_versions": [

      ]
    },
    {
      "init": "init.zte.rc",
      "key": "x500",
      "touch_version": "6.0.1.1",
      "lunch": "cm_x500-userdebug",
      "version": "6.0.1.1",
      "name": "Score & Score M",
      "legacy_versions": [

      ]
    },
    {
      "init": "init.qcom.rc",
      "key": "vs910",
      "touch_version": "6.0.1.1",
      "lunch": "cm_vs910-userdebug",
      "version": "6.0.1.1",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p14 bs=4096 ; ",
      "name": "LG Revolution 4G",
      "inits": [
        "init.qcom.rc",
        "init.bryce.rc"
      ],
      "legacy_versions": [

      ]
    },
    {
      "init": "init.qcom.rc",
      "key": "ms910",
      "touch_version": "6.0.1.1",
      "lunch": "cm_ms910-userdebug",
      "version": "6.0.1.1",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p14 bs=4096 ; ",
      "name": "LG Esteeem 4G",
      "inits": [
        "init.qcom.rc",
        "init.bryce.rc"
      ],
      "legacy_versions": [
        "5.0.2.8"
      ]
    },
    {
      "init": "init.qcom.rc",
      "key": "ms695",
      "touch_version": "6.0.1.1",
      "lunch": "cm_ms695-userdebug",
      "version": "6.0.1.1",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p17 bs=4096 ; ",
      "name": "LG Optimus M+",
      "inits": [
        "init.qcom.rc",
        "init.m3.rc"
      ],
      "legacy_versions": [
        "6.0.1.0"
      ]
    },
    {
      "init": "init.p1.rc",
      "key": "p1l",
      "reboot_recovery": "echo 1 > /cache/.startrecovery ; sync ; reboot ;",
      "version": "5.8.2.1",
      "name": "Samsung Galaxy Tab (MTD and GSM - L)",
      "legacy_versions": [

      ],
      "officially_supported": false
    },
    {
      "init": "init.p1.rc",
      "key": "p1n",
      "reboot_recovery": "echo 1 > /cache/.startrecovery ; sync ; reboot ;",
      "version": "5.8.2.1",
      "name": "Samsung Galaxy Tab (MTD and GSM - N)",
      "legacy_versions": [

      ],
      "officially_supported": false
    },
    {
      "init": "init.d2usc.rc",
      "key": "d2usc",
      "touch_version": "6.0.2.8",
      "lunch": "cm_d2usc-userdebug",
      "version": "6.0.2.8",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p18 bs=4096 ; ",
      "name": "Samsung Galaxy S3 (US Cellular)",
      "legacy_versions": [
        "6.0.1.2",
        "6.0.2.3"
      ]
    },
    {
      "init": "init.mmi.usb.rc",
      "key": "asanti",
      "lunch": "cm_asanti-userdebug",
      "version": "6.0.1.3",
      "flash_recovery": "dd if=%s of=/dev/block/platform/msm_sdcc.1/by-name/recovery bs=4096 ; ",
      "name": "Motorola Photon Q",
      "inits": [
        "init.asanti.rc",
        "init.sprint.rc"
      ],
      "legacy_versions": [

      ]
    },
    {
      "init": "init.pecan.rc",
      "key": "p350",
      "lunch": "cm_p350-userdebug",
      "version": "6.0.1.5",
      "name": "LG Optimus Me",
      "legacy_versions": [
        "6.0.1.3",
        "6.0.1.4"
      ]
    },
    {
      "init": "fstab.qcom",
      "key": "p5att",
      "lunch": "cm_p5att-userdebug",
      "version": "6.0.1.4",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p22 bs=4096 ; ",
      "name": "Samsung Galaxy Tab 8.9 (AT&T)",
      "legacy_versions": [

      ]
    },
    {
      "init": "init.target.rc",
      "key": "t769",
      "touch_version": "6.0.1.4",
      "lunch": "cm_t769-userdebug",
      "version": "6.0.1.4",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p22 bs=4096 ; ",
      "name": "Samsung Galaxy S Blaze 4G",
      "legacy_versions": [

      ]
    },
    {
      "init": "init.carrier.rc",
      "key": "d2mtr",
      "touch_version": "6.0.2.8",
      "lunch": "cm_d2mtr-userdebug",
      "version": "6.0.2.8",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p18 bs=4096 ; ",
      "name": "Samsung Galaxy S3 (MetroPCS)",
      "inits": [
        "init.carrier.rc",
        "init.d2mtr.rc"
      ],
      "legacy_versions": [
        "6.0.1.5",
        "6.0.2.3"
      ]
    },
    {
      "init": "init.tf700t.rc",
      "key": "tf700t",
      "reboot_recovery": "echo 'boot-recovery' | dd of=/dev/block/mmcblk0p3 seek=6144 bs=1 ; reboot ; ",
      "touch_version": "6.0.2.3",
      "lunch": "cm_tf700t-userdebug",
      "version": "6.0.2.3",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p4 bs=4096 ; ",
      "name": "Asus Transformer Pad Infinity",
      "legacy_versions": [
        "6.0.1.8"
      ]
    },
    {
      "init": "init.manta.rc",
      "key": "manta",
      "touch_version": "6.0.2.3",
      "lunch": "cm_manta-userdebug",
      "version": "6.0.2.3",
      "flash_recovery": "dd if=%s of=/dev/block/platform/dw_mmc.0/by-name/recovery bs=4096 ; ",
      "name": "Google Nexus 10",
      "legacy_versions": [
        "6.0.1.5",
        "6.0.1.5",
        "6.0.1.6",
        "6.0.1.7",
        "6.0.1.8",
        "6.0.1.9"
      ]
    },
    {
      "init": "init.mako.rc",
      "key": "mako",
      "touch_version": "6.0.2.3",
      "lunch": "cm_mako-userdebug",
      "version": "6.0.2.3",
      "flash_recovery": "dd if=%s of=/dev/block/platform/msm_sdcc.1/by-name/recovery bs=4096 ; ",
      "name": "Google Nexus 4",
      "legacy_versions": [
        "6.0.1.5",
        "6.0.1.6",
        "6.0.1.8",
        "6.0.1.9",
        "6.0.2.0"
      ]
    },
    {
      "init": "init.debug_mfgkernel.rc",
      "key": "dlx",
      "touch_version": "6.0.2.8",
      "lunch": "cm_dlx-userdebug",
      "version": "6.0.2.8",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p20 bs=4096 ; ",
      "name": "HTC Droid DNA",
      "legacy_versions": [
        "6.0.1.5",
        "6.0.1.9",
        "6.0.2.3",
        "6.0.2.7"
      ]
    },
    {
      "init": "init.smdk4x12.rc",
      "key": "n7100",
      "touch_version": "6.0.1.9",
      "lunch": "cm_n7100-userdebug",
      "version": "6.0.1.9",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p6 bs=4096 ; ",
      "name": "Samsung Galaxy Note 2 (HSPA+)",
      "legacy_versions": [

      ]
    },
    {
      "init": "init.picasso_mf.rc",
      "key": "a700",
      "touch_version": "6.0.2.3",
      "lunch": "cm_a700-userdebug",
      "version": "6.0.2.3",
      "flash_recovery": "dd if=%s of=/dev/block/platform/sdhci-tegra.3/by-name/SOS bs=4096 ; ",
      "name": "Acer A700",
      "legacy_versions": [

      ]
    },
    {
      "init": "init.tilapia.rc",
      "key": "tilapia",
      "touch_version": "6.0.2.3",
      "lunch": "cm_tilapia-userdebug",
      "version": "6.0.2.3",
      "flash_recovery": "dd if=%s of=/dev/block/platform/sdhci-tegra.3/by-name/SOS bs=4096 ; ",
      "name": "Google Nexus 7 (GSM)",
      "legacy_versions": [

      ]
    },
    {
      "init": "init.t0ltespr.rc",
      "key": "t0ltespr",
      "touch_version": "6.0.2.5",
      "lunch": "cm_t0ltespr-userdebug",
      "version": "6.0.2.5",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p9 bs=4096 ; ",
      "name": "Samsung Galaxy Note 2 (Sprint)",
      "legacy_versions": [
        "6.0.2.3",
        "6.0.2.4"
      ]
    },
    {
      "init": "init.t0ltetmo.rc",
      "key": "t0ltetmo",
      "touch_version": "6.0.2.8",
      "lunch": "cm_t0ltetmo-userdebug",
      "version": "6.0.2.8",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p9 bs=4096 ; ",
      "name": "Samsung Galaxy Note 2 (T-Mobile)",
      "legacy_versions": [
        "6.0.2.3",
        "6.0.2.4",
        "6.0.2.5",
        "6.0.2.7"
      ]
    },
    {
      "init": "init.t0ltevzw.rc",
      "key": "t0ltevzw",
      "touch_version": "6.0.2.5",
      "lunch": "cm_t0ltevzw-userdebug",
      "version": "6.0.2.5",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p9 bs=4096 ; ",
      "name": "Samsung Galaxy Note 2 (Verizon)",
      "legacy_versions": [
        "6.0.2.3",
        "6.0.2.4"
      ]
    },
    {
      "init": "init.t0lteatt.rc",
      "key": "t0lteatt",
      "touch_version": "6.0.2.5",
      "lunch": "cm_t0lteatt-userdebug",
      "version": "6.0.2.5",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p9 bs=4096 ; ",
      "name": "Samsung Galaxy Note 2 (AT&T)",
      "legacy_versions": [
        "6.0.2.3",
        "6.0.2.4"
      ]
    },
    {
      "init": "init.t0lte.rc",
      "key": "t0lte",
      "touch_version": "6.0.2.7",
      "lunch": "cm_t0lte-userdebug",
      "version": "6.0.2.8",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p9 bs=4096 ; ",
      "name": "Samsung Galaxy Note 2 (LTE)",
      "legacy_versions": [
        "6.0.2.3",
        "6.0.2.4",
        "6.0.2.5"
      ]
    },
    {
      "key": "p720",
      "reboot_recovery": "echo '518 R 1' > /sys/kernel/kobject_lge_nvdata/dynamic_nvdata_raw_write ; reboot ; ",
      "touch_version": "6.0.2.3",
      "lunch": "cm_p720-userdebug",
      "version": "6.0.2.3",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p6 ; ",
      "name": "LG Optimus 3DMax",
      "inits": [
        "init.lgep720board.rc",
        "/bootimages/battery_charging_01.rle"
      ],
      "legacy_versions": [

      ]
    },
    {
      "init": "init.d2cri.rc",
      "key": "d2cri",
      "touch_version": "6.0.2.8",
      "lunch": "cm_d2cri-userdebug",
      "version": "6.0.2.8",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p18 bs=4096 ; ",
      "name": "Samsung Galaxy S3 (Cricket)",
      "legacy_versions": [
        "6.0.2.7"
      ]
    },
    {
      "init": "init.runnymede.rc",
      "key": "runnymede",
      "touch_version": "6.0.2.7",
      "lunch": "cm_runnymede-userdebug",
      "version": "6.0.2.7",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p21 bs=4096 ; ",
      "name": "HTC Sensation XL",
      "legacy_versions": [

      ]
    },
    {
      "init": "init.presto.rc",
      "key": "presto",
      "touch_version": "6.0.2.7",
      "lunch": "cm_presto-userdebug",
      "version": "6.0.2.7",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p18 bs=4096 ; ",
      "name": "Pantech Presto",
      "legacy_versions": [

      ]
    },
    {
      "init": "init.warp2.rc",
      "key": "warp2",
      "touch_version": "6.0.2.7",
      "lunch": "cm_warp2-userdebug",
      "version": "6.0.2.7",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p13 bs=4096 ; ",
      "name": "ZTE Sequent",
      "legacy_versions": [

      ]
    },
    {
      "init": "init.steelhead.rc",
      "key": "steelhead",
      "lunch": "cm_steelhead-userdebug",
      "version": "6.0.2.7",
      "flash_recovery": "dd if=%s of=/dev/block/platform/omap/omap_hsmmc.0/by-name/recovery bs=4096 ; ",
      "name": "Google Nexus Q",
      "legacy_versions": [

      ]
    },
    {
      "key": "prevail2spr",
      "touch_version": "6.0.2.7",
      "lunch": "cm_prevail2spr-userdebug",
      "version": "6.0.2.7",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p15 bs=4096 ; ",
      "name": "Samsung Prevail 2 (Boost Mobile)",
      "inits": [
        "init.carrier.rc",
        "init.prevail2spr.rc"
      ],
      "legacy_versions": [

      ]
    },
    {
      "init": "init.golden.rc",
      "key": "golden",
      "touch_version": "6.0.2.7",
      "lunch": "cm_golden-userdebug",
      "version": "6.0.2.7",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p21 bs=4096 ; ",
      "name": "Samsung Galaxy S3 Mini",
      "legacy_versions": [

      ]
    },
    {
      "init": "init.fireball.rc",
      "key": "fireball",
      "touch_version": "6.0.2.9",
      "lunch": "cm_fireball-userdebug",
      "version": "6.0.2.9",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p22 bs=4096 ; ",
      "name": "HTC Droid Incredible 4G LTE",
      "legacy_versions": [
        "6.0.2.8"
      ]
    },
    {
      "init": "init.puccinilte.rc",
      "key": "puccinilte",
      "touch_version": "6.0.2.8",
      "lunch": "cm_puccinilte-userdebug",
      "version": "6.0.2.8",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p23 bs=4096 ; ",
      "name": "HTC Jetstream",
      "legacy_versions": [

      ]
    },
    {
      "init": "init.u0.rc",
      "key": "p700",
      "touch_version": "6.0.2.8",
      "lunch": "cm_p700-userdebug",
      "version": "6.0.2.8",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p17 bs=4096 ; ",
      "name": "LG Optimus L7",
      "legacy_versions": [

      ]
    },
    {
      "init": "init.m7.rc",
      "key": "m7",
      "touch_version": "6.0.2.8",
      "lunch": "cm_m7-userdebug",
      "version": "6.0.2.8",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p34 bs=4096 ; ",
      "name": "HTC One",
      "legacy_versions": [

      ]
    },
    {
      "init": "init.dlxu.rc",
      "key": "dlxu",
      "touch_version": "6.0.2.8",
      "lunch": "cm_dlxu-userdebug",
      "version": "6.0.2.8",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p20 bs=4096 ; ",
      "name": "HTC Butterfly (dlxu)",
      "legacy_versions": [

      ]
    },
    {
      "init": "init.dlxub1.rc",
      "key": "dlxub1",
      "touch_version": "6.0.2.8",
      "lunch": "cm_dlxub1-userdebug",
      "version": "6.0.2.8",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p20 bs=4096 ; ",
      "name": "HTC Butterfly (dlxub1)",
      "legacy_versions": [

      ]
    },
    {
      "init": "init.dlxj.rc",
      "key": "dlxj",
      "touch_version": "6.0.2.8",
      "lunch": "cm_dlxj-userdebug",
      "version": "6.0.2.8",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p20 bs=4096 ; ",
      "name": "HTC Butterfly J",
      "legacy_versions": [

      ]
    },
    {
      "init": "init.m4.rc",
      "key": "e610",
      "lunch": "cm_e610-userdebug",
      "version": "6.0.2.8",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p17 bs=4096 ; ",
      "name": "LG Optimus L5",
      "legacy_versions": [

      ]
    },
    {
      "init": "init.evita.rc",
      "key": "evita",
      "touch_version": "6.0.2.8",
      "lunch": "cm_evita-userdebug",
      "version": "6.0.2.8",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p22 bs=4096 ; ",
      "name": "HTC One X (AT&T)",
      "legacy_versions": [

      ]
    },
    {
      "init": "init.p4.rc",
      "key": "p4",
      "touch_version": "6.0.2.9",
      "lunch": "cm_p4-userdebug",
      "version": "6.0.2.9",
      "flash_recovery": "dd if=%s of=/dev/block/platform/sdhci-tegra.3/by-num/p2 bs=4096 ; ",
      "name": "Samsung Galaxy Tab 10.1",
      "legacy_versions": [

      ]
    },
    {
      "init": "init.p4tmo.rc",
      "key": "p4tmo",
      "touch_version": "6.0.2.9",
      "lunch": "cm_p4tmo-userdebug",
      "version": "6.0.2.9",
      "flash_recovery": "dd if=%s of=/dev/block/platform/sdhci-tegra.3/by-num/p2 bs=4096 ; ",
      "name": "Samsung Galaxy Tab 10.1 (T-Mobile)",
      "legacy_versions": [

      ]
    },
    {
      "init": "init.p4vzw.rc",
      "key": "p4vzw",
      "touch_version": "6.0.2.9",
      "lunch": "cm_p4vzw-userdebug",
      "version": "6.0.2.9",
      "flash_recovery": "dd if=%s of=/dev/block/platform/sdhci-tegra.3/by-num/p2 bs=4096 ; ",
      "name": "Samsung Galaxy Tab 10.1 (Verizon)",
      "legacy_versions": [

      ]
    },
    {
      "init": "init.u0.rc",
      "key": "p760",
      "touch_version": "6.0.2.9",
      "lunch": "cm_p760-userdebug",
      "version": "6.0.2.9",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p4 bs=4096 ; ",
      "name": "LG Optimus L9",
      "legacy_versions": [

      ]
    },
    {
      "init": "init.i9305.rc",
      "touch_version": "6.0.2.9",
      "key": "i9305",
      "name": "i9305",
      "legacy_versions": [

      ]
    }
  ],
  "ad_network": "admob"
}