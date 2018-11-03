import React, { Component } from 'react';
import './Footer.css';

/*TODO : 
1. [Cosmetic] Fix the subscription button and space acc to design
2. [Cosmetic] Update logo acc to design
*/

class Footer extends Component {
	render() {
		return(
			<div class="container" id="footer">
				<div class="row">
					<div class="col-xs-12 col-sm-4 col-md-4">
						<div class="row">
							<div class="img-responsive" id="footer-logo">
								<a href="#">
									<img src={ require('../../assets/logo/logo_white.png') } alt="logo" class="img-responsive"/>
								</a>
							</div>
						</div>
						<div class="row">
							<div id="footer-social">
								<ul class="list-unstyled list-inline social text-center">
			                        <li>
			                        	<a href="#">
			                        		<img src={ require('../../assets/images/facebook.png') } alt="logo" />
			                        	</a>
			                        </li> 
			                        <li>
			                        	<a href="#">
			                        		<img src={ require('../../assets/images/twiter.png') } alt="logo" />
			                        	</a>
			                        </li> 
			                        <li>
			                        	<a href="#">
			                        		<img src={ require('../../assets/images/in.png') } alt="logo" />
			                        	</a>
			                        </li> 
			                        <li>
			                        	<a href="#">
			                        		<img src={ require('../../assets/images/insta.png') } alt="logo" />
			                        	</a>
			                        </li> 
			                        <li>
			                        	<a href="#">
			                        		<img src={ require('../../assets/images/bloger.png') } alt="logo" />
			                        	</a>
			                        </li> 
			                    </ul>
		                    </div>
						</div>
						<div class="row">
							<div class="text-center" id="footer-links">
								<a href="https://www.blockseedinvestments.com/terms-of-use" target="_blank">Terms of Use</a> | <a href="https://www.blockseedinvestments.com/contact-us" target="_blank">Contact Us</a> | <a>Careers</a>
							</div>
						</div>
					</div>

					<div class="col-xs-12 col-sm-8 col-md-8" id="subscribe-group">
						<div class="row">
							<div class="text-center" id="footer-subscribe-text">
								<p>Subscribe to latest news and update from the global blockchain community.</p>
							</div>
						</div>
						<div class="row">
							<div class="text-center" id="footer-email-subscribe">
								<form class="form-inline" role="form">
			                      <input type="text" class="form-control mb-2 mr-sm-2" id="subscribe-email" placeholder="Enter Email Address" />
			                      <button type="button" class="form-control btn btn-default" id="subscribe-button">Subscribe</button>
			                    </form>
							</div>
						</div>
						<div class="row">
							<div class="text-center" id="footer-copyright">
								<p>Copyrights@blockseedinvestments {(new Date()).getFullYear()} &copy;</p>
							</div>
						</div>
					</div>
				</div>
			</div>
			);
	}
}

export default Footer;