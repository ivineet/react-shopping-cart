import React, {Component} from "react";

export default class Products extends Component{
    render(){
        return(
            <div>
                <ul className="products">
                    {this.props.products.map(product => (
                        <li key={product._id}>
                            <div className="product">
                                <a href={"#"+product._id}>
                                    <img src={product.image} alt={product.description}></img>
                                    <p>{product.title}</p>
                                </a>

                                <div className="product-price">
                                    <div>{product.price}</div>
                                    
                                </div>

                                <button onClick={() => this.props.addToCart(product)} 
                                    className="button primary"
                                >
                                    Add to Cart
                                </button>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}