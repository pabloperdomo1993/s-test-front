import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { ExchangeService } from '../../services/exchange.service';
import { AuthService } from '../../services/auth.service';
import { MatDialog } from '@angular/material/dialog';
import { ModalQuoteComponent } from './modal-quote/modal-quote.component';
import { PayinService } from '../../services/payin.service';

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

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private exchangeService: ExchangeService,
    private authService: AuthService,
    private dialog: MatDialog,
    private payinService: PayinService
  ) {}

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
    const credentials = {
      clientId: "c859cd16-9dee-4c7b-a230-bf2c6f055cd3",
      clientSecret: "ClientSecret"
    };

    this.authService.authClient(credentials).subscribe({
      next: (data: any) => {
        localStorage.setItem('accessToken', JSON.stringify(data.token));
        this.buyAction();
      },
      error: (error) => {
        console.log('-----eee', error)
      }
    })
  }

  /**
   * Buy product.
   */
  private buyAction(): void {
    const body = {
      "initialCurrency": "COP",
      "finalCurrency": "USD",
      "initialAmount": 40000000
    };

    this.exchangeService.exchangeQuote(body).subscribe({
      next: (data: any) => {
        console.log('-----', data)
        this.openDialog();
      },
      error: (error) => {
        console.log('-----eee', error)
      }
    })
  }

  /**
   * Open dialog.
   */
  private openDialog(): void {
    const dialogRef = this.dialog.open(ModalQuoteComponent, {
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log('-----acepto')
      }
    });
  }

  /**
   * Create Payin payment.
   */
  private createPayinPayment(): void {
    const body = {

    };

    this.payinService.payinPaymentCreate(body).subscribe({

    })
  }
}
