import { NzButtonShape, NzButtonSize, NzButtonType } from "ng-zorro-antd/button";


export interface headerOptions {
    title:string,
    subtitle:string,
    buttons: buttonOptions[],
    radiobuttons:radioButtonOptions[]
}

export interface buttonOptions {
    disabled? : boolean,
    shape: NzButtonShape
    size : NzButtonSize,
    type: NzButtonType,
    tooltip:string,
    title:string,
    icon:string
}

export interface radioButtonOptions {
    disabled? : boolean,
    shape: NzButtonShape
    size : NzButtonSize,
    type: NzButtonType,
    tooltip:string,
    title:string,
    icon:string,
    tooltipplacement:string
}