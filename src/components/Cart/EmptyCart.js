import React from 'react'

export default function EmptyCart() {
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-10 mx-auto text-center text-title">
                    <h1>Your cart is currently empty</h1>
                    <div className="col-10 mx-auto text-center text-title text-uppercase pt-5">
                        <h1>Go to <strong className="text-blue">product</strong> and enjoy shopping</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}
