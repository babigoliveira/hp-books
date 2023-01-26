import { ResponsiveBar } from "@nivo/bar";
import { dataDeaths } from "./dataDeaths";

const HorizontalBar = () => (
  <ResponsiveBar
    data={dataDeaths}
    keys={["deaths"]}
    indexBy="name"
    margin={{ top: 10, right: 130, bottom: 60, left: 100 }}
    padding={0.5}
    layout="horizontal"
    valueScale={{ type: "linear" }}
    indexScale={{ type: "band", round: true }}
    colors={{ scheme: "spectral" }}
    axisTop={null}
    axisRight={null}
    axisBottom={{
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legend: "Deaths",
      legendPosition: "middle",
      legendOffset: 50
    }}
    axisLeft={{
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legend: "Personas",
      legendPosition: "middle",
      legendOffset: -80
    }}
    labelSkipWidth={12}
    labelSkipHeight={12}
    labelTextColor="#ffffff"
    legends={[
      {
        dataFrom: "keys",
        anchor: "bottom-right",
        direction: "column",
        justify: false,
        translateX: 130,
        translateY: 0,
        itemsSpacing: 2,
        itemWidth: 100,
        itemHeight: 20,
        itemDirection: "left-to-right",
        itemOpacity: 0.85,
        symbolSize: 20,
        effects: [
          {
            on: "hover",
            style: {
              itemOpacity: 1
            }
          }
        ]
      }
    ]}
    role="application"
    ariaLabel="Nivo bar chart demo"
    barAriaLabel={function (e) {
      return e.id + ": " + e.formattedValue + " in names: " + e.indexValue;
    }}
  />
);
export default HorizontalBar;
