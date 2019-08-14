import React, { useState , useEffect} from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { observer, useObservable, useObserver } from 'mobx-react-lite';

const Graph = observer((props)=> {

  const [options,setOptions] = useState({
    title: {
      text: props.title
    },
    series: [{
      data: props.data
    }],
    chart: {height: props.height, width: props.width},
    credits: {
      text: 'Dalton Advanced Farming ------ ',
      href: 'http://www.dalton.farm/'
    }
  });


  useEffect(
    () => 
     setOptions({
        title: {
          text: props.title
        },
        series: [{
          data: props.data
        }],
        chart: {height: props.height, width: props.width}
      }),
    [props.height, props.width],
  );

  return (<HighchartsReact highcharts={Highcharts} options={options} />);
});
export default Graph;