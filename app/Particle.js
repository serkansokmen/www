export let __hotReload = true

import PIXI from 'pixi.js'
import Vector from './Vector'


export default class Particle extends PIXI.Sprite {
  constructor(texture, position, ...arg) {
    super(texture, ...arg)

    this.position = new Vector(position.x, position.y)
    // this.position.set(position.x, position.y)
    this.velocity = new Vector(-1 + Math.random() * 2, -1 + Math.random() * 2)
    this.accel = new Vector(Math.random() * 0.001, Math.random() * 0.001)

    this.anchor.x = 0.5
    this.anchor.y = 0.5
  }

  render(stage) {

    this.velocity.add(this.accel)
    this.position.add(this.velocity)

    const x = this.position.x
    const y = this.position.y

    if ((x <= stage.padding * 2) || (x >= stage.width - stage.padding * 2)) {
      this.velocity.set(-1 * this.velocity.x, this.velocity.y)
    }
    if ((y <= stage.padding * 2) || (y >= stage.height - stage.padding * 2)) {
      this.velocity.set(this.velocity.x, -1 * this.velocity.y)
    }
  }

  setUrl(url) {
    this.interactive = true
    this.click = this.tap = () => {
      window.open(url, '_blank')
    }
  }

  applyForce(force) {
    f.div(this.mass);
    this.acceleration.add(f);
  }
}
