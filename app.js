const env = "DEV";
// const env = "PROD";

const sprite = document.querySelector('.sprite');
const css = sprite.style;
const currentLeft = window.getComputedStyle(sprite).getPropertyValue('left');
const currentBottom = window.getComputedStyle(sprite).getPropertyValue('bottom');

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
      moveHorizontal('left');
      break;
    case "ArrowRight":
      moveHorizontal('right');
      break;
    case "ArrowUp":
      moveVertical('up');
      break;
    case "ArrowDown":
      moveVertical('down');
      break;
    default:
      return;
  }
}

function moveHorizontal(direction) {
  // get linline left property
  const inlineLeft = css.left;

  // get numerical portion of CSS property: slice at 'px' and convert to int.
  const currentLeftInt = parseInt( inlineLeft.slice(0, inlineLeft.indexOf('p')) );
  log(currentLeftInt);

  let newLeftInt;
  switch (direction) {
    case "left":
      newLeftInt = currentLeftInt - 10;
      break;
    case "right":
      newLeftInt = currentLeftInt + 10;
      break;
    default:
      return;
  }
  log(newLeftInt);
  log(newLeftInt.toString() + 'px');

  // set left property
  css.left = newLeftInt.toString() + 'px';
}

function moveVertical(direction) {
  // get inline bottom property
  const inlineBottom = css.bottom;

  // get numerical portion of CSS property: slice at 'px' and convert to int.
  const currentBottomInt = parseInt( inlineBottom.slice(0, inlineBottom.indexOf('p')) );
  log(currentBottomInt);

  let newBottomInt;
  switch (direction) {
    case "up":
      newBottomInt = currentBottomInt + 10;
      break;
    case "down":
      newBottomInt = currentBottomInt - 10;
      break;
    default:
      return;
  }
  log(newBottomInt);
  log(newBottomInt.toString() + 'px');

  // set bottom property
  css.bottom = newBottomInt.toString() + 'px';
}

// on window load, set inline property to property from style sheet
css.left = currentLeft;
log(css.left);

// on window load, set inline property to property from style sheet
css.bottom = currentBottom;
log(css.bottom);

window.addEventListener("keyup", keyUpHandler);