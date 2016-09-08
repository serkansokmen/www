import { Component, OnInit, ViewChild, ElementRef, Input, AfterViewInit } from '@angular/core';
import { SocialLinksService } from './social-links.service';
import { SocialLinkNodeComponent } from './social-link-node.component';


@Component({
  selector: 'app-social-links',
  templateUrl: 'social-links.component.html',
  styleUrls: ['social-links.component.scss'],
  providers: [SocialLinksService],
  directives: [SocialLinkNodeComponent]
})
export class SocialLinksComponent implements AfterViewInit {

  engine;
  world;
  render;
  socialLinks;

  constructor(private service: SocialLinksService) {
    this.socialLinks = service.getSocialLinks();
  }

  ngAfterViewInit() {

  }

}
