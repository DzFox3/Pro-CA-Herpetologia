declare var bootstrap: any;

import { Component } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  modalImageSrc: string = '';
  selectedImage: string | null = null;

  openImageModal(src: string): void {
    this.modalImageSrc = src; 
    const modal = new bootstrap.Modal(document.getElementById('imageModal'));
    modal.show();
  }
  
  closeImageModal() {
    this.selectedImage = null;
  }
}



