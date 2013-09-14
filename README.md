playinvlc
=========

Little personal project to try and make it smooth and pleasant to use my old ubuntu laptop as a media server.

The first script I've added is a bookmarklet to scrape any mp4 links from a web page and then send it to a VLC player on your network.

This requires your VLC player to be running and to have web interface enabled.

Usage

javascript:(function(){if(window.myBookmarklet!==undefined){myBookmarklet();}else{document.body.appendChild(document.createElement('script')).src='https://raw.github.com/m0nkmaster/playinvlc/master/bookmarklet.js?';}})();
