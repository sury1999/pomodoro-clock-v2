import React from 'react';
import '../App.css';
import BreakInterval from './BreakInterval'
import SessionLength from './SessionLength'
import Timer from './Timer'

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      breakLength: 5,
      sessionLength: 25,
      timerMinute: 25,
      isPlay: false
    }
    this.onIncreseBreakLength = this.onIncreseBreakLength.bind(this);
    this.onDecreaseBreakLength = this.onDecreaseBreakLength.bind(this);
    this.onIncreaseSessionLength = this.onIncreaseSessionLength.bind(this);
    this.onDecreaseSessionLength = this.onDecreaseSessionLength.bind(this);
    this.onToggleInterval = this.onToggleInterval.bind(this);
    this.onUpdateTimerMinute = this.onUpdateTimerMinute.bind(this);
    this.onResetTimer = this.onResetTimer.bind(this);
    this.onPlayStopTimer = this.onPlayStopTimer.bind(this);
  }

  onIncreseBreakLength() {
    this.setState((previousState) => {
      return {
        breakLength: previousState.breakLength + 1
      }
    })
  }

  onDecreaseBreakLength() {
    this.setState((previousState) => {
      return {
        breakLength: previousState.breakLength - 1
      }
    })
  }

  onDecreaseSessionLength() {
    this.setState((previousState) => {
      return {
        sessionLength: previousState.sessionLength - 1,
        timerMinute: previousState.sessionLength - 1
      }
    })
  }

  onIncreaseSessionLength() {
    this.setState((previousState) => {
      return {
        sessionLength: previousState.sessionLength + 1,
        timerMinute: previousState.sessionLength + 1
      }
    })
  }

  onUpdateTimerMinute() {
    this.setState((previousState) => {
      return {
        timerMinute: previousState.timerMinute - 1
      }
    })
  }

  onToggleInterval(isSession) {
    if(isSession) {
      this.setState({
        timerMinute: this.state.sessionLength
      })
    } else {
      this.setState({
        timerMinute: this.state.breakLength
      })
    }
  }

  onResetTimer() {
    this.setState({
      timerMinute: this.state.sessionLength
    })
  }

onPlayStopTimer(isPlay) {
  this.setState ({
    isPlay: isPlay
  })
}

  render() {
    return (
      <main>
        <h2>Pomodoro Clock</h2>
        <BreakInterval
        isPlay = {this.state.isPlay} 
        breakInterval = {this.state.breakLength} 
        increaseBreak = {this.onIncreseBreakLength}
        decreaseBreak = {this.onDecreaseBreakLength}
        />
        <SessionLength 
        isPlay = {this.state.isPlay}
        sessionLength = {this.state.sessionLength}
        increaseSession = {this.onIncreaseSessionLength}
        decreaseSession = {this.onDecreaseSessionLength}
        />
        <Timer 
        timerMinute = {this.state.timerMinute}
        breakLength = {this.state.breakLength}
        updateTimerMinute = {this.onUpdateTimerMinute} 
        toggleInterval = {this.onToggleInterval}
        resetTimer = {this.onResetTimer}
        onPlayStopTimer = {this.onPlayStopTimer}
        />
      </main>
    );
  }
}

export default App;
