import { Component, inject } from '@angular/core';
import { StoreService } from '../store.service';

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
}
