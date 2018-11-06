import React, { Component } from 'react';
import Collapsible from 'react-collapsible';
import './Collapsible.css';

/*TODO:
1. Modify acc to design (CSS)
2. Find a way to add image to trigger
3. Add a arrow button --> shows square box currently
*/

class CollapsibleComponent extends Component {

  render() {
    return(
 		<div class="container-fluid">
    		<Collapsible trigger="Blockseed Investments">
	    		<div class="container-fluid">
					<div class="row">
						<div class="col-xs-12 col-sm-12 col-md-4 col-lg-4">
					        <p>INVESTMENT STAGE</p>
					    </div>
					    <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4">
					        <p>SECTOR</p>
  						</div>
  						<div class="col-xs-12 col-sm-12 col-md-4 col-lg-4">
					        <p>INDUSTRY</p>
  						</div>
      				</div>
      				<div class="row">
						<div class="col-xs-12 col-sm-12 col-md-4 col-lg-4">
					        <p>Pre-Seed</p>
					    </div>
					    <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4">
					        <p>Tech</p>
  						</div>
  						<div class="col-xs-12 col-sm-12 col-md-4 col-lg-4">
					        <p>Blockchain</p>
  						</div>
      				</div>
      				<div class="row">
						<div class="col-xs-12 col-sm-12 col-md-4 col-lg-4">
					        <p></p>
					    </div>
					    <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4">
					        <p></p>
  						</div>
  						<div class="col-xs-12 col-sm-12 col-md-4 col-lg-4">
					        <p>Automotive</p>
  						</div>
      				</div>
      				<div class="row">
						<div class="col-xs-12 col-sm-12 col-md-4 col-lg-4">
					        <p></p>
					    </div>
					    <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4">
					        <p></p>
  						</div>
  						<div class="col-xs-12 col-sm-12 col-md-4 col-lg-4">
					        <p>Technology</p>
  						</div>
      				</div>
      			</div>
      		</Collapsible>
 		</div>
    )
  }
 
}
 
export default CollapsibleComponent;