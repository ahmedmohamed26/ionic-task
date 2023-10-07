import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FooterComponent } from './footer.component';
import { SharedModule } from '../../modules/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [FooterComponent],
  imports: [CommonModule, IonicModule, FormsModule, ReactiveFormsModule],
  exports: [FooterComponent],
})
export class FooterModule {}
