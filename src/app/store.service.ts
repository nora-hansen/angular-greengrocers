import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Item } from './models/item';
import { firstValueFrom } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  http = inject(HttpClient)
  public cart: Item[] = [];
  
  get items() : Promise<Item[]> {
    // @ts-ignore
    return firstValueFrom(this.http.get(`${environment.apiUrl}groceries`))
  }

  public addToCart(item: Item) {
    if(this.cart.indexOf(item) > -1) {
      this.cart.map((i) => i.id === item.id ? i.amount = i.amount + 1 : i.amount = 1)
    }
    else {
      this.cart.push(item)
      this.cart.map((i) => i.id === item.id ? i.amount = 1 : i) // Add the amount property
    }
  }

  public removeFromCart(item: Item) {
    if(this.cart.indexOf(item) > -1) {
      if(this.cart[this.cart.indexOf(item)].amount > 1) {
      this.cart.map((i) => i.id === item.id ? i.amount = i.amount -1 : i.amount = 1)
    }
      else {
        this.cart.splice(this.cart.indexOf(item),1) 
      }}
  }

  public getCartItems(): Item[] {
    return this.cart;
  }

  constructor() { }
}
