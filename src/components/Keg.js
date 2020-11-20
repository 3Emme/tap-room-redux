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
          <h4>{props.price}</h4>
          <h3>{props.brand} - {props.name}</h3>
          <p><em>{props.flavor}</em></p>
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
    id: PropTypes.string,
    whenKegClicked: PropTypes.func
};


export default Keg;