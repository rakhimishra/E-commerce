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
                                    <h1 className="text-blue text-center my-5"> YOUR CART </h1>
                                    <CartColumns />
                                    <CartList value={value}/>
                                    <CartTotals value={value}/>
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
