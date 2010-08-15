{
    minversion: 1890,
    manifests:
    [
    {
        // This is what name you want your ROMs to show up under.
        developer: "CyanogenMod",
        // Your id. This should have no spaces or other funny characters.
        // This would ideally be your Github id, so when you send me your manifest
        // I can verify who you are. But it can be anything really.
        id: "cyanogenmod",
        // The display summary. Two lines max.
        summary: "Mods and bacon for Dream, Sapphire, Droid, and Nexus One",
        // Is this a free ROM? This is decided by Koush/Cyanogen/CTSO.
        free: true,
        // The location of the developer's manifest.
        manifest: "http://gh-pages.clockworkmod.com/ROMManagerManifest/cyanogenmod.js",
        // The list of devices that this developer's ROMs support.
        // If you don't support a device, just don't list it!
        roms:
        {
            inc: true,
            sholes: true,
            passion: true,
            dream: true,
            magic: true,
            sapphire: true,
            bravo: true,
            espresso: true
        }
    },
    {
        developer: "CyanogenMod EBI1",
        id: "cyanogenmod",
        summary: "Mods and bacon for EBI1 devices",
        free: true,
        manifest: "http://briancrook.ca/RM.php",
        roms:
        {
            magic: true
        }
    },
    {
        developer: "Koush",
        id: "koush",
        summary: "Random prerelease stuff and goodies",
        manifest: "http://gh-pages.clockworkmod.com/ROMManagerManifest/koush.js",
        roms:
        {
            inc: true
        }
    },
    {
        developer: "CyanogenMod",
        id: "jnwhiteh",
        summary: "CyanogenMod for Hero by jnwhiteh",
        manifest: "http://gh-pages.clockworkmod.com/ROMManagerManifest/jnwhiteh.js",
        free: true,
        roms:
        {
            hero: true
        }
    },
    {
        developer: "CyanogenMod Nightlies",
        id: "cyanogenmodnightly",
        summary: "CyanogenMod Nightly builds. Very experimental and probably broken.  Do not report bugs for these builds.",
        manifest: "http://buildbot.teamdouche.net/nightly/manifest.js",
        roms:
        {
            inc: true,
            espresso: true,
            sholes: true,
            passion: true,
            dream: true,
            sapphire: true,
            bravo: true,
            supersonic: true
        }
    },
    {
        developer: "Extras",
        id: "cyanogenmod",
        summary: "Cool stuffs.",
        free: true,
        manifest: "http://gh-pages.clockworkmod.com/ROMManagerManifest/all.js",
        roms:
        {
            all: true
        }
    },
    {
        developer: "Bugless Beast",
        id: "pete",
        summary: "Bugless Beast ROMs by Pete (@peteralfonso)",
        manifest: "http://androidoverdrive.com/pete/ESE53/App/pete.js",
        free: true,
        roms:
        {
            sholes: true,
            supersonic: true
        }
    },
    {
        developer: "forkup",
        id: "forkup",
        summary: "Roms, Themes and Addons for Cyanogen on the Droid.",
        manifest: "http://www.forkup.info/droidthemes/forkup.js",
        roms:
        {
            sholes: true
        }
    },
    {
        developer: "Onix Concepts",
        id: "mrbobrowitz",
        summary: "Steam ROM, CleanLooks ROMs, and BlackMod ROMs",
        manifest: "http://www.mydroidfiles.com/mrbobrowitz/mrbobrowitzmanifest.js",
        roms:
        {
            sholes: true
        }
    },
    {
        developer: "Ultimate Droid",
        id: "blackdroid",
        summary: "Ultimate Droid by Blackdroid",
        manifest: "http://gh-pages.clockworkmod.com/ROMManagerManifest/blackdroid.js",
        roms:
        {
            sholes: true
        }
    },
    {
        developer: "Lithium Mod",
        id: "JRummy16",
        summary: "Source built roms and custom themes",
        manifest: "http://froyoroms.com/files/developers/jrummy/JRummy/Rom_Manager/jared.js",
        roms:
        {
            sholes: true
        }
    },
    {
        developer: "Smoked Glass-Esque",
        id: "m3kilpat",
        summary: "Smoked glass inspired themes that can be installed over CyanogenMod",
        manifest: "http://github.com/m3kilpat/ROMManagerManifest/raw/master/kilpat.js",
        roms:
        {
            sholes: true
        }
    },
    {
        developer: "bgill55",
        id: "bgill55",
        summary: "Additional themes and updates for Sapphire.",
        manifest: "http://www.jbthemes.com/bgill55/bgill55.js",
        roms:
        {
            sholes: true
        }
    },
    {
        developer: "ChevyNo1",
        id: "ChevyNo1",
        summary: "Overclock Kernels & ROMS for the Droid",
        manifest: "http://github.com/ChevyNo1/SimplyStunning/raw/master/SimplyStunning.js",
        roms:
        {
            sholes: true
        }
    },
    {
        developer: "Jairomeo",
        id: "jairomeo",
        summary: "Themes for multiple ROMs",
        manifest: "http://www.jbthemes.com/Flavored_Ice/jairomeo.js",
        roms:
        {
            passion: true,
            sholes: true
        }
    },
    {
        developer: "ArmyRanger251",
        id: "ArmyRanger251",
        summary: "Themes for Cyanogen on the Droid.",
        manifest: "http://theandroidspot.com/files/ArmyRanger251/ArmyRanger251.js",
        roms:
        {
            sholes: true
        }
    },
    {
        developer: "PMilzie",
        id: "PMilzie",
        summary: "HexFusion Theme for Droid CyanogenMod",
        manifest: "http://github.com/PMilzie/HexFusionTheme/raw/master/hexfusion.js",
        roms:
        {
            sholes: true
        }
    },
    {
        developer: "Stock Images",
        summary: "Revert back to stock phone images.",
        manifest: "http://gh-pages.clockworkmod.com/ROMManagerManifest/stock.js",
        free: true,
        roms:
        {
            passion: true,
            sholes: true
        }
    },
    {
        developer: "Kmobs Kernel",
        id: "kmobs",
        free: true,
        summary: "Undervolted Kernels for the Nexus One",
        manifest: "http://gh-pages.clockworkmod.com/ROMManagerManifest/kmobs.js",
        roms:
        {
            passion: true
        }
    },
    {
        developer: "KrazyKrivda",
        id: "krazykrivda",
        summary: "Great themes and more :)",
        manifest: "http://mydroidfiles.com/krazykrivda/manifest.js",
        roms:
        {
            passion: true,
            sholes: true
        }
    },
    {

        developer: "JsinLegacy",
        id: "JsinLegacy",
        summary: "Custom Themes & Goodies",
        manifest: "http://www.jbthemes.com/jsinlegacy/jsinlegacy.js",
        roms:
        {
            sholes: true,
            passion: true
        }
    },
    {
        developer: "Droid Concepts",
        id: "woodyman",
        summary: "Custom ROMs, Themes, and Live Wallpapers",
        manifest: "http://www.forkup.info/succulentdesire/woody.js",
        roms:
        {
            sholes: true
        }
    },
    {
        developer: "Pershoot",
        id: "pershoot",
        free: true,
        summary: "Custom kernels and other awesomeness",
        manifest: "http://gh-pages.clockworkmod.com/ROMManagerManifest/pershoot.js",
        roms:
        {
            passion: true,
            sapphire: true,
            dream: true,
            magic: true
        }
    },
    {
        developer: "roberj13",
        id: "roberj13",
        summary: "Custom Themes",
        manifest: "http://blue.macleod-web.net/RM_Manifest/blueenergy.js",
        roms:
        {
            sholes: true
        }
    },
    {
        developer: "slayher",
        id: "slayher",
        summary: "Complete ROMs Themed by slayher",
        manifest: "http://android.antbox.org/slayher/manifest.js",
        roms:
        {
            sholes: true
        }
    },
    {
        developer: "jdlfg",
        id: "jdlfg",
        summary: "Kernels for any ROM by jdlfg",
        manifest: "http://dl.dropbox.com/u/6011176/jdlfg.js",
        roms:
        {
            sholes: true
        }
    },
    {
        developer: "MartinLong",
        id: "martinlong1978",
        summary: "Froyo roms for Desire",
        manifest: "http://www.rozel.net/martin/manifest.js",
        free: true,
        roms:
        {
            bravo: true
        }
    },
    {
        developer: "Fresh",
        id: "flipz",
        summary: "Fresh Rom for Evo and HeroC by flipz",
        manifest: "http://geekfor.me/clockwork/fresh.js",
        free: true,
        roms:
        {
            heroc: true,
            supersonic: true
        }
    },
    {
        developer: "IEF - ShadowFrost",
        id: "IEF",
        summary: "Froyo ROM for Bravo, based on Defrost.",
        manifest: "http://www.shadowchild.nl/manifest.js",
        free: true,
        roms:
        {
            bravo: true
        }
    },
    {
        developer: "RichardTrip - DeFroST",
        id: "richardtrip",
        summary: "DeFroST for HTC Desire",
        manifest: "http://www.pctrip.nl/DeFroST/manifest.js",
        free: true,
        roms:
        {
            bravo: true
        }
    },
    {
        developer: "Shawe",
        id: "shawe",
        summary: "ROM's for HTC Desire and extras",
        manifest: "http://content.wuala.com/contents/shawe_ewahs/Publica/Android/ROM_Manager/manifest.js",
        free: true,
        roms:
        {
            bravo: true
        }
    },
    {

        developer: "RvU Team",
        id: "rvu",
        summary: "Custom ROM for the HTC Evo 4G",
        manifest: "http://www.fleshdroid.com/RvU/manifest1.js",
        free: true,
        roms:
        {
            supersonic: true
        }
    },

    {
        developer: "DamageControl",
        id: "damageless",
        summary: "Fast and stable ROM that lets you customize many basic and advanced options",
        manifest: "http://dl.damagedroms.com/misc/rom_manager_manifest.js",
        free: true,
        roms:
        {
            heroc: true,
            supersonic: true
        }
    },

    {
        developer: "OMJ",
        id: "OMJ",
        summary: "OMJ's HTC EVO ROMs",
        manifest: "http://vegasden.net/OMJ/ROMmanifest/omj.js",
        free: true,
        roms:
        {
            supersonic: true
        }
    },

    {
        developer: "joeykrim",
        id: "joeykrim",
        summary: "Refinements and tools bundled together for the HTC EVO",
        manifest: "http://www.joeyconway.me/evo/ROMManagerManifest/manifest.js",
        free: true,
        roms:
        {
            supersonic: true
        }
    },

    {
        developer: "PirateRUM",
        id: "piraterum",
        summary: "Fast and clean rom for HTC Desire",
        free: true,
        manifest: "http://piraten.boombuler.de/ROMManager/piraterum.php",
        roms:
        {
            bravo: true
        }
    },
    {
        developer: "CrunchySoft",
        id: "crunchybutternut",
        summary: "Fast and fully themed ROMs for the CDMA Hero by crunchybutternut.",
        free: true,
        manifest: "http://crunchysoft.pocketdevelopers.com/ROMManagerManifest/crunchysoft.js",
        roms:
        {
            heroc: true

        }
    },


    {
        developer: "Setenza",
        id: "Setenza",
        summary: "Froyo Desire roms fully themed with NexTheme",
        manifest: "http://www.set-studio.com/wordpress/DesireRoms/simplemanifest.js",
        free: true,
        roms:
        {
            bravo: true
        }
    },

    {
        developer: "AdamG - OpenDesire",
        id: "adamg",
        summary: "OpenDesire for HTC Desire",
        manifest: "http://android.adamg.co.uk/bravo/roms/rommanager_manifest.js",
        free: true,
        roms:
        {
            bravo: true
        }
    },
    {

        developer: "cvpcs",
        id: "cvpcs",
        summary: "Source-based mods made by CVPCS",
        manifest: "http://github.com/cvpcs/android_vendor_cvpcs/raw/froyo/rommanager/cvpcs-rmm.js",
        free: true,
        roms:
        {
            sholes: true
        }
    },
    {

        developer: "InsaneNemesis",
        id: "InsaneNemesis",
        summary: "ROM's and Themes Built From Source",
        manifest: "http://insanenemesis.xeudoxus.com/Insanely_Clean/InsaneNemesis.js",
        roms:
        {
            sholes: true
        }
    },
    {
        developer: "Pl3xRom",
        id: "billygalbreath",
        summary: "Pl3x Rom for the Motorola Droid",
        manifest: "http://www.pl3x.com/pl3xrom.js",
        roms:
        {
            sholes: true
        }
    },
    {
        developer: "Pay87",
        id: "jpameli",
        summary: "Stable HTC Desire / Bravo ROMs with the latest addons and patches",
        manifest: "http://android.jpameli.de/paysroms.js",
        free: true,
        roms:
        {
            desire: true
        }
    },
    {
        developer: "AleBaba",
        id: "aleho",
        summary: "Customized ROMs for the HTC Legend",
        manifest: "http://derhofbauer.at/rommanager/roms.js",
        free: true,
        roms:
        {
            legend: true
        }
    },
    {
        developer: "Matt4542",
        id: "matt4542",
        summary: "A Rom compiled from CyanogenMod source with added features!",
        manifest: "http://istream.freevar.com/manifest.js",
        roms:
        {
            sholes: true,
            passion: true
        }
    },
    {
        developer: "GSXRDON",
        id: "GSXR750",
        summary: "Themed Roms",
        manifest: "http://www.froyoroms.com/files/developers/jrummy/JRummy/Other/GSXRDON.js",
        roms:
        {
            sholes: true
        }
    },
    {
        developer: "meliantq",
        id: "meliantq",
        summary: "Rom for your HTC Desire",
        manifest: "http://www.meliantq.net/android/rommanager/aospdesire.js",
        free: true,
        roms:
        {
            bravo: true
        }
    },
    {
        developer: "Ihtfp69",
        id: "ihtfp69",
        summary: "Mods and bacon for the Droid Incredible",
        manifest: "http://pcjock.com/SkyRaider/manifest/skyraider.js",
        free: true,
        roms:
        {
            inc: true
        }
    },
    {
        developer: "NeoPhyTe",
        id: "the_neophyte",
        summary: "Modded ROM's HTC Desire",
        manifest: "http://content.wuala.com/contents/NeoPhyTe.x360/Publica/Android/ROM_Manager/manifest.js",
        free: true,
        roms:
        {
            bravo: true
        }
    },
    {
        developer: "Jamezelle",
        id: "jamezelle",
        summary: "ROMS for the Droid Eris!",
        manifest: "http://github.com/jamezelle/ROM-Manager-Manifest/raw/master/jamezelle.js",
        free: true,
        roms:
        {
            desirec: true
        }
    },
    {
        developer: "Pinkolin - Pinky Desire",
        id: "pinkolin",
        summary: "Pinkolin ROM's and extras for HTC Desire",
        manifest: "http://pinky.netlab.cz/ftp/roms/manifest.js",
        free: true,
        roms:
        {
            bravo: true
        }
    },
    {
        developer: "JagerRom",
        id: "CaptJager",
        summary: "Senseless deodexed Rom for Droid Incredible with couple of twists",
        manifest: "http://www.igotjaked.com/jagerrom.js",
        free: true,
        roms:
        {
            inc: true
        }
    }
    ]
}
