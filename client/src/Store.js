import  {observable, reaction, autorun} from 'mobx';
import {createContext} from 'react';
class Store {
    @observable sensor_data = []
    @observable widgets = []
    constructor()
    {
        fetch('http://localhost:5000/sensor_data/').then((res) => res.json()).then((sensor_data) => this.sensor_data.push(...sensor_data));
        fetch('http://localhost:5000/widgets/').then((res) => res.json()).then((widgets) => {
          this.widgets.push(...widgets);
          autorun(() => { this.widgets.map(widget => {
            fetch('http://localhost:5000/widgets/', {
              method: 'POST',
              headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({ id: widget._id, size: widget.size, location: widget.location })
            });
          })});
        });
    }
}
const StoreContext = createContext(new Store());
export default StoreContext;