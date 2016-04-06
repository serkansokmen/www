// Don't let PIXI canvas to be added to DOM again
// when module reloads
export let __hotReload = true

import PIXI from 'pixi.js'
import $ from 'jquery'
import ParticleContainer from './ParticleContainer'
import { appData } from './main.json!json'


class Main extends Object {

  constructor() {
    super()
    this.renderer = PIXI.autoDetectRenderer(this.w, this.h, {
      antialias: true,
      transparent: true,
      resolution: 1,
      autoResize: true
    })

    this.stage = new PIXI.Container()
    const view = $(this.renderer.view)
    view.addClass('loading')
    $('body').addClass('loading')
    $('body #canvas-container').html(view)
  }
  initBounds() {
    this.w = window.innerWidth
    this.h = window.innerHeight
    this.container.stage.width = this.w
    this.container.stage.height = this.h
  }
  setup(appData) {

    $('body').removeClass('loading')

    this.container = new ParticleContainer()
    this.container.stage = new Object()
    this.container.stage.x = 0
    this.container.stage.y = 0
    this.container.setup(appData.links)
    this.stage.addChild(this.container)

    $(window).resize(() => {
      this.initBounds.bind(this)
    })
    this.initBounds()
    this.render()
  }
  render() {
    this.container.render()
    this.renderer.render(this.stage)
    this.animate()
  }
  animate() {
    this.container.update()
    this.renderer.render(this.stage)
    window.requestAnimationFrame(this.animate.bind(this))
  }
}
Main.prototype.w = window.innerWidth
Main.prototype.h = window.innerHeight

const main = new Main()
main.setup(appData)
