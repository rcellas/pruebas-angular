import { Product } from "./product";

// Omit (ts) lo que hace es obmitir los valores que nosotro no necesitamos para este apartado
export interface CreateProductDTO extends Omit<Product, 'id'|'category'> {
  categoryId: number;
}
