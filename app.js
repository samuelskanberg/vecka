window.addEventListener("load", function() {
    console.log("Hello World!");

    var canInstall = !!(navigator.mozApps && navigator.mozApps.installPackage);
    if (canInstall) {
        var manifestURL = "http://samuelskanberg.github.io/vecka/manifest.webapp";
        var installApp = navigator.mozApps.installPackage(manifestURL);
    }

    var timeUrl = "http://api.dryg.net/dagar/v1/";

    $.getJSON(timeUrl, function(data) {
        console.log("Time is: "+data);
        $("#weeknumber").html(data.vecka);
    });
});
