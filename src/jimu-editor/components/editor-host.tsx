// 物料编辑器注入点
import React from 'react';
import { useStore } from '../hooks/use-store';
import { observer } from 'mobx-react';
function EditorHost() {
  const { scopeStore } = useStore();
  return <div>Editor Host</div>;
}

export default observer(EditorHost);
