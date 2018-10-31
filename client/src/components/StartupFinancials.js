import React from 'react';
import PropTypes from 'prop-types';


class StartupFinancials extends React.Component {
  constructor(props){
    super(props);
  }

  handle_change = e => {
    const name = e.target.id;
    const value = e.target.value;
    this.setState(prevstate => {
      const newState = { ...prevstate };
      newState[name] = value;
      return newState;
    });
  };

  handle_signup = (e) => {
    e.preventDefault();
    this.props.history.push({
    	pathname: '/',
    });
  }

  render() {
    return ( 
      <div class="bgImage">
      <div class="container-fluid core-team">
        <div class="login-form">
          <div class="main-div">
            <div class="panel">
              <img src={ require('../logo.png') } alt="logo" class="logo" class="img-responsive" />
            </div>
            <form id="SignUp" onSubmit={this.handle_signup}>
              <p><strong>Please give us a high level overview of your financials to help investors lock on you.</strong></p>
              
              <div class="container-fluid">
                    <div class="form-group">
                      <p>Investment Stage</p>
			            <div class="form-group">
			                <select class="form-control" id="InvestmentType">
			            	    <option>Pre-Seed</option>
			                	<option>Seed</option>
			                  	<option>Post-Seed</option>
			                </select>
                    	</div>
                    <div class="form-group">
                      <input type="number" class="form-control" id="amount_raised" placeholder="Amount Raised"/>
                    </div>
                    <div class="form-group">
                      <input type="number" class="form-control" id="monthly_revenue" placeholder="Monthly Revenue"/>
                    </div>
                    <div class="form-group">
                      <input type="number" class="form-control" id="funding_requirement" placeholder="Funding Requirement"/>
                    </div>
                    <p><strong>Submit a concise pitch deck to get reviews.</strong></p>
                    <div class="form-group container-fluid">
                      Pitch Deck : <input type="file" id="file-input" name="ImageStyle"/>
                    </div>
                    <div class="form-group container-fluid">
		                <div class="form-group container-fluid">
		                  <br />
		                  <p>Age validation for COPA required? </p>
		                  <select class="form-control" id="userType" onChange={(e) => this.handle_change(e)}>
		                    <option>Yes</option>
		                    <option>No</option>
		                  </select>
                </div>
              </div>
                </div>
              </div>
              
              <button type="submit" class="btn btn-primary">Continue</button>
            </form>
          </div>
        </div>
      </div>
      </div>


          );}
}

export default StartupFinancials;