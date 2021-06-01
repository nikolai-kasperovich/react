import React from 'react';
import * as root from '@material-ui/core/';

const RegisterSuper = ({handleIncrementSuper, handleDecrementSuper, currentValueSuper, displayForm, changeDisplayFormStatus}) => {
    return (
        <div>
            <div>{currentValueSuper}</div>
            <button onClick = {handleIncrementSuper} >+</button>
            <button onClick = {handleDecrementSuper} >-</button>
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

export default RegisterSuper;