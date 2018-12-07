import React from 'react';
import PropTypes from 'prop-types';

const CartItem = ({ product, price, currency, onClick, brand, quantity }) => {
    return (
        <div className="cart-item">
            <div className="row">
                <div className="col-sm">
                    {brand}<br/>
                    {product}
                </div>
                <div className="col-sm">
                    {quantity}
                </div>
                <div className="col-sm">
                    {price} {currency}
                </div>
                <div className="col-sm">
                    <button className="btn btn-link btn-xs" onClick={onClick}>Remove</button>
                </div>
            </div>
        </div>
    );
}

CartItem.propTypes = {
    product: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    currency: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
}

export default CartItem;
