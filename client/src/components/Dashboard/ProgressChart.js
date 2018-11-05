import React, { Component } from 'react';
import CircularProgressbar from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

/* TODO :
1. Pass Style in props from parent
2. Pass container width also from parent as props
3. Fix color prop ---> Not working currently --> Need Custom CSS
*/

class ProgressChart extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		const { percentage, container_size, color } = this.props;
		return(
			<div class="container" style={{ width: `${container_size}` }}>
			<CircularProgressbar
			  percentage={percentage}
			  text={`${percentage}%`}
			  initialAnimation={true}
			  styles={{
			  path: { stroke: `rgba(color[0], color[1], color[2], ${percentage / 100})` },
			  }}
			/>
			</div>
			);
	}
}

export default ProgressChart;