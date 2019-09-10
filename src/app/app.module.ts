import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { AgmCoreModule } from '@agm/core';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBg0uL_cxIOBUr-AIzaSyBg0uL_cxIOBUr-8Fk7wB_j6NhBFWAPJyQ'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
