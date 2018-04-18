let state = {time: 0, startTime: 0,
bestTime: 0, points: 0, speed: 0}

export function addPoints(points){
    state.points += points;
    renderPoints();
};

export function updateSpeed(speed){
    state.speed = Math.round(speed);
    renderSpeed();
}
export function updateTime(time){
    state.time = time;
    renderTime();
}
export function setStartTime(time){
    state.startTime = time;
}
function renderPoints(){
    document.querySelector(".hud-points_val").innerHTML = `${state.points}`;
};

function renderSpeed(){
    document.querySelector(".hud-speed_val").innerHTML = `${state.speed}`;
}

function renderTime(){
    const elapsed = state.time - state.startTime;
    document.querySelector(".hud-time_val").innerHTML =
    `${renderMinutes(elapsed)}'${renderSeconds(elapsed)}"${renderMilliseconds(elapsed)}`;
}

function renderMinutes(milliseconds){
    const minutes = Math.floor(milliseconds/60000);
    return `${minutes < 10 ? "0": ""}${minutes}`
}
function renderSeconds(milliseconds){
    const seconds = Math.floor((milliseconds% 60000)/1000);
    return `${seconds < 10 ? "0": ""}${seconds}`
}

function renderMilliseconds(milliseconds){
    const m = milliseconds % 1000;
    if(m < 10) return`00${m}`;
    else if(m < 100) return `0${m}`;
    else return `${m}`;
}

export function startGameplayHUD(){
    state = {time: 0, startTime: 0,
        bestTime: 0, points: 0, speed: 0};
    document.querySelector('.hud').innerHTML =
    `<div class = "hud-left">
            <div class = "hud-time">
              TIME <div class="hud-time_val">00'00"00</div>
            </div>
            <div class = "hud-best-time">
              BEST 00:00:00
            </div>
          </div>
          <div class = "hud-right">
            <div class= "hud-speed">
              SPEED <div class="hud-speed_val">0</div> Km/h
            </div>
            <div class= "hud-points">
              <div class="hud-points_val">0</div> POINTS
            </div>
    </div>`;
}

export function doStartMenuHUD(callback){
    const startButton = document.createElement("button");
    startButton.classList.add('start-button');
    startButton.onclick = callback;
    startButton.textContent = "START";
    const startMenu = document.createElement("div");
    startMenu.appendChild(startButton);
    startMenu.classList.add("start-menu");
    const hud = document.querySelector('.hud');
    hud.innerHTML = "";
    hud.appendChild(startMenu);
}

export function displayScoresStructure(){
    const hud = document.querySelector(".hud");
    hud.innerHTML = "FINISHED";
}