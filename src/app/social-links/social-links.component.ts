import { Component, Input } from '@angular/core';
import { SocialLinkNodeComponent } from './social-link-node.component';

@Component({
  selector: 'app-social-links',
  templateUrl: 'social-links.component.html',
  styleUrls: ['social-links.component.scss'],
  directives: [SocialLinkNodeComponent]
})
export class SocialLinksComponent {

  @Input() items;

  constructor() {}

}
