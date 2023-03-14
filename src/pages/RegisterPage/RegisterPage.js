import React, { useEffect, useState } from 'react';
import { FormGroup } from '@mui/material';
import Input from '../../component/Input/Input';
import Submit from '../../component/Submit/Submit';
import Comment from 'component/Comment/Comment';
import SafelyPreImage from 'resource/safely-0314.png';
import styled from 'styled-components';
import Footer from '../../component/Footer'
import ClauseCheckbox from 'component/Checkbox/ClauseCheckbox';
import SelectBox from 'component/SelectBox/SelectBox';



const RegisterPage = (props) => {

    const [form, setForm] = useState({
        "name" : "",
        "phone" : "",
        "company" : "",
        "department" : "",
        "position" : "",
        "comment" : "",
        "privacyPolicy" : "X",
        "os" : "none",
    })

    const handleValue = (e) => {
        setForm({...form, [e.target.name] : e.target.value});
    }

    const handleCheck = (e) => {
        if (e.target.checked === true) {
            setForm({...form, [e.target.name] : "O"});
        } else {
            setForm({...form, [e.target.name] : "X"})
        }
    }

    return (
        <div>
            <SafelyBanner src={SafelyPreImage}/>
            <Container>
                
                <Title>세이플리 사전 예약 신청</Title>
                
                <SelectBox
                    name="os"
                    handleValue={handleValue}/>

                <Input
                    type="이름"
                    name="name"
                    placeholder="이름을 입력하세요."
                    onChange={handleValue}/>

                <Input
                    type="휴대전화 번호"
                    name="phone"
                    placeholder="'-' 없이 입력하세요."
                    onChange={handleValue}/>

                <Input
                    type="회사명"
                    name="company"
                    placeholder="회사명을 입력하세요."
                    onChange={handleValue}/>

                <Input
                    type="부서"
                    name="department"
                    placeholder="부서명을 입력하세요."
                    onChange={handleValue}/>

                <Input
                    type="직급"
                    name="position"
                    placeholder="직급을 입력하세요."
                    onChange={handleValue}/>
                
                <Comment
                    onChange={handleValue}
                    commentValue={form.comment}/>

                <FormGroup sx={{marginTop : "50px", marginBottom : "30px"}}>
                    <ClauseCheckbox
                        name="privacyPolicy"
                        text="(필수) 개인 정보 수집 이용 및 마케팅 활용에 동의합니다."
                        onChange={handleCheck}
                        />
                </FormGroup>
                
                <Submit form={form} setRegisterDone={props.setRegisterDone}/>
            </Container>
            
            <Footer/>
        </div>
    )
}

const SafelyBanner = styled.img`
        width : 100%;
`

const Container = styled.div`
    width : 100%;
    height : auto;
    padding : 25px;
    box-sizing: border-box;
`

const Title = styled.h3`
    text-align: center; 
    font-size : 25px;
    font-weight: bold;
    color : #4D2EDD;
    margin : 0;
    margin-top : 12px;
    font-family: 'Noto Sans';
    letter-spacing : 3px;
`   

export default RegisterPage;