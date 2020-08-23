import React from 'react'

function BreakInterval(props) {
    function decreaseCounter() {
        if(props.breakInterval === 1) {
            return;
        }
        props.decreaseBreak();

    }

    function increaseCounter() {
        if (props.breakInterval === 60) {
            return;
        }
        props.increaseBreak();
    }

    return (
        <section>
            <button disabled = {props.isPlay === true ? 'disabled' : ''} onClick = {decreaseCounter}> Down </button>
            <p>{props.breakInterval}</p>
            <button  disabled = {props.isPlay === true ? 'disabled' : ''} onClick = {increaseCounter}> Up </button>
        </section>
    );

}

export default BreakInterval;