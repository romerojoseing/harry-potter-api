/* ---------- Generals ---------- */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

/* ---------- Modules ---------- */
import { SharedAdminModule } from 'src/app/shared/shared-admin.module';

/* ---------- Components ---------- */
import { RequestsComponent } from './requests.component';

const routes: Routes = [
  {
    path: '',
    component: RequestsComponent
  }
]

@NgModule({
  declarations: [RequestsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedAdminModule
  ]
})
export class RequestsModule { }