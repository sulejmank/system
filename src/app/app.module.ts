import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { OnlineComponent } from './online/online.component';
import { BlogComponent } from './home/blog/blog.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    OnlineComponent,
    BlogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbCarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
