import { trigger, state, style, transition, animate } from '@angular/animations';
import { Overlay, OverlayConfig, OverlayRef } from '@angular/cdk/overlay';
import { OverlayContentComponent } from './overlay-content';
import { ComponentPortal } from '@angular/cdk/portal';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@Component({
  selector: 'app-overlay-example',
  standalone: true,  // Mark this as a standalone component
  templateUrl: './overlay-example.component.html',
  styleUrls: ['./overlay-example.component.scss'],
  imports: [CommonModule, BrowserModule, BrowserAnimationsModule, OverlayContentComponent],
  animations: [
    trigger('moveOverlay', [
      state('default', style({
        transform: 'translate(0, 0)'
      })),
      state('moved', style({
        transform: 'translate(200px, 200px)'
      })),
      transition('default <=> moved', [
        animate('0.3s ease-in-out')
      ])
    ])
  ]
})
export class OverlayExampleComponent {
  overlayRef: OverlayRef | null = null;
  overlayPosition = 'default'; // State for animation

  constructor(private overlay: Overlay) {}

  openOverlay() {
    const overlayConfig = new OverlayConfig({
      hasBackdrop: true,
      positionStrategy: this.overlay.position().global().top('50px').left('50px')
    });

    this.overlayRef = this.overlay.create(overlayConfig);
    const overlayPortal = this.overlayRef.attach(new ComponentPortal(OverlayContentComponent));
  }

  closeOverlay() {
    if (this.overlayRef) {
      this.overlayRef.dispose();
      this.overlayRef = null;
    }
  }

  moveOverlay() {
    this.overlayPosition = this.overlayPosition === 'default' ? 'moved' : 'default';
  }
}
