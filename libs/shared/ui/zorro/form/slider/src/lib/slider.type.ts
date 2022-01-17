import {
  Component,
  ChangeDetectionStrategy
} from '@angular/core';
import { FieldType } from '@ngx-formly/core';
@Component({
  selector: 'form-slider',
  template: `
    <nz-slider
      #slider
      [formControl]="formControl"
      [formlyAttributes]="field"
      [nzDots]="to['slider']?.dots"
      [nzIncluded]="to['slider']?.included"
      [nzMax]="to['slider']?.max"
      [nzMin]="to['slider']?.min"
      [nzRange]="to['slider']?.range"
      [nzStep]="to['slider']?.step"
      [nzTipFormatter]="to['slider']?.tipFormatter"
      [nzVertical]="to['slider']?.vertical"
      [nzReverse]="to['slider']?.reverse"
      [nzTooltipVisible]="to['slider']?.tooltipVisible"
      (ngModelChange)="
        to['slider']?.ngModelChange && to['slider']?.ngModelChange($event)
      "
      (nzOnAfterChange)="
        to['slider']?.onAfterChange && to['slider']?.onAfterChange($event)
      "
    ></nz-slider>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormlyFieldSliderComponent extends FieldType {
  
}
