import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TesteRoutingModule } from './teste-routing.module';
import { TesteComponent } from './teste.component';

@NgModule({
  declarations: [
    TesteComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    TesteRoutingModule,
  ],
  providers: [],
})
export class TesteModule { }
