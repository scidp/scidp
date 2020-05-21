import React, { ComponentType } from 'react';
import { observer } from 'mobx-react';
import { useStore } from '../../hooks/use-store';

import Canvas from '../canvas';
import EditorHost from '../editor-host';
import ExtendedConcrols from '../extended-controls';
import IconHost from '../icon-host';

function Stage() {
  const { scopeStore } = useStore();
  const { canvas } = scopeStore;
  const handleClick = () => {};
  const CumCanvas: ComponentType = canvas ? canvas : Canvas;
  return (
    <div onClick={handleClick}>
      <IconHost></IconHost>
      <CumCanvas></CumCanvas>
      <ExtendedConcrols></ExtendedConcrols>
      <EditorHost></EditorHost>
    </div>
  );
}

export default observer(Stage);
