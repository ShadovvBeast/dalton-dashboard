import React, {useContext} from 'react';
import Widget from './components/Widget'
import Graph from './components/Graph'
import StoreContext from './Store'
import './App.css';
import  {observer} from 'mobx-react-lite';

const App = observer(() => {
  const store = useContext(StoreContext);
  window.store = store;
  return (
    <div className="App">
      <h1>Dalton Dashboard</h1>
        {store.widgets.map(widget => 
          <Widget key={widget._id} widget={widget}>
            {widget.sensor_ids.map((sensor_id, index) => 
              <Graph key={sensor_id + '_' + index} title={widget.widget_name} data={store.sensor_data.filter(sensor => sensor.sensor_id == sensor_id).map(sensor => sensor.data.temp)}/>  
            )}
          </Widget>
         )}
    </div>
  );
});

export default App;