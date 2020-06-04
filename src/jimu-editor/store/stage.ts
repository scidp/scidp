// 舞台数据
import { observable, action, computed } from 'mobx';
import { IPage, IWidget, IWrappedWidget } from '../shared/interfaces';
import { CSSProperties } from 'react';
export class StageStore {
  @observable
  data: IPage = {
    attr: {
      style: { width: 100 },
      id: '',
      name: '',
    },
    widgetList: [],
  };

  // 当前编辑的组件
  @observable
  targetWidgetId: string = '';
  @computed
  get targetWidget() {
    return this.data.widgetList.find(
      (widget) => widget.id === this.targetWidgetId
    );
  }

  // 修改当前组件属性
  @action
  changeTargetProps = (style: CSSProperties) => {
    this.data.widgetList.find(
      (widget) => widget.id === this.targetWidgetId
    ).style = style;
    console.log(
      this.data.widgetList.find((widget) => widget.id === this.targetWidgetId)
    );
  };
  // 添加组件
  @action
  addWidget(wrappedWidget: IWrappedWidget): void {
    this.data.widgetList.push(wrappedWidget);
  }
  // 设置焦点
  @action
  setFocus(id: string): void {
    this.targetWidgetId = id;
  }
}
