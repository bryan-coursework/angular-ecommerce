import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriesRoutingModule } from './categories-routing-module';
import { CategoryList } from './category-list/category-list';

@NgModule({
  declarations: [CategoryList],
  imports: [CommonModule, CategoriesRoutingModule],
})
export class CategoriesModule {}
