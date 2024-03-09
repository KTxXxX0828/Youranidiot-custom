window.addEventListener('DOMContentLoaded', function(){
    setInterval(() => {
        var randomx = Math.floor( Math.random() * 1000 );
        var randomy = Math.floor( Math.random() * 1000 );
        window.moveTo(randomx, randomy) 
    }, 50);
});