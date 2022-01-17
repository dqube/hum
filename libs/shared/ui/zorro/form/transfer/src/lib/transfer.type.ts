import {
  Component,
  ChangeDetectionStrategy,
} from '@angular/core';
import { FieldType } from '@ngx-formly/core';


@Component({
  selector: 'form-transfer',
  template: `
   <nz-transfer
      #transfer
      [formControl]="formControl"
      [formlyAttributes]="field"
      [nzDataSource]="to['transfer']?.dataSource"
      [nzTitles]="to['transfer']?.titles"
      [nzSelectedKeys]="to['transfer']?.selectedKeys"
      [nzOperations]="to['transfer']?.operations"
      [nzListStyle]="to['transfer']?.listStyle"
      [nzItemsUnit]="to['transfer']?.itemsUnit"
      [nzItemUnit]="to['transfer']?.itemUnit"
      [nzRenderList]="to['transfer']?.renderList"
      [nzRender]="to['transfer']?.render"
      [nzFooter]="to['transfer']?.footer"
      [nzShowSearch]="to['transfer']?.showSearch"
      [nzFilterOption]="to['transfer']?.filterOption"
      [nzSearchPlaceholder]="to['transfer']?.searchPlaceholder"
      [nzNotFoundContent]="to['transfer']?.notFoundContent"
      [nzTargetKeys]="to['transfer']?.targetKeys"     
      (nzSearchChange)="
        to['transfer']?.onSearchChange && to['transfer']?.onSearchChange($event)
      "
      (nzSelectChange)="
        to['transfer']?.onSelectChange && to['transfer']?.onSelectChange($event)
      "
      (nzChange)="to['transfer']?.onChange && to['transfer']?.onChange($event)"
    ></nz-transfer>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormlyFieldTransferComponent extends FieldType  {
  
}
