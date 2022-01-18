

export interface UploadFormly {
  /**
   * 接受上传的文件类型, 详见 input accept Attribute
   */
  accept?: string;


  /**
   * 支持上传文件夹（caniuse）
   * @default false
   */
  directory?: boolean;



  /**
   * 限制单次最多上传数量，nzMultiple 打开时有效；0 表示不限
   * @default 0
   */
  limit: number;

  /**
   * 制文件类型，例如：image/png,image/jpeg,image/gif,image/bmp
   */
  fileType?: string;
  
  listType?: 'text' | 'picture' | 'picture-card';

  /**
   * 是否支持多选文件，ie10+ 支持。开启后按住 ctrl 可选择多个文件。
   * @default false;
   */
  multiple?: boolean;

  /**
   * 发到后台的文件参数名
   * @default file
   */
  name?: string;

  /**
   * 是否展示 uploadList, 可设为一个对象，用于单独设定 showPreviewIcon，showRemoveIcon 和 showDownloadIcon
   * @default true
   */
  showUploadList?:
    | boolean
    | {
        showPreviewIcon?: boolean;
        showRemoveIcon?: boolean;
        showDownloadIcon?: boolean;
      };

  /**
   * 是否展示上传按钮
   * @default true
   */
  showButton?: boolean;

  /**
   * 上传请求时是否携带 cookie
   * @default false
   */
  withCredentials?: boolean;

  /**
   * 点击打开文件对话框
   * @default true
   */
  openFileDialogOnClick?: boolean;

  

  /**
   * 按钮文本
   * @default 点击上传
   */
  text?: string;

  
}
