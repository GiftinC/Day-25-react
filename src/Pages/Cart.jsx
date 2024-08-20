import { useContext } from "react";
import { Cartcontext } from "./Context";

const Cart = () => {

    const Globalstate = useContext(Cartcontext);
    const state = Globalstate.state;
    const dispatch = Globalstate.dispatch;

    const totalPrice = state.reduce((total, item) => {
        return total + item.price * item.quantity;
    }, 0);

    return (
        <div className="cards">{state.map((item, index) => {
            return (
                <div className="card" key={index}>

                    <div>
                    <img src={item.image} alt={item.title} />
                    <h5>{item.title}</h5>
                        <div className="Calc"><h6>{item.quantity}</h6><span>X</span> <h6>{item.price}</h6><span>=</span> <h6>$ {item.quantity * item.price} </h6>  </div>  
                        </div>
                    <div>

                        <button onClick={() => {
                            if (item.quantity > 1) {
                                dispatch({ type: "DEC", payload: item })
                            }
                            else {
                                dispatch({ type: "REMOVE", payload: item })
                            }
                        }
                        }>-</button>
                    <h6>{item.quantity}</h6>
                        <button onClick={() => dispatch({ type: "INC",payload:item })}>+</button>
                    </div>

                    <div>
                        <button onClick={()=> dispatch({type:'REMOVE',payload:item})}>Remove</button>
                    </div>

                </div>
            )
        })}
            {state.length > 0 && <div className="Total"><h3>TOTAL :</h3><h3>$ { totalPrice.toFixed(2)}</h3></div>}
        </div>
    )
}

export default Cart;