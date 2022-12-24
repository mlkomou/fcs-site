import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {CarouselModule} from "ngx-owl-carousel-o";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { HeaderComponent } from './pages/header/header.component';
import { BgSectionComponent } from './pages/bg-section/bg-section.component';
import { DomaineSectionComponent } from './pages/domaine-section/domaine-section.component';
import { AboutSectionComponent } from './pages/about-section/about-section.component';
import { ServiceSectionComponent } from './pages/service-section/service-section.component';
import { ContactSectionComponent } from './pages/contact-section/contact-section.component';
import { HomeComponent } from './pages/home/home.component';
import { MoreAboutSectionComponent } from './pages/more-about-section/more-about-section.component';
import { NewsSectionComponent } from './pages/news-section/news-section.component';
import { FooterComponent } from './pages/footer/footer.component';
import { FooterTopComponent } from './pages/footer-top/footer-top.component';
import { PaymentComponent } from './pages/payment/payment.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BgSectionComponent,
    DomaineSectionComponent,
    AboutSectionComponent,
    ServiceSectionComponent,
    ContactSectionComponent,
    HomeComponent,
    MoreAboutSectionComponent,
    NewsSectionComponent,
    FooterComponent,
    FooterTopComponent,
    PaymentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CarouselModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
