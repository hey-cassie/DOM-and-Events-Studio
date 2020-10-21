// Write your JavaScript code here.
// Remember to pay attention to page loading!
let takeoffButton = null;
let flightStatus = null;
let shuttleBackground = null;
let height = null;
let landButton = null;
let abortButton = null;
let upButton = null;
let downButton = null;
let rightButton = null;
let leftButton = null;
let rocketImage = null;

function init () {
    takeoffButton = document.getElementById("takeoff");
    flightStatus = document.getElementById("flightStatus");
    shuttleBackground = document.getElementById("shuttleBackground");
    height = document.getElementById("spaceShuttleHeight");
    landButton = document.getElementById("landing");
    abortButton = document.getElementById("missionAbort");
    upButton = document.getElementById("up");
    downButton = document.getElementById("down");
    rightButton = document.getElementById("right");
    leftButton = document.getElementById("left");

    takeoffButton.addEventListener ("click", function() {
        let result = window.confirm("Confirm that the shuttle is ready for takeoff.");
            if(result === true) {
                flightStatus.innerHTML = "Shuttle in Flight!";
                shuttleBackground.style.background = "blue";
                height.innerHTML = Number(height.innerHTML) + 10000;
            }
    });

    landButton.addEventListener ("click", function() {
        let land = window.alert("The shuttle is landing. Landing gear engaged.");
                flightStatus.innerHTML = "The shuttle has landed.";
                shuttleBackground.style.background = "green";
                height.innerHTML = 0;
    });

    abortButton.addEventListener ("click", function() {
        let abort = window.confirm("Confirm that you want to abort the mission." );
            if(abort === true) {
                flightStatus.innerHTML = "Mission aborted.";
                shuttleBackground.style.background = "green";
                height.innerHTML = 0;
            }
    });

    rocketImage = document.getElementById("rocket");
    rocketImage.style.position = "relative";
    rocketImage.style.top = "20px";
    rocketImage.style.left = "20px";
    rocketImage.style.visibility = "visible";

    let vertPosString = rocketImage.style.top;
    let vertPos = Number(vertPosString.split('px')[0]);
    let horizontalPosString = rocketImage.style.left;
    let horizontalPos = Number(horizontalPosString.split('px')[0]);


    upButton.addEventListener ("click", function() {
        if (vertPos > -10)
       vertPos -= 10;
       rocketImage.style.top = (`${vertPos}px`);
       height.innerHTML = Number(height.innerHTML) + 10000;
    });

    downButton.addEventListener ("click", function() {
        if (vertPos < 250)
        vertPos += 10;
        rocketImage.style.top = (`${vertPos}px`);
        height.innerHTML = Number(height.innerHTML) - 10000;
     });

     leftButton.addEventListener ("click", function() {
        if (horizontalPos > -160)
        horizontalPos -= 10;
        rocketImage.style.left = (`${horizontalPos}px`);
     });

     rightButton.addEventListener ("click", function() {
        if (horizontalPos < 160)
        horizontalPos += 10;
        rocketImage.style.left = (`${horizontalPos}px`);
     });

}


      window.onload = init
