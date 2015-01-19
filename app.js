window.addEventListener("load", function() {
    console.log("Hello World!");

    // Install app
    if (navigator.mozApps) {
        var manifestURL = location.href.substring(0, location.href.lastIndexOf("/")) + "/manifest.webapp";
        var installApp = navigator.mozApps.install(manifestURL);
    }

    // Get week number and set it
    var timeUrl = "http://api.dryg.net/dagar/v1/";
    $.getJSON(timeUrl, function(data) {
        console.log("Time is: "+data);
        $("#weeknumber").html(data.vecka);
    });
});
