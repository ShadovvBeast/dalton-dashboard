import React, { useContext } from 'react';
import Draggable from 'react-draggable';
import { Resizable, ResizableBox } from 'react-resizable';
import { observer } from 'mobx-react-lite';
import StoreContext from './../Store'
import Graph from './Graph'

let fetch_semaphore = false;

const Widget = observer((props) => {

  const onResize = (event, { element, size, handle }) => {
    props.widget.size.height = size.height;
    props.widget.size.width = size.width;
    if (!fetch_semaphore) {
      fetch_semaphore = true;
      fetch('http://localhost:5000/widgets/', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ id: props.widget._id, size })
      }).then(() => fetch_semaphore = false);
    }
    //window.dispatchEvent(new Event('resize'));
  };
  const store = useContext(StoreContext);
  return (
    <Draggable handle="strong">
      <div>
        <ResizableBox height={props.widget.size.height} width={props.widget.size.width} resizeHandles={['se']} onResizeStop={onResize} >
          <strong className="handle">✥</strong>
          <div>
            {props.widget.sensor_ids.map((sensor_id, index) =>
              <Graph 
                key={sensor_id + '_' + index}
                title={props.widget.widget_name}
                width={props.widget.size.width}
                height={props.widget.size.height}
                data={store.sensor_data.filter(sensor => sensor.sensor_id == sensor_id).map(sensor => sensor.data)} />
            )}
          </div>
        </ResizableBox>
      </div>
    </Draggable>
  );
});
export default Widget;