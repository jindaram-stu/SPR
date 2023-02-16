import React, {useState} from 'react';
import style from './RegisterPage.module.css'
import { Checkbox, FormControlLabel, FormGroup } from '@mui/material';
import Input from '../../component/Input/Input';
import CharacterCounter from '../../component/CharacterCounter/CharacterCounter';
import Submit from '../../component/Submit/Submit';

const RegisterPage = (props) => {

    const [form, setForm] = useState({
        "name" : "",
        "phone" : "",
        "company" : "",
        "department" : "",
        "position" : "",
        "comment" : "",
        "privacyPolicy" : "O",
        "thirdParty" : "X"  
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
            <div className={`${style.container}`}>
                <div className={`${style.image}`}>이미지</div>
                <h3 className={`${style.title}`}> 세이플리 사전 예약 신청</h3>

                <Input
                    type="이름"
                    name="name"
                    placeholder="이름을 입력하세요."
                    onChange={handleValue}/>

                <Input
                    type="전화번호"
                    name="phone"
                    placeholder="전화번호를 입력하세요."
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
                
                <h4 className={`${style.subtitle}`}>세이플리에게 한마디 *</h4> <br></br>
                <textarea name="comment" className={`${style.area}`} placeholder="세이플리에게 하고싶은 한마디를 남겨주세요! (200자 이내)" onChange={handleValue}></textarea>
                <CharacterCounter comment={form.comment}/>

                <FormGroup sx={{marginTop : "30px"}}>
                    <FormControlLabel control={<Checkbox name="privacyPolicy" defaultChecked onChange={handleCheck}/>} label=" (필수) 개인 정보 수집 이용 및 마케팅 활용에 동의합니다." />
                    <FormControlLabel control={<Checkbox name="thirdParty" onChange={handleCheck} />} label=" (선택) 개인 정보의 제 3자 제공에 동의합니다." />
                </FormGroup>
                
                <Submit form={form} setRegisterDone={props.setRegisterDone}/>
            </div>
            <footer className={`${style.footer}`}>
                    
            </footer>
        </div>
    )
}

export default RegisterPage;