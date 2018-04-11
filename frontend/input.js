
export const keyDown = character => e=>{
  switch(e.key){
    case "ArrowLeft":
    case "a":
      character.input.left = true;
      break;
    case "ArrowRight":
    case "d":
      character.input.right = true;
      break;
    case "ArrowDown":
    case "s":
      character.input.back = true;
      break;
    case " ":
      character.input.jump = true;
  }
}

export const keyUp = character => e => {
  switch(e.key){
    case "ArrowLeft":
    case "a":
      character.input.left = false;
      break;
    case "ArrowRight":
    case "d":
      character.input.right = false;
      break;
    case "ArrowDown":
    case "s":
      character.input.back = false;
      break;
    case " ":
      character.input.jump = false;
  }
}

export const releaseKeys = character => e=>{
  character.input.left = false;
  character.input.right = false;
  character.input.back = false;
}
