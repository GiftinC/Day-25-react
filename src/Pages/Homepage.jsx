import { Cartcontext } from "./Context";
import ProductData from "/Products.json";
import { useContext } from "react";

const Homepage = () => {

    console.log(ProductData);
    const Globalstate = useContext(Cartcontext)
    console.log(Globalstate);
    const dispatch = Globalstate.dispatch;

    return (

        <div className="ProductsCart">
            <h4>ADD Products</h4>
            {ProductData.products.map((item, index) => {

                item.quantity = 1;
                return (
                    <div className="CombinedCart" key={index}>
                        <div className="ProductCart">
                            <img className="ProductImage" src={item.image} alt={item.title} />
                            <div className="Details">
                                <h4>{item.title}</h4>
                                <h4>{item.category}</h4>
                                <p style={{ textAlign: "left" }}>{item.description}</p>
                                <p>
                                    <b>Rating:</b>
                                    {item.rating.rate}
                                </p>
                                <p>
                                    <b>Rating Count:</b>
                                    {item.rating.count}
                                </p>
                            </div>

                            <div className="AddRemove">
                                <button onClick={() => dispatch({ type: "ADD", payload: item })}>Add to Cart</button>
                                <button onClick={() => dispatch({ type: 'REMOVE', payload: item })} >Remove</button>
                            </div>

                            <div className="Pricebox">
                                <h4>${item.price}</h4>
                            </div>

                        </div>
                        <div className="QuantityCart">

                            <div className="SubTotal">
                                <h4>Subtotal:</h4>
                                <h4>${item.price}</h4>
                            </div>
                            <div className="Shipping">
                                <h4>Shipping:</h4>
                                <h4>FREE</h4>
                            </div>

                        </div>
                    </div>
                )
            })}
        </div>
    );
};
export default Homepage;
