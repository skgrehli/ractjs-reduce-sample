import React, { Component } from 'react';
import { connect } from 'react-redux';

import { login } from '../Auth.action'
import '../SignInForm.css';

import Select from 'react-select';


/* TODO : 
1. Add Redux implementation
*/

const sectors = [
  { value: 'Agriculture & Mining', label: 'Agriculture & Mining'}, 
  { value: 'Business Services', label: 'Business Services'},
  { value: 'Consumer Services', label: 'Consumer Services'},
  { value: 'Consumer Goods', label: 'Consumer Goods'},
  { value: 'E-commerce', label: 'E-commerce'},
  { value: 'Education', label: 'Education'},
  { value: 'Energy & Utilities', label: 'Energy & Utilities'},
  { value: 'Financial Services', label: 'Financial Services'},
  { value: 'Government', label: 'Government'},
  { value: 'Healthcare', label: 'Healthcare'},
  { value: 'Logistics', label: 'Logistics'},
  { value: 'Manufacturing', label: 'Manufacturing'},
  { value: 'Media & Entertainment', label: 'Media & Entertainment'},
  { value: 'Non-profit', label: 'Non-profit'},
  { value: 'Real Estate', label: 'Real Estate'},
  { value: 'Retail', label: 'Retail'},
  { value: 'Software & Internet', label: 'Software & Internet'},
  { value: 'Telecommunications', label: 'Telecommunications'},
  { value: 'Travel & Tourism', label: 'Travel & Tourism'}
];

const industries = [
    { value: 'Advertising', label: 'Advertising'},  
    { value: 'Aerospace', label: 'Aerospace'}, 
    { value: 'Agriculture', label: 'Agriculture'},  
    { value: 'Artificial Intelligence', label: 'Artificial Intelligence'},  
    { value: 'Analytics', label: 'Analytics'}, 
    { value: 'Animation', label: 'Animation'},
    { value: 'AR/VR', label: 'AR/VR'},
    { value: 'Architecture', label: 'Architecture'},
    { value: 'Art and Photography', label: 'Art and Photography'},
    { value: 'Automotive', label: 'Automotive'},
    { value: 'Big Data', label: 'Big Data'},
    { value: 'Blockchain', label: 'Blockchain'},
    { value: 'Communication', label: 'Communication'},
    { value: 'Construction', label: 'Construction'},
    { value: 'Defence', label: 'Defence'},
    { value: 'Design', label: 'Design'},
    { value: 'Education Technology', label: 'Education Technology'}, 
    { value: 'Electronics', label: 'Electronics'},
    { value: 'Enterprise Solutions', label: 'Enterprise Solutions'}, 
    { value: 'Events', label: 'Events'},
    { value: 'Fashion', label: 'Fashion'},
    { value: 'Food and Beverages', label: 'Food and Beverages'}, 
    { value: 'Gaming', label: 'Gaming'},
    { value: 'Green Technology', label: 'Green Technology'}, 
    { value: 'Grocery', label: 'Grocery'},
    { value: 'Hardware', label: 'Hardware'},
    { value: 'Human Resources', label: 'Human Resources'},
    { value: 'Information Technology', label: 'Information Technology'},
    { value: 'Internet of things', label: 'Internet of things'}, 
    { value: 'Legal', label: 'Legal'},
    { value: 'Marketing', label: 'Marketing'},
    { value: 'Nanotechnology', label: 'Nanotechnology'},
    { value: 'Personal Care', label: 'Personal Care'},
    { value: 'Pets and Animals', label: 'Pets and Animals'},
    { value: 'Print Media', label: 'Print Media'},
    { value: 'Robotics', label: 'Robotics'},
    { value: 'Security', label: 'Security'},
    { value: 'Social Impact', label: 'Social Impact'}, 
    { value: 'Social Network', label: 'Social Network'},
    { value: 'Sports', label: 'Sports'},
    { value: 'Storage', label: 'Storage'},
    { value: 'Transportation', label: 'Transportation'},
    { value: 'Wholesale & Distribution', label: 'Wholesale & Distribution'} 
];
class InvestorSignupForm extends Component {
  constructor (props) {
    super(props);
  }
  state = {
    // email: '',
    // password: '',
    // errors: [],
    // selectedOption: [],
    industriesOption: [],
    sectorsOption: []
  };

  handle_signup = (e) => {
    e.preventDefault();
    let emailValidator = this.validateEmail(this.state.email);
    if (emailValidator) {
      const data = {
        //username: this.state.email,
        first_name: this.state.first_name,
        last_name: this.state.last_name, 
        email: this.state.email,
        password: this.state.password,
      };

      this.props.signUp(data);
    }
  };

  handleChangeSectorsSelect = (sectorsOption) => {
    this.setState({ sectorsOption });
    console.log(`Option selected:`, sectorsOption);
  };

  handleChangeIndustriesSelect = (industriesOption) => {
    this.setState({ industriesOption });
    console.log(`Option selected:`, industriesOption);
  };

	render() {
    const { industriesOption, sectorsOption } = this.state;
    //console.log(selectedOption, "selected option");
    let disabled = this.state.sectorsOption.length > 3 || this.state.industriesOption.length > 3;
    return ( 
      <div class="bgImage container-fluid">
      <div class="container">
        <div class="row">
        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
        <div class="login-form">
          <div class="main-div container-fluid">
            <div class="panel">
              <img src={ require('../../assets/logo/logo.png') } alt="logo" class="img-responsive"/>
            </div>
            <div class="row">
              <form id="Login" onSubmit={this.handle_login}>
              

            <h4>Please select your preferred sectors (maximum of 3):</h4>
              <div>
              {sectorsOption.length > 3 && 
              <h6>
              You cannot select more than 3 options
              </h6>
              }</div>
                <Select
                  value={sectorsOption}
                  onChange={this.handleChangeSectorsSelect}
                  options={sectors}
                  isMulti = {true}
                />

             <h4>Please select your preferred industries (maximum of 3):</h4>
             <div>
              {industriesOption.length > 3 && 
              <h6>
              You cannot select more than 3 options
              </h6>
              }</div>
                <Select
                  value={industriesOption}
                  onChange={this.handleChangeIndustriesSelect}
                  options={industries}
                  isMulti = {true}
                />
                <div class="row">
                  <button type="submit" class="btn btn-primary" disabled={disabled}>Sign Up</button>
              	</div>
              </form>
            </div>  
          </div>
        </div>
        </div>
        </div>
      </div>
      </div>
    );
  }
}

const mapsDispatchToProps = dispatch => {
  return {
    signUp : (values) => dispatch(signUp(values))
  }
}

export default connect(null, mapsDispatchToProps)(InvestorSignupForm);
