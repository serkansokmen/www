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

    // Observable.interval(40000)
    //   .take(this.stories.getStoryCount())
    //   .map((x) => x+1)
    //   .subscribe((x) => {
    //     this.currentStoryPath = this.stories.getStoryPath(x);
    //   });
  }

  ngOnInit() {
    this.currentStoryPath = this.stories.getNext();
  }

  @HostListener('mousedown', ['$event'])
  handleMousePress(event: MouseEvent) {
    this.currentStoryPath = this.stories.getNext();
  }

  @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    // left = 37
    // up = 38
    // right = 39
    // down = 40
    // space = 32
    if (event.keyCode == 32 || event.keyCode == 39 || event.keyCode == 38) {
      this.currentStoryPath = this.stories.getNext();
    } else if (event.keyCode == 37 || event.keyCode == 40) {
      this.currentStoryPath = this.stories.getPrevious();
    }
  }

}
