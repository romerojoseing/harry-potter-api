/* ---------- Generals ---------- */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

/* ---------- Modules ---------- */
import { SharedAdminModule } from 'src/app/shared/shared-admin.module';

/* ---------- Components ---------- */
import { CharactersComponent } from './characters.component';

const routes: Routes = [
  {
    path: '',
    component: CharactersComponent
  }
]

@NgModule({
  declarations: [CharactersComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedAdminModule
  ]
})
export class CharactersModule { }