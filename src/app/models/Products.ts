// export interface Category {
//   id: string;
//   name: string;
// }

// export interface Product {
//   id: string;
//   title: string;
//   price: number;
//   images: string[];
//   description: string;
//   category: Category;
// }

// // Omit (ts) lo que hace es obmitir los valores que nosotro no necesitamos para este apartado
// export interface CreateProductDTO extends Omit<Product, 'id'|'category'> {
//   categoryId: number;
// }

// // el Partial es propio de TS y lo que hace es poner el  ? a todos los atributos
// export interface UpdateProductDTO extends Partial<CreateProductDTO> {}
