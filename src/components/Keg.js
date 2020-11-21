import React from "react";
import PropTypes from "prop-types";

function Keg(props){
  const kegStyles = {
    backgroundColor: "#FDE166"
  }
    return (
      <React.Fragment>
      
      <div style = {kegStyles}>
        <div onClick = {() => props.whenKegClicked(props.id)}>
          <h3>{props.name}</h3>
          <p>{props.brand} - <em>{props.flavor}</em></p>
          <h4>Price: ${props.price}.00</h4>
          <h4>Quantity Left: ${props.quantity}</h4> {/* test for quantity*/}
          <hr/>
        </div>
      </div>
    </React.Fragment>
  );
}

Keg.propTypes = {
    name: PropTypes.string.isRequired,
    brand: PropTypes.string.isRequired,
    flavor: PropTypes.string,
    price: PropTypes.number,
    quantity: PropTypes.number, // test for quantity
    id: PropTypes.string,
    whenKegClicked: PropTypes.func
};


export default Keg;