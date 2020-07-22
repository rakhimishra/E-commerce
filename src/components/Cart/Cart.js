import React, { Component } from 'react';
import Title from '../Title';
import CartColumns from './CartColumns';
import EmptyCart from './EmptyCart';
import {ProductConsumer} from '../../context';
import CartList from './CartList';
import CartTotals from './CartTotals';
export default class Cart extends Component {
    render() {
        return (
            <section>
                <ProductConsumer>
                    {value =>{
                        const {cart} = value;
                        if (cart.length>0){
                            return (
                                <React.Fragment>
                                    <div className="col-10 mx-auto text-center text-title text-uppercase pt-5">
                                        <h1>your <strong className="text-blue">cart
                                    </strong></h1>
                                    </div>
                                    <CartColumns />
                                    <CartList value={value}/>
                                    <CartTotals value={value} history={this.props.history}/>

                                </React.Fragment>
                                
                            );
                            
                        }
                        else {
                            return <EmptyCart />;
                        }
                    }}
                </ProductConsumer>
               {/* <title name="Your" title="cart"></title> */}
               
               

               
            </section>
        );
    }
}
