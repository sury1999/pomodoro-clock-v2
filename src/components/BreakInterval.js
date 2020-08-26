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
        <section id = "break-label">Break Length
            <button disabled = {props.isPlay === true ? 'disabled' : ''} onClick = {decreaseCounter} id = "break-decrement"> Down </button>
            <p id="break-length">{props.breakInterval}</p>
            <button  disabled = {props.isPlay === true ? 'disabled' : ''} onClick = {increaseCounter} id = "break-increment"> Up </button>
        </section>
    );

}

export default BreakInterval;