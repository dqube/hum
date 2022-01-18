import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { NgZorroAntdModule } from '@hum/zorro/core';
import { FormlyFieldModule } from '@hum/zorro/form/field';
import { FormlyModule } from '@ngx-formly/core';
import { TransferFormly } from './transfer.interface';
import { FormlyFieldTransferComponent } from './transfer.type';



@NgModule({
  declarations: [FormlyFieldTransferComponent],
  exports: [FormlyFieldTransferComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NgZorroAntdModule,
    FormlyFieldModule,
    FormlyModule.forChild({
      types: [
        {
          name: 'transfer',
          component: FormlyFieldTransferComponent,
          wrappers: ['field'],
          defaultOptions: {
            className: 'ant-col  ant-col-12',
            templateOptions: {
              transfer: {
                dataSource: [],
                titles: ['', ''],
              
                listStyle: {},
              } as TransferFormly,
            },
          },
        },
      ],
    }),
  ],
})
export class FormlyTransferModule {}
