// 舞台数据
import { observable, action, computed } from 'mobx';
import { IPage } from '../shared/interfaces';
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
}
