import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {NgZorroAntdModule} from '@hum/zorro/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyFieldModule } from '@hum/zorro/form/field';
import { SwitchFormly } from './switch.interface';
import { FormlyFieldSwitchComponent } from './switch.type';
@NgModule({
  declarations: [FormlyFieldSwitchComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NgZorroAntdModule,
    FormlyFieldModule,
    FormlyModule.forChild({
      types: [
        {
          name: 'switch',
          component: FormlyFieldSwitchComponent,
          wrappers: ['field'],
          defaultOptions: {
            className: 'ant-col  ant-col-12',
            templateOptions: {
              switch: {} as SwitchFormly,
            },
          },
        },
      ],
    }),
  ],
  exports:[FormlyFieldSwitchComponent]
})
export class FormlySwitchModule {}
