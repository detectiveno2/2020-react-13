import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Modal from "./components/Modal.js";

class App extends Component {
  constructor() {
    super();
    this.state = {
      openModal: false,
      hideModal: true
    };
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
  }

  showModal() {
    this.setState({
      openModal: true,
      hideModal: false
    });
  }

  hideModal() {
    this.setState({
      openModal: false,
      hideModal: true
    });
  }

  render() {
    const { openModal } = this.state;
    const { hideModal } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            <button onClick={this.showModal}>Open modal</button>
          </p>
          <a
            className="App-link"
            href="https://coders-x.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Yêu anh Thịnh
          </a>
        </header>
        <Modal
          isOpen={openModal}
          isHide={hideModal}
          hideModal={this.hideModal}
        />
      </div>
    );
  }
}

export default App;
