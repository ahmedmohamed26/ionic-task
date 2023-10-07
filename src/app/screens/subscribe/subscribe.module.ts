import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SubscribePageRoutingModule } from './subscribe-routing.module';

import { SubscribePage } from './subscribe.page';
import { SharedModule } from 'src/app/shared/modules/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SubscribePageRoutingModule,
    SharedModule,
    ReactiveFormsModule,
  ],
  declarations: [SubscribePage],
})
export class SubscribePageModule {}
