import React from 'react';
import PropTypes from 'prop-types';


class SignUpInvestorInvestmentsForm extends React.Component {
  constructor(props){
    super(props);
  }

  handle_signup = (e) => {
    e.preventDefault();
    this.props.history.push({
      pathname: '/'
    });
  }


  render() {
    return ( 
      <div class="bgImage">
      <div class="container">
        <div class="login-form">
          <div class="main-div">
            <div class="panel">
              <img src={ require('../logo.png') } alt="logo" class="logo" class="img-responsive" />
              <br />
              <p><strong>Please fill in some details around your investments to help us serve you better.</strong></p>
              <p>Investor Type</p>
              <label class="checkbox-inline"><input type="checkbox" value="" />Advisor</label>
              <label class="checkbox-inline"><input type="checkbox" value="" />Angel Investor</label>
              <label class="checkbox-inline"><input type="checkbox" value="" />Syndicate</label>
              <label class="checkbox-inline"><input type="checkbox" value="" />Venture Capitalist</label>
              <label class="checkbox-inline"><input type="checkbox" value="" />Family Office</label>
              <br /><br />
              <p>Investment Stage</p>
              <div class="form-group">
                <select class="form-control" id="InvestmentType">
                  <option>Pre-Seed</option>
                  <option>Seed</option>
                  <option>Post-Seed</option>
                </select>
              </div>
              <p>Typical Investment Size</p>
              <div class="form-group">
                <select class="form-control" id="InvestmentType">
                  <option>Less than US $10,000</option>
                  <option>US $ 10,000 - 25,000</option>
                  <option>US $ 25,000 - $100,000</option>
                  <option>US $ 100,000 - 250,000</option>
                  <option>US $ 250,000 - 500,000</option>
                  <option>US $ 500,000 - 1 Million</option>
                  <option>Above US$ 1 Million</option>
                </select>
              </div>
              <p>Expected Deals per Year</p>
              <div class="form-group">
                <select class="form-control" id="InvestmentType">
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>More than 4</option>
                </select>
              </div>
              <br /> <br />
              <button type="submit" class="btn btn-primary" onClick={this.handle_signup}>Finish</button>
            </div>
          </div>
        </div>
      </div>
      </div>


          );}
}

export default SignUpInvestorInvestmentsForm;