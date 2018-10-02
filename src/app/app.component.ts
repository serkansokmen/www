import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { SocialLinksService } from './shared/social-links.service';
import { UnityService } from './shared/unity.service';
import { Observable } from 'rxjs';
import { SokmenComponent } from './components/sokmen/sokmen.component';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  providers: [
    SocialLinksService,
    UnityService,
  ],
  encapsulation: ViewEncapsulation.Emulated
})
export class AppComponent implements OnInit {

  socialLinks$: Observable<any>;

  constructor(private socialLinks: SocialLinksService) { }

  ngOnInit() {
    this.socialLinks$ = this.socialLinks.getSocialLinks();
  }

}
