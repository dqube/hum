import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';

import { NgZorroAntdModule } from '@hum/zorro/core';
import { FormlyFieldModule } from '@hum/zorro/form/field';
import { FormlyFieldCascaderComponent } from './cascader.type';
import { CascaderFormly } from './cascader.interface';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NgZorroAntdModule,
    FormlyFieldModule,
    FormlyModule.forChild({
      types: [
        {
          name: 'cascader',
          component: FormlyFieldCascaderComponent,
          wrappers: ['field'],
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
  declarations: [FormlyFieldCascaderComponent],
  exports: [FormlyFieldCascaderComponent],
})
export class FormlyCascaderModule {}
