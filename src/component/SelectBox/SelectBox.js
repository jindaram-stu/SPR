import React from 'react';
import styled from 'styled-components';

const SelectBox = (props) => {
    const name = props.name;
    const handleValue = props.handleValue;
    return (
        <div>
            <InputTitle>모바일 운영체제 <ColorBold>*</ColorBold></InputTitle>
            <SubTitle>* 운영체제 별 서비스 오픈 일정에 맞춰 알려드릴게요!</SubTitle>
            <Select name={name} onChange={handleValue} defaultValue="none">
                <option value="none">사용중인 모바일 기기의 운영체제를 선택해주세요.</option>
                <option value="Android">안드로이드 - 갤럭시/LG 등</option>
                <option value="iOS">iOS - 아이폰</option>
            </Select>
        </div>
    );
};

const InputTitle = styled.h4`
    margin : 30px 0px 0px 0px;
`

const ColorBold = styled.span`
    color : #4D2EDD;
`

const Select = styled.select`
    width : 100%;
    height : 35px;
    padding-left : 7px;
    border-radius : 3px;
    outline-color : #4D2EDD;
`

const SubTitle = styled.p`
    color : gray;
    font-size : 12px;
    margin : 5px 0px 10px 0px;
`

export default SelectBox;