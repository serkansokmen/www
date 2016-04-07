export let __hotReload = true

import PIXI from 'pixi.js'
import Particle from './Particle'
import Vector from './Vector'


export default class ParticleContainer extends PIXI.Sprite {
  constructor(...arg) {
    super(...arg)

    this.particles = []

    this.linesGraphics = new PIXI.Graphics()
    this.addChild(this.linesGraphics)
  }

  addParticle(texture, position) {
    let particle = new Particle(texture, position)

    // particle.setUrl(link_url)

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
    this.linesGraphics.lineStyle(1, 0xcccccc, 1.0)

    // Render lines
    let prev = null
    for (let particle of this.particles) {
      if (prev) {
        for (let other of this.particles) {
    //       if (particle === otherParticle) {
    //         return
    //       }
          this.linesGraphics.moveTo(prev.x, prev.y)
          this.linesGraphics.lineTo(other.x, other.y)
          this.linesGraphics.endFill()
        }
      }
      prev = particle
    }
  }
}
