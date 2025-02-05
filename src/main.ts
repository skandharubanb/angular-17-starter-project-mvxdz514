import { bootstrapApplication } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OverlayExampleComponent } from '../overlay-example';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

bootstrapApplication(OverlayExampleComponent, {
  providers: [provideAnimationsAsync()]  // Import BrowserAnimationsModule here
}).catch(err => console.error(err));
