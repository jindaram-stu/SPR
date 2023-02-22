import axios from 'axios';
import React, { useState } from 'react';
import { validateForm } from '../../util/Validate';
import style from './Submit.module.css'

const SHEET_API_URL = process.env.REACT_APP_SPREADSHEET_URL;

// const SubmitButton = styled.button`
//     width : 100%;
//     height : 50px;
//     background-color:  #4D2EDD;
//     border : none;
//     border-radius: 5px;
//     color : white;
//     font-weight: bold;
//     margin-top : 15px;
//     font-size : 17px;

//     color : ${(props) => props.clicked }
// `

const Submit = (props) => {

    const [clicked, setClicked] = useState(false);
 
    const form = props.form;
    const setRegisterDone = props.setRegisterDone;

    const submitForm = async () => {
        setClicked(true);
        
        try {
            validateForm(form);
        } catch (error) {
            alert(error.message);
            setClicked(false);
            return;
        }
        
        const formData = new FormData();

        formData.append('name' , form.name);
        formData.append('phone' , form.phone);
        formData.append('company' , form.company);
        formData.append('department' , form.department);
        formData.append('position' , form.position);
        formData.append('comment',form.comment);
        formData.append('privacyPolicy' , form.privacyPolicy);

        await axios.post(SHEET_API_URL, formData)
        .then((response) => {
            if (response.data.result === "error") {
                alert(response.data.reason);
                setClicked(false);
                return;
            }
            alert('성공적으로 신청되었습니다.')
            setRegisterDone(true);
        })
    }

    return (
        <>
            <button onClick={submitForm} disabled={clicked} className={clicked ? `${style.disabledButton}` : `${style.button}`}>{clicked ? '신청 중입니다...' : '사전 예약 신청' }</button>
        </>
    );
};

export default Submit;