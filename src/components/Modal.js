import React, { Component } from 'react'
import styled from 'styled-components';
import {ProductConsumer} from '../context';
import {ButtonContainer} from './Button';
import {Link} from 'react-router-dom';

export default class Modal extends Component {
    render() {
        return (
            <ProductConsumer>
                {(value) =>{
                    const {modalOpen,closeModal} = value;
                    const {img,title,price} = value.modalProduct;
                    if(!modalOpen){
                        return null;
                    }
                    else{
                        return (
                            <ModalContainer>
                            <div className="row">
                                <div id ="modal" className="col-8 mx-auto col-md-6 col-lg-8 text-center text-capitalize ">
                                    <h5 className="mt-4 text-blue">
                                        Item Added to the cart
                                    </h5>
                                    <img src={img} className="img-fluid " alt="product"></img>
                                    <h5>{title}</h5>
                                    <h5 className="text-muted"> Price:${price}</h5>
                                    <Link to='/'>
                                        <ButtonContainer onClick = {()=>closeModal()}>
                                            Continue Shopping
                                        </ButtonContainer>
                                    </Link>
                                    <Link to='/cart'>
                                        <ButtonContainer cart onClick = {()=>closeModal()}>
                                            Go to cart
                                        </ButtonContainer>
                                    </Link>

                                </div>
                            </div>
                        </ModalContainer>
                        );
                    }
                    
                }}
            </ProductConsumer>
        )
    }
}
const ModalContainer = styled.div`
position:fixed;
// border-radius:1.5rem 0 0 0;
top:0;
left:0;
right:0;
bottom:0;
background:rgba(0,0,0,0.3);
display:flex;
align-items:center;
justify-content:center;
#modal{
    background:var(--mainWhite);

}
`;
