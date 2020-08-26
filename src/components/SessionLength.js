import React from 'react'

function SessionLength (props) {

    function increaseCounter() {
        if(props.sessionLength === 60) {
            return;
        }
        props.increaseSession();
    }

    function decreaseCounter() {
        if(props.sessionLength === 1) {
            return;
        }
        props.decreaseSession();
        
    }

    return (
        <section id="session-label">Session Length
            <button  disabled = {props.isPlay === true ? 'disabled' : ''} onClick = {decreaseCounter} id="session-decrement"> Down </button>
            <p id = "session-length">{props.sessionLength}</p>
            <button  disabled = {props.isPlay === true ? 'disabled' : ''} onClick = {increaseCounter} id = "session-increment"> Up </button>
        </section>
    );

}

export default SessionLength;