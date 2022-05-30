import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Store } from "./model/store";

export const produto: Store[] = [
    { id: '1', name: 'Chocolate' , price: 15, quantity: 1, category: "Comida", img:"img1"},
    { id: '2', name: 'Pate' , price: 12, quantity: 1, category: "Comida", img:"img2"},
    { id: '3', name: 'Biscoito' , price: 6, quantity: 1, category: "Comida", img:"img3"},

  ];

@Injectable()

export class StoreService {
    private url = "https://apibookstore20220408185052.azurewebsites.net/api/bookstore";

    httpOptions= {
        Headers: new HttpHeaders({'content-type': 'application/json'})
    }

    constructor(private http: HttpClient) {

    }

    getStore() {
        return this.http.get(this.url)
    }
}

