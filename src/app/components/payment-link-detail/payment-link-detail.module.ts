import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { ModalQuoteModule } from '../product/modal-quote/modal-quote.module';
import { PaymentLinkDetailComponent } from './payment-link-detail.component';

@NgModule({
  declarations: [PaymentLinkDetailComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatCardModule,
    MatButtonModule,
    ModalQuoteModule
  ]
})
export class PaymentLinkDetailModule { }
