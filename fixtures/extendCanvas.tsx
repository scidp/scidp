import React from 'react';
import { toJS } from 'mobx';
import withLayer from '@hoc/layer';
import styles from './index.less';
/*
 * todo
 * 和数据流解耦
 */
function Canvas({ stageStore }) {
  return (
    <div className={styles.extend_canvas}>
      <p>extended Canvas</p>
      {stageStore.targetPage.widgetList.map((wrappedWidget) => {
        const WrappedLayer = withLayer(wrappedWidget);
        return <WrappedLayer key={wrappedWidget.id}></WrappedLayer>;
      })}
    </div>
  );
}

export default Canvas;
