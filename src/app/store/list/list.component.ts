import { Component, Output, inject } from '@angular/core';
import { StoreService } from '../../store.service';
import { Item } from 'src/app/models/item';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  storeService = inject(StoreService)
  
  items: any;

  async ngOnInit() {
    this.items = await this.storeService.items
  }

  addToCart(item: Item) {
    this.storeService.addToCart(item)
  }
}
