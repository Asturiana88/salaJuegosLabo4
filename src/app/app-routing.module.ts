import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatComponent } from './pages/chat/chat.component';
import { HomeComponent } from './pages/home/home.component';
import { ListadoComponent } from './pages/listado/listado.component';
import { LoginComponent } from './pages/login/login.component';
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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
