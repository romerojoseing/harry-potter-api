/* ---------- Generals ---------- */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

/* ---------- Modules ---------- */
import { SharedAdminModule } from 'src/app/shared/shared-admin.module';

/* ---------- Components ---------- */
import { HomeComponent } from './home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  }
]

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedAdminModule
  ]
})
export class HomeModule { }