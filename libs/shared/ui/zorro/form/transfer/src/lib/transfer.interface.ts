import { TemplateRef } from '@angular/core';


export interface TransferFormly {
  /**
   * 数据源，其中若数据属性 direction: 'right' 将会被渲染到右边一栏中或使用 nzTargetKeys
   * @default []
   */
  dataSource?: TransferItem[];

  /**
   * 标题集合，顺序从左至右
   * @default ['', '']
   */
  titles?: string[];

  /**
   * 操作文案集合，顺序从下至上
   * @default ['', '']
   */
  operations?: string[];

  /**
   * 两个穿梭框的自定义样式，等同 ngStyle
   */
  listStyle?: object;

  /**
   * 单数单位
   * @default 项目
   */
  itemUnit?: string;

  /**
   * 复数单位
   * @default 项目
   */
  itemsUnit?: string;

  /**
   * 自定义渲染列表，见示例
   * @default [null, null]
   */
  renderList?: Array<TemplateRef<void> | null>;

  /**
   * 每行数据渲染模板，见示例
   */
  render?: TemplateRef<void>;

  /**
   * 底部渲染模板，见示例
   */
  footer?: TemplateRef<void>;

  /**
   * 是否显示搜索框
   * @default false
   */
  showSearch?: boolean;

  /**
   * 接收 inputValueoption 两个参数，当 option 符合筛选条件时，应返回 true，反之则返回 false。
   */
  filterOption?: (inputValue: string, item: TransferItem) => boolean;

  /**
   * 搜索框的默认值
   * @default 请输入搜索内容
   */
  searchPlaceholder?: string;

  /**
   * 当列表为空时显示的内容
   * @default 列表为空
   */
  notFoundContent?: string;

 
  /**
   * 设置被选中的 key 集合
   */
  selectedKeys?: string[];

  /**
   * 显示在右侧框数据的 key 集合
   */
  targetKeys?: string[];


  /**
   * 返回结果格式映射
   * @returns
   * 默认返回 TransferItem[] 格式
   */
  resultMap?: (items: TransferItem[]) => any[];
}
export interface TransferItem {
  title: string;
  direction?: TransferDirection;
  disabled?: boolean;
  checked?: boolean;
  hide?: boolean;
  [key: string]: NzSafeAny;
}
export declare type TransferDirection = 'left' | 'right';
export declare type NzSafeAny = any;