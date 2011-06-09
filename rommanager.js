$.get("http://jsonp.deployfu.com/clean/" + encodeURIComponent("http://gh-pages.clockworkmod.com/ROMManagerManifest/devices.js"),
function(data) {
    var version = data.version;
    var recovery_url = data.recovery_url;
    var recovery_zip_url = data.recovery_zip_url;

    var contents = "";
    $.each(data.devices,
    function(i, device) {
        var v = version;
        if (device.version != null && device.version > version) {
            v = device.version;
        }
        var readonly_recovery = device.readonly_recovery;
        var url = null;
        if (readonly_recovery) {
            url = sprintf(recovery_zip_url, v, device.key);
        } else {
            url = sprintf(recovery_url, v, device.key);
        }
        contents = contents + sprintf("<a href=\"%s\">%s</a><br/>", url, device.name);
    });
    $('.rommanagermanifest').html(contents);
},
"jsonp"
);
