import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {NgZorroAntdModule} from '@hum/zorro/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyFieldModule } from '@hum/zorro/form/field';
import { FormlyFieldRateComponent } from './rate.type';
import { RateFormly } from './rate.interface';

@NgModule({
  declarations: [FormlyFieldRateComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NgZorroAntdModule,
    FormlyFieldModule,
    FormlyModule.forChild({
      types: [
        {
          name: 'rate',
          component: FormlyFieldRateComponent,
          wrappers: ['field'],
          defaultOptions: {
            className: 'ant-col  ant-col-12',
            templateOptions: {
              rate: {
                allowClear: true,
                allowHalf: false,
                count: 5,
                tooltips: [],
              } as RateFormly,
            },
          },
        },
      ],
    }),
  ],
  exports:[FormlyFieldRateComponent]
})
export class FormlyRateModule {}
