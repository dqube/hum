import {
  ChangeDetectionStrategy, Component
} from '@angular/core';
import { FieldWrapper } from '@ngx-formly/core';



@Component({
  selector: 'formly-wrapper-nz-form-field',
  template: `

    <!-- <nz-form-item>
      <ng-container *ngIf="to.label && to['hideLabel'] !== true">
        <nz-form-label [nzRequired]="to.required && to.hideRequiredMarker !== true" [nzFor]="id">
            {{ to.label }}         
        </nz-form-label>
      </ng-container>
      <nz-form-control [nzValidateStatus]="errorState" [nzErrorTip]="errorTpl">
        <ng-container #fieldComponent></ng-container>
        <ng-template #errorTpl let-control>
          <formly-validation-message
            [field]="field"
          ></formly-validation-message>
        </ng-template>
      </nz-form-control>
    </nz-form-item>  -->
    <nz-form-item>
      <ng-container *ngIf="to.label && to['hideLabel'] !== true">
        <nz-form-label [nzRequired]="to.required && to.hideRequiredMarker !== true" [nzFor]="id" [nzFlex]="'25px'">
          {{ to.label }}
        </nz-form-label>
      </ng-container>
      <ng-container *ngIf="to['hideLabel']">
        <nz-form-label [nzFor]="id" [nzFlex]="'25px'" [nzNoColon]="true"></nz-form-label>
      </ng-container>
      <nz-form-control [nzValidateStatus]="errorState" [nzErrorTip]="errorTpl" nzFlex="1">
        <ng-container #fieldComponent></ng-container>
        <ng-template #errorTpl let-control>
          <formly-validation-message [field]="field"></formly-validation-message>
        </ng-template>
      </nz-form-control>
    </nz-form-item>
     `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormlyWrapperFormField extends FieldWrapper  {
 get errorState() {
    return this.showError ? 'error' : 'success';
  }
}
