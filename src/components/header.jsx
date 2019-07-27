import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom';
import logo4 from '../images/logo4.png'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    } from 'reactstrap';  
import {Button} from 'reactstrap';

class Header extends Component {
      
      

    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = {
          isOpen: false
        };
        
       }

     toggle() {
        this.setState({
          isOpen: !this.state.isOpen
        });
      }
  render() {
    return (
     
      <div>
          <Navbar color="light" light expand="md" position="static" fixed={`top`}> 
          <NavbarBrand href="/">
              <img alt="" src = {logo4} style={{height:"50px", width:"50px", marginTop:"-15px" , marginBottom:"-15px" }}/>
              <label style={{paddingLeft:"10px", fontSize:"20px", font:"bold"}}>my-App</label>
              </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
              <NavLink href="#">Tools</NavLink>
              
                </NavItem>   
              <NavItem>
                <NavLink href="/components/">Components</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
              </NavItem>
              <NavItem>
              <Link to ="/login"><Button color="secondary" active>Get Started</Button></Link>
                </NavItem>
             
            </Nav>
          </Collapse>
        </Navbar>
      </div>
      
    );
  }
}

export default Header;