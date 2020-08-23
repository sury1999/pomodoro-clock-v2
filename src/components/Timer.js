import React from 'react'

class Timer extends React.Component {
    constructor() {
        super();

        this.state = {
            isSession : true,
            timerSecond: 0,
            intervalId: 0
        };

        this.playTimer = this.playTimer.bind(this);
        this.stopTimer = this.stopTimer.bind(this);
        this.resetTimer = this.resetTimer.bind(this);
        this.decreaseTimer = this.decreaseTimer.bind(this);
    }

    playTimer() {
        let intervalId = setInterval(this.decreaseTimer, 1000); 
        this.props.onPlayStopTimer(true);
        this.setState({
            intervalId: intervalId
        })
    }

    decreaseTimer() {
        switch (this.state.timerSecond) {
            case 0:
                if(this.props.timerMinute === 0) {
                    if(this.state.isSession) {
                        this.setState ({
                            isSession: false
                        });

                        this.props.toggleInterval(this.state.isSession);
                    } else {
                        this.setState ({
                            isSession: true
                        });
                        this.props.toggleInterval(this.state.isSession);
                    } 
                } else{
                        this.props.updateTimerMinute()
                        this.setState({
                            timerSecond: 59
                    })
                }   
                break;
            default:
                this.setState((previousState) => {
                    return {
                        timerSecond: previousState.timerSecond - 1
                    }
                })
                break;
        }
    }

    stopTimer() {
        clearInterval(this.state.intervalId);
        this.props.onPlayStopTimer(false);
    }

    resetTimer() {
        this.stopTimer();
        this.props.onPlayStopTimer(false);
        this.props.resetTimer();
        this.setState({
            timerSecond: 0,
            isSession: true
        })
    }

    render() {
        return (
            <section>
                <section>
                    <h4>{this.state.isSession === true ? "Session" : "Break"}</h4>
                    <span>{this.props.timerMinute}</span>
                    <span>:</span>
                    <span>{this.state.timerSecond === 0 
                    ? '00'
                    : this.state.timerSecond < 10 
                    ? '0' + this.state.timerSecond 
                    :this.state.timerSecond}</span>
                </section>
                <button onClick = {this.playTimer}>Play</button>
                <button onClick = {this.stopTimer}>Stop</button>
                <button onClick = {this.resetTimer}>Reset</button>
            </section>
        );
    }
}

export default Timer;