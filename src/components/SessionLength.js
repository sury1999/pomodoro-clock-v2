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
        <section>
            <button  disabled = {props.isPlay === true ? 'disabled' : ''} onClick = {decreaseCounter}> Down </button>
            <p>{props.sessionLength}</p>
            <button  disabled = {props.isPlay === true ? 'disabled' : ''} onClick = {increaseCounter}> Up </button>
        </section>
    );

}

export default SessionLength;