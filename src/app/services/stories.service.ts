import { Injectable } from '@angular/core';


@Injectable()
export class StoriesService {

  private count: number = 79;
  private pageURLs: string[] = [];
  private lastStory: number = 0;

  constructor() {
    let banned = [0, 1, 6, 18, 21, 24, 25, 34, 38, 41, 46, 48, 49, 57, 61, 62, 74];
    for (var i = 0; i < this.count; i++) {
      if (banned.indexOf(i) == -1){
        this.pageURLs.push(`/assets/stories/${i}.txt`);
      }
    }
  }

  getPrevious() {
    var index = this.lastStory > -1 ? this.lastStory - 1 : this.pageURLs.length - 1;
    var newPageURL = this.pageURLs[index];
    this.lastStory = index;
    return newPageURL;
  }

  getNext() {
    var index = this.lastStory < this.pageURLs.length - 1 ? this.lastStory + 1 : 0;
    var newPageURL = this.pageURLs[index];
    this.lastStory = index;
    return newPageURL;
  }

  getStoryCount(): number {
    return this.pageURLs.length;
  }

  getStoryPath(index: number): string {
    return this.pageURLs[index];
  }

}
