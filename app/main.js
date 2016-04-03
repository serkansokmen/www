export let __hotReload = true

// import 'fetch'
import React from 'react'
import ReactDom from 'react-dom'
import RetinaImage from 'react-retina-image'

import './main.css!'
import {
  app
}
from './data.json!json'
window.__INITIAL_STATE__ = app

class App extends React.Component {
  render() {

    let links = this.props.data.links.map((item, key) => {
      return <li key={key}><LinkItem item={item}/></li>
    })

    return (
      <div>
        <h1>bana, benimle ilgili</h1>
        <p className="description">
        “Bişey der, aslında bikaç şey ima…” - dedi bi hoca.
        “Düşüncesi kendinden bi adım...” - dedi diğeri, kafalar.
        “Zırvalıyo paso, aslında hiçbişey demiyo, sadece `şey` diyo” - diyo sadosan
        “Cümle bitiremez, anlat artık!” - der ezitorik.
        “Dehasın olm işte...” - çok dedin, yeter.

        “…anlatırken sıkılır,” - der bilen.
        "çabuk bıkar, hızlı geçer."

        günah keçisiyim amk.
        şablon görmekten imanım gevredi.
        filan felan.
        </p>
        <ul className="links">{links}</ul>
      </div>
    )
  }
}

class LinkItem extends React.Component {
  render() {
    const { item } = this.props
    return (<div>
      <a href={item.url} title={item.name} alt={item.name} target="_blank">
        <RetinaImage height="22" src={`app/${item.icon_image}`}
          checkIfRetinaImgExists={false} retinaImageSuffix="-2x"/>
      </a>
    </div>)
  }
}

ReactDom.render(<App data={window.__INITIAL_STATE__}/>, document.getElementById('app'))
