import React from 'react';
import { ResponsivePie } from "@nivo/pie";
const data= [
    {
      "id": "Alex",
      "label": "Alex",
      "value": 360,
      "color": "hsl(23, 70%, 50%)"
    },
    {
      "id": "Johnny",
      "label": "Johnny",
      "value": 301,
      "color": "hsl(8, 70%, 50%)"
    },
    {
      "id": "Hander",
      "label": "Hander",
      "value": 553,
      "color": "hsl(98, 70%, 50%)"
    },
    {
      "id": "Stylis",
      "label": "Stylis",
      "value": 212,
      "color": "hsl(197, 70%, 50%)"
    },
    {
      "id": "Danny",
      "label": "Danny",
      "value": 178,
      "color": "hsl(165, 70%, 50%)"
    }
  ]


const PieChartRanger = props => {
    const fill=[
        {
            match: {
                id: 'ruby'
            },
            id: 'dots'
        },
        {
            match: {
                id: 'c'
            },
            id: 'dots'
        },
        {
            match: {
                id: 'go'
            },
            id: 'dots'
        },
        {
            match: {
                id: 'python'
            },
            id: 'dots'
        },
        {
            match: {
                id: 'scala'
            },
            id: 'lines'
        },
        {
            match: {
                id: 'lisp'
            },
            id: 'lines'
        },
        {
            match: {
                id: 'elixir'
            },
            id: 'lines'
        },
        {
            match: {
                id: 'javascript'
            },
            id: 'lines'
        }
    ]
    return (
        <div className='pie-ranger'>
        <ResponsivePie
        data={data}
        margin={{ top: 40, right: -80, bottom: 10, left: 10 }}
        startAngle={180}
        innerRadius={0.5}
        padAngle={1}
        cornerRadius={11}
        activeOuterRadiusOffset={8}
        borderWidth={1}
        borderColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    0.2
                ]
            ]
        }}
        arcLinkLabel={function(e){return e.id }}
        arcLinkLabelsTextOffset={6}
        arcLinkLabelsTextColor={{ theme: 'labels.text.fill' }}
        arcLinkLabelsOffset={8}
        arcLinkLabelsStraightLength={3}
        arcLinkLabelsThickness={6}
        arcLinkLabelsColor={{ theme: 'grid.line.stroke' }}
        arcLabelsSkipAngle={12}
        arcLabelsTextColor="black"
        defs={[
            {
                id: 'dots',
                type: 'patternDots',
                background: 'inherit',
                color: 'rgba(255, 255, 255, 0.3)',
                size: 4,
                padding: 1,
                stagger: true
            },
            {
                id: 'lines',
                type: 'patternLines',
                background: 'inherit',
                color: 'rgba(255, 255, 255, 0.3)',
                rotation: -45,
                lineWidth: 6,
                spacing: 10
            }
        ]}
        fill={fill}
        motionConfig="slow"
       
    />
    </div>
    );
};


export default PieChartRanger;