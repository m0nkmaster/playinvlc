vlcHost = 'http://192.168.1.73:8080';
String.prototype.endsWith = function(suffix) {
    return this.indexOf(suffix, this.length - suffix.length) !== -1;
};

function addScript(src) {
   var head = document.getElementsByTagName('head')[0];
   var script = document.createElement('script');
   script.type = 'text/javascript';
   script.src = src;
   head.appendChild(script);
}

anchors = document.querySelectorAll('a');

for (var i=0; i <= anchors.length; i++){
    if (anchors[i].href.endsWith('hi.mp4')) {
        if (confirm ("Go fullscreen?")) {
            addScript(vlcHost + '/requests/status.xml?command=fullscreen');
        }
        addScript(vlcHost + '/requests/status.xml?command=in_play&input=' + anchors[i]);
        break;
    }
}

// ----
// VLC Commands
// 
// Playing a file:
// http://192.168.1.73:8080/requests/status.xml?command=in_play&input=FILENAME

// Full screen:
// http://192.168.1.73:8080/requests/status.xml?command=fullscreen