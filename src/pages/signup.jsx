/* import React,{useState} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import {Redirect} from 'react-router-dom';


async function post(url, data) {
	try {
		const res = await fetch(url, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(data)
		});
		const resdata = await res.json();
		return resdata;
	} catch (error) {
		return error;
	}
}

function MadeWithLove() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      join my app now
    </Typography>
  );
}

const useStyles = makeStyles(theme => ({
  '@global': {
    body: {
      backgroundColor: theme.palette.common.white,
    },
  },
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignUp() {
  const classes = useStyles();

  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [toLogin , setToLogin] = useState(false);

  const handleSubmit = (e) =>{
    e.preventDefault();
    console.log(e);
  
  post("http://localhost:5000/signup", {
    firstname, lastname, email, password
  }).then(res => {
    console.log(res);
    }).catch(console.log);
}
  


  return (
    <div>
      {toLogin ? <Redirect to='/login'/> : null}
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form className={classes.form} Validate onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="firstname"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="First Name"
                value={firstname}
                onChange={e => setFirstName(e.target.value)}
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastname"
                value={lastname}
                onChange={e => setLastName(e.target.value)}
                autoComplete="lname"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                autoComplete="current-password"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Re-type Passord"
                type="password"
                id="password"
                autoComplete="current-password"
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="I want to receive inspiration, marketing promotions and updates via email."
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={handleSubmit}
          >
            Sign Up
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link href="/login" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={5}>
        <MadeWithLove />
      </Box>
    </Container>
    </div>
  );
} */
import React,{Component} from "react";
  import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react';
  import 'semantic-ui-css/semantic.min.css';
  import logo4 from '../images/logo4.png';
  import {Link} from 'react-router-dom';
  import axios from 'axios';


  axios.defaults.withCredentials = true;
  const config = {
    withCredentials: true,
    headers : {
    "Access-Control-Allow-Origin":"http://localhost:4000",
    "Content-Type": "application/json"
    },

  };


class SignUp extends Component {

  state = {
    firstname:'',
    lastname:'',
    email: '',
    password: '',
    message:''
  } 


 /*  onChange = e => {
    e.persist();
    const state = this.state;
    state[e.target.name] = e.target.value;
    this.setState(state);
  };

  onSubmit = e => {
    e.persist();
    e.preventDefault();
    console.log(e);
    const {first_name:first_name, last_name:last_name, email: email, password: password } = this.state;
    
    var config = {
        headers:{
          'Content-Type' : 'application/json'
        }
    };

    post('http://localhost:5000/users/register', {
     first_name,last_name, email, password
    }).then(res => {
      console.log(res);
      if(res.status === 200){
        alert(res.message);
        this.props.history.push("/login");
      }else{
        setTimeout(function(){ alert(res.message)}, 100);
				this.props.history.go(0);
      }
      }).catch(console.log);

          
  }; */

  handleChange = event => {
    this.setState({[event.target.name]: event.target.value });
  }

  handleSubmit = event => {
    event.preventDefault();

    const user = {
      firstname: this.state.firstname,
      lastname: this.state.lastname,
      email: this.state.email,
      password: this.state.password

    }
    axios.post("http://localhost:4000/signup", user , config)
    .then(res =>{
      console.log(res);
      let results = res.data;
      console.log(results);
      if(results.status === 200){
        alert(results.message);
        this.props.history.push("/login");
      }else{
        /* setTimeout(function(){ alert(results.message[0])}, 100);
        this.props.history.go(0);*/
        this.setState({message:results.message[0]});
      } 
      
     
    }).catch(console.log);
  } 
 
  render(){
  return (
    <form onSubmit={this.handleSubmit}>
    <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
    <Grid.Column style={{ maxWidth: 450 }}>
      <Header as='h2' color='grey' textAlign='center'>
        <Image src={logo4} style={{height:"50px", width:"50px"}} /> Register to myApp
      </Header>
      <Form size='large'>
        <Segment stacked>
        <Form.Input
            fluid
            icon='user'
            iconPosition='left'
            placeholder='First Name'
            type='text'
            id="first_name"
            name="firstname"
            onChange={this.handleChange}
            value={this.state.firstname}
            required
          />
          <Form.Input
            fluid
            icon='user'
            iconPosition='left'
            placeholder='Last Name'
            type='text'
            id="last_name"
            name="lastname"
            onChange={this.handleChange}
            value={this.state.lastname}
            required
          />
  
          <Form.Input fluid icon='mail' iconPosition='left' placeholder='E-mail address'
          id="email"
          name="email"
          onChange={this.handleChange}
          value={this.state.email}
          required />
          <Form.Input
            fluid
            icon='lock'
            iconPosition='left'
            placeholder='password'
            type='password'
            id="password"
            name="password"
            onChange={this.handleChange}
            value={this.state.password}
            required
          />
          <label style={{
              color:'rgb(253, 122, 122)',
              display:'block',
              textAlign:'left'
            }}>{this.state.message}</label>

          <Button color='blue' fluid size='large'>
            Sign Up
          </Button>
        </Segment>
      </Form>
      <Message>
        Already have an account? <Link to='/login'>Login</Link>
      </Message>
    </Grid.Column>
  </Grid>
  </form>
  )
};
};

export default SignUp;