window.addEventListener("load", function() {
    console.log("Vecka!");

    var manifestURL = location.href.substring(0, location.href.lastIndexOf("/")) + "/manifest.webapp";
    // Check if app is installed
    var request = window.navigator.mozApps.checkInstalled(manifestURL);
    request.onerror = function(e) {
        alert("Error calling checkInstalled: " + request.error.name);
    };
    request.onsuccess = function(e) {
        // If app is not installed, install it
        if (!request.result) {
            if (navigator.mozApps) {
                console.log("Manifest url: "+manifestURL);
                var req = navigator.mozApps.install(manifestURL);
                req.onsuccess = function() {
                    console.log(this.result.origin);
                };
                req.onerror = function() {
                    console.log(this.error.name);
                };
            }
        }
    };

    // Get week number and set it
    var timeUrl = "http://api.dryg.net/dagar/v1/";
    $.getJSON(timeUrl, function(data) {
        console.log("Time is: "+data);
        $("#weeknumber").html(data.vecka);
    });
});
