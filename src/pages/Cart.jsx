import React from 'react'

function Cart() {
    return (
        <div className='cart-container'>
            <div className="bar top-bar"></div>

            <div className="logo"><h3>Cadburry</h3></div>

            <div className="cart-heading"><h3>My Cart (1)</h3></div>

            <div className="item">
                <div className="item-image">
                    <img src="/UI/dariymilk.png" alt="dairy milk" />
                </div>

                <div className="item-info">
                    <div className="item-name">
                        <h3>Warm Wishes Silk Bar -Choose Your Mix</h3>
                    </div>

                    <div className="item-quantity">
                        <p>Quantity: 1</p>
                    </div>

                    <div className="delete-btn">
                        Delete
                    </div>
                </div>

                <div className="item-price"><h3>INR 450</h3></div>
            </div>

            <div className="cart-total">
                <div className="total-heading"><h3>Sub-Total</h3></div>
                <div className="total-amount"><h3>INR 450</h3></div>
            </div>

            <div className="tax-paragraph"><p>Prices inclusive of taxes</p></div>

            <div className="qr">
                <div className="qr-image-container"><img src="/qr.png" alt="" className="qr-image" /></div>
                <div className="qr-info"><p>Scan QR Code & Pay the Bill</p></div>
            </div>
            <div className="bar bottom-bar"></div>
        </div>
    )
}

export default Cart
