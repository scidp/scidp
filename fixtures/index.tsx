import React from 'react';
import { render } from 'react-dom';
import JimuEditor from '../src/jimu-editor/index';
import { observer } from 'mobx-react';
import {toJS} from 'mobx';
import * as Demo from './widgets/demo';

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
render(
  <JimuEditor controls={[]} canvas={observer(Canvas)} widgets={[Demo]} />,
  document.getElementById('app')
);
