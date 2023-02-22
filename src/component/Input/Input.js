import { TextField } from '@mui/material';
import React from 'react';
import styled from 'styled-components';

const InputTitle = styled.h4`
    margin : 30px 0px 15px 0px;
`

const InputField = styled.input`
    width : 100%;
    height : 60px;
    padding : 16.5px 14px 16.5px 14px;
    box-sizing : border-box;
    outline-color : #4D2EDD;
    font-size : 16px;
    border : 1px solid rgba(0,0,0,0.23);
    border-radius : 5px;
`

const ColorBold = styled.span`
    color : #4D2EDD;
`
const Input = ({name, type, placeholder, onChange}) => {

    return (
        <div>
            <InputTitle>{type} <ColorBold>*</ColorBold></InputTitle>
            <InputField name={name} placeholder={placeholder} onChange={onChange}></InputField>
        </div>
    );
};

export default Input;