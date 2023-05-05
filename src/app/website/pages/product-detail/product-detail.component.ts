import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { Product } from 'src/app/models/Products.model';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
})
export class ProductDetailComponent implements OnInit {
  productId: string | null = null;
  product: Product | null = null;
  limit = 10;
  offset = 0;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.route.paramMap
      .pipe(
        switchMap((params) => {
          // el paramentro que ponemos dentro del get debe ser igual que cuando lo ponemos en router
          this.productId = params.get('id');
          if (this.productId) {
            return this.productService.getProduct(this.productId);
          }
          return [null];
        })
      )
      .subscribe((data) => {
        this.product = data;
      });
  }

  goToBack() {
    this.location.back();
  }
}
