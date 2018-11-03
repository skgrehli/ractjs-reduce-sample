import React, { Component } from 'react';

class LeftSideNavPanel extends Component {
	render() {
		return (
			<div class="container">
			<div class="col-xs-12 col-sm-12 col-md-2 col-lg-2">
				<div class="row">
					<img src={require('../../assets/logo/logo.png')} class="img-circle img-responsive" alt="Company Logo" />
				</div>
				<div class="row">					
				</div>
				<div class="row">
					<p>IT</p>
				</div>
				<div class="row">
					<p>IT</p>
				</div>
				<div class="row">
					<p>IT</p>
				</div>
			</div>
			</div>
			);
	}
}

export default LeftSideNavPanel;