/* ---------- Generals ---------- */
import { NgModule } from '@angular/core';

/* ---------- Modules ---------- */
import { Routes, RouterModule } from '@angular/router';

/* ---------- Components ---------- */
import { BaseComponent } from './components/layout/base/base.component';
import { ErrorsComponent } from './components/errors/errors.component';
import { HomeComponent } from './components/pages/home/home.component';
import { CharactersComponent } from './components/pages/characters/characters.component';
import { StudentsComponent } from './components/pages/students/students.component';
import { StaffComponent } from './components/pages/staff/staff.component';
import { HouseComponent } from './components/pages/house/house.component';
import { DocsComponent } from "./components/pages/docs/docs.component";

const routes: Routes = [
  {
    path: '',
    component: BaseComponent,
    children: [
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'characters',
        component: CharactersComponent
      },
      {
        path: 'students',
        component: StudentsComponent
      },
      {
        path: 'staff',
        component: StaffComponent
      },
      {
        path: 'house',
        component: HouseComponent
      },
      {
        path: 'docs',
        component: DocsComponent
      },
      { path: '', redirectTo: 'home', pathMatch: 'full' },
    ]
  },
  {
    path: 'error',
    component: ErrorsComponent,
    data: {
      'type': 404,
      'title': 'Page Not Found',
      'desc': 'Oopps!! The page you were looking for doesn\'t exist.'
    }
  },
  {
    path: 'error/:type',
    component: ErrorsComponent
  },
  { path: '**', redirectTo: 'error', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
