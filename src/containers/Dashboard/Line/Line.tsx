import { ResponsiveLine } from "@nivo/line";
import { dataLine } from "./dataLine";

const Line = () => (
  <ResponsiveLine
    data={dataLine}
    margin={{ top: 30, right: 160, bottom: 60, left: 70 }}
    xScale={{ type: "point" }}
    yScale={{
      type: "linear",
      min: "auto",
      max: "auto",
      stacked: true,
      reverse: false
    }}
    curve="natural"
    axisTop={null}
    axisRight={null}
    axisBottom={{
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legend: "Transportation",
      legendOffset: 45,
      legendPosition: "middle"
    }}
    axisLeft={{
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legend: "Trips",
      legendOffset: -45,
      legendPosition: "middle"
    }}
    colors={{ scheme: "paired" }}
    lineWidth={3}
    pointSize={8}
    pointColor={{ from: "color", modifiers: [] }}
    pointBorderWidth={3}
    pointBorderColor={{ from: "serieColor" }}
    pointLabelYOffset={-12}
    enableArea={true}
    useMesh={true}
    legends={[
      {
        anchor: "bottom-right",
        direction: "column",
        justify: false,
        translateX: 120,
        translateY: -25,
        itemWidth: 82,
        itemHeight: 20,
        itemsSpacing: 4,
        symbolSize: 20,
        symbolShape: "circle",
        itemDirection: "left-to-right",
        itemTextColor: "#777",
        effects: [
          {
            on: "hover",
            style: {
              itemBackground: "rgba(0, 0, 0, .03)",
              itemOpacity: 1
            }
          }
        ]
      }
    ]}
  />
);

export default Line;
