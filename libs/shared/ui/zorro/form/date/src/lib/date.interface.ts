import { TemplateRef } from '@angular/core';

export interface BaseDateFormly {
  /**
   * 是否显示清除按钮
   * @default true
   */
  allowClear?: boolean;

  /**
   * 浮层是否应带有背景板
   * @default false
   */
  backdrop?: boolean;

  /**
   * 默认面板日期
   * @default Date[]
   */
  defaultPickerValue?: Date | Date[];

  /**
   * 不可选择的日期
   */
  disabledDate?: (current: Date) => boolean;

  /**
   * 额外的弹出日历 className
   */
  dropdownClassName?: string;

  /**
   * 展示的日期格式，见nzFormat特别说明
   */
  format?: string;

  /**
   * 为 input 标签设置只读属性（避免在移动设备上触发小键盘）
   * @default false
   */
  inputReadOnly?: boolean;

  /**
   * 选择模式
   * @default 'date'
   */
  mode?: any;

  /**
   * 额外的弹出日历样式
   * @default {}
   */
  popupStyle?: object;


  /**
   * 自定义的后缀图标
   */
  suffixIcon?: string | TemplateRef<any>;

  /**
   * 移除边框
   * @default false
   */
  borderless?: boolean;

  /**
   * 内联模式
   * @default false
   */
  inline?: boolean;

  /**
   * 弹出日历和关闭日历的回调
   */
  onOpenChange?: (date: boolean) => void;
}

export interface DateFormly extends BaseDateFormly {
  /**
   * 自定义日期单元格的内容（month-picker/year-picker不支持）
   */
  dateRender?:
    | TemplateRef<Date>
    | string
    | ((d: Date) => TemplateRef<Date> | string);

  /**
   * 不可选择的时间
   */
  disabledTime?: (current: Date) => {
    nzDisabledHours;
    nzDisabledMinutes;
    nzDisabledSeconds;
  };

  /**
   * 增加时间选择功能
   */
  showTime?: object | boolean;

  /**
   * 是否展示“今天”按钮
   * @default true
   */
  showToday?: boolean;

  /**
   * 当设定了nzShowTime的时候，面板是否显示“此刻”按钮
   * @default true
   */
  showNow?: boolean;
  /**
   * 点击确定按钮的回调
   */
  onOk?: (date: Date) => void;
}

export interface RangeDateFormly extends BaseDateFormly {
  /**
   * 	预设时间范围快捷选择
   */
  ranges?: { [key: string]: Date[] } | { [key: string]: () => Date[] };

  /**
   * 分隔符
   * @default ~
   */
  separator?: string;

  /**
   * 待选日期发生变化的回调
   */
  onCalendarChange?: (range: Date[]) => void;

  /**
   * 增加时间选择功能
   */
  showTime?: boolean | object;

  /**
   * 不可选择的时间
   */
  disabledTime?: (
    current: Date,
    partial: 'start' | 'end'
  ) => { nzDisabledHours; nzDisabledMinutes; nzDisabledSeconds };

  /**
   * 点击确定按钮的回调
   */
  onOk?: (date: Date) => void;
}
