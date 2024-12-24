import { Component } from '@angular/core';
import {Product} from "../product";
import {ProductService} from "../product.service";

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
  constructor(private productService: ProductService ) {}
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
}
