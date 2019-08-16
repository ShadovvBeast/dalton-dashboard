export default {
  gauge_CF: {
    chart: {
      type: 'gauge',
      //fix later
      alignTicks: false,
      plotBackgroundColor: null,
      plotBackgroundImage: null,
      plotBorderWidth: 0,
      plotShadow: false,
    },
    pane: {
      startAngle: -150,
      endAngle: 150
    },
    yAxis: [
      {
        min: 20,
        max: 60,
        lineColor: "#339",
        tickColor: "#339",
        minorTickColor: "#339",
        offset: -40,
        lineWidth: 2,
        labels: {
          distance: -20,
          rotation: "auto"
        },
        tickLength: 5,
        minorTickLength: 5,
        endOnTick: false
      },
      {
        min: 68,
        max: 140,
        tickPosition: "outside",
        lineColor: "#933",
        lineWidth: 2,
        minorTickPosition: "outside",
        tickColor: "#933",
        minorTickColor: "#933",
        tickLength: 5,
        minorTickLength: 5,
        labels: {
          distance: 12,
          rotation: "auto"
        },
        offset: -30,
        endOnTick: false
      }
    ]
  }
};
