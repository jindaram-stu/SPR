import React from 'react';
import CheckSrc from 'resource/check.png'
import styled from 'styled-components';

const Center = styled.div`
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

const RegisterDonePage = () => {
    return (
        <Center>
            <Container>
                <Check src={CheckSrc}/>
                <RegisterDoneMessage>사전등록이 완료되었습니다.</RegisterDoneMessage>
            </Container>
        </Center>
    );
};

export default RegisterDonePage;