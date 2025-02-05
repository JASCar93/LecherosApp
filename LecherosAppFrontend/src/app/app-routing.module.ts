import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrarComponent } from './pages/registrar/registrar.component';
import { HomeComponent } from './pages/home/home.component';
import { ListUsuarioComponent } from './pages/list-usuario/list-usuario.component';
import { TicketComponent } from './pages/ticket/ticket.component';
import { AddTicketComponent } from './pages/add-ticket/add-ticket.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent,
    pathMatch:'full'
  },
  {
    path:'listUsuario',
    component:ListUsuarioComponent,
    pathMatch:'full'
  },
  {
    path:'registrar',
    component:RegistrarComponent,
    pathMatch:'full'
  },
  {
    path: 'ticket',
    component:TicketComponent,
    pathMatch:'full'
  },
  {
    path:'add-ticket',
    component:AddTicketComponent,
    pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
