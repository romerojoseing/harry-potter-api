/* ---------- Generals ---------- */
import { NgModule } from '@angular/core';

/* ---------- Modules ---------- */
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    FormsModule, ReactiveFormsModule
  ],
  exports: [
    FormsModule, ReactiveFormsModule
  ],
  declarations: [],
})

export class SharedAdminModule { }