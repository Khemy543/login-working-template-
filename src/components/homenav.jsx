import React,{Component} from "react";
import { Link } from "react-router-dom";
import logo4 from '../images/logo4.png';
import AddShoppingCart from '@material-ui/icons/AddShoppingCart';
import IconButton from '@material-ui/core/IconButton';
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


class HomeNav extends Component {
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

    render(){
        return(
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
                <Link to ="/store">
                <IconButton>
                            <AddShoppingCart
                                fontSize="inherit"
                                style={{ fontSize: "30px" , color:"rgb(0, 99, 248)" }}
                            />
                                </IconButton>
                </Link>
                  </NavItem>
               
              </Nav>
            </Collapse>
          </Navbar>
        </div>
     );        
    }
}
export default HomeNav;