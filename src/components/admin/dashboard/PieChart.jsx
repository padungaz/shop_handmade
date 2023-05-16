import React from "react";
import { ResponsivePie } from "@nivo/pie";

const pieData = [
  {
    id: "Boot",
    label: "Boot",
    value: 195,
    color: "hsl(90, 70%, 50%)"
  },
  {
    id: "Kitchen",
    label: "Kitchen",
    value: 419,
    color: "hsl(56, 70%, 50%)"
  },
  {
    id: "LandHouse",
    label: "LandHouse",
    value: 407,
    color: "hsl(103, 70%, 50%)"
  },
  {
    id: "RainBow",
    label: "RainBow",
    value: 474,
    color: "hsl(186, 70%, 50%)"
  },
  {
    id: "go",
    label: "go",
    value: 71,
    color: "hsl(104, 70%, 50%)"
  }
];

const PieChart = (props) => {
  return (
    <div className="pie-chart">
      <ResponsivePie
      data={pieData}
      margin={{ top: 30, right: 20, bottom: 40, left: 20 }}
      innerRadius={0.5}
      padAngle={0.9}
      cornerRadius={10}
      activeOuterRadiusOffset={10}
      borderWidth={1.5}
      borderColor={{ from: "color", modifiers: [["darker", 0.5]] }}
      arcLinkLabelsSkipAngle={10}
      arcLinkLabelsTextColor="#fff"
      arcLinkLabelsStraightLength={1}
      arcLinkLabelsTextOffset={3}
      arcLinkLabelsDiagonalLength={20}
      arcLinkLabelsThickness={1}
      arcLinkLabelsColor={{ from: "color" }}
      arcLabelsSkipAngle={6}
      arcLabelsTextColor={{ from: "color", modifiers: [["darker", 2]] }}
    />
    {/* {pie chart rangter user user} */}
    
    </div>
  );
};
export default PieChart;
