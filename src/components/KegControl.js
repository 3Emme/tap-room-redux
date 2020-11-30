import React from 'react';
import NewKegForm from "./NewKegForm";
import KegList from "./KegList";
import KegDetail from "./KegDetail";
import EditKegForm from "./EditKegForm";

class KegControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      kegListVisibleOnPage: true,
      formVisibleOnPage: false,
      masterKegList: [{name: "Main Bar 1", brand: "Quality Booch", flavor: "Persimmon", price: "9", quantity: "124", id:"1" }],
      selectedKeg: null,
      editing: false,
    };
    this.handleForwardClick = this.handleForwardClick.bind(this);
    this.handleButtonClick = this.handleButtonClick.bind(this); 
  }

  handleEditingKegInList = (kegToEdit) => {
    const editedMasterKegList = this.state.masterKegList
      .filter(keg => keg.id !== this.state.selectedKeg.id)
      .concat(kegToEdit);
    this.setState({
        masterKegList: editedMasterKegList,
        editing: false,
        selectedKeg: null
      });
  }

  handlePourCLick = (id) => {
    const editedMasterKegList = this.state.masterKegList;
    for (const keg of editedMasterKegList) {
      if (keg.id === id) {
        if (keg.quantity > 0) {
          keg.quantity -= 1;
        } else if (keg.quantity <= 0) {
          alert("Sorry, we're all out of "+keg.flavor)
        }
      }
    }
    this.setState({masterKegList: editedMasterKegList});
  }

handleEditClick = () => {
  console.log("handleEditClick Reached!");
  this.setState({editing: true});
}

handleChangingSelectedKeg = (id) => {
  const selectedKeg = this.state.masterKegList.filter(keg=>keg.id === id)[0];
  this.setState({selectedKeg:selectedKeg});
}
  
handleAddingNewKegToList = (newKeg) => {
  const newMasterKegList = this.state.masterKegList.concat(newKeg);
  this.setState({masterKegList: newMasterKegList,
                formVisibleOnPage:false});
}

  handleButtonClick = () => {
    
    if (this.state.selectedKeg != null) {
      this.setState({
        formVisibleOnPage: false,
        selectedKeg: null,
        editing: false
      });
    } else {
      this.setState(prevState => ({
        formVisibleOnPage: !prevState.formVisibleOnPage,
      }));
    }
  }

  handleDeletingKeg = (id) => {
    const newMasterKegList = this.state.masterKegList.filter(keg => keg.id !== id);
    this.setState({
      masterKegList: newMasterKegList,
      selectedKeg: null
    });
  }

  handleForwardClick = () => {
    
    if(this.state.kegListVisibleOnPage){
      this.setState({kegListVisibleOnPage: false, stepsVisibleOnPage: true})
      return;
    }
    else {
      this.setState({formVisibleOnPage: false, kegListVisibleOnPage: true})
      return;
    }
  }
  

  render() {
    let currentVisibleState = null;
    let addKegButton = null;
    let buttonText = null;
    
    if(this.state.editing ){
      currentVisibleState = <EditKegForm
      keg = {this.state.selectedKeg}
      onEditKeg = {this.handleEditingKegInList} />
      buttonText = "Cancel Edit";
    }
    else if (this.state.selectedKeg != null){
      currentVisibleState = <KegDetail
      keg = {this.state.selectedKeg}
      onClickingDelete = {this.handleDeletingKeg}
      onClickingEdit = {this.handleEditClick}
      onClickingPour = {this.handlePourCLick}/>
      buttonText = "Return to Keg List"
    }
    else if (this.state.formVisibleOnPage) {
      currentVisibleState = <NewKegForm onNewKegCreation={this.handleAddingNewKegToList}/>;
      buttonText = "Cancel Add Keg"; 
    } 
    else {
      currentVisibleState = <KegList kegList={this.state.masterKegList} onKegSelection={this.handleChangingSelectedKeg}/>;
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

export default KegControl;