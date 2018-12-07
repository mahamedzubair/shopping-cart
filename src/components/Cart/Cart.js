import React from 'react';
import PropTypes from 'prop-types';
import CartItem from './CartItem';

const Cart = ({ items, total, currency, removeFromCart }) => {
    return (
        <div className="cart-container">
            <h5>Your Cart Summary</h5>
            <div className="row">
                <div className="col-sm text-center">
                    items in cart<br/>
                    {items.length}
                </div>
                <div className="col-sm text-center">
                    Total Rs.<br/>
                    {total} {currency}
                </div>
            </div>
            <hr/>
            <div className="cart">
                <div className="panel panel-default">
                    <div className="panel-body">
        
                        {items.length > 0 && (
                            <div className="cart__body">
                                <div className="row">
                                    <div className="col-sm">
                                    Item
                                    </div>
                                    <div className="col-sm">
                                        Quantity
                                    </div>
                                    <div className="col-sm">
                                        Total Rs.
                                    </div>
                                    <div className="col-sm">
                                    </div>
                                </div>
                                {items.map(item => (
                                    <CartItem className="clearfix" key={item.id} {...item} onClick={() => removeFromCart(item.id)} />
                                ))}
                            </div>
                        )}
                        {items.length === 0 && (
                            <div className="alert alert-info">Cart is empty</div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

Cart.propTypes = {
    items: PropTypes.array,
    total: PropTypes.number,
    currency: PropTypes.string,
    removeFromCart: PropTypes.func.isRequired
}

export default Cart;
