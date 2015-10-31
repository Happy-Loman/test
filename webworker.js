var i = 0;

/*function timedCount() {
    i = i + 1;
    postMessage(i);
    setTimeout("timedCount()",500);
}

timedCount();*/
window.setInterval(function(){
    i = i + 1;
    postMessage(i);
}, 1);
