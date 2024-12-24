import { Component } from '@angular/core';
import {Product} from "../product";
import {ProductService} from "../product.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.css'
})
export class AddProductComponent {
  product: Product = new Product();
  constructor(private productService: ProductService,
              private router: Router,) {}

onSubmit() {
    this.saveProduct();
}
saveProduct() {
    this.productService.addProduct(this.product).subscribe(
      {
        next: (data)=>{
          this.navigateListProduct();
        },
        error: (error: any)=>{
          console.log(error);
        }
      }
    )
}
navigateListProduct() {
    this.router.navigate(['products']);
}
}
