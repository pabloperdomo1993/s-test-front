import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { ExchangeService } from '../../services/exchange.service';
import { MatDialog } from '@angular/material/dialog';
import { ModalQuoteComponent } from './modal-quote/modal-quote.component';
import { PayinService } from '../../services/payin.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent implements OnInit {
  /**
   * Product detail.
   */
  product: any;

  /**
   * Url of image.
   */
  public urlImage: string;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private exchangeService: ExchangeService,
    private dialog: MatDialog,
    private payinService: PayinService,
    private toastr: ToastrService
  ) {
    this.urlImage = 'https://supra.la/wp-content/uploads/2020/02/logo-supra-pagos-intenacionales-blanco.svg';
  }

  /**
   * Starts variables.
   */
  public ngOnInit(): void {
    this.getProductById();
  }

  /**
   * Gets product by id.
   */
  public getProductById(): void {
    
    this.route.paramMap.subscribe(params => {
      const id = Number(params.get('id'));

      this.productService.getProductById(id).subscribe({
        next: (data: any) => {
          this.product = data;
        },
        error: (error: any) => {}
      })
    })
  }

  /**
   * Buy product.
   */
  public buyProduct(): void {
    const body = {
      initialCurrency: "USD",
      finalCurrency: "COP",
      initialAmount: 400
    };

    this.exchangeService.exchangeQuote(body).subscribe({
      next: (data: any) => {
        this.toastr.success('Exchange quote successful');
        this.openDialog(data);
      },
      error: (error) => {}
    })
  }

  /**
   * Open dialog.
   */
  private openDialog(data: any): void {
    const dialogRef = this.dialog.open(ModalQuoteComponent, {
      data: {
        initialCurrency: data.initialCurrency,
        initialAmount: data.initialAmount,
        exchangeRate: data.exchangeRate,
        finalAmount: data.finalAmount
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {        
        this.createPayinPayment(data.finalCurrency, data.initialAmount, data.id);
      }
    });
  }

  /**
   * Create Payin payment.
   */
  private createPayinPayment(currency: string, amount: number, id: string): void {
    const baseUrl = window.location.origin + '/payment-link-detail';

    const body = {
      currency: currency,
      amount: amount,
      quoteId: id,
      redirectUrl: baseUrl
    };

    this.payinService.payinPaymentCreate(body).subscribe({
      next: (data: any) => {
        this.toastr.success('Payin payment create successful');

        const baseUrl = `${data.redirectUrl}/${data.id}`;

        window.location.replace(baseUrl);
      },
      error: (error) => {}
    })
  }
}
