import { odevComponent } from './components/odev/odev.component';
import { UyeComponent } from './components/uye/uye.component';
import { KategoriComponent } from './components/kategori/kategori.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './services/auth.guard';
import { ProfilComponent } from './components/profil/profil.component';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'kategoriler',
    component: KategoriComponent,
  },
  {
    path: 'uyeler',
    component: UyeComponent,
  
  }
  ,
  {
    path: 'odev',
    component: odevComponent,
    
  },
  {
    path: 'odev/:katId',
    component: odevComponent,
    
  },
  {
    path: 'profil',
    component: ProfilComponent,
  
  },
  {
    path: 'signup',
    component: SignupComponent,
  
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
