import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

// If you have a SharedModule for navbar, keep it; otherwise remove the import.
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // Remove this if you don't have SharedModule or navbar yet
    SharedModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}