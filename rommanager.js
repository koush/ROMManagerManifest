$.getJSON("http://pipes.yahoo.com/pipes/pipe.run?_id=332d9216d8910ba39e6c2577fd321a6a&_render=json&u=http%3A%2F%2Frommanager.appspot.com%2Fmanifests%2Fdevices.js&_callback=?",
function(data) {
    data = data.values.items[0];
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
}
);
