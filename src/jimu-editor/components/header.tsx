import React from 'react';
import { useStore } from '../hooks/use-store';
import { observer } from 'mobx-react';
function Header() {
  const { scopeStore } = useStore();
  return <div>Header</div>;
}

export default observer(Header);
