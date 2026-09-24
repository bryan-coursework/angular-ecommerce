import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ExercisesRoutingModule } from './exercises-routing-module';
import { Exercise01Message } from './exercise-01-message/exercise-01-message';
import { Exercise02UserStatus } from './exercise-02-user-status/exercise-02-user-status';
import { Exercise03AgeCheck } from './exercise-03-age-check/exercise-03-age-check';
import { Exercise04StockStatus } from './exercise-04-stock-status/exercise-04-stock-status';
import { Exercise05NameList } from './exercise-05-name-list/exercise-05-name-list';
import { Exercise06EmptyList } from './exercise-06-empty-list/exercise-06-empty-list';
import { Exercise07AlternatingColors } from './exercise-07-alternating-colors/exercise-07-alternating-colors';
import { Exercise08ProductList } from './exercise-08-product-list/exercise-08-product-list';
import { Exercise09ProductClassification } from './exercise-09-product-classification/exercise-09-product-classification';
import { Exercise10ProductPromotion } from './exercise-10-product-promotion/exercise-10-product-promotion';
import { Exercise11AvailableProducts } from './exercise-11-available-products/exercise-11-available-products';
import { Exercise12ProductRegistration } from './exercise-12-product-registration/exercise-12-product-registration';
import { Exercise13TaskList } from './exercise-13-task-list/exercise-13-task-list';
import { Exercise14ModernSyntax } from './exercise-14-modern-syntax/exercise-14-modern-syntax';
import { FinalProjectPanel } from './final-project-panel/final-project-panel';

@NgModule({
  declarations: [
    Exercise01Message,
    Exercise02UserStatus,
    Exercise03AgeCheck,
    Exercise04StockStatus,
    Exercise05NameList,
    Exercise06EmptyList,
    Exercise07AlternatingColors,
    Exercise08ProductList,
    Exercise09ProductClassification,
    Exercise10ProductPromotion,
    Exercise11AvailableProducts,
    Exercise12ProductRegistration,
    Exercise13TaskList,
    Exercise14ModernSyntax,
    FinalProjectPanel,
  ],
  imports: [CommonModule, FormsModule, ExercisesRoutingModule],
})
export class ExercisesModule {}
