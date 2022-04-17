import React from 'react';
import './Checkout.css'

const Checkout = ({buyPackage}) => {
    console.log(buyPackage);
    return (
        <div>
          {
              <img src={buyPackage.Img} alt="" />
          }
        </div>
    );
};

export default Checkout;