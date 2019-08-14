import  {observable} from 'mobx';
import {createContext} from 'react';
class Store {
    constructor()
    {
        fetch('http://localhost:5000/sensor_data/').then((res) => res.json()).then((sensor_data) => this.sensor_data.push(...sensor_data));
        fetch('http://localhost:5000/widgets/').then((res) => res.json()).then((widgets) => this.widgets.push(...widgets));
    }
    @observable sensor_data = []
    @observable widgets = []
}
const StoreContext = createContext(new Store());
export default StoreContext;