import React from 'react';
import * as root from '@material-ui/core/';

const Register = ({handleIncrement, handleDecrement, currentValue}) => {
     return (
             <div>
                <div>{currentValue}</div>
                <button onClick = {handleIncrement} >+</button>
                <button onClick = {handleDecrement} >-</button>
             </div>
     );

}

export default Register;