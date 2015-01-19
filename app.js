window.addEventListener("load", function() {
    console.log("Hello World!");

    // Install app
    if (navigator.mozApps) {
        var manifestURL = location.href.substring(0, location.href.lastIndexOf("/")) + "/manifest.webapp";
        var req = navigator.mozApps.install(manifestURL);
        req.onsuccess = function() {
            console.log(this.result.origin);
        };
        req.onerror = function() {
            console.log(this.error.name);
        };
    }

    // Get week number and set it
    var timeUrl = "http://api.dryg.net/dagar/v1/";
    $.getJSON(timeUrl, function(data) {
        console.log("Time is: "+data);
        $("#weeknumber").html(data.vecka);
    });
});
