import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output
} from '@angular/core';
import { FormArray, FormGroup } from '@angular/forms';
import { headerOptions } from '@hum/zorro/page-header';
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';

@Component({
  selector: 'hum-form',
  template: `
    <hum-page-header
      [headers]="headers"
      (headeractions)="headeractions($event)"
    ></hum-page-header>
    <form nz-form [nzLayout]="layout" [formGroup]="form" (ngSubmit)="submit()">
      <formly-form
        [form]="form"
        [model]="model"
        [fields]="fields"
      ></formly-form>
      <button nz-button nzType="primary" type="submit">Submit</button>
      <button nz-button nzType="danger" type="reset">Reset</button>
    </form>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormlyFormComponent implements OnInit {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor() {}

  @Input() form: FormGroup | FormArray;

  @Input() model: any;

  @Input() fieldGroup: FormlyFieldConfig[];
  @Input() fields: FormlyFieldConfig[];

  @Input() options: FormlyFormOptions;
  @Input() headers: headerOptions;
  layout: string;

  @Output() fieldsChange = new EventEmitter<FormlyFieldConfig[]>();
  @Output() modelChange: EventEmitter<any> = new EventEmitter();
  @Output() formSubmit: EventEmitter<any> = new EventEmitter();
  ngOnInit(): void {
    this.layout = this.options?.formState?.['layout'];
  }
  submit() {
    console.log(this.headers);
    //if (this.form.valid) {
    this.formSubmit.emit(this.model);
    // }
  }
  headeractions(name: string) {
    console.log('header clicked');
    console.log(name);
  }
}
