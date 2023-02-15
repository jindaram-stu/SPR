import React, {useEffect, useState} from 'react';
import axios from "axios";
import TextField from '@mui/material/TextField'
import style from './RegisterPage.module.css'
import { Checkbox, FormControlLabel, FormGroup } from '@mui/material';

const SHEET_API_URL = 'https://script.google.com/macros/s/AKfycbxpPMTewzYBo_aAtjsBrB8Zp_QJqPqKlwVDB78g_nmN8HR4lNWcTZ87oYVYbQ8oU-jr6g/exec';

const RegisterPage = () => {

    const [form, setForm] = useState({
        "이름" : "",
        "전화번호" : "",
        "회사명" : "",
        "부서" : "",
        "직급" : "",
        "한마디" : "",
        "개인정보처리방침" : "O",
        "개인정보제3자제공" : "X"  
    })

    // onChange 
    const handleValue = (e) => {
        setForm({...form, [e.target.name] : e.target.value});
    }

    const handleCheck = (e) => {
        console.log(e.target.checked)
        if (e.target.checked === true) {
            setForm({...form, [e.target.name] : "O"});
        } else {
            setForm({...form, [e.target.name] : "X"})
        }
    }

    // 폼 검증
    const validateForm = () => {
        // 양식 지정 (정규식)
        // 중복 검증
    }

    // 폼 전송
    const submitForm = async () => {
        const formData = new FormData();

        formData.append('이름' , form.이름);
        formData.append('전화번호' , form.전화번호);
        formData.append('회사명' , form.회사명);
        formData.append('부서' , form.부서);
        formData.append('직급' , form.직급);
        formData.append('한마디',form.한마디);
        formData.append('개인정보처리방침' , form['개인정보처리방침']);
        formData.append('개인정보제3자제공' , form['개인정보제3자제공']);

        await axios.post(SHEET_API_URL, formData)
        .then(() => {
            alert('성공적으로 신청되었습니다.')
        })
    }

    useEffect(()=> {
        console.log(form);
    },[form])

    return (
        <div>
            <div className={`${style.container}`}>
                <div className={`${style.image}`}>이미지</div>
                <h3 className={`${style.title}`}> 세이플리 사전 예약 신청</h3>
                
                <h4 className={`${style.subtitle}`}>이름 *</h4> <br></br>
                <TextField id="outlined-basic" name="이름" variant="outlined" fullWidth placeholder="이름을 입력해주세요." onChange={handleValue} />
            
                <h4 className={`${style.subtitle}`}>전화번호 *</h4> <br></br>
                <TextField id="outlined-basic" name="전화번호" variant="outlined" fullWidth placeholder='- 없이 입력' onChange={handleValue}/>

                <h4 className={`${style.subtitle}`}>회사명 *</h4> <br></br>
                <TextField id="outlined-basic" name="회사명" variant="outlined" fullWidth placeholder='회사명을 입력해주세요.' onChange={handleValue}/>

                <h4 className={`${style.subtitle}`}>부서 *</h4> <br></br>
                <TextField id="outlined-basic" name="부서" variant="outlined" fullWidth placeholder="부서명을 입력해주세요." onChange={handleValue}/>

                <h4 className={`${style.subtitle}`}>직급 *</h4> <br></br>
                <TextField id="outlined-basic" name="직급" variant="outlined" fullWidth placeholder="직급을 입력해주세요." onChange={handleValue}/>
                
                <h4 className={`${style.subtitle}`}>세이플리에게 한마디 *</h4> <br></br>
                <textarea name="한마디" className={`${style.area}`} placeholder="세이플리에게 하고싶은 한마디를 남겨주세요!" onChange={handleValue}></textarea>

                <FormGroup sx={{marginTop : "30px"}}>
                    <FormControlLabel control={<Checkbox name="개인정보처리방침" defaultChecked onChange={handleCheck}/>} label=" (필수) 개인 정보 수집 이용 및 마케팅 활용에 동의합니다." />
                    <FormControlLabel control={<Checkbox name="개인정보제3자제공" onChange={handleCheck} />} label=" (선택) 개인 정보의 제 3자 제공에 동의합니다." />
                </FormGroup>

                <button onClick={submitForm} className={`${style.button}`}>사전 예약 신청</button>
            </div>
        </div>
    )
}

export default RegisterPage;