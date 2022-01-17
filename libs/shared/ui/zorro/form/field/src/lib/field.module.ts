import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';

import {NgZorroAntdModule} from '@hum/zorro/core';
import { FormlyFieldWrapperComponent } from './field.wrapper';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NgZorroAntdModule,
    FormlyModule.forChild({
      wrappers: [
        {
          name: 'field',
          component: FormlyFieldWrapperComponent,
        },
      ],
    }),
  ],
  declarations: [
    FormlyFieldWrapperComponent
  ],
  exports: [
    FormlyFieldWrapperComponent
  ],
})
export class FormlyFieldModule {}
