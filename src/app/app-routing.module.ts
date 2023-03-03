import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarouselComponent } from './components/carousel/carousel.component';
import { InformacionComponent } from './components/informacion/informacion.component';

const routes: Routes = [
  {path: '', component:CarouselComponent},
  {path:'informacion',component:InformacionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
