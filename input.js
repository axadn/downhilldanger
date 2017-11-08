
export const keyDown = character => e=>{
  switch(e.key){
    case "left":
    case "a":
      character.input.left = true;
      break;
    case "d":
      character.input.right = true;
      break;
    case "s":
      character.input.back = true;
  }
}

export const keyUp = character => e => {
  switch(e.key){
    case "left":
    case "a":
      character.input.left = false;
      break;
    case "d":
      character.input.right = false;
      break;
    case "s":
      character.input.back = false;
      break;
  }
}
