export let __hotReload = true

// import 'fetch'
import { Component } from 'react'
import ReactDom from 'react-dom'
import RetinaImage from 'react-retina-image'
import Instafeed from 'instafeed.js'
import Bio from './components/Bio.js'
import { appData } from './main.json!json'

import { INSTAGRAM_CLIENT_ID } from '../keys.json!json'

class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <Bio links={this.props.data.links}/>
      </div>
    )
  }
}

// let feed = new Instafeed({
//   get: 'tagged',
//   tagName: 'awesome',
//   clientId: INSTAGRAM_CLIENT_ID
// })
// feed.run();

ReactDom.render(<App data={appData}/>, document.getElementById('app'))
