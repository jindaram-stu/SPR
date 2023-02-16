import React from 'react';
import style from './CharacterCounter.module.css'

const CharacterCounter = (props) => {
    return (
        <div style={{textAlign: 'right'}}>
            <span className={`${style.counter}`}>{props.comment.length}/200자</span>
        </div>
    );
};

export default CharacterCounter;