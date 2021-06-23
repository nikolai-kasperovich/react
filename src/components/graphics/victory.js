import React from 'react';
import {VictoryChart, VictoryLine, VictoryTheme} from 'victory';

let Parabola = () => {

return (
    <VictoryChart
  theme={VictoryTheme.material}
>
  <VictoryLine
  interpolation="natural"
    style={{
      data: { stroke: "#c43a31" },
      parent: { border: "1px solid #ccc"}
    }}
    data={[
        { x: -1, y: 1 },
        { x: -2, y: 4 },
        { x: -3, y: 9 },
        { x: -4, y: 16 },
        { x: -5, y: 25 },
        { x: 0, y: 0 },  
      { x: 1, y: 1 },
      { x: 2, y: 4 },
      { x: 3, y: 9 },
      { x: 4, y: 16 },
      { x: 5, y: 25 }
    ]}
  />
</VictoryChart>  
)
  
}

export default Parabola