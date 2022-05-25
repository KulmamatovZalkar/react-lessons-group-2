import React, { Component } from "react";

export default class ClickButton extends Component {
  constructor(props) {
    super(props);
    this.state = { className: "off", label: "Включить", counter: 0 };
    this.press = this.press.bind(this);
  }

  incrementCounter(prevState, props) {
    return {
      counter: prevState.counter + parseInt(props.increment),
    };
  }

  press() {
    let className = this.state.className === "off" ? "on" : "off";
    this.setState({ className: className });

    this.setState(this.incrementCounter);
    this.setState(this.incrementCounter);
  }

  render() {
    return (
      <div>
        <button onClick={this.press} className={this.state.className}>
          {this.state.label}
        </button>
        <div>
          Counter: {this.state.counter} <br />
          Increment: {this.props.increment}
        </div>
      </div>
    );
  }
}
