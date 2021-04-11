var count = 0;

var changer = document.querySelector("#value");
var btns = document.querySelectorAll(".btn");

btns.forEach(function (btn) {
    btn.addEventListener('click', function (event) {
        var clicked = event.currentTarget.classList;
        if (clicked.contains("decrease")) {
            count--;
        } else if (clicked.contains("increase")) {
            count++;
        } else {
            count = 0;
        }

        if (count > 0) {
            changer.style.color = "green";

        } else if (count < 0) {
            changer.style.color = "red";
        } else {
            changer.style.color = "#1b2021";
        }
        changer.innerHTML = count;

    });
});