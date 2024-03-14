import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { Item } from 'src/app/models/item';
import { StoreService } from '../../store.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent {
  @Input('item') item: Item | null = null;
  storeService = inject(StoreService)

  // Send value to parent to send to cart ?
  // TODO: Check if this is an okay way to do it
  addToCart(item: Item) {
    console.log("Adding..")
    this.storeService.addToCart(item);
  }
}
