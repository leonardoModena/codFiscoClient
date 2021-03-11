import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CodFiscoComponent } from './CodFisco/cod-fisco.component';


const routes: Routes = [
  {path: 'top', component: CodFiscoComponent, data: {animation: 'isTop'}},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
