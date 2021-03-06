import { Component, OnInit } from '@angular/core';
import {ProductService} from '../../product.service';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.scss']
})
export class AdminProductsComponent implements OnInit {

  products$;

  constructor(private productService: ProductService) {
    this.products$ = this.productService.getAll().snapshotChanges();;
  }

  ngOnInit() {
  }

}
