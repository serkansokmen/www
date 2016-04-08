export let __hotReload = true

import PIXI from 'pixi.js'
import Vector from './Vector'


export default class Particle extends PIXI.Sprite {
  constructor(texture, position, ...arg) {
    super(texture, ...arg)

    this.position = new Vector(position.x, position.y)

    // this.position.set(position.x, position.y)
    this.velocity = new Vector(-1 + Math.random() * 2, -1 + Math.random() * 2)
    this.velocity.multiplyScalar(0.5)
    this.accel = new Vector(Math.random() * 0.0001, Math.random() * 0.0001)

    this.anchor.x = 0.5
    this.anchor.y = 0.5

    this.mass = 100.0
  }

  render(stage) {

    this.velocity.add(this.accel)
    this.position.add(this.velocity)
    // this.accel.multiplyScalar(0)

    const x = this.position.x
    const y = this.position.y
  }

  setUrl(url) {
    this.interactive = true
    this.click = this.tap = () => {
      window.open(url, '_blank')
    }
  }

  applyForce(force) {
    // let f = force.clone().divideScalar(this.mass).normalize()
    // this.accel.add(f)
  }
}
