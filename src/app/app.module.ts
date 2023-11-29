import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BannerComponent } from './banner/banner.component';
import { BgcolorDirective } from './bgcolor.directive';
import { AppearAfterDirective } from './appear-after.directive';

@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    BgcolorDirective,
    AppearAfterDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
