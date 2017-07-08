import { Component, ViewEncapsulation, OnInit, HostListener } from '@angular/core';
import { StoriesService } from './services/stories.service';
import { SocialLinksService } from './services/social-links.service';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  providers: [
    StoriesService,
    SocialLinksService
  ],
  encapsulation: ViewEncapsulation.Emulated
})
export class AppComponent implements OnInit {

  public linkItems;
  public currentStoryPath: string;

  constructor(
    private stories: StoriesService,
    private socialLinks: SocialLinksService
  ) {

    Observable
      .fromPromise(socialLinks.getSocialLinks())
      .subscribe(data => {
        this.linkItems = data;
      });

    // Observable.of(null)
    //   .concatMap(() => Observable.timer(Math.random() * Math.floor(Math.random()) * 100))
    //   .do(() => this.currentStoryPath = this.stories.getNext())
    //   .repeat()  // optionally .repeat(10)
    //   .subscribe();
  }

  ngOnInit() {
    this.currentStoryPath = this.stories.getNext();
  }

}
