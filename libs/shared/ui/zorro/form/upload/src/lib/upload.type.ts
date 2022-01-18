import {
  ChangeDetectionStrategy, Component
} from '@angular/core';
import { FieldType } from '@ngx-formly/core';

@Component({
  selector: 'form-upload',
  template: `
    <nz-upload
      [formControl]="formControl"
      [formlyAttributes]="field"
      [nzAction]="to['upload']?.action"
     
    >
    </nz-upload>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormlyFieldUploadComponent extends FieldType {
}
