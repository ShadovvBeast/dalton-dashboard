import React  from 'react';
import Draggable from 'react-draggable';
import {Resizable, ResizableBox} from 'react-resizable';
import {observer} from 'mobx-react-lite';

let fetch_semaphore = false;
const Widget = observer((props) => {
  const onResize = (event, { element, size, handle }) => { 
    props.widget.size.height = size.height;
    props.widget.size.width = size.width;
    if (!fetch_semaphore)
    {
      fetch_semaphore = true;
      fetch('http://localhost:5000/widgets/', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({id: props.widget._id, size})  
      }).then(() => fetch_semaphore = false);
    }
    window.dispatchEvent(new Event('resize')); };
  return (
    <Draggable handle="strong">
      <div>
        <ResizableBox height={props.widget.size.height} width={props.widget.size.width} resizeHandles={['se']} onResizeStop={onResize} >
          <strong className="handle">✥</strong>
          <div>
                <div>
                    {props.children}
                </div>
          </div>
        </ResizableBox>
      </div>
    </Draggable>
  );
}); 
export default Widget;