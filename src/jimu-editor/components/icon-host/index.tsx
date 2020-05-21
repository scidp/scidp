// 物料图标注入点
// 注入点容器可替换
import React from 'react';
import { useStore } from '@hooks/use-store';
import { observer } from 'mobx-react';

import styles from './index.less';

let id = 0;
function IconHost() {
  const { scopeStore, stageStore } = useStore();
  const { widgets } = scopeStore;
  return (
    <div className={styles.icon_host}>
      {widgets.map((widget, i) => (
        <widget.icon
          key={i}
          addSelf={() => {
            stageStore.addWidget({
              id: id++,
              style:{},
              widget: widget,
            });
          }}
        ></widget.icon>
      ))}
    </div>
  );
}

export default observer(IconHost);
