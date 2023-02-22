import { borderRadius } from '@mui/system';
import React from 'react';
import RemoveSrc from 'resource/remove.png'
import styled from 'styled-components';

const RegisterLimitPage = () => {
    return (
        <CenterContainer>
            <Container>
                <Check src={RemoveSrc}/>
                <RegisterDoneMessage>사전예약이 마감되었습니다.</RegisterDoneMessage>
                
                    <SubDescription>
                        고객 여러분의 뜨거운 성원에 힘입어<br/>
                        세이플리 사전예약 이벤트가 마감되었습니다.<br/>
                        <br/>
                        보내주신 성원에 진심으로 감사드립니다.
                    </SubDescription>
                
            </Container>
        </CenterContainer>
    );
};

const CenterContainer = styled.div`
    width : 100%;
    height : 100vh;
    display : flex;
    justify-content : center;
    align-items : center;
`

const Container = styled.div`
    text-align : center;
    padding : 20px;
    box-sizing : border-box;
`

const Check = styled.img`
    width : 80px;
`   

const RegisterDoneMessage = styled.h1`
    font-size : 25px;
    font-weight : bold;
`

const SubDescription = styled.span`
    color : gray;
    font-size : 13px;
`;

export default RegisterLimitPage;