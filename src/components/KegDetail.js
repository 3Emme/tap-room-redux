import React from "react";
import PropTypes from "prop-types";

function KegDetail(props) {
  const { keg, onClickingDelete } = props;

  return (
    <React.Fragment>
      <div class="keg">
        <h1>Keg Detail</h1>
        {/* <h4>{keg.price}</h4>
        <h3>{keg.brand} -  {keg.name}</h3>
        <p><em>{keg.flavor}</em></p> */}
        <h3>{keg.name}</h3>
        <p>{keg.brand} - <em>{keg.flavor}</em></p>
        <h4>Price: ${keg.price}.00</h4>
        <h4>Quantity Left: {keg.quantity}<button onClick={() => props.onClickingPour(keg)}>Pour!</button></h4>
        <button onClick= { props.onClickingEdit }>Update Keg</button>
        <button onClick={() => onClickingDelete(keg.id)}>Close Keg</button>
      </div>
    </React.Fragment>
  );
}

KegDetail.propTypes = {
  keg: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func,
  onClickingPour: PropTypes.func
};

export default KegDetail;