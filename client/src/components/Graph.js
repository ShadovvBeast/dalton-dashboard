import React, { useState, useEffect } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import * as HighchartsMore from "highcharts/highcharts-more";
import { observer, useObservable, useObserver } from "mobx-react-lite";
import GraphMap from "../GraphMap";
//magic that imports the gauge chart and more
HighchartsMore(Highcharts);

const Graph = observer(props => {
  let series = [];
  let seriesNames = [];

  for (const sensor of props.sensor_data) {
    if (seriesNames.includes(sensor.sensor_id)) {
      series[getTheIndex(sensor.sensor_id, series)].data.push(sensor.data);
    } else {
      series.push({ name: sensor.sensor_id, data: [sensor.data] });
      seriesNames.push(sensor.sensor_id);
    }
  }

  const chartOptions = Object.assign(
    {
      title: {
        text: props.title
      },
      chart: {},
      series,
      credits: {
        text: "Dalton Advanced Farming ------ ",
        href: "http://www.dalton.farm/"
      }
    },
    GraphMap[props.type]
  );

  chartOptions.chart.height = props.height;
  chartOptions.chart.width = props.width;

  const [options, setOptions] = useState(chartOptions);

  useEffect(
    () =>
      setOptions({
        title: {
          text: props.title
        },
        series,
        chart: { height: props.height, width: props.width }
      }),
    [props.height, props.width]
  );

  return <HighchartsReact highcharts={Highcharts} options={options} />;
});

const getTheIndex = (sensor_id, series) => {
  let indexToReturn = false;
  series.forEach((serie, index) => {
    if (serie.name === sensor_id) {
      indexToReturn = index;
    }
  });
  return indexToReturn;
};
export default Graph;
