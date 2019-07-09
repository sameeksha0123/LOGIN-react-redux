
// import React ,{Component} from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import AppBar from '@material-ui/core/AppBar';
// import Toolbar from '@material-ui/core/Toolbar';
// import Typography from '@material-ui/core/Typography';
// import Button from '@material-ui/core/Button';
// import IconButton from '@material-ui/core/IconButton';
// // import MenuIcon from '@material-ui/icons/Menu';
// import TextField from '@material-ui/core/TextField';

// class Login extends Component{
 
//   render(){
//     // const {handle,submit}=this.props;
//   return (
//     <div >
//       <AppBar position="static">
//         <Toolbar>
//           <IconButton edge="start"  color="inherit" aria-label="Menu">
//             {/* <MenuIcon /> */}
//           </IconButton>
//           <Typography variant="h6" >
//             News
//           </Typography>
//           <Button color="inherit">Login</Button>
//         </Toolbar>
//       </AppBar>
//       <TextField
//         id="name"
//         label="Name"
//         value={this.props.value}
//         onChange={this.props.handleChange}
//         margin="normal"
//       />
//       <br/>
//       <TextField
//         id="password"
//         label="password"
//         value={this.props.value}
//         onChange={this.props.handleChange}
//         margin="normal"
//       />
// <br/>
// <Button variant="contained" color="primary" onClick={this.props.onSubmit} >
//         Primary
//       </Button>
//     </div>
//   )}
// }
// export default Login;


import React ,{Component} from 'react';
import {connect} from 'react-redux';
import {userConstants} from './_constants/user.constants';
// import {userActions} from './_actions/'
import {Link} from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
// import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
})); 


class Login extends Component{

  constructor(props){
    super(props);

    this.props.dispatch(userActions.logout());
    this.state={
        username:'',
        password:'',
        submitted: false,
    }
    // this.handleChange= this.handleChange.bind(this);
    // this.handleSubmit= this.handleSubmit.bind(this);

  }
  handleChange=( e)=>{
    const {name,value}=  e.target;
    this.setState({
        [name]:value
     })
  }
  handleSubmit= (e) =>{
    e.preventDefault();

    this.setState({ submitted:true});
    const {username,password} =this.state;
    const {dispatch} = this.props;

    if(username && password){
      dispatch(userActions.login(username,password))
    }
  }
  render(){
    const { loggingIn }=this.props;
    const {username, password, submitted }=this.state;
    return(
<div className="main">
    <h2>LOGIN</h2>
    <form name="form" onSubmit={this.handleSubmit}>

      <div className={"form-group" + (submitted && !username ? 'has-error' : '')}>
      <label htmlFor="username">Username</label>
    <input type="text" className="form-control" name="username" value={username} onChange={this.handleChange} />
    {submitted && !username &&
      <div className="help-block">Username is required</div>
    }
      </div>
      <div className={"form-group" + (submitted && !password ? 'has-error' : '')}>
      <label htmlFor="password">Username</label>
    <input type="password" className="form-control" name="password" value={password} onChange={this.handleChange} />
    {submitted && !password &&
      <div className="help-block">Password is required</div>
    }
    <div className="form-group">
                        <button className="btn btn-primary">Login</button>
                        {loggingIn &&
                            <img src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />
                        }
                        <Link to="/register" className="btn btn-link">Register</Link>
                    </div>
      </div>

    
    </form>
  </div>


    )
  }
}
function mapStateToProps(state){
  const {loggingIn} =state.authentication;
  return{
    loggingIn
  }
}

const connectedLoginPage = connect(mapStateToProps)(Login);
export {connectedLoginPage as Login};