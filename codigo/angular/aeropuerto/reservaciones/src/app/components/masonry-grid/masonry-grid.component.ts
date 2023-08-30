import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-masonry-grid',
  templateUrl: './masonry-grid.component.html',
  styleUrls: ['./masonry-grid.component.css']
})
export class MasonryGridComponent {
  @Input() inputData: any[] | undefined;
  @Output() outputData = new EventEmitter<any[]>();

  images = [
    { url: 'assets/img/img1.jpg' },
    { url: 'assets/img/img5.jpg' },
    { url: 'assets/img/img6.jpg' },
    { url: 'assets/img/img10.jpg' },
    { url: 'assets/img/img9.jpg' },
    { url: 'assets/img/img2.jpg' },
    { url: 'assets/img/img8.jpg' },
    { url: 'assets/img/img3.jpg' },
    { url: 'assets/img/img7.jpg' },
    { url: 'assets/img/img4.jpg' },
  ];

  ngOnInit() {
    if (this.inputData) {
      this.images = this.inputData;
      this.outputData.emit(this.inputData);
    }
  }
}
