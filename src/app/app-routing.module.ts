import { componentFactoryName } from '@angular/compiler';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CodFiscoComponent } from './CodFisco/cod-fisco.component';
import { LandingPageComponent } from './landing-page/landing-page.component';


const routes: Routes = [
  {path: 'index', component: LandingPageComponent,},
  { path: '',   redirectTo: '/index', pathMatch: 'full' },
  {path: 'top', component: CodFiscoComponent, data: {animation: 'isTop'}},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
