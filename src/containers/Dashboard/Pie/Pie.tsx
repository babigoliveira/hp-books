import { ResponsivePie } from "@nivo/pie";
import { dataPie } from "./dataPie";

const Pie = () => (
  <ResponsivePie
    data={dataPie}
    margin={{ top: 40, right: 60, bottom: 80, left: 80 }}
    sortByValue={true}
    innerRadius={0.5}
    padAngle={1}
    cornerRadius={6}
    activeOuterRadiusOffset={8}
    colors={{ scheme: "set1" }}
    borderWidth={3}
    borderColor={{
      from: "color",
      modifiers: [["darker", 0.3]]
    }}
    arcLinkLabelsSkipAngle={10}
    arcLinkLabelsTextColor="#000000"
    arcLinkLabelsThickness={3}
    arcLinkLabelsColor={{ from: "color" }}
    arcLabelsSkipAngle={10}
    arcLabelsTextColor={{
      from: "color",
      modifiers: [["darker", 10]]
    }}
    defs={[
      {
        id: "dots",
        type: "patternDots",
        background: "inherit",
        color: "rgba(248, 204, 8, 0.3)",
        size: 4,
        padding: 1,
        stagger: true
      }
    ]}
    fill={[
      {
        match: {
          id: "Gryffindor"
        },
        id: "dots"
      }
    ]}
    animate={false}
    legends={[
      {
        anchor: "bottom",
        direction: "row",
        justify: false,
        translateX: 0,
        translateY: 80,
        itemsSpacing: -5,
        itemWidth: 100,
        itemHeight: 18,
        itemTextColor: "#999",
        itemDirection: "left-to-right",
        itemOpacity: 1,
        symbolSize: 18,
        symbolShape: "circle",
        effects: [
          {
            on: "hover",
            style: {
              itemTextColor: "#000"
            }
          }
        ]
      }
    ]}
  />
);

export default Pie;
