import React, { Component } from 'react';
import ProgressChart from './ProgressChart.js';

/*TODO :
1. This is an example --> build ratings container component properly for dashboard as per design
2. Pass style in props to child ProgressChart component
*/

class Ratings extends Component {
	render() {
		return(
			<div class="container">
				<div class="container-fluid">
					<div class="container-fluid">
						<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
							<ProgressChart 
								percentage={44}
								container_size={"230px"}
							/>
						</div>
					</div>
					<div class="container-fluid">
						<div class="row">
							<div class="col-xs-12 col-sm-12 col-md-4 col-lg-4">
								<ProgressChart 
									percentage={88}
									container_size={"130px"}
								/>
							</div>
							<div class="col-xs-12 col-sm-12 col-md-4 col-lg-4">
								<ProgressChart 
									percentage={77}
									container_size={"130px"}
								/>
							</div>
							<div class="col-xs-12 col-sm-12 col-md-4 col-lg-4">
								<ProgressChart 
									percentage={66}
									container_size={"130px"}
								/>
							</div>
						</div>
						<div class="row">
							<div class="col-xs-12 col-sm-12 col-md-4 col-lg-4">
								<ProgressChart 
									percentage={88}
									container_size={"130px"}
								/>
							</div>
							<div class="col-xs-12 col-sm-12 col-md-4 col-lg-4">
								<ProgressChart 
									percentage={77}
									container_size={"130px"}
								/>
							</div>
							<div class="col-xs-12 col-sm-12 col-md-4 col-lg-4">
								<ProgressChart 
									percentage={66}
									container_size={"130px"}
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Ratings;