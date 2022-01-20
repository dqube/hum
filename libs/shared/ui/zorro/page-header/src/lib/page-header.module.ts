import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { PageHeaderComponent } from './page-header.component';
@NgModule({
  imports: [
    CommonModule,
    NzRadioModule,
    NzButtonModule,
    NzIconModule
  ],
  declarations: [
    PageHeaderComponent
  ],
  exports: [
    PageHeaderComponent
  ],
})
export class PageHeaderModule {}
