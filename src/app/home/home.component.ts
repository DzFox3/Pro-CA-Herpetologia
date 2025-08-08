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
  
    // Esperar a que el modal esté visible para aplicar zoom
  setTimeout(() => {
    const img = document.querySelector('#imageModal img') as HTMLImageElement;
    if (img) {
      img.style.maxWidth = '180vw'; // hasta el 90% del ancho de la ventana
      img.style.maxHeight = '180vh'; // hasta el 90% del alto de la ventana
      img.style.width = 'auto';
      img.style.height = 'auto';
      img.style.objectFit = 'contain';
    }
  }, 200);
  }

  closeImageModal() {
    this.selectedImage = null;
  }
}



