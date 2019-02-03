import { Component, Input, OnInit } from '@angular/core';
import { NgxMasonryOptions } from 'ngx-masonry';

@Component({
  selector: 'app-image-list',
  templateUrl: './image-list.component.html',
  styleUrls: ['./image-list.component.styl']
})
export class ImageListComponent implements OnInit {

  @Input() square: boolean

  masonryItems = [1, 2, 3, 4, 5,  6, 7, 8, 9, 10]
  myOptions: NgxMasonryOptions = {
    gutter: 16,
    transitionDuration: '0.1s'
  }

  constructor() { }

  ngOnInit() {
  }

}
