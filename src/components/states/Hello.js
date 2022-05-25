import React, { Component } from "react";
export default class Hello extends Component {
  constructor(props) {
    super(props);
    this.state = { welcome: "Добро пожаловать на тестовый сайт!" };
  }

//   this.state.welcome = "jfdsfkas"

  render() {
    return <h1>{this.state.welcome}</h1>;
  }
}
