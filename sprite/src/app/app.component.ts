import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title:string = 'sprite';
  counter:number = 0;
  imageURL:string = 'url("http://fe.it-academy.by/Examples/cards2.png")';
  imageSize:{h:number, w:number} = {h: 192, w: 142};
  imageCoordinates:Array<{x:number, y:number}> = [
    {x: 0, y: 0},
    {x: -144, y: 0},
    {x: -288, y: 0},
    {x: -432, y: 0},
    {x: 0, y: -194},
    {x: -144, y: -194},
    {x: -288, y: -194},
    {x: -432, y: -194},
    {x: 0, y: -388},
    {x: -144, y: -388},
    {x: -288, y: -388},
    {x: -432, y: -388},
  ];

  getOffsetX() {
    return this.imageCoordinates[this.counter].x;
  }
  getOffsetY() {
    return this.imageCoordinates[this.counter].y;
  }
  getWidth() {
    return this.imageSize.w;
  }
  getHeight() {
    return this.imageSize.h;
  }
  getURL() {
    return this.imageURL;
  }
  setImage():void {
    if(this.counter === 11) {
      this.counter = 0;
    } else {
      this.counter++;
    }
  }
  
}
