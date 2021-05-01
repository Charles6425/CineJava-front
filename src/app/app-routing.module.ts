import { FilmeDeleteComponent } from './components/view/filme/filme-delete/filme-delete.component';
import { FilmeCreateComponent } from './components/view/filme/filme-create/filme-create.component';
import { FilmeReadComponent } from './components/view/filme/filme-read/filme-read.component';
import { SalaReadComponent } from './components/view/sala/sala-read/sala-read.component';
import { HomeComponent } from './components/view/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'',
    component: HomeComponent
  },
  {
    path:'salas',
    component: SalaReadComponent
  },
  {
    path:'filmes',
    component:FilmeReadComponent
  },
  {
    path:'filmes/create',
    component:FilmeCreateComponent
  },
  {
    path:'filmes/delete/:id',
    component:FilmeDeleteComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
