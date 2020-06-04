import React, { ComponentType } from 'react';
import { observer } from 'mobx-react';
import { useStore } from '../../hooks/use-store';
import styles from './index.less';
import CanvasHost from '../canvas-host';
import EditorHost from '../editor-host';
import ExtendedConcrols from '../extended-controls';
import CardHost from '../card-host';

function Stage() {
  const { scopeStore, stageStore } = useStore();
  const { canvas } = scopeStore;
  const handleClick = () => {};
  return (
    <div onClick={handleClick} className={styles.stage}>
      <CardHost></CardHost>
      <CanvasHost></CanvasHost>
      <ExtendedConcrols></ExtendedConcrols>
      <EditorHost></EditorHost>
    </div>
  );
}

export default observer(Stage);
