// 编辑器扩展和外部参数管理
import { observable, action, computed } from 'mobx';

export class ScopeStore {
  @observable
  controls = [];
  @observable
  props = { test: 2 };
  @action
  changeProps(props) {
    console.log(props, this.props);
    this.props = props;
  }
}
