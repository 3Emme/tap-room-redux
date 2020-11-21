import React from "react";
import PropTypes from "prop-types";

function ReusableForm(props) {
  return (
    <React.Fragment>
      <form onSubmit={props.formSubmissionHandler}>
        <input
          type='text'
          name='name'
          placeholder='Keg Name' required/>
        <input
          type='text'
          name='brand'
          placeholder='Keg Brand' required/>
        <input
          type='text'
          name='flavor'
          placeholder='Keg Flavor' required/>
          <input
          type='number'
          name='price'
          placeholder='Keg Price' required/>
          <input // test for quantity
          type='number' // test for quantity
          name='quantity' // test for quantity
          placeholder= 'Standard: 124' required/>
        <button type='submit'>{props.buttonText}</button>
      </form>
    </React.Fragment>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default ReusableForm;