import { Injectable } from '@angular/core';
import { Image } from '../models/image';

@Injectable()
export class ImageService {
  images: Image[] = [
    new Image('1', 'First Image', 'First image description', 'http://via.placeholder.com/255x170', 'http://via.placeholder.com/730x485'),
    new Image('2', 'Second Image', 'First image description', 'http://via.placeholder.com/255x170', 'http://via.placeholder.com/730x485'),
    new Image('3', 'Third Image', 'First image description', 'http://via.placeholder.com/255x170', 'http://via.placeholder.com/730x485'),
    new Image('4', 'Fourth Image', 'First image description', 'http://via.placeholder.com/255x170', 'http://via.placeholder.com/730x485'),
    new Image('5', 'Fifth Image', 'First image description', 'http://via.placeholder.com/255x170', 'http://via.placeholder.com/730x485'),
    new Image('6', 'Sixth Image', 'First image description', 'http://via.placeholder.com/255x170', 'http://via.placeholder.com/730x485'),
    new Image('7', 'Seventh Image', 'First image description', 'http://via.placeholder.com/255x170', 'http://via.placeholder.com/730x485'),
    new Image('8', 'Eight Image', 'First image description', 'http://via.placeholder.com/255x170', 'http://via.placeholder.com/730x485')
  ];
  
  constructor() { }

  getImages() {
    return this.images;
  }

}
