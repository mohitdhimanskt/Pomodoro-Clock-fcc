class TimerLengthControl extends React.Component {
    render() {
      return (
        <div className="length-control">
          <div id={this.props.titleID}>
            {this.props.title}
          </div>
          <button id={this.props.minID}
            className="btn-level" value="-" 
            onClick={this.props.onClick}>
            <i className="fa fa-arrow-down fa-2x"/>
          </button>
          <div id={this.props.lengthID} className="btn-level">
            {this.props.length}
          </div>
          <button id={this.props.addID}
            className="btn-level" value="+" 
            onClick={this.props.onClick}>
            <i className="fa fa-arrow-up fa-2x"/>
          </button>
        </div>
      )
    }
  };

  class Timer extends React.Component {
      constructor(props){
          super(props);
          this.state = {
              brkLength: 5,
              seshLength: 25,
              timerState: 'stopped',
              timerType: 'Session',
              timer: 1500,
              intervalID: '',
              alarmColor: {color: 'white'}
          }
          this.setBrkLength =this.setBrkLength.bind(this);
          this.setSeshLength = this.setSeshLength.bind(this);
          this.lengthControl = this.lengthControl.bind(this);
          this.timerControl = this.timerControl.bind(this);
          this.beginCountDown = this.beginCountDown.bind(this);
          this.decrementTimer = this.decrementTimer.bind(this);
          this.phaseControl = this.phaseControl.bind(this);
          this.warning = this.warning.bind(this);
          this. buzzer = this.buzzer.bind(this);
          this.switchTimer = this.switchTimer.bind(this);
          this.clockify = this.clockify.bind(this);
          this.reset = this.reset.bind(this);

      }
  }