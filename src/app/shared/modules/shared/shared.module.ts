import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderModule } from '../../components/header/header.module';
import { FooterModule } from '../../components/footer/footer.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HeaderModule,
    FooterModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [HeaderModule, FooterModule],
})
export class SharedModule {}
