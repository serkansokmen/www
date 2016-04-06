export let __hotReload = true

import PIXI from 'pixi.js'
import Particle from './Particle'


export default class ParticleContainer extends PIXI.Sprite {
  constructor(...arg) {
    super(...arg)

    this.linesGraphics = new PIXI.Graphics()
    this.addChild(this.linesGraphics)
  }
  setup(links, bounds) {

    this.loader = PIXI.loader
    // Load sprite images
    this.loader.reset()
    for (let key of Object.keys(links)) {
      const link = links[key]
      this.loader.add(key, link.icon_image)
    }
    this.loader.on('progress', (loader, resource) => {
      const perc = Math.floor(loader.progress) / 100.0
    })
    this.particles = new Array()
    this.loader.load(this.setupParticles.bind(this))
  }

  setupParticles(loader, resources) {

    this.particles = new Array()
    for (let key of Object.keys(resources)) {
      let particle = new Particle(resources[key].texture)
      particle.setUrl(resources[key].link_url)
      particle.position.set(this.w, 0)

      this.particles.push(particle)
      this.addChild(particle)
    }
  }

  render() {
    this.renderLines()
  }

  renderLines() {
    let prev = null
    for (let particle of this.particles) {
      if (prev) {
        this.linesGraphics.clear()
        this.linesGraphics.lineStyle(1, 0xe2e2e2)
        for (let otherParticle of this.particles) {
          if (particle === otherParticle) {
            return
          }
          let line = [
            new Point(prev.position.x, prev.position.y),
            new Point(otherParticle.position.x, otherParticle.position.y)
          ]
          this.linesGraphics.moveTo(line[0].x, line[0].y)
          this.linesGraphics.lineTo(line[1].x, line[1].y)
          this.linesGraphics.endFill()
        }
      }
      prev = particle
    }
  }

  update() {
    for (let particle of this.particles) {
      particle.velocity.x += particle.accel.x
      particle.velocity.y += particle.accel.y

      particle.x += particle.velocity.x
      particle.y += particle.velocity.y

      // if (particle.position.x < bounds.x || particle.position.x > bounds.x + bounds. width) {
      //   particle.velocity.x *= -1;
      // }
      // if (particle.position.y < bounds.y || particle.position.y > bounds.y + bounds. height) {
      //   particle.velocity.y *= -1;
      // }
    }
  }
}
