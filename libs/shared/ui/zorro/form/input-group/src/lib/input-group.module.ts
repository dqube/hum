import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {NgZorroAntdModule} from '@hum/zorro/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyFieldModule } from '@hum/zorro/form/field';
import { FormlyFieldInputGroupComponent } from './input-group.type';

@NgModule({
  declarations: [FormlyFieldInputGroupComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NgZorroAntdModule,
    FormlyFieldModule,
    FormlyModule.forRoot({
      // types: [
      //   {
      //     name: 'input-group',
      //     component: FormlyFieldInputGroupComponent,
      //     defaultOptions: {
      //       templateOptions: {},
      //     },
      //     wrappers: ['field'],
      //   },
      // ],
      wrappers: [
        {
          name: 'input-group',
          component: FormlyFieldInputGroupComponent,
        },
      ],
    }),
  ],
  exports: [
    FormlyFieldInputGroupComponent
  ],
})
export class FormlyInputGroupModule {}
