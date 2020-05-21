// 舞台数据
import { observable, action, computed } from 'mobx';
import { IPage, IWidget } from '../shared/interfaces';
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
  @observable
  targetWidgetId: string = '';
  @computed
  get targetWidget() {
    return this.data.widgetList.find(
      (widget) => widget.id === this.targetWidgetId
    );
  }

  @action
  changeTargetProps = (style: CSSProperties) => {
    this.data.widgetList.find(
      (widget) => widget.id === this.targetWidgetId
    ).style = style;
    console.log(
      this.data.widgetList.find((widget) => widget.id === this.targetWidgetId)
    );
  };
  @action
  addWidget(wrappedWidget) {
    this.data.widgetList.push(wrappedWidget);
  }
  @action
  setFocus(id) {
    this.targetWidgetId = id;
  }
}
