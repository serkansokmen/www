import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-social-links',
  templateUrl: 'social-links.component.html',
  styleUrls: ['social-links.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class SocialLinksComponent {

  @Input() items;

  constructor() {}

}
