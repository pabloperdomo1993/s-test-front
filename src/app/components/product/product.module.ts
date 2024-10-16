import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [ProductComponent],
  imports: [
    CommonModule,
    CommonModule,
    ReactiveFormsModule,
    MatCardModule,
    MatButtonModule
  ]
})
export class ProductModule { }
