import React from 'react';
import { render } from 'react-dom';
import JimuEditor from '../src/jimu-editor/index';

import * as Demo from './widgets/demo';
function Canvas() {
  return <div>extended Canvas</div>;
}
render(
  <JimuEditor controls={[]} canvas={Canvas} widgets={[Demo]} />,
  document.getElementById('app')
);
