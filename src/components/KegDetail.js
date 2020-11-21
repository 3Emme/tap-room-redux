import React from "react";
import PropTypes from "prop-types";

function KegDetail(props) {
  const { keg, onClickingDelete } = props;

  return (
    <React.Fragment>
      <h1>Keg Detail</h1>
      {/* <h4>{keg.price}</h4>
      <h3>{keg.brand} -  {keg.name}</h3>
      <p><em>{keg.flavor}</em></p> */}
      <h3>{keg.name}</h3>
      <p>{keg.brand} - <em>{keg.flavor}</em></p>
      <h4>Price: ${keg.price}.00</h4>
      <h4>Quantity Left: {keg.quantity}</h4> {/* test for quantity*/}
      <button onClick= { props.onClickingEdit }>Update Keg</button>
      <button onClick={() => onClickingDelete(keg.id)}>Close Keg</button>
      <hr />
    </React.Fragment>
  );
}

KegDetail.propTypes = {
  keg: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func
};

export default KegDetail;