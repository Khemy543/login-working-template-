import React,{Component} from "react";
import {storeProducts , detailProduct} from './data';

const ProductContext = React.createContext();
//provider
//consumer


class ProductProvider extends Component {
    state ={
        products: storeProducts,
        detailProduct: detailProduct
     }

     handleDetail = () =>{
         console.log("details");
     }

     addToCart = () =>{
        console.log("add to caart");
    }

    render(){
        return(
            <ProductContext.Provider value = {{
                ...this.state,
                handleDetail: this.handleDetail,
                addToCart: this.addToCart
            }}>
             {this.props.children}                 
            </ProductContext.Provider> 
     );        
    }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider , ProductConsumer}