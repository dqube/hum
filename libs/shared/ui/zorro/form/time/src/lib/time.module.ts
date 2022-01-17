import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {NgZorroAntdModule} from '@hum/zorro/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyFieldModule } from '@hum/zorro/form/field';
import { FormlyFieldTimeComponent } from './time.type';
import { TimeFormly } from './time.interface';
@NgModule({
  declarations: [FormlyFieldTimeComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NgZorroAntdModule,
    FormlyFieldModule,

    FormlyModule.forChild({
      types: [
        {
          name: 'time',
          component: FormlyFieldTimeComponent,
          wrappers: ['field'],
          defaultOptions: {
            className: 'ant-col  ant-col-12',
            templateOptions: {
              time: {
                allowEmpty: true,

                defaultOpenValue: new Date(),
                format: 'HH:mm:ss' as any,
              } as TimeFormly,
            },
          },
        },
      ],
    }),
  ],
  exports:[FormlyFieldTimeComponent]
})
export class FormlyTimeModule {}
