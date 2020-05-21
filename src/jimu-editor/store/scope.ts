// 编辑器扩展和外部参数管理
import { observable, action, computed } from 'mobx';
import { ComponentType, Component } from 'react';
import { IControls, IWidget } from '../shared/interfaces';
export class ScopeStore {
  @observable
  controls = [];
  @observable
  canvas: ComponentType = null;
  @observable
  widgets: IWidget[] = [];
  @observable
  props = { test: 2 };
  @action
  changeControls(controls: IControls[]) {
    this.controls = controls;
  }
  changeCanvas(canvas: ComponentType) {
    this.canvas = canvas;
  }
  changeWidgets(widgets: IWidget[]) {
    this.widgets = widgets;
  }
}
