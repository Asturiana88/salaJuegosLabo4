import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatComponent } from './pages/chat/chat.component';
import { HomeComponent } from './pages/home/home.component';
import { PiedraPapelOTijeraComponent } from './pages/juegos/piedra-papel-o-tijera/piedra-papel-o-tijera.component';
import { TatetiComponent } from './pages/juegos/tateti/tateti.component';
import { ListadoComponent } from './pages/listado/listado.component';
import { LoginComponent } from './pages/login/login.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { QuienSoyComponent } from './pages/quien-soy/quien-soy.component';
import { UsuarioComponent } from './pages/usuario/usuario.component';

const routes: Routes = [
  {
    path: "charla", component: ChatComponent,
  },
  {
    path: "listado", component: ListadoComponent,
  },
  {
    path: 'usuario', component: UsuarioComponent
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: '', component: HomeComponent
  },
  {
    path: 'quien-soy', component: QuienSoyComponent
  },
  {
    path: 'juegos/tateti', component: TatetiComponent
  },
  {
    path: 'juegos/piedra-papel-o-tijera', component: PiedraPapelOTijeraComponent
  },
  {
    path: '**', component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
