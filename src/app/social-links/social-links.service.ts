import { Injectable } from '@angular/core';

@Injectable()
export class SocialLinksService {

  data: Array<Object> = [{
    url: 'https://github.com/serkansokmen',
    title: "github",
    imgSrc: "/assets/images/github.png"
  }, {
    url: 'https://vimeo.com/serkansokmen',
    title: "vimeo",
    imgSrc: "/assets/images/vimeo.png"
  }, {
    url: 'https://sketchfab.com/serkansokmen',
    title: "sketchfab",
    imgSrc: "/assets/images/sketchfab.png"
  }, {
    url: 'https://behance.net/serkansokmen',
    title: "behance",
    imgSrc: "/assets/images/behance.png"
  }, {
    url: 'https://instagram.com/serkansokmen',
    title: "instagram",
    imgSrc: "/assets/images/instagram.png"
  }, {
    url: 'https://soundcloud.com/serkansokmen',
    title: "soundcloud",
    imgSrc: "/assets/images/soundcloud.png"
  }, {
    url: 'https://facebook.com/serkan.sokmen',
    title: "facebook",
    imgSrc: "/assets/images/facebook.png"
  }, {
    url: 'https://twitter.com/serkansokmen',
    title: "twitter",
    imgSrc: "/assets/images/twitter.png"
  }, {
    url: 'https://www.linkedin.com/in/serkansokmen',
    title: "linkedin",
    imgSrc: "/assets/images/linkedin.png"
  }, {
    url: 'https://zepzero.deviantart.com',
    title: "deviantart",
    imgSrc: "/assets/images/deviantart.png"
  }];

  constructor() {}

  getSocialLinks() {
    return new Promise((resolve, reject) => {
      resolve(this.data);
    });
  }

}
