export let __hotReload = true

import PIXI from 'pixi.js'
import $ from 'jquery'
import ParticleContainer from './ParticleContainer'
import { appData } from './main.json!json'
import Vector from './Vector'

class Main {

  constructor() {
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

    // Load sprite images
    PIXI.loader.reset()
    for (let key of Object.keys(appData.links)) {
      const object = appData.links[key]
      PIXI.loader.add(key, object.icon_image)
    }
    PIXI.loader.on('progress', (loader, resource) => {
      const perc = Math.floor(loader.progress) / 100.0
    })
    PIXI.loader.load(this.setup.bind(this))
  }

  setup(loader, resources) {

    $('body').removeClass('loading')

    this.particleStage = {
      x: 0,
      y: 0,
      width: window.innerWidth,
      height: window.innerHeight,
      padding: 200
    }

    this.container = new ParticleContainer()
    this.stage.addChild(this.container)

    const x = this.particleStage.width / 2
    const y = this.particleStage.height / 2
    const pos = new Vector(x, y)
    for (let key of Object.keys(resources)) {
      this.container.addParticle(resources[key].texture, pos)
    }

    this.render()
  }

  render() {
    this.container.render()
    this.renderer.render(this.stage)
    this.animate()
  }
  animate() {
    this.container.update(this.particleStage)
    this.renderer.render(this.stage)
    window.requestAnimationFrame(this.animate.bind(this))
  }
}
Main.prototype.w = window.innerWidth
Main.prototype.h = window.innerHeight

$(() => {
  const main = new Main()
  main.setup(appData)
  $(window).resize(() => {
    main.stage.width = window.innerWidth
    main.stage.height = window.innerHeight
  })

})
