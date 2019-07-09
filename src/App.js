import React,{Component} from 'react';
import {Route, Router} from 'react-router-dom';
import { connect} from 'react-redux';

// import { alertActions } from './_actions';
// import { HomePage } from '../HomePage';Login;
import {Login} from './Login'
import { Registerpage } from './Register';

class App extends Component{
  constructor(props) {
    super(props);
    const {dispatch } =this.props;
  }

  render(){
    const {alert} =this.props;
    return(
      <div className="main">
        <div className="container">
                    <div className="col-sm-8 col-sm-offset-2">
                        {/* {alert.message &&
                            <div className={`alert ${alert.type}`}>{alert.message}</div>
                        } */}
                        <Router >
                            <div>
                                {/* <PrivateRoute exact path="/" component={HomePage} /> */}
                                <Route path="/login" component={Login} />
                                <Route path="/register" component={Registerpage} />
                            </div>
                        </Router>
                    </div>
                </div>

      </div>
    )
  }
}
function mapStateToProps(state){
  const {alert} = state;
  return {alert}
}
const connectedApp =connect(mapStateToProps)(App);

export {connectedApp as App};