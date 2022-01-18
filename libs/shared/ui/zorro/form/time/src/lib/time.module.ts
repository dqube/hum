import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { NgZorroAntdModule } from '@hum/zorro/core';
import { FormlyFieldModule } from '@hum/zorro/form/field';
import { FormlyModule } from '@ngx-formly/core';
import { TimeFormly } from './time.interface';
import { FormlyFieldTimeComponent } from './time.type';

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
