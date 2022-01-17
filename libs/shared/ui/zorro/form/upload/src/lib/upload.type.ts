import {
  Component,
  ChangeDetectionStrategy, 
} from '@angular/core';
import { FieldType } from '@ngx-formly/core';

@Component({
  selector: 'form-upload',
  template: `
    <nz-upload
      [formControl]="formControl"
      [formlyAttributes]="field"
      [nzAction]="to['upload']?.action"
      [nzAccept]="to['upload']?.accept"
      [nzDirectory]="to['upload']?.directory"
      [nzBeforeUpload]="to['upload']?.beforeUpload"
      [nzCustomRequest]="to['upload']?.customRequest"
      [nzData]="to['upload']?.data"
      [(nzFileList)]="to['upload'].fileList"
      [nzLimit]="to['upload']?.limit"
      [nzFileType]="to['upload']?.fileType"
      [nzFilter]="to['upload']?.filter"
      [nzHeaders]="to['upload']?.headers"
      [nzListType]="to['upload']?.listType"
      [nzMultiple]="to['upload']?.multiple"
      [nzName]="to['upload']?.name"
      [nzShowUploadList]="to['upload']?.showUploadList"
      [nzShowButton]="to['upload']?.showButton"
      [nzWithCredentials]="to['upload']?.withCredentials"
      [nzOpenFileDialogOnClick]="to['upload']?.openFileDialogOnClick"
      [nzPreview]="to['upload']?.preview"
      [nzPreviewFile]="to['upload']?.previewFile"
      [nzPreviewIsImage]="to['upload']?.previewIsImage"
      [nzRemove]="to['upload']?.remove"
      (nzChange)="to['upload']?.change && to['upload']?.change($event)"
      [nzDownload]="to['upload']?.download"
      [nzTransformFile]="to['upload']?.transformFile"
      [nzIconRender]="to['upload']?.iconRender"
      [nzFileListRender]="to['upload']?.fileListRender"
      [nzType]="to.type"
      (nzFileListChange)="
        to['upload']?.fileListChange && to['upload']?.fileListChange($event)
      "
    >
    </nz-upload>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormlyFieldUploadComponent extends FieldType {
}
