import React, { Component } from 'react';
import './SidePanel.css';

class PeerReview extends Component {
	render() {
		return(
			<div class="container" id="peer-review">
				<div class="panel container" id="star">
	              <img src={ require('../../assets/images/star.jpg') } alt="Peer review" class="img-responsive"/>
	            </div>
	            <p><strong>Peer Reviews</strong></p>
	            <small>Take 15 minutes to answer a few questions and earn credits</small>
	            <br /><br />
	            <p>50 credits</p>
			</div>
		);
	}
}

export default PeerReview;