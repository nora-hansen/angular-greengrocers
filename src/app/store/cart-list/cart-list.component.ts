import { Component, inject } from '@angular/core';
import { StoreService } from '../../store.service';
import { Item } from 'src/app/models/item';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css']
})
export class CartListComponent {
  storeService = inject(StoreService);

  cart: Item[] = this.storeService.getCartItems();
}
