import { Injectable } from '@angular/core';
import { HttpClient,HttpErrorResponse,HttpParams, HttpStatusCode } from '@angular/common/http';
import { catchError, map, retry, throwError,zip } from 'rxjs';

import {Product, CreateProductDTO,UpdateProductDTO} from '../../../models/Products.model'
import { environment } from 'src/environments/environment';
import { checkTime } from '../../../core/interceptor/time/time.interceptor';


@Injectable({
  providedIn: 'root',
})
export class ProductService {

  private apiUrl=`${environment.API_URL}/api`
  constructor(private http:HttpClient) {}

  getByCategory(categoryId:string,limit?:number,offset?:number){
    let params = new HttpParams();
    if(limit && offset){
      params = params.set('limit',limit)
      params = params.set('offset',offset)
    }
    return this.http.get<Product[]>(`${this.apiUrl}/categories/${categoryId}/products`,{params})
  }

  getAllProduct(limit?:number,offset?:number) {
    let params = new HttpParams();
    if(limit && offset){
      params = params.set('limit',limit)
      params = params.set('offset',offset)
    }
    // return this.http.get<Product[]>(this.apiUrl, {params});
    return this.http.get<Product[]>(`${this.apiUrl}/products`, {params, context:checkTime()}).pipe(
      // este tipo de peticiones nos va bien para hacer peticiones a sitios inestables
      // o una opción de reintentos cuando ya hemos realizado la petición
      retry(3),
      // el map nos sirver para transformar nuestros valores que lleguen al observable
      map(products=>products.map(item=>{
        return{
          ...item,
          taxes: .19 *item.price
        }
      }) )
    )
  }

  fetchReadAndUpdate(id:string, dto:UpdateProductDTO){
    return zip(
      this.getProduct(id),
      this.update(id, dto)
    ) .subscribe(() => {
      // const read = response[0];
      // const update = response[1];
    });
  }
  getAllProducts(){
    return this.http.get<Product[]>(`${this.apiUrl}/products`);
  }

  getProduct(id:string){
    return this.http.get<Product>(`${this.apiUrl}/products/${id}`)
    .pipe(
      catchError((error: HttpErrorResponse)=>{
        if(error.status === HttpStatusCode.Conflict){
          return throwError('Algo esta fallando en el servidor')
        }
        return throwError('Ups, algo salio mal')
      })
    )
  }

  getProductByPage(limit:number,offset:number){
    return this.http.get<Product[]>(`${this.apiUrl}/products`,{
      params:{limit,offset}
    })
  }

  create(dto: CreateProductDTO) {
    return this.http.post<Product>(`${this.apiUrl}/products`, dto);
  }

  update(id:string,dto:UpdateProductDTO){
    return this.http.put<Product>(`${this.apiUrl}/products/${id}`,dto)
  }

  delete(id:string){
    return this.http.delete<boolean>(`${this.apiUrl}/products/${id}`)
  }
}
