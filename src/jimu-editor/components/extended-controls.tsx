// 扩展控件注入点
import React from 'react';
import { useStore } from '../hooks/use-store';
import { observer } from 'mobx-react';
function ExtendedControls() {
  const { scopeStore } = useStore();
  return <div style={{ position: 'absolute', top: 30 }}>ExtendedControls</div>;
}

export default observer(ExtendedControls);
