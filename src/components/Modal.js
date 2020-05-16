import React, { Component } from "react";
import "./../css/Modal.css";
import classNames from "classnames";

class Modal extends Component {
  constructor() {
    super();
  }
  render() {
    const { isHide } = this.props;
    const { hideModal } = this.props;

    const { isOpen } = this.props;

    const className = classNames("Modal", { show: isOpen }, { hide: isHide });
    return (
      <div className={className}>
        <div className="content">
          <h2>This is a modal</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in
            voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit
            amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
            nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </p>
          <div className="btn-area">
            <button href="#" className="btn green-btn" onClick={hideModal}>
              Accept
            </button>
            <button href="#" className="btn red-btn" onClick={hideModal}>
              Decline
            </button>
          </div>
          <button href="#" className="close-btn" onClick={hideModal}>
            <img src="https://image.flaticon.com/icons/svg/271/271203.svg" />
          </button>
        </div>
      </div>
    );
  }
}

export default Modal;
