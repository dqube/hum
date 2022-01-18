import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { NgZorroAntdModule } from '@hum/zorro/core';
import { FormlyFieldModule } from '@hum/zorro/form/field';
import { FormlyModule } from '@ngx-formly/core';
import { RadioFormly } from './radio.interface';
import { FormlyFieldRadioComponent } from './radio.type';

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
export class FormlyRadioModule {}
