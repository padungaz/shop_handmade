import React from 'react';
import { ResponsiveBar } from '@nivo/bar'
import { faker } from '@faker-js/faker';
const data = [
  {
    day: "Tuesday",
    degress: 61
  },
  {
    day: "Monday",
    degress: 59
  },
  {
    day: "Wednesday",
    degress: 55
  },
  {
    day: "Thursday",
    degress: 78
  },
  {
    day: "Friday",
    degress: 71
  },
  {
    day: "Saturday",
    degress: 56
  },
  {
    day: "Sunday",
    degress: 67
  },
  {
    day: "Sundaysd",
    degress: 90
  },
  {
    day: "Sundayd",
    degress: 67
  },
  {
    day: "Sundays",
    degress: 67
  },
];

const ChartBar = props => {

  return (
    <div className='chart-bar'>
      <ResponsiveBar
      data={data}
      keys={["degress"]}
      indexBy="day"
      margin={{ top: 20, right: 20, bottom: 60, left: 20 }}
      padding={0.7}
      valueScale={{ type: "linear" }}
      colors="#3182CE"
      animate={true}
      enableLabel={true}
      axisTop={null}
      axisRight={null}
      axisBottom={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: "degrees",
        legendPosition: "middle",
        legendOffset: 50
      }}
      axisLeft={null}
    />
    </div>
  );
};



export default ChartBar;