import { Component, inject } from '@angular/core';
import { StoreService } from 'src/app/store.service';

@Component({
  selector: 'app-total',
  templateUrl: './total.component.html',
  styleUrls: ['./total.component.css']
})
export class TotalComponent {
  storeService = inject(StoreService)
  cart = this.storeService.getCartItems()

  getTotal() {
    let total = 0.0

    for(let i in this.cart)  {
      total += this.cart[i].amount * this.cart[i].price
    }
    
    return total
  }
}
