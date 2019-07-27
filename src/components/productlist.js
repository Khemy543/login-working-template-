import React,{Component} from "react";
import HomeNav from "../components/homenav";
import Product from '../components/product';
import {ProductConsumer} from '../context';
import "bootstrap/dist/css/bootstrap.min.css";



class ProductList extends Component {


    render(){
         return(
            <div>
               <HomeNav />
                <React.Fragment>
                
                    <div className = "py-5">
                        <div className="container">
                            <h1 style={{
                                fontWeight:"bold",
                                paddingTop:"30px",
                                textAlign:"center"
                            }}>Our Products</h1>
                            <div className="row">
                                <ProductConsumer>
                                {value => {
                                    console.log(value)
                                    return value.products.map( product => {
                                        return <Product key={product.id} product = {product}/>;
                                    });
                                }}
                                </ProductConsumer>
                                </div> 
                            </div>

                        </div>
                </React.Fragment>
            </div> 
     );        
    }
}
export default ProductList;