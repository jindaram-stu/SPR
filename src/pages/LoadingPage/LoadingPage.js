import Spinner from 'component/Spinner/Spinner';
import React from 'react';
import styled from 'styled-components';

const LoadingPage = () => {
    return (
        <CenterContainer>
            <Container>
                <Spinner></Spinner>
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

export default LoadingPage;