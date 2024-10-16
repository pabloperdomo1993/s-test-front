import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../services/product.service';

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
    private productService: ProductService
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
}
