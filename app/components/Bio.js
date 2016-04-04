export let __hotReload = true

import { Component } from 'react'
import SocialLink from './SocialLink'

export default class Bio extends Component {

  description() {
    const text = `“Bişey der, aslında bikaç şey ima…” - dedi bi hoca.
“Düşüncesi kendinden bi adım...” - dedi diğeri, kafalar.
“Zırvalıyo paso, aslında hiçbişey demiyo, sadece \`şey\` diyo” - diyo sadosan
“Cümle bitiremez, anlat artık!” - der ezitorik.
“Dehasın olm işte...” - çok dedin, yeter.

“…anlatırken sıkılır,” - der bilen.
"çabuk bıkar, hızlı geçer."

günah keçisiyim amk.
şablon görmekten imanım gevredi.
filan felan.`;
    return { __html: text };
  }

  getStyles() {
    return {
      description: {
        whiteSpace: 'pre-wrap'
      }
    }
  }

  render() {
    return (
      <div className="container-fluid">
        <h1>bana, benimle ilgili</h1>
        <p style={this.getStyles().description} dangerouslySetInnerHTML={this.description()}/>
        <ul className="list-inline">{this.props.links.map((item, key) => {
            return <SocialLink item={item} key={key}/>
          })
        }</ul>
      </div>
    )
  }
}
