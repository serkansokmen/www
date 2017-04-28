import { Component, ViewEncapsulation } from '@angular/core';
import { SocialLinksService } from './social-links/social-links.service';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  providers: [SocialLinksService],
  encapsulation: ViewEncapsulation.Emulated
})
export class AppComponent {
  socialLinks;

  constructor(private service: SocialLinksService) {

    Observable
      .fromPromise(service.getSocialLinks())
      .subscribe(data => {
        this.socialLinks = data;
      });
  }
}
