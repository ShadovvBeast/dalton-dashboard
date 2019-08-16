import React, { useContext } from 'react';
import Draggable from 'react-draggable';
import { Resizable, ResizableBox } from 'react-resizable';
import { observer } from 'mobx-react-lite';
import StoreContext from './../Store'
import Graph from './Graph'
import { PromiseProvider } from 'mongoose';

let fetch_semaphore = false;

const Widget = observer((props) => {

  const onResize = (event, { element, size, handle }) => {
    props.widget.size.height = size.height;
    props.widget.size.width = size.width;
  };
  const onDragStop = (e, elem) => {
    props.widget.location.x = elem.x;
    props.widget.location.y = elem.y;
  } 
  const store = useContext(StoreContext);
  return (
    <Draggable handle="strong" defaultPosition={props.widget.location} onStop={onDragStop}>
      <div>
        <ResizableBox height={props.widget.size.height} width={props.widget.size.width} resizeHandles={['se']} onResizeStop={onResize} >
          <strong className="handle">✥</strong>
          <div>
            {props.widget.sensor_ids.map((sensor_id, index) =>
              <Graph 
                key={sensor_id + '_' + index}
                type={props.widget.graph_type}
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