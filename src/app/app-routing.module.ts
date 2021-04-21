import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './componente/home/home.component'
import { LoginComponent } from './componente/login/login.component'
import { QuienSoyComponent } from './componente/quien-soy/quien-soy.component'
import { RegistroComponent } from './componente/registro/registro.component';

const routes: Routes = [
  {path:'', redirectTo: '/home', pathMatch: 'full'},
  {path:'home', component: HomeComponent},
  {path:'login', component: LoginComponent},
  {path:'quien-soy', component: QuienSoyComponent},
  {path:'registro', component: RegistroComponent},
  { path: 'ppt', loadChildren: () => import('./ppt/ppt.module').then(m => m.PptModule) }

  //{path:'**', component: RegistroComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
