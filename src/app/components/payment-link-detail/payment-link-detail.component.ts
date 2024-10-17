import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PayinService } from '../../services/payin.service';

@Component({
  selector: 'app-payment-link-detail',
  templateUrl: './payment-link-detail.component.html',
  styleUrl: './payment-link-detail.component.scss'
})
export class PaymentLinkDetailComponent implements OnInit {
  /**
   * Payment detail.
   */
  payment: any;

  constructor(
    private route: ActivatedRoute,
    private payinService: PayinService
  ) { 
    this.payment = {};
  }

  /**
   * Starts variables.
   */
  public ngOnInit(): void {
    this.getPaymentLinkById();
  }

  /**
   * Gets payment link detail.
   */
  private getPaymentLinkById(): void {
    this.route.paramMap.subscribe(params => {
      const id = String(params.get('id'));

      this.payinService.payinPaymentGetById(id).subscribe({
        next: (data: any) => {
          this.payment = data;
        },
        error: (error: any) => { }
      })
    })
  }
}
