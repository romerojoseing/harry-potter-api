/* ---------- Generals ---------- */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

/* ---------- Modules ---------- */
import { SharedAdminModule } from 'src/app/shared/shared-admin.module';

/* ---------- Components ---------- */
import { StaffComponent } from './staff.component';

const routes: Routes = [
  {
    path: '',
    component: StaffComponent
  }
]

@NgModule({
  declarations: [StaffComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedAdminModule
  ]
})
export class StaffModule { }