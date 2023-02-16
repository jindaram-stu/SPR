import axios from 'axios';
import React, { useState } from 'react';
import { validateForm } from '../../util/Validate';
import style from './Submit.module.css'

const Submit = (props) => {

    const SHEET_API_URL = 'https://script.google.com/macros/s/AKfycbzd6WeFMirKck5fOu4-Z3Fh3W7bRGVKW5EFU6J7q7x3P8sRz_68ORZniK6I2DcC8rwrsA/exec';
    
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
        formData.append('thirdParty' , form.thirdParty);

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
            <button onClick={submitForm} disabled={clicked} className={clicked ? `${style.disabledButton}` : `${style.button}`}>사전 예약 신청</button>
        </>
    );
};

export default Submit;