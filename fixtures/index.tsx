import React from 'react';
import { render } from 'react-dom';
import JimuEditor from '../src/jimu-editor/index';

function Canvas() {
  return <div>extended Canvas</div>;
}
render(
  <JimuEditor controls={[]} canvas={Canvas}></JimuEditor>,
  document.getElementById('app')
);
