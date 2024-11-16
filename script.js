var screen = document.querySelectorAll(".screen")
var btn = document.querySelector("button")
var allelem = document.querySelectorAll(".elem")
var playground = document.querySelector(".playground")
var selected = ""
var scoreValue = document.querySelector(".time-score h5 span")
var score = 0
var countScore = 0
var HighScore = 0
var i = 14;
var imagesetter

btn.addEventListener("click", function () {
    screen[1].style.transform = "translateY(-100%)"
    i=14;
})

allelem.forEach(function (elem) {
    // console.log(elem)
    elem.addEventListener("click", function () {
        screen[2].style.transform = "translateY(-200%)"
        // selected = elem.childNodes[3].getAttribute("src")
        selected = elem.childNodes[1].getAttribute("src")
        console.log(selected)
     imagesetter =  setInterval(function () {
            createImage()
        }, 1000)
        timing();
    })
})

function createImage() {
    var newImg = document.createElement("img");
    newImg.setAttribute("src", selected);
    var x = Math.random() * 100;
    var y = Math.random() * 100;
    var rot = Math.random() * 360;
    newImg.style.left = x + "%";
    newImg.style.top = y + "%";
    newImg.style.rotate = rot + "deg";
    // console.log(newImg);
    playground.appendChild(newImg);

    catchImage();

    setTimeout(() => {
        playground.removeChild(newImg);
    }, 1500);
}



function catchImage() {
    var images = document.querySelectorAll(".playground img")
    images.forEach(function (elem) {
        elem.addEventListener("click", function () {
            score++
            scoreValue.innerHTML = score
            countScore = score

            if(HighScore<countScore){
                HighScore = countScore
            }
            else{
                HighScore
            }
        })
    })
}
 
function timing() {
    var timingInterval = setInterval(() => {
      var  timeElement = document.querySelector("#time-in-sec");
        if (i > 0) {
            timeElement.innerHTML = i;
            i--;
        } else if (i === 0) {
            clearInterval(timingInterval);
            clearInterval(imagesetter);
            document.querySelector("#screen1 h1").innerHTML = "Game Over";
            document.querySelector("#screen1 h2").style.opacity = "1";
            document.querySelector("#screen1 h3").style.opacity = "1";
            document.querySelector("#screen1 h2 span").innerHTML = countScore;
            document.querySelector("#screen1 h3 span").innerHTML = HighScore;
            document.querySelector("#screen2").style.transform = "translateY(100%)";
            document.querySelector("#screen3").style.transform = "translateY(200%)";
            document.querySelector("#screen1 button").innerHTML = "Reset";
            score = 0
            scoreValue.innerHTML = score
        }
    }, 1000);
}

