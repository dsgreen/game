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

function keyDownHandler(e) {
  log(e.key);
  switch (e.key) {
    case "Enter":
      break;
    case " ":
      break;
    case "ArrowLeft":
      move('x', 'neg');
      break;
    case "ArrowRight":
      move('x', 'pos');
      break;
    case "ArrowUp":
      move('y', 'pos');
      break;
    case "ArrowDown":
      move('y', 'neg');
      break;
    default:
      return;
  }
}

/**
 * Move the sprite on the x and y axis in positive or negative direction.
 *
 * @param axis
 * @param direction
 *
 * axis: x/y
 * direction: pos/neg (pos for up and right, neg for left and down)
 */
function move(axis, direction) {
  let property;
  switch (axis) {
    case "x":
      // get linline left property
      property = css.left;
      break;
    case "y":
      // get inline bottom property
      property = css.bottom;
      break;
    default:
      return;
  }
  log(property);

  // get numerical portion of CSS property: slice at 'px' and convert to int.
  const currentPropInt = parseInt( property.slice(0, property.indexOf('p')) );
  // log(currentPropInt);

  let newPropInt;
  switch (direction) {
    case "pos":
      newPropInt = currentPropInt + 10;
      break;
    case "neg":
      newPropInt = currentPropInt - 10;
      break;
    default:
      return;
  }
  // log(newPropInt);
  log(newPropInt.toString() + 'px');

  // set inline property
  switch (axis) {
    case "x":
      // get linline left property
      css.left = newPropInt.toString() + 'px';
      break;
    case "y":
      // get inline bottom property
      css.bottom = newPropInt.toString() + 'px';
      break;
    default:
      return;
  }
}

// on window load, set inline property to property from style sheet so we have access to it
css.left = currentLeft;
css.bottom = currentBottom;
// log(css.left);
// log(css.bottom);

window.addEventListener("keydown", keyDownHandler);

// timer
// let intervalID = window.setInterval(function, delay);
// window.clearInterval(intervalID);