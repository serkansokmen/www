export let __hotReload = false

import { appData } from './main.json!json'
import PIXI from 'pixi.js'

const { Container,
  Rectangle,
  Graphics,
  Point,
  autoDetectRenderer,
  loader,
  Sprite } = PIXI

const stage = new Container()
const renderer = autoDetectRenderer(512, 512, {
  antialias: true,
  transparent: true,
  resolution: 1
})
// Create nodes and lines
const nodeContainer = new Container()
const linesArray = []
const lines = new Graphics()
const iconBoundsPadding = 100
let iconBounds

let viewWidth = window.innerWidth
let viewHeight = window.innerHeight

renderer.view.style.position = 'absolute'
renderer.view.style.top = 0
renderer.view.style.display = 'block'
renderer.autoResize = true

document.getElementById('canvas-container').appendChild(renderer.view)
window.addEventListener('resize', resizeHandler)
function resizeHandler(event) {
  viewWidth = window.innerWidth
  viewHeight = window.innerHeight
  renderer.resize(viewWidth, viewHeight)

  iconBounds = new Rectangle(
    iconBoundsPadding,
    iconBoundsPadding,
    viewWidth - iconBoundsPadding * 2,
    viewHeight - iconBoundsPadding * 2
  )
}
resizeHandler()


// Load sprite images
loader.reset()
Object.keys(appData.links).forEach(key => {
  loader.add({
    name: key,
    url: appData.links[key].icon_image
  })
})
loader.on('progress', loadHandler)
loader.load(setup)


function loadHandler(loader, resource) {
  // console.log("loading: " + resource.url)
  // console.log("progress: " + loader.progress + "%")
}

function setup(loader) {

  Object.keys(loader.resources).forEach(key => {
    const icon = new Sprite(loader.resources[key].texture)

    let x = iconBounds.x + Math.random() * (iconBounds.width - icon.width)
    let y = iconBounds.y + Math.random() * (iconBounds.height - icon.height)

    icon.interactive = true
    icon.position.set(x, y)
    icon.anchor.x = icon.anchor.y = 0.5;
    icon.scale.x = icon.scale.y = 0.8 + Math.random() * 0.3;
    icon.direction = Math.random() * Math.PI * 2
    icon.turningSpeed = Math.random()
    icon.speedX = Math.random()
    icon.speedY = Math.random()

    icon.click = icon.tap = function(data) {
      window.open(appData.links[key].url, '_blank')
    }
    nodeContainer.addChild(icon)
  })
  stage.addChild(lines)
  stage.addChild(nodeContainer)

  draw()
}

let tick = 0
function draw() {
  requestAnimationFrame(draw)

  let prev = null
  lines.clear()
  lines.lineStyle(1, 0xe2e2e2)
  nodeContainer.children.forEach(icon => {
    icon.direction += icon.turningSpeed * 0.001;
    icon.position.x += Math.sin(icon.direction) * icon.speedX;
    icon.position.y += Math.cos(icon.direction) * icon.speedY;
    icon.rotation += 0.002

    if (icon.position.x < iconBounds.x)
      icon.speedX *= -1;
    else if (icon.position.x > iconBounds.x + iconBounds. width)
      icon.speedX *= -1;

    if (icon.position.y < iconBounds.y)
      icon.speedY *= -1;
    else if (icon.position.y > iconBounds.y + iconBounds. height)
      icon.speedY *= -1;

    if (prev) {
      let line = [
        new Point(prev.position.x, prev.position.y),
        new Point(icon.position.x, icon.position.y)
      ]
      lines.moveTo(line[0].x, line[0].y)
      lines.lineTo(line[1].x, line[1].y)

      lines.endFill()
      linesArray.push(line)
    } else {

    }
    prev = icon
  })

  renderer.render(stage)
}
