import { CreateProductDTO } from "./create-product.dto";

// el Partial es propio de TS y lo que hace es poner el  ? a todos los atributos
// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface UpdateProductDTO extends Partial<CreateProductDTO> {}
