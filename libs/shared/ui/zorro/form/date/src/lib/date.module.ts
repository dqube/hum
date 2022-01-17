import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {NgZorroAntdModule} from '@hum/zorro/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyFieldModule } from '@hum/zorro/form/field';
import { FormlyFieldDateComponent } from './date.type';
import { DateFormly, RangeDateFormly } from './date.interface';
@NgModule({
  declarations: [FormlyFieldDateComponent],
  imports: [
    CommonModule,
    NgZorroAntdModule,
    ReactiveFormsModule,
    FormlyFieldModule,
    FormlyModule.forChild({
      types: [
        {
          name: 'date',
          component: FormlyFieldDateComponent,
          wrappers: ['field'],
          defaultOptions: {
            className: 'ant-col  ant-col-12',
            templateOptions: {
              type: 'date',
              date: {
                allowClear: true,
                backdrop: false,
                inputReadOnly: false,
                mode: 'date',
                popupStyle: {},
                borderless: false,
                inline: false,
                showToday: true,
                showNow: true,
              } as DateFormly,
            },
          },
        },
        {
          name: 'rangeDate',
          extends: 'date',
          defaultOptions: {
            className: 'ant-col  ant-col-12',
            templateOptions: {
              type: 'range',
              range: {
                allowClear: true,
                backdrop: false,
                inputReadOnly: false,
                mode: 'date',
                popupStyle: {},
                borderless: false,
                inline: false,
                showToday: true,
                showNow: true,
                separator: '~',
              } as RangeDateFormly,
            },
          },
        },
      ],
    }),
  ],
exports: [
  FormlyFieldDateComponent
],
})
export class FormlyDateModule {}
