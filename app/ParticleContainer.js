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

    // Render lines
    this.linesGraphics.clear()
    let prev = null
    for (let particle of this.particles) {
      if (prev) {
        const px = prev.position.x + prev.anchor.x
        const py = prev.position.y + prev.anchor.y

        for (let other of this.particles) {
    //       if (particle === other) {
    //         return
    //       }
          const dist = other.position.distanceTo(prev.position)
          // console.log(dist)
          this.linesGraphics.lineStyle(0.5, 0x444444, 1.5 - dist/250.0)
          // console.log(dist/100.0);
          if (dist > 0.1) {
            const ox = other.position.x + other.anchor.x
            const oy = other.position.y + other.anchor.y
            this.linesGraphics.moveTo(prev.position.x, prev.position.y)
            this.linesGraphics.lineTo(other.position.x, other.position.y)
            this.linesGraphics.endFill()
          }
        }
      }
      prev = particle
    }
  }
}
