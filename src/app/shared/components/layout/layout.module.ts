import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderModule } from '../header/header.module';
import { IonicModule } from '@ionic/angular';
import { SharedModule } from '../../modules/shared/shared.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, IonicModule, SharedModule],
})
export class LayoutModule {}
