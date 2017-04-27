import { Component, ViewEncapsulation, ViewChild, ElementRef, Input, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-social-link-node',
  template: `
    <a [href]="item.url" target="_blank" [title]="item.title">
      <canvas #drawCanvas width="44" height="44"></canvas>
    </a>
  `,
  styleUrls: ['social-link-node.component.scss'],
  encapsulation: ViewEncapsulation.Native
})
export class SocialLinkNodeComponent implements AfterViewInit {

  @Input() item;
  private image;

  @ViewChild('drawCanvas') drawCanvas;
  context: CanvasRenderingContext2D;

  constructor() { }

  ngAfterViewInit() {
    var w = 44;
    var h = 44;
    let canvas = this.drawCanvas.nativeElement;
    this.context = canvas.getContext('2d');
    this.image = new Image();
    this.image.onload = () => {
      let ratio = 1.0;
      if (this.image.width > this.image.height) {
        // Portrait
        ratio = w / this.image.width;
      } else {
        ratio = h / this.image.height;
      }
      let sw = this.image.width * ratio;
      let sh = this.image.height * ratio;
      let sx = (w - sw) / 2;
      let sy = (h - sh) / 2;
      this.context.drawImage(this.image, 0, 0, this.image.width, this.image.height, sx, sy, sw, sh);
    };
    this.image.src = this.item.imgSrc;
  }

}
