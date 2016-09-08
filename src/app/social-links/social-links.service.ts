import { Injectable } from '@angular/core';

@Injectable()
export class SocialLinksService {

  data: Array<Object> = [{
    url: 'https://github.com/serkansokmen',
    title: "github",
    imgSrc: "images/github-2x.png"
  }, {
    url: 'https://vimeo.com/serkansokmen',
    title: "vimeo",
    imgSrc: "images/vimeo-2x.png"
  }, {
    url: 'https://behance.net/serkansokmen',
    title: "behance",
    imgSrc: "images/behance-2x.png"
  }, {
    url: 'https://instagram.com/serkansokmen',
    title: "instagram",
    imgSrc: "images/instagram-2x.png"
  }, {
    url: 'https://soundcloud.com/serkansokmen',
    title: "soundcloud",
    imgSrc: "images/soundcloud-2x.png"
  }, {
    url: 'https://facebook.com/serkan.sokmen',
    title: "facebook",
    imgSrc: "images/facebook-2x.png"
  }, {
    url: 'https://twitter.com/serkansokmen',
    title: "twitter",
    imgSrc: "images/twitter-2x.png"
  }, {
    url: 'https://www.linkedin.com/in/serkansokmen',
    title: "linkedin",
    imgSrc: "images/linkedin-2x.png"
  }, {
    url: 'https://zepzero.deviantart.com',
    title: "deviantart",
    imgSrc: "images/deviantart-2x.png"
  }];

  constructor() {}

  getSocialLinks() {
    return this.data;
  }

}
