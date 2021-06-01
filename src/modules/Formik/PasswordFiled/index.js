import React, {useState} from "react";
import PropTypes from 'prop-types';
import { TextField, InputAdornment } from "@material-ui/core";
import { get } from 'lodash';
import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityIconOff from '@material-ui/icons/VisibilityOff';
import IconButton from '@material-ui/core/IconButton';

const FormikPasswordField = ({field, form, ...props}) => {

    const [showPassword, setShowPassword] = useState(false);
    const handleShowPassword = () => {
        setShowPassword(!showPassword);
    }

    const {errors, touched} = form
    const error = get(touched, field.name) && get(errors, field.name);

    return (
        <TextField
            color="primary"
            error={!!error}
            variant='outlined'
            helperText={error}
            {...field}
            value={field.value || ''}
            {...props}
            type={showPassword ? 'text' : 'password'}
            InputProps={{
                endAdornment: (
                   <InputAdornment position={'end'}>
                       <IconButton
                           onClick={handleShowPassword}
                           aria-label={'toogle password visibility'}
                       >
                           {showPassword ? <VisibilityIcon/> : <VisibilityIconOff/>}
                       </IconButton>
                   </InputAdornment>
                ),
            }}
        />
    )
}
FormikPasswordField.propTypes = {
    field: PropTypes.object.isRequired,
    form: PropTypes.object.isRequired,
}

export default FormikPasswordField;