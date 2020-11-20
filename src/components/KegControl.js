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
      masterKegList: [],
      selectedKeg: null,
      editing: false,
    };
    this.handleForwardClick = this.handleForwardClick.bind(this);
    this.handleBackClick = this.handleBackClick.bind(this); 
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

  handleBackClick = () => {
    
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
    let buttonBackText = null;
    let buttonForwardText = null;
    let addKegButton = null;
    let buttonText = null;
    
    if(this.state.editing ){
      currentVisibleState = <EditKegForm
      keg = {this.state.selectedKeg}
      onEditKeg = {this.handleEditingKegInList} />
      buttonText = "Return to Keg List";
    }
    else if (this.state.selectedKeg != null){
      currentVisibleState = <KegDetail
      keg = {this.state.selectedKeg}
      onClickingDelete = {this.handleDeletingKeg}
      onClickingEdit = {this.handleEditClick}/>
      buttonBackText = "Return to Keg List"
    }
    else if (this.state.formVisibleOnPage) {
      currentVisibleState = <NewKegForm onNewKegCreation={this.handleAddingNewKegToList}/>;
      buttonBackText = "Return to Minutes"; 
      buttonForwardText = "Return to Keg List"; 
    } 
    else {
      currentVisibleState = <KegList kegList={this.state.masterKegList} onKegSelection={this.handleChangingSelectedKeg}/>;
      buttonBackText = "Add Keg"; 
      buttonForwardText = "Go to Steps"; 
      addKegButton = <button onClick={this.handleForwardClick}>Add keg</button> 
    }
    return (
      <React.Fragment>
        {currentVisibleState}
        <button onClick={this.handleBackClick}>{buttonBackText}</button>
        <button onClick={this.handleForwardClick}>{buttonForwardText}</button>
      </React.Fragment>
    );
  }
} 

export default KegControl;