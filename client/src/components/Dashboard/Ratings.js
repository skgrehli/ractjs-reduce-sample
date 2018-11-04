import React, { Component } from 'react';
import ProgressChart from './ProgressChart.js';

/*TODO :
1. build ratings container component properly for dashboard
*/

class Ratings extends Component {
	render() {
		return(
			<div class="container">
			<ProgressChart 
				percentage={66}
			/>
			<ProgressChart 
				percentage={88}
			/>
			</div>
		);
	}
}

export default Ratings;