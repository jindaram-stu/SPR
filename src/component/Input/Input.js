import { TextField } from '@mui/material';
import React from 'react';
import style from './Input.module.css'

const Input = (props) => {
    const name = props.name; 
    const type = props.type; 
    const placeholder = props.placeholder;
    const onChange = props.onChange;

    return (
        <div>
            <h4 className={`${style.subtitle}`}>{type} *</h4> <br></br>
                <TextField id="outlined-basic" name={name} variant="outlined" fullWidth placeholder={placeholder} onChange={onChange} />
        </div>
    );
};

export default Input;