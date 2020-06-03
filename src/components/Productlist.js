import React, { Component } from 'react'
import Product from './Product';

import {ProductConsumer} from '../context';
import Title from './Title';
export default class Productlist extends Component {
    
    render() {
        // console.log(this.state.product)
        return (
            <React.Fragment>
                <div className="py-5">
                    <div className="container">
                    <div className="col-10 mx-auto text-center text-title text-uppercase pt-5">
                        <h1>our <strong className="text-blue">products
                        </strong></h1>
                    </div>
                        
                        <div className="row">
                            <ProductConsumer>
                                {value=>{
                                    return value.products.map(product=>{
                                        return <Product key={product.id} product={product} />;
                                    });
                                }}
                            </ProductConsumer>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

