import { Component, Input } from '@angular/core';
import { Item } from 'src/app/models/item';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent {
  @Input('item') item: Item | null = null

  
}
