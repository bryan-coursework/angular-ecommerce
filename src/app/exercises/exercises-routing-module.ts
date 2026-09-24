import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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

const routes: Routes = [
  {
    path: 'exercise-01',
    component: Exercise01Message,
  },
  {
    path: 'exercise-02',
    component: Exercise02UserStatus,
  },
  {
    path: 'exercise-03',
    component: Exercise03AgeCheck,
  },
  {
    path: 'exercise-04',
    component: Exercise04StockStatus,
  },
  {
    path: 'exercise-05',
    component: Exercise05NameList,
  },
  {
    path: 'exercise-06',
    component: Exercise06EmptyList,
  },
  {
    path: 'exercise-07',
    component: Exercise07AlternatingColors,
  },
  {
    path: 'exercise-08',
    component: Exercise08ProductList,
  },
  {
    path: 'exercise-09',
    component: Exercise09ProductClassification,
  },
  {
    path: 'exercise-10',
    component: Exercise10ProductPromotion,
  },
  {
    path: 'exercise-11',
    component: Exercise11AvailableProducts,
  },
  {
    path: 'exercise-12',
    component: Exercise12ProductRegistration,
  },
  {
    path: 'exercise-13',
    component: Exercise13TaskList,
  },
  {
    path: 'exercise-14',
    component: Exercise14ModernSyntax,
  },
  {
    path: 'final-project',
    component: FinalProjectPanel,
  },
  {
    path: '',
    redirectTo: 'exercise-01',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExercisesRoutingModule {}
