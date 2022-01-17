import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';

import {NgZorroAntdModule} from '@hum/zorro/core';
import { FormlyFieldCascaderComponent } from './cascader.type';
import { CascaderFormly } from './cascader.interface';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NgZorroAntdModule,
    FormlyModule.forChild({
      types: [
        {
          name: 'cascader',
          component: FormlyFieldCascaderComponent,
          wrappers: ['form-field'],
          defaultOptions: {
            className: 'ant-col  ant-col-12',
            templateOptions: {
              placeholder: 'please choose',
              cascader: {
                allowClear: true,
                backdrop: false,
                changeOnSelect: false,
                expandTrigger: 'click',
                labelProperty: 'label',
                showArrow: true,
                showInput: true,
                showSearch: false,
                valueProperty: 'value',
              } as CascaderFormly,
            },
          },
        },
      ],
    }),
  ],
    declarations: [
      FormlyFieldCascaderComponent
  ],
  exports: [
    FormlyFieldCascaderComponent
  ],
})
export class FormlyCascaderModule {}
