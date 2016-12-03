$(function(){
    //http://justgage.com/
    
    $("#refresh").click(function(){ MesureSpeed(); });
    $("#refresh").prop('disabled', true);
    
    var g = new JustGage({
        id: "gauge",
        value: 0,
        min: 0,
        max: 100,
        title: "Download Speed",
        titleFontColor: "#000000",
        label: "Mbps",
        labelFontColor: "#000000",
        shadowSize: 2,
        startAnimationType: "<>",
        refreshAnimationType: "<>",
        levelColors: ["#FE2E2E", "#FAAC58", "#58FA58"],
        levelColorsGradient: false
    });

    MesureSpeed();
    
    function MesureSpeed(){
        
        g.refresh(0);
        $("#refresh").prop('disabled', true);
        
        var imageAddr = "nature.jpg" + "?n=" + Math.random();
        var startTime, endTime;
        var downloadSize = 10432011;
        var download = new Image();
        download.onload = function () {
            endTime = (new Date()).getTime();
            showResults();
        }
        startTime = (new Date()).getTime();
        download.src = imageAddr;
    
        function showResults()
        {
            var duration = (endTime - startTime) / 1000;
            var bitsLoaded = downloadSize * 8;
            var speedBps = (bitsLoaded / duration).toFixed(2);
            var speedKbps = (speedBps / 1024).toFixed(2);
            var speedMbps = (speedKbps / 1024).toFixed(2);
            
            g.refresh(speedMbps);
            $("#refresh").prop("disabled", false);
        }
    
    }
});


