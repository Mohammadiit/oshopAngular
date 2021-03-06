import {Component, OnInit} from '@angular/core';
import {CategoryService} from '../../category.service';
import {ProductService} from '../../product.service';
import {ActivatedRoute, Router} from '@angular/router';
import 'rxjs/add/operator/take';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit {

  categories$;
  product = {};

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    categoryService: CategoryService,
    private productService: ProductService
  ) {
    this.categories$ = categoryService.getCategories();
    let id = this.route.snapshot.paramMap.get('id');
    if (id) this.productService.get(id).valueChanges().take(1).subscribe (p => this.product = p)
  }

  ngOnInit() {
  }

  save(product) {
    this.productService.create(product);
    this.router.navigate(['/admin/products']);
  }

  

}
