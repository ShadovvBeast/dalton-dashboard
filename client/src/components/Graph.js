import React, { useState, useEffect } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import * as HighchartsMore from "highcharts/highcharts-more";
import { observer, useObservable, useObserver } from "mobx-react-lite";
import GraphMap from '../GraphMap'
//magic that imports the gauge chart and more
HighchartsMore(Highcharts);

const Graph = observer(props => {

  const chartOptions = Object.assign({
    title: {
      text: props.title
    },chart:{
      
    },
    series: [
      {
        data: props.data.map(x => x.temp)
      }
    ],
    credits: {
      text: "Dalton Advanced Farming ------ ",
      href: "http://www.dalton.farm/"
    }
  },GraphMap[props.type]);

  chartOptions.chart.height = props.height;
  chartOptions.chart.width = props.width;

  const [options, setOptions] = useState(chartOptions);

  useEffect(
    () =>
      setOptions({
        title: {
          text: props.title
        },
        series: [
          {
            data: props.data
          }
        ],
        chart: { height: props.height, width: props.width }
      }),
    [props.height, props.width]
  );

  return <HighchartsReact highcharts={Highcharts} options={options} />;
});
export default Graph;
