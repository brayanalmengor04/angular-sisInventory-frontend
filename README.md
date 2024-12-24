
# Proyecto Angular Full Stack Test: Gestión de Productos

Este proyecto es una aplicación web desarrollada con Angular que permite gestionar productos mediante un CRUD (Crear, Leer, Actualizar, Eliminar). Esta conectado a un backend hecho en spring boot y mediante endpoint hacemos las solicitudes para gestionar l abase de datos 

---

## **1. Creación del Proyecto**

El proyecto fue generado utilizando Angular CLI, lo que garantiza una estructura estandarizada y eficiente para desarrollos basados en Angular.

```bash
ng new mi-app-angular --standalone false
```

### Explicación:
- **`ng new`**: Crea un nuevo proyecto Angular con una estructura básica.
- **`mi-app-angular`**: Nombre de tu proyecto.
- **`--standalone false`**: Indica que el proyecto no usará el nuevo enfoque de componentes independientes (standalone), permitiendo mantener una estructura basada en módulos, ideal para proyectos más grandes.

---

## **2. Código para Generar las Partes del Proyecto**

### Clase de Entidad `Product`
```bash
ng g class product --skip-tests
```

Se generó una clase llamada `Product` que representa la estructura de un producto en la aplicación. La opción **`--skip-tests`** evita crear archivos de prueba para simplificar el desarrollo inicial.

### Componentes
Los componentes son bloques reutilizables que encapsulan vistas y lógica asociada. Se generaron los siguientes:

- **Lista de productos**:
```bash
ng g c product-list --skip-tests
```
- **Agregar producto**:
```bash
ng g c add-product --skip-tests
```
- **Editar producto**:
```bash
ng g c edit-product --skip-tests
```

### Servicio
```bash
ng g s product --skip-tests
```

Un servicio llamado `ProductService` facilita la lógica de negocio y la comunicación con el backend.

---

## **3. Módulos Importados**

Angular usa módulos para organizar y encapsular diferentes funcionalidades. En `app.module.ts`, se importaron los siguientes módulos clave:

- **`BrowserModule`**: Esencial para ejecutar aplicaciones web Angular.
- **`HttpClientModule`**: Habilita la interacción con APIs REST.
- **`FormsModule`**: Simplifica la creación y manejo de formularios.
- **`AppRoutingModule`**: Configura las rutas para la navegación.

### Configuración en `app.module.ts`:
```typescript
@NgModule({
  declarations: [
    AppComponent,         // Componente raíz
    ProductListComponent, // Componente para listar productos
    AddProductComponent,  // Componente para agregar productos
    EditProductComponent  // Componente para editar productos
  ],
  imports: [
    BrowserModule,        // Soporte para aplicaciones web
    HttpClientModule,     // Comunicación HTTP con APIs
    FormsModule,          // Binding bidireccional para formularios
    AppRoutingModule      // Navegación entre vistas
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

---

## **4. 🌐 Configuración de Rutas**

Las rutas definen cómo navegar entre las distintas vistas de la aplicación. Se configuran en `app-routing.module.ts`:

```typescript
const routes: Routes = [
  { path: 'products', component: ProductListComponent },    // Lista de productos
  { path: '', redirectTo: 'products', pathMatch: 'full' },  // Ruta predeterminada
  { path: 'add-product', component: AddProductComponent },  // Agregar producto
  { path: 'edit-product/:id', component: EditProductComponent } // Editar producto
];
```

---

## **5. 📝 Formulario de Ejemplo en `AddProductComponent`**

El componente `AddProductComponent` gestiona la adición de nuevos productos. Aquí un ejemplo del formulario:

```html
<form (ngSubmit)="onSubmit()">
  <div class="form-group">
    <label for="description">Descripción</label>
    <input 
      type="text" 
      id="description" 
      name="description" 
      class="form-control" 
      required 
      [(ngModel)]="product.description" />
  </div>
  <button type="submit" class="btn btn-primary">Agregar Producto</button>
</form>
```

### Explicación:
- **`(ngSubmit)="onSubmit()"`**: Vincula la acción del formulario a un método del componente.
- **`[(ngModel)]="product.description"`**: Permite el binding bidireccional entre el campo de entrada y la propiedad `description` del modelo `product`.
- **`required`**: Añade validación para campos obligatorios.

---

## **6. 🛡️ Configuración Importante**

Para evitar errores relacionados con la inicialización estricta de propiedades, puedes ajustar el archivo `tsconfig.json`:

```json
"compilerOptions": {
  "strictPropertyInitialization": false,
  "strict": true
}
```

Esto flexibiliza las reglas de inicialización, permitiendo centrarse en funcionalidades clave sin interrupciones iniciales.

---

## **7. 🎯 Ejecución del Proyecto**

Sigue estos pasos para ejecutar la aplicación localmente:

1. Instala las dependencias:
   ```bash
   npm install
   ```
2. Inicia el servidor de desarrollo:
   ```bash
   ng serve
   ```
3. Accede a la aplicación en tu navegador: [http://localhost:4200](http://localhost:4200).

---
