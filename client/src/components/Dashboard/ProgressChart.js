import React, { Component } from 'react';
import CircularProgressbar from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

/* TODO :
1. Pass Style in props from parent
2. Pass container width also from parent as props
*/

class ProgressChart extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		const { percentage, container_size } = this.props;
		return(
			<div class="container" style={{ width: `${container_size}` }}>
			<CircularProgressbar
			  percentage={percentage}
			  text={`${percentage}%`}
			  initialAnimation={true}
			  styles={{
			  path: { stroke: `rgba(62, 152, 199, ${percentage / 100})` },
			  }}
			/>
			</div>
			);
	}
}

export default ProgressChart;