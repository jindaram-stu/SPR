import React from 'react';
import styled from 'styled-components';

const CounterContainer = styled.div`
    text-align : right;
`

const Counter = styled.span`
    font-size : 13px;
    color : rgb(121, 121, 121)
`

const CharacterCounter = (props) => {
    return (
        <CounterContainer>
            <Counter>{props.comment.length}/200자</Counter>
        </CounterContainer>
    );
};

export default CharacterCounter;