import React, { FC } from 'react';

import { JimuEditorProps } from './shared/interfaces';
import Stage from './components/stage';
import Header from './components/header';

import { StoreProvider } from './store';
function JimuEditor({ canvas, controls }: JimuEditorProps) {
  return (
    <StoreProvider>
      <Header></Header>
      <Stage></Stage>
    </StoreProvider>
  );
}

export default JimuEditor;
