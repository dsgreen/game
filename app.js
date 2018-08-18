const env = "DEV";
// const env = "PROD";

const sprite = document.querySelector('.sprite');
const css = sprite.style;
const currentLeft = window.getComputedStyle(sprite).getPropertyValue('left');

function log(logging) {
  switch (env) {
    case "DEV":
      console.log(logging);
      break;
    default:
      return;
  }
}

function keyUpHandler(e) {
  log(e.key);
  switch (e.key) {
    case "Enter":
      break;
    case " ":
      break;
    case "ArrowLeft":
      break;
    case "ArrowRight":
      moveRight();
      break;
    case "ArrowUp":
      break;
    case "ArrowDown":
      break;
    default:
      return;
  }
}

function moveRight() {
  // get linline left property
  const inlineLeft = css.left;

  // get numerical portion of CSS property: slice at 'px' and convert to int.
  const currentLeftInt = parseInt( inlineLeft.slice(0, inlineLeft.indexOf('p')) );
  log(currentLeftInt);

  const newleftInt = currentLeftInt + 10;
  log(newleftInt);
  log(newleftInt.toString() + 'px');

  // set left property
  css.left = newleftInt.toString() + 'px';
}

// on window load, set inline property to property from style sheet
css.left = currentLeft;
log(css.left);

window.addEventListener("keyup", keyUpHandler);