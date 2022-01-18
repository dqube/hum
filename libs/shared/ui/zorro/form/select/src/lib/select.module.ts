import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { NgZorroAntdModule } from '@hum/zorro/core';
import { FormlyFieldModule } from '@hum/zorro/form/field';
import { FormlyModule } from '@ngx-formly/core';
import { FormlySelectModule } from '@ngx-formly/core/select';
import { SelectFormly } from './select.interface';
import { FormlyFieldSelectComponent } from './select.type';


@NgModule({
  declarations: [FormlyFieldSelectComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NgZorroAntdModule,
    FormlyFieldModule,
    FormlySelectModule,
    FormlyModule.forChild({
      types: [
        {
          name: 'select',
          component: FormlyFieldSelectComponent,
          wrappers: ['field'],
          defaultOptions: {
            className: 'ant-col  ant-col-12',
            templateOptions: {
              select: {
                compareWith: (o1: any, o2: any) => o1 === o2,
                autoClearSearchValue: true,
                allowClear: false,
                backdrop: false,
                open: false,
                dropdownMatchSelectWidth: true,
                serverSearch: false,
                maxMultipleCount: Infinity,
                mode: 'default',
                showSearch: false,
                tokenSeparators: [],
                loading: false,
                optionHeightPx: 32,
                optionOverflowSize: 8,
              } as SelectFormly,
            },
          },
        },
      ],
    }),
  ],
})
export class FormlyNzSelectModule {}
