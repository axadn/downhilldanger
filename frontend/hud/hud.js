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
    startButton.classList.add('menu-button');
    startButton.onclick = callback;
    startButton.textContent = "START";

    const controlsButton = document.createElement("button");
    controlsButton.onclick = doControlsMenu;
    controlsButton.classList.add("menu-button");
    controlsButton.textContent = "CONTROLS";

    const startMenu = document.createElement("div");
    startMenu.appendChild(startButton);
    startMenu.appendChild(controlsButton);
    startMenu.classList.add("start-menu");

    const hud = document.querySelector('.hud');
    hud.innerHTML = "";
    hud.appendChild(startMenu);
}

export function displayScoresStructure(){
    const hud = document.querySelector(".hud");
    hud.innerHTML = "FINISHED";
}

export function doControlsMenu(){
    const hud = document.querySelector(".hud");

    const menu = document.createElement("section");
    menu.classList.add("controls-menu");

    const controlsList = document.createElement("ul");
    controlsList.classList.add("controls-list");

    const keys = ["a/left", "s/down", "d/right", "space"];
    const descriptions = ["steer left", "brake", "steer right", "jump"];

    let listItem, controlKey, controlDesc;
    keys.forEach((key, idx)=>{
        listItem = document.createElement("li");
        controlKey = document.createElement('div');
        controlDesc = document.createElement('div');

        controlKey.textContent = key;
        controlDesc.textContent = descriptions[idx];

        controlKey.classList.add("controls-key");
        controlDesc.classList.add("controls-desc");
        listItem.classList.add("controls-item");

        listItem.appendChild(controlKey);
        listItem.appendChild(controlDesc);
        controlsList.appendChild(listItem);
    });

    menu.appendChild(controlsList);

    const closeButton = document.createElement("button");
    closeButton.textContent = "X";
    closeButton.classList.add("menu-close");  
    closeButton.onclick = closeControlsMenu;

    menu.appendChild(closeButton);

    hud.appendChild(menu);
}

export function closeControlsMenu(){
    const hud = document.querySelector(".hud");
    const menu = document.querySelector(".controls-menu");
    hud.removeChild(menu);
}