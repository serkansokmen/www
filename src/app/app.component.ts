import { Component, ViewEncapsulation, OnInit, HostListener } from '@angular/core';
import { SocialLinksService } from './services/social-links.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  providers: [
    SocialLinksService
  ],
  encapsulation: ViewEncapsulation.Emulated
})
export class AppComponent implements OnInit {

  socialLinks$: Observable<any>;

  constructor(private socialLinks: SocialLinksService) { }

  ngOnInit() {
    this.socialLinks$ = this.socialLinks.getSocialLinks();
  }

  launchURL(url: string) {
    window.location.href = url;
  }

}
