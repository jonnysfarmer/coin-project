import React, { PureComponent } from 'react';
import {
  BarChart, Bar, Label, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';

const data = [
  {
    name: 'Page A', uv: 4000, pv: 2400, amt: 2400,
  },
  {
    name: 'Page B', uv: 3000, pv: 1398, amt: 2210,
  },
  {
    name: 'Page C', uv: 2000, pv: 9800, amt: 2290,
  },
  {
    name: 'Page D', uv: 2780, pv: 3908, amt: 2000,
  },
  {
    name: 'Page E', uv: 1890, pv: 4800, amt: 2181,
  },
  {
    name: 'Page F', uv: 2390, pv: 3800, amt: 2500,
  },
  {
    name: 'Page G', uv: 3490, pv: 4300, amt: 2100,
  },
];

export default class GraphSingle extends PureComponent {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/30763kr7/';


  render() {
    const data3 = 
     [
      {name: '24hr', PriceChange: this.props.data.price_change_percentage_24h },
      {name: '7d', PriceChange: this.props.data.price_change_percentage_7d },
      {name: '14d', PriceChange: this.props.data.price_change_percentage_14d },
      {name: '30d', PriceChange: this.props.data.price_change_percentage_30d },
      {name: '60d', PriceChange: this.props.data.price_change_percentage_60d },
      // {name: '200d', PriceChange: this.props.data.price_change_percentage_200d },
      {name: '1yr', PriceChange: this.props.data.price_change_percentage_1y },
    ]


    return (
      <BarChart
        width={350}
        height={250}
        data={data3}
        margin={{
          top: 5, right: 10, left: 10, bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis unit="%" />
          <Label value="%" position="insideTopLeft" offset={10} />
        <Tooltip />
        {/* <Legend /> */}
        <Bar dataKey="PriceChange" fill="rgb(6,1,41)" barSize={20}/>
      </BarChart>
    );
  }
}
