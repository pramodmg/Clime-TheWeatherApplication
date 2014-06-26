$(document).ready(function(){
    var d = new Date();
    var day = d.getDate();
    var month = d.getMonth();
    var m = ["january","february","march","april","may","june","july","august","september","october","november","december"];
    var y = d.getFullYear();
    document.getElementById("day").innerHTML = day + "th";
    document.getElementById("month").innerHTML = m[month] + ", " + y;

    document.addEventListener("deviceready", onDeviceReady, false);

    // device APIs are available
    //
    function onDeviceReady() {
        navigator.geolocation.getCurrentPosition(onSuccess, onError);
    }

    // onSuccess Geolocation
    //
    function onSuccess(position) {
        var element = document.getElementById('geolocation');
        // alert(1);
        alert("Latitude : "+ position.coords.latitude + "\n" + "longitude : "+position.coords.longitude);
        element.innerHTML = 'Latitude: '           + position.coords.latitude              + '<br />' +
                            'Longitude: '          + position.coords.longitude             + '<br />' +
                            'Altitude: '           + position.coords.altitude              + '<br />' +
                            'Accuracy: '           + position.coords.accuracy              + '<br />' +
                            'Altitude Accuracy: '  + position.coords.altitudeAccuracy      + '<br />' +
                            'Heading: '            + position.coords.heading               + '<br />' +
                            'Speed: '              + position.coords.speed                 + '<br />' +
                            'Timestamp: '          + position.timestamp                    + '<br />';
                            alert(position.coords.latitude);
    }

    // onError Callback receives a PositionError object
    //
    function onError(error) {
        alert('code: '    + error.code    + '\n' +
              'message: ' + error.message + '\n');
    }

});