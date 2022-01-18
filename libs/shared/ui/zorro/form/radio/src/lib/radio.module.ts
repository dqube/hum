import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {NgZorroAntdModule} from '@hum/zorro/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyFieldModule } from '@hum/zorro/form/field';
import { FormlyFieldRadioComponent} from './radio.type'
import { RadioFormly } from './radio.interface';
@NgModule({
  declarations: [FormlyFieldRadioComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NgZorroAntdModule,
    FormlyFieldModule,
    FormlyModule.forChild({
      types: [
        {
          name: 'radio',
          component: FormlyFieldRadioComponent,
          wrappers: ['field'],
          defaultOptions: {
            className: 'ant-col  ant-col-12',
            templateOptions: {
              radio: {
                buttonStyle: 'outline',
              } as RadioFormly,
            },
          },
        },
      ],
    }),
  ],
  exports:[FormlyFieldRadioComponent]
})
export class FormlyNzRadioModule {}
