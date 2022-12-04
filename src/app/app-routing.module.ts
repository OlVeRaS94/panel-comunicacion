import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { BackofficeComponent } from './backoffice/backoffice.component';
import { BackofficeuserComponent } from './backofficeuser/backofficeuser.component';
import { ContactComponent } from './contact/contact.component';
import { LandingComponent } from './landing/landing.component';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { RegisterComponent } from './register/register.component';
import { VistadellateComponent } from './vistadellate/vistadellate.component';

import { AlimentoAnimalComponent } from './cards/alimento-animal/alimento-animal.component';
import { AlimentoProcesadoComponent } from './cards/alimento-procesado/alimento-procesado.component';
import { CocinaComponent } from './cards/cocina/cocina.component';
import { PersonaComponent } from './cards/persona/persona.component';
import { ColorComponent } from './cards/color/color.component';
import { EventoComponent } from './cards/evento/evento.component';
import { AnimalComponent } from './cards/animal/animal.component';
import { AsignaturaComponent } from './cards/asignatura/asignatura.component';




import { canActivate, redirectUnauthorizedTo } from '@angular/fire/auth-guard';


const routes: Routes = [

  {
    path: 'landing',
    component: LandingComponent,
  },

  { path: '', pathMatch: 'full', redirectTo: '/landing' },
  { path: 'main', component: MainComponent,},
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent  },

  {
    path: 'aboutus',
    component: AboutusComponent,
  },
  {
    path: 'backoffice',
    component: BackofficeComponent,
    ...canActivate(() => redirectUnauthorizedTo('/login')),
},
  {
    path: 'backofficeuser',
    component: BackofficeuserComponent,
    ...canActivate(() => redirectUnauthorizedTo('/login')),
  },
  {
    path: 'contact',
    component: ContactComponent,
  },
  {
    path: 'vistadellate/:id',
    component: VistadellateComponent,
    ...canActivate(() => redirectUnauthorizedTo('/login')),
  },
  {
    path: 'alimento-animal',
    component: AlimentoAnimalComponent,
  },
  {
    path: 'alimento-procesado',
    component: AlimentoProcesadoComponent,
  },
  {
    path: 'cocina',
    component: CocinaComponent,
  },
  {
    path: 'persona',
    component: PersonaComponent,
  },
  {
    path: 'animal',
    component: AnimalComponent,
  },
  {
    path: 'evento',
    component: EventoComponent,
  },
  {
    path: 'color',
    component: ColorComponent,
  },
  {
    path: 'asignatura',
    component: AsignaturaComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
