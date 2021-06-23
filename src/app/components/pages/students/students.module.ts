/* ---------- Generals ---------- */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

/* ---------- Modules ---------- */
import { SharedAdminModule } from 'src/app/shared/shared-admin.module';

/* ---------- Components ---------- */
import { StudentsComponent } from './students.component';

const routes: Routes = [
  {
    path: '',
    component: StudentsComponent
  }
]

@NgModule({
  declarations: [StudentsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedAdminModule
  ]
})
export class StudentsModule { }