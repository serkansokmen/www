import { Component, AfterViewInit, HostListener } from '@angular/core';
import { UnityService } from '../../shared/unity.service';

@Component({
  selector: 'app-sokmen',
  templateUrl: './sokmen.component.html',
  styleUrls: ['./sokmen.component.scss']
})
export class SokmenComponent implements AfterViewInit {

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    console.log(event.target.innerWidth);
    // this.game.firstChild.na = event.target.innerWidth
  }

  constructor(private unity: UnityService) { }

  ngAfterViewInit() {
    this.unity.load('game');
  }

}
