import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {NgZorroAntdModule} from '@hum/zorro/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyFieldModule } from '@hum/zorro/form/field';
import { FormlyFieldSliderComponent } from './slider.type';
import { SliderFormly } from './slider.interface';

@NgModule({
  declarations: [FormlyFieldSliderComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NgZorroAntdModule,
    FormlyFieldModule,
    FormlyModule.forChild({
      types: [
        {
          name: 'slider',
          component: FormlyFieldSliderComponent,
          wrappers: ['field'],
          defaultOptions: {
            className: 'ant-col  ant-col-12',
            templateOptions: {
              slider: {
                dots: false,
                included: false,
                max: 100,
                min: 0,
                range: false,
                step: 1,
                vertical: false,
                reverse: false,
                tooltipVisible: 'default',
              } as SliderFormly,
            },
          },
        },
      ],
    }),
  ],
  exports:[FormlyFieldSliderComponent]
})
export class FormlySliderModule {}
