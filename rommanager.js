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
//		    var recoveries = msg.recoveries;
		    var devices = msg.devices;
		    
		    var contents = "";
		    $.each(devices, function(i, device) {
		            contents = contents + " " + device.key;
            	});
		    
			if ($.browser.mozilla) {
				element.textContent = contents;
			} else {
				element.innerText = contents;
			}
		}
	});
};

