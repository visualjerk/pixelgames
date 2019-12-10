const settings = {
  DOT: 0.5,
  SPEED: 2,
}

const theme = {
  PRIMARY: '#7DCE9A',
  BACKGROUND: '#211020'
}

const getSize = size => {
  return `${size * settings.DOT}vmin`
}

class Trex {
  constructor() {
    this.height = 10
    this.width = 10
    this.left = 50
    this.altitude = 0

    this.el = document.createElement('div')
    this.el.style.position = 'absolute'
    this.el.style.bottom = 0
    this.el.style.left = getSize(this.left)
    this.el.style.height = getSize(this.height)
    this.el.style.width = getSize(this.width)
    this.el.style.background = theme.PRIMARY
  }

  jump() {
    if (this.altitude > 0) return
    this.goUp()
  }

  goUp() {
    if (this.altitude >= 30) return this.goDown()
    this.altitude++
    setTimeout(this.goUp.bind(this), 12)
  }

  goDown() {
    if (this.altitude === 0) return
    this.altitude--
    setTimeout(this.goDown.bind(this), 12)
  }

  render() {
    this.el.style.transform = `translateY(-${getSize(this.altitude)})`
  }
}

class Foe {
  constructor() {
    this.height = 5
    this.width = 5
    this.left = 200
    this.distance = 0

    this.el = document.createElement('div')
    this.el.style.position = 'absolute'
    this.el.style.bottom = 0
    this.el.style.left = getSize(this.left)
    this.el.style.height = getSize(this.height)
    this.el.style.width = getSize(this.width)
    this.el.style.background = theme.PRIMARY
  }

  move() {
    this.distance++
    setTimeout(this.move.bind(this), 20)
  }

  render() {
    this.el.style.transform = `translateX(-${getSize(this.distance)})`
  }
}

class Stage {
  constructor(el) {
    this.height = 100
    this.width = 200

    this.el = document.createElement('div')
    this.el.style.position = 'relative'
    this.el.style.height = getSize(this.height)
    this.el.style.width = getSize(this.width)
    this.el.style.overflow = 'hidden'
    this.el.style.background = theme.BACKGROUND
    el.appendChild(this.el)
  }

  add(child) {
    this.el.appendChild(child.el)
  }
}

class App {
  constructor(selector) {
    this.el = document.querySelector(selector)
    this.foes = []
    this.tickId
  }

  init() {
    this.stage = new Stage(this.el)
    this.trex = new Trex()
    this.stage.add(this.trex)
    this.initListeners()
    this.initFoeGenerator()
    this.start()
  }

  initListeners() {
    window.addEventListener('keydown', this.handleInput.bind(this))
  }

  handleInput(event) {
    if (event.key === ' ') {
      this.trex.jump()
    }
    return
  }

  initFoeGenerator() {
    const foe = new Foe()
    this.stage.add(foe)
    this.foes.push(foe)
    foe.move()
    setTimeout(this.initFoeGenerator.bind(this), 2000)
  }

  tick() {
    this.trex.render()
    this.foes.forEach(foe => {
      foe.render()
      if (this.collision(this.trex, foe)) {
        console.log('ouch')
        this.stop()
      }
    })
  }

  start() {
    this.tickId = setInterval(this.tick.bind(this), 5)
  }

  stop() {
    clearInterval(this.tickId)
    this.tickId = null
  }

  collision(a, b) {
    if (a.altitude > b.height) return false
    if (a.left + a.width < b.left - b.distance) return false
    if (a.left > b.left - b.distance + b.width) return false
    return true
  }
}

const app = new App('#app')
app.init()
