import React from 'react';
import './cart.css'

const Cart = ({cart,handlerRemoveFromCart}) => {
    let massage;
    if(cart.length === 0){
        massage = <p>please add some product</p>
    }
    else{
       massage = <div>
            <h4>borolox</h4>
            <p>thanks for giving money</p>
        </div>
    }
    return (
        <div>
           <h2 className={cart.length === 1 ? 'red' : 'blue'}>order summary : {cart.length}</h2>
           {cart.length > 2 ? <span>aro kino</span>:<span className='purple'>fokinni</span>} 
           {massage}
           {
            cart.map(tshirt => <p
                key ={tshirt._id}
            >
                
            {tshirt.name} <button onClick={()=> handlerRemoveFromCart(tshirt._id)}>X</button>
            </p>)
           }
           {
            cart.length === 2 && <p>double</p>
           }
           {
            cart.length ==3 || <p>tinta to hoilo na</p>
           }
        </div>
    );
};

export default Cart;