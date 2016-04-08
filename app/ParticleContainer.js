export let __hotReload = true

import PIXI from 'pixi.js'
import Particle from './Particle'
import Vector from './Vector'


export default class ParticleContainer extends PIXI.Sprite {
  constructor(...arg) {
    super(...arg)

    this.particles = new Array()
    this.linesGraphics = new PIXI.Graphics()
    this.addChild(this.linesGraphics)
  }

  addParticle(texture, url, position) {
    let particle = new Particle(texture, position)
    particle.setUrl(url)
    this.particles.push(particle)
    this.addChild(particle)
  }

  update(stage) {
    for (let p of this.particles) {
      p.render(stage, 120)
    }
  }

  render() {
    this.linesGraphics.clear()
    this.linesGraphics.lineStyle(1, 0x000000)

    // Render lines
    let prev = null
    for (let particle of this.particles) {
      if (prev) {
        for (let other of this.particles) {
    //       if (particle === otherParticle) {
    //         return
    //       }
          this.linesGraphics.moveTo(prev.position.x, prev.position.y)
          this.linesGraphics.lineTo(other.position.x, other.position.y)
          this.linesGraphics.endFill()
        }
      }
      prev = particle
    }
  }
}
