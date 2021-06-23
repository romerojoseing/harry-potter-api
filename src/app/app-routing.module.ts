/* ---------- Generals ---------- */
import { NgModule } from '@angular/core';

/* ---------- Modules ---------- */
import { Routes, RouterModule } from '@angular/router';

/* ---------- Components ---------- */
import { BaseComponent } from './components/layout/base/base.component';
import { ErrorsComponent } from './components/errors/errors.component';
import { DocsComponent } from "./components/pages/docs/docs.component";

const routes: Routes = [
  {
    path: '',
    component: BaseComponent,
    children: [
      {
        path: 'home',
        loadChildren: () => import('./components/pages/home/home.module').then(m => m.HomeModule)
      },
      {
        path: 'characters',
        loadChildren: () => import('./components/pages/characters/characters.module').then(m => m.CharactersModule)
      },
      {
        path: 'students',
        loadChildren: () => import('./components/pages/students/students.module').then(m => m.StudentsModule)
      },
      {
        path: 'staff',
        loadChildren: () => import('./components/pages/staff/staff.module').then(m => m.StaffModule)
      },
      {
        path: 'requests',
        loadChildren: () => import('./components/pages/requests/requests.module').then(m => m.RequestsModule)
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
