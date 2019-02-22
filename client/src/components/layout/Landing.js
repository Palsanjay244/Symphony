import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';


class Landing extends Component {
   componentDidMount() {
     if (this.props.auth.isAuthenticated) {
       this.props.history.push('/dashboard');
     }
   }
  render() {
    
    return (
      
  <div class="landing">
          <div class="dark-overlay landing-inner text-light">
            <div class="container">
              <div class="row">
                < div class = "col-md-12 text-center" >
                < div class = "jumbotron dark-overlay" >
                    <h1 class="display-7">Symphony</h1>
                     < p class = "display-5 mb-4" > "Without music, life would be a mistake”
                     </p> 
                    <p class = "display-4 mb-4" > ―Friedrich Nietzsche </p>
                    <hr class="my-4" />
                    
                    < Link to = "/register"
                   className = "btn btn-lg btn-info mr-2   btn btn-outline-warning" >
                  Sign Up
                </Link>
                < Link to = "/login"
                className = "btn btn-lg btn-info mr-2   btn btn-outline-warning" >
                  Login
                </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    );
  }
}

Landing.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(Landing);
