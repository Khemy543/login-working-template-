/* import React,{useState} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Image from "../images/Image.jpg";
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
        join my app now!!!
      </Typography>
    );
  }
  
  const useStyles = makeStyles(theme => ({
    root: {
      height: '100vh',
    },
    image: {
        backgroundImage: `url(${Image})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    },
    paper: {
      margin: theme.spacing(8, 4),
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
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  }));
  
  

  export default function Login() {
    
    const classes = useStyles();
    

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [toHome , setToHome] = useState(false);

    const handleSubmit = (e) =>{
      e.preventDefault();
      console.log(e);
       
    post('http://localhost:5000/users/login', {
      email, password
    }).then(res => {
      console.log(res.status);


      
      setTimeout(() => {setToHome(true)}, 1000);
     
             
    }).catch(console.log);

    
    }
    return (
      <div>
        {toHome ? <Redirect to='/homepage' /> : null}
        
        <Grid container component="main" className={classes.root}>
        <CssBaseline />
        <Grid item xs={false} sm={4} md={7} className={classes.image} />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <div className={classes.paper}>
            <Avatar className={classes.avatar}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <form className={classes.form} Validate onSubmit = {handleSubmit}>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                autoFocus
              />
              <TextField
                variant="outlined"
                margin="normal"
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
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="/signup" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
              <Box mt={5}>
                <MadeWithLove />
              </Box>
            </form>
          </div>
        </Grid>
      </Grid>
      </div>
    );
    }
   */


  import React,{Component} from "react";
  import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react';
  import 'semantic-ui-css/semantic.min.css';
  import {Link} from 'react-router-dom';
  import logo4 from '../images/logo4.png';
  import axios from 'axios';
  
 
  axios.defaults.withCredentials = true;
  const config = {
    withCredentials: true,
    headers : {
    "Access-Control-Allow-Origin":"http://localhost:4000",
    "Content-Type": "application/json"
    },

  };
  
  
  class Login extends Component {

    state = {
        email: '',
        password: '',
        message:''
      } 

      /* onChange = e => {
        e.persist();
        const state = this.state;
        state[e.target.name] = e.target.value;
        this.setState(state);
      };
    
      onSubmit = e => {
        e.persist();
        e.preventDefault();
        console.log(e);
        const { email: email, password: password } = this.state;
        
        var config = {
          withCredentials:true,
            headers:{
              'Content-Type' : 'application/json',
              'Access-Control-Allow-Origin':'http://localhost:4000',
              'Cache':'no-cache'
            },
            credentials:'same-origin',
            
        };
    
        post('http://localhost:4000/login', {
          email, password , config
        }).then(res => {
          console.log(res);
          console.log(res.data);
          let firstName = res.User.first_name;
          let lastName = res.User.last_name;
          let Status = res.status;
          this.setState({
            first_name:firstName,
            last_name: lastName,
            status: Status
          });
         
          if(res.status === 200){
            
            this.props.history.push("/homepage/"+res.User.id+"/"+res.User.first_name+res.User.last_name,
            {
              email:this.state.email , 
              first_name:this.state.first_name , 
              last_name:this.state.last_name , 
              status:this.state.status
            }
            ); 
          }
          else{
            alert(res.message);
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
       email: this.state.email,
       password: this.state.password
     }
     axios.post("http://localhost:4000/signin", user , config)
     .then(res =>{
       console.log(res);
       let results = res.data;
       console.log(results);
       if(results.status === 200){
        //alert(results.message);
        this.props.history.push("/hompage/"+results.user.id+"/"+results.user.firstname+results.user.lastname);
      }else{
        /* setTimeout(function(){ alert(results.message[0])}, 100);
        this.props.history.go(0); */
        this.setState({message:results.message[0]});
        console.log(this.state.message)
      }
    
     }).catch(console.log);
   } 

   
    render(){
    return (
      <form onSubmit={this.handleSubmit}>
      <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as='h2' color='grey' textAlign='center'>
          <Image src={logo4} style={{height:"50px", width:"50px"}} /> Log-in to your account
        </Header>
        <Form size='large'>
          <Segment stacked>
            <Form.Input fluid icon='user' iconPosition='left' placeholder='E-mail address'
            id="email"
            name="email"
            value={this.state.email}
            onChange={this.handleChange}
            required />
            <Form.Input
              fluid
              icon='lock'
              iconPosition='left'
              placeholder='password'
              type='password'
              id="password"
							name="password"
							value={this.state.password}
              onChange={this.handleChange}
              required
            />
            <label style={{
              color:'rgb(253, 122, 122)',
              display:'block',
              textAlign:'left'
            }}>{this.state.message}</label>
            <Button color='blue' fluid size='large'>
              Login
            </Button>
          </Segment>
        </Form>
        <Message>
          New to us? <Link to = "/signup"> Sign Up</Link>
        </Message>
      </Grid.Column>
    </Grid>
    </form>
    )
  };
  };
  
  export default Login;