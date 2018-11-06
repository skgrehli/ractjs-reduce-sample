import React, { Component } from 'react';
import { slide as Menu } from 'react-burger-menu';
import './SidePanel.css';

/*TODO:
1. Improve this component and re-use in dashboard/InvestorList/StartupList
*/

class LeftSideNavPanel extends React.Component {
  showSettings = (event) => {
    event.preventDefault();
  }

  render () {
    return (
      <Menu class="bm-menu"
      	isOpen={false}
      	customBurgerIcon={ <img src="https://img.icons8.com/metro/50/000000/menu.png" class="bm-burger-button"/>}
      	customCrossIcon={ <img src="https://img.icons8.com/ios/50/000000/multiply.png" class="bm-cross-button"/>}
      >
        <a id="home" className="menu-item" href="/forgot-password">Home</a>
        <a id="about" className="menu-item" href="/forgot-password">About</a>
        <a id="contact" className="menu-item" href="/forgot-password">Contact</a>
        <a onClick={ this.showSettings } className="menu-item--small" href="/forgot-password">Settings</a>
      </Menu>
    );
  }
}

export default LeftSideNavPanel;