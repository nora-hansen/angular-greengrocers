import { Component, Input, inject } from '@angular/core';
import { Item } from 'src/app/models/item';
import { StoreService } from 'src/app/store.service';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent {
  @Input('item') item: Item | null = null
  storeService = inject(StoreService)
  cart = this.storeService.getCartItems()
  
  getAmount(item: Item) {
    let amount = 0

    for(let i of this.cart) {
      if (i.id === item.id) 
      amount++
    }
    return amount
  }
}
