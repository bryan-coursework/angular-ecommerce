import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrderList } from './order-list/order-list';
import { OrderItemList } from './order-item-list/order-item-list';

const routes: Routes = [
  {
    path: ':id/items',
    component: OrderItemList
  },
  {
    path: '',
    component: OrderList
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrdersRoutingModule {}
