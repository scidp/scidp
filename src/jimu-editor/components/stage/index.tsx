import React, { ComponentType } from 'react';
import { observer } from 'mobx-react';
import { useStore } from '../../hooks/use-store';
import styles from './index.less';
import Canvas from '../canvas';
import EditorHost from '../editor-host';
import ExtendedConcrols from '../extended-controls';
import IconHost from '../icon-host';

function Stage() {
  const { scopeStore, stageStore } = useStore();
  const { canvas } = scopeStore;
  const handleClick = () => {};
  const CumCanvas = canvas ? canvas : Canvas;
  return (
    <div onClick={handleClick} className={styles.stage}>
      <IconHost></IconHost>
      <div className={styles.canvas_wrapper}>
        <CumCanvas stageStore={stageStore}></CumCanvas>
      </div>
      <ExtendedConcrols></ExtendedConcrols>
      <EditorHost></EditorHost>
    </div>
  );
}

export default observer(Stage);
