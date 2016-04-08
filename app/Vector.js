export let __hotReload = true


export default class Vector {

  constructor(x, y) {
    this.x = x || 0
    this.y = y || 0
  }

  clone() {
    return new Vector(this.x, this.y)
  }

  add(v) {
    this.x += v.x
    this.y += v.y
    return this
  }

  sub(v) {
    this.x -= v.x
    this.y -= v.y
    return this
  }

  invert(v) {
    this.x *= -1
    this.y *= -1
    return this
  }

  multiplyScalar(s) {
    this.x *= s
    this.y *= s
    return this
  }

  divideScalar(s) {
    if (s === 0) {
      this.x = 0
      this.y = 0
    } else {
      var invScalar = 1 / s
      this.x *= invScalar
      this.y *= invScalar
    }
    return this
  }

  dot(v) {
    return this.x * v.x + this.y * v.y
  }

  length(v) {
    return Math.sqrt(this.x * this.x + this.y * this.y)
  }

  lengthSq() {
    return this.x * this.x + this.y * this.y
  }

  normalize() {
    return this.divideScalar(this.length())
  }

  distanceTo(v) {
    return Math.sqrt(this.distanceToSq(v))
  }

  distanceToSq(v) {
    var dx = this.x - v.x,
      dy = this.y - v.y
    return dx * dx + dy * dy
  }

  set(x, y) {
    this.x = x
    this.y = y
    return this
  }

  setX(x) {
    this.x = x
    return this
  }

  setY(y) {
    this.y = y
    return this
  }

  setLength(l) {
    var oldLength = this.length()
    if (oldLength !== 0 && l !== oldLength) {
      this.multiplyScalar(l / oldLength)
    }
    return this
  }

  invert(v) {
    this.x *= -1
    this.y *= -1
    return this
  }

  lerp(v, alpha) {
    this.x += (v.x - this.x) * alpha
    this.y += (v.y - this.y) * alpha
    return this
  }

  rad() {
    return Math.atan2(this.x, this.y)
  }

  deg() {
    return this.rad() * 180 / Math.PI
  }

  equals(v) {
    return this.x === v.x && this.y === v.y
  }

  rotate(theta) {
    var xtemp = this.x
    this.x = this.x * Math.cos(theta) - this.y * Math.sin(theta)
    this.y = xtemp * Math.sin(theta) + this.y * Math.cos(theta)
    return this
  }
}

