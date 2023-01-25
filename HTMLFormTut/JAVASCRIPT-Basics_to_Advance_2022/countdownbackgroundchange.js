console.log("JS Loaded")

var countdownElement = document.getElementById('countdown');
var bgimageElement = document.getElementById('bg-image');
var initialcountdownVal = countdownElement.innerHTML;

//console.log(bgimageElement.src);

setInterval(function()
    {
        initialcountdownVal = initialcountdownVal > 0 ? initialcountdownVal -1 : 0;
        countdownElement.innerHTML = initialcountdownVal;
        var backImgpath = initialcountdownVal %2 ===0 ? 'images/raindrops-windowglass-image.jpg' : 'images/umbrella-raindrop.jpg';

        bgimageElement.src = backImgpath;
        bgimageElement.className = 'BackImage';
        console.log(bgimageElement);
    },1000)