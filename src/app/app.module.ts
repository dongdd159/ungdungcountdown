import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PipeDemoComponent } from './pipe-demo/pipe-demo.component';
import { RatingBarComponent } from './rating-bar/rating-bar.component';
import { TimeCountDownComponent } from './time-count-down/time-count-down.component';

@NgModule({
  declarations: [
    AppComponent,
    PipeDemoComponent,
    RatingBarComponent,
    TimeCountDownComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
