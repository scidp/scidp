import {
  CSSProperties,
  ComponentType,
  ReactElement,
  ComponentProps,
} from 'react';

// 积木编辑器props
export interface JimuEditorProps {
  canvas?: ComponentType<ICanvasProps>;
  controls?: IControls[];
  widgets?: IWidget[];
}
interface ICanvasProps {
  stageStore:object;
}
// 控件类型
export interface IControls {
  entity?: ComponentType;
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
  style: CSSProperties;
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
  editor: ComponentType<WidgetEditorProps>;
  layer: ComponentType<WidgetLayerProps>;
  icon: ComponentType<WidgetIconProps>;
  meta: IMeta;
}
export interface WrappedWidget {
  type: string;
  style: CSSProperties;
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
export interface WidgetEditorProps {
  target: WrappedWidget;
  changeTargetProps: (style:CSSProperties) => void;
}
interface WidgetIconProps {
  addSelf: () => void;
}
interface WidgetLayerProps {
  setFocus: () => void;
}

// 产出JSON格式
export interface IPage {
  attr: IPageAttr;
  widgetList: WrappedWidget[];
}
export interface IPageAttr {
  style: CSSProperties;
  name: string;
  id: string;
}
