//all the elements from the html being called to javascript and variables
let p1_score = document.getElementById("p1_score");
let p2_score = document.getElementById("p2_score");
let p1_button = document.getElementById("p1_button");
let p2_button = document.getElementById("p2_button");
let in_lead_text = document.getElementById("in_lead");
let red_button = document.getElementById("red_button");
let blue_button = document.getElementById("blue_button");
let green_button = document.getElementById("green_button");
let dark_mode = document.getElementById("dark_mode");
let body = document.getElementsByTagName("body")[0];
let sections = document.getElementsByTagName("section");
let keyboard_choice = document.getElementById("keyboard_choice");
let mouse_choice = document.getElementById("mouse_choice");
let p1_counter = 0;
let p2_counter = 0;

//The keyboard and mouse options both work when clicked. Still can't think of how to make them stop when the other
//is pressed.

//the code below will be active once the keyboard button is clicked
//todo key presses are working in Chrome but not Firefox
keyboard_choice.addEventListener("click", function () {
    mouse_choice.removeAttribute("disabled"); //makes the mouse button available to click
    keyboard_choice.setAttribute("disabled", ""); //keeps the keyboard button from being clicked twice

    //todo this was my attempt at flagging the events on and off. I feel like I was close
    // if (mouse_choice.getAttribute("disabled") === null){

    //tells the window to look for keypresses, then checks if the key is q or p
    window.addEventListener("keydown", function (e) {
        if(e.key === "q"){
            p1_counter++;
            p1_score.innerText = p1_counter;
            in_the_lead();
        }
        else if (e.key === "p"){
            p2_counter++;
            p2_score.innerText = p2_counter;
            in_the_lead();
        }
    })

});

//below code becomes active once mouse button is clicked.
mouse_choice.addEventListener("click", function () {
    keyboard_choice.removeAttribute("disabled");
    mouse_choice.setAttribute("disabled", "");

    //todo same as above attempt
    // if (keyboard_choice.getAttribute("disabled") === null){

    //checks if the p1 button or p2 button is clicked then attributes points to the appropriate side
    p1_button.addEventListener("click", function () {
        p1_score.innerText = p1_counter + 1;
        p1_counter++;
        in_the_lead();
    });

    p2_button.addEventListener("click", function () {
        p2_score.innerText = p2_counter + 1;
        p2_counter++;
        in_the_lead();
    });
});

//below are all the events handling background changes. references classes in css to toggle on and off
red_button.addEventListener("click", function () {
    body.classList.toggle("redBack");
    for (i = 0; i < sections.length; i++) {
        sections[i].classList.toggle("whiteTable")
    }
    p1_button.classList.toggle("redButtons");
    p2_button.classList.toggle("redButtons")
});

blue_button.addEventListener("click", function () {
    body.classList.toggle("blueBack");
    for (i = 0; i < sections.length; i++) {
        sections[i].classList.toggle("whiteTable")
    }
    p1_button.classList.toggle("blueButtons");
    p2_button.classList.toggle("blueButtons")
});

green_button.addEventListener("click", function () {
    body.classList.toggle("greenBack");
    for (i = 0; i < sections.length; i++) {
        sections[i].classList.toggle("whiteTable")
    }
    p1_button.classList.toggle("greenButtons");
    p2_button.classList.toggle("greenButtons")
});

dark_mode.addEventListener("click", function () {
    body.classList.toggle("darkBack");
    for (i = 0; i < sections.length; i++) {
        sections[i].classList.toggle("whiteTable")
    }
    p1_button.classList.toggle("darkButtons");
    p2_button.classList.toggle("darkButtons")
});

//this function will show results in the middle box by checking the score comparison
//alerts the winner of the match at 15 points
function in_the_lead() {
    if (parseInt(p1_counter) === 15) {
        alert("Player 1 Wins!!");
        p1_score.innerText = "0";
        p2_score.innerText = "0";
        p1_counter = 0;
        p2_counter = 0
    } else if (parseInt(p2_score.innerText) === 15) {
        alert("Player 2 Wins!!");
        p1_score.innerText = "0";
        p2_score.innerText = "0";
        p1_counter = 0;
        p2_counter = 0
    } else if (parseInt(p1_score.innerText) > parseInt(p2_score.innerText)) {
        in_lead_text.innerHTML = "<h2>In the Lead:<br/>Player 1</h2>";
    } else if (parseInt(p2_score.innerText) > parseInt(p1_score.innerText)) {
        in_lead_text.innerHTML = "<h2>In the Lead:<br/>Player 2</h2>";
    } else {
        in_lead_text.innerHTML = "<h2>It's a tie!</h2>";
    }
}
