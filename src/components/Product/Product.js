import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Product extends Component {
    handleClick = () => {
        const { id, addToCart, removeFromCart, isInCart } = this.props;

        if (isInCart) {
            removeFromCart(id);
        } else {
            addToCart(id);
        }
    }

    render() {
        const { product, price, currency, image, isInCart,  brand, weight} = this.props;

        return (
            <div className="product thumbnail">
                <img src={image} alt="product" width="100%" height="100%"/>
                <div className="caption text-center ">
                    <div>{brand}</div>
                    <h6 >{product}</h6>
                    <div>{weight}gm pouch</div>
                    <div className="product__price">{price} {currency}</div>
                    <div className="product__button-wrap">
                        <button
                            className={isInCart ? 'btn btn-danger' : 'btn btn-primary'}
                            onClick={this.handleClick}
                        >
                            {isInCart ? 'Remove' : 'Add to cart'}
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

Product.propTypes = {
    id: PropTypes.number.isRequired,
    product: PropTypes.string.isRequired,
    price: PropTypes.number,
    currency: PropTypes.string,
    image: PropTypes.string,
    isInCart: PropTypes.bool.isRequired,
    addToCart: PropTypes.func.isRequired,
    removeFromCart: PropTypes.func.isRequired,
}

export default Product;
