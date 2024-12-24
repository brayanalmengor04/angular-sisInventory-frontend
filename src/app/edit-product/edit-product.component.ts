import { Component } from '@angular/core';
import {Product} from "../product";
import {ProductService} from "../product.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html'
})
export class EditProductComponent {
  product: Product = new Product();
  id: number;
  constructor(private productService: ProductService, private router: ActivatedRoute,
              private route : Router,
              private routeActivate: ActivatedRoute) {}

  ngOnInit() {
    this.id = this.routeActivate.snapshot.params['id'];
    this.productService.getProductId(this.id).subscribe(
      {
        next: (data)=> this.product = data,
        error: (error : any) => console.log(error)
      }
    )
  }
  onSubmit() {
    this.editProduct();
  }
  private editProduct() {
    this.productService.editProduct(this.id , this.product).subscribe(
      {
        next: (data)=> this.navigateProducList(),
        error: (error : any) => console.log(error)
      }
    )
  }
  private navigateProducList() {
   this.route.navigate(['products']);
  }
}
