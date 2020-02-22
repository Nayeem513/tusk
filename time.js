var MotherBoard = /** @class */ (function () {
    function MotherBoard() {
        this.minTemp = 16;
        this.maxTemp = 32;
        this.currentTemp = 22;
        this.swingMode = false;
        this.currentState = false;
    }
    MotherBoard.prototype.onOff = function () {
        if (this.currentState == false) {
            this.currentState = true;
            console.log("AC turned on!!");
            document.getElementById('on_off').className = "led-green";
            document.getElementById('currentTemp').innerHTML = this.currentTemp.toString();
        }
        else {
            this.currentState = false;
            document.getElementById('on_off').className = "led-red";
            console.log("AC turned off!!");
            document.getElementById('currentTemp').innerHTML = "";
        }
    };
    return MotherBoard;
}());
var panel;
panel = new MotherBoard();
function provideFun() {
    panel.onOff();
}
var panel;
panel = new MotherBoard();
function increaseTemp() {
    event.preventDefault();
    console.log(panel.currentTemp >= panel.minTemp && panel.currentTemp <= panel.maxTemp);
    if (panel.currentState == true) {
        if (panel.currentTemp >= panel.minTemp && panel.currentTemp < panel.maxTemp) {
            panel.currentTemp++;
            console.log(panel.currentTemp);
            document.getElementById('currentTemp').innerHTML = panel.currentTemp.toString();
        }
    }
    else {
        document.getElementById('currentTemp').innerHTML = "You need to turn on Device first";
    }
}
function decreaseTemp() {
    event.preventDefault();
    if (panel.currentState == true) {
        console.log("inside");
        if (panel.currentTemp <= panel.maxTemp && panel.currentTemp > panel.minTemp) {
            panel.currentTemp--;
            document.getElementById('currentTemp').innerHTML = panel.currentTemp.toString();
        }
    }
    else {
        console.log("its inside");
        document.getElementById('currentTemp').innerHTML = "You need to turn on Device first";
    }
}
var panel;
panel = new MotherBoard();
function swing() {
    if (panel.currentState == false) {
        panel.currentState == true;
        console.log("swing mode is on ");
    }
    else {
        panel.currentState == true;
        alert("swing mode is off");
    }
}
var panel;
panel = new MotherBoard();
var currentModeDisplay = document.getElementById('current-mode');
var changeModeBtn = document.getElementById('mode-btn');
var remote = {
    allModes: "Auto Cool Dry Fan Heat".split(" "),
    currentMode: 0,
    changeMode: function () {
        var nextMode = this.currentMode === (this.allModes.length - 1) ? 0 : this.currentMode + 1;
        this.currentMode = nextMode;
        this.renderCurrentMode();
    },
    renderCurrentMode: function () {
        currentModeDisplay.innerHTML = this.allModes[this.currentMode];
    }
};
currentModeDisplay.innerHTML = (remote.allModes[remote.currentMode]);
changeModeBtn.addEventListener('click', remote.changeMode.bind(remote));



function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('txt').innerHTML =
        h + ":" + m + ":" + s;
    var t = setTimeout(startTime, 500);
}
function checkTime(i) {
    if (i < 10) {
        i = "0" + i;
    }
    ; // add zero in front of numbers < 10
    return i;
}

