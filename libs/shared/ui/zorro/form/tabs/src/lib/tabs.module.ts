import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {NgZorroAntdModule} from '@hum/zorro/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyFieldTabsComponent } from './tabs.type';
import { TabsFormly } from './tabs.interface';

@NgModule({
  declarations: [FormlyFieldTabsComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NgZorroAntdModule,
    FormlyModule.forChild({
      types: [
        {
          name: 'tabs',
          component: FormlyFieldTabsComponent,
          defaultOptions: {
            className: 'ant-col  ant-col-12',
            templateOptions: {
              tabs: {
                animated: true,
                size: 'default',
                type: 'line',
                hideAll: false,
                linkRouter: false,
                linkExact: true,
                centered: false,
              } as TabsFormly,
            },
          },
        },
      ],
    }),
  ],
})
export class FormlyTabsModule {}
