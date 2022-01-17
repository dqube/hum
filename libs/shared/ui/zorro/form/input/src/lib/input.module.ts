import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {NgZorroAntdModule} from '@hum/zorro/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyFieldModule } from '@hum/zorro/form/field';
import {
  AutocompleteFormly,
  InputFormly,
  NumberFormly,
  TextAreaFormly,
} from './input.interface';
import { FormlyFieldInputComponent } from './input.type';
@NgModule({
  declarations: [FormlyFieldInputComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NgZorroAntdModule,
    FormlyFieldModule,
    FormlyModule.forChild({
      types: [
        {
          name: 'input',

          component: FormlyFieldInputComponent,
          wrappers: ['field'],
          defaultOptions: {
            className: 'ant-col  ant-col-12',
            templateOptions: {
              type: 'input',
              input: {} as InputFormly,
            },
          },
        },
        { name: 'string', extends: 'input' },

        {
          name: 'autoComplete',
          extends: 'input',
          defaultOptions: {
            className: 'ant-col  ant-col-12',
            templateOptions: {
              type: 'autoComplete',
              autoComplete: {
                backfill: false,
                defaultActiveFirstOption: true,
                compareWith: (o1: any, o2: any) => o1 === o2,
              } as AutocompleteFormly,
            },
          },
        },
        {
          name: 'number',
          extends: 'input',
          defaultOptions: {
            templateOptions: {
              className: 'ant-col  ant-col-12',
              type: 'number',
              number: {
                max: Infinity,
                min: -Infinity,
                parser: (value: string) =>
                  value
                    .trim()
                    .replace(/。/g, '.')
                    .replace(/[^\w\.-]+/g, ''),
                precisionMode: 'toFixed',
                step: 1,
                inputMode: 'decimal',
                formatter: (value: number) => value,
              } as NumberFormly,
            },
          },
        },
        {
          name: 'integer',
          extends: 'input',
          defaultOptions: {
            className: 'ant-col  ant-col-12',
            templateOptions: {
              type: 'number',
            },
          },
        },
        {
          name: 'inputGroup',
          extends: 'input',
          defaultOptions: {
            className: 'ant-col  ant-col-12',
            templateOptions: {
              type: 'inputGroup',
            },
          },
        },
        {
          name: 'textarea',
          extends: 'input',
          defaultOptions: {
            className: 'ant-col  ant-col-12',
            templateOptions: {
              type: 'textarea',
              textarea: {
                rows: 4,
                autosize: false,
              } as TextAreaFormly,
            },
          },
        },
      ],
    }),
  ],
})
export class FormlyNzInputModule {}
