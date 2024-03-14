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
  itemsOriginalOrder: any;

  async ngOnInit() {
    this.items = await this.storeService.items
    this.itemsOriginalOrder = this.items
  }

  addToCart(item: Item) {
    this.storeService.addToCart(item)
  }

  sortByPrice() {
    this.items.sort((a: { price: number; }, b: { price: number; }) => {
      if (a.price < b.price) {
        return -1
      }
      if (a.price > b.price) {
        return 1
      }
      return 0
    })
  }

  sortByName() {
    this.items.sort((a: { name: string }, b: { name: string }) => {
      if (a.name < b.name) {
        return -1
      }
      if (a.name > b.name) {
        return 1
      }
      return 0
    })
  }
}
