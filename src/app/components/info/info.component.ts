import { Component, OnInit, Input } from '@angular/core';
import { SocialLinkItem } from '../../shared/social-links.service';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent {

  @Input() socialLinks: SocialLinkItem[];

  launchURL(url: string) {
    window.open(url, '_blank');
  }

}
