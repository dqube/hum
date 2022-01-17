import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {NgZorroAntdModule} from '@hum/zorro/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyFieldModule } from '@hum/zorro/form/field';
import { FormlyFieldTreeSelectComponent } from './tree-select.type';
import { TreeSelectFormly } from './tree-select.interface';

@NgModule({
  declarations: [FormlyFieldTreeSelectComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NgZorroAntdModule,
    FormlyFieldModule,
    FormlyModule.forChild({
      types: [
        {
          name: 'tree-select',
          component: FormlyFieldTreeSelectComponent,
          wrappers: ['field'],
          defaultOptions: {
            className: 'ant-col  ant-col-12',
            templateOptions: {
              treeSelect: {
                dropdownMatchSelectWidth: true,
                showExpand: true,
                nodes: [],
               
                virtualItemSize: 28,
                virtualMaxBufferPx: 500,
                virtualMinBufferPx: 28,
              } as TreeSelectFormly,
            },
          },
        },
      ],
    }),
  ],
})
export class FormlyTreeSelectModule {}
