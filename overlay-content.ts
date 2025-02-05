import { Component } from '@angular/core';

@Component({
  selector: 'app-overlay-content',
  template: '<div class="overlay-content">This is an overlay!</div>',
  standalone: true,
  styles: [`
    .overlay-content {
      background: rgba(0, 0, 0, 0.7);
      color: white;
      padding: 20px;
      border-radius: 5px;
      transition: transform 0.3s ease-out;
    }
  `]
})
export class OverlayContentComponent {}
