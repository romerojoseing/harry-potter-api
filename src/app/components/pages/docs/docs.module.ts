/* ---------- Generals ---------- */
import { NgModule } from '@angular/core';

/* ---------- Modules ---------- */
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

/* ---------- Components ---------- */
import { DocsComponent } from './docs.component';

const routes: Routes = [
  {
    path: 'docs',
    component: DocsComponent
  }
]

@NgModule({
  declarations: [DocsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class DocsModule { }
