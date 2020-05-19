import { ReactElement } from 'react';

// 积木编辑器props
export interface JimuEditorProps {
  Stage: ReactElement;
  controls: IControls[];
}

// 控件类型
export interface IControls {
  Entity?: ReactElement;
  options: IControlsOptions;
}
export interface IControlsOptions {
  type: IControlsTypes;
  hide?: boolean;
}
export enum IControlsTypes {
  Extended = 'EXTENDED',
  LeftHost = 'LEFTHOST',
  RightHost = 'RIGHTHOST',
}

// 组件物料类型
export interface IWrappedWidget {
  id: string;
  style: CSSStyleRule;
  actionAttrs: {
    actionHide: IAction;
    actionShow: IAction;
    [propName: string]: IAction;
  };
  actions: IAction[];
  eventAttrs: {
    [propName: string]: IEvent;
  };
  events: IEvent[];
}
export interface IWidget {
  Editor: ReactElement;
  Layer: ReactElement;
  Stele: ReactElement;
  meta: IMeta;
}
export interface IMeta {
  script: string;
  deps: string[];
  data: {
    [propName: string]: WidgetData;
  };
  version: string;
}
export interface WidgetData {
  type: WidgetDataTypes;
  value: string;
}
interface WidgetDataTypes {
  Text: 'TEXT';
  Image: 'IMAGE';
  Video: 'VIDEO';
}
export interface IAction {
  action?: string;
  des: string;
  sub?: string;
}
export interface IEvent {
  event?: string;
  des: string;
  pub?: string;
}
