import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
        <section id="footer">
          <div class="container">
            <div class="row text-center text-xs-center text-sm-left text-md-left">
              <div class="col-xs-12 col-sm-4 col-md-4">
                <div class="footer-left">
                  <div class="footer-logo">
                     <a href="/"><img src={ require('../logo.png') } alt="logo" class="logo" class="img-responsive"  /></a>
                  </div>
                  <br />
                  <div class="row">
                    <div class="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-5">
                      <ul class="list-unstyled list-inline social text-center">
                        <li><a href="#"><img src={ require('../facebook.png') } alt="logo" /></a></li> 
                        <li><a href="#"><img src={ require('../twiter.png') } alt="logo" /></a></li> 
                        <li><a href="#"><img src={ require('../in.png') } alt="logo" /></a></li> 
                        <li><a href="#"><img src={ require('../insta.png') } alt="logo" /></a></li> 
                        <li><a href="#"><img src={ require('../bloger.png') } alt="logo" /></a></li> 
                      </ul>
                    </div>
                  </div>
                  <div class="row">
                    <a target="_blank" href="https://www.blockseedinvestments.com/terms-of-use">Terms of use</a> | 
                    <a target="_blank" href="https://www.blockseedinvestments.com/contact-us"> Contact us</a> | 
                    <a target="_blank" href="#"> Careers</a>
                  </div>
                </div>
                <br />
              </div>
              <div class="col-xs-12 col-sm-4 col-md-8">
                <div class="col-md-12">
                  <div class="email-subscription">
                    <p>Subscribe to the latest news and updates from the global blockchain community</p>
                    <form class="form-inline" role="form">
                      <input type="text" class="form-control mb-2 mr-sm-2" id="pwd2" placeholder="Enter Email Address" />
                      <button type="button" class="btn btn-primary mb-2">Subscribe</button>
                    </form>
                    <p>Copyright &copy; {(new Date()).getFullYear()} Blockseed Investments</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      );
  }
}

export default Footer;
