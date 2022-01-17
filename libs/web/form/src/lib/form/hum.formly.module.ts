import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { NzFormModule } from 'ng-zorro-antd/form';
import {NzGridModule} from  'ng-zorro-antd/grid'
import { FormlyFormComponent } from './hum.formly';
import { FormlyModule } from '@ngx-formly/core';
import { NzButtonModule } from 'ng-zorro-antd/button';
@NgModule({
  declarations: [FormlyFormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NzFormModule,
    NzGridModule,   
    FormlyModule,
    NzButtonModule
  ],
  exports:[FormlyFormComponent]
})
export class FormlyNzFormModule {}
