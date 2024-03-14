import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { ItemComponent } from './item/item.component';
import { HttpClientModule } from '@angular/common/http';
import { CartListComponent } from './cart-list/cart-list.component';
import { CartItemComponent } from './cart-item/cart-item.component';
import { TotalComponent } from './total/total.component';



@NgModule({
  declarations: [
    ListComponent,
    ItemComponent,
    CartListComponent,
    CartItemComponent,
    TotalComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
  ],
  exports: [
    ListComponent,
    CartListComponent
  ]
})
export class StoreModule { }
