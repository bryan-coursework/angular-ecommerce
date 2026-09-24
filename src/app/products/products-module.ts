import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing-module';
import { ProductList } from './product-list/product-list';

@NgModule({
  declarations: [ProductList],
  imports: [CommonModule, ProductsRoutingModule],
})
export class ProductsModule {}
