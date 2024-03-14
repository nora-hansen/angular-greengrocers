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
  filters: string[] = this.storeService.filters

  addToCart(item: Item) {
    this.storeService.addToCart(item);
  }
}
