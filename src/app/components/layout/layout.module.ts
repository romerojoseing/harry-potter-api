/* ---------- Generals ---------- */
import { NgModule } from '@angular/core';

/* ---------- Modules ---------- */
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

/* ---------- Components ---------- */
import { BaseComponent } from './base/base.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    BaseComponent, 
    NavbarComponent, 
    FooterComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  providers: [ ]
})
export class LayoutModule { }
