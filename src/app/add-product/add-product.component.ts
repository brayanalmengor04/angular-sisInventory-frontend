import { Component } from '@angular/core';
import {Product} from "../product";
import {ProductService} from "../product.service";
import {Router} from "@angular/router";
import {Observable} from "rxjs";

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.css'
})
export class AddProductComponent {
  // Creamos una instancia vacía de `Product` para vincularla al formulario.
  product: Product = new Product();

  // Constructor del componente que inyecta dos dependencias principales:
  // - `ProductService`: Para realizar operaciones relacionadas con productos, como agregar un producto.
  // - `Router`: Para navegar entre diferentes vistas de la aplicación.
  constructor(
    private productService: ProductService,
    private router: Router
  ) {}

  /**
   * Método que se ejecuta cuando se envía el formulario.
   * Este método invoca la función `saveProduct()` para guardar el producto ingresado.
   */
  onSubmit() {
    this.saveProduct();
  }
  /**
   * Método que guarda un producto utilizando el servicio `ProductService`.
   * - Llama al método `addProduct` del servicio para enviar los datos del producto al servidor.
   * - Se suscribe al observable retornado por el servicio para manejar la respuesta del servidor.
   *   - Si la solicitud es exitosa (`next`), redirige a la lista de productos.
   *   - Si ocurre un error (`error`), lo imprime en la consola.
   */
  saveProduct() {
    this.productService.addProduct(this.product).subscribe({
      next: (data) => {
        this.navigateListProduct(); // Navega a la lista de productos tras el éxito.
      },
      error: (error: any) => {
        console.log(error); // Muestra el error en la consola.
      }
    });
  }
  /**
   * Método para navegar a la vista que muestra la lista de productos.
   * Utiliza el servicio `Router` para redirigir al usuario a la ruta `/products`.
   */
  navigateListProduct() {
    this.router.navigate(['products']);
  }
}
