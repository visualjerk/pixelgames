const context = document.querySelector('canvas').getContext('2d')
const canvas = context.canvas

canvas.width = 400
canvas.height = 400

const dude = {
  width: 40,
  height: 40,
  color: 'teal',
  jumping: false,
  x: 0,
  y: 0,
  xVelocity: 0,
  yVelocity: 0,
}

const controller = {
  left: false,
  right: false,
  up: false,
}

/**
* Keylistener
* 
* @param {KeyboardEvent} event 
*/
function keyListener(event) {
  const state = event.type === 'keydown'

  switch (event.key) {
    case 'ArrowLeft':
      controller.left = state
      break;
    case 'ArrowRight':
      controller.right = state
      break;
    case ' ':
      controller.up = state
      break;
  }
}

function loop() {
  // Init jump
  if (controller.up && !dude.jumping) {
    dude.yVelocity -= 35
    dude.jumping = true
  }
  // Gravity
  dude.yVelocity += 1.5

  // Accelerate left
  if (controller.left) {
    dude.xVelocity -= 0.5
  }

  // Accelerate right
  if (controller.right) {
    dude.xVelocity += 0.5
  }

  // Update position
  dude.y += dude.yVelocity
  dude.x += dude.xVelocity

  // Friction
  dude.xVelocity *= 0.9
  dude.yVelocity *= 0.9

  // Hit the ground
  if (dude.y > canvas.height - dude.height) {
    dude.y = canvas.height - dude.height
    dude.yVelocity = 0
    dude.jumping = false
  }

  if (dude.x < -dude.width) {
    dude.x = canvas.width
  }

  if (dude.x > canvas.width) {
    dude.x = -dude.width
  }

  // Draw
  context.fillStyle = 'black'
  context.fillRect(0, 0, canvas.width, canvas.height)
  context.fillStyle = dude.color
  context.beginPath();
  context.arc(dude.x + dude.width / 2, dude.y + dude.height / 2, dude.height / 2, 0, 2 * Math.PI, false);
  context.fill();
  window.requestAnimationFrame(loop)
}

window.requestAnimationFrame(loop)

window.addEventListener('keydown', keyListener)
window.addEventListener('keyup', keyListener)
