import React from 'react';
import { toJS } from 'mobx';

/*
 * todo
 * 和数据流解耦
 */
function Canvas({ stageStore }) {
  return (
    <div>
      <p>extended Canvas</p>
      {stageStore.data.widgetList.map((wrappedWidget) => (
        <wrappedWidget.widget.layer
          key={wrappedWidget.id}
          setFocus={() => stageStore.setFocus(wrappedWidget.id)}
          style={toJS(wrappedWidget.style)}
        ></wrappedWidget.widget.layer>
      ))}
    </div>
  );
}

export default Canvas;
