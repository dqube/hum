import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FieldType } from '@ngx-formly/core';

@Component({
  selector: 'form-switch',
  template: `
    <nz-switch
      [formControl]="formControl"
      [formlyAttributes]="field"
      [nzCheckedChildren]="to['switch']?.checkedChildren"
      [nzUnCheckedChildren]="to['switch']?.unCheckedChildren"
      [nzLoading]="to['switch']?.loading"
      [nzControl]="to['switch']?.control"
      (ngModelChange)="
        to['switch']?.ngModelChange && to['switch'].ngModelChange($event)
      "
    ></nz-switch>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormlyFieldSwitchComponent extends FieldType {}
