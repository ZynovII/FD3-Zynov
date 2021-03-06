import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'sprite',
  templateUrl: './sprite.component.html',
  styleUrls: ['./sprite.component.scss']
})
export class SpriteComponent {

  @Input("offset-x")
  offsetX!:number;
  @Input("offset-y")
  offsetY!:number;
  @Input('url')
  url!:string;
  @Input('width')
  width!:number;
  @Input('heigth')
  height!:number;

  @Output('clicked')
  _clickOutputEE = new EventEmitter<void>();

}
