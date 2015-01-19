window.addEventListener("load", function() {
    console.log("Hello World!");
    var timeUrl = "http://api.dryg.net/dagar/v1/";

    $.getJSON(timeUrl, function(data) {
        console.log("Time is: "+data);
        $("#weeknumber").html(data.vecka);
    });
});
