import React from 'react';
import { observer } from 'mobx-react';
import { useStores } from '../../hooks/use-store';
import Canvas from '../canvas';
function Stage() {
  const { scopeStore } = useStores();
  const handleClick = () => {};
  return (
    <div onClick={handleClick}>
      stage
      <Canvas></Canvas>
    </div>
  );
}

export default observer(Stage);
