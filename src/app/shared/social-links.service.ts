import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface SocialLinkItem {
  url: string;
  title: string;
  iconName: string;
  tooltip: string;
}

@Injectable()
export class SocialLinksService {

  private _data: SocialLinkItem[] = [{
    url: 'mailto:me@serkansokmen.com?subject=Contact',
    title: 'Email',
    iconName: 'mail',
    tooltip: 'Contact me',
  }, {
    url: 'https://github.com/serkansokmen',
    title: 'Github',
    iconName: 'github',
    tooltip: 'Github',
  }, {
    url: 'https://vimeo.com/serkansokmen',
    title: 'Vimeo',
    iconName: 'vimeo',
    tooltip: 'Vimeo',
  }, {
    url: 'https://sketchfab.com/serkansokmen',
    title: 'Sketchfab',
    iconName: 'sketchfab',
    tooltip: 'Sketchfab',
  }, {
    url: 'https://behance.net/serkansokmen',
    title: 'Behance',
    iconName: 'behance',
    tooltip: 'Behance',
  }, {
    url: 'https://instagram.com/serkansokmen',
    title: 'Instagram',
    iconName: 'instagram',
    tooltip: 'Instagram',
  }, {
    url: 'https://soundcloud.com/serkansokmen',
    title: 'Soundcloud',
    iconName: 'soundcloud',
    tooltip: 'Soundcloud',
  }, {
    url: 'https://facebook.com/serkan.sokmen',
    title: 'Facebook',
    iconName: 'facebook',
    tooltip: 'Facebook',
  }, {
    url: 'https://twitter.com/serkansokmen',
    title: 'Twitter',
    iconName: 'twitter',
    tooltip: 'Twitter',
  }, {
    url: 'https://www.linkedin.com/in/serkansokmen',
    title: 'Linkedin',
    iconName: 'linkedin',
    tooltip: 'Linkedin',
  }, {
    url: 'https://zepzero.deviantart.com',
    title: 'Deviantart',
    iconName: 'deviantart',
    tooltip: 'Deviantart',
  }];

  constructor() {}

  getSocialLinks() {
    return of(this._data);
  }

}
