import { ResponsiveBar } from "@nivo/bar";
import { dataBooks } from "./dataBooks";

const Bar = () => (
  <ResponsiveBar
    data={dataBooks}
    keys={["pages"]}
    indexBy="title"
    margin={{ top: 20, right: 90, bottom: 150, left: 75 }}
    padding={0.5}
    valueScale={{ type: "linear" }}
    indexScale={{ type: "band", round: true }}
    colors={{ scheme: "category10" }}
    axisTop={null}
    axisRight={null}
    axisBottom={{
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 90,
      legend: "Books",
      legendPosition: "middle",
      legendOffset: 130
    }}
    axisLeft={{
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legend: "Pages",
      legendPosition: "middle",
      legendOffset: -50
    }}
    labelSkipWidth={12}
    labelSkipHeight={12}
    labelTextColor={{
      from: "color",
      modifiers: [["darker", 2]]
    }}
    legends={[
      {
        dataFrom: "keys",
        anchor: "bottom-right",
        direction: "column",
        justify: false,
        translateX: 120,
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
      return e.id + ": " + e.formattedValue + " in books: " + e.indexValue;
    }}
  />
);
export default Bar;
