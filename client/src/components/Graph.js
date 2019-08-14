import React, { useState } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { observer, useObservable, useObserver } from 'mobx-react-lite';

const Graph = observer((props)=> {
  const options = {
    title: {
      text: props.title
    },
    series: [{
      data: props.data
    }]
  }
  return (<HighchartsReact highcharts={Highcharts} options={options} />);
});
export default Graph;