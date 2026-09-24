import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaymentsRoutingModule } from './payments-routing-module';
import { PaymentList } from './payment-list/payment-list';

@NgModule({
  declarations: [PaymentList],
  imports: [CommonModule, PaymentsRoutingModule],
})
export class PaymentsModule {}
