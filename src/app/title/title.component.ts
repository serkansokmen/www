import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: 'title.component.html',
  styleUrls: ['title.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class TitleComponent {

  @Input() title;

}
