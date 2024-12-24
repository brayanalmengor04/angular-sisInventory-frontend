import { Component } from '@angular/core';
import {Product} from "../product";
import {ProductService} from "../product.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
})
export class ProductListComponent {
  products: Product[];

  /**
   * Inyectamos el servicio ProductService mediante el constructor.
   * @param productService - Servicio para obtener los datos de productos.
   */
  constructor(private productService: ProductService, private router: Router) {
  }

  /**
   * Método del ciclo de vida de Angular que se ejecuta al inicializar el componente.
   */
  ngOnInit(): void {
    this.getProducts(); // Llamamos al método para cargar los productos
  }

  /**
   * Método para obtener los productos desde el servicio.
   * Suscribe al observable y actualiza la lista de productos.
   */
  private getProducts() {
    // Comsommer to data the observable
    this.productService.getAllProducts().subscribe(
      (products: Product[]) => {
        this.products = products;
      }
    );
  }
  editProduct(idProduct: number) {
    this.router.navigate(['edit-product', idProduct]);
  }
  deleteProduct(idProduct: number) {
    this.productService.deleteProduct(idProduct).subscribe(
      {
        next: (data) => this.getProducts(),
        error: (error) => console.log(error)
      }
    );
  }
}
