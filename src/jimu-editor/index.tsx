import React from 'react';
// https://github.com/mobxjs/mobx-react-lite/#observer-batching
import 'mobx-react-lite/batchingForReactDom';

import { JimuEditorProps } from './shared/interfaces';
import App from './app';
import { StoreProvider } from './store';
function JimuEditor(props: JimuEditorProps) {
  return (
    <StoreProvider>
      <App {...props}></App>
    </StoreProvider>
  );
}

export { JimuEditorProps, WidgetDataTypes } from './shared/interfaces';

export default JimuEditor;
