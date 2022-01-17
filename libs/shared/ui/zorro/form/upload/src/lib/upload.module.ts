import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {NgZorroAntdModule} from '@hum/zorro/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyFieldModule } from '@hum/zorro/form/field';
import { FormlyFieldUploadComponent } from './upload.type';
import { UploadFormly } from './upload.interface';
@NgModule({
  declarations: [FormlyFieldUploadComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NgZorroAntdModule,
    FormlyFieldModule,
    FormlyModule.forChild({
      types: [
        {
          name: 'upload',
          component: FormlyFieldUploadComponent,
          wrappers: ['field'],
          defaultOptions: {
            className: 'ant-col  ant-col-12',
            templateOptions: {
              type: 'select',
              upload: {
                listType: 'text',
                name: 'file',
                showUploadList: true,
                showButton: true,
                openFileDialogOnClick: true,
                limit: 0,
                filter: [],
                text: 'upload',
              } as UploadFormly,
            },
          },
        },
      ],
    }),
  ],
})
export class FormlyUploadModule {}
