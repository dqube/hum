import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';

import {NgZorroAntdModule} from '@hum/zorro/core';
import { FormlyFieldCardComponent } from './card.type';
@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NgZorroAntdModule,
    FormlyModule.forChild({
      wrappers: [{ name: 'card', component: FormlyFieldCardComponent, types: ['card'] }],
    }),
  ],
    declarations: [
      FormlyFieldCardComponent
  ],
  exports: [
    FormlyFieldCardComponent
  ],
})
export class FormlyCardModule {}
