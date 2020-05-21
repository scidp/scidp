// 扩展控件注入点
import React from 'react';
import { useStore } from '../hooks/use-store';
import { observer } from 'mobx-react';
function ExtendedControls() {
  const { scopeStore } = useStore();
  return <div>ExtendedControls</div>;
}

export default observer(ExtendedControls);
