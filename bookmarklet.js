/**
 * PlayInVLC
 * 
 * A short script, intended to be used as a bookmarklet, to send a link present on a given page to a VLC server.
 * 
 * VLC basics:
 * 
 * Playing a file:
 * http://192.168.1.73:8080/requests/status.xml?command=in_play&input=FILENAME
 * 
 * Full screen:
 * http://192.168.1.73:8080/requests/status.xml?command=fullscreen
 * 
 */

(function () {
    "use strict";

    var vlcHost = 'http://192.168.1.73:8080',
        fileSuffix = 'hi.mp4',
        anchors = document.querySelectorAll('a'),
        i = 0;

    String.prototype.endsWith = function (suffix) {
        return this.indexOf(suffix, this.length - suffix.length) !== -1;
    };

    function addScript(src) {
        var head = document.getElementsByTagName('head')[0],
            script = document.createElement('script');

        script.type = 'text/javascript';
        script.src = src;
        head.appendChild(script);
    }

    for (i = 0; i <= anchors.length; i += 1) {
        if (anchors[i].href.endsWith(fileSuffix)) {
            if (confirm("Toggle fullscreen?")) {
                addScript(vlcHost + '/requests/status.xml?command=fullscreen');
            }
            addScript(vlcHost + '/requests/status.xml?command=in_play&input=' + anchors[i]);
            break;
        }
    }
})();