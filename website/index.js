function aarin() {
    window.location.href = "aarin.html";
}

function akshinth()  {
    window.location.href = "akshinth.html";
}

function sri() {
    window.location.href = "sri.html";
}

function sanchay() {
    window.location.href = "sanchay.html";
}

function oliver() {
    window.location.href = "oliver.html";
}

function peter() {
    window.location.href = "peter.html";
}
function game() {
    window.location.href = "game.html";
}

/*document.getElementById("bot").addEventListener("click", function() {
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
});*/
function scrollToSmoothly(pos, time) {
    var currentPos = window.pageYOffset;
    var start = null;
    if(time == null) time = 500;
    pos = +pos, time = +time;
    window.requestAnimationFrame(function step(currentTime) {
        start = !start ? currentTime : start;
        var progress = currentTime - start;
        if (currentPos < pos) {
            window.scrollTo(0, ((pos - currentPos) * progress / time) + currentPos);
        } else {
            window.scrollTo(0, currentPos - ((currentPos - pos) * progress / time));
        }
        if (progress < time) {
            window.requestAnimationFrame(step);
        } else {
            window.scrollTo(0, pos);
        }
    });
}
