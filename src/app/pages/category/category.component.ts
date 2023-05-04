import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { Product } from 'src/app/models/Products.model';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
})
export class CategoryComponent implements OnInit {
  products: Product[] = [];
  categoryId: string | null = null;
  limit = 10;
  offset = 0;
  productId: string | null=null

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    this.route.paramMap
      .pipe(
        switchMap((params) => {
          // el paramentro que ponemos dentro del get debe ser igual que cuando lo ponemos en router
          this.categoryId = params.get('id');
          if (this.categoryId) {
            return this.productService.getByCategory(
              this.categoryId,
              this.limit,
              this.offset
            );
          }
          return []
        })
      )
      .subscribe((data) => {
        this.products = data
        // this.categoryId = params.get('id');
        // if (this.categoryId) {
        //   this.productService
        //     .getByCategory(this.categoryId, this.limit, this.offset)
        //     .subscribe((data) => {
        //       this.products = data;
        //     });
        // }
      });

      this.route.queryParamMap.subscribe(params=>{
        this.productId = params.get('product')
      })
  }
}
