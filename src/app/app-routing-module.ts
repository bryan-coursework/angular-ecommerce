import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'categories',
    loadChildren: () =>
      import('./categories/categories-module').then(
        (module) => module.CategoriesModule
      ),
  },
  {
    path: 'customers',
    loadChildren: () =>
      import('./customers/customers-module').then(
        (module) => module.CustomersModule
      ),
  },
  {
    path: 'orders',
    loadChildren: () =>
      import('./orders/orders-module').then(
        (module) => module.OrdersModule
      ),
  },
  {
    path: 'payments',
    loadChildren: () =>
      import('./payments/payments-module').then(
        (module) => module.PaymentsModule
      ),
  },
  {
    path: 'products',
    loadChildren: () =>
      import('./products/products-module').then(
        (module) => module.ProductsModule
      ),
  },
  {
    // Redireciona a rota inicial "/" para "/products".
    path: '',
    redirectTo: 'products',

    // Exige que a URL inteira esteja vazia para realizar o redirecionamento.
    pathMatch: 'full',
  },
  {
    // Captura qualquer URL que não corresponda às rotas anteriores
    // e redireciona o usuário para "/products".
    path: '**',
    redirectTo: 'products',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
