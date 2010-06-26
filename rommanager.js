var RomManager = {};

RomManager.Loaded = false;

RomManager.Fetch = function() {
	var files = $(".rommanagermanifest");
	if (!files) {
		return;
	}
	$.each(files, function(i, element) {
		var manifests = element.attributes.manifests["value"];
		RomManager.ShowFile(manifests, element); 
	});
};

RomManager.all = function() {
	if (!RomManager.Loaded) {
		RomManager.Loaded = true;
	 	$(document).ready(function() {
			RomManager.Fetch();
		});
	} else {
		RomManager.Fetch();
	}
};

RomManager.ShowFile = function(manifests, element) {
	$.ajax({
		url: "manifeststest.js",
		type: "GET",
		dataType: "json",
		success: function(msg) {
		    var recoveries = msg.recoveries;
		    var devices = recoveries.devices;
		    var recovery_url = recoveries.recovery_url;
		    var recovery_zip_url = recoveries.recovery_zip_url;
		    var version = recoveries.version;
		    
		    var contents = "";
		    $.each(devices, function(i, device) {
		            var v = version;
		            if (device.version != null && device.version > version) {
		                v = device.version;
		            }
		            var readonly_recovery = device.readonly_recovery;
		            var url = null;
		            if (readonly_recovery) {
		                url = sprintf(recovery_zip_url, version, device.key);
		            } else {
		                url = sprintf(recovery_url, version, device.key);
		            }
		            
		            
		            contents = contents + sprintf("<a href='%s'>%s</a></br>", url, device.key);
            	});
		    
			if ($.browser.mozilla) {
				element.textContent = contents;
			} else {
				element.innerText = contents;
			}
		}
	});
};

