import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';

import {NgZorroAntdModule} from '@hum/zorro/core';
import { FormlyFieldModule } from '@hum/zorro/form/field';
import { FormlyFieldCheckboxComponent } from './checkbox.type';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,    
    NgZorroAntdModule,
    FormlyFieldModule,
    FormlyModule.forChild({
      types: [
        {
          name: 'checkbox',
          component: FormlyFieldCheckboxComponent,
          wrappers: ['field'],
          defaultOptions: {
            className: 'ant-col  ant-col-12',
            templateOptions: {},
          },
        },
        {
          name: 'boolean',
          extends: 'checkbox',
        },
      ],
    }),
  ],
  declarations: [
    FormlyFieldCheckboxComponent
],
exports: [
  FormlyFieldCheckboxComponent
],
})
export class FormlyCheckboxModule {}
