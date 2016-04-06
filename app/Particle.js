export let __hotReload = true

import PIXI from 'pixi.js'


export default class Particle extends PIXI.Sprite {
  constructor(texture, ...arg) {
    super(texture, ...arg)

    this.position.set(0, 0)
    this.velocity = new PIXI.Point(-1 + Math.random() * 2, -1 + Math.random() * 2)
    this.accel = new PIXI.Point(0, 0)
    this.radius = 44
  }

  update() {

  }

  setTexture(texture) {
    // super(texture)
    this.anchor.x = this.anchor.y = 0.5;
    this.scale.x = this.scale.y = 0.8 + Math.random() * 0.3;
    this.addChild(this)
  }

  setUrl(url) {
    this.interactive = true
    this.click = this.tap = function(data) {
      window.open(url, '_blank')
    }
  }
}
