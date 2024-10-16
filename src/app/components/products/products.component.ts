import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent implements OnInit {
  /**
   * List of products.
   */
  products: any[];

  constructor(
    private productService: ProductService,
    private router: Router
  ) {
    this.products = [];
  }

  /**
   * Starts variables.
   */
  public ngOnInit(): void {
     this.getProducts();
  }

  /**
   * Gets products.
   */
  private getProducts(): void {
    this.productService.getProducts().subscribe({
      next: (data: any) => {
        this.products = data;
      },
      error: (error: any) => {}
    });
  }

  /**
   * Redirects to product.
   */
  public buyProduct(id: number): void {
    this.router.navigate([`product/${id}`]);
  }
}
