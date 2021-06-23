import React from 'react';
import { XAxis, YAxis, CartesianGrid, Tooltip, Area, AreaChart } from 'recharts';

const Lines = () => {

const data = [
    {
      "name": "Page A",
      "uv": 7000,
      "pv": 3000,
      "amt": 5000
    },
    {
      "name": "Page B",
      "uv": 3000,
      "pv": 7000,
      "amt": 5000
    },
    {
      "name": "Page C",
      "uv": 7000,
      "pv": 3000,
      "amt": 5000
    },
    {
      "name": "Page D",
      "uv": 3000,
      "pv": 7000,
      "amt": 2000
    },
    {
      "name": "Page E",
      "uv": 7000,
      "pv": 3000,
      "amt": 2181
    },
    {
      "name": "Page F",
      "uv": 3000,
      "pv": 7000,
      "amt": 2500
    },
    {
      "name": "Page G",
      "uv": 7000,
      "pv": 3000,
      "amt": 2100
    }
  ]
  
  return (                             
  <AreaChart width={730} height={250} data={data}
    margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
    <defs>
      <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
        <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
        <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
      </linearGradient>
      <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
        <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>
        <stop offset="95%" stopColor="#82ca9d" stopOpacity={0}/>
      </linearGradient>
    </defs>
    <XAxis dataKey="name" />
    <YAxis />
    <CartesianGrid strokeDasharray="3 3" />
    <Tooltip />
    <Area type="monotone" dataKey="uv" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
    <Area type="monotone" dataKey="pv" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />
  </AreaChart>
  )
}

export default Lines
