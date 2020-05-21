// 物料图标注入点
// 注入点容器可替换
import React from 'react';
import { useStore } from '../hooks/use-store';
import { observer } from 'mobx-react';
function IconHost() {
  const { scopeStore } = useStore();
  const { widgets } = scopeStore;
  return (
    <div>
      {widgets.map((widget, i) => (
        <widget.icon key={i}></widget.icon>
      ))}
    </div>
  );
}

export default observer(IconHost);
