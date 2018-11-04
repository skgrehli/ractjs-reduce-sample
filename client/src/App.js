import React, { Component } from 'react';
import Header from './components/Header/Header.js';
import Footer from './components/Footer/Footer.js';
import { SignInForm, SignUpForm, SignUpFollowForm, ForgotPassword, ResetPassword } from './components/SignUp';
import { LeftSideNavPanel, RefineSearch, PeerReview } from './components/SidePanels';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

/* TODO:
1. Implement Redux
*/


class App extends Component {
  render() {
    return (
    	<div className="App">
      	<Router>
      		<div>
        		<Header />  
      			<Switch>
      			    <Route path="/login" component={SignInForm} />
      			    <Route path="/signup" component={SignUpForm} />
      			    <Route path="/profile-details" component={SignUpFollowForm} />
                <Route path="/forgot-password" component={ForgotPassword} />
                <Route path="/reset-password" component={ResetPassword} />
                <Route path="/left-nav" component={LeftSideNavPanel} />
                <Route path="/refine-search" component={RefineSearch} />
                <Route path="/peer-review" component={PeerReview} />
      		  </Switch>
  			    <Footer />
			    </div>
		    </Router>
      </div>
    );
  }
}

export default App;
