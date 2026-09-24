import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomersRoutingModule } from './customers-routing-module';
import { CustomerList } from './customer-list/customer-list';

@NgModule({
  declarations: [CustomerList],
  imports: [CommonModule, CustomersRoutingModule],
})
export class CustomersModule {}
