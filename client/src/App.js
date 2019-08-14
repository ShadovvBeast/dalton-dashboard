import React, { useContext } from 'react';
import Widget from './components/Widget'
import Graph from './components/Graph'
import StoreContext from './Store'
import './App.css';
import { observer } from 'mobx-react-lite';

const App = observer(() => {
  const store = useContext(StoreContext);
  window.store = store;
  return (
    <div className="App">
      <h1>Dalton Dashboard</h1>
      {store.widgets.map(widget =>
        <Widget key={widget._id} widget={widget} />
      )}
    </div>
  );
});

export default App;