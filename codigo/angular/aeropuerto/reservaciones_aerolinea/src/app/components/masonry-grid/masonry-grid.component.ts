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
    { url: 'assets/imagenes/img1.jpg' },
    { url: 'assets/imagenes/img5.jpg' },
    { url: 'assets/imagenes/img6.jpg' },
    { url: 'assets/imagenes/img10.jpg' },
    { url: 'assets/imagenes/img9.jpg' },
    { url: 'assets/imagenes/img2.jpg' },
    { url: 'assets/imagenes/img8.jpg' },
    { url: 'assets/imagenes/img3.jpg' },
    { url: 'assets/imagenes/img7.jpg' },
    { url: 'assets/imagenes/img4.jpg' },
  ];

  ngOnInit() {
    if (this.inputData) {
      this.images = this.inputData;
      this.outputData.emit(this.inputData);
    }
  }
}
