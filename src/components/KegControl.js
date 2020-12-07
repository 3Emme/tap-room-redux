import React from 'react';
import NewKegForm from "./NewKegForm";
import KegList from "./KegList";
import KegDetail from "./KegDetail";
import EditKegForm from "./EditKegForm";
import PropTypes from 'prop-types';
import { connect } from "react-redux";


class KegControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      // kegListVisibleOnPage: true,
      // formVisibleOnPage: false,
      // masterKegList: [{name: "Main Bar 1", brand: "Quality Booch", flavor: "Persimmon", price: "9", quantity: "124", id:"1" }],
      // selectedKeg: null,
      // editing: false,
    };
    this.handleForwardClick = this.handleForwardClick.bind(this);
    this.handleButtonClick = this.handleButtonClick.bind(this); 
  }

  handleEditingKegInList = (kegToEdit) => {
    const { dispatch } = this.props;
    const { name, brand, flavor, price, quantity, id } = kegToEdit;
    // const editedMasterKegList = this.props.masterKegList
    //   .filter(keg => keg.id !== this.props.selectedKeg.id)
    //   .concat(kegToEdit);
    // this.setState({
    //     masterKegList: editedMasterKegList,
    //     // editing: false,
    //     // selectedKeg: null
    //   });
      const action1 = {
        type: 'TOGGLE_EDITING'
      };
      const action2 = {
        type: 'TOGGLE_KEG_LIST'
      }
      const action3 = {
        type: 'DESELECT_KEG'
      };
      const action4 = {
        type: 'UPDATE_KEG',
        name: name,
        brand: brand,
        flavor: flavor,
        price: price,
        quantity: quantity,
        id: id
      };
      dispatch(action1);
      dispatch(action2);
      dispatch(action3);
      dispatch(action4);
  }

  // handlePourCLick = (id) => {
  //   const editedMasterKegList = this.props.masterKegList;
  //   for (const keg of editedMasterKegList) {
  //     if (keg.id === id) {
  //       if (keg.quantity > 0) {
  //         keg.quantity -= 1;
  //       } else if (keg.quantity <= 0) {
  //         alert("Sorry, we're all out of "+keg.flavor)
  //       }
  //     }
  //   }
  //   this.setState({masterKegList: editedMasterKegList});
  // }
  //taking this out to try feeding the whole keg into the handlepourclick instead of just id
  handlePourCLick = (kegToPour) => {
    const { dispatch } = this.props;
    const { name, brand, flavor, price, quantity, id } = kegToPour;
    const action1 = {
      type: 'POUR_KEG',
      name: name,
      brand: brand,
      flavor: flavor,
      price: price,
      quantity: quantity,
      id: id
    };
    for (const keg in this.props.masterKegList) {
      if (keg.id === kegToPour.id) {
        if (keg.quantity > 0) {
          dispatch(action1);
          break;
        } else if (keg.quantity <= 0) {
          alert("Sorry, we're all out of "+keg.flavor);
          break;
        }
      }
    }
  }

  handleEditClick = () => {
    const { dispatch } = this.props;
    console.log("handleEditClick Reached!");
    // this.setState({editing: true});
    const action1 = {
      type: 'TOGGLE_EDITING'
    };
    dispatch(action1);
  }

  handleChangingSelectedKeg = (id) => {
    const { dispatch } = this.props;
    const selectedKeg = this.props.masterKegList.filter(keg=>keg.id === id)[0];
    const { name, brand, flavor, price, quantity } = selectedKeg;
    const action1 = {
      type: 'TOGGLE_KEG_LIST'
    }
    const action2 = {
      type: 'SELECT_KEG',
      name: name,
      brand: brand,
      flavor: flavor,
      price: price,
      quantity: quantity,
      id: id
    }
    dispatch(action1);
    dispatch(action2);
    this.setState({selectedKeg:selectedKeg});
  }
  
  handleAddingNewKegToList = (newKeg) => {
    const { dispatch } = this.props;
    const { name, brand, flavor, price, quantity, id } = newKeg;
    const action1 = {
      type: 'TOGGLE_FORM'
    }
    const action2 = {
      type: 'TOGGLE_KEG_LIST'
    }
    const action3 = {
      type: 'ADD_KEG',
        name: name,
        brand: brand,
        flavor: flavor,
        price: price,
        quantity: quantity,
        id: id,
      };
      dispatch(action1);
      dispatch(action2);
      dispatch(action3);
    }

  handleButtonClick = () => {
    const { dispatch } = this.props;
    const action1 = {
      type: 'TOGGLE_FORM'
    };
    const action2 = {
      type: 'TOGGLE_EDITING'
    };
    const action3 = {
      type: 'TOGGLE_KEG_LIST'
    }
    const action4 = {
      type: 'DESELECT_KEG'
    }
    if (this.props.editing === true){
      dispatch(action2);
    } else if (this.props.selectedKeg != null) {
      // dispatch(action1); dont think i need these two
      // dispatch(action2);
      dispatch(action3);
      dispatch(action4);
      this.setState({
        // formVisibleOnPage: false,
        // selectedKeg: null,
        // editing: false
      });
    } else { //add keg button form
      dispatch(action1);
      dispatch(action3);
      // this.setState(prevState => ({
      //   formVisibleOnPage: !prevState.formVisibleOnPage,
      // }));
    }
  }

  handleDeletingKeg = (id) => {
    const { dispatch } = this.props;
    const action1 = {
      type: 'DESELECT_KEG'
    }
    const action2 = {
      type: 'DELETE_KEG',
      id: id,
    }
    // const newMasterKegList = this.props.masterKegList.filter(keg => keg.id !== id);
    // this.setState({
    //   masterKegList: newMasterKegList,
    //   // selectedKeg: null
    // });
    dispatch(action1);
    dispatch(action2);
  }

  handleForwardClick = () => {
    const { dispatch } = this.props;
    const action1 = {
      type: 'TOGGLE_KEG_LIST'
    }
    dispatch(action1);
    const action2 = {
      type: 'TOGGLE_FORM'
    }
    dispatch(action2);
    // if(this.props.kegListVisibleOnPage){
    //   this.setState({kegListVisibleOnPage: false, stepsVisibleOnPage: true})
    //   return;
    // }
    // else {
    //   this.setState({formVisibleOnPage: false, kegListVisibleOnPage: true})
    //   return;
    // }
    // if(this.props.kegListVisibleOnPage){
    //   this.setState({stepsVisibleOnPage: true})
    //   return;
    // }
    // else {
    //   this.setState({formVisibleOnPage: false})
    //   return;
    // }
  }
  

  render() {
    let currentVisibleState = null;
    let addKegButton = null;
    let buttonText = null;
    
    if(this.props.editing ){
      currentVisibleState = <EditKegForm
      keg = {this.props.selectedKeg}
      onEditKeg = {this.handleEditingKegInList} />
      buttonText = "Cancel Edit";
    }
    else if (this.props.selectedKeg != null){
      currentVisibleState = <KegDetail
      keg = {this.props.selectedKeg}
      onClickingDelete = {this.handleDeletingKeg}
      onClickingEdit = {this.handleEditClick}
      onClickingPour = {this.handlePourCLick}/>
      buttonText = "Return to Keg List"
    }
    else if (this.props.formVisibleOnPage) {
      currentVisibleState = <NewKegForm onNewKegCreation={this.handleAddingNewKegToList}/>;
      buttonText = "Cancel Add Keg"; 
    } 
    else {
      currentVisibleState = <KegList kegList={this.props.masterKegList} onKegSelection={this.handleChangingSelectedKeg}/>;
      buttonText = "Add Keg"; 
      addKegButton = <button onClick={this.handleForwardClick}>Add keg</button> 
    }
    return (
      <React.Fragment>
        {currentVisibleState}
        <button class="addKegButton" onClick={this.handleButtonClick}>{buttonText}</button>
      </React.Fragment>
    );
  }
} 

KegControl.propTypes = {
  kegListVisibleOnPage: PropTypes.bool,
  formVisibleOnPage: PropTypes.bool,
  masterKegList: PropTypes.array,
  selectedKeg: PropTypes.object, // unsure?
  editing: PropTypes.bool,
}

const mapStateToProps = state => {
  return {
    kegListVisibleOnPage: state.kegListVisibleOnPage,
    formVisibleOnPage: state.formVisibleOnPage,
    masterKegList: state.masterKegList,
    selectedKeg: state.selectedKeg,
    editing: state.editing,
  }
}

KegControl = connect(mapStateToProps)(KegControl);

export default KegControl;