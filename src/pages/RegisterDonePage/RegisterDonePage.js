import React from 'react';
import CheckSrc from 'resource/check.png'
import styled from 'styled-components';

const RegisterDonePage = () => {
    return (
        <CenterContainer>
            <Container>
                <Check src={CheckSrc}/>
                <RegisterDoneMessage>사전예약이 완료되었습니다.</RegisterDoneMessage>
                <SubDescription>많은 분들께 사랑받는 <span style={{color : "#6698e8"}}>세이플리</span>가 되겠습니다.</SubDescription>
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

export default RegisterDonePage;