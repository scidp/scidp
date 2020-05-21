import {
  Component,
  FunctionComponent,
  CSSProperties,
  ComponentType,
} from 'react';

// 积木编辑器props
export interface JimuEditorProps {
  canvas?: ComponentType;
  controls?: IControls[];
  widgets?: IWidget[];
}

// 控件类型
export interface IControls {
  entity?: Component | FunctionComponent;
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
  editor: Component | FunctionComponent;
  layer: Component | FunctionComponent;
  icon: ComponentType;
  meta: IMeta;
}
export interface WrappedWidget {
  type: string;
  style: CSSStyleRule;
  id: string;
  widget: IWidget;
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
export enum WidgetDataTypes {
  Text = 'TEXT',
  Image = 'IMAGE',
  Video = 'VIDEO',
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

// 产出JSON格式
export interface IPage {
  attr: IPageAttr;
  widgetList: IWidget[];
}
export interface IPageAttr {
  style: CSSProperties;
  name: string;
  id: string;
}
