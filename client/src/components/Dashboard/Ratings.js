import React, { Component } from 'react';
import ProgressChart from './ProgressChart.js';

/*TODO :
1. Improve design
2. Pass style in props to child ProgressChart component
3. Build a wrapper around this and include headers etc as in design
*/

class Ratings extends Component {
	render() {
		return(
			<div class="container-fluid">
				<div class="row">
						<div class="col-xs-12 col-sm-12 col-md-4 col-lg-4">
							<ProgressChart 
								percentage={44}
								container_size={"230px"}
								color={[282, 222, 152]}
							/>
						</div>
					<div class="col-xs-12 col-sm-12 col-md-8 col-lg-8">
						<div class="row">
							<div class="col-xs-12 col-sm-12 col-md-4 col-lg-4">
								<ProgressChart 
									percentage={88}
									container_size={"130px"}
									color={[162, 52, 299]}
								/>
							</div>
							<div class="col-xs-12 col-sm-12 col-md-4 col-lg-4">
								<ProgressChart 
									percentage={77}
									container_size={"130px"}
									color={[362, 152, 299]}
								/>
							</div>
							<div class="col-xs-12 col-sm-12 col-md-4 col-lg-4">
								<ProgressChart 
									percentage={66}
									container_size={"130px"}
									color={[362, 152, 299]}
								/>
							</div>
						</div>
						<div class="row">
							<div class="col-xs-12 col-sm-12 col-md-4 col-lg-4">
								<ProgressChart 
									percentage={88}
									container_size={"130px"}
									color={[362, 152, 299]}
								/>
							</div>
							<div class="col-xs-12 col-sm-12 col-md-4 col-lg-4">
								<ProgressChart 
									percentage={77}
									container_size={"130px"}
									color={[362, 152, 299]}
								/>
							</div>
							<div class="col-xs-12 col-sm-12 col-md-4 col-lg-4">
								<ProgressChart 
									percentage={66}
									container_size={"130px"}
									color={[362, 152, 299]}
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