import { Component, OnInit, Input } from '@angular/core';
import { Image } from '../../models/image';

@Component({
  selector: 'ng-image',
  templateUrl: './image.component.html',
  styles: [`
    .gallery-item {
      padding-top: 15px;
      padding-bottom: 15px;
      cursor: pointer;
    }
  `]
})
export class ImageComponent implements OnInit {
  @Input() image: Image; 
  constructor() { }

  ngOnInit() {
  }

}
