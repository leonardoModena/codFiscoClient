import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { importType } from '@angular/compiler/src/output/output_ast';
import { CodFiscoComponent } from './CodFisco/cod-fisco.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { ShareService } from "./service/share/share.service";
import { InserimentoComponent } from './inserimento/inserimento.component';

@NgModule({
  declarations: [
    AppComponent,
    CodFiscoComponent,
    LandingPageComponent,
    InserimentoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [ShareService],
  bootstrap: [AppComponent]
})
export class AppModule { }
