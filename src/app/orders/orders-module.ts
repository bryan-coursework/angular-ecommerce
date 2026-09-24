import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrdersRoutingModule } from './orders-routing-module';
import { OrderList } from './order-list/order-list';
import { OrderItemList } from './order-item-list/order-item-list';

@NgModule({
  declarations: [OrderList, OrderItemList],
  imports: [CommonModule, OrdersRoutingModule],
})
export class OrdersModule {}
