var i = 0;

window.setInterval(function(){
    i = i + 1;
    postMessage(i);
}, 1);

