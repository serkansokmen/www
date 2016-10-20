import { Injectable } from '@angular/core';

@Injectable()
export class SocialLinksService {

  data: Array<Object> = [{
    url: 'https://github.com/serkansokmen',
    title: "github",
    imgSrc: "/assets/images/github-2x.png"
  }, {
    url: 'https://vimeo.com/serkansokmen',
    title: "vimeo",
    imgSrc: "/assets/images/vimeo-2x.png"
  }, {
    url: 'https://behance.net/serkansokmen',
    title: "behance",
    imgSrc: "/assets/images/behance-2x.png"
  }, {
    url: 'https://instagram.com/serkansokmen',
    title: "instagram",
    imgSrc: "/assets/images/instagram-2x.png"
  }, {
    url: 'https://soundcloud.com/serkansokmen',
    title: "soundcloud",
    imgSrc: "/assets/images/soundcloud-2x.png"
  }, {
    url: 'https://facebook.com/serkan.sokmen',
    title: "facebook",
    imgSrc: "/assets/images/facebook-2x.png"
  }, {
    url: 'https://twitter.com/serkansokmen',
    title: "twitter",
    imgSrc: "/assets/images/twitter-2x.png"
  }, {
    url: 'https://www.linkedin.com/in/serkansokmen',
    title: "linkedin",
    imgSrc: "/assets/images/linkedin-2x.png"
  }, {
    url: 'https://zepzero.deviantart.com',
    title: "deviantart",
    imgSrc: "/assets/images/deviantart-2x.png"
  }];

  constructor() {}

  getSocialLinks() {
    return new Promise((resolve, reject) => {
      resolve(this.data);
    });
  }

}
