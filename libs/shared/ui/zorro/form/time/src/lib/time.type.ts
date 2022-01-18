import {
  ChangeDetectionStrategy, Component
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
      
      [nzHideDisabledOptions]="to['time']?.hideDisabledOptions"
      [nzHourStep]="to['time']?.hourStep"
      [nzMinuteStep]="to['time']?.minuteStep"
      [nzSecondStep]="to['time']?.secondStep"          
      [nzUse12Hours]="to['time']?.use12Hours"     
      (nzOpenChange)="to['time']?.openChange && to['time']?.openChange($event)"
    ></nz-time-picker>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormlyFieldTimeComponent extends FieldType {
 
}
