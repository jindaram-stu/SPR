import { Checkbox, FormControlLabel } from '@mui/material';
import React from 'react';

const ClauseCheckbox = ({name, text, onChange, defaultCheck}) => {

    const checkboxBorderColor = "#4D2EDD"
    const checkboxCheckedColor = "#4D2EDD"

    return (
        <FormControlLabel 
                        control={<Checkbox 
                                    name={name}
                                    defaultChecked={defaultCheck}
                                    onChange={onChange} 
                                    sx={{color : checkboxBorderColor, '&.Mui-checked': {color: checkboxCheckedColor}}} />}
                        label={text} />
    );
};

export default ClauseCheckbox;