import React from 'react';
import { useStores } from '../hooks/use-store';
import { observer } from 'mobx-react';
function Header() {
  const { scopeStore } = useStores();
  return <div>Header</div>;
}

export default observer(Header);
