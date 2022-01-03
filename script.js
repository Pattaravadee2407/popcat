window.onload = function(){
    var img = document.getElementById("popcat1");
    var count = document.getElementById("score");
    var score = 0;
    var audio = new Audio("pop.mp3");

    img.addEventListener('mousedown',function(){
        increaseScore();
        img.src = 'popcat2.png';
        audio.play();
    });

    img.addEventListener('mouseup',function(){
        img.src = 'https://apkplz.net/storage/images/com/popcatmemosoundboard/popdogarjunaanakpertama/com.popcatmemosoundboard.popdogarjunaanakpertama_1.png';
});

    function increaseScore(){
        score++;
        count.innerHTML = score;
    }
}