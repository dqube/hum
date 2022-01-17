import {
  Component,
  ChangeDetectionStrategy,
  ViewChild,
  OnInit,
} from '@angular/core';
import { FieldType } from '@ngx-formly/core';

@Component({
  selector: 'form-time',
  template: `
    <nz-time-picker
      #time
      [formControl]="formControl"
      [formlyAttributes]="field"
      [nzAddOn]="to['time']?.addOn"
      [nzAllowEmpty]="to['time']?.allowEmpty"
      [nzBackdrop]="to['time']?.backdrop"
      [nzClearText]="to['time']?.clearText"
      [nzNowText]="to['time']?.nowText"
      [nzOkText]="to['time']?.okText"
      [nzDefaultOpenValue]="to['time']?.defaultOpenValue"
      [nzDisabledHours]="to['time']?.disabledHours"
      [nzDisabledMinutes]="to['time']?.disabledMinutes"
      [nzDisabledSeconds]="to['time']?.disabledSeconds"
      [nzFormat]="to['time']?.format"
      [nzHideDisabledOptions]="to['time']?.hideDisabledOptions"
      [nzHourStep]="to['time']?.hourStep"
      [nzMinuteStep]="to['time']?.minuteStep"
      [nzSecondStep]="to['time']?.secondStep"
     [(nzOpen)])="(to['time']?.open)"
      [nzPopupClassName]="to['time']?.popupClassName"
      [nzUse12Hours]="to['time']?.use12Hours"
      (ngModelChange)="to['time']?.ngModelChange && to['time']?.ngModelChange($event)"
      (nzOpenChange)="to['time']?.openChange && to['time']?.openChange($event)"
    ></nz-time-picker>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormlyFieldTimeComponent extends FieldType {
 
}
