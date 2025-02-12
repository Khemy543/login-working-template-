import React,{Component} from "react";
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import { ProductConsumer } from '../context';
import 'font-awesome/css/font-awesome.min.css';



export default class Product extends Component {
    render(){
        const {id, title, img ,price, inCart} = this.props.product;

        return(
            <ProductWrapper className = "col-9 mx-auto col-md-6 col-lg-3 my-3">
             <div className = "card">
                 <div className="img-container p-5" onClick={console.log("you clicked me")}>
                     <Link to ="/details">
                         <img src={img} alt="product" className="card-img-top"/>
                     </Link>

                     <button className="cart-btn fa fa-cart fa-4x" disabled={inCart ? true : false}
                     onClick={() => {console.log('added to cart');}}>
                     {inCart?(<p className="text-capitalize mb-0" disabled>
                         in Cart
                     </p>):<i className="fas fa-cart-plus"/>}  
                     </button>  
                     </div>
                     {/* card footer */}
                     <div className="card-footer d-flex justify-content-between">
                         <p className="align-self-center mb-0">
                             {title}
                         </p>
                         <h5 className="text-blue font-italic mb-0">
                             <span className="mr-1">GH¢</span>
                             </h5>
                             {price}
                         </div>
                         </div>                
            </ProductWrapper> 
     );         
    }
}


const ProductWrapper = styled.div`
  .card{
      border-color:transparent;
      transition:all 1s linear;

  }
  .card-footer{
      background:transparent;
      border-top: transparent;
      transition: all 0.6s linear;
  }
  &:hover{
      .card{
          border:0.04rem solid rgba(0,0,0,0.2);
          box-shadow:2px 2px 5px 0px rgba(0,0,0,0.2);  
      }
      .card-footer{
          background: rgba(247,247,247);
      }
  } 
  .img-container{
      position: relative;
      overflow:hidden; 
  }
  .card-img-top{
      transition: all 0.6s linear
  }
  .img-container:hover .card-img-top{
      transform: scale(1.2);
  }
  .cart-btn{
      position: absolute;
      bottom:0;
      right:0;
      padding: 0.2rem 0.4rem;
      background: #009ffd;
      border:none;
      color:#f3f3f3;
      font-size:1.4rem;
      border-raduis:0.5 0 0 0;
      }
  
      .cart-btn:hover{
          color:var(--mainBlue)
          cursor:pointer;
      }
`;
