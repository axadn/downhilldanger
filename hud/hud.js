const state = {currentTime: 0,
bestTime: 0, points: 0, speed: 0}

export function addPoints(points){
    state.points += points;
    renderPoints();
};
export function updateTime(time){
    state.time = time;
    renderTime();
};

export function updateSpeed(speed){
    state.speed = Math.round(speed);
    renderSpeed();
}

function renderPoints(){
    document.querySelector(".hud-points_val").innerHTML = `${state.points}`;
};

function renderSpeed(){
    document.querySelector(".hud-speed_val").innerHTML = `${state.speed}`;
}

function renderTime(){

}
