import CharacterCounter from 'component/CharacterCounter/CharacterCounter';
import React from 'react';
import styled from 'styled-components';

const CommentTitle = styled.h4`
        margin : 30px 0px 15px 0px;
    `

const CommentArea = styled.textarea`
    width : 100%;
    height : 100px;
    border : 1px solid rgba(0, 0, 0, 0.23);
    padding :15px;
    border-radius: 5px;
    box-sizing: border-box;
    font-size : 14px;
    font-family : 'Noto Sans';
    resize: none;
    outline-color : #4D2EDD;
`

const ColorBold = styled.span`
    color : #4D2EDD;
`

const Comment = (props) => {
    const onChange = props.onChange;
    const commentValue = props.commentValue;

    return (
        <>
            <CommentTitle><ColorBold>세이플리</ColorBold>에게 한마디</CommentTitle>
            <CommentArea name="comment" onChange={onChange} placeholder="세이플리에게 응원의 메시지나 전하고 싶은 메시지를 200자 이내로 적어주세요!"/>
            <CharacterCounter comment={commentValue}/>  
        </>
    );
};

export default Comment;