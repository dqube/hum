import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { PageHeaderModule } from '@hum/zorro/page-header';
import { FormlyModule } from '@ngx-formly/core';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { FormlyFormComponent } from './form';
@NgModule({
  declarations: [FormlyFormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NzFormModule,
    NzGridModule,   
    FormlyModule,
    NzButtonModule,
    PageHeaderModule
  ],
  exports:[FormlyFormComponent]
})
export class FormlyNzFormModule {}
