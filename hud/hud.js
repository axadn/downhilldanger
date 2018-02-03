const state = {currentTime: 0,
bestTime: 0, points: 0}

export function addPoints(points){
    state.points += points;
    renderPoints();
};
export function updateTime(time){
    state.time = time;
    renderTime();
};

function renderPoints(){
    document.querySelector(".hud-points").innerHTML = `POINTS ${state.points}`;
};

function renderTime(){

}