var app = {
    logs: [],
    initialize: function() {
        console.error = window.onerror = console.log = console.debug = console.info = function() {
            if (JSON.stringify(arguments).indexOf('iosrtc') !== -1) {
                return;
            }

            if (JSON.stringify(arguments).indexOf('No Content-Security-Policy') !== -1) {
                return;
            }

            if (JSON.stringify(arguments).indexOf('<') !== -1) {
                return;
            }

            app.logs.push(JSON.stringify(arguments, null, ' '));
        };

        app.bindEvents();
    },
    bindEvents: function() {
        document.addEventListener('deviceready', app.onDeviceReady, false);
    },
    checkAndroidPermissions: function(callback) {
        if (device.platform !== 'Android') {
            callback();
            return;
        }

        var permissions = cordova.plugins.permissions;

        var arr = [
            permissions.RECORD_AUDIO,
            permissions.MODIFY_AUDIO_SETTINGS
        ];

        permissions.hasPermission(arr, function(status) {
            if (status.hasPermission) {
                callback();
                return;
            }

            permissions.requestPermissions(arr, function(status) {
                if (status.hasPermission) {
                    callback();
                    return;
                }
                alert('Please manually enable microphone permissions.');
            }, function() {
                alert('Please manually enable microphone permissions.');
            });
        }, function() {
            alert('Please manually enable microphone permissions.');
        });
    },
    onDeviceReady: function() {
		app.checkAndroidPermissions(function() {

		});

        window.enableAdapter = false;
        var connection = new RTCMultiConnection();
        connection.onMediaError = function(error, constraints) {
            alert(JSON.stringify(error, null, ' '));
        };
        connection.socketURL = 'https://rtcmulticonnection.herokuapp.com:443/';
        connection.socketMessageEvent = 'audio-conference-demo';
        connection.session = {
            audio: true
        };
        connection.mediaConstraints = {
            audio: true
        };
        connection.sdpConstraints.mandatory = {
            OfferToReceiveAudio: true,
            OfferToReceiveVideo: false
        };
};

app.initialize();
