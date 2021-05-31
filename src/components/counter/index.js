import React from 'react';
import * as root from '@material-ui/core/';

const Counter = ({handleIncrement, handleDecrement, currentValue, displayForm, changeDisplayFormStatus}) => {
     return (
             <div>
                <div>{currentValue}</div>
                <button onClick = {handleIncrement} >+</button>
                <button onClick = {handleDecrement} >-</button>
                <button onClick = {changeDisplayFormStatus} >Change Form Status</button>
                 {displayForm &&
                 <form>
                     <root.TextField/>
                     <root.TextField/>
                     <root.TextField/>
                 </form>
                 }
             </div>

     );

}

export default Counter;