import { Injectable } from "@angular/core";
import { IProducts } from "./products";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { tap,catchError } from 'rxjs/operators'
@Injectable({
    providedIn:'root'
})
export class ProductService{
   private productUrl='api/products/products.json'

    constructor(private http: HttpClient){

    }
    getProducts():Observable<IProducts[]>{
        return this.http.get<IProducts[]>(this.productUrl).pipe(
            tap(data=>console.log(JSON.stringify(data))),
            catchError(this.handleError)
        );
    }

    private handleError(err:HttpErrorResponse){
        let errorMessage = ''
        if(err.error instanceof ErrorEvent){
            errorMessage= `An error occured:${err.error.message}`
        }
        else{
            errorMessage=`Server Returned: ${err.status} and msg is ${err.message}`
        }
        console.log(errorMessage)
        return throwError(errorMessage);
    }
}