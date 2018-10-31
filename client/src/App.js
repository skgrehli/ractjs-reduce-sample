import React, { Component } from 'react';
import Nav from './components/Nav';
import LoginForm from './components/LoginForm';
import SignupForm from './components/SignupForm';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import SignUpFollowupForm from './components/SignUpFollowupForm';
import SignUpInvestor from './components/SignUpInvestor';
import SignUpStartup from './components/SignUpStartup';
import SignUpInvestorInvestments from './components/SignUpInvestorInvestments';
import StartupCoreTeam from './components/StartupCoreTeam.js';
import StartupFinancials from './components/StartupFinancials.js';
import StartupSectors from './components/StartupSectors.js';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayed_form: '',
      logged_in: localStorage.getItem('token') ? true : false,
      username: ''
    };
  }

  componentDidMount() {
    if (this.state.logged_in) {
      fetch('http://localhost:8000/core/current_user/', {
        headers: {
          Authorization: `JWT ${localStorage.getItem('token')}`
        }
      })
        .then(res => res.json())
        .then(json => {
          this.setState({ username: json.username });
        });
    }
  }

  handle_login = (e, data) => {
    e.preventDefault();
    fetch('http://localhost:8000/token-auth/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(json => {
        localStorage.setItem('token', json.token);
        this.setState({
          logged_in: true,
          displayed_form: '',
          username: json.user.username
        });
      });
  };

  handle_signup = (e, data) => {
    e.preventDefault();
    fetch('http://localhost:8000/core/users/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(json => {
        localStorage.setItem('token', json.token);
        this.setState({
          logged_in: true,
          displayed_form: '',
          username: json.username
        });
      });
  };

  handle_logout = () => {
    localStorage.removeItem('token');
    this.setState({ logged_in: false, username: '' });
  };

  display_form = form => {
    this.setState({
      displayed_form: form
    });
  };

  render() {
    return (
	  <div className="App">
      	<Router>
      		<div>
      		<Header />  
			<Switch>
			    <Route exact path="/" component={Home} />  
			    <Route path="/login" component={LoginForm} />
			    <Route path="/signup" component={SignupForm} />
			    <Route path="/signup-next" component={SignUpFollowupForm} />
			    <Route path="/signup-investor" component={SignUpInvestor} />
			    <Route path="/signup-investor-investments" component={SignUpInvestorInvestments} />
			    <Route path="/signup-startup" component={SignUpStartup} />
			    <Route path="/signup-startup-core-team" component={StartupCoreTeam} />
			    <Route path="/signup-startup-financials" component={StartupFinancials} />
			    <Route path="/signup-startup-sector" component={StartupSectors} />
		  	</Switch>
			<Footer />
			</div>
		</Router>
      </div>
    );
  }
}

export default App;