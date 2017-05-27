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
  private timer: any;
  private canSwitch: boolean;

  constructor(
    private stories: StoriesService,
    private socialLinks: SocialLinksService
  ) {

    this.canSwitch = true;
    Observable
      .fromPromise(socialLinks.getSocialLinks())
      .subscribe(data => {
        this.linkItems = data;
      });

    this.loop();
  }

  loop() {
    this.timer = setTimeout((event) => {
      console.log(event);
    })
    Observable.of(null)
      .concatMap(() => Observable.timer(Math.random() * Math.floor(Math.random()) * 100))
      .do(() => this.currentStoryPath = this.stories.getNext())
      .repeat()  // optionally .repeat(10)
      .subscribe();



    // .interval(40)
    //   .take(this.stories.getStoryCount())
    //   .map((x) => x)
    //   .subscribe((x) => {
    //     if (this.canSwitch) {
    //       this.currentStoryPath = this.stories.getStoryPath(x);
    //     }
    //     if (this.currentStoryPath == this.stories[this.stories.getStoryCount()]) {
    //       this.loop();
    //     }
    //   });
  }

  ngOnInit() {
    this.currentStoryPath = this.stories.getNext();
  }

  @HostListener('mousedown', ['$event'])
  handleMousePress(event: MouseEvent) {
    this.canSwitch = false;
  }

  @HostListener('document:mouseup', ['$event'])
  handleMouseMove(event) {
    this.canSwitch = true;
  }

}
