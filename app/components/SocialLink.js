import { Component } from 'react'
import RetinaImage from 'react-retina-image'

export default class SocialLink extends Component {
  render() {
    const { item } = this.props
    return (<li><a className="item" href={item.url} title={item.name} alt={item.name} target="_blank">
      <RetinaImage height="22" src={`app/${item.icon_image}`}
        checkIfRetinaImgExists={false} retinaImageSuffix="-2x"/>
    </a></li>)
  }
}
