import React from 'react';
import { ResponsiveBar } from '@nivo/bar';

const SummaryGraph = ({ figures }) => {
  const keys = figures[0]
    ? Object.keys(figures[0])
    : [
        'THING',
        'NewConfirmed',
        'TotalConfirmed',
        'NewDeaths',
        'TotalDeaths',
        'NewRecovered',
        'TotalRecovered',
      ];

  return (
    <div style={{ width: 600, height: 300 }}>
      <ResponsiveBar
        data={figures}
        keys={keys.splice(1, keys.length - 1)}
        indexBy="CountryCode"
        margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
        padding={0.3}
        colors={{ scheme: 'nivo' }}
        borderColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: 'Country',
          legendPosition: 'middle',
          legendOffset: 32,
        }}
        axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: 'Summary',
          legendPosition: 'middle',
          legendOffset: -40,
        }}
        labelSkipWidth={12}
        labelSkipHeight={12}
        labelTextColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
        legends={[
          {
            dataFrom: 'keys',
            anchor: 'bottom-right',
            direction: 'column',
            justify: false,
            translateX: 120,
            translateY: 0,
            itemsSpacing: 2,
            itemWidth: 100,
            itemHeight: 20,
            itemDirection: 'left-to-right',
            itemOpacity: 0.85,
            symbolSize: 20,
            effects: [
              {
                on: 'hover',
                style: {
                  itemOpacity: 1,
                },
              },
            ],
          },
        ]}
        animate
        motionStiffness={90}
        motionDamping={15}
      />
    </div>
  );
};

export default SummaryGraph;
