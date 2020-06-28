import React, { useRef } from 'react';
import { getNumber } from '@utils/helper';
import { useStore } from '@hooks/use-store';
import { CanvasWrapperUniqueId } from '@config';
import { IWidget } from '@shared/interfaces';
import { toJS } from 'mobx';
import Resizer from './resizer';
import { observer } from 'mobx-react';
import styles from './index.less';
function withLayer(wrappedWidget) {
  function Wrapper() {
    const { scopeStore, stageStore } = useStore();
    const wrapperRef = useRef<HTMLDivElement>();
    const handleReszie = ({ width, height, left, top, deg }) => {
      const widgetDom = document.querySelector<HTMLDivElement>(
        `[wid="${wrappedWidget.id}"`
      );
      wrapperRef.current.style.left = left + 'px';
      wrapperRef.current.style.top = top + 'px';
      wrapperRef.current.style.width = width + 'px';
      wrapperRef.current.style.height = height + 'px';
      wrapperRef.current.style.transform = `rotate(${deg}deg)`;
    };
    const hanldeReszieComplete = ({ width, height, left, top, deg }) => {
      const dpr = 1;
      stageStore.changeTargetProps({
        'style.width': width * dpr + 'px',
        'style.height': height * dpr + 'px',
        'style.left': left * dpr + 'px',
        'style.top': top * dpr + 'px',
        'style.transform': `rotate(${deg}deg)`,
      });
    };
    return (
      <div
        className={styles.widget_layer_wrapper}
        id={wrappedWidget.id}
        ref={wrapperRef}
      >
        {stageStore.targetWidgetId === wrappedWidget.id ? (
          <Resizer
            onReszie={handleReszie}
            onReszieComplete={hanldeReszieComplete}
            targetStyle={wrappedWidget.style}
          ></Resizer>
        ) : (
          ''
        )}
        <wrappedWidget.widget.layer
          setFocus={() => stageStore.chooseWidget(wrappedWidget.id)}
          {...toJS(wrappedWidget)}
        ></wrappedWidget.widget.layer>
      </div>
    );
  }
  return observer(Wrapper);
}

export default withLayer;
