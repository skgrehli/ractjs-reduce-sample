import React, { Component } from 'react';
import { CollapsibleComponent } from '../../UserDetails';

// WIP Initial commit for StartupList

class StartupList extends Component {
	render() {
		return(
			<div>
				<CollapsibleComponent />
				<CollapsibleComponent />
				<CollapsibleComponent />
				<CollapsibleComponent />
				<CollapsibleComponent />
			</div>
			);
	}
}

export default StartupList;