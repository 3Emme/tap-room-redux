import React from "react";
import { v4 } from 'uuid';
import PropTypes from 'prop-types';
import ReusableForm from "./ReusableForm";

function NewKegForm(props){
  function handleNewKegFormSubmission(event){
    event.preventDefault();
    props.onNewKegCreation({name: event.target.name.value, brand: event.target.brand.value, flavor: event.target.flavor.value, price: event.target.price.value, id: v4()});
    console.log(event.target.name.value);
    console.log(event.target.brand.value);
    console.log(event.target.flavor.value);
    console.log(event.target.price.value);
    console.log(event.target.id.value);
  }
  return (
    <React.Fragment>
      <ReusableForm
      formSubmissionHandler={handleNewKegFormSubmission}
      buttonText="Add Keg" />
    </React.Fragment>
  );
}

NewKegForm.propTypes = {
  onNewKegCreation: PropTypes.func
};

export default NewKegForm;